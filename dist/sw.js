const CACHE = "personalidades-astrologia-v19";
const ASSETS = ["./", "index.html", "assets/styles.css?v=19", "assets/app.js?v=19", "assets/astro-chart.js?v=19", "assets/icon.svg", "manifest.webmanifest", "vendor/swisseph/swisseph-browser.js", "vendor/swisseph/swisseph.js", "vendor/swisseph/swisseph.wasm", "vendor/swisseph/ephe/sepl_18.se1", "vendor/swisseph/ephe/semo_18.se1", "vendor/swisseph/LICENSE.txt"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone(); caches.open(CACHE).then(cache => cache.put("index.html", copy)); return response;
    }).catch(() => caches.match("index.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
  }).catch(() => caches.match("index.html"))));
});

