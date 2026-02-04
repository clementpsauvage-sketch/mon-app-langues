const CACHE_NAME = "appli-langues-v22";
const FILES = [
  "./",
  "./index.html",
  "./script.js",
  "./manifest.json",
  "./style.css",
  "./vocabulaire.js",
  "./icon-192.png",
  "./icon-512.png",
  "./songs/anglais/anglais_1.mp3", //anglais

  "./songs/espagnol/espagnol_1.mp3",// espagnol

  "./songs/italien/italien_1.mp3", // italien

  "./songs/allemand/allemand_1.mp3", //allemand

  "./songs/arabe/arabe_1.mp3", //arabee

  "./songs/russe/russe_1.mp3", //russe

  "./songs/grec/grec_1.mp3", // grec

  "./songs/hindi/hindi_1.mp3", // hindi

  "./songs/basque/basque_1.mp3", //basque

  "./songs/chinois/chinois_1.mp3", //chinois

  "./songs/coreen/coreen_1.mp3", //coreen

]
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
