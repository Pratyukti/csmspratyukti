import{r as l,j as e,P as x,D as O}from"./index-gUoKkNxd.js";import{d as N,E as A}from"./jspdf.plugin.autotable-DeN14fQE.js";import{B as g}from"./Box-BYukJ6PQ.js";import{P as H,T as B,I}from"./IconButton-74Ti2Z6n.js";import{T as M}from"./TextField-CxtPkCSH.js";import{c as z,T as F,a as Q,v as $}from"./TableSortLabel-D0B-k8LO.js";import{T as J,a as U,e as W,c as y,d as p,b as G}from"./TableRow-CG4wW5BX.js";import{f as K}from"./format-cwXK75ha.js";import"./createSvgIcon-4eVnW2NG.js";import"./DefaultLayout-CV3xtvX9.js";import"./index.esm-BHa-FV8S.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BJ5qgQ0n.js";const V=[{id:"slno",numeric:!1,disablePadding:!0,label:"SL NO"},{id:"employee_id",numeric:!0,disablePadding:!1,label:"Employee Code"},{id:"employee_name",numeric:!0,disablePadding:!1,label:"Employee Name"},{id:"checkup_date",numeric:!0,disablePadding:!1,label:"Checkup Date"}];function _(i){const{order:r,orderBy:s,onRequestSort:n}=i,c=t=>d=>{n(d,t)};return e.jsx(G,{children:e.jsx(y,{children:V.map(t=>e.jsx(p,{align:t.numeric?"right":"left",padding:t.disablePadding?"none":"normal",sortDirection:s===t.id?r:!1,children:e.jsxs(Q,{active:s===t.id,direction:s===t.id?r:"asc",onClick:c(t.id),children:[t.label,s===t.id?e.jsx(g,{component:"span",sx:$,children:r==="desc"?"sorted descending":"sorted ascending"}):null]})},t.id))})})}_.propTypes={onRequestSort:x.func.isRequired,order:x.oneOf(["asc","desc"]).isRequired,orderBy:x.string.isRequired};function T(i,r,s){return r[s]<i[s]?-1:r[s]>i[s]?1:0}function X(i,r){return i==="desc"?(s,n)=>T(s,n,r):(s,n)=>-T(s,n,r)}function Y(i,r){const s=i.map((n,c)=>[n,c]);return s.sort((n,c)=>{const t=r(n[0],c[0]);return t!==0?t:n[1]-c[1]}),s.map(n=>n[0])}function me(){const[i,r]=l.useState("asc"),[s,n]=l.useState("employee_id"),[c,t]=l.useState(0),[d,S]=l.useState(5),[b,R]=l.useState([]),[m,w]=l.useState("");l.useEffect(()=>{(async()=>{try{const q=(await O.get("/reports/organization/medicalcheckup/employeeinfo/")).data.data.map((h,P)=>({id:P+1,slno:P+1,employee_id:h.employee_id,employee_name:h.employee_name,checkup_date:h.checkup_date?K(new Date(h.checkup_date),"dd/MM/yyyy"):"N/A"}));R(q)}catch(o){if(o.isAxiosError&&o.response){console.error(`HTTP error! status: ${o}`);const u=JSON.stringify(o.response.data);console.error("Response body:",u),alert(`Error: ${u}`)}console.error("Error fetching data:",o)}})()},[]);const C=(a,o)=>{r(s===o&&i==="asc"?"desc":"asc"),n(o)},v=(a,o)=>{t(o)},k=a=>{S(parseInt(a.target.value,10)),t(0)},D=()=>{const a=new A;a.autoTable({head:[["SL NO","Employee Code","Employee Name","Checkup Date"]],body:b.map(o=>[o.slno,o.employee_id,o.employee_name,o.checkup_date])}),a.save("medical-checkup-reports.pdf")},E=a=>{w(a.target.value)},f=b.filter(a=>a.employee_id.toLowerCase().includes(m.toLowerCase())||a.employee_name.toLowerCase().includes(m.toLowerCase())||a.checkup_date.toLowerCase().includes(m.toLowerCase())),j=c>0?Math.max(0,(1+c)*d-f.length):0,L=Y(f,X(i,s)).slice(c*d,c*d+d);return e.jsx(g,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:e.jsxs(H,{sx:{width:"100%",mb:2,padding:5},children:[e.jsxs(g,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(B,{variant:"h6",id:"tableTitle",component:"div",children:"Medical Checkup Report"}),e.jsxs(g,{children:[e.jsx(M,{variant:"outlined",size:"small",placeholder:"Search...",value:m,onChange:E,sx:{marginRight:2}}),e.jsx(z,{title:"Download PDF",children:e.jsx(I,{onClick:D,children:e.jsx(N,{})})})]})]}),e.jsx(J,{children:e.jsxs(U,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[e.jsx(_,{order:i,orderBy:s,onRequestSort:C}),e.jsxs(W,{children:[L.map(a=>e.jsxs(y,{hover:!0,sx:{cursor:"pointer"},children:[e.jsx(p,{component:"th",scope:"row",padding:"none",children:a.slno}),e.jsx(p,{align:"right",children:a.employee_id}),e.jsx(p,{align:"right",children:a.employee_name}),e.jsx(p,{align:"right",children:a.checkup_date})]},a.id)),j>0&&e.jsx(y,{style:{height:53*j},children:e.jsx(p,{colSpan:5})})]})]})}),e.jsx(F,{rowsPerPageOptions:[5,10,25],component:"div",count:f.length,rowsPerPage:d,page:c,onPageChange:v,onRowsPerPageChange:k})]})})}export{me as default};
