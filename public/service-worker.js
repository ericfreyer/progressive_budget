const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/db.js",
  "/index.js",
  "/manifest.webmanifest",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

self.addEventListener("install", function (evt) {
  // pre cache image data
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});
