import{g as f,a as $,s as d,k as o,j as k,n as x,m,d as y,_ as C,b as l,e as z,f as R,r as j,i as _}from"./createSvgIcon-CPmCxJRd.js";import{r as M,j as n}from"./index-BOrs9Cmb.js";import{S as B}from"./FormControlLabel-DOo0s4Nv.js";function D(t){return $("MuiSwitch",t)}const e=f("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),E=["className","color","edge","size","sx"],I=t=>{const{classes:a,edge:s,size:r,color:p,checked:u,disabled:h}=t,g={root:["root",s&&`edge${o(s)}`,`size${o(r)}`],switchBase:["switchBase",`color${o(p)}`,u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=R(g,D,a);return l({},a,v)},O=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,s.edge&&a[`edge${o(s.edge)}`],a[`size${o(s.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${e.thumb}`]:{width:16,height:16},[`& .${e.switchBase}`]:{padding:4,[`&.${e.checked}`]:{transform:"translateX(16px)"}}}}]}),T=d(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.switchBase,{[`& .${e.input}`]:a.input},s.color!=="default"&&a[`color${o(s.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${e.checked}`]:{transform:"translateX(20px)"},[`&.${e.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${e.checked} + .${e.track}`]:{opacity:.5},[`&.${e.disabled} + .${e.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${e.input}`]:{left:"-100%",width:"300%"}}),({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:k(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(([,a])=>a.main&&a.light).map(([a])=>({props:{color:a},style:{[`&.${e.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:k(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${e.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?x(t.palette[a].main,.62):m(t.palette[a].main,.55)}`}},[`&.${e.checked} + .${e.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]})),N=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),P=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),F=M.forwardRef(function(a,s){const r=y({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:g="medium",sx:v}=r,S=C(r,E),i=l({},r,{color:u,edge:h,size:g}),c=I(i),b=n.jsx(P,{className:c.thumb,ownerState:i});return n.jsxs(O,{className:z(c.root,p),sx:v,ownerState:i,children:[n.jsx(T,l({type:"checkbox",icon:b,checkedIcon:b,ref:s,ownerState:i},S,{classes:l({},c,{root:c.switchBase})})),n.jsx(N,{className:c.track,ownerState:i})]})});var w={},U=_;Object.defineProperty(w,"__esModule",{value:!0});var q=w.default=void 0,L=U(j()),A=n;q=w.default=(0,L.default)((0,A.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");export{F as S,q as d};
