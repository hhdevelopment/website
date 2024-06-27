"use strict";(self.webpackChunksoftwarity=self.webpackChunksoftwarity||[]).push([[8958],{690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(5893),i=n(1151);const o={slug:"security",title:"Securing the Route",authors:"fachache",tags:[]},r=void 0,c={id:"tuto/route/route-security",title:"Securing the Route",description:"In this section, we will see how to simply secure the route.",source:"@site/docs/tuto/route/route-security.md",sourceDirName:"tuto/route",slug:"/tuto/route/security",permalink:"/tuto/route/security",draft:!1,unlisted:!1,editUrl:"https://github.com/softwarity/website/tree/main/docs/tuto/route/route-security.md",tags:[],version:"current",frontMatter:{slug:"security",title:"Securing the Route",authors:"fachache",tags:[]},sidebar:"tutoSidebar",previous:{title:"Adding the User Button",permalink:"/tuto/route/route-frontend"},next:{title:"Authentication",permalink:"/tuto/route/auth"}},u={},a=[{value:"Endpoint Security",id:"endpoint-security",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this section, we will see how to simply secure the route."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Here we will secure the route directly, but we could also secure the ",(0,s.jsx)(t.code,{children:"endpoint"}),". Thus, managing it in a much more precise way."]})}),"\n",(0,s.jsx)(t.p,{children:"Securing the route is possible in two ways:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Only authenticated users can access the route."}),"\n",(0,s.jsx)(t.li,{children:"Only users possessing at least one of the listed roles can access the route."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.code,{children:"httpbin"}),", we want only users possessing the previously created role to have access."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"create-route-security",src:n(6256).Z+"",width:"1728",height:"1380"})}),"\n",(0,s.jsx)(t.h2,{id:"endpoint-security",children:"Endpoint Security"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Since ",(0,s.jsx)(t.code,{children:"httpbin"})," exposes an ",(0,s.jsx)(t.code,{children:"open-api"})," specification file, we could define security at the ",(0,s.jsx)(t.code,{children:"endpoints"})," level."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"edit-endpoints-security",src:n(7627).Z+"",width:"2449",height:"1373"})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6256:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/create-route-security-a733846e1618275a945c247e2d05f533.png"},7627:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/edit-endpoints-security-4562f5d4ea5eab8636065f9875796db5.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);