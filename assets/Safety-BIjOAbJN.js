import{r as j,j as e}from"./index-Boe2fyA3.js";const d=()=>{const[r,l]=j.useState([{empCode:"",empName:""}]),o=(n,s)=>{const{name:t,value:a}=s.target,i=[...r];if(i[n][t]=a,t==="empCode"&&a.toLowerCase()==="others")i[n].empCode="Others",i[n].empName="";else if(t==="empCode"){const m=c(a);i[n].empName=m}l(i)},c=n=>({"001":"John Doe","002":"Jane Smith"})[n]||"",p=()=>{l([...r,{empCode:"",empName:""}])},h=n=>{const s=r.filter((t,a)=>a!==n);l(s)};return e.jsxs("div",{children:[e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Sl. No"}),e.jsx("th",{children:"Employee Code"}),e.jsx("th",{children:"Employee Name"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:r.map((n,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:s+1}),e.jsx("td",{children:e.jsx("input",{type:"text",name:"empCode",value:n.empCode,onChange:t=>o(s,t)})}),e.jsx("td",{children:e.jsx("input",{type:"text",name:"empName",value:n.empName,onChange:t=>o(s,t)})}),e.jsx("td",{children:e.jsx("button",{onClick:()=>h(s),children:"Delete"})})]},s))})]}),e.jsx("button",{onClick:p,children:"Add Row"})]})},y=()=>e.jsx("div",{className:"section",children:e.jsxs("div",{className:"section1",children:[e.jsxs("div",{className:"section3",children:[e.jsx("h3",{children:"Date:"}),e.jsx("input",{type:"date",className:"input1"})]}),e.jsxs("div",{className:"section3",children:[e.jsx("h3",{children:"Reference Number:"}),e.jsx("input",{type:"text",className:"input1"})]}),e.jsxs("div",{className:"section3",children:[e.jsx("h3",{children:"Training Type:"}),e.jsxs("label",{for:"training1",children:[e.jsx("input",{class:"input1",type:"radio",id:"training1",name:"trainingType",value:"Tool box Training"}),"Tool box Training"]}),e.jsxs("label",{for:"training2",children:[e.jsx("input",{class:"input1",type:"radio",id:"training2",name:"trainingType",value:"Job & Safety"}),"Job & Safety"]}),e.jsxs("label",{for:"training3",children:[e.jsx("input",{class:"input1",type:"radio",id:"training3",name:"trainingType",value:"Behavioral"}),"Behavioral"]}),e.jsxs("label",{for:"training3",children:[e.jsx("input",{class:"input1",type:"radio",id:"training3",name:"trainingType",value:"Others"}),"Others"]})]}),e.jsx("h3",{children:"Trainer:"}),e.jsx(d,{}),e.jsx("h3",{children:"Employee:"}),e.jsx(d,{})]})});export{y as default};
