import{r as i,P as T,j as t,D as k}from"./index-DVtbL_0t.js";import{d as Z,E as ee}from"./jspdf.plugin.autotable-D4VBPDZ1.js";import{E as se}from"./exceljs.min-BmrKPovB.js";import{R as oe}from"./index-D-Onr921.js";import{B as u}from"./Box-Ygqwgq3O.js";import{P as te,T as ae,I}from"./IconButton-UFTozpv0.js";import{T as ne}from"./TextField-CGrINYJd.js";import{c as L,T as re,a as N,v as A}from"./TableSortLabel-HgWw1KSh.js";import{T as ie,a as ce,e as le,c as R,d,b as de}from"./TableRow-fQeN1xCn.js";import{f as me}from"./format-cwXK75ha.js";import"./createSvgIcon-B8IBcfEu.js";import"./DefaultLayout-DOYgW5dn.js";import"./index.esm-CgWz-Qcd.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BfMH1jLb.js";function Se(){const[f,q]=i.useState("asc"),[g,B]=i.useState("employee_code"),[m,E]=i.useState(0),[p,H]=i.useState(5),[h,F]=i.useState([]),[x,O]=i.useState(""),[y,W]=i.useState([]),[b,M]=i.useState([]),U=[{id:"employee_code",numeric:!1,disablePadding:!0,label:"Employee Code"},{id:"employee_name",numeric:!1,disablePadding:!1,label:"Employee Name"}];i.useEffect(()=>{(async()=>{try{const r=(await k.get("/item/getAll/")).data.filter(e=>e.item_type.item_type_id===1).map(e=>({id:e.item_name,label:e.item_name,numeric:e.numeric||!1,disablePadding:e.disablePadding||!1}));M(r),console.log("Filtered headers:",r)}catch(s){console.error("Error fetching data:",s)}})()},[]);function S(a){const{order:s,orderBy:o,onRequestSort:n}=a,r=e=>c=>{n(c,e)};return t.jsx(de,{children:t.jsxs(R,{children:[U.map(e=>t.jsx(d,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:o===e.id?s:!1,children:t.jsxs(N,{active:o===e.id,direction:o===e.id?s:"asc",onClick:r(e.id),children:[e.label,o===e.id?t.jsx(u,{component:"span",sx:A,children:s==="desc"?"sorted descending":"sorted ascending"}):null]})},e.id)),b.map(e=>t.jsx(d,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:o===e.id?s:!1,children:t.jsxs(N,{active:o===e.id,direction:o===e.id?s:"asc",onClick:r(e.id),children:[e.label,o===e.id?t.jsx(u,{component:"span",sx:A,children:s==="desc"?"sorted descending":"sorted ascending"}):null]})},e.id))]})})}S.propTypes={onRequestSort:T.func.isRequired,order:T.oneOf(["asc","desc"]).isRequired,orderBy:T.string.isRequired};function v(a,s,o){return s[o]<a[o]?-1:s[o]>a[o]?1:0}function z(a,s){return a==="desc"?(o,n)=>v(o,n,s):(o,n)=>-v(o,n,s)}function J(a,s){const o=a.map((n,r)=>[n,r]);return o.sort((n,r)=>{const e=s(n[0],r[0]);return e!==0?e:n[1]-r[1]}),o.map(n=>n[0])}i.useEffect(()=>{(async()=>{try{const s=await k.get("/item/issued/?filter=Tool");console.log("API Response:",s.data);const o=s.data.data||[],n=[...new Set(o.flatMap(e=>e.items.map(c=>c.item_name)))];W(n);const r=o.map((e,c)=>{const l={};return n.forEach(_=>{var D;const j=(D=e.items)==null?void 0:D.find(P=>P.item_name===_);if(j&&j.issue_date){const P=me(new Date(j.issue_date),"dd/MM/yyyy");l[_.toLowerCase().replace(/\s+/g,"_")]=P}else l[_.toLowerCase().replace(/\s+/g,"_")]="N/A"}),{id:c+1,employee_code:e.employee_id||"N/A",employee_name:e.employee_name||"N/A",image:e.image||"N/A",...l}});console.log("Unique Item Names:",n),console.log("Formatted Data:",r),F(r)}catch(s){s.isAxiosError&&s.response?(console.error(`HTTP error! status: ${s.response.status}`),console.error("Response body:",s.response.data),alert(`Error: ${JSON.stringify(s.response.data)}`)):console.error("Error fetching data:",s)}})()},[]);const Q=(a,s)=>{q(g===s&&f==="asc"?"desc":"asc"),B(s)},$=(a,s)=>{E(s)},G=a=>{H(parseInt(a.target.value,10)),E(0)},K=()=>{const a=new ee,s=["Employee Code","Employee Name",...b.map(o=>o.label)];a.autoTable({head:[s],body:h.map(o=>[o.employee_code,o.employee_name,...y.map(n=>o[n.toLowerCase().replace(/\s+/g,"_")])])}),a.save("itemwise-tools-reports.pdf")},V=async()=>{const a=new se.Workbook,s=a.addWorksheet("Itemwise PPE Report");s.columns=[{header:"Employee Code",key:"employee_code"},{header:"Employee Name",key:"employee_name"},...b.map(e=>({header:e.label,key:e.label.toLowerCase().replace(/\s+/g,"_")}))],h.forEach(e=>{s.addRow({employee_code:e.employee_code,employee_name:e.employee_name,...y.reduce((c,l)=>(c[l.toLowerCase().replace(/\s+/g,"_")]=e[l.toLowerCase().replace(/\s+/g,"_")],c),{})})});const o=await a.xlsx.writeBuffer(),n=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download="itemwise-tools-reports.xlsx",document.body.appendChild(r),r.click(),document.body.removeChild(r)},X=a=>{O(a.target.value)},w=h.filter(a=>a.employee_code.toLowerCase().includes(x.toLowerCase())||a.employee_name.toLowerCase().includes(x.toLowerCase())),C=m>0?Math.max(0,(1+m)*p-w.length):0,Y=J(w,z(f,g)).slice(m*p,m*p+p);return t.jsx(u,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:t.jsxs(te,{sx:{width:"100%",mb:2,padding:5},children:[t.jsxs(u,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[t.jsx(ae,{variant:"h6",id:"tableTitle",component:"div",children:"Item Wise Tool Report"}),t.jsxs(u,{children:[t.jsx(ne,{variant:"outlined",size:"small",placeholder:"Search...",value:x,onChange:X,sx:{marginRight:2}}),t.jsx(L,{title:"Download PDF",children:t.jsx(I,{onClick:K,children:t.jsx(Z,{})})}),t.jsx(L,{title:"Download Excel",children:t.jsx(I,{onClick:V,children:t.jsx(oe,{})})})]})]}),t.jsx(ie,{children:t.jsxs(ce,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[t.jsx(S,{order:f,orderBy:g,onRequestSort:Q}),t.jsxs(le,{children:[Y.map(a=>t.jsxs(R,{hover:!0,sx:{cursor:"pointer"},children:[t.jsx(d,{component:"th",scope:"row",padding:"none",children:a.employee_code}),t.jsx(d,{align:"left",children:a.employee_name}),y.map(s=>t.jsx(d,{children:a[s.toLowerCase().replace(/\s+/g,"_")]},s))]},a.id)),C>0&&t.jsx(R,{style:{height:(dense?33:53)*C},children:t.jsx(d,{colSpan:6})})]})]})}),t.jsx(re,{rowsPerPageOptions:[5,10,25],component:"div",count:w.length,rowsPerPage:p,page:m,onPageChange:$,onRowsPerPageChange:G})]})})}export{Se as default};
