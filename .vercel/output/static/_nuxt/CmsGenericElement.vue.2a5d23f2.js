import{a as l,o as i,c as p,aL as u,H as o,G as C}from"./entry.4f4ac261.js";const _=l({__name:"CmsGenericElement",props:{content:null},setup(s){const e=s,c=()=>{const{resolvedComponent:n,componentName:t,isResolved:r}=u(e.content);if(n){if(!r)return o("div",{},"Problem resolving component: "+t);const{cssClasses:a,layoutStyles:m}=C(e.content);return o(n,{content:e.content,style:m,class:a})}return o("div",{},"Loading...")};return(n,t)=>(i(),p(c))}});export{_};
