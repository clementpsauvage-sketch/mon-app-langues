// Variables globales
let currentAnswer = "";
let isReversed = false;

let currentSort = 'alpha';
let isReverse = false;
let currentWord = null;
let attemptsLeft = 0;

// Charger les données et les scores au démarrage
function loadProgress() {
    const saved = localStorage.getItem('polyglotte_progress');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(lang => {
            if (DATA[lang]) {
                parsed[lang].forEach((item, i) => {
                    if (DATA[lang][i]) DATA[lang][i].score = item.score || 0;
                });
            }
        });
    } else {
        // Initialisation si première fois
        Object.keys(DATA).forEach(lang => {
            if (Array.isArray(DATA[lang])) {
                DATA[lang].forEach(item => item.score = 0);
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

// --- Nouvelles variables pour le traducteur ---
let translateReversed = false;

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


function renderInventory() {
    // 1. On récupère la langue depuis le NOUVEAU sélecteur de l'inventaire
    const mode = document.getElementById('inventoryLangSelect').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    
    if (!DATA[mode]) return;
    
    let words = [...DATA[mode]];

    // 2. Filtrage
    words = words.filter(w => 
        w.q.toLowerCase().includes(search) || 
        w.a.toLowerCase().includes(search)
    );

    // 3. Tri (selon ton choix : alpha, score lecture, ou score oral)
    if (currentSort === 'alpha') {
        words.sort((a, b) => a.q.localeCompare(b.q));
    } else if (currentSort === 'score') {
        words.sort((a, b) => (b.score || 0) - (a.score || 0));
    } else if (currentSort === 'scoreOral') {
        words.sort((a, b) => (b.scoreOral || 0) - (a.scoreOral || 0));
    }

    // 4. L'ENDROIT EXACT OÙ TU AJOUTES LE CODE :
    const list = document.getElementById('inventory-list');
    list.innerHTML = words.map(w => `
        <div class="inventory-item" style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid #333;">
            <span><b>${w.q}</b> : ${w.a}</span>
            <div style="min-width: 80px; text-align: right;">
                <span title="Lecture">👁️ ${w.score || 0}</span>
                <span title="Oral" style="margin-left:10px;">👂 ${w.scoreOral || 0}</span>
            </div>
        </div>
    `).join('');
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

// --- Oral entraînement ---

// --- Speak spéciale pour oral --- (Doublon)
function getLangCode(mode) {
    const mapping = {
        'anglais': 'en-GB',
        'espagnol': 'es-ES',
        'italien': 'it-IT',
        'allemand': 'de-DE',
        'chinois': 'zh-CN',
        'coreen': 'ko-KR',
        'francais_soutenu': 'fr-FR'
    };
    return mapping[mode] || 'fr-FR'; // Par défaut français si on ne trouve pas
}

function speak2(texte, langue) {
    // On arrête toute lecture en cours pour éviter les bugs
    window.speechSynthesis.cancel();

    const uttr = new SpeechSynthesisUtterance(texte);
    
    // On définit la langue (ex: 'en-GB', 'es-ES')
    uttr.lang = langue; 
    
    uttr.rate = 0.9; // Vitesse normale
    uttr.pitch = 1;  // Hauteur de voix normale

    window.speechSynthesis.speak(uttr);
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

    let time = audioCtx.currentTime + 0.1; 
    const dot = 0.1; 
    const dash = 0.3;

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
    if (!currentWord) return;

    // S'assurer que le contexte audio est prêt
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const oralSelect = document.getElementById('oralModeSelect');
    const mode = oralSelect ? oralSelect.value : 'morse_lettres';
    
    // On définit ce qu'on doit transformer en son
    const textToConvert = isReverse ? currentWord.a : currentWord.q;
    
    if (mode.startsWith('morse')) {
        let codeMorse = "";
        let upperText = textToConvert.toUpperCase();
        
        if (mode === 'morse_lettres') {
            // Si c'est juste une lettre (ex: "A")
            codeMorse = MORSE_MAP[upperText] || "";
        } else {
            // Si c'est un mot (ex: "BONJOUR"), on traduit chaque lettre
            codeMorse = upperText.split('').map(lettre => MORSE_MAP[lettre] || "").join(' ');
        }
        
        playMorseBip(codeMorse); 
    } else {
        // Mode vocal (anglais, espagnol, etc.)
        const lang = isReverse ? 'fr-FR' : getLangCode(mode);
        speak2(textToConvert, lang);
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

    // 3. Sélection intelligente (Priorité scores faibles)
    if (!DATA[mode] || DATA[mode].length === 0) {
        alert("Mode vide ou non trouvé !");
        return;
    }
    const sorted = [...DATA[mode]].sort((a, b) => (a.score || 0) - (b.score || 0));
    const pool = sorted.slice(0, 10);
    currentWord = pool[Math.floor(Math.random() * pool.length)];

    // 4. Reset interface
    document.getElementById('oralAnswer').value = "";
    playOralAudio();
}

function updateLivesUI() {
    const container = document.getElementById('lives-container');
    if (container) container.innerText = "❤️".repeat(attemptsLeft);
}


function checkOralAnswer() {
    if (!currentWord) return;

    const val = document.getElementById('oralAnswer').value.toLowerCase().trim();
    const correct = isReverse ? currentWord.q.toLowerCase() : currentWord.a.toLowerCase();

    if (val === correct) {
        // On enregistre dans une stat différente !
        currentWord.scoreOral = (currentWord.scoreOral || 0) + 1;
        saveProgress(); 
        alert("Correct à l'oreille !");
        startOralTraining();
    } else {
        attemptsLeft--;
        updateLivesUI();
        if (attemptsLeft <= 0) {
            alert("Perdu ! C'était : " + correct);
            startOralTraining();
        } else {
            playOralAudio(); // On rejoue le son pour aider
        }
    }
}

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
  const voices = {'anglais':'en-US','espagnol':'es-ES','italien':'it-IT','allemand':'de-DE','chinois':'zh-CN','coreen':'ko-KR','francais_soutenu':'fr-FR'};
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
  
  // AJOUTE CETTE LIGNE ICI :
  const stats = JSON.parse(localStorage.getItem('word_stats_v1') || '{}');

  if (modal.style.display === 'none' || !modal.style.display) {
    let total = 0; let statsHtml = "";
    for (let lang in DATA) { 
        total += DATA[lang].length; 
        statsHtml += `${lang.replace('_',' ')}: <b>${DATA[lang].length}</b><br>`; 
    }
    document.getElementById('statsContent').innerHTML = `Total vocabulaire: <b>${total}</b> mots<br>${statsHtml}`;
    
    let mode = document.getElementById('modeSelect').value;
    let listHtml = `<h3>Mode ${mode.toUpperCase()} :</h3><ul>`;
    
    DATA[mode].forEach(item => {
      let key = typeof item === 'string' ? item : item.a;
      
      // Maintenant stats[key] fonctionnera !
      let count = stats[key] || 0;
  
      let stars = "";
      if (count >= 10) stars = " ⭐⭐⭐";
      else if (count >= 5) stars = " ⭐⭐";
      else if (count >= 2) stars = " ⭐";

      let color = count >= 5 ? "#4CAF50" : (count > 0 ? "#FFA500" : "#888");

      listHtml += `<li style="margin-bottom:5px;">`;
      listHtml += typeof item === 'string' ? item : `<b>${item.q}</b> = ${item.a}`;
      listHtml += ` <span style="color:${color}; font-weight:bold;">(${count} ✅)${stars}</span></li>`;
    });
    document.getElementById('inventoryContent').innerHTML = listHtml + "</ul>";
    modal.style.display = 'block';
  } else {
    modal.style.display = 'none';
  }
}

// --- MORSE ---
async function playMorse(text) {
  // CONDITION DE SÉCURITÉ : 
  // On vérifie si la catégorie actuelle est bien le morse
  const currentCat = document.getElementById('modeSelect').value;
  if (currentCat === "morse_mots" || currentCat === "morse_lettres") {
    const unit = 400 - document.getElementById('speed').value;
    document.getElementById('light').innerText = "";
    for (let char of text.toUpperCase()) {
      let code = MORSE_MAP[char];
      if (!code) continue;
      for (let sym of code) {
        document.getElementById('light').style.background = "white";
        await new Promise(r => setTimeout(r, sym === '.' ? unit : unit * 3));
        document.getElementById('light').style.background = "black";
        await new Promise(r => setTimeout(r, unit));
      }
      await new Promise(r => setTimeout(r, unit * 2));
    }
    document.getElementById('light').innerText = "???";
  }
}

// --- QUIZ ---
async function startQuiz() {
  const mode = document.getElementById('modeSelect').value;
  const inputField = document.getElementById('answer');
  
  // 1. On vide le champ et on retire le focus (ferme le clavier s'il était ouvert)
  inputField.value = "";
  inputField.blur(); 

  document.getElementById('light').innerText = "";
  document.getElementById('light').style.background = "black";
  
  if (mode.startsWith('morse')) {
    const list = (mode === 'morse_lettres') ? DATA.morse_lettres : DATA.morse_mots;
    currentAnswer = list[Math.floor(Math.random() * list.length)];
    
    // 2. On ajoute "await" devant playMorse pour attendre la fin des flashs
    // (Assure-toi que ta fonction playMorse est bien "async")
    await playMorse(currentAnswer); 
    
    // 3. On n'ouvre le clavier qu'une fois le Morse terminé
    inputField.focus();
    
  } else {
    const pair = DATA[mode][Math.floor(Math.random() * DATA[mode].length)];
    // --- LOGIQUE DE SWITCH ---
    if (isReversed) {
      // On montre la réponse (ex: Français) et on attend la question (ex: Coréen)
      document.getElementById('light').innerText = pair.a;
      currentAnswer = pair.q;
      speak(pair.a); // On prononce ce qui est affiché
    } else {
      // Mode normal : On montre la langue, on attend le français
      document.getElementById('light').innerText = pair.q;
      currentAnswer = pair.a;
      speak(pair.q);
    }
    // -------------------------
    
    // 4. Pour les langues, on attend 1 seconde pour laisser le temps de lire
    setTimeout(() => {
      inputField.focus();
    }, 1000);
  }
}
// Compteur réussite des mots

function saveWordSuccess(word) {
  // 1. On récupère ce qui existe déjà (ou un objet vide {})
  let stats = JSON.parse(localStorage.getItem('word_stats_v1') || '{}');
  
  // 2. On ajoute +1 au mot que tu viens de réussir
  stats[word] = (stats[word] || 0) + 1;
  
  // 3. On range le tout dans la mémoire du téléphone
  localStorage.setItem('word_stats_v1', JSON.stringify(stats));
  
}



function check() {
  const user = document.getElementById('answer').value.trim().toLowerCase();
  if (user === currentAnswer.toLowerCase()) {
    // --- L'ÉTAPE CRUCIALE : ENREGISTRER LE MOT ---
    saveWordSuccess(currentAnswer);
    updateProgress(1);
    startQuiz();
  } else {
    alert("Dommage ! C'était : " + currentAnswer);
    startQuiz();
  }
}

// Touche Entrée pour valider
document.getElementById('answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') check();
});

// Initialisation
updateProgress(0);
