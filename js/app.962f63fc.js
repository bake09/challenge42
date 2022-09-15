(()=>{"use strict";var e={8442:(e,t,o)=>{o(8964),o(702);var l=o(1957),a=o(8266),r=o(499),s=o(9835);function n(e,t,o,l,a,r){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}const i=(0,s.aZ)({name:"App"});var u=o(1639);const c=(0,u.Z)(i,[["render",n]]),d=c;var p=o(3340),m=o(1809);const f=(0,p.h)((()=>{const e=(0,m.WB)();return e}));var v=o(8339),h=o(6970),g=o(8962);const b=e=>((0,s.dD)("data-v-ebb6c122"),e=e(),(0,s.Cn)(),e),y=b((()=>(0,s._)("div",{class:"text-h6 text-center q-pb-md"},"Todo's",-1))),w={class:"row items-center all-pointer-events"},_=(0,s.Uk)(" Todo "),q=(0,s.Uk)("Enter a Todo"),k={class:"q-gutter-y-md q-mt-md"},x={class:"q-gutter-y-md q-mt-md"},Z={key:0,class:"text-center"},W=b((()=>(0,s._)("div",{class:"text-center text-h6 text-grey q-pa-md"},"Keine Todos vorhanden",-1))),P=[W],Q={__name:"IndexPage",setup(e){const t=(0,g.k)(),o=(0,r.iH)(null);(0,s.bv)((()=>{console.log("store.items :>> ",t.items)}));const a=(0,r.iH)(""),n=()=>{t.create({text:a.value}).then((e=>{a.value="",o.value.focus()})).catch((e=>{console.log(e)}));new Notification(`Todo: ${a.value}`,{body:`Todo: ${a.value}`})},i=e=>{t.remove(e).then((e=>{a.value="",o.value.focus()})).catch((e=>{console.log(e)}))};return(e,u)=>{const c=(0,s.up)("q-icon"),d=(0,s.up)("q-tooltip"),p=(0,s.up)("q-input"),m=(0,s.up)("q-btn"),f=(0,s.up)("q-form"),v=(0,s.up)("q-item-section"),g=(0,s.up)("q-item"),b=(0,s.up)("q-list"),W=(0,s.up)("q-page"),Q=(0,s.Q2)("ripple");return(0,s.wg)(),(0,s.j4)(W,{class:"q-pa-md"},{default:(0,s.w5)((()=>[y,(0,s.Wm)(f,{onSubmit:n,class:"q-gutter-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=e=>a.value=e),label:"Enter a Todo *",hint:"","lazy-rules":"",ref_key:"todoInput",ref:o},{label:(0,s.w5)((()=>[(0,s._)("div",w,[(0,s.Wm)(c,{class:"q-mr-xs",size:"24px",name:"add"}),_,(0,s.Wm)(d,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[q])),_:1})])])),_:1},8,["modelValue"]),(0,s._)("div",k,[(0,s.Wm)(m,{label:"Create",type:"submit",class:"full-width",color:"primary"})])])),_:1}),(0,s._)("div",x,[(0,s.Wm)(b,{bordered:"",separator:""},{default:(0,s.w5)((()=>[(0,r.SU)(t).items.length?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:1},(0,s.Ko)((0,r.SU)(t).items,(e=>(0,s.wy)(((0,s.wg)(),(0,s.j4)(g,{clickable:"",key:e.id},{default:(0,s.w5)((()=>[(0,s.Wm)(v,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,h.zw)(e.text),1)])),_:2},1024),(0,s.Wm)(v,{avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{color:"red-6",name:"delete",onClick:(0,l.iM)((t=>i({id:e.id})),["prevent"])},null,8,["onClick"])])),_:2},1024)])),_:2},1024)),[[Q,{early:!0,color:"blue-grey-5"}]]))),128)):((0,s.wg)(),(0,s.iD)("div",Z,P))])),_:1})])])),_:1})}}};var C=o(9885),E=o(8326),T=o(113),j=o(2857),A=o(2591),U=o(9379),S=o(1302),z=o(7691),O=o(3246),V=o(3940),I=o(490),B=o(1233),L=o(1136),H=o(9984),F=o.n(H);const N=(0,u.Z)(Q,[["__scopeId","data-v-ebb6c122"]]),R=N;F()(Q,"components",{QPage:C.Z,QForm:E.Z,QInput:T.Z,QIcon:j.Z,QTooltip:A.Z,QBtn:U.Z,QAvatar:S.Z,QChip:z.Z,QList:O.Z,QSpinner:V.Z,QItem:I.Z,QItemSection:B.Z}),F()(Q,"directives",{Ripple:L.Z});const M=(0,s._)("div",{class:"text-h6 text-center q-pb-md"},"Register",-1),D={class:"row items-center all-pointer-events"},Y=(0,s.Uk)(" Email "),K=(0,s.Uk)("Email address"),$={class:"row items-center all-pointer-events"},X=(0,s.Uk)(" Password "),G=(0,s.Uk)("Email address"),J={class:"q-gutter-y-md q-mt-md"},ee={__name:"RegisterPage",setup(e){const t=(0,r.iH)("test@test.com"),o=(0,r.iH)("123123123"),l=(0,r.iH)(!0),a=()=>{console.log("email.value :>> ",t.value),console.log("password.value :>> ",o.value)},n=()=>{t.value="",o.value=""};return(e,r)=>{const i=(0,s.up)("q-icon"),u=(0,s.up)("q-tooltip"),c=(0,s.up)("q-input"),d=(0,s.up)("q-btn"),p=(0,s.up)("q-form"),m=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(m,{class:"q-pa-md"},{default:(0,s.w5)((()=>[M,(0,s.Wm)(p,{onSubmit:a,onReset:n,class:"q-gutter-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),label:"Your EmailAdress *",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your EmailAdress"]},{label:(0,s.w5)((()=>[(0,s._)("div",D,[(0,s.Wm)(i,{class:"q-mr-xs",size:"24px",name:"mail"}),Y,(0,s.Wm)(u,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[K])),_:1})])])),_:1},8,["modelValue","rules"]),(0,s.Wm)(c,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",type:l.value?"password":"text",modelValue:o.value,"onUpdate:modelValue":r[2]||(r[2]=e=>o.value=e),label:"Your password *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your password"]},{label:(0,s.w5)((()=>[(0,s._)("div",$,[(0,s.Wm)(i,{class:"q-mr-xs",size:"24px",name:"lock"}),X,(0,s.Wm)(u,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[G])),_:1})])])),append:(0,s.w5)((()=>[(0,s.Wm)(i,{name:l.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:r[1]||(r[1]=e=>l.value=!l.value)},null,8,["name"])])),_:1},8,["type","modelValue","rules"]),(0,s._)("div",J,[(0,s.Wm)(d,{label:"Register",type:"submit",class:"full-width",color:"primary"}),(0,s.Wm)(d,{label:"Reset",type:"reset",color:"primary",flat:"",class:"full-width"})])])),_:1})])),_:1})}}};var te=o(592);const oe=ee,le=oe;F()(ee,"components",{QPage:C.Z,QForm:E.Z,QInput:T.Z,QIcon:j.Z,QTooltip:A.Z,QToggle:te.Z,QBtn:U.Z});var ae=o(6928);const re=(0,s._)("div",{class:"text-h6 text-center q-pb-md"},"Login",-1),se={class:"row items-center all-pointer-events"},ne=(0,s.Uk)(" Email "),ie=(0,s.Uk)("Email address"),ue={class:"row items-center all-pointer-events"},ce=(0,s.Uk)(" Password "),de=(0,s.Uk)("Email address"),pe={class:"q-gutter-y-md q-mt-md"},me={__name:"LoginPage",setup(e){const t=(0,v.tv)(),o=(0,ae.a)(),l=(0,r.iH)("test@test.com"),a=(0,r.iH)("123123123"),n=(0,r.iH)(!0),i=()=>{let e={email:l.value,password:a.value,strategy:"local"};o.authenticate(e).then((e=>{o.error=null,console.log("LoginPage Authenticate :>> ",e)})).catch((e=>{console.log("LoginPage Authenticate :>> ",e)})),t.replace({path:"/"})},u=()=>{l.value="",a.value=""};return(e,t)=>{const o=(0,s.up)("q-icon"),r=(0,s.up)("q-tooltip"),c=(0,s.up)("q-input"),d=(0,s.up)("q-btn"),p=(0,s.up)("q-form"),m=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(m,{class:"q-pa-md"},{default:(0,s.w5)((()=>[re,(0,s.Wm)(p,{onSubmit:i,onReset:u,class:"q-gutter-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),label:"Your EmailAdress *",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your EmailAdress"]},{label:(0,s.w5)((()=>[(0,s._)("div",se,[(0,s.Wm)(o,{class:"q-mr-xs",size:"24px",name:"mail"}),ne,(0,s.Wm)(r,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[ie])),_:1})])])),_:1},8,["modelValue","rules"]),(0,s.Wm)(c,{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",clearable:"","clear-icon":"close",dense:"",outlined:"",type:n.value?"password":"text",modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),label:"Your password *","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your password"]},{label:(0,s.w5)((()=>[(0,s._)("div",ue,[(0,s.Wm)(o,{class:"q-mr-xs",size:"24px",name:"lock"}),ce,(0,s.Wm)(r,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,s.w5)((()=>[de])),_:1})])])),append:(0,s.w5)((()=>[(0,s.Wm)(o,{name:n.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>n.value=!n.value)},null,8,["name"])])),_:1},8,["type","modelValue","rules"]),(0,s._)("div",pe,[(0,s.Wm)(d,{label:"Login",type:"submit",class:"full-width",color:"primary"}),(0,s.Wm)(d,{label:"Reset",type:"reset",color:"primary",flat:"",class:"full-width"})])])),_:1})])),_:1})}}},fe=me,ve=fe;F()(me,"components",{QPage:C.Z,QForm:E.Z,QInput:T.Z,QIcon:j.Z,QTooltip:A.Z,QToggle:te.Z,QBtn:U.Z});const he=[{path:"/",component:()=>Promise.all([o.e(736),o.e(969)]).then(o.bind(o,5969)),children:[{path:"",component:R,name:"home"},{path:"/register",component:le,name:"register"},{path:"/login",component:ve,name:"login"}]},{path:"/:catchAll(.*)*",component:()=>o.e(862).then(o.bind(o,1862))}],ge=he,be=(0,p.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:ge,history:e("")});return t}));async function ye(e,t){const o=e(d);o.use(a.Z,t);const l="function"===typeof f?await f({}):f;o.use(l);const s=(0,r.Xl)("function"===typeof be?await be({store:l}):be);return l.use((({store:e})=>{e.router=s})),{app:o,store:l,router:s}}const we={config:{}},_e="";async function qe({app:e,router:t,store:o},l){let a=!1;const r=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t,window.location.reload())},n=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<l.length;u++)try{await l[u]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:n,publicPath:_e})}catch(i){return i&&i.url?void s(i.url):void console.error("[Quasar] boot error:",i)}!0!==a&&(e.use(t),e.mount("#q-app"))}ye(l.ri,we).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4197))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));qe(e,o)}))))},4197:(e,t,o)=>{o.r(t),o.d(t,{api:()=>d});var l=o(4793),a=o.n(l),r=o(6978),s=o.n(r),n=o(124),i=o.n(n),u=o(3819);o(7963);const c=(0,u.ZP)("https://challenge42sqlite.onrender.com:3030",{transports:["websocket"]}),d=a()().configure(s()(c)).configure(i()({storage:window.localStorage}))},6928:(e,t,o)=>{o.d(t,{a:()=>r});var l=o(3443),a=o(4197);const r=(0,l.nm)({feathersClient:a.api,state:()=>({user:null})})},8962:(e,t,o)=>{o.d(t,{k:()=>c});var l=o(1809),a=o(3443),r=o(4197);(0,l.WB)();const{defineStore:s,BaseModel:n}=(0,a.eA)({clients:{api:r.api},idField:"id"});class i extends n{}const u="todos",c=s({servicePath:u,Model:i});r.api.service(u).hooks({})}},t={};function o(l){var a=t[l];if(void 0!==a)return a.exports;var r=t[l]={id:l,loaded:!1,exports:{}};return e[l].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=e,(()=>{var e=[];o.O=(t,l,a,r)=>{if(!l){var s=1/0;for(c=0;c<e.length;c++){for(var[l,a,r]=e[c],n=!0,i=0;i<l.length;i++)(!1&r||s>=r)&&Object.keys(o.O).every((e=>o.O[e](l[i])))?l.splice(i--,1):(n=!1,r<s&&(s=r));if(n){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,a,r]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,l)=>(o.f[l](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{862:"b836ef1d",969:"e5c59507"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"dbbe2fa5",736:"e790c34e",969:"31d6cfe0"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project:";o.l=(l,a,r,s)=>{if(e[l])e[l].push(a);else{var n,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==t+r){n=d;break}}n||(i=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",t+r),n.src=l),e[l]=[a];var p=(t,o)=>{n.onerror=n.onload=null,clearTimeout(m);var a=e[l];if(delete e[l],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),i&&document.head.appendChild(n)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,l)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=s,i.request=n,a.parentNode.removeChild(a),l(i)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var a=o[l],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){a=s[l],r=a.getAttribute("data-href");if(r===e||r===t)return a}},l=l=>new Promise(((a,r)=>{var s=o.miniCssF(l),n=o.p+s;if(t(s,n))return a();e(l,n,a,r)})),a={143:0};o.f.miniCss=(e,t)=>{var o={969:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=l(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,l)=>{var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)l.push(a[2]);else{var r=new Promise(((o,l)=>a=e[t]=[o,l]));l.push(a[2]=r);var s=o.p+o.u(t),n=new Error,i=l=>{if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=l&&("load"===l.type?"missing":l.type),s=l&&l.target&&l.target.src;n.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",n.name="ChunkLoadError",n.type=r,n.request=s,a[1](n)}};o.l(s,i,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,l)=>{var a,r,[s,n,i]=l,u=0;if(s.some((t=>0!==e[t]))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(i)var c=i(o)}for(t&&t(l);u<s.length;u++)r=s[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},l=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=o.O(void 0,[736],(()=>o(8442)));l=o.O(l)})();