import{r as d,R as Y,j as e,P as f,D as Q}from"./index-BOrs9Cmb.js";import{B as v}from"./Box-DpLwRB0J.js";import{P as G,T as W,I as xe}from"./IconButton-SZuj0VD6.js";import{T as A,a as H,e as L,c as x,d as u,b as M}from"./TableRow-BtW6bwTe.js";import{T as K,a as V,v as X,b as Z,c as je}from"./TableSortLabel-CsDftX1q.js";import{D as ee,a as se,b as te,c as ne}from"./DialogTitle-Dh-rii3b.js";import{B as re}from"./Button-Be_xG8_1.js";import{d as fe,E as be}from"./jspdf.plugin.autotable-BKYhmki5.js";import{T as ye}from"./TextField-D9XwQG_q.js";import"./createSvgIcon-CPmCxJRd.js";import"./DefaultLayout-CiqnaNuY.js";import"./index.esm-DYk-UL72.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BjxhlnSS.js";function oe(r,o,s){return o[s]<r[s]?-1:o[s]>r[s]?1:0}function Se(r,o){return r==="desc"?(s,n)=>oe(s,n,o):(s,n)=>-oe(s,n,o)}function Pe(r,o){const s=r.map((n,c)=>[n,c]);return s.sort((n,c)=>{const t=o(n[0],c[0]);return t!==0?t:n[1]-c[1]}),s.map(n=>n[0])}const Re=[{id:"item_name",numeric:!1,disablePadding:!0,label:"Item Name"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"}];function de(r){const{order:o,orderBy:s,onRequestSort:n}=r,c=t=>l=>{n(l,t)};return e.jsx(M,{children:e.jsx(x,{children:Re.map(t=>e.jsx(u,{align:t.numeric?"right":"left",padding:t.disablePadding?"4":"normal",sortDirection:s===t.id?o:!1,children:e.jsxs(V,{active:s===t.id,direction:s===t.id?o:"asc",onClick:c(t.id),children:[t.label,s===t.id?e.jsx(v,{component:"span",sx:X,children:o==="desc"?"sorted descending":"sorted ascending"}):null]})},t.id))})})}de.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function le(r){return e.jsx(Z,{children:e.jsx(W,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"TOOL LIST"})})}le.propTypes={numSelected:f.number.isRequired};function Te(){const[r,o]=d.useState("asc"),[s,n]=d.useState("item_name"),[c,t]=d.useState([]),[l,P]=d.useState(0),[h,q]=d.useState(5),[R,T]=d.useState(!1),[C,E]=d.useState([]),[j,$]=d.useState([]),[I,O]=d.useState({});d.useEffect(()=>{(async()=>{try{const p=(await Q.get("/item/upcomingIssue/15/?filter=Tool")).data.data.Tool;console.log("resul:",p);const z=Object.entries(p).map(([b,y],S)=>({id:S,item_name:b,count:y.count})),B=Object.entries(p).reduce((b,[y,S])=>{const U=S.issued_to.map(({employee_id:J,employee_name:F})=>({empCode:J,empName:F}));return{...b,[y]:U}},{});console.log("result:",z),$(z),O(B)}catch(i){if(i.isAxiosError&&i.response){console.error(`HTTP error! status: ${i}`);const p=JSON.stringify(i.response.data);console.error("Response body:",p),alert(`Error: ${p}`)}console.error("Error fetching data:",i)}})()},[]);const k=(a,i)=>{o(s===i&&r==="asc"?"desc":"asc"),n(i)},N=(a,i)=>{const p=I[a];E(p),T(!0)},m=()=>{T(!1),E([])},g=(a,i)=>{P(i)},w=a=>{q(parseInt(a.target.value,10)),P(0)},D=l>0?Math.max(0,(1+l)*h-j.length):0,_=Y.useMemo(()=>Pe(j,Se(r,s)).slice(l*h,l*h+h),[r,s,l,j,h]);return e.jsxs(v,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:[e.jsxs(G,{sx:{width:"100%",mb:2},children:[e.jsx(le,{numSelected:c.length}),e.jsx(A,{children:e.jsxs(H,{"aria-labelledby":"tableTitle",size:"medium",children:[e.jsx(de,{order:r,orderBy:s,onRequestSort:k}),e.jsxs(L,{children:[_.map((a,i)=>e.jsxs(x,{children:[e.jsx(u,{component:"th",scope:"row",padding:"4",children:a.item_name}),e.jsx(u,{align:"right",onClick:()=>N(a.item_name,a.count),style:{cursor:"pointer"},children:a.count})]})),D>0&&e.jsx(x,{style:{height:53*D},children:e.jsx(u,{colSpan:2})})]})]})}),e.jsx(K,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:h,page:l,onPageChange:g,onRowsPerPageChange:w})]}),e.jsxs(ee,{open:R,onClose:m,children:[e.jsx(se,{children:"Employee Details"}),e.jsx(te,{children:e.jsx(A,{children:e.jsxs(H,{children:[e.jsx(M,{children:e.jsxs(x,{children:[e.jsx(u,{children:"Employee Code"}),e.jsx(u,{children:"Employee Name"})]})}),e.jsx(L,{children:C&&C.map(a=>e.jsxs(x,{children:[e.jsx(u,{children:a.empCode}),e.jsx(u,{children:a.empName})]},a.empCode))})]})})}),e.jsx(ne,{children:e.jsx(re,{onClick:m,color:"primary",children:"Close"})})]})]})}function ae(r,o,s){return o[s]<r[s]?-1:o[s]>r[s]?1:0}function Ce(r,o){return r==="desc"?(s,n)=>ae(s,n,o):(s,n)=>-ae(s,n,o)}function Ee(r,o){const s=r.map((n,c)=>[n,c]);return s.sort((n,c)=>{const t=o(n[0],c[0]);return t!==0?t:n[1]-c[1]}),s.map(n=>n[0])}const we=[{id:"item_name",numeric:!1,disablePadding:!0,label:"Item Name"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"}];function ue(r){const{order:o,orderBy:s,onRequestSort:n}=r,c=t=>l=>{n(l,t)};return e.jsx(M,{children:e.jsx(x,{children:we.map(t=>e.jsx(u,{align:t.numeric?"right":"left",padding:t.disablePadding?"4":"normal",sortDirection:s===t.id?o:!1,children:e.jsxs(V,{active:s===t.id,direction:s===t.id?o:"asc",onClick:c(t.id),children:[t.label,s===t.id?e.jsx(v,{component:"span",sx:X,children:o==="desc"?"sorted descending":"sorted ascending"}):null]})},t.id))})})}ue.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function me(r){return e.jsx(Z,{children:e.jsx(W,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"PPE LIST"})})}me.propTypes={numSelected:f.number.isRequired};function De(){const[r,o]=d.useState("asc"),[s,n]=d.useState("item_name"),[c,t]=d.useState([]),[l,P]=d.useState(0),[h,q]=d.useState(5),[R,T]=d.useState(!1),[C,E]=d.useState([]),[j,$]=d.useState([]),[I,O]=d.useState({});d.useEffect(()=>{(async()=>{try{const p=(await Q.get("/item/upcomingIssue/15/?filter=PPE")).data.data.PPE,z=Object.entries(p).map(([b,y],S)=>({id:S,item_name:b,count:y.count})),B=Object.entries(p).reduce((b,[y,S])=>{const U=S.issued_to.map(({employee_id:J,employee_name:F})=>({empCode:J,empName:F}));return{...b,[y]:U}},{});$(z),O(B)}catch(i){if(i.isAxiosError&&i.response){console.error(`HTTP error! status: ${i}`);const p=JSON.stringify(i.response.data);console.error("Response body:",p),alert(`Error: ${p}`)}console.error("Error fetching data:",i)}})()},[]);const k=(a,i)=>{o(s===i&&r==="asc"?"desc":"asc"),n(i)},N=(a,i)=>{const p=I[a];E(p),T(!0)},m=()=>{T(!1),E([])},g=(a,i)=>{P(i)},w=a=>{q(parseInt(a.target.value,10)),P(0)},D=l>0?Math.max(0,(1+l)*h-j.length):0,_=Y.useMemo(()=>Ee(j,Ce(r,s)).slice(l*h,l*h+h),[r,s,l,j,h]);return e.jsxs(v,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:[e.jsxs(G,{sx:{width:"100%",mb:2},children:[e.jsx(me,{numSelected:c.length}),e.jsx(A,{children:e.jsxs(H,{"aria-labelledby":"tableTitle",size:"medium",children:[e.jsx(ue,{order:r,orderBy:s,onRequestSort:k}),e.jsxs(L,{children:[_.map(a=>e.jsxs(x,{children:[e.jsx(u,{component:"th",scope:"row",padding:"4",children:a.item_name}),e.jsx(u,{align:"right",onClick:()=>N(a.item_name,a.count),style:{cursor:"pointer"},children:a.count})]})),D>0&&e.jsx(x,{style:{height:53*D},children:e.jsx(u,{colSpan:2})})]})]})}),e.jsx(K,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:h,page:l,onPageChange:g,onRowsPerPageChange:w})]}),e.jsxs(ee,{open:R,onClose:m,children:[e.jsx(se,{children:"Employee Details"}),e.jsx(te,{children:e.jsx(A,{children:e.jsxs(H,{children:[e.jsx(M,{children:e.jsxs(x,{children:[e.jsx(u,{children:"Employee Code"}),e.jsx(u,{children:"Employee Name"})]})}),e.jsx(L,{children:C&&C.map(a=>e.jsxs(x,{children:[e.jsx(u,{children:a.empCode}),e.jsx(u,{children:a.empName})]},a.empCode))})]})})}),e.jsx(ne,{children:e.jsx(re,{onClick:m,color:"primary",children:"Close"})})]})]})}function ie(r,o,s){return o[s]<r[s]?-1:o[s]>r[s]?1:0}function _e(r,o){return r==="desc"?(s,n)=>ie(s,n,o):(s,n)=>-ie(s,n,o)}function ve(r,o){const s=r.map((n,c)=>[n,c]);return s.sort((n,c)=>{const t=o(n[0],c[0]);return t!==0?t:n[1]-c[1]}),s.map(n=>n[0])}const Oe=[{id:"item_name",numeric:!1,disablePadding:!0,label:"Item Name"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"}];function pe(r){const{order:o,orderBy:s,onRequestSort:n}=r,c=t=>l=>{n(l,t)};return e.jsx(M,{children:e.jsx(x,{children:Oe.map(t=>e.jsx(u,{align:t.numeric?"right":"left",padding:t.disablePadding?"4":"normal",sortDirection:s===t.id?o:!1,children:e.jsxs(V,{active:s===t.id,direction:s===t.id?o:"asc",onClick:c(t.id),children:[t.label,s===t.id?e.jsx(v,{component:"span",sx:X,children:o==="desc"?"sorted descending":"sorted ascending"}):null]})},t.id))})})}pe.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function he(r){return e.jsx(Z,{children:e.jsx(W,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"DRESS LIST"})})}he.propTypes={numSelected:f.number.isRequired};function ke(){const[r,o]=d.useState("asc"),[s,n]=d.useState("item_name"),[c,t]=d.useState([]),[l,P]=d.useState(0),[h,q]=d.useState(5),[R,T]=d.useState(!1),[C,E]=d.useState([]),[j,$]=d.useState([]),[I,O]=d.useState({});d.useEffect(()=>{(async()=>{try{const p=(await Q.get("/item/upcomingIssue/360/?filter=Dress")).data.data.Dress,z=Object.entries(p).map(([b,y],S)=>({id:S,item_name:b,count:y.count})),B=Object.entries(p).reduce((b,[y,S])=>{const U=S.issued_to.map(({employee_id:J,employee_name:F})=>({empCode:J,empName:F}));return{...b,[y]:U}},{});$(z),O(B)}catch(i){if(i.isAxiosError&&i.response){console.error(`HTTP error! status: ${i}`);const p=JSON.stringify(i.response.data);console.error("Response body:",p),alert(`Error: ${p}`)}console.error("Error fetching data:",i)}})()},[]);const k=(a,i)=>{o(s===i&&r==="asc"?"desc":"asc"),n(i)},N=(a,i)=>{const p=I[a];E(p),T(!0)},m=()=>{T(!1),E([])},g=(a,i)=>{P(i)},w=a=>{q(parseInt(a.target.value,10)),P(0)},D=l>0?Math.max(0,(1+l)*h-j.length):0,_=Y.useMemo(()=>ve(j,_e(r,s)).slice(l*h,l*h+h),[r,s,l,j,h]);return e.jsxs(v,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:[e.jsxs(G,{sx:{width:"100%",mb:2},children:[e.jsx(he,{numSelected:c.length}),e.jsx(A,{children:e.jsxs(H,{"aria-labelledby":"tableTitle",size:"medium",children:[e.jsx(pe,{order:r,orderBy:s,onRequestSort:k}),e.jsxs(L,{children:[_.map((a,i)=>e.jsxs(x,{children:[e.jsx(u,{component:"th",scope:"row",padding:"4",children:a.item_name}),e.jsx(u,{align:"right",onClick:()=>N(a.item_name,a.count),style:{cursor:"pointer"},children:a.count})]})),D>0&&e.jsx(x,{style:{height:53*D},children:e.jsx(u,{colSpan:2})})]})]})}),e.jsx(K,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:h,page:l,onPageChange:g,onRowsPerPageChange:w})]}),e.jsxs(ee,{open:R,onClose:m,children:[e.jsx(se,{children:"Employee Details"}),e.jsx(te,{children:e.jsx(A,{children:e.jsxs(H,{children:[e.jsx(M,{children:e.jsxs(x,{children:[e.jsx(u,{children:"Employee Code"}),e.jsx(u,{children:"Employee Name"})]})}),e.jsx(L,{children:C&&C.map(a=>e.jsxs(x,{children:[e.jsx(u,{children:a.empCode}),e.jsx(u,{children:a.empName})]},a.empCode))})]})})}),e.jsx(ne,{children:e.jsx(re,{onClick:m,color:"primary",children:"Close"})})]})]})}const qe=[{id:"slno",numeric:!1,disablePadding:!0,label:"SL NO"},{id:"employee_id",numeric:!0,disablePadding:!1,label:"Employee Code"},{id:"employee_name",numeric:!0,disablePadding:!1,label:"Employee Name"},{id:"checkup_date",numeric:!0,disablePadding:!1,label:"Checkup Date"},{id:"checkup_image",numeric:!0,disablePadding:!1,label:"Checkup IMAGE"}];function ge(r){const{order:o,orderBy:s,onRequestSort:n}=r,c=t=>l=>{n(l,t)};return e.jsx(M,{children:e.jsx(x,{children:qe.map(t=>e.jsx(u,{align:t.numeric?"right":"left",padding:t.disablePadding?"none":"normal",sortDirection:s===t.id?o:!1,children:e.jsxs(V,{active:s===t.id,direction:s===t.id?o:"asc",onClick:c(t.id),children:[t.label,s===t.id?e.jsx(v,{component:"span",sx:X,children:o==="desc"?"sorted descending":"sorted ascending"}):null]})},t.id))})})}ge.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function ce(r,o,s){return o[s]<r[s]?-1:o[s]>r[s]?1:0}function $e(r,o){return r==="desc"?(s,n)=>ce(s,n,o):(s,n)=>-ce(s,n,o)}function Ie(r,o){const s=r.map((n,c)=>[n,c]);return s.sort((n,c)=>{const t=o(n[0],c[0]);return t!==0?t:n[1]-c[1]}),s.map(n=>n[0])}function Ne(){const[r,o]=d.useState("asc"),[s,n]=d.useState("employee_id"),[c,t]=d.useState(0),[l,P]=d.useState(5),[h,q]=d.useState([]),[R,T]=d.useState("");d.useEffect(()=>{(async()=>{try{const D=(await Q.get("/medical/upcoming/15/")).data.data.map((_,a)=>({id:a+1,slno:a+1,employee_id:_.employee_id,employee_name:_.employee_name,checkup_date:_.checkup_date,checkup_image:_.checkup_image}));q(D)}catch(g){if(g.isAxiosError&&g.response){console.error(`HTTP error! status: ${g}`);const w=JSON.stringify(g.response.data);console.error("Response body:",w),alert(`Error: ${w}`)}console.error("Error fetching data:",g)}})()},[]);const C=(m,g)=>{o(s===g&&r==="asc"?"desc":"asc"),n(g)},E=(m,g)=>{t(g)},j=m=>{P(parseInt(m.target.value,10)),t(0)},$=()=>{const m=new be;m.autoTable({head:[["SL NO","Employee Code","Employee Name","Checkup Date","Checkup Image"]],body:h.map(g=>[g.slno,g.employee_id,g.employee_name,g.checkup_date,g.checkup_image])}),m.save("Upcoming 15 days medical-checkup-reports.pdf")},I=m=>{T(m.target.value)},O=h.filter(m=>m.employee_id.toLowerCase().includes(R.toLowerCase())||m.employee_name.toLowerCase().includes(R.toLowerCase())||m.checkup_date.toLowerCase().includes(R.toLowerCase())),k=c>0?Math.max(0,(1+c)*l-O.length):0,N=Ie(O,$e(r,s)).slice(c*l,c*l+l);return e.jsx(v,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:e.jsxs(G,{sx:{width:"100%",mb:2,padding:5},children:[e.jsxs(v,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(W,{variant:"h6",id:"tableTitle",component:"div",children:"Medical Checkup Report"}),e.jsxs(v,{children:[e.jsx(ye,{variant:"outlined",size:"small",placeholder:"Search...",value:R,onChange:I,sx:{marginRight:2}}),e.jsx(je,{title:"Download PDF",children:e.jsx(xe,{onClick:$,children:e.jsx(fe,{})})})]})]}),e.jsx(A,{children:e.jsxs(H,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[e.jsx(ge,{order:r,orderBy:s,onRequestSort:C}),e.jsxs(L,{children:[N.map(m=>e.jsxs(x,{hover:!0,sx:{cursor:"pointer"},children:[e.jsx(u,{component:"th",scope:"row",padding:"none",children:m.slno}),e.jsx(u,{align:"right",children:m.employee_id}),e.jsx(u,{align:"right",children:m.employee_name}),e.jsx(u,{align:"right",children:m.checkup_date}),e.jsx(u,{align:"right",children:m.checkup_image})]},m.id)),k>0&&e.jsx(x,{style:{height:53*k},children:e.jsx(u,{colSpan:5})})]})]})}),e.jsx(K,{rowsPerPageOptions:[5,10,25],component:"div",count:O.length,rowsPerPage:l,page:c,onPageChange:E,onRowsPerPageChange:j})]})})}function Xe(){return e.jsxs(e.Fragment,{children:[e.jsx(Te,{}),e.jsx(De,{}),e.jsx(ke,{}),e.jsx(Ne,{})]})}export{Xe as default};
