import{a as g}from"./axios-BCTQ_kMI.js";import{u as h}from"./useQuery-DpOqBg9D.js";import{h as o,S as c}from"./transition-DDb4YkYb.js";import{d as x,r as _,o as v,l as p,m as u,v as t,n as e,q as n,u as a,D as w,z as r,F as b,y as k,x as D}from"./index-nADqhdI8.js";import"./open-closed-oqGyURXw.js";const S={class:"bg-gradient-to-b from-green-100 via-[#CBEDD5] to-green-600/30"},j={class:"container flex flex-col items-center pt-24 px-4"},q={class:"w-[60%] sm:w-full text-center space-y-10"},C={class:"space-y-4"},H=t("div",{class:"relative"},[t("div",{class:"text-5xl lg:text-2xl font-medium lg:font-semibold leading-tight tracking-wide capitalize mb-3 text-gray-800"},[D(" Genggam Cahaya Islam di Ujung Jari dengan "),t("span",{class:"relative z-10 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-300"}," Muslim Hub ")])],-1),z=t("div",{class:"space-y-3 md:space-y-1"},[t("p",{class:"font-medium text-xl md:text-sm capitalize text-gray-700"}," Dapatkan Kebutuhan Islamimu Dengan Muslim Hub "),t("p",{class:"font-medium text-xl md:text-sm capitalize text-gray-600"}," Akses Kapan Saja dan Dimana Saja ")],-1),B=t("div",{class:"flex flex-col items-center sm:flex-row gap-4 justify-center"},[t("a",{href:"#menu",class:"px-8 py-3 md:px-4 md:py-2 bg-emerald-600 text-white font-medium text-lg md:text-base md:font-normal tracking-wider rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl"}," Mulai Sekarang ")],-1),K={class:"space-y-10 text-center mt-6"},N={class:"bg-white rounded-lg shadow-lg flex flex-col mt-6 p-5 mx-auto md:w-full w-[750px]"},A=t("span",{class:"text-green-600 font-medium text-left"},"Random Ayat Untukmu",-1),M={class:"text-2xl my-3 text-green-700 text-right"},V={class:"text-sm text-green-700 text-left"},F=t("div",{class:"my-6"},[t("span",{class:"text-4xl md:text-2xl font-semibold text-green-800"},"Cari Kebutuhanmu")],-1),T={id:"menu",class:"grid grid-cols-4 md:grid-cols-2 gap-4 mt-6"},E=["src"],I={class:"font-medium text-xl md:text-sm"},X=x({__name:"Home",setup(J){const i=_(!1),y=[{name:"Al-Quran",img:"quran.png",link:"/quran"},{name:"Jadwal Sholat",img:"shalat.png",link:"/jadwal_sholat"},{name:"Asmaul Husna",img:"allah.png",link:"/asmaul_husna"},{name:"Hadits",img:"book.png",link:"/hadith"},{name:"Doa Harian",img:"pray.png",link:"/doa_harian"},{name:"Shalawat Nabi",img:"prophet.png",link:"/shalawat_nabi"},{name:"Bacaan Tahlil",img:"tasbih.png",link:"/tahlil"},{name:"Kisah Nabi & Rasul",img:"muslim.png",link:"/kisah_nabi"}],{data:l,isLoading:L,refetch:Q}=h({queryKey:["quran","random"],queryFn:async()=>await g.get("https://quran-api-id.vercel.app/random").then(m=>m.data)});return v(()=>{i.value=!0,window.scrollTo(0,0)}),(m,R)=>{const f=w("router-link");return p(),u("div",S,[t("div",j,[e(a(c),{appear:"",show:i.value,as:"template"},{default:n(()=>[t("div",q,[t("div",C,[e(a(o),{as:"template",enter:"transform transition duration-1000","enter-from":"opacity-0 translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 translate-y-4"},{default:n(()=>[H]),_:1}),e(a(o),{as:"template",enter:"transform transition duration-1000 delay-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[z]),_:1})]),e(a(o),{as:"template",enter:"transform transition duration-1000 delay-500","enter-from":"opacity-0 translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 translate-y-4"},{default:n(()=>[B]),_:1})])]),_:1},8,["show"]),e(a(c),{appear:"",show:i.value,as:"div"},{default:n(()=>[t("div",K,[e(a(o),{as:"template",enter:"transform transition duration-1000 delay-700","enter-from":"opacity-0 translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 translate-y-4"},{default:n(()=>{var s,d;return[t("div",N,[A,t("div",M,r((s=a(l))==null?void 0:s.arab),1),t("span",V,r((d=a(l))==null?void 0:d.translation),1)])]}),_:1}),e(a(o),{as:"template",enter:"transform transition duration-1000 delay-1000","enter-from":"opacity-0 translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 translate-y-4"},{default:n(()=>[F]),_:1}),e(a(o),{as:"template",enter:"transform transition duration-1000 delay-1200","enter-from":"opacity-0 translate-y-4","enter-to":"opacity-100 translate-y-0",leave:"transform duration-300 transition ease-in-out","leave-from":"opacity-100 translate-y-0","leave-to":"opacity-0 translate-y-4"},{default:n(()=>[t("section",T,[(p(),u(b,null,k(y,s=>e(f,{key:s.name,to:s.link,class:"p-9 md:p-7 flex flex-col gap-3 items-center justify-center rounded-md bg-green-500"},{default:n(()=>[t("img",{src:s.img,class:"w-16 h-16 md:w-12 md:h-12 object-contain",alt:""},null,8,E),t("span",I,r(s.name),1)]),_:2},1032,["to"])),64))])]),_:1})])]),_:1},8,["show"])])])}}});export{X as default};
