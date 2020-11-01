(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return x})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return w}));var r={};n.r(r),n.d(r,"Root",(function(){return h}));var o=n(2),a=n(6),i=n(0),l=n.n(i),c=n(118),s=n(119),u=n(490),p=n(666),d=n(363),f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},m=Object(u.a)({id:"atom",defaultValue:1}),h=function(){return l.a.createElement(p.a,null,l.a.createElement(v,null),l.a.createElement(y,null))},y=function(){var e=Object(d.j)(m);return l.a.createElement("div",null,l.a.createElement("strong",null,"Preview:"),e)},v=function(){var e=f(Object(d.f)(m),2),t=e[0],n=e[1];return l.a.createElement("div",{style:{display:"flex",width:200}},l.a.createElement("strong",null,"Operate: "),l.a.createElement("button",{onClick:function(){n(t+1)}},"+"),l.a.createElement("span",null,t),l.a.createElement("button",{onClick:function(){n((function(e){return e-1}))}},"-"))},b={id:"useRdxValue",title:"useRdxValue(state)"},x={unversionedId:"api/useRdxValue",id:"api/useRdxValue",isDocsHomePage:!1,title:"useRdxValue(state)",description:"\u4f1a\u6839\u636e\u5f53\u524d\u53c2\u6570\u7684 RdxState \u6765\u8fd4\u56de\u76f8\u5e94\u7684\u6570\u636e\uff0c\u5e76\u4e14\u8fd9\u4e2a hooks \u5c06\u4f1a\u8ba2\u9605\u8fd9\u4e2a RdxState \u503c\u7684\u53d8\u5316\u3002",source:"@site/docs/api/useRdxValue.mdx",slug:"/api/useRdxValue",permalink:"/rdx-doc/docs/api/useRdxValue",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/useRdxValue.mdx",version:"current",sidebar:"someSidebar",previous:{title:"useRdxStateLoader(state)",permalink:"/rdx-doc/docs/api/useRdxStateLoader"},next:{title:"useRdxValueLoader(state)",permalink:"/rdx-doc/docs/api/useRdxValueLoader"}},g=[{value:"Example",id:"example",children:[]}],O={rightToc:g};function w(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f1a\u6839\u636e\u5f53\u524d\u53c2\u6570\u7684 RdxState \u6765\u8fd4\u56de\u76f8\u5e94\u7684\u6570\u636e\uff0c\u5e76\u4e14\u8fd9\u4e2a hooks \u5c06\u4f1a\u8ba2\u9605\u8fd9\u4e2a RdxState \u503c\u7684\u53d8\u5316\u3002"),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function useRdxValue<GModel>(state: RdxValue<GModel>): GModel;\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"state: \u53ef\u662f\u662f\u4e00\u4e2a atom \u6216\u8005\u662f\u4e00\u4e2a compute.")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)(s.a,{code:"import React from 'react';\nimport { atom, useRdxState, RdxContext, useRdxValue } from '@alife/rdx';\n\nconst Atom = atom({\n  id: 'atom',\n  defaultValue: 1,\n});\n\nexport const Root = () => {\n  return (\n    <RdxContext>\n      <Counter />\n      <Preview />\n    </RdxContext>\n  );\n};\nconst Preview = () => {\n  const state = useRdxValue(Atom);\n  return (\n    <div>\n      <strong>Preview:</strong>\n      {state}\n    </div>\n  );\n};\nconst Counter = () => {\n  const [state, setState] = useRdxState(Atom);\n  return (\n    <div style={{ display: 'flex', width: 200 }}>\n      <strong>Operate: </strong>\n      {/* \u901a\u8fc7\u4f20\u9012\u65b0\u7684\u503c\u6765\u66f4\u65b0\u6570\u636e */}\n      <button\n        onClick={() => {\n          setState(state + 1);\n        }}\n      >\n        +\n      </button>\n      <span>{state}</span>\n      {/* \u901a\u8fc7\u4f20\u9012updated function \u6765\u66f4\u65b0\u6570\u636e */}\n      <button\n        onClick={() => {\n          setState((state) => {\n            return state - 1;\n          });\n        }}\n      >\n        -\n      </button>\n    </div>\n  );\n};\n",example:r,mdxType:"ExampleCustomizer"}))}w.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(0),o=n.n(r),a=n(133),i=n(134),l=n(135),c=n(120),s=n(127),u=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},p=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};function d(e){var t,n,r=e.language,a=e.replace,i=e.section,l=e.source;if("object"==typeof l&&"default"in l&&(l=l.default),i){var c=new RegExp("// <"+i+">\\s([\\s\\S]*?)\\s// </"+i+">\\s","g");l=l.split(c).reduce((function(e,t,n){return n%2==0?e:e+"\n\n"+t}),"")}if(l=l.replace(/\/\/ <.*?\n/g,""),a)try{for(var d=u(Object.entries(a)),f=d.next();!f.done;f=d.next()){var m=p(f.value,2),h=(c=m[0],m[1]);l=l.replace(new RegExp(c,"gs"),h)}}catch(y){t={error:y}}finally{try{f&&!f.done&&(n=d.return)&&n.call(d)}finally{if(t)throw t.error}}return(l=l.trim()).includes("\n")||(l+="\n"),o.a.createElement("div",{style:{maxHeight:400,overflow:"auto"}},o.a.createElement(s.a.pre,null,o.a.createElement(s.a.code,{children:l,className:"language-"+r,mdxType:"code",originalType:"code",parentName:"pre"})))}var f=n(114),m=n.n(f),h=n(47),y=n.n(h),v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function x(e){var t=e.active,n=e.icon,r=e.tooltipText,a=b(e,["active","icon","tooltipText"]);return o.a.createElement("span",v({},a,{className:m()(y.a.tooltip,y.a.item,t&&y.a.active)}),r&&o.a.createElement("span",{className:y.a["tooltip-text"]},r),n)}function g(e){var t=e.activeToggle,n=e.items,r=e.onClick,a=e.children;return o.a.createElement("section",{style:{position:"relative"},className:m()(y.a.toggler,y.a.header)},o.a.createElement("div",{style:{position:"absolute",left:0}},a),n.map((function(e,n){return o.a.createElement(x,v({active:t===n,key:n,onClick:function(){return r(n)}},e))})))}var O,w=(O=function(e,t){return(O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}O(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n}return w(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){},t.prototype.render=function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children},t}(o.a.Component),E=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},C=function(e){var t=e.code,n=Object(c.getParameters)({files:{"App.tsx":{content:t,isBinary:!1},"index.tsx":{content:'\nimport * as React from "react";\nimport { render } from "react-dom";\nimport * as App from "./App";\nconst rootElement = document.getElementById("root");\nfunction Main() {\n  return (\n    <div>\n      {Object.keys(App).map((item) => {\n        const Component = App[item];\n        return (\n          <div>\n            <h3>{item}</h3>\n            <Component />\n          </div>\n        );\n      })}\n    </div>\n  );\n}\nrender(<Main />, rootElement);\n        ',isBinary:!1},"index.html":{content:'\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta content="text/html; charset=utf-8" http-equiv="Content-type" />\n    <title>React Code Snippet Demo</title>\n  </head>\n  <body>\n    <div id="root" style="margin:20px"></div>\n  </body>\n</html>\n        ',isBinary:!1},"package.json":{content:'\n        {\n          "name": "rdx-sample",\n          "version": "1.0.0",\n          "description": "React and TypeScript example starter project",\n          "keywords": [\n            "typescript",\n            "react",\n            "starter"\n          ],\n          "main": "src/index.tsx",\n          "dependencies": {\n            "@alife/rdx": "0.x",\n            "react": "^16.12.0",\n            "react-dom": "^16.12.0",\n            "react-color": "^2.17.0",\n            "react-scripts": "3.3.0"\n          },\n          "devDependencies": {\n            "@types/react": "16.9.19",\n            "@types/react-dom": "16.9.5",\n            "typescript": "^4.1.0-beta"\n          },\n          "scripts": {\n            "start": "react-scripts start",\n            "build": "react-scripts build",\n            "test": "react-scripts test --env=jsdom",\n            "eject": "react-scripts eject"\n          },\n          "browserslist": [\n            ">0.2%",\n            "not dead",\n            "not ie <= 11",\n            "not op_mini all"\n          ]\n        }',isBinary:!1}}});return o.a.createElement("a",{style:{display:"flex",justifyContent:"center",alignItems:"center"},target:"_blank",href:"https://codesandbox.io/api/v1/sandboxes/define?parameters="+n},o.a.createElement(a.a,{size:24,color:"#23a3ff"}),o.a.createElement("div",{style:{color:"#23a3ff",marginLeft:12}},"Go To Codesandbox"))},k=[{icon:o.a.createElement(i.a,null),name:"Example",tooltipText:"Show example"},{icon:o.a.createElement(l.a,null),name:"Code",tooltipText:"Show source code"}];function S(e){var t=e.code,n=e.example,a=Object(r.useCallback)((function(e){switch(e.name){case"Code":return o.a.createElement(d,{language:"ts",source:t});case"Example":return o.a.createElement(o.a.Fragment,null,Object.keys(n).filter((function(e){return"default"!==e})).map((function(e){var t=n[e];return o.a.createElement("div",{key:e},o.a.createElement("h3",null,e),o.a.createElement(t,null))})));default:return null}}),[]),i=E(o.a.useState(0),2),l=i[0],c=i[1];return o.a.createElement("div",{style:{boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",borderRadius:"4px",padding:12,border:"1px solid lightgrey",marginBottom:12}},o.a.createElement(j,null,o.a.createElement(g,{activeToggle:l,onClick:function(e){c(e)},items:k},o.a.createElement(C,{code:t})),o.a.createElement(a,{name:k[l].name})))}},120:function(e,t,n){"use strict";t.__esModule=!0;var r=n(121);t.getParameters=r.getParameters},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(122);t.getParameters=function(e){return t=JSON.stringify(e),r.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");var t}},122:function(e,t,n){var r,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(e,t){if(!r[e]){r[e]={};for(var n=0;n<e.length;n++)r[e][e.charAt(n)]=n}return r[e][t]}var a={compressToBase64:function(e){if(null==e)return"";var n=a._compress(e,6,(function(e){return t.charAt(e)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:a._decompress(e.length,32,(function(n){return o(t,e.charAt(n))}))},compressToUTF16:function(t){return null==t?"":a._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:a._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=a.compress(e),n=new Uint8Array(2*t.length),r=0,o=t.length;r<o;r++){var i=t.charCodeAt(r);n[2*r]=i>>>8,n[2*r+1]=i%256}return n},decompressFromUint8Array:function(t){if(null==t)return a.decompress(t);for(var n=new Array(t.length/2),r=0,o=n.length;r<o;r++)n[r]=256*t[2*r]+t[2*r+1];var i=[];return n.forEach((function(t){i.push(e(t))})),a.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":a._compress(e,6,(function(e){return n.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),a._decompress(e.length,32,(function(t){return o(n,e.charAt(t))})))},compress:function(t){return a._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,n){if(null==e)return"";var r,o,a,i={},l={},c="",s="",u="",p=2,d=3,f=2,m=[],h=0,y=0;for(a=0;a<e.length;a+=1)if(c=e.charAt(a),Object.prototype.hasOwnProperty.call(i,c)||(i[c]=d++,l[c]=!0),s=u+c,Object.prototype.hasOwnProperty.call(i,s))u=s;else{if(Object.prototype.hasOwnProperty.call(l,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)h<<=1,y==t-1?(y=0,m.push(n(h)),h=0):y++;for(o=u.charCodeAt(0),r=0;r<8;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}else{for(o=1,r=0;r<f;r++)h=h<<1|o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o=0;for(o=u.charCodeAt(0),r=0;r<16;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}0==--p&&(p=Math.pow(2,f),f++),delete l[u]}else for(o=i[u],r=0;r<f;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1;0==--p&&(p=Math.pow(2,f),f++),i[s]=d++,u=String(c)}if(""!==u){if(Object.prototype.hasOwnProperty.call(l,u)){if(u.charCodeAt(0)<256){for(r=0;r<f;r++)h<<=1,y==t-1?(y=0,m.push(n(h)),h=0):y++;for(o=u.charCodeAt(0),r=0;r<8;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}else{for(o=1,r=0;r<f;r++)h=h<<1|o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o=0;for(o=u.charCodeAt(0),r=0;r<16;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1}0==--p&&(p=Math.pow(2,f),f++),delete l[u]}else for(o=i[u],r=0;r<f;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1;0==--p&&(p=Math.pow(2,f),f++)}for(o=2,r=0;r<f;r++)h=h<<1|1&o,y==t-1?(y=0,m.push(n(h)),h=0):y++,o>>=1;for(;;){if(h<<=1,y==t-1){m.push(n(h));break}y++}return m.join("")},decompress:function(e){return null==e?"":""==e?null:a._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,n,r){var o,a,i,l,c,s,u,p=[],d=4,f=4,m=3,h="",y=[],v={val:r(0),position:n,index:1};for(o=0;o<3;o+=1)p[o]=o;for(i=0,c=Math.pow(2,2),s=1;s!=c;)l=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(l>0?1:0)*s,s<<=1;switch(i){case 0:for(i=0,c=Math.pow(2,8),s=1;s!=c;)l=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(l>0?1:0)*s,s<<=1;u=e(i);break;case 1:for(i=0,c=Math.pow(2,16),s=1;s!=c;)l=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(l>0?1:0)*s,s<<=1;u=e(i);break;case 2:return""}for(p[3]=u,a=u,y.push(u);;){if(v.index>t)return"";for(i=0,c=Math.pow(2,m),s=1;s!=c;)l=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(l>0?1:0)*s,s<<=1;switch(u=i){case 0:for(i=0,c=Math.pow(2,8),s=1;s!=c;)l=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(l>0?1:0)*s,s<<=1;p[f++]=e(i),u=f-1,d--;break;case 1:for(i=0,c=Math.pow(2,16),s=1;s!=c;)l=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(l>0?1:0)*s,s<<=1;p[f++]=e(i),u=f-1,d--;break;case 2:return y.join("")}if(0==d&&(d=Math.pow(2,m),m++),p[u])h=p[u];else{if(u!==f)return null;h=a+a.charAt(0)}y.push(h),p[f++]=a+h.charAt(0),a=h,0==--d&&(d=Math.pow(2,m),m++)}}};return a}();void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)},133:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,s=c(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),o.a.createElement("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),o.a.createElement("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),o.a.createElement("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),o.a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),o.a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Codesandbox",t.a=s},134:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,s=c(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),o.a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),o.a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Box",t.a=s},135:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,s=c(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),o.a.createElement("polyline",{points:"16 18 22 12 16 6"}),o.a.createElement("polyline",{points:"8 6 2 12 8 18"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Code",t.a=s}}]);