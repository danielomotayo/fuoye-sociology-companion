const CACHE_NAME = 'deepstudy-shell-v1';

const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/resources/app-icon-192.svg',
  '/resources/app-icon-512.svg',
  '/resources/sociology-department.svg'
];

// Install service worker and cache essential app files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate service worker and remove outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Handle network requests and provide offline fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request)
      .then((cached) => {
        if (cached) return cached;

        return fetch(event.request)
          .then((response) => {
            if (response.ok && response.type === 'basic') {
              const copy = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, copy));
            }

            return response;
          })
          .catch(() => caches.match('/index.html'));
      })
  );
});
