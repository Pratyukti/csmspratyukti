import{r as s,h as X,j as e,D as W}from"./index-DVtbL_0t.js";import{I as Z}from"./Delete-BEf0QQUs.js";import{T as ee}from"./Training4-xonmR4Bv.js";import{B as x}from"./Box-Ygqwgq3O.js";import{P as O,T as d}from"./IconButton-UFTozpv0.js";import{G as o}from"./Grid-Ba4WkQuK.js";import{T as y}from"./TextField-CGrINYJd.js";import{B as S}from"./Button-KtSAKQgl.js";import{C as A}from"./CircularProgress-D9hPH-Fy.js";import{D as te,a as re,b as se,c as ae}from"./DialogTitle-BriTIeca.js";import{T as ne,a as oe,b as le,c as L,d as p,e as ie}from"./TableRow-fQeN1xCn.js";import"./createSvgIcon-B8IBcfEu.js";function Ce(){var M;const[f,T]=s.useState([]),[l,b]=s.useState(""),[g,D]=s.useState(""),[R,I]=s.useState(""),[E,h]=s.useState(!1),[w,C]=s.useState(""),[_,k]=s.useState(""),[P,j]=s.useState(""),[ce,q]=s.useState(""),[Y,$]=s.useState(!1),[a,v]=s.useState(null),G=X(t=>t.userInfo),[F,de]=s.useState(G.whitelevel_id);s.useEffect(()=>{const r=new Date().toISOString().split("T")[0];b(r)},[]),s.useEffect(()=>{if(l){const t=N(l);D(t)}},[l]);const H=t=>{T(t)},U=()=>{let t=!0;if(l?C(""):(C("Checkup Date is required."),t=!1),g?k(""):(k("Next Checkup Date is required."),t=!1),!f.length)j("Employees are required."),t=!1;else{let r=!1;f.forEach((n,i)=>{(!n.employee_id||!n.employee_name)&&(j(`Employee ${i+1} has empty fields.`),r=!0,t=!1)}),r||j("")}return t},z=async t=>{if(t.preventDefault(),h(!0),!U()){h(!1);return}const r={checkUpDate:l,nextCheckUpDate:g,employees:f,image:R,whitelevelId:F};try{const i=(await W.post("/medical/create/",r)).data,V=f.reduce((u,c)=>(u[c.employee_id]=c,u),{});Object.entries(i).forEach(([u,c])=>{const m=V[u];m?c.result==="success"?alert(`Medical checkup saved successfully for ${m.employee_name} (ID: ${m.employee_id})`):c.result==="error"&&alert(`Error for ${m.employee_name} (ID: ${m.employee_id}): ${c.message}`):console.error(`Employee with ID ${u} not found in the employees list.`)}),K()}catch(n){if(n.isAxiosError&&n.response){console.error(`HTTP error! status: ${n.response.status}`);const i=JSON.stringify(n.response.data);console.error("Response body:",i),alert(`Error: ${i}`)}else n.name==="TypeError"?(console.error("Network error: Please check if the server is running and accessible."),alert("Network error: Please check if the server is running and accessible.")):(console.error("Error fetching data:",n),alert(`Error fetching data: ${n.message}`))}finally{h(!1)}},N=t=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+1),r.toISOString().split("T")[0]},J=t=>{const r=t.target.value;b(r)},K=()=>{const t=new Date().toISOString().split("T")[0];b(t),D(N(t)),T([]),I(""),C(""),k(""),j(""),q("")},Q=async()=>{h(!0);try{const t=await W.post("/medical/medical-details/",{start_date:l,end_date:g,whitelevel_id:F});t.data&&t.data.message&&t.data.message==="No medical checkups found for the given criteria."?(v(null),alert("No records found for the selected checkup dates.")):v(t.data),$(!0)}catch(t){console.error("Error fetching modal data:",t),alert("Error fetching modal data.")}finally{h(!1)}},B=()=>{$(!1)};return e.jsxs(x,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[e.jsx("form",{onSubmit:z,children:e.jsxs(O,{sx:{padding:4,width:"100%"},children:[e.jsx(x,{sx:{display:"flex",justifyContent:"center",marginBottom:2},children:e.jsx(d,{variant:"h6",gutterBottom:!0,children:"Medical Checkup Form"})}),e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:6,children:e.jsx(y,{label:"Checkup Date*",type:"date",value:l,fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{max:new Date().toISOString().split("T")[0]},onChange:J,error:!!w,helperText:w})}),e.jsx(o,{item:!0,xs:6,children:e.jsx(y,{label:"Next Checkup Date*",type:"date",value:g,fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{min:l},onChange:t=>D(t.target.value),error:!!_,helperText:_})}),e.jsxs(o,{item:!0,xs:12,sx:{marginBottom:2},children:["Employees*",e.jsx(ee,{onChange:H}),P&&e.jsx(d,{color:"error",variant:"body2",children:P})]}),e.jsx(o,{item:!0,xs:12,children:e.jsx(Z,{setCompressedImageBase64:I})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(x,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(S,{type:"submit",variant:"contained",color:"primary",disabled:E,children:E?e.jsx(A,{size:24}):"Submit"})})}),e.jsx(o,{item:!0,xs:12,children:e.jsx(x,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(S,{variant:"outlined",color:"secondary",onClick:Q,children:"Search"})})})]})]})}),e.jsxs(te,{open:Y,onClose:B,fullWidth:!0,maxWidth:"lg",children:[e.jsx(re,{children:"Medical Checkup Details"}),e.jsx(se,{children:E?e.jsx(A,{}):e.jsx(e.Fragment,{children:!a||!a.employees||a.employees.length===0?e.jsx(e.Fragment,{children:e.jsx(d,{variant:"body2",color:"error",children:"No records found for the selected checkup dates."})}):e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{margin:2},children:e.jsxs(o,{container:!0,spacing:2,children:[e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(y,{label:"Checkup Date",type:"date",value:(a==null?void 0:a.checkup_date)||"",fullWidth:!0,InputLabelProps:{shrink:!0}})}),e.jsx(o,{item:!0,xs:12,sm:6,children:e.jsx(y,{label:"Next Checkup Date",type:"date",value:(a==null?void 0:a.next_checkup_date)||"",fullWidth:!0,InputLabelProps:{shrink:!0}})})]})}),e.jsx(ne,{component:O,sx:{marginTop:2},children:e.jsxs(oe,{children:[e.jsx(le,{children:e.jsxs(L,{children:[e.jsx(p,{sx:{fontWeight:"bold",padding:2,textAlign:"center"},children:"Employee ID"}),e.jsx(p,{sx:{fontWeight:"bold",padding:2,textAlign:"center"},children:"Employee Name"}),e.jsx(p,{sx:{fontWeight:"bold",padding:2,textAlign:"center"},children:"Image"})]})}),e.jsx(ie,{children:(M=a==null?void 0:a.employees)==null?void 0:M.map((t,r)=>e.jsxs(L,{children:[e.jsx(p,{sx:{padding:2,textAlign:"center"},children:e.jsx(d,{variant:"body2",children:t.employee_id})}),e.jsx(p,{sx:{padding:2,textAlign:"center"},children:e.jsx(d,{variant:"body2",children:t.employee_name})}),e.jsx(p,{sx:{padding:2,textAlign:"center"},children:t.image?e.jsx("img",{src:`data:image/jpeg;base64,${t.image}`,alt:`Medical Checkup for ${t.employee_name}`,width:"100",style:{borderRadius:"8px",border:"1px solid #ccc"}}):e.jsx(d,{variant:"body2",color:"error",children:"No image available"})})]},r))})]})})]})})}),e.jsx(ae,{children:e.jsx(S,{onClick:B,color:"primary",children:"Close"})})]})]})}export{Ce as default};
