import{c as x,g as P,a as y,s as B,q as g,k as l,b as s,j as M,d as S,_,e as R,f as H}from"./createSvgIcon-BR_Pr42U.js";import{j as t,r as u}from"./index-Boe2fyA3.js";import{S as E}from"./FormControlLabel-CiMbPHO2.js";const O=x(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=x(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=x(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return y("MuiCheckbox",o)}const m=P("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:c,color:a,size:r}=o,n={root:["root",c&&"indeterminate",`color${l(a)}`,`size${l(r)}`]},d=H(n,L,e);return s({},e,d)},q=B(E,{shouldForwardProp:o=>g(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>s({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:M(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),D=t.jsx(U,{}),W=t.jsx(O,{}),w=t.jsx(V,{}),K=u.forwardRef(function(e,c){var a,r;const n=S({props:e,name:"MuiCheckbox"}),{checkedIcon:d=D,color:b="primary",icon:z=W,indeterminate:i=!1,indeterminateIcon:h=w,inputProps:I,size:p="medium",className:$}=n,j=_(n,N),k=i?h:z,C=i?h:d,v=s({},n,{color:b,indeterminate:i,size:p}),f=F(v);return t.jsx(q,s({type:"checkbox",inputProps:s({"data-indeterminate":i},I),icon:u.cloneElement(k,{fontSize:(a=k.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:p}),ownerState:v,ref:c,className:R(f.root,$)},j,{classes:f}))});export{K as C};
