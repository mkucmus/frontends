import{a as h,ad as x,p as v,r as d,t as b,o,j as a,v as e,u as t,a9 as w,R as g,S as k,X as c,y as S,k as P}from"./entry.4f4ac261.js";const R={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},j={class:"max-w-md w-full space-y-8"},C=e("div",null,[e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Reset password ")],-1),E=["onSubmit"],B={class:"rounded-md shadow-sm -space-y-px"},D=e("label",{for:"email-address",class:"sr-only"},"Email address",-1),V={key:0,class:"flex items-center justify-between"},M={class:"flex items-center"},N={class:"send-email-errors text-red-600 border-gray-300 rounded"},U=e("div",null,[e("button",{class:"group relative w-full flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-light",type:"submit"}," Resend password ")],-1),$={key:1,class:"text-center text-gray-900"},A=h({__name:"AccountRecoverPassword",emits:["success"],setup(q,{emit:m}){const{resetPassword:u,errors:p}=x(),{apiInstance:f}=v(),i=d(!1),n=d({email:"",storefrontUrl:f.config.endpoint}),l=b(()=>{var s;return(s=p.resetPassword)==null?void 0:s.map(({detail:r})=>r).toString()}),y=async()=>{try{await u(n.value)&&(i.value=!0,m("success"))}catch(s){console.error("error resend email",s)}};return(s,r)=>(o(),a("div",R,[e("div",j,[C,t(i)?(o(),a("p",$," You should receive a link in a few moments. Please open that link to reset your password. ")):(o(),a("form",{key:0,class:"space-y-6",onSubmit:w(y,["prevent"])},[e("div",B,[e("div",null,[D,g(e("input",{id:"email-address","onUpdate:modelValue":r[0]||(r[0]=_=>t(n).email=_),name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-brand-primary focus:border-brand-primary focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[k,t(n).email]])])]),c(s.$slots,"error",{},()=>[t(l).length?(o(),a("div",V,[e("div",M,[e("div",N,S(t(l)),1)])])):P("",!0)]),U],40,E)),c(s.$slots,"action")])]))}});export{A as _};