import{a as g}from"./axios-BCTQ_kMI.js";import{d as v,r,K as b,l as s,m as t,u as d,v as e,F as k,y as C,B as f,I as w,s as j,D as q,n as F,q as N,x as $,z as c}from"./index-D1nABZ38.js";import{u as z}from"./useQuery-CeWir3rg.js";const B={class:"py-12"},R={key:0,class:"space-y-6"},V={class:"flex flex-col space-y-4"},D={class:"flex flex-col gap-7"},E={class:"font-medium text-3xl md:text-2xl text-right"},K={class:"font-medium"},L={key:1,class:"flex justify-center"},M=e("span",{class:"animate-pulse text-2xl font-medium"},"Loading...",-1),T=[M],H={key:2,class:"flex justify-center"},I=e("span",{class:"text-3xl font-medium"},"No Data Found",-1),Q=[I],O=v({__name:"HadithList",setup(S){const u=j(),a=r(1),l=r(20);r(!1);const{data:m,isFetching:p,refetch:h}=z({queryKey:["hadith",u.query.hadith_name],queryFn:async()=>await g.get(`https://api.hadith.gading.dev/books/${u.query.hadith_name}?range=${a.value}-${l.value}`).then(n=>n.data),onError:n=>b.error(n.response.data.message),enabled:!0,cacheTime:0}),_=n=>{n=="minus"?(a.value=Math.max(1,a.value-20),l.value=Math.max(20,l.value-20)):(a.value+=20,l.value+=20),window.scrollTo(0,0),h()};return(n,i)=>{var x;const y=q("spdan");return s(),t("main",B,[d(p)?(s(),t("div",L,T)):(s(),t("div",R,[e("div",V,[(s(!0),t(k,null,C(d(m).data.hadiths,o=>(s(),t("div",{class:"p-5 bg-white rounded-lg shadow-md flex flex-col space-y-6",key:o.number},[e("div",D,[F(y,{class:"font-semibold"},{default:N(()=>[$("Hadits Ke "+c(o.number),1)]),_:2},1024),e("span",E,c(o.arab),1)]),e("span",K,c(o.id),1)]))),128))]),e("div",{class:w(["flex",a.value==1?"justify-end":"justify-between"])},[a.value!==1?(s(),t("button",{key:0,class:"underline text-lg md:text-sm text-green-600 capitalize",onClick:i[0]||(i[0]=o=>_("minus"))},"sebelumnya")):f("",!0),e("button",{class:"underline text-lg md:text-sm text-green-600 capitalize",onClick:i[1]||(i[1]=o=>_("plus"))},"selanjutnya")],2)])),(x=d(m))!=null&&x.error?(s(),t("div",H,Q)):f("",!0)])}}});export{O as default};