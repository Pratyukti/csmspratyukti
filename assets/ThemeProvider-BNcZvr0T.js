import{b as i,T as p,D as v,_ as E,p as l}from"./createSvgIcon-mHd0nWzi.js";import{r as m,j as u}from"./index-DWg4weKv.js";import{u as P}from"./Box-FbFt6g1K.js";import{R as _}from"./IconButton-CUj8adgG.js";const h=m.createContext(null);function a(){return m.useContext(h)}const j=typeof Symbol=="function"&&Symbol.for,y=j?Symbol.for("mui.nested"):"__THEME_NESTED__";function b(e,t){return typeof t=="function"?t(e):i({},e,t)}function g(e){const{children:t,theme:n}=e,o=a(),c=m.useMemo(()=>{const r=o===null?n:b(o,n);return r!=null&&(r[y]=o!==null),r},[n,o]);return u.jsx(h.Provider,{value:c,children:t})}const f={};function d(e,t,n,o=!1){return m.useMemo(()=>{const c=e&&t[e]||t;if(typeof n=="function"){const r=n(c),s=e?i({},t,{[e]:r}):r;return o?()=>s:s}return e?i({},t,{[e]:n}):i({},t,n)},[e,t,n,o])}function M(e){const{children:t,theme:n,themeId:o}=e,c=P(f),r=a()||f,s=d(o,c,n),x=d(o,r,n,!0),T=s.direction==="rtl";return u.jsx(g,{theme:x,children:u.jsx(p.Provider,{value:s,children:u.jsx(_,{value:T,children:u.jsx(v,{value:s==null?void 0:s.components,children:t})})})})}const S=["theme"];function R(e){let{theme:t}=e,n=E(e,S);const o=t[l];return u.jsx(M,i({},n,{themeId:o?l:void 0,theme:o||t}))}export{R as T};
