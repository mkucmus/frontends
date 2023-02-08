import{_ as m}from"./ProductCard.vue.6ec3ada6.js";import{a as x,ak as f,p as g,r as d,h as y,I as w,o,j as i,v as e,u,F as v,z as b,x as k,W as B,al as W,c as C,M as P,b2 as N}from"./entry.4f4ac261.js";import"./SharedListingProductPrice.vue.cdbec636.js";import"./SharedPrice.vue.3589e6fd.js";const V={class:"wishlist-page","data-testid":"wishlist-wrapper"},F={class:"max-w-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8"},I={key:0},L=e("h1",{class:"my-3 text-3xl font-extrabold"},"Wishlist",-1),S={class:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},j={key:1,class:"flex flex-col items-center col mx-auto","data-testid":"wishlist-empty"},z=e("div",{class:"w-48 h-48 i-carbon-favorite"},null,-1),E=e("h1",{class:"my-3 text-3xl font-extrabold"},"Wishlist is empty",-1),M=e("p",{class:"my-4"},"No products were added to the Wishlist.",-1),T={name:"WishlistPage"},H=x({...T,setup($){const{items:r}=f(),{apiInstance:p}=g(),a=d([]),c=d(!1);y([{name:"Wishlist",path:"/wishlist"}]);const _=async t=>{c.value=!0;try{const s=await N({ids:t||r.value},p);s&&(a.value=s.elements)}catch(s){console.error("[wishlist][loadProductsByItemIds]",s.messages)}c.value=!1};return w(r,(t,s)=>{t.length!==(s==null?void 0:s.length)&&(a.value=a.value.filter(({id:n})=>t.includes(n))),t.length&&_(t)},{immediate:!0}),(t,s)=>{const n=m,h=W;return o(),i("div",V,[e("div",F,[u(a).length?(o(),i("div",I,[L,e("div",S,[(o(!0),i(v,null,b(u(a),l=>(o(),C(n,{key:l.id,product:l},null,8,["product"]))),128))])])):(o(),i("div",j,[z,E,M,k(h,{to:"/",class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary","date-testid":"wishlist-empty-continue-link"},{default:B(()=>[P(" Continue Shopping ")]),_:1})]))])])}}});export{H as default};