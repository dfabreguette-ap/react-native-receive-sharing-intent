(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5],{100:function(e,t,a){"use strict";var r=a(3),l=a(0),o=a.n(l),n=a(89),c=a(91),s=a(88),m=a(92),i=a(56),f=a.n(i),h=a(97);function u({to:e,href:t,label:a,prependBaseUrlToHref:l,...n}){const s=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return o.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{href:l?i:t}:{to:s},n),a)}const d=({sources:e,alt:t})=>o.a.createElement(h.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:r={}}=e||{},l={light:Object(m.a)(r.src),dark:Object(m.a)(r.srcDark||r.src)};return e?o.a.createElement("footer",{className:Object(n.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},a&&a.length>0&&o.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(u,e))))):null)))),(r||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},r&&(r.src||r.srcDark)&&o.a.createElement("div",{className:"margin-bottom--sm"},r.href?o.a.createElement(c.a,{href:r.href,className:f.a.footerLogoLink},o.a.createElement(d,{alt:r.alt,sources:l})):o.a.createElement(d,{alt:r.alt,sources:l})),t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},106:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),o=a(98),n=a(90);t.default=function(){return l.a.createElement(o.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},l.a.createElement(n.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.a.createElement("p",null,l.a.createElement(n.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l.a.createElement("p",null,l.a.createElement(n.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);