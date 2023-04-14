"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[2128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>w});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=n,w=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?a.createElement(w,o(o({ref:r},d),{},{components:t})):a.createElement(w,o({ref:r},d))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5955:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const i={},o="Vive Wireless + Eye & Face Tracking",s={unversionedId:"hardware/VIVE/wireless",id:"hardware/VIVE/wireless",title:"Vive Wireless + Eye & Face Tracking",description:"Vive Wireless with a Vive Pro Eye and Vive Facial Tracker works (with some quirks).",source:"@site/docs/hardware/VIVE/wireless.md",sourceDirName:"hardware/VIVE",slug:"/hardware/VIVE/wireless",permalink:"/docs/next/hardware/VIVE/wireless",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/VIVE/wireless.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vive Pro Eye",permalink:"/docs/next/hardware/VIVE/vpe"},next:{title:"iPhone ARKit Tracking",permalink:"/docs/next/hardware/iphone-arkit"}},l={},c=[{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"\ud83e\udd14 Quirks of Vive Wireless with FT",id:"-quirks-of-vive-wireless-with-ft",level:2},{value:"\ud83d\udd0c Tricky USB Hubs",id:"-tricky-usb-hubs",level:3},{value:"\u26a1 Higher Power Draw",id:"-higher-power-draw",level:3},{value:"\ud83c\udf21 Higher Temps",id:"-higher-temps",level:3},{value:"\ud83c\udfff CPU Intensive",id:"-cpu-intensive",level:3}],d={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vive-wireless--eye--face-tracking"},"Vive Wireless + Eye & Face Tracking"),(0,n.kt)("p",null,"Vive Wireless with a Vive Pro Eye and Vive Facial Tracker works (with some quirks).\nDon\u2019t believe that popup from SRanipal saying otherwise, but be prepared for a ",(0,n.kt)("em",{parentName:"p"},"potentially")," frustrating experience."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Currently, there is a known issue with using the Vive Wireless Adapter on the Windows 11 22H2 Update version that can cause the SteamVR compositor to randomly crash when using wireless.")),(0,n.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,n.kt)("h3",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wireless freedom"),(0,n.kt)("li",{parentName:"ul"},"No long cable to bend and micro-break, eventually leading to spotty Facial tracker USB connection"),(0,n.kt)("li",{parentName:"ul"},"Did I mention wireless?")),(0,n.kt)("h3",{id:"cons"},"Cons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Battery management"),(0,n.kt)("li",{parentName:"ul"},"Potential wireless disconnects / unreliability / degraded VR performance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#-quirks-of-vive-wireless-with-ft"},"Quirks of Vive Wireless with FT"))),(0,n.kt)("h2",{id:"-quirks-of-vive-wireless-with-ft"},"\ud83e\udd14 Quirks of Vive Wireless with FT"),(0,n.kt)("p",null,"While it does work, there are some things to keep in mind or that you need to work around."),(0,n.kt)("h3",{id:"-tricky-usb-hubs"},"\ud83d\udd0c Tricky USB Hubs"),(0,n.kt)("p",null,"In a traditional wired setup, a (quality) USB-C hub could be used to expand the connectivity of the single USB-C 3.0 peripheral port.\nWhile before the VRCFT community believed it possible, it turns out that at least one certain hub can be used with wireless and the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/hardware/VIVE/face-tracker"},"Vive Facial Tracker"),":\n",(0,n.kt)("a",{parentName:"p",href:"https://www.amazon.com/dp/B09NDQGSPR"},"https://www.amazon.com/dp/B09NDQGSPR"),"\nPrevious users have noticed that to use the hub the Vive headset's onboard audio would have to be disabled."),(0,n.kt)("h3",{id:"-higher-power-draw"},"\u26a1 Higher Power Draw"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/hardware/VIVE/face-tracker"},"Vive Facial Tracker")," is a bit of a power hog when in use.\nWhen used over wireless, the original stock 18W QC3.0 battery may not be able to support it reliably.\nUsers have reported more stable experience with upgraded USB power cable (more robust USB-A to A or USB-A to C with an adapter) and higher power output battery, such as the 21W version that now comes stock with the Vive Wireless kits (for Cosmos / Vive Pro 2)."),(0,n.kt)("h3",{id:"-higher-temps"},"\ud83c\udf21 Higher Temps"),(0,n.kt)("p",null,"The Vive Wireless Adapter is already well known for being a head toaster, but with the increased power draw and bandwidth usage when using the Vive Facial Tracker, it is more important than ever to keep the headset wireless module cool.\nExcess heat is one of the primary reasons for wireless cutouts.\nAdding a small fan over the center grill is a necessity if you plan on running the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/hardware/VIVE/face-tracker"},"Facial Tracker")," over wireless.\nKeeping the computer-side PCIe card and antenna (\u201cwireless linkbox\u201d) cool too will help improve wireless performance."),(0,n.kt)("h3",{id:"-cpu-intensive"},"\ud83c\udfff CPU Intensive"),(0,n.kt)("p",null,"Running SRanipal and Vive Wireless (and VR + VRChat) together is not for weak CPUs.\n",(0,n.kt)("a",{parentName:"p",href:"/docs/next/tutorial-modules/sranipal"},"SRanipal")," does use a reasonable amount of CPU when active.\nSince the encoding for the wireless connection is done by the CPU, any hiccup can result in a wireless freeze / disconnect or simply just wireless USB freeze / disconnect (aka eye/face tracking stops working).\nWeaker or older CPUs (i.e. 8th gen Intel i7, R5-level CPUs 2 generations or older) may have a notably degraded VR and VRChat experience.\nIf you were already struggling performance-wise in VRChat without wireless, or without face tracking, you should avoid this combo."))}u.isMDXComponent=!0}}]);