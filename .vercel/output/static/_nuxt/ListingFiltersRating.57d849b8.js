import{a as x,C,r,t as k,aA as _,o as g,j as m,v as n,y as L,L as u,u as a,F,z as $}from"./entry.4f4ac261.js";const z={class:"font-medium text-gray-900"},B={class:"ml-6 flex items-center"},E={class:"flex"},M=["onMouseover"],S=x({__name:"ListingFiltersRating",props:{filter:null},emits:["select-value"],setup(c,{emit:b}){const y=c,{getCurrentFilters:d}=C({listingType:"productSearchListing"}),i=r(!1),l=r(0),v=k(()=>{var s;return i.value?l.value:((s=d.value)==null?void 0:s.rating)||0}),h=s=>{l.value=s,i.value=!0},w=()=>{var e,t;const s=((e=d.value)==null?void 0:e.rating)!==l.value?l.value:void 0;b("select-value",{code:(t=y.filter)==null?void 0:t.code,value:s})},o=r(!1),f=r(null);return _(f,()=>o.value=!1),(s,e)=>(g(),m("div",{ref_key:"dropdownElement",ref:f,class:"relative"},[n("button",{type:"button",class:"border-2 border-gray-300 px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500 rounded",onClick:e[0]||(e[0]=t=>o.value=!a(o))},[n("span",z,L(c.filter.label),1),n("span",B,[n("div",{class:u(["h-5 w-5",[a(o)?"i-carbon-chevron-up":"i-carbon-chevron-down"]])},null,2)])]),n("div",{class:u(["absolute bg-white mt-1 border-2 rounded border-gray-300 p-3 z-1000",{hidden:!a(o)}])},[n("div",E,[(g(),m(F,null,$(5,t=>n("div",{key:t,class:u(["h-6 w-6 c-yellow-500",{"i-carbon-star-filled":a(v)>=t,"i-carbon-star":a(v)<t}]),onMouseleave:e[1]||(e[1]=p=>i.value=!1),onClick:e[2]||(e[2]=p=>w()),onMouseover:p=>h(t)},null,42,M)),64))])],2)],512))}});export{S as default};
