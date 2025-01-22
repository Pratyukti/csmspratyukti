import{r as b,_ as y,R as i,b as c,c as N,P as a}from"./index-BLPjNv1m.js";var u=b.forwardRef(function(e,n){var l,d=e.children,t=e.as,o=t===void 0?"div":t,r=e.className,s=e.invalid,m=e.tooltip,v=e.valid,f=y(e,["children","as","className","invalid","tooltip","valid"]);return i.createElement(o,c({className:N((l={},l["invalid-".concat(m?"tooltip":"feedback")]=s,l["valid-".concat(m?"tooltip":"feedback")]=v,l),r)},f,{ref:n}),d)});u.propTypes={as:a.elementType,children:a.node,className:a.string,invalid:a.bool,tooltip:a.bool,valid:a.bool};u.displayName="CFormFeedback";var x=function(e){var n=e.describedby,l=e.feedback,d=e.feedbackInvalid,t=e.feedbackValid,o=e.invalid,r=e.tooltipFeedback,s=e.valid;return i.createElement(i.Fragment,null,l&&(s||o)&&i.createElement(u,c({},o&&{id:n},{invalid:o,tooltip:r,valid:s}),l),d&&i.createElement(u,{id:n,invalid:!0,tooltip:r},d),t&&i.createElement(u,{valid:!0,tooltip:r},t))};x.propTypes={describedby:a.string,feedback:a.oneOfType([a.node,a.string]),feedbackValid:a.oneOfType([a.node,a.string]),feedbackInvalid:a.oneOfType([a.node,a.string]),invalid:a.bool,tooltipFeedback:a.bool,valid:a.bool};x.displayName="CFormControlValidation";var T=b.forwardRef(function(e,n){var l=e.children,d=e.className,t=e.customClassName,o=y(e,["children","className","customClassName"]);return i.createElement("label",c({className:t??N("form-label",d)},o,{ref:n}),l)});T.propTypes={children:a.node,className:a.string,customClassName:a.string};T.displayName="CFormLabel";var O=b.forwardRef(function(e,n){var l=e.children,d=e.className,t=y(e,["children","className"]);return i.createElement("div",c({className:N("form-floating",d)},t,{ref:n}),l)});O.propTypes={children:a.node,className:a.string};O.displayName="CFormFloating";var E=b.forwardRef(function(e,n){var l=e.children,d=e.as,t=d===void 0?"div":d,o=e.className,r=y(e,["children","as","className"]);return i.createElement(t,c({className:N("form-text",o)},r,{ref:n}),l)});E.propTypes={as:a.elementType,children:a.node,className:a.string};E.displayName="CFormText";var V=function(e){var n=e.children,l=e.describedby,d=e.feedback,t=e.feedbackInvalid,o=e.feedbackValid,r=e.floatingClassName,s=e.floatingLabel,m=e.id,v=e.invalid,f=e.label,p=e.text,k=e.tooltipFeedback,g=e.valid,C=function(){return i.createElement(x,{describedby:l,feedback:d,feedbackInvalid:t,feedbackValid:o,floatingLabel:s,invalid:v,tooltipFeedback:k,valid:g})};return s?i.createElement(O,{className:r},n,i.createElement(T,{htmlFor:m},f||s),p&&i.createElement(E,{id:l},p),i.createElement(C,null)):i.createElement(i.Fragment,null,f&&i.createElement(T,{htmlFor:m},f),n,p&&i.createElement(E,{id:l},p),i.createElement(C,null))};V.propTypes=c({children:a.node,floatingClassName:a.string,floatingLabel:a.oneOfType([a.node,a.string]),label:a.oneOfType([a.node,a.string]),text:a.oneOfType([a.node,a.string])},x.propTypes);V.displayName="CFormControlWrapper";var S=b.forwardRef(function(e,n){var l,d=e.children,t=e.className,o=e.delay,r=o===void 0?!1:o,s=e.feedback,m=e.feedbackInvalid,v=e.feedbackValid,f=e.floatingClassName,p=e.floatingLabel,k=e.id,g=e.invalid,C=e.label,F=e.onChange,j=e.plainText,L=e.size,q=e.text,A=e.tooltipFeedback,R=e.type,w=R===void 0?"text":R,z=e.valid,P=y(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),W=b.useState(),I=W[0],B=W[1];return b.useEffect(function(){var h=setTimeout(function(){return I&&F&&F(I)},typeof r=="number"?r:500);return function(){return clearTimeout(h)}},[I]),i.createElement(V,{describedby:P["aria-describedby"],feedback:s,feedbackInvalid:m,feedbackValid:v,floatingClassName:f,floatingLabel:p,id:k,invalid:g,label:C,text:q,tooltipFeedback:A,valid:z},i.createElement("input",c({className:N(j?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(L)]=L,l["form-control-color"]=w==="color",l["is-invalid"]=g,l["is-valid"]=z,l),t),id:k,type:w,onChange:function(h){return r?B(h):F&&F(h)}},P,{ref:n}),d))});S.propTypes=c({className:a.string,id:a.string,delay:a.oneOfType([a.bool,a.number]),plainText:a.bool,size:a.oneOf(["sm","lg"]),type:a.oneOfType([a.oneOf(["color","file","text"]),a.string])},V.propTypes);S.displayName="CFormInput";export{S as C,O as a,T as b,V as c};
