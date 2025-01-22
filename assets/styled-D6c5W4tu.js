import{M as W,B as $,N as B,_ as T,O as Q,b as u,P as g,Q as q}from"./createSvgIcon-CO8B0Zx3.js";import{a as z}from"./Box-B9uti8Zu.js";function G(e){const{theme:o,name:t,props:s}=e;return!o||!o.components||!o.components[t]||!o.components[t].defaultProps?s:W(o.components[t].defaultProps,s)}function re({props:e,name:o,defaultTheme:t,themeId:s}){let r=z(t);return s&&(r=r[s]||r),G({theme:r,name:o,props:e})}const H=["ownerState"],I=["variants"],J=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function K(e){return Object.keys(e).length===0}function U(e){return typeof e=="string"&&e.charCodeAt(0)>96}function R(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const X=$(),Y=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function _({defaultTheme:e,theme:o,themeId:t}){return K(o)?e:o[t]||o}function Z(e){return e?(o,t)=>t[e]:null}function P(e,o){let{ownerState:t}=o,s=T(o,H);const r=typeof e=="function"?e(u({ownerState:t},s)):e;if(Array.isArray(r))return r.flatMap(d=>P(d,u({ownerState:t},s)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:d=[]}=r;let p=T(r,I);return d.forEach(n=>{let l=!0;typeof n.props=="function"?l=n.props(u({ownerState:t},s,t)):Object.keys(n.props).forEach(h=>{(t==null?void 0:t[h])!==n.props[h]&&s[h]!==n.props[h]&&(l=!1)}),l&&(Array.isArray(p)||(p=[p]),p.push(typeof n.style=="function"?n.style(u({ownerState:t},s,t)):n.style))}),p}return r}function ee(e={}){const{themeId:o,defaultTheme:t=X,rootShouldForwardProp:s=R,slotShouldForwardProp:r=R}=e,d=a=>g(u({},a,{theme:_(u({},a,{defaultTheme:t,themeId:o}))}));return d.__mui_systemSx=!0,(a,p={})=>{B(a,i=>i.filter(f=>!(f!=null&&f.__mui_systemSx)));const{name:n,slot:l,skipVariantsResolver:h,skipSx:j,overridesResolver:A=Z(Y(l))}=p,N=T(p,J),V=h!==void 0?h:l&&l!=="Root"&&l!=="root"||!1,E=j||!1;let L,v=R;l==="Root"||l==="root"?v=s:l?v=r:U(a)&&(v=void 0);const x=Q(a,u({shouldForwardProp:v,label:L},N)),F=i=>typeof i=="function"&&i.__emotion_real!==i||q(i)?f=>P(i,u({},f,{theme:_({theme:f.theme,defaultTheme:t,themeId:o})})):i,k=(i,...f)=>{let O=F(i);const y=f?f.map(F):[];n&&A&&y.push(m=>{const c=_(u({},m,{defaultTheme:t,themeId:o}));if(!c.components||!c.components[n]||!c.components[n].styleOverrides)return null;const S=c.components[n].styleOverrides,w={};return Object.entries(S).forEach(([M,D])=>{w[M]=P(D,u({},m,{theme:c}))}),A(m,w)}),n&&!V&&y.push(m=>{var c;const S=_(u({},m,{defaultTheme:t,themeId:o})),w=S==null||(c=S.components)==null||(c=c[n])==null?void 0:c.variants;return P({variants:w},u({},m,{theme:S}))}),E||y.push(d);const C=y.length-f.length;if(Array.isArray(i)&&C>0){const m=new Array(C).fill("");O=[...i,...m],O.raw=[...i.raw,...m]}const b=x(O,...y);return a.muiName&&(b.muiName=a.muiName),b};return x.withConfig&&(k.withConfig=x.withConfig),k}}const ne=ee();export{ne as s,re as u};
