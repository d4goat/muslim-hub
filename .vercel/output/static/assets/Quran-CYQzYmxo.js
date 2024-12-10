import{a as w}from"./axios-BCTQ_kMI.js";import{S as g}from"./search-DA7LRnV9.js";import{d as L,r as _,c as k,o as C,l as o,m as n,v as e,n as p,u as S,F as j,y as q,B as f,D as m,q as V,z as l,E as b,G as B}from"./index-CAlQbQsq.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./createLucideIcon-DeedF6kP.js";const h=c=>(b("data-v-44127f6e"),c=c(),B(),c),F={class:"flex flex-col pb-16"},I={class:"flex-1 space-y-6"},N={class:"flex justify-center"},D={class:"w-128 sm:w-84 rounded-lg"},Q={key:0},T={class:"flex flex-wrap justify-center gap-7"},E={class:"w-120 sm:w-84 p-4 rounded-md bg-white shadow-md flex flex-wrap gap-3 items-center justify-between"},z={class:"flex gap-5 items-center"},G={class:"flex flex-col"},M={class:"flex gap-2 items-center"},U={class:"font-semibold text-sm"},H={class:"md:text-xs"},J={class:""},K={key:1,class:"flex justify-center"},O=h(()=>e("span",{class:"text-2xl font-medium"},"No Data Found",-1)),P=[O],R={key:2,class:"flex justify-center"},W=h(()=>e("span",{class:"animate-pulse text-2xl font-medium"},"Loading...",-1)),X=[W],Y=L({__name:"Quran",setup(c){const d=_(""),r=_(!1),i=_([]),v=async()=>{try{r.value=!0;const a=await w.get("https://equran.id/api/v2/surat").then(t=>(r.value=!1,t)).catch(t=>{console.error(t.response.data.message),r.value=!1});i.value=a.data.data}catch(a){console.error(a)}},u=k(()=>{if(d.value=="")return i.value;const a=d.value.toLowerCase();return i.value.filter(t=>t.namaLatin.toLowerCase().includes(a)||t.tempatTurun.toLowerCase().includes(a))});return C(()=>{v(),window.scrollTo(0,0)}),(a,t)=>{const x=m("el-input"),y=m("router-link");return o(),n("div",F,[e("div",I,[e("div",N,[e("div",D,[p(x,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),"suffix-icon":S(g),placeholder:"Al-Fatihah, Al-Baqarah, etc.",class:"md:h-10 h-12 shadow-md",style:{"--el-color-primary":"#16a34a","--el-input-border-radius":"10px"}},null,8,["modelValue","suffix-icon"])])]),u.value.length>0?(o(),n("div",Q,[e("div",T,[(o(!0),n(j,null,q(u.value,s=>(o(),n("div",{key:s.nomor},[p(y,{to:{name:"quran.surah",query:{surah:s.namaLatin,surah_ke:s.nomor}}},{default:V(()=>[e("div",E,[e("div",z,[e("div",null,l(s.nomor),1),e("div",G,[e("div",M,[e("span",U,l(s.namaLatin),1),e("span",H," ( "+l(s.arti)+" ) ",1)]),e("span",J,l(s.tempatTurun)+" • "+l(s.jumlahAyat)+" Ayat ",1)])])])]),_:2},1032,["to"])]))),128))])])):!r.value&&u.value.length==0?(o(),n("div",K,P)):f("",!0),r.value?(o(),n("div",R,X)):f("",!0)])])}}}),ae=A(Y,[["__scopeId","data-v-44127f6e"]]);export{ae as default};
