import{h as ne,r as o,j as e,D as R}from"./index-BOrs9Cmb.js";import{R as se,a as N,T as le}from"./Training2-9E-JFLDJ.js";import{T as oe,I as de}from"./Training4-Cu7BmkG1.js";import{C as ce}from"./Container-B2kHdvQo.js";import{B as he}from"./Box-DpLwRB0J.js";import{C as me,a as ue,D as ge}from"./CardContent-Cr9D6Czc.js";import{G as c}from"./Grid-DEtsKlCu.js";import{T as j,F as z}from"./TextField-D9XwQG_q.js";import{B as U}from"./Button-Be_xG8_1.js";import{T as x}from"./IconButton-SZuj0VD6.js";import{F as q}from"./FormControlLabel-DOo0s4Nv.js";import"./createSvgIcon-CPmCxJRd.js";import"./TableRow-BtW6bwTe.js";import"./styled-D9bX19Hj.js";import"./dividerClasses-BjxhlnSS.js";const Ne=()=>{const F=ne(i=>i.userInfo),[_,W]=o.useState(F.whitelevel_id),[O,v]=o.useState(new Date().toISOString().split("T")[0]),[T,k]=o.useState(""),[m,b]=o.useState("4"),[y,w]=o.useState(""),[V,A]=o.useState(!1),[p,S]=o.useState([]),[f,I]=o.useState([]),[C,D]=o.useState(""),[P,u]=o.useState(!1),[B,E]=o.useState("");o.useState({option1:!1});const[n,g]=o.useState({trainingDate:"",trainingId:"",whitelevelId:"",trainingType:"",trainingName:"",trainers:"",trainees:"",image:"",about_the_training:""}),[G,Z]=o.useState(!1),$=(i,t)=>{const r=i.map(l=>l.trainer_id),s=t.map(l=>l.trainee_id);return r.filter(l=>s.includes(l)).length>0},H=async i=>{if(i.target,!!T){u(!0),u(!0);try{const t=await R.post("/training/training-details/",{training_id:T,whitelevel_id:_}),r=t.data;r?(v(r.training_date),b(r.training_type),w(r.training_name),S(r.trainers.map(s=>({employee_id:s.employee_id,employee_name:s.trainer_name}))),I(r.trainees.map(s=>({employee_id:s.employee_id,employee_name:s.trainee_name}))),D(r.training_image),E(r.about_the_training)):alert("No SafetyTraining data found. Please check the reference number."),console.log("Fetched data:",t.data)}catch(t){console.error("Error fetching accident data:",t),g({fetch:"Failed to fetch accident data. Please try again."})}finally{u(!1)}}},J=(i,t)=>{let r={...n};if(i==="trainers"&&(S(t),G)){let s=[],d=!1;if(t.forEach((l,a)=>{l.trainer_id!=="0"&&(!l.trainer_id||!l.trainer_name)&&(s.push(`Trainer ${a+1} has empty fields.`),d=!0)}),d){r.trainers=s.join(" "),g(r);return}$(t,f)?(r.trainers="Trainer and Trainee employee codes should not be equal",r.trainees="Trainer and Trainee employee codes should not be equal"):(r.trainers="",r.trainees="")}if(i==="trainees"&&(I(t),G)){let s=[],d=!1;if(t.forEach((l,a)=>{l.trainee_id!=="0"&&(!l.trainee_id||!l.trainee_name)&&(s.push(`Trainee ${a+1} has empty fields.`),d=!0)}),d){r.trainees=s.join(" "),g(r);return}$(p,t)?(r.trainers="Trainer and Trainee employee codes should not be equal",r.trainees="Trainer and Trainee employee codes should not be equal"):(r.trainers="",r.trainees="")}},K=i=>{W(i.target.value)},M=i=>{v(i.target.value)},Q=i=>{const t=i.target.value;b(t),A(t==="1"),g({...n,trainingType:t===""?"Training Type is required":""})},X=i=>{const t=i.target.value,r=/^[A-Za-z\s]*$/;w(t),m==="1"&&(r.test(t)?g({...n,trainingName:""}):g({...n,trainingName:"Training Name must contain only alphabets and spaces"}))},Y=i=>{k(i.target.value)},ee=i=>{E(i.target.value)},re=new Date().toISOString().split("T")[0],te=()=>{W(F.whitelevel_id),v(new Date().toISOString().split("T")[0]),k(""),b("4"),w(""),A(!1),S([]),I([]),D(""),E("")},ae=async i=>{var d,l;i.preventDefault(),u(!0),Z(!0);let t=!0;const r={trainingDate:O?"":"Training Date is required",trainingId:T?"":"Training ID is required",whitelevelId:_?"":"Whitelevel ID is required",trainingType:m?"":"Training Type is required",trainingName:m==="1"&&!y?"Training Name is required":"",trainers:p.length===0?"At least one Trainer is required":"",trainees:f.length===0?"At least one Trainee is required":""};if(m==="1"&&(y?/^[A-Za-z\s]*$/.test(y)||(r.trainingName="Training Name must contain only alphabets and spaces",t=!1):(r.trainingName="Training Name is required",t=!1)),Object.keys(r).forEach(a=>{r[a]&&(t=!1)}),p.forEach((a,h)=>{a.trainer_id!=="0"&&(!a.trainer_id||!a.trainer_name)&&(r[`trainer_${h}_name`]="Trainer name is required",t=!1)}),f.forEach((a,h)=>{a.trainee_id!=="0"&&(!a.trainee_id||!a.trainee_name)&&(r[`trainee_${h}_name`]="Trainee name is required",t=!1)}),$(p,f)&&(r.trainers="Trainer and Trainee employee codes should not be equal",r.trainees="Trainer and Trainee employee codes should not be equal",t=!1),g(r),!t){u(!1);return}const s={training_id:T,training_date:O,whitelevel_id:_,training_type:m,training_image:C,about_the_training:B,training_name:m==="1"?y:null,trainers:p.map(({trainer_id:a,whitelevel_id:h,trainer_name:L})=>({trainer_id:a,whitelevel_id:h,trainer_name:L})),trainees:f.map(({trainee_id:a,trainee_name:h,whitelevel_id:L})=>({trainee_id:a,whitelevel_id:L,trainee_name:h}))};console.log("Submitting the following data:"),console.log(JSON.stringify(s,null,2));try{const a=await R.post("/training/start/",s);console.log("Success:",a.data),window.alert("Safety Training Form submitted successfully!"),te(),W(F.whitelevel_id),v(new Date().toISOString().split("T")[0]),k(""),b("4"),w(""),A(!1),S([]),I([]),D(""),E("")}catch(a){if(a.response){console.error(`HTTP error! Status: ${a.response.status}`);const h=JSON.stringify(a.response.data);console.error("Response body:",h),((l=(d=a.response.data)==null?void 0:d.training_id)==null?void 0:l[0])==="training with this training id already exists."?window.alert("Training ID already exists. Please use a different ID."):window.alert("Error submitting form. Please check the details and try again.")}else a.isAxiosError?(console.error("Axios error:",a.message),window.alert("An error occurred with the request. Please try again.")):a.name==="TypeError"?(console.error("Network error: Please check if the server is running and accessible."),window.alert("Network error: Please check if the server is running and accessible.")):(console.error("Error fetching data:",a.message),window.alert(`Error fetching data: ${a.message}`))}finally{u(!1)}},ie=async i=>{i.preventDefault(),u(!0);const t={training_id:T,training_type:m,training_name:y,whitelevel_id:_,image:C,about_the_training:B,training_image:C,trainers:p.map(({trainer_id:r,whitelevel_id:s,trainer_name:d})=>({employee_id:r,whitelevel_id:s,trainer_name:d})),trainees:f.map(({trainee_id:r,trainee_name:s,whitelevel_id:d})=>({employee_id:r,whitelevel_id:d,trainee_name:s}))};try{const r=await R.put("/training/training-details-update/",t);console.log("Updated Training:",r.data),alert("Updated Training:",r.data)}catch(r){console.error("Error:",r),g("An error occurred while updating the accident.")}finally{u(!1)}};return e.jsx(ce,{children:e.jsx(he,{className:"section",sx:{display:"flex",justifyContent:"center",padding:4},children:e.jsx("form",{onSubmit:ae,children:e.jsx(me,{sx:{maxwidth:"100%",padding:3,boxShadow:3},children:e.jsx(ue,{children:e.jsxs(c,{container:!0,spacing:2,children:[e.jsx(c,{item:!0,xs:12,sm:5.5,children:e.jsx(j,{label:"Date",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{max:new Date().toISOString().split("T")[0]},value:O,onChange:M,max:re,error:!!n.trainingDate,helperText:n.trainingDate,required:!0})}),e.jsx(c,{item:!0,xs:12,sm:5.5,children:e.jsx(j,{label:"Reference Number",fullWidth:!0,value:T,onChange:Y,error:!!n.trainingId,helperText:n.trainingId})}),e.jsx(c,{item:!0,xs:12,sm:1,sx:{marginTop:"10px"},children:e.jsx(U,{variant:"contained",color:"secondary",onClick:H,fullWidth:!0,disabled:P,children:"ok"})}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(x,{variant:"h6",style:{display:"none"},children:"Whitelevel ID:"}),e.jsx(z,{fullWidth:!0,margin:"normal",style:{display:"none"},children:e.jsx(j,{style:{display:"none"},label:"Whitelevel ID",fullWidth:!0,value:_,onChange:K,error:!!n.whitelevelId,helperText:n.whitelevelId})})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(x,{variant:"h6",sx:{marginBottom:1},required:!0,children:"Training Type *:"}),e.jsxs(se,{row:!0,value:m,onChange:Q,children:[e.jsx(q,{value:"4",control:e.jsx(N,{}),label:"Tool box Training"}),e.jsx(q,{value:"3",control:e.jsx(N,{}),label:"Job & Safety"}),e.jsx(q,{value:"2",control:e.jsx(N,{}),label:"Behavioural"}),e.jsx(q,{value:"1",control:e.jsx(N,{}),label:"Others"})]}),V&&e.jsx(j,{label:"Name of Training",fullWidth:!0,value:y,onChange:X,error:!!n.trainingName,helperText:n.trainingName}),n.trainingType&&e.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:n.trainingType})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(ge,{sx:{marginBottom:3}}),e.jsx(x,{variant:"h6",children:"TRAINER *: (Enter 0 in case of Others)"}),e.jsx(le,{onEmployeesChange:i=>J("trainers",i),error:!!n.trainers,helperText:n.trainers,initialData:p}),n.trainers&&e.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:n.trainers})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(x,{variant:"h6",children:"TRAINEE *:"}),e.jsx(oe,{onChange:i=>J("trainees",i),error:!!n.trainees,helperText:n.trainees,initialData:f}),n.trainees&&e.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:n.trainees})]}),e.jsx(c,{item:!0,xs:12,children:e.jsx(z,{fullWidth:!0,margin:"normal",children:e.jsx(j,{label:"Description",multiline:!0,rows:4,value:B,onChange:ee})})}),e.jsx(c,{item:!0,xs:12,children:e.jsx(de,{setCompressedImageBase64:D,compressedImageBase64:C})}),e.jsxs(c,{container:!0,spacing:2,sx:{marginTop:"20px"},children:[e.jsx(c,{item:!0,xs:12,md:6,children:e.jsx(U,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:P,children:"Submit"})}),e.jsx(c,{item:!0,xs:12,md:6,children:e.jsx(U,{variant:"contained",color:"secondary",onClick:ie,fullWidth:!0,disabled:P,children:"Update"})})]})]})})})})})})};export{Ne as default};
