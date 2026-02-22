'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1c0f9ca24f054cb201bf1a62b392cc4e",
"assets/AssetManifest.bin.json": "d74073f956070bcbd19a1123b14c3ed3",
"assets/AssetManifest.json": "3aef193a3882951013335e1b763811db",
"assets/assets/background/1.jpg": "f4e3d96c229c080e6e424306a289935f",
"assets/assets/background/2.jpg": "4eeaa7b63633f8e5bd3cfbd1da4f4480",
"assets/assets/background/3.jpg": "4f6549b7226889fba23a9f5db21d3918",
"assets/assets/background/4.jpg": "cda683f401b1f4ef2312bb08b8eb5775",
"assets/assets/background/credits.json": "967854bacdec2fe5f06e626548ff7f10",
"assets/assets/music/Ambient_Forest_Rain.mp3": "69e7980817ee9f647e4ce2eec10fbfd1",
"assets/assets/music/credits.json": "4a232153c5b51b55d8c92977e1c35891",
"assets/assets/music/The_Old_Water_Mill_Meditation.mp3": "0aec24d711381b94516aeba2e76d278e",
"assets/assets/zenchan/angry.png": "ead03d517709079318c7dd3e907152d6",
"assets/assets/zenchan/happy.png": "9053fead126be4b53edf9ffe00a50f21",
"assets/assets/zenchan/laugh.png": "817a5d4449c4360498cb71acc45a7da6",
"assets/assets/zenchan/neutral.png": "851de95674b28b28d255889ac8675118",
"assets/assets/zenchan/sad.png": "ec7a2bf08b32aa5afec9be5210756387",
"assets/assets/zenchan/scared.png": "c21f3edb4f82a3f8e7b1055aa119e85e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f3e695e4067b4f6815b330ef2a4f99e2",
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
"flutter_bootstrap.js": "ddc931676e9455a4fd978d255d7eabd2",
"icons/Icon-192.png": "0ced95473ca0c27a988884c3214c6455",
"icons/Icon-512.png": "81a3a105bceb9550a5a5c0e6e1728829",
"icons/Icon-maskable-192.png": "4e9877f4136bbc99c50e55f5b1ac4e1b",
"icons/Icon-maskable-512.png": "06f0541cca9d0e4a81c009be9cdde185",
"index.html": "74066ae84a09dc793a51d5862125d792",
"/": "74066ae84a09dc793a51d5862125d792",
"main.dart.js": "18fcd5f9905f9c5f8562b96ba6af6294",
"manifest.json": "118a49450d7f112467b757b997a44c2c",
"version.json": "ed7207963cf8f23a3aadb89b4e76802d"};
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
