if(!self.define){let e,r={};const o=(o,s)=>(o=new URL(o+".js",s).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let t={};const n=e=>o(e,c),l={module:{uri:c},exports:t,require:n};r[c]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pirate_rook_scorecard"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/pirate_rook_scorecard/css/app.b8263af6.css",revision:null},{url:"/pirate_rook_scorecard/img/logo.57f81f5c.png",revision:null},{url:"/pirate_rook_scorecard/index.html",revision:"e6e966b094833c1157b6eb2e81cfe1ee"},{url:"/pirate_rook_scorecard/js/app.fd3103fc.js",revision:null},{url:"/pirate_rook_scorecard/js/chunk-vendors.af6de6de.js",revision:null},{url:"/pirate_rook_scorecard/manifest.json",revision:"0605626ff34cb8b87f715538a74ce745"},{url:"/pirate_rook_scorecard/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
