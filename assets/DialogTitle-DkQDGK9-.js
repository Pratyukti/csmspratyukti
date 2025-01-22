import{g as h,a as b,s as u,k as x,b as s,d as D,_ as v,A as q,e as m,f as C}from"./createSvgIcon-mHd0nWzi.js";import{r as p,j as c}from"./index-DWg4weKv.js";import{B as G,M as J,P as A,d as Q,k as Z,T as oo}from"./IconButton-CUj8adgG.js";function eo(o){return b("MuiDialog",o)}const P=h("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),j=p.createContext({}),to=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ao=u(G,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),so=o=>{const{classes:e,scroll:t,maxWidth:a,fullWidth:r,fullScreen:i}=o,n={root:["root"],container:["container",`scroll${x(t)}`],paper:["paper",`paperScroll${x(t)}`,`paperWidth${x(String(a))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return C(n,eo,e)},io=u(J,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),ro=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${x(t.scroll)}`]]}})(({ownerState:o})=>s({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),lo=u(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${x(t.scroll)}`],e[`paperWidth${x(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>s({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${P.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${P.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${P.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Mo=p.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialog"}),r=Q(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:d,BackdropProps:k,children:U,className:F,disableEscapeKeyDown:$=!1,fullScreen:_=!1,fullWidth:I=!1,maxWidth:L="sm",onBackdropClick:R,onClick:T,onClose:W,open:w,PaperComponent:E=A,PaperProps:B={},scroll:Y="paper",TransitionComponent:X=Z,transitionDuration:N=i,TransitionProps:z}=a,H=v(a,to),f=s({},a,{disableEscapeKeyDown:$,fullScreen:_,fullWidth:I,maxWidth:L,scroll:Y}),y=so(f),M=p.useRef(),K=g=>{M.current=g.target===g.currentTarget},O=g=>{T&&T(g),M.current&&(M.current=null,R&&R(g),W&&W(g,"backdropClick"))},S=q(l),V=p.useMemo(()=>({titleId:S}),[S]);return c.jsx(io,s({className:m(y.root,F),closeAfterTransition:!0,components:{Backdrop:ao},componentsProps:{backdrop:s({transitionDuration:N,as:d},k)},disableEscapeKeyDown:$,onClose:W,open:w,ref:t,onClick:O,ownerState:f},H,{children:c.jsx(X,s({appear:!0,in:w,timeout:N,role:"presentation"},z,{children:c.jsx(ro,{className:m(y.container),onMouseDown:K,ownerState:f,children:c.jsx(lo,s({as:E,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":S},B,{className:m(y.paper,B.className),ownerState:f,children:c.jsx(j.Provider,{value:V,children:U})}))})}))}))});function no(o){return b("MuiDialogActions",o)}h("MuiDialogActions",["root","spacing"]);const co=["className","disableSpacing"],po=o=>{const{classes:e,disableSpacing:t}=o;return C({root:["root",!t&&"spacing"]},no,e)},uo=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,!t.disableSpacing&&e.spacing]}})(({ownerState:o})=>s({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),So=p.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1}=a,n=v(a,co),l=s({},a,{disableSpacing:i}),d=po(l);return c.jsx(uo,s({className:m(d.root,r),ownerState:l,ref:t},n))});function go(o){return b("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);function xo(o){return b("MuiDialogTitle",o)}const mo=h("MuiDialogTitle",["root"]),fo=["className","dividers"],ho=o=>{const{classes:e,dividers:t}=o;return C({root:["root",t&&"dividers"]},go,e)},bo=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>s({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${mo.root} + &`]:{paddingTop:0}})),Po=p.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialogContent"}),{className:r,dividers:i=!1}=a,n=v(a,fo),l=s({},a,{dividers:i}),d=ho(l);return c.jsx(bo,s({className:m(d.root,r),ownerState:l,ref:t},n))}),Do=["className","id"],vo=o=>{const{classes:e}=o;return C({root:["root"]},xo,e)},Co=u(oo,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),$o=p.forwardRef(function(e,t){const a=D({props:e,name:"MuiDialogTitle"}),{className:r,id:i}=a,n=v(a,Do),l=a,d=vo(l),{titleId:k=i}=p.useContext(j);return c.jsx(Co,s({component:"h2",className:m(d.root,r),ownerState:l,ref:t,variant:"h6",id:i??k},n))});export{Mo as D,$o as a,Po as b,So as c};
