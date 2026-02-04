const CACHE_NAME = "appli-langues-v25"; // J'ai augmenté la version pour forcer la mise à jour
const FILES = [
  "./",
  "./index.html",
  "./script.js",
  "./manifest.json",
  "./style.css",
  "./vocabulaire.js",
  "./musique.js",
  "./icon-192.png",
  "./icon-512.png",
  "./songs/anglais/anglais_1.mp3",
  "./songs/espagnol/espagnol_1.mp3",
  "./songs/italien/italien_1.mp3",
  "./songs/allemand/allemand_1.mp3",
  "./songs/arabe/arabe_1.mp3",
  "./songs/russe/russe_1.mp3",
  "./songs/grec/grec_1.mp3",
  "./songs/hindi/hindi_1.mp3",
  "./songs/basque/basque_1.mp3",
  "./songs/chinois/chinois_1.mp3",
  "./songs/coreen/coreen_1.mp3"
];

self.skipWaiting();
// Installation : on télécharge un par un pour ne pas bloquer si un fichier manque
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Début du téléchargement des fichiers...");
      return Promise.all(
        FILES.map(url => {
          return cache.add(url).catch(err => {
            console.error("Échec du téléchargement pour :", url);
          });
        })
      );
    })
  );
});

// Activation : on nettoie les anciens caches
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// Récupération : on sert le cache s'il existe, sinon on télécharge
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

const installBtn = document.getElementById('install-btn');
const statusMsg = document.getElementById('status-msg');

installBtn.addEventListener('click', () => {
    // 1. On change la couleur pour dire qu'on travaille
    installBtn.style.background = "orange";
    installBtn.innerText = "Téléchargement en cours...";
    statusMsg.innerText = "Le téléphone récupère les fichiers sur GitHub...";

    if ('serviceWorker' in navigator) {
        // On enregistre/met à jour le Service Worker
        navigator.serviceWorker.register('./service-worker.js').then(reg => {
            
            // On force la vérification des fichiers
            reg.update();

            // On écoute l'état de l'installation
            reg.onupdatefound = () => {
                const installingWorker = reg.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        // 2. SUCCÈS : On change la couleur en VERT
                        installBtn.style.background = "green";
                        installBtn.innerText = "Mode Hors-ligne Prêt !";
                        statusMsg.innerText = "Toutes les musiques sont dans la cache (60 Mo).";
                    }
                };
            };

            // Si c'est déjà installé (clic répété)
            if (reg.active) {
                installBtn.style.background = "green";
                installBtn.innerText = "Déjà installé !";
                statusMsg.innerText = "L'appli est déjà prête pour le mode avion.";
            }

        }).catch(err => {
            // 3. ERREUR : On change en ROUGE
            installBtn.style.background = "red";
            statusMsg.innerText = "Erreur : " + err;
        });
    } else {
        alert("Ton navigateur ne supporte pas le mode hors-ligne.");
    }
});