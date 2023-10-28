"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[9404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="Pico 4 Pro / Enterprise",c={unversionedId:"hardware/pico4pe",id:"hardware/pico4pe",title:"Pico 4 Pro / Enterprise",description:"Introduction",source:"@site/docs/hardware/pico4pe.mdx",sourceDirName:"hardware",slug:"/hardware/pico4pe",permalink:"/docs/hardware/pico4pe",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/pico4pe.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Android MeowFace",permalink:"/docs/hardware/meowface"},next:{title:"Pimax",permalink:"/docs/hardware/pimax"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Module",id:"module",level:2},{value:"Startup Instructions",id:"startup-instructions",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pico-4-pro--enterprise"},"Pico 4 Pro / Enterprise"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'The Pico 4 Pro / Enterprise is a standalone VR headset powered by the Qualcomm XR2, similar to the Quest 2 and Quest Pro headsets from Meta.\nUnlike the "consumer" version of the Pico 4, the Pro and Enterprise versions of the headset have additional eye and face tracking cameras, in addition to a few more hardware upgrades.\nThe Pro and Enterprise editions only differ in the available system software and region availability: the Pro only being sold in mainland China, while the Enterprise is sold in Europe with "limited" enterprise software.'),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Both the Pro and Enterprise can use the updated PC streaming app "Pico Streaming Assistant" to stream eye and face tracking data from the headset. ')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},'The face tracking compatible Streaming Assistant program is currently still in "beta" and only available from Pico\'s Chinese beta group.')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the beta Streaming Assistant")),(0,a.kt)("h2",{id:"module"},"Module"),(0,a.kt)("p",null,'Install the "Pico4SAFTExtTrackingModule" from the ',(0,a.kt)("a",{parentName:"p",href:"/docs/vrcft-software/vrcft#module-registry"},"VRCFaceTracking Module Registry"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/regzo2/PicoStreamingAssistantFTUDP/tree/vrcfacetracking-module"},"Pico4SAFTExtTrackingModule source repository")),(0,a.kt)("h3",{id:"startup-instructions"},"Startup Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start PCVR using the Pico Streaming Assistant "),(0,a.kt)("li",{parentName:"ol"},"Once connected and in SteamVR, start VRCFaceTracking with the Pico4SAFTExtTrackingModule initialized")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The Pico 4 Pro/Enterprise module will currently (erroneously) always initialize, and will fail to shutdown its own update thread when tearing down modules (closing VRCFaceTracking).\nYou may need to shut down VRCFaceTracking manually. ")))}u.isMDXComponent=!0}}]);