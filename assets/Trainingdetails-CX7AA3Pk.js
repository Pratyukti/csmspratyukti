import{j as e,P as u,r as x}from"./index-D9pTrmyN.js";import{d as w,a as ee}from"./FilterList-Bdmu-FGT.js";import{d as te,S as ae}from"./Edit-DD8imvDc.js";import{D as ne,a as ie,b as se,c as le}from"./DialogTitle-C_6Qm2h1.js";import{D as re}from"./DialogContentText-D1BwSPhp.js";import{T as p}from"./TextField-B82FT8Gd.js";import{B as k}from"./Button-Dsw2z1pm.js";import{B as E}from"./Box-CaQnpd-f.js";import{P as de,I as T,T as _}from"./IconButton-BphNlixg.js";import{T as ce,a as oe,e as ue,c as C,d as g,b as he}from"./TableRow-DDDJZlTx.js";import{C as W}from"./Checkbox-B0YjaFvf.js";import{c as P,T as ge,a as me,v as xe,b as pe}from"./TableSortLabel-ZaV9cJsH.js";import{F as be}from"./FormControlLabel-DSddV3mn.js";import{a as fe}from"./colorManipulator-CeBLnpFE.js";import"./createSvgIcon-CxW3tpGz.js";import"./DefaultLayout-BdjvWDB3.js";import"./index.esm-Oz9djZ36.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-DIkgzp1H.js";import"./styled-CIiJ6-l4.js";function O({open:r,handleClose:l,handleSave:i,currentRow:t,setCurrentRow:a}){return e.jsxs(ne,{open:r,onClose:l,children:[e.jsx(ie,{children:"Edit Row"}),e.jsxs(se,{children:[e.jsx(re,{children:"Edit the details of the selected row."}),e.jsx(p,{autoFocus:!0,margin:"dense",label:"Training ID",type:"text",fullWidth:!0,variant:"standard",value:t?t.training_id:"",onChange:n=>a({...t,training_id:n.target.value})}),e.jsx(p,{margin:"dense",label:"Start Date",type:"text",fullWidth:!0,variant:"standard",value:t?t.start_date:"",onChange:n=>a({...t,start_date:n.target.value})}),e.jsx(p,{margin:"dense",label:"End Date",type:"text",fullWidth:!0,variant:"standard",value:t?t.end_date:"",onChange:n=>a({...t,end_date:n.target.value})}),e.jsx(p,{margin:"dense",label:"Trainers",type:"text",fullWidth:!0,variant:"standard",value:t?t.trainers:"",onChange:n=>a({...t,trainers:n.target.value})}),e.jsx(p,{margin:"dense",label:"Trainees",type:"text",fullWidth:!0,variant:"standard",value:t?t.tranees:"",onChange:n=>a({...t,tranees:n.target.value})}),e.jsx(p,{margin:"dense",label:"Subject",type:"text",fullWidth:!0,variant:"standard",value:t?t.subject:"",onChange:n=>a({...t,subject:n.target.value})}),e.jsx(p,{margin:"dense",label:"Whitelevel ID",type:"text",fullWidth:!0,variant:"standard",value:t?t.whitelevel_id:"",onChange:n=>a({...t,whitelevel_id:n.target.value})})]}),e.jsxs(le,{children:[e.jsx(k,{onClick:l,color:"primary",children:"Cancel"}),e.jsx(k,{onClick:i,color:"primary",children:"Save"})]})]})}O.propTypes={open:u.bool.isRequired,handleClose:u.func.isRequired,handleSave:u.func.isRequired,currentRow:u.object,setCurrentRow:u.func.isRequired};function q(r,l,i,t,a,n,m,b){return{id:r,training_id:l,start_date:i,end_date:t,trainers:a,tranees:n,subject:m,whitelevel_id:b}}const je=[q(1,"21mmca60","3/4/2024","5/4/2024","Jone Deo","xyz","abc","45rf6"),q(2,"21mmca62","3/8/2024","5/8/2024","Jone ","xtz","ayc","48rf6")];function I(r,l,i){return l[i]<r[i]?-1:l[i]>r[i]?1:0}function ve(r,l){return r==="desc"?(i,t)=>I(i,t,l):(i,t)=>-I(i,t,l)}function Se(r,l){const i=r.map((t,a)=>[t,a]);return i.sort((t,a)=>{const n=l(t[0],a[0]);return n!==0?n:t[1]-a[1]}),i.map(t=>t[0])}const Te=[{id:"training_id",numeric:!1,disablePadding:!0,label:"Training_Id"},{id:"start_date",numeric:!0,disablePadding:!1,label:"Start Date"},{id:"end_date",numeric:!0,disablePadding:!1,label:"End Date"},{id:"trainers",numeric:!0,disablePadding:!1,label:"Trainer"},{id:"trainees",numeric:!0,disablePadding:!1,label:"Trainees"},{id:"subject",numeric:!0,disablePadding:!1,label:"Subject"},{id:"whitelevel_id",numeric:!0,disablePadding:!1,label:"Whitelevel_Id"},{id:"action",numeric:!0,disablePadding:!1,label:"Action"}];function A(r){const{onSelectAllClick:l,order:i,orderBy:t,numSelected:a,rowCount:n,onRequestSort:m}=r,b=d=>v=>m(v,d);return e.jsx(he,{children:e.jsxs(C,{children:[e.jsx(g,{padding:"checkbox",children:e.jsx(W,{color:"primary",indeterminate:a>0&&a<n,checked:n>0&&a===n,onChange:l,inputProps:{"aria-label":"select all desserts"}})}),Te.map(d=>e.jsx(g,{align:d.numeric?"right":"left",padding:d.disablePadding?"none":"normal",sortDirection:t===d.id?i:!1,children:e.jsxs(me,{active:t===d.id,direction:t===d.id?i:"asc",onClick:b(d.id),children:[d.label,t===d.id?e.jsx(E,{component:"span",sx:xe,children:i==="desc"?"sorted descending":"sorted ascending"}):null]})},d.id))]})})}A.propTypes={numSelected:u.number.isRequired,onRequestSort:u.func.isRequired,onSelectAllClick:u.func.isRequired,order:u.oneOf(["asc","desc"]).isRequired,orderBy:u.string.isRequired,rowCount:u.number.isRequired};function B(r){const{numSelected:l,onDelete:i}=r;return e.jsxs(pe,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...l>0&&{bgcolor:t=>fe(t.palette.primary.main,t.palette.action.activatedOpacity)}},children:[l>0?e.jsxs(_,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[l," selected"]}):e.jsx(_,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Training Details"}),l>0?e.jsx(P,{title:"Delete",children:e.jsx(T,{onClick:i,children:e.jsx(w,{})})}):e.jsx(P,{title:"Filter list",children:e.jsx(T,{children:e.jsx(ee,{})})})]})}B.propTypes={numSelected:u.number.isRequired,onDelete:u.func.isRequired};function Me(){const[r,l]=x.useState("asc"),[i,t]=x.useState("training_id"),[a,n]=x.useState([]),[m,b]=x.useState(0),[d,v]=x.useState(!1),[f,F]=x.useState(5),[z,S]=x.useState(!1),[H,y]=x.useState(null),[j,R]=x.useState(je),$=(s,c)=>{l(i===c&&r==="asc"?"desc":"asc"),t(c)},J=s=>{if(s.target.checked){const c=j.map(o=>o.id);n(c);return}n([])},L=(s,c)=>{const o=a.indexOf(c);let h=[];o===-1?h=h.concat(a,c):o===0?h=h.concat(a.slice(1)):o===a.length-1?h=h.concat(a.slice(0,-1)):o>0&&(h=h.concat(a.slice(0,o),a.slice(o+1))),n(h)},M=(s,c)=>{b(c)},G=s=>{F(parseInt(s.target.value,10)),b(0)},K=s=>{v(s.target.checked)},N=s=>a.indexOf(s)!==-1,D=m>0?Math.max(0,(1+m)*f-j.length):0,Q=x.useMemo(()=>Se(j,ve(r,i)).slice(m*f,m*f+f),[r,i,m,f,j]),U=s=>{y(s),S(!0)},V=()=>{S(!1)},X=()=>{S(!1)},Y=()=>{R(s=>s.filter(c=>!a.includes(c.id))),n([])};return e.jsxs(E,{sx:{width:"100%"},children:[e.jsxs(de,{sx:{width:"100%",mb:2},children:[e.jsx(B,{numSelected:a.length,onDelete:Y}),e.jsx(ce,{children:e.jsxs(oe,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:d?"small":"medium",children:[e.jsx(A,{numSelected:a.length,order:r,orderBy:i,onSelectAllClick:J,onRequestSort:$,rowCount:j.length}),e.jsxs(ue,{children:[Q.map((s,c)=>{const o=N(s.id),h=`enhanced-table-checkbox-${c}`;return e.jsxs(C,{hover:!0,onClick:Z=>L(Z,s.id),role:"checkbox","aria-checked":o,tabIndex:-1,selected:o,sx:{cursor:"pointer"},children:[e.jsx(g,{padding:"checkbox",children:e.jsx(W,{color:"primary",checked:o,inputProps:{"aria-labelledby":h}})}),e.jsx(g,{component:"th",id:h,scope:"row",padding:"none",children:s.training_id}),e.jsx(g,{align:"right",children:s.start_date}),e.jsx(g,{align:"right",children:s.end_date}),e.jsx(g,{align:"right",children:s.trainers}),e.jsx(g,{align:"right",children:s.tranees}),e.jsx(g,{align:"right",children:s.subject}),e.jsx(g,{align:"right",children:s.whitelevel_id}),e.jsx(g,{align:"right",children:e.jsx(P,{title:"Edit",children:e.jsx(T,{color:"primary",onClick:()=>U(s),children:e.jsx(te,{})})})})]},s.id)}),D>0&&e.jsx(C,{style:{height:(d?33:53)*D},children:e.jsx(g,{colSpan:6})})]})]})}),e.jsx(ge,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:f,page:m,onPageChange:M,onRowsPerPageChange:G})]}),e.jsx(be,{control:e.jsx(ae,{checked:d,onChange:K}),label:"Dense padding"}),e.jsx(O,{open:z,handleClose:V,handleSave:X,currentRow:H,setCurrentRow:y})]})}export{Me as default};
