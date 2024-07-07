"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),v=r,u=d["".concat(l,".").concat(v)]||d[v]||m[v]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},25576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/html-sse",id:"html-sse",sidebar_label:"HTML SSE",title:"Real-Time Web Updates with HTML SSE: Simplifying Server-Sent Events",description:"Discover the HTML SSE API (Server-Sent Events) to enable real-time updates in your web applications. Learn how to create an EventSource object, handle SSE events, and set up server-side code to push data to clients. Keep your web pages updated without complex websockets.",keywords:["HTML SSE API","Server-Sent Events in HTML","EventSource API","Real-time Updates","Streaming Updates","Push Notifications","SSE Event Types","SSE Data Formats","SSE Event Handling","HTML Playground","Code Editor","Online IDE","Interactive IDE","HTML Semantics","HTML Validation","Web Development","Real-Time Web Updates","Server-Sent Events Tutorial","HTML SSE Server-Side Code","EventSource Object","Keep-Alive Connection"],image:"https://cscnotes.netlify.app/img/html-large.png"},o=void 0,s={unversionedId:"HTML  APIs/HTML SSE/html-sse",id:"HTML  APIs/HTML SSE/html-sse",title:"Real-Time Web Updates with HTML SSE: Simplifying Server-Sent Events",description:"Discover the HTML SSE API (Server-Sent Events) to enable real-time updates in your web applications. Learn how to create an EventSource object, handle SSE events, and set up server-side code to push data to clients. Keep your web pages updated without complex websockets.",source:"@site/docs/tutorial-html/10-HTML  APIs/102-HTML SSE/index.mdx",sourceDirName:"10-HTML  APIs/102-HTML SSE",slug:"/html-sse",permalink:"/html/html-sse",draft:!1,tags:[],version:"current",frontMatter:{slug:"/html-sse",id:"html-sse",sidebar_label:"HTML SSE",title:"Real-Time Web Updates with HTML SSE: Simplifying Server-Sent Events",description:"Discover the HTML SSE API (Server-Sent Events) to enable real-time updates in your web applications. Learn how to create an EventSource object, handle SSE events, and set up server-side code to push data to clients. Keep your web pages updated without complex websockets.",keywords:["HTML SSE API","Server-Sent Events in HTML","EventSource API","Real-time Updates","Streaming Updates","Push Notifications","SSE Event Types","SSE Data Formats","SSE Event Handling","HTML Playground","Code Editor","Online IDE","Interactive IDE","HTML Semantics","HTML Validation","Web Development","Real-Time Web Updates","Server-Sent Events Tutorial","HTML SSE Server-Side Code","EventSource Object","Keep-Alive Connection"],image:"https://cscnotes.netlify.app/img/html-large.png"},sidebar:"ethernetip",previous:{title:"HTML Web Workers",permalink:"/html/html-webworkers"}},l={},p=[{value:"Receive Server-Sent Event Notifications",id:"receive-server-sent-event-notifications",level:2},{value:"Server-Side Code Example",id:"server-side-code-example",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,r.kt)("meta",{name:"twitter:title",content:"HTML SSE API"}),(0,r.kt)("meta",{name:"twitter:description",content:"Real-Time Web Updates with HTML SSE: Simplifying Server-Sent Events"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://cscnotes.netlify.app/img/html-large.png"}),(0,r.kt)("meta",{name:"twitter:image:alt",content:"HTML Tutorial Banner Image"}),(0,r.kt)("meta",{name:"og:type",content:"article"}),(0,r.kt)("meta",{name:"og:title",content:"HTML SSE API"}),(0,r.kt)("meta",{name:"og:description",content:"Real-Time Web Updates with HTML SSE: Simplifying Server-Sent Events"}),(0,r.kt)("meta",{name:"og:image",content:"https://cscnotes.netlify.app/img/html-large.png"}),(0,r.kt)("meta",{name:"og:image:alt",content:"HTML Tutorial Banner Image"}),(0,r.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/html/html-sse"}),(0,r.kt)("meta",{name:"og:site_name",content:"CSC"})),(0,r.kt)("p",null,"HTML SSE (",(0,r.kt)("strong",{parentName:"p"},"Server-Sent Events"),") API is a web API that ",(0,r.kt)("strong",{parentName:"p"},"enables a server to push data to a web page over a single HTTP or HTTPS connection"),". "),(0,r.kt)("p",null,"The server sends data to the client in a text-based format called Event Stream, and the client receives these events using JavaScript."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here are the basic steps involved in using the HTML SSE API:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new EventSource object in JavaScript, passing in the URL of the server endpoint that will send the events.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const eventSource = new EventSource("http://example.com/events");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add event listeners to handle different types of events that the server may send, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"onmessage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"onopen"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"onerror")," properties of the EventSource object.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'eventSource.onmessage = function (event) {\n     console.log("Received event:", event.data);\n};\n\neventSource.onopen = function (event) {\n     console.log("Connected to server");\n};\n\neventSource.onerror = function (event) {\n     console.error("Error occurred:", event);\n};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the server side, set up an endpoint that sends events using the Event Stream format. An event is sent as a plain-text string with a specific format: a line starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"data:")," containing the data of the event, followed by an empty line. Here's an example of sending an event in Node.js:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const http = require("http");\n\nhttp.createServer(function (req, res) {\n     res.writeHead(200, {"Content-Type": "text/event-stream"});\n     res.write("data: hello\\n\\n");\n}).listen(8000);\n')),(0,r.kt)("p",null,"This will create an HTTP server that listens on port 8000 and sends a ",(0,r.kt)("inlineCode",{parentName:"p"},'"hello"')," event to any connected clients."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the client no longer needs to receive events, call the ",(0,r.kt)("inlineCode",{parentName:"li"},"close()")," method on the EventSource object to terminate the connection with the server.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"eventSource.close();\n")),(0,r.kt)("h2",{id:"receive-server-sent-event-notifications"},"Receive Server-Sent Event Notifications"),(0,r.kt)("p",null,"To receive server-sent event notifications using the HTML SSE API, you ",(0,r.kt)("strong",{parentName:"p"},"need to create an ",(0,r.kt)("inlineCode",{parentName:"strong"},"EventSource")," object")," in JavaScript and ",(0,r.kt)("strong",{parentName:"p"},"specify the URL of the server endpoint that will send the events"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As an example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const eventSource = new EventSource("/events");\n\neventSource.onopen = function (event) {\n     console.log("Connected to server");\n};\n\neventSource.onerror = function (event) {\n     console.error("Error occurred:", event);\n};\n\neventSource.onmessage = function (event) {\n     console.log("Received event:", event.data);\n};\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"EventSource"),' object is created with the URL "/events".'),(0,r.kt)("li",{parentName:"ul"},"This could be a relative or absolute URL, depending on the location of the server endpoint that sends the events."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"onopen")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onerror")," properties of the ",(0,r.kt)("inlineCode",{parentName:"li"},"EventSource")," object are used to handle connection-related events."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"onopen")," function is called when the connection is established, and the ",(0,r.kt)("inlineCode",{parentName:"li"},"onerror")," function is called if an error occurs during the connection."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"onmessage")," property is used to handle incoming events."),(0,r.kt)("li",{parentName:"ul"},"When an event is received, the ",(0,r.kt)("inlineCode",{parentName:"li"},"onmessage")," function is called with an ",(0,r.kt)("inlineCode",{parentName:"li"},"Event")," object that contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," of the event in its data property.")),(0,r.kt)("p",null,"Once you have created an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventSource")," object and set up event listeners, the server can start sending events to the client. "),(0,r.kt)("p",null,"Each event is sent as a plain-text string with a specific format: a line starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"data:")," containing the data of the event, followed by an empty line."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"An example of sending an event in Node.js:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const http = require("http");\n\nhttp.createServer(function (req, res) {\n     res.writeHead(200, {"Content-Type": "text/event-stream"});\n\n     setInterval(function () {\n          res.write("data: " + new Date().toISOString() + "\\n\\n");\n     }, 1000);\n}).listen(8000);\n')),(0,r.kt)("p",null,"This will create an HTTP server that sends an event every second containing the current date and time."),(0,r.kt)("h2",{id:"server-side-code-example"},"Server-Side Code Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here's an example of server-side code in Node.js that sends server-sent events to clients:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const http = require("http");\n\nhttp.createServer(function (req, res) {\n     res.writeHead(200, {\n          "Content-Type": "text/event-stream",\n          "Cache-Control": "no-cache",\n          Connection: "keep-alive",\n     });\n\n     setInterval(function () {\n          const event = {\n               id: Date.now(),\n               data: `Event sent at ${new Date().toISOString()}`,\n          };\n\n          res.write(`id: ${event.id}\\n`);\n          res.write(`data: ${event.data}\\n\\n`);\n     }, 1000);\n}).listen(3000);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In this example:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We creates an HTTP server that listens on port ",(0,r.kt)("inlineCode",{parentName:"li"},"3000")," and sends server-sent events to clients every second."),(0,r.kt)("li",{parentName:"ul"},"The server sends events with a unique ID and a message containing the current date and time."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type")," header is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"'text/event-stream'"),", and additional headers are set to ensure that the connection is kept alive and the response is not cached.")),(0,r.kt)("p",null,"You can run this server-side code in a Node.js environment and connect to it from a client-side application using the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventSource")," API to receive and process the server-sent events."))}d.isMDXComponent=!0}}]);