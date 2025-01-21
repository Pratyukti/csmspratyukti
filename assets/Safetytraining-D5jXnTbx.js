import{h as ne,r as l,j as r,D as R}from"./index-Ly0M8P4q.js";import{R as se,a as N,T as oe}from"./Training2-C4ZyB8q0.js";import{T as le,I as de}from"./Training4-B4CrVYx4.js";import{C as ce}from"./Container-x7keNgew.js";import{B as he}from"./Box-DhnOwVFN.js";import{C as me,a as ue,D as ge}from"./CardContent-oDWjExPd.js";import{G as c}from"./Grid-DICNRikS.js";import{T as b,F as z}from"./TextField-C0mGIOFZ.js";import{B as U}from"./Button-DyJeNzvr.js";import{T as x}from"./IconButton-bLyPz66B.js";import{F as q}from"./FormControlLabel-CVB9tTYm.js";import"./createSvgIcon-jufI53Kk.js";import"./TableRow-OeIAyzV3.js";import"./styled-B4NDWQ6O.js";import"./dividerClasses-hj1MwXkO.js";const Ne=()=>{const F=ne(i=>i.userInfo),[_,W]=l.useState(F.whitelevel_id),[O,w]=l.useState(new Date().toISOString().split("T")[0]),[T,k]=l.useState(""),[m,S]=l.useState("4"),[y,I]=l.useState(""),[V,A]=l.useState(!1),[p,j]=l.useState([]),[f,v]=l.useState([]),[C,D]=l.useState(""),[P,u]=l.useState(!1),[B,E]=l.useState("");l.useState({option1:!1});const[s,g]=l.useState({trainingDate:"",trainingId:"",whitelevelId:"",trainingType:"",trainingName:"",trainers:"",trainees:"",image:"",about_the_training:""}),[G,Z]=l.useState(!1),$=(i,t)=>{const e=i.map(o=>o.trainer_id),n=t.map(o=>o.trainee_id);return e.filter(o=>n.includes(o)).length>0},H=async i=>{if(i.target,!!T){u(!0),u(!0);try{const t=await R.post("/training/training-details/",{training_id:T,whitelevel_id:_}),e=t.data;e?(w(e.training_date),S(e.training_type),I(e.training_name),j(e.trainers||[]),v(e.trainees||[]),j(e.trainers.map(n=>({employee_id:(n==null?void 0:n.employee_id)||"0",employee_name:(n==null?void 0:n.trainer_name)||"others"}))),console.log("Trainers fetched and processed:",e.trainers),v(e.trainees.map(n=>({employee_id:(n==null?void 0:n.employee_id)||"0",employee_name:(n==null?void 0:n.trainee_name)||"others"}))),console.log("Trainees fetched and processed:",e.trainees),D(e.training_image),E(e.about_the_training)):alert("No SafetyTraining data found. Please check the reference number."),console.log("Fetched data:",t.data)}catch(t){console.error("Error fetching accident data:",t),g({fetch:"Failed to fetch accident data. Please try again."})}finally{u(!1)}}},J=(i,t)=>{let e={...s};if(i==="trainers"&&(j(t),G)){let n=[],d=!1;if(t.forEach((o,a)=>{o.trainer_id!=="0"&&(!o.trainer_id||!o.trainer_name)&&(n.push(`Trainer ${a+1} has empty fields.`),d=!0)}),d){e.trainers=n.join(" "),g(e);return}$(t,f)?(e.trainers="Trainer and Trainee employee codes should not be equal",e.trainees="Trainer and Trainee employee codes should not be equal"):(e.trainers="",e.trainees="")}if(i==="trainees"&&(v(t),G)){let n=[],d=!1;if(t.forEach((o,a)=>{o.trainee_id!=="0"&&(!o.trainee_id||!o.trainee_name)&&(n.push(`Trainee ${a+1} has empty fields.`),d=!0)}),d){e.trainees=n.join(" "),g(e);return}$(p,t)?(e.trainers="Trainer and Trainee employee codes should not be equal",e.trainees="Trainer and Trainee employee codes should not be equal"):(e.trainers="",e.trainees="")}},K=i=>{W(i.target.value)},M=i=>{w(i.target.value)},Q=i=>{const t=i.target.value;S(t),A(t==="1"),g({...s,trainingType:t===""?"Training Type is required":""})},X=i=>{const t=i.target.value,e=/^[A-Za-z\s]*$/;I(t),m==="1"&&(e.test(t)?g({...s,trainingName:""}):g({...s,trainingName:"Training Name must contain only alphabets and spaces"}))},Y=i=>{k(i.target.value)},ee=i=>{E(i.target.value)},re=new Date().toISOString().split("T")[0],te=()=>{W(F.whitelevel_id),w(new Date().toISOString().split("T")[0]),k(""),S("4"),I(""),A(!1),j([]),v([]),D(""),E("")},ae=async i=>{var d,o;i.preventDefault(),u(!0),Z(!0);let t=!0;const e={trainingDate:O?"":"Training Date is required",trainingId:T?"":"Training ID is required",whitelevelId:_?"":"Whitelevel ID is required",trainingType:m?"":"Training Type is required",trainingName:m==="1"&&!y?"Training Name is required":"",trainers:p.length===0?"At least one Trainer is required":"",trainees:f.length===0?"At least one Trainee is required":""};if(m==="1"&&(y?/^[A-Za-z\s]*$/.test(y)||(e.trainingName="Training Name must contain only alphabets and spaces",t=!1):(e.trainingName="Training Name is required",t=!1)),Object.keys(e).forEach(a=>{e[a]&&(t=!1)}),p.forEach((a,h)=>{a.trainer_id!=="0"&&(!a.trainer_id||!a.trainer_name)&&(e[`trainer_${h}_name`]="Trainer name is required",t=!1)}),f.forEach((a,h)=>{a.trainee_id!=="0"&&(!a.trainee_id||!a.trainee_name)&&(e[`trainee_${h}_name`]="Trainee name is required",t=!1)}),$(p,f)&&(e.trainers="Trainer and Trainee employee codes should not be equal",e.trainees="Trainer and Trainee employee codes should not be equal",t=!1),g(e),!t){u(!1);return}const n={training_id:T,training_date:O,whitelevel_id:_,training_type:m,training_image:C,about_the_training:B,training_name:m==="1"?y:null,trainers:p.map(({trainer_id:a,whitelevel_id:h,trainer_name:L})=>({trainer_id:a,whitelevel_id:h,trainer_name:L})),trainees:f.map(({trainee_id:a,trainee_name:h,whitelevel_id:L})=>({trainee_id:a,whitelevel_id:L,trainee_name:h}))};console.log("Submitting the following data:"),console.log(JSON.stringify(n,null,2));try{const a=await R.post("/training/start/",n);console.log("Success:",a.data),window.alert("Safety Training Form submitted successfully!"),te(),W(F.whitelevel_id),w(new Date().toISOString().split("T")[0]),k(""),S("4"),I(""),A(!1),j([]),v([]),D(""),E("")}catch(a){if(a.response){console.error(`HTTP error! Status: ${a.response.status}`);const h=JSON.stringify(a.response.data);console.error("Response body:",h),((o=(d=a.response.data)==null?void 0:d.training_id)==null?void 0:o[0])==="training with this training id already exists."?window.alert("Training ID already exists. Please use a different ID."):window.alert("Error submitting form. Please check the details and try again.")}else a.isAxiosError?(console.error("Axios error:",a.message),window.alert("An error occurred with the request. Please try again.")):a.name==="TypeError"?(console.error("Network error: Please check if the server is running and accessible."),window.alert("Network error: Please check if the server is running and accessible.")):(console.error("Error fetching data:",a.message),window.alert(`Error fetching data: ${a.message}`))}finally{u(!1)}},ie=async i=>{i.preventDefault(),u(!0);const t={training_id:T,training_type:m,training_name:y,whitelevel_id:_,image:C,about_the_training:B,training_image:C,trainers:p.map(({trainer_id:e,whitelevel_id:n,trainer_name:d})=>({employee_id:e,whitelevel_id:n,trainer_name:d})),trainees:f.map(({trainee_id:e,trainee_name:n,whitelevel_id:d})=>({employee_id:e,whitelevel_id:d,trainee_name:n}))};try{const e=await R.put("/training/training-details-update/",t);console.log("Updated Training:",e.data),alert("Updated Training:",e.data)}catch(e){console.error("Error:",e),g("An error occurred while updating the accident.")}finally{u(!1)}};return r.jsx(ce,{children:r.jsx(he,{className:"section",sx:{display:"flex",justifyContent:"center",padding:4},children:r.jsx("form",{onSubmit:ae,children:r.jsx(me,{sx:{maxwidth:"100%",padding:3,boxShadow:3},children:r.jsx(ue,{children:r.jsxs(c,{container:!0,spacing:2,children:[r.jsx(c,{item:!0,xs:12,sm:5.5,children:r.jsx(b,{label:"Date",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{max:new Date().toISOString().split("T")[0]},value:O,onChange:M,max:re,error:!!s.trainingDate,helperText:s.trainingDate,required:!0})}),r.jsx(c,{item:!0,xs:12,sm:5.5,children:r.jsx(b,{label:"Reference Number",fullWidth:!0,value:T,onChange:Y,error:!!s.trainingId,helperText:s.trainingId})}),r.jsx(c,{item:!0,xs:12,sm:1,sx:{marginTop:"10px"},children:r.jsx(U,{variant:"contained",color:"secondary",onClick:H,fullWidth:!0,disabled:P,children:"ok"})}),r.jsxs(c,{item:!0,xs:12,children:[r.jsx(x,{variant:"h6",style:{display:"none"},children:"Whitelevel ID:"}),r.jsx(z,{fullWidth:!0,margin:"normal",style:{display:"none"},children:r.jsx(b,{style:{display:"none"},label:"Whitelevel ID",fullWidth:!0,value:_,onChange:K,error:!!s.whitelevelId,helperText:s.whitelevelId})})]}),r.jsxs(c,{item:!0,xs:12,children:[r.jsx(x,{variant:"h6",sx:{marginBottom:1},required:!0,children:"Training Type *:"}),r.jsxs(se,{row:!0,value:m,onChange:Q,children:[r.jsx(q,{value:"4",control:r.jsx(N,{}),label:"Tool box Training"}),r.jsx(q,{value:"3",control:r.jsx(N,{}),label:"Job & Safety"}),r.jsx(q,{value:"2",control:r.jsx(N,{}),label:"Behavioural"}),r.jsx(q,{value:"1",control:r.jsx(N,{}),label:"Others"})]}),V&&r.jsx(b,{label:"Name of Training",fullWidth:!0,value:y,onChange:X,error:!!s.trainingName,helperText:s.trainingName}),s.trainingType&&r.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:s.trainingType})]}),r.jsxs(c,{item:!0,xs:12,children:[r.jsx(ge,{sx:{marginBottom:3}}),r.jsx(x,{variant:"h6",children:"TRAINER *: (Enter 0 in case of Others)"}),r.jsx(oe,{onEmployeesChange:i=>J("trainers",i),error:!!s.trainers,helperText:s.trainers,initialData:p}),s.trainers&&r.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:s.trainers})]}),r.jsxs(c,{item:!0,xs:12,children:[r.jsx(x,{variant:"h6",children:"TRAINEE *:"}),r.jsx(le,{onChange:i=>J("trainees",i),error:!!s.trainees,helperText:s.trainees,initialData:f}),s.trainees&&r.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:s.trainees})]}),r.jsx(c,{item:!0,xs:12,children:r.jsx(z,{fullWidth:!0,margin:"normal",children:r.jsx(b,{label:"Description",multiline:!0,rows:4,value:B,onChange:ee})})}),r.jsx(c,{item:!0,xs:12,children:r.jsx(de,{setCompressedImageBase64:D,compressedImageBase64:C})}),r.jsxs(c,{container:!0,spacing:2,sx:{marginTop:"20px"},children:[r.jsx(c,{item:!0,xs:12,md:6,children:r.jsx(U,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:P,children:"Submit"})}),r.jsx(c,{item:!0,xs:12,md:6,children:r.jsx(U,{variant:"contained",color:"secondary",onClick:ie,fullWidth:!0,disabled:P,children:"Update"})})]})]})})})})})})};export{Ne as default};
