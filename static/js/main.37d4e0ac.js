(()=>{"use strict";var e={6050:(e,r,t)=>{t.r(r);var o={};t.r(o),t.d(o,{livelyBlue:()=>u,navigationBarColor:()=>p,opaque:()=>f,primary:()=>b,red:()=>h,secondary:()=>g,vibrantOrange:()=>d});var a={};t.r(a),t.d(a,{deepDark:()=>F,footerActionsShadow:()=>m,glassFormsShadow:()=>v,white:()=>y});var n={};t.r(n),t.d(n,{ActionsheetContent:()=>w,Badge:()=>k,Button:()=>j,Heading:()=>P,IconButton:()=>C,Input:()=>S,ModalContent:()=>E});var i=t(4178),s=t(4356),c=t(4942),l=t(3889),d={50:"#FFF6E5",100:"#FFE8BF",200:"#FFD295",300:"#FFBE6A",400:"#FFAA48",500:"#FF9626",600:"#FF881A",700:"#FF7810",800:"#FF6707",900:"#FF5000"},u={50:"#E5F5FF",100:"#BCE4FF",200:"#93D2FF",300:"#6ABFFF",400:"#41ABFF",500:"#1A97FF",600:"#0085FF",700:"#0070E6",800:"#005CC0",900:"#004499"},h={50:"#ff778f"},f={50:"#FFFFFF33",100:"#FFFFFF44",200:"#FFFFFF55",300:"#FFFFFF66",400:"#FFFFFF77",500:"#FFFFFF88",600:"#FFFFFF99",700:"#FFFFFFEE",800:"#FFFFFFFF",900:"#FFFFFF"},p=d[600],b=d,g=u,F={shadowColor:"black",shadowOffset:{width:16,height:8},shadowOpacity:.8,shadowRadius:64,elevation:9},y={shadowColor:"white",shadowOffset:{width:16,height:8},shadowOpacity:.8,shadowRadius:64,elevation:9},v={shadowColor:"white",shadowOffset:{width:16,height:8},shadowOpacity:.4,shadowRadius:64,elevation:9},m={shadowColor:"black",shadowOffset:{width:6,height:4},shadowOpacity:.1,shadowRadius:64,elevation:9},w={baseStyle:{bg:"white"}};function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,c.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var j={defaultProps:{variant:"solid",borderRadius:"2xl"},sizes:{lg:{py:2.5,_text:{fontSize:"lg",fontWeight:"medium"}},md:{py:3,_text:{fontSize:"md"}},sm:{py:2,_text:{fontSize:"sm"}}},variants:{solid:function(e){var r=e.colorScheme;switch(r){case"primary":case"secondary":return{bg:r+".400",_text:{color:"darkText"},_pressed:{bg:r+".500"},_icon:{color:"darkText"}};default:return{bg:"gray.900",_text:{color:"lightText"},_icon:{color:"lightText"},_pressed:{bg:"gray.700"}}}}}},C=x(x({},j),{},{defaultProps:{variant:"solid"}});const k={variants:{vibrant:function(e){var r=e.colorScheme;switch(r){case"primary":case"secondary":case"green":case"red":case"yellow":case"orange":case"teal":case"cyan":case"blue":case"purple":case"pink":case"rose":case"emerald":case"lime":case"amber":case"blueGray":case"warmGray":case"trueGray":case"coolGray":case"gray":return{bg:r+".300",borderRadius:"full"};case"light":return{bg:"gray.50",borderRadius:"full"};case"white":return{bg:"white",borderRadius:"full"};default:return{bg:"black",borderRadius:"full",_text:{color:"lightText"}}}}}},P={baseStyle:{fontWeight:"medium"}};const S={defaultProps:{borderRadius:"2xl",variant:"filled"},sizes:{md:{fontSize:"md",paddingTop:"11px",paddingBottom:"10px"},lg:{fontSize:"lg",paddingTop:"13px",paddingBottom:"13px"}},variants:{filled:function(e){var r=e.colorScheme;switch(r){case"primary":case"secondary":return{bg:r+".200",borderColor:r+".200",shadow:9,color:"black",placeholderTextColor:"black"};case"dark":return{bg:"gray.700",borderColor:"gray.700",color:r+".700"};case"white":return{bg:"white",borderColor:"white",color:"black",placeholderTextColor:"black",shadow:"6",_focus:{bg:"white"}};case"gray":return{bg:r+".100",borderColor:r+".900",color:r+".700"};default:return{bg:"gray.100"}}}}},E={baseStyle:{fontWeight:"medium"}};function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,c.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var B=(0,l.extendTheme)({colors:A({},o),shadows:A({},a),components:A({},n)}),R=t(2629);function _(e){var r=e.children;return(0,R.jsx)(s.NativeBaseProvider,{theme:B,children:r})}var D=t(5222),z=t(2571),M={enabled:!1},N={prefixes:["https://kv-express.com","https://*.kv-express.com","kv-express://"],config:{initialRouteName:"Landing",screens:{Landing:"/"}}};function G(e){var r=e.children,t=(0,z.useTheme)(),o={dark:!1,colors:{background:t.colors.gray[50],border:t.colors.gray[200],card:t.colors.white,primary:t.colors.primary[500],text:t.colors.darkText,notification:t.colors.primary[500]}};return(0,R.jsx)(D.default,{documentTitle:M,linking:N,theme:o,children:r})}var I=t(3063),L=t(2546),H=new I.QueryClient;function W(e){var r=e.children;return(0,R.jsx)(L.QueryClientProvider,{client:H,children:r})}function Z(e){var r=e.children;return(0,R.jsx)(W,{children:(0,R.jsx)(_,{children:(0,R.jsx)(G,{children:r})})})}var q=t(186),Q=t(5861),K=(0,t(7478).default)((0,Q.default)((function*(){return yield Promise.all([t.e(344),t.e(1)]).then(t.bind(t,5286))}))),V=t(1963),J=t(2500),U=t(6752);function X(){return(0,R.jsx)(V.default,{space:"4",alignItems:"center",children:(0,R.jsxs)(J.default,{width:"100",children:[(0,R.jsx)(U.default,{color:"secondary",fontSize:"md",textAlign:"left",children:"KV"}),(0,R.jsx)(U.default,{color:"secondary",fontSize:"md",textAlign:"right",children:"Express"})]})})}var Y=t(2627),$=t(2429),ee=t(4710);const re=(0,$.createIcon)({viewBox:"0 0 24 24",path:[(0,R.jsx)(ee.Path,{d:"M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"},"1")]});function te(){return(0,R.jsx)(Y.default,{padding:"4",icon:(0,R.jsx)(re,{color:"secodary.400",size:"lg"}),onPress:function(){console.log("HEADER RIGHT ICON PRESSED!")}})}var oe=(0,q.default)();function ae(){return(0,R.jsx)(oe.Navigator,{screenOptions:{headerStyle:{backgroundColor:p},headerShown:!1},children:(0,R.jsx)(oe.Group,{screenOptions:{headerTitle:function(){return(0,R.jsx)(X,{})},headerTitleAlign:"center",headerRight:function(){return(0,R.jsx)(te,{})}},children:(0,R.jsx)(oe.Screen,{name:"Landing",component:K})})})}(0,i.default)((function(){return(0,R.jsx)(Z,{children:(0,R.jsx)(ae,{})})}))}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}t.m=e,(()=>{var e=[];t.O=(r,o,a,n)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,n]=e[d],s=!0,c=0;c<o.length;c++)(!1&n||i>=n)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(d--,1);var l=a();void 0!==l&&(r=l)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,a,n]}})(),t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>"static/js/"+(1===e?"Landing":e)+"."+{1:"a730f64c",344:"b1b9ce1a"}[e]+".chunk.js",t.miniCssF=e=>{},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="web:";t.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==r+n){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+n),s.src=o),e[o]=[a];var h=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(t))),r)return r(t)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/ssoydabas.github.io/",(()=>{var e={179:0};t.f.j=(r,o)=>{var a=t.o(e,r)?e[r]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((t,o)=>a=e[r]=[t,o]));o.push(a[2]=n);var i=t.p+t.u(r),s=new Error;t.l(i,(o=>{if(t.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,a[1](s)}}),"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var a,n,[i,s,c]=o,l=0;if(i.some((r=>0!==e[r]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var d=c(t)}for(r&&r(o);l<i.length;l++)n=i[l],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[852],(()=>t(6050)));o=t.O(o)})();
//# sourceMappingURL=main.37d4e0ac.js.map