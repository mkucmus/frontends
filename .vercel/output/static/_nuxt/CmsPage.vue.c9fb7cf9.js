import{a as p,B as u,C as g,t as d,o as C,c as f,D as k,E as x,G as _,H as s}from"./entry.4f4ac261.js";const b=p({__name:"CmsPage",props:{content:null},setup(a){const r=a,{routeName:c}=u();c.value==="frontend.navigation.page"&&g();const t=d(()=>{var e;return((e=r.content)==null?void 0:e.sections)||[]}),i=()=>t.value.map(o=>({component:k(`CmsSection${x(o.type)}`),section:o})).map(o=>{const{cssClasses:m,layoutStyles:n}=_(o.section);return typeof o.component=="string"?s("div",{},"There is no "+o.component):s(o.component,{content:o.section,class:{[m??""]:!0,"max-w-screen-xl mx-auto":(n==null?void 0:n.sizingMode)==="boxed"},style:{backgroundColor:n==null?void 0:n.backgroundColor,backgroundImage:n==null?void 0:n.backgroundImage,backgroundSize:n==null?void 0:n.backgroundSize}})});return(e,o)=>(C(),f(i))}});export{b as _};
