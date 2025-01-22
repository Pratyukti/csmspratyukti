import{j as e,P as g,r as x}from"./index-BcZgJc3f.js";import{d as R,a as w}from"./FilterList-DebfT654.js";import{d as ee,S as ae}from"./Edit-B6AGxGS9.js";import{D as ie,a as te,b as ne,c as le}from"./DialogTitle-G822ft2M.js";import{D as se}from"./DialogContentText-DQ1bToiF.js";import{T as u}from"./TextField-CsBUZQ7G.js";import{B as q}from"./Button-qtkdf_D_.js";import{B as I}from"./Box-C4SzZUEF.js";import{P as de,I as T,T as W}from"./IconButton-CsbDaOf5.js";import{T as re,a as oe,e as ce,c as C,d as o,b as he}from"./TableRow-DO0FIrpR.js";import{C as E}from"./Checkbox-BulkI8h6.js";import{c as _,T as ge,a as me,v as ue,b as pe}from"./TableSortLabel-BEAGQxV8.js";import{F as xe}from"./FormControlLabel-fJAaVdBF.js";import{a as be}from"./colorManipulator-BhxeyAkk.js";import"./createSvgIcon-DjFHvsET.js";import"./DefaultLayout-Dv-E58EL.js";import"./index.esm-Coi9xCIF.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-BOTkYAkt.js";import"./styled-BtxnTBWT.js";function O({open:d,handleClose:s,handleSave:l,currentRow:a,setCurrentRow:t}){return e.jsxs(ie,{open:d,onClose:s,children:[e.jsx(te,{children:"Edit Row"}),e.jsxs(ne,{children:[e.jsx(se,{children:"Edit the details of the selected row."}),e.jsx(u,{autoFocus:!0,margin:"dense",label:"Trainer ID",type:"text",fullWidth:!0,variant:"standard",value:a?a.trainer_id:"",onChange:i=>t({...a,trainer_id:i.target.value})}),e.jsx(u,{margin:"dense",label:"Company",type:"text",fullWidth:!0,variant:"standard",value:a?a.company:"",onChange:i=>t({...a,company:i.target.value})}),e.jsx(u,{margin:"dense",label:"Trainer Name",type:"text",fullWidth:!0,variant:"standard",value:a?a.trainer_name:"",onChange:i=>t({...a,trainer_name:i.target.value})}),e.jsx(u,{margin:"dense",label:"Email",type:"text",fullWidth:!0,variant:"standard",value:a?a.email:"",onChange:i=>t({...a,email:i.target.value})}),e.jsx(u,{margin:"dense",label:"Phone Number",type:"text",fullWidth:!0,variant:"standard",value:a?a.phonenumber:"",onChange:i=>t({...a,phonenumber:i.target.value})}),e.jsx(u,{margin:"dense",label:"Address",type:"text",fullWidth:!0,variant:"standard",value:a?a.address:"",onChange:i=>t({...a,address:i.target.value})}),e.jsx(u,{margin:"dense",label:"Joining Date",type:"text",fullWidth:!0,variant:"standard",value:a?a.joining_date:"",onChange:i=>t({...a,joining_date:i.target.value})}),e.jsx(u,{margin:"dense",label:"Salary",type:"text",fullWidth:!0,variant:"standard",value:a?a.salary:"",onChange:i=>t({...a,salary:i.target.value})}),e.jsx(u,{margin:"dense",label:"Is Active",type:"text",fullWidth:!0,variant:"standard",value:a?a.is_active:"",onChange:i=>t({...a,is_active:i.target.value})}),e.jsx(u,{margin:"dense",label:"Profile Photo",type:"text",fullWidth:!0,variant:"standard",value:a?a.profile_photo:"",onChange:i=>t({...a,profile_photo:i.target.value})}),e.jsx(u,{margin:"dense",label:"Job Title",type:"text",fullWidth:!0,variant:"standard",value:a?a.job_title:"",onChange:i=>t({...a,job_title:i.target.value})}),e.jsx(u,{margin:"dense",label:"Specification",type:"text",fullWidth:!0,variant:"standard",value:a?a.specification:"",onChange:i=>t({...a,specification:i.target.value})})]}),e.jsxs(le,{children:[e.jsx(q,{onClick:s,color:"primary",children:"Cancel"}),e.jsx(q,{onClick:l,color:"primary",children:"Save"})]})]})}O.propTypes={open:g.bool.isRequired,handleClose:g.func.isRequired,handleSave:g.func.isRequired,currentRow:g.object,setCurrentRow:g.func.isRequired};function fe(d,s,l,a,t,i,p,f,r,v,b,y,S){return{id:d,trainer_id:s,company:l,trainer_name:a,email:t,phonenumber:i,address:p,joining_date:f,salary:r,is_active:v,profile_photo:b,job_title:y,specification:S}}const je=[fe(1,"21mmca60","Novazen","xyz","xyz@gmail.com","7890654326","bbsr","4/4/2024",3e4,"","","abc","bhg")];function A(d,s,l){return s[l]<d[l]?-1:s[l]>d[l]?1:0}function ve(d,s){return d==="desc"?(l,a)=>A(l,a,s):(l,a)=>-A(l,a,s)}function ye(d,s){const l=d.map((a,t)=>[a,t]);return l.sort((a,t)=>{const i=s(a[0],t[0]);return i!==0?i:a[1]-t[1]}),l.map(a=>a[0])}const Se=[{id:"trainer_id",numeric:!1,disablePadding:!0,label:"Trainer_Id"},{id:"company",numeric:!0,disablePadding:!1,label:"Company"},{id:"trainer_name",numeric:!0,disablePadding:!1,label:"Trainer Name"},{id:"email",numeric:!0,disablePadding:!1,label:"Email"},{id:"phonenumber",numeric:!0,disablePadding:!1,label:"Phone Number"},{id:"address",numeric:!0,disablePadding:!1,label:"Address"},{id:"joining_date",numeric:!0,disablePadding:!1,label:"Joining Date"},{id:"salary",numeric:!0,disablePadding:!1,label:"Salary"},{id:"is_active",numeric:!0,disablePadding:!1,label:"Is_Active"},{id:"profile_photo",numeric:!0,disablePadding:!1,label:"Profile Photo"},{id:"job_title",numeric:!0,disablePadding:!1,label:"Job Title"},{id:"specification",numeric:!0,disablePadding:!1,label:"Specification"},{id:"action",numeric:!0,disablePadding:!1,label:"Action"}];function B(d){const{onSelectAllClick:s,order:l,orderBy:a,numSelected:t,rowCount:i,onRequestSort:p}=d,f=r=>v=>p(v,r);return e.jsx(he,{children:e.jsxs(C,{children:[e.jsx(o,{padding:"checkbox",children:e.jsx(E,{color:"primary",indeterminate:t>0&&t<i,checked:i>0&&t===i,onChange:s,inputProps:{"aria-label":"select all desserts"}})}),Se.map(r=>e.jsx(o,{align:r.numeric?"right":"left",padding:r.disablePadding?"none":"normal",sortDirection:a===r.id?l:!1,children:e.jsxs(me,{active:a===r.id,direction:a===r.id?l:"asc",onClick:f(r.id),children:[r.label,a===r.id?e.jsx(I,{component:"span",sx:ue,children:l==="desc"?"sorted descending":"sorted ascending"}):null]})},r.id))]})})}B.propTypes={numSelected:g.number.isRequired,onRequestSort:g.func.isRequired,onSelectAllClick:g.func.isRequired,order:g.oneOf(["asc","desc"]).isRequired,orderBy:g.string.isRequired,rowCount:g.number.isRequired};function z(d){const{numSelected:s,onDelete:l}=d;return e.jsxs(pe,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...s>0&&{bgcolor:a=>be(a.palette.primary.main,a.palette.action.activatedOpacity)}},children:[s>0?e.jsxs(W,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[s," selected"]}):e.jsx(W,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Trainer Details"}),s>0?e.jsx(_,{title:"Delete",children:e.jsx(T,{onClick:l,children:e.jsx(R,{})})}):e.jsx(_,{title:"Filter list",children:e.jsx(T,{children:e.jsx(w,{})})})]})}z.propTypes={numSelected:g.number.isRequired,onDelete:g.func.isRequired};function Me(){const[d,s]=x.useState("asc"),[l,a]=x.useState("training_id"),[t,i]=x.useState([]),[p,f]=x.useState(0),[r,v]=x.useState(!1),[b,y]=x.useState(5),[S,P]=x.useState(!1),[F,k]=x.useState(null),[j,N]=x.useState(je),H=(n,c)=>{s(l===c&&d==="asc"?"desc":"asc"),a(c)},J=n=>{if(n.target.checked){const c=j.map(h=>h.id);i(c);return}i([])},$=(n,c)=>{const h=t.indexOf(c);let m=[];h===-1?m=m.concat(t,c):h===0?m=m.concat(t.slice(1)):h===t.length-1?m=m.concat(t.slice(0,-1)):h>0&&(m=m.concat(t.slice(0,h),t.slice(h+1))),i(m)},L=(n,c)=>{f(c)},M=n=>{y(parseInt(n.target.value,10)),f(0)},G=n=>{v(n.target.checked)},K=n=>t.indexOf(n)!==-1,D=p>0?Math.max(0,(1+p)*b-j.length):0,Q=x.useMemo(()=>ye(j,ve(d,l)).slice(p*b,p*b+b),[d,l,p,b,j]),U=n=>{k(n),P(!0)},V=()=>{P(!1)},X=()=>{P(!1)},Y=()=>{N(n=>n.filter(c=>!t.includes(c.id))),i([])};return e.jsxs(I,{sx:{width:"100%"},children:[e.jsxs(de,{sx:{width:"100%",mb:2},children:[e.jsx(z,{numSelected:t.length,onDelete:Y}),e.jsx(re,{children:e.jsxs(oe,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:r?"small":"medium",children:[e.jsx(B,{numSelected:t.length,order:d,orderBy:l,onSelectAllClick:J,onRequestSort:H,rowCount:j.length}),e.jsxs(ce,{children:[Q.map((n,c)=>{const h=K(n.id),m=`enhanced-table-checkbox-${c}`;return e.jsxs(C,{hover:!0,onClick:Z=>$(Z,n.id),role:"checkbox","aria-checked":h,tabIndex:-1,selected:h,sx:{cursor:"pointer"},children:[e.jsx(o,{padding:"checkbox",children:e.jsx(E,{color:"primary",checked:h,inputProps:{"aria-labelledby":m}})}),e.jsx(o,{component:"th",id:m,scope:"row",padding:"none",children:n.trainer_id}),e.jsx(o,{align:"right",children:n.company}),e.jsx(o,{align:"right",children:n.trainer_name}),e.jsx(o,{align:"right",children:n.email}),e.jsx(o,{align:"right",children:n.phonenumber}),e.jsx(o,{align:"right",children:n.address}),e.jsx(o,{align:"right",children:n.joining_date}),e.jsx(o,{align:"right",children:n.salary}),e.jsx(o,{align:"right",children:n.is_active}),e.jsx(o,{align:"right",children:n.profile_photo}),e.jsx(o,{align:"right",children:n.job_title}),e.jsx(o,{align:"right",children:n.specification}),e.jsx(o,{align:"right",children:e.jsx(_,{title:"Edit",children:e.jsx(T,{color:"primary",onClick:()=>U(n),children:e.jsx(ee,{})})})})]},n.id)}),D>0&&e.jsx(C,{style:{height:(r?33:53)*D},children:e.jsx(o,{colSpan:6})})]})]})}),e.jsx(ge,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:b,page:p,onPageChange:L,onRowsPerPageChange:M})]}),e.jsx(xe,{control:e.jsx(ae,{checked:r,onChange:G}),label:"Dense padding"}),e.jsx(O,{open:S,handleClose:V,handleSave:X,currentRow:F,setCurrentRow:k})]})}export{Me as default};
