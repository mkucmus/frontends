import{_ as v}from"./ListingFilters.vue.3468a92d.js";import{_ as w}from"./ProductCard.vue.6ec3ada6.js";import{_ as B}from"./SharedPagination.vue.cc52113a.js";import{a as N,l as q,m as R,C as F,h as I,w as V,o as e,j as n,u as t,c as l,k as $,v as o,x as _,F as A,z as D,e as E,D as T}from"./entry.4f4ac261.js";import"./SharedListingProductPrice.vue.cdbec636.js";import"./SharedPrice.vue.3589e6fd.js";const j={class:"container mb-8 mx-4 md:mx-auto","data-testid":"search-results-container"},z={class:"mb-8 text-3xl font-extrabold text-center"},G={key:0},H={key:1},J=o("hr",null,null,-1),K={class:"grid grid-cols-1 mt-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},M={name:"SearchResultPage"},te=N({...M,async setup(O){let s,r;const a=q(),m=R(),{search:d,getElements:c,getTotalPagesCount:g,getCurrentPage:p,changeCurrentPage:h,loading:y,setInitialListing:f,getCurrentListing:x}=F({listingType:"productSearchListing"});I([{name:"Search",path:"/search"}]);const{data:C}=([s,r]=V(async()=>E("productSearch",async()=>(await d(a.query),x.value),{watch:[a]})),s=await s,r(),s),k=async i=>{await m.push({query:{...a.query,p:i}}),h(a.query)};return f(C.value),(i,Q)=>{const L=T("IconsLoadingCircle"),P=v,S=w,b=B;return e(),n("div",j,[t(y)?(e(),l(L,{key:0})):$("",!0),o("h1",z,[t(c).length?(e(),n("span",G,"Search Result")):(e(),n("span",H,"No products found"))]),_(P,{class:"mb-4"}),J,o("div",K,[(e(!0),n(A,null,D(t(c),u=>(e(),l(S,{key:u.id,product:u},null,8,["product"]))),128))]),_(b,{total:t(g),current:Number(t(p)),class:"mt-10",onChangePage:k},null,8,["total","current"])])}}});export{te as default};
