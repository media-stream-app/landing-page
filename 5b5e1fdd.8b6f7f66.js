(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),m=a(77),l=a(51),o=a.n(l);t.default=function(){const[e,t]=r.a.useState(null);return r.a.useEffect(()=>{fetch("https://mock-faker-server.herokuapp.com/fake/random/uuid").then(e=>e.json()).then(({data:e})=>t(e))},[]),r.a.createElement(m.a,{title:"Let's get you onboard",description:"Setup live streaming in minutes"},r.a.createElement("section",{className:o.a.onboardingContainer},r.a.createElement("div",{className:o.a.headerGroup},r.a.createElement("h1",null,"Media Stream App"),r.a.createElement("span",null,"Convey your interest & we will get back to you in a jiffy")),r.a.createElement("form",{className:o.a.onboardingForm,onSubmit:function(t){t.preventDefault();let a=Object.fromEntries(new FormData(t.target));a.hostname=new URL(a.hostname).hostname,a.id=e,fetch("https://api.media-stream.app/channel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(e=>e.json()).then(({status:e})=>{201===e?alert("Your interest is recorded, expect to hear back from us in 24hrs!"):alert("Something went wrong!")})}},r.a.createElement("label",{htmlFor:"name"},"What do we call you?"),r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Please enter your legal name",required:!0}),r.a.createElement("label",{htmlFor:"email"},"How can we reach you out ?"),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Please enter your email address",required:!0}),r.a.createElement("label",{htmlFor:"company"},"Are you registered with a company ?"),r.a.createElement("input",{type:"text",name:"company",id:"company",placeholder:"Please enter your company name (if any)"}),r.a.createElement("label",{htmlFor:"hostname"},"Where are you planning to host the stream solution ?"),r.a.createElement("input",{type:"url",name:"hostname",id:"hostname",placeholder:"SSL enabled Domain name here, example.com, www.example.com, subdomain.example.com",required:!0}),r.a.createElement("label",{htmlFor:"timeline"},"How soon are you planning to get your solution out ?"),r.a.createElement("input",{type:"text",name:"timeline",id:"timeline",placeholder:"Estimated timeline... 1day ? 1week",required:!0}),r.a.createElement("label",{htmlFor:"username"},"Do you have a preferred username in mind ?"),r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:""}),r.a.createElement("label",{htmlFor:"dob"},"Date of birth"),r.a.createElement("input",{type:"date",name:"dob",id:"dob",placeholder:"Enter DOB, select a valid date from the date picker",required:!0}),r.a.createElement("div",{className:o.a.terms},r.a.createElement("input",{type:"checkbox",name:"terms",id:"terms",value:"accepted-terms",required:!0}),r.a.createElement("label",{htmlFor:"terms"},"By submitting this form you accept the terms and conditions listed in"," ",r.a.createElement("a",{href:"https://media-stream.app/terms"},"https://media-stream.app/terms"))),r.a.createElement("input",{type:"submit",value:"Get me onboard"}))))}}}]);