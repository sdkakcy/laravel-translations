import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as o,b as l,d as _,f,n as r,h as m,i as b,u as i}from"./app-6e494c7d.js";const g={},y={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},h=o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),C=o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),z=[h,C];function w(s,e){return n(),a("svg",y,z)}const v=p(g,[["render",w]]),B=s=>({sizeClass:l(()=>({xs:"btn-xs",sm:"btn-sm",md:"btn-md",lg:"btn-lg"})[s])}),x=s=>({variantClass:l(()=>({primary:"btn-primary",secondary:"btn-secondary",success:"btn-success",danger:"btn-danger",warning:"btn-warning"})[s])}),k=["type","disabled"],V={key:0,class:"absolute left-0 top-0 flex size-full items-center justify-center"},S=_({__name:"base-button",props:{size:{default:"lg"},type:{default:"button"},variant:{default:"primary"},fullWidth:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},setup(s){const e=s,{sizeClass:c}=B(e.size),{variantClass:d}=x(e.variant);return(t,L)=>{const u=v;return n(),a("button",{type:t.type,class:r(["btn",[i(c),i(d),{"w-full":t.fullWidth}]]),disabled:t.isLoading},[o("span",{class:r(["flex gap-1",{"opacity-0":t.isLoading}])},[f(t.$slots,"default")],2),t.isLoading?(n(),a("span",V,[m(u,{class:"size-6 animate-spin text-white"})])):b("",!0)],10,k)}}});export{S as _};