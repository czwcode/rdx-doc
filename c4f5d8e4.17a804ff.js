(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{105:function(n,o,e){"use strict";e.r(o);var r=e(3),a=e(0),i=e.n(a),t=e(211),l=e(398),m=e(230),c=e(25),f=e(423),d=e(106),s=e.n(d),v=[{title:"\u7b80\u5355\u6613\u7528\u3001\u8f7b\u4fbf",imageUrl:"img/undraw_docusaurus_mountain.svg",description:i.a.createElement(i.a.Fragment,null,"Rdx\u53ef\u4ee5\u8f7b\u6613\u7684\u88ab\u7528\u6765\u5f00\u53d1\u5e94\u7528\uff0c\u901a\u8fc7atom \u548ccompute \u53ef\u4ee5\u5feb\u901f\u7684\u8fdb\u884c\u9875\u9762\u7684\u72b6\u6001\u7ba1\u7406\u548c\u7ec4\u4ef6\u95f4\u72b6\u6001\u7684\u590d\u7528\u3002")},{title:"\u57fa\u4e8e\u56fe\u7684\u6570\u636e\u7ed3\u6784\u6765\u7ba1\u7406\u6570\u636e\u6d41",imageUrl:"img/undraw_docusaurus_tree.svg",description:i.a.createElement(i.a.Fragment,null,"\u8ba1\u7b97\u6570\u636e\u548c\u5f02\u6b65\u8bbf\u95ee\u6570\u636e\u90fd\u901a\u8fc7\u7eaf\u51fd\u6570\u6765\u8fdb\u884c\u7ba1\u7406\u3002")},{title:"\u8ba9\u7ec4\u4ef6\u5f00\u53d1\u66f4\u52a0\u805a\u7126",imageUrl:"img/undraw_docusaurus_react.svg",description:i.a.createElement(i.a.Fragment,null,"\u4f7f\u7528rdx\uff0c\u53ef\u4ee5\u907f\u514d\u7531\u4e8e\u9700\u8981\u5171\u4eab\u6570\u636e\u800c\u5bfc\u81f4\u7684\u4ee3\u7801\u8026\u5408\uff0c\u66f4\u65b9\u4fbf\u7684\u8fdb\u884c\u4ee3\u7801\u62c6\u5206\u3002")}];function h(n){var o=n.imageUrl,e=n.title,r=n.description,a=Object(f.a)(o);return i.a.createElement("div",{className:Object(t.a)("col col--4",s.a.feature)},a&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:s.a.featureImage,src:a,alt:e})),i.a.createElement("h3",null,e),i.a.createElement("p",null,r))}o.default=function(){var n=Object(c.default)().siteConfig,o=void 0===n?{}:n;return i.a.createElement(l.a,{title:"Hello from "+o.title,description:"Description will go into a meta tag in <head />"},i.a.createElement("header",{className:Object(t.a)("hero hero--primary",s.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"hero__title"},o.title),i.a.createElement("p",{className:"hero__subtitle"},o.tagline),i.a.createElement("div",{className:s.a.buttons},i.a.createElement(m.a,{className:Object(t.a)("button button--outline button--secondary button--lg",s.a.getStarted),to:Object(f.a)("docs/introduce/coreConcepts")},"Get Started")))),i.a.createElement("main",null,v&&v.length>0&&i.a.createElement("section",{className:s.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},v.map((function(n,o){return i.a.createElement(h,Object(r.a)({key:o},n))})))))))}},398:function(n,o,e){"use strict";e.d(o,"a",(function(){return v}));var r,a,i=e(502),t=e(0),l=e.n(t),m=function(n,o){return Object.defineProperty?Object.defineProperty(n,"raw",{value:o}):n.raw=o,n},c={globalStyle:e(165).a},f=c.globalStyle(r||(r=m(["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    a {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-link-color);\n        text-decoration: var(--ifm-link-decoration);\n      }\n    }\n\n    .menu__link {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color);\n      }\n    }\n\n    .menu__link--active {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color-active);\n      }\n    }\n\n    a.navbar__link {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    a.navbar__link:hover,\n    a.navbar__link--active {\n      color: var(--ifm-navbar-link-hover-color);\n      text-decoration: none;\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n\n    a.table-of-contents__link {\n      color: var(--ifm-toc-link-color);\n    }\n\n    a.table-of-contents__link:hover,\n    a.table-of-contents__link--active {\n      color: var(--ifm-color-primary);\n      text-decoration: none;\n    }\n\n    a.navbar__brand {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    .alert a {\n      &,\n      :hover,\n      :link,\n      :visited {\n        color: var(--ifm-alert-color);\n        text-decoration: underline;\n      }\n    }\n  }\n\n  body {\n    p {\n      font-size: inherit;\n      line-height: inherit;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n\n    ul {\n      list-style: disc;\n    }\n    ol {\n      list-style: decimal;\n    }\n\n    ol ul {\n      list-style-type: circle;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n    ol ol,\n    ul ol {\n      list-style-type: lower-roman;\n    }\n    ul ul,\n    ul ol,\n    ol ol,\n    ol ul {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n    ul ul ol,\n    ul ol ol,\n    ol ul ol,\n    ol ol ol {\n      list-style-type: lower-alpha;\n    }\n  }\n\n  html body {\n    font-family: var(--ifm-font-family-base);\n    color: var(--ifm-font-color-base);\n    line-height: var(--ifm-line-height-base);\n    font-size: var(--ifm-font-size-base);\n  }\n"],["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    a {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-link-color);\n        text-decoration: var(--ifm-link-decoration);\n      }\n    }\n\n    .menu__link {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color);\n      }\n    }\n\n    .menu__link--active {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color-active);\n      }\n    }\n\n    a.navbar__link {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    a.navbar__link:hover,\n    a.navbar__link--active {\n      color: var(--ifm-navbar-link-hover-color);\n      text-decoration: none;\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n\n    a.table-of-contents__link {\n      color: var(--ifm-toc-link-color);\n    }\n\n    a.table-of-contents__link:hover,\n    a.table-of-contents__link--active {\n      color: var(--ifm-color-primary);\n      text-decoration: none;\n    }\n\n    a.navbar__brand {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    .alert a {\n      &,\n      :hover,\n      :link,\n      :visited {\n        color: var(--ifm-alert-color);\n        text-decoration: underline;\n      }\n    }\n  }\n\n  body {\n    p {\n      font-size: inherit;\n      line-height: inherit;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n\n    ul {\n      list-style: disc;\n    }\n    ol {\n      list-style: decimal;\n    }\n\n    ol ul {\n      list-style-type: circle;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n    ol ol,\n    ul ol {\n      list-style-type: lower-roman;\n    }\n    ul ul,\n    ul ol,\n    ol ol,\n    ol ul {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n    ul ul ol,\n    ul ol ol,\n    ol ul ol,\n    ol ol ol {\n      list-style-type: lower-alpha;\n    }\n  }\n\n  html body {\n    font-family: var(--ifm-font-family-base);\n    color: var(--ifm-font-color-base);\n    line-height: var(--ifm-line-height-base);\n    font-size: var(--ifm-font-size-base);\n  }\n"]))),d=c.globalStyle(a||(a=m(["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    code {\n      background-color: var(--ifm-code-background);\n      border-radius: var(--ifm-code-border-radius);\n      color: var(--ifm-code-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      margin: 0;\n      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);\n    }\n    a code {\n      color: inherit;\n    }\n    pre {\n      background-color: var(--ifm-pre-background);\n      border-radius: var(--ifm-pre-border-radius);\n      color: var(--ifm-pre-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      line-height: var(--ifm-pre-line-height);\n      margin-bottom: var(--ifm-spacing-vertical);\n      margin-top: 0;\n      overflow: auto;\n      padding: var(--ifm-pre-padding);\n      word-wrap: normal;\n    }\n    pre code {\n      background-color: transparent;\n      border: 0;\n      display: inline;\n      font-size: 100%;\n      line-height: inherit;\n      margin: 0;\n      overflow: visible;\n      padding: 0;\n      white-space: pre;\n      word-break: normal;\n      word-wrap: normal;\n    }\n    kbd {\n      background-color: var(--ifm-color-emphasis-0);\n      border: 1px solid var(--ifm-color-emphasis-400);\n      border-radius: 0.2rem;\n      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);\n      color: var(--ifm-color-emphasis-800);\n      font: 80% var(--ifm-font-family-monospace);\n      padding: 0.15rem 0.3rem;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      color: var(--ifm-heading-color);\n      font-weight: var(--ifm-heading-font-weight);\n      line-height: var(--ifm-heading-line-height);\n      margin-bottom: var(--ifm-heading-margin-bottom);\n      margin-top: var(--ifm-heading-margin-top);\n    }\n    h1 {\n      font-size: var(--ifm-h1-font-size);\n    }\n    h2 {\n      font-size: var(--ifm-h2-font-size);\n    }\n    h3 {\n      font-size: var(--ifm-h3-font-size);\n    }\n    h4 {\n      font-size: var(--ifm-h4-font-size);\n    }\n    h5 {\n      font-size: var(--ifm-h5-font-size);\n    }\n    h6 {\n      font-size: var(--ifm-h6-font-size);\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n    a {\n      color: var(--ifm-link-color);\n      text-decoration: var(--ifm-link-decoration);\n    }\n    a:hover {\n      color: var(--ifm-link-hover-color);\n      text-decoration: var(--ifm-link-hover-decoration);\n    }\n    a:active,\n    a:hover {\n      outline-width: 0;\n    }\n    a:not([href]) {\n      text-decoration: none;\n    }\n    p {\n      margin-top: 0;\n      margin-bottom: var(--ifm-paragraph-margin-bottom);\n    }\n    table { display: table }\n    blockquote {\n      border-left: 6px solid var(--ifm-color-emphasis-300);\n      color: var(--ifm-blockquote-color);\n      font-size: var(--ifm-blockquote-font-size);\n      margin: 0;\n      margin-bottom: var(--ifm-spacing-vertical);\n      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);\n    }\n    blockquote > :first-child {\n      margin-top: 0;\n    }\n    blockquote > :last-child {\n      margin-bottom: 0;\n    }\n    hr {\n      border-color: var(--ifm-hr-border-color);\n      border-style: solid;\n      border-width: var(--ifm-hr-border-width);\n      box-sizing: content-box;\n      margin: var(--ifm-hr-margin-vertical) 0;\n      overflow: hidden;\n      padding: 0;\n    }\n    hr:before {\n      content: '';\n      display: table;\n    }\n    hr:after {\n      clear: both;\n      content: '';\n      display: table;\n    }\n  }\n"],["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    code {\n      background-color: var(--ifm-code-background);\n      border-radius: var(--ifm-code-border-radius);\n      color: var(--ifm-code-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      margin: 0;\n      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);\n    }\n    a code {\n      color: inherit;\n    }\n    pre {\n      background-color: var(--ifm-pre-background);\n      border-radius: var(--ifm-pre-border-radius);\n      color: var(--ifm-pre-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      line-height: var(--ifm-pre-line-height);\n      margin-bottom: var(--ifm-spacing-vertical);\n      margin-top: 0;\n      overflow: auto;\n      padding: var(--ifm-pre-padding);\n      word-wrap: normal;\n    }\n    pre code {\n      background-color: transparent;\n      border: 0;\n      display: inline;\n      font-size: 100%;\n      line-height: inherit;\n      margin: 0;\n      overflow: visible;\n      padding: 0;\n      white-space: pre;\n      word-break: normal;\n      word-wrap: normal;\n    }\n    kbd {\n      background-color: var(--ifm-color-emphasis-0);\n      border: 1px solid var(--ifm-color-emphasis-400);\n      border-radius: 0.2rem;\n      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);\n      color: var(--ifm-color-emphasis-800);\n      font: 80% var(--ifm-font-family-monospace);\n      padding: 0.15rem 0.3rem;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      color: var(--ifm-heading-color);\n      font-weight: var(--ifm-heading-font-weight);\n      line-height: var(--ifm-heading-line-height);\n      margin-bottom: var(--ifm-heading-margin-bottom);\n      margin-top: var(--ifm-heading-margin-top);\n    }\n    h1 {\n      font-size: var(--ifm-h1-font-size);\n    }\n    h2 {\n      font-size: var(--ifm-h2-font-size);\n    }\n    h3 {\n      font-size: var(--ifm-h3-font-size);\n    }\n    h4 {\n      font-size: var(--ifm-h4-font-size);\n    }\n    h5 {\n      font-size: var(--ifm-h5-font-size);\n    }\n    h6 {\n      font-size: var(--ifm-h6-font-size);\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n    a {\n      color: var(--ifm-link-color);\n      text-decoration: var(--ifm-link-decoration);\n    }\n    a:hover {\n      color: var(--ifm-link-hover-color);\n      text-decoration: var(--ifm-link-hover-decoration);\n    }\n    a:active,\n    a:hover {\n      outline-width: 0;\n    }\n    a:not([href]) {\n      text-decoration: none;\n    }\n    p {\n      margin-top: 0;\n      margin-bottom: var(--ifm-paragraph-margin-bottom);\n    }\n    table { display: table }\n    blockquote {\n      border-left: 6px solid var(--ifm-color-emphasis-300);\n      color: var(--ifm-blockquote-color);\n      font-size: var(--ifm-blockquote-font-size);\n      margin: 0;\n      margin-bottom: var(--ifm-spacing-vertical);\n      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);\n    }\n    blockquote > :first-child {\n      margin-top: 0;\n    }\n    blockquote > :last-child {\n      margin-bottom: 0;\n    }\n    hr {\n      border-color: var(--ifm-hr-border-color);\n      border-style: solid;\n      border-width: var(--ifm-hr-border-width);\n      box-sizing: content-box;\n      margin: var(--ifm-hr-margin-vertical) 0;\n      overflow: hidden;\n      padding: 0;\n    }\n    hr:before {\n      content: '';\n      display: table;\n    }\n    hr:after {\n      clear: both;\n      content: '';\n      display: table;\n    }\n  }\n"])));function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(d,null))}function v(n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,n),l.a.createElement(s,null))}}}]);