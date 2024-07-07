"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(g,s(s({ref:t},u),{},{components:n})):i.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={slug:"/css-units",id:"css-units",sidebar_label:"CSS Units",title:"CSS Units",description:"Learn about CSS units and how to specify measurements for web elements using various length and size units. Explore absolute and relative length units, responsive layouts, and flexible design techniques in our interactive CSS tutorial.",keywords:["CSS units","Absolute units in CSS","Relative units in CSS","CSS length units","CSS font units","CSS percentage units","CSS viewport units","CSS em and rem units","CSS pixel units","CSS unit conversion","web development","CSC","interactive tutorial","CSS code","CSS properties","responsive web design","CSS length measurement"],image:"https://cscnotes.netlify.app/img/css-large.png"},s=void 0,o={unversionedId:"CSS Tutorial/CSS Units/css-units",id:"CSS Tutorial/CSS Units/css-units",title:"CSS Units",description:"Learn about CSS units and how to specify measurements for web elements using various length and size units. Explore absolute and relative length units, responsive layouts, and flexible design techniques in our interactive CSS tutorial.",source:"@site/docs/tutorial-css/02-CSS Tutorial/76-CSS Units/index.mdx",sourceDirName:"02-CSS Tutorial/76-CSS Units",slug:"/css-units",permalink:"/css/css-units",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-units",id:"css-units",sidebar_label:"CSS Units",title:"CSS Units",description:"Learn about CSS units and how to specify measurements for web elements using various length and size units. Explore absolute and relative length units, responsive layouts, and flexible design techniques in our interactive CSS tutorial.",keywords:["CSS units","Absolute units in CSS","Relative units in CSS","CSS length units","CSS font units","CSS percentage units","CSS viewport units","CSS em and rem units","CSS pixel units","CSS unit conversion","web development","CSC","interactive tutorial","CSS code","CSS properties","responsive web design","CSS length measurement"],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS Website-Layout",permalink:"/css/css-website-layout"},next:{title:"CSS Specificity",permalink:"/css/css-specificity"}},l={},p=[{value:"Absolute Lengths",id:"absolute-lengths",level:2},{value:"Relative Lengths",id:"relative-lengths",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,r.kt)("meta",{name:"twitter:title",content:"CSS Units"}),(0,r.kt)("meta",{name:"twitter:description",content:"Learn about CSS Units using our interactive Code Editor."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:type",content:"article"}),(0,r.kt)("meta",{name:"og:title",content:"CSS Units"}),(0,r.kt)("meta",{name:"og:description",content:"Learn about CSS Units using our interactive Code Editor."}),(0,r.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,r.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-units"}),(0,r.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-units"})),(0,r.kt)("p",null,"CSS (",(0,r.kt)("strong",{parentName:"p"},"Cascading Style Sheets"),") has several units ",(0,r.kt)("strong",{parentName:"p"},"for specifying measurements"),", such as length, size, and positioning."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here are the most commonly used CSS units:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"px (pixel)"),":")," This is a fixed unit of measurement that ",(0,r.kt)("strong",{parentName:"p"},"represents a single dot on a screen"),". It is commonly used for defining font sizes and border widths.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"% (percentage)"),":")," This unit represents a ",(0,r.kt)("strong",{parentName:"p"},"percentage of the parent element's size"),". It is commonly used for defining width and height of elements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"em"),":")," This unit represents the ",(0,r.kt)("strong",{parentName:"p"},"font size of the parent element"),". It is commonly used for defining font sizes and spacing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"rem"),":")," This unit ",(0,r.kt)("strong",{parentName:"p"},"represents the font size of the root element")," (i.e., the ",(0,r.kt)("inlineCode",{parentName:"p"},"<html>")," element). It is similar to em but provides a more predictable behavior for nested elements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"vw/vh"),":")," These units represent a percentage of the viewport width or height. They are commonly used for defining responsive layouts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pt (point)"),":")," This is a fixed unit of measurement that ",(0,r.kt)("strong",{parentName:"p"},"represents 1/72 of an inch"),". It is commonly used for printing and PDF documents."))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cm/mm/in"),": These units represent centimeters, millimeters, and inches, respectively. They are commonly used for defining print layouts.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ch"),":")," This unit ",(0,r.kt)("strong",{parentName:"p"},'represents the width of the "0" (zero) character in the current font'),". It is commonly used for defining fixed-width elements, such as tables or forms.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ex"),":")," This unit ",(0,r.kt)("strong",{parentName:"p"},'represents the height of the "x" character in the current font'),". It is similar to ch but provides a more predictable behavior for nested elements."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By understanding the different CSS units and how they are used, you can create flexible and responsive layouts that adapt to different screen sizes and devices.")),(0,r.kt)("h2",{id:"absolute-lengths"},"Absolute Lengths"),(0,r.kt)("p",null,"Absolute lengths are CSS ",(0,r.kt)("strong",{parentName:"p"},"units that are fixed and do not change their size")," based on the user's device or settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here are the names of the most commonly used absolute length units in CSS:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"px (pixels)"),(0,r.kt)("li",{parentName:"ul"},"in (inches)"),(0,r.kt)("li",{parentName:"ul"},"cm (centimeters)"),(0,r.kt)("li",{parentName:"ul"},"mm (millimeters)"),(0,r.kt)("li",{parentName:"ul"},"pt (points)"),(0,r.kt)("li",{parentName:"ul"},"pc (picas)")),(0,r.kt)("h2",{id:"relative-lengths"},"Relative Lengths"),(0,r.kt)("p",null,"Relative lengths are CSS ",(0,r.kt)("strong",{parentName:"p"},"units that are based on the size of other elements"),". These units allow you to create layouts that are more flexible and responsive to different screen sizes and device resolutions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Here are the names of the most commonly used relative length units in CSS:\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"em"),(0,r.kt)("li",{parentName:"ul"},"rem"),(0,r.kt)("li",{parentName:"ul"},"% (percentage)"),(0,r.kt)("li",{parentName:"ul"},"vw (viewport width)"),(0,r.kt)("li",{parentName:"ul"},"vh (viewport height)"),(0,r.kt)("li",{parentName:"ul"},"vmin (viewport minimum)"),(0,r.kt)("li",{parentName:"ul"},"vmax (viewport maximum)")))}m.isMDXComponent=!0}}]);