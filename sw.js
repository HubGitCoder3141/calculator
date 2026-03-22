const CACHE_NAME = 'calclab-v1';
const urlsToCache = [
  '/calculator/',
  '/calculator/index.html',
  '/calculator/basic.html',
  '/calculator/scientific.html',
  '/calculator/graph.html',
  '/calculator/styles.css',
  '/calculator/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('api.exchangerate-api.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) return response;
          return fetch(event.request).then(networkResponse => {
            return networkResponse;
          }).catch(() => new Response('{}', { headers: { 'Content-Type', 'application/json' } }));
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(cacheName => {
        if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
      }));
    })
  );
});