"use strict";var precacheConfig=[["/the-loop-city-guide/index.html","3c5804e7846aa355ff20feaee868222e"],["/the-loop-city-guide/static/css/main.9a232589.css","3506190c073f4cd2f56d6d48c0009130"],["/the-loop-city-guide/static/js/main.d68347a1.js","df200f5a6336b9171b72829b7ba985da"],["/the-loop-city-guide/static/media/icons.2defb9de.svg","2defb9de480bc6950271222a055dbd68"],["/the-loop-city-guide/static/media/placeholder.da1513a1.svg","da1513a142e994c16805f4501b284fcf"],["/the-loop-city-guide/static/media/proximanova-bold-webfont.12c2feea.woff","12c2feea0a93f8d0744a8463a3671b38"],["/the-loop-city-guide/static/media/proximanova-bold-webfont.3460fdbe.woff2","3460fdbeeb6aabc1a56ca5e6278e6cd5"],["/the-loop-city-guide/static/media/proximanova-regular-webfont.b5e09b7e.woff","b5e09b7e8fa951246e8f934f5d365a7a"],["/the-loop-city-guide/static/media/proximanova-regular-webfont.b87f15db.woff2","b87f15db6e33e5668390b749f51a72c5"],["/the-loop-city-guide/static/media/proximanova-semibold-webfont.7b86ef4f.woff2","7b86ef4f81f1c1171772dc79cfecc236"],["/the-loop-city-guide/static/media/proximanova-semibold-webfont.de086bee.woff","de086bee84c41f0dd01ad5e8e7796b88"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/the-loop-city-guide/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});