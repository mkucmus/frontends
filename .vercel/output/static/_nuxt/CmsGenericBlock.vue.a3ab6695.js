import{a as u,o as i,c as d,aL as g,H as n,G as p}from"./entry.4f4ac261.js";const k=u({__name:"CmsGenericBlock",props:{content:null},setup(c){const e=c,r=()=>{const{resolvedComponent:t,componentName:s,isResolved:a}=g(e.content);if(t){if(!a)return n("div",{},"Problem resolving component: "+s);const{cssClasses:l,layoutStyles:o}=p(e.content),m={backgroundColor:o.backgroundColor,backgroundImage:o.backgroundImage};return o.backgroundColor=null,o.backgroundImage=null,n("div",{style:m},n(t,{content:e.content,style:o,class:l}))}return n("div",{},"Loading...")};return(t,s)=>(i(),d(r))}});export{k as _};
