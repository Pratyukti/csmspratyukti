import{j as s,r as h,x as ee,n as oe,y as re,z as te,A as se,B as ne}from"./index-gUoKkNxd.js";import{c as R,g as T,a as $,_ as w,b as l,u as J,s as P,d as z,e as E,f as B,h as D,j as ae,k as N,l as le,r as ie,i as ce,m as V,n as W,o as de}from"./createSvgIcon-4eVnW2NG.js";import{T as ue}from"./ThemeProvider-GEDh_coH.js";import{B as O}from"./Box-BYukJ6PQ.js";import{C as pe}from"./Container-Bg8Dgr4V.js";import{r as fe,m as me,a as ge,G as ve,T as K,P as xe,I as be}from"./IconButton-74Ti2Z6n.js";import{T as H}from"./TextField-CxtPkCSH.js";import{B as ye}from"./Button-CNiZY_Ay.js";import{C as he}from"./CircularProgress-DhPRPsqx.js";import{G as U}from"./Grid-gLsvqBaq.js";import"./styled-CBr_OfpA.js";const Ce=R(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Se(e){return $("MuiAvatar",e)}T("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const je=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Ae=["component","slots","slotProps"],ke=["component"];function F(e,r){const{className:t,elementType:o,ownerState:n,externalForwardedProps:a,getSlotOwnerState:c,internalForwardedProps:i}=r,f=w(r,je),{component:C,slots:b={[e]:void 0},slotProps:j={[e]:void 0}}=a,m=w(a,Ae),v=b[e]||o,S=fe(j[e],n),u=me(l({className:t},f,{externalForwardedProps:e==="root"?m:void 0,externalSlotProps:S})),{props:{component:p},internalRef:g}=u,x=w(u.props,ke),A=J(g,S==null?void 0:S.ref,r.ref),d=c?c(x):{},y=l({},n,d),k=e==="root"?p||C:p,M=ge(v,l({},e==="root"&&!C&&!b[e]&&i,e!=="root"&&!b[e]&&i,x,k&&{as:k},{ref:A}),y);return Object.keys(d).forEach(L=>{delete M[L]}),[v,M]}const Me=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Pe=e=>{const{classes:r,variant:t,colorDefault:o}=e;return B({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},Se,r)},Ie=P("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:l({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),we=P("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Re=P(Ce,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});function Le({crossOrigin:e,referrerPolicy:r,src:t,srcSet:o}){const[n,a]=h.useState(!1);return h.useEffect(()=>{if(!t&&!o)return;a(!1);let c=!0;const i=new Image;return i.onload=()=>{c&&a("loaded")},i.onerror=()=>{c&&a("error")},i.crossOrigin=e,i.referrerPolicy=r,i.src=t,o&&(i.srcset=o),()=>{c=!1}},[e,r,t,o]),n}const Ne=h.forwardRef(function(r,t){const o=z({props:r,name:"MuiAvatar"}),{alt:n,children:a,className:c,component:i="div",slots:f={},slotProps:C={},imgProps:b,sizes:j,src:m,srcSet:v,variant:S="circular"}=o,u=w(o,Me);let p=null;const g=Le(l({},b,{src:m,srcSet:v})),x=m||v,A=x&&g!=="error",d=l({},o,{colorDefault:!A,component:i,variant:S}),y=Pe(d),[k,M]=F("img",{className:y.img,elementType:we,externalForwardedProps:{slots:f,slotProps:{img:l({},b,C.img)}},additionalProps:{alt:n,src:m,srcSet:v,sizes:j},ownerState:d});return A?p=s.jsx(k,l({},M)):a||a===0?p=a:x&&n?p=n[0]:p=s.jsx(Re,{ownerState:d,className:y.fallback}),s.jsx(Ie,l({as:i,ownerState:d,className:E(y.root,c),ref:t},u,{children:p}))}),ze=(e,r)=>l({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},r&&!e.vars&&{colorScheme:e.palette.mode}),Oe=e=>l({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Fe=(e,r=!1)=>{var t;const o={};r&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([c,i])=>{var f;o[e.getColorSchemeSelector(c).replace(/\s*&/,"")]={colorScheme:(f=i.palette)==null?void 0:f.mode}});let n=l({html:ze(e,r),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:l({margin:0},Oe(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o);const a=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return a&&(n=[n,a]),n};function Te(e){const r=z({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:o=!1}=r;return s.jsxs(h.Fragment,{children:[s.jsx(ve,{styles:n=>Fe(n,o)}),t]})}function $e(e){return $("MuiLink",e)}const Ee=T("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Q={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Be=e=>Q[e]||e,_e=({theme:e,ownerState:r})=>{const t=Be(r.color),o=D(e,`palette.${t}`,!1)||r.color,n=D(e,`palette.${t}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:ae(o,.4)},De=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Ve=e=>{const{classes:r,component:t,focusVisible:o,underline:n}=e,a={root:["root",`underline${N(n)}`,t==="button"&&"button",o&&"focusVisible"]};return B(a,$e,r)},We=P(K,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${N(t.underline)}`],t.component==="button"&&r.button]}})(({theme:e,ownerState:r})=>l({},r.underline==="none"&&{textDecoration:"none"},r.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},r.underline==="always"&&l({textDecoration:"underline"},r.color!=="inherit"&&{textDecorationColor:_e({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),r.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ee.focusVisible}`]:{outline:"auto"}})),He=h.forwardRef(function(r,t){const o=z({props:r,name:"MuiLink"}),{className:n,color:a="primary",component:c="a",onBlur:i,onFocus:f,TypographyClasses:C,underline:b="always",variant:j="inherit",sx:m}=o,v=w(o,De),{isFocusVisibleRef:S,onBlur:u,onFocus:p,ref:g}=le(),[x,A]=h.useState(!1),d=J(t,g),y=I=>{u(I),S.current===!1&&A(!1),i&&i(I)},k=I=>{p(I),S.current===!0&&A(!0),f&&f(I)},M=l({},o,{color:a,component:c,focusVisible:x,underline:b,variant:j}),L=Ve(M);return s.jsx(We,l({color:a,className:E(L.root,n),classes:C,component:c,onBlur:y,onFocus:k,ref:d,ownerState:M,variant:j,sx:[...Object.keys(Q).includes(a)?[]:[{color:a}],...Array.isArray(m)?m:[m]]},v))});var _={},Ue=ce;Object.defineProperty(_,"__esModule",{value:!0});var X=_.default=void 0,qe=Ue(ie()),Ge=s;X=_.default=(0,qe.default)((0,Ge.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"}),"LockOutlined");function Ze(e){return $("MuiAlert",e)}const q=T("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Je=R(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Ke=R(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Qe=R(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Xe=R(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ye=R(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),eo=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],oo=e=>{const{variant:r,color:t,severity:o,classes:n}=e,a={root:["root",`color${N(t||o)}`,`${r}${N(t||o)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return B(a,Ze,n)},ro=P(xe,{name:"MuiAlert",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`${t.variant}${N(t.color||t.severity)}`]]}})(({theme:e})=>{const r=e.palette.mode==="light"?V:W,t=e.palette.mode==="light"?W:V;return l({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:r(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:t(e.palette[o].light,.9),[`& .${q.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${o}Color`]:r(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${q.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}}})),...Object.entries(e.palette).filter(([,o])=>o.main&&o.dark).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:l({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)})}))]})}),to=P("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,r)=>r.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),so=P("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,r)=>r.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),G=P("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,r)=>r.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Z={success:s.jsx(Je,{fontSize:"inherit"}),warning:s.jsx(Ke,{fontSize:"inherit"}),error:s.jsx(Qe,{fontSize:"inherit"}),info:s.jsx(Xe,{fontSize:"inherit"})},no=h.forwardRef(function(r,t){const o=z({props:r,name:"MuiAlert"}),{action:n,children:a,className:c,closeText:i="Close",color:f,components:C={},componentsProps:b={},icon:j,iconMapping:m=Z,onClose:v,role:S="alert",severity:u="success",slotProps:p={},slots:g={},variant:x="standard"}=o,A=w(o,eo),d=l({},o,{color:f,severity:u,variant:x,colorSeverity:f||u}),y=oo(d),k={slots:l({closeButton:C.CloseButton,closeIcon:C.CloseIcon},g),slotProps:l({},b,p)},[M,L]=F("closeButton",{elementType:be,externalForwardedProps:k,ownerState:d}),[I,Y]=F("closeIcon",{elementType:Ye,externalForwardedProps:k,ownerState:d});return s.jsxs(ro,l({role:S,elevation:0,ownerState:d,className:E(y.root,c),ref:t},A,{children:[j!==!1?s.jsx(to,{ownerState:d,className:y.icon,children:j||m[u]||Z[u]}):null,s.jsx(so,{ownerState:d,className:y.message,children:a}),n!=null?s.jsx(G,{ownerState:d,className:y.action,children:n}):null,n==null&&v?s.jsx(G,{ownerState:d,className:y.action,children:s.jsx(M,l({size:"small","aria-label":i,title:i,color:"inherit",onClick:v},L,{children:s.jsx(I,l({fontSize:"small"},Y))}))}):null]}))}),ao=""+new URL("industry4-DCW0z_sx.jpg",import.meta.url).href,lo=de({palette:{primary:{main:"#1976d2",contrastText:"#ffffff"},secondary:{main:"#ffffff",contrastText:"#1976d2"}}}),io="Admin",co="Operator",uo="Viewer",jo=()=>{const[e,r]=h.useState(""),[t,o]=h.useState(""),[n,a]=h.useState(""),[c,i]=h.useState(""),[f,C]=h.useState(!1),[b,j]=h.useState(""),m=ee(),v=oe(),S=async u=>{u.preventDefault();let p=!0;if(e?isNaN(e)?(a("Mobile number should contain only digit"),p=!1):e.toString().length!==10?(a("Mobile number length should be 10 digits"),p=!1):a(""):(a("Mobile number is required"),p=!1),!!p){C(!0);try{await re(e,t),console.log("Login successful");const g=await te(),x=g.info.role;v(se(g.info)),v(ne(x)),x===io?m("/dashboard"):x===co?m("/appsidebar1"):x===uo&&m("/appsidebar2")}catch(g){g.isAxiosError&&g.response?(console.error("Error logging in:",g.response.data.detail),alert("Login failed. Please check your credentials and try again.")):(console.error("Network error:",g),j("Network error occurred. Please try again later."))}finally{C(!1)}}};return s.jsx(ue,{theme:lo,children:s.jsx(O,{sx:{backgroundImage:`url(${ao})`,backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",objectFit:"fill"},children:s.jsxs(pe,{component:"main",maxWidth:"xs",sx:{backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"20px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",padding:"20px"},children:[s.jsx(Te,{}),s.jsxs(O,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx(Ne,{sx:{m:1,bgcolor:"primary.main"},children:s.jsx(X,{})}),s.jsx(K,{component:"h1",variant:"h5",color:"primary",children:"Sign in"}),s.jsxs(O,{component:"form",onSubmit:S,noValidate:!0,sx:{mt:1},children:[b&&s.jsx(no,{severity:"error",sx:{width:"100%"},children:b}),s.jsx(H,{margin:"normal",required:!0,fullWidth:!0,id:"mobileNumber",label:"Mobile Number",name:"mobileNumber",autoComplete:"mobileNumber",autoFocus:!0,value:e,onChange:u=>r(u.target.value),error:!!n,helperText:n,sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"primary.main"}},"& .MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)","&.Mui-focused":{color:"primary.main"}}}}),s.jsx(H,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:t,onChange:u=>o(u.target.value),error:!!c,helperText:c,sx:{"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"primary.main"}},"& .MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)","&.Mui-focused":{color:"primary.main"}}}}),s.jsx(ye,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",sx:{mt:3,mb:2},disabled:f,children:f?s.jsx(he,{size:24,color:"secondary"}):"Sign In"}),s.jsx(U,{container:!0,children:s.jsx(U,{item:!0,xs:!0,children:s.jsx(He,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]})]})})})};export{jo as default};
