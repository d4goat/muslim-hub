import{a as l}from"./axios-BCTQ_kMI.js";import{d,r as i,o as _,l as a,m as o,v as e,F as u,y as p,B as f,z as r}from"./index-D1nABZ38.js";const x={class:"flex-1 none"},m={key:0},h={class:"flex flex-wrap justify-center gap-3"},v={class:"w-64 h-48 p-2.5 border-2 rounded border-green-600 flex gap-3 items-center"},g={class:"flex flex-auto flex-col gap-4 text-center"},y={class:"text-4xl"},b={class:"flex flex-col gap-2"},k={class:"font-bold text-2xl"},F=d({__name:"Asmaul_Husna",setup(B){const n=i([]);async function c(){try{const s=await l.get("https://api.myquran.com/v2/husna/semua");n.value=s.data.data}catch(s){console.error(s)}}return _(()=>{c()}),(s,w)=>(a(),o("div",x,[n.value.length>0?(a(),o("div",m,[e("div",h,[(a(!0),o(u,null,p(n.value,t=>(a(),o("div",{key:t.id},[e("div",v,[e("div",g,[e("span",y,r(t.arab),1),e("div",b,[e("span",k,r(t.latin),1),e("span",null,r(t.indo),1)])])])]))),128))])])):f("",!0)]))}});export{F as default};