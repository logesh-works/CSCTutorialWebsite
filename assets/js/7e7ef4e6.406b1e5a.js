"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,b=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(39005);const a={slug:"/css-borders",id:"css-borders",sidebar_label:"CSS Borders",title:"Learn CSS Borders: A Complete Guide to Styling Web Elements",description:"Learn the art of CSS border styling with our interactive Code Editor. This CSS tutorial, suitable for beginners and professionals, covers essential border properties in CSS, including border color, width, style, radius, and more. Enhance your web development skills with CSC.",keywords:["CSS borders","Border properties in CSS","Border color in CSS","Border width in CSS","Border style in CSS","Border radius in CSS","web development","CSC","interactive tutorial","CSS code","web development skills","CSS border effects","CSS border transitions","CSS border images","CSS box-shadow","CSS outline","Border styles in CSS"],image:"https://cscnotes.netlify.app/img/css-large.png"},l=void 0,s={unversionedId:"CSS Tutorial/CSS Borders/css-borders",id:"CSS Tutorial/CSS Borders/css-borders",title:"Learn CSS Borders: A Complete Guide to Styling Web Elements",description:"Learn the art of CSS border styling with our interactive Code Editor. This CSS tutorial, suitable for beginners and professionals, covers essential border properties in CSS, including border color, width, style, radius, and more. Enhance your web development skills with CSC.",source:"@site/docs/tutorial-css/02-CSS Tutorial/16-CSS Borders/index.mdx",sourceDirName:"02-CSS Tutorial/16-CSS Borders",slug:"/css-borders",permalink:"/css/css-borders",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-borders",id:"css-borders",sidebar_label:"CSS Borders",title:"Learn CSS Borders: A Complete Guide to Styling Web Elements",description:"Learn the art of CSS border styling with our interactive Code Editor. This CSS tutorial, suitable for beginners and professionals, covers essential border properties in CSS, including border color, width, style, radius, and more. Enhance your web development skills with CSC.",keywords:["CSS borders","Border properties in CSS","Border color in CSS","Border width in CSS","Border style in CSS","Border radius in CSS","web development","CSC","interactive tutorial","CSS code","web development skills","CSS border effects","CSS border transitions","CSS border images","CSS box-shadow","CSS outline","Border styles in CSS"],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS Backgrounds",permalink:"/css/css-backgrounds"},next:{title:"CSS Margins",permalink:"/css/css-margins"}},d={},p=[{value:"The <code>border-radius</code>",id:"the-border-radius",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,o.kt)("meta",{name:"twitter:title",content:"Learn CSS Borders: A Complete Guide to Styling Web Elements"}),(0,o.kt)("meta",{name:"twitter:description",content:"Learn about CSS Borders using our interactive Code Editor."}),(0,o.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,o.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,o.kt)("meta",{name:"og:type",content:"article"}),(0,o.kt)("meta",{name:"og:title",content:"Learn CSS Borders: A Complete Guide to Styling Web Elements"}),(0,o.kt)("meta",{name:"og:description",content:"Learn about CSS Borders using our interactive Code Editor."}),(0,o.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,o.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,o.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,o.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-borders"}),(0,o.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-borders"})),(0,o.kt)("p",null,"Borders are ",(0,o.kt)("strong",{parentName:"p"},"used to create a visual boundary")," around an HTML element. You can set the width, color, and style of a border using CSS properties."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)(i.Z,{htmlCode:"<!DOCTYPE >\n<html>\n  <style>\n    /* Set a 1 pixel solid black border around a div element */\n    div {\n      border: 1px solid black;\n    }\n  </style>\n  <body>\n    <div>This is my first border</div>\n  </body>\n</html>\n",elementId:"sku-example1",mdxType:"CustomEditorHTML"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"border")," property is a shorthand property that allows you to set the width, style, and color of a border all at once."),(0,o.kt)("li",{parentName:"ul"},"The value ",(0,o.kt)("inlineCode",{parentName:"li"},"1px")," sets the width of the border to 1 pixel, ",(0,o.kt)("inlineCode",{parentName:"li"},"solid")," sets the style to a solid line, and black sets the color to ",(0,o.kt)("inlineCode",{parentName:"li"},"black"),".")),(0,o.kt)("p",null,"You can also use separate border properties to set different values for the width, style, and color."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)(i.Z,{htmlCode:"<!DOCTYPE >\n<html>\n  <style>\n    /* Set a red dashed border with a width of 2 pixels */\n    div {\n      border-width: 2px;\n      border-style: dashed;\n      border-color: red;\n    }\n  </style>\n  <body>\n    <div>This is my first border</div>\n  </body>\n</html>\n",elementId:"sku-example2",mdxType:"CustomEditorHTML"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We use the ",(0,o.kt)("inlineCode",{parentName:"li"},"border-width"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"border-style"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"border-color")," properties to set the width, style, and color of the border separately.")),(0,o.kt)("p",null,"You can also set borders on individual sides of an element using the ",(0,o.kt)("inlineCode",{parentName:"p"},"border-top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"border-right"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"border-bottom"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"border-left")," properties."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)(i.Z,{htmlCode:"<!DOCTYPE >\n<html>\n  <style>\n    /* Set a red dashed border with a width of 2 pixels */\n    /* Set a green border on the top and bottom of a div element */\n    div {\n      border-top: 1px solid green;\n      border-bottom: 1px solid green;\n    }\n  </style>\n  <body>\n    <div>This is my first border</div>\n  </body>\n</html>\n",elementId:"sku-example3",mdxType:"CustomEditorHTML"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sets a green border on the top and bottom of a div element using the ",(0,o.kt)("inlineCode",{parentName:"li"},"border-top")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"border-bottom")," properties.")),(0,o.kt)("h2",{id:"the-border-radius"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"border-radius")),(0,o.kt)("p",null,"Border radius creates rounded corners on an HTML element."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an example:")),(0,o.kt)(i.Z,{htmlCode:"<!DOCTYPE >\n<html>\n  <style>\n    /* Set a div element with a 10px border radius */\n    div {\n      border-radius: 10px;\n      border: 2px solid red;\n    }\n  </style>\n  <body>\n    <div>This is my first border</div>\n  </body>\n</html>\n",elementId:"sku-example4",mdxType:"CustomEditorHTML"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In this example:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"border-radius: 10px"),"; sets the corner radius of the element to 10 pixels."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"border: 2px solid red"),"; sets a 2-pixel wide solid red border around the element.")))}c.isMDXComponent=!0},39005:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),o=r(19604);const i="label_OGF5",a="container_vJjB",l="editorWindow_Gfn9",s="outputwindow_HHdh",d="button_jrAF";var p=r(9200),m=r(36136);const c=e=>{let{htmlCode:t,elementId:r}=e;const[c,u]=(0,n.useState)(t),{colorMode:b}=(0,p.I)();let S=null;function h(){console.log("elementId=",r),document.getElementById(r).innerHTML="",document.getElementById(r).appendChild(S),S.contentDocument.open(),S.contentDocument.write(c),S.contentDocument.close(),S.style.height=S.contentWindow.document.body.scrollHeight+50+"px"}return m.Z.canUseDOM&&(S=document.createElement("iframe"),S.style.width="100%",S.style.height="100%",S.style.background="#fff"),(0,n.useEffect)((()=>{m.Z.canUseDOM&&h()}),[""]),n.createElement("div",{className:a},n.createElement("h3",{className:i},"Editor"),n.createElement(o.ZP,{className:l,height:"40vh",defaultLanguage:"html",defaultValue:c,onChange:u,theme:"dark"===b?"vs-dark":"light",options:{readOnly:!1,minimap:{enabled:!1}}}),n.createElement("div",{className:d},n.createElement("button",{onClick:h,className:"button button--success"},"Run Example >>")),n.createElement("div",{className:s,id:r}))}}}]);