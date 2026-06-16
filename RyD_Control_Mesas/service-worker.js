const CACHE_NAME = 'ryd-control-mesas-v1';

const archivos = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación
self.addEventListener('install', event => {

  console.log('Service Worker instalado');

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(archivos))

  );

});

// Activación
self.addEventListener('activate', event => {

  console.log('Service Worker activado');

});

// Intercepta las peticiones
self.addEventListener('fetch', event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        return response || fetch(event.request);

      })

  );

});