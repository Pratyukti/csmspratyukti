import{r as h,R as N,j as e,P as x,D as $}from"./index-BLPjNv1m.js";import{d as M,E as _}from"./jspdf.plugin.autotable-BYLKrYA4.js";import{B as p}from"./Box-mNeZx6B-.js";import{P as J,T as W,I as G}from"./IconButton-DwbYHC3T.js";import{T as K,a as Q,e as U,c as S,d as b,b as V}from"./TableRow-CLwIKbJl.js";import{T as X,a as Y,v as Z,b as ee,c as ne}from"./TableSortLabel-BNAdqLzh.js";import{T as se}from"./TextField-BVG4z76l.js";function w(i,d,n){return d[n]<i[n]?-1:d[n]>i[n]?1:0}function te(i,d){return i==="desc"?(n,r)=>w(n,r,d):(n,r)=>-w(n,r,d)}function ae(i,d){const n=i.map((r,a)=>[r,a]);return n.sort((r,a)=>{const o=d(r[0],a[0]);return o!==0?o:r[1]-a[1]}),n.map(r=>r[0])}const y=[{id:"name",numeric:!1,disablePadding:!0,label:"Accident Type"},{id:"number",numeric:!0,disablePadding:!1,label:"Number"}];function v(i){const{order:d,orderBy:n,onRequestSort:r}=i,a=o=>u=>{r(u,o)};return e.jsx(V,{children:e.jsx(S,{children:y.map(o=>e.jsx(b,{align:o.numeric?"right":"left",padding:o.disablePadding?"6":"normal",sortDirection:n===o.id?d:!1,children:e.jsxs(Y,{active:n===o.id,direction:n===o.id?d:"asc",onClick:a(o.id),children:[o.label,n===o.id?e.jsx(p,{component:"span",sx:Z,children:d==="desc"?"sorted descending":"sorted ascending"}):null]})},o.id))})})}v.propTypes={order:x.oneOf(["asc","desc"]).isRequired,orderBy:x.string.isRequired,onRequestSort:x.func.isRequired};function C(i){const{numSelected:d,onPdfDownload:n,onSearchChange:r,searchTerm:a}=i;return e.jsxs(ee,{children:[e.jsx(W,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"Accident Report"}),e.jsxs(p,{sx:{flex:1,display:"flex",alignItems:"center"},children:[e.jsx(p,{sx:{flex:1,display:"flex",alignItems:"center",ml:"auto"},children:e.jsx(se,{variant:"outlined",label:"Search",placeholder:"Search…",value:a,onChange:r,size:"small",sx:{width:200}})}),e.jsx(p,{sx:{flex:1,display:"flex",justifyContent:"flex-end"},children:e.jsx(e.Fragment,{children:e.jsx(ne,{title:"Download PDF",children:e.jsx(G,{onClick:n,children:e.jsx(M,{})})})})})]})]})}C.propTypes={numSelected:x.number.isRequired,onPdfDownload:x.func.isRequired,onSearchChange:x.func.isRequired,searchTerm:x.string.isRequired};function he(){const[i,d]=h.useState("asc"),[n,r]=h.useState("name"),[a,o]=h.useState([]),[u,T]=h.useState(0),[m,D]=h.useState(5),[g,q]=h.useState([]),[f,A]=h.useState("");h.useEffect(()=>{(async()=>{try{const c=(await $.get("/reports/organization/accidents/")).data.data;console.log("result:",c);const l=Object.entries(c).map(([j,z],F)=>({id:F+1,name:j,number:z}));console.log(l),q(l)}catch(s){if(s.isAxiosError&&s.response){console.error(`HTTP error! status: ${s}`);const c=JSON.stringify(s.response.data);console.error("Response body:",c),alert(`Error: ${c}`)}console.error("Error fetching data:",s)}})()},[]);const E=(t,s)=>{d(n===s&&i==="asc"?"desc":"asc"),r(s)},I=(t,s)=>{const c=a.indexOf(s);let l=[];c===-1?l=l.concat(a,s):c===0?l=l.concat(a.slice(1)):c===a.length-1?l=l.concat(a.slice(0,-1)):c>0&&(l=l.concat(a.slice(0,c),a.slice(c+1))),o(l)},O=(t,s)=>{T(s)},k=t=>{D(parseInt(t.target.value,10)),T(0)},H=t=>{A(t.target.value),T(0)},B=t=>a.indexOf(t)!==-1,P=u>0?Math.max(0,(1+u)*m-g.length):0,R=N.useMemo(()=>{const t=g.filter(s=>s.name.toLowerCase().includes(f.toLowerCase())||s.number.toString().includes(f.toLowerCase()));return ae(t,te(i,n)).slice(u*m,u*m+m)},[i,n,u,g,m,f]),L=()=>{const t=new _;t.autoTable({head:[["Accident Type","Number"]],body:R.map(s=>[s.name,s.number])}),t.save("Accident_Report.pdf")};return e.jsx(p,{sx:{width:"100%"},children:e.jsxs(J,{sx:{width:"100%",mb:2},children:[e.jsx(C,{numSelected:a.length,onPdfDownload:L,onSearchChange:H,searchTerm:f}),e.jsx(K,{children:e.jsxs(Q,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[e.jsx(v,{order:i,orderBy:n,onRequestSort:E}),e.jsxs(U,{children:[R.map((t,s)=>{const c=B(t.id),l=`enhanced-table-checkbox-${s}`;return e.jsxs(S,{hover:!0,onClick:j=>I(j,t.id),role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[e.jsx(b,{component:"th",id:l,scope:"row",padding:"5px",children:t.name}),e.jsx(b,{align:"right",padding:"5px",children:t.number})]},t.id)}),P>0&&e.jsx(S,{style:{height:53*P},children:e.jsx(b,{colSpan:y.length})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:g.length,rowsPerPage:m,page:u,onPageChange:O,onRowsPerPageChange:k})]})})}export{he as A};
