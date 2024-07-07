"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),m=o,u=h["".concat(i,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),r=a(39005);const s={slug:"/css-shadows",id:"css-shadows",sidebar_label:"CSS Shadows",title:"CSS Shadows",description:"Learn how to add depth and style to your web elements with CSS shadows. Explore box shadows and text shadows with our interactive Code Editor.",keywords:["CSS shadows","box-shadow property","text-shadow property","shadow effects","shadow color","shadow offset","shadow blur","shadow spread","multiple shadows","CSS text styling","web design","interactive CSS tutorial","web development","shadow techniques"],image:"https://cscnotes.netlify.app/img/css-large.png"},l=void 0,i={unversionedId:"CSS Advanced/CSS Shadow/css-shadows",id:"CSS Advanced/CSS Shadow/css-shadows",title:"CSS Shadows",description:"Learn how to add depth and style to your web elements with CSS shadows. Explore box shadows and text shadows with our interactive Code Editor.",source:"@site/docs/tutorial-css/04-CSS Advanced/14-CSS Shadow/index.mdx",sourceDirName:"04-CSS Advanced/14-CSS Shadow",slug:"/css-shadows",permalink:"/css/css-shadows",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-shadows",id:"css-shadows",sidebar_label:"CSS Shadows",title:"CSS Shadows",description:"Learn how to add depth and style to your web elements with CSS shadows. Explore box shadows and text shadows with our interactive Code Editor.",keywords:["CSS shadows","box-shadow property","text-shadow property","shadow effects","shadow color","shadow offset","shadow blur","shadow spread","multiple shadows","CSS text styling","web design","interactive CSS tutorial","web development","shadow techniques"],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS Gradients",permalink:"/css/css-gradients"},next:{title:"CSS Text Effects",permalink:"/css/css-text-effects"}},d={},p=[{value:"CSS Text Shadow",id:"css-text-shadow",level:2}],h={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,o.kt)("meta",{name:"twitter:title",content:"CSS Shadows"}),(0,o.kt)("meta",{name:"twitter:description",content:"Learn about CSS Shadows using our interactive Code Editor."}),(0,o.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,o.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,o.kt)("meta",{name:"og:type",content:"article"}),(0,o.kt)("meta",{name:"og:title",content:"CSS Shadows"}),(0,o.kt)("meta",{name:"og:description",content:"Learn about CSS Shadows using our interactive Code Editor."}),(0,o.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,o.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,o.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,o.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-shadows"}),(0,o.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-shadows"})),(0,o.kt)("p",null,"A shadow can be added to an element ",(0,o.kt)("strong",{parentName:"p"},"using the ",(0,o.kt)("inlineCode",{parentName:"strong"},"box-shadow")," property"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"box-shadow")," property allows you to add a shadow to the outside of an element's border box."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The basic syntax for the ",(0,o.kt)("inlineCode",{parentName:"strong"},"box-shadow")," property is:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"box-shadow: h-shadow v-shadow blur spread color;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"where:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"h-shadow")," is the horizontal offset of the shadow (can be negative)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"v-shadow")," is the vertical offset of the shadow (can be negative)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blur")," is the blur radius of the shadow (optional)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spread")," is the size of the shadow (optional)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color")," is the color of the shadow.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)(r.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      .box {\n        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n        width: 400px;\n        height: 100px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="box"></div>\n  </body>\n</html>\n',elementId:"sku-example1",mdxType:"CustomEditorHTML"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The class ",(0,o.kt)("inlineCode",{parentName:"li"},".box")," have shadow of ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," pixels to the right and ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," pixels down from the element, with a blur radius of ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," pixels and a color of ",(0,o.kt)("inlineCode",{parentName:"li"},"rgba(0, 0, 0, 0.3)")," (which is a semi-transparent black).")),(0,o.kt)("p",null,"You can also create more complex shadows with multiple shadows or inset shadows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.3),\n  inset 0px 0px 10px rgba(0, 0, 0, 0.3);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"This will create three shadows:")," a regular shadow on the top right and bottom left of the element, a regular shadow on the top left and bottom right of the element, and an inset shadow around the edge of the element.")),(0,o.kt)("h2",{id:"css-text-shadow"},"CSS Text Shadow"),(0,o.kt)("p",null,"A shadow can also be added to the text ",(0,o.kt)("strong",{parentName:"p"},"using the ",(0,o.kt)("inlineCode",{parentName:"strong"},"text-shadow")," property"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"text-shadow")," property allows you to add a shadow to the text of an element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The basic syntax for the ",(0,o.kt)("inlineCode",{parentName:"strong"},"text-shadow")," property is:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"text-shadow: h-shadow v-shadow blur color;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"where:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"h-shadow")," is the horizontal offset of the shadow (can be negative)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"v-shadow")," is the vertical offset of the shadow (can be negative)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blur")," is the blur radius of the shadow (optional)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color")," is the color of the shadow.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)(r.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      h1 {\n        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>\n',elementId:"sku-example2",mdxType:"CustomEditorHTML"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The class ",(0,o.kt)("inlineCode",{parentName:"li"},".text-shadow")," have shadow of ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," pixels to the right and ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," pixels down from the text, with a blur radius of ",(0,o.kt)("inlineCode",{parentName:"li"},"5")," pixels and a color of ",(0,o.kt)("inlineCode",{parentName:"li"},"rgba(0, 0, 0, 0.3)")," (which is a semi-transparent black).")),(0,o.kt)("p",null,"You can also create more complex shadows with multiple shadows. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.3);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"This will create two shadows:")," a regular shadow on the top right and bottom left of the text and a regular shadow on the top left and bottom right of the text.")))}c.isMDXComponent=!0},39005:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),o=a(19604);const r="label_OGF5",s="container_vJjB",l="editorWindow_Gfn9",i="outputwindow_HHdh",d="button_jrAF";var p=a(9200),h=a(36136);const c=e=>{let{htmlCode:t,elementId:a}=e;const[c,m]=(0,n.useState)(t),{colorMode:u}=(0,p.I)();let w=null;function k(){console.log("elementId=",a),document.getElementById(a).innerHTML="",document.getElementById(a).appendChild(w),w.contentDocument.open(),w.contentDocument.write(c),w.contentDocument.close(),w.style.height=w.contentWindow.document.body.scrollHeight+50+"px"}return h.Z.canUseDOM&&(w=document.createElement("iframe"),w.style.width="100%",w.style.height="100%",w.style.background="#fff"),(0,n.useEffect)((()=>{h.Z.canUseDOM&&k()}),[""]),n.createElement("div",{className:s},n.createElement("h3",{className:r},"Editor"),n.createElement(o.ZP,{className:l,height:"40vh",defaultLanguage:"html",defaultValue:c,onChange:m,theme:"dark"===u?"vs-dark":"light",options:{readOnly:!1,minimap:{enabled:!1}}}),n.createElement("div",{className:d},n.createElement("button",{onClick:k,className:"button button--success"},"Run Example >>")),n.createElement("div",{className:i,id:a}))}}}]);