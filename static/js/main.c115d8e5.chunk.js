(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),o=a.n(r);a(12),a(13);function c(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function s(e){const[t,a]=Object(l.useState)("Enter text here2");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"5"})),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let l=t.toUpperCase();a(l),e.showAlert("Converted to Uppercase!","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let l=t.toLowerCase();a(l),e.showAlert("Converted to Lowercase!","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{a(""),e.showAlert("Text Cleared!","success")}},"Clear Text")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null,t.split(" ").length," words and ",t.length," characters"),n.a.createElement("p",null,.008*t.split(" ").length," Minutes read"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,t.length>0?t:"Enter something in the textbox above to preview it here")))}c.defaultPropes={title:"Set title here",aboutText:"About text here"};var m=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),": ",e.alert.msg)};var i=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null),o=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{title:"TextUtils ",aboutText:"TextAbouts",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",o("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(t("light"),document.body.style.backgroundColor="white",o("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),n.a.createElement(m,{alert:a}),n.a.createElement("div",{className:"container my-4",mode:e},n.a.createElement(s,{heading:"Enter Text to analyze below",mode:e,showAlert:o})))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:o}=t;a(e),l(e),n(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),u()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.c115d8e5.chunk.js.map