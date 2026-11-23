const V="zale-v2";
self.addEventListener("install",e=>{self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>clients.claim()));});
self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));});
