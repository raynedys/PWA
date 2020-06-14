//fungsi untuk menentukan file apa saja yang mau di cache
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('first-app') //nama caches
        .then(function (cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/src/css/app.css',
                '/src/js/app.js',
                '/manifest.json',
                '/src/images/app-icon-48x48.png',
                '/src/images/app-icon-96x96.png',
                '/src/images/app-icon-144x144.png',
                '/src/images/app-icon-192x192.png',
                '/src/images/app-icon-256x256.png',
                '/src/images/app-icon-384x384.png',
                '/src/images/app-icon-512x512.png',
            ])
        })
    );
    return self.clients.claim(); //client bisa claim file2 yang di cache
});


//fetch gunanya untuk ngambil dari cache  
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (res) {
            return res;
        })
    );
});