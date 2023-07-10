!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("RangeTouch",t):(e=e||self).RangeTouch=t()}(this,(function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var i={addCSS:!0,thumbWidth:15,watch:!0};function u(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var o=function(e){return null!=e?e.constructor:null},c=function(e,t){return!!(e&&t&&e instanceof t)},l=function(e){return o(e)===String},a=function(e){return Array.isArray(e)},s=function(e){return c(e,NodeList)},f=l,h=a,d=s,y=function(e){return c(e,Element)},b=function(e){return c(e,Event)},m=function(e){return function(e){return null==e}(e)||(l(e)||a(e)||s(e))&&!e.length||function(e){return o(e)===Object}(e)&&!Object.keys(e).length};return function(){function t(e,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,t),y(e)?this.element=e:f(e)&&(this.element=document.querySelector(e)),y(this.element)&&m(this.element.rangeTouch)&&(this.config=r({},i,{},n),this.init())}return n=t,c=[{key:"setup",value:function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=null;if(m(e)||f(e)?o=Array.from(document.querySelectorAll(f(e)?e:'input[type="range"]')):y(e)?o=[e]:d(e)?o=Array.from(e):h(e)&&(o=e.filter(y)),m(o))return null;var c=r({},i,{},n);if(f(e)&&c.watch){var l=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){y(n)&&u(n,e)&&new t(n,c)}))}))}));l.observe(document.body,{childList:!0,subtree:!0})}return o.map((function(e){return new t(e,n)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}],(o=[{key:"init",value:function(){t.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){t.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(e){if(!t.enabled||!b(e))return null;var n,r=e.target,i=e.changedTouches[0],u=parseFloat(r.getAttribute("min"))||0,o=parseFloat(r.getAttribute("max"))||100,c=parseFloat(r.getAttribute("step"))||1,l=r.getBoundingClientRect(),a=100/l.width*(this.config.thumbWidth/2)/100;return 0>(n=100/l.width*(i.clientX-l.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*a:50<n&&(n+=2*(n-50)*a),u+function(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}(n/100*(o-u),c)}},{key:"set",value:function(e){t.enabled&&b(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),function(e,t){if(e&&t){var n=new Event(t,{bubbles:!0});e.dispatchEvent(n)}}(e.target,"touchend"===e.type?"change":"input"))}}])&&e(n.prototype,o),c&&e(n,c),t;var n,o,c}()}));