import{h as xe,r as l,j as t,D as j}from"./index-DGdAeW9h.js";import{D as je,F as be,A as Se,I as we}from"./Delete-DfYT_AO1.js";import{B as h}from"./Box-ZndKGl1R.js";import{B as De,T as f,P as Ee,I as Ie}from"./IconButton-B9Dpe888.js";import{C as ve}from"./CircularProgress-DiMQa9ZR.js";import{C as Ce,a as Pe,D as te}from"./CardContent-aj_n-wWe.js";import{G as g}from"./Grid-DiFhWXSj.js";import{T as w,F as C}from"./TextField-0EU51aYM.js";import{B as M}from"./Button-QFBUhiXp.js";import{F as b}from"./FormControlLabel-BbkpA1Hi.js";import{C as S}from"./Checkbox-F8ro1oxE.js";import{T as Te,a as Re,b as Ne,c as ae,d as x,e as Fe}from"./TableRow-Cwx1xBaR.js";import"./createSvgIcon-Cw7JBs2a.js";import"./dividerClasses-B07WlD69.js";import"./styled-BhVunyfx.js";const Je=()=>{const G=xe(e=>e.userInfo),[d,P]=l.useState({TOOLS:!1,PPE:!1,DRESS:!1}),[T,Z]=l.useState([]),[R,H]=l.useState([]),[N,Q]=l.useState([]),[D,F]=l.useState(new Date().toISOString().split("T")[0]),[y,V]=l.useState(""),[O,Oe]=l.useState(G.whitelevel_id),[B,L]=l.useState("");l.useState([]);const[m,E]=l.useState({}),[I,v]=l.useState(!1),[A,k]=l.useState(""),[p,X]=l.useState({tools:[],ppes:[],dresses:[]});l.useState({option1:!1}),l.useState({}),l.useState({}),l.useState({});const[u,_]=l.useState([]),[J,U]=l.useState([]),[re,K]=l.useState(null),[oe,z]=l.useState(null),[Y,Be]=l.useState(G.whitelevel_id),ee=async e=>{try{return(await j.post("/employee/name/",{employee_id:e,whitelevel_id:Y})).data.employee_name||""}catch(r){return console.error("Error fetching employee name:",r),""}},le=async e=>{try{return(await j.get(`/employee/search/?nameQuery=${e}`)).data||[]}catch(r){return console.error("Error fetching employee suggestions:",r),[]}},ne=()=>{if(u.some(s=>s.employee_id.trim()===""||s.employee_name.trim()==="")){alert("Please fill in all the fields before adding a new row.");const s=u.map(a=>({...a,error:a.employee_id.trim()===""||a.employee_name.trim()===""?"empty_field":a.error}));_(s),console.log("Updated rows after adding a row with empty fields:",s);return}const r=[...u,{employee_id:"",whitelevel_id:Y,employee_name:"",error:null,disableNameField:!1}];_(r),console.log("Updated rows after adding a new row:",r)},ie=e=>{const r=u.filter((s,a)=>a!==e);_(r),console.log("Updated rows after deleting a row:",r)},ce=async(e,r)=>{const{name:s,value:a}=r.target,o=[...u];if(o[e][s]=a.trim(),s==="employee_id")if(o.some((i,n)=>i.employee_id===a&&n!==e))o[e].error="duplicate",o[e].employee_name="",o[e].disableNameField=!0;else if(a.trim()!==""){const i=await ee(a);i?(o[e].employee_name=i,o[e].error=null,o[e].disableNameField=!0):(o[e].employee_name="",o[e].error="invalid",o[e].disableNameField=!0)}else o[e].employee_name="",o[e].error=null,o[e].disableNameField=!1;_(o),console.log("Updated rows after employee_id input change:",o)},me=async(e,r)=>{const s=r.target.value,a=[...u];if(/^[a-zA-Z\s.]*$/.test(s)){if(a[e].employee_name=s,s.trim()!=="")if(a.some((n,$)=>n.employee_name===s&&$!==e))a[e].error="duplicate_name",a[e].disableIDField=!0;else{const n=await le(s);U(n),z(e),a[e].disableIDField=!1}else U([]),z(null),a[e].disableIDField=!1;const c=await ee(a[e].employee_id);s.trim()!==c?a[e].error="name_mismatch":a[e].error=null}else a[e].error="invalid_name";_(a),console.log("Updated rows after employee_name input change:",a)},de=(e,r)=>{const s=[...u];s.some(o=>o.employee_id===r.employee_id&&o!==s[e])?(s[e].error="duplicate",s[e].disableNameField=!0):(s[e].employee_id=r.employee_id,s[e].employee_name=r.employee_name,s[e].error=null,s[e].disableNameField=!0),_(s),U([]),z(null),console.log("Updated rows after suggestion click:",s)},pe=e=>{K(e)},ue=()=>{K(null)};l.useEffect(()=>{(async()=>{try{const s=(await j.get("/item/getAll/")).data,a=s.filter(i=>i.item_type.item_type_name==="Tool"),o=s.filter(i=>i.item_type.item_type_name==="PPE"),c=s.filter(i=>i.item_type.item_type_name==="Dress");X({tools:a,ppes:o,dresses:c})}catch(r){console.error("Error fetching items:",r)}})()},[]);const he=async e=>{if(e.target,!y){alert("Issuance ID is required to fetch details.");return}try{const s=(await j.post("/item/get-details/",{issue_id:y,whitelevel_id:O})).data;if(s){F(s.new_issuance.issuance_date);const a={TOOLS:s.issued_things.some(n=>n.item_type_id==="1"),PPE:s.issued_things.some(n=>n.item_type_id==="2"),DRESS:s.issued_things.some(n=>n.item_type_id==="3")};P(a);const o=s.issued_things.filter(n=>n.item_type_id==="1"),c=s.issued_things.filter(n=>n.item_type_id==="2"),i=s.issued_things.filter(n=>n.item_type_id==="3");X({tools:o,ppes:c,dresses:i}),_(s.issued_to_employees.map(n=>({employee_id:n.employee,employee_name:n.employee_name}))),L(s.new_issuance.newIssuance_image),k(s.new_issuance.about_the_newissuance)}else alert("No issuance data found. Please check the reference number.")}catch(r){console.error("Error fetching issuance data:",r),E({fetch:"Failed to fetch issuance data. Please try again."})}},fe=async e=>{e.preventDefault(),v(!0);const r=[...R.map(a=>({item:a.item})),...T.map(a=>({item:a.item})),...N.map(a=>({item:a.item}))],s={issuance_id:y,whitelevel_id:O,issuance_date:D,newIssuance_image:B,about_the_newissuance:A,issued_things:r,issued_to_employees:u.map(({employee_id:a})=>({employee:a}))};try{const a=await j.put("item/newissuance-update/",s);console.log("Updated NewIssuance SucessFully:",a.data),alert("Updated NewIssuance SucessFully:",a.data),se()}catch(a){console.error("Error:",a),E("An error occurred while updating the NewIssuance.")}finally{v(!1)}},W=e=>{const{name:r,checked:s}=e.target;P(a=>({...a,[r]:s}))},q=(e,r)=>{const{name:s,checked:a}=e.target,o=(c,i,n)=>n?[...c,{item:i}]:c.filter($=>$.item!==i);r==="TOOLS"&&H(c=>o(c,s,a)),r==="PPE"&&Z(c=>o(c,s,a)),r==="DRESS"&&Q(c=>o(c,s,a))},ye=e=>{k(e.target.value)},ge=()=>{let e={};D||(e.issuance_date="Issuance date is required");const r=/^[A-Za-z0-9/-]+$/;return y?y.length<3||y.length>21?e.issuance_id="Reference number must be between 3 and 21 characters":r.test(y)||(e.issuance_id="Reference number can only contain letters, numbers, hyphens, and slashes"):e.issuance_id="Reference number is required",d.TOOLS&&R.length===0&&(e.tools="At least one tool must be selected"),d.PPE&&T.length===0&&(e.ppe="At least one PPE must be selected"),d.DRESS&&N.length===0&&(e.dress="At least one dress must be selected"),u.length===0?e.rows="Employee details are required":u.forEach(({employee_id:s,employee_name:a},o)=>{(!s||!a)&&(e.rows=`Employee ID and Name cannot be empty for entry #${o+1}`)}),!d.TOOLS&&!d.PPE&&!d.DRESS&&(e.items="At least one item category must be selected"),E(e),Object.keys(e).length===0},se=()=>{P({TOOLS:!1,PPE:!1,DRESS:!1}),Z([]),H([]),Q([]),F(new Date().toISOString().split("T")[0]),V(""),L(""),E({}),k(""),_([])},_e=async()=>{if(!ge())return;v(!0);const e=[...R.map(s=>({item:s.item})),...T.map(s=>({item:s.item})),...N.map(s=>({item:s.item}))],r={issuance:{issuance_id:y,white_level_id:O,issuance_date:D,newIssuance_image:B||null,about_the_newissuance:A},issued_things:e,employees:u.map(({employee_id:s,employee_name:a,whitelevel_id:o})=>({employee_id:s,employee_name:a,whitelevel_id:o}))};try{const a=(await j.post("/item/new/",r)).data.message;console.log("Data submitted successfully:",a),alert("New Issuance Successfully submitted."),se()}catch(s){console.error("Error submitting data:",s),alert(`Error submitting data: ${s.message}`)}finally{v(!1)}};return t.jsxs(h,{className:"section",sx:{display:"flex",justifyContent:"center",padding:4},children:[t.jsx(De,{sx:{color:"#fff",zIndex:e=>e.zIndex.drawer+1},open:I,children:t.jsx(ve,{color:"inherit"})}),t.jsx(Ce,{sx:{width:"100%",padding:3},children:t.jsxs(Pe,{children:[t.jsxs(g,{container:!0,spacing:2,marginBottom:3,children:[t.jsx(g,{item:!0,xs:12,sm:5.5,children:t.jsx(w,{label:"Date*",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{max:new Date().toISOString().split("T")[0]},value:D,onChange:e=>F(e.target.value),error:!!m.issuance_date,helperText:m.issuance_date})}),t.jsx(g,{item:!0,xs:12,sm:5.5,children:t.jsx(w,{label:"Reference Number*",fullWidth:!0,value:y,onChange:e=>V(e.target.value),error:!!m.issuance_id,helperText:m.issuance_id})}),t.jsx(g,{item:!0,xs:12,sm:1,children:t.jsx(M,{variant:"contained",color:"secondary",onClick:he,fullWidth:!0,disabled:I,children:"ok"})})]}),t.jsx(te,{sx:{marginBottom:3}}),t.jsx(f,{variant:"h6",children:"Items*:"}),m.items&&t.jsx(f,{color:"error",children:m.items}),t.jsx(b,{control:t.jsx(S,{checked:d.TOOLS,onChange:W,name:"TOOLS"}),label:"TOOLS"}),t.jsx(b,{control:t.jsx(S,{checked:d.PPE,onChange:W,name:"PPE"}),label:"PPE"}),t.jsx(b,{control:t.jsx(S,{checked:d.DRESS,onChange:W,name:"DRESS"}),label:"DRESS"}),d.TOOLS&&t.jsxs(h,{marginBottom:3,children:[t.jsxs(C,{component:"fieldset",children:[t.jsx(f,{variant:"h6",children:"TOOLS"}),((p==null?void 0:p.tools)??[]).length>0?t.jsx(h,{display:"flex",justifyContent:"space-between",children:[...Array(4)].map((e,r)=>t.jsx(h,{display:"flex",flexDirection:"column",flex:"1 0 22%",marginRight:r<3?2:0,marginBottom:2,children:p.tools.slice(r*10,(r+1)*10).map(s=>t.jsx(b,{control:t.jsx(S,{onChange:a=>q(a,"TOOLS"),name:s.item_id}),label:s.item_name},s.item_id))},r))}):t.jsx(f,{children:"Loading tools..."})]}),m.tools&&t.jsx(f,{color:"error",children:m.tools})]}),d.PPE&&t.jsxs(h,{marginBottom:3,children:[t.jsxs(C,{component:"fieldset",children:[t.jsx(f,{variant:"h6",children:"PPE"}),((p==null?void 0:p.ppes)??[]).length>0?t.jsx(h,{display:"flex",justifyContent:"space-between",children:[...Array(4)].map((e,r)=>t.jsx(h,{display:"flex",flexDirection:"column",flex:"1 0 22%",marginRight:r<3?2:0,marginBottom:2,children:p.ppes.slice(r*10,(r+1)*10).map(s=>t.jsx(b,{control:t.jsx(S,{onChange:a=>q(a,"PPE"),name:s.item_id}),label:s.item_name},s.item))},r))}):t.jsx(f,{children:"Loading PPE..."})]}),m.ppe&&t.jsx(f,{color:"error",children:m.ppe})]}),d.DRESS&&t.jsxs(h,{marginBottom:3,children:[t.jsxs(C,{component:"fieldset",children:[t.jsx(f,{variant:"h6",children:"DRESS"}),((p==null?void 0:p.dresses)??[]).length>0?t.jsx(h,{display:"flex",justifyContent:"space-between",children:[...Array(4)].map((e,r)=>t.jsx(h,{display:"flex",flexDirection:"column",flex:"1 0 22%",marginRight:r<3?2:0,marginBottom:2,children:p.dresses.slice(r*10,(r+1)*10).map(s=>t.jsx(b,{control:t.jsx(S,{onChange:a=>q(a,"DRESS"),name:s.item_id}),label:s.item_name},s.item))},r))}):t.jsx(f,{children:"Loading dresses..."})]}),m.dress&&t.jsx(f,{color:"error",children:m.dress})]}),t.jsx(te,{sx:{marginBottom:3}}),t.jsxs(h,{sx:{position:"relative",backgroundColor:"#FAF9F6"},children:[t.jsx(Te,{component:Ee,sx:{border:"1px solid lightgrey",borderRadius:"8px",boxShadow:"none"},children:t.jsxs(Re,{children:[t.jsx(Ne,{children:t.jsxs(ae,{children:[t.jsx(x,{children:"Sl. No"}),t.jsx(x,{sx:{pl:12},children:"Employee ID"}),t.jsx(x,{sx:{pl:12},children:"Employee Name"}),t.jsx(x,{children:"Actions"})]})}),t.jsxs(Fe,{children:[m.rows&&t.jsx(f,{color:"error",children:m.rows}),u.map((e,r)=>t.jsxs(ae,{children:[t.jsx(x,{children:r+1}),t.jsx(x,{children:t.jsx(w,{variant:"outlined",size:"small",name:"employee_id",value:e.employee_id,onChange:s=>ce(r,s),fullWidth:!0,required:!0,error:!!e.error,helperText:e.error==="duplicate"?"Duplicate employee ID":e.error==="invalid"?"Employee does not exist":e.error==="empty_field"?"Employee ID should not be empty":"",disabled:e.disableIDField})}),t.jsxs(x,{children:[t.jsx(w,{variant:"outlined",size:"small",name:"employee_name",value:e.employee_name,onChange:s=>me(r,s),fullWidth:!0,required:!0,error:!!e.error,helperText:e.error==="invalid_name"?"Invalid characters. Only letters, spaces, and dots are allowed.":e.error==="name_mismatch"?"Incorrect name for the given Employee ID":e.error==="duplicate_name"?"Duplicate employee name":e.error==="empty_field"?"Employee Name should not be empty":"",disabled:e.disableNameField}),r===oe&&J.length>0&&t.jsx("div",{style:{position:"absolute",zIndex:1e3,width:"100%",backgroundColor:"#fff",border:"1px solid lightgrey",borderRadius:"4px",boxShadow:"0px 4px 8px rgba(0,0,0,0.2)",marginTop:"4px"},children:J.map((s,a)=>t.jsx("div",{style:{padding:"8px",backgroundColor:re===a?"#f0f0f0":"#fff",cursor:"pointer"},onMouseEnter:()=>pe(a),onMouseLeave:ue,onClick:()=>de(r,s),children:s.employee_name},s.employee_id))})]}),t.jsx(x,{children:t.jsx(Ie,{"aria-label":"delete",onClick:()=>ie(r),children:t.jsx(je,{})})})]},r))]})]})}),t.jsx(h,{mt:2,children:t.jsx(be,{size:"small",color:"primary","aria-label":"add",onClick:ne,sx:{position:"absolute",bottom:-18,left:"49%",transform:"translateX(-50%)",boxShadow:"none",zIndex:1},children:t.jsx(Se,{})})})]}),t.jsx(g,{item:!0,xs:12,children:t.jsx(C,{fullWidth:!0,margin:"normal",children:t.jsx(w,{label:"Description....",multiline:!0,rows:4,value:A,onChange:ye})})}),t.jsx(g,{item:!0,xs:12,children:t.jsx(we,{setCompressedImageBase64:L,compressedImageBase64:B})}),t.jsxs(g,{container:!0,spacing:2,sx:{marginTop:"20px"},children:[t.jsx(g,{item:!0,xs:12,md:6,children:t.jsx(M,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:I,onClick:_e,children:"Submit"})}),t.jsx(g,{item:!0,xs:12,md:6,children:t.jsx(M,{variant:"contained",color:"secondary",onClick:fe,fullWidth:!0,disabled:I,children:"Update NewIssuance"})})]})]})})]})};export{Je as default};
