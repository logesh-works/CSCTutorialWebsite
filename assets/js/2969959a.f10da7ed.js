"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=m(n),g=a,h=c["".concat(s,".").concat(g)]||c[g]||p[g]||l;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var m=2;m<l;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),l=n(39005);const o={slug:"/css-align",id:"css-align",sidebar_label:"CSS Align",title:"CSS Aligning Magic: Mastering Horizontal and Vertical Alignment",description:"Learn CSS alignment to control how your web elements are positioned. Our interactive tutorial covers all the essentials, from horizontal and vertical alignment to centering text and images.",keywords:["CSS align","Align property in CSS","CSS align values","Horizontal alignment in CSS","Vertical alignment in CSS","Text alignment in CSS","CSS align examples","CSS align and layout","Aligning elements with CSS","CSS align and responsive design","web design","CSC","interactive tutorial","CSS code","alignment techniques"],image:"https://cscnotes.netlify.app/img/css-large.png"},r=void 0,s={unversionedId:"CSS Tutorial/CSS Align/css-align",id:"CSS Tutorial/CSS Align/css-align",title:"CSS Aligning Magic: Mastering Horizontal and Vertical Alignment",description:"Learn CSS alignment to control how your web elements are positioned. Our interactive tutorial covers all the essentials, from horizontal and vertical alignment to centering text and images.",source:"@site/docs/tutorial-css/02-CSS Tutorial/52-CSS Align/index.mdx",sourceDirName:"02-CSS Tutorial/52-CSS Align",slug:"/css-align",permalink:"/css/css-align",draft:!1,tags:[],version:"current",frontMatter:{slug:"/css-align",id:"css-align",sidebar_label:"CSS Align",title:"CSS Aligning Magic: Mastering Horizontal and Vertical Alignment",description:"Learn CSS alignment to control how your web elements are positioned. Our interactive tutorial covers all the essentials, from horizontal and vertical alignment to centering text and images.",keywords:["CSS align","Align property in CSS","CSS align values","Horizontal alignment in CSS","Vertical alignment in CSS","Text alignment in CSS","CSS align examples","CSS align and layout","Aligning elements with CSS","CSS align and responsive design","web design","CSC","interactive tutorial","CSS code","alignment techniques"],image:"https://cscnotes.netlify.app/img/css-large.png"},sidebar:"ethernetip",previous:{title:"CSS Inline-block",permalink:"/css/css-inline-block"},next:{title:"CSS Combinators",permalink:"/css/css-combinators"}},m={},d=[{value:"Horizontal Alignment",id:"horizontal-alignment",level:2},{value:"Center aligning an element horizontally",id:"center-aligning-an-element-horizontally",level:3},{value:"Left aligning an element",id:"left-aligning-an-element",level:3},{value:"Right aligning an element",id:"right-aligning-an-element",level:3},{value:"Vertical Alignment",id:"vertical-alignment",level:2},{value:"Center aligning an element vertically",id:"center-aligning-an-element-vertically",level:3},{value:"Top aligning an element",id:"top-aligning-an-element",level:3},{value:"Bottom aligning an element",id:"bottom-aligning-an-element",level:3},{value:"Center Align Text",id:"center-align-text",level:2},{value:"Center an Image",id:"center-an-image",level:2},{value:"The clearfix Hack",id:"the-clearfix-hack",level:2},{value:"Center Vertically &amp; horizontly - Using position &amp; transform",id:"center-vertically--horizontly---using-position--transform",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,a.kt)("meta",{name:"twitter:title",content:"CSS Aligning Magic: Mastering Horizontal and Vertical Alignment"}),(0,a.kt)("meta",{name:"twitter:description",content:"Learn about CSS Align using our interactive Code Editor."}),(0,a.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,a.kt)("meta",{name:"twitter:image:alt",content:"CSS Tutorial Banner Image"}),(0,a.kt)("meta",{name:"og:type",content:"article"}),(0,a.kt)("meta",{name:"og:title",content:"CSS Aligning Magic: Mastering Horizontal and Vertical Alignment"}),(0,a.kt)("meta",{name:"og:description",content:"Learn about CSS Align using our interactive Code Editor."}),(0,a.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/css-large.png"}),(0,a.kt)("meta",{name:"og:image:alt",content:"CSS Tutorial Banner Image"}),(0,a.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,a.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/css/css-align"}),(0,a.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/css/css-align"})),(0,a.kt)("p",null,"Horizontal and vertical alignment in CSS layout refer to positioning an element horizontally or vertically within its container."),(0,a.kt)("h2",{id:"horizontal-alignment"},"Horizontal Alignment"),(0,a.kt)("h3",{id:"center-aligning-an-element-horizontally"},"Center aligning an element horizontally"),(0,a.kt)("p",null,"To center align an element horizontally, ",(0,a.kt)("strong",{parentName:"p"},"set the ",(0,a.kt)("inlineCode",{parentName:"strong"},"margin")," property of the element to ",(0,a.kt)("inlineCode",{parentName:"strong"},"auto")),". This will automatically distribute the margin space equally on both sides of the element, centering it within its container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE >\n<html>\n  <head>\n    <style>\n      .container {\n        width: 100%; /* set the width of the container */\n      }\n\n      .element {\n        width: 50%; /* set the width of the element */\n        margin: 0 auto; /* set left and right margin to auto */\n        background-color: #ccc;\n        text-align: center;\n        padding: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">This element is centered horizontally</div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example1",mdxType:"CustomEditorHTML"}),(0,a.kt)("h3",{id:"left-aligning-an-element"},"Left aligning an element"),(0,a.kt)("p",null,"To left-align an element, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"margin-left")," property of the element to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"margin-right")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE >\n<html>\n  <head>\n    <style>\n      .container {\n        width: 100%; /* set the width of the container */\n      }\n\n      .element {\n        width: 50%; /* set the width of the element */\n        margin-left: 0; /* set left margin to 0 */\n        margin-right: auto; /* set right margin to auto */\n        background-color: #ccc;\n        text-align: center;\n        padding: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">This element is left-aligned</div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example2",mdxType:"CustomEditorHTML"}),(0,a.kt)("h3",{id:"right-aligning-an-element"},"Right aligning an element"),(0,a.kt)("p",null,"To right-align an element, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"margin-right")," property of the element to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"margin-left")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE >\n<html>\n  <head>\n    <style>\n      .container {\n        width: 100%; /* set the width of the container */\n      }\n\n      .element {\n        width: 50%; /* set the width of the element */\n        margin-right: 0; /* set right margin to 0 */\n        margin-left: auto; /* set left margin to auto */\n        background-color: #ccc;\n        text-align: center;\n        padding: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">This element is right-aligned</div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example3",mdxType:"CustomEditorHTML"}),(0,a.kt)("h2",{id:"vertical-alignment"},"Vertical Alignment"),(0,a.kt)("h3",{id:"center-aligning-an-element-vertically"},"Center aligning an element vertically"),(0,a.kt)("p",null,"To center align an element vertically, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"display")," property of the container to ",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),", and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"justify-content")," properties to ",(0,a.kt)("inlineCode",{parentName:"p"},"center"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE >\n<html>\n  <head>\n    <style>\n      .container {\n        display: flex;\n        align-items: center; /* center align vertically */\n        justify-content: center; /* center align horizontally */\n        height: 100vh; /* set the height of the container to the viewport height */\n      }\n\n      .element {\n        background-color: #ccc;\n        text-align: center;\n        padding: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">\n        This element is center-aligned both horizontally and vertically\n      </div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example4",mdxType:"CustomEditorHTML"}),(0,a.kt)("h3",{id:"top-aligning-an-element"},"Top aligning an element"),(0,a.kt)("p",null,"To top align an element, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," property of the container to ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-start"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      .container {\n        display: flex;\n        align-items: flex-start; /* top align vertically */\n        height: 100vh; /* set the height of the container to the viewport height */\n      }\n\n      .element {\n        background-color: #ccc;\n        text-align: center;\n        padding: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">\n        This element is aligned to the top of the container\n      </div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example5",mdxType:"CustomEditorHTML"}),(0,a.kt)("h3",{id:"bottom-aligning-an-element"},"Bottom aligning an element"),(0,a.kt)("p",null,"To bottom align an element, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"align-items")," property of the container to ",(0,a.kt)("inlineCode",{parentName:"p"},"flex-end"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      .container {\n        display: flex;\n        align-items: flex-end; /* bottom align vertically */\n        height: 100vh; /* set the height of the container to the viewport height */\n      }\n\n      .element {\n        background-color: #ccc;\n        text-align: center;\n        padding: 20px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">\n        This element is aligned to the bottom of the container\n      </div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example6",mdxType:"CustomEditorHTML"}),(0,a.kt)("admonition",{title:"must define height",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In order for vertical alignment to work, the container of the element must have a defined height.")),(0,a.kt)("h2",{id:"center-align-text"},"Center Align Text"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"An example of center align text using the ",(0,a.kt)("inlineCode",{parentName:"strong"},"text-align: center")," property:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      div {\n        text-align: center; /* center align text */\n      }\n    </style>\n  </head>\n  <body>\n    <div>\n      <h1>This text is center-aligned</h1>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt\n        suscipit erat, non laoreet nisl fringilla ut.\n      </p>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example7",mdxType:"CustomEditorHTML"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In this example:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"text-align: center")," property is applied to the ",(0,a.kt)("inlineCode",{parentName:"li"},"div")," element to center align the text inside it."),(0,a.kt)("li",{parentName:"ul"},"This property can be applied to any element that contains text, including headings, paragraphs, and list items.")),(0,a.kt)("h2",{id:"center-an-image"},"Center an Image"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"An example of center an image using the ",(0,a.kt)("inlineCode",{parentName:"strong"},"display: block")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"margin: auto")," properties:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      div {\n        text-align: center; /* center align the image container */\n      }\n\n      img {\n        display: block; /* set the image to a block element */\n        margin: auto; /* center align the image horizontally */\n      }\n    </style>\n  </head>\n  <body>\n    <div>\n      <img\n        src="https://images.pexels.com/photos/2394979/pexels-photo-2394979.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"\n        alt="Image"\n      />\n    </div>\n  </body>\n</html>\n',elementId:"sku-example8",mdxType:"CustomEditorHTML"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In this example:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"text-align: center")," property is applied to the ",(0,a.kt)("inlineCode",{parentName:"li"},"div")," element to center align the image container."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"display: block")," property is applied to the ",(0,a.kt)("inlineCode",{parentName:"li"},"img")," element to make it a block element, which allows us to center align it using the ",(0,a.kt)("inlineCode",{parentName:"li"},"margin: auto")," property.")),(0,a.kt)("h2",{id:"the-clearfix-hack"},"The clearfix Hack"),(0,a.kt)("p",null,"The clearfix hack is a technique ",(0,a.kt)("strong",{parentName:"p"},"used in CSS to clear floated elements within a container"),". When you float elements inside a container, the container itself collapses to a height of ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", which can cause issues with layout and positioning."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As an example:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      .container {\n        border: 1px solid #ccc; /* add a border to the container for visualization */\n      }\n\n      .clearfix::after {\n        content: "";\n        display: table;\n        clear: both;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container clearfix">\n      <div class="left-float">This is a left floated element</div>\n      <div class="right-float">This is a right floated element</div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example9",mdxType:"CustomEditorHTML"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In this example:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"::after")," pseudo-element is added to the container using the ",(0,a.kt)("inlineCode",{parentName:"li"},"clearfix")," class."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},'content: ""')," property is used to add an empty content, ",(0,a.kt)("inlineCode",{parentName:"li"},"display: table")," is used to create a new block formatting context, and ",(0,a.kt)("inlineCode",{parentName:"li"},"clear: both")," is used to clear the floats and force the container to expand to the height of its contents.")),(0,a.kt)("h2",{id:"center-vertically--horizontly---using-position--transform"},"Center Vertically & horizontly - Using position & transform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"An example of center an element vertically and horizontally using ",(0,a.kt)("inlineCode",{parentName:"strong"},"position")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"transform")," properties:")),(0,a.kt)(l.Z,{htmlCode:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <style>\n      .container {\n        height: 300px; /* set container height for visualization */\n        border: 1px solid #ccc; /* add a border to the container for visualization */\n        position: relative; /* set the container position to relative */\n      }\n\n      .element {\n        position: absolute; /* set the element position to absolute */\n        top: 50%; /* set the top position to 50% */\n        left: 50%; /* set the left position to 50% */\n        transform: translate(\n          -50%,\n          -50%\n        ); /* use transform to move the element up by 50% of its height and left by 50% of its width */\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="element">This element is vertically centered</div>\n    </div>\n  </body>\n</html>\n',elementId:"sku-example10",mdxType:"CustomEditorHTML"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In this example:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"position")," property is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"relative")," on the container and ",(0,a.kt)("inlineCode",{parentName:"li"},"absolute"),"\non the element to position it relative to the container."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"top")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"left")," properties\nare set to ",(0,a.kt)("inlineCode",{parentName:"li"},"50%")," on the element to move it down by 50% of the container height and\nleft by 50% of the container width."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"transform")," property is used to move\nthe element up by 50% of its height and left by ",(0,a.kt)("inlineCode",{parentName:"li"},"50%")," of its width using the ",(0,a.kt)("inlineCode",{parentName:"li"},"translate(-50%,\n-50%)")," value.")))}p.isMDXComponent=!0},39005:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(67294),a=n(19604);const l="label_OGF5",o="container_vJjB",r="editorWindow_Gfn9",s="outputwindow_HHdh",m="button_jrAF";var d=n(9200),c=n(36136);const p=e=>{let{htmlCode:t,elementId:n}=e;const[p,g]=(0,i.useState)(t),{colorMode:h}=(0,d.I)();let u=null;function k(){console.log("elementId=",n),document.getElementById(n).innerHTML="",document.getElementById(n).appendChild(u),u.contentDocument.open(),u.contentDocument.write(p),u.contentDocument.close(),u.style.height=u.contentWindow.document.body.scrollHeight+50+"px"}return c.Z.canUseDOM&&(u=document.createElement("iframe"),u.style.width="100%",u.style.height="100%",u.style.background="#fff"),(0,i.useEffect)((()=>{c.Z.canUseDOM&&k()}),[""]),i.createElement("div",{className:o},i.createElement("h3",{className:l},"Editor"),i.createElement(a.ZP,{className:r,height:"40vh",defaultLanguage:"html",defaultValue:p,onChange:g,theme:"dark"===h?"vs-dark":"light",options:{readOnly:!1,minimap:{enabled:!1}}}),i.createElement("div",{className:m},i.createElement("button",{onClick:k,className:"button button--success"},"Run Example >>")),i.createElement("div",{className:s,id:n}))}}}]);