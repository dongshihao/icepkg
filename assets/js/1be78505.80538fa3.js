"use strict";(self.webpackChunkice_component=self.webpackChunkice_component||[]).push([[514],{8035:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var a=n(9496),r=n(3387),l=n(5999),i=n(3932),c=n(1626),o=n(2962),s=n(121),d=n(2182);function u(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=n(7218),p=n(9028),b=n(3131),f=n(6833),v=n(8912);const h="menuHtmlItem_OjBu";var E=n(6298),g=["item"],_=["item","onItemClick","activePath","level","index"],Z=["item","onItemClick","activePath","level","index"];function k(e){var t=e.item,n=(0,p.Z)(e,g);switch(t.type){case"category":return a.createElement(C,(0,d.Z)({item:t},n));case"html":return a.createElement(S,(0,d.Z)({item:t},n));default:return a.createElement(T,(0,d.Z)({item:t},n))}}function C(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=e.index,s=(0,p.Z)(e,_),u=t.items,f=t.label,v=t.collapsible,h=t.className,g=t.href,Z=function(e){var t=(0,E.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0}),[e,t])}(t),k=(0,o._F)(t,r),C=(0,o.Mg)(g,r),S=(0,o.uR)({initialState:function(){return!!v&&(!k&&t.collapsed)}}),T=S.collapsed,y=S.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,o.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:k,collapsed:T,setCollapsed:y});var I=(0,o.fP)(),M=I.expandedItem,x=I.setExpandedItem;function A(e){void 0===e&&(e=!T),x(e?null:i),y(e)}var L=(0,o.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){v&&M&&M!==i&&L&&y(!0)}),[v,M,i,y,L]),a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":T},h)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},a.createElement(b.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":v&&!g,"menu__link--active":k}),onClick:v?function(e){null==n||n(t),g?A(!1):(e.preventDefault(),A())}:function(){null==n||n(t)},"aria-current":C?"page":void 0,href:v?null!=Z?Z:"#":Z},s),f),g&&v&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:f}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),A()}})),a.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},a.createElement(N,{items:u,tabIndex:T?-1:0,onItemClick:n,activePath:r,level:l+1})))}function S(e){var t=e.item,n=e.level,r=e.index,l=t.value,i=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(n),i&&h+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:l}})}function T(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,i=(e.index,(0,p.Z)(e,Z)),s=t.href,u=t.label,m=t.className,h=(0,o._F)(t,r);return a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:u},a.createElement(b.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":h}),"aria-current":h?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},i),(0,f.Z)(s)?u:a.createElement("span",null,u,a.createElement(v.Z,null))))}var y=["items"];function I(e){var t=e.items,n=(0,p.Z)(e,y);return a.createElement(o.D_,null,t.map((function(e,t){return a.createElement(k,(0,d.Z)({key:t,item:e,index:t},n))})))}const N=(0,a.memo)(I),M="sidebar_zOVT",x="sidebarWithHideableNavbar_dPjF",A="sidebarHidden_a5QA",L="sidebarLogo_d_E2",B="menu_AnF8",P="menuWithAnnouncementBar__KGL",D="collapseSidebarButton_MVne",H="collapseSidebarButtonIcon_KsDv";function w(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",D),onClick:t},a.createElement(u,{className:H}))}function F(e){var t,n,r=e.path,l=e.sidebar,i=e.onCollapse,d=e.isHidden,u=function(){var e=(0,o.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,o.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,o.LU)(),p=m.navbar.hideOnScroll,b=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(M,(t={},t[x]=p,t[A]=d,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:L}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(n={},n[P]=u,n))},a.createElement("ul",{className:(0,c.Z)(o.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:l,activePath:r,level:1}))),b&&a.createElement(w,{onClick:i}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(o.kM.docs.docSidebarMenu,"menu__list")},a.createElement(N,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function z(e){return a.createElement(o.Cv,{component:R,props:e})}var W=a.memo(F),O=a.memo(z);function q(e){var t=(0,o.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(O,e))}var V=n(4597),j=n(5970),Q=n(3774);const Y="details_qtZu";function K(e){var t=Object.assign({},e);return a.createElement(o.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",Y,t.className)}))}var U=["mdxType","originalType"];const G={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,p.Z)(r,U));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(V.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(j.Z,e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t;return a.createElement(j.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(K,(0,d.Z)({},e,{summary:n}),r)},h1:function(e){return a.createElement(Q.Z,(0,d.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Q.Z,(0,d.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Q.Z,(0,d.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Q.Z,(0,d.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Q.Z,(0,d.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Q.Z,(0,d.Z)({as:"h6"},e))}};var X=n(2774);const J="backToTopButton_Zxel",$="backToTopButtonShow_vOg5";function ee(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function te(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),i=ee(),s=i.smoothScrollTop,d=i.cancelScrollToTop;return(0,o.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var i=n<a;if(i||d(),n<300)r(!1);else if(i){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,o.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",o.kM.common.backToTopButton,J,(e={},e[$]=n,e)),type:"button",onClick:function(){return s()}})}var ne=n(1226);const ae={docPage:"docPage_TEza",docMainContainer:"docMainContainer_iQpp",docSidebarContainer:"docSidebarContainer_MoQh",docMainContainerEnhanced:"docMainContainerEnhanced_ztHE",docSidebarContainerHidden:"docSidebarContainerHidden_Lv5Y",collapsedDocSidebar:"collapsedDocSidebar_BW0Q",expandSidebarButtonIcon:"expandSidebarButtonIcon_qbDr",docItemWrapperEnhanced:"docItemWrapperEnhanced_zyUm"};function re(e){var t,n,l,s=e.currentDocRoute,d=e.versionMetadata,p=e.children,b=e.sidebarName,f=(0,o.Vq)(),v=d.pluginId,h=d.version,E=(0,a.useState)(!1),g=E[0],_=E[1],Z=(0,a.useState)(!1),k=Z[0],C=Z[1],S=(0,a.useCallback)((function(){k&&C(!1),_((function(e){return!e}))}),[k]);return a.createElement(i.Z,{wrapperClassName:o.kM.wrapper.docsPages,pageClassName:o.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,o.os)(v,h)}},a.createElement("div",{className:ae.docPage},a.createElement(te,null),f&&a.createElement("aside",{className:(0,c.Z)(o.kM.docs.docSidebarContainer,ae.docSidebarContainer,(t={},t[ae.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ae.docSidebarContainer)&&g&&C(!0)}},a.createElement(q,{key:b,sidebar:f,path:s.path,onCollapse:S,isHidden:k}),k&&a.createElement("div",{className:ae.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(u,{className:ae.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(ae.docMainContainer,(n={},n[ae.docMainContainerEnhanced]=g||!f,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",ae.docItemWrapper,(l={},l[ae.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:G},p)))))}function le(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,ne.LX)(r.pathname,e)}));if(!i)return a.createElement(X.default,null);var c=i.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement(o.qu,{version:n},a.createElement(o.bT,{sidebar:s},a.createElement(re,{currentDocRoute:i,versionMetadata:n,sidebarName:c},(0,l.H)(t,{versionMetadata:n})))))}}}]);