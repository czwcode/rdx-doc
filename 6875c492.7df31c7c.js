(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{398:function(n,e,a){"use strict";a.d(e,"a",(function(){return v}));var r,o,t=a(502),i=a(0),l=a.n(i),m=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},c={globalStyle:a(165).a},s=c.globalStyle(r||(r=m(["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    a {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-link-color);\n        text-decoration: var(--ifm-link-decoration);\n      }\n    }\n\n    .menu__link {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color);\n      }\n    }\n\n    .menu__link--active {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color-active);\n      }\n    }\n\n    a.navbar__link {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    a.navbar__link:hover,\n    a.navbar__link--active {\n      color: var(--ifm-navbar-link-hover-color);\n      text-decoration: none;\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n\n    a.table-of-contents__link {\n      color: var(--ifm-toc-link-color);\n    }\n\n    a.table-of-contents__link:hover,\n    a.table-of-contents__link--active {\n      color: var(--ifm-color-primary);\n      text-decoration: none;\n    }\n\n    a.navbar__brand {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    .alert a {\n      &,\n      :hover,\n      :link,\n      :visited {\n        color: var(--ifm-alert-color);\n        text-decoration: underline;\n      }\n    }\n  }\n\n  body {\n    p {\n      font-size: inherit;\n      line-height: inherit;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n\n    ul {\n      list-style: disc;\n    }\n    ol {\n      list-style: decimal;\n    }\n\n    ol ul {\n      list-style-type: circle;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n    ol ol,\n    ul ol {\n      list-style-type: lower-roman;\n    }\n    ul ul,\n    ul ol,\n    ol ol,\n    ol ul {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n    ul ul ol,\n    ul ol ol,\n    ol ul ol,\n    ol ol ol {\n      list-style-type: lower-alpha;\n    }\n  }\n\n  html body {\n    font-family: var(--ifm-font-family-base);\n    color: var(--ifm-font-color-base);\n    line-height: var(--ifm-line-height-base);\n    font-size: var(--ifm-font-size-base);\n  }\n"],["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    a {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-link-color);\n        text-decoration: var(--ifm-link-decoration);\n      }\n    }\n\n    .menu__link {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color);\n      }\n    }\n\n    .menu__link--active {\n      &,\n      :link,\n      :hover,\n      :visited {\n        color: var(--ifm-menu-color-active);\n      }\n    }\n\n    a.navbar__link {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    a.navbar__link:hover,\n    a.navbar__link--active {\n      color: var(--ifm-navbar-link-hover-color);\n      text-decoration: none;\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n\n    a.table-of-contents__link {\n      color: var(--ifm-toc-link-color);\n    }\n\n    a.table-of-contents__link:hover,\n    a.table-of-contents__link--active {\n      color: var(--ifm-color-primary);\n      text-decoration: none;\n    }\n\n    a.navbar__brand {\n      color: var(--ifm-navbar-link-color);\n    }\n\n    .alert a {\n      &,\n      :hover,\n      :link,\n      :visited {\n        color: var(--ifm-alert-color);\n        text-decoration: underline;\n      }\n    }\n  }\n\n  body {\n    p {\n      font-size: inherit;\n      line-height: inherit;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n\n    ul {\n      list-style: disc;\n    }\n    ol {\n      list-style: decimal;\n    }\n\n    ol ul {\n      list-style-type: circle;\n    }\n\n    ul,\n    ol {\n      margin-bottom: var(--ifm-list-margin);\n      margin-top: 0;\n      padding-left: var(--ifm-list-left-padding);\n    }\n    ol ol,\n    ul ol {\n      list-style-type: lower-roman;\n    }\n    ul ul,\n    ul ol,\n    ol ol,\n    ol ul {\n      margin-bottom: 0;\n      margin-top: 0;\n    }\n    ul ul ol,\n    ul ol ol,\n    ol ul ol,\n    ol ol ol {\n      list-style-type: lower-alpha;\n    }\n  }\n\n  html body {\n    font-family: var(--ifm-font-family-base);\n    color: var(--ifm-font-color-base);\n    line-height: var(--ifm-line-height-base);\n    font-size: var(--ifm-font-size-base);\n  }\n"]))),d=c.globalStyle(o||(o=m(["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    code {\n      background-color: var(--ifm-code-background);\n      border-radius: var(--ifm-code-border-radius);\n      color: var(--ifm-code-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      margin: 0;\n      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);\n    }\n    a code {\n      color: inherit;\n    }\n    pre {\n      background-color: var(--ifm-pre-background);\n      border-radius: var(--ifm-pre-border-radius);\n      color: var(--ifm-pre-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      line-height: var(--ifm-pre-line-height);\n      margin-bottom: var(--ifm-spacing-vertical);\n      margin-top: 0;\n      overflow: auto;\n      padding: var(--ifm-pre-padding);\n      word-wrap: normal;\n    }\n    pre code {\n      background-color: transparent;\n      border: 0;\n      display: inline;\n      font-size: 100%;\n      line-height: inherit;\n      margin: 0;\n      overflow: visible;\n      padding: 0;\n      white-space: pre;\n      word-break: normal;\n      word-wrap: normal;\n    }\n    kbd {\n      background-color: var(--ifm-color-emphasis-0);\n      border: 1px solid var(--ifm-color-emphasis-400);\n      border-radius: 0.2rem;\n      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);\n      color: var(--ifm-color-emphasis-800);\n      font: 80% var(--ifm-font-family-monospace);\n      padding: 0.15rem 0.3rem;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      color: var(--ifm-heading-color);\n      font-weight: var(--ifm-heading-font-weight);\n      line-height: var(--ifm-heading-line-height);\n      margin-bottom: var(--ifm-heading-margin-bottom);\n      margin-top: var(--ifm-heading-margin-top);\n    }\n    h1 {\n      font-size: var(--ifm-h1-font-size);\n    }\n    h2 {\n      font-size: var(--ifm-h2-font-size);\n    }\n    h3 {\n      font-size: var(--ifm-h3-font-size);\n    }\n    h4 {\n      font-size: var(--ifm-h4-font-size);\n    }\n    h5 {\n      font-size: var(--ifm-h5-font-size);\n    }\n    h6 {\n      font-size: var(--ifm-h6-font-size);\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n    a {\n      color: var(--ifm-link-color);\n      text-decoration: var(--ifm-link-decoration);\n    }\n    a:hover {\n      color: var(--ifm-link-hover-color);\n      text-decoration: var(--ifm-link-hover-decoration);\n    }\n    a:active,\n    a:hover {\n      outline-width: 0;\n    }\n    a:not([href]) {\n      text-decoration: none;\n    }\n    p {\n      margin-top: 0;\n      margin-bottom: var(--ifm-paragraph-margin-bottom);\n    }\n    table { display: table }\n    blockquote {\n      border-left: 6px solid var(--ifm-color-emphasis-300);\n      color: var(--ifm-blockquote-color);\n      font-size: var(--ifm-blockquote-font-size);\n      margin: 0;\n      margin-bottom: var(--ifm-spacing-vertical);\n      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);\n    }\n    blockquote > :first-child {\n      margin-top: 0;\n    }\n    blockquote > :last-child {\n      margin-bottom: 0;\n    }\n    hr {\n      border-color: var(--ifm-hr-border-color);\n      border-style: solid;\n      border-width: var(--ifm-hr-border-width);\n      box-sizing: content-box;\n      margin: var(--ifm-hr-margin-vertical) 0;\n      overflow: hidden;\n      padding: 0;\n    }\n    hr:before {\n      content: '';\n      display: table;\n    }\n    hr:after {\n      clear: both;\n      content: '';\n      display: table;\n    }\n  }\n"],["\n  // \u653e\u5230 body \u5185\u589e\u52a0 CSS \u4f18\u5148\u7ea7\n  body {\n    code {\n      background-color: var(--ifm-code-background);\n      border-radius: var(--ifm-code-border-radius);\n      color: var(--ifm-code-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      margin: 0;\n      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);\n    }\n    a code {\n      color: inherit;\n    }\n    pre {\n      background-color: var(--ifm-pre-background);\n      border-radius: var(--ifm-pre-border-radius);\n      color: var(--ifm-pre-color);\n      font-family: var(--ifm-font-family-monospace);\n      font-size: var(--ifm-code-font-size);\n      line-height: var(--ifm-pre-line-height);\n      margin-bottom: var(--ifm-spacing-vertical);\n      margin-top: 0;\n      overflow: auto;\n      padding: var(--ifm-pre-padding);\n      word-wrap: normal;\n    }\n    pre code {\n      background-color: transparent;\n      border: 0;\n      display: inline;\n      font-size: 100%;\n      line-height: inherit;\n      margin: 0;\n      overflow: visible;\n      padding: 0;\n      white-space: pre;\n      word-break: normal;\n      word-wrap: normal;\n    }\n    kbd {\n      background-color: var(--ifm-color-emphasis-0);\n      border: 1px solid var(--ifm-color-emphasis-400);\n      border-radius: 0.2rem;\n      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);\n      color: var(--ifm-color-emphasis-800);\n      font: 80% var(--ifm-font-family-monospace);\n      padding: 0.15rem 0.3rem;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n      color: var(--ifm-heading-color);\n      font-weight: var(--ifm-heading-font-weight);\n      line-height: var(--ifm-heading-line-height);\n      margin-bottom: var(--ifm-heading-margin-bottom);\n      margin-top: var(--ifm-heading-margin-top);\n    }\n    h1 {\n      font-size: var(--ifm-h1-font-size);\n    }\n    h2 {\n      font-size: var(--ifm-h2-font-size);\n    }\n    h3 {\n      font-size: var(--ifm-h3-font-size);\n    }\n    h4 {\n      font-size: var(--ifm-h4-font-size);\n    }\n    h5 {\n      font-size: var(--ifm-h5-font-size);\n    }\n    h6 {\n      font-size: var(--ifm-h6-font-size);\n    }\n\n    strong {\n      font-weight: var(--ifm-font-weight-bold);\n    }\n    a {\n      color: var(--ifm-link-color);\n      text-decoration: var(--ifm-link-decoration);\n    }\n    a:hover {\n      color: var(--ifm-link-hover-color);\n      text-decoration: var(--ifm-link-hover-decoration);\n    }\n    a:active,\n    a:hover {\n      outline-width: 0;\n    }\n    a:not([href]) {\n      text-decoration: none;\n    }\n    p {\n      margin-top: 0;\n      margin-bottom: var(--ifm-paragraph-margin-bottom);\n    }\n    table { display: table }\n    blockquote {\n      border-left: 6px solid var(--ifm-color-emphasis-300);\n      color: var(--ifm-blockquote-color);\n      font-size: var(--ifm-blockquote-font-size);\n      margin: 0;\n      margin-bottom: var(--ifm-spacing-vertical);\n      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);\n    }\n    blockquote > :first-child {\n      margin-top: 0;\n    }\n    blockquote > :last-child {\n      margin-bottom: 0;\n    }\n    hr {\n      border-color: var(--ifm-hr-border-color);\n      border-style: solid;\n      border-width: var(--ifm-hr-border-width);\n      box-sizing: content-box;\n      margin: var(--ifm-hr-margin-vertical) 0;\n      overflow: hidden;\n      padding: 0;\n    }\n    hr:before {\n      content: '';\n      display: table;\n    }\n    hr:after {\n      clear: both;\n      content: '';\n      display: table;\n    }\n  }\n"])));function f(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(d,null))}function v(n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(t.a,n),l.a.createElement(f,null))}},449:function(n,e,a){"use strict";a.d(e,"a",(function(){return c}));var r=a(0),o=a.n(r),t=a(211),i=a(230),l=a(55),m=a.n(l);function c(n){var e=n.sidebar;return 0===e.items.length?null:o.a.createElement("div",{className:Object(t.a)(m.a.sidebar,"thin-scrollbar")},o.a.createElement("h3",{className:m.a.sidebarItemTitle},e.title),o.a.createElement("ul",{className:m.a.sidebarItemList},e.items.map((function(n){return o.a.createElement("li",{key:n.permalink,className:m.a.sidebarItem},o.a.createElement(i.a,{isNavLink:!0,to:n.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},n.title))}))))}},513:function(n,e,a){"use strict";var r=a(0),o=a.n(r),t=a(211),i=a(179),l=a(27),m=a(230),c=a(515),s=a(423),d=a(56),f=a.n(d),v=["January","February","March","April","May","June","July","August","September","October","November","December"];e.a=function(n){var e,a,r,d,h,g=n.children,b=n.frontMatter,p=n.metadata,u=n.truncated,k=n.isBlogPostPage,y=void 0!==k&&k,w=p.date,E=p.permalink,_=p.tags,z=p.readingTime,x=b.author,N=b.title,q=b.image,S=b.keywords,I=b.author_url||b.authorURL,T=b.author_title||b.authorTitle,P=b.author_image_url||b.authorImageURL,M=Object(s.a)(q,{absolute:!0});return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,S&&S.length&&o.a.createElement("meta",{name:"keywords",content:S.join(",")}),q&&o.a.createElement("meta",{property:"og:image",content:M}),q&&o.a.createElement("meta",{name:"twitter:image",content:M}),q&&o.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),o.a.createElement("article",{className:y?void 0:"margin-bottom--xl"},(e=y?"h1":"h2",a=w.substring(0,10).split("-"),r=a[0],d=v[parseInt(a[1],10)-1],h=parseInt(a[2],10),o.a.createElement("header",null,o.a.createElement(e,{className:Object(t.a)("margin-bottom--sm",f.a.blogPostTitle)},y?N:o.a.createElement(m.a,{to:E},N)),o.a.createElement("div",{className:"margin-vert--md"},o.a.createElement("time",{dateTime:w,className:f.a.blogPostDate},d," ",h,", ",r," ",z&&o.a.createElement(o.a.Fragment,null," \xb7 ",Math.ceil(z)," min read"))),o.a.createElement("div",{className:"avatar margin-vert--md"},P&&o.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:I,target:"_blank",rel:"noreferrer noopener"},o.a.createElement("img",{src:P,alt:x})),o.a.createElement("div",{className:"avatar__intro"},x&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",{className:"avatar__name"},o.a.createElement("a",{href:I,target:"_blank",rel:"noreferrer noopener"},x)),o.a.createElement("small",{className:"avatar__subtitle"},T)))))),o.a.createElement("section",{className:"markdown"},o.a.createElement(i.a,{components:c.a},g)),(_.length>0||u)&&o.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&o.a.createElement("div",{className:"col"},o.a.createElement("strong",null,"Tags:"),_.map((function(n){var e=n.label,a=n.permalink;return o.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},e)}))),u&&o.a.createElement("div",{className:"col text--right"},o.a.createElement(m.a,{to:p.permalink,"aria-label":"Read more about "+N},o.a.createElement("strong",null,"Read More"))))))}},93:function(n,e,a){"use strict";a.r(e);var r=a(0),o=a.n(r),t=a(398),i=a(513),l=a(230),m=a(449);e.default=function(n){var e=n.metadata,a=n.items,r=n.sidebar,c=e.allTagsPath,s=e.name,d=e.count;return o.a.createElement(t.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"',wrapperClassName:"blog-wrapper"},o.a.createElement("div",{className:"container margin-vert--lg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--2"},o.a.createElement(m.a,{sidebar:r})),o.a.createElement("main",{className:"col col--8"},o.a.createElement("h1",null,d," ",function(n,e){return n>1?e+"s":e}(d,"post"),' tagged with "',s,'"'),o.a.createElement(l.a,{href:c},"View All Tags"),o.a.createElement("div",{className:"margin-vert--xl"},a.map((function(n){var e=n.content;return o.a.createElement(i.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},o.a.createElement(e,null))})))))))}}}]);