import{h as le,r as l,j as e,D as R}from"./index-D6luFOXy.js";import{R as de,a as N,T as ce}from"./Training2-tIvSHNhm.js";import{T as Z,I as he}from"./Training4-D7rDFV3G.js";import{C as me}from"./Container-Bw8hF7_d.js";import{B as ue}from"./Box-Z1dJKkgw.js";import{C as ge,a as pe,D as fe}from"./CardContent-5uL_GPLe.js";import{G as c}from"./Grid-BePo-2oj.js";import{T as j,F as H}from"./TextField-ACyz6pzi.js";import{B as G}from"./Button-BKNEeU-L.js";import{T as x}from"./IconButton-CQhwkLsD.js";import{F as q}from"./FormControlLabel-CgBiK7Nd.js";import"./createSvgIcon-C9p8gMep.js";import"./TableRow-Lc9UIHI1.js";import"./styled-lr8X9Gj-.js";import"./dividerClasses-Ca595wcL.js";const Fe=()=>{const F=le(t=>t.userInfo),[_,W]=l.useState(F.whitelevel_id),[O,v]=l.useState(new Date().toISOString().split("T")[0]),[T,k]=l.useState(""),[g,b]=l.useState("4"),[y,w]=l.useState(""),[K,A]=l.useState(!1),[m,S]=l.useState([]),[h,I]=l.useState([]),[C,D]=l.useState(""),[P,p]=l.useState(!1),[B,E]=l.useState("");l.useState({option1:!1});const[n,f]=l.useState({trainingDate:"",trainingId:"",whitelevelId:"",trainingType:"",trainingName:"",trainers:"",trainees:"",image:"",about_the_training:""}),[J,M]=l.useState(!1),$=(t,a)=>{const r=t.map(o=>o.trainer_id),s=a.map(o=>o.trainee_id);return r.filter(o=>s.includes(o)).length>0},z=h&&h.length>0?[...h]:[],V=m&&m.length>0?[...m]:[];console.log("UpdatedTrainees",z),console.log("UpdatedTrainers",V);const Q=async t=>{if(t.target,!!T){p(!0),p(!0);try{const a=await R.post("/training/training-details/",{training_id:T,whitelevel_id:_}),r=a.data;r?(v(r.training_date),b(r.training_type),w(r.training_name),S(r.trainers.map(s=>({employee_id:s.employee_id,employee_name:s.trainer_name}))),I(r.trainees.map(s=>({employee_id:s.employee_id,employee_name:s.trainee_name}))),D(r.training_image),E(r.about_the_training)):alert("No SafetyTraining data found. Please check the reference number."),console.log("Fetched data:",a.data)}catch(a){console.error("Error fetching accident data:",a),f({fetch:"Failed to fetch accident data. Please try again."})}finally{p(!1)}}},U=(t,a)=>{let r={...n};if(t==="trainers"&&(S(a),J)){let s=[],d=!1;if(a.forEach((o,i)=>{o.trainer_id!=="0"&&(!o.trainer_id||!o.trainer_name)&&(s.push(`Trainer ${i+1} has empty fields.`),d=!0)}),d){r.trainers=s.join(" "),f(r);return}$(a,h)?(r.trainers="Trainer and Trainee employee codes should not be equal",r.trainees="Trainer and Trainee employee codes should not be equal"):(r.trainers="",r.trainees="")}if(t==="trainees"&&(I(a),J)){let s=[],d=!1;if(a.forEach((o,i)=>{o.trainee_id!=="0"&&(!o.trainee_id||!o.trainee_name)&&(s.push(`Trainee ${i+1} has empty fields.`),d=!0)}),d){r.trainees=s.join(" "),f(r);return}$(m,a)?(r.trainers="Trainer and Trainee employee codes should not be equal",r.trainees="Trainer and Trainee employee codes should not be equal"):(r.trainers="",r.trainees="")}},X=t=>{W(t.target.value)},Y=t=>{v(t.target.value)},ee=t=>{const a=t.target.value;b(a),A(a==="1"),f({...n,trainingType:a===""?"Training Type is required":""})},re=t=>{const a=t.target.value,r=/^[A-Za-z\s]*$/;w(a),g==="1"&&(r.test(a)?f({...n,trainingName:""}):f({...n,trainingName:"Training Name must contain only alphabets and spaces"}))},te=t=>{k(t.target.value)},ae=t=>{E(t.target.value)},ie=new Date().toISOString().split("T")[0],ne=()=>{W(F.whitelevel_id),v(new Date().toISOString().split("T")[0]),k(""),b("4"),w(""),A(!1),S([]),I([]),D(""),E("")},se=async t=>{var d,o;t.preventDefault(),p(!0),M(!0);let a=!0;const r={trainingDate:O?"":"Training Date is required",trainingId:T?"":"Training ID is required",whitelevelId:_?"":"Whitelevel ID is required",trainingType:g?"":"Training Type is required",trainingName:g==="1"&&!y?"Training Name is required":"",trainers:m.length===0?"At least one Trainer is required":"",trainees:h.length===0?"At least one Trainee is required":""};if(g==="1"&&(y?/^[A-Za-z\s]*$/.test(y)||(r.trainingName="Training Name must contain only alphabets and spaces",a=!1):(r.trainingName="Training Name is required",a=!1)),Object.keys(r).forEach(i=>{r[i]&&(a=!1)}),m.forEach((i,u)=>{i.trainer_id!=="0"&&(!i.trainer_id||!i.trainer_name)&&(r[`trainer_${u}_name`]="Trainer name is required",a=!1)}),h.forEach((i,u)=>{i.trainee_id!=="0"&&(!i.trainee_id||!i.trainee_name)&&(r[`trainee_${u}_name`]="Trainee name is required",a=!1)}),$(m,h)&&(r.trainers="Trainer and Trainee employee codes should not be equal",r.trainees="Trainer and Trainee employee codes should not be equal",a=!1),f(r),!a){p(!1);return}const s={training_id:T,training_date:O,whitelevel_id:_,training_type:g,training_image:C,about_the_training:B,training_name:g==="1"?y:null,trainers:m.map(({trainer_id:i,whitelevel_id:u,trainer_name:L})=>({trainer_id:i,whitelevel_id:u,trainer_name:L})),trainees:h.map(({trainee_id:i,trainee_name:u,whitelevel_id:L})=>({trainee_id:i,whitelevel_id:L,trainee_name:u}))};console.log("Submitting the following data:"),console.log(JSON.stringify(s,null,2));try{const i=await R.post("/training/start/",s);console.log("Success:",i.data),window.alert("Safety Training Form submitted successfully!"),ne(),W(F.whitelevel_id),v(new Date().toISOString().split("T")[0]),k(""),b("4"),w(""),A(!1),S([]),I([]),D(""),E("")}catch(i){if(i.response){console.error(`HTTP error! Status: ${i.response.status}`);const u=JSON.stringify(i.response.data);console.error("Response body:",u),((o=(d=i.response.data)==null?void 0:d.training_id)==null?void 0:o[0])==="training with this training id already exists."?window.alert("Training ID already exists. Please use a different ID."):window.alert("Error submitting form. Please check the details and try again.")}else i.isAxiosError?(console.error("Axios error:",i.message),window.alert("An error occurred with the request. Please try again.")):i.name==="TypeError"?(console.error("Network error: Please check if the server is running and accessible."),window.alert("Network error: Please check if the server is running and accessible.")):(console.error("Error fetching data:",i.message),window.alert(`Error fetching data: ${i.message}`))}finally{p(!1)}},oe=async t=>{t.preventDefault(),p(!0);const a={training_id:T,training_type:g,training_name:y,whitelevel_id:_,image:C,about_the_training:B,training_image:C,trainers:m.map(({trainer_id:r,whitelevel_id:s,trainer_name:d})=>({employee_id:r,whitelevel_id:s,trainer_name:d})),trainees:h.map(({trainee_id:r,trainee_name:s,whitelevel_id:d})=>({employee_id:r,whitelevel_id:d,trainee_name:s}))};try{const r=await R.put("/training/training-details-update/",a);console.log("Updated Training:",r.data),alert("Updated Training:",r.data)}catch(r){console.error("Error:",r),f("An error occurred while updating the accident.")}finally{p(!1)}};return e.jsx(me,{children:e.jsx(ue,{className:"section",sx:{display:"flex",justifyContent:"center",padding:4},children:e.jsx("form",{onSubmit:se,children:e.jsx(ge,{sx:{maxwidth:"100%",padding:3,boxShadow:3},children:e.jsx(pe,{children:e.jsxs(c,{container:!0,spacing:2,children:[e.jsx(c,{item:!0,xs:12,sm:5.5,children:e.jsx(j,{label:"Date",type:"date",fullWidth:!0,InputLabelProps:{shrink:!0},inputProps:{max:new Date().toISOString().split("T")[0]},value:O,onChange:Y,max:ie,error:!!n.trainingDate,helperText:n.trainingDate,required:!0})}),e.jsx(c,{item:!0,xs:12,sm:5.5,children:e.jsx(j,{label:"Reference Number",fullWidth:!0,value:T,onChange:te,error:!!n.trainingId,helperText:n.trainingId})}),e.jsx(c,{item:!0,xs:12,sm:1,sx:{marginTop:"10px"},children:e.jsx(G,{variant:"contained",color:"secondary",onClick:Q,fullWidth:!0,disabled:P,children:"ok"})}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(x,{variant:"h6",style:{display:"none"},children:"Whitelevel ID:"}),e.jsx(H,{fullWidth:!0,margin:"normal",style:{display:"none"},children:e.jsx(j,{style:{display:"none"},label:"Whitelevel ID",fullWidth:!0,value:_,onChange:X,error:!!n.whitelevelId,helperText:n.whitelevelId})})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(x,{variant:"h6",sx:{marginBottom:1},required:!0,children:"Training Type *:"}),e.jsxs(de,{row:!0,value:g,onChange:ee,children:[e.jsx(q,{value:"4",control:e.jsx(N,{}),label:"Tool box Training"}),e.jsx(q,{value:"3",control:e.jsx(N,{}),label:"Job & Safety"}),e.jsx(q,{value:"2",control:e.jsx(N,{}),label:"Behavioural"}),e.jsx(q,{value:"1",control:e.jsx(N,{}),label:"Others"})]}),K&&e.jsx(j,{label:"Name of Training",fullWidth:!0,value:y,onChange:re,error:!!n.trainingName,helperText:n.trainingName}),n.trainingType&&e.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:n.trainingType})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(fe,{sx:{marginBottom:3}}),e.jsx(x,{variant:"h6",children:"TRAINER *: (Enter 0 in case of Others)"}),e.jsx(ce,{onEmployeesChange:t=>U("trainers",t),error:!!n.trainers,helperText:n.trainers,initialData:V}),n.trainers&&e.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:n.trainers})]}),e.jsxs(c,{item:!0,xs:12,children:[e.jsx(x,{variant:"h6",children:"TRAINEE *:"}),h&&h.length>0?e.jsx(Z,{onChange:t=>U("trainees",t),error:!!n.trainees,helperText:n.trainees,initialData:z}):e.jsx(Z,{onChange:t=>U("trainees",t),error:!!n.trainees,helperText:n.trainees,initialData:[]}),n.trainees&&e.jsx(x,{variant:"body2",color:"error",sx:{mt:1},children:n.trainees})]}),e.jsx(c,{item:!0,xs:12,children:e.jsx(H,{fullWidth:!0,margin:"normal",children:e.jsx(j,{label:"Description",multiline:!0,rows:4,value:B,onChange:ae})})}),e.jsx(c,{item:!0,xs:12,children:e.jsx(he,{setCompressedImageBase64:D,compressedImageBase64:C})}),e.jsxs(c,{container:!0,spacing:2,sx:{marginTop:"20px"},children:[e.jsx(c,{item:!0,xs:12,md:6,children:e.jsx(G,{variant:"contained",color:"primary",type:"submit",fullWidth:!0,disabled:P,children:"Submit"})}),e.jsx(c,{item:!0,xs:12,md:6,children:e.jsx(G,{variant:"contained",color:"secondary",onClick:oe,fullWidth:!0,disabled:P,children:"Update"})})]})]})})})})})})};export{Fe as default};