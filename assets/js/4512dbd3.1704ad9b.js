"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(39005);const l={slug:"/html-canvas",id:"html-canvas",sidebar_label:"HTML Canvas",title:"Learn HTML Canvas: Create Graphics and Interactive Visualizations",description:"Discover the power of HTML Canvas for creating graphics, animations, and interactive visualizations in web applications. Explore the canvas element and JavaScript for drawing on the canvas.",keywords:["HTML Canvas","Canvas Element","Drawing in HTML","Canvas API","Interactive Visualizations","Web Graphics","HTML Tutorial","Canvas Examples","Animation","HTML Playground","Code Editor","Interactive IDE","Web Development","Web Graphics","Canvas Shapes","Gradient Drawing","Linear Gradient","Radial Gradient","HTML Canvas Tutorials"],image:"https://cscnotes.netlify.app/img/html-large.png"},o=void 0,s={unversionedId:"HTML Graphics/HTML Canvas/html-canvas",id:"HTML Graphics/HTML Canvas/html-canvas",title:"Learn HTML Canvas: Create Graphics and Interactive Visualizations",description:"Discover the power of HTML Canvas for creating graphics, animations, and interactive visualizations in web applications. Explore the canvas element and JavaScript for drawing on the canvas.",source:"@site/docs/tutorial-html/08-HTML Graphics/90-HTML Canvas/index.mdx",sourceDirName:"08-HTML Graphics/90-HTML Canvas",slug:"/html-canvas",permalink:"/html/html-canvas",draft:!1,tags:[],version:"current",frontMatter:{slug:"/html-canvas",id:"html-canvas",sidebar_label:"HTML Canvas",title:"Learn HTML Canvas: Create Graphics and Interactive Visualizations",description:"Discover the power of HTML Canvas for creating graphics, animations, and interactive visualizations in web applications. Explore the canvas element and JavaScript for drawing on the canvas.",keywords:["HTML Canvas","Canvas Element","Drawing in HTML","Canvas API","Interactive Visualizations","Web Graphics","HTML Tutorial","Canvas Examples","Animation","HTML Playground","Code Editor","Interactive IDE","Web Development","Web Graphics","Canvas Shapes","Gradient Drawing","Linear Gradient","Radial Gradient","HTML Canvas Tutorials"],image:"https://cscnotes.netlify.app/img/html-large.png"},sidebar:"ethernetip",previous:{title:"HTML Youtube",permalink:"/html/html-youtube-videos"},next:{title:"HTML SVG",permalink:"/html/html-svg"}},c={},d=[{value:"Draw Circular Gradient",id:"draw-circular-gradient",level:3},{value:"Draw Linear Gradient",id:"draw-linear-gradient",level:3}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,i.kt)("meta",{name:"twitter:title",content:"Learn HTML Canvas: Create Graphics and Interactive Visualizations"}),(0,i.kt)("meta",{name:"twitter:description",content:"Learn about HTML Canvas using our interactive Code Editor."}),(0,i.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/html-large.png"}),(0,i.kt)("meta",{name:"twitter:image:alt",content:"HTML Tutorial Banner Image"}),(0,i.kt)("meta",{name:"og:type",content:"article"}),(0,i.kt)("meta",{name:"og:title",content:"Learn HTML Canvas: Create Graphics and Interactive Visualizations"}),(0,i.kt)("meta",{name:"og:description",content:"Learn about HTML Canvas using our interactive Code Editor."}),(0,i.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/html-large.png"}),(0,i.kt)("meta",{name:"og:image:alt",content:"HTML Tutorial Banner Image"}),(0,i.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/html/html-canvas"}),(0,i.kt)("meta",{name:"og:site_name",content:"CSC"})),(0,i.kt)("p",null,"HTML Canvas is a ",(0,i.kt)("strong",{parentName:"p"},"powerful tool for creating graphics"),", ",(0,i.kt)("strong",{parentName:"p"},"animations"),", and ",(0,i.kt)("strong",{parentName:"p"},"interactive visualizations")," in web applications. It is an HTML element that allows you to draw graphics using JavaScript."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As an example:")),(0,i.kt)(r.Z,{htmlCode:'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n\n  <body>\n    <canvas id="myCanvas" width="400" height="400"></canvas>\n  </body>\n  <script>\n    const canvas = document.getElementById("myCanvas");\n    const ctx = canvas.getContext("2d");\n    ctx.beginPath();\n    ctx.arc(200, 200, 100, 0, 2 * Math.PI);\n    ctx.stroke();\n  <\/script>\n</html>\n',elementId:"sku-example1",mdxType:"CustomEditorHTML"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In this example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute is used to uniquely identify the canvas element. The ",(0,i.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"height")," attributes specify the dimensions of the canvas in pixels."),(0,i.kt)("li",{parentName:"ul"},"We first retrieve the canvas element using its ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute."),(0,i.kt)("li",{parentName:"ul"},"We then get the canvas context using the ",(0,i.kt)("inlineCode",{parentName:"li"},"getContext()")," method, which returns a drawing context on the canvas."),(0,i.kt)("li",{parentName:"ul"},"We use the ",(0,i.kt)("inlineCode",{parentName:"li"},"beginPath()")," method to begin the drawing path and the ",(0,i.kt)("inlineCode",{parentName:"li"},"arc()")," method to draw a circle at the center of the canvas with a radius of 100 pixels."),(0,i.kt)("li",{parentName:"ul"},"Finally, we call the ",(0,i.kt)("inlineCode",{parentName:"li"},"stroke()")," method to draw the circle stroke on the canvas.")),(0,i.kt)("h3",{id:"draw-circular-gradient"},"Draw Circular Gradient"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To draw a circular gradient")," on an HTML canvas, you can ",(0,i.kt)("strong",{parentName:"p"},"use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"createRadialGradient()")," method of the canvas")," context object. This method creates a radial gradient object that you can use to fill shapes on the canvas."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As an example:")),(0,i.kt)(r.Z,{htmlCode:'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n\n  <body>\n    <canvas id="myCanvas" width="400" height="400"></canvas>\n  </body>\n  <script>\n    const canvas = document.getElementById("myCanvas");\n    const ctx = canvas.getContext("2d");\n\n    // Create a radial gradient object\n    const gradient = ctx.createRadialGradient(200, 200, 50, 200, 200, 200);\n\n    // Define the gradient colors and stops\n    gradient.addColorStop(0, "red");\n    gradient.addColorStop(0.5, "yellow");\n    gradient.addColorStop(1, "green");\n\n    // Fill a circle with the gradient\n    ctx.beginPath();\n    ctx.arc(200, 200, 150, 0, 2 * Math.PI);\n    ctx.fillStyle = gradient;\n    ctx.fill();\n  <\/script>\n</html>\n',elementId:"sku-example2",mdxType:"CustomEditorHTML"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In this example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We first retrieve the canvas element using its ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute."),(0,i.kt)("li",{parentName:"ul"},"We then get the canvas context using the ",(0,i.kt)("inlineCode",{parentName:"li"},"getContext()")," method."),(0,i.kt)("li",{parentName:"ul"},"We create a radial gradient object using the ",(0,i.kt)("inlineCode",{parentName:"li"},"createRadialGradient()")," method, which takes six arguments: the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," coordinates of the inner circle center, the radius of the inner circle, the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," coordinates of the outer circle center, and the radius of the outer circle."),(0,i.kt)("li",{parentName:"ul"},"We then define the gradient colors and stops using the ",(0,i.kt)("inlineCode",{parentName:"li"},"addColorStop()")," method."),(0,i.kt)("li",{parentName:"ul"},"We set the fill style of the canvas context to the gradient using the ",(0,i.kt)("inlineCode",{parentName:"li"},"fillStyle")," property, and then fill a circle on the canvas using the ",(0,i.kt)("inlineCode",{parentName:"li"},"fill()")," method.")),(0,i.kt)("h3",{id:"draw-linear-gradient"},"Draw Linear Gradient"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To draw a linear gradient")," on an HTML canvas, you can ",(0,i.kt)("strong",{parentName:"p"},"use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"createLinearGradient()")," method of the canvas")," context object. This method creates a linear gradient object that you can use to fill shapes on the canvas."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As an example:")),(0,i.kt)(r.Z,{htmlCode:'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n\n  <body>\n    <canvas id="myCanvas" width="400" height="400"></canvas>\n  </body>\n  <script>\n    const canvas = document.getElementById("myCanvas");\n    const ctx = canvas.getContext("2d");\n\n    // Create a linear gradient object\n    const gradient = ctx.createLinearGradient(0, 0, 400, 0);\n\n    // Define the gradient colors and stops\n    gradient.addColorStop(0, "red");\n    gradient.addColorStop(0.5, "yellow");\n    gradient.addColorStop(1, "green");\n\n    // Fill a rectangle with the gradient\n    ctx.fillStyle = gradient;\n    ctx.fillRect(0, 0, 400, 400);\n  <\/script>\n</html>\n',elementId:"sku-example3",mdxType:"CustomEditorHTML"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In this example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We first retrieve the canvas element using its id attribute."),(0,i.kt)("li",{parentName:"ul"},"We then get the canvas context using the ",(0,i.kt)("inlineCode",{parentName:"li"},"getContext()")," method."),(0,i.kt)("li",{parentName:"ul"},"We create a linear gradient object using the ",(0,i.kt)("inlineCode",{parentName:"li"},"createLinearGradient()")," method, which takes four arguments: the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," coordinates of the starting point of the gradient, and the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," coordinates of the ending point of the gradient."),(0,i.kt)("li",{parentName:"ul"},"We then define the gradient colors and stops using the ",(0,i.kt)("inlineCode",{parentName:"li"},"addColorStop()")," method."),(0,i.kt)("li",{parentName:"ul"},"We set the fill style of the canvas context to the gradient using the fillStyle property, and then fill a rectangle on the canvas using the ",(0,i.kt)("inlineCode",{parentName:"li"},"fillRect()")," method.")))}p.isMDXComponent=!0},39005:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),i=n(19604);const r="label_OGF5",l="container_vJjB",o="editorWindow_Gfn9",s="outputwindow_HHdh",c="button_jrAF";var d=n(9200),m=n(36136);const p=e=>{let{htmlCode:t,elementId:n}=e;const[p,h]=(0,a.useState)(t),{colorMode:u}=(0,d.I)();let g=null;function v(){console.log("elementId=",n),document.getElementById(n).innerHTML="",document.getElementById(n).appendChild(g),g.contentDocument.open(),g.contentDocument.write(p),g.contentDocument.close(),g.style.height=g.contentWindow.document.body.scrollHeight+50+"px"}return m.Z.canUseDOM&&(g=document.createElement("iframe"),g.style.width="100%",g.style.height="100%",g.style.background="#fff"),(0,a.useEffect)((()=>{m.Z.canUseDOM&&v()}),[""]),a.createElement("div",{className:l},a.createElement("h3",{className:r},"Editor"),a.createElement(i.ZP,{className:o,height:"40vh",defaultLanguage:"html",defaultValue:p,onChange:h,theme:"dark"===u?"vs-dark":"light",options:{readOnly:!1,minimap:{enabled:!1}}}),a.createElement("div",{className:c},a.createElement("button",{onClick:v,className:"button button--success"},"Run Example >>")),a.createElement("div",{className:s,id:n}))}}}]);