"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[180],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return a?r.createElement(m,l(l({ref:t},b),{},{components:a})):r.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:1,sidebar_label:"Project Babble"},l="Project Babble",i={unversionedId:"hardware/Project Babble/babble-setup",id:"hardware/Project Babble/babble-setup",title:"Project Babble",description:"Summary",source:"@site/docs/hardware/Project Babble/babble-setup.mdx",sourceDirName:"hardware/Project Babble",slug:"/hardware/Project Babble/babble-setup",permalink:"/docs/hardware/Project Babble/babble-setup",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/Project Babble/babble-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Project Babble"},sidebar:"tutorialSidebar",previous:{title:"Hardware Guides",permalink:"/docs/category/hardware-guides"},next:{title:"Project Babble - HP Reverb G2 Omnicept Setup Guide",permalink:"/docs/hardware/Project Babble/babble-omnicept"}},c={},s=[{value:"Summary",id:"summary",level:2},{value:"Set-up",id:"set-up",level:2},{value:"Installation",id:"installation",level:3},{value:"Using The VRCFT-Babble Module",id:"using-the-vrcft-babble-module",level:2},{value:"Calibrating Face Tracking",id:"calibrating-face-tracking",level:3},{value:"Uninstalling The VRCFT-Babble Module",id:"uninstalling-the-vrcft-babble-module",level:2}],b={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-babble"},"Project Babble"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SummerSigh/ProjectBabble"},"Project Babble")," is an open-source software project aiming to bring accessible face-tracking to PCVR headsets."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To clarify, Project Babble provides only lower face tracking, not eye tracking. Now that that's said, read on!")),(0,n.kt)("h2",{id:"set-up"},"Set-up"),(0,n.kt)("p",null,"Setting up Project Babble is fairly simple. Please read carefully to avoid any issues. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This guide assumes you have Project Babble installed, be it a release or the source code.\nIt also assumes you have a compatible camera device. A standard webcam will work, but you can also use a phone, etc.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Fun fact! you can use Project Babble with the HP Reverb G2 Omnicept lower face camera!")),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Start by mounting your camera underneath your headset. The camera should be facing you, and should be able to see your face clearly. There is no \"right\" way to do this, feel free to experiment with different placements. Plug your camera into your headset's USB port; If you don't have one you can use a USB extension cable or a wireless camera."),(0,n.kt)("p",null,"Next, install the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SummerSigh/ProjectBabble/releases/latest"},"latest release")," of Project Babble. You may need to define an exception in your antivirus software for this to run optimally. "),(0,n.kt)("p",null,"Finally, install the VRCFT-Babble module. You can download this from the VRCFaceTracking applications Module Registry Window:"),(0,n.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,n.kt)("img",{src:a(91719).Z,alt:"babble install"})),(0,n.kt)("h2",{id:"using-the-vrcft-babble-module"},"Using The VRCFT-Babble Module"),(0,n.kt)("p",null,"Open the Project Babble application. The application should automatically update itself to the latest version on launch. You should see a window like this:"),(0,n.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,n.kt)("img",{src:a(16854).Z,alt:"babble startup"})),(0,n.kt)("p",null,"After clicking start, VRFaceTracking should start to listen to incoming face data. It will relay this information into VRChat."),(0,n.kt)("h3",{id:"calibrating-face-tracking"},"Calibrating Face Tracking"),(0,n.kt)("p",null,'Project Babble offers a calibration tool to help you get the best face tracking possible. To use it, click the "Calibrate" button and follow the instructions on screen. You will be asked to crop out a section of the camera feed.'),(0,n.kt)("p",null,"In addition to face tracking calibration, you can also specify Project Babble to use your GPU using DirectML. There are some other settings as well, be sure to experiment with them to find what works best for you."),(0,n.kt)("h2",{id:"uninstalling-the-vrcft-babble-module"},"Uninstalling The VRCFT-Babble Module"),(0,n.kt)("p",null,"To uninstall The VRCFT-Babble, navigate to VRCFaceTracking's Module Registry, select the VRCFT-Babble module, and at the bottom of the page click the uninstall button."))}d.isMDXComponent=!0},91719:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/babble_install-38ce0051ea040329c5196e46fa95c019.png"},16854:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/babble_startup-b5fa8c2742d38d8858e98fa315f3de49.png"}}]);