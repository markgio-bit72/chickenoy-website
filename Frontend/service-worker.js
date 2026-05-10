// Service Worker for Chickenoy PWA
// Provides offline support, caching, and improved performance

const CACHE_NAME = 'chickenoy-v6';
const CACHE_ASSETS = [
  '/Page/index.html',
  '/Page/menu.html',
  '/Page/login.html',
  '/Page/register.html',
  '/Page/cart.html',
  '/Page/checkout.html',
  '/Page/dashboard.html',
  '/Page/admin.html',
  '/Page/contact.html',
  '/CSS/style.css',
  '/JS/app.js',
  '/JS/offline-handler.js?v=2',
  '/JS/menu.js?v=3',
  '/JS/cart.js',
  '/JS/checkout.js',
  '/JS/dashboard.js',
  '/JS/admin.js',
  '/JS/common.js?v=2',
  '/JS/auth.js',
  '/manifest.json'
];

// Install event - cache essential assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching essential assets');
        return cache.addAll(CACHE_ASSETS).catch(err => {
          console.log('Some assets failed to cache:', err);
          // Don't fail the entire install if some assets can't be cached
          return Promise.resolve();
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle API calls differently than static assets
  let isApiRequest = false;

  try {
    const reqUrl = new URL(event.request.url);
    isApiRequest = reqUrl.pathname.startsWith('/api/') || reqUrl.pathname === '/api';
  } catch (e) {
    isApiRequest = false;
  }

  if (isApiRequest) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache successful API responses
          if (response && response.ok) {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => {
          // If offline, try to return cached JSON response for APIs
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;
            return new Response(JSON.stringify({ error: 'offline', message: 'API unavailable' }), {
              status: 503,
              headers: { 'Content-Type': 'application/json' }
            });
          });
        })
    );
    return;
  }

  // For static assets: cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(response => {
          // Cache successful responses
          if (response && response.status === 200) {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, clonedResponse);
            });
          }
          return response;
        });
      })
      .catch(err => {
        console.log('Fetch failed:', err);
        // Return offline fallback for documents (SPA) or generic failure
        if (event.request.destination === 'document') {
          return caches.match('/Page/index.html');
        }
        return new Response('Network request failed', { status: 503 });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
