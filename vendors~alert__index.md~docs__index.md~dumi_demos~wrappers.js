(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"2N97":function(t,e,n){"use strict";var r=n("xbqb"),o=n("Lw8S");function i(){var t=n("q1tI");return i=function(){return t},t}function u(t,e){return s(t)||f(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function s(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d,p="data-prefers-color",v="dumi:prefers-color",y=function(){function t(){var e=this;r(this,t),this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(v)||document.documentElement.getAttribute(p),["light","dark"].forEach((function(t){var n=e.getColorMedia(t),r=function(n){n.matches&&"auto"===e.color&&(document.documentElement.setAttribute(p,t),e.applyCallbacks())};n.addEventListener?n.addEventListener("change",r):n.addListener&&n.addListener(r)}))}return o(t,[{key:"getColorMedia",value:function(t){return window.matchMedia("(prefers-color-scheme: ".concat(t,")"))}},{key:"isColorMode",value:function(t){return this.getColorMedia(t).matches}},{key:"applyCallbacks",value:function(){var t=this;this.callbacks.forEach((function(e){return e(t.color)}))}},{key:"listen",value:function(t){this.callbacks.push(t)}},{key:"unlisten",value:function(t){this.callbacks.splice(this.callbacks.indexOf(t),1)}},{key:"set",value:function(t){return this.color=t,localStorage.setItem(v,t),this.applyCallbacks(),"auto"===t?document.documentElement.setAttribute(p,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(p,t),t}}]),t}(),m=function(){var t=(0,i().useState)(),e=u(t,2),n=e[0],r=e[1],o=(0,i().useCallback)((function(t){d.set(t)}),[]);return(0,i().useEffect)((function(){return d=d||new y,d.listen(r),r(d.color),function(){return d.unlisten(r)}}),[]),[n,o]};e.default=m},"3QDa":function(t,e,n){"use strict";var r=n("5wUe");function o(){var t=n("q1tI");return o=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("nLCz"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return d(t)||s(t,e)||l(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function d(t){if(Array.isArray(t))return t}function p(t,e,n,o){return Object.entries(t[e]).reduce((function(t,e){var i=r(e,2),u=i[0],c=i[1];return t[u]=c.map((function(t){var e=Object.assign({},t);return Object.keys(t).forEach((function(t){if(/^description(\.|$)/.test(t)){var r=t.match(/^description\.?(.*)$/),i=a(r,2),u=i[1];u&&u!==n||!u&&!o?delete e[t]:e.description=e[t]}})),e})),t}),{})}var v=function(t){var e=(0,o().useContext)(i.default),n=e.locale,r=e.config.locales,u=e.apis,c=!r.length||r[0].name===n,l=(0,o().useState)(p(u,t,n,c)),f=a(l,2),s=f[0],d=f[1];return(0,o().useEffect)((function(){d(p(u,t,n,c))}),[u,t,n,c]),s};e.default=v},"6asN":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("LtsZ"),o=n("zqmC"),i=(0,o.LinkWrapper)(r.NavLink);e.default=i},"6xEa":function(t,e,n){var r,o=function(){var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(t,e){if(!r[t]){r[t]={};for(var n=0;n<t.length;n++)r[t][t.charAt(n)]=n}return r[t][e]}var i={compressToBase64:function(t){if(null==t)return"";var n=i._compress(t,6,(function(t){return e.charAt(t)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,(function(n){return o(e,t.charAt(n))}))},compressToUTF16:function(e){return null==e?"":i._compress(e,15,(function(e){return t(e+32)}))+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,(function(e){return t.charCodeAt(e)-32}))},compressToUint8Array:function(t){for(var e=i.compress(t),n=new Uint8Array(2*e.length),r=0,o=e.length;r<o;r++){var u=e.charCodeAt(r);n[2*r]=u>>>8,n[2*r+1]=u%256}return n},decompressFromUint8Array:function(e){if(null===e||void 0===e)return i.decompress(e);for(var n=new Array(e.length/2),r=0,o=n.length;r<o;r++)n[r]=256*e[2*r]+e[2*r+1];var u=[];return n.forEach((function(e){u.push(t(e))})),i.decompress(u.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":i._compress(t,6,(function(t){return n.charAt(t)}))},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,(function(e){return o(n,t.charAt(e))})))},compress:function(e){return i._compress(e,16,(function(e){return t(e)}))},_compress:function(t,e,n){if(null==t)return"";var r,o,i,u={},a={},c="",l="",f="",s=2,d=3,p=2,v=[],y=0,m=0;for(i=0;i<t.length;i+=1)if(c=t.charAt(i),Object.prototype.hasOwnProperty.call(u,c)||(u[c]=d++,a[c]=!0),l=f+c,Object.prototype.hasOwnProperty.call(u,l))f=l;else{if(Object.prototype.hasOwnProperty.call(a,f)){if(f.charCodeAt(0)<256){for(r=0;r<p;r++)y<<=1,m==e-1?(m=0,v.push(n(y)),y=0):m++;for(o=f.charCodeAt(0),r=0;r<8;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1}else{for(o=1,r=0;r<p;r++)y=y<<1|o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o=0;for(o=f.charCodeAt(0),r=0;r<16;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1}s--,0==s&&(s=Math.pow(2,p),p++),delete a[f]}else for(o=u[f],r=0;r<p;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1;s--,0==s&&(s=Math.pow(2,p),p++),u[l]=d++,f=String(c)}if(""!==f){if(Object.prototype.hasOwnProperty.call(a,f)){if(f.charCodeAt(0)<256){for(r=0;r<p;r++)y<<=1,m==e-1?(m=0,v.push(n(y)),y=0):m++;for(o=f.charCodeAt(0),r=0;r<8;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1}else{for(o=1,r=0;r<p;r++)y=y<<1|o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o=0;for(o=f.charCodeAt(0),r=0;r<16;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1}s--,0==s&&(s=Math.pow(2,p),p++),delete a[f]}else for(o=u[f],r=0;r<p;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1;s--,0==s&&(s=Math.pow(2,p),p++)}for(o=2,r=0;r<p;r++)y=y<<1|1&o,m==e-1?(m=0,v.push(n(y)),y=0):m++,o>>=1;while(1){if(y<<=1,m==e-1){v.push(n(y));break}m++}return v.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,(function(e){return t.charCodeAt(e)}))},_decompress:function(e,n,r){var o,i,u,a,c,l,f,s=[],d=4,p=4,v=3,y="",m=[],h={val:r(0),position:n,index:1};for(o=0;o<3;o+=1)s[o]=o;u=0,c=Math.pow(2,2),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=n,h.val=r(h.index++)),u|=(a>0?1:0)*l,l<<=1;switch(u){case 0:u=0,c=Math.pow(2,8),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=n,h.val=r(h.index++)),u|=(a>0?1:0)*l,l<<=1;f=t(u);break;case 1:u=0,c=Math.pow(2,16),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=n,h.val=r(h.index++)),u|=(a>0?1:0)*l,l<<=1;f=t(u);break;case 2:return""}s[3]=f,i=f,m.push(f);while(1){if(h.index>e)return"";u=0,c=Math.pow(2,v),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=n,h.val=r(h.index++)),u|=(a>0?1:0)*l,l<<=1;switch(f=u){case 0:u=0,c=Math.pow(2,8),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=n,h.val=r(h.index++)),u|=(a>0?1:0)*l,l<<=1;s[p++]=t(u),f=p-1,d--;break;case 1:u=0,c=Math.pow(2,16),l=1;while(l!=c)a=h.val&h.position,h.position>>=1,0==h.position&&(h.position=n,h.val=r(h.index++)),u|=(a>0?1:0)*l,l<<=1;s[p++]=t(u),f=p-1,d--;break;case 2:return m.join("")}if(0==d&&(d=Math.pow(2,v),v++),s[f])y=s[f];else{if(f!==p)return null;y=i+i.charAt(0)}m.push(y),s[p++]=i+y.charAt(0),d--,i=y,0==d&&(d=Math.pow(2,v),v++)}}};return i}();r=function(){return o}.call(e,n,e,t),void 0===r||(t.exports=r)},"7sf/":function(t,e,n){"use strict";function r(){var t=n("q1tI");return r=function(){return t},t}function o(){var t=i(n("6xEa"));return o=function(){return t},t}function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return s(t)||f(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function s(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"},p=function(t,e){var n=function(){var t=/^zh|cn$/.test(arguments.length<=0?void 0:arguments[0])?d["zh-CN"]:d["en-US"];return"".concat(t,"?skipLibCheck=true&jsx=1#code/").concat(o().default.compressToEncodedURIComponent(arguments.length<=1?void 0:arguments[1]))},i=(0,r().useState)(n(t,e)),a=u(i,2),c=a[0],l=a[1];return(0,r().useEffect)((function(){l(n(t,e))}),[t,e]),c};e.default=p},Lw8S:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}t.exports=r},"U/TZ":function(t,e,n){"use strict";function r(){var t=n("q1tI");return r=function(){return t},t}function o(t,e){return l(t)||c(t,e)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var f=function(t,e){var n=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r={};return Object.keys(e[1]).forEach((function(t){var n=(t.match(/^(.+)\.([^_]+)$/)||[]).slice(1),i=o(n,2),u=i[0],a=i[1];a&&a!==e[0]||(r[u||t]=e[1][t])})),r},i=(0,r().useState)(n(t,e)),u=o(i,2),a=u[0],c=u[1];return(0,r().useEffect)((function(){c(n(t,e))}),[t,e]),a};e.default=f},WWur:function(t,e,n){"use strict";var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.target,r=void 0===n?document.body:n,o=document.createElement("textarea"),i=document.activeElement;o.value=t,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var u=document.getSelection(),a=!1;u.rangeCount>0&&(a=u.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=t.length;var c=!1;try{c=document.execCommand("copy")}catch(l){}return o.remove(),a&&(u.removeAllRanges(),u.addRange(a)),i&&i.focus(),c};t.exports=r,t.exports.default=r},bYHP:function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n("q1tI")),i=n("LtsZ"),u=a(n("hKI/"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}function l(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var a=i?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=t[u]}return o.default=t,n&&n.set(t,o),o}function f(){return f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}function s(t,e){return m(t)||y(t,e)||p(t,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){if(t){if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function m(t){if(Array.isArray(t))return t}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var w=new(function(){function t(){h(this,t),this.anchors=[],this.listeners=[],this.listener=void 0,this.listener=(0,u.default)(this._matchActiveAnchor.bind(this),200)}return g(t,[{key:"_matchActiveAnchor",value:function(){var t=this,e=this.anchors.findIndex((function(e,n){return e.getBoundingClientRect().top>128||n===t.anchors.length-1})),n=this.anchors[Math.max(0,e-1)],r=n.parentElement.id;this.listeners.forEach((function(t){return t(r)}))}},{key:"watch",value:function(t){0===this.anchors.length&&"undefined"!==typeof window&&window.addEventListener("scroll",this.listener),this.anchors.push(t),this.listener()}},{key:"unwatch",value:function(t){this.anchors.splice(this.anchors.findIndex((function(e){return e===t})),1),0===this.anchors.length&&"undefined"!==typeof window&&window.removeEventListener("scroll",this.listener)}},{key:"listen",value:function(t){this.listeners.push(t)}},{key:"unlisten",value:function(t){this.listeners.splice(this.listeners.findIndex((function(e){return e===t})),1)}}]),t}());function O(t){return t.offsetTop+(t.offsetParent?O(t.offsetParent):0)}var j=function t(e){var n,r=(null===(n=e.to.match(/(#[^&?]*)/))||void 0===n?void 0:n[1])||"",u=(0,o.useRef)(null),a=(0,o.useState)(!1),c=s(a,2),l=c[0],d=c[1];return(0,o.useEffect)((function(){var t,e;if(["H1","H2","H3"].includes(null===(t=u.current)||void 0===t||null===(e=t.parentElement)||void 0===e?void 0:e.tagName)&&u.current.parentElement.id){var n=u.current;return w.watch(n),function(){w.unwatch(n)}}var o=function(t){d(r==="#".concat(t))};return w.listen(o),function(){return w.unlisten(o)}}),[]),o.default.createElement(i.NavLink,f({},e,{ref:u,onClick:function(){return t.scrollToAnchor(r.substring(1))},isActive:function(){return l}}))};j.scrollToAnchor=function(t){window.requestAnimationFrame((function(){var e=document.getElementById(decodeURIComponent(t));e&&window.scrollTo(0,O(e)-100)}))};var A=j;e.default=A},beRK:function(t,e,n){"use strict";function r(){var t=n("q1tI");return r=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.getDemoUrl=e.getDemoRouteName=e.default=void 0;var o=i(n("nLCz"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return s(t)||f(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function s(t){if(Array.isArray(t))return t}function d(){return"BASEMENT"===Object({NODE_ENV:"production"}).PLATFORM_TYPE}var p=function(){return d()?"_demos":"~demos"};e.getDemoRouteName=p;var v=function(t,e){var n,r=window,o=r.location,i=o.href,a=o.origin,c=i.split(/#\//),l=u(c,2),f=l[0],s=l[1],d="string"===typeof s;return[d?"".concat(f,"#"):a,"".concat((null===(n=window)||void 0===n?void 0:n.routerBase)||"","/").replace(/\/\/$/,"/"),p(),"/",t,"".concat(e?".html":"")].join("")};e.getDemoUrl=v;var y=function(t){var e=(0,r().useContext)(o.default),n=e.config,i=(0,r().useState)(""),a=u(i,2),c=a[0],l=a[1];return(0,r().useEffect)((function(){l(t?v(t,n.exportStatic&&n.exportStatic.htmlSuffix):null)}),[t,n]),c};e.default=y},dEAq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AnchorLink",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"Link",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"NavLink",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"context",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"useApiData",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"useCodeSandbox",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"useCopy",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"useDemoUrl",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"useLocaleProps",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"useMotions",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"usePrefersColor",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"useRiddle",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"useSearch",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return y.default}});var r=h(n("nLCz")),o=h(n("zqmC")),i=h(n("6asN")),u=h(n("bYHP")),a=h(n("t/kZ")),c=h(n("dfPH")),l=h(n("o0kM")),f=h(n("zYLY")),s=h(n("r1Q5")),d=h(n("U/TZ")),p=h(n("beRK")),v=h(n("3QDa")),y=h(n("7sf/")),m=h(n("2N97"));function h(t){return t&&t.__esModule?t:{default:t}}},dfPH:function(t,e,n){"use strict";function r(){var t=n("q1tI");return r=function(){return t},t}function o(){var t=i(n("WWur"));return o=function(){return t},t}function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return s(t)||f(t,e)||c(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function s(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=function(){var t=(0,r().useState)(),e=u(t,2),n=e[0],i=e[1],a=(0,r().useState)("ready"),c=u(a,2),l=c[0],f=c[1],s=(0,r().useCallback)((function(t){(0,o().default)(t),f("copied"),clearTimeout(n),i(setTimeout((function(){f("ready")}),2e3))}),[]);return[s,l]};e.default=d},"hKI/":function(t,e,n){(function(e){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=f||s||Function("return this")(),p=Object.prototype,v=p.toString,y=Math.max,m=Math.min,h=function(){return d.Date.now()};function b(t,e,r){var o,i,u,a,c,l,f=0,s=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function v(e){var n=o,r=i;return o=i=void 0,f=e,a=t.apply(r,n),a}function b(t){return f=t,c=setTimeout(j,e),s?v(t):a}function g(t){var n=t-l,r=t-f,o=e-n;return d?m(o,u-r):o}function O(t){var n=t-l,r=t-f;return void 0===l||n>=e||n<0||d&&r>=u}function j(){var t=h();if(O(t))return S(t);c=setTimeout(j,g(t))}function S(t){return c=void 0,p&&o?v(t):(o=i=void 0,a)}function k(){void 0!==c&&clearTimeout(c),f=0,o=l=i=c=void 0}function x(){return void 0===c?a:S(h())}function E(){var t=h(),n=O(t);if(o=arguments,i=this,l=t,n){if(void 0===c)return b(l);if(d)return c=setTimeout(j,e),v(l)}return void 0===c&&(c=setTimeout(j,e)),a}return e=A(e)||0,w(r)&&(s=!!r.leading,d="maxWait"in r,u=d?y(A(r.maxWait)||0,e):u,p="trailing"in r?!!r.trailing:p),E.cancel=k,E.flush=x,E}function g(t,e,r){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return w(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),b(t,e,{leading:o,maxWait:e,trailing:i})}function w(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function O(t){return!!t&&"object"==typeof t}function j(t){return"symbol"==typeof t||O(t)&&v.call(t)==o}function A(t){if("number"==typeof t)return t;if(j(t))return r;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=a.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=g}).call(this,n("IyRk"))},nLCz:function(t,e,n){"use strict";function r(){var t=o(n("q1tI"));return r=function(){return t},t}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[],apis:{},demos:{}});e.default=i},o0kM:function(t,e,n){"use strict";var r=n("5wUe");function o(){var t=n("q1tI");return o=function(){return t},t}function i(t,e){return f(t)||l(t,e)||a(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function f(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,d="https://riddle.alibaba-inc.com/riddles/define",p=function(){var t=(0,o().useState)(Boolean(s)),e=i(t,2),n=e[0],r=e[1];return(0,o().useEffect)((function(){if(void 0===s){var t=document.createElement("img");setTimeout((function(){t.src="",t.remove()}),200),t.onload=function(){s=!0,r(!0),t.remove()},t.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}}),[]),n};function v(t){var e,n=t.dependencies,r=t.sources._.tsx||t.sources._.jsx;return r=r.replace(/^/,"import ReactDOM from 'react-dom@".concat((null===(e=n.react)||void 0===e?void 0:e.version)||"latest","';\n")).replace("export default","const DumiDemo =").concat("\nReactDOM.render(<DumiDemo />, mountNode);"),r=r.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g,(function(t,e,r){var o="".concat(e).concat(r);return n[r]&&(o+="@".concat(n[r].version)),o})),r}var y=function(t){var e=(0,o().useState)(),n=i(e,2),u=n[0],a=n[1],c=p();return(0,o().useEffect)((function(){if(t&&c&&1===Object.keys(t.sources).length){var e=document.createElement("form"),n=document.createElement("input");return e.method="POST",e.target="_blank",e.style.display="none",e.action=d,e.appendChild(n),e.setAttribute("data-demo",t.title||""),n.name="data",n.value=JSON.stringify({title:t.titlle,js:v(t),css:Object.entries(t.dependencies).filter((function(t){var e=r(t,2),n=e[1];return n.css})).map((function(t){var e=r(t,2),n=e[0],o=e[1],i=o.version,u=o.css;return"@import '~".concat(u.replace(new RegExp("^(".concat(n,")")),"$1@".concat(i)),"';")})).join("\n")}),document.body.appendChild(e),a((function(){return function(){return e.submit()}})),function(){return e.remove()}}}),[t,c]),u};e.default=y},r1Q5:function(t,e,n){"use strict";var r=n("5wUe");function o(){var t=n("q1tI");return o=function(){return t},t}function i(){var t=u(n("6xEa"));return i=function(){return t},t}function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return d(t)||s(t,e)||l(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function d(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var p="https://codesandbox.io/api/v1/sandboxes/define";function v(t){return i().default.compressToBase64(JSON.stringify(t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function y(t){var e=document.createElement("span");e.innerHTML=t;var n=e.textContent;return e.remove(),n}function m(t){var e=Boolean(t.sources._.tsx),n=e?".tsx":".jsx",o={},i={},u=Object.values(t.dependencies).filter((function(t){return t.css})),a="App".concat(n),c="index".concat(n);return Object.entries(t.dependencies).forEach((function(t){var e=r(t,2),n=e[0],o=e[1].version;i[n]=o})),i["react-dom"]||(i["react-dom"]=i.react||"latest"),o["sandbox.config.json"]={content:JSON.stringify({template:e?"create-react-app-typescript":"create-react-app"},null,2)},o["package.json"]={content:JSON.stringify({name:t.title,description:y(t.description)||"An auto-generated demo by dumi",main:c,dependencies:i,devDependencies:e?{typescript:"^3"}:{}},null,2)},o["index.html"]={content:'<div style="margin: 16px;" id="root"></div>'},o[c]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(u.map((function(t){var e=t.css;return"import '".concat(e,"';")})).join("\n"),"\nimport App from './App';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")},Object.entries(t.sources).forEach((function(t){var e=r(t,2),n=e[0],i=e[1],u=i.tsx,c=i.jsx,l=i.content;o["_"===n?a:n]={content:u||c||l}})),v({files:o})}var h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=(0,o().useState)(),r=a(n,2),i=r[0],u=r[1];return(0,o().useEffect)((function(){if(t){var n=document.createElement("form"),r=document.createElement("input"),o=m(t);return n.method="POST",n.target="_blank",n.style.display="none",n.action=e,n.appendChild(r),n.setAttribute("data-demo",t.title||""),r.name="parameters",r.value=o,document.body.appendChild(n),u((function(){return function(){return n.submit()}})),function(){return n.remove()}}}),[t]),i};e.default=h},"t/kZ":function(t,e,n){"use strict";var r=n("R5yR");function o(){var t=n("q1tI");return o=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("dEAq");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return v(t)||p(t,e)||s(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function v(t){if(Array.isArray(t))return t}var y=function(t){var e=(0,o().useContext)(i.context),n=e.locale,u=e.routes,a=e.config.locales,c=(0,o().useState)([]),f=l(c,2),s=f[0],d=f[1],p=(0,o().useState)([]),v=l(p,2),y=v[0],m=v[1];return(0,o().useEffect)((function(){d(u.filter((function(t){var e=t.title,r=t.meta,o=(null===r||void 0===r?void 0:r.locale)===n,i=!(null===r||void 0===r?void 0:r.locale)&&(!a.length||n===a[0].name);return e&&(i||o)})).reduce((function(t,e){var n,o,i,u={title:(null===(n=e.meta)||void 0===n?void 0:n.title)||e.title,path:e.path};return(null===(o=e.meta)||void 0===o?void 0:o.group)&&(u.parent=e.meta.group),t.push(u),t.push.apply(t,r(((null===(i=e.meta)||void 0===i?void 0:i.slugs)||[]).filter((function(t){var n,r=t.value;return r!==((null===(n=e.meta)||void 0===n?void 0:n.title)||e.title)})).map((function(t){return{title:t.value,path:"".concat(e.path,"#").concat(t.heading),parent:u}})))),t}),[]))}),[u.length,n]),(0,o().useEffect)((function(){var e=null===t||void 0===t?void 0:t.trim().toUpperCase();if(e){for(var n=[],r=0;r<s.length;r+=1)s[r].title.toUpperCase().indexOf(e)>-1&&n.push(s[r]);m(n)}else m([])}),[t,s.length]),y},m=function(){var t=(0,o().useContext)(i.context),e=t.config.algolia,n=(0,o().useCallback)((function(t){window.docsearch(a({inputSelector:t},e))}),[e]);return n},h=function(t){var e=(0,o().useContext)(i.context),n=e.config,r=y(t),u=m();return n.algolia?u:r};e.default=h},xbqb:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=n},zYLY:function(t,e,n){"use strict";function r(){var t=n("q1tI");return r=function(){return t},t}function o(t,e){return l(t)||c(t,e)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done);u=!0)if(i.push(r.value),e&&i.length===e)break}catch(c){a=!0,o=c}finally{try{u||null==n["return"]||n["return"]()}finally{if(a)throw o}}return i}}function l(t){if(Array.isArray(t))return t}function f(t,e,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(i<e.length){var u=e[i],a=function(){return f(t,e,n,i+1)},c=u.match(/^([^:]+):?(.*)$/)||[],l=o(c,3),s=l[1],d=l[2];switch(s){case"autoplay":a();break;case"click":var p=d.match(/^(global\()?(.+?)\)?$/)||[],v=o(p,3),y=v[1],m=v[2],h=y?document:t;null===(r=h.querySelector(m))||void 0===r||r.click(),a();break;case"timeout":setTimeout(a,Number(d));break;case"capture":window.postMessage({type:"dumi:capture-element",value:d},"*"),a();break;default:console.warn("[dumi: motion] unknown motion '".concat(u,"', skip.")),a()}}else n()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t,e){var n=(0,r().useState)(!1),i=o(n,2),u=i[0],a=i[1],c=(0,r().useCallback)((function(){u||(f(e,t,(function(){a(!1)})),a(!0))}),[t,e,u]);return(0,r().useEffect)((function(){"autoplay"===t[0]&&e&&c()}),[t,e]),[c,u]};e.default=s},zqmC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.LinkWrapper=void 0;var r=u(n("q1tI")),o=n("LtsZ"),i=["to"];function u(t){return t&&t.__esModule?t:{default:t}}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,o=l(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var f=function(t){return function(e){var n=e.to,o=c(e,i),u=/^(\w+:)?\/\/|^(mailto|tel):/.test(n)||!n,l=r.default.isValidElement(o.children);return r.default.createElement(t,a({to:n||"",component:u?function(){return r.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},o.children,n&&!l&&r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},o,u?{}:{onClick:function(){var t;window.scrollTo({top:0});for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null===(t=o.onClick)||void 0===t||t.apply(this,n)}}))}};e.LinkWrapper=f;var s=f(o.Link);e.default=s}}]);