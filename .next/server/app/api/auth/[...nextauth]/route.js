"use strict";(()=>{var e={};e.id=912,e.ids=[912],e.modules={53524:e=>{e.exports=require("@prisma/client")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},43730:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>q,originalPathname:()=>m,patchFetch:()=>E,requestAsyncStorage:()=>l,routeModule:()=>x,serverHooks:()=>h,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>v});var s={};r.r(s),r.d(s,{GET:()=>c,POST:()=>c});var a=r(95419),n=r(69108),o=r(99678),i=r(81355),p=r.n(i),u=r(37441);let c=p()(u.a),x=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"/home/aniket/projects/peerpair.dev/app/api/auth/[...nextauth]/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:d,serverHooks:h,headerHooks:q,staticGenerationBailout:v}=x,m="/api/auth/[...nextauth]/route";function E(){return(0,o.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:d})}},37441:(e,t,r)=>{r.d(t,{a:()=>p});var s=r(53524),a=r(65822),n=r(10375),o=r(50694);let i=new s.PrismaClient,p={adapter:(0,a.N)(i),providers:[(0,n.Z)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,o.Z)({clientId:process.env.GITHUB_ID,clientSecret:process.env.GITHUB_SECRET})],secret:process.env.NEXTAUTH_SECRET||"secret"}},95419:(e,t,r)=>{e.exports=r(30517)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[225,432],()=>r(43730));module.exports=s})();