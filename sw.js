if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const c=e=>a(e,r),o={module:{uri:r},exports:s,require:c};i[r]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(d(...e),s)))}}define(["./workbox-e28e86ca"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"87ad258840d2866e91e05ae74ca7d4ae"},{url:"assets/index-Bxj8_pbu.js",revision:null},{url:"assets/index-D1WzkVR5.css",revision:null},{url:"favicon-16x16.png",revision:"01b44f9891656425eeb1e8bcae664715"},{url:"favicon-32x32.png",revision:"6806ea030cf217656d8a280c3abd9bde"},{url:"favicon.ico",revision:"29c0e9729800f8149ce4180bc076df63"},{url:"index.html",revision:"33261dc971c9a6b01941d30dc28d8838"},{url:"pwa-192x192.png",revision:"fd3eeeaba984254edd6aec20dfb83359"},{url:"pwa-512x512.png",revision:"326f7176dc96edd4e57d4b401ad13103"},{url:"pwa-maskable-192x192.png",revision:"c0dedae5c968792f152873de999880dd"},{url:"pwa-maskable-512x512.png",revision:"7d06a8e196ff34a1b937772ff4f174a2"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon.ico",revision:"29c0e9729800f8149ce4180bc076df63"},{url:"apple-touch-icon.png",revision:"87ad258840d2866e91e05ae74ca7d4ae"},{url:"pwa-192x192.png",revision:"fd3eeeaba984254edd6aec20dfb83359"},{url:"pwa-512x512.png",revision:"326f7176dc96edd4e57d4b401ad13103"},{url:"pwa-maskable-192x192.png",revision:"c0dedae5c968792f152873de999880dd"},{url:"pwa-maskable-512x512.png",revision:"7d06a8e196ff34a1b937772ff4f174a2"},{url:"manifest.webmanifest",revision:"a138db8c4ccebc41eaa7aeba90d3d85b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("http://localhost:8082/api/superhero",new e.StaleWhileRevalidate({cacheName:"superheroes-cache",plugins:[]}),"GET")}));
