import{h as fe,r as i,j as e,D as Z}from"./index-D9pTrmyN.js";import{T as ye,I as _e}from"./Training4-srZrGOuR.js";import{R as S,a as c,T as Q}from"./Training2-UnMDgUsZ.js";import{C as je}from"./Container-B2BzLp5g.js";import{B as h}from"./Box-CaQnpd-f.js";import{C as ge,a as be,D as ve}from"./CardContent-CUOwhLkv.js";import{G as l}from"./Grid-BTc7sUWF.js";import{T as B,F as j,a as w}from"./TextField-B82FT8Gd.js";import{B as H}from"./Button-Dsw2z1pm.js";import{F as d}from"./FormControlLabel-DSddV3mn.js";import{T as m,B as Se}from"./IconButton-BphNlixg.js";import{C as we}from"./CircularProgress-nKnpzfnB.js";import"./createSvgIcon-CxW3tpGz.js";import"./TableRow-DDDJZlTx.js";import"./styled-CIiJ6-l4.js";import"./dividerClasses-DIkgzp1H.js";const ze=()=>{const K=fe(t=>t.userInfo),[f,X]=i.useState(K.whitelevel_id),[x,P]=i.useState(""),[g,$]=i.useState("false"),[p,W]=i.useState(""),[T,O]=i.useState(new Date().toISOString().split("T")[0]),[u,M]=i.useState(""),[C,q]=i.useState(""),[I,F]=i.useState(""),[k,L]=i.useState(""),[b,E]=i.useState([]),[y,D]=i.useState([]),[v,A]=i.useState([]),[z,U]=i.useState(""),[G,Y]=i.useState(""),[N,_]=i.useState(!1),[Te,ee]=i.useState(null);i.useState({option1:!1});const[s,J]=i.useState({accident_report_date:"",accident_id:""}),te=t=>{U(t.target.value)},re=async t=>{if(t.target,!!u){_(!0);try{const n=await Z.post("/accident/accident-detail-get/",{accident_id:u,whitelevel_id:f}),r=n.data;ee(r),r?(O(r.date_of_accident||new Date().toISOString().split("T")[0]),P(r.incident_type||""),F(r.permit_status||""),L(r.ppe_status||""),q(r.severity||""),$(r.toolbox_train||"false"),W(r.toolbox_refno||""),A(r.reported_by||[]),D(r.workmen||[]),E(r.supervisors||[]),U(r.about||""),Y(r.accident_image),D(r.workmen.map(o=>({employee_id:o.employee_id||"0",employee_name:o.employee_name||"Others"}))),E(r.supervisors.map(o=>({employee_id:o.employee_id||"0",employee_name:o.employee_name||"Others"}))),A(r.reported_by.map(o=>({employee_id:o.employee_id||"0",employee_name:o.employee_name||"Others"})))):alert("No accident data found. Please check the reference number."),console.log("Fetched data:",n.data)}catch(n){console.error("Error fetching accident data:",n),J({fetch:"Failed to fetch accident data. Please try again."})}finally{_(!1)}}},V=(t,n)=>{t==="supervisors"&&E(n),t==="workmen"&&D(n),t==="reported_by"&&A(n)},se=t=>{P(t.target.value)},ne=t=>{$(t.target.value)},oe=t=>{O(t.target.value)},ae=t=>{M(t.target.value)},ie=t=>{q(t.target.value)},le=t=>{F(t.target.value)},ce=t=>{L(t.target.value)},de=t=>{W(t.target.value)},me=()=>{const t={};T||(t.accident_report_date="Date is required"),u?u.length<3||u.length>21?t.accident_id="Reference Number length must be between 3 and 21 characters":/^[a-zA-Z0-9/-]+$/.test(u)?u.startsWith("Acc")||(t.accident_id='Reference Number must start with "Acc"'):t.accident_id="Reference Number can only contain letters, numbers, hyphens (-), and forward slashes (/)":t.accident_id="Reference Number is required",x||(t.accident_type="Incident Type is required"),x==="2"&&(C||(t.severity="Severity is required"),I||(t.permit_status="Permit Status is required"),k||(t.ppe_status="PPE Status is required"),g==="true"&&!p?t.toolbox_reference_number="ToolBox Reference Number is required when Tool Box Talk is Yes":p&&(p.length<3||p.length>21?t.toolbox_reference_number="ToolBox Reference Number length must be between 3 and 21 characters":/^[a-zA-Z0-9/-]+$/.test(p)||(t.toolbox_reference_number="ToolBox Reference Number can only contain letters, numbers, hyphens (-), and forward slashes (/)")));const n=(r,o)=>{o.length===0?t[r]=`${r.replace("_"," ")} is empty`:o.forEach((a,xe)=>{const R={};a.employee===0||a.employee==="0"||(!a.employee||a.employee.trim()==="")&&(R.employee_id="Employee ID is required"),(!a.employee_name||a.employee_name.trim()==="")&&(R.employee_name="Employee Name is required"),Object.keys(R).length>0&&(t[r]||(t[r]=[]),t[r][xe]=R)})};return y.length===0&&(t.workmen="Workmen Involved is required"),v.length>0&&n("reported_by",v),y.length>0&&n("workmen",y),b.length>0&&n("supervisors",b),J(t),Object.keys(t).length===0},ue=()=>{X(K.whitelevel_id),P(""),$("false"),W(""),O(new Date().toISOString().split("T")[0]),M(""),q(""),F(""),L(""),E([]),D([]),A([]),U(""),Y("")},pe=async t=>{if(t.preventDefault(),!me())return;_(!0);const n={accident_reporting_date:T,accident_id:u,accident_type:parseInt(x,10),severity:parseInt(C,10),permit_status:parseInt(I,10),ppe_status:parseInt(k,10),toolbox_train:g==="true",toolbox_reference_number:p,accident_image:G,about_the_accident:z,whitelevel:f,reported_by:v.map(({employee:r,employee_name:o,whitelevel_id:a})=>({employee:r,employee_name:o,whitelevel_id:a})),workmen:y.map(({employee:r,employee_name:o,whitelevel_id:a})=>({employee:r,employee_name:o,whitelevel_id:a})),supervisors:b.map(({employee:r,employee_name:o,whitelevel_id:a})=>({employee:r,employee_name:o,whitelevel_id:a}))};console.log("Submitting the following data:"),console.log(JSON.stringify(n,null,2));try{const r=await Z.post("/accident/create/",n);console.log("Success:",r.data),window.alert("Accident Form submitted successfully!"),ue(n)}catch(r){if(r.isAxiosError&&r.response){console.error(`HTTP error! status: ${r}`);const o=JSON.stringify(r.response.data);console.error("Response body:",o),alert(`Error: ${o}`)}else r.name==="TypeError"?(console.error("Network error: Please check if the server is running and accessible."),alert("Network error: Please check if the server is running and accessible.")):(console.error("Error fetching data:",r),alert(`Error fetching data: ${r.message}`));console.error("Error in handleSubmit:",r.message),window.alert("Error submitting form. Please try again.")}finally{_(!1)}},he=async t=>{t.preventDefault(),_(!0);const n={date_of_accident:T,accident_id:u,accident_type:parseInt(x,10),severity:parseInt(C,10),permit_status:parseInt(I,10),ppe_status:parseInt(k,10),toolbox_train:g==="true",toolbox_reference_number:p,accident_image:G,about_the_accident:z,whitelevel_id:f,reported_by:v.map(({employee:r,employee_name:o,whitelevel_id:a})=>({employee_id:r,employee_name:o,whitelevel_id:a})),workmen:y.map(({employee:r,employee_name:o,whitelevel_id:a})=>({employee_id:r,employee_name:o,whitelevel_id:a})),supervisors:b.map(({employee:r,employee_name:o,whitelevel_id:a})=>({employee_id:r,employee_name:o,whitelevel_id:a}))};try{const r=await Z.put("accident/accident-details-update/",n);console.log("Updated Accident:",r.data),alert("Updated Accident:",r.data)}catch(r){console.error("Error:",r),J("An error occurred while updating the accident.")}finally{_(!1)}};return e.jsxs(je,{children:[e.jsx(h,{className:"section",sx:{display:"flex",justifyContent:"center",padding:4},children:e.jsx("form",{onSubmit:pe,children:e.jsx(ge,{sx:{maxwidth:"100%",padding:3,boxShadow:3},children:e.jsxs(be,{children:[e.jsxs(l,{container:!0,spacing:2,children:[e.jsx(l,{item:!0,xs:12,sm:5.5,children:e.jsx(B,{label:"Date",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{max:new Date().toISOString().split("T")[0]},value:T,onChange:oe,error:!!s.accident_report_date,helperText:s.accident_report_date,required:!0})}),e.jsx(l,{item:!0,xs:12,sm:5.5,children:e.jsx(B,{label:"Reference Number",fullWidth:!0,onChange:ae,value:u,error:!!s.accident_id,helperText:s.accident_id,required:!0})}),e.jsx(l,{item:!0,xs:12,sm:1,sx:{marginTop:"10px"},children:e.jsx(H,{variant:"contained",color:"secondary",onClick:re,fullWidth:!0,disabled:N,children:"ok"})})]}),e.jsx(ve,{sx:{marginY:3}}),e.jsxs(j,{component:"fieldset",margin:"normal",error:!!s.accident_type,children:[e.jsx(w,{component:"legend",children:"Incident Type*:"}),e.jsxs(S,{row:!0,value:x,onChange:se,children:[e.jsx(d,{value:"2",control:e.jsx(c,{}),label:"Accident"}),e.jsx(d,{value:"1",control:e.jsx(c,{}),label:"Near Miss"}),e.jsx(d,{value:"3",control:e.jsx(c,{}),label:" Safety Violation"})]}),s.accident_type&&e.jsx(m,{color:"error",children:s.accident_type})]}),x&&e.jsxs(l,{container:!0,spacing:2,children:[e.jsxs(l,{item:!0,xs:12,children:[e.jsx(m,{gutterBottom:!0,children:"Reported By: (Enter 0 in case of Others)"}),e.jsx(Q,{onEmployeesChange:t=>V("reported_by",t),initialWhitelevelId:f,initialData:v}),Array.isArray(s.reported_by)&&s.reported_by.length>0&&e.jsx(h,{children:s.reported_by.map((t,n)=>e.jsxs(h,{children:[t.employee_id&&e.jsx(m,{color:"error",children:`Employee ${n+1} ID: ${t.employee_id}`}),t.employee_name&&e.jsx(m,{color:"error",children:`Employee ${n+1} Name: ${t.employee_name}`})]},n))})]}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(m,{gutterBottom:!0,children:"Workmen Involved*: (Enter 0 in case of Others)"}),e.jsx(Q,{onEmployeesChange:t=>V("workmen",t),initialWhitelevelId:f,initialData:y}),s.workmen&&typeof s.workmen=="string"&&e.jsx(h,{children:e.jsx(m,{color:"error",children:s.workmen})}),Array.isArray(s.workmen)&&s.workmen.length>0&&e.jsx(h,{children:s.workmen.map((t,n)=>e.jsxs(h,{children:[t.employee_id&&e.jsx(m,{color:"error",children:`Employee ${n+1} ID: ${t.employee_id}`}),t.employee_name&&e.jsx(m,{color:"error",children:`Employee ${n+1} Name: ${t.employee_name}`})]},n))})]}),e.jsxs(l,{item:!0,xs:12,children:[e.jsx(m,{gutterBottom:!0,children:"Supervisor:"}),e.jsx(ye,{onChange:t=>V("supervisors",t),initialWhitelevelId:f,initialData:b}),Array.isArray(s.supervisors)&&s.supervisors.length>0&&e.jsx(h,{children:s.supervisors.map((t,n)=>e.jsxs(h,{children:[t.employee_id&&e.jsx(m,{color:"error",children:`Supervisor ${n+1} ID: ${t.employee_id}`}),t.employee_name&&e.jsx(m,{color:"error",children:`Supervisor ${n+1} Name: ${t.employee_name}`})]},n))})]}),x==="2"&&e.jsxs(e.Fragment,{children:[e.jsx(l,{item:!0,xs:12,children:e.jsxs(j,{component:"fieldset",error:!!s.severity,children:[e.jsx(w,{component:"legend",children:"Severity*"}),e.jsxs(S,{row:!0,value:C,onChange:ie,children:[e.jsx(d,{value:"1",control:e.jsx(c,{}),label:"1"}),e.jsx(d,{value:"2",control:e.jsx(c,{}),label:"2"}),e.jsx(d,{value:"3",control:e.jsx(c,{}),label:"3"}),e.jsx(d,{value:"4",control:e.jsx(c,{}),label:"4"}),e.jsx(d,{value:"5",control:e.jsx(c,{}),label:"5"})]}),s.severity&&e.jsx(m,{color:"error",children:s.severity})]})}),e.jsx(l,{item:!0,xs:12,children:e.jsxs(j,{component:"fieldset",error:!!s.permit_status,children:[e.jsx(w,{component:"legend",children:"Permit Status*"}),e.jsxs(S,{row:!0,value:I,onChange:le,children:[e.jsx(d,{value:"4",control:e.jsx(c,{}),label:"Valid"}),e.jsx(d,{value:"3",control:e.jsx(c,{}),label:"Not Required"}),e.jsx(d,{value:"2",control:e.jsx(c,{}),label:"No Permit"}),e.jsx(d,{value:"1",control:e.jsx(c,{}),label:"Expired"})]}),s.permit_status&&e.jsx(m,{color:"error",children:s.permit_status})]})}),e.jsx(l,{item:!0,xs:12,sm:6,children:e.jsxs(j,{component:"fieldset",error:!!s.ppe_status,children:[e.jsx(w,{component:"legend",children:"PPE Status*"}),e.jsxs(S,{row:!0,value:k,onChange:ce,children:[e.jsx(d,{value:"2",control:e.jsx(c,{}),label:"OK"}),e.jsx(d,{value:"1",control:e.jsx(c,{}),label:"Faulty"})]}),s.ppe_status&&e.jsx(m,{color:"error",children:s.ppe_status})]})}),e.jsxs(l,{item:!0,xs:12,sm:6,children:[e.jsxs(j,{component:"fieldset",children:[e.jsx(w,{component:"legend",children:"Tool Box Talk*"}),e.jsxs(S,{row:!0,value:g,onChange:ne,children:[e.jsx(d,{value:"true",control:e.jsx(c,{}),label:"Yes"}),e.jsx(d,{value:"false",control:e.jsx(c,{}),label:"No"})]})]}),g==="true"&&e.jsx(B,{label:"ToolBox Reference Number",fullWidth:!0,onChange:de,value:p,sx:{marginTop:2},error:!!s.toolbox_reference_number,helperText:s.toolbox_reference_number})]})]}),e.jsx(l,{item:!0,xs:12,children:e.jsx(j,{fullWidth:!0,margin:"normal",children:e.jsx(B,{label:"Description....",multiline:!0,rows:4,value:z,onChange:te})})}),e.jsx(l,{item:!0,xs:12,children:e.jsx(_e,{setCompressedImageBase64:Y,compressedImageBase64:G})})]}),e.jsxs(l,{container:!0,spacing:2,sx:{marginTop:"20px"},children:[e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(H,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:N,children:"Submit Accident"})}),e.jsx(l,{item:!0,xs:12,md:6,children:e.jsx(H,{variant:"contained",color:"secondary",onClick:he,fullWidth:!0,disabled:N,children:"Update Accident"})})]})]})})})}),e.jsx(Se,{open:N,sx:{color:"#fff",zIndex:t=>t.zIndex.drawer+1},children:e.jsx(we,{color:"inherit"})})]})};export{ze as default};
