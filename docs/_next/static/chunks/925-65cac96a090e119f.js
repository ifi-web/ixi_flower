(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return m}});let i=r(8754),n=r(1757),o=n._(r(7294)),a=i._(r(3935)),l=i._(r(9201)),s=r(3914),u=r(5494),d=r(869);r(1905);let c=r(1823),f=i._(r(4545)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,i,n,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function getDynamicProps(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:s,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:p,fill:m,onLoadRef:h,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:y,onLoad:w,onError:_,...S}=e;return o.default.createElement("img",{...S,...getDynamicProps(c),loading:g,width:l,height:a,decoding:s,"data-nimg":m?"fill":"1",className:u,style:d,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&handleLoading(e,f,h,b,v,p))},[r,f,h,b,v,_,p,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,b,v,p)},onError:e=>{y(!0),"empty"!==f&&v(!0),_&&_(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let m=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),i=(0,o.useContext)(d.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[b,v]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:_,meta:S}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:b,showAltText:y});return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:w,ref:t}),S.priority?o.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let i=r(2393),n=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let o,a,l,{src:s,sizes:u,unoptimized:d=!1,priority:c=!1,loading:f,className:g,quality:p,width:m,height:h,fill:b=!1,style:v,onLoad:y,onLoadingComplete:w,placeholder:_="empty",blurDataURL:S,fetchPriority:P,layout:x,objectFit:I,objectPosition:C,lazyBoundary:z,lazyRoot:j,...E}=e,{imgConf:k,showAltText:O,blurComplete:R,defaultLoader:M}=t,L=k||n.imageConfigDefault;if("allSizes"in L)o=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);o={...L,allSizes:e,deviceSizes:t}}let D=E.loader||M;delete E.loader,delete E.srcSet;let N="__next_img_default"in D;if(N){if("custom"===o.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(x){"fill"===x&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!u&&(u=t)}let A="",B=getInt(m),G=getInt(h);if("object"==typeof(r=s)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,l=e.blurHeight,S=S||e.blurDataURL,A=e.src,!b){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let F=!c&&("lazy"===f||void 0===f);(!(s="string"==typeof s?s:A)||s.startsWith("data:")||s.startsWith("blob:"))&&(d=!0,F=!1),o.unoptimized&&(d=!0),N&&s.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(d=!0),c&&(P="high");let W=getInt(p),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:C}:{},O?{}:{color:"transparent"},v),U=R||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:a,blurHeight:l,blurDataURL:S||"",objectFit:q.objectFit})+'")':'url("'+_+'")',T=U?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},V=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:o,src:s,unoptimized:d,width:B,quality:W,sizes:u,loader:D}),J={...E,loading:F?"lazy":f,fetchPriority:P,width:B,height:G,decoding:"async",className:g,style:{...q,...T},sizes:V.sizes,srcSet:V.srcSet,src:V.src},Y={unoptimized:d,priority:c,placeholder:_,fill:b};return{props:J,meta:Y}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i?40*i:t,s=n?40*n:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return s}});let i=r(8754),n=r(3914),o=r(1905),a=r(3271),l=i._(r(4545)),unstable_getImgProps=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},5675:function(e,t,r){e.exports=r(645)},6725:function(e,t,r){"use strict";r.d(t,{A:function(){return l},f:function(){return s}});var i=r(6554),n=r(9653),o=r(5432),a=r(5893),l=(0,i.G)(function(e,t){let{isExternal:r,target:i,rel:l,className:s,...u}=e;return(0,a.jsx)(n.m.a,{...u,ref:t,className:(0,o.cx)("chakra-linkbox__overlay",s),rel:r?"noopener noreferrer":l,target:r?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),s=(0,i.G)(function(e,t){let{className:r,...i}=e;return(0,a.jsx)(n.m.div,{ref:t,position:"relative",...i,className:(0,o.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})})}}]);