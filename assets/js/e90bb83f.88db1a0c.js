"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36537],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>S});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(l),d=r,S=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return l?n.createElement(S,s(s({ref:t},p),{},{components:l})):n.createElement(S,s({ref:t},p))}));function S(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,s=new Array(a);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=l[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},70948:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=l(87462),r=(l(67294),l(3905));const a={slug:"/css-selectors",id:"css-selectors",sidebar_label:"CSS selectors",title:"CSS Selectors: Targeting Elements for Styling",description:"Learn about CSS Selectors with our interactive code editor. Our CSS tutorial is for beginners and professionals, and it explains common CSS selectors like element, class, and ID selectors in a clear and easy way. Boost your web development skills with CSC.",keywords:["CSS selectors","Element Selector","Class Selector","ID Selector","Attribute Selector","Descendant Selector","Adjacent Sibling Selector","Universal Selector","Child Selector","hover Pseudo-class Selector",":nth-child() Pseudo-class Selector",":not() Pseudo-class Selector","web development","CSC","interactive tutorial","CSS code","web development skills."],image:"https://cscnotes.netlify.app/img/css-large.png"},s=void 0,o={unversionedId:"CSS Tutorial/CSS Selectors/css-selectors",id:"CSS Tutorial/CSS Selectors/css-selectors",title:"CSS Selectors: Targeting Elements for Styling",description:"Learn about CSS Selectors with our interactive code editor. Our CSS tutorial is for beginners and professionals, and it explains common CSS selectors like element, class, and ID selectors in a clear and easy way. Boost your web development skills with CSC.",source:"@site/docs/tutorial-css/02-CSS Tutorial/06-CSS Selectors/index.mdx",sourceDirName:"02-CSS Tutorial/06-CSS Selectors",slug:"/css-selectors",permalink:"/css/css-selectors",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-selectors",id:"css-selectors",sidebar_label:"CSS selectors",title:"CSS Selectors: Targeting Elements for Styling",description:"Learn about CSS Selectors with our interactive code editor. Our CSS tutorial is for beginners and professionals, and it explains common CSS selectors like element, class, and ID selectors in a clear and easy way. Boost your web development skills with CSC.",keywords:["CSS selectors","Element Selector","Class Selector","ID Selector","Attribute Selector","Descendant Selector","Adjacent Sibling Selector","Universal Selector","Child Selector","hover Pseudo-class Selector",":nth-child() Pseudo-class Selector",":not() Pseudo-class Selector","web development","CSC","interactive tutorial","CSS code","web development skills."],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS Syntax",permalink:"/css/css-syntax"},next:{title:"CSS How To",permalink:"/css/css-howto"}},i={},c=[{value:"Element Selector",id:"element-selector",level:3},{value:"Class Selector",id:"class-selector",level:3},{value:"ID Selector",id:"id-selector",level:3},{value:"Attribute Selector",id:"attribute-selector",level:3},{value:"Descendant Selector",id:"descendant-selector",level:3},{value:"Adjacent Sibling Selector",id:"adjacent-sibling-selector",level:3},{value:"Universal Selector",id:"universal-selector",level:3},{value:"Child Selector",id:"child-selector",level:3},{value:"hover Pseudo-class Selector",id:"hover-pseudo-class-selector",level:3},{value:"The <code>:nth-child()</code> Pseudo-class Selector",id:"the-nth-child-pseudo-class-selector",level:3},{value:"The <code>:not()</code> Pseudo-class Selector",id:"the-not-pseudo-class-selector",level:3}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,r.kt)("meta",{name:"twitter:title",content:"CSS Selectors: Targeting Elements for Styling"}),(0,r.kt)("meta",{name:"twitter:description",content:"Learn about CSS Selectors using our interactive Code Editor."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:type",content:"article"}),(0,r.kt)("meta",{name:"og:title",content:"CSS Selectors: Targeting Elements for Styling"}),(0,r.kt)("meta",{name:"og:description",content:"Learn about CSS Selectors using our interactive Code Editor."}),(0,r.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,r.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-selectors"}),(0,r.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-selectors"})),(0,r.kt)("p",null,"CSS selectors are used to ",(0,r.kt)("strong",{parentName:"p"},"target specific HTML elements that you want to style"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Here are some of the most commonly used CSS selectors:")),(0,r.kt)("h3",{id:"element-selector"},"Element Selector"),(0,r.kt)("p",null,"Targets all instances of a specific HTML element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"p {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," elements on a webpage.")),(0,r.kt)("h3",{id:"class-selector"},"Class Selector"),(0,r.kt)("p",null,"Targets all instances of an HTML element with a specific class."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".intro {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'This selector targets all elements with the class "intro", like this: ',(0,r.kt)("inlineCode",{parentName:"li"},'<p class="intro">...</p>'))),(0,r.kt)("h3",{id:"id-selector"},"ID Selector"),(0,r.kt)("p",null,"Targets a specific HTML element with a unique ID. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"#header {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'This selector targets the element with the ID "header", like this: ',(0,r.kt)("inlineCode",{parentName:"li"},'<div id="header">...</div>'))),(0,r.kt)("h3",{id:"attribute-selector"},"Attribute Selector"),(0,r.kt)("p",null,"Targets elements with a specific attribute or attribute value. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an  example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'input[type="text"] {\n     /* CSS styles go here */\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all ",(0,r.kt)("inlineCode",{parentName:"li"},"<input>"),' elements with the "type" attribute set to "text".')),(0,r.kt)("h3",{id:"descendant-selector"},"Descendant Selector"),(0,r.kt)("p",null,"Targets elements that are descendants of a specific element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ul li {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all ",(0,r.kt)("inlineCode",{parentName:"li"},"<li>")," elements that are descendants of a ",(0,r.kt)("inlineCode",{parentName:"li"},"<ul>")," element.")),(0,r.kt)("h3",{id:"adjacent-sibling-selector"},"Adjacent Sibling Selector"),(0,r.kt)("p",null,"Targets an element that is immediately after another element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"h2 + p {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets the ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element that immediately follows an ",(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," element.")),(0,r.kt)("h3",{id:"universal-selector"},"Universal Selector"),(0,r.kt)("p",null,"Targets all elements on the page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"* {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all elements on the page.")),(0,r.kt)("h3",{id:"child-selector"},"Child Selector"),(0,r.kt)("p",null,"Targets elements that are direct children of a specific element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ul > li {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all ",(0,r.kt)("inlineCode",{parentName:"li"},"<li>")," elements that are direct children of a ",(0,r.kt)("inlineCode",{parentName:"li"},"<ul>")," element.")),(0,r.kt)("h3",{id:"hover-pseudo-class-selector"},"hover Pseudo-class Selector"),(0,r.kt)("p",null,"Targets an element when the user hovers over it with their cursor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"button:hover {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets a ",(0,r.kt)("inlineCode",{parentName:"li"},"<button>")," element when the user hovers over it with their cursor.")),(0,r.kt)("h3",{id:"the-nth-child-pseudo-class-selector"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},":nth-child()")," Pseudo-class Selector"),(0,r.kt)("p",null,"Targets elements based on their position within a parent element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"li:nth-child(even) {\n     /* CSS styles go here */\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all even-numbered ",(0,r.kt)("inlineCode",{parentName:"li"},"<li>")," elements within a parent element.")),(0,r.kt)("h3",{id:"the-not-pseudo-class-selector"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},":not()")," Pseudo-class Selector"),(0,r.kt)("p",null,"Targets elements that do not match a specific selector."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'input:not([type="submit"]) {\n     /* CSS styles go here */\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This selector targets all ",(0,r.kt)("inlineCode",{parentName:"li"},"<input>")," elements that do not have a ",(0,r.kt)("inlineCode",{parentName:"li"},'"type"')," attribute with the value ",(0,r.kt)("inlineCode",{parentName:"li"},'"submit"'),".")))}u.isMDXComponent=!0}}]);