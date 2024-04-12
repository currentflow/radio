/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;
// console.log("cache name", CACHE)

const ASSETS = [
	...build, // the app itself
	...files  // everything in `static`
];

// self.addEventListener("install", function (event) {
//   console.log("Service worker installed");

//   event.waitUntil(
//     caches.open(CACHE).then(function (cache) {
//       console.log("Installed cache: ", CACHE);
//       return cache.addAll(ASSETS);
//     })
//   );
// });

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});



// self.addEventListener('activate', function(event) {
// 	console.log("Service worker activated");
//   // Deletes all caches not included in whitelist - 
//   // ie, change in version number etc.
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (CACHE !== cacheName) {
//             console.log("Deleted cache: ", cacheName);
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});




// 	// If any fetch fails, 
// self.addEventListener("fetch", function (event) {

//   if (event.request.destination === "audio") {
//     return;
//   };  
  
//   if (event.request.method !== "GET") return;
  
//   event.respondWith(
//     fetch(event.request).catch(function (error) {
//       // validate request is for in-scope navigation
//       if (
//         event.request.destination !== "document" ||
//         event.request.mode !== "navigate"
//       ) {
//         return;
//       }
      
//       console.error("service worker: offline " + error);
//       // load offline page
//       return caches.open(CACHE).then(function (cache) {
//         return cache.match(offlinePage);
//       });
//     })
//   );
// });



self.addEventListener('fetch', (event) => {

	// ignore audio requests 
	if (event.request.destination === "audio") {
    return;
  };  

	// ignore POST requests etc
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}
	}
	event.respondWith(respond());
});