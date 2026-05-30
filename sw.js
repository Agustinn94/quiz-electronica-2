// ============================================================
// SERVICE WORKER - Actualización automática
// La versión se pone SOLA (marca de tiempo de abajo).
// Agustín: NO toques nada acá. Cada vez que Claude te pase
// un sw.js nuevo, ya viene con la versión cambiada.
// ============================================================
const CACHE_VERSION = "electronica-20260530-153754";
const ARCHIVOS = ["./","./index.html","./config.js","./logo.png"];

self.addEventListener("install", e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_VERSION).then(c=>c.addAll(ARCHIVOS)).catch(()=>{}));
});

self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_VERSION).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e=>{
  // Red primero: si hay internet, siempre muestra lo último.
  // Si no hay internet, usa lo guardado.
  e.respondWith(
    fetch(e.request).then(resp=>{
      const copia=resp.clone();
      caches.open(CACHE_VERSION).then(c=>c.put(e.request,copia)).catch(()=>{});
      return resp;
    }).catch(()=>caches.match(e.request))
  );
});
