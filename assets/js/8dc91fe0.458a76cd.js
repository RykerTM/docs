"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[2128],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>w});var i=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return i.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},h=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,w=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return t?i.createElement(w,o(o({ref:r},u),{},{components:t})):i.createElement(w,o({ref:r},u))}));function w(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=h;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5955:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const n={},o="Vive Wireless + Eye & Face Tracking",s={unversionedId:"hardware/VIVE/wireless",id:"hardware/VIVE/wireless",title:"Vive Wireless + Eye & Face Tracking",description:"Vive Wireless with a Vive Pro Eye and Vive Facial Tracker works (with some quirks).",source:"@site/docs/hardware/VIVE/wireless.md",sourceDirName:"hardware/VIVE",slug:"/hardware/VIVE/wireless",permalink:"/docs/hardware/VIVE/wireless",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/VIVE/wireless.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vive Pro Eye",permalink:"/docs/hardware/VIVE/vpe"},next:{title:"iPhone ARKit Tracking",permalink:"/docs/hardware/iphone-arkit"}},l={},c=[{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"\ud83e\udd14 Quirks of Vive Wireless with FT",id:"-quirks-of-vive-wireless-with-ft",level:2},{value:"\ud83d\udd0c No USB Hubs",id:"-no-usb-hubs",level:3},{value:"\u26a1 Higher Power Draw",id:"-higher-power-draw",level:3},{value:"\ud83c\udf21 Higher Temps",id:"-higher-temps",level:3},{value:"\ud83c\udfff CPU Intensive",id:"-cpu-intensive",level:3}],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vive-wireless--eye--face-tracking"},"Vive Wireless + Eye & Face Tracking"),(0,a.kt)("p",null,"Vive Wireless with a Vive Pro Eye and Vive Facial Tracker works (with some quirks).\nDon\u2019t believe that popup from SRanipal saying otherwise."),(0,a.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,a.kt)("h3",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wireless freedom"),(0,a.kt)("li",{parentName:"ul"},"No long cable to bend and micro-break, eventually leading to spotty Facial tracker USB connection"),(0,a.kt)("li",{parentName:"ul"},"Did I mention wireless?")),(0,a.kt)("h3",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Battery management"),(0,a.kt)("li",{parentName:"ul"},"Potential wireless disconnects / unreliability"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#-quirks-of-vive-wireless-with-ft"},"Quirks of Vive Wireless with FT"))),(0,a.kt)("h2",{id:"-quirks-of-vive-wireless-with-ft"},"\ud83e\udd14 Quirks of Vive Wireless with FT"),(0,a.kt)("p",null,"While it does work, there are some things to keep in mind or that you need to work around."),(0,a.kt)("h3",{id:"-no-usb-hubs"},"\ud83d\udd0c No USB Hubs"),(0,a.kt)("p",null,"In a traditional wired setup, a (quality) USB-C hub could be used to expand the connectivity of the single USB-C 3.0 peripheral port.\nThis is not the case when using the Vive Wireless adapter, where bandwidth is already at a premium.\nMultiple other devices may work over a hub connected to the peripheral port, but never when paired with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/hardware/VIVE/face-tracker"},"Vive Facial Tracker"),".\nIf you wanted to use the USB port for other modifications (alternative mic, alternative headphones, etc.) you will need to find another solution."),(0,a.kt)("h3",{id:"-higher-power-draw"},"\u26a1 Higher Power Draw"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/hardware/VIVE/face-tracker"},"Vive Facial Tracker")," is a bit of a power hog.\nWhen used over wireless, the original stock 18W QC3.0 battery may not be able to support it reliably.\nUsers have reported more reliable experience with upgraded power cable (more robust USB-A to A or USB-A to C with an adapter) and higher power output battery, such as the 21W version that now comes stock with the Vive Wireless kits (for Cosmos / Vive Pro 2)."),(0,a.kt)("h3",{id:"-higher-temps"},"\ud83c\udf21 Higher Temps"),(0,a.kt)("p",null,"The Vive Wireless Adapter is already well known for being a head toaster, but with the increased power draw and bandwidth usage when using the Vive Facial Tracker, it is more important than ever to keep the headset wireless module cool.\nExcess heat is one of the primary reasons for wireless cutouts.\nAdding a small fan over the center grill is basically a necessity if you plan on running the ",(0,a.kt)("a",{parentName:"p",href:"/docs/hardware/VIVE/face-tracker"},"Facial Tracker")," over wireless.\nKeeping the computer-side PCIe card and antenna (\u201cwireless linkbox\u201d) cool too will help improve wireless performance."),(0,a.kt)("h3",{id:"-cpu-intensive"},"\ud83c\udfff CPU Intensive"),(0,a.kt)("p",null,"Running SRanipal and Vive Wireless (and VR + VRChat) together is not for weak CPUs.\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial-modules/sranipal"},"SRanipal")," does use a reasonable amount of CPU when active.\nSince the encoding for the wireless connection is done by the CPU, any hiccup can result in a wireless freeze / disconnect or simply just wireless USB freeze / disconnect (aka eye/face tracking stops working).\nWeaker or older CPUs (i.e. 8th gen Intel i7, R5-level CPUs 2 generations or older) may have a notably degraded experience.\nIf you were already struggling performance-wise in VRChat without wireless, or without face tracking, you should avoid this combo."))}p.isMDXComponent=!0}}]);