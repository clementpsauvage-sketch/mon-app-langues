const CACHE_NAME = "appli-langues-v20";
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
  "./songs/anglais/anglais_2.mp3",
  "./songs/anglais/anglais_3.mp3",
  "./songs/anglais/anglais_4.mp3",
  "./songs/espagnol/espagnol_1.mp3",// espagnol
  "./songs/espagnol/espagnol_2.mp3",
  "./songs/espagnol/espagnol_3.mp3",
  "./songs/espagnol/espagnol_4.mp3",
  "./songs/italien/italien_1.mp3", // italien
  "./songs/italien/italien_2.mp3",
  "./songs/italien/italien_3.mp3",
  "./songs/italien/italien_4.mp3",
  "./songs/allemand/allemand_1.mp3", //allemand
  "./songs/allemand/allemand_2.mp3",
  "./songs/allemand/allemand_3.mp3",
  "./songs/allemand/allemand_4.mp3",
  "./songs/arabe/arabe_1.mp3", //arabee
  "./songs/arabe/arabe_2.mp3",
  "./songs/arabe/arabe_3.mp3",
  "./songs/arabe/arabe_4.mp3",
  "./songs/russe/russe_1.mp3", //russe
  "./songs/russe/russe_2.mp3",
  "./songs/russe/russe_3.mp3",
  "./songs/russe/russe_4.mp3",
  "./songs/grec/grec_1.mp3", // grec
  "./songs/grec/grec_2.mp3",
  "./songs/grec/grec_3.mp3",
  "./songs/grec/grec_4.mp3",
  "./songs/hindi/hindi_1.mp3", // hindi
  "./songs/hindi/hindi_2.mp3",
  "./songs/hindi/hindi_3.mp3",
  "./songs/hindi/hindi_4.mp3",
  "./songs/basque/basque_1.mp3", //basque
  "./songs/basque/basque_2.mp3",
  "./songs/basque/basque_3.mp3",
  "./songs/basque/basque_4.mp3",
  "./songs/chinois/chinois_1.mp3", //chinois
  "./songs/chinois/chinois_2.mp3",
  "./songs/chinois/chinois_3.mp3",
  "./songs/chinois/chinois_4.mp3",
  "./songs/coreen/coreen_1.mp3", //coreen
  "./songs/coreen/coreen_2.mp3",
  "./songs/coreen/coreen_3.mp3",
  "./songs/coreen/coreen_4.mp3"
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
