// Variables globales
let currentAnswer = "";
let isReversed = false;

let currentSort = 'alpha';
let isReverse = false;
let currentWord = null;
let currentOralWord = null;
let attemptsLeft = 0;

let translateReversed = false; // Translate


// --- ACTIVATION DU MODE HORS LIGNE ---
if ('service-worker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('Service Worker installé avec succès ! Scope:', reg.scope))
            .catch(err => console.error('Échec de l’installation du Service Worker:', err));
    });
}

// Force le chargement des voix au démarrage sur PC
window.speechSynthesis.getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

// Charger les données et les scores au démarrage
function loadProgress() {
    const saved = localStorage.getItem('polyglotte_progress');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(lang => {
            if (DATA[lang]) {
                parsed[lang].forEach((item, i) => {
                    if (DATA[lang][i]) {
                        // Centralisation des 4 compteurs
                        DATA[lang][i].score = item.score || 0;         // Réussite Texte
                        DATA[lang][i].fails = item.fails || 0;         // Échec Texte
                        DATA[lang][i].scoreOral = item.scoreOral || 0; // Réussite Oral
                        DATA[lang][i].failsOral = item.failsOral || 0; // Échec Oral
                    }
                });
            }
        });
    }
}

loadProgress();

function saveProgress() {
    localStorage.setItem('polyglotte_progress', JSON.stringify(DATA));
}

// --- Menu ---
function showScreen(id) {
    // Cache tous les écrans
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    // Affiche celui sélectionné
    const target = document.getElementById(id);
    if (target) {
        target.style.display = 'block';
    }
}

// ---------------------- Nouvelles variables pour le traducteur ----------------------------


function toggleTranslateDirection() {
    translateReversed = !translateReversed;
    const btn = document.getElementById('translateReverseBtn');
    btn.innerText = translateReversed ? "🔄 Sens : FR ➔ Langue" : "🔄 Sens : Langue ➔ FR";
    instantTranslate();
}

function instantTranslate() {
    const input = document.getElementById('offlineSearch');
    const resultDiv = document.getElementById('offlineResult');
    const langSelected = document.getElementById('translateLangSelect').value;
    
    if (!input || !resultDiv) return;

    const query = input.value.toLowerCase().trim();
    if (query.length < 2) {
        resultDiv.innerHTML = "";
        return;
    }

    let foundMatches = "";

    for (let category in DATA) {
        // Filtrer par langue si une langue précise est choisie
        if (langSelected !== "all" && category !== langSelected) continue;

        DATA[category].forEach(item => {
            let match = false;
            let displayQ = item.q;
            let displayA = item.a;

            // Logique d'inversion et de recherche
            if (translateReversed) {
                // Recherche en Français (champ 'a') pour traduire vers la Langue (champ 'q')
                if (item.a.toLowerCase().includes(query)) {
                    match = true;
                    displayQ = item.a; 
                    displayA = item.q;
                }
            } else {
                // Recherche en Langue (champ 'q') pour traduire vers le Français (champ 'a')
                if (item.q.toLowerCase().includes(query)) {
                    match = true;
                }
            }

            if (match) {
                foundMatches += `
                    <div class="translate-item" style="padding:12px; border-bottom:1px solid #333; text-align:left; background:#111; margin-bottom:5px; border-radius:5px;">
                        <span style="color:#4CAF50; font-size:0.7em; text-transform:uppercase;">[${category.replace('_', ' ')}]</span><br>
                        <b style="color:white;">${displayQ}</b> 
                        <span style="color:#888;">➔</span> 
                        <span style="color:#ffd700;">${displayA}</span>
                    </div>`;
            }
        });
    }

    resultDiv.innerHTML = foundMatches || "<p style='color:gray; padding:10px;'>Aucune correspondance trouvée...</p>";
}

// --- Recherche ---



//👁️ 👂
function renderInventory() {
    const mode = document.getElementById('inventoryLangSelect').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    
    if (!DATA[mode]) return;
    
    let words = [...DATA[mode]];

    // 1. Filtrage par recherche
    words = words.filter(w => 
        w.q.toLowerCase().includes(search) || 
        w.a.toLowerCase().includes(search)
    );

    // 2. Tri (Alpha, Lecture ou Oral)
    // --- DANS renderInventory() ---

    if (currentSort === 'alpha') {
        words.sort((a, b) => a.q.localeCompare(b.q));
    } 
    // Tri par succès (Meilleurs)
    else if (currentSort === 'score') {
        words.sort((a, b) => (b.score || 0) - (a.score || 0));
    } 
    else if (currentSort === 'scoreOral') {
        words.sort((a, b) => (b.scoreOral || 0) - (a.scoreOral || 0));
    }
    // Tri par échecs (Les Pires)
    else if (currentSort === 'worstLecture') {
        words.sort((a, b) => (b.fails || 0) - (a.fails || 0));
    }
    else if (currentSort === 'worstOral') {
        words.sort((a, b) => (b.failsOral || 0) - (a.failsOral || 0));
    }

    // 3. Construction du tableau
    const list = document.getElementById('inventory-list');
    list.innerHTML = `
        <div style="display:flex; font-weight:bold; padding:10px; border-bottom:2px solid white; font-size:0.8em; color:#ffd700;">
            <div style="flex:2;">MOT / TRADUCTION</div>
            <div style="flex:1; text-align:center;">LECTURE (V/X/Σ)</div>
            <div style="flex:1; text-align:center;">ORAL (V/X/Σ)</div>
        </div>
    ` + words.map(w => {
        // Stats Lecture
        const sl = w.score || 0;
        const fl = w.fails || 0;
        const totalL = sl + fl;

        // Stats Oral
        const so = w.scoreOral || 0;
        const fo = w.failsOral || 0;
        const totalO = so + fo;

        // On applique le gras sur les erreurs si elles sont importantes (> 5)
        const highlightL = fl > 5 ? 'font-weight:bold; font-size:1.1em;' : '';
        const highlightO = fo > 5 ? 'font-weight:bold; font-size:1.1em;' : '';

        return `
            <div class="inventory-item" style="display:flex; align-items:center; padding:12px 5px; border-bottom:1px solid #333; font-size:0.9em;">
                <div style="flex:2; text-align:left;">
                    <b style="color:#fff;">${w.q}</b><br>
                    <span style="color:#aaa; font-size:0.85em;">${w.a}</span>
                </div>
                
                <div style="flex:1; text-align:center; display:flex; justify-content:center; gap:5px;">
                    <span style="color:#4CAF50;">${sl}</span>
                    <span style="color:#ff4444; ${highlightL}">${fl}</span>
                    <span style="color:#fff; font-weight:bold; border-left:1px solid #555; padding-left:5px;">${totalL}</span>
                </div>

                <div style="flex:1; text-align:center; display:flex; justify-content:center; gap:5px;">
                    <span style="color:#2196F3;">${so}</span>
                    <span style="color:#ff8800; ${highlightO}">${fo}</span>
                    <span style="color:#fff; font-weight:bold; border-left:1px solid #555; padding-left:5px;">${totalO}</span>
                </div>
            </div>
        `;
    }).join('');
}


// bouton top

function applyTopSort(val) {
    if (!val) return;
    
    currentSort = val; // Définit le tri sur 'score' ou 'scoreOral'
    renderInventory();
    
    // Optionnel : remettre le sélecteur sur "🏆 Top..." après le clic
    setTimeout(() => {
        document.getElementById('topPicker').value = "";
    }, 500);
}
//---------------------------------------------------------------------------------
// -------------------------- Oral entraînement ----------------------
//--------------------------------------------------------------------------

// --- Speak spéciale pour oral --- (Doublon)
function getLangCode(mode) {
    const mapping = {
        'anglais': 'en-GB',
        'espagnol': 'es-ES',
        'italien': 'it-IT',
        'allemand': 'de-DE',
        'chinois': 'zh-CN',
        'coreen': 'ko-KR',
        'francais_soutenu': 'fr-FR',
        'basque': 'es-ES',
        'russe': 'ru-RU',
        'arabe': 'ar-SA',
        'hindi': 'hi-IN',
        'grec': 'el-GR'
    };
    return mapping[mode] || 'fr-FR'; // Par défaut français si on ne trouve pas
}

function speak2(text, lang) {
    window.speechSynthesis.cancel(); // Stop les voix en cours

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    // --- FORCE LA VOIX SUR PC ---
    const voices = window.speechSynthesis.getVoices();
    // On cherche une voix qui correspond au code (ex: el-GR)
    const matchingVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
    if (matchingVoice) {
        utterance.voice = matchingVoice;
    }
    // ----------------------------

    utterance.rate = 0.8; // Un peu plus lent pour mieux comprendre
    window.speechSynthesis.speak(utterance);
}
// --- INITIALISATION DU SON MORSE ---
// --- INITIALISATION DU SON ---
// On crée le contexte une seule fois tout en haut du fichier
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Ta fonction de bip (Corrigée pour être appelée par l'oral)
function playMorseBip(sequence) {
    // 1. On réveille le contexte audio (indispensable sur Mobile/Chrome)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // Récupérer la vitesse du curseur (durée d'un point en ms)
    // On inverse la logique : plus le curseur est haut, plus le temps est court
    const dotDuration = 220 - document.getElementById('morseSpeed').value;

    let time = audioCtx.currentTime + 0.1; 
    const dot = dotDuration / 1000; 
    const dash = dot * 3;

    sequence.split('').forEach(symbol => {
        if (symbol === '.' || symbol === '-') {
            const duration = (symbol === '.') ? dot : dash;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, time);
            
            // Enveloppe pour éviter les "clics" sonores
            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
            gain.gain.setValueAtTime(0.2, time + duration);
            gain.gain.linearRampToValueAtTime(0, time + duration + 0.01);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(time);
            osc.stop(time + duration + 0.02);
            time += duration + 0.1; // Espace entre les signes
        } else if (symbol === ' ') {
            time += 0.2; // Espace entre les lettres
        }
    });
}

// Ta fonction Oral (Indépendante du texte)


function playOralAudio() {
    if (!currentOralWord) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const oralSelect = document.getElementById('oralModeSelect');
    const mode = oralSelect ? oralSelect.value : 'morse_lettres';
    
    // Correction ici : currentWord peut être un objet {q:..., a:...} ou une string
    let textToConvert = (typeof currentOralWord === 'string') ? currentOralWord : currentOralWord.q;
    
    if (mode.startsWith('morse')) {
        let codeMorse = "";
        let upperText = textToConvert.toUpperCase();
        
        if (mode === 'morse_lettres') {
            codeMorse = MORSE_MAP[upperText] || "";
        } else {
            codeMorse = upperText.split('').map(l => MORSE_MAP[l] || "").join(' ');
        }
        playMorseBip(codeMorse); 
    } else {
        // Mode vocal classique
        const lang = isReverse ? 'fr-FR' : getLangCode(mode);
        const vocalText = isReverse ? currentOralWord.a : currentOralWord.q;
        speak2(vocalText, lang);
    }
}
// --- LOGIQUE DE L'ENTRAINEMENT ORAL ---

function startOralTraining() {
    // 1. Fusion des sélecteurs : on cherche d'abord celui de l'écran oral
    const oralSelect = document.getElementById('oralModeSelect');
    const mainSelect = document.getElementById('modeSelect');
    const mode = (oralSelect && oralSelect.value) ? oralSelect.value : mainSelect.value;
    
    const diff = document.getElementById('difficultySelect').value;
    
    // 2. Gestion des vies
    const livesMap = { easy: 4, medium: 3, hard: 2, expert: 1 };
    attemptsLeft = livesMap[diff];
    updateLivesUI();

    const list = (mode === 'morse_lettres') ? DATA.morse_lettres : 
                (mode === 'morse_mots') ? DATA.morse_mots : DATA[mode];
    
    // --- DÉBUT DE L'ALGORITHME INTELLIGENT (ADAPTÉ À L'ORAL) ---
    // On filtre en utilisant les compteurs ORAL et la valeur absolue
    let motsDifficiles = list.filter(m => {
        const s = m.scoreOral || 0;
        const f = m.failsOral || 0;
        // Valeur absolue de l'écart spécifique à l'oral
        const ecart = Math.abs(f - s);
        return ecart >= 15;
    });

    let listeTirage;
    // 80% de chance de piocher dans les mots difficiles
    if (motsDifficiles.length > 0 && Math.random() < 0.8) {
        listeTirage = motsDifficiles;
        console.log("Mode Oral : Apprentissage intelligent activé (|écart| >= 15)");
    } else {
        listeTirage = list;
    }
    // --- FIN DE L'ALGORITHME INTELLIGENT ---

    // 3. Sélection du mot final
    currentOralWord = listeTirage[Math.floor(Math.random() * listeTirage.length)];

    // 4. Reset interface
    document.getElementById('oralAnswer').value = "";
    playOralAudio();
}

function updateLivesUI() {
    const container = document.getElementById('lives-container');
    if (container) container.innerText = "❤️".repeat(attemptsLeft);
}

// --- Apparence bouton shift ---
function toggleReverse() {
    isReverse = !isReverse;
    const btn = document.getElementById('btn-reverse');
    btn.innerText = isReverse ? "🔄 Langue : Inversée" : "🔄 Langue : Normale";
    btn.style.background = isReverse ? "#ffd700" : "#111";
    btn.style.color = isReverse ? "black" : "white";
    startQuiz(); // Relance avec le nouveau mode
}

// --- Affichage ORAL MORSE ---

function updateOralUI() {
    const mode = document.getElementById('oralModeSelect').value;
    const reverseArea = document.getElementById('wrapper-reverse');
    const morseArea = document.getElementById('wrapper-morse-speed');

    if (mode.includes('morse')) {
        // Mode Morse : on cache l'inversion, on montre la vitesse
        reverseArea.style.display = 'none';
        morseArea.style.display = 'block';
        isReverse = false; // On force la réponse en français
    } else {
        // Mode normal : on montre l'inversion, on cache la vitesse
        reverseArea.style.display = 'block';
        morseArea.style.display = 'none';
    }
}


function checkOralAnswer() {
    if (!currentOralWord) return;

    const val = document.getElementById('oralAnswer').value.toLowerCase().trim();
    const mode = document.getElementById('oralModeSelect').value;

    let correct;
    if (mode.includes('morse')) {
        correct = (typeof currentOralWord === 'string' ? currentOralWord : currentOralWord.q).toLowerCase();
    } else {
        correct = isReverse ? currentOralWord.q.toLowerCase() : currentOralWord.a.toLowerCase();
    }

    if (val === correct) {
        const wordKey = typeof currentOralWord === 'string' ? currentOralWord : currentOralWord.q;

        
        if (typeof currentOralWord === 'object' && currentOralWord !== null) {
            currentOralWord.scoreOral = (currentOralWord.scoreOral || 0) + 1;
            saveProgress(); 
        }

        alert("Correct !");
        document.getElementById('oralAnswer').value = "";
        startOralTraining();
    } else {
        // --- C'est ici que ça se passe ---
        attemptsLeft--;
        
        // On appelle la fonction qui met à jour l'affichage des cœurs
        if (typeof updateLivesUI === 'function') {
            updateLivesUI();
        }

        if (attemptsLeft <= 0) {
            alert("Perdu ! C'était : " + correct);
            document.getElementById('oralAnswer').value = "";
            // Sécurité : on n'incrémente les échecs que si c'est un OBJET
            if (typeof currentOralWord === 'object' && currentOralWord !== null) {
                currentOralWord.failsOral = (currentOralWord.failsOral || 0) + 1;
                saveProgress();
            }
            startOralTraining();
        } else {
            playOralAudio(); 
        }
    }
}

//-------------------------------------------------------------------------------------
// ----------------------------- VOCABULAIRE ---------------------------------------------
//------------------------------------------------------------------------------------------

// --- Fonction inverser la traduction ---
function toggleDirection() {
    isReversed = !isReversed;
    const btn = document.getElementById('switchBtn');
    btn.innerText = isReversed ? "🔄 Sens : FR ➔ Langue" : "🔄 Sens : Langue ➔ FR";
    // Relance un mot pour appliquer le changement immédiatement
    startQuiz();
}

// --- AUDIO ---
function speak(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    const mode = document.getElementById('modeSelect').value;
    const voices = {'anglais':'en-US','espagnol':'es-ES','italien':'it-IT','allemand':'de-DE','chinois':'zh-CN','coreen':'ko-KR','francais_soutenu':'fr-FR','basque': 'es-ES','russe': 'ru-RU','arabe': 'ar-SA','hindi': 'hi-IN','grec': 'el-GR'};
    msg.lang = voices[mode] || 'fr-FR';
    window.speechSynthesis.speak(msg);
}

// --- PROGRESSION ---

function updateProgress(pts) {
    let history = JSON.parse(localStorage.getItem('my_score_v2') || '{}');
    let today = new Date().toLocaleDateString();
    history[today] = (history[today] || 0) + pts;
    localStorage.setItem('my_score_v2', JSON.stringify(history));
    document.getElementById('progBar').style.width = Math.min((history[today] / 20) * 100, 100) + "%";
}

// --- INVENTAIRE ---

function toggleInventory() {
    const modal = document.getElementById('inventoryModal');
    const stats = JSON.parse(localStorage.getItem('word_stats_v1') || '{}');

    if (modal.style.display === 'none' || !modal.style.display) {
        // 1. CALCUL DU RÉSUMÉ TEXTUEL (HAUT)
        let total = 0; 
        let statsHtml = "";
        for (let lang in DATA) { 
            total += DATA[lang].length; 
            statsHtml += `${lang.replace('_',' ')}: <b>${DATA[lang].length}</b><br>`; 
        }
        document.getElementById('statsContent').innerHTML = `Total vocabulaire: <b>${total}</b> mots<br>${statsHtml}`;
        
        // 2. APPEL DE L'HISTOGRAMME (MILIEU)
        // On affiche par défaut la version lecture au chargement
        if (typeof renderCompletionStats === 'function') {
            renderCompletionStats('lecture'); 
        }

        // 3. GÉNÉRATION DE LA LISTE DÉTAILLÉE (BAS)
        let mode = document.getElementById('modeSelect').value;
        let listHtml = `<h3>Mode ${mode.toUpperCase()} :</h3><ul>`;
        
        DATA[mode].forEach(item => {
            // Utilisation de .q pour la clé (mot étranger) comme on l'a vu pour la cohérence
            let key = typeof item === 'string' ? item : item.q;
            let count = stats[key] || 0;
            let scoreO = item.scoreOral || 0;
    
            let stars = "";
            if (count >= 10) stars = " ⭐⭐⭐";
            else if (count >= 5) stars = " ⭐⭐";
            else if (count >= 2) stars = " ⭐";

            let color = count >= 5 ? "#4CAF50" : (count > 0 ? "#FFA500" : "#888");

            listHtml += `<li style="margin-bottom:10px; border-bottom:1px solid #333; padding-bottom:5px;">`;
            listHtml += typeof item === 'string' ? `<b>${item}</b>` : `<b>${item.q}</b> = ${item.a}`;
            listHtml += `<br><span style="color:${color}; font-size:0.85em;">👁️ ${count} ✅ ${stars} | 👂 Oral: ${scoreO}</span></li>`;
        });
        
        
        
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
}

// --- MORSE ---

async function playMorse(item) {
    const currentCat = document.getElementById('modeSelect').value;
    
    // Sécurité : on vérifie si on est bien en mode morse
    if (currentCat === "morse_mots" || currentCat === "morse_lettres") {
        
        // 1. On récupère la chaîne de caractères (ex: "SOS")
        // Si item est un objet {q:"A", a:".-"}, on prend item.q
        const textToFlash = (typeof item === 'object') ? item.q : item;
        
        const unit = 400 - document.getElementById('speed').value;
        const light = document.getElementById('light');
        
        light.innerText = ""; // On vide le texte pendant que ça clignote

        for (let char of textToFlash.toUpperCase()) {
            // 2. On récupère le code (soit via MORSE_MAP, soit via l'objet lui-même)
            // Si l'objet contient déjà le code dans 'a', c'est encore mieux :
            let code = (typeof item === 'object' && item.q === char) ? item.a : MORSE_MAP[char];
            
            if (!code) continue;

            for (let sym of code) {
                light.style.background = "white";
                // Allumé : court pour '.', long pour '-'
                await new Promise(r => setTimeout(r, sym === '.' ? unit : unit * 3));
                
                light.style.background = "black";
                // Pause entre deux symboles d'une même lettre
                await new Promise(r => setTimeout(r, unit));
            }
            // Pause entre deux lettres
            await new Promise(r => setTimeout(r, unit * 2));
        }
        
        light.innerText = "???"; 
    }
}

// --- QUIZ ---
async function startQuiz() {
    const mode = document.getElementById('modeSelect').value;
    const inputField = document.getElementById('answer');
    
    inputField.value = "";
    inputField.blur(); 

    const light = document.getElementById('light');
    light.innerText = "";
    light.style.background = "black";

    // --- LE PETIT PLUS POUR L'ARABE ---
    if (mode === 'arabe') {
        light.style.direction = 'rtl'; // Écrit de droite à gauche
    } else {
        light.style.direction = 'ltr'; // Revient à la normale pour les autres
    }
    // ----------------------------------
    
    const list = DATA[mode];
    if (!list) return;

    // --- ALGORITHME INTELLIGENT ---
    let motsDifficiles = list.filter(m => Math.abs((m.fails || 0) - (m.score || 0)) >= 15);
    let listeTirage = (motsDifficiles.length > 0 && Math.random() < 0.8) ? motsDifficiles : list;
    
    currentWord = listeTirage[Math.floor(Math.random() * listeTirage.length)];

    // --- LOGIQUE D'AFFICHAGE ---
    if (mode.startsWith('morse')) {
        if (isReversed) {
            // On montre la lettre, on attend le code (.-)
            light.innerText = currentWord.q;
            currentAnswer = currentWord.a; 
        } else {
            // On joue le flash, on attend la lettre (A)
            currentAnswer = currentWord.q;
            await playMorse(currentWord);
        }
    } else {
        // Langues classiques
        if (isReversed) {
            light.innerText = currentWord.a;
            currentAnswer = currentWord.q;
            if(typeof speak === "function") speak(currentWord.a);
        } else {
            light.innerText = currentWord.q;
            currentAnswer = currentWord.a;
            if(typeof speak === "function") speak(currentWord.q);
        }
    }

    setTimeout(() => inputField.focus(), mode.startsWith('morse') && !isReversed ? 100 : 1000);
}



function check() {
    const user = document.getElementById('answer').value.trim().toLowerCase();
    
    if (!currentWord || !currentAnswer) return;

    // On compare l'entrée utilisateur avec la réponse définie dans startQuiz
    if (user === currentAnswer.toLowerCase()) {
        // SUCCÈS : on augmente le score
        currentWord.score = (currentWord.score || 0) + 1;
        
        // Mise à jour visuelle
        document.getElementById('light').style.background = "green";
        document.getElementById('light').innerText = "BRAVO !";
        if(typeof updateProgress === "function") updateProgress(1);
    } else {
        // ÉCHEC : le score n'augmente pas, donc l'écart (tentatives - score) grandit
        currentWord.fails = (currentWord.fails || 0) + 1;
        document.getElementById('light').style.background = "red";
        document.getElementById('light').innerText = "FAUX !";
        alert("Dommage ! C'était : " + currentAnswer);
    }

    saveProgress(); 

    setTimeout(() => {
        document.getElementById('answer').value = "";
        startQuiz(); 
    }, 1000);
}

// Touche Entrée pour valider
document.getElementById('answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') check();
});

// Initialisation
updateProgress(0);

// ------------------------------------------------------------------------
//-------------- Apprentissage intelligent ------------------------------
//----------------------------------------------------------------------

// INVENTAIRE HISTOGRAMME

// Variable pour garder en mémoire le mode actuel (lecture ou oral)
let currentStatMode = 'lecture';

function updateThresholdDisplay(val) {
    document.getElementById('threshold-val').innerText = val;
    renderCompletionStats(currentStatMode); // Recalcule avec le nouveau seuil
}

function renderCompletionStats(type) {
    currentStatMode = type;
    const threshold = parseInt(document.getElementById('mastery-threshold').value);
    const chartContainer = document.getElementById('completion-chart');
    
    // On ne récupère plus lectureStats ici, car tout est dans DATA
    let html = "";

    for (let lang in DATA) {
        const words = DATA[lang];
        const total = words.length;
        let successCount = 0;

        words.forEach(w => {
            if (type === 'lecture') {
                // On va chercher .score qui vient de polyglotte_progress
                const s = w.score || 0;
                if (s >= threshold) successCount++;
            } else {
                // On va chercher .scoreOral qui vient aussi de polyglotte_progress
                const sO = w.scoreOral || 0;
                if (sO >= threshold) successCount++;
            }
        });

        const percentage = total > 0 ? Math.round((successCount / total) * 100) : 0;
        const color = type === 'lecture' ? '#4CAF50' : '#2196F3';

        html += `
            <div style="margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.75em; margin-bottom: 3px;">
                    <span style="font-weight:bold; color: white;">${lang.toUpperCase()}</span>
                    <span style="color: #ccc;">${successCount}/${total} (${percentage}%)</span>
                </div>
                <div style="background: #333; height: 10px; border-radius: 5px; overflow: hidden; border: 1px solid #444;">
                    <div style="width: ${percentage}%; background: ${color}; height: 100%; transition: width 0.3s ease-out;"></div>
                </div>
            </div>
        `;
    }

    chartContainer.innerHTML = html;
}

// --------- UTILE pour AJOUTER VOCABULAIRE -----------------

function verifierDoublons(langue) {
    const mots = DATA[langue];
    const vus = new Set();
    const doublons = [];

    mots.forEach(item => {
        const mot = typeof item === 'string' ? item : item.q;
        if (vus.has(mot)) {
            doublons.push(mot);
        }
        vus.add(mot);
    });

    if (doublons.length > 0) {
        console.error(`⚠️ Doublons trouvés dans ${langue}:`, doublons);
    } else {
        console.log(`✅ Aucune répétition dans ${langue}.`);
    }
}
// -------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
//-------------------- MODE MUSIC ----------------------
//-----------------------------------------------------------------
let currentAudio = null;
let audioCtx2, analyser, dataArray, source;
let currentHelpMode = 'full';
let lastPhraseT = -1; // Pour éviter le clignotement

// 1. L'INIT DU MOTEUR AUDIO (CORRIGÉ)
function initAudioEngine(audioElement) {
    if (!audioCtx2) {
        audioCtx2 = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx2.createAnalyser(); // Correction du nom ici
        source = audioCtx2.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioCtx2.destination);
        analyser.fftSize = 64;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        renderFrame();
    }
}

// 2. LE RENDU VISUEL (BLOB ET GLOW)
function renderFrame() {
    requestAnimationFrame(renderFrame);
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    let bass = dataArray[0]; 
    
    const lyricsLabel = document.getElementById('lyrics-active');
    const blob = document.querySelector('.blob-bottom');
    
    // 1. LUEUR DU TEXTE (STABLE)
    if(lyricsLabel) {
        let glow = 10 + (bass / 8);
        lyricsLabel.style.textShadow = `0 0 ${glow}px var(--mood-color)`;
    }

    // 2. GROSSISSEMENT DU BLOB (SANS FUITE)
    if(blob) {
        // On ne modifie QUE le scale. 
        // Le centrage est géré par le CSS de .visualizer-full
        let scale = 1 + (bass / 600); 
        blob.style.transform = `scale(${scale})`;
    }

    if (bass > 215) createLanguageParticle();
}

// 3. LA FONCTION LOAD UNIQUE (AVEC KARAOKÉ RÉINTÉGRÉ)
function loadSong(langue, niveau) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    if (typeof BIBLIOTHEQUE === 'undefined') return console.error("musique.js non chargé");
    const songData = BIBLIOTHEQUE[langue].find(s => s.niveau == niveau);
    if (!songData) return alert("Chanson non trouvée");

    currentAudio = new Audio(songData.fichier);
    
    // Initialise les effets au premier clic
    currentAudio.onplay = () => initAudioEngine(currentAudio);
    
    // --- AJOUT ICI : Quand la chanson finit, on appelle stopMusic ---
    currentAudio.onended = stopMusic;
    // Applique l'ambiance
    const screen = document.getElementById('screen-music');
    screen.style.setProperty('--mood-color', songData.ambiance);
    document.getElementById('song-title').innerText = songData.titre;

    // Cacher le bouton jouer pendant que la musique tourne
    document.getElementById('btn-play-main').style.display = "none";
    
    // --- GESTION DES PAROLES (LE RETOUR) ---
    currentAudio.ontimeupdate = () => {
        const ct = currentAudio.currentTime;
        const phrase = songData.paroles.find((p, i) => {
            const next = songData.paroles[i+1];
            return ct >= p.t && (!next || ct < next.t);
        });

        if (phrase) {
            updateLyricsDisplay(phrase);
        }
    };

    currentAudio.play().catch(e => console.log("Attente interaction utilisateur"));
}

// 4. LE SYSTÈME D'AFFICHAGE INTELLIGENT
function updateLyricsDisplay(phrase) {
    const el = document.getElementById('lyrics-active');
    const trans = document.getElementById('translation');
    
    if (lastPhraseT === phrase.t) return; // Anti-clignotement
    lastPhraseT = phrase.t;

    el.classList.remove('is-hidden');
    trans.classList.remove('is-hidden');

    if (currentHelpMode === 'hidden') {
        el.classList.add('is-hidden');
        trans.classList.add('is-hidden');
    } else if (currentHelpMode === 'none') {
        // MODE OMBRE
        el.innerHTML = phrase.texte.split(' ').map((word, i) => 
            `<span class="word-shadow" style="animation-delay: ${i * 0.2}s">${word}</span>`
        ).join(' ');
        trans.innerText = "";
    } else {
        // MODES TEXTE ET FULL
        el.innerText = phrase.texte;
        trans.innerText = (currentHelpMode === 'full') ? phrase.trad : "";
    }
}

function setHelp(mode) {
    currentHelpMode = mode;
    lastPhraseT = -1; // Force le rafraîchissement
}

let isEcoMode = false;

function toggleEcoMode() {
    isEcoMode = !isEcoMode;
    const btn = document.getElementById('btn-eco');
    const blob = document.querySelector('.blob-bottom');
    
    if (isEcoMode) {
        btn.innerText = "🍃 Mode Éco : ON";
        btn.style.borderColor = "#4CAF50";
        if (blob) blob.style.display = "none"; // On cache carrément le blob
    } else {
        btn.innerText = "🍃 Mode Éco : OFF";
        btn.style.borderColor = "#555";
        if (blob) blob.style.display = "block";
    }
}

// TA NOUVELLE FONCTION STOP MISE À JOUR
function stopMusic() {
    console.log("Reset complet...");

    // 1. Arrêt Audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    // 2. LE "COUPE-CIRCUIT" DU BLOB
    // On déconnecte l'analyseur s'il existe pour stopper l'écoute micro/musique
    if (window.analyser) {
        window.analyser.disconnect();
    }

    // 3. Remise à zéro visuelle
    const blob = document.querySelector('.blob-bottom');
    if (blob) {
        blob.removeAttribute('style'); // Efface les déformations du JS
        // Si on est en mode éco, on s'assure qu'il reste caché
        blob.style.display = isEcoMode ? "none" : "block";
    }
    
    document.documentElement.style.setProperty('--mood-color', '#ff00ff');

    // 4. Interface
    document.getElementById('song-title').innerText = "Choisissez une mélodie";
    document.getElementById('lyrics-active').innerText = "Lancez la musique...";
    document.getElementById('lyrics-prev').innerText = "";
    document.getElementById('lyrics-next').innerText = "";
    document.getElementById('translation').innerText = "";

    const btnPlay = document.getElementById('btn-play-main');
    if (btnPlay) {
        btnPlay.style.display = "block";
        btnPlay.style.margin = "20px auto";
    }
    
    lastPhraseT = -1;
}


function createLanguageParticle() {
    const container = document.getElementById('particle-container');
    if(!container) return;
    const p = document.createElement('div');
    const chars = ["Ω", "λ", "あ", "я", "ع", "हि", "𓇳"];
    p.className = 'particle';
    p.innerText = chars[Math.floor(Math.random() * chars.length)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = "80vh";
    container.appendChild(p);
    setTimeout(() => p.remove(), 3000);
}

function retourMusic() {
    stopMusic();
    showScreen('screen-home');
}

const statusMsg = document.getElementById('status-msg');

const installBtn = document.getElementById('install-btn');

installBtn.addEventListener('click', async () => {
    installBtn.style.background = "orange";
    installBtn.innerText = "Vérification réelle...";

    if ('serviceWorker' in navigator) {
        try {
            const reg = await navigator.serviceWorker.register('./service-worker.js');
            await reg.update();

            // On attend 2 secondes que le téléchargement commence
            setTimeout(async () => {
                const cache = await caches.open("appli-langues-v30"); // Utilise bien ton CACHE_NAME
                const keys = await cache.keys();
                
                // On vérifie s'il y a plus de 10 fichiers (tes MP3 + HTML/CSS)
                if (keys.length > 10) {
                    installBtn.style.background = "green";
                    installBtn.innerText = "Installé (" + keys.length + " fichiers)";
                } else {
                    installBtn.style.background = "red";
                    installBtn.innerText = "Erreur : seulement " + keys.length + " fichiers";
                    console.log("Fichiers manquants. Vérifie tes chemins /audio/songs/...");
                }
            }, 3000);

        } catch (err) {
            installBtn.style.background = "black";
            installBtn.innerText = "Erreur fatale";
        }
    }
});