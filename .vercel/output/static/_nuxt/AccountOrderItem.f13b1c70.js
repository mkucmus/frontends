import{a as _,t as a,o as l,j as n,u as o,v as e,ap as y,k as x,y as r,F as i,z as g,aq as m}from"./entry.4f4ac261.js";const b={key:0,class:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"},I=["src"],v={class:"ml-4 flex flex-1 flex-col"},j={class:"flex justify-between text-base font-medium text-gray-900"},k={class:"ml-4"},w={class:"mt-1 text-sm text-gray-500"},P={class:"flex flex-1 items-end justify-between text-sm"},z={class:"text-gray-500"},C=_({__name:"AccountOrderItem",props:{orderItem:null},setup(c){const s=c,u=a(()=>m(s.orderItem.payload)),p=a(()=>{var t;return(t=s.orderItem)==null?void 0:t.unitPrice}),f=a(()=>{var t;return(t=s.orderItem)==null?void 0:t.quantity}),h=a(()=>m(s.orderItem.payload)?s.orderItem.payload.options:[]);return(t,B)=>(l(),n(i,null,[o(u)?x("",!0):(l(),n("div",b,[e("img",{src:o(y)(c.orderItem),alt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",class:"h-full w-full object-cover object-center"},null,8,I)])),e("div",v,[e("div",null,[e("div",j,[e("h3",null,r(c.orderItem.label),1),e("p",k,r(o(p))+" EUR",1)]),e("p",w,[(l(!0),n(i,null,g(o(h),d=>(l(),n("span",{key:d.group,class:"mr-2"},r(d.group)+": "+r(d.option),1))),128))])]),e("div",P,[e("p",z,"Qty "+r(o(f)),1)])])],64))}});export{C as default};
