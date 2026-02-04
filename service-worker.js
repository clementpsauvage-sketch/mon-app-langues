const CACHE_NAME = "appli-langues-v24"; // J'ai augmenté la version pour forcer la mise à jour
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