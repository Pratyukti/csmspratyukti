import{r,_ as ie,R as de,b as me,c as ce,P as k,x as pe,H as ue,h as he,D as F,j as e,C as ye}from"./index-D6luFOXy.js";import{C as fe,a as Ee}from"./CRow-DFpgPaEL.js";import{C as xe,a as ve}from"./CCardBody-BWoAxjuO.js";import{a as d,C as E,b as m}from"./CFormInput-DCkxwgJf.js";import{C as Ne}from"./CFormSelect-B3it28eT.js";import{B as ge}from"./Box-Z1dJKkgw.js";import{a as Y}from"./index.esm-Dm6nxtI-.js";import"./createSvgIcon-C9p8gMep.js";var D=r.forwardRef(function(l,g){var c=l.children,j=l.as,a=j===void 0?"div":j,n=l.className,i=ie(l,["children","as","className"]);return de.createElement(a,me({className:ce("card-header",n)},i,{ref:g}),c)});D.propTypes={as:k.elementType,children:k.node,className:k.string};D.displayName="CCardHeader";const ke=()=>{pe();const{employeeIdParam:l}=ue(),g=he(s=>s.userInfo),[c,j]=r.useState(g.whitelevel_id),[a,n]=r.useState(""),[i,b]=r.useState(""),[p,C]=r.useState(""),[u,S]=r.useState(""),[h,I]=r.useState(""),[R,_]=r.useState("1"),[A,y]=r.useState(!1),[f,x]=r.useState(!1);r.useState("");const[G,w]=r.useState(""),[B,P]=r.useState(""),[$,U]=r.useState(""),[V,z]=r.useState(""),[T,q]=r.useState(""),K=/^[A-Za-z0-9_]{1,15}$/,Q=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,X=/^[0-9]{10}$/,ee=/^[A-Za-z0-9\, -]{10,}$/,se=/^[a-zA-Z\s.]+$/,re=()=>{if(a){if(!K.test(a))return w("Employee ID can only contain alphanumeric characters and underscores,dot with a maximum of 15 characters"),!1}else return w("Employee ID is required"),!1;return w(""),!0},H=()=>{if(i){if(!se.test(i))return P("Employee Name can only contain letters,dot and spaces"),!1}else return P("Employee Name is required"),!1;return P(""),!0},L=()=>p&&!Q.test(p)?(U("Enter a valid email address"),!1):(U(""),!0),Z=()=>u&&!X.test(u)?(z("Enter a valid 10-digit phone number"),!1):(z(""),!0),M=()=>h&&!ee.test(h)?(q("Enter a valid address (at least 10 characters, numbers, commas,back  slash and hyphens are allowed)"),!1):(q(""),!0);r.useEffect(()=>{l?(n(l),O(l)):(n(""),x(!1))},[l]);const O=async s=>{y(!0);try{const o=(await F.post("/employee/employee_details/",{employee_id:s,whitelevel_id:c})).data;o?(n(o.employee_id),b(o.employee_name),C(o.email||""),S(o.phonenumber||""),I(o.address||""),_(o.role||"1"),x(!0)):(alert("Employee not found. You can register a new employee."),x(!1))}catch(v){console.error("Error fetching employee details:",v),alert("Employee Not Found Register a new employee")}finally{y(!1)}},J=()=>{n(""),b(""),C(""),S(""),I(""),_("1"),x(!1)},ae=()=>{J()},te=async s=>{s.preventDefault();const v=re(),o=H(),le=L(),oe=Z(),ne=M();if(v&&o&&le&&oe&&ne){y(!0);const W={employee_id:a,employee_name:i,email:p,phonenumber:u,address:h,whitelevel_id:c,role:R};console.log("formData:",W),s.preventDefault(),y(!0);try{if(f){const t=await F.put("/employee/employee_details/",{employee_id:a,employee_name:i,email:p,whitelevel_id:c,phonenumber:u,address:h});console.log("Update Response:",t.data),alert("Employee details updated successfully!")}else{const t=await F.post("/employee/register/",W);console.log("Create Response:",t.data),alert("Employee registered successfully!")}ae()}catch(t){if(t.isAxiosError&&t.response){const N=t.response.data;N.non_field_errors&&N.non_field_errors[0].includes("employee_id, whitelevel_id must make a unique set")?alert("Error: Employee already exists."):N.employee_id?alert(`Error: Employee ID "${a}" already exists.`):alert(`Error: ${JSON.stringify(N)}`)}else t.name==="TypeError"?(console.error("Network error: Please check if the server is running and accessible."),alert("Network error: Please check if the server is running and accessible.")):(console.error("Error fetching data:",t),alert(`Error fetching data: ${t.message}`))}finally{y(!1)}}};return e.jsx("form",{onSubmit:te,children:e.jsx(fe,{className:"justify-content-center",children:e.jsx(Ee,{children:e.jsxs(xe,{className:"mb-4",children:[e.jsx(D,{children:e.jsxs("strong",{children:[f?"Update":"Register"," Employee"]})}),e.jsxs(ve,{children:[e.jsxs(d,{className:"mb-3",children:[e.jsx(E,{type:"text",id:"employeeId",placeholder:"Enter Employee ID",value:a,onChange:s=>n(s.target.value),onBlur:()=>{a&&O(a)},invalid:!!G}),e.jsx(m,{htmlFor:"employeeId",children:"Employee ID *"})]}),e.jsxs(d,{className:"mb-3",children:[e.jsx(E,{type:"text",id:"employeeName",placeholder:"Enter Employee Name",value:i,onChange:s=>b(s.target.value),onBlur:H,invalid:!!B}),e.jsx(m,{htmlFor:"employeeName",children:"Enter Employee Name *"}),e.jsx("div",{className:"invalid-feedback",children:B})]}),e.jsxs(d,{className:"mb-3",children:[e.jsx(E,{type:"text",id:"employeeEmail",placeholder:"Enter Email",value:p,onChange:s=>C(s.target.value),onBlur:L,invalid:!!$}),e.jsx(m,{htmlFor:"employeeEmail",children:"Enter Employee Email "}),e.jsx("div",{className:"invalid-feedback",children:$})]}),e.jsxs(d,{className:"mb-3",children:[e.jsx(E,{type:"text",id:"phoneNumber",placeholder:"Enter Phone Number",value:u,onChange:s=>S(s.target.value),onBlur:Z,invalid:!!V}),e.jsx(m,{htmlFor:"phoneNumber",children:"Enter Phone Number "}),e.jsx("div",{className:"invalid-feedback",children:V})]}),e.jsxs(d,{className:"mb-3",children:[e.jsx(E,{type:"text",id:"address",placeholder:"Enter Address",value:h,onChange:s=>I(s.target.value),onBlur:M,invalid:!!T}),e.jsx(m,{htmlFor:"address",children:"Enter Address "}),e.jsx("div",{className:"invalid-feedback",children:T})]}),e.jsxs(d,{className:"mb-3",children:[e.jsxs(Ne,{id:"role",value:R,onChange:s=>_(s.target.value),children:[e.jsx("option",{value:"1",children:"Employee"}),e.jsx("option",{value:"2",children:"Supervisor"}),e.jsx("option",{value:"3",children:"Office Staff"})]}),e.jsx(m,{htmlFor:"role",children:"Role *"})]}),e.jsxs(ge,{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",mt:2,children:[e.jsx(Y,{type:"submit",disabled:A,style:{backgroundColor:f?"#ffa000":"#1976d2",color:"white",padding:"10px 20px"},children:A?e.jsx(ye,{size:"sm"}):f?"Update":"Submit"}),f&&e.jsx(Y,{type:"button",style:{backgroundColor:"#d32f2f",color:"white",padding:"10px 20px"},onClick:J,children:"Cancel"})]})]})]})})})})};export{ke as default};