(self.webpackChunkfunctionPlot=self.webpackChunkfunctionPlot||[]).push([[393],{5248:(t,e,n)=>{"use strict";t.exports=n(9976)},517:t=>{"use strict";t.exports=function(){var t=Object.create(Math);return t.factory=function(t){if("number"!=typeof t)throw new TypeError("built-in math factory only accepts numbers");return Number(t)},t.add=function(t,e){return t+e},t.sub=function(t,e){return t-e},t.mul=function(t,e){return t*e},t.div=function(t,e){return t/e},t.mod=function(t,e){return t%e},t.factorial=function(t){for(var e=1,n=2;n<=t;n+=1)e*=n;return e},t.nthRoot=function(t,e){var n=e<0;if(n&&(e=-e),0===e)throw new Error("Root must be non-zero");if(t<0&&Math.abs(e)%2!=1)throw new Error("Root must be odd when a is negative.");if(0===t)return 0;if(!isFinite(t))return n?0:t;var r=Math.pow(Math.abs(t),1/e);return r=t<0?-r:r,n?1/r:r},t.logicalOR=function(t,e){return t||e},t.logicalXOR=function(t,e){return t!=e},t.logicalAND=function(t,e){return t&&e},t.bitwiseOR=function(t,e){return t|e},t.bitwiseXOR=function(t,e){return t^e},t.bitwiseAND=function(t,e){return t&e},t.lessThan=function(t,e){return t<e},t.lessEqualThan=function(t,e){return t<=e},t.greaterThan=function(t,e){return t>e},t.greaterEqualThan=function(t,e){return t>=e},t.equal=function(t,e){return t==e},t.strictlyEqual=function(t,e){return t===e},t.notEqual=function(t,e){return t!=e},t.strictlyNotEqual=function(t,e){return t!==e},t.shiftRight=function(t,e){return t>>e},t.shiftLeft=function(t,e){return t<<e},t.unsignedRightShift=function(t,e){return t>>>e},t.negative=function(t){return-t},t.positive=function(t){return t},t}},9976:(t,e,n)=>{"use strict";var r=n(2223),o=n(517)();function i(t){Object.keys(t).forEach((function(e){var n=t[e];t[e]=o.factory(n)}))}t.exports=function(t){return(new r).setDefs({$$processScope:i}).parse(t).compile(o)},t.exports.math=o},4635:t=>{var e=!1;if("undefined"!=typeof Float64Array){var n=new Float64Array(1),r=new Uint32Array(n.buffer);n[0]=1,e=!0,1072693248===r[1]?(t.exports=function(t){return n[0]=t,[r[0],r[1]]},t.exports.pack=function(t,e){return r[0]=t,r[1]=e,n[0]},t.exports.lo=function(t){return n[0]=t,r[0]},t.exports.hi=function(t){return n[0]=t,r[1]}):1072693248===r[0]?(t.exports=function(t){return n[0]=t,[r[1],r[0]]},t.exports.pack=function(t,e){return r[1]=t,r[0]=e,n[0]},t.exports.lo=function(t){return n[0]=t,r[1]},t.exports.hi=function(t){return n[0]=t,r[0]}):e=!1}if(!e){var o=new Buffer(8);t.exports=function(t){return o.writeDoubleLE(t,0,!0),[o.readUInt32LE(0,!0),o.readUInt32LE(4,!0)]},t.exports.pack=function(t,e){return o.writeUInt32LE(t,0,!0),o.writeUInt32LE(e,4,!0),o.readDoubleLE(0,!0)},t.exports.lo=function(t){return o.writeDoubleLE(t,0,!0),o.readUInt32LE(0,!0)},t.exports.hi=function(t){return o.writeDoubleLE(t,0,!0),o.readUInt32LE(4,!0)}}t.exports.sign=function(e){return t.exports.hi(e)>>>31},t.exports.exponent=function(e){return(t.exports.hi(e)<<1>>>21)-1023},t.exports.fraction=function(e){var n=t.exports.lo(e),r=t.exports.hi(e),o=1048575&r;return 2146435072&r&&(o+=1<<20),[n,o]},t.exports.denormalized=function(e){return!(2146435072&t.exports.hi(e))}},4470:t=>{"use strict";var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===n.call(t)},s=function(t){if(!t||"[object Object]"!==n.call(t))return!1;var r,o=e.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&e.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!o&&!i)return!1;for(r in t);return void 0===r||e.call(t,r)},u=function(t,e){r&&"__proto__"===e.name?r(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},a=function(t,n){if("__proto__"===n){if(!e.call(t,n))return;if(o)return o(t,n).value}return t[n]};t.exports=function t(){var e,n,r,o,h,c,p=arguments[0],l=1,f=arguments.length,y=!1;for("boolean"==typeof p&&(y=p,p=arguments[1]||{},l=2),(null==p||"object"!=typeof p&&"function"!=typeof p)&&(p={});l<f;++l)if(null!=(e=arguments[l]))for(n in e)r=a(p,n),p!==(o=a(e,n))&&(y&&o&&(s(o)||(h=i(o)))?(h?(h=!1,c=r&&i(r)?r:[]):c=r&&s(r)?r:{},u(p,{name:n,newValue:t(y,c,o)})):void 0!==o&&u(p,{name:n,newValue:o}));return p}},8867:(t,e,n)=>{"use strict";t.exports=n(2320)},3380:t=>{"use strict";t.exports=function(t){t.mod=t.fmod,t.lessThan=t.lt,t.lessEqualThan=t.leq,t.greaterThan=t.gt,t.greaterEqualThan=t.geq,t.strictlyEqual=t.equal,t.strictlyNotEqual=t.notEqual,t.logicalAND=function(t,e){return t&&e},t.logicalXOR=function(t,e){return t^e},t.logicalOR=function(t,e){return t||e}}},2320:(t,e,n)=>{"use strict";const r=n(813),o=n(9851).ZP;function i(t){Object.keys(t).forEach((function(e){const n=t[e];"number"==typeof n||Array.isArray(n)?t[e]=o.factory(n):"object"==typeof n&&"lo"in n&&"hi"in n&&(t[e]=o.factory(n.lo,n.hi))}))}n(3380)(o),t.exports=function(t){return(new r).setDefs({$$processScope:i}).parse(t).compile(o)},t.exports.policies=n(4186)(o),t.exports.Interval=o},4186:t=>{"use strict";t.exports=function(t){return{disableRounding:function(){t.round.disable()},enableRounding:function(){t.round.enable()}}}},813:(t,e,n)=>{"use strict";t.exports=n(7076)},7076:(t,e,n)=>{"use strict";var r=n(9213).Parser,o=n(1046),i=n(4470);function s(t,e){this.statements=[],this.defs=e||{},this.interpreter=new o(this,t)}s.prototype.setDefs=function(t){return this.defs=i(this.defs,t),this},s.prototype.compile=function(t){var e=this;if(!t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("namespace must be an object");if("function"!=typeof t.factory)throw TypeError("namespace.factory must be a function");this.defs.ns=t,this.defs.$$mathCodegen={getProperty:function(t,n,r){function o(t){return e.interpreter.options.applyFactoryToScope&&"function"!=typeof t?r.factory(t):t}if(t in n)return o(n[t]);if(t in r)return o(r[t]);throw SyntaxError('symbol "'+t+'" is undefined')},functionProxy:function(t,e){if("function"!=typeof t)throw SyntaxError('symbol "'+e+'" must be a function');return t}},this.defs.$$processScope=this.defs.$$processScope||function(){};var n=Object.keys(this.defs).map((function(t){return"var "+t+' = defs["'+t+'"]'}));if(!this.statements.length)throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");this.statements[this.statements.length-1]="return "+this.statements[this.statements.length-1];var r=this.statements.join(";"),o=n.join("\n")+"\n"+["return {","  eval: function (scope) {","    scope = scope || {}","    $$processScope(scope)","    "+r,"  },","  code: '"+r+"'","}"].join("\n");return new Function("defs",o)(this.defs)},s.prototype.parse=function(t){var e=this,n=(new r).parse(t);return this.statements=n.blocks.map((function(t){return e.interpreter.next(t)})),this},t.exports=s},1046:(t,e,n)=>{"use strict";var r=n(4470),o={ArrayNode:n(5483),AssignmentNode:n(446),ConditionalNode:n(3865),ConstantNode:n(9094),FunctionNode:n(73),OperatorNode:n(1715),SymbolNode:n(5835),UnaryNode:n(74)},i=function(t,e){this.owner=t,this.options=r({factory:"ns.factory",raw:!1,rawArrayExpressionElements:!0,rawCallExpressionElements:!1,applyFactoryToScope:!1},e)};r(i.prototype,o),i.prototype.next=function(t){if(!(t.type in this))throw new TypeError("the node type "+t.type+" is not implemented");return this[t.type](t)},i.prototype.rawify=function(t,e){var n=this.options.raw;t&&(this.options.raw=!0),e(),t&&(this.options.raw=n)},t.exports=i},8684:t=>{"use strict";t.exports={"+":"add","-":"sub","*":"mul","/":"div","^":"pow","%":"mod","!":"factorial","|":"bitwiseOR","^|":"bitwiseXOR","&":"bitwiseAND","||":"logicalOR",xor:"logicalXOR","&&":"logicalAND","<":"lessThan",">":"greaterThan","<=":"lessEqualThan",">=":"greaterEqualThan","===":"strictlyEqual","==":"equal","!==":"strictlyNotEqual","!=":"notEqual",">>":"shiftRight","<<":"shiftLeft",">>>":"unsignedRightShift"}},1681:t=>{"use strict";t.exports={"+":"positive","-":"negative","~":"oneComplement"}},5483:t=>{"use strict";t.exports=function(t){var e=this,n=[];this.rawify(this.options.rawArrayExpressionElements,(function(){n=t.nodes.map((function(t){return e.next(t)}))}));var r="["+n.join(",")+"]";return this.options.raw?r:this.options.factory+"("+r+")"}},446:t=>{"use strict";t.exports=function(t){return'scope["'+t.name+'"] = '+this.next(t.expr)}},3865:t=>{"use strict";t.exports=function(t){return"(!!("+this.next(t.condition)+") ? ("+this.next(t.trueExpr)+") : ("+this.next(t.falseExpr)+") )"}},9094:t=>{"use strict";t.exports=function(t){return this.options.raw?t.value:this.options.factory+"("+t.value+")"}},73:(t,e,n)=>{"use strict";var r=n(9213).nodeTypes.SymbolNode,o=function(t){return"$$mathCodegen.functionProxy("+this.next(new r(t.name))+', "'+t.name+'")'};t.exports=function(t){var e=this,n=o.call(this,t),r=[];return this.rawify(this.options.rawCallExpressionElements,(function(){r=t.args.map((function(t){return e.next(t)}))})),n+"("+r.join(", ")+")"},t.exports.functionProxy=o},1715:(t,e,n)=>{"use strict";var r=n(8684);t.exports=function(t){if(this.options.raw)return["("+this.next(t.args[0]),t.op,this.next(t.args[1])+")"].join(" ");var e=r[t.op];if(!e)throw TypeError("unidentified operator");return this.FunctionNode({name:e,args:t.args})}},5835:t=>{"use strict";t.exports=function(t){return'$$mathCodegen.getProperty("'+t.name+'", scope, ns)'}},74:(t,e,n)=>{"use strict";var r=n(1681);t.exports=function(t){if(this.options.raw)return t.op+this.next(t.argument);if(!(t.op in r))throw new SyntaxError(t.op+" not implemented");var e=r[t.op];return this.FunctionNode({name:e,args:[t.argument]})}},9851:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>Yt});var r={};n.r(r),n.d(r,{hasInterval:()=>m,hasValue:()=>y,intervalsOverlap:()=>d,isEmpty:()=>c,isInterval:()=>h,isSingleton:()=>l,isWhole:()=>p,zeroIn:()=>f});var o={};n.r(o),n.d(o,{almostEqual:()=>F,assertIncludes:()=>S,equal:()=>A,geq:()=>U,greaterEqualThan:()=>V,greaterThan:()=>C,gt:()=>W,leq:()=>G,lessEqualThan:()=>D,lessThan:()=>q,lt:()=>$,notEqual:()=>j});var i={};n.r(i),n.d(i,{add:()=>X,div:()=>Q,divide:()=>K,mul:()=>J,multiply:()=>Z,negative:()=>et,positive:()=>tt,sub:()=>z,subtract:()=>B});var s={};n.r(s),n.d(s,{fmod:()=>nt,multiplicativeInverse:()=>rt,nthRoot:()=>st,pow:()=>ot,sqrt:()=>it});var u={};n.r(u),n.d(u,{LOG_EXP_10:()=>ct,LOG_EXP_2:()=>lt,abs:()=>Et,clone:()=>It,difference:()=>vt,exp:()=>ut,hull:()=>yt,intersection:()=>mt,ln:()=>ht,log:()=>at,log10:()=>pt,log2:()=>ft,max:()=>gt,min:()=>bt,union:()=>dt,wid:()=>xt,width:()=>wt});var a={};function h(t){return"object"==typeof t&&"number"==typeof t.lo&&"number"==typeof t.hi}function c(t){return t.lo>t.hi}function p(t){return t.lo===-1/0&&t.hi===1/0}function l(t){return t.lo===t.hi}function f(t){return y(t,0)}function y(t,e){return!c(t)&&t.lo<=e&&e<=t.hi}function m(t,e){return!!c(t)||!c(e)&&e.lo<=t.lo&&t.hi<=e.hi}function d(t,e){return!c(t)&&!c(e)&&(t.lo<=e.lo&&e.lo<=t.hi||e.lo<=t.lo&&t.lo<=e.hi)}n.r(a),n.d(a,{acos:()=>Pt,asin:()=>Ot,atan:()=>kt,cos:()=>Tt,cosh:()=>_t,sin:()=>Mt,sinh:()=>At,tan:()=>Ht,tanh:()=>Rt});var v=n(3093),w=n.n(v);function x(t){return t}function E(t){return t===1/0?t:w()(t,-1/0)}function g(t){return t===-1/0?t:w()(t,1/0)}function b(t){return t<0?Math.ceil(t):Math.floor(t)}const I={prev:E,next:g},N={safePrev:E,safeNext:g,prev:t=>I.prev(t),next:t=>I.next(t),addLo:(t,e)=>N.prev(t+e),addHi:(t,e)=>N.next(t+e),subLo:(t,e)=>N.prev(t-e),subHi:(t,e)=>N.next(t-e),mulLo:(t,e)=>N.prev(t*e),mulHi:(t,e)=>N.next(t*e),divLo:(t,e)=>N.prev(t/e),divHi:(t,e)=>N.next(t/e),intLo:t=>b(N.prev(t)),intHi:t=>b(N.next(t)),logLo:t=>N.prev(Math.log(t)),logHi:t=>N.next(Math.log(t)),expLo:t=>N.prev(Math.exp(t)),expHi:t=>N.next(Math.exp(t)),sinLo:t=>N.prev(Math.sin(t)),sinHi:t=>N.next(Math.sin(t)),cosLo:t=>N.prev(Math.cos(t)),cosHi:t=>N.next(Math.cos(t)),tanLo:t=>N.prev(Math.tan(t)),tanHi:t=>N.next(Math.tan(t)),asinLo:t=>N.prev(Math.asin(t)),asinHi:t=>N.next(Math.asin(t)),acosLo:t=>N.prev(Math.acos(t)),acosHi:t=>N.next(Math.acos(t)),atanLo:t=>N.prev(Math.atan(t)),atanHi:t=>N.next(Math.atan(t)),sinhLo:t=>N.prev(Math.sinh(t)),sinhHi:t=>N.next(Math.sinh(t)),coshLo:t=>N.prev(Math.cosh(t)),coshHi:t=>N.next(Math.cosh(t)),tanhLo:t=>N.prev(Math.tanh(t)),tanhHi:t=>N.next(Math.tanh(t)),powLo(t,e){if(e%1!=0)return N.prev(Math.pow(t,e));let n=1==(1&e)?t:1;for(e>>=1;e>0;)t=N.mulLo(t,t),1==(1&e)&&(n=N.mulLo(t,n)),e>>=1;return n},powHi(t,e){if(e%1!=0)return N.next(Math.pow(t,e));let n=1==(1&e)?t:1;for(e>>=1;e>0;)t=N.mulHi(t,t),1==(1&e)&&(n=N.mulHi(t,n)),e>>=1;return n},sqrtLo:t=>N.prev(Math.sqrt(t)),sqrtHi:t=>N.next(Math.sqrt(t)),disable(){I.next=I.prev=x},enable(){I.next=g,I.prev=E}},L=N;class T{constructor(t,e){if(this.lo=0,this.hi=0,!(this instanceof T))return console.log("calling with new"),console.log(t,e),new T(t,e);if(void 0!==t&&void 0!==e){if(h(t)){if(!l(t))throw new TypeError("Interval: interval `lo` must be a singleton");t=t.lo}if(h(e)){if(!l(e))throw TypeError("Interval: interval `hi` must be a singleton");e=e.hi}}else{if(void 0!==t)return Array.isArray(t)?new M(t[0],t[1]):new M(t,t);t=e=0}this.assign(t,e)}singleton(t){return this.set(t,t)}bounded(t,e){return this.set(L.prev(t),L.next(e))}boundedSingleton(t){return this.bounded(t,t)}set(t,e){return this.lo=t,this.hi=e,this}assign(t,e){if("number"!=typeof t||"number"!=typeof e)throw TypeError("Interval#assign: arguments must be numbers");return isNaN(t)||isNaN(e)||t>e?this.setEmpty():this.set(t,e)}setEmpty(){return this.set(Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY)}setWhole(){return this.set(Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)}open(t,e){return this.assign(L.safeNext(t),L.safePrev(e))}halfOpenLeft(t,e){return this.assign(L.safeNext(t),e)}halfOpenRight(t,e){return this.assign(t,L.safePrev(e))}toArray(){return[this.lo,this.hi]}clone(){return(new M).set(this.lo,this.hi)}}const M=function(t){function e(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return new(Function.prototype.bind.apply(t,[null].concat(n)))}return e.prototype=t.prototype,e}(T);M.factory=M;const H=3.141592653589793,O=3.1415926535897936,P={PI_LOW:H,PI_HIGH:O,PI_HALF_LOW:H/2,PI_HALF_HIGH:O/2,PI_TWICE_LOW:2*H,PI_TWICE_HIGH:2*O,get E(){return new M(L.prev(Math.E),L.next(Math.E))},get PI(){return new M(H,O)},get PI_HALF(){return new M(P.PI_HALF_LOW,P.PI_HALF_HIGH)},get PI_TWICE(){return new M(P.PI_TWICE_LOW,P.PI_TWICE_HIGH)},get ZERO(){return new M(0)},get ONE(){return new M(1)},get WHOLE(){return(new M).setWhole()},get EMPTY(){return(new M).setEmpty()}},k=P;function A(t,e){return c(t)?c(e):!c(e)&&t.lo===e.lo&&t.hi===e.hi}const _=1e-7;function R(t,e){if(!t)throw new Error(e||"assertion failed")}function Y(t,e){if(!isFinite(t))return R(t===e,`[Infinity] expected ${t} to be ${e}`);R(Math.abs(t-e)<_,`expected ${t} to be close to ${e}`)}function F(t,e){t=Array.isArray(t)?t:t.toArray(),e=Array.isArray(e)?e:e.toArray(),Y(t[0],e[0]),Y(t[1],e[1])}function S(t,e){F(t,e),t=Array.isArray(t)?t:t.toArray(),e=Array.isArray(e)?e:e.toArray(),R(t[0]<=e[0],`${t[0]} should be less/equal than ${e[0]}`),R(e[1]<=t[1],`${e[1]} should be less/equal than ${t[1]}`)}function j(t,e){return c(t)?!c(e):c(e)||t.hi<e.lo||t.lo>e.hi}function q(t,e){return!c(t)&&!c(e)&&t.hi<e.lo}const $=q;function C(t,e){return!c(t)&&!c(e)&&t.lo>e.hi}const W=C;function D(t,e){return!c(t)&&!c(e)&&t.hi<=e.lo}const G=D;function V(t,e){return!c(t)&&!c(e)&&t.lo>=e.hi}const U=V;function X(t,e){return new M(L.addLo(t.lo,e.lo),L.addHi(t.hi,e.hi))}function B(t,e){return new M(L.subLo(t.lo,e.hi),L.subHi(t.hi,e.lo))}const z=B;function Z(t,e){if(c(t)||c(e))return k.EMPTY;const n=t.lo,r=t.hi,o=e.lo,i=e.hi,s=new M;return n<0?r>0?o<0?i>0?(s.lo=Math.min(L.mulLo(n,i),L.mulLo(r,o)),s.hi=Math.max(L.mulHi(n,o),L.mulHi(r,i))):(s.lo=L.mulLo(r,o),s.hi=L.mulHi(n,o)):i>0?(s.lo=L.mulLo(n,i),s.hi=L.mulHi(r,i)):(s.lo=0,s.hi=0):o<0?i>0?(s.lo=L.mulLo(n,i),s.hi=L.mulHi(n,o)):(s.lo=L.mulLo(r,i),s.hi=L.mulHi(n,o)):i>0?(s.lo=L.mulLo(n,i),s.hi=L.mulHi(r,o)):(s.lo=0,s.hi=0):r>0?o<0?i>0?(s.lo=L.mulLo(r,o),s.hi=L.mulHi(r,i)):(s.lo=L.mulLo(r,o),s.hi=L.mulHi(n,i)):i>0?(s.lo=L.mulLo(n,o),s.hi=L.mulHi(r,i)):(s.lo=0,s.hi=0):(s.lo=0,s.hi=0),s}const J=Z;function K(t,e){return c(t)||c(e)?k.EMPTY:f(e)?0!==e.lo?0!==e.hi?function(t){return 0===t.lo&&0===t.hi?t:k.WHOLE}(t):function(t,e){return 0===t.lo&&0===t.hi?t:f(t)?k.WHOLE:t.hi<0?new M(L.divLo(t.hi,e),Number.POSITIVE_INFINITY):new M(Number.NEGATIVE_INFINITY,L.divHi(t.lo,e))}(t,e.lo):0!==e.hi?function(t,e){return 0===t.lo&&0===t.hi?t:f(t)?k.WHOLE:t.hi<0?new M(Number.NEGATIVE_INFINITY,L.divHi(t.hi,e)):new M(L.divLo(t.lo,e),Number.POSITIVE_INFINITY)}(t,e.hi):k.EMPTY:function(t,e){const n=t.lo,r=t.hi,o=e.lo,i=e.hi,s=new M;return r<0?i<0?(s.lo=L.divLo(r,o),s.hi=L.divHi(n,i)):(s.lo=L.divLo(n,o),s.hi=L.divHi(r,i)):n<0?i<0?(s.lo=L.divLo(r,i),s.hi=L.divHi(n,i)):(s.lo=L.divLo(n,o),s.hi=L.divHi(r,o)):i<0?(s.lo=L.divLo(r,i),s.hi=L.divHi(n,o)):(s.lo=L.divLo(n,i),s.hi=L.divHi(r,o)),s}(t,e)}const Q=K;function tt(t){return new M(t.lo,t.hi)}function et(t){return new M(-t.hi,-t.lo)}function nt(t,e){if(c(t)||c(e))return k.EMPTY;const n=t.lo<0?e.lo:e.hi;let r=t.lo/n;return r=r<0?Math.ceil(r):Math.floor(r),z(t,J(e,new M(r)))}function rt(t){return c(t)?k.EMPTY:f(t)?0!==t.lo?0!==t.hi?k.WHOLE:new M(Number.NEGATIVE_INFINITY,L.divHi(1,t.lo)):0!==t.hi?new M(L.divLo(1,t.hi),Number.POSITIVE_INFINITY):k.EMPTY:new M(L.divLo(1,t.hi),L.divHi(1,t.lo))}function ot(t,e){if(c(t))return k.EMPTY;if("object"==typeof e){if(!l(e))return k.EMPTY;e=e.lo}if(0===e)return 0===t.lo&&0===t.hi?k.EMPTY:k.ONE;if(e<0)return ot(rt(t),-e);if(Number.isSafeInteger(e)){if(t.hi<0){const n=L.powLo(-t.hi,e),r=L.powHi(-t.lo,e);return 1==(1&e)?new M(-r,-n):new M(n,r)}return t.lo<0?1==(1&e)?new M(-L.powLo(-t.lo,e),L.powHi(t.hi,e)):new M(0,L.powHi(Math.max(-t.lo,t.hi),e)):new M(L.powLo(t.lo,e),L.powHi(t.hi,e))}return console.warn("power is not an integer, you should use nth-root instead, returning an empty interval"),k.EMPTY}function it(t){return st(t,2)}function st(t,e){if(c(t)||e<0)return k.EMPTY;if("object"==typeof e){if(!l(e))return k.EMPTY;e=e.lo}const n=1/e;if(t.hi<0){if(Number.isSafeInteger(e)&&1==(1&e)){const e=L.powHi(-t.lo,n),r=L.powLo(-t.hi,n);return new M(-e,-r)}return k.EMPTY}if(t.lo<0){const r=L.powHi(t.hi,n);if(Number.isSafeInteger(e)&&1==(1&e)){const e=-L.powHi(-t.lo,n);return new M(e,r)}return new M(0,r)}return new M(L.powLo(t.lo,n),L.powHi(t.hi,n))}function ut(t){return c(t)?k.EMPTY:new M(L.expLo(t.lo),L.expHi(t.hi))}function at(t){if(c(t))return k.EMPTY;const e=t.lo<=0?Number.NEGATIVE_INFINITY:L.logLo(t.lo);return new M(e,L.logHi(t.hi))}const ht=at,ct=at(new M(10,10));function pt(t){return c(t)?k.EMPTY:Q(at(t),ct)}const lt=at(new M(2,2));function ft(t){return c(t)?k.EMPTY:Q(at(t),lt)}function yt(t,e){const n=c(t),r=c(e);return n&&r?k.EMPTY:n?e.clone():r?t.clone():new M(Math.min(t.lo,e.lo),Math.max(t.hi,e.hi))}function mt(t,e){if(c(t)||c(e))return k.EMPTY;const n=Math.max(t.lo,e.lo),r=Math.min(t.hi,e.hi);return n<=r?new M(n,r):k.EMPTY}function dt(t,e){if(!d(t,e))throw Error("Interval#union: intervals do not overlap");return new M(Math.min(t.lo,e.lo),Math.max(t.hi,e.hi))}function vt(t,e){if(c(t)||p(e))return k.EMPTY;if(d(t,e)){if(t.lo<e.lo&&e.hi<t.hi)throw Error("Interval.difference: difference creates multiple intervals");return e.lo<=t.lo&&e.hi===1/0||e.hi>=t.hi&&e.lo===-1/0?k.EMPTY:e.lo<=t.lo?(new M).halfOpenLeft(e.hi,t.hi):(new M).halfOpenRight(t.lo,e.lo)}return t.clone()}function wt(t){return c(t)?0:L.subHi(t.hi,t.lo)}const xt=wt;function Et(t){return c(t)||p(t)?k.EMPTY:t.lo>=0?t.clone():t.hi<=0?et(t):new M(0,Math.max(-t.lo,t.hi))}function gt(t,e){const n=c(t),r=c(e);return n&&r?k.EMPTY:n?e.clone():r?t.clone():new M(Math.max(t.lo,e.lo),Math.max(t.hi,e.hi))}function bt(t,e){const n=c(t),r=c(e);return n&&r?k.EMPTY:n?e.clone():r?t.clone():new M(Math.min(t.lo,e.lo),Math.min(t.hi,e.hi))}function It(t){return(new M).set(t.lo,t.hi)}function Nt(t){return!isFinite(t.lo)&&t.lo===t.hi}function Lt(t){if(t.lo<0)if(t.lo===-1/0)t.lo=0,t.hi=1/0;else{const e=Math.ceil(-t.lo/k.PI_TWICE_LOW);t.lo+=k.PI_TWICE_LOW*e,t.hi+=k.PI_TWICE_LOW*e}return t}function Tt(t){if(c(t)||Nt(t))return k.EMPTY;const e=(new M).set(t.lo,t.hi);Lt(e);const n=k.PI_TWICE,r=nt(e,n);if(wt(r)>=n.lo)return new M(-1,1);if(r.lo>=k.PI_HIGH)return et(Tt(z(r,k.PI)));const o=r.lo,i=r.hi,s=L.cosLo(i),u=L.cosHi(o);return i<=k.PI_LOW?new M(s,u):i<=n.lo?new M(-1,Math.max(s,u)):new M(-1,1)}function Mt(t){return c(t)||Nt(t)?k.EMPTY:Tt(z(t,k.PI_HALF))}function Ht(t){if(c(t)||Nt(t))return k.EMPTY;const e=(new M).set(t.lo,t.hi);Lt(e);const n=k.PI;let r=nt(e,n);return r.lo>=k.PI_HALF_LOW&&(r=z(r,n)),r.lo<=-k.PI_HALF_LOW||r.hi>=k.PI_HALF_LOW?k.WHOLE:new M(L.tanLo(r.lo),L.tanHi(r.hi))}function Ot(t){if(c(t)||t.hi<-1||t.lo>1)return k.EMPTY;const e=t.lo<=-1?-k.PI_HALF_HIGH:L.asinLo(t.lo),n=t.hi>=1?k.PI_HALF_HIGH:L.asinHi(t.hi);return new M(e,n)}function Pt(t){if(c(t)||t.hi<-1||t.lo>1)return k.EMPTY;const e=t.hi>=1?0:L.acosLo(t.hi),n=t.lo<=-1?k.PI_HIGH:L.acosHi(t.lo);return new M(e,n)}function kt(t){return c(t)?k.EMPTY:new M(L.atanLo(t.lo),L.atanHi(t.hi))}function At(t){return c(t)?k.EMPTY:new M(L.sinhLo(t.lo),L.sinhHi(t.hi))}function _t(t){return c(t)?k.EMPTY:t.hi<0?new M(L.coshLo(t.hi),L.coshHi(t.lo)):t.lo>=0?new M(L.coshLo(t.lo),L.coshHi(t.hi)):new M(1,L.coshHi(-t.lo>t.hi?t.lo:t.hi))}function Rt(t){return c(t)?k.EMPTY:new M(L.tanhLo(t.lo),L.tanhHi(t.hi))}const Yt=Object.assign(M,k,L,u,r,o,i,s,a,{round:L})},2223:(t,e,n)=>{"use strict";t.exports=n(3829)},3829:(t,e,n)=>{"use strict";var r=n(9213).Parser,o=n(6009),i=n(4470);function s(t,e){this.statements=[],this.defs=e||{},this.interpreter=new o(this,t)}s.prototype.setDefs=function(t){return this.defs=i(this.defs,t),this},s.prototype.compile=function(t){if(!t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("namespace must be an object");if("function"!=typeof t.factory)throw TypeError("namespace.factory must be a function");this.defs.ns=t,this.defs.$$mathCodegen={getProperty:function(t,e,n){if(t in e)return e[t];if(t in n)return n[t];throw SyntaxError('symbol "'+t+'" is undefined')},functionProxy:function(t,e){if("function"!=typeof t)throw SyntaxError('symbol "'+e+'" must be a function');return t}},this.defs.$$processScope=this.defs.$$processScope||function(){};var e=Object.keys(this.defs).map((function(t){return"var "+t+' = defs["'+t+'"]'}));if(!this.statements.length)throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");this.statements[this.statements.length-1]="return "+this.statements[this.statements.length-1];var n=this.statements.join(";"),r=e.join("\n")+"\n"+["return {","  eval: function (scope) {","    scope = scope || {}","    $$processScope(scope)","    "+n,"  },","  code: '"+n+"'","}"].join("\n");return new Function("defs",r)(this.defs)},s.prototype.parse=function(t){var e=this,n=(new r).parse(t);return this.statements=n.blocks.map((function(t){return e.interpreter.next(t)})),this},t.exports=s},6009:(t,e,n)=>{"use strict";var r=n(4470),o={ArrayNode:n(5476),AssignmentNode:n(6408),ConditionalNode:n(9907),ConstantNode:n(2341),FunctionNode:n(7850),OperatorNode:n(305),SymbolNode:n(6656),UnaryNode:n(2386)},i=function(t,e){this.owner=t,this.options=r({factory:"ns.factory",raw:!1,rawArrayExpressionElements:!0,rawCallExpressionElements:!1},e)};r(i.prototype,o),i.prototype.next=function(t){if(!(t.type in this))throw new TypeError("the node type "+t.type+" is not implemented");return this[t.type](t)},i.prototype.rawify=function(t,e){var n=this.options.raw;t&&(this.options.raw=!0),e(),t&&(this.options.raw=n)},t.exports=i},2576:t=>{"use strict";t.exports={"+":"add","-":"sub","*":"mul","/":"div","^":"pow","%":"mod","!":"factorial","|":"bitwiseOR","^|":"bitwiseXOR","&":"bitwiseAND","||":"logicalOR",xor:"logicalXOR","&&":"logicalAND","<":"lessThan",">":"greaterThan","<=":"lessEqualThan",">=":"greaterEqualThan","===":"strictlyEqual","==":"equal","!==":"strictlyNotEqual","!=":"notEqual",">>":"shiftRight","<<":"shiftLeft",">>>":"unsignedRightShift"}},6104:t=>{"use strict";t.exports={"+":"positive","-":"negative","~":"oneComplement"}},5476:t=>{"use strict";t.exports=function(t){var e=this,n=[];this.rawify(this.options.rawArrayExpressionElements,(function(){n=t.nodes.map((function(t){return e.next(t)}))}));var r="["+n.join(",")+"]";return this.options.raw?r:this.options.factory+"("+r+")"}},6408:t=>{"use strict";t.exports=function(t){return'scope["'+t.name+'"] = '+this.next(t.expr)}},9907:t=>{"use strict";t.exports=function(t){return"(!!("+this.next(t.condition)+") ? ("+this.next(t.trueExpr)+") : ("+this.next(t.falseExpr)+") )"}},2341:t=>{"use strict";t.exports=function(t){return this.options.raw?t.value:this.options.factory+"("+t.value+")"}},7850:(t,e,n)=>{"use strict";var r=n(9213).nodeTypes.SymbolNode,o=function(t){return"$$mathCodegen.functionProxy("+this.next(new r(t.name))+', "'+t.name+'")'};t.exports=function(t){var e=this,n=o.call(this,t),r=[];return this.rawify(this.options.rawCallExpressionElements,(function(){r=t.args.map((function(t){return e.next(t)}))})),n+"("+r.join(", ")+")"},t.exports.functionProxy=o},305:(t,e,n)=>{"use strict";var r=n(2576);t.exports=function(t){if(this.options.raw)return["("+this.next(t.args[0]),t.op,this.next(t.args[1])+")"].join(" ");var e=r[t.op];if(!e)throw TypeError("unidentified operator");return this.FunctionNode({name:e,args:t.args})}},6656:t=>{"use strict";t.exports=function(t){return'$$mathCodegen.getProperty("'+t.name+'", scope, ns)'}},2386:(t,e,n)=>{"use strict";var r=n(6104);t.exports=function(t){if(this.options.raw)return t.op+this.next(t.argument);if(!(t.op in r))throw new SyntaxError(t.op+" not implemented");var e=r[t.op];return this.FunctionNode({name:e,args:[t.argument]})}},9213:(t,e,n)=>{"use strict";n(1668),t.exports.Parser=n(5438),t.exports.nodeTypes=n(3450)},1668:(t,e,n)=>{var r=n(5054),o={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},i={",":!0,"(":!0,")":!0,"[":!0,"]":!0,";":!0,"~":!0,"!":!0,"+":!0,"-":!0,"*":!0,"/":!0,"%":!0,"^":!0,"**":!0,"|":!0,"&":!0,"^|":!0,"=":!0,":":!0,"?":!0,"||":!0,"&&":!0,xor:!0,"==":!0,"!=":!0,"===":!0,"!==":!0,"<":!0,">":!0,">=":!0,"<=":!0,">>>":!0,"<<":!0,">>":!0};function s(t){return t>="0"&&t<="9"}function u(t){return t>="a"&&t<="z"||t>="A"&&t<="Z"||"$"===t||"_"===t}function a(t){return" "===t||"\r"===t||"\t"===t||"\n"===t||"\v"===t||" "===t}function h(t){return i[t]}function c(t){return"'"===t||'"'===t}function p(){}p.prototype.throwError=function(t,e){e=void 0===e?this.index:e;var n=new Error(t+" at index "+e);throw n.index=e,n.description=t,n},p.prototype.lex=function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){for(;a(this.peek());)this.consume();var e=this.peek(),n=e+this.peek(1),o=n+this.peek(2);h(o)?(this.tokens.push({type:r.DELIMITER,value:o}),this.consume(),this.consume(),this.consume()):h(n)?(this.tokens.push({type:r.DELIMITER,value:n}),this.consume(),this.consume()):h(e)?(this.tokens.push({type:r.DELIMITER,value:e}),this.consume()):s(e)||"."===e&&s(this.peek(1))?this.tokens.push({type:r.NUMBER,value:this.readNumber()}):c(e)?this.tokens.push({type:r.STRING,value:this.readString()}):u(e)?this.tokens.push({type:r.SYMBOL,value:this.readIdentifier()}):this.throwError("unexpected character "+e)}return this.tokens.push({type:r.EOF}),this.tokens},p.prototype.peek=function(t){if(t=t||0,!(this.index+t>=this.text.length))return this.text.charAt(this.index+t)},p.prototype.consume=function(){var t=this.peek();return this.index+=1,t},p.prototype.readNumber=function(){var t="";if("."===this.peek())t+=this.consume(),s(this.peek())||this.throwError("number expected");else{for(;s(this.peek());)t+=this.consume();"."===this.peek()&&(t+=this.consume())}for(;s(this.peek());)t+=this.consume();if("e"===this.peek()||"E"===this.peek())for(t+=this.consume(),s(this.peek())||"+"===this.peek()||"-"===this.peek()||this.throwError(),"+"!==this.peek()&&"-"!==this.peek()||(t+=this.consume()),s(this.peek())||this.throwError("number expected");s(this.peek());)t+=this.consume();return t},p.prototype.readIdentifier=function(){for(var t="";u(this.peek())||s(this.peek());)t+=this.consume();return t},p.prototype.readString=function(){for(var t,e=this.consume(),n="";;){var r=this.consume();if(r||this.throwError("string is not closed"),t){if("u"===r){var i=this.text.substring(this.index+1,this.index+5);i.match(/[\da-f]{4}/i)||this.throwError("invalid unicode escape"),this.index+=4,n+=String.fromCharCode(parseInt(i,16))}else{n+=o[r]||r}t=!1}else{if(r===e)break;"\\"===r?t=!0:n+=r}}return n},t.exports=p},5438:(t,e,n)=>{var r=n(5054),o=n(1668),i=n(6311),s=n(6565),u=n(5543),a=n(2514),h=n(8935),c=n(3862),p=n(9322),l=n(3262),f=n(2962);function y(){this.lexer=new o,this.tokens=null}y.prototype.current=function(){return this.tokens[0]},y.prototype.next=function(){return this.tokens[1]},y.prototype.peek=function(){if(this.tokens.length)for(var t=this.tokens[0],e=0;e<arguments.length;e+=1)if(t.value===arguments[e])return!0},y.prototype.consume=function(t){return this.tokens.shift()},y.prototype.expect=function(t){if(!this.peek(t))throw Error("expected "+t);return this.consume()},y.prototype.isEOF=function(){return this.current().type===r.EOF},y.prototype.parse=function(t){return this.tokens=this.lexer.lex(t),this.program()},y.prototype.program=function(){for(var t=[];!this.isEOF();)t.push(this.assignment()),this.peek(";")&&this.consume();return this.end(),new f(t)},y.prototype.assignment=function(){var t=this.ternary();return t instanceof a&&this.peek("=")?(this.consume(),new l(t.name,this.assignment())):t},y.prototype.ternary=function(){var t=this.logicalOR();if(this.peek("?")){this.consume();var e=this.ternary();this.expect(":");var n=this.ternary();return new p(t,e,n)}return t},y.prototype.logicalOR=function(){var t=this.logicalXOR();if(this.peek("||")){var e=this.consume(),n=this.logicalOR();return new s(e.value,[t,n])}return t},y.prototype.logicalXOR=function(){var t=this.logicalAND();if("xor"===this.current().value){var e=this.consume(),n=this.logicalXOR();return new s(e.value,[t,n])}return t},y.prototype.logicalAND=function(){var t=this.bitwiseOR();if(this.peek("&&")){var e=this.consume(),n=this.logicalAND();return new s(e.value,[t,n])}return t},y.prototype.bitwiseOR=function(){var t=this.bitwiseXOR();if(this.peek("|")){var e=this.consume(),n=this.bitwiseOR();return new s(e.value,[t,n])}return t},y.prototype.bitwiseXOR=function(){var t=this.bitwiseAND();if(this.peek("^|")){var e=this.consume(),n=this.bitwiseXOR();return new s(e.value,[t,n])}return t},y.prototype.bitwiseAND=function(){var t=this.relational();if(this.peek("&")){var e=this.consume(),n=this.bitwiseAND();return new s(e.value,[t,n])}return t},y.prototype.relational=function(){var t=this.shift();if(this.peek("==","===","!=","!==",">=","<=",">","<")){var e=this.consume(),n=this.shift();return new s(e.value,[t,n])}return t},y.prototype.shift=function(){var t=this.additive();if(this.peek(">>","<<",">>>")){var e=this.consume(),n=this.shift();return new s(e.value,[t,n])}return t},y.prototype.additive=function(){for(var t=this.multiplicative();this.peek("+","-");){var e=this.consume();t=new s(e.value,[t,this.multiplicative()])}return t},y.prototype.multiplicative=function(){for(var t,e,n=this.unary();this.peek("*","/","%");)t=this.consume(),n=new s(t.value,[n,this.unary()]);return this.current().type===r.SYMBOL||this.peek("(")||!(n.type instanceof i)&&this.current().type===r.NUMBER?(e=this.multiplicative(),new s("*",[n,e])):n},y.prototype.unary=function(){if(this.peek("-","+","~")){var t=this.consume(),e=this.unary();return new u(t.value,e)}return this.pow()},y.prototype.pow=function(){var t=this.factorial();if(this.peek("^","**")){var e=this.consume(),n=this.unary();return new s(e.value,[t,n])}return t},y.prototype.factorial=function(){var t=this.symbol();if(this.peek("!")){var e=this.consume();return new s(e.value,[t])}return t},y.prototype.symbol=function(){if(this.current().type===r.SYMBOL){var t=this.consume();return this.functionCall(t)}return this.string()},y.prototype.functionCall=function(t){var e=t.value;if(this.peek("(")){this.consume();for(var n=[];!this.peek(")")&&!this.isEOF();)n.push(this.assignment()),this.peek(",")&&this.consume();return this.expect(")"),new h(e,n)}return new a(e)},y.prototype.string=function(){return this.current().type===r.STRING?new i(this.consume().value,"string"):this.array()},y.prototype.array=function(){if(this.peek("[")){this.consume();for(var t=[];!this.peek("]")&&!this.isEOF();)t.push(this.assignment()),this.peek(",")&&this.consume();return this.expect("]"),new c(t)}return this.number()},y.prototype.number=function(){return this.current().type===r.NUMBER?new i(this.consume().value,"number"):this.parentheses()},y.prototype.parentheses=function(){if("("===this.current().value){this.consume();var t=this.assignment();return this.expect(")"),t}return this.end()},y.prototype.end=function(){if(this.current().type!==r.EOF)throw Error("unexpected end of expression")},t.exports=y},3862:(t,e,n)=>{var r=n(7111);function o(t){this.nodes=t}o.prototype=Object.create(r.prototype),o.prototype.type="ArrayNode",t.exports=o},3262:(t,e,n)=>{var r=n(7111);function o(t,e){this.name=t,this.expr=e}o.prototype=Object.create(r.prototype),o.prototype.type="AssignmentNode",t.exports=o},2962:(t,e,n)=>{var r=n(7111);function o(t){this.blocks=t}o.prototype=Object.create(r.prototype),o.prototype.type="BlockNode",t.exports=o},9322:(t,e,n)=>{var r=n(7111);function o(t,e,n){this.condition=t,this.trueExpr=e,this.falseExpr=n}o.prototype=Object.create(r.prototype),o.prototype.type="ConditionalNode",t.exports=o},6311:(t,e,n)=>{var r=n(7111),o={number:!0,string:!0,boolean:!0,undefined:!0,null:!0};function i(t,e){if(!o[e])throw Error("unsupported type '"+e+"'");this.value=t,this.valueType=e}i.prototype=Object.create(r.prototype),i.prototype.type="ConstantNode",t.exports=i},8935:(t,e,n)=>{var r=n(7111);function o(t,e){this.name=t,this.args=e}o.prototype=Object.create(r.prototype),o.prototype.type="FunctionNode",t.exports=o},7111:t=>{function e(){}e.prototype.type="Node",t.exports=e},6565:(t,e,n)=>{var r=n(7111);function o(t,e){this.op=t,this.args=e||[]}o.prototype=Object.create(r.prototype),o.prototype.type="OperatorNode",t.exports=o},2514:(t,e,n)=>{var r=n(7111);function o(t){this.name=t}o.prototype=Object.create(r.prototype),o.prototype.type="SymbolNode",t.exports=o},5543:(t,e,n)=>{var r=n(7111);function o(t,e){this.op=t,this.argument=e}o.prototype=Object.create(r.prototype),o.prototype.type="UnaryNode",t.exports=o},3450:(t,e,n)=>{t.exports={ArrayNode:n(3862),AssignmentNode:n(3262),BlockNode:n(2962),ConditionalNode:n(9322),ConstantNode:n(6311),FunctionNode:n(8935),Node:n(7111),OperatorNode:n(6565),SymbolNode:n(2514),UnaryNode:n(5543)}},5054:t=>{t.exports={EOF:0,DELIMITER:1,NUMBER:2,STRING:3,SYMBOL:4}},3093:(t,e,n)=>{"use strict";var r=n(4635),o=Math.pow(2,-1074),i=-1>>>0;t.exports=function(t,e){if(isNaN(t)||isNaN(e))return NaN;if(t===e)return t;if(0===t)return e<0?-o:o;var n=r.hi(t),s=r.lo(t);return e>t==t>0?s===i?(n+=1,s=0):s+=1:0===s?(s=i,n-=1):s-=1,r.pack(s,n)}}}]);
//# sourceMappingURL=393.function-plot.js.map