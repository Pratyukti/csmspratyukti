import{r as d,_ as A,R as b,b as T,c as B,P as l,h as je,j as e,D as Z}from"./index-D9pTrmyN.js";import{C as Ne,a as Se}from"./CRow-B-uqv3eI.js";import{C as Ee,a as Pe}from"./CCardBody-Dur-i4p5.js";import{a as w,C as H,b as F}from"./CFormInput-Du4Ccp-U.js";import{C as ke}from"./CFormSelect-DsSn_ZfG.js";import{a as me}from"./index.esm-Oz9djZ36.js";import{u as Te,T as _e,C as ue,a as Oe,b as De}from"./DefaultLayout-BdjvWDB3.js";import{d as we,a as Fe}from"./FilterList-Bdmu-FGT.js";import{d as Ie,S as Ae}from"./Edit-DD8imvDc.js";import{D as Be,a as Me,b as qe,c as Le}from"./DialogTitle-C_6Qm2h1.js";import{T as I}from"./TextField-B82FT8Gd.js";import{B as pe}from"./Button-Dsw2z1pm.js";import{B as ge}from"./Box-CaQnpd-f.js";import{P as Ve,I as G,T as fe}from"./IconButton-BphNlixg.js";import{T as ze,a as Re,e as He,c as J,d as S,b as We}from"./TableRow-DDDJZlTx.js";import{C as be}from"./Checkbox-B0YjaFvf.js";import{c as U,T as $e,a as Ke,v as Qe,b as Ye}from"./TableSortLabel-ZaV9cJsH.js";import{F as Ze}from"./FormControlLabel-DSddV3mn.js";import{a as Ge}from"./colorManipulator-CeBLnpFE.js";import"./createSvgIcon-CxW3tpGz.js";import"./cil-user-Ddrdy7PS.js";import"./dividerClasses-DIkgzp1H.js";import"./styled-CIiJ6-l4.js";var X=d.forwardRef(function(n,i){var t=n.children,s=n.className,o=A(n,["children","className"]);return b.createElement("div",T({className:B("modal-content",s)},o,{ref:i}),t)});X.propTypes={children:l.node,className:l.string};X.displayName="CModalContent";var ee=d.forwardRef(function(n,i){var t,s=n.children,o=n.alignment,c=n.className,u=n.fullscreen,g=n.scrollable,m=n.size,y=A(n,["children","alignment","className","fullscreen","scrollable","size"]);return b.createElement("div",T({className:B("modal-dialog",(t={"modal-dialog-centered":o==="center"},t[typeof u=="boolean"?"modal-fullscreen":"modal-fullscreen-".concat(u,"-down")]=u,t["modal-dialog-scrollable"]=g,t["modal-".concat(m)]=m,t),c)},y,{ref:i}),s)});ee.propTypes={alignment:l.oneOf(["top","center"]),children:l.node,className:l.string,fullscreen:l.oneOfType([l.bool,l.oneOf(["sm","md","lg","xl","xxl"])]),scrollable:l.bool,size:l.oneOf(["sm","lg","xl"])};ee.displayName="CModalDialog";var xe=d.createContext({}),ne=d.forwardRef(function(n,i){var t=n.children,s=n.alignment,o=n.backdrop,c=o===void 0?!0:o,u=n.className,g=n.container,m=n.duration,y=m===void 0?150:m,N=n.focus,P=N===void 0?!0:N,E=n.fullscreen,v=n.keyboard,W=v===void 0?!0:v,k=n.onClose,j=n.onClosePrevented,M=n.onShow,q=n.portal,_=q===void 0?!0:q,$=n.scrollable,K=n.size,L=n.transition,O=L===void 0?!0:L,V=n.unmountOnClose,z=V===void 0?!0:V,D=n.visible,Q=A(n,["children","alignment","backdrop","className","container","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),R=d.useRef(null),r=d.useRef(null),p=d.useRef(null),a=Te(i,r),h=d.useState(D),f=h[0],x=h[1],Y=d.useState(!1),ae=Y[0],re=Y[1],Ce={visible:f,setVisible:x};d.useEffect(function(){x(D)},[D]),d.useEffect(function(){var C;return f?(R.current=document.activeElement,document.addEventListener("mouseup",de),document.addEventListener("keydown",ce)):(C=R.current)===null||C===void 0||C.focus(),function(){document.removeEventListener("mouseup",de),document.removeEventListener("keydown",ce)}},[f]);var ie=function(){return c==="static"?re(!0):(x(!1),k&&k())};d.useLayoutEffect(function(){j&&j(),setTimeout(function(){return re(!1)},y)},[ae]),d.useLayoutEffect(function(){return f?(document.body.classList.add("modal-open"),c&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout(function(){var C;P&&((C=r.current)===null||C===void 0||C.focus())},O?y:0)):(document.body.classList.remove("modal-open"),c&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),c&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}},[f]);var de=function(C){r.current&&r.current==C.target&&ie()},ce=function(C){C.key==="Escape"&&W&&ie()};return b.createElement(b.Fragment,null,b.createElement(_e,{in:f,mountOnEnter:!0,nodeRef:r,onEnter:M,onExit:k,unmountOnExit:z,timeout:O?y:0},function(C){return b.createElement(ue,{container:g,portal:_},b.createElement(xe.Provider,{value:Ce},b.createElement("div",T({className:B("modal",{"modal-static":ae,fade:O,show:C==="entered"},u),tabIndex:-1},f?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:T({},C!=="exited"&&{display:"block"})},Q,{ref:a}),b.createElement(ee,{alignment:s,fullscreen:E,scrollable:$,size:K},b.createElement(X,{ref:p},t)))))}),c&&b.createElement(ue,{container:g,portal:_},b.createElement(Oe,{visible:f})))});ne.propTypes={alignment:l.oneOf(["top","center"]),backdrop:l.oneOfType([l.bool,l.oneOf(["static"])]),children:l.node,className:l.string,container:l.any,duration:l.number,focus:l.bool,fullscreen:l.oneOfType([l.bool,l.oneOf(["sm","md","lg","xl","xxl"])]),keyboard:l.bool,onClose:l.func,onClosePrevented:l.func,onShow:l.func,portal:l.bool,scrollable:l.bool,size:l.oneOf(["sm","lg","xl"]),transition:l.bool,unmountOnClose:l.bool,visible:l.bool};ne.displayName="CModal";var se=d.forwardRef(function(n,i){var t=n.children,s=n.className,o=A(n,["children","className"]);return b.createElement("div",T({className:B("modal-body",s)},o,{ref:i}),t)});se.propTypes={children:l.node,className:l.string};se.displayName="CModalBody";var le=d.forwardRef(function(n,i){var t=n.children,s=n.className,o=A(n,["children","className"]);return b.createElement("div",T({className:B("modal-footer",s)},o,{ref:i}),t)});le.propTypes={children:l.node,className:l.string};le.displayName="CModalFooter";var te=d.forwardRef(function(n,i){var t=n.children,s=n.className,o=n.closeButton,c=o===void 0?!0:o,u=A(n,["children","className","closeButton"]),g=d.useContext(xe).setVisible;return b.createElement("div",T({className:B("modal-header",s)},u,{ref:i}),t,c&&b.createElement(De,{onClick:function(){return g(!1)}}))});te.propTypes={children:l.node,className:l.string,closeButton:l.bool};te.displayName="CModalHeader";var oe=d.forwardRef(function(n,i){var t=n.children,s=n.as,o=s===void 0?"h5":s,c=n.className,u=A(n,["children","as","className"]);return b.createElement(o,T({className:B("modal-title",c)},u,{ref:i}),t)});oe.propTypes={as:l.elementType,children:l.node,className:l.string};oe.displayName="CModalTitle";const Je=()=>{const[n,i]=d.useState(""),[t,s]=d.useState(""),[o,c]=d.useState(""),[u,g]=d.useState(""),[m,y]=d.useState(""),[N,P]=d.useState([]),[E,v]=d.useState({}),W=je(r=>r.userInfo.whitelevel_id),[k,j]=d.useState(!1),[M,q]=d.useState(""),[_,$]=d.useState("");d.useEffect(()=>{const r=new Date().toISOString().split("T")[0];g(r),y(r)},[]);const K=async r=>{try{const a=(await Z.post("/employee/name/",{employee_id:r,whitelevel_id:W})).data||{};a.employee_name?(s(a.employee_name),v(h=>({...h,employee_id:""}))):(s(""),v(h=>({...h,employee_id:"Employee does not exist"})))}catch(p){console.error("Error fetching employee name:",p),s(""),v(a=>({...a,employee_id:" Employee does not exist"}))}},L=async r=>{try{return(await Z.get(`/employee/search/?nameQuery=${r}`)).data||[]}catch(p){return console.error("Error fetching employee suggestions:",p),[]}},O=async r=>{const p=r.target.value;i(p),p.trim()!==""?await K(p):(s(""),v(a=>({...a,employee_id:""})))},V=async r=>{const p=r.target.value;if(s(p),/^[a-zA-Z\s]*$/.test(p))if(v(a=>({...a,employee_name:""})),p.trim()!==""){const a=await L(p);P(a)}else P([]);else v(a=>({...a,employee_name:"Only letters and spaces are allowed"}))},z=r=>{s(r.employee_name),i(r.employee_id),P([])},D=async r=>{r.preventDefault();const p={};if(n.trim()===""&&(p.employee_id="Employee ID is required"),t.trim()===""&&(p.employee_name="Employee Name is required"),Object.keys(p).length>0)v(p);else try{await Z.post("/submit-form",{employee_id:n,employee_name:t,accessControl:o,dateField1:u,dateField2:m}),i(""),s(""),c(""),g(new Date().toISOString().split("T")[0]),y(new Date().toISOString().split("T")[0]),v({}),P([]),console.log("Form submitted successfully")}catch(a){console.error("Error submitting form:",a)}},Q=()=>{j(!0)},R=()=>{console.log("Phone Number:",M),console.log("Password:",_),j(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{className:"justify-content-center",style:{display:"flex",justifyContent:"center",height:"70%"},children:e.jsx(Se,{xs:9,children:e.jsx(Ee,{className:"mb-4",children:e.jsx(Pe,{children:e.jsxs("form",{onSubmit:D,children:[e.jsxs(w,{className:"mb-3",children:[e.jsx(H,{type:"date",id:"floatingDate1",value:u,onChange:r=>g(r.target.value)}),e.jsx(F,{htmlFor:"floatingDate1",children:"Valid From*"})]}),e.jsxs(w,{className:"mb-3",children:[e.jsx(H,{type:"date",id:"floatingDate2",value:m,onChange:r=>y(r.target.value)}),e.jsx(F,{htmlFor:"floatingDate2",children:"Valid To*"})]}),e.jsxs(w,{className:"mb-3",children:[e.jsx(H,{type:"text",id:"floatingInput",placeholder:"Enter Code",value:n,onChange:O,style:{borderColor:E.employee_id?"red":void 0}}),e.jsx(F,{htmlFor:"floatingInput",children:"Enter Employee Code*"}),E.employee_id&&e.jsx("div",{className:"text-danger",children:E.employee_id})]}),e.jsxs(w,{className:"mb-3",style:{position:"relative"},children:[e.jsx(H,{type:"text",id:"floatingName",placeholder:"Enter Name",value:t,onChange:V,style:{borderColor:E.employee_name?"red":void 0}}),e.jsx(F,{htmlFor:"floatingName",children:"Enter Employee Name*"}),E.employee_name&&e.jsx("div",{className:"text-danger",children:E.employee_name}),N.length>0&&e.jsx("div",{style:{display:"block",position:"absolute",zIndex:1e3,width:"100%",border:"1px solid #ccc",backgroundColor:"#fff",borderRadius:"0.25rem",boxShadow:"0 0.5rem 1rem rgba(0, 0, 0, 0.15)",maxHeight:"150px",overflowY:"auto"},children:N.map(r=>e.jsxs("div",{onClick:()=>z(r),style:{padding:"0.5rem 1rem",cursor:"pointer",borderBottom:"1px solid #ddd"},children:[r.employee_name," (",r.employee_id,")"]},r.employee_id))})]}),e.jsxs(w,{className:"mb-3",children:[e.jsxs(ke,{id:"floatingAccessControl",value:o,onChange:r=>{c(r.target.value),Q()},children:[e.jsx("option",{value:"",children:"Role"})," ",e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"operator",children:"Operator"}),e.jsx("option",{value:"viewer",children:"Viewer"})]}),e.jsx(F,{htmlFor:"floatingAccessControl",children:"Select Access Control*"})]}),e.jsx("div",{className:"text-center",children:e.jsx(me,{type:"submit",style:{backgroundColor:"#1976d2",color:"#fff"},children:"Submit"})})]})})})})}),e.jsxs(ne,{visible:k,onClose:()=>j(!1),children:[e.jsx(te,{children:e.jsx(oe,{children:"Enter Phone Number and Password Here..."})}),e.jsxs(se,{children:[e.jsxs(w,{className:"mb-3",children:[e.jsx(H,{type:"number",id:"floatingPhoneNumber",placeholder:"Phone Number",value:M,onChange:r=>q(r.target.value)}),e.jsx(F,{htmlFor:"floatingPhoneNumber",children:"Phone Number"})]}),e.jsxs(w,{className:"mb-3",children:[e.jsx(H,{type:"password",id:"floatingPassword",placeholder:"Password",value:_,onChange:r=>$(r.target.value)}),e.jsx(F,{htmlFor:"floatingPassword",children:"Password"})]})]}),e.jsx(le,{children:e.jsx(me,{style:{backgroundColor:"#1976d2",color:"#fff"},onClick:R,children:"OK"})})]})]})};function Ue({open:n,handleClose:i,handleSave:t,currentRow:s,setCurrentRow:o}){const c=u=>{const{name:g,value:m}=u.target;o(y=>({...y,[g]:m}))};return e.jsxs(Be,{open:n,onClose:i,children:[e.jsx(Me,{children:"Edit Trainer Details"}),e.jsxs(qe,{children:[e.jsx(I,{autoFocus:!0,margin:"dense",name:"employee_id",label:"Employee ID",type:"text",fullWidth:!0,value:(s==null?void 0:s.employee_id)||"",onChange:c}),e.jsx(I,{margin:"dense",name:"employee_name",label:"Employee Name",type:"text",fullWidth:!0,value:(s==null?void 0:s.employee_name)||"",onChange:c}),e.jsx(I,{margin:"dense",name:"valid_from",label:"Valid From",type:"date",fullWidth:!0,value:(s==null?void 0:s.valid_from)||"",onChange:c,InputLabelProps:{shrink:!0}}),e.jsx(I,{margin:"dense",name:"valid_to",label:"Valid To",type:"date",fullWidth:!0,value:(s==null?void 0:s.valid_to)||"",onChange:c,InputLabelProps:{shrink:!0}}),e.jsx(I,{margin:"dense",name:"access_control",label:"Access Control",type:"text",fullWidth:!0,value:(s==null?void 0:s.access_control)||"",onChange:c}),e.jsx(I,{margin:"dense",name:"phone_number",label:"Phone Number",type:"text",fullWidth:!0,value:(s==null?void 0:s.phone_number)||"",onChange:c}),e.jsx(I,{margin:"dense",name:"password",label:"Password",type:"password",fullWidth:!0,value:(s==null?void 0:s.password)||"",onChange:c})]}),e.jsxs(Le,{children:[e.jsx(pe,{onClick:i,color:"primary",children:"Cancel"}),e.jsx(pe,{onClick:t,color:"primary",children:"Save"})]})]})}function Xe(n,i,t,s,o,c,u,g){return{id:n,employee_id:i,employee_name:t,valid_from:s,valid_to:o,access_control:c,phone_number:u,password:g}}const en=[Xe(1,"emp_0001","Saipriya Sahoo","06/06/2024","04/06/2024","admin",8798094532,"pass@535")];function he(n,i,t){return i[t]<n[t]?-1:i[t]>n[t]?1:0}function nn(n,i){return n==="desc"?(t,s)=>he(t,s,i):(t,s)=>-he(t,s,i)}function sn(n,i){const t=n.map((s,o)=>[s,o]);return t.sort((s,o)=>{const c=i(s[0],o[0]);return c!==0?c:s[1]-o[1]}),t.map(s=>s[0])}const ln=[{id:"employee_id",numeric:!1,disablePadding:!0,label:"Employee_Id"},{id:"employee_name",numeric:!0,disablePadding:!1,label:"Employee_Name"},{id:"valid_from",numeric:!0,disablePadding:!1,label:"Valid_From"},{id:"valid_to",numeric:!0,disablePadding:!1,label:"Valid_To"},{id:"access_control",numeric:!0,disablePadding:!1,label:"Access_Control"},{id:"phonenumber",numeric:!0,disablePadding:!1,label:"Phone Number"},{id:"password",numeric:!0,disablePadding:!1,label:"Password"},{id:"action",numeric:!0,disablePadding:!1,label:"Action"}];function ye(n){const{onSelectAllClick:i,order:t,orderBy:s,numSelected:o,rowCount:c,onRequestSort:u}=n,g=m=>y=>u(y,m);return e.jsx(We,{children:e.jsxs(J,{children:[e.jsx(S,{padding:"checkbox",children:e.jsx(be,{color:"primary",indeterminate:o>0&&o<c,checked:c>0&&o===c,onChange:i,inputProps:{"aria-label":"select all desserts"}})}),ln.map(m=>e.jsx(S,{align:m.numeric?"right":"left",padding:m.disablePadding?"none":"normal",sortDirection:s===m.id?t:!1,children:e.jsxs(Ke,{active:s===m.id,direction:s===m.id?t:"asc",onClick:g(m.id),children:[m.label,s===m.id?e.jsx(ge,{component:"span",sx:Qe,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},m.id))]})})}ye.propTypes={numSelected:l.number.isRequired,onRequestSort:l.func.isRequired,onSelectAllClick:l.func.isRequired,order:l.oneOf(["asc","desc"]).isRequired,orderBy:l.string.isRequired,rowCount:l.number.isRequired};function ve(n){const{numSelected:i,onDelete:t}=n;return e.jsxs(Ye,{sx:{pl:{sm:2},pr:{xs:1,sm:1},...i>0&&{bgcolor:s=>Ge(s.palette.primary.main,s.palette.action.activatedOpacity)}},children:[i>0?e.jsxs(fe,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[i," selected"]}):e.jsx(fe,{sx:{flex:"1 1 100%",textAlign:"center"},variant:"h6",id:"tableTitle",component:"div",children:"Access_Control_Details"}),i>0?e.jsx(U,{title:"Delete",children:e.jsx(G,{onClick:t,children:e.jsx(we,{})})}):e.jsx(U,{title:"Filter list",children:e.jsx(G,{children:e.jsx(Fe,{})})})]})}ve.propTypes={numSelected:l.number.isRequired,onDelete:l.func.isRequired};function tn(){const[n,i]=d.useState("asc"),[t,s]=d.useState("employee_id"),[o,c]=d.useState([]),[u,g]=d.useState(0),[m,y]=d.useState(!1),[N,P]=d.useState(5),[E,v]=d.useState(!1),[W,k]=d.useState(null),[j,M]=d.useState(en),q=(a,h)=>{i(t===h&&n==="asc"?"desc":"asc"),s(h)},_=a=>{if(a.target.checked){const h=j.map(f=>f.id);c(h);return}c([])},$=(a,h)=>{const f=o.indexOf(h);let x=[];f===-1?x=x.concat(o,h):f===0?x=x.concat(o.slice(1)):f===o.length-1?x=x.concat(o.slice(0,-1)):f>0&&(x=x.concat(o.slice(0,f),o.slice(f+1))),c(x)},K=(a,h)=>{g(h)},L=a=>{P(parseInt(a.target.value,10)),g(0)},O=a=>{y(a.target.checked)},V=a=>o.indexOf(a)!==-1,z=u>0?Math.max(0,(1+u)*N-j.length):0,D=d.useMemo(()=>sn(j,nn(n,t)).slice(u*N,u*N+N),[n,t,u,N,j]),Q=a=>{k(a),v(!0)},R=()=>{v(!1)},r=()=>{v(!1)},p=()=>{M(a=>a.filter(h=>!o.includes(h.id))),c([])};return e.jsxs(ge,{sx:{width:"100%"},children:[e.jsxs(Ve,{sx:{width:"100%",mb:2},children:[e.jsx(ve,{numSelected:o.length,onDelete:p}),e.jsx(ze,{children:e.jsxs(Re,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:m?"small":"medium",children:[e.jsx(ye,{numSelected:o.length,order:n,orderBy:t,onSelectAllClick:_,onRequestSort:q,rowCount:j.length}),e.jsxs(He,{children:[D.map((a,h)=>{const f=V(a.id),x=`enhanced-table-checkbox-${h}`;return e.jsxs(J,{hover:!0,onClick:Y=>$(Y,a.id),role:"checkbox","aria-checked":f,tabIndex:-1,selected:f,sx:{cursor:"pointer"},children:[e.jsx(S,{padding:"checkbox",children:e.jsx(be,{color:"primary",checked:f,inputProps:{"aria-labelledby":x}})}),e.jsx(S,{component:"th",id:x,scope:"row",padding:"none",children:a.employee_id}),e.jsx(S,{align:"right",children:a.employee_name}),e.jsx(S,{align:"right",children:a.valid_from}),e.jsx(S,{align:"right",children:a.valid_to}),e.jsx(S,{align:"right",children:a.access_control}),e.jsx(S,{align:"right",children:a.phone_number}),e.jsx(S,{align:"right",children:a.password}),e.jsx(S,{align:"right",children:e.jsx(U,{title:"Edit",children:e.jsx(G,{color:"primary",onClick:()=>Q(a),children:e.jsx(Ie,{})})})})]},a.id)}),z>0&&e.jsx(J,{style:{height:(m?33:53)*z},children:e.jsx(S,{colSpan:6})})]})]})}),e.jsx($e,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:N,page:u,onPageChange:K,onRowsPerPageChange:L})]}),e.jsx(Ze,{control:e.jsx(Ae,{checked:m,onChange:O}),label:"Dense padding"}),e.jsx(Ue,{open:E,handleClose:R,handleSave:r,currentRow:W,setCurrentRow:k})]})}const _n=()=>e.jsxs(e.Fragment,{children:[e.jsx(Je,{}),e.jsx(tn,{})]});export{_n as default};
