import{P as h,R as V,r as D,j as o,D as dn,h as ia}from"./index-BmhtVPv5.js";import{C as oa,a as pe}from"./CRow-BaHQmrYQ.js";import{d as la}from"./jspdf.plugin.autotable-BqlemtwZ.js";import{E as ca}from"./exceljs.min-0yz97xAt.js";import{B as Fe}from"./Box-B7wMBWR0.js";import{P as fa,T as B,I as ua}from"./IconButton-Tk6TJOMm.js";import{T as da,a as ma,e as pa,c as De,d as N,b as ga}from"./TableRow-BgRVcAap.js";import{T as ha,a as ba,v as ya,b as va,c as xa}from"./TableSortLabel-Bfv4hhPw.js";import{D as Pt,a as Ot,b as Nt,c as Ct}from"./DialogTitle-qLRu3H_3.js";import{T as _a}from"./TextField-CCACKWvT.js";import{f as ka}from"./format-cwXK75ha.js";import{a as Aa}from"./colorManipulator-BH4iFVtC.js";import"./createSvgIcon-BV0hWzIg.js";import"./DefaultLayout-POoTXWmj.js";import"./index.esm-caRoCSJ7.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BkLoX1rB.js";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Sa(e,t,n){return(t=Pa(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(n),!0).forEach(function(a){Sa(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function wa(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pa(e){var t=wa(e,"string");return typeof t=="symbol"?t:t+""}const It=()=>{};let nt={},mn={},pn=null,gn={mark:It,measure:It};try{typeof window<"u"&&(nt=window),typeof document<"u"&&(mn=document),typeof MutationObserver<"u"&&(pn=MutationObserver),typeof performance<"u"&&(gn=performance)}catch{}const{userAgent:jt=""}=nt.navigator||{},X=nt,_=mn,Tt=pn,ge=gn;X.document;const Y=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",hn=~jt.indexOf("MSIE")||~jt.indexOf("Trident/");var Oa=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ca={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",ke="duotone",Ea="sharp",Ia="sharp-duotone",vn=[C,ke,Ea,Ia],ja={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ta={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ra=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Fa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Da=["fak","fa-kit","fakd","fa-kit-duotone"],Rt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ma=["kit"],La={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},za=["fak","fakd"],Ua={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ft={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},he={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ya=["fak","fa-kit","fakd","fa-kit-duotone"],Ha={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ba={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Xa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Me={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$a=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Le=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Wa,...$a],Ga=["solid","regular","light","thin","duotone","brands"],xn=[1,2,3,4,5,6,7,8,9,10],Va=xn.concat([11,12,13,14,15,16,17,18,19,20]),qa=[...Object.keys(Xa),...Ga,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",he.GROUP,he.SWAP_OPACITY,he.PRIMARY,he.SECONDARY].concat(xn.map(e=>"".concat(e,"x"))).concat(Va.map(e=>"w-".concat(e))),Ka={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const U="___FONT_AWESOME___",ze=16,_n="fa",kn="svg-inline--fa",K="data-fa-i2svg",Ue="data-fa-pseudo-element",Qa="data-fa-pseudo-element-pending",at="data-prefix",rt="data-icon",Dt="fontawesome-i2svg",Ja="async",Za=["HTML","HEAD","STYLE","SCRIPT"],An=(()=>{try{return!0}catch{return!1}})();function ue(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[C]}})}const Sn=c({},bn);Sn[C]=c(c(c(c({},{"fa-duotone":"duotone"}),bn[C]),Rt.kit),Rt["kit-duotone"]);const er=ue(Sn),We=c({},Fa);We[C]=c(c(c(c({},{duotone:"fad"}),We[C]),Ft.kit),Ft["kit-duotone"]);const Mt=ue(We),Ye=c({},Me);Ye[C]=c(c({},Ye[C]),Ua.kit);const st=ue(Ye),He=c({},Ba);He[C]=c(c({},He[C]),La.kit);ue(He);const tr=Oa,wn="fa-layers-text",nr=Na,ar=c({},ja);ue(ar);const rr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ce=Ca,sr=[...Ma,...qa],oe=X.FontAwesomeConfig||{};function ir(e){var t=_.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function or(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=or(ir(n));r!=null&&(oe[a]=r)});const Pn={styleDefault:"solid",familyDefault:C,cssPrefix:_n,replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);const ne=c(c({},Pn),oe);ne.autoReplaceSvg||(ne.observeMutations=!1);const d={};Object.keys(Pn).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(t){ne[e]=t,le.forEach(n=>n(d))},get:function(){return ne[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){ne.cssPrefix=e,le.forEach(t=>t(d))},get:function(){return ne.cssPrefix}});X.FontAwesomeConfig=d;const le=[];function lr(e){return le.push(e),()=>{le.splice(le.indexOf(e),1)}}const H=ze,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cr(e){if(!e||!Y)return;const t=_.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=_.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return _.head.insertBefore(t,a),e}const fr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){let e=12,t="";for(;e-- >0;)t+=fr[Math.random()*62|0];return t}function ae(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function it(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function On(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ur(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(On(e[n]),'" '),"").trim()}function Ae(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ot(e){return e.size!==L.size||e.x!==L.x||e.y!==L.y||e.rotate!==L.rotate||e.flipX||e.flipY}function dr(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(s," ").concat(i," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function mr(e){let{transform:t,width:n=ze,height:a=ze,startCentered:r=!1}=e,s="";return r&&hn?s+="translate(".concat(t.x/H-n/2,"em, ").concat(t.y/H-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "):s+="translate(".concat(t.x/H,"em, ").concat(t.y/H,"em) "),s+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var pr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Nn(){const e=_n,t=kn,n=d.cssPrefix,a=d.replacementClass;let r=pr;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let Lt=!1;function Ee(){d.autoAddCss&&!Lt&&(cr(Nn()),Lt=!0)}var gr={mixout(){return{dom:{css:Nn,insertCss:Ee}}},hooks(){return{beforeDOMElementCreation(){Ee()},beforeI2svg(){Ee()}}}};const W=X||{};W[U]||(W[U]={});W[U].styles||(W[U].styles={});W[U].hooks||(W[U].hooks={});W[U].shims||(W[U].shims=[]);var z=W[U];const Cn=[],En=function(){_.removeEventListener("DOMContentLoaded",En),ve=1,Cn.map(e=>e())};let ve=!1;Y&&(ve=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),ve||_.addEventListener("DOMContentLoaded",En));function hr(e){Y&&(ve?setTimeout(e,0):Cn.push(e))}function de(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?On(e):"<".concat(t," ").concat(ur(n),">").concat(a.map(de).join(""),"</").concat(t,">")}function zt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ie=function(t,n,a,r){var s=Object.keys(t),i=s.length,l=n,u,f,m;for(a===void 0?(u=1,m=t[s[0]]):(u=0,m=a);u<i;u++)f=s[u],m=l(m,t[f],f,t);return m};function br(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Be(e){const t=br(e);return t.length===1?t[0].toString(16):null}function yr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ut(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Xe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ut(t);typeof z.hooks.addPack=="function"&&!a?z.hooks.addPack(e,Ut(t)):z.styles[e]=c(c({},z.styles[e]||{}),r),e==="fas"&&Xe("fa",t)}const{styles:fe,shims:vr}=z,In=Object.keys(st),xr=In.reduce((e,t)=>(e[t]=Object.keys(st[t]),e),{});let lt=null,jn={},Tn={},Rn={},Fn={},Dn={};function _r(e){return~sr.indexOf(e)}function kr(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!_r(r)?r:null}const Mn=()=>{const e=a=>Ie(fe,(r,s,i)=>(r[i]=Ie(s,a,{}),r),{});jn=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=s}),a)),Tn=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=s}),a)),Dn=e((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(l=>{a[l]=s}),a});const t="far"in fe||d.autoFetchSvg,n=Ie(vr,(a,r)=>{const s=r[0];let i=r[1];const l=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:l}),a},{names:{},unicodes:{}});Rn=n.names,Fn=n.unicodes,lt=Se(d.styleDefault,{family:d.familyDefault})};lr(e=>{lt=Se(e.styleDefault,{family:d.familyDefault})});Mn();function ct(e,t){return(jn[e]||{})[t]}function Ar(e,t){return(Tn[e]||{})[t]}function q(e,t){return(Dn[e]||{})[t]}function Ln(e){return Rn[e]||{prefix:null,iconName:null}}function Sr(e){const t=Fn[e],n=ct("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $(){return lt}const zn=()=>({prefix:null,iconName:null,rest:[]});function wr(e){let t=C;const n=In.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return vn.forEach(a=>{(e.includes(n[a])||e.some(r=>xr[a].includes(r)))&&(t=a)}),t}function Se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=C}=t,a=er[n][e];if(n===ke&&!e)return"fad";const r=Mt[n][e]||Mt[n][a],s=e in z.styles?e:null;return r||s||null}function Pr(e){let t=[],n=null;return e.forEach(a=>{const r=kr(d.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function Wt(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=Le.concat(Ya),s=Wt(e.filter(y=>r.includes(y))),i=Wt(e.filter(y=>!Le.includes(y))),l=s.filter(y=>(a=y,!yn.includes(y))),[u=null]=l,f=wr(s),m=c(c({},Pr(i)),{},{prefix:Se(u,{family:f})});return c(c(c({},m),Er({values:e,family:f,styles:fe,config:d,canonical:m,givenPrefix:a})),Or(n,a,m))}function Or(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?Ln(r):{},i=q(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!fe.far&&fe.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Nr=vn.filter(e=>e!==C||e!==ke),Cr=Object.keys(Me).filter(e=>e!==C).map(e=>Object.keys(Me[e])).flat();function Er(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=e,l=n===ke,u=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||m)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Nr.includes(n)&&(Object.keys(s).find(b=>Cr.includes(b))||i.autoFetchSvg)){const b=Ra.get(n).defaultShortPrefixId;a.prefix=b,a.iconName=q(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=$()||"fas"),a}class Ir{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),Xe(s,r[s]);const i=st[C][s];i&&Xe(i,r[s]),Mn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:l}=a[r],u=l[2];t[s]||(t[s]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(t[s][f]=l)}),t[s][i]=l}),t}}let Yt=[],J={};const te={},jr=Object.keys(te);function Tr(e,t){let{mixoutsTo:n}=t;return Yt=e,J={},Object.keys(te).forEach(a=>{jr.indexOf(a)===-1&&delete te[a]}),Yt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{J[i]||(J[i]=[]),J[i].push(s[i])})}a.provides&&a.provides(te)}),n}function $e(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(J[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function Q(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(J[e]||[]).forEach(s=>{s.apply(null,n)})}function G(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,t):void 0}function Ge(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||$();if(t)return t=q(n,t)||t,zt(Un.definitions,n,t)||zt(z.styles,n,t)}const Un=new Ir,Rr=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,Q("noAuto")},Fr={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(Q("beforeI2svg",e),G("pseudoElements2svg",e),G("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,hr(()=>{Mr({autoReplaceSvgRoot:t}),Q("watch",e)})}},Dr={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Se(e[0]);return{prefix:n,iconName:q(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(tr))){const t=we(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||$(),iconName:q(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=$();return{prefix:t,iconName:q(t,e)||e}}}},R={noAuto:Rr,config:d,dom:Fr,parse:Dr,library:Un,findIconDefinition:Ge,toHtml:de},Mr=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=_}=e;(Object.keys(z.styles).length>0||d.autoFetchSvg)&&Y&&d.autoReplaceSvg&&R.dom.i2svg({node:t})};function Pe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>de(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Y)return;const n=_.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Lr(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:i}=e;if(ot(i)&&n.found&&!a.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};r.style=Ae(c(c({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function zr(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function ft(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:l,maskId:u,titleId:f,extra:m,watchable:y=!1}=e,{width:b,height:S}=n.found?n:t,E=za.includes(a),j=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(T=>m.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(m.classes).join(" ");let k={children:[],attributes:c(c({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:j,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(S)})};const w=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(b/S*16*.0625,"em")}:{};y&&(k.attributes[K]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||ce())},children:[l]}),delete k.attributes.title);const g=c(c({},k),{},{prefix:a,iconName:r,main:t,mask:n,maskId:u,transform:s,symbol:i,styles:c(c({},w),m.styles)}),{children:O,attributes:F}=n.found&&t.found?G("generateAbstractMask",g)||{children:[],attributes:{}}:G("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=O,g.attributes=F,i?zr(g):Lr(g)}function Ht(e){const{content:t,width:n,height:a,transform:r,title:s,extra:i,watchable:l=!1}=e,u=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});l&&(u[K]="");const f=c({},i.styles);ot(r)&&(f.transform=mr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=Ae(f);m.length>0&&(u.style=m);const y=[];return y.push({tag:"span",attributes:u,children:[t]}),s&&y.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),y}function Ur(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Ae(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:je}=z;function Ve(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ce.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ce.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Wr={found:!1,width:512,height:512};function Yr(e,t){!An&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qe(e,t){let n=t;return t==="fa"&&d.styleDefault!==null&&(t=$()),new Promise((a,r)=>{if(n==="fa"){const s=Ln(e);e=s.iconName||e,t=s.prefix||t}if(e&&t&&je[t]&&je[t][e]){const s=je[t][e];return a(Ve(s))}Yr(e,t),a(c(c({},Wr),{},{icon:d.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}const Bt=()=>{},Ke=d.measurePerformance&&ge&&ge.mark&&ge.measure?ge:{mark:Bt,measure:Bt},ie='FA "6.7.2"',Hr=e=>(Ke.mark("".concat(ie," ").concat(e," begins")),()=>Wn(e)),Wn=e=>{Ke.mark("".concat(ie," ").concat(e," ends")),Ke.measure("".concat(ie," ").concat(e),"".concat(ie," ").concat(e," begins"),"".concat(ie," ").concat(e," ends"))};var ut={begin:Hr,end:Wn};const be=()=>{};function Xt(e){return typeof(e.getAttribute?e.getAttribute(K):null)=="string"}function Br(e){const t=e.getAttribute?e.getAttribute(at):null,n=e.getAttribute?e.getAttribute(rt):null;return t&&n}function Xr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function $r(){return d.autoReplaceSvg===!0?ye.replace:ye[d.autoReplaceSvg]||ye.replace}function Gr(e){return _.createElementNS("http://www.w3.org/2000/svg",e)}function Vr(e){return _.createElement(e)}function Yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Gr:Vr}=t;if(typeof e=="string")return _.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(Yn(s,{ceFn:n}))}),a}function qr(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ye={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Yn(n),t)}),t.getAttribute(K)===null&&d.keepOriginalSource){let n=_.createComment(qr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~it(t).indexOf(d.replacementClass))return ye.replace(e);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,l)=>(l===d.replacementClass||l.match(a)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>de(s)).join(`
`);t.setAttribute(K,""),t.innerHTML=r}};function $t(e){e()}function Hn(e,t){const n=typeof t=="function"?t:be;if(e.length===0)n();else{let a=$t;d.mutateApproach===Ja&&(a=X.requestAnimationFrame||$t),a(()=>{const r=$r(),s=ut.begin("mutate");e.map(r),s(),n()})}}let dt=!1;function Bn(){dt=!0}function Qe(){dt=!1}let xe=null;function Gt(e){if(!Tt||!d.observeMutations)return;const{treeCallback:t=be,nodeCallback:n=be,pseudoElementsCallback:a=be,observeMutationsRoot:r=_}=e;xe=new Tt(s=>{if(dt)return;const i=$();ae(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Xt(l.addedNodes[0])&&(d.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&d.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Xt(l.target)&&~rr.indexOf(l.attributeName))if(l.attributeName==="class"&&Br(l.target)){const{prefix:u,iconName:f}=we(it(l.target));l.target.setAttribute(at,u||i),f&&l.target.setAttribute(rt,f)}else Xr(l.target)&&n(l.target)})}),Y&&xe.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Kr(){xe&&xe.disconnect()}function Qr(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],l=s.slice(1);return i&&l.length>0&&(a[i]=l.join(":").trim()),a},{})),n}function Jr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=we(it(e));return r.prefix||(r.prefix=$()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ar(r.prefix,e.innerText)||ct(r.prefix,Be(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Zr(e){const t=ae(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function es(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Jr(e),s=Zr(e),i=$e("parseNodeAttributes",{},e);let l=t.styleParser?Qr(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:s}},i)}const{styles:ts}=z;function Xn(e){const t=d.autoReplaceSvg==="nest"?Vt(e,{styleParser:!1}):Vt(e);return~t.extra.classes.indexOf(wn)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}function ns(){return[...Da,...Le]}function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();const n=_.documentElement.classList,a=m=>n.add("".concat(Dt,"-").concat(m)),r=m=>n.remove("".concat(Dt,"-").concat(m)),s=d.autoFetchSvg?ns():yn.concat(Object.keys(ts));s.includes("fa")||s.push("fa");const i=[".".concat(wn,":not([").concat(K,"])")].concat(s.map(m=>".".concat(m,":not([").concat(K,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=ae(e.querySelectorAll(i))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=ut.begin("onTree"),f=l.reduce((m,y)=>{try{const b=Xn(y);b&&m.push(b)}catch(b){An||b.name==="MissingIcon"&&console.error(b)}return m},[]);return new Promise((m,y)=>{Promise.all(f).then(b=>{Hn(b,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),u(),m()})}).catch(b=>{u(),y(b)})})}function as(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xn(e).then(n=>{n&&Hn([n],t)})}function rs(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Ge(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ge(r||{})),e(a,c(c({},n),{},{mask:r}))}}const ss=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:l=null,classes:u=[],attributes:f={},styles:m={}}=t;if(!e)return;const{prefix:y,iconName:b,icon:S}=e;return Pe(c({type:"icon"},e),()=>(Q("beforeDOMElementCreation",{iconDefinition:e,params:t}),d.autoA11y&&(i?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(l||ce()):(f["aria-hidden"]="true",f.focusable="false")),ft({icons:{main:Ve(S),mask:r?Ve(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:b,transform:c(c({},L),n),symbol:a,title:i,maskId:s,titleId:l,extra:{attributes:f,styles:m,classes:u}})))};var is={mixout(){return{icon:rs(ss)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=qt,e.nodeCallback=as,e}}},provides(e){e.i2svg=function(t){const{node:n=_,callback:a=()=>{}}=t;return qt(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:l,symbol:u,mask:f,maskId:m,extra:y}=n;return new Promise((b,S)=>{Promise.all([qe(a,i),f.iconName?qe(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[j,k]=E;b([t,ft({icons:{main:j,mask:k},prefix:i,iconName:a,transform:l,symbol:u,maskId:m,title:r,titleId:s,extra:y,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:i}=t;const l=Ae(i);l.length>0&&(a.style=l);let u;return ot(s)&&(u=G("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},os={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Pe({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},ls={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return Pe({type:"counter",content:e},()=>(Q("beforeDOMElementCreation",{content:e,params:t}),Ur({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},cs={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:a=null,classes:r=[],attributes:s={},styles:i={}}=t;return Pe({type:"text",content:e},()=>(Q("beforeDOMElementCreation",{content:e,params:t}),Ht({content:e,transform:c(c({},L),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let i=null,l=null;if(hn){const u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/u,l=f.height/u}return d.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Ht({content:t.innerHTML,width:i,height:l,transform:r,title:a,extra:s,watchable:!0})])}}};const fs=new RegExp('"',"ug"),Kt=[1105920,1112319],Qt=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Ta),Ka),Ha),Je=Object.keys(Qt).reduce((e,t)=>(e[t.toLowerCase()]=Qt[t],e),{}),us=Object.keys(Je).reduce((e,t)=>{const n=Je[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ds(e){const t=e.replace(fs,""),n=yr(t,0),a=n>=Kt[0]&&n<=Kt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Be(r?t[0]:t),isSecondary:a||r}}function ms(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Je[n]||{})[r]||us[n]}function Jt(e,t){const n="".concat(Qa).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const i=ae(e.children).filter(b=>b.getAttribute(Ue)===t)[0],l=X.getComputedStyle(e,t),u=l.getPropertyValue("font-family"),f=u.match(nr),m=l.getPropertyValue("font-weight"),y=l.getPropertyValue("content");if(i&&!f)return e.removeChild(i),a();if(f&&y!=="none"&&y!==""){const b=l.getPropertyValue("content");let S=ms(u,m);const{value:E,isSecondary:j}=ds(b),k=f[0].startsWith("FontAwesome");let w=ct(S,E),g=w;if(k){const O=Sr(E);O.iconName&&O.prefix&&(w=O.iconName,S=O.prefix)}if(w&&!j&&(!i||i.getAttribute(at)!==S||i.getAttribute(rt)!==g)){e.setAttribute(n,g),i&&e.removeChild(i);const O=es(),{extra:F}=O;F.attributes[Ue]=t,qe(w,S).then(T=>{const Oe=ft(c(c({},O),{},{icons:{main:T,mask:zn()},prefix:S,iconName:g,extra:F,watchable:!0})),re=_.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(re,e.firstChild):e.appendChild(re),re.outerHTML=Oe.map(Ne=>de(Ne)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ps(e){return Promise.all([Jt(e,"::before"),Jt(e,"::after")])}function gs(e){return e.parentNode!==document.head&&!~Za.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ue)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Zt(e){if(Y)return new Promise((t,n)=>{const a=ae(e.querySelectorAll("*")).filter(gs).map(ps),r=ut.begin("searchPseudoElements");Bn(),Promise.all(a).then(()=>{r(),Qe(),t()}).catch(()=>{r(),Qe(),n()})})}var hs={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Zt,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=_}=t;d.searchPseudoElements&&Zt(n)}}};let en=!1;var bs={mixout(){return{dom:{unwatch(){Bn(),en=!0}}}},hooks(){return{bootstrap(){Gt($e("mutationObserverCallbacks",{}))},noAuto(){Kr()},watch(e){const{observeMutationsRoot:t}=e;en?Qe():Gt($e("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const tn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var ys={mixout(){return{parse:{transform:e=>tn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=tn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const i={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(f)},y={transform:"translate(".concat(s/2*-1," -256)")},b={outer:i,inner:m,path:y};return{tag:"g",attributes:c({},b.outer),children:[{tag:"g",attributes:c({},b.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),b.path)}]}]}}}};const Te={x:0,y:0,width:"100%",height:"100%"};function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function vs(e){return e.tag==="g"?e.children:[e]}var xs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?we(n.split(" ").map(r=>r.trim())):zn();return a.prefix||(a.prefix=$()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:l}=t;const{width:u,icon:f}=r,{width:m,icon:y}=s,b=dr({transform:l,containerWidth:m,iconWidth:u}),S={tag:"rect",attributes:c(c({},Te),{},{fill:"white"})},E=f.children?{children:f.children.map(nn)}:{},j={tag:"g",attributes:c({},b.inner),children:[nn(c({tag:f.tag,attributes:c(c({},f.attributes),b.path)},E))]},k={tag:"g",attributes:c({},b.outer),children:[j]},w="mask-".concat(i||ce()),g="clip-".concat(i||ce()),O={tag:"mask",attributes:c(c({},Te),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,k]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:vs(y)},O]};return n.push(F,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(w,")")},Te)}),{children:n,attributes:a}}}},_s={provides(e){let t=!1;X.matchMedia&&(t=X.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ks={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},As=[gr,is,os,ls,cs,hs,bs,ys,xs,_s,ks];Tr(As,{mixoutsTo:R});R.noAuto;R.config;R.library;R.dom;const Ze=R.parse;R.findIconDefinition;R.toHtml;const Ss=R.icon;R.layer;R.text;R.counter;function an(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?an(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):an(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_e(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ws(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ps(e,t){if(e==null)return{};var n=ws(e,t),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function et(e){return Os(e)||Ns(e)||Cs(e)||Es()}function Os(e){if(Array.isArray(e))return tt(e)}function Ns(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cs(e,t){if(e){if(typeof e=="string")return tt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(e,t)}}function tt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Es(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Is(e){var t,n=e.beat,a=e.fade,r=e.beatFade,s=e.bounce,i=e.shake,l=e.flash,u=e.spin,f=e.spinPulse,m=e.spinReverse,y=e.pulse,b=e.fixedWidth,S=e.inverse,E=e.border,j=e.listItem,k=e.flip,w=e.size,g=e.rotation,O=e.pull,F=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":i,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":y,"fa-fw":b,"fa-inverse":S,"fa-border":E,"fa-li":j,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Z(t,"fa-".concat(w),typeof w<"u"&&w!==null),Z(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),Z(t,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Z(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(F).map(function(T){return F[T]?T:null}).filter(function(T){return T})}function js(e){return e=e-0,e===e}function $n(e){return js(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ts=["style"];function Rs(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Fs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=$n(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?t[Rs(r)]=s:t[r]=s,t},{})}function Gn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(u){return Gn(e,u)}),r=Object.keys(t.attributes||{}).reduce(function(u,f){var m=t.attributes[f];switch(f){case"class":u.attrs.className=m,delete t.attributes.class;break;case"style":u.attrs.style=Fs(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[$n(f)]=m}return u},{attrs:{}}),s=n.style,i=s===void 0?{}:s,l=Ps(n,Ts);return r.attrs.style=M(M({},r.attrs.style),i),e.apply(void 0,[t.tag,M(M({},r.attrs),l)].concat(et(a)))}var Vn=!1;try{Vn=!0}catch{}function Ds(){if(!Vn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function rn(e){if(e&&_e(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ze.icon)return Ze.icon(e);if(e===null)return null;if(e&&_e(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Re(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}var sn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ee=V.forwardRef(function(e,t){var n=M(M({},sn),e),a=n.icon,r=n.mask,s=n.symbol,i=n.className,l=n.title,u=n.titleId,f=n.maskId,m=rn(a),y=Re("classes",[].concat(et(Is(n)),et((i||"").split(" ")))),b=Re("transform",typeof n.transform=="string"?Ze.transform(n.transform):n.transform),S=Re("mask",rn(r)),E=Ss(m,M(M(M(M({},y),b),S),{},{symbol:s,title:l,titleId:u,maskId:f}));if(!E)return Ds("Could not find icon",m),null;var j=E.abstract,k={ref:t};return Object.keys(n).forEach(function(w){sn.hasOwnProperty(w)||(k[w]=n[w])}),Ms(j[0],k)});ee.displayName="FontAwesomeIcon";ee.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};var Ms=Gn.bind(null,V.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const on={prefix:"fas",iconName:"clipboard",icon:[384,512,[128203],"f328","M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},ln={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]},cn={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"]},Ls={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},fn=Ls,qn=e=>{const[t,n]=D.useState({issued_items_count:0,upcoming_issuance_count:0,accidents_count:0,trainings_count:0});return D.useEffect(()=>{(async()=>{try{const s=(await dn.get("/reports/dashboard/")).data.data;console.log("result:",s),n({issued_items_count:s.issued_items_count,upcoming_issuance_count:s.upcoming_issuance_count,accidents_count:s.accidents_count,trainings_count:s.trainings_count})}catch(r){console.error("Error fetching data:",r)}})()},[]),t.issued_items_count,t.upcoming_issuance_count,t.trainings_count,t.accidents_count,o.jsxs(oa,{className:e.className,xs:{gutter:4},children:[o.jsx(pe,{sm:6,xl:4,xxl:3,children:o.jsxs("div",{className:"custom-card card-new-issuance",children:[o.jsxs("div",{className:"card-content",children:[o.jsx("p",{className:"card-title",children:"New Issuance"}),o.jsx("p",{className:"card-value",children:t.issued_items_count})]}),o.jsx("div",{className:"card-icon",children:o.jsx(ee,{icon:cn})})]})}),o.jsx(pe,{sm:6,xl:4,xxl:3,children:o.jsxs("div",{className:"custom-card card-upcoming-issuance",children:[o.jsxs("div",{className:"card-content",children:[o.jsx("p",{className:"card-title",children:"Upcoming Issuance"}),o.jsx("p",{className:"card-value",children:t.upcoming_issuance_count})]}),o.jsx("div",{className:"card-icon",children:o.jsx(ee,{icon:ln})})]})}),o.jsx(pe,{sm:6,xl:4,xxl:3,children:o.jsxs("div",{className:"custom-card card-safety-training",children:[o.jsxs("div",{className:"card-content",children:[o.jsx("p",{className:"card-title",children:"Safety Training"}),o.jsx("p",{className:"card-value",children:t.trainings_count})]}),o.jsx("div",{className:"card-icon",children:o.jsx(ee,{icon:on})})]})}),o.jsx(pe,{sm:6,xl:4,xxl:3,children:o.jsxs("div",{className:"custom-card card-accident",children:[o.jsxs("div",{className:"card-content",children:[o.jsx("p",{className:"card-title",children:"Accident"}),o.jsx("p",{className:"card-value",children:t.accidents_count})]}),o.jsx("div",{className:"card-icon",children:o.jsx(ee,{icon:fn})})]})})]})};qn.propTypes={className:h.string};function un(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function zs(e,t){return e==="desc"?(n,a)=>un(n,a,t):(n,a)=>-un(n,a,t)}function Us(e,t){const n=e.map((a,r)=>[a,r]);return n.sort((a,r)=>{const s=t(a[0],r[0]);return s!==0?s:a[1]-r[1]}),n.map(a=>a[0])}const Ws=[{id:"accident_report_date",numeric:!1,disablePadding:!0,label:"Report Date"},{id:"accident_type",numeric:!0,disablePadding:!1,label:"Accident Type"},{id:"severity",numeric:!0,disablePadding:!1,label:"Severity"},{id:"accident_id",numeric:!1,disablePadding:!1,label:"Accident ID"},{id:"permit_status_id",numeric:!0,disablePadding:!1,label:"Permit Status"},{id:"ppe_status_id",numeric:!0,disablePadding:!1,label:"PPE Status"},{id:"toolbox_reference_number_id",numeric:!0,disablePadding:!1,label:"Tool Box Train"},{id:"workmen_count",numeric:!0,disablePadding:!1,label:"Workmen Involved"},{id:"workmen_names",numeric:!1,disablePadding:!1,label:"Workmen Names"},{id:"reportedby_count",numeric:!0,disablePadding:!1,label:"Reported By"},{id:"reportedby_names",numeric:!1,disablePadding:!1,label:"ReportedBy Names"},{id:"supervisor_count",numeric:!0,disablePadding:!1,label:"Supervisor Involved"},{id:"supervisor_names",numeric:!1,disablePadding:!1,label:"Supervisor Names"},{id:"about_the_accident",numeric:!1,disablePadding:!1,label:"Description"},{id:"accident_image",numeric:!1,disablePadding:!1,label:"Accident Image"}];function Kn(e){const{order:t,orderBy:n,onRequestSort:a}=e,r=s=>i=>{a(i,s)};return o.jsx(ga,{children:o.jsx(De,{children:Ws.map(s=>s.id!=="whitelevel_id"&&o.jsx(N,{align:s.numeric?"right":"left",padding:s.disablePadding?"4":"normal",sortDirection:n===s.id?t:!1,children:o.jsxs(ba,{active:n===s.id,direction:n===s.id?t:"asc",onClick:r(s.id),children:[s.label,n===s.id?o.jsx(Fe,{component:"span",sx:ya,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},s.id))})})}Kn.propTypes={onRequestSort:h.func.isRequired,order:h.oneOf(["asc","desc"]).isRequired,orderBy:h.string.isRequired};function Qn(e){const{numSelected:t,onDownload:n,searchQuery:a,onSearchChange:r}=e;return o.jsxs(va,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...t>0&&{bgcolor:s=>Aa(s.palette.primary.main,s.palette.action.activatedOpacity)}},children:[o.jsx(B,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"ACCIDENT REPORTS"}),o.jsx(_a,{variant:"outlined",size:"small",value:a,onChange:r,placeholder:"Search...",sx:{mr:2}}),o.jsx(xa,{title:"Download",children:o.jsx(ua,{onClick:n,children:o.jsx(la,{})})})]})}Qn.propTypes={numSelected:h.number.isRequired,onDownload:h.func.isRequired,searchQuery:h.string.isRequired,onSearchChange:h.func.isRequired};function Ys(){ia(p=>p.userInfo);const[e,t]=D.useState("asc"),[n,a]=D.useState("accident_report_date"),[r,s]=D.useState([]),[i,l]=D.useState(0),[u,f]=D.useState(5),[m,y]=D.useState([]),[b,S]=D.useState(""),[E,j]=V.useState(!1),[k,w]=V.useState(!1),[g,O]=V.useState(null),[F,T]=V.useState(null);D.useEffect(()=>{(async()=>{try{const v=await dn.post("/reports/accident/");console.log(v.data);const I=v.data.results.map((x,A)=>{var bt,yt,vt,xt,_t,kt,At,St,wt;return{id:A+1,accident_report_date:x.accident_report_date?ka(new Date(x.accident_report_date),"dd/MM/yyyy"):"N/A",whitelevel_id:x.whitelevel_id||"N/A",accident_type:x.accident_type||"N/A",severity:x.severity||"N/A",permit_status_id:x.permit_status_id||"N/A",ppe_status_id:x.ppe_status_id||"N/A",toolbox_reference_number_id:x.toolbox_reference_number_id||"N/A",about_the_accident:x.about_the_accident||"N/A",accident_image:x.accident_image||"N/A",accident_id:x.accident_id||"N/A",workmen_count:((bt=x.workmen_involved)==null?void 0:bt.count)??0,workmen_names:((vt=(yt=x.workmen_involved)==null?void 0:yt.names)==null?void 0:vt.map(se=>se.employee_name).join(", "))||"N/A",supervisor_count:((xt=x.supervisors_involved)==null?void 0:xt.count)??0,supervisor_names:((kt=(_t=x.supervisors_involved)==null?void 0:_t.names)==null?void 0:kt.map(se=>se.supervisor_name).join(", "))||"N/A",reportedby_count:((At=x.reported_by)==null?void 0:At.count)??0,reportedby_names:((wt=(St=x.reported_by)==null?void 0:St.names)==null?void 0:wt.map(se=>se.employee_name).join(", "))||"N/A"}});y(I)}catch(v){if(v.isAxiosError&&v.response){console.error(`HTTP error! status: ${v}`);const P=JSON.stringify(v.response.data);console.error("Response body:",P),alert(`Error: ${P}`)}console.error("Error fetching data:",v)}})()},[]);const Oe=(p,v)=>{t(n===v&&e==="asc"?"desc":"asc"),a(v)},re=(p,v)=>{const P=r.indexOf(v);let I=[];P===-1?I=I.concat(r,v):P===0?I=I.concat(r.slice(1)):P===r.length-1?I=I.concat(r.slice(0,-1)):P>0&&(I=I.concat(r.slice(0,P),r.slice(P+1))),s(I)},Ne=(p,v)=>{l(v)},Jn=p=>{f(parseInt(p.target.value,10)),l(0)},Zn=p=>r.indexOf(p)!==-1,mt=i>0?Math.max(0,(1+i)*u-m.length):0,ea=p=>{S(p.target.value)},ta=p=>{O(p),j(!0)},pt=()=>{j(!1)},gt=p=>{T(p),w(!0)},ht=()=>{w(!1)},na=(p,v)=>{re(p,v.id),ta(v)},me=m.filter(p=>Object.keys(p).some(v=>String(p[v]).toLowerCase().includes(b.toLowerCase()))),aa=V.useMemo(()=>Us(me,zs(e,n)).slice(i*u,i*u+u),[e,n,i,u,me]),ra=async()=>{const p=new ca.Workbook,v=p.addWorksheet("Accident Reports");v.columns=[{header:"Accident Report Date",key:"accident_report_date"},{header:"Accident Type",key:"accident_type"},{header:"Severity",key:"severity"},{header:"Accident ID",key:"accident_id"},{header:"Workmen Count",key:"workmen_count"},{header:"Workmen Names",key:"workmen_names"},{header:"ReportedBy Count",key:"reportedby_count"},{header:"ReportedBy Names",key:"reportedby_names"},{header:"Supervisor Count",key:"supervisor_count"},{header:"Supervisor Names",key:"supervisor_names"},{header:"Permit Status",key:"permit_status"},{header:"PPE Status",key:"ppe_status"},{header:"Description",key:"about_the_accident"}],me.forEach(A=>{v.addRow({accident_report_date:A.accident_report_date,accident_type:A.accident_type===1?"Near Miss":A.accident_type===2?"Accident":A.accident_type===3?"Violation":"Unknown",severity:A.severity,accident_id:A.accident_id,workmen_count:A.workmen_count,workmen_names:A.workmen_names,reportedby_count:A.reportedby_count,reportedby_names:A.reportedby_names,supervisor_count:A.supervisor_count,supervisor_names:A.supervisor_names,permit_status:A.permit_status_id===1?"Valid":A.permit_status_id===2?"Not Required":A.permit_status_id===3?"No Permit":A.permit_status_id===4?"Expired":"Unknown",ppe_status:A.ppe_status_id===1?"OK":A.ppe_status_id===2?"Faulty":"Unknown",about_the_accident:A.about_the_accident})});const P=await p.xlsx.writeBuffer(),I=new Blob([P],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),x=document.createElement("a");x.href=URL.createObjectURL(I),x.download="accident_report.xlsx",document.body.appendChild(x),x.click(),document.body.removeChild(x)},sa=()=>{if(!g)return;const p=XLSX.utils.book_new(),v=[["Field","Value"],["Accident Report Date",g.accident_report_date],["Accident Type",g.accident_type===1?"Near Miss":g.accident_type===2?"Accident":g.accident_type===3?"Violation":"Unknown"],["Severity",g.severity],["Accident ID",g.accident_id],["Workmen Count",g.workmen_count],["Workmen Names",g.workmen_names],["ReportedBy Count",g.reportedby_count],["ReportedBy Names",g.reportedby_names],["Supervisor Count",g.supervisor_count],["Supervisor Names",g.supervisor_names],["Permit Status",g.permit_status_id===1?"Valid":g.permit_status_id===2?"Not Required":g.permit_status_id===3?"No Permit":g.permit_status_id===4?"Expired":"Unknown"],["PPE Status",g.ppe_status_id===1?"OK":g.ppe_status_id===2?"Faulty":"Unknown"],["Description",g.about_the_accident]],P=XLSX.utils.aoa_to_sheet(v);XLSX.utils.book_append_sheet(p,P,"Selected Row Data"),XLSX.writeFile(p,`accident_report_${g.accident_id}.xlsx`)};return o.jsxs(Fe,{sx:{width:"100%"},children:[o.jsxs(fa,{sx:{width:"100%",mb:1},children:[o.jsx(Qn,{numSelected:r.length,onDownload:ra,searchQuery:b,onSearchChange:ea}),o.jsx(da,{children:o.jsxs(ma,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[o.jsx(Kn,{order:e,orderBy:n,onRequestSort:Oe}),o.jsxs(pa,{children:[aa.map((p,v)=>{const P=Zn(p.id),I=`enhanced-table-checkbox-${v}`;return o.jsxs(De,{hover:!0,onClick:x=>na(x,p),role:"checkbox","aria-checked":P,tabIndex:-1,selected:P,children:[o.jsx(N,{component:"th",id:I,scope:"row",padding:"normal",children:p.accident_report_date}),o.jsx(N,{align:"right",children:p.accident_type===1?"Near Miss":p.accident_type===2?"Accident":p.accident_type===3?"Violation":"Unknown"}),o.jsx(N,{align:"right",children:p.severity}),o.jsx(N,{align:"left",children:p.accident_id}),o.jsx(N,{align:"right",children:p.permit_status_id===1?"Valid":p.permit_status_id===2?"Not Required":p.permit_status_id===3?"No Permit":p.permit_status_id===4?"Expired":"Unknown"}),o.jsx(N,{align:"right",children:p.ppe_status_id===1?"OK":p.ppe_status_id==2?"Faulty":"Unknown"}),o.jsx(N,{align:"left",children:p.toolbox_reference_number_id}),o.jsx(N,{align:"right",children:p.workmen_count}),o.jsx(N,{align:"left",children:p.workmen_names}),o.jsx(N,{align:"right",children:p.reportedby_count}),o.jsx(N,{align:"left",children:p.reportedby_names}),o.jsx(N,{align:"right",children:p.supervisor_count}),o.jsx(N,{align:"left",children:p.supervisor_names}),o.jsx(N,{align:"left",children:p.about_the_accident}),o.jsx(N,{align:"right",children:o.jsx("img",{src:`data:image/png;base64,${p.accident_image}`,alt:"Image Not Found ",style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"5px",cursor:"pointer"},onClick:()=>gt(`data:image/png;base64,${p.accident_image}`),onError:x=>{x.target.onerror=null}})})]},p.id)}),mt>0&&o.jsx(De,{style:{height:53*mt},children:o.jsx(N,{colSpan:6})})]})]})}),o.jsx(ha,{rowsPerPageOptions:[5,10,25],component:"div",count:me.length,rowsPerPage:u,page:i,onPageChange:Ne,onRowsPerPageChange:Jn})]}),o.jsxs(Pt,{open:E,onClose:pt,children:[o.jsx(Ot,{children:"Row Details"}),o.jsx(Nt,{children:g&&o.jsxs(Fe,{children:[o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"Accident ID:"})," ",g.accident_id]}),o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"Report Date:"})," ",g.accident_report_date]}),o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"Severity:"})," ",g.severity]}),o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"Description:"})," ",g.about_the_accident]}),o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"ReportedBy Names:"})," ",g.reportedby_names]}),o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"Workmen Names:"})," ",g.workmen_names]}),o.jsxs(B,{variant:"body1",children:[o.jsx("strong",{children:"Supervisor Names:"})," ",g.supervisor_names]}),o.jsx("img",{src:`data:image/png;base64,${g.accident_image}`,alt:"Accident Image",style:{width:"50%",height:"auto",marginTop:"10px"},onClick:p=>{p.stopPropagation(),gt(`data:image/png;base64,${g.accident_image}`)}})]})}),o.jsxs(Ct,{children:[o.jsx("button",{onClick:pt,style:{padding:"10px"},children:"Close"}),o.jsx("button",{onClick:sa,style:{padding:"10px"},children:"Download"})]})]}),o.jsxs(Pt,{open:k,onClose:ht,children:[o.jsx(Ot,{children:"Image Preview"}),o.jsx(Nt,{children:o.jsx("img",{src:F,alt:"Preview",style:{width:"400px",height:"300px",objectFit:"cover"}})}),o.jsx(Ct,{children:o.jsx("button",{onClick:ht,style:{padding:"10px"},children:"Close"})})]})]})}const ii=()=>o.jsxs("div",{style:{backgroundColor:"",minHeight:"100vh",width:"100%",padding:"20px"},children:[o.jsx(qn,{className:"mb-4"}),o.jsx(Ys,{})]});export{ii as default};
