(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{6502:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/ixi_flower",function(){return n(8422)}])},7133:function(e,t,n){"use strict";n.d(t,{Et:function(){return WorkGridItem},P4:function(){return GridItem},Pg:function(){return GridItemStyle}});var r=n(5893),i=n(1664),s=n.n(i),l=n(5675),a=n.n(l),o=n(7747),c=n(6725),u=n(4e3),d=n(917);let GridItem=e=>{let{children:t,href:n,title:i,thumbnail:s}=e;return(0,r.jsx)(o.xu,{w:"100%",textAlign:"center",children:(0,r.jsxs)(c.f,{cursor:"pointer",children:[(0,r.jsx)(a(),{src:s,alt:i,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,r.jsx)(c.A,{href:n,target:"_blank",children:(0,r.jsx)(u.x,{mt:2,children:i})}),(0,r.jsx)(u.x,{fontSize:14,children:t})]})})},WorkGridItem=e=>{let{children:t,category:n="works",id:i,title:l,thumbnail:d}=e;return(0,r.jsx)(o.xu,{w:"100%",textAlign:"center",children:(0,r.jsxs)(c.f,{as:s(),href:"/".concat(n,"/").concat(i),scroll:!1,cursor:"pointer",children:[(0,r.jsx)(a(),{src:d,alt:l,className:"grid-item-thumbnail",placeholder:"blur"}),(0,r.jsx)(c.A,{as:"div",href:"/".concat(n,"/").concat(i),children:(0,r.jsx)(u.x,{mt:2,fontSize:20,children:l})}),(0,r.jsx)(u.x,{fontSize:14,children:t})]})})},GridItemStyle=()=>(0,r.jsx)(d.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},307:function(e,t,n){"use strict";var r=n(5893),i=n(7745),s=n(9008),l=n.n(s),a=n(7133);let o={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};t.Z=e=>{let{children:t,title:n}=e,s="".concat(n," - Ixi Flower");return(0,r.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:o,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:s}),(0,r.jsx)("meta",{name:"twitter:title",content:s}),(0,r.jsx)("meta",{property:"og:title",content:s})]}),t,(0,r.jsx)(a.Pg,{})]})})}},1227:function(e,t,n){"use strict";var r=n(2729),i=n(6829);function _templateObject(){let e=(0,r._)(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n"]);return _templateObject=function(){return e},e}let s=i.Z.p(_templateObject());t.Z=s},4786:function(e,t,n){"use strict";n.d(t,{h_:function(){return Meta},Dx:function(){return Title},WZ:function(){return WorkImage}});var r=n(5893),i=n(1664),s=n.n(i),l=n(7747),a=n(2883),o=n(2757),c=n(6554),u=(0,c.G)(function(e,t){let{htmlWidth:n,htmlHeight:i,alt:s,...l}=e;return(0,r.jsx)("img",{width:n,height:i,ref:t,alt:s,...l})});u.displayName="NativeImage";var d=n(6245),h=n(7294),shouldShowFallbackImage=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,x=n(9653),m=(0,c.G)(function(e,t){let{fallbackSrc:n,fallback:i,src:s,srcSet:l,align:a,fit:o,loading:c,ignoreFallback:m,crossOrigin:f,fallbackStrategy:j="beforeLoadOrError",referrerPolicy:p,...g}=e,y=null!=c||m||!(void 0!==n||void 0!==i),_=function(e){let{loading:t,src:n,srcSet:r,onLoad:i,onError:s,crossOrigin:l,sizes:a,ignoreFallback:o}=e,[c,u]=(0,h.useState)("pending");(0,h.useEffect)(()=>{u(n?"loading":"pending")},[n]);let x=(0,h.useRef)(),m=(0,h.useCallback)(()=>{if(!n)return;flush();let e=new Image;e.src=n,l&&(e.crossOrigin=l),r&&(e.srcset=r),a&&(e.sizes=a),t&&(e.loading=t),e.onload=e=>{flush(),u("loaded"),null==i||i(e)},e.onerror=e=>{flush(),u("failed"),null==s||s(e)},x.current=e},[n,l,r,a,i,s,t]),flush=()=>{x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,d.G)(()=>{if(!o)return"loading"===c&&m(),()=>{flush()}},[c,m,o]),o?"loaded":c}({...e,crossOrigin:f,ignoreFallback:y}),b=shouldShowFallbackImage(_,j),k={ref:t,objectFit:o,objectPosition:a,...y?g:function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(g,["onError","onLoad"])};return b?i||(0,r.jsx)(x.m.img,{as:u,className:"chakra-image__placeholder",src:n,...k}):(0,r.jsx)(x.m.img,{as:u,src:s,srcSet:l,crossOrigin:f,loading:c,referrerPolicy:p,className:"chakra-image",...k})});m.displayName="Image";var f=n(4880),j=n(3459);let Title=e=>{let{children:t}=e;return(0,r.jsxs)(l.xu,{children:[(0,r.jsx)(a.r,{as:s(),href:"/works",children:"Works"}),(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(j.X,{})," "]}),(0,r.jsx)(o.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:t})]})},WorkImage=e=>{let{src:t,alt:n}=e;return(0,r.jsx)(m,{borderRadius:"lg",w:"full",src:t,alt:n,mb:4})},Meta=e=>{let{children:t}=e;return(0,r.jsx)(f.C,{colorScheme:"green",mr:2,children:t})}},8422:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h}});var r=n(5893),i=n(1866),s=n(4880),l=n(3804),a=n(2883),o=n(5349),c=n(4786),u=n(1227),d=n(307),h=!0;t.default=()=>(0,r.jsx)(d.Z,{title:"ixi_flower",children:(0,r.jsxs)(i.W,{children:[(0,r.jsxs)(c.Dx,{children:["ixi_flower ",(0,r.jsx)(s.C,{children:"2024"})]}),(0,r.jsx)(u.Z,{children:"this is my own website (Solo - fullstack)"}),(0,r.jsxs)(l.aV,{ml:4,my:4,children:[(0,r.jsxs)(l.HC,{children:[(0,r.jsx)(c.h_,{children:"Status"}),"Completing . . ."]}),(0,r.jsxs)(l.HC,{children:[(0,r.jsx)(c.h_,{children:"Stack"}),(0,r.jsx)("span",{children:"NodeJS, Vite, React Native"})]}),(0,r.jsxs)(l.HC,{children:[(0,r.jsx)(c.h_,{children:"Github"}),(0,r.jsxs)(a.r,{href:"https://github.com/AmirabbasRouintan",children:["https://github.com/AmirabbasRouintan ",(0,r.jsx)(o.h,{mx:"2px"})]})]})]}),(0,r.jsx)(c.WZ,{src:"/images/works/ixi_flower_website.jpg",alt:"Website"}),(0,r.jsx)(c.WZ,{src:"/images/works/ixi_flower_404.jpg",alt:"Website"})]})})},3459:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var r=(0,n(4027).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},5349:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(4027),i=n(5893),s=(0,r.I)({displayName:"ExternalLinkIcon",path:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,i.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,i.jsx)("path",{d:"M15 3h6v6"}),(0,i.jsx)("path",{d:"M10 14L21 3"})]})})},3804:function(e,t,n){"use strict";n.d(t,{HC:function(){return m},aV:function(){return x}});var r=n(6948),i=n(5227),s=n(2495),l=n(6554),a=n(7030),o=n(3179),c=n(9653),u=n(5893),[d,h]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),x=(0,l.G)(function(e,t){let n=(0,a.jC)("List",e),{children:r,styleType:i="none",stylePosition:l,spacing:h,...x}=(0,o.Lr)(e),m=(0,s.W)(r);return(0,u.jsx)(d,{value:n,children:(0,u.jsx)(c.m.ul,{ref:t,listStyleType:i,listStylePosition:l,role:"list",__css:{...n.container,...h?{"& > *:not(style) ~ *:not(style)":{mt:h}}:{}},...x,children:m})})});x.displayName="List",(0,l.G)((e,t)=>{let{as:n,...r}=e;return(0,u.jsx)(x,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList",(0,l.G)(function(e,t){let{as:n,...r}=e;return(0,u.jsx)(x,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})}).displayName="UnorderedList";var m=(0,l.G)(function(e,t){let n=h();return(0,u.jsx)(c.m.li,{ref:t,...e,__css:n.item})});m.displayName="ListItem",(0,l.G)(function(e,t){let n=h();return(0,u.jsx)(r.J,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon"},4880:function(e,t,n){"use strict";n.d(t,{C:function(){return c}});var r=n(6554),i=n(7030),s=n(3179),l=n(9653),a=n(5432),o=n(5893),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Badge",e),{className:r,...c}=(0,s.Lr)(e);return(0,o.jsx)(l.m.span,{ref:t,className:(0,a.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})});c.displayName="Badge"}},function(e){e.O(0,[925,774,888,179],function(){return e(e.s=6502)}),_N_E=e.O()}]);