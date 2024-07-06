"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19604],{19604:(e,n,t)=>{function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}function d(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function g(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"==typeof e}t.d(n,{ZP:()=>fe});var h=d((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),y={changes:function(e,n){return g(n)||h("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&h("changeField"),n},selector:function(e){p(e)||h("selectorType")},handler:function(e){p(e)||g(e)||h("handlerType"),g(e)&&Object.values(e).some((function(e){return!p(e)}))&&h("handlersType")},initial:function(e){var n;e||h("initialIsRequired"),g(e)||h("initialType"),n=e,Object.keys(n).length||h("initialContent")}};function m(e,n){return p(n)?n(e.current):n}function b(e,n){return e.current=s(s({},e.current),n),n}function v(e,n,t){return p(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var w={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.initial(e),y.handler(n);var t={current:e},r=d(v)(t,n),o=d(b)(t),i=d(y.changes)(e),c=d(m)(t);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return y.selector(e),e(t.current)}function a(e){f(r,o,i,c)(e)}return[u,a]}};const O=w;const j={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};const M=function(e){return{}.toString.call(e).includes("Object")};var P={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},E=function(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}((function(e,n){throw new Error(e[n]||e.default)}))(P),k={config:function(e){return e||E("configIsRequired"),M(e)||E("configType"),e.urls?(console.warn(P.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};const R=k;const S=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}};const T=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),i(i({},n),t)};var C={type:"cancelation",msg:"operation is manually canceled"};const V=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(C):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t};var I,L,A=O.create({config:j,isInitialized:!1,resolve:null,reject:null,monaco:null}),D=(L=2,function(e){if(Array.isArray(e))return e}(I=A)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}}(I,L)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(I,L)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),q=D[0],x=D[1];function N(e){return document.body.appendChild(e)}function z(e){var n,t,r=q((function(e){return{config:e.config,reject:e.reject}})),o=(n="".concat(r.config.paths.vs,"/loader.js"),t=document.createElement("script"),n&&(t.src=n),t);return o.onload=function(){return e()},o.onerror=r.reject,o}function F(){var e=q((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){_(n),e.resolve(n)}),(function(n){e.reject(n)}))}function _(e){q().monaco||x({monaco:e})}var U=new Promise((function(e,n){return x({resolve:e,reject:n})})),B={config:function(e){var n=R.config(e),t=n.monaco,r=c(n,["monaco"]);x((function(e){return{config:T(e.config,r),monaco:t}}))},init:function(){var e=q((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(x({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),V(U);if(window.monaco&&window.monaco.editor)return _(window.monaco),e.resolve(window.monaco),V(U);S(N,z)(F)}return V(U)},__getMonacoInstance:function(){return q((function(e){return e.monaco}))}};const W=B;var Y=t(67294),Z=t(45697),$=t.n(Z);function G(){return G=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)}const H={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};const J=function({content:e}){return Y.createElement("div",{style:H},e)},K={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Q({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:c}){return Y.createElement("section",G({style:{...K.wrapper,width:e,height:n}},c),!t&&Y.createElement(J,{content:r}),Y.createElement("div",{ref:o,style:{...K.fullWidth,...!t&&K.hide},className:i}))}Q.propTypes={width:$().oneOfType([$().number,$().string]).isRequired,height:$().oneOfType([$().number,$().string]).isRequired,loading:$().oneOfType([$().element,$().string]).isRequired,isEditorReady:$().bool.isRequired,className:$().string,wrapperProps:$().object};const X=Q;const ee=(0,Y.memo)(X);const ne=function(e){(0,Y.useEffect)(e,[])};const te=function(e,n,t=!0){const r=(0,Y.useRef)(!0);(0,Y.useEffect)(r.current||!t?()=>{r.current=!1}:e,n)};function re(){}function oe(e,n,t,r){return function(e,n){return e.editor.getModel(ie(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r&&ie(e,r))}(e,n,t,r)}function ie(e,n){return e.Uri.parse(n)}function ce({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:u,keepCurrentModifiedModel:a,theme:l,loading:s,options:f,height:d,width:g,className:p,wrapperProps:h,beforeMount:y,onMount:m}){const[b,v]=(0,Y.useState)(!1),[w,O]=(0,Y.useState)(!0),j=(0,Y.useRef)(null),M=(0,Y.useRef)(null),P=(0,Y.useRef)(null),E=(0,Y.useRef)(m),k=(0,Y.useRef)(y);ne((()=>{const e=W.init();return e.then((e=>(M.current=e)&&O(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){const e=j.current.getModel();var n,t;u||null===(n=e.original)||void 0===n||n.dispose();a||null===(t=e.modified)||void 0===t||t.dispose();j.current.dispose()}():e.cancel()})),te((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],b),te((()=>{j.current.getModel().original.setValue(e)}),[e],b),te((()=>{const{original:e,modified:n}=j.current.getModel();M.current.editor.setModelLanguage(e,r||t),M.current.editor.setModelLanguage(n,o||t)}),[t,r,o],b),te((()=>{M.current.editor.setTheme(l)}),[l],b),te((()=>{j.current.updateOptions(f)}),[f],b);const R=(0,Y.useCallback)((()=>{k.current(M.current);const u=oe(M.current,e,r||t,i),a=oe(M.current,n,o||t,c);j.current.setModel({original:u,modified:a})}),[t,n,o,e,r,i,c]),S=(0,Y.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...f}),R(),M.current.editor.setTheme(l),v(!0)}),[f,l,R]);return(0,Y.useEffect)((()=>{b&&E.current(j.current,M.current)}),[b]),(0,Y.useEffect)((()=>{!w&&!b&&S()}),[w,b,S]),Y.createElement(ee,{width:g,height:d,isEditorReady:b,loading:s,_ref:P,className:p,wrapperProps:h})}ce.propTypes={original:$().string,modified:$().string,language:$().string,originalLanguage:$().string,modifiedLanguage:$().string,originalModelPath:$().string,modifiedModelPath:$().string,keepCurrentOriginalModel:$().bool,keepCurrentModifiedModel:$().bool,theme:$().string,loading:$().oneOfType([$().element,$().string]),options:$().object,width:$().oneOfType([$().number,$().string]),height:$().oneOfType([$().number,$().string]),className:$().string,wrapperProps:$().object,beforeMount:$().func,onMount:$().func},ce.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:re,onMount:re};const ue=function(e){const n=(0,Y.useRef)();return(0,Y.useEffect)((()=>{n.current=e}),[e]),n.current},ae=new Map;function le({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:c,line:u,loading:a,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:g,height:p,className:h,wrapperProps:y,beforeMount:m,onMount:b,onChange:v,onValidate:w}){const[O,j]=(0,Y.useState)(!1),[M,P]=(0,Y.useState)(!0),E=(0,Y.useRef)(null),k=(0,Y.useRef)(null),R=(0,Y.useRef)(null),S=(0,Y.useRef)(b),T=(0,Y.useRef)(m),C=(0,Y.useRef)(null),V=(0,Y.useRef)(r),I=ue(i),L=(0,Y.useRef)(!1);ne((()=>{const e=W.init();return e.then((e=>(E.current=e)&&P(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>k.current?function(){var e,n;null===(e=C.current)||void 0===e||e.dispose(),d?f&&ae.set(i,k.current.saveViewState()):null===(n=k.current.getModel())||void 0===n||n.dispose();k.current.dispose()}():e.cancel()})),te((()=>{const t=oe(E.current,e||r,n||o,i);t!==k.current.getModel()&&(f&&ae.set(I,k.current.saveViewState()),k.current.setModel(t),f&&k.current.restoreViewState(ae.get(i)))}),[i],O),te((()=>{k.current.updateOptions(l)}),[l],O),te((()=>{k.current.getOption(E.current.editor.EditorOption.readOnly)?k.current.setValue(r):r!==k.current.getValue()&&(k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),k.current.pushUndoStop())}),[r],O),te((()=>{E.current.editor.setModelLanguage(k.current.getModel(),o)}),[o],O),te((()=>{void 0!==u&&k.current.revealLine(u)}),[u],O),te((()=>{E.current.editor.setTheme(c)}),[c],O);const A=(0,Y.useCallback)((()=>{if(!L.current){T.current(E.current);const u=i||t,a=oe(E.current,r||e,n||o,u);k.current=E.current.editor.create(R.current,{model:a,automaticLayout:!0,...l},s),f&&k.current.restoreViewState(ae.get(u)),E.current.editor.setTheme(c),j(!0),L.current=!0}}),[e,n,t,r,o,i,l,s,f,c]);return(0,Y.useEffect)((()=>{O&&S.current(k.current,E.current)}),[O]),(0,Y.useEffect)((()=>{!M&&!O&&A()}),[M,O,A]),V.current=r,(0,Y.useEffect)((()=>{var e,n;O&&v&&(null===(e=C.current)||void 0===e||e.dispose(),C.current=null===(n=k.current)||void 0===n?void 0:n.onDidChangeModelContent((e=>{v(k.current.getValue(),e)})))}),[O,v]),(0,Y.useEffect)((()=>{if(O){const e=E.current.editor.onDidChangeMarkers((e=>{var n;const t=null===(n=k.current.getModel())||void 0===n?void 0:n.uri;if(t){if(e.find((e=>e.path===t.path))){const e=E.current.editor.getModelMarkers({resource:t});null==w||w(e)}}}));return()=>{null==e||e.dispose()}}}),[O,w]),Y.createElement(ee,{width:g,height:p,isEditorReady:O,loading:a,_ref:R,className:h,wrapperProps:y})}le.propTypes={defaultValue:$().string,defaultPath:$().string,defaultLanguage:$().string,value:$().string,language:$().string,path:$().string,theme:$().string,line:$().number,loading:$().oneOfType([$().element,$().string]),options:$().object,overrideServices:$().object,saveViewState:$().bool,keepCurrentModel:$().bool,width:$().oneOfType([$().number,$().string]),height:$().oneOfType([$().number,$().string]),className:$().string,wrapperProps:$().object,beforeMount:$().func,onMount:$().func,onChange:$().func,onValidate:$().func},le.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:re,onMount:re,onValidate:re};const se=le;const fe=(0,Y.memo)(se)}}]);