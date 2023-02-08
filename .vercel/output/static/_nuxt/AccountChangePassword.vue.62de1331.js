import{a as $,ad as V,a7 as S,t as g,r as U,ab as q,o as t,j as n,u as s,k as i,v as r,M,y as u,R as w,S as p,a9 as N}from"./entry.4f4ac261.js";import{u as z,r as m,m as y,s as B}from"./index.esm.6601123d.js";const L={class:"space-y-8"},R={key:0,class:"p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800",role:"alert"},j=r("span",{class:"font-medium"},"Your password has been updated.",-1),A=[j],D={class:"text-sm text-gray-500"},E=r("div",null," If you want to change the password to access your account, enter the following information: ",-1),F={key:0},T={class:"text-gray-900"},Y=["onSubmit"],I={key:0,class:"text-red-600 focus:ring-brand-primary border-gray-300 rounded"},G={class:"mt-4 space-y-4 lg:mt-5 md:space-y-5"},H=r("label",{for:"current-password",class:"block mb-2 text-sm font-medium text-gray-500 dark:text-white"},"Curent password",-1),J={key:0,class:"text-red-600 focus:ring-brand-primary border-gray-300 rounded"},K=r("label",{for:"new-password",class:"block mb-2 text-sm font-medium text-gray-500 dark:text-white"},"New password",-1),O={key:0,class:"text-red-600 focus:ring-brand-primary border-gray-300 rounded"},Q=r("label",{for:"confirm-password",class:"block mb-2 text-sm font-medium text-gray-500 dark:text-white"},"Repeat password",-1),W={key:0,class:"text-red-600 focus:ring-brand-primary border-gray-300 rounded"},X=r("div",null,[r("button",{class:"group relative w-full flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary",type:"submit"}," Change password ")],-1),es=$({__name:"AccountChangePassword",emits:["success"],setup(Z,{emit:h}){var b;const{updatePassword:_,errors:x}=V(),{user:P,refreshUser:v}=S(),l=g(()=>{var d;return(d=x.updatePassword)==null?void 0:d.map(({detail:o})=>o).toString()}),f=U(!1),e=q({password:{currentPassword:"",newPassword:"",newPasswordConfirm:""},email:(b=P.value)==null?void 0:b.email}),k=g(()=>({password:{currentPassword:{required:m,minLength:y(8)},newPassword:{required:m,minLength:y(8)},newPasswordConfirm:{required:m,newPasswordConfirm:B(e.password.newPassword)}}})),a=z(k,e),C=async()=>{try{if(await a.value.$validate()){const o=await _({password:e.password.currentPassword,newPassword:e.password.newPassword,newPasswordConfirm:e.password.newPasswordConfirm});await v(),o&&(e.password.currentPassword="",e.password.newPassword="",e.password.newPasswordConfirm="",a.value.$reset(),f.value=!0,h("success"))}else return}catch(d){console.error("error change password",d)}};return(d,o)=>(t(),n("div",L,[s(f)?(t(),n("div",R,A)):i("",!0),r("div",D,[E,s(e).email?(t(),n("div",F,[M(" Your current email address is "),r("span",T,u(s(e).email),1)])):i("",!0)]),r("form",{class:"mt-8 space-y-6",onSubmit:N(C,["prevent"])},[s(l).length?(t(),n("div",I,u(s(l)),1)):i("",!0),r("div",G,[r("div",null,[H,w(r("input",{id:"current-password","onUpdate:modelValue":o[0]||(o[0]=c=>s(e).password.currentPassword=c),name:"curent-password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-brand-primary focus:border-brand-primary focus:z-10 sm:text-sm",placeholder:"••••••••"},null,512),[[p,s(e).password.currentPassword]]),s(a).password.currentPassword.$error?(t(),n("span",J,u(s(a).password.currentPassword.$errors[0].$message),1)):i("",!0)]),r("div",null,[K,w(r("input",{id:"new-password","onUpdate:modelValue":o[1]||(o[1]=c=>s(e).password.newPassword=c),name:"new-password",type:"password",autocomplete:"new-password",required:"",class:"appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-brand-primary focus:border-brand-primary focus:z-10 sm:text-sm",placeholder:"••••••••"},null,512),[[p,s(e).password.newPassword]]),s(a).password.newPassword.$error?(t(),n("span",O,u(s(a).password.newPassword.$errors[0].$message),1)):i("",!0)]),r("div",null,[Q,w(r("input",{id:"confirm-password","onUpdate:modelValue":o[2]||(o[2]=c=>s(e).password.newPasswordConfirm=c),name:"confirm-password",type:"password",autocomplete:"repeat-password",required:"",class:"appearance-none rounded-md shadow-sm relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-brand-primary focus:border-brand-primary focus:z-10 sm:text-sm",placeholder:"••••••••"},null,512),[[p,s(e).password.newPasswordConfirm]]),s(a).password.newPasswordConfirm.$error?(t(),n("span",W,u(s(a).password.newPasswordConfirm.$errors[0].$message),1)):i("",!0)])]),X],40,Y)]))}});export{es as _};
