"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(31673);const r={slug:"understanding-javascript-memoization-caching-function-results",title:"Boosting JavaScript Performance with Memoization: Caching Function Results",description:"Discover the power of memoization in JavaScript to supercharge your code's speed. Learn how to cache function results efficiently and explore practical examples for maximizing performance.",keywords:["JavaScript memoization","Memoization in JavaScript","Caching function results","Performance optimization in JavaScript","JavaScript code speed","Memoization technique","Efficient function caching","Boosting  JavaScript performance","Speeding up code execution","JavaScript optimization tips"],authors:["CSC"],image:"./understanding-javascript-memoization-caching-function-results.png",tags:["Javascript Tutorials","Web Development","Javascript Fundamentls"]},c=void 0,l={permalink:"/blog/understanding-javascript-memoization-caching-function-results",source:"@site/blog/2023-08-25-understanding-javascript-memoization-caching-function-results/index.mdx",title:"Boosting JavaScript Performance with Memoization: Caching Function Results",description:"Discover the power of memoization in JavaScript to supercharge your code's speed. Learn how to cache function results efficiently and explore practical examples for maximizing performance.",date:"2023-08-25T00:00:00.000Z",formattedDate:"August 25, 2023",tags:[{label:"Javascript Tutorials",permalink:"/blog/tags/javascript-tutorials"},{label:"Web Development",permalink:"/blog/tags/web-development"},{label:"Javascript Fundamentls",permalink:"/blog/tags/javascript-fundamentls"}],readingTime:4.515,hasTruncateMarker:!1,authors:[{name:"CSC EDUCATION",title:"Author",url:"https://cscnotes.netlify.app",imageURL:"https://github.com/CSC.png",key:"CSC"}],frontMatter:{slug:"understanding-javascript-memoization-caching-function-results",title:"Boosting JavaScript Performance with Memoization: Caching Function Results",description:"Discover the power of memoization in JavaScript to supercharge your code's speed. Learn how to cache function results efficiently and explore practical examples for maximizing performance.",keywords:["JavaScript memoization","Memoization in JavaScript","Caching function results","Performance optimization in JavaScript","JavaScript code speed","Memoization technique","Efficient function caching","Boosting  JavaScript performance","Speeding up code execution","JavaScript optimization tips"],authors:["CSC"],image:"./understanding-javascript-memoization-caching-function-results.png",tags:["Javascript Tutorials","Web Development","Javascript Fundamentls"]},prevItem:{title:"Mastering JavaScript Functional Programming: Principles and Practical Usage",permalink:"/blog/javascript-functional-programming-concepts-and-practical-use"},nextItem:{title:"Choosing the Best JavaScript Animation Library: GreenSock (GSAP) vs. Anime.js",permalink:"/blog/javascript-animation-libraries-greensock-gsap-vs-animejs"}},s={image:n(59197).Z,authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Suggested Tutorials \ud83d\udcd1:",id:"suggested-tutorials-",level:4},{value:"What is Memoization?",id:"what-is-memoization",level:2},{value:"Benefits of Memoization",id:"benefits-of-memoization",level:2},{value:"1. Manual Memoization",id:"1-manual-memoization",level:3},{value:"Suggested Tutorials \ud83d\udcd1:",id:"suggested-tutorials--1",level:4},{value:"2. Using Memoization Libraries",id:"2-using-memoization-libraries",level:3},{value:"3. Using Decorators",id:"3-using-decorators",level:3},{value:"Suggested Tutorials \ud83d\udcd1:",id:"suggested-tutorials--2",level:4},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:site",content:"@CSC"}),(0,i.kt)("meta",{name:"twitter:title",content:"Boosting JavaScript Performance with Memoization: Caching Function Results"}),(0,i.kt)("meta",{name:"twitter:description",content:"Learn how to use memoization to cache function results and improve the performance of your JavaScript code."}),(0,i.kt)("meta",{name:"twitter:image",content:"./understanding-javascript-memoization-caching-function-results.png"}),(0,i.kt)("meta",{name:"twitter:image:alt",content:"Understanding JavaScript Memoization: Caching Function Results Banner Image"}),(0,i.kt)("meta",{name:"og:type",content:"article"}),(0,i.kt)("meta",{name:"og:title",content:"Boosting JavaScript Performance with Memoization: Caching Function Results"}),(0,i.kt)("meta",{name:"og:description",content:"Learn how to use memoization to cache function results and improve the performance of your JavaScript code."}),(0,i.kt)("meta",{name:"og:image",content:"./understanding-javascript-memoization-caching-function-results.png"}),(0,i.kt)("meta",{name:"og:image:alt",content:"Understanding JavaScript Memoization: Caching Function Results Banner Image"}),(0,i.kt)("meta",{name:"og:site_name",content:"CSC"}),(0,i.kt)("meta",{name:"og:url",content:"https://cscnotes.netlify.app/blog/understanding-javascript-memoization-caching-function-results"}),(0,i.kt)("link",{rel:"canonical",href:"https://cscnotes.netlify.app/blog/understanding-javascript-memoization-caching-function-results"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:" &quot;Boosting JavaScript Performance with Memoization: Caching Function Results&quot;",src:n(59197).Z,width:"1276",height:"715"})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In the world of optimizing code performance, memoization emerges as a powerful technique. It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. This strategy can drastically improve the execution speed of repetitive calculations in JavaScript. "),(0,i.kt)("p",null,"In this article, we'll dive into the concept of memoization, explore its benefits, and provide practical examples to help you leverage this technique effectively."),(0,i.kt)("h4",{id:"suggested-tutorials-"},"Suggested Tutorials \ud83d\udcd1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cscnotes.netlify.app/javascript/javascript"},(0,i.kt)(o.Z,{color:"#25c2a0",mdxType:"Highlight"},"Learn Javascript From Scratch \ud83e\udd73")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cscnotes.netlify.app/javascript/javascript-html-dom"},(0,i.kt)(o.Z,{color:"#25c2a0",mdxType:"Highlight"},"JavaScript HTML DOM Manipulation"))))),(0,i.kt)("h2",{id:"what-is-memoization"},"What is Memoization?"),(0,i.kt)("p",null,"Memoization is a technique that involves caching the results of expensive function calls and returning the cached result when the same inputs occur again. This strategy can drastically improve the execution speed of repetitive calculations in JavaScript."),(0,i.kt)("h2",{id:"benefits-of-memoization"},"Benefits of Memoization"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Enhanced Performance:")," Memoization significantly improves the speed of function execution, especially for recursive or iterative operations."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Reduced Complexity:")," By caching results, you avoid unnecessary calculations, simplifying your codebase."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Optimized Recursion:")," Memoization can transform exponential time complexity into linear time complexity for recursive algorithms."),(0,i.kt)("h3",{id:"1-manual-memoization"},"1. Manual Memoization"),(0,i.kt)("p",null,"The simplest way to implement memoization is to create a cache object and store the results of function calls in it. The cache object can be a simple JavaScript object or a Map object."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As an example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nconst cache = {};\n\nfunction memoizedAddTo80(n) {\n  if (n in cache) {\n    return cache[n];\n  } else {\n    console.log('long time');\n    cache[n] = n + 80;\n    return cache[n];\n  }\n}\n\nconsole.log('1', memoizedAddTo80(6)); // long time 86\nconsole.log('2', memoizedAddTo80(6)); // 86 we get the cached result for the second call\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We create a cache object to store the results of function calls."),(0,i.kt)("li",{parentName:"ul"},"We check if the cache object contains the result of the function call. If it does, we return the cached result."),(0,i.kt)("li",{parentName:"ul"},"If the cache object doesn't contain the result, we perform the function call, store the result in the cache object, and return the result.")),(0,i.kt)("h4",{id:"suggested-tutorials--1"},"Suggested Tutorials \ud83d\udcd1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cscnotes.netlify.app/javascript/javascript"},(0,i.kt)(o.Z,{color:"#25c2a0",mdxType:"Highlight"},"Learn Javascript From Scratch \ud83e\udd73")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cscnotes.netlify.app/javascript/javascript-html-dom"},(0,i.kt)(o.Z,{color:"#25c2a0",mdxType:"Highlight"},"JavaScript HTML DOM Manipulation"))))),(0,i.kt)("h3",{id:"2-using-memoization-libraries"},"2. Using Memoization Libraries"),(0,i.kt)("p",null,"Libraries like Lodash and Ramda provide built-in memoization functions that automatically cache function results. These libraries also provide a variety of memoization techniques, including memoizing the last function call, memoizing the last N function calls, and memoizing the most recent function call."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As an example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nconst _ = require('lodash');\n\nfunction addTo80(n) {\n  console.log('long time');\n  return n + 80;\n}\n\nconst memoized = _.memoize(addTo80);\n\nconsole.log('1', memoized(5)); // long time 85\nconsole.log('2', memoized(5)); // 85 we get the cached result for the second call\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We import the Lodash library and use the memoize function to memoize the addTo80 function."),(0,i.kt)("li",{parentName:"ul"},"We call the memoized function with the same input twice. The first call takes a long time to execute, but the second call returns the cached result.")),(0,i.kt)("h3",{id:"3-using-decorators"},"3. Using Decorators"),(0,i.kt)("p",null,"Decorators are a new feature in JavaScript that allow you to modify the behavior of a function without changing its implementation. You can use decorators to implement memoization in JavaScript."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As an example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    if (cache[args]) {\n      return cache[args];\n    }\n    const result = fn.apply(this, args);\n    cache[args] = result;\n    return result;\n  };\n}\n\nfunction addTo80(n) {\n  console.log('long time');\n  return n + 80;\n}\n\nconst memoized = memoize(addTo80);\n\nconsole.log('1', memoized(5)); // long time 85\nconsole.log('2', memoized(5)); // 85 we get the cached result for the second call\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We create a memoize function that accepts a function as an argument and returns a memoized version of the function."),(0,i.kt)("li",{parentName:"ul"},"We create a cache object to store the results of function calls."),(0,i.kt)("li",{parentName:"ul"},"We check if the cache object contains the result of the function call. If it does, we return the cached result."),(0,i.kt)("li",{parentName:"ul"},"If the cache object doesn't contain the result, we perform the function call, store the result in the cache object, and return the result.")),(0,i.kt)("h4",{id:"suggested-tutorials--2"},"Suggested Tutorials \ud83d\udcd1:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cscnotes.netlify.app/javascript/javascript"},(0,i.kt)(o.Z,{color:"#25c2a0",mdxType:"Highlight"},"Learn Javascript From Scratch \ud83e\udd73")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cscnotes.netlify.app/javascript/javascript-html-dom"},(0,i.kt)(o.Z,{color:"#25c2a0",mdxType:"Highlight"},"JavaScript HTML DOM Manipulation"))))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Memoization is a powerful technique that can significantly improve the performance of your JavaScript code. It involves caching the results of expensive function calls and returning the cached result when the same inputs occur again. This strategy can drastically improve the execution speed of repetitive calculations in JavaScript. "),(0,i.kt)("p",null,"In this article, we explored the concept of memoization, explored its benefits, and provided practical examples to help you leverage this technique effectively."),(0,i.kt)("p",null,"We hope you found this article helpful. "),(0,i.kt)("p",null,"Happy Coding! \ud83d\ude4c"))}m.isMDXComponent=!0},31673:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294);function i(e){let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},59197:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/understanding-javascript-memoization-caching-function-results-a71c4d4cc90a20c1b9c95434aa79d33c.png"}}]);