'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56c34703bf23630cb55c5d755055c973",
"assets/AssetManifest.bin.json": "c2f3373ebd52bea317c3897a0b28d218",
"assets/AssetManifest.json": "3d53e6617fa3ca9d6099ceb3d0b2d740",
"assets/assets/background/1.jpg": "f4e3d96c229c080e6e424306a289935f",
"assets/assets/background/2.jpg": "4eeaa7b63633f8e5bd3cfbd1da4f4480",
"assets/assets/background/3.jpg": "4f6549b7226889fba23a9f5db21d3918",
"assets/assets/background/4.jpg": "cda683f401b1f4ef2312bb08b8eb5775",
"assets/assets/background/credits.json": "967854bacdec2fe5f06e626548ff7f10",
"assets/assets/music/Ambient_Forest_Rain.mp3": "69e7980817ee9f647e4ce2eec10fbfd1",
"assets/assets/music/credits.json": "4a232153c5b51b55d8c92977e1c35891",
"assets/assets/music/The_Old_Water_Mill_Meditation.mp3": "0aec24d711381b94516aeba2e76d278e",
"assets/assets/tutorial/1.png": "2a385a0380db9f7f29c6a959f22db782",
"assets/assets/tutorial/2.png": "4145cfdd95c75b69f0163143c2fa0ce4",
"assets/assets/tutorial/3.png": "906d264f7cf4184e1783e837f9692cdf",
"assets/assets/tutorial/4.png": "795f959788367922f69931786bf70ebe",
"assets/assets/tutorial/5.png": "3a90643298d3fbf2e4840d4e1491a11a",
"assets/assets/tutorial/6.png": "be122f31c0e804400d49b92108576210",
"assets/assets/tutorial/7.png": "ea5c2f5a13b60311aae9381967d4b364",
"assets/assets/zenchan/angry.png": "8eb5abfe91e6a217c4c01685d72bdcd8",
"assets/assets/zenchan/happy.png": "8205dff622a81d76784310fbdbddc87a",
"assets/assets/zenchan/laugh.png": "8f3793db5dc86b8352a2128d4d37eb74",
"assets/assets/zenchan/neutral.png": "a824f24486c21d6668ac92117e743b82",
"assets/assets/zenchan/sad.png": "0ff6f69dfdde822847e5169ded23f64a",
"assets/assets/zenchan/scared.png": "a4838bb49649c3b1111492d5a7c15b55",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "5c54436b821a1b43e48fba294bc3a3e1",
"assets/NOTICES": "d7febca21babd4c6090487e3a4fb88c5",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "7e17a336e64c7aaf2ab0fd4fe1e6cf0f",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b4ab3574b00feb9165fefd08634da145",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "b37654208f2ab2461a0f66424a20335a",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "d466fda2e806ef7abe69ca33ef278c97",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "2f778c1b2a7258b779c95955d5e1d271",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "b23ae5f4544dc7fcb018021c383feac7",
"icons/Icon-192.png": "0ced95473ca0c27a988884c3214c6455",
"icons/Icon-512.png": "81a3a105bceb9550a5a5c0e6e1728829",
"icons/Icon-maskable-192.png": "4e9877f4136bbc99c50e55f5b1ac4e1b",
"icons/Icon-maskable-512.png": "06f0541cca9d0e4a81c009be9cdde185",
"index.html": "74066ae84a09dc793a51d5862125d792",
"/": "74066ae84a09dc793a51d5862125d792",
"main.dart.js": "6de4dc4c48c223c5cf9a7aea6ae16cd0",
"manifest.json": "118a49450d7f112467b757b997a44c2c",
"version.json": "08a9e71d8723fff28981fdb8e0361bc3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
