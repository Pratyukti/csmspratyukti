import{R as x,r as j,j as e,P as f,D as z}from"./index-UGP3FMHZ.js";import{d as J,E as U}from"./jspdf.plugin.autotable-B3lPYY0e.js";import{B as y}from"./Box-CbM13dhw.js";import{P as W,T as G,I as K}from"./IconButton-Dte1ZgIo.js";import{T as Q,a as V,e as X,c as P,d as m,b as Z}from"./TableRow-DQtWHTn5.js";import{T as ee,a as se,v as ne,b as te,c as ae}from"./TableSortLabel-byI6uh9Z.js";import{D as oe,a as ie,b as le,c as re}from"./DialogTitle-mCnyWeuu.js";import"./createSvgIcon-CSQ9e_07.js";import"./DefaultLayout-BWJbGzKZ.js";import"./index.esm-CqZRp1Y0.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-M2P_bjZl.js";function E(c,i,a){return i[a]<c[a]?-1:i[a]>c[a]?1:0}function ce(c,i){return c==="desc"?(a,l)=>E(a,l,i):(a,l)=>-E(a,l,i)}function de(c,i){const a=c.map((l,d)=>[l,d]);return a.sort((l,d)=>{const n=i(l[0],d[0]);return n!==0?n:l[1]-d[1]}),a.map(l=>l[0])}const D=[{id:"slno",numeric:!1,disablePadding:!0,label:"SL NO."},{id:"employee_name",numeric:!1,disablePadding:!0,label:"Employee Name"},{id:"employee_id",numeric:!0,disablePadding:!1,label:"Employee Id"},{id:"email",numeric:!0,disablePadding:!1,label:"Email"},{id:"phonenumber",numeric:!0,disablePadding:!1,label:"Phone Number"},{id:"address",numeric:!0,disablePadding:!1,label:"Address"}];function v(c){const{order:i,orderBy:a,onRequestSort:l}=c,d=n=>b=>{l(b,n)};return e.jsx(Z,{children:e.jsx(P,{children:D.map(n=>e.jsx(m,{align:(n.numeric,"center"),padding:n.disablePadding?"none":"normal",sortDirection:a===n.id?i:!1,children:e.jsxs(se,{active:a===n.id,direction:a===n.id?i:"asc",onClick:d(n.id),children:[n.label,a===n.id?e.jsx(y,{component:"span",sx:ne,children:i==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id))})})}v.propTypes={order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired,onRequestSort:f.func.isRequired};function w(c){const{numSelected:i,onPdfDownload:a}=c;return e.jsxs(te,{children:[e.jsx(G,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"EmployeeRegisterReport"}),e.jsx(y,{sx:{flex:1,display:"flex",justifyContent:"flex-end"},children:e.jsx(e.Fragment,{children:e.jsx(ae,{title:"Download PDF",children:e.jsx(K,{onClick:a,children:e.jsx(J,{})})})})})]})}w.propTypes={numSelected:f.number.isRequired,onPdfDownload:f.func.isRequired};function Re(c){c.employee_id;const[i,a]=x.useState("asc"),[l,d]=x.useState("slno"),[n,b]=x.useState([]),[h,S]=x.useState(0),[g,C]=x.useState(5),[p,I]=j.useState([]),[O,_]=j.useState(!1),[k,A]=j.useState("");j.useEffect(()=>{(async()=>{try{const o=(await z.get("/employee/employees_details/")).data;console.log("result:",o);const r=o.map((u,Y)=>({slno:Y+1,address:u.address,phonenumber:u.phonenumber,email:u.email,employee_id:u.employee_id,employee_name:u.employee_name}));I(r)}catch(s){if(s.isAxiosError&&s.response){console.error(`HTTP error! status: ${s}`);const o=JSON.stringify(s.response.data);console.error("Response body:",o),alert(`Error: ${o}`)}console.error("Error fetching data:",s)}})()},[]);const q=(t,s)=>{a(l===s&&i==="asc"?"desc":"asc"),d(s)},N=t=>{if(t.target.checked){const s=p.map(o=>o.id);b(s);return}b([])},R=()=>{_(!1),A("")},M=(t,s)=>{const o=n.indexOf(s);let r=[];o===-1?r=r.concat(n,s):o===0?r=r.concat(n.slice(1)):o===n.length-1?r=r.concat(n.slice(0,-1)):o>0&&(r=r.concat(n.slice(0,o),n.slice(o+1))),b(r)},H=(t,s)=>{S(s)},L=t=>{C(parseInt(t.target.value,10)),S(0)},B=t=>n.indexOf(t)!==-1,T=h>0?Math.max(0,(1+h)*g-p.length):0,F=x.useMemo(()=>de(p,ce(i,l)).slice(h*g,h*g+g),[i,l,h,p,g]),$=()=>{const t=new U;t.autoTable({head:[["SL NO.","EMPLOYEE NAME  ","EMPLOYEE ID","EMAIL","PHONENUMBER","ADDRESS"]],body:p.map(s=>[s.slno,s.employee_name,s.employee_id,s.email,s.phonenumber,s.address])}),t.save("employee register Details")};return e.jsxs(y,{sx:{width:"100%"},children:[e.jsxs(W,{sx:{width:"100%",mb:2,padding:5},children:[e.jsx(w,{numSelected:n.length,onPdfDownload:$}),e.jsx(Q,{children:e.jsxs(V,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[e.jsx(v,{order:i,orderBy:l,onSelectAllClick:N,onRequestSort:q,rowCount:p.length}),e.jsxs(X,{children:[F.map((t,s)=>{const o=B(t.id),r=`enhanced-table-checkbox-${s}`;return e.jsxs(P,{hover:!0,onClick:u=>M(u,t.id),role:"checkbox","aria-checked":o,tabIndex:-1,selected:o,sx:{cursor:"pointer"},children:[e.jsx(m,{component:"th",id:r,scope:"row",padding:"none",children:t.slno}),e.jsx(m,{align:"center",children:t.employee_name}),e.jsx(m,{align:"center",children:t.employee_id}),e.jsx(m,{align:"left",children:t.email}),e.jsx(m,{align:"center",children:t.phonenumber}),e.jsx(m,{align:"center",children:t.address})]},t.id)}),T>0&&e.jsx(P,{style:{height:53*T},children:e.jsx(m,{colSpan:D.length})})]})]})}),e.jsx(ee,{rowsPerPageOptions:[5,10,25],component:"div",count:p.length,rowsPerPage:g,page:h,onPageChange:H,onRowsPerPageChange:L})]}),e.jsxs(oe,{open:O,onClose:R,children:[e.jsx(ie,{children:"Image Preview"}),e.jsx(le,{children:e.jsx("img",{src:k,alt:"Preview",style:{width:"400px",height:"300px",objectFit:"cover"}})}),e.jsx(re,{children:e.jsx("button",{onClick:R,style:{padding:"10px"},children:"Close"})})]})]})}export{Re as default};
