(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return x})),n.d(t,"metadata",(function(){return E})),n.d(t,"rightToc",(function(){return C})),n.d(t,"default",(function(){return O}));var r={};n.r(r),n.d(r,"AtomBgControlSample",(function(){return b}));var o=n(2),a=n(6),i=n(0),l=n.n(i),c=n(118),s=n(119),d=n(490),u=n(666),m=n(363),p=n(427),f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},v=Object(d.a)({id:"color",defaultValue:"white"}),b=function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,"\u70b9\u51fb\u50cfdevtools\u53d1\u9001\u6d88\u606f"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(y,null),l.a.createElement(g,null)))},y=function(){var e=Object(m.j)(v);return l.a.createElement("div",null,l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("div",{style:{width:435,height:435,background:e,border:"1px solid grey"}}),l.a.createElement("div",{style:{position:"absolute",top:10,left:10}},l.a.createElement(h,null))))},h=function(){var e=Object(m.e)(v);return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex"}},["#fff","#000"].map((function(t){return l.a.createElement("div",{key:t,onClick:function(){e(t)},style:{marginLeft:12,border:"1px solid grey",background:t,width:32,height:32,borderRadius:"50%"}})}))),l.a.createElement("div",{style:{color:"orange"}},"\u70b9\u51fb\u6211\u53ef\u4ee5\u5207\u6362\u753b\u5e03\u989c\u8272\u54e6!!"))},g=function(){var e=f(Object(m.f)(v),2),t=e[0],n=e[1];return l.a.createElement(p.a,{color:t,onChange:function(e){var t=e.rgb,r=t.a,o=t.r,a=t.g,i=t.b;n("rgba("+o+","+a+","+i+","+r)}})},x={id:"Atom",title:"Atom"},E={unversionedId:"tutorial/Atom",id:"tutorial/Atom",isDocsHomePage:!1,title:"Atom",description:"Atom \u6301\u6709\u5e94\u7528\u7684\u5b9e\u9645\u72b6\u6001\u3002\u53ef\u4ee5\u901a\u8fc7 Atom \u6765\u8fdb\u884c\u7ec4\u4ef6\u95f4\u7684\u72b6\u6001\u7684\u5171\u4eab\u3002",source:"@site/docs/tutorial/atom.mdx",slug:"/tutorial/Atom",permalink:"/rdx-doc/docs/tutorial/Atom",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial/atom.mdx",version:"current",sidebar:"someSidebar",previous:{title:"\u5982\u4f55\u5b89\u88c5\uff1f",permalink:"/rdx-doc/docs/introduce/installation"},next:{title:"Compute",permalink:"/rdx-doc/docs/tutorial/Compute"}},C=[{value:"\u901a\u8fc7atom\u8fdb\u884c\u7ec4\u4ef6\u95f4\u72b6\u6001\u7684\u5171\u4eab",id:"\u901a\u8fc7atom\u8fdb\u884c\u7ec4\u4ef6\u95f4\u72b6\u6001\u7684\u5171\u4eab",children:[]},{value:"Sample",id:"sample",children:[]}],j={rightToc:C};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Atom \u6301\u6709\u5e94\u7528\u7684\u5b9e\u9645\u72b6\u6001\u3002\u53ef\u4ee5\u901a\u8fc7 Atom \u6765\u8fdb\u884c\u7ec4\u4ef6\u95f4\u7684\u72b6\u6001\u7684\u5171\u4eab\u3002"),Object(c.b)("h3",{id:"\u901a\u8fc7atom\u8fdb\u884c\u7ec4\u4ef6\u95f4\u72b6\u6001\u7684\u5171\u4eab"},"\u901a\u8fc7atom\u8fdb\u884c\u7ec4\u4ef6\u95f4\u72b6\u6001\u7684\u5171\u4eab"),Object(c.b)("p",null,"\u901a\u8fc7atom()\u65b9\u6cd5\u6765\u5efa\u7acb\u4e00\u4e2a\u72b6\u6001\u8282\u70b9\uff0c\u72b6\u6001\u8282\u70b9\u9700\u8981\u4e00\u4e2a\u552f\u4e00\u7684id\uff0c\u5e76\u4e14\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u503c\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const ColorAtom = atom({\n  id: 'color',\n  defaultValue: 'white',\n});\n")),Object(c.b)("p",null,"\u901a\u8fc7 useRdxValue \u8fd9\u4e2ahooks\u53ef\u4ee5\u83b7\u53d6\u5230ColorAtom\u4e2d\u7684\u72b6\u6001\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Canvas = () => {\n  const color = useRdxValue(ColorAtom);\n  return (\n    <div>\n      <div style={{ position: 'relative' }}>\n        <div\n          style={{\n            width: 435,\n            height: 435,\n            background: color,\n            border: '1px solid grey',\n          }}\n        />\n        <div style={{ position: 'absolute', top: 10, left: 10 }}>\n          <ThemeEditor />\n        </div>\n      </div>\n    </div>\n  );\n};\n")),Object(c.b)("p",null,"\u901a\u8fc7useRdxSetter \u8fd9\u4e2ahooks \u53ef\u4ee5\u83b7\u53d6\u5230\u4e00\u4e2asetter\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8bbe\u7f6eColorAtom\u7684\u72b6\u6001\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const ThemeEditor = () => {\n  const setColor = useRdxSetter(ColorAtom);\n  const dataSource = ['#fff', '#000'];\n  return (\n    <div>\n      <div style={{ display: 'flex' }}>\n        {dataSource.map((item) => (\n          <div\n            onClick={() => {\n              setColor(item);\n            }}\n            style={{\n              marginLeft: 12,\n              border: '1px solid grey',\n              background: item,\n              width: 32,\n              height: 32,\n              borderRadius: '50%',\n            }}\n          ></div>\n        ))}\n      </div>\n      <div style={{ color: 'orange' }}>\u70b9\u51fb\u6211\u53ef\u4ee5\u5207\u6362\u753b\u5e03\u989c\u8272\u54e6!!</div>\n    </div>\n  );\n};\n")),Object(c.b)("p",null,"\u901a\u8fc7 useRdxState \u53ef\u4ee5\u540c\u65f6\u83b7\u53d6\u5230ColorAtom\u8282\u70b9\u7684\u72b6\u6001\u548csetter(\u8bbe\u7f6e\u5668)\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const ColorEditor = () => {\n  const [color, setColor] = useRdxState(ColorAtom);\n  return (\n    <SketchPicker\n      color={color}\n      onChange={(v) => {\n        const { a, r, g, b } = v.rgb;\n        setColor(`rgba(${r},${g},${b},${a}`);\n      }}\n    />\n  );\n};\n")),Object(c.b)("h3",{id:"sample"},"Sample"),Object(c.b)(s.a,{code:"import React from 'react';\nimport {\n  atom,\n  RdxContext,\n  useRdxSetter,\n  useRdxState,\n  useRdxValue,\n} from '@alife/rdx';\nimport { SketchPicker } from 'react-color';\nconst ColorAtom = atom({\n  id: 'color',\n  defaultValue: 'white',\n});\n\nexport const AtomBgControlSample = () => {\n  return (\n    <RdxContext>\n      <div>\u70b9\u51fb\u50cfdevtools\u53d1\u9001\u6d88\u606f</div>\n      <div style={{ display: 'flex' }}>\n        <Canvas />\n        <ColorEditor />\n      </div>\n    </RdxContext>\n  );\n};\n\nconst Canvas = () => {\n  const color = useRdxValue(ColorAtom);\n  return (\n    <div>\n      <div style={{ position: 'relative' }}>\n        <div\n          style={{\n            width: 435,\n            height: 435,\n            background: color,\n            border: '1px solid grey',\n          }}\n        />\n        <div style={{ position: 'absolute', top: 10, left: 10 }}>\n          <ThemeEditor />\n        </div>\n      </div>\n    </div>\n  );\n};\nconst ThemeEditor = () => {\n  const setColor = useRdxSetter(ColorAtom);\n  const dataSource = ['#fff', '#000'];\n  return (\n    <div>\n      <div style={{ display: 'flex' }}>\n        {dataSource.map((item) => (\n          <div\n            key={item}\n            onClick={() => {\n              setColor(item);\n            }}\n            style={{\n              marginLeft: 12,\n              border: '1px solid grey',\n              background: item,\n              width: 32,\n              height: 32,\n              borderRadius: '50%',\n            }}\n          ></div>\n        ))}\n      </div>\n      <div style={{ color: 'orange' }}>\u70b9\u51fb\u6211\u53ef\u4ee5\u5207\u6362\u753b\u5e03\u989c\u8272\u54e6!!</div>\n    </div>\n  );\n};\n\nconst ColorEditor = () => {\n  const [color, setColor] = useRdxState(ColorAtom);\n  return (\n    <SketchPicker\n      color={color}\n      onChange={(v) => {\n        const { a, r, g, b } = v.rgb;\n        setColor(`rgba(${r},${g},${b},${a}`);\n      }}\n    />\n  );\n};\n",example:r,mdxType:"ExampleCustomizer"}))}O.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(0),o=n.n(r),a=n(133),i=n(134),l=n(135),c=n(120),s=n(127),d=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},u=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i};function m(e){var t,n,r=e.language,a=e.replace,i=e.section,l=e.source;if("object"==typeof l&&"default"in l&&(l=l.default),i){var c=new RegExp("// <"+i+">\\s([\\s\\S]*?)\\s// </"+i+">\\s","g");l=l.split(c).reduce((function(e,t,n){return n%2==0?e:e+"\n\n"+t}),"")}if(l=l.replace(/\/\/ <.*?\n/g,""),a)try{for(var m=d(Object.entries(a)),p=m.next();!p.done;p=m.next()){var f=u(p.value,2),v=(c=f[0],f[1]);l=l.replace(new RegExp(c,"gs"),v)}}catch(b){t={error:b}}finally{try{p&&!p.done&&(n=m.return)&&n.call(m)}finally{if(t)throw t.error}}return(l=l.trim()).includes("\n")||(l+="\n"),o.a.createElement("div",{style:{maxHeight:400,overflow:"auto"}},o.a.createElement(s.a.pre,null,o.a.createElement(s.a.code,{children:l,className:"language-"+r,mdxType:"code",originalType:"code",parentName:"pre"})))}var p=n(114),f=n.n(p),v=n(47),b=n.n(v),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function g(e){var t=e.active,n=e.icon,r=e.tooltipText,a=h(e,["active","icon","tooltipText"]);return o.a.createElement("span",y({},a,{className:f()(b.a.tooltip,b.a.item,t&&b.a.active)}),r&&o.a.createElement("span",{className:b.a["tooltip-text"]},r),n)}function x(e){var t=e.activeToggle,n=e.items,r=e.onClick,a=e.children;return o.a.createElement("section",{style:{position:"relative"},className:f()(b.a.toggler,b.a.header)},o.a.createElement("div",{style:{position:"absolute",left:0}},a),n.map((function(e,n){return o.a.createElement(g,y({active:t===n,key:n,onClick:function(){return r(n)}},e))})))}var E,C=(E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n}return C(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){},t.prototype.render=function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children},t}(o.a.Component),O=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},w=function(e){var t=e.code,n=Object(c.getParameters)({files:{"App.tsx":{content:t,isBinary:!1},"index.tsx":{content:'\nimport * as React from "react";\nimport { render } from "react-dom";\nimport * as App from "./App";\nconst rootElement = document.getElementById("root");\nfunction Main() {\n  return (\n    <div>\n      {Object.keys(App).map((item) => {\n        const Component = App[item];\n        return (\n          <div>\n            <h3>{item}</h3>\n            <Component />\n          </div>\n        );\n      })}\n    </div>\n  );\n}\nrender(<Main />, rootElement);\n        ',isBinary:!1},"index.html":{content:'\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta content="text/html; charset=utf-8" http-equiv="Content-type" />\n    <title>React Code Snippet Demo</title>\n  </head>\n  <body>\n    <div id="root" style="margin:20px"></div>\n  </body>\n</html>\n        ',isBinary:!1},"package.json":{content:'\n        {\n          "name": "rdx-sample",\n          "version": "1.0.0",\n          "description": "React and TypeScript example starter project",\n          "keywords": [\n            "typescript",\n            "react",\n            "starter"\n          ],\n          "main": "src/index.tsx",\n          "dependencies": {\n            "@alife/rdx": "0.x",\n            "react": "^16.12.0",\n            "react-dom": "^16.12.0",\n            "react-color": "^2.17.0",\n            "react-scripts": "3.3.0"\n          },\n          "devDependencies": {\n            "@types/react": "16.9.19",\n            "@types/react-dom": "16.9.5",\n            "typescript": "^4.1.0-beta"\n          },\n          "scripts": {\n            "start": "react-scripts start",\n            "build": "react-scripts build",\n            "test": "react-scripts test --env=jsdom",\n            "eject": "react-scripts eject"\n          },\n          "browserslist": [\n            ">0.2%",\n            "not dead",\n            "not ie <= 11",\n            "not op_mini all"\n          ]\n        }',isBinary:!1}}});return o.a.createElement("a",{style:{display:"flex",justifyContent:"center",alignItems:"center"},target:"_blank",href:"https://codesandbox.io/api/v1/sandboxes/define?parameters="+n},o.a.createElement(a.a,{size:24,color:"#23a3ff"}),o.a.createElement("div",{style:{color:"#23a3ff",marginLeft:12}},"Go To Codesandbox"))},S=[{icon:o.a.createElement(i.a,null),name:"Example",tooltipText:"Show example"},{icon:o.a.createElement(l.a,null),name:"Code",tooltipText:"Show source code"}];function k(e){var t=e.code,n=e.example,a=Object(r.useCallback)((function(e){switch(e.name){case"Code":return o.a.createElement(m,{language:"ts",source:t});case"Example":return o.a.createElement(o.a.Fragment,null,Object.keys(n).filter((function(e){return"default"!==e})).map((function(e){var t=n[e];return o.a.createElement("div",{key:e},o.a.createElement("h3",null,e),o.a.createElement(t,null))})));default:return null}}),[]),i=O(o.a.useState(0),2),l=i[0],c=i[1];return o.a.createElement("div",{style:{boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",borderRadius:"4px",padding:12,border:"1px solid lightgrey",marginBottom:12}},o.a.createElement(j,null,o.a.createElement(x,{activeToggle:l,onClick:function(e){c(e)},items:S},o.a.createElement(w,{code:t})),o.a.createElement(a,{name:S[l].name})))}}}]);