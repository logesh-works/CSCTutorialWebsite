"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19426],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(b,o(o({ref:a},p),{},{components:t})):n.createElement(b,o({ref:a},p))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44578:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={slug:"/css-variables",id:"css-variables",sidebar_label:"CSS Variables",title:"Introduction to CSS Variables",description:"Learn about CSS Variables using our interactive Code Editor. Our CSS tutorial is developed both for beginners and professionals.",keywords:["CSS variables","Custom properties in CSS","CSS var() function","CSS variable declaration","CSS variable scope","CSS variable inheritance","CSS variable fallback values","CSS variable examples","CSS variable best practices","CSS variable naming conventions","CSS Playground","CSS Code Editor","Online IDE","Online CSS Playground","Interactive IDE","CSS Semantics","CSS Validation","Colors","XML","MySQL","Icons","CSS","JavaScript","PHP","jQuery","Bootstrap","NodeJS","React","Tutorials","Programming","Web Development","Training","Learning","Quiz","Exercises","Courses","Lessons","References","Examples","Learn to code","Source code","Demos","Tips","Website"],image:"https://cscnotes.netlify.app/img/css-large.png"},o=void 0,l={unversionedId:"CSS Advanced/CSS Variables/css-variables",id:"CSS Advanced/CSS Variables/css-variables",title:"Introduction to CSS Variables",description:"Learn about CSS Variables using our interactive Code Editor. Our CSS tutorial is developed both for beginners and professionals.",source:"@site/docs/tutorial-css/04-CSS Advanced/48-CSS Variables/index.mdx",sourceDirName:"04-CSS Advanced/48-CSS Variables",slug:"/css-variables",permalink:"/css/css-variables",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-variables",id:"css-variables",sidebar_label:"CSS Variables",title:"Introduction to CSS Variables",description:"Learn about CSS Variables using our interactive Code Editor. Our CSS tutorial is developed both for beginners and professionals.",keywords:["CSS variables","Custom properties in CSS","CSS var() function","CSS variable declaration","CSS variable scope","CSS variable inheritance","CSS variable fallback values","CSS variable examples","CSS variable best practices","CSS variable naming conventions","CSS Playground","CSS Code Editor","Online IDE","Online CSS Playground","Interactive IDE","CSS Semantics","CSS Validation","Colors","XML","MySQL","Icons","CSS","JavaScript","PHP","jQuery","Bootstrap","NodeJS","React","Tutorials","Programming","Web Development","Training","Learning","Quiz","Exercises","Courses","Lessons","References","Examples","Learn to code","Source code","Demos","Tips","Website"],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS User Interface",permalink:"/css/css-user-interface"},next:{title:"CSS Box Sizing",permalink:"/css/css-box-sizing"}},s={},c=[{value:"CSS Variables",id:"css-variables",level:2},{value:"How <code>var()</code> Works",id:"how-var-works",level:2}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,r.kt)("meta",{name:"twitter:title",content:"Introduction to CSS Variables"}),(0,r.kt)("meta",{name:"twitter:description",content:"Learn about CSS Variables using our interactive Code Editor."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:type",content:"article"}),(0,r.kt)("meta",{name:"og:title",content:"Introduction to CSS Variables"}),(0,r.kt)("meta",{name:"og:description",content:"Learn about CSS Variables using our interactive Code Editor."}),(0,r.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,r.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-variables"}),(0,r.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-variables"})),'import CustomEditorHTML from "@site/src/components/CustomEditorHTML";',(0,r.kt)("h2",{id:"css-variables"},"CSS Variables"),(0,r.kt)("p",null,"CSS variables, ",(0,r.kt)("strong",{parentName:"p"},"also known as custom properties"),", ",(0,r.kt)("strong",{parentName:"p"},"allow you to define a value once")," and ",(0,r.kt)("strong",{parentName:"p"},"reuse it throughout your CSS"),". They are declared using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," prefix followed by a name and a value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --main-color: #007bff;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We're defining a variable named ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," with a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"#007bff"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},":root")," selector specifies that this variable should be available to all elements in the document.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You can use this variable to set the color of an element like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"button {\n  background-color: var(--main-color);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We're using the ",(0,r.kt)("inlineCode",{parentName:"li"},"var()")," function to reference the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," variable."),(0,r.kt)("li",{parentName:"ul"},"This will set the background color of all buttons to the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," variable, which is ",(0,r.kt)("inlineCode",{parentName:"li"},"#007bff"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CSS variables can also be used to create more complex styles:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --main-color: #007bff;\n  --main-background: var(--main-color);\n  --main-border: 2px solid var(--main-color);\n}\n\nbutton {\n  background-color: var(--main-background);\n  border: var(--main-border);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We're defining three variables: ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color"),", --main-background, and ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-border"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-background")," variable references the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," variable, and the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-border")," variable uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"var()")," function to include the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," variable in a border declaration.")),(0,r.kt)("admonition",{title:"use variables",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can create more modular and maintainable CSS styles, and easily update the appearance of your website or application by changing the value of a single variable.")),(0,r.kt)("h2",{id:"how-var-works"},"How ",(0,r.kt)("inlineCode",{parentName:"h2"},"var()")," Works"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"var()")," function in CSS is used to reference a CSS variable or custom property. It allows you to use the value of a variable in a CSS property value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The syntax of the ",(0,r.kt)("inlineCode",{parentName:"strong"},"var()")," function is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"var(<variable-name>, <default-value>)\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<variable-name>")," is the name of the CSS variable or custom property you want to reference, without the ",(0,r.kt)("inlineCode",{parentName:"li"},"--")," prefix."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<default-value>")," is an optional value that is used if the referenced variable is undefined.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --main-color: #007bff;\n}\n\nbutton {\n  background-color: var(--main-color, red);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We're defining a CSS variable named ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," with a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"#007bff"),"."),(0,r.kt)("li",{parentName:"ul"},"We're then using the ",(0,r.kt)("inlineCode",{parentName:"li"},"var()")," function to set the background color of a button element to the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," variable."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"--main-color")," variable is not defined, the background color will be red.")))}u.isMDXComponent=!0}}]);