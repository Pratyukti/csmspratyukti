import{B as ee,b as i,F as A,E as D,I as oe,J as se,K as te,C as re,_ as E,e as I,L as O,f as w,a as U,g as W,s as q,q as ne,z as ae,k as V,d as H}from"./createSvgIcon-mHd0nWzi.js";import{r as L,j as x}from"./index-DWg4weKv.js";import{b as le,u as J,f as ie,T as G}from"./IconButton-CUj8adgG.js";import{s as ce,u as de}from"./styled-B36LBf5Y.js";const ue=["component","direction","spacing","divider","children","className","useFlexGap"],pe=ee(),me=ce("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function fe(e){return de({props:e,name:"MuiStack",defaultTheme:pe})}function be(e,o){const t=L.Children.toArray(e).filter(Boolean);return t.reduce((r,a,s)=>(r.push(a),s<t.length-1&&r.push(L.cloneElement(o,{key:`separator-${s}`})),r),[])}const he=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ge=({ownerState:e,theme:o})=>{let t=i({display:"flex",flexDirection:"column"},A({theme:o},D({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=oe(o),a=Object.keys(o.breakpoints.values).reduce((n,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(n[l]=!0),n),{}),s=D({values:e.direction,base:a}),u=D({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((n,l,g)=>{if(!s[n]){const k=l>0?s[g[l-1]]:"column";s[n]=k}}),t=se(t,A({theme:o},u,(n,l)=>e.useFlexGap?{gap:O(r,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${he(l?s[l]:e.direction)}`]:O(r,n)}}))}return t=te(o.breakpoints,t),t};function ye(e={}){const{createStyledComponent:o=me,useThemeProps:t=fe,componentName:r="MuiStack"}=e,a=()=>w({root:["root"]},n=>U(r,n),{}),s=o(ge);return L.forwardRef(function(n,l){const g=t(n),y=re(g),{component:k="div",direction:F="column",spacing:j=0,divider:R,children:c,className:C,useFlexGap:p=!1}=y,B=E(y,ue),$={direction:F,spacing:j,useFlexGap:p},P=a();return x.jsx(s,i({as:k,ownerState:$,ref:l,className:I(P.root,C)},B,{children:R?be(c,R):c}))})}function ke(e){return U("PrivateSwitchBase",e)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Pe=e=>{const{classes:o,checked:t,disabled:r,edge:a}=e,s={root:["root",t&&"checked",r&&"disabled",a&&`edge${V(a)}`],input:["input"]};return w(s,ke,o)},ve=q(le)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),xe=q("input",{shouldForwardProp:ne})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ie=L.forwardRef(function(o,t){const{autoFocus:r,checked:a,checkedIcon:s,className:u,defaultChecked:h,disabled:n,disableFocusRipple:l=!1,edge:g=!1,icon:y,id:k,inputProps:F,inputRef:j,name:R,onBlur:c,onChange:C,onFocus:p,readOnly:B,required:$=!1,tabIndex:P,type:m,value:S}=o,f=E(o,Ce),[v,K]=ae({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),b=J(),Q=d=>{p&&p(d),b&&b.onFocus&&b.onFocus(d)},X=d=>{c&&c(d),b&&b.onBlur&&b.onBlur(d)},Y=d=>{if(d.nativeEvent.defaultPrevented)return;const z=d.target.checked;K(z),C&&C(d,z)};let N=n;b&&typeof N>"u"&&(N=b.disabled);const Z=m==="checkbox"||m==="radio",M=i({},o,{checked:v,disabled:N,disableFocusRipple:l,edge:g}),_=Pe(M);return x.jsxs(ve,i({component:"span",className:I(_.root,u),centerRipple:!0,focusRipple:!l,disabled:N,tabIndex:null,role:void 0,onFocus:Q,onBlur:X,ownerState:M,ref:t},f,{children:[x.jsx(xe,i({autoFocus:r,checked:a,defaultChecked:h,className:_.input,disabled:N,id:Z?k:void 0,name:R,onChange:Y,readOnly:B,ref:j,required:$,ownerState:M,tabIndex:P,type:m},m==="checkbox"&&S===void 0?{}:{value:S},F)),v?s:y]}))}),Fe=ye({createStyledComponent:q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>H({props:e,name:"MuiStack"})});function Re(e){return U("MuiFormControlLabel",e)}const T=W("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Be=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Se=e=>{const{classes:o,disabled:t,labelPlacement:r,error:a,required:s}=e,u={root:["root",t&&"disabled",`labelPlacement${V(r)}`,a&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return w(u,Re,o)},Le=q("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${T.label}`]:o.label},o.root,o[`labelPlacement${V(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>i({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${T.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${T.label}`]:{[`&.${T.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),je=q("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${T.error}`]:{color:(e.vars||e).palette.error.main}})),Me=L.forwardRef(function(o,t){var r,a;const s=H({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:h={},control:n,disabled:l,disableTypography:g,label:y,labelPlacement:k="end",required:F,slotProps:j={}}=s,R=E(s,Be),c=J(),C=(r=l??n.props.disabled)!=null?r:c==null?void 0:c.disabled,p=F??n.props.required,B={disabled:C,required:p};["checked","name","onChange","value","inputRef"].forEach(v=>{typeof n.props[v]>"u"&&typeof s[v]<"u"&&(B[v]=s[v])});const $=ie({props:s,muiFormControl:c,states:["error"]}),P=i({},s,{disabled:C,labelPlacement:k,required:p,error:$.error}),m=Se(P),S=(a=j.typography)!=null?a:h.typography;let f=y;return f!=null&&f.type!==G&&!g&&(f=x.jsx(G,i({component:"span"},S,{className:I(m.label,S==null?void 0:S.className),children:f}))),x.jsxs(Le,i({className:I(m.root,u),ownerState:P,ref:t},R,{children:[L.cloneElement(n,B),p?x.jsxs(Fe,{display:"block",children:[f,x.jsxs(je,{ownerState:P,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}):f]}))});export{Me as F,Ie as S};
