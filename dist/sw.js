const CACHE = "personalidades-astrologia-v15";
const ASSETS = ["./", "index.html", "assets/styles.css?v=15", "assets/app.js", "assets/astro-chart.js?v=15", "assets/icon.svg", "manifest.webmanifest", "vendor/swisseph/swisseph-browser.js", "vendor/swisseph/swisseph.js", "vendor/swisseph/swisseph.wasm", "vendor/swisseph/ephe/sepl_18.se1", "vendor/swisseph/ephe/semo_18.se1", "vendor/swisseph/LICENSE.txt"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
  }).catch(() => caches.match("index.html"))));
});
