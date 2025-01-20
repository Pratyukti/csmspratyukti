import{r as i,P as E,j as o,D as k}from"./index-BK3-NH0U.js";import{d as Z,E as ee}from"./jspdf.plugin.autotable-TM5SV-yI.js";import{E as te}from"./exceljs.min-ydjTcBqg.js";import{R as se}from"./index-CVRXfePl.js";import{B as u}from"./Box-BMscNp0X.js";import{P as oe,T as ae,I}from"./IconButton-DaRbuSTx.js";import{T as ne}from"./TextField-B7uaY3nt.js";import{c as L,T as re,a as N,v as A}from"./TableSortLabel-DEMI3CSJ.js";import{T as ie,a as ce,e as le,c as R,d,b as de}from"./TableRow-oYFPfLxG.js";import{f as me}from"./format-cwXK75ha.js";import"./createSvgIcon-DOtjgECc.js";import"./DefaultLayout-C71WRbXJ.js";import"./index.esm-D8fMK9nJ.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BYNFPXcK.js";const q=[{id:"employee_id",numeric:!1,disablePadding:!0,label:"Employee Code"},{id:"employee_name",numeric:!0,disablePadding:!1,label:"Employee Name"}];function Se(){const[f,B]=i.useState("asc"),[g,H]=i.useState("employee_id"),[m,T]=i.useState(0),[p,F]=i.useState(5),[h,O]=i.useState([]),[x,M]=i.useState(""),[y,W]=i.useState([]),[b,U]=i.useState([]);i.useEffect(()=>{(async()=>{try{const r=(await k.get("/item/getAll/")).data.filter(e=>e.item_type.item_type_id===2).map(e=>({id:e.item_name,label:e.item_name,numeric:e.numeric||!1,disablePadding:e.disablePadding||!1}));U(r),console.log("Filtered headers:",r)}catch(t){console.error("Error fetching data:",t)}})()},[]);function S(a){const{order:t,orderBy:s,onRequestSort:n}=a,r=e=>c=>{n(c,e)};return o.jsx(de,{children:o.jsxs(R,{children:[q.map(e=>o.jsx(d,{align:(e.numeric,"left"),padding:e.disablePadding?"none":"normal",sortDirection:s===e.id?t:!1,children:o.jsxs(N,{active:s===e.id,direction:s===e.id?t:"asc",onClick:r(e.id),children:[e.label,s===e.id?o.jsx(u,{component:"span",sx:A,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},e.id)),b.map(e=>o.jsx(d,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:s===e.id?t:!1,children:o.jsxs(N,{active:s===e.id,direction:s===e.id?t:"asc",onClick:r(e.id),children:[e.label,s===e.id?o.jsx(u,{component:"span",sx:A,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},e.id))]})})}S.propTypes={onRequestSort:E.func.isRequired,order:E.oneOf(["asc","desc"]).isRequired,orderBy:E.string.isRequired};function v(a,t,s){return t[s]<a[s]?-1:t[s]>a[s]?1:0}function z(a,t){return a==="desc"?(s,n)=>v(s,n,t):(s,n)=>-v(s,n,t)}function J(a,t){const s=a.map((n,r)=>[n,r]);return s.sort((n,r)=>{const e=t(n[0],r[0]);return e!==0?e:n[1]-r[1]}),s.map(n=>n[0])}i.useEffect(()=>{(async()=>{try{const t=await k.get("/item/issued/?filter=PPE");console.log("API Response:",t.data);const s=t.data.data||[],n=[...new Set(s.flatMap(e=>e.items.map(c=>c.item_name)))];W(n);const r=s.map((e,c)=>{const l={};return n.forEach(_=>{var D;const j=(D=e.items)==null?void 0:D.find(P=>P.item_name===_);if(j&&j.issue_date){const P=me(new Date(j.issue_date),"dd/MM/yyyy");l[_.toLowerCase().replace(/\s+/g,"_")]=P}else l[_.toLowerCase().replace(/\s+/g,"_")]="N/A"}),{id:c+1,employee_code:e.employee_id||"N/A",employee_name:e.employee_name||"N/A",image:e.image||"N/A",...l}});console.log("Unique Item Names:",n),console.log("Formatted Data:",r),O(r)}catch(t){t.isAxiosError&&t.response?(console.error(`HTTP error! status: ${t.response.status}`),console.error("Response body:",t.response.data),alert(`Error: ${JSON.stringify(t.response.data)}`)):console.error("Error fetching data:",t)}})()},[]);const Q=(a,t)=>{B(g===t&&f==="asc"?"desc":"asc"),H(t)},$=(a,t)=>{T(t)},G=a=>{F(parseInt(a.target.value,10)),T(0)},K=()=>{const a=new ee,t=["Employee Code","Employee Name",...b.map(s=>s.label)];a.autoTable({head:[t],body:h.map(s=>[s.employee_code,s.employee_name,...y.map(n=>s[n.toLowerCase().replace(/\s+/g,"_")])])}),a.save("itemwise-ppe-reports.pdf")},V=async()=>{const a=new te.Workbook,t=a.addWorksheet("Itemwise PPE Report");t.columns=[{header:"Employee Code",key:"employee_code"},{header:"Employee Name",key:"employee_name"},...b.map(e=>({header:e.label,key:e.label.toLowerCase().replace(/\s+/g,"_")}))],h.forEach(e=>{t.addRow({employee_code:e.employee_code,employee_name:e.employee_name,...y.reduce((c,l)=>(c[l.toLowerCase().replace(/\s+/g,"_")]=e[l.toLowerCase().replace(/\s+/g,"_")],c),{})})});const s=await a.xlsx.writeBuffer(),n=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download="itemwise-ppe-reports.xlsx",document.body.appendChild(r),r.click(),document.body.removeChild(r)},X=a=>{M(a.target.value)},w=h.filter(a=>a.employee_code.toLowerCase().includes(x.toLowerCase())||a.employee_name.toLowerCase().includes(x.toLowerCase())),C=m>0?Math.max(0,(1+m)*p-w.length):0,Y=J(w,z(f,g)).slice(m*p,m*p+p);return o.jsx(u,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:o.jsxs(oe,{sx:{width:"100%",mb:2,padding:5},children:[o.jsxs(u,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[o.jsx(ae,{variant:"h6",id:"tableTitle",component:"div",children:"Item Wise PPE Report"}),o.jsxs(u,{children:[o.jsx(ne,{variant:"outlined",size:"small",placeholder:"Search...",value:x,onChange:X,sx:{marginRight:2}}),o.jsx(L,{title:"Download PDF",children:o.jsx(I,{onClick:K,children:o.jsx(Z,{})})}),o.jsx(L,{title:"Download Excel",children:o.jsx(I,{onClick:V,children:o.jsx(se,{})})})]})]}),o.jsx(ie,{children:o.jsxs(ce,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[o.jsx(S,{order:f,orderBy:g,onRequestSort:Q}),o.jsxs(le,{children:[Y.map(a=>o.jsxs(R,{hover:!0,sx:{cursor:"pointer"},children:[o.jsx(d,{component:"th",scope:"row",padding:"none",children:a.employee_code}),o.jsx(d,{align:"left",children:a.employee_name}),y.map(t=>o.jsx(d,{children:a[t.toLowerCase().replace(/\s+/g,"_")]},t))]},a.employee_code)),C>0&&o.jsx(R,{style:{height:53*C},children:o.jsx(d,{colSpan:q.length})})]})]})}),o.jsx(re,{rowsPerPageOptions:[5,10,25],component:"div",count:w.length,rowsPerPage:p,page:m,onPageChange:$,onRowsPerPageChange:G})]})})}export{Se as default};
