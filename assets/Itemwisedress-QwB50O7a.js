import{r as c,P as R,j as a,D as v}from"./index-DVtbL_0t.js";import{d as Y,E as Z}from"./jspdf.plugin.autotable-D4VBPDZ1.js";import{E as ee}from"./exceljs.min-BmrKPovB.js";import{R as se}from"./index-D-Onr921.js";import{B as g}from"./Box-Ygqwgq3O.js";import{P as te,T as oe,I as k}from"./IconButton-UFTozpv0.js";import{T as ae}from"./TextField-CGrINYJd.js";import{c as I,T as ne,a as N,v as A}from"./TableSortLabel-HgWw1KSh.js";import{T as re,a as ie,e as ce,c as E,d as p,b as de}from"./TableRow-fQeN1xCn.js";import{f as le}from"./format-cwXK75ha.js";import"./createSvgIcon-B8IBcfEu.js";import"./DefaultLayout-DOYgW5dn.js";import"./index.esm-CgWz-Qcd.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BfMH1jLb.js";const me=[{id:"employee_code",numeric:!1,disablePadding:!0,label:"Employee Code"},{id:"employee_name",numeric:!0,disablePadding:!1,label:"Employee Name"}];function Se(){const[h,q]=c.useState("asc"),[x,B]=c.useState("employee_code"),[u,T]=c.useState(0),[f,H]=c.useState(5),[y,F]=c.useState([]),[m,O]=c.useState(""),[w,M]=c.useState([]),[b,W]=c.useState([]);c.useEffect(()=>{(async()=>{try{const r=(await v.get("/item/getAll/")).data.filter(e=>e.item_type.item_type_id===3).map(e=>({id:e.item_name,label:e.item_name,numeric:e.numeric||!1,disablePadding:e.disablePadding||!1}));W(r),console.log("Filtered headers:",r)}catch(s){console.error("Error fetching data:",s)}})()},[]);function S(t){const{order:s,orderBy:o,onRequestSort:n}=t,r=e=>i=>{n(i,e)};return a.jsx(de,{children:a.jsxs(E,{children:[me.map(e=>a.jsx(p,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:o===e.id?s:!1,children:a.jsxs(N,{active:o===e.id,direction:o===e.id?s:"asc",onClick:r(e.id),children:[e.label,o===e.id?a.jsx(g,{component:"span",sx:A,children:s==="desc"?"sorted descending":"sorted ascending"}):null]})},e.id)),b.map(e=>a.jsx(p,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:o===e.id?s:!1,children:a.jsxs(N,{active:o===e.id,direction:o===e.id?s:"asc",onClick:r(e.id),children:[e.label,o===e.id?a.jsx(g,{component:"span",sx:A,children:s==="desc"?"sorted descending":"sorted ascending"}):null]})},e.id))]})})}S.propTypes={onRequestSort:R.func.isRequired,order:R.oneOf(["asc","desc"]).isRequired,orderBy:R.string.isRequired};function C(t,s,o){return s[o]<t[o]?-1:s[o]>t[o]?1:0}function U(t,s){return t==="desc"?(o,n)=>C(o,n,s):(o,n)=>-C(o,n,s)}function z(t,s){const o=t.map((n,r)=>[n,r]);return o.sort((n,r)=>{const e=s(n[0],r[0]);return e!==0?e:n[1]-r[1]}),o.map(n=>n[0])}c.useEffect(()=>{(async()=>{try{const s=await v.get("/item/issued/?filter=Dress");console.log("API Response:",s.data);const o=s.data.data||[],n=[...new Set(o.flatMap(e=>e.items.map(i=>i.item_name)))];M(n);const r=o.map((e,i)=>{const d={};return n.forEach(l=>{var D;const _=(D=e.items)==null?void 0:D.find(P=>P.item_name===l);if(_&&_.issue_date){const P=le(new Date(_.issue_date),"dd/MM/yyyy");d[l.toLowerCase().replace(/\s+/g,"_")]=P}else d[l.toLowerCase().replace(/\s+/g,"_")]="N/A"}),{id:i+1,employee_code:e.employee_id||"N/A",employee_name:e.employee_name||"N/A",image:e.image||"N/A",...d}});console.log("Unique Item Names:",n),console.log("Formatted Data:",r),F(r)}catch(s){s.isAxiosError&&s.response?(console.error(`HTTP error! status: ${s.response.status}`),console.error("Response body:",s.response.data),alert(`Error: ${JSON.stringify(s.response.data)}`)):console.error("Error fetching data:",s)}})()},[]);const J=(t,s)=>{q(x===s&&h==="asc"?"desc":"asc"),B(s)},Q=(t,s)=>{T(s)},$=t=>{H(parseInt(t.target.value,10)),T(0)},G=()=>{const t=new Z,s=["Employee Code","Employee Name",...b.map(o=>o.label)];t.autoTable({head:[s],body:y.map(o=>[o.employee_code,o.employee_name,...w.map(n=>o[n.toLowerCase().replace(/\s+/g,"_")])])}),t.save("itemwise-ppe-reports.pdf")},K=async()=>{const t=new ee.Workbook,s=t.addWorksheet("Itemwise PPE Report"),o=["Employee Code","Employee Name",...b.map(i=>i.label)];s.addRow(o),y.forEach(i=>{const d=[i.employee_code,i.employee_name,...w.map(l=>i[l.toLowerCase().replace(/\s+/g,"_")])];s.addRow(d)}),s.columns.forEach(i=>{const d=Math.max(...i.values.map(l=>l?l.toString().length:0));i.width=d<10?10:d});const n=await t.xlsx.writeBuffer(),r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),e=document.createElement("a");e.href=URL.createObjectURL(r),e.download="itemwise-ppe-reports.xlsx",e.click()},V=t=>{O(t.target.value)},j=y.filter(t=>t.employee_code.toLowerCase().includes(m.toLowerCase())||t.employee_name.toLowerCase().includes(m.toLowerCase())||t.dress.toLowerCase().includes(m.toLowerCase())||t.jacket.toLowerCase().includes(m.toLowerCase())||t.reflectingjacket.toLowerCase().includes(m.toLowerCase())||t.raincoat.toLowerCase().includes(m.toLowerCase())),L=u>0?Math.max(0,(1+u)*f-j.length):0,X=z(j,U(h,x)).slice(u*f,u*f+f);return a.jsx(g,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:a.jsxs(te,{sx:{width:"100%",mb:2,padding:5},children:[a.jsxs(g,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[a.jsx(oe,{variant:"h6",id:"tableTitle",component:"div",children:"Item Wise Dress Report"}),a.jsxs(g,{children:[a.jsx(ae,{variant:"outlined",size:"small",placeholder:"Search...",value:m,onChange:V,sx:{marginRight:2}}),a.jsx(I,{title:"Download PDF",children:a.jsx(k,{onClick:G,children:a.jsx(Y,{})})}),a.jsx(I,{title:"Download Excel",children:a.jsx(k,{onClick:K,children:a.jsx(se,{})})})]})]}),a.jsx(re,{children:a.jsxs(ie,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[a.jsx(S,{order:h,orderBy:x,onRequestSort:J}),a.jsxs(ce,{children:[X.map(t=>a.jsxs(E,{hover:!0,sx:{cursor:"pointer"},children:[a.jsx(p,{component:"th",scope:"row",padding:"none",children:t.employee_code}),a.jsx(p,{align:"right",children:t.employee_name}),w.map(s=>a.jsx(p,{children:t[s.toLowerCase().replace(/\s+/g,"_")]},s))]},t.employee_code)),L>0&&a.jsx(E,{style:{height:53*L},children:a.jsx(p,{colSpan:6})})]})]})}),a.jsx(ne,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:f,page:u,onPageChange:Q,onRowsPerPageChange:$})]})})}export{Se as default};
