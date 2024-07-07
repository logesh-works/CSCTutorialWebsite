"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,b=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={slug:"/css-combinators",id:"css-combinators",sidebar_label:"CSS Combinators",title:"CSS Combinators",description:"Learn CSS combinators to select elements based on their relationships with others. Our interactive tutorial covers all the essentials, from descendant and child selectors to adjacent sibling and general sibling selectors.",keywords:["CSS combinators","Combinator selectors in CSS","CSS descendant combinator","CSS child combinator","CSS adjacent sibling combinator","CSS general sibling combinator","CSS combinators examples","Selecting nested elements with CSS combinators","CSS combinators and specificity","CSS combinators and selector performance","web design","CSC","interactive tutorial","CSS code","precision selection"],image:"https://cscnotes.netlify.app/img/css-large.png"},o=void 0,i={unversionedId:"CSS Tutorial/CSS Combinators/css-combinators",id:"CSS Tutorial/CSS Combinators/css-combinators",title:"CSS Combinators",description:"Learn CSS combinators to select elements based on their relationships with others. Our interactive tutorial covers all the essentials, from descendant and child selectors to adjacent sibling and general sibling selectors.",source:"@site/docs/tutorial-css/02-CSS Tutorial/54-CSS Combinators/index.mdx",sourceDirName:"02-CSS Tutorial/54-CSS Combinators",slug:"/css-combinators",permalink:"/css/css-combinators",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-combinators",id:"css-combinators",sidebar_label:"CSS Combinators",title:"CSS Combinators",description:"Learn CSS combinators to select elements based on their relationships with others. Our interactive tutorial covers all the essentials, from descendant and child selectors to adjacent sibling and general sibling selectors.",keywords:["CSS combinators","Combinator selectors in CSS","CSS descendant combinator","CSS child combinator","CSS adjacent sibling combinator","CSS general sibling combinator","CSS combinators examples","Selecting nested elements with CSS combinators","CSS combinators and specificity","CSS combinators and selector performance","web design","CSC","interactive tutorial","CSS code","precision selection"],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS Align",permalink:"/css/css-align"},next:{title:"CSS Pseudo-classes",permalink:"/css/css-pseudo-classes"}},l={},c=[{value:"Descendant selector (<code>space</code>)",id:"descendant-selector-space",level:3},{value:"Child selector (<code>&gt;</code>)",id:"child-selector-",level:3},{value:"Adjacent sibling selector (<code>+</code>)",id:"adjacent-sibling-selector-",level:3},{value:"General sibling selector (<code>~</code>)",id:"general-sibling-selector-",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,r.kt)("meta",{name:"twitter:title",content:"CSS Combinators"}),(0,r.kt)("meta",{name:"twitter:description",content:"Learn about CSS Combinators using our interactive Code Editor."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:type",content:"article"}),(0,r.kt)("meta",{name:"og:title",content:"CSS Combinators"}),(0,r.kt)("meta",{name:"og:description",content:"Learn about CSS Combinators using our interactive Code Editor."}),(0,r.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,r.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,r.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-combinators"}),(0,r.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-combinators"})),(0,r.kt)("p",null,"CSS combinators are ",(0,r.kt)("strong",{parentName:"p"},"used to select elements based on their relationship to other elements"),". There are four types of CSS combinators:"),(0,r.kt)("h3",{id:"descendant-selector-space"},"Descendant selector (",(0,r.kt)("inlineCode",{parentName:"h3"},"space"),")"),(0,r.kt)("p",null,"The descendant selector is used to select all elements inside another element."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css.container",metastring:"p {",p:!0,"{":!0},"  /* styles for all <p> elements inside .container */\n}\n\n")),(0,r.kt)("h3",{id:"child-selector-"},"Child selector (",(0,r.kt)("inlineCode",{parentName:"h3"},">"),")"),(0,r.kt)("p",null,"The child selector is used to select all direct children of an element. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container > p {\n  /* styles for all <p> elements that are direct children of .container */\n}\n")),(0,r.kt)("h3",{id:"adjacent-sibling-selector-"},"Adjacent sibling selector (",(0,r.kt)("inlineCode",{parentName:"h3"},"+"),")"),(0,r.kt)("p",null,"The adjacent sibling selector is used to select the element immediately after another element."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"h2 + p {\n  /* styles for the first <p> element after every <h2> element */\n}\n")),(0,r.kt)("h3",{id:"general-sibling-selector-"},"General sibling selector (",(0,r.kt)("inlineCode",{parentName:"h3"},"~"),")"),(0,r.kt)("p",null,"The general sibling selector is used to select all siblings that come after an element. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"h2 ~ p {\n  /* styles for all <p> elements that come after every <h2> element */\n}\n")),(0,r.kt)("p",null,"These combinators can also be combined with other CSS selectors to create more specific styles. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container .special p {\n  /* styles for all <p> elements inside .container with the .special class */\n}\n")),(0,r.kt)("p",null,"And the child selector can be combined with an ID selector to target a specific element that is a direct child of another element."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'#container > #special {\n  /* styles for the element with the ID of "special" that is a direct child of the element with the ID of "container" */\n}\n')))}p.isMDXComponent=!0}}]);