/*! For license information please see 415.1fd2e1d5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{454:function(t,n,r){r.d(n,{a:function(){return u}});var e,o=r(430),i=r(766),a=r(867).ZP.div(e||(e=(0,i.Z)(["\n    text-align: center;\n    margin-top: 150px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),c=r(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.p2,{height:"150",width:"150",color:"#770737",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"circles-loading"})})}},368:function(t,n,r){var e=r(689),o=r(87),i=r(544),a=r(184);n.Z=function(t){var n=t.films,r=(0,e.TH)();return(0,a.jsx)(i.c0,{children:n.map((function(t){var n=t.id,e=t.title,c=t.overview,u=t.poster_path;return(0,a.jsx)(o.rU,{to:"/movies/".concat(n),state:{from:r},children:(0,a.jsxs)(i.iH,{children:[(0,a.jsx)("img",{src:u?"http://image.tmdb.org/t/p/w154".concat(u):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:e,width:"154",height:"231"}),(0,a.jsxs)(i.$j,{children:[(0,a.jsx)("h3",{children:e}),(0,a.jsx)("p",{children:c})]})]},n)})}))})}},544:function(t,n,r){r.d(n,{$j:function(){return f},c0:function(){return u},iH:function(){return s}});var e,o,i,a=r(766),c=r(867),u=c.ZP.ul(e||(e=(0,a.Z)(["\n    display: flex;\n    gap: 30px;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),s=c.ZP.li(o||(o=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap: 5px;\n    width: 154px;\n    max-height: 400px;\n    cursor: pointer;\n    overflow: hidden;\n"]))),f=c.ZP.div(i||(i=(0,a.Z)(["\n    min-height: 169px;\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n"])))},415:function(t,n,r){r.r(n);var e=r(439),o=r(454),i=r(368),a=r(791),c=r(390),u=r(558),s=r(184);n.default=function(){var t=(0,a.useState)(!0),n=(0,e.Z)(t,2),r=n[0],f=n[1],l=(0,a.useState)([]),h=(0,e.Z)(l,2),p=h[0],d=h[1];return(0,a.useEffect)((function(){p.length>0||(0,c.vw)("/trending/movie/day").then((function(t){d(t.results)})).catch(c.NI).finally((function(){return f(!1)}))}),[p]),(0,s.jsxs)(u.dE,{children:[(0,s.jsx)("h2",{children:"Movies in trend"}),r&&(0,s.jsx)(o.a,{}),(0,s.jsx)(i.Z,{films:p})]})}},558:function(t,n,r){r.d(n,{Fg:function(){return h},O2:function(){return p},UE:function(){return d},Z:function(){return v},dE:function(){return l}});var e,o,i,a,c,u=r(766),s=r(867),f=r(87),l=s.ZP.section(e||(e=(0,u.Z)(["\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\n"]))),h=(0,s.ZP)(f.rU)(o||(o=(0,u.Z)(["\n  color: #770737;\n  font-weight: 700;\n  padding: 6px;\n  text-align: center;\n  border: 1px solid #770737;\nwidth: 100px;\n  &.active {\n    cursor: pointer;\n  }\n  \n  &:hover, &:focus {\n    border-radius: 4px;\n    background-color: #770737;\n    color: #fff;\n  }\n"]))),p=s.ZP.div(i||(i=(0,u.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),d=s.ZP.div(a||(a=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nwidth: 400px;\n"]))),v=s.ZP.ul(c||(c=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nfont-weight: 500;\ntext-decoration: underline;\ncolor: #000;\n&.active {\n    cursor: pointer;\n    color: #000;\n  }\n  \n  &:hover, &:focus {\n    \n    color: #000;\n  }\n"])))},390:function(t,n,r){r.d(n,{Hx:function(){return x},NI:function(){return m},Pu:function(){return s},Y5:function(){return d},bI:function(){return h},uV:function(){return y},vw:function(){return f}});var e=r(861),o=r(243),i=r(686);function a(){a=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new S(e||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function x(){}function w(){}var m={};f(m,c,(function(){return this}));var b=Object.getPrototypeOf,Z=b&&b(b(N([])));Z&&Z!==r&&e.call(Z,c)&&(m=Z);var j=w.prototype=g.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=_(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(n,r,e);if("normal"===s.type){if(o=e.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function _(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,_(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=h(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return x.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},E(L.prototype),f(L.prototype,u,(function(){return this})),n.AsyncIterator=L,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new L(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),f(j,s,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=N,S.prototype={constructor:S,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:N(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),y}},n}var c="https://api.themoviedb.org/3",u="43596775cda6588db61d2519acdb98b6",s={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c).concat(n,"?api_key=").concat(u),t.next=3,o.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"?api_key=").concat(u,"&query=").concat(r),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"/").concat(r,"?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"/").concat(r,"/credits?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"/").concat(r,"/reviews?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){i.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}}}]);
//# sourceMappingURL=415.1fd2e1d5.chunk.js.map