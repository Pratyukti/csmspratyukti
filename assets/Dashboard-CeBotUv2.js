import{r as E,j as i,P as w,R as le,h as Ct,D as Ke}from"./index-DGdAeW9h.js";import{E as Ee,d as Aa}from"./jspdf.plugin.autotable-DDn0_N2K.js";import It from"./html2canvas.esm-DtF4syFK.js";import{C as lt}from"./Container-D-CL8DXy.js";import{C as Tn}from"./CircularProgress-DiMQa9ZR.js";import{b as Pa,u as Sa,g as en,T as X,P as Ye,I as Et}from"./IconButton-B9Dpe888.js";import{B as Ne}from"./Box-ZndKGl1R.js";import{T as Nt}from"./TextField-0EU51aYM.js";import{B as me}from"./Button-QFBUhiXp.js";import{T as Ot,a as Be,b as Tt,c as J,d as A,e as Ge}from"./TableRow-Cwx1xBaR.js";import{g as ka,a as ja,s as Dt,b as te,d as Ca,p as Ia,_ as Ea,q as Na,u as Oa,e as Ta,f as Da,c as Rt}from"./createSvgIcon-Cw7JBs2a.js";import{T as Ft,a as Ra,v as Fa,b as La,c as Ma}from"./TableSortLabel-C7_COgGV.js";import{D as Oe,a as Te,b as De,c as Re}from"./DialogTitle-eFnyXaeQ.js";import{C as za,a as $a}from"./CRow-CUPs3Fbs.js";import{E as Wa}from"./exceljs.min-D8HNRw45.js";import{f as Ua}from"./format-cwXK75ha.js";import{a as Ha}from"./colorManipulator-BMSuZ0wg.js";import"./styled-BhVunyfx.js";import"./DefaultLayout-CNeVKh1s.js";import"./index.esm-DCI-s5Ju.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-B07WlD69.js";function Ya(e){return ja("MuiCollapse",e)}ka("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Ba=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Ga=e=>{const{orientation:t,classes:n}=e,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return Da(a,Ya,n)},Va=Dt("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.state==="entered"&&t.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>te({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&te({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),qa=Dt("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>te({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Xa=Dt("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>te({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Dn=E.forwardRef(function(t,n){const a=Ca({props:t,name:"MuiCollapse"}),{addEndListener:r,children:s,className:o,collapsedSize:l="0px",component:d,easing:f,in:u,onEnter:P,onEntered:x,onEntering:O,onExit:N,onExited:R,onExiting:j,orientation:D="vertical",style:b,timeout:T=Ia.standard,TransitionComponent:U=Pa}=a,g=Ea(a,Ba),S=te({},a,{orientation:D,collapsedSize:l}),k=Ga(S),V=Sa(),q=Na(),B=E.useRef(null),m=E.useRef(),_=typeof l=="number"?`${l}px`:l,v=D==="horizontal",L=v?"width":"height",M=E.useRef(null),se=Oa(n,M),W=p=>C=>{if(p){const Y=M.current;C===void 0?p(Y):p(Y,C)}},H=()=>B.current?B.current[v?"clientWidth":"clientHeight"]:0,Z=W((p,C)=>{B.current&&v&&(B.current.style.position="absolute"),p.style[L]=_,P&&P(p,C)}),ie=W((p,C)=>{const Y=H();B.current&&v&&(B.current.style.position="");const{duration:K,easing:ee}=en({style:b,timeout:T,easing:f},{mode:"enter"});if(T==="auto"){const Se=V.transitions.getAutoHeightDuration(Y);p.style.transitionDuration=`${Se}ms`,m.current=Se}else p.style.transitionDuration=typeof K=="string"?K:`${K}ms`;p.style[L]=`${Y}px`,p.style.transitionTimingFunction=ee,O&&O(p,C)}),oe=W((p,C)=>{p.style[L]="auto",x&&x(p,C)}),h=W(p=>{p.style[L]=`${H()}px`,N&&N(p)}),I=W(R),z=W(p=>{const C=H(),{duration:Y,easing:K}=en({style:b,timeout:T,easing:f},{mode:"exit"});if(T==="auto"){const ee=V.transitions.getAutoHeightDuration(C);p.style.transitionDuration=`${ee}ms`,m.current=ee}else p.style.transitionDuration=typeof Y=="string"?Y:`${Y}ms`;p.style[L]=_,p.style.transitionTimingFunction=K,j&&j(p)}),$=p=>{T==="auto"&&q.start(m.current||0,p),r&&r(M.current,p)};return i.jsx(U,te({in:u,onEnter:Z,onEntered:oe,onEntering:ie,onExit:h,onExited:I,onExiting:z,addEndListener:$,nodeRef:M,timeout:T==="auto"?null:T},g,{children:(p,C)=>i.jsx(Va,te({as:d,className:Ta(k.root,o,{entered:k.entered,exited:!u&&_==="0px"&&k.hidden}[p]),style:te({[v?"minWidth":"minHeight"]:_},b),ref:se},C,{ownerState:te({},S,{state:p}),children:i.jsx(qa,{ownerState:te({},S,{state:p}),className:k.wrapper,ref:B,children:i.jsx(Xa,{ownerState:te({},S,{state:p}),className:k.wrapperInner,children:s})})}))}))});Dn.muiSupportAuto=!0;const Rn=Rt(i.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download"),Fn=Rt(i.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown"),Ln=Rt(i.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ka(e,t,n){return(t=Ja(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tn(Object(n),!0).forEach(function(a){Ka(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Qa(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ja(e){var t=Qa(e,"string");return typeof t=="symbol"?t:t+""}const nn=()=>{};let Lt={},Mn={},zn=null,$n={mark:nn,measure:nn};try{typeof window<"u"&&(Lt=window),typeof document<"u"&&(Mn=document),typeof MutationObserver<"u"&&(zn=MutationObserver),typeof performance<"u"&&($n=performance)}catch{}const{userAgent:an=""}=Lt.navigator||{},pe=Lt,F=Mn,rn=zn,$e=$n;pe.document;const de=!!F.documentElement&&!!F.head&&typeof F.addEventListener=="function"&&typeof F.createElement=="function",Wn=~an.indexOf("MSIE")||~an.indexOf("Trident/");var Za=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,er=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},tr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],G="classic",Qe="duotone",nr="sharp",ar="sharp-duotone",Yn=[G,Qe,nr,ar],rr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},sr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ir=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),or={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},lr=["fak","fa-kit","fakd","fa-kit-duotone"],sn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cr=["kit"],fr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},dr=["fak","fakd"],ur={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},on={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},We={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],pr=["fak","fa-kit","fakd","fa-kit-duotone"],gr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},hr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},yr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ct={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},br=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ft=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...mr,...br],xr=["solid","regular","light","thin","duotone","brands"],Bn=[1,2,3,4,5,6,7,8,9,10],vr=Bn.concat([11,12,13,14,15,16,17,18,19,20]),_r=[...Object.keys(yr),...xr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",We.GROUP,We.SWAP_OPACITY,We.PRIMARY,We.SECONDARY].concat(Bn.map(e=>"".concat(e,"x"))).concat(vr.map(e=>"w-".concat(e))),wr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ce="___FONT_AWESOME___",dt=16,Gn="fa",Vn="svg-inline--fa",be="data-fa-i2svg",ut="data-fa-pseudo-element",Ar="data-fa-pseudo-element-pending",Mt="data-prefix",zt="data-icon",ln="fontawesome-i2svg",Pr="async",Sr=["HTML","HEAD","STYLE","SCRIPT"],qn=(()=>{try{return!0}catch{return!1}})();function Me(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[G]}})}const Xn=c({},Un);Xn[G]=c(c(c(c({},{"fa-duotone":"duotone"}),Un[G]),sn.kit),sn["kit-duotone"]);const kr=Me(Xn),mt=c({},or);mt[G]=c(c(c(c({},{duotone:"fad"}),mt[G]),on.kit),on["kit-duotone"]);const cn=Me(mt),pt=c({},ct);pt[G]=c(c({},pt[G]),ur.kit);const $t=Me(pt),gt=c({},hr);gt[G]=c(c({},gt[G]),fr.kit);Me(gt);const jr=Za,Kn="fa-layers-text",Cr=er,Ir=c({},rr);Me(Ir);const Er=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nt=tr,Nr=[...cr,..._r],Ce=pe.FontAwesomeConfig||{};function Or(e){var t=F.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Tr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}F&&typeof F.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=Tr(Or(n));r!=null&&(Ce[a]=r)});const Qn={styleDefault:"solid",familyDefault:G,cssPrefix:Gn,replacementClass:Vn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ce.familyPrefix&&(Ce.cssPrefix=Ce.familyPrefix);const Ae=c(c({},Qn),Ce);Ae.autoReplaceSvg||(Ae.observeMutations=!1);const y={};Object.keys(Qn).forEach(e=>{Object.defineProperty(y,e,{enumerable:!0,set:function(t){Ae[e]=t,Ie.forEach(n=>n(y))},get:function(){return Ae[e]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(e){Ae.cssPrefix=e,Ie.forEach(t=>t(y))},get:function(){return Ae.cssPrefix}});pe.FontAwesomeConfig=y;const Ie=[];function Dr(e){return Ie.push(e),()=>{Ie.splice(Ie.indexOf(e),1)}}const ue=dt,ae={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rr(e){if(!e||!de)return;const t=F.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=F.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=s)}return F.head.insertBefore(t,a),e}const Fr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fe(){let e=12,t="";for(;e-- >0;)t+=Fr[Math.random()*62|0];return t}function Pe(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Wt(e){return e.classList?Pe(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Jn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lr(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Jn(e[n]),'" '),"").trim()}function Je(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ut(e){return e.size!==ae.size||e.x!==ae.x||e.y!==ae.y||e.rotate!==ae.rotate||e.flipX||e.flipY}function Mr(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(s," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:d,path:f}}function zr(e){let{transform:t,width:n=dt,height:a=dt,startCentered:r=!1}=e,s="";return r&&Wn?s+="translate(".concat(t.x/ue-n/2,"em, ").concat(t.y/ue-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/ue,"em), calc(-50% + ").concat(t.y/ue,"em)) "):s+="translate(".concat(t.x/ue,"em, ").concat(t.y/ue,"em) "),s+="scale(".concat(t.size/ue*(t.flipX?-1:1),", ").concat(t.size/ue*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var $r=`:root, :host {
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
}`;function Zn(){const e=Gn,t=Vn,n=y.cssPrefix,a=y.replacementClass;let r=$r;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let fn=!1;function at(){y.autoAddCss&&!fn&&(Rr(Zn()),fn=!0)}var Wr={mixout(){return{dom:{css:Zn,insertCss:at}}},hooks(){return{beforeDOMElementCreation(){at()},beforeI2svg(){at()}}}};const fe=pe||{};fe[ce]||(fe[ce]={});fe[ce].styles||(fe[ce].styles={});fe[ce].hooks||(fe[ce].hooks={});fe[ce].shims||(fe[ce].shims=[]);var re=fe[ce];const ea=[],ta=function(){F.removeEventListener("DOMContentLoaded",ta),Ve=1,ea.map(e=>e())};let Ve=!1;de&&(Ve=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),Ve||F.addEventListener("DOMContentLoaded",ta));function Ur(e){de&&(Ve?setTimeout(e,0):ea.push(e))}function ze(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Jn(e):"<".concat(t," ").concat(Lr(n),">").concat(a.map(ze).join(""),"</").concat(t,">")}function dn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var rt=function(t,n,a,r){var s=Object.keys(t),o=s.length,l=n,d,f,u;for(a===void 0?(d=1,u=t[s[0]]):(d=0,u=a);d<o;d++)f=s[d],u=l(u,t[f],f,t);return u};function Hr(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function ht(e){const t=Hr(e);return t.length===1?t[0].toString(16):null}function Yr(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function un(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function yt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=un(t);typeof re.hooks.addPack=="function"&&!a?re.hooks.addPack(e,un(t)):re.styles[e]=c(c({},re.styles[e]||{}),r),e==="fas"&&yt("fa",t)}const{styles:Le,shims:Br}=re,na=Object.keys($t),Gr=na.reduce((e,t)=>(e[t]=Object.keys($t[t]),e),{});let Ht=null,aa={},ra={},sa={},ia={},oa={};function Vr(e){return~Nr.indexOf(e)}function qr(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Vr(r)?r:null}const la=()=>{const e=a=>rt(Le,(r,s,o)=>(r[o]=rt(s,a,{}),r),{});aa=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=s}),a)),ra=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=s}),a)),oa=e((a,r,s)=>{const o=r[2];return a[s]=s,o.forEach(l=>{a[l]=s}),a});const t="far"in Le||y.autoFetchSvg,n=rt(Br,(a,r)=>{const s=r[0];let o=r[1];const l=r[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});sa=n.names,ia=n.unicodes,Ht=Ze(y.styleDefault,{family:y.familyDefault})};Dr(e=>{Ht=Ze(e.styleDefault,{family:y.familyDefault})});la();function Yt(e,t){return(aa[e]||{})[t]}function Xr(e,t){return(ra[e]||{})[t]}function ye(e,t){return(oa[e]||{})[t]}function ca(e){return sa[e]||{prefix:null,iconName:null}}function Kr(e){const t=ia[e],n=Yt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ge(){return Ht}const fa=()=>({prefix:null,iconName:null,rest:[]});function Qr(e){let t=G;const n=na.reduce((a,r)=>(a[r]="".concat(y.cssPrefix,"-").concat(r),a),{});return Yn.forEach(a=>{(e.includes(n[a])||e.some(r=>Gr[a].includes(r)))&&(t=a)}),t}function Ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=G}=t,a=kr[n][e];if(n===Qe&&!e)return"fad";const r=cn[n][e]||cn[n][a],s=e in re.styles?e:null;return r||s||null}function Jr(e){let t=[],n=null;return e.forEach(a=>{const r=qr(y.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function mn(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=ft.concat(pr),s=mn(e.filter(P=>r.includes(P))),o=mn(e.filter(P=>!ft.includes(P))),l=s.filter(P=>(a=P,!Hn.includes(P))),[d=null]=l,f=Qr(s),u=c(c({},Jr(o)),{},{prefix:Ze(d,{family:f})});return c(c(c({},u),ns({values:e,family:f,styles:Le,config:y,canonical:u,givenPrefix:a})),Zr(n,a,u))}function Zr(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?ca(r):{},o=ye(a,r);return r=s.iconName||o||r,a=s.prefix||a,a==="far"&&!Le.far&&Le.fas&&!y.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const es=Yn.filter(e=>e!==G||e!==Qe),ts=Object.keys(ct).filter(e=>e!==G).map(e=>Object.keys(ct[e])).flat();function ns(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:o={}}=e,l=n===Qe,d=t.includes("fa-duotone")||t.includes("fad"),f=o.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(d||f||u)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&es.includes(n)&&(Object.keys(s).find(x=>ts.includes(x))||o.autoFetchSvg)){const x=ir.get(n).defaultShortPrefixId;a.prefix=x,a.iconName=ye(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=ge()||"fas"),a}class as{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),yt(s,r[s]);const o=$t[G][s];o&&yt(o,r[s]),la()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:o,icon:l}=a[r],d=l[2];t[s]||(t[s]={}),d.length>0&&d.forEach(f=>{typeof f=="string"&&(t[s][f]=l)}),t[s][o]=l}),t}}let pn=[],ve={};const we={},rs=Object.keys(we);function ss(e,t){let{mixoutsTo:n}=t;return pn=e,ve={},Object.keys(we).forEach(a=>{rs.indexOf(a)===-1&&delete we[a]}),pn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(o=>{ve[o]||(ve[o]=[]),ve[o].push(s[o])})}a.provides&&a.provides(we)}),n}function bt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(ve[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function xe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ve[e]||[]).forEach(s=>{s.apply(null,n)})}function he(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return we[e]?we[e].apply(null,t):void 0}function xt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ge();if(t)return t=ye(n,t)||t,dn(da.definitions,n,t)||dn(re.styles,n,t)}const da=new as,is=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,xe("noAuto")},os={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return de?(xe("beforeI2svg",e),he("pseudoElements2svg",e),he("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Ur(()=>{cs({autoReplaceSvgRoot:t}),xe("watch",e)})}},ls={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ye(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ze(e[0]);return{prefix:n,iconName:ye(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(y.cssPrefix,"-"))>-1||e.match(jr))){const t=et(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ge(),iconName:ye(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ge();return{prefix:t,iconName:ye(t,e)||e}}}},Q={noAuto:is,config:y,dom:os,parse:ls,library:da,findIconDefinition:xt,toHtml:ze},cs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=F}=e;(Object.keys(re.styles).length>0||y.autoFetchSvg)&&de&&y.autoReplaceSvg&&Q.dom.i2svg({node:t})};function tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ze(n))}}),Object.defineProperty(e,"node",{get:function(){if(!de)return;const n=F.createElement("div");return n.innerHTML=e.html,n.children}}),e}function fs(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:o}=e;if(Ut(o)&&n.found&&!a.found){const{width:l,height:d}=n,f={x:l/d/2,y:.5};r.style=Je(c(c({},s),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ds(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(y.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function Bt(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:o,title:l,maskId:d,titleId:f,extra:u,watchable:P=!1}=e,{width:x,height:O}=n.found?n:t,N=dr.includes(a),R=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(g=>u.classes.indexOf(g)===-1).filter(g=>g!==""||!!g).concat(u.classes).join(" ");let j={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:R,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(O)})};const D=N&&!~u.classes.indexOf("fa-fw")?{width:"".concat(x/O*16*.0625,"em")}:{};P&&(j.attributes[be]=""),l&&(j.children.push({tag:"title",attributes:{id:j.attributes["aria-labelledby"]||"title-".concat(f||Fe())},children:[l]}),delete j.attributes.title);const b=c(c({},j),{},{prefix:a,iconName:r,main:t,mask:n,maskId:d,transform:s,symbol:o,styles:c(c({},D),u.styles)}),{children:T,attributes:U}=n.found&&t.found?he("generateAbstractMask",b)||{children:[],attributes:{}}:he("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=T,b.attributes=U,o?ds(b):fs(b)}function gn(e){const{content:t,width:n,height:a,transform:r,title:s,extra:o,watchable:l=!1}=e,d=c(c(c({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(d[be]="");const f=c({},o.styles);Ut(r)&&(f.transform=zr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=Je(f);u.length>0&&(d.style=u);const P=[];return P.push({tag:"span",attributes:d,children:[t]}),s&&P.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),P}function us(e){const{content:t,title:n,extra:a}=e,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Je(a.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:st}=re;function vt(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(nt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(nt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(nt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const ms={found:!1,width:512,height:512};function ps(e,t){!qn&&!y.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _t(e,t){let n=t;return t==="fa"&&y.styleDefault!==null&&(t=ge()),new Promise((a,r)=>{if(n==="fa"){const s=ca(e);e=s.iconName||e,t=s.prefix||t}if(e&&t&&st[t]&&st[t][e]){const s=st[t][e];return a(vt(s))}ps(e,t),a(c(c({},ms),{},{icon:y.showMissingIcons&&e?he("missingIconAbstract")||{}:{}}))})}const hn=()=>{},wt=y.measurePerformance&&$e&&$e.mark&&$e.measure?$e:{mark:hn,measure:hn},je='FA "6.7.2"',gs=e=>(wt.mark("".concat(je," ").concat(e," begins")),()=>ua(e)),ua=e=>{wt.mark("".concat(je," ").concat(e," ends")),wt.measure("".concat(je," ").concat(e),"".concat(je," ").concat(e," begins"),"".concat(je," ").concat(e," ends"))};var Gt={begin:gs,end:ua};const Ue=()=>{};function yn(e){return typeof(e.getAttribute?e.getAttribute(be):null)=="string"}function hs(e){const t=e.getAttribute?e.getAttribute(Mt):null,n=e.getAttribute?e.getAttribute(zt):null;return t&&n}function ys(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(y.replacementClass)}function bs(){return y.autoReplaceSvg===!0?He.replace:He[y.autoReplaceSvg]||He.replace}function xs(e){return F.createElementNS("http://www.w3.org/2000/svg",e)}function vs(e){return F.createElement(e)}function ma(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?xs:vs}=t;if(typeof e=="string")return F.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(ma(s,{ceFn:n}))}),a}function _s(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const He={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(ma(n),t)}),t.getAttribute(be)===null&&y.keepOriginalSource){let n=F.createComment(_s(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Wt(t).indexOf(y.replacementClass))return He.replace(e);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===y.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>ze(s)).join(`
`);t.setAttribute(be,""),t.innerHTML=r}};function bn(e){e()}function pa(e,t){const n=typeof t=="function"?t:Ue;if(e.length===0)n();else{let a=bn;y.mutateApproach===Pr&&(a=pe.requestAnimationFrame||bn),a(()=>{const r=bs(),s=Gt.begin("mutate");e.map(r),s(),n()})}}let Vt=!1;function ga(){Vt=!0}function At(){Vt=!1}let qe=null;function xn(e){if(!rn||!y.observeMutations)return;const{treeCallback:t=Ue,nodeCallback:n=Ue,pseudoElementsCallback:a=Ue,observeMutationsRoot:r=F}=e;qe=new rn(s=>{if(Vt)return;const o=ge();Pe(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!yn(l.addedNodes[0])&&(y.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&y.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&yn(l.target)&&~Er.indexOf(l.attributeName))if(l.attributeName==="class"&&hs(l.target)){const{prefix:d,iconName:f}=et(Wt(l.target));l.target.setAttribute(Mt,d||o),f&&l.target.setAttribute(zt,f)}else ys(l.target)&&n(l.target)})}),de&&qe.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ws(){qe&&qe.disconnect()}function As(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Ps(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=et(Wt(e));return r.prefix||(r.prefix=ge()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Xr(r.prefix,e.innerText)||Yt(r.prefix,ht(e.innerText))),!r.iconName&&y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ss(e){const t=Pe(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return y.autoA11y&&(n?t["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||Fe()):(t["aria-hidden"]="true",t.focusable="false")),t}function ks(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ae,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ps(e),s=Ss(e),o=bt("parseNodeAttributes",{},e);let l=t.styleParser?As(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:ae,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:s}},o)}const{styles:js}=re;function ha(e){const t=y.autoReplaceSvg==="nest"?vn(e,{styleParser:!1}):vn(e);return~t.extra.classes.indexOf(Kn)?he("generateLayersText",e,t):he("generateSvgReplacementMutation",e,t)}function Cs(){return[...lr,...ft]}function _n(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!de)return Promise.resolve();const n=F.documentElement.classList,a=u=>n.add("".concat(ln,"-").concat(u)),r=u=>n.remove("".concat(ln,"-").concat(u)),s=y.autoFetchSvg?Cs():Hn.concat(Object.keys(js));s.includes("fa")||s.push("fa");const o=[".".concat(Kn,":not([").concat(be,"])")].concat(s.map(u=>".".concat(u,":not([").concat(be,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Pe(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const d=Gt.begin("onTree"),f=l.reduce((u,P)=>{try{const x=ha(P);x&&u.push(x)}catch(x){qn||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise((u,P)=>{Promise.all(f).then(x=>{pa(x,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),d(),u()})}).catch(x=>{d(),P(x)})})}function Is(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ha(e).then(n=>{n&&pa([n],t)})}function Es(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:xt(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:xt(r||{})),e(a,c(c({},n),{},{mask:r}))}}const Ns=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ae,symbol:a=!1,mask:r=null,maskId:s=null,title:o=null,titleId:l=null,classes:d=[],attributes:f={},styles:u={}}=t;if(!e)return;const{prefix:P,iconName:x,icon:O}=e;return tt(c({type:"icon"},e),()=>(xe("beforeDOMElementCreation",{iconDefinition:e,params:t}),y.autoA11y&&(o?f["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(l||Fe()):(f["aria-hidden"]="true",f.focusable="false")),Bt({icons:{main:vt(O),mask:r?vt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:x,transform:c(c({},ae),n),symbol:a,title:o,maskId:s,titleId:l,extra:{attributes:f,styles:u,classes:d}})))};var Os={mixout(){return{icon:Es(Ns)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=_n,e.nodeCallback=Is,e}}},provides(e){e.i2svg=function(t){const{node:n=F,callback:a=()=>{}}=t;return _n(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:o,transform:l,symbol:d,mask:f,maskId:u,extra:P}=n;return new Promise((x,O)=>{Promise.all([_t(a,o),f.iconName?_t(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[R,j]=N;x([t,Bt({icons:{main:R,mask:j},prefix:o,iconName:a,transform:l,symbol:d,maskId:u,title:r,titleId:s,extra:P,watchable:!0})])}).catch(O)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:o}=t;const l=Je(o);l.length>0&&(a.style=l);let d;return Ut(s)&&(d=he("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(d||r.icon),{children:n,attributes:a}}}},Ts={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return tt({type:"layer"},()=>{xe("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ds={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return tt({type:"counter",content:e},()=>(xe("beforeDOMElementCreation",{content:e,params:t}),us({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},Rs={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ae,title:a=null,classes:r=[],attributes:s={},styles:o={}}=t;return tt({type:"text",content:e},()=>(xe("beforeDOMElementCreation",{content:e,params:t}),gn({content:e,transform:c(c({},ae),n),title:a,extra:{attributes:s,styles:o,classes:["".concat(y.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let o=null,l=null;if(Wn){const d=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/d,l=f.height/d}return y.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,gn({content:t.innerHTML,width:o,height:l,transform:r,title:a,extra:s,watchable:!0})])}}};const Fs=new RegExp('"',"ug"),wn=[1105920,1112319],An=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),sr),wr),gr),Pt=Object.keys(An).reduce((e,t)=>(e[t.toLowerCase()]=An[t],e),{}),Ls=Object.keys(Pt).reduce((e,t)=>{const n=Pt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Ms(e){const t=e.replace(Fs,""),n=Yr(t,0),a=n>=wn[0]&&n<=wn[1],r=t.length===2?t[0]===t[1]:!1;return{value:ht(r?t[0]:t),isSecondary:a||r}}function zs(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Pt[n]||{})[r]||Ls[n]}function Pn(e,t){const n="".concat(Ar).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const o=Pe(e.children).filter(x=>x.getAttribute(ut)===t)[0],l=pe.getComputedStyle(e,t),d=l.getPropertyValue("font-family"),f=d.match(Cr),u=l.getPropertyValue("font-weight"),P=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&P!=="none"&&P!==""){const x=l.getPropertyValue("content");let O=zs(d,u);const{value:N,isSecondary:R}=Ms(x),j=f[0].startsWith("FontAwesome");let D=Yt(O,N),b=D;if(j){const T=Kr(N);T.iconName&&T.prefix&&(D=T.iconName,O=T.prefix)}if(D&&!R&&(!o||o.getAttribute(Mt)!==O||o.getAttribute(zt)!==b)){e.setAttribute(n,b),o&&e.removeChild(o);const T=ks(),{extra:U}=T;U.attributes[ut]=t,_t(D,O).then(g=>{const S=Bt(c(c({},T),{},{icons:{main:g,mask:fa()},prefix:O,iconName:b,extra:U,watchable:!0})),k=F.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=S.map(V=>ze(V)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function $s(e){return Promise.all([Pn(e,"::before"),Pn(e,"::after")])}function Ws(e){return e.parentNode!==document.head&&!~Sr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ut)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Sn(e){if(de)return new Promise((t,n)=>{const a=Pe(e.querySelectorAll("*")).filter(Ws).map($s),r=Gt.begin("searchPseudoElements");ga(),Promise.all(a).then(()=>{r(),At(),t()}).catch(()=>{r(),At(),n()})})}var Us={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Sn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=F}=t;y.searchPseudoElements&&Sn(n)}}};let kn=!1;var Hs={mixout(){return{dom:{unwatch(){ga(),kn=!0}}}},hooks(){return{bootstrap(){xn(bt("mutationObserverCallbacks",{}))},noAuto(){ws()},watch(e){const{observeMutationsRoot:t}=e;kn?At():xn(bt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const jn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Ys={mixout(){return{parse:{transform:e=>jn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=jn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(d," ").concat(f)},P={transform:"translate(".concat(s/2*-1," -256)")},x={outer:o,inner:u,path:P};return{tag:"g",attributes:c({},x.outer),children:[{tag:"g",attributes:c({},x.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),x.path)}]}]}}}};const it={x:0,y:0,width:"100%",height:"100%"};function Cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bs(e){return e.tag==="g"?e.children:[e]}var Gs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?et(n.split(" ").map(r=>r.trim())):fa();return a.prefix||(a.prefix=ge()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:o,transform:l}=t;const{width:d,icon:f}=r,{width:u,icon:P}=s,x=Mr({transform:l,containerWidth:u,iconWidth:d}),O={tag:"rect",attributes:c(c({},it),{},{fill:"white"})},N=f.children?{children:f.children.map(Cn)}:{},R={tag:"g",attributes:c({},x.inner),children:[Cn(c({tag:f.tag,attributes:c(c({},f.attributes),x.path)},N))]},j={tag:"g",attributes:c({},x.outer),children:[R]},D="mask-".concat(o||Fe()),b="clip-".concat(o||Fe()),T={tag:"mask",attributes:c(c({},it),{},{id:D,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,j]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Bs(P)},T]};return n.push(U,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(D,")")},it)}),{children:n,attributes:a}}}},Vs={provides(e){let t=!1;pe.matchMedia&&(t=pe.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Xs=[Wr,Os,Ts,Ds,Rs,Us,Hs,Ys,Gs,Vs,qs];ss(Xs,{mixoutsTo:Q});Q.noAuto;Q.config;Q.library;Q.dom;const St=Q.parse;Q.findIconDefinition;Q.toHtml;const Ks=Q.icon;Q.layer;Q.text;Q.counter;function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?In(Object(n),!0).forEach(function(a){_e(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Xe(e){"@babel/helpers - typeof";return Xe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qs(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Js(e,t){if(e==null)return{};var n=Qs(e,t),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function kt(e){return Zs(e)||ei(e)||ti(e)||ni()}function Zs(e){if(Array.isArray(e))return jt(e)}function ei(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ti(e,t){if(e){if(typeof e=="string")return jt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jt(e,t)}}function jt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ni(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ai(e){var t,n=e.beat,a=e.fade,r=e.beatFade,s=e.bounce,o=e.shake,l=e.flash,d=e.spin,f=e.spinPulse,u=e.spinReverse,P=e.pulse,x=e.fixedWidth,O=e.inverse,N=e.border,R=e.listItem,j=e.flip,D=e.size,b=e.rotation,T=e.pull,U=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":d,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":P,"fa-fw":x,"fa-inverse":O,"fa-border":N,"fa-li":R,"fa-flip":j===!0,"fa-flip-horizontal":j==="horizontal"||j==="both","fa-flip-vertical":j==="vertical"||j==="both"},_e(t,"fa-".concat(D),typeof D<"u"&&D!==null),_e(t,"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),_e(t,"fa-pull-".concat(T),typeof T<"u"&&T!==null),_e(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(U).map(function(g){return U[g]?g:null}).filter(function(g){return g})}function ri(e){return e=e-0,e===e}function ya(e){return ri(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var si=["style"];function ii(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=ya(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?t[ii(r)]=s:t[r]=s,t},{})}function ba(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(d){return ba(e,d)}),r=Object.keys(t.attributes||{}).reduce(function(d,f){var u=t.attributes[f];switch(f){case"class":d.attrs.className=u,delete t.attributes.class;break;case"style":d.attrs.style=oi(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?d.attrs[f.toLowerCase()]=u:d.attrs[ya(f)]=u}return d},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=Js(n,si);return r.attrs.style=ne(ne({},r.attrs.style),o),e.apply(void 0,[t.tag,ne(ne({},r.attrs),l)].concat(kt(a)))}var xa=!1;try{xa=!0}catch{}function li(){if(!xa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function En(e){if(e&&Xe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(St.icon)return St.icon(e);if(e===null)return null;if(e&&Xe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ot(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}var Nn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},qt=le.forwardRef(function(e,t){var n=ne(ne({},Nn),e),a=n.icon,r=n.mask,s=n.symbol,o=n.className,l=n.title,d=n.titleId,f=n.maskId,u=En(a),P=ot("classes",[].concat(kt(ai(n)),kt((o||"").split(" ")))),x=ot("transform",typeof n.transform=="string"?St.transform(n.transform):n.transform),O=ot("mask",En(r)),N=Ks(u,ne(ne(ne(ne({},P),x),O),{},{symbol:s,title:l,titleId:d,maskId:f}));if(!N)return li("Could not find icon",u),null;var R=N.abstract,j={ref:t};return Object.keys(n).forEach(function(D){Nn.hasOwnProperty(D)||(j[D]=n[D])}),ci(R[0],j)});qt.displayName="FontAwesomeIcon";qt.propTypes={beat:w.bool,border:w.bool,beatFade:w.bool,bounce:w.bool,className:w.string,fade:w.bool,flash:w.bool,mask:w.oneOfType([w.object,w.array,w.string]),maskId:w.string,fixedWidth:w.bool,inverse:w.bool,flip:w.oneOf([!0,!1,"horizontal","vertical","both"]),icon:w.oneOfType([w.object,w.array,w.string]),listItem:w.bool,pull:w.oneOf(["right","left"]),pulse:w.bool,rotation:w.oneOf([0,90,180,270]),shake:w.bool,size:w.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.bool,spinPulse:w.bool,spinReverse:w.bool,symbol:w.oneOfType([w.bool,w.string]),title:w.string,titleId:w.string,transform:w.oneOfType([w.string,w.object]),swapOpacity:w.bool};var ci=ba.bind(null,le.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const fi={prefix:"fas",iconName:"clipboard",icon:[384,512,[128203],"f328","M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},di={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]},ui={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"]},mi={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},pi=mi,gi=()=>{const e=Ct(g=>g.userInfo),[t]=E.useState((e==null?void 0:e.whitelevel_id)||""),[n,a]=E.useState([]),[r,s]=E.useState(!0),[o,l]=E.useState({}),[d,f]=E.useState(0),[u,P]=E.useState(5),[x,O]=E.useState("");E.useEffect(()=>{(async()=>{try{s(!0);const S=await Ke.post("item/allitems/",{whitelevel_id:t});a(S.data||[]),s(!1)}catch(S){console.error("Error fetching report data:",S),s(!1)}})()},[t]);const N=g=>{l(S=>({...S,[g]:!S[g]}))},R=async g=>{const S=new Ee("p","mm","a4"),k=document.createElement("div");k.style.width="210mm",k.style.fontSize="19px",k.innerHTML=`
      <h2>NewIssuance Report</h2>
      <p><strong>Issuance ID:</strong> ${g.issuance.issuance_id}</p>
      <p><strong>Issuance Date:</strong> ${g.issuance.issuance_date}</p>
      <p><strong>About the NewIssuance:</strong> ${g.issuance.about_the_newissuance||"N/A"}</p>
      ${g.issuance.newIssuance_image?`<img src="data:image/jpeg;base64,${g.issuance.newIssuance_image}" style="width:60%; max-height:200px; margin-bottom:20px;" />`:""}
      <h3>Employee</h3>
      ${g.issued_to_employees.length>0?`<ul>${g.issued_to_employees.map(M=>`<li>${M.employee_name} (Employee ID: ${M.employee})</li>`).join("")}</ul>`:"<p>No NewIssuance Assigned</p>"}
    `,document.body.appendChild(k);const V=await It(k),q=V.toDataURL("image/png"),B=190,m=297,_=V.height*B/V.width;let v=_,L=10;for(S.addImage(q,"PNG",10,L,B,_),v-=m;v>=0;)L=v-_,S.addPage(),S.addImage(q,"PNG",10,L,B,_),v-=m;document.body.removeChild(k),S.save(`NewIssuance_Report_${g.issuance.issuance_id}.pdf`)},j=async()=>{const g=new Ee("p","mm","a4"),S=10;let k=S;g.setFontSize(10),n.forEach((q,B)=>{if(g.text(`Issuance ID: ${q.issuance.issuance_id}`,S,k),k+=7,g.text(`Issuance Date: ${q.issuance.issuance_date}`,S,k),k+=7,g.text(`About the NewIssuance: ${q.issuance.about_the_newissuance||"N/A"}`,S,k),k+=7,g.text("Employee:",S,k),k+=7,q.issued_to_employees.forEach((m,_)=>{g.text(`- ${m.employee_name} (ID: ${m.employee})`,S,k),k+=7}),q.issuance.newIssuance_image){const m=`data:image/jpeg;base64,${q.issuance.newIssuance_image}`,_=160,v=100,L=k;g.addImage(m,"JPEG",S,L,_,v),k+=v+7}k>270?(g.addPage(),k=S):k+=10}),g.save("NewIssuance_Report.pdf")},D=(g,S)=>{f(S)},b=g=>{P(parseInt(g.target.value,10)),f(0)},T=n.filter(g=>g.issuance.issuance_id.toLowerCase().includes(x.toLowerCase())||g.issuance.issuance_date.toLowerCase().includes(x.toLowerCase())||g.issuance.about_the_newissuance.toLowerCase().includes(x.toLowerCase())),U=T.slice(d*u,d*u+u);return r?i.jsx(lt,{maxWidth:"lg",className:"flex justify-center items-center h-screen",children:i.jsx(Tn,{})}):i.jsxs(lt,{maxWidth:"lg",children:[i.jsx(X,{variant:"h4",gutterBottom:!0,children:"Item Report"}),i.jsxs(Ne,{display:"flex",justifyContent:"flex-end",mb:2,sx:{gap:"10px"},children:[i.jsx(Nt,{label:"Search",variant:"outlined",size:"small",value:x,onChange:g=>O(g.target.value),sx:{width:300}}),i.jsx(me,{variant:"contained",color:"primary",onClick:j,children:"Download PDF"})]}),i.jsx(Ot,{component:Ye,children:i.jsxs(Be,{stickyHeader:!0,sx:{minWidth:650},"aria-label":"nested table",children:[i.jsx(Tt,{children:i.jsxs(J,{children:[i.jsx(A,{}),i.jsx(A,{children:"Issuance ID"}),i.jsx(A,{children:"Issuance Date"}),i.jsx(A,{children:"About the Issuance"}),i.jsx(A,{children:"Actions"})]})}),i.jsx(Ge,{children:U.length>0?U.map((g,S)=>i.jsxs(le.Fragment,{children:[i.jsxs(J,{children:[i.jsx(A,{children:i.jsx(Et,{size:"small",onClick:()=>N(S),children:o[S]?i.jsx(Ln,{}):i.jsx(Fn,{})})}),i.jsx(A,{children:g.issuance.issuance_id}),i.jsx(A,{children:g.issuance.issuance_date}),i.jsx(A,{children:g.issuance.about_the_newissuance||"N/A"}),i.jsx(A,{children:i.jsx(me,{variant:"outlined",color:"primary",onClick:()=>R(g),children:i.jsx(Rn,{})})})]}),i.jsx(J,{children:i.jsx(A,{colSpan:5,children:i.jsx(Dn,{in:o[S],timeout:"auto",unmountOnExit:!0,children:i.jsx(Ye,{children:i.jsx(Be,{size:"small",children:i.jsx(Ge,{children:g.issued_to_employees.length>0?g.issued_to_employees.map((k,V)=>i.jsxs(J,{children:[i.jsx(A,{children:k.employee}),i.jsx(A,{children:k.employee_name})]},V)):i.jsx(J,{children:i.jsx(A,{colSpan:2,children:"No Employees Assigned"})})})})})})})})]},S)):i.jsx(J,{children:i.jsx(A,{colSpan:5,align:"center",children:"No Data Available"})})})]})}),i.jsx(Ft,{rowsPerPageOptions:[5,10,25],component:"div",count:T.length,rowsPerPage:u,page:d,onPageChange:D,onRowsPerPageChange:b})]})},hi=()=>{const e=Ct(m=>m.userInfo),[t]=E.useState(e.whitelevel_id),[n,a]=E.useState([]),[r,s]=E.useState(!0),[o,l]=E.useState({}),[d,f]=E.useState(!1),[u,P]=E.useState(""),[x,O]=E.useState(0),[N,R]=E.useState(5),[j,D]=E.useState("");E.useEffect(()=>{(async()=>{try{s(!0);const _=await Ke.post("training/alltrainings/",{whitelevel_id:t});a(_.data||[]),s(!1)}catch(_){console.error("Error fetching report data:",_),s(!1)}})()},[t]);const T=n.filter(m=>m.training_id.toLowerCase().includes(j.toLowerCase())||m.training_date.toLowerCase().includes(j.toLowerCase())||m.training_type.toLowerCase().includes(j.toLowerCase())).slice(x*N,x*N+N),U=m=>{l(_=>({..._,[m]:!_[m]}))},g=m=>{P(m),f(!0)},S=()=>{f(!1)},k=async m=>{const _=new Ee("p","mm","a4"),v=document.createElement("div");v.style.width="110mm",v.style.fontSize="19px",v.innerHTML=`
      <h2>Training Report</h2>
      <p><strong>Training ID:</strong> ${m.training_id}</p>
      <p><strong>Training Date:</strong> ${m.training_date}</p>
      <p><strong>Training Type:</strong> ${m.training_type}</p>
      <p><strong>About the Training:</strong> ${m.about_the_training||"N/A"}</p>
      ${m.training_image?`<img src="data:image/jpeg;base64,${m.training_image}" style="width:100%; max-height:300px; margin-bottom:20px;" />`:""}
      <h3>Trainers</h3>
      ${m.trainers.length>0?`<ul>${m.trainers.map(oe=>`<li>${oe.trainer_name} (Employee ID: ${oe.employee_id})</li>`).join("")}</ul>`:"<p>No Trainers Assigned</p>"}
      <h3>Trainees</h3>
      ${m.trainees.length>0?`<ul>${m.trainees.map(oe=>`<li>${oe.trainee_name} (Employee ID: ${oe.employee_id})</li>`).join("")}</ul>`:"<p>No Trainees Assigned</p>"}
    `,document.body.appendChild(v);const L=await It(v),M=L.toDataURL("image/png"),se=100,W=297,H=L.height*se/L.width;let Z=H,ie=10;for(_.addImage(M,"PNG",10,ie,se,H),Z-=W;Z>=0;)ie=Z-H,_.addPage(),_.addImage(M,"PNG",10,ie,se,H),Z-=W;document.body.removeChild(v),_.save(`Training_Report_${m.training_id}.pdf`)},V=async()=>{const m=new Ee("p","mm","a4"),_=10;let v=_;m.setFontSize(10),n.forEach((M,se)=>{if(m.text(`Training ID: ${M.training_id}`,_,v),v+=7,m.text(`Training Date: ${M.training_date}`,_,v),v+=7,m.text(`Training Type: ${M.training_type}`,_,v),v+=7,m.text(`About the Training: ${M.about_the_training||"N/A"}`,_,v),v+=7,m.text("Trainers:",_,v),v+=7,M.trainers.forEach((W,H)=>{m.text(`- ${W.trainer_name} (ID: ${W.employee_id})`,_,v),v+=7}),m.text("Trainees:",_,v),v+=7,M.trainees.forEach((W,H)=>{m.text(`- ${W.trainee_name} (ID: ${W.employee_id})`,_,v),v+=7}),M.training_image){const W=`data:image/jpeg;base64,${M.training_image}`,H=160,Z=100,ie=v;m.addImage(W,"JPEG",_,ie,H,Z),v+=Z+7}v>270?(m.addPage(),v=_):v+=10}),m.save("Training_Report.pdf")},q=(m,_)=>{O(_)},B=m=>{R(parseInt(m.target.value,10)),O(0)};return r?i.jsx(Tn,{}):i.jsxs(lt,{sx:{width:"100%",maxWidth:"none"},children:[i.jsx(X,{variant:"h4",gutterBottom:!0,children:"Training Report"}),i.jsxs(Ne,{display:"flex",justifyContent:"flex-end",mb:2,sx:{gap:"10px"},children:[i.jsx(Nt,{label:"Search",variant:"outlined",fullWidth:!0,value:j,onChange:m=>D(m.target.value),style:{marginBottom:16},sx:{width:300}}),i.jsx(me,{variant:"contained",color:"primary",onClick:V,style:{marginBottom:16},children:"Download PDF"})]}),i.jsx(Ot,{component:Ye,children:i.jsxs(Be,{sx:{minWidth:900},"aria-label":"nested table",children:[i.jsx(Tt,{children:i.jsxs(J,{children:[i.jsx(A,{}),i.jsx(A,{children:"Training ID"}),i.jsx(A,{children:"Training Date"}),i.jsx(A,{children:"Training Type"}),i.jsx(A,{children:"About the Training"}),i.jsx(A,{children:"Actions"})]})}),i.jsx(Ge,{children:T.map((m,_)=>i.jsxs(le.Fragment,{children:[i.jsxs(J,{children:[i.jsx(A,{children:i.jsx(Et,{size:"small",onClick:()=>U(_),children:o[_]?i.jsx(Ln,{}):i.jsx(Fn,{})})}),i.jsx(A,{children:m.training_id}),i.jsx(A,{children:m.training_date}),i.jsx(A,{children:m.training_type}),i.jsx(A,{children:m.about_the_training||"N/A"}),i.jsx(A,{children:i.jsxs(me,{variant:"outlined",color:"primary",onClick:()=>k(m),children:[i.jsx(Rn,{})," Download"]})})]}),o[_]&&i.jsx(J,{children:i.jsxs(A,{colSpan:6,children:[i.jsxs("div",{children:[i.jsx(X,{variant:"body2",children:"Trainers:"}),m.trainers.length>0?i.jsx("ul",{children:m.trainers.map((v,L)=>i.jsx("li",{children:v.trainer_name},L))}):i.jsx(X,{children:"No Trainers Assigned"})]}),i.jsxs("div",{children:[i.jsx(X,{variant:"body2",children:"Trainees:"}),m.trainees.length>0?i.jsx("ul",{children:m.trainees.map((v,L)=>i.jsx("li",{children:v.trainee_name},L))}):i.jsx(X,{children:"No Trainees Assigned"})]}),m.training_image&&i.jsx(me,{variant:"contained",color:"secondary",onClick:()=>g(m.training_image),children:"View Image"})]})})]},_))})]})}),i.jsxs(Oe,{open:d,onClose:S,maxWidth:"md",fullWidth:!0,children:[i.jsx(Te,{children:"Training Image"}),i.jsx(De,{children:i.jsx("img",{src:`data:image/jpeg;base64,${u}`,alt:"Training",style:{width:"45%",height:"350px"}})}),i.jsx(Re,{children:i.jsx(me,{onClick:S,color:"primary",children:"Close"})})]}),i.jsx(Ft,{rowsPerPageOptions:[5,10,25],component:"div",count:n.length,page:x,onPageChange:q,rowsPerPage:N,onRowsPerPageChange:B})]})},va=e=>{const[t,n]=E.useState({issued_items_count:0,upcoming_issuance_count:0,accidents_count:0,trainings_count:0}),[a,r]=E.useState(!1),[s,o]=E.useState(null),[l,d]=E.useState(!1);E.useEffect(()=>{(async()=>{try{const j=(await Ke.get("/reports/dashboard/")).data.data;console.log("result:",j),n({issued_items_count:j.issued_items_count,upcoming_issuance_count:j.upcoming_issuance_count,accidents_count:j.accidents_count,trainings_count:j.trainings_count})}catch(R){console.error("Error fetching data:",R)}})()},[]);const f=()=>{o({issued_items_count:t.issued_items_count}),r(!0)},u=()=>{d(!0)},P=()=>{r(!1)},x=()=>{d(!1)},O=[{title:"New Issuance",value:t.issued_items_count,icon:ui,color:"#00008b",onClick:f},{title:"Upcoming Issuance",value:t.upcoming_issuance_count,icon:di,color:"#8b008b"},{title:"Safety Training",value:t.trainings_count,icon:fi,color:"#008b8b",onClick:u},{title:"Accident",value:t.accidents_count,icon:pi,color:"#8b0000"}];return i.jsxs(i.Fragment,{children:[i.jsx(za,{className:e.className,xs:{gutter:4},children:O.map((N,R)=>i.jsx($a,{sm:6,xl:4,xxl:3,children:i.jsxs("div",{className:"custom-card",style:{backgroundColor:N.color},onClick:N.onClick,children:[i.jsxs("div",{className:"card-content",children:[i.jsx("p",{className:"card-title",children:N.title}),i.jsx("p",{className:"card-value",children:N.value})]}),i.jsx("div",{className:"card-icon",children:i.jsx(qt,{icon:N.icon})})]})},R))}),i.jsxs(Oe,{fullWidth:!0,maxWidth:"xl",open:a,onClose:P,children:[i.jsx(Te,{children:"New Issuance Details"}),i.jsx(De,{children:i.jsx(gi,{})}),i.jsx(Re,{children:i.jsx(me,{onClick:P,color:"primary",children:"Close"})})]}),i.jsxs(Oe,{fullWidth:!0,maxWidth:"xl",open:l,onClose:x,children:[i.jsx(Te,{children:"Safety Training Details"}),i.jsx(De,{children:i.jsx(hi,{})}),i.jsx(Re,{children:i.jsx(me,{onClick:x,color:"primary",children:"Close"})})]})]})};va.propTypes={className:w.string};function On(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function yi(e,t){return e==="desc"?(n,a)=>On(n,a,t):(n,a)=>-On(n,a,t)}function bi(e,t){const n=e.map((a,r)=>[a,r]);return n.sort((a,r)=>{const s=t(a[0],r[0]);return s!==0?s:a[1]-r[1]}),n.map(a=>a[0])}const xi=[{id:"accident_report_date",numeric:!1,disablePadding:!0,label:"Report Date"},{id:"accident_type",numeric:!0,disablePadding:!1,label:"Accident Type"},{id:"severity",numeric:!0,disablePadding:!1,label:"Severity"},{id:"accident_id",numeric:!1,disablePadding:!1,label:"Accident ID"},{id:"permit_status_id",numeric:!0,disablePadding:!1,label:"Permit Status"},{id:"ppe_status_id",numeric:!0,disablePadding:!1,label:"PPE Status"},{id:"toolbox_reference_number_id",numeric:!0,disablePadding:!1,label:"Tool Box Train"},{id:"workmen_count",numeric:!0,disablePadding:!1,label:"Workmen Involved"},{id:"workmen_names",numeric:!1,disablePadding:!1,label:"Workmen Names"},{id:"reportedby_count",numeric:!0,disablePadding:!1,label:"Reported By"},{id:"reportedby_names",numeric:!1,disablePadding:!1,label:"ReportedBy Names"},{id:"supervisor_count",numeric:!0,disablePadding:!1,label:"Supervisor Involved"},{id:"supervisor_names",numeric:!1,disablePadding:!1,label:"Supervisor Names"},{id:"about_the_accident",numeric:!1,disablePadding:!1,label:"Description"},{id:"accident_image",numeric:!1,disablePadding:!1,label:"Accident Image"}];function _a(e){const{order:t,orderBy:n,onRequestSort:a}=e,r=s=>o=>{a(o,s)};return i.jsx(Tt,{children:i.jsx(J,{children:xi.map(s=>s.id!=="whitelevel_id"&&i.jsx(A,{align:s.numeric?"right":"left",padding:s.disablePadding?"4":"normal",sortDirection:n===s.id?t:!1,children:i.jsxs(Ra,{active:n===s.id,direction:n===s.id?t:"asc",onClick:r(s.id),children:[s.label,n===s.id?i.jsx(Ne,{component:"span",sx:Fa,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},s.id))})})}_a.propTypes={onRequestSort:w.func.isRequired,order:w.oneOf(["asc","desc"]).isRequired,orderBy:w.string.isRequired};function wa(e){const{numSelected:t,onDownload:n,searchQuery:a,onSearchChange:r}=e;return i.jsxs(La,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...t>0&&{bgcolor:s=>Ha(s.palette.primary.main,s.palette.action.activatedOpacity)}},children:[i.jsx(X,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"ACCIDENT REPORTS"}),i.jsx(Nt,{variant:"outlined",size:"small",value:a,onChange:r,placeholder:"Search...",sx:{mr:2}}),i.jsx(Ma,{title:"Download",children:i.jsx(Et,{onClick:n,children:i.jsx(Aa,{})})})]})}wa.propTypes={numSelected:w.number.isRequired,onDownload:w.func.isRequired,searchQuery:w.string.isRequired,onSearchChange:w.func.isRequired};function vi(){Ct(h=>h.userInfo);const[e,t]=E.useState("asc"),[n,a]=E.useState("accident_report_date"),[r,s]=E.useState([]),[o,l]=E.useState(0),[d,f]=E.useState(5),[u,P]=E.useState([]),[x,O]=E.useState(""),[N,R]=le.useState(!1),[j,D]=le.useState(!1),[b,T]=le.useState(null),[U,g]=le.useState(null);E.useEffect(()=>{(async()=>{try{const I=await Ke.post("/reports/accident/");console.log(I.data);const $=I.data.results.map((p,C)=>{var Y,K,ee,Se,Xt,Kt,Qt,Jt,Zt;return{id:C+1,accident_report_date:p.accident_report_date?Ua(new Date(p.accident_report_date),"dd/MM/yyyy"):"N/A",whitelevel_id:p.whitelevel_id||"N/A",accident_type:p.accident_type||"N/A",severity:p.severity||"N/A",permit_status_id:p.permit_status_id||"N/A",ppe_status_id:p.ppe_status_id||"N/A",toolbox_reference_number_id:p.toolbox_reference_number_id||"N/A",about_the_accident:p.about_the_accident||"N/A",accident_image:p.accident_image||"N/A",accident_id:p.accident_id||"N/A",workmen_count:((Y=p.workmen_involved)==null?void 0:Y.count)??0,workmen_names:((ee=(K=p.workmen_involved)==null?void 0:K.names)==null?void 0:ee.map(ke=>ke.employee_name).join(", "))||"N/A",supervisor_count:((Se=p.supervisors_involved)==null?void 0:Se.count)??0,supervisor_names:((Kt=(Xt=p.supervisors_involved)==null?void 0:Xt.names)==null?void 0:Kt.map(ke=>ke.supervisor_name).join(", "))||"N/A",reportedby_count:((Qt=p.reported_by)==null?void 0:Qt.count)??0,reportedby_names:((Zt=(Jt=p.reported_by)==null?void 0:Jt.names)==null?void 0:Zt.map(ke=>ke.employee_name).join(", "))||"N/A"}});P($)}catch(I){if(I.isAxiosError&&I.response){console.error(`HTTP error! status: ${I}`);const z=JSON.stringify(I.response.data);console.error("Response body:",z),alert(`Error: ${z}`)}console.error("Error fetching data:",I)}})()},[]);const S=(h,I)=>{t(n===I&&e==="asc"?"desc":"asc"),a(I)},k=(h,I)=>{const z=r.indexOf(I);let $=[];z===-1?$=$.concat(r,I):z===0?$=$.concat(r.slice(1)):z===r.length-1?$=$.concat(r.slice(0,-1)):z>0&&($=$.concat(r.slice(0,z),r.slice(z+1))),s($)},V=(h,I)=>{l(I)},q=h=>{f(parseInt(h.target.value,10)),l(0)},B=h=>r.indexOf(h)!==-1,m=o>0?Math.max(0,(1+o)*d-u.length):0,_=h=>{O(h.target.value)},v=h=>{T(h),R(!0)},L=()=>{R(!1)},M=h=>{g(h),D(!0)},se=()=>{D(!1)},W=(h,I)=>{k(h,I.id),v(I)},H=u.filter(h=>Object.keys(h).some(I=>String(h[I]).toLowerCase().includes(x.toLowerCase()))),Z=le.useMemo(()=>bi(H,yi(e,n)).slice(o*d,o*d+d),[e,n,o,d,H]),ie=async()=>{const h=new Wa.Workbook,I=h.addWorksheet("Accident Reports");I.columns=[{header:"Accident Report Date",key:"accident_report_date"},{header:"Accident Type",key:"accident_type"},{header:"Severity",key:"severity"},{header:"Accident ID",key:"accident_id"},{header:"Workmen Count",key:"workmen_count"},{header:"Workmen Names",key:"workmen_names"},{header:"ReportedBy Count",key:"reportedby_count"},{header:"ReportedBy Names",key:"reportedby_names"},{header:"Supervisor Count",key:"supervisor_count"},{header:"Supervisor Names",key:"supervisor_names"},{header:"Permit Status",key:"permit_status"},{header:"PPE Status",key:"ppe_status"},{header:"Description",key:"about_the_accident"}],H.forEach(C=>{I.addRow({accident_report_date:C.accident_report_date,accident_type:C.accident_type===1?"Near Miss":C.accident_type===2?"Accident":C.accident_type===3?"Violation":"Unknown",severity:C.severity,accident_id:C.accident_id,workmen_count:C.workmen_count,workmen_names:C.workmen_names,reportedby_count:C.reportedby_count,reportedby_names:C.reportedby_names,supervisor_count:C.supervisor_count,supervisor_names:C.supervisor_names,permit_status:C.permit_status_id===1?"Valid":C.permit_status_id===2?"Not Required":C.permit_status_id===3?"No Permit":C.permit_status_id===4?"Expired":"Unknown",ppe_status:C.ppe_status_id===1?"OK":C.ppe_status_id===2?"Faulty":"Unknown",about_the_accident:C.about_the_accident})});const z=await h.xlsx.writeBuffer(),$=new Blob([z],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),p=document.createElement("a");p.href=URL.createObjectURL($),p.download="accident_report.xlsx",document.body.appendChild(p),p.click(),document.body.removeChild(p)},oe=async()=>{const h=new Ee("p","mm","a4"),I=document.createElement("div");I.style.width="210mm",I.style.fontSize="19px",I.innerHTML=`
      <div style="font-family: Arial, sans-serif; font-size: 12px; padding: 20px;">
        <h3>Accident Report</h3>
        <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; margin: 10px 0;">
          <tr><th>Field</th><th>Value</th></tr>
          <tr><td>Accident Report Date</td><td>${b.accident_report_date||"N/A"}</td></tr>
          <tr><td>Accident Type</td><td>${b.accident_type===1?"Near Miss":b.accident_type===2?"Accident":b.accident_type===3?"Violation":"Unknown"}</td></tr>
          <tr><td>Severity</td><td>${b.severity||"N/A"}</td></tr>
          <tr><td>Accident ID</td><td>${b.accident_id||"N/A"}</td></tr>
          <tr><td>Workmen Count</td><td>${b.workmen_count||0}</td></tr>
          <tr><td>Workmen Names</td><td>${b.workmen_names||"N/A"}</td></tr>
          <tr><td>ReportedBy Count</td><td>${b.reportedby_count||0}</td></tr>
          <tr><td>ReportedBy Names</td><td>${b.reportedby_names||"N/A"}</td></tr>
          <tr><td>Supervisor Count</td><td>${b.supervisor_count||0}</td></tr>
          <tr><td>Supervisor Names</td><td>${b.supervisor_names||"N/A"}</td></tr>
          <tr><td>Permit Status</td><td>${b.permit_status_id===1?"Valid":b.permit_status_id===2?"Not Required":b.permit_status_id===3?"No Permit":b.permit_status_id===4?"Expired":"Unknown"}</td></tr>
          <tr><td>PPE Status</td><td>${b.ppe_status_id===1?"OK":b.ppe_status_id===2?"Faulty":"Unknown"}</td></tr>
          <tr><td>Description</td><td>${b.about_the_accident||"N/A"}</td></tr>
           <!-- Display Accident Image -->
         
        </table>
          <div style="text-align: center; margin-bottom: 20px;">
    <img src="data:image/png;base64,${b.accident_image}" alt="Accident Image" style="max-width: 100%; height: auto; border: 1px solid #ddd;">
  </div>
      </div>
    `,document.body.appendChild(I);const z=await It(I),$=z.toDataURL("image/png"),p=190,C=297,Y=z.height*p/z.width;let K=Y,ee=10;for(h.addImage($,"PNG",10,ee,p,Y),K-=C;K>=0;)ee=K-Y,h.addPage(),h.addImage($,"PNG",10,ee,p,Y),K-=C;document.body.removeChild(I),h.save(`Accident Report${b.accident_id}.pdf`)};return i.jsxs(Ne,{sx:{width:"100%"},children:[i.jsxs(Ye,{sx:{width:"100%",mb:1},children:[i.jsx(wa,{numSelected:r.length,onDownload:ie,searchQuery:x,onSearchChange:_}),i.jsx(Ot,{children:i.jsxs(Be,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[i.jsx(_a,{order:e,orderBy:n,onRequestSort:S}),i.jsxs(Ge,{children:[Z.map((h,I)=>{const z=B(h.id),$=`enhanced-table-checkbox-${I}`;return i.jsxs(J,{hover:!0,onClick:p=>W(p,h),role:"checkbox","aria-checked":z,tabIndex:-1,selected:z,children:[i.jsx(A,{component:"th",id:$,scope:"row",padding:"normal",children:h.accident_report_date}),i.jsx(A,{align:"right",children:h.accident_type===1?"Near Miss":h.accident_type===2?"Accident":h.accident_type===3?"Violation":"Unknown"}),i.jsx(A,{align:"right",children:h.severity}),i.jsx(A,{align:"left",children:h.accident_id}),i.jsx(A,{align:"right",children:h.permit_status_id===1?"Valid":h.permit_status_id===2?"Not Required":h.permit_status_id===3?"No Permit":h.permit_status_id===4?"Expired":"Unknown"}),i.jsx(A,{align:"right",children:h.ppe_status_id===1?"OK":h.ppe_status_id==2?"Faulty":"Unknown"}),i.jsx(A,{align:"left",children:h.toolbox_reference_number_id}),i.jsx(A,{align:"right",children:h.workmen_count}),i.jsx(A,{align:"left",children:h.workmen_names}),i.jsx(A,{align:"right",children:h.reportedby_count}),i.jsx(A,{align:"left",children:h.reportedby_names}),i.jsx(A,{align:"right",children:h.supervisor_count}),i.jsx(A,{align:"left",children:h.supervisor_names}),i.jsx(A,{align:"left",sx:{width:"40px",height:"5px",overflowY:"auto",maxHeight:"50px",whiteSpace:"normal",wordWrap:"break-word"},children:h.about_the_accident}),i.jsx(A,{align:"right",children:i.jsx("img",{src:`data:image/png;base64,${h.accident_image}`,alt:"Image Not Found ",style:{width:"80px",height:"80px",objectFit:"cover",borderRadius:"5px",cursor:"pointer"},onClick:()=>M(`data:image/png;base64,${h.accident_image}`),onError:p=>{p.target.onerror=null}})})]},h.id)}),m>0&&i.jsx(J,{style:{height:53*m},children:i.jsx(A,{colSpan:6})})]})]})}),i.jsx(Ft,{rowsPerPageOptions:[5,10,25],component:"div",count:H.length,rowsPerPage:d,page:o,onPageChange:V,onRowsPerPageChange:q})]}),i.jsxs(Oe,{open:N,onClose:L,children:[i.jsx(Te,{children:"Row Details"}),i.jsx(De,{children:b&&i.jsxs(Ne,{children:[i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"Accident ID:"})," ",b.accident_id]}),i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"Report Date:"})," ",b.accident_report_date]}),i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"Severity:"})," ",b.severity]}),i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"Description:"})," ",b.about_the_accident]}),i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"ReportedBy Names:"})," ",b.reportedby_names]}),i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"Workmen Names:"})," ",b.workmen_names]}),i.jsxs(X,{variant:"body1",children:[i.jsx("strong",{children:"Supervisor Names:"})," ",b.supervisor_names]}),i.jsx("img",{src:`data:image/png;base64,${b.accident_image}`,alt:"Accident Image",style:{width:"50%",height:"auto",marginTop:"10px"},onClick:h=>{h.stopPropagation(),M(`data:image/png;base64,${b.accident_image}`)}})]})}),i.jsxs(Re,{children:[i.jsx("button",{onClick:L,style:{padding:"10px"},children:"Close"}),i.jsx("button",{onClick:oe,style:{padding:"10px"},children:"Download"})]})]}),i.jsxs(Oe,{open:j,onClose:se,children:[i.jsx(Te,{children:"Image Preview"}),i.jsx(De,{children:i.jsx("img",{src:U,alt:"Preview",style:{width:"400px",height:"300px",objectFit:"cover"}})}),i.jsx(Re,{children:i.jsx("button",{onClick:se,style:{padding:"10px"},children:"Close"})})]})]})}const Hi=()=>i.jsxs("div",{style:{backgroundColor:"",minHeight:"100vh",width:"100%",padding:"20px"},children:[i.jsx(va,{className:"mb-4"}),i.jsx(vi,{})]});export{Hi as default};
