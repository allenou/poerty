(function(n){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)i=u[l],o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),n=c(c.s=t[0]))}return n}var r={},i={app:0},o={app:0},a=[];function u(n){return c.p+"js/"+({}[n]||n)+"."+{"chunk-25f2fd7f":"ce845d4c","chunk-32f36add":"0e439621","chunk-5c763c78":"344ed6fb"}[n]+".js"}function c(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(n){var e=[],t={"chunk-25f2fd7f":1,"chunk-5c763c78":1};i[n]?e.push(i[n]):0!==i[n]&&t[n]&&e.push(i[n]=new Promise(function(e,t){for(var r="css/"+({}[n]||n)+"."+{"chunk-25f2fd7f":"1b7d111c","chunk-32f36add":"31d6cfe0","chunk-5c763c78":"dbfeb940"}[n]+".css",o=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+n+" failed.\n("+r+")");a.request=r,delete i[n],d.parentNode.removeChild(d),t(a)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){i[n]=0}));var r=o[n];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,t){r=o[n]=[e,t]});e.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(n),s=function(e){l.onerror=l.onload=null,clearTimeout(f);var t=o[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+n+" failed.\n("+r+": "+i+")");a.type=r,a.request=i,t[1](a)}o[n]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},c.m=n,c.c=r,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)c.d(t,r,function(e){return n[e]}.bind(null,r));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/poerty/",c.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("64a9"),i=t.n(r);i.a},3092:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("28a5"),t("6762"),t("2fdb"),t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("Aside",{on:{nav:function(e){return n.fetchPoertys(e)}}}),t("main",[t("SearchBar"),t("keep-alive",[t("router-view")],1)],1)],1)},o=[],a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("nav",[t("h2",[n._v("中国诗词")]),t("ul",{on:{click:function(e){return n.nav(e)}}},[t("li",{attrs:{"data-nav":"shijing"}},[t("router-link",{attrs:{to:"/shijing","exact-active-class":"active"}},[n._v("《诗经》")])],1),t("li",{attrs:{"data-nav":"lunyu"}},[t("router-link",{attrs:{to:"/lunyu","exact-active-class":"active"}},[n._v("《论语》")])],1),t("li",{attrs:{"data-nav":"sishuwujing"}},[t("router-link",{attrs:{to:"/sishuwujing","exact-active-class":"active"}},[n._v("《四书五经》")])],1)]),t("GitHubBadge",{staticClass:"badge",attrs:{slug:"allenou/poerty",fill:"#fff"}})],1)},u=[],c=t("527f"),s=t.n(c),l={components:{GitHubBadge:s.a},methods:{nav:function(n){"LI"===n.target.tagName&&this.$emit("nav",n.target.dataset.nav)}}},f=l,d=(t("6c54"),t("2877")),h=Object(d["a"])(f,a,u,!1,null,"b66df75c",null),p=h.exports,g=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("header",[t("input",{directives:[{name:"model",rawName:"v-model",value:n.keyword,expression:"keyword"}],attrs:{type:"search",placeholder:n.placeholder},domProps:{value:n.keyword},on:{input:function(e){e.target.composing||(n.keyword=e.target.value)}}}),n.isRecognition?t("i",{staticClass:"iconfont",class:{speaking:n.isSpeaking},on:{click:n.speak}},[n._v("")]):n._e()])},v=[],w=t("774e"),m=t.n(w),y={data:function(){return{keyword:"",placeholder:"输入关键字进行搜索",isSpeaking:!1,isRecognition:window.SpeechRecognition||window.webkitSpeechRecognition}},watch:{keyword:function(n){this.$store.commit("setKeyword",n)}},methods:{speak:function(){this.isSpeaking=!0,this.placeholder="说出关键字进行搜索",window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;var n=this,e=new SpeechRecognition;e.lang="zh-cmn-Hans",e.interimResults=!0,e.maxAlternatives=7,e.start(),e.onresult=function(e){var t=m()(e.results).map(function(n){return n[0]}).map(function(n){return n.transcript}).join("");e.results[0].isFinal&&(n.keyword=t,console.log("You said: ",t))},e.onend=function(){n.isSpeaking=!1,n.placeholder="输入关键字进行搜索"}}}},k=y,b=(t("f220"),Object(d["a"])(k,g,v,!1,null,"7fa21a57",null)),j=b.exports,S={name:"app",components:{Aside:p,SearchBar:j},data:function(){return{currentNav:"",placeholder:""}}},x=S,_=(t("034f"),Object(d["a"])(x,i,o,!1,null,null,null)),O=_.exports,P=(t("ac6a"),t("5df3"),t("795b")),E=t.n(P),R=t("2f62"),T=t("4328"),A=t.n(T),C=t("bc3a"),B=t.n(C),L=B.a.create({baseURL:"http://www.toyou.xyz/poerty/json",timeout:1e4,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/x-www-form-urlencoded"}});L.interceptors.request.use(function(n){if(navigator.onLine)return"post"===n.method&&(n.data=A.a.stringify(n.data)),n;alert("网络连接失败，请重试")},function(n){return E.a.reject(n)});var N=L;t("d958");r["a"].use(R["a"]);var $=new R["a"].Store({state:{shijing:[],lunyu:[],sishuwujing:[],keyword:""},getters:{shijing:function(n){return n.shijing},lunyu:function(n){return n.lunyu},sishuwujing:function(n){return n.sishuwujing},keyword:function(n){return n.keyword}},actions:{fetchShijing:function(n){var e=n.commit;return new E.a(function(n,t){N.get("/shijing/shijing.json").then(function(t){n(t.data),e("setShijing",t.data)})})},fetchLunyu:function(n){var e=n.commit;return new E.a(function(n,t){N.get("/lunyu/lunyu.json").then(function(t){n(t.data),e("setLunyu",t.data)})})},fetchSishuwujing:function(n){var e=n.commit,t=["daxue","mengzi","zhongyong"];return new E.a(function(n,r){E.a.all(t.map(function(n){return N.get("/sishuwujing/".concat(n,".json")).then(function(n){return n.data})})).then(function(t){n(t),e("setSishuwujing",t)})})}},mutations:{setShijing:function(n,e){n.shijing=e},setLunyu:function(n,e){n.lunyu=e},setSishuwujing:function(n,e){n.sishuwujing=e},setKeyword:function(n,e){n.keyword=e}}}),z=$,M=t("8c4f");r["a"].use(M["a"]);var q=new M["a"]({mode:"history",base:"/poerty/",fallback:!0,scrollBehavior:function(n,e,t){return t||{x:0,y:0}},routes:[{path:"/",component:function(){return t.e("chunk-25f2fd7f").then(t.bind(null,"8fc1"))}},{path:"/shijing",component:function(){return t.e("chunk-25f2fd7f").then(t.bind(null,"8fc1"))}},{path:"/lunyu",component:function(){return t.e("chunk-5c763c78").then(t.bind(null,"ecc9"))}},{path:"/sishuwujing",component:function(){return t.e("chunk-32f36add").then(t.bind(null,"d066"))}}]}),H=q,U={data:function(){return{speech:window.SpeechSynthesisUtterance}},methods:{read:function(n){var e=new window.SpeechSynthesisUtterance;e.text=n,window.speechSynthesis.speak(e)},matchTitle:function(n){if(n.includes(this.keyword))return!0},matchContent:function(n){for(var e=!1,t=this.keyword,r=0;r<n.length;r++)if(n[r].includes(t)){e=!0;break}return e}}},G=U;r["a"].mixin(G),r["a"].config.productionTip=!1,r["a"].prototype.highlight=function(n,e){return e&&n.includes(e)?n.split(e).join("<b>".concat(e,"</b>")):n},new r["a"]({store:z,router:H,render:function(n){return n(O)}}).$mount("#app")},"64a9":function(n,e,t){},"6c54":function(n,e,t){"use strict";var r=t("3092"),i=t.n(r);i.a},a605:function(n,e,t){},f220:function(n,e,t){"use strict";var r=t("a605"),i=t.n(r);i.a}});
//# sourceMappingURL=app.5ff3b6f0.js.map