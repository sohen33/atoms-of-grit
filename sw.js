const CACHE_NAME = 'grit-atoms-v2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './quotes.js',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install event - pre-cache assets and activate immediately
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  // Take over immediately without waiting for old SW to die
  self.skipWaiting();
});

// Activate event - clean old caches and claim all clients immediately
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - Network-first strategy
// Always tries the network first so you get fresh content when online.
// Falls back to cache if the network is unavailable (offline support).
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        // Got a fresh response — update the cache and return it
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => {
        // Network failed (offline) — serve from cache
        return caches.match(e.request);
      })
  );
});
