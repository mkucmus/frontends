import{_ as P}from"./ProductStatic.vue.88e2e245.js";import{_ as h}from"./CmsPage.vue.c9fb7cf9.js";import{a as v,b as x,w as C,e as b,f as k,h as w,i as B,o as s,j as I,u as e,c as p,k as A}from"./entry.4f4ac261.js";import"./ProductGallery.vue.cd14bac2.js";import"./CmsElementImageGallery.vue.d1c73afd.js";import"./CmsElementImage.vue.70cc70b2.js";import"./SwSlider.vue.a61e71f6.js";import"./ProductPrice.vue.82ef5176.js";import"./SharedPrice.vue.3589e6fd.js";import"./ProductUnits.vue.e34e5f76.js";import"./ProductVariantConfigurator.vue.183fe364.js";import"./ProductAddToCart.vue.e4cbd0be.js";const R={class:"container mx-auto bg-white flex flex-col"},q=v({__name:"FrontendDetailPage",props:{navigationId:null},async setup(d){var n,u,i;let t,c;const r=d,{search:_}=x(),{data:a}=([t,c]=C(async()=>b("cmsProduct"+r.navigationId,async()=>await _(r.navigationId,{withCmsAssociations:!0}),"$cYaWBTuNQO")),t=await t,c(),t),l=k((n=a.value)==null?void 0:n.product.seoCategory,{startIndex:2});w(l);const{product:o}=B((u=a.value)==null?void 0:u.product,(i=a.value)==null?void 0:i.configurator);return(f,$)=>{var m;const g=P,y=h;return s(),I("div",R,[(m=e(o))!=null&&m.cmsPage?e(o).cmsPage?(s(),p(y,{key:1,content:e(o).cmsPage},null,8,["content"])):A("",!0):(s(),p(g,{key:0,product:e(o)},null,8,["product"]))])}}});export{q as default};