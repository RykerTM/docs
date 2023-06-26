"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[4094],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?i.createElement(b,n(n({ref:t},p),{},{components:a})):i.createElement(b,n({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const o={sidebar_position:2,sidebar_label:"Project Babble - HP Reverb G2 Omnicept Setup Guide"},n="Project Babble - HP Reverb G2 Omnicept Setup Guide",l={unversionedId:"hardware/Project Babble/babble-omnicept",id:"hardware/Project Babble/babble-omnicept",title:"Project Babble - HP Reverb G2 Omnicept Setup Guide",description:"Summary",source:"@site/docs/hardware/Project Babble/babble-omnicept.mdx",sourceDirName:"hardware/Project Babble",slug:"/hardware/Project Babble/babble-omnicept",permalink:"/docs/hardware/Project Babble/babble-omnicept",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/Project Babble/babble-omnicept.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Project Babble - HP Reverb G2 Omnicept Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Project Babble",permalink:"/docs/hardware/Project Babble/babble-setup"},next:{title:"Vive Facial Tracker",permalink:"/docs/hardware/VIVE/face-tracker"}},s={},c=[{value:"Summary",id:"summary",level:2},{value:"Setup",id:"setup",level:2},{value:"Installation",id:"installation",level:3},{value:"Step 1: Glia Lip Viewer Setup",id:"step-1-glia-lip-viewer-setup",level:4},{value:"Step 2: OBS Setup",id:"step-2-obs-setup",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-babble---hp-reverb-g2-omnicept-setup-guide"},"Project Babble - HP Reverb G2 Omnicept Setup Guide"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.hp.com/us-en/vr/reverb-g2-vr-headset-omnicept-edition.html"},"HP Reverb G2 Omnicept Edition")," is a VR headset with eye tracking and a lower face camera. While there is a module that allows you to use the headset's eye tracking with VRCFaceTracking, the face camera by itself does not do anything."),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(466).Z,alt:"HP Reverb G2 Omnicept eye and face cameras, circled in red"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"But!"))," With Project Babble this camera can be used to track your facial expressions! This guide will show you how to use the lower face camera with VRCFaceTracking."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You will need the following software installed to use the lower face camera with VRCFaceTracking:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"./babble-setup"},"VRCFT-Babble Module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://obsproject.com/download"},"OBS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SummerSigh/ProjectBabble/releases/latest"},"Project Babble")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://developers.hp.com/omnicept/downloads"},"Glia Runtime/SDK")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.discordapp.com/attachments/915075185328152606/1122604181728006244/GliaLipViewer.zip"},"Glia Lip Viewer"))),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("h4",{id:"step-1-glia-lip-viewer-setup"},"Step 1: Glia Lip Viewer Setup"),(0,r.kt)("p",null,"Firstly, extract the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GliaLipViewer.zip")," file to a folder of your choice. You can delete the zip file after this is done."),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(80683).Z,alt:"The Glia Lip Viewer, extracted to a folder"})),(0,r.kt)("p",null,"Next, run ",(0,r.kt)("inlineCode",{parentName:"p"},"Glia.exe")," inside of this new folder. If your HP Reverb G2 Omnicept Edition is plugged in, you should see a small window with a live feed from the lower face camera, tinted red. Otherwise, you'll see a solid red box. If this is the case make sure your headset is plugged in and that you have the Glia Runtime installed."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'You may get a warning from the Glia Runtime about an application requesting access to the lower face camera. If you do, make sure to click "Allow".')),(0,r.kt)("h4",{id:"step-2-obs-setup"},"Step 2: OBS Setup"),(0,r.kt)("p",null,'Open OBS and add a new "Window Capture".'),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(93491).Z,alt:"Creating the OBS Window Capture"})),(0,r.kt)("p",null,"Select the Glia window from the list of windows..."),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(64481).Z,alt:"Selecting the GliaLipViewer window"})),(0,r.kt)("p",null,'Now resize OBS to fit the size of the window. This can be done by right clicking on the "Window Capture" source and selecting ""Resize output (source size)".'),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(89825).Z,alt:"Resizing the OBS Window"})),(0,r.kt)("p",null,"Next, click on the filters tab..."),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(82444).Z,alt:"OBS Window Capture filter"})),(0,r.kt)("p",null,'Add a "Color Correction" filter.'),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(41980).Z,alt:"OBS Window Color Correction"})),(0,r.kt)("p",null,'Increase the brightness of the video by adjusting "Gamma", you want to make this about ~3 times as bright as it is by default. You can also adjust the contrast and saturation to your liking.'),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(75446).Z,alt:"OBS Window Color Correction Gamma"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This may seem like a strange step, but the HP Reverb G2 only outputs a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.hp.com/omnicept/docs/unity/usage-examples"},"greyscale image")," from the lower face camera. This step is necessary to make the image usable: Project Babble expects a color image, so this step compensates for the lack of green and blue.")),(0,r.kt)("p",null,"Finally, start a virtual camera and have Project Babble target this new device. "),(0,r.kt)("div",{style:{width:"50%",height:"auto",margin:"auto",display:"block"}},(0,r.kt)("img",{src:a(41837).Z,alt:"OBS Virtual Camera"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In its present state, you will need to launch the ",(0,r.kt)("inlineCode",{parentName:"p"},"GliaLipViewer")," and OBS's virtual camera every time you want to use this with Project Babble/VRCFaceTracking.")),(0,r.kt)("p",null,"You should now be able to see your lower facial expressions reflected in VRCFaceTracking! Have fun!"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HP Reverb G2 Omnicept Face Camera pictures from ",(0,r.kt)("a",{parentName:"em",href:"https://www.roadtovr.com/hp-reverb-g2-eye-tracking-face-tracking-omnicept/"},"Road to VR"),", by ",(0,r.kt)("a",{parentName:"em",href:"https://twitter.com/alumia_italia/"},"Aggiornamenti Lumia"))))}u.isMDXComponent=!0},80683:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/babble_unzipped-b687c1245ffc5b6f614a5028ff0c1ed2.png"},466:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/hp_face_cams_RTV-ec7a19ee87cae82acaaa8b837b3282fe.jpg"},41980:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_filter_color_correction-9647666a655a09d3cd04b1a04f7c74f8.png"},75446:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_filter_gamma-3afd7b6f58feb1ed321f32c3bc98db57.png"},64481:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_glia_capture-5b9019af819f5f0fa34336b05aa792a1.png"},41837:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_virtual_camera-c91ea6a7a6f7aff0cf0d251b9d2eab68.png"},93491:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_window_creation-72b3c32f79e17b61ac3d99158c574c60.png"},82444:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_window_filter-005709966327b459a752bce94665a638.png"},89825:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/obs_window_resize-c5878ea91a01fc9853991c2ec0aebe4b.png"}}]);