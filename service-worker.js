"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/instagreen/index.html","f53c07951abf8122ee6f3efd3d99927f"],["/instagreen/static/css/main.04cf6d73.css","7584b04752765e97bad53b98a44f6d7e"],["/instagreen/static/js/main.0f3d7de7.js","cc9aebe10cdd7763c4a477aefada2f34"],["/instagreen/static/media/Gilroy-Light.14d238ba.svg","14d238ba55c32e49610e0f861c03d5f8"],["/instagreen/static/media/Gilroy-Light.73bfa12b.ttf","73bfa12b55452a65a0253c511856d6c2"],["/instagreen/static/media/Gilroy-Light.8837b4c7.woff2","8837b4c79722b348e9c808c9be53d15d"],["/instagreen/static/media/Gilroy-Light.f9b62dd8.woff","f9b62dd8f7c5cc5820eee7743544d321"],["/instagreen/static/media/Gilroy-Regular.11c5b356.woff2","11c5b3569c89aeb846430453ceb7f6e6"],["/instagreen/static/media/Gilroy-Regular.2abef08d.woff","2abef08d922206ae58ff5e8f75015547"],["/instagreen/static/media/Gilroy-Regular.765a1e6f.svg","765a1e6fa6adc79fa3cf36d1e6e2c46d"],["/instagreen/static/media/Gilroy-Regular.af5b8da1.ttf","af5b8da12b32c5e74532c6446eb356b4"],["/instagreen/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/instagreen/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/instagreen/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/instagreen/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/instagreen/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/instagreen/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/instagreen/static/media/lifefaker-splash.426c1aaf.jpg","426c1aaf54539b080effdcdde129b5d7"],["/instagreen/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/instagreen/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/instagreen/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/instagreen/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/instagreen/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});