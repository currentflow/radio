const e=location.pathname.split("/").slice(0,-1).join("/"),p=[e+"/_app/immutable/entry/app.Dxmo8nCz.js",e+"/_app/immutable/nodes/0.DEDiC-I4.js",e+"/_app/immutable/assets/0.9MMHwsER.css",e+"/_app/immutable/nodes/1.DF-XrYbM.js",e+"/_app/immutable/assets/1.hUOVjyLt.css",e+"/_app/immutable/nodes/2.ChZAhNqC.js",e+"/_app/immutable/assets/2.B3pQtuf6.css",e+"/_app/immutable/chunks/entry.DLrk72OV.js",e+"/_app/immutable/chunks/environment.Dcae8lW1.js",e+"/_app/immutable/chunks/index.BTjVifcI.js",e+"/_app/immutable/chunks/scheduler.H4Y9z2Ct.js",e+"/_app/immutable/entry/start.PdVUaBUy.js"],l=[e+"/.nojekyll",e+"/favicon.png",e+"/favicon.svg",e+"/icon-192.png",e+"/icon-512.png",e+"/icon-96.png",e+"/manifest.json",e+"/robots.txt"],m="0.1.01",n=`cache-${m}`,c=[...p,...l];self.addEventListener("install",a=>{async function t(){await(await caches.open(n)).addAll(c)}a.waitUntil(t())});self.addEventListener("activate",a=>{async function t(){for(const s of await caches.keys())s!==n&&await caches.delete(s)}a.waitUntil(t())});self.addEventListener("fetch",a=>{if(a.request.destination==="audio"||a.request.method!=="GET")return;async function t(){const s=new URL(a.request.url),o=await caches.open(n);if(c.includes(s.pathname)){const i=await o.match(s.pathname);if(i)return i}}a.respondWith(t())});
