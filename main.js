!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=2)}({2:function(e,r,t){"use strict";t.r(r);const n=e=>r=>typeof r===e,o=n("string"),u=n("number"),i=(e=>e=>e.every(u))();(e=>r=>{if(!o(e)||!(e=>Array.isArray(e))(r))return void console.error('Argument(1) must be of type: "string".  Argument(2) must be of type: Array[Number]');if(!i(r))return void console.error("Argument(2) must be composed of type: Number");const t=document.getElementById(e),[n,u,l]=r,c={R:n,G:u,B:l};t.style.backgroundColor=`rgb(${n},${u},${l})`;let f="B",s="inc",a=0;setInterval(()=>{let e=c[f];105===a&&(a=0,f=(e=>({R:"G",B:"R",G:"B"})[e])(f),s=88===e?"inc":"dec"),a++,(e=>({R:e=>t.style.backgroundColor=`rgb(${e},${c.G},${c.B})`,G:e=>t.style.backgroundColor=`rgb(${c.R},${e},${c.B})`,B:e=>t.style.backgroundColor=`rgb(${c.R},${c.G},${e})`})[e])(f)("inc"===s?c[f]++:c[f]--)},200)})("main")([193,88,88])}});
//# sourceMappingURL=main.js.map