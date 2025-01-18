import{r as d,R as ee,j as e,P as f,D as K}from"./index-BmhtVPv5.js";import{d as ue,a as me}from"./FilterList-Bczlz4gp.js";import{B as _}from"./Box-B7wMBWR0.js";import{P as V,T as z,I as W}from"./IconButton-Tk6TJOMm.js";import{T as A,a as H,e as L,c as g,d as u,b as M}from"./TableRow-BgRVcAap.js";import{T as X,a as Y,v as Z,b as se,c as G}from"./TableSortLabel-Bfv4hhPw.js";import{D as te,a as ne,b as re,c as oe}from"./DialogTitle-qLRu3H_3.js";import{B as ae}from"./Button-DjyydPIF.js";import{a as pe}from"./colorManipulator-BH4iFVtC.js";import{d as Se,E as Pe}from"./jspdf.plugin.autotable-BqlemtwZ.js";import{T as Re}from"./TextField-CCACKWvT.js";import{f as Te}from"./format-cwXK75ha.js";import"./createSvgIcon-BV0hWzIg.js";import"./DefaultLayout-POoTXWmj.js";import"./index.esm-caRoCSJ7.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BkLoX1rB.js";function ie(r,t,s){return t[s]<r[s]?-1:t[s]>r[s]?1:0}function Ce(r,t){return r==="desc"?(s,o)=>ie(s,o,t):(s,o)=>-ie(s,o,t)}function we(r,t){const s=r.map((o,i)=>[o,i]);return s.sort((o,i)=>{const n=t(o[0],i[0]);return n!==0?n:o[1]-i[1]}),s.map(o=>o[0])}const De=[{id:"item_name",numeric:!1,disablePadding:!0,label:"Item Name"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"}];function he(r){const{order:t,orderBy:s,onRequestSort:o}=r,i=n=>l=>{o(l,n)};return e.jsx(M,{children:e.jsx(g,{children:De.map(n=>e.jsx(u,{align:n.numeric?"right":"left",padding:n.disablePadding?"4":"normal",sortDirection:s===n.id?t:!1,children:e.jsxs(Y,{active:s===n.id,direction:s===n.id?t:"asc",onClick:i(n.id),children:[n.label,s===n.id?e.jsx(_,{component:"span",sx:Z,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id))})})}he.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function xe(r){const{numSelected:t}=r;return e.jsxs(se,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...t>0&&{bgcolor:s=>pe(s.palette.primary.main,s.palette.action.activatedOpacity)}},children:[t>0?e.jsxs(z,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[t," selected"]}):e.jsx(z,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"TOOL LIST"}),t>0?e.jsx(G,{title:"Delete",children:e.jsx(W,{children:e.jsx(ue,{})})}):e.jsx(G,{title:"Filter list",children:e.jsx(W,{children:e.jsx(me,{})})})]})}xe.propTypes={numSelected:f.number.isRequired};function Ee(){const[r,t]=d.useState("asc"),[s,o]=d.useState("item_name"),[i,n]=d.useState([]),[l,P]=d.useState(0),[h,$]=d.useState(5),[R,T]=d.useState(!1),[C,w]=d.useState([]),[j,k]=d.useState([]),[N,O]=d.useState({});d.useEffect(()=>{(async()=>{try{const p=(await K.get("/item/upcomingIssue/30/?filter=Tool")).data.data.Tool,B=Object.entries(p).map(([y,b],S)=>({id:S,item_name:y,count:b.count})),U=Object.entries(p).reduce((y,[b,S])=>{const F=S.issued_to.map(({employee_id:J,employee_name:Q})=>({empCode:J,empName:Q}));return{...y,[b]:F}},{});k(B),O(U)}catch(c){if(c.isAxiosError&&c.response){console.error(`HTTP error! status: ${c}`);const p=JSON.stringify(c.response.data);console.error("Response body:",p),alert(`Error: ${p}`)}console.error("Error fetching data:",c)}})()},[]);const q=(a,c)=>{t(s===c&&r==="asc"?"desc":"asc"),o(c)},I=(a,c)=>{const p=N[a];w(p),T(!0)},m=()=>{T(!1),w([])},x=(a,c)=>{P(c)},D=a=>{$(parseInt(a.target.value,10)),P(0)},E=l>0?Math.max(0,(1+l)*h-j.length):0,v=ee.useMemo(()=>we(j,Ce(r,s)).slice(l*h,l*h+h),[r,s,l,j,h]);return e.jsxs(_,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:[e.jsxs(V,{sx:{width:"100%",mb:2},children:[e.jsx(xe,{numSelected:i.length}),e.jsx(A,{children:e.jsxs(H,{"aria-labelledby":"tableTitle",size:"medium",children:[e.jsx(he,{order:r,orderBy:s,onRequestSort:q}),e.jsxs(L,{children:[v.map(a=>e.jsxs(g,{children:[e.jsx(u,{component:"th",scope:"row",padding:"4",children:a.item_name}),e.jsx(u,{align:"right",onClick:()=>I(a.item_name,a.count),style:{cursor:"pointer"},children:a.count})]})),E>0&&e.jsx(g,{style:{height:53*E},children:e.jsx(u,{colSpan:2})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:h,page:l,onPageChange:x,onRowsPerPageChange:D})]}),e.jsxs(te,{open:R,onClose:m,children:[e.jsx(ne,{children:"Employee Details"}),e.jsx(re,{children:e.jsx(A,{children:e.jsxs(H,{children:[e.jsx(M,{children:e.jsxs(g,{children:[e.jsx(u,{children:"Employee Code"}),e.jsx(u,{children:"Employee Name"})]})}),e.jsx(L,{children:C&&C.map(a=>e.jsxs(g,{children:[e.jsx(u,{children:a.empCode}),e.jsx(u,{children:a.empName})]},a.empCode))})]})})}),e.jsx(oe,{children:e.jsx(ae,{onClick:m,color:"primary",children:"Close"})})]})]})}function ce(r,t,s){return t[s]<r[s]?-1:t[s]>r[s]?1:0}function ve(r,t){return r==="desc"?(s,o)=>ce(s,o,t):(s,o)=>-ce(s,o,t)}function _e(r,t){const s=r.map((o,i)=>[o,i]);return s.sort((o,i)=>{const n=t(o[0],i[0]);return n!==0?n:o[1]-i[1]}),s.map(o=>o[0])}const Oe=[{id:"item_name",numeric:!1,disablePadding:!0,label:"Item Name"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"}];function ge(r){const{order:t,orderBy:s,onRequestSort:o}=r,i=n=>l=>{o(l,n)};return e.jsx(M,{children:e.jsx(g,{children:Oe.map(n=>e.jsx(u,{align:n.numeric?"right":"left",padding:n.disablePadding?"4":"normal",sortDirection:s===n.id?t:!1,children:e.jsxs(Y,{active:s===n.id,direction:s===n.id?t:"asc",onClick:i(n.id),children:[n.label,s===n.id?e.jsx(_,{component:"span",sx:Z,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id))})})}ge.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function je(r){const{numSelected:t}=r;return e.jsxs(se,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...t>0&&{bgcolor:s=>pe(s.palette.primary.main,s.palette.action.activatedOpacity)}},children:[t>0?e.jsxs(z,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[t," selected"]}):e.jsx(z,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"PPE LIST"}),t>0?e.jsx(G,{title:"Delete",children:e.jsx(W,{children:e.jsx(ue,{})})}):e.jsx(G,{title:"Filter list",children:e.jsx(W,{children:e.jsx(me,{})})})]})}je.propTypes={numSelected:f.number.isRequired};function qe(){const[r,t]=d.useState("asc"),[s,o]=d.useState("item_name"),[i,n]=d.useState([]),[l,P]=d.useState(0),[h,$]=d.useState(5),[R,T]=d.useState(!1),[C,w]=d.useState([]),[j,k]=d.useState([]),[N,O]=d.useState({});d.useEffect(()=>{(async()=>{try{const p=(await K.get("/item/upcomingIssue/30/?filter=PPE")).data.data.PPE,B=Object.entries(p).map(([y,b],S)=>({id:S,item_name:y,count:b.count})),U=Object.entries(p).reduce((y,[b,S])=>{const F=S.issued_to.map(({employee_id:J,employee_name:Q})=>({empCode:J,empName:Q}));return{...y,[b]:F}},{});k(B),O(U)}catch(c){if(c.isAxiosError&&c.response){console.error(`HTTP error! status: ${c}`);const p=JSON.stringify(c.response.data);console.error("Response body:",p),alert(`Error: ${p}`)}console.error("Error fetching data:",c)}})()},[]);const q=(a,c)=>{t(s===c&&r==="asc"?"desc":"asc"),o(c)},I=(a,c)=>{const p=N[a];w(p),T(!0)},m=()=>{T(!1),w([])},x=(a,c)=>{P(c)},D=a=>{$(parseInt(a.target.value,10)),P(0)},E=l>0?Math.max(0,(1+l)*h-j.length):0,v=ee.useMemo(()=>_e(j,ve(r,s)).slice(l*h,l*h+h),[r,s,l,j,h]);return e.jsxs(_,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:[e.jsxs(V,{sx:{width:"100%",mb:2},children:[e.jsx(je,{numSelected:i.length}),e.jsx(A,{children:e.jsxs(H,{"aria-labelledby":"tableTitle",size:"medium",children:[e.jsx(ge,{order:r,orderBy:s,onRequestSort:q}),e.jsxs(L,{children:[v.map(a=>e.jsxs(g,{children:[e.jsx(u,{component:"th",scope:"row",padding:"4",children:a.item_name}),e.jsx(u,{align:"right",onClick:()=>I(a.item_name,a.count),style:{cursor:"pointer"},children:a.count})]})),E>0&&e.jsx(g,{style:{height:53*E},children:e.jsx(u,{colSpan:2})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:h,page:l,onPageChange:x,onRowsPerPageChange:D})]}),e.jsxs(te,{open:R,onClose:m,children:[e.jsx(ne,{children:"Employee Details"}),e.jsx(re,{children:e.jsx(A,{children:e.jsxs(H,{children:[e.jsx(M,{children:e.jsxs(g,{children:[e.jsx(u,{children:"Employee Code"}),e.jsx(u,{children:"Employee Name"})]})}),e.jsx(L,{children:C&&C.map(a=>e.jsxs(g,{children:[e.jsx(u,{children:a.empCode}),e.jsx(u,{children:a.empName})]},a.empCode))})]})})}),e.jsx(oe,{children:e.jsx(ae,{onClick:m,color:"primary",children:"Close"})})]})]})}const $e=[{id:"slno",numeric:!1,disablePadding:!0,label:"SL NO"},{id:"employee_id",numeric:!0,disablePadding:!1,label:"Employee Code"},{id:"employee_name",numeric:!0,disablePadding:!1,label:"Employee Name"},{id:"checkup_date",numeric:!0,disablePadding:!1,label:"Checkup Date"}];function fe(r){const{order:t,orderBy:s,onRequestSort:o}=r,i=n=>l=>{o(l,n)};return e.jsx(M,{children:e.jsx(g,{children:$e.map(n=>e.jsx(u,{align:n.numeric?"right":"left",padding:n.disablePadding?"none":"normal",sortDirection:s===n.id?t:!1,children:e.jsxs(Y,{active:s===n.id,direction:s===n.id?t:"asc",onClick:i(n.id),children:[n.label,s===n.id?e.jsx(_,{component:"span",sx:Z,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id))})})}fe.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function de(r,t,s){return t[s]<r[s]?-1:t[s]>r[s]?1:0}function ke(r,t){return r==="desc"?(s,o)=>de(s,o,t):(s,o)=>-de(s,o,t)}function Ne(r,t){const s=r.map((o,i)=>[o,i]);return s.sort((o,i)=>{const n=t(o[0],i[0]);return n!==0?n:o[1]-i[1]}),s.map(o=>o[0])}function Ie(){const[r,t]=d.useState("asc"),[s,o]=d.useState("employee_id"),[i,n]=d.useState(0),[l,P]=d.useState(5),[h,$]=d.useState([]),[R,T]=d.useState("");d.useEffect(()=>{(async()=>{try{const E=(await K.get("/medical/upcoming/30/")).data.data.map((v,a)=>({id:a+1,slno:a+1,employee_id:v.employee_id,employee_name:v.employee_name,checkup_date:v.checkup_date?Te(new Date(v.checkup_date),"dd/MM/yyyy"):"N/A"}));$(E)}catch(x){if(x.isAxiosError&&x.response){console.error(`HTTP error! status: ${x}`);const D=JSON.stringify(x.response.data);console.error("Response body:",D),alert(`Error: ${D}`)}console.error("Error fetching data:",x)}})()},[]);const C=(m,x)=>{t(s===x&&r==="asc"?"desc":"asc"),o(x)},w=(m,x)=>{n(x)},j=m=>{P(parseInt(m.target.value,10)),n(0)},k=()=>{const m=new Pe;m.autoTable({head:[["SL NO","Employee Code","Employee Name","Checkup Date"]],body:h.map(x=>[x.slno,x.employee_id,x.employee_name,x.checkup_date])}),m.save("Upcoming 30 days medical-checkup-reports.pdf")},N=m=>{T(m.target.value)},O=h.filter(m=>m.employee_id.toLowerCase().includes(R.toLowerCase())||m.employee_name.toLowerCase().includes(R.toLowerCase())||m.checkup_date.toLowerCase().includes(R.toLowerCase())),q=i>0?Math.max(0,(1+i)*l-O.length):0,I=Ne(O,ke(r,s)).slice(i*l,i*l+l);return e.jsx(_,{sx:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:e.jsxs(V,{sx:{width:"100%",mb:2,padding:5},children:[e.jsxs(_,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[e.jsx(z,{variant:"h6",id:"tableTitle",component:"div",children:"Medical Checkup Report"}),e.jsxs(_,{children:[e.jsx(Re,{variant:"outlined",size:"small",placeholder:"Search...",value:R,onChange:N,sx:{marginRight:2}}),e.jsx(G,{title:"Download PDF",children:e.jsx(W,{onClick:k,children:e.jsx(Se,{})})})]})]}),e.jsx(A,{children:e.jsxs(H,{sx:{minWidth:730},"aria-labelledby":"tableTitle",children:[e.jsx(fe,{order:r,orderBy:s,onRequestSort:C}),e.jsxs(L,{children:[I.map(m=>e.jsxs(g,{hover:!0,sx:{cursor:"pointer"},children:[e.jsx(u,{component:"th",scope:"row",padding:"none",children:m.slno}),e.jsx(u,{align:"right",children:m.employee_id}),e.jsx(u,{align:"right",children:m.employee_name}),e.jsx(u,{align:"right",children:m.checkup_date})]},m.id)),q>0&&e.jsx(g,{style:{height:53*q},children:e.jsx(u,{colSpan:5})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:O.length,rowsPerPage:l,page:i,onPageChange:w,onRowsPerPageChange:j})]})})}function le(r,t,s){return t[s]<r[s]?-1:t[s]>r[s]?1:0}function Ae(r,t){return r==="desc"?(s,o)=>le(s,o,t):(s,o)=>-le(s,o,t)}function He(r,t){const s=r.map((o,i)=>[o,i]);return s.sort((o,i)=>{const n=t(o[0],i[0]);return n!==0?n:o[1]-i[1]}),s.map(o=>o[0])}const Le=[{id:"item_name",numeric:!1,disablePadding:!0,label:"Item Name"},{id:"count",numeric:!0,disablePadding:!1,label:"Count"}];function ye(r){const{order:t,orderBy:s,onRequestSort:o}=r,i=n=>l=>{o(l,n)};return e.jsx(M,{children:e.jsx(g,{children:Le.map(n=>e.jsx(u,{align:n.numeric?"right":"left",padding:n.disablePadding?"4":"normal",sortDirection:s===n.id?t:!1,children:e.jsxs(Y,{active:s===n.id,direction:s===n.id?t:"asc",onClick:i(n.id),children:[n.label,s===n.id?e.jsx(_,{component:"span",sx:Z,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},n.id))})})}ye.propTypes={onRequestSort:f.func.isRequired,order:f.oneOf(["asc","desc"]).isRequired,orderBy:f.string.isRequired};function be(r){return e.jsx(se,{children:e.jsx(z,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"DRESS LIST"})})}be.propTypes={numSelected:f.number.isRequired};function Me(){const[r,t]=d.useState("asc"),[s,o]=d.useState("item_name"),[i,n]=d.useState([]),[l,P]=d.useState(0),[h,$]=d.useState(5),[R,T]=d.useState(!1),[C,w]=d.useState([]),[j,k]=d.useState([]),[N,O]=d.useState({});d.useEffect(()=>{(async()=>{try{const p=(await K.get("/item/upcomingIssue/30/?filter=Dress")).data.data.Dress,B=Object.entries(p).map(([y,b],S)=>({id:S,item_name:y,count:b.count})),U=Object.entries(p).reduce((y,[b,S])=>{const F=S.issued_to.map(({employee_id:J,employee_name:Q})=>({empCode:J,empName:Q}));return{...y,[b]:F}},{});k(B),O(U)}catch(c){if(c.isAxiosError&&c.response){console.error(`HTTP error! status: ${c}`);const p=JSON.stringify(c.response.data);console.error("Response body:",p),alert(`Error: ${p}`)}console.error("Error fetching data:",c)}})()},[]);const q=(a,c)=>{t(s===c&&r==="asc"?"desc":"asc"),o(c)},I=(a,c)=>{const p=N[a];w(p),T(!0)},m=()=>{T(!1),w([])},x=(a,c)=>{P(c)},D=a=>{$(parseInt(a.target.value,10)),P(0)},E=l>0?Math.max(0,(1+l)*h-j.length):0,v=ee.useMemo(()=>He(j,Ae(r,s)).slice(l*h,l*h+h),[r,s,l,j,h]);return e.jsxs(_,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:[e.jsxs(V,{sx:{width:"100%",mb:2},children:[e.jsx(be,{numSelected:i.length}),e.jsx(A,{children:e.jsxs(H,{"aria-labelledby":"tableTitle",size:"medium",children:[e.jsx(ye,{order:r,orderBy:s,onRequestSort:q}),e.jsxs(L,{children:[v.map((a,c)=>e.jsxs(g,{children:[e.jsx(u,{component:"th",scope:"row",padding:"4",children:a.item_name}),e.jsx(u,{align:"right",onClick:()=>I(a.item_name,a.count),style:{cursor:"pointer"},children:a.count})]})),E>0&&e.jsx(g,{style:{height:53*E},children:e.jsx(u,{colSpan:2})})]})]})}),e.jsx(X,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:h,page:l,onPageChange:x,onRowsPerPageChange:D})]}),e.jsxs(te,{open:R,onClose:m,children:[e.jsx(ne,{children:"Employee Details"}),e.jsx(re,{children:e.jsx(A,{children:e.jsxs(H,{children:[e.jsx(M,{children:e.jsxs(g,{children:[e.jsx(u,{children:"Employee Code"}),e.jsx(u,{children:"Employee Name"})]})}),e.jsx(L,{children:C&&C.map(a=>e.jsxs(g,{children:[e.jsx(u,{children:a.empCode}),e.jsx(u,{children:a.empName})]},a.empCode))})]})})}),e.jsx(oe,{children:e.jsx(ae,{onClick:m,color:"primary",children:"Close"})})]})]})}function rs(){return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{}),e.jsx(qe,{}),e.jsx(Me,{}),e.jsx(Ie,{})]})}export{rs as default};
