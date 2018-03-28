self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/js/app.js',
          '/src/css/app.css',
          '/src/images/beer.png',
          '/src/images/beer-icon-128x128.png',
          '/src/images/beer-icon-256x256.png',
          '/src/images/beer-icon-512x512.png',
          '/favicon.ico',
          '/src/js/jquery.js'
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});