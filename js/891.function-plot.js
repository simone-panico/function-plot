!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.functionPlot=t():e.functionPlot=t()}(self,(()=>(()=>{"use strict";var e,t,o={7891:(e,t,o)=>{var r=o(5248),n=o.n(r),i=o(8867);const l={interval:o.n(i)(),builtIn:n()},s="object"==typeof o.g&&"math"in o.g?o.g.math:"object"==typeof window&&"math"in window?window.math:null;function a(e){return function(t,o,r){return function(t,o){const r=t[o],n=e+"_Expression_"+o,i=e+"_Compiled_"+o;r!==t[n]&&(t[n]=r,t[i]=function(t){if("string"==typeof t){const o=l[e](t);return s&&"builtIn"===e?{eval:o.evaluate||o.eval}:o}if("function"==typeof t)return{eval:t};throw Error("expression must be a string or a function")}(r))}(t,o),function(t,o){return t[e+"_Compiled_"+o]}(t,o).eval(Object.assign({},t.scope||{},r))}}s&&(l.builtIn=s.compile),a("builtIn");const u=a("interval");self.onmessage=({data:e})=>{const t=e.d,o=e.xCoords,r=e.nTask,n=[];for(let e=0;e<o.length-1;e+=1){const r={lo:o[e],hi:o[e+1]},i=u(t,"fn",{x:r});i.lo>i.hi||(i.lo!==-1/0||i.hi!==1/0?n.push([r,i]):n.push(null))}self.postMessage({samples:n,nTask:r})}}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.m=o,n.x=()=>{var e=n.O(void 0,[393],(()=>n(7891)));return n.O(e)},e=[],n.O=(t,o,r,i)=>{if(!o){var l=1/0;for(c=0;c<e.length;c++){for(var[o,r,i]=e[c],s=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((e=>n.O[e](o[a])))?o.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[])),n.u=e=>e+".function-plot.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={891:1};n.f.i=(t,o)=>{e[t]||importScripts(n.p+n.u(t))};var t=self.webpackChunkfunctionPlot=self.webpackChunkfunctionPlot||[],o=t.push.bind(t);t.push=t=>{var[r,i,l]=t;for(var s in i)n.o(i,s)&&(n.m[s]=i[s]);for(l&&l(n);r.length;)e[r.pop()]=1;o(t)}})(),t=n.x,n.x=()=>n.e(393).then(t);var i=n.x();return i.default})()));
//# sourceMappingURL=891.function-plot.js.map