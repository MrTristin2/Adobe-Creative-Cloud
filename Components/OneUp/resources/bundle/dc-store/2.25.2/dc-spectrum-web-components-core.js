window.adobe_dc_sdk=window.adobe_dc_sdk||{},window.adobe_dc_sdk["dc-spectrum-web-components-core"]=function(t){function e(e){for(var o,i,s=e[0],a=e[1],c=0,l=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);for(n&&n(e);l.length;)l.shift()()}var o={},r={0:0};function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,i){o=r[t]=[e,i]}));e.push(o[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(t){return i.p+""+({}[t]||t)+".js"}(t);var n=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=r[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;n.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",n.name="ChunkLoadError",n.type=i,n.request=s,o[1](n)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var n=a;return i(i.s=0)}({"+YQn":function(t,e,o){"use strict";o.r(e),o.d(e,"Checkmark200Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M4.313 10.98a1.042 1.042 0 01-.8-.375L.647 7.165a1.042 1.042 0 011.6-1.333l2.042 2.45 5.443-6.928a1.042 1.042 0 011.64 1.287l-6.24 7.94a1.04 1.04 0 01-.804.399z"
    />
  </svg>`},"+sm+":function(t,e,o){"use strict";o.r(e),o.d(e,"IconCheckmark200",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("+YQn"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Checkmark200Icon)()}}},"/Co9":function(t,e,o){"use strict";function r(t){return t.split("-")[0]}function i(t){return t.split("-")[1]}function s(t){return["top","bottom"].includes(r(t))?"x":"y"}function a(t){return"y"===t?"height":"width"}function c(t){let{reference:e,floating:o,placement:c}=t;const n=e.x+e.width/2-o.width/2,l=e.y+e.height/2-o.height/2;let u;switch(r(c)){case"top":u={x:n,y:e.y-o.height};break;case"bottom":u={x:n,y:e.y+e.height};break;case"right":u={x:e.x+e.width,y:l};break;case"left":u={x:e.x-o.width,y:l};break;default:u={x:e.x,y:e.y}}const m=s(c),d=a(m);switch(i(c)){case"start":u[m]=u[m]-(e[d]/2-o[d]/2);break;case"end":u[m]=u[m]+(e[d]/2-o[d]/2)}return u}o.r(e),o.d(e,"arrow",(function(){return h})),o.d(e,"autoPlacement",(function(){return w})),o.d(e,"computePosition",(function(){return n})),o.d(e,"detectOverflow",(function(){return m})),o.d(e,"flip",(function(){return q})),o.d(e,"hide",(function(){return A})),o.d(e,"inline",(function(){return j})),o.d(e,"limitShift",(function(){return E})),o.d(e,"offset",(function(){return T})),o.d(e,"rectToClientRect",(function(){return u})),o.d(e,"shift",(function(){return I})),o.d(e,"size",(function(){return B}));const n=async(t,e,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:a}=o;let n=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:l,y:u}=c({...n,placement:r}),m=r,d={};for(let o=0;o<s.length;o++){0;const{name:p,fn:b}=s[o],{x:h,y:g,data:v,reset:x}=await b({x:l,y:u,initialPlacement:r,placement:m,strategy:i,middlewareData:d,rects:n,platform:a,elements:{reference:t,floating:e}});l=null!=h?h:l,u=null!=g?g:u,d={...d,[p]:null!=v?v:{}},x&&("object"==typeof x&&(x.placement&&(m=x.placement),x.rects&&(n=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:i}):x.rects),({x:l,y:u}=c({...n,placement:m}))),o=-1)}return{x:l,y:u,placement:m,strategy:i,middlewareData:d}};function l(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function u(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function m(t,e){void 0===e&&(e={});const{x:o,y:r,platform:i,rects:s,elements:a,strategy:c}=t,{boundary:n="clippingParents",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:p=!1,padding:b=0}=e,h=l(b),g=a[p?"floating"===d?"reference":"floating":d],v=await i.getClippingClientRect({element:await i.isElement(g)?g:g.contextElement||await i.getDocumentElement({element:a.floating}),boundary:n,rootBoundary:m}),x=u(await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===d?{...s.floating,x:o,y:r}:s.reference,offsetParent:await i.getOffsetParent({element:a.floating}),strategy:c}));return{top:v.top-x.top+h.top,bottom:x.bottom-v.bottom+h.bottom,left:v.left-x.left+h.left,right:x.right-v.right+h.right}}const d=Math.min,p=Math.max;function b(t,e,o){return p(t,d(e,o))}const h=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:i=0}=null!=t?t:{},{x:c,y:n,placement:u,rects:m,platform:d}=e;if(null==o)return{};const p=l(i),h={x:c,y:n},g=s(r(u)),v=a(g),x=await d.getDimensions({element:o}),f="y"===g?"top":"left",y="y"===g?"bottom":"right",z=m.reference[v]+m.reference[g]-h[g]-m.floating[v],k=h[g]-m.reference[g],w=await d.getOffsetParent({element:o}),q=w?"y"===g?w.clientHeight||0:w.clientWidth||0:0,C=z/2-k/2,O=p[f],A=q-x[v]-p[y],T=q/2-x[v]/2+C,_=b(O,T,A);return{data:{[g]:_,centerOffset:T-_}}}}),g={left:"right",right:"left",bottom:"top",top:"bottom"};function v(t){return t.replace(/left|right|bottom|top/g,t=>g[t])}function x(t,e){const o="start"===i(t),r=s(t),c=a(r);let n="x"===r?o?"right":"left":o?"bottom":"top";return e.reference[c]>e.floating[c]&&(n=v(n)),{main:n,cross:v(n)}}const f={start:"end",end:"start"};function y(t){return t.replace(/start|end/g,t=>f[t])}const z=["top","right","bottom","left"],k=z.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);const w=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var o,s,a,c,n,l;const{x:u,y:d,rects:p,middlewareData:b,placement:h}=e,{alignment:g=null,allowedPlacements:v=k,autoAlignment:f=!0,...z}=t;if(null!=(o=b.autoPlacement)&&o.skip)return{};const w=function(t,e,o){return(t?[...o.filter(e=>i(e)===t),...o.filter(e=>i(e)!==t)]:o.filter(t=>r(t)===t)).filter(o=>!t||(i(o)===t||!!e&&y(o)!==o))}(g,f,v),q=await m(e,z),C=null!=(s=null==(a=b.autoPlacement)?void 0:a.index)?s:0,O=w[C],{main:A,cross:T}=x(O,p);if(h!==O)return{x:u,y:d,reset:{placement:w[0]}};const _=[q[r(O)],q[A],q[T]],I=[...null!=(c=null==(n=b.autoPlacement)?void 0:n.overflows)?c:[],{placement:O,overflows:_}],E=w[C+1];if(E)return{data:{index:C+1,overflows:I},reset:{placement:E}};const B=I.slice().sort((t,e)=>t.overflows[0]-e.overflows[0]),j=null==(l=B.find(t=>{let{overflows:e}=t;return e.every(t=>t<=0)}))?void 0:l.placement;return{data:{skip:!0},reset:{placement:null!=j?j:B[0].placement}}}}};const q=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:a,rects:c,initialPlacement:n}=e;if(null!=(o=a.flip)&&o.skip)return{};const{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",flipAlignment:b=!0,...h}=t,g=r(s),f=[n,...d||(g===n||!b?[v(n)]:function(t){const e=v(t);return[y(t),e,y(e)]}(n))],z=await m(e,h),k=[];let w=(null==(i=a.flip)?void 0:i.overflows)||[];if(l&&k.push(z[g]),u){const{main:t,cross:e}=x(s,c);k.push(z[t],z[e])}if(w=[...w,{placement:s,overflows:k}],!k.every(t=>t<=0)){var q,C;const t=(null!=(q=null==(C=a.flip)?void 0:C.index)?q:0)+1,e=f[t];if(e)return{data:{index:t,overflows:w},reset:{placement:e}};let o="bottom";switch(p){case"bestFit":{var O;const t=null==(O=w.slice().sort((t,e)=>t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)-e.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0))[0])?void 0:O.placement;t&&(o=t);break}case"initialPlacement":o=n}return{data:{skip:!0},reset:{placement:o}}}return{}}}};function C(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function O(t){return z.some(e=>t[e]>=0)}const A=()=>({name:"hide",async fn(t){const e=await m(t,{elementContext:"reference"}),o=await m(t,{altBoundary:!0}),r=C(e,t.rects.reference),i=C(o,t.rects.floating);return{data:{referenceHidden:O(r),referenceHiddenOffsets:r,escaped:O(i),escapedOffsets:i}}}});const T=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn(e){const{x:o,y:i,placement:a,rects:c}=e,n=function(t){let{placement:e,rects:o,value:i}=t;const a=r(e),c=["left","top"].includes(a)?-1:1,n="function"==typeof i?i({...o,placement:e}):i,{mainAxis:l,crossAxis:u}="number"==typeof n?{mainAxis:n,crossAxis:0}:{mainAxis:0,crossAxis:0,...n};return"x"===s(a)?{x:u,y:l*c}:{x:l*c,y:u}}({placement:a,rects:c,value:t});return{x:o+n.x,y:i+n.y,data:n}}}};function _(t){return"x"===t?"y":"x"}const I=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:a}=e,{mainAxis:c=!0,crossAxis:n=!1,limiter:l={fn:t=>{let{x:e,y:o}=t;return{x:e,y:o}}},...u}=t,d={x:o,y:i},p=await m(e,u),h=s(r(a)),g=_(h);let v=d[h],x=d[g];if(c){const t="y"===h?"bottom":"right";v=b(v+p["y"===h?"top":"left"],v,v-p[t])}if(n){const t="y"===g?"bottom":"right";x=b(x+p["y"===g?"top":"left"],x,x-p[t])}const f=l.fn({...e,[h]:v,[g]:x});return{...f,data:{x:f.x-o,y:f.y-i}}}}},E=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:o,y:i,placement:a,rects:c,middlewareData:n}=e,{offset:l=0,mainAxis:u=!0,crossAxis:m=!0}=t,d={x:o,y:i},p=s(a),b=_(p);let h=d[p],g=d[b];const v="function"==typeof l?l({...c,placement:a}):l,x="number"==typeof v?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(u){const t="y"===p?"height":"width",e=c.reference[p]-c.floating[t]+x.mainAxis,o=c.reference[p]+c.reference[t]-x.mainAxis;h<e?h=e:h>o&&(h=o)}if(m){var f,y,z,k;const t="y"===p?"width":"height",e=["top","left"].includes(r(a)),o=c.reference[b]-c.floating[t]+(e&&null!=(f=null==(y=n.offset)?void 0:y[b])?f:0)+(e?0:x.crossAxis),i=c.reference[b]+c.reference[t]+(e?0:null!=(z=null==(k=n.offset)?void 0:k[b])?z:0)-(e?x.crossAxis:0);g<o?g=o:g>i&&(g=i)}return{[p]:h,[b]:g}}}},B=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var o;const{placement:s,rects:a,middlewareData:c}=e,{apply:n,...l}=t;if(null!=(o=c.size)&&o.skip)return{};const u=await m(e,l),d=r(s),b="end"===i(s);let h,g;"top"===d||"bottom"===d?(h=d,g=b?"left":"right"):(g=d,h=b?"top":"bottom");const v=p(u.left,0),x=p(u.right,0),f=p(u.top,0),y=p(u.bottom,0),z={height:a.floating.height-(["left","right"].includes(s)?2*(0!==f||0!==y?f+y:p(u.top,u.bottom)):u[h]),width:a.floating.width-(["top","bottom"].includes(s)?2*(0!==v||0!==x?v+x:p(u.left,u.right)):u[g])};return null==n||n({...z,...a}),{data:{skip:!0},reset:{rects:!0}}}}},j=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){var o,i;const{placement:a,elements:c,rects:n,platform:m,strategy:b,middlewareData:h}=e,{padding:g=2,x:v,y:x}=t;if(null!=(o=h.inline)&&o.skip)return{};const f=u(await m.convertOffsetParentRelativeRectToViewportRelativeRect({rect:n.reference,offsetParent:await m.getOffsetParent({element:c.floating}),strategy:b})),y=Array.from(null!=(i=await(null==m.getClientRects?void 0:m.getClientRects({element:c.reference})))?i:[]),z=l(g);return{data:{skip:!0},reset:{rects:await m.getElementRects({reference:{getBoundingClientRect:function(){var t;if(2===y.length&&y[0].left>y[1].right&&null!=v&&null!=x)return null!=(t=y.find(t=>v>t.left-z.left&&v<t.right+z.right&&x>t.top-z.top&&x<t.bottom+z.bottom))?t:f;if(y.length>=2){if("x"===s(a)){const t=y[0],e=y[y.length-1],o="top"===r(a),i=t.top,s=e.bottom,c=o?t.left:e.left,n=o?t.right:e.right;return{top:i,bottom:s,left:c,right:n,width:n-c,height:s-i,x:c,y:i}}const t="left"===r(a),e=p(...y.map(t=>t.right)),o=d(...y.map(t=>t.left)),i=y.filter(r=>t?r.left===o:r.right===e),c=i[0].top,n=i[i.length-1].bottom;return{top:c,bottom:n,left:o,right:e,width:e-o,height:n-c,x:o,y:c}}return f}},floating:c.floating,strategy:b})}}}}}},"/vr8":function(t,e,o){"use strict";o.r(e),o.d(e,"property",(function(){return i}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function i(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):r(t,e)}},0:function(t,e,o){t.exports=o},"0Dgw":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-buttongroup-button-gap-reset:0}:host{display:flex}::slotted(*){flex-shrink:0}:host([dir=ltr]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([dir=rtl]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-x,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-of-type)){margin-left:var(
--spectrum-buttongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-of-type)){margin-right:var(
--spectrum-buttongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-of-type)){margin-top:var(
--spectrum-buttongroup-button-gap-y,var(--spectrum-global-dimension-static-size-200)
)}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;e.default=r},"0RlU":function(t,e,o){"use strict";o.r(e),o.d(e,"IconCheckmark75",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("REwO"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Checkmark75Icon)()}}},"0Vag":function(t,e,o){"use strict";o.r(e);var r=o("xlqn");customElements.define("sp-icon-alert",r.IconAlert)},"0Xw0":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(var(--spectrum-overlay-animation-distance)*-1))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(var(--spectrum-overlay-animation-distance)*-1))}:host{--spectrum-tooltip-neutral-target-offset:3px;--spectrum-tooltip-neutral-tip-width:var(
--spectrum-tooltip-neutral-tip-height,var(--spectrum-global-dimension-size-50)
)}:host{-webkit-font-smoothing:antialiased;align-items:center;border-radius:var(
--spectrum-tooltip-neutral-border-radius,var(--spectrum-alias-component-border-radius)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-tooltip-neutral-text-size,var(--spectrum-global-dimension-font-size-75)
);font-weight:var(
--spectrum-tooltip-neutral-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);left:0;line-height:var(
--spectrum-tooltip-neutral-text-line-height,var(--spectrum-alias-component-text-line-height)
);max-width:var(
--spectrum-tooltip-neutral-max-width,var(--spectrum-global-dimension-size-2000)
);min-height:var(
--spectrum-tooltip-neutral-min-height,var(--spectrum-global-dimension-size-300)
);padding:0 var(
--spectrum-tooltip-neutral-padding-x,var(--spectrum-global-dimension-size-85)
);position:relative;top:0;vertical-align:top;width:auto;word-break:break-word}:host{cursor:default;-webkit-user-select:none;user-select:none}p{margin:0}#tip{border-bottom:var(
--spectrum-tooltip-neutral-tip-width,var(--spectrum-global-dimension-size-100)
) solid transparent;border-left:var(
--spectrum-tooltip-neutral-tip-width,var(--spectrum-global-dimension-size-100)
) solid transparent;border-right:var(
--spectrum-tooltip-neutral-tip-width,var(--spectrum-global-dimension-size-100)
) solid transparent;border-top-style:solid;border-top-width:var(
--spectrum-tooltip-neutral-tip-width,var(--spectrum-global-dimension-size-100)
);height:0;position:absolute;width:0}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(
--spectrum-tooltip-neutral-tip-width,
var(--spectrum-global-dimension-size-100)
)*-1);top:50%}:host([placement*=right]){margin-left:var(
--spectrum-tooltip-neutral-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:rotate(90deg)}:host([placement*=left]){margin-right:var(
--spectrum-tooltip-neutral-target-offset
)}:host([placement*=left]) #tip{left:100%;transform:rotate(-90deg)}:host([placement*=top]){margin-bottom:var(
--spectrum-tooltip-neutral-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]){margin-top:var(
--spectrum-tooltip-neutral-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:rotate(-180deg)}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(
--spectrum-tooltip-neutral-tip-width,
var(--spectrum-global-dimension-size-100)
)*-1)}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc(var(
--spectrum-tooltip-neutral-icon-margin-x,
var(--spectrum-global-dimension-size-85)
) - var(
--spectrum-tooltip-neutral-padding-x,
var(--spectrum-global-dimension-size-85)
))}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc(var(
--spectrum-tooltip-neutral-icon-margin-x,
var(--spectrum-global-dimension-size-85)
) - var(
--spectrum-tooltip-neutral-padding-x,
var(--spectrum-global-dimension-size-85)
))}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(
--spectrum-tooltip-neutral-icon-margin-x,var(--spectrum-global-dimension-size-85)
)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(
--spectrum-tooltip-neutral-icon-margin-x,var(--spectrum-global-dimension-size-85)
)}::slotted([slot=icon]){align-self:flex-start;flex-shrink:0;height:var(
--spectrum-tooltip-neutral-icon-size,var(--spectrum-global-dimension-size-200)
);margin-bottom:var(
--spectrum-tooltip-neutral-icon-margin-y,var(--spectrum-global-dimension-size-50)
);margin-top:var(
--spectrum-tooltip-neutral-icon-margin-y,var(--spectrum-global-dimension-size-50)
);width:var(
--spectrum-tooltip-neutral-icon-size,var(--spectrum-global-dimension-size-200)
)}#label{line-height:var(
--spectrum-tooltip-neutral-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin-bottom:var(--spectrum-tooltip-neutral-text-margin-bottom);margin-top:var(
--spectrum-tooltip-neutral-text-margin-top,var(--spectrum-global-dimension-static-size-50)
)}:host{background-color:var(
--spectrum-tooltip-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
);color:var(
--spectrum-tooltip-neutral-text-color,var(--spectrum-global-color-static-white)
)}#tip{border-top-color:var(
--spectrum-tooltip-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
)}.spectrum-Tooltip--error,:host([variant=negative]){background-color:var(
--spectrum-tooltip-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}.spectrum-Tooltip--error #tip,:host([variant=negative]) #tip{border-top-color:var(
--spectrum-tooltip-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}.spectrum-Tooltip--help,:host([variant=info]){background-color:var(
--spectrum-tooltip-info-background-color,var(--spectrum-semantic-informative-background-color)
)}.spectrum-Tooltip--help #tip,:host([variant=info]) #tip{border-top-color:var(
--spectrum-tooltip-info-background-color,var(--spectrum-semantic-informative-background-color)
)}.spectrum-Tooltip--success,:host([variant=positive]){background-color:var(
--spectrum-tooltip-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}.spectrum-Tooltip--success #tip,:host([variant=positive]) #tip{border-top-color:var(
--spectrum-tooltip-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}#tip{border:none}:host([placement*=bottom]) #tip,:host([placement*=left]) #tip,:host([placement*=right]) #tip{transform:none}#tip:after{border:var(
--spectrum-tooltip-tip-height,var(--spectrum-global-dimension-size-50)
) solid transparent;content:"";height:0;left:0;position:absolute;width:0}:host([placement*=bottom]) #tip:after{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) #tip:after{left:100%;transform:rotate(-90deg)}:host([placement*=right]) #tip:after{left:auto;right:100%;transform:rotate(90deg)}:host([placement]) #tip:after{border-top-color:var(
--spectrum-tooltip-background-color,var(--spectrum-global-color-static-gray-700)
)}:host([variant=negative]) #tip:after{border-top-color:var(
--spectrum-tooltip-negative-background-color,var(--spectrum-global-color-static-red-700)
)}:host([variant=info]) #tip:after{border-top-color:var(
--spectrum-tooltip-info-background-color,var(--spectrum-global-color-static-blue-700)
)}:host([variant=positive]) #tip:after{border-top-color:var(
--spectrum-tooltip-positive-background-color,var(--spectrum-global-color-static-green-700)
)}
`;e.default=r},"0q+T":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
#switch:before{transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}
`;e.default=r},"15WJ":function(t,e,o){"use strict";o.r(e),o.d(e,"reparentChildren",(function(){return r}));const r=(t,e,o)=>{const r=[],i=[];for(let s=0;s<t.length;++s){const a=t[s];o&&i.push(o(a)||(()=>{}));const c=document.createComment("placeholder for reparented element");r.push(c);const n=a.parentElement||a.getRootNode();n&&n!==a&&n.replaceChild(c,a),e.append(a)}return function(){return function(t,e,o=[]){for(let r=0;r<e.length;++r){const i=e[r],s=t[r],a=s.parentElement||s.getRootNode();o[r]&&o[r](i),a&&a!==s&&a.replaceChild(i,s),delete t[r]}return e}(r,t,i)}}},1885:function(t,e,o){"use strict";o.r(e),o.d(e,"Switch",(function(){return l}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=o("2DuV"),c=o("e1fm"),n=o("0q+T");class l extends a.CheckboxBase{constructor(){super(...arguments),this.emphasized=!1}static get styles(){return window.hasOwnProperty("ShadyDOM")?[c.default,n.default]:[c.default]}render(){return i.html`
            ${super.render()}
            <span id="switch"></span>
            <label id="label" for="input"><slot></slot></label>
        `}firstUpdated(t){super.firstUpdated(t),this.inputElement.setAttribute("role","switch")}updated(t){t.has("checked")&&this.inputElement.setAttribute("aria-checked",this.checked?"true":"false")}}Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],l.prototype,"emphasized",void 0)},"1Z8/":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-dialog-fullscreen-header-text-size:28px;--spectrum-dialog-confirm-small-width:400px;--spectrum-dialog-confirm-medium-width:480px;--spectrum-dialog-confirm-large-width:640px;--spectrum-dialog-error-width:var(--spectrum-dialog-confirm-medium-width);--spectrum-dialog-confirm-hero-height:var(
--spectrum-global-dimension-size-1600
);--spectrum-dialog-confirm-description-padding:var(
--spectrum-global-dimension-size-25
);--spectrum-dialog-confirm-description-margin:calc(var(--spectrum-global-dimension-size-25)*-1);--spectrum-dialog-confirm-footer-padding-top:var(
--spectrum-global-dimension-static-size-500,40px
);--spectrum-dialog-confirm-gap-size:var(
--spectrum-global-dimension-size-200
);--spectrum-dialog-confirm-buttongroup-padding-top:var(
--spectrum-global-dimension-static-size-500,40px
);--spectrum-dialog-confirm-close-button-size:var(
--spectrum-global-dimension-size-400
);--spectrum-dialog-confirm-close-button-padding:calc(26px - var(--spectrum-global-dimension-size-175));--spectrum-dialog-confirm-divider-height:var(
--spectrum-global-dimension-static-size-25,2px
)}:host{box-sizing:border-box;display:flex;max-height:inherit;max-width:100%;min-width:var(
--spectrum-dialog-confirm-min-width,var(--spectrum-global-dimension-static-size-3600)
);outline:none;width:-moz-fit-content;width:fit-content}:host([size=s]){width:var(
--spectrum-dialog-confirm-small-width
)}:host([size=m]){width:var(
--spectrum-dialog-confirm-medium-width
)}:host([size=l]){width:var(
--spectrum-dialog-confirm-large-width
)}::slotted([slot=hero]){background-position:50%;background-size:cover;border-top-left-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);border-top-right-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);grid-area:hero;height:var(--spectrum-dialog-confirm-hero-height);overflow:hidden}.grid{display:grid;grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading header  header      typeIcon    ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
);width:100%}:host([dir=ltr]) ::slotted([slot=heading]){padding-right:var(
--spectrum-dialog-confirm-gap-size
)}:host([dir=rtl]) ::slotted([slot=heading]){padding-left:var(
--spectrum-dialog-confirm-gap-size
)}::slotted([slot=heading]){font-size:var(--spectrum-dialog-confirm-title-text-size);font-weight:var(
--spectrum-dialog-confirm-title-text-font-weight,var(--spectrum-alias-heading-text-font-weight-regular)
);grid-area:heading;line-height:var(
--spectrum-dialog-confirm-title-text-line-height,var(--spectrum-alias-heading-text-line-height)
);margin:0;outline:none}:host([dir=ltr]) .no-header::slotted([slot=heading]){padding-right:0}:host([dir=rtl]) .no-header::slotted([slot=heading]){padding-left:0}.no-header::slotted([slot=heading]){grid-area:heading-start/heading-start/header-end/header-end}.header{align-items:center;box-sizing:border-box;display:flex;grid-area:header;justify-content:flex-end;outline:none}.type-icon{grid-area:typeIcon}.divider{grid-area:divider;margin-bottom:var(
--spectrum-dialog-confirm-divider-margin-bottom,var(--spectrum-global-dimension-static-size-200)
);margin-top:var(
--spectrum-dialog-confirm-divider-margin-top,var(--spectrum-global-dimension-static-size-150)
);width:100%}:host([no-divider]) .divider{display:none}:host([no-divider]) ::slotted([slot=heading]){padding-bottom:calc(var(
--spectrum-dialog-confirm-divider-margin-top,
var(--spectrum-global-dimension-static-size-150)
) + var(
--spectrum-dialog-confirm-divider-margin-bottom,
var(--spectrum-global-dimension-static-size-200)
) + var(
--spectrum-dialog-confirm-divider-height,
var(--spectrum-global-dimension-size-25)
))}.content{-webkit-overflow-scrolling:touch;box-sizing:border-box;font-size:var(--spectrum-dialog-confirm-description-text-size);font-weight:var(
--spectrum-dialog-confirm-description-text-font-weight,var(--spectrum-global-font-weight-regular)
);grid-area:content;line-height:var(
--spectrum-dialog-confirm-description-text-line-height,var(--spectrum-alias-component-text-line-height)
);margin:0 var(--spectrum-dialog-confirm-description-margin);overflow-y:auto;padding:0 var(--spectrum-dialog-confirm-description-padding)}.content,.footer{outline:none}.footer{display:flex;flex-wrap:wrap;grid-area:footer;padding-top:var(--spectrum-dialog-confirm-footer-padding-top)}.footer>.button+.button,.footer>::slotted(*){margin-bottom:0}:host([dir=ltr]) .button-group{padding-left:var(
--spectrum-dialog-confirm-gap-size
)}:host([dir=rtl]) .button-group{padding-right:var(
--spectrum-dialog-confirm-gap-size
)}.button-group{display:flex;grid-area:buttonGroup;justify-content:flex-end;padding-top:var(--spectrum-dialog-confirm-buttongroup-padding-top)}.button-group.button-group--noFooter{grid-area:footer-start/footer-start/buttonGroup-end/buttonGroup-end}:host([dismissable]) .grid{grid-template-areas:"hero hero    hero    hero        hero        hero        hero" ".    .       .       .           .           closeButton closeButton" ".    heading header  header      typeIcon    closeButton closeButton" ".    divider divider divider     divider     divider     ." ".    content content content     content     content     ." ".    footer  footer  buttonGroup buttonGroup buttonGroup ." ".    .       .       .           .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) minmax(0,var(--spectrum-dialog-confirm-close-button-size)) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([dismissable]) .grid .button-group{display:none}:host([dismissable]) .grid .footer{grid-area:footer/footer/buttonGroup/buttonGroup}:host([dir=ltr]) .close-button{margin-right:var(
--spectrum-dialog-confirm-close-button-padding
)}:host([dir=rtl]) .close-button{margin-left:var(
--spectrum-dialog-confirm-close-button-padding
)}.close-button{align-self:start;grid-area:closeButton;justify-self:end;margin-top:var(--spectrum-dialog-confirm-close-button-padding)}:host([error]){width:var(
--spectrum-dialog-error-width,90%
)}:host([mode=fullscreen]){height:100%;width:100%}:host([mode=fullscreenTakeover]){border-radius:0;height:100%;width:100%}:host([mode=fullscreenTakeover]),:host([mode=fullscreen]){max-height:none;max-width:none}:host([mode=fullscreenTakeover]) .grid,:host([mode=fullscreen]) .grid{display:grid;grid-template-areas:".    .       .       .            ." ".    heading header  buttonGroup  ." ".    divider divider divider      ." ".    content content content      ." ".    .       .       .            .";grid-template-columns:var(--spectrum-dialog-confirm-padding) 1fr auto auto var(
--spectrum-dialog-confirm-padding
);grid-template-rows:var(--spectrum-dialog-confirm-padding) auto auto 1fr var(
--spectrum-dialog-confirm-padding
)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:var(
--spectrum-dialog-fullscreen-header-text-size
)}:host([mode=fullscreenTakeover]) .content,:host([mode=fullscreen]) .content{max-height:none}:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .button-group,:host([mode=fullscreen]) .footer{padding-top:0}:host([mode=fullscreenTakeover]) .footer,:host([mode=fullscreen]) .footer{display:none}:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreen]) .button-group{align-self:start;grid-area:buttonGroup}@media screen and (max-width:700px){.grid{grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading heading heading     typeIcon    ." ".    header  header  header      header      ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([dismissable]) .grid{grid-template-areas:"hero hero    hero    hero        hero        hero        hero" ".    .       .       .           .           closeButton closeButton" ".    heading heading heading     typeIcon    closeButton closeButton" ".    header  header  header      header      header      ." ".    divider divider divider     divider     divider     ." ".    content content content     content     content     ." ".    footer  footer  buttonGroup buttonGroup buttonGroup ." ".    .       .       .           .           .           .";grid-template-columns:var(--spectrum-dialog-confirm-padding) auto 1fr auto minmax(0,auto) minmax(0,var(--spectrum-dialog-confirm-close-button-size)) var(--spectrum-dialog-confirm-padding);grid-template-rows:auto var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}.header{justify-content:flex-start}:host([mode=fullscreenTakeover]) .grid,:host([mode=fullscreen]) .grid{display:grid;grid-template-areas:".    .            ." ".    heading      ." ".    header       ." ".    divider      ." ".    content      ." ".    buttonGroup  ." ".    .            .";grid-template-columns:var(--spectrum-dialog-confirm-padding) 1fr var(
--spectrum-dialog-confirm-padding
);grid-template-rows:var(--spectrum-dialog-confirm-padding) auto auto auto 1fr auto var(
--spectrum-dialog-confirm-padding
)}:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreen]) .button-group{padding-top:var(--spectrum-dialog-confirm-buttongroup-padding-top)}:host([mode=fullscreenTakeover]) ::slotted([slot=heading]),:host([mode=fullscreen]) ::slotted([slot=heading]){font-size:var(--spectrum-dialog-confirm-title-text-size)}}@media (forced-colors:active){:host{border:solid}}::slotted([slot=heading]){color:var(
--spectrum-dialog-confirm-title-text-color,var(--spectrum-alias-heading-text-color)
)}.content,.footer{color:var(
--spectrum-dialog-confirm-description-text-color,var(--spectrum-global-color-gray-800)
)}.type-icon{color:var(
--spectrum-dialog-confirm-icon-color,var(--spectrum-global-color-gray-900)
)}:host([error]) .type-icon{color:var(
--spectrum-dialog-error-icon-color,var(--spectrum-semantic-negative-icon-color)
)}.content{overflow:hidden}.footer{color:var(
--spectrum-dialog-confirm-description-text-color,var(--spectrum-global-color-gray-800)
)}.content[tabindex]{overflow:auto}::slotted(img[slot=hero]){height:auto;width:100%}
`;e.default=r},"1e0g":function(t,e,o){"use strict";function r(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.userAgent)}function i(t){return"undefined"!=typeof window&&null!=window.navigator&&t.test(window.navigator.platform)}function s(){return i(/^Mac/)}function a(){return i(/^iPhone/)}function c(){return i(/^iPad/)||s()&&navigator.maxTouchPoints>1}function n(){return a()||c()}function l(){return s()||n()}function u(){return r(/AppleWebKit/)&&!m()}function m(){return r(/Chrome/)}function d(){return r(/Android/)}o.r(e),o.d(e,"isMac",(function(){return s})),o.d(e,"isIPhone",(function(){return a})),o.d(e,"isIPad",(function(){return c})),o.d(e,"isIOS",(function(){return n})),o.d(e,"isAppleDevice",(function(){return l})),o.d(e,"isWebKit",(function(){return u})),o.d(e,"isChrome",(function(){return m})),o.d(e,"isAndroid",(function(){return d}))},"20aA":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentColor;stroke:currentColor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}
`;e.default=r},"2BBL":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{align-items:center;box-sizing:border-box;display:flex;height:100vh;height:-webkit-fill-available;height:fill-available;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden;width:100vw;z-index:2}:host([open]){visibility:visible}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]){border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}:host([responsive]){margin-top:0}}.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);max-height:var(--spectrum-dialog-max-height);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(
--spectrum-dialog-fullscreen-margin
);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;bottom:0;box-sizing:border-box;left:0;right:0;top:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(
--spectrum-dialog-confirm-background-color,var(--spectrum-alias-background-color-default)
)}:host{height:calc(100vh - var(--swc-body-margins-block, 0 * 1px));width:calc(100vw - var(--swc-body-margins-inline, 0 * 1px))}
`;e.default=r},"2DuV":function(t,e,o){"use strict";o.r(e),o.d(e,"CheckboxBase",(function(){return c}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=o("zKLX");class c extends a.Focusable{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(t){if(this.readonly)return void(this.inputElement.checked=this.checked);this.checked=this.inputElement.checked;const e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}render(){return i.html`
            <input
                id="input"
                aria-labelledby="label"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],c.prototype,"checked",void 0),Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],c.prototype,"readonly",void 0),Object(r.__decorate)([Object(s.query)("#input")],c.prototype,"inputElement",void 0)},"2ksV":function(t,e,o){"use strict";o.r(e),o.d(e,"query",(function(){return i}));var r=o("596t");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t,e){return Object(r.decorateProperty)({descriptor:o=>{const r={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;r.get=function(){var o,r;return void 0===this[e]&&(this[e]=null!==(r=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}},"2lhV":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-textfield-texticon-padding-left:var(
--spectrum-textfield-m-texticon-padding-left
);--spectrum-textfield-quiet-texticon-border-bottom-size:var(
--spectrum-textfield-m-quiet-texticon-border-bottom-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-quiet-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-border-radius:var(
--spectrum-textfield-m-quiet-texticon-border-radius,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-left:var(
--spectrum-textfield-m-quiet-texticon-padding-left,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-right:var(
--spectrum-textfield-m-quiet-texticon-padding-right,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-texticon-border-size:var(
--spectrum-textfield-m-texticon-border-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-texticon-text-line-height:var(
--spectrum-textfield-m-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-textfield-texticon-text-size:var(
--spectrum-textfield-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-textfield-texticon-placeholder-text-font-style:var(
--spectrum-textfield-m-texticon-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-textfield-texticon-placeholder-text-font-weight:var(
--spectrum-textfield-m-texticon-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-textfield-texticon-success-icon-height:var(
--spectrum-textfield-m-texticon-success-icon-height,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-width:var(
--spectrum-textfield-m-texticon-success-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-invalid-icon-height:var(
--spectrum-textfield-m-texticon-invalid-icon-height,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-width:var(
--spectrum-textfield-m-texticon-invalid-icon-width,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-min-width:var(
--spectrum-textfield-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-textfield-texticon-border-radius:var(
--spectrum-textfield-m-texticon-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-textfield-texticon-padding-right:var(
--spectrum-textfield-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-height:var(
--spectrum-textfield-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textarea-text-padding-top:var(
--spectrum-textarea-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-textarea-text-padding-bottom:var(
--spectrum-textarea-m-text-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-textarea-padding-left:var(
--spectrum-textarea-m-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-padding-right:var(
--spectrum-textarea-m-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-height:var(
--spectrum-textarea-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textfield-texticon-padding-top:3px;--spectrum-textfield-texticon-padding-bottom:5px;--spectrum-textfield-texticon-text-font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);--spectrum-textfield-texticon-icon-gap:var(
--spectrum-global-dimension-size-65
);--spectrum-textfield-quiet-texticon-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-textarea-min-height:var(--spectrum-textarea-height);--spectrum-textarea-height-adjusted:auto;--spectrum-textarea-padding-top:var(--spectrum-textarea-text-padding-top);--spectrum-textarea-padding-bottom:var(
--spectrum-textarea-text-padding-bottom
)}#textfield{display:inline-flex;min-width:var(--spectrum-textfield-texticon-min-width);position:relative;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([quiet][multiline]) #textfield .input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:after{border-color:transparent;border-radius:calc(var(--spectrum-textfield-texticon-border-radius) + var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([quiet]) #textfield:after{border-radius:0}.input{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);height:var(--spectrum-textfield-texticon-height);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;padding:var(--spectrum-textfield-texticon-padding-top) var(--spectrum-textfield-texticon-padding-right) var(--spectrum-textfield-texticon-padding-bottom) calc(var(--spectrum-textfield-texticon-padding-left) + 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}.input::placeholder{font-style:var(--spectrum-textfield-texticon-placeholder-text-font-style);font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
);opacity:1;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:hover::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input:disabled{opacity:1;resize:none}.input:disabled::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input::-ms-clear{height:0;width:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}:host([dir=ltr][valid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=rtl][valid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=ltr][invalid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([dir=rtl][invalid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([multiline]) .input{height:var(
--spectrum-textarea-height-adjusted
);min-height:var(--spectrum-textarea-min-height);overflow:auto;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px)}:host([dir=ltr][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=rtl][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=ltr][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([dir=rtl][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([quiet]) .input{border-bottom-width:var(
--spectrum-textfield-quiet-texticon-border-bottom-size
);border-left-width:0;border-radius:var(
--spectrum-textfield-quiet-texticon-border-radius
);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}:host([dir=ltr][invalid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=rtl][invalid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=ltr][valid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}:host([dir=rtl][valid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}.icon{pointer-events:all;position:absolute}:host([dir=ltr][quiet]) .icon{padding-right:0}:host([dir=rtl][quiet]) .icon{padding-left:0}:host([dir=ltr][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([dir=rtl][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([invalid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-invalid-icon-height)/2);height:var(--spectrum-textfield-texticon-invalid-icon-height);width:var(
--spectrum-textfield-texticon-invalid-icon-width
)}:host([dir=ltr][quiet][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([dir=rtl][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([valid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-success-icon-height)/2);height:var(--spectrum-textfield-texticon-success-icon-height);width:var(
--spectrum-textfield-texticon-success-icon-width
)}:host([dir=ltr][quiet][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr]) .icon-workflow{left:var(
--spectrum-textfield-texticon-padding-left
)}:host([dir=rtl]) .icon-workflow{right:var(
--spectrum-textfield-texticon-padding-left
)}.icon-workflow{display:block;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);position:absolute;top:calc(var(--spectrum-textfield-texticon-height)/2 - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
)/2);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr][quiet]) .icon-workflow{left:0}:host([dir=rtl][quiet]) .icon-workflow{right:0}:host([dir=ltr][quiet]) .icon-workflow~.input{padding-left:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=rtl][quiet]) .icon-workflow~.input{padding-right:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=ltr]) .icon-workflow+.input{padding-left:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([dir=rtl]) .icon-workflow+.input{padding-right:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([multiline]) .icon-workflow~.input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
);box-shadow:none}#textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#textfield:hover .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#textfield:active .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}#textfield:active .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([valid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-valid,var(--spectrum-semantic-positive-icon-color)
)}:host([invalid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-hover,var(--spectrum-alias-input-border-color-invalid-hover)
)}:host([disabled]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid-disabled,var(--spectrum-alias-background-color-transparent)
)}:host([disabled]) #textfield .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}.icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host([focused]) #textfield:after{box-shadow:0 0 0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([focused][quiet]) #textfield .input{box-shadow:none}:host([focused][quiet]) #textfield:after{border-bottom:2px solid var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);bottom:calc(-1*var(--spectrum-alias-input-quiet-focusline-gap, var(--spectrum-global-dimension-static-size-10)));box-shadow:none;margin:0}.input{background-color:var(
--spectrum-textfield-m-texticon-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
);color:var(
--spectrum-textfield-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}.input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color,var(--spectrum-global-color-gray-600)
)}.input:focus,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}.input.focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}.input:focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}.input :disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);background-color:var(
--spectrum-textfield-m-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
);color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}.input :disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([quiet]) .input{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid][quiet]) #textfield .input{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host{display:inline-flex;flex-direction:column;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([multiline]){resize:both}#textfield{width:100%}#textfield,textarea{resize:inherit}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}:host([grows][quiet]) #sizer{border-bottom-width:var(--spectrum-textfield-quiet-texticon-border-size);border-left-width:0;border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}
`;e.default=r},"3GM5":function(t,e,o){"use strict";o.r(e);var r=o("ZTUT");customElements.define("sp-icon-dash75",r.IconDash75)},"3dPG":function(t,e,o){"use strict";o.r(e),o.d(e,"ElementSizes",(function(){return s})),o.d(e,"SizedMixin",(function(){return a}));var r=o("TToO"),i=o("NPpS");const s={xxs:"xxs",xs:"xs",s:"s",m:"m",l:"l",xl:"xl",xxl:"xxl"};function a(t,{validSizes:e=["s","m","l","xl"],noDefaultSize:o,defaultSize:s="m"}={}){class a extends t{constructor(){super(...arguments),this._size=s}get size(){return this._size||s}set size(t){const r=o?null:s,i=t?t.toLocaleLowerCase():t,a=e.includes(i)?i:r;if(a&&this.setAttribute("size",a),this._size===a)return;const c=this._size;this._size=a,this.requestUpdate("size",c)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("size")||o||this.setAttribute("size",this.size)}}return Object(r.__decorate)([Object(i.property)({type:String,reflect:!0})],a.prototype,"size",null),a}},"43FD":function(t,e,o){"use strict";o.r(e),o.d(e,"Asterisk100Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`},"45A8":function(t,e,o){"use strict";o.r(e),o.d(e,"Button",(function(){return n}));var r=o("TToO"),i=o("3dPG"),s=o("NPpS"),a=o("HmyH"),c=o("MyFy");class n extends(Object(i.SizedMixin)(a.StyledButton)){constructor(){super(...arguments),this.variant="cta",this.warning=!1,this.quiet=!1}static get styles(){return[...super.styles,c.default]}}Object(r.__decorate)([Object(s.property)({reflect:!0})],n.prototype,"variant",void 0),Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],n.prototype,"warning",void 0),Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],n.prototype,"quiet",void 0)},"596t":function(t,e,o){"use strict";o.r(e),o.d(e,"decorateProperty",(function(){return s})),o.d(e,"legacyPrototypeMethod",(function(){return r})),o.d(e,"standardPrototypeMethod",(function(){return i}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=(t,e,o)=>{Object.defineProperty(e,o,t)},i=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),s=({finisher:t,descriptor:e})=>(o,r)=>{var i;if(void 0===r){const r=null!==(i=o.originalKey)&&void 0!==i?i:o.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(o.key)}:{...o,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{const i=o.constructor;void 0!==e&&Object.defineProperty(o,r,e(r)),null==t||t(i,r)}}},"5Hfj":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(
--spectrum-alias-ui-icon-asterisk-size-200
)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-300
)}
`;e.default=r},"5kiI":function(t,e,o){"use strict";o.r(e);var r=o("cfEo");customElements.define("sp-radio",r.Radio)},"6kCz":function(t,e,o){"use strict";o.r(e),o.d(e,"Directive",(function(){return s})),o.d(e,"PartType",(function(){return r})),o.d(e,"directive",(function(){return i}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"7fKK":function(t,e,o){"use strict";o.r(e),o.d(e,"CheckmarkCircleIcon",(function(){return i}));var r=o("OLGJ");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=({width:t=24,height:e=24,hidden:o=!1,title:i="Checkmark Circle"}={})=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${i}"
  >
    <path
      d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm10.666 9.08L16.018 27.341a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-7.785-7.793a1.2 1.2 0 010-1.7l1.326-1.325a1.2 1.2 0 011.7 0l5.338 5.349L25.314 8.473A1.2 1.2 0 0127 8.263L28.455 9.4a1.2 1.2 0 01.211 1.68z"
    />
  </svg>`},"7irH":function(t,e,o){"use strict";o.r(e);var r=o("TiAI");customElements.define("sp-field-label",r.FieldLabel)},"8ExY":function(t,e,o){"use strict";o.r(e);var r=o("L/b0");customElements.define("sp-progress-bar",r.ProgressBar)},"8yrM":function(t,e,o){"use strict";o.r(e),o.d(e,"Checkmark300Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.102 12.514a1.087 1.087 0 01-.834-.39L.988 8.19A1.085 1.085 0 012.656 6.8l2.421 2.906 6.243-7.947a1.085 1.085 0 011.707 1.34L5.955 12.1a1.089 1.089 0 01-.838.415z"
    />
  </svg>`},"9SAB":function(t,e,o){"use strict";o.r(e);var r=o("0RlU");customElements.define("sp-icon-checkmark75",r.IconCheckmark75)},"9lJu":function(t,e,o){"use strict";o.r(e);var r=o("Aj9+");o.d(e,"classMap",(function(){return r.classMap}))},"9mbA":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(
--spectrum-alias-ui-icon-cross-size-75
)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(
--spectrum-alias-ui-icon-cross-size-100
)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(
--spectrum-alias-ui-icon-cross-size-200
)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(
--spectrum-alias-ui-icon-cross-size-300
)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(
--spectrum-alias-ui-icon-cross-size-400
)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(
--spectrum-alias-ui-icon-cross-size-500
)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(
--spectrum-alias-ui-icon-cross-size-600
)}
`;e.default=r},"9tGC":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}
`;e.default=r},"9tKs":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-radio-circle-dot-size:var(
--spectrum-radio-m-circle-dot-size,var(--spectrum-global-dimension-static-size-50)
);--spectrum-radio-circle-diameter:var(
--spectrum-radio-m-circle-diameter,var(--spectrum-alias-control-two-size-m)
);--spectrum-radio-circle-border-size:var(
--spectrum-radio-m-circle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-radio-text-size:var(
--spectrum-radio-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-radio-text-gap:var(
--spectrum-radio-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-radio-text-font-style:var(
--spectrum-radio-m-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-radio-text-font-weight:var(
--spectrum-radio-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-radio-text-line-height:var(
--spectrum-radio-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-radio-height:var(
--spectrum-radio-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-radio-radius:calc(var(--spectrum-radio-circle-diameter)/2);--spectrum-radio-border-width-checked:calc(var(--spectrum-radio-circle-diameter)/2 - var(--spectrum-radio-circle-dot-size)/2);--spectrum-radio-labelbelow-label-margin:var(
--spectrum-global-dimension-size-50
) 0 0 0;--spectrum-radio-labelbelow-height:auto;--spectrum-radio-label-margin-top:var(--spectrum-global-dimension-size-75)}:host{align-items:flex-start;display:inline-flex;max-width:100%;min-height:var(--spectrum-radio-height);position:relative;vertical-align:top}#input{box-sizing:border-box;cursor:pointer;font-family:inherit;font-size:100%;height:100%;line-height:1.15;margin:0;opacity:0;overflow:visible;padding:0;position:absolute;width:100%;z-index:1}:host([disabled]) #input{cursor:default}:host([checked]) #input+#button:before{border-width:var(
--spectrum-radio-border-width-checked
)}:host(.focus-visible) #input+#button:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host(:focus-visible) #input+#button:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}:host([dir=ltr]) #label{margin-left:var(
--spectrum-radio-text-gap
)}:host([dir=rtl]) #label{margin-right:var(
--spectrum-radio-text-gap
)}#label{font-size:var(--spectrum-radio-text-size);font-style:var(--spectrum-radio-text-font-style);font-weight:var(--spectrum-radio-text-font-weight);line-height:var(--spectrum-radio-text-line-height);margin-top:var(
--spectrum-radio-label-margin-top
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button{box-sizing:border-box;flex-grow:0;flex-shrink:0;height:var(--spectrum-radio-circle-diameter);margin:calc((var(--spectrum-radio-height) - var(--spectrum-radio-circle-diameter))/2) 0;position:relative;width:var(--spectrum-radio-circle-diameter)}#button:before{border-radius:var(--spectrum-radio-radius);border-style:solid;border-width:var(--spectrum-radio-circle-border-size);box-sizing:border-box;content:"";display:block;height:var(--spectrum-radio-circle-diameter);position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-radio-circle-diameter);z-index:0}#button:after{border-radius:100%;bottom:0;content:"";display:block;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([label-below]){align-items:center;display:inline-flex;flex-direction:column;height:var(--spectrum-radio-labelbelow-height)}:host([label-below]) #button{flex-shrink:0;margin:0}:host([label-below]) #label{margin:var(
--spectrum-radio-labelbelow-label-margin
)}:host{--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}#label{color:var(
--spectrum-radio-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#button:before{background-color:var(
--spectrum-radio-m-circle-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-radio-m-circle-border-color,var(--spectrum-alias-toggle-border-color-default)
);forced-color-adjust:none}:host(:hover) #button:before{border-color:var(
--spectrum-radio-m-circle-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
);box-shadow:none}:host(:hover[checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:hover) #label{color:var(
--spectrum-radio-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:active) #button:before{border-color:var(
--spectrum-radio-m-circle-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active[checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host(:active) #label{color:var(
--spectrum-radio-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([emphasized][checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]:hover) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized][checked]:active) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([emphasized][invalid]:hover) #input+#button:before,:host([invalid]:hover) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([emphasized][invalid]:hover) #label,:host([invalid]:hover) #label{color:var(
--spectrum-radio-m-emphasized-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([emphasized][invalid]:active) #input+#button:before,:host([invalid]:active) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([emphasized][invalid]:active) #label,:host([invalid]:active) #label{color:var(
--spectrum-radio-m-emphasized-text-color-error-down,var(--spectrum-alias-component-text-color-error-down)
)}:host([emphasized][invalid]) #button:before,:host([emphasized][invalid][checked]) #input+#button:before,:host([invalid]) #button:before,:host([invalid][checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-error,var(--spectrum-global-color-red-500)
)}:host([emphasized][invalid]) #label,:host([invalid]) #label{color:var(
--spectrum-radio-m-emphasized-text-color-error,var(--spectrum-alias-component-text-color-error-default)
)}:host([checked][disabled]) #input+#button:before,:host([disabled]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([checked][disabled]) #input~#label,:host([disabled]) #input~#label{color:var(
--spectrum-radio-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host(.focus-visible) #input+#button:before,:host(:hover.focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}:host(:focus-visible) #input+#button:before,:host(:hover:focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}:host(.focus-visible) #input+#button:after,:host(:hover.focus-visible) #input+#button:after{box-shadow:0 0 0 var(
--spectrum-radio-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-radio-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}:host(:focus-visible) #input+#button:after,:host(:hover:focus-visible) #input+#button:after{box-shadow:0 0 0 var(
--spectrum-radio-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-radio-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}:host(.focus-visible[checked]) #input+#button:before,:host(:hover.focus-visible[checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:focus-visible[checked]) #input+#button:before,:host(:hover:focus-visible[checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host([emphasized][checked].focus-visible) #input+#button:before,:host([emphasized][checked]:hover.focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]:focus-visible) #input+#button:before,:host([emphasized][checked]:hover:focus-visible) #input+#button:before{border-color:var(
--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}@media (forced-colors:active){:host{--spectrum-radio-m-circle-background-color:ButtonFace;--spectrum-radio-m-circle-border-color-down:Highlight;--spectrum-radio-m-circle-border-color-hover:Highlight;--spectrum-radio-m-circle-border-color-key-focus:Highlight;--spectrum-radio-m-circle-border-color-selected-down:Highlight;--spectrum-radio-m-circle-border-color-selected-hover:Highlight;--spectrum-radio-m-circle-border-color-selected:Highlight;--spectrum-radio-m-circle-border-color:ButtonText;--spectrum-radio-m-emphasized-circle-border-color-error-hover:Highlight;--spectrum-radio-m-emphasized-circle-border-color-error:ButtonText;--spectrum-radio-m-emphasized-circle-border-color-selected-down:Highlight;--spectrum-radio-m-emphasized-circle-border-color-selected-hover:Highlight;--spectrum-radio-m-emphasized-circle-border-color-selected-key-focus:Highlight;--spectrum-radio-m-emphasized-circle-border-color-selected:Highlight;--spectrum-radio-m-emphasized-text-color-error-down:CanvasText;--spectrum-radio-m-emphasized-text-color-error-hover:CanvasText;--spectrum-radio-m-emphasized-text-color-error:CanvasText;--spectrum-radio-m-focus-ring-color-key-focus:CanvasText;--spectrum-radio-m-text-color-down:CanvasText;--spectrum-radio-m-text-color-hover:CanvasText;--spectrum-radio-m-text-color:CanvasText}:host([invalid][checked]) #input+#button:before{border-color:var(
--spectrum-radio-m-circle-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}}:host{--spectrum-radio-label-margin-top:var(
--spectrum-global-dimension-size-75,6px
)}:host(:focus){outline:none}:host([disabled]){pointer-events:none}
`;e.default=r},"9zM0":function(t,e,o){"use strict";o.r(e),o.d(e,"InfoIcon",(function(){return i}));var r=o("OLGJ");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=({width:t=24,height:e=24,hidden:o=!1,title:i="Info"}={})=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${i}"
  >
    <path
      d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm-.3 4.3a2.718 2.718 0 012.864 2.824 2.664 2.664 0 01-2.864 2.863 2.705 2.705 0 01-2.864-2.864A2.717 2.717 0 0117.7 6.3zM22 27a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1h1v-6h-1a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v9h1a1 1 0 011 1z"
    />
  </svg>`},A4SF:function(t,e,o){"use strict";o.r(e),o.d(e,"Tabs",(function(){return m}));var r=o("TToO"),i=o("3dPG"),s=o("P/Yy"),a=o("NPpS"),c=o("h+pW"),n=o("zKLX"),l=o("UB7X"),u=o("hUtM");class m extends(Object(i.SizedMixin)(n.Focusable)){constructor(){super(...arguments),this.auto=!1,this.direction="horizontal",this.label="",this.selectionIndicatorStyle="transform: translateX(0px) scaleX(0) scaleY(0)",this.shouldAnimate=!1,this._selected="",this._tabs=[],this.rovingTabindexController=new l.RovingTabindexController(this,{focusInIndex:t=>{let e=0;return t.find((t,o)=>{const r=this.selected?!t.disabled&&t.value===this.selected:!t.disabled;return e=o,r})?e:-1},direction:()=>"horizontal"===this.direction?"horizontal":"vertical",elementEnterAction:t=>{this.auto&&(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find(t=>t.parentElement===this);e&&!e.disabled&&(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if("Enter"===t.code||"Space"===t.code){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.length||(this.tabs=[...this.querySelectorAll('[role="tab"]')]),this.tabs.forEach(t=>{t.removeAttribute("selected")}),this.selected){const t=this.tabs.find(t=>t.value===this.selected);t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator(),this.tabChangeResolver()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find(t=>t.selected);if(!t)return void(this.selectionIndicatorStyle="transform: translateX(0px) scaleX(0) scaleY(0)");await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const e=t.getBoundingClientRect(),o=this.getBoundingClientRect();if("horizontal"===this.direction){const t=e.width,r="ltr"===this.dir?e.left-o.left:e.right-o.right;this.selectionIndicatorStyle=`transform: translateX(${r}px) scaleX(${"ltr"===this.dir?t:-1*t});`}else{const t=e.height,r=e.top-o.top;this.selectionIndicatorStyle=`transform: translateY(${r}px) scaleY(${t});`}},this.tabChangePromise=Promise.resolve(),this.tabChangeResolver=function(){}}static get styles(){return[u.default]}get selected(){return this._selected}set selected(t){const e=this.selected;t!==e&&(this._selected=t,this.shouldUpdateCheckedState(),this.requestUpdate("selected",e))}set tabs(t){t!==this.tabs&&(this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}manageAutoFocus(){const t=[...this.children].map(t=>void 0!==t.updateComplete?t.updateComplete:Promise.resolve(!0));Promise.all(t).then(()=>super.manageAutoFocus())}managePanels({target:t}){t.assignedElements().map(t=>{const{value:e,id:o}=t,r=this.querySelector(`[role="tab"][value="${e}"]`);r&&(r.setAttribute("aria-controls",o),t.setAttribute("aria-labelledby",r.id)),t.selected=e===this.selected})}render(){return s.html`
            <div
                aria-label=${Object(c.ifDefined)(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @sp-tab-contentchange=${this.updateSelectionIndicator}
                id="list"
                role="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${Object(c.ifDefined)(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}firstUpdated(t){super.firstUpdated(t);const e=this.querySelector(":scope > [selected]");e&&this.selectTarget(e)}updated(t){if(super.updated(t),t.has("selected")){if(t.get("selected")){const e=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);e&&(e.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&("horizontal"===this.direction?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),this.shouldAnimate||void 0===t.get("shouldAnimate")||(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const t=this.selected;this.selected=e;this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=t)}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')],this.shouldUpdateCheckedState()}shouldUpdateCheckedState(){this.tabChangeResolver(),this.tabChangePromise=new Promise(t=>this.tabChangeResolver=t),setTimeout(this.updateCheckedState)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.tabChangePromise,t}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}Object(r.__decorate)([Object(a.property)({type:Boolean})],m.prototype,"auto",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],m.prototype,"direction",void 0),Object(r.__decorate)([Object(a.property)()],m.prototype,"label",void 0),Object(r.__decorate)([Object(a.property)({attribute:!1})],m.prototype,"selectionIndicatorStyle",void 0),Object(r.__decorate)([Object(a.property)({attribute:!1})],m.prototype,"shouldAnimate",void 0),Object(r.__decorate)([Object(a.query)("#list")],m.prototype,"tabList",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],m.prototype,"selected",null)},A9dq:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCornerTriangle300",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("nWeJ"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.CornerTriangle300Icon)()}}},Ahsq:function(t,e,o){"use strict";o.r(e);var r=o("N1ga");customElements.define("sp-toast",r.Toast)},"Aj9+":function(t,e,o){"use strict";o.r(e),o.d(e,"classMap",(function(){return s}));var r=o("v2F8"),i=o("6kCz");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=Object(i.directive)(class extends i.Directive{constructor(t){var e;if(super(t),t.type!==i.PartType.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(o=this.st)||void 0===o?void 0:o.has(t))&&this.et.add(t);return this.render(e)}const s=t.element.classList;this.et.forEach(t=>{t in e||(s.remove(t),this.et.delete(t))});for(const t in e){const o=!!e[t];o===this.et.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(o?(s.add(t),this.et.add(t)):(s.remove(t),this.et.delete(t)))}return r.noChange}})},Ajia:function(t,e,o){"use strict";o.r(e);var r=o("dkkJ");customElements.define("sp-icon-dash200",r.IconDash200)},AvTi:function(t,e,o){"use strict";o.r(e);var r=o("Hcce");customElements.define("sp-theme",r.Theme)},B6tL:function(t,e,o){"use strict";o.r(e);var r=o("etvG");customElements.define("sp-menu",r.Menu)},BA4z:function(t,e,o){"use strict";o.r(e),o.d(e,"ButtonGroup",(function(){return n}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("0Dgw");class n extends i.SpectrumElement{constructor(){super(...arguments),this.vertical=!1}static get styles(){return[c.default]}render(){return s.html`
            <slot></slot>
        `}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],n.prototype,"vertical",void 0)},BegL:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;e.default=r},Bg3B:function(t,e,o){"use strict";o.r(e);var r=o("aYK6");customElements.define("sp-icon-checkmark300",r.IconCheckmark300)},BlSX:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host([size=s]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-s-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-s-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-s-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=m]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-m-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-m-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-m-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=l]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-l-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-l-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-l-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-l-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host([size=xl]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-xl-padding-top,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-xl-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-xl-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-xl-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;display:block;font-size:var(--spectrum-fieldlabel-text-size);font-weight:var(--spectrum-fieldlabel-text-font-weight);line-height:var(--spectrum-fieldlabel-text-line-height);padding-bottom:var(--spectrum-fieldlabel-padding-bottom);padding-left:0;padding-right:0;padding-top:var(--spectrum-fieldlabel-padding-top);vertical-align:top}:host([dir=ltr]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}.required-icon{margin-bottom:0;margin-top:0}:host([dir=ltr][side-aligned=start]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=start]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=start]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=start]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl][side-aligned=start]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}:host([side-aligned=start]) .required-icon{margin-bottom:0;margin-top:var(
--spectrum-fieldlabel-m-side-asterisk-margin-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=end]){text-align:right}:host([dir=rtl][side-aligned=end]){text-align:left}:host([dir=ltr][side-aligned=end]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=end]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=end]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}:host([disabled]){color:var(
--spectrum-fieldlabel-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) .required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color,var(--spectrum-global-color-gray-600)
)}:host([side-aligned=start]) .required-icon{margin-top:0}
`;e.default=r},C0SI:function(t,e,o){"use strict";o.r(e),o.d(e,"Dash100Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M8.5 6h-7a1 1 0 010-2h7a1 1 0 010 2z" />
  </svg>`},C9Xx:function(t,e,o){"use strict";o.r(e),o.d(e,"ifDefined",(function(){return i}));var r=o("v2F8");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=t=>null!=t?t:r.nothing},"D/7L":function(t,e,o){"use strict";o.r(e),o.d(e,"MenuItemRemovedEvent",(function(){return u})),o.d(e,"MenuItemAddedOrUpdatedEvent",(function(){return m})),o.d(e,"MenuItem",(function(){return b}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=(o("J+qT"),o("MiWL")),c=o("zKLX"),n=o("IBGV"),l=o("w7+0");class u extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(t){this._item=t}}class m extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(t){this.item.menuData.focusRoot=this.item.menuData.focusRoot||t}set selectionRoot(t){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||t}get item(){return this._item}set currentAncestorWithSelects(t){this._currentAncestorWithSelects=t}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(t){this._item=t,this._currentAncestorWithSelects=void 0,t.menuData={focusRoot:void 0,selectionRoot:void 0}}}const d=new m,p=new u;class b extends(Object(a.LikeAnchor)(c.Focusable)){constructor(){super(),this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.noWrap=!1,this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}static get styles(){return[n.default,l.default]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}get focusElement(){return this}get itemChildren(){if(this._itemChildren)return this._itemChildren;const t=this.shadowRoot.querySelector('slot[name="icon"]'),e=t?t.assignedElements().map(t=>{const e=t.cloneNode(!0);return e.removeAttribute("slot"),e.classList.toggle("icon"),e}):[],o=this.shadowRoot.querySelector("slot:not([name])"),r=o?o.assignedNodes().map(t=>t.cloneNode(!0)):[];return this._itemChildren={icon:e,content:r},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}render(){return i.html`
            <slot name="icon" @slotchange=${this.breakItemChildrenCache}></slot>
            <div id="label">
                <slot
                    id="slot"
                    @slotchange=${this.breakItemChildrenCache}
                ></slot>
            </div>
            <slot name="value"></slot>
            ${this.selected?i.html`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 icon checkmark"
                      ></sp-icon-checkmark100>
                  `:i.html``}
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):i.html``}
        `}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id="sp-menu-item-"+b.instanceCount++)}updateAriaSelected(){const t=this.getAttribute("role");"option"===t?this.setAttribute("aria-selected",this.selected?"true":"false"):"menuitemcheckbox"!==t&&"menuitemradio"!==t||this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){super.updated(t),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected()}connectedCallback(){super.connectedCallback(),d.reset(this),this.dispatchEvent(d),this._parentElement=this.parentElement}disconnectedCallback(){var t;p.reset(this),null===(t=this._parentElement)||void 0===t||t.dispatchEvent(p),super.disconnectedCallback()}async triggerUpdate(){await new Promise(t=>requestAnimationFrame(t)),d.reset(this),this.dispatchEvent(d)}}b.instanceCount=0,Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],b.prototype,"active",void 0),Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],b.prototype,"focused",void 0),Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],b.prototype,"selected",void 0),Object(r.__decorate)([Object(s.property)({type:String})],b.prototype,"value",null),Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged:()=>!1})],b.prototype,"noWrap",void 0),Object(r.__decorate)([Object(s.query)(".anchor")],b.prototype,"anchorElement",void 0)},D61Q:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCross200",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("zJ5V"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Cross200Icon)()}}},D8VC:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host(.spectrum-ActionButton--staticBlack:not([quiet]):disabled){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled,rgba(0,0,0,.25)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):disabled[selected]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected,transparent
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):disabled:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled,transparent
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled)){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-default,rgba(0,0,0,.4)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):hover){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-hover,rgba(0,0,0,.55)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled)[active]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-down,rgba(0,0,0,.7)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-default,transparent
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-hover,rgba(0,0,0,.25)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-down,rgba(0,0,0,.4)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host(.spectrum-ActionButton--staticBlack:not([quiet]):not(:disabled):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host(.spectrum-ActionButton--staticBlack[quiet]:disabled){border-color:transparent}:host(.spectrum-ActionButton--staticBlack[quiet]:disabled:not([selected])){background-color:transparent}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled)){border-color:transparent}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticBlack[quiet]:not(:disabled):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticBlack:disabled[selected]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected,rgba(0,0,0,.1)
)}:host(.spectrum-ActionButton--staticBlack:disabled[selected]) .spectrum-ActionButton-holdIcon{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack:disabled[selected]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack:disabled[selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack:disabled) .spectrum-ActionButton-holdIcon{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack:disabled) #label{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack:disabled) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled)){background-color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled):hover){background-color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled)[active]){background-color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled).focus-visible){background-color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled):focus-visible){background-color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled)) .spectrum-ActionButton-holdIcon{color:inherit}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled)) #label{color:inherit}:host(.spectrum-ActionButton--staticBlack[selected]:not(:disabled)) ::slotted([slot=icon]){color:inherit}:host(.spectrum-ActionButton--staticBlack) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-ActionButton-static-black-color
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected])) .spectrum-ActionButton-holdIcon{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]):hover) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected])[active]) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]).focus-visible) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]):focus-visible) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]).is-keyboardFocused) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,#000
)}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticBlack:not(:disabled):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticBlack) #label{color:var(
--spectrum-ActionButton-static-black-color
)}:host(.spectrum-ActionButton--staticBlack) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-black-color
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):disabled){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled,hsla(0,0%,100%,.25)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):disabled[selected]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected,transparent
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):disabled:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled,transparent
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled)){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-default,hsla(0,0%,100%,.4)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):hover){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-hover,hsla(0,0%,100%,.55)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled)[active]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-down,hsla(0,0%,100%,.7)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-default,transparent
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-hover,hsla(0,0%,100%,.25)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-down,hsla(0,0%,100%,.4)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host(.spectrum-ActionButton--staticWhite:not([quiet]):not(:disabled):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host(.spectrum-ActionButton--staticWhite[quiet]:disabled){border-color:transparent}:host(.spectrum-ActionButton--staticWhite[quiet]:disabled:not([selected])){background-color:transparent}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled)){border-color:transparent}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticWhite[quiet]:not(:disabled):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-25))}:host(.spectrum-ActionButton--staticWhite:disabled[selected]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected,hsla(0,0%,100%,.1)
)}:host(.spectrum-ActionButton--staticWhite:disabled[selected]) .spectrum-ActionButton-holdIcon{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite:disabled[selected]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite:disabled[selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite:disabled) .spectrum-ActionButton-holdIcon{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite:disabled) #label{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite:disabled) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-40))}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled)){background-color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled):hover){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled)[active]){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled).focus-visible){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled):focus-visible){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled)) .spectrum-ActionButton-holdIcon{color:inherit}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled)) #label{color:inherit}:host(.spectrum-ActionButton--staticWhite[selected]:not(:disabled)) ::slotted([slot=icon]){color:inherit}:host(.spectrum-ActionButton--staticWhite) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-ActionButton-static-white-color
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected])) .spectrum-ActionButton-holdIcon{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]):hover) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected])[active]) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]).focus-visible) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]):focus-visible) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]).is-keyboardFocused) .spectrum-ActionButton-holdIcon{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,#fff
)}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticWhite:not(:disabled):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb),var(--spectrum-global-color-opacity-90))}:host(.spectrum-ActionButton--staticWhite) #label{color:var(
--spectrum-ActionButton-static-white-color
)}:host(.spectrum-ActionButton--staticWhite) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-white-color
)}:host([size=s]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-s-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-s-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-s-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-s-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-s-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-s-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-s-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-s-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-s-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-global-dimension-size-300
)}:host([size=m]){--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-m-texticon-padding-left
);--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-m-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-m-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-m-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-m-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-m-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-m-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-m-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-m-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-m-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-global-dimension-size-85)
)}:host([size=l]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-l-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-l-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-l-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-l-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-l-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-l-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-l-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-l-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-l-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-l-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-global-dimension-size-125)
)}:host([size=xl]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-xl-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-xl-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-xl-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-xl-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-xl-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-xl-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-xl-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-xl-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-global-dimension-size-160)
)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-texticon-padding-left) - var(--spectrum-actionbutton-texticon-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-icononly-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted);padding-right:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-actionbutton-textonly-border-radius);border-width:var(--spectrum-actionbutton-textonly-border-size);color:inherit;font-size:var(--spectrum-actionbutton-textonly-text-size);font-weight:var(--spectrum-actionbutton-textonly-text-font-weight);height:var(--spectrum-actionbutton-textonly-height);line-height:var(--spectrum-actionbutton-textonly-text-line-height);min-width:var(--spectrum-actionbutton-textonly-min-width);position:relative}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted))*-1);margin-right:calc((var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted))*-1)}#label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) #hold-affordance{right:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) #hold-affordance{left:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) #hold-affordance{transform:matrix(-1,0,0,1,0,0)}#hold-affordance{bottom:var(--spectrum-actionbutton-textonly-hold-icon-padding-bottom);position:absolute}:host([quiet]){border-radius:var(--spectrum-actionbutton-quiet-textonly-border-radius);border-width:var(
--spectrum-actionbutton-quiet-textonly-border-size
);font-size:var(--spectrum-actionbutton-quiet-textonly-text-size);font-weight:var(--spectrum-actionbutton-quiet-textonly-text-font-weight)}:host{--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-actionbutton-focus-ring-color:var(
--spectrum-actionbutton-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap));bottom:0;content:"";left:0;margin:calc((var(--spectrum-actionbutton-focus-ring-gap) + var(--spectrum-actionbutton-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}.spectrum-ActionButton--staticWhite{--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-white,#fff
)}.spectrum-ActionButton--staticBlack{--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-black,#000
)}.spectrum-ActionButton--staticBlack,.spectrum-ActionButton--staticWhite,:host([emphasized][selected]){--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
)}:host{background-color:var(
--spectrum-actionbutton-m-textonly-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}#hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host(:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(:hover) #hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(.focus-visible) #hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) #hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-down,var(--spectrum-alias-component-border-color-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([active]) #hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host(:disabled),:host([disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host(:disabled) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host(:disabled) #hold-affordance,:host([disabled]) #hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([selected]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected,var(--spectrum-alias-component-border-color-selected-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected].focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected]:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-selected-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-selected-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-selected-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:disabled),:host([selected][disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([selected]:disabled) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected,var(
--spectrum-alias-component-background-color-emphasized-selected-default
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected,var(--spectrum-alias-component-border-color-emphasized-selected-default)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected,var(--spectrum-alias-component-text-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-emphasized-selected-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-emphasized-selected-down)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected]:disabled),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected]:disabled),:host([emphasized][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][quiet][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected]:disabled) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([quiet]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-hover,var(--spectrum-alias-component-border-color-quiet-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-down,var(--spectrum-alias-component-background-color-quiet-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([quiet]:disabled),:host([quiet][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([quiet][selected]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([quiet][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-quiet-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-quiet-selected-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([quiet][selected][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-quiet-selected-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-quiet-selected-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([quiet][selected]:disabled),:host([quiet][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-quiet-selected-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}.spectrum-ActionButton--staticBlack,.spectrum-ActionButton--staticWhite{--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-ActionButton-static-black-color:var(
--spectrum-global-color-static-black,#000
);--spectrum-ActionButton-static-white-color:var(
--spectrum-global-color-static-white,#fff
)}:host([selected]) .spectrum-ActionButton--staticBlack,:host([selected]) .spectrum-ActionButton--staticWhite{color:inherit!important}@media (forced-colors:active){:host{--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-background-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-down:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-hover:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-texticon-icon-color:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-hover:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-key-focus:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-background-color:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-down:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-hover:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color:ButtonText;--spectrum-actionbutton-m-textonly-border-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-down:ButtonText;--spectrum-actionbutton-m-textonly-border-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-border-color-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-hold-icon-color:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-hold-icon-color-down:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus:ButtonText;--spectrum-actionbutton-m-textonly-text-color:ButtonText;--spectrum-actionbutton-m-textonly-text-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-down:ButtonText;--spectrum-actionbutton-m-textonly-text-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-key-focus:HighlightText;forced-color-adjust:none}:host([quiet][emphasized]:not(:disabled,[disabled]):hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(
--spectrum-alias-component-border-color-emphasized-selected-hover
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([quiet][emphasized]:not(:disabled,[disabled])[active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(
--spectrum-alias-component-border-color-emphasized-selected-down
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}}:host{display:inline-flex;flex-direction:row}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;e.default=r},DWDt:function(t,e,o){"use strict";o.r(e);var r=o("TF3L");customElements.define("sp-icon-chevron100",r.IconChevron100)},E69E:function(t,e,o){"use strict";o.r(e),o.d(e,"Dialog",(function(){return p}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("h+pW"),n=(o("Osxd"),o("IXFj"),o("hlMX"),o("9mbA")),l=(o("yThL"),o("0Vag"),o("j/Se")),u=o("Uv1x"),m=o("U3Ba"),d=o("1Z8/");class p extends(Object(l.FocusVisiblePolyfillMixin)(Object(u.ObserveSlotPresence)(i.SpectrumElement,['[slot="hero"]','[slot="footer"]','[slot="button"]']))){constructor(){super(...arguments),this.error=!1,this.dismissable=!1,this.noDivider=!1,this.shouldManageTabOrderForScrolling=()=>{const{offsetHeight:t,scrollHeight:e}=this.contentElement;t<e?this.contentElement.tabIndex=0:this.contentElement.removeAttribute("tabindex")}}static get styles(){return[d.default,n.default]}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]')}get hasButtons(){return this.getSlotContentPresence('[slot="button"]')}get hasHero(){return this.getSlotContentPresence('[slot="hero"]')}focus(){if(this.shadowRoot){const t=Object(m.firstFocusableIn)(this.shadowRoot);t&&(t.updateComplete?t.updateComplete.then(()=>t.focus()):t.focus(),this.removeAttribute("tabindex"))}else super.focus()}close(){this.dispatchEvent(new Event("close",{bubbles:!0}))}render(){return s.html`
            <div class="grid">
                <slot name="hero"></slot>
                <slot
                    name="heading"
                    class=${Object(c.ifDefined)(this.hasHero?this.hasHero:void 0)}
                ></slot>
                ${this.error?s.html`
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      `:s.html``}
                ${this.noDivider?s.html``:s.html`
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                <div class="content">
                    <slot @slotchange=${this.onContentSlotChange}></slot>
                </div>
                ${this.hasFooter?s.html`
                          <div class="footer">
                              <slot name="footer"></slot>
                          </div>
                      `:s.html``}
                ${this.hasButtons?s.html`
                          <sp-button-group
                              class="button-group ${this.hasFooter?"":"button-group--noFooter"}"
                          >
                              <slot name="button"></slot>
                          </sp-button-group>
                      `:s.html``}
                ${this.dismissable?s.html`
                          <sp-action-button
                              class="close-button"
                              label="Close"
                              quiet
                              size="m"
                              @click=${this.close}
                          >
                              <sp-icon-cross500
                                  class="spectrum-UIIcon-Cross500"
                                  slot="icon"
                              ></sp-icon-cross500>
                          </sp-action-button>
                      `:s.html``}
            </div>
        `}shouldUpdate(t){return t.has("mode")&&this.mode&&(this.dismissable=!1),t.has("dismissable")&&this.dismissable&&(this.dismissable=!this.mode),super.shouldUpdate(t)}onContentSlotChange(){this.shouldManageTabOrderForScrolling()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.shouldManageTabOrderForScrolling)}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),super.disconnectedCallback()}}Object(r.__decorate)([Object(a.query)(".content")],p.prototype,"contentElement",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],p.prototype,"error",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],p.prototype,"dismissable",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0,attribute:"no-divider"})],p.prototype,"noDivider",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],p.prototype,"mode",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],p.prototype,"size",void 0)},Eedm:function(t,e,o){"use strict";o.r(e),o.d(e,"OverlayStack",(function(){return s}));var r=o("l9S0"),i=o("xkU+");o("VOk/");class s{constructor(){this.overlays=[],this.preventMouseRootClose=!1,this.root=document.body,this.handlingResize=!1,this.overlayTimer=new i.OverlayTimer,this.canTabTrap=!0,this.trappingInited=!1,this._eventsAreBound=!1,this._bodyMarginsApplied=!1,this.forwardContextmenuEvent=async t=>{const e=this.overlays[this.overlays.length-1];if(!this.trappingInited||"modal"!==e.interaction||t.target!==this.overlayHolder)return;t.stopPropagation(),t.preventDefault(),await this.closeTopOverlay();let o=document.elementFromPoint(t.clientX,t.clientY);for(;null==o?void 0:o.shadowRoot;){const e=o.shadowRoot.elementFromPoint(t.clientX,t.clientY);if(!e||e===o)break;o=e}null==o||o.dispatchEvent(new MouseEvent("contextmenu",t))},this.handleMouseCapture=t=>{const e=this.topOverlay;if(t.target&&e&&e.overlayContent&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&function(t){return 0===t.button}(t)){if(t.target instanceof Node){if(t.composedPath().indexOf(e.overlayContent)>=0)return void(this.preventMouseRootClose=!0);this.preventMouseRootClose=!1}}else this.preventMouseRootClose=!0},this._doesNotCloseOnFirstClick=!1,this.handleMouse=t=>{this._doesNotCloseOnFirstClick?this._doesNotCloseOnFirstClick=!1:this.preventMouseRootClose||t.defaultPrevented||this.closeTopOverlay()},this.handleKeyUp=t=>{"Escape"===t.code&&this.closeTopOverlay()},this.handleResize=()=>{this.handlingResize||(this.handlingResize=!0,requestAnimationFrame(async()=>{const t=this.overlays.map(t=>t.updateOverlayPosition());await Promise.all(t),this.handlingResize=!1}))}}initTabTrapping(){if(this.trappingInited)return;if(this.trappingInited=!0,this.document.body.shadowRoot)return void(this.canTabTrap=!1);if(this.document.body.attachShadow({mode:"open"}),!this.document.body.shadowRoot)return;const t=this.document.body.shadowRoot;t.innerHTML='\n            <style>\n            :host {\n                position: relative;\n            }\n            #actual {\n                position: relative;\n                height: calc(100% - var(--swc-body-margins-block, 0px));\n                z-index: 0;\n                min-height: calc(100vh - var(--swc-body-margins-block, 0px));\n            }\n            #holder {\n                display: none;\n                align-items: center;\n                justify-content: center;\n                flex-flow: column;\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                top: 0;\n                left: 0;\n            }\n            [name="open"]::slotted(*) {\n                pointer-events: all;\n            }\n            #actual[aria-hidden] + #holder {\n                display: flex;\n            }\n            </style>\n            <div id="actual"><slot></slot></div>\n            <div id="holder"><slot name="open"></slot></div>\n        ',this.tabTrapper=t.querySelector("#actual"),this.overlayHolder=t.querySelector("#holder"),this.tabTrapper.attachShadow({mode:"open"}),this.tabTrapper.shadowRoot&&(this.tabTrapper.shadowRoot.innerHTML="<slot></slot>"),this.overlayHolder.addEventListener("contextmenu",this.forwardContextmenuEvent,!0),requestAnimationFrame(()=>{this.applyBodyMargins();new ResizeObserver(()=>{this.applyBodyMargins()}).observe(document.body)})}applyBodyMargins(){const{marginLeft:t,marginRight:e,marginTop:o,marginBottom:r}=getComputedStyle(document.body),i=0===parseFloat(t)&&0===parseFloat(e)&&0===parseFloat(o)&&0===parseFloat(r);i&&!this._bodyMarginsApplied||(this.tabTrapper.style.setProperty("--swc-body-margins-inline",`calc(${t} + ${e})`),this.tabTrapper.style.setProperty("--swc-body-margins-block",`calc(${o} + ${r})`),this._bodyMarginsApplied=!i)}startTabTrapping(){this.initTabTrapping(),this.canTabTrap&&(this.tabTrapper.tabIndex=-1,this.tabTrapper.setAttribute("aria-hidden","true"))}stopTabTrapping(){this.canTabTrap&&this.trappingInited&&(this.tabTrapper.removeAttribute("tabindex"),this.tabTrapper.removeAttribute("aria-hidden"))}get document(){return this.root.ownerDocument||document}get topOverlay(){return this.overlays.slice(-1)[0]}findOverlayForContent(t){for(const e of this.overlays)if(t===e.overlayContent)return e}addEventListeners(){this._eventsAreBound||(this._eventsAreBound=!0,this.document.addEventListener("click",this.handleMouseCapture,!0),this.document.addEventListener("click",this.handleMouse),this.document.addEventListener("keyup",this.handleKeyUp),window.addEventListener("resize",this.handleResize))}isClickOverlayActiveForTrigger(t){return this.overlays.some(e=>t===e.trigger&&"click"===e.interaction)}async openOverlay(t){if(this.addEventListeners(),this.findOverlayForContent(t.content))return!1;t.notImmediatelyClosable&&(this._doesNotCloseOnFirstClick=!0),"modal"===t.interaction&&this.startTabTrapping();const e=t.content;if(e.overlayWillOpenCallback){const{trigger:o}=t;e.overlayWillOpenCallback({trigger:o})}if(t.delayed){const o=[this.overlayTimer.openTimer(t.content)];t.abortPromise&&o.push(t.abortPromise);const r=await Promise.race(o);if(r){if(e.overlayOpenCancelledCallback){const{trigger:o}=t;e.overlayOpenCancelledCallback({trigger:o})}return r}}if("click"===t.interaction)this.closeAllHoverOverlays();else if("hover"===t.interaction&&this.isClickOverlayActiveForTrigger(t.trigger))return!0;const o=r.ActiveOverlay.create(t);if(this.overlays.length){this.overlays[this.overlays.length-1].obscure(o.interaction)}return document.body.appendChild(o),new Promise(t=>requestAnimationFrame(t)).then(async()=>{if(this.overlays.push(o),await o.updateComplete,this.addOverlayEventListeners(o),void 0!==e.open&&(e.open=!0),e.overlayOpenCallback){const{trigger:t}=o;e.overlayOpenCallback({trigger:t})}return"auto"===t.receivesFocus&&o.focus(),!1})}addOverlayEventListeners(t){switch(t.addEventListener("close",()=>{this.hideAndCloseOverlay(t)}),t.interaction){case"replace":this.addReplaceOverlayEventListeners(t);break;case"inline":this.addInlineOverlayEventListeners(t)}}addReplaceOverlayEventListeners(t){t.addEventListener("keydown",e=>{const{code:o}=e;"Tab"===o&&(e.stopPropagation(),this.closeOverlay(t.overlayContent),t.tabbingAway=!0,t.trigger.focus(),t.trigger.dispatchEvent(new KeyboardEvent("keydown",e)))})}addInlineOverlayEventListeners(t){t.trigger.addEventListener("keydown",t.handleInlineTriggerKeydown),t.addEventListener("keydown",e=>{const{code:o,shiftKey:r}=e;if("Tab"!==o)return;if(t.tabbingAway=!0,r){const e=document.createElement("span");return e.tabIndex=-1,t.trigger.hasAttribute("slot")&&(e.slot=t.trigger.slot),t.trigger.insertAdjacentElement("afterend",e),e.focus(),void e.remove()}e.stopPropagation();const i=t.trigger;void 0!==i.open&&(i.open=!1),this.closeOverlay(t.overlayContent),t.trigger.focus()})}closeOverlay(t){this.overlayTimer.close(t),requestAnimationFrame(()=>{const e=this.findOverlayForContent(t);this.hideAndCloseOverlay(e)})}closeAllHoverOverlays(){for(const t of this.overlays)"hover"===t.interaction&&this.hideAndCloseOverlay(t,!1)}manageFocusAfterCloseWhenOverlaysRemain(){const t=this.overlays[this.overlays.length-1];t.feature(),"modal"===t.interaction||t.hasModalRoot?t.focus():this.stopTabTrapping()}manageFocusAfterCloseWhenLastOverlay(t){this.stopTabTrapping();const e="modal"===t.interaction,o="replace"===t.interaction,r="inline"===t.interaction,i=(o||r)&&!t.tabbingAway;if(t.tabbingAway=!1,!e&&!i)return;const s=t.overlayContent.getRootNode().activeElement;let a,c;(e||t.overlayContent.contains(s)||(a=t.trigger.getRootNode(),c=a.activeElement,a.contains(c))||a.host&&a.host===c)&&t.trigger.focus()}async hideAndCloseOverlay(t,e){if(!t)return;await t.hide(e);const o=t.overlayContent;if(void 0!==o.open&&(o.open=!1),o.overlayCloseCallback){const{trigger:e}=t;o.overlayCloseCallback({trigger:e})}if("dispose"!=t.state)return;const r=this.overlays.indexOf(t);r>=0&&this.overlays.splice(r,1),this.overlays.length?this.manageFocusAfterCloseWhenOverlaysRemain():this.manageFocusAfterCloseWhenLastOverlay(t),t.remove(),t.dispose(),t.trigger.dispatchEvent(new CustomEvent("sp-closed",{bubbles:!0,composed:!0,cancelable:!0,detail:{interaction:t.interaction}}))}closeTopOverlay(){return this.hideAndCloseOverlay(this.topOverlay)}}},FFFR:function(t,e,o){"use strict";o.r(e),o.d(e,"AlertIcon",(function(){return i}));var r=o("OLGJ");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=({width:t=24,height:e=24,hidden:o=!1,title:i="Alert"}={})=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 36 36"
    width="${t}"
    aria-hidden="${o?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${i}"
  >
    <path
      d="M17.127 2.579L.4 32.512A1 1 0 001.272 34h33.456a1 1 0 00.872-1.488L18.873 2.579a1 1 0 00-1.746 0zM20 29.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
    />
  </svg>`},GayK:function(t,e,o){"use strict";o.r(e);var r=o("x4+g");customElements.define("sp-radio-group",r.RadioGroup)},Gsci:function(t,e,o){"use strict";o.r(e),o.d(e,"SpectrumMixin",(function(){return c})),o.d(e,"SpectrumElement",(function(){return n}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS");const a=new Set;new MutationObserver(()=>{const t="rtl"===document.documentElement.dir?document.documentElement.dir:"ltr";a.forEach(e=>{e.setAttribute("dir",t)})}).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function c(t){class e extends t{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return"ltr"===this.dir}hasVisibleFocusInTree(){const t=this.getRootNode().activeElement;if(!t)return!1;try{return t.matches(":focus-visible")||t.matches(".focus-visible")}catch(e){return t.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&(void 0===(t=e).startManagingContentDirection&&"SP-THEME"!==t.tagName);)e=e.assignedSlot||e.parentNode||e.host;if(this.dir="rtl"===e.dir?e.dir:this.dir||"ltr",e===document.documentElement)a.add(this);else{const{localName:t}=e;t.search("-")>-1&&!customElements.get(t)?customElements.whenDefined(t).then(()=>{e.startManagingContentDirection(this)}):e.startManagingContentDirection(this)}this._dirParent=e}var t;super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?a.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return Object(r.__decorate)([Object(s.property)({reflect:!0})],e.prototype,"dir",void 0),e}class n extends(c(i.LitElement)){}},H4Sm:function(t,e,o){"use strict";o.r(e),o.d(e,"Cross300Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`},HPyY:function(t,e,o){"use strict";o.r(e);var r=o("lNTL");customElements.define("sp-menu-group",r.MenuGroup)},HZwX:function(t,e,o){"use strict";o.r(e),o.d(e,"IconAsterisk100",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("43FD"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Asterisk100Icon)()}}},Hcce:function(t,e,o){"use strict";o.r(e),o.d(e,"Theme",(function(){return c}));var r=o("P/Yy"),i=o("ZP7E");const s=["medium","large"],a=["light","lightest","dark","darkest"];class c extends HTMLElement{constructor(){super(),this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const t=document.importNode(c.template.content,!0);this.shadowRoot.appendChild(t),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","lang"]}attributeChangedCallback(t,e,o){e!==o&&("color"===t?this.color=o:"scale"===t?this.scale=o:"lang"===t&&o&&(this.lang=o,this._provideContext()))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get color(){const t=c.themeFragmentsByKind.get("color"),{name:e}=t&&t.get("default")||{};return this._color||e||""}set color(t){if(t===this._color)return;const e=t&&a.includes(t)?t:this.color;e!==this._color&&(this._color=e,this.requestUpdate()),e?this.setAttribute("color",e):this.removeAttribute("color")}get scale(){const t=c.themeFragmentsByKind.get("scale"),{name:e}=t&&t.get("default")||{};return this._scale||e||""}set scale(t){if(t===this._scale)return;const e=t&&s.includes(t)?t:this.scale;e!==this._scale&&(this._scale=e,this.requestUpdate()),e?this.setAttribute("scale",e):this.removeAttribute("scale")}get styles(){return[...[...c.themeFragmentsByKind.keys()].reduce((t,e)=>{const o=c.themeFragmentsByKind.get(e),r=(e,r)=>{const i=o.get(e);!i||r&&!this.hasAttribute(r)||t.push(i.styles)};if("app"===e||"core"===e)r(e);else{const{[e]:t}=this;r(t,e)}return t},[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise(t=>{this.__resolve=t})}onQueryTheme(t){if(t.defaultPrevented)return;t.preventDefault();const{detail:e}=t;e.color=this.color||void 0,e.scale=this.scale||void 0,e.lang=this.lang||document.documentElement.lang||navigator.language}connectedCallback(){this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),c.instances.add(this);const t=()=>{const{dir:t}=this;this.trackedChildren.forEach(e=>{e.setAttribute("dir","rtl"===t?t:"ltr")})};if(this.observer||(this.observer=new MutationObserver(t)),this.observer.observe(this,{attributes:!0,attributeFilter:["dir"]}),!this.hasAttribute("dir")){let t=this.assignedSlot||this.parentNode;for(;t!==document.documentElement&&!(t instanceof c);)t=t.assignedSlot||t.parentNode||t.host;this.dir="rtl"===t.dir?t.dir:"ltr"}requestAnimationFrame(()=>t())}disconnectedCallback(){c.instances.delete(this),this.observer.disconnect()}startManagingContentDirection(t){this.trackedChildren.add(t)}stopManagingContentDirection(t){this.trackedChildren.delete(t)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const t=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const t=[];for(const[e,o]of c.themeFragmentsByKind)for(const[r,{styles:i}]of o){if("default"===r)continue;let o=i.cssText;c.defaultFragments.has(r)||(o=o.replace(":host",`:host([${e}='${r}'])`)),t.push(o)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t,this.localName),window.ShadyCSS.prepareTemplate(c.template,this.localName)}else if(r.supportsAdoptingStyleSheets){const e=[];for(const o of t)e.push(o.styleSheet);this.shadowRoot.adoptedStyleSheets=e}else{this.shadowRoot.querySelectorAll("style").forEach(t=>t.remove()),t.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.shadowRoot.appendChild(e)})}}static registerThemeFragment(t,e,o){const r=c.themeFragmentsByKind.get(e)||new Map;0===r.size&&(c.themeFragmentsByKind.set(e,r),r.set("default",{name:t,styles:o}),c.defaultFragments.add(t)),r.set(t,{name:t,styles:o}),c.instances.forEach(t=>t.shouldAdoptStyles())}_provideContext(){this._contextConsumers.forEach(t=>t(this.lang))}_handleContextPresence(t){const e=t.composedPath()[0];if(this._contextConsumers.has(e))this._contextConsumers.delete(e);else{this._contextConsumers.set(e,t.detail.callback);const o=this._contextConsumers.get(e);o&&o(this.lang||document.documentElement.lang||navigator.language)}}}c.themeFragmentsByKind=new Map,c.defaultFragments=new Set(["core"]),c.instances=new Set,c.registerThemeFragment("core","core",i.default)},HmyH:function(t,e,o){"use strict";o.r(e),o.d(e,"StyledButton",(function(){return s}));var r=o("pflg"),i=o("20aA");class s extends r.ButtonBase{static get styles(){return[i.default]}}},IBGV:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.checkmark{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.chevron{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]){border-left:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-texticon-text-size);font-style:normal;font-weight:var(--spectrum-listitem-texticon-text-font-weight);margin:0;min-height:var(--spectrum-listitem-texticon-height);padding:var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-right) var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-left);position:relative;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(
--spectrum-listitem-texticon-icon-gap
)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap) - var(--spectrum-listitem-textthumbnail-padding-left) - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
))}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-texticon-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([selected]){color:var(
--spectrum-listitem-m-texticon-text-color-selected,var(--spectrum-alias-component-text-color-default)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-texticon-ui-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host(:active),:host([active]){background-color:var(
--spectrum-listitem-m-texticon-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);cursor:default}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}#button{inset:0;position:absolute}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}
`;e.default=r},IEsu:function(t,e,o){"use strict";o.r(e),o.d(e,"Overlay",(function(){return i}));var r=o("Eedm");class i{constructor(t,e,o){this.isOpen=!1,this.owner=t,this.overlayElement=o,this.interaction=e}static async open(t,e,o,r){const s=new i(t,e,o);return await s.open(r),()=>{s.close()}}static update(){const t=new CustomEvent("sp-update-overlays",{bubbles:!0,composed:!0,cancelable:!0});document.dispatchEvent(t)}async open({abortPromise:t,delayed:e,offset:o=0,placement:r="top",receivesFocus:s,notImmediatelyClosable:a,virtualTrigger:c}){if(this.isOpen)return!0;void 0===e&&(e=this.overlayElement.hasAttribute("delayed"));const n={color:void 0,scale:void 0,lang:void 0},l=new CustomEvent("sp-query-theme",{bubbles:!0,composed:!0,detail:n,cancelable:!0});this.owner.dispatchEvent(l);const u={},m=new CustomEvent("sp-overlay-query",{bubbles:!0,composed:!0,detail:u,cancelable:!0});return this.overlayElement.dispatchEvent(m),await i.overlayStack.openOverlay(Object.assign({abortPromise:t,content:this.overlayElement,contentTip:u.overlayContentTipElement,delayed:e,offset:o,placement:r,trigger:this.owner,interaction:this.interaction,theme:n,receivesFocus:s,notImmediatelyClosable:a,virtualTrigger:c},u)),this.isOpen=!0,!0}close(){i.overlayStack.closeOverlay(this.overlayElement)}}i.overlayStack=new r.OverlayStack},IXFj:function(t,e,o){"use strict";o.r(e);var r=o("kqxq");customElements.define("sp-action-button",r.ActionButton)},IfAH:function(t,e,o){"use strict";o.r(e);var r=o("A9dq");customElements.define("sp-icon-corner-triangle300",r.IconCornerTriangle300)},"J+qT":function(t,e,o){"use strict";o.r(e);var r=o("ue1T");customElements.define("sp-icon-checkmark100",r.IconCheckmark100)},JjMa:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCross300",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("H4Sm"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Cross300Icon)()}}},KH6V:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentColor;stroke:currentColor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}
`;e.default=r},KSKi:function(t,e,o){"use strict";o.r(e);var r=o("D61Q");customElements.define("sp-icon-cross200",r.IconCross200)},KSLM:function(t,e,o){"use strict";o.r(e);var r=o("o3VE");o("Hcce").Theme.registerThemeFragment("light","color",r.default)},KZUk:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host([disabled]) ::slotted([slot=trigger]){pointer-events:none}#overlay-content{display:none}
`;e.default=r},Kv8c:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-actiongroup-button-gap-reset:0;--spectrum-actiongroup-quiet-compact-button-gap:var(
--spectrum-global-dimension-size-25
)}:host{display:flex;flex-wrap:wrap}::slotted(*){flex-shrink:0}:host(:not([vertical]):not([compact])){margin-top:calc(-1*var(--spectrum-actiongroup-button-gap-y, var(--spectrum-global-dimension-size-100)))}:host(:not([vertical]):not([compact])) ::slotted(*){flex-shrink:0;margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]:not([vertical]):not([compact])) ::slotted(:not(:last-child)){margin-right:var(
--spectrum-actiongroup-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]:not([vertical]):not([compact])) ::slotted(:not(:last-child)){margin-left:var(
--spectrum-actiongroup-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][vertical][vertical]){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][vertical][vertical]){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([vertical][vertical]){margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][compact][quiet]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-quiet-compact-button-gap
)}:host([dir=rtl][compact][quiet]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-quiet-compact-button-gap
)}:host([compact][quiet]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=ltr][compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-quiet-compact-button-gap
)}:host([compact]:not([quiet])){flex-wrap:nowrap}:host([compact]:not([quiet])) ::slotted(*){border-radius:0;position:relative;z-index:0}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){margin-right:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){margin-left:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){margin-left:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){margin-right:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){margin-right:0}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){margin-left:0}:host([compact]:not([quiet])) ::slotted([selected]){z-index:1}:host([compact]:not([quiet])) ::slotted(:hover){z-index:2}:host([compact]:not([quiet])) ::slotted(.focus-visible){z-index:3}:host([compact]:not([quiet])) ::slotted(:focus-visible){z-index:3}:host([dir=ltr][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-left:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-right:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-right:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-left:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([compact][vertical]:not([quiet])) ::slotted(*){border-radius:0}:host([compact][vertical]:not([quiet])) ::slotted(:not(:first-child)){margin-bottom:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2);margin-top:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([compact][vertical]:not([quiet])) ::slotted(:first-child){border-radius:0;margin-bottom:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([compact][vertical]:not([quiet])) ::slotted(:last-child){border-radius:0;margin-bottom:0;margin-top:calc(-1*var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)/2)}:host([justified]) ::slotted(*){flex:1}:host([dir][compact][vertical]) ::slotted(:nth-child(n)){margin-left:0;margin-right:0}:host([justified]) ::slotted(:not([role])),:host([vertical]) ::slotted(:not([role])){align-items:stretch;display:flex;flex-direction:column}:host([compact]:not([quiet])) ::slotted(:not([role])){--overriden-border-radius:0;--spectrum-actionbutton-s-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-s-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-m-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-m-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-l-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-l-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-xl-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-xl-textonly-border-radius:var(
--overriden-border-radius
)}:host([compact][vertical]:not([quiet])) ::slotted(:not([role]):first-child){--overriden-border-radius:var(--spectrum-alias-border-radius-regular) var(--spectrum-alias-border-radius-regular) 0 0}:host([compact][vertical]:not([quiet])) ::slotted(:not([role]):last-child){--overriden-border-radius:0 0 var(--spectrum-alias-border-radius-regular) var(--spectrum-alias-border-radius-regular)}:host([dir=ltr][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):first-child){--overriden-border-radius:var(--spectrum-alias-border-radius-regular) 0 0 var(--spectrum-alias-border-radius-regular)}:host([dir=rtl][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):first-child){--overriden-border-radius:0 var(--spectrum-alias-border-radius-regular) var(--spectrum-alias-border-radius-regular) 0}:host([dir=ltr][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):last-child){--overriden-border-radius:0 var(--spectrum-alias-border-radius-regular) var(--spectrum-alias-border-radius-regular) 0}:host([dir=rtl][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):last-child){--overriden-border-radius:var(--spectrum-alias-border-radius-regular) 0 0 var(--spectrum-alias-border-radius-regular)}
`;e.default=r},"L/b0":function(t,e,o){"use strict";o.r(e),o.d(e,"ProgressBar",(function(){return l}));var r=o("TToO"),i=o("3dPG"),s=o("Gsci"),a=o("P/Yy"),c=o("NPpS"),n=(o("7irH"),o("fQXj"));class l extends(Object(i.SizedMixin)(s.SpectrumElement)){constructor(){super(...arguments),this.indeterminate=!1,this.label="",this.overBackground=!1,this.sideLabel=!1,this.progress=0}static get styles(){return[n.default]}render(){return a.html`
            ${this.label?a.html`
                      <sp-field-label size=${this.size} class="label">
                          ${this.label}
                      </sp-field-label>
                      ${this.indeterminate?a.html``:a.html`
                                <sp-field-label
                                    size=${this.size}
                                    class="percentage"
                                >
                                    ${this.progress}%
                                </sp-field-label>
                            `}
                  `:a.html``}
            <div class="track">
                <div
                    class="fill"
                    style="transform: scaleX(calc(${this.progress} / 100));"
                ></div>
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("role")||this.setAttribute("role","progressbar")}updated(t){super.updated(t),t.has("indeterminate")&&(this.indeterminate?(this.removeAttribute("aria-valuemin"),this.removeAttribute("aria-valuemax")):(this.setAttribute("aria-valuemin","0"),this.setAttribute("aria-valuemax","100"))),!this.indeterminate&&t.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),this.label&&t.has("label")&&this.setAttribute("aria-label",this.label)}}Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],l.prototype,"indeterminate",void 0),Object(r.__decorate)([Object(c.property)({type:String})],l.prototype,"label",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0,attribute:"over-background"})],l.prototype,"overBackground",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0,attribute:"side-label"})],l.prototype,"sideLabel",void 0),Object(r.__decorate)([Object(c.property)({type:Number})],l.prototype,"progress",void 0)},"LJ+g":function(t,e,o){"use strict";o.r(e),o.d(e,"live",(function(){return a}));var r=o("v2F8"),i=o("6kCz"),s=o("fjtd");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Object(i.directive)(class extends i.Directive{constructor(t){if(super(t),t.type!==i.PartType.PROPERTY&&t.type!==i.PartType.ATTRIBUTE&&t.type!==i.PartType.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Object(s.isSingleExpression)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===r.noChange||e===r.nothing)return e;const o=t.element,a=t.name;if(t.type===i.PartType.PROPERTY){if(e===o[a])return r.noChange}else if(t.type===i.PartType.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(a))return r.noChange}else if(t.type===i.PartType.ATTRIBUTE&&o.getAttribute(a)===e+"")return r.noChange;return Object(s.setCommittedValue)(t),e}})},LV7E:function(t,e,o){"use strict";o.r(e),o.d(e,"customElement",(function(){return r}));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:r}=e;return{kind:o,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)},M5VR:function(t,e,o){"use strict";o.r(e),o.d(e,"Dash200Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M10.021 7.042H1.98a1.042 1.042 0 110-2.083h8.043a1.042 1.042 0 010 2.083z" />
  </svg>`},MKrY:function(t,e,o){"use strict";o.r(e);var r=o("jBp9");customElements.define("sp-action-group",r.ActionGroup)},MiWL:function(t,e,o){"use strict";o.r(e),o.d(e,"LikeAnchor",(function(){return c}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=o("h+pW");function c(t){class e extends t{renderAnchor({id:t,className:e,ariaHidden:o,labelledby:r,tabindex:s,anchorContent:c=i.html`<slot></slot>`}){return i.html`<a
                    id=${t}
                    class=${Object(a.ifDefined)(e)}
                    href=${Object(a.ifDefined)(this.href)}
                    download=${Object(a.ifDefined)(this.download)}
                    target=${Object(a.ifDefined)(this.target)}
                    aria-label=${Object(a.ifDefined)(this.label)}
                    aria-labelledby=${Object(a.ifDefined)(r)}
                    aria-hidden=${Object(a.ifDefined)(o?"true":void 0)}
                    tabindex=${Object(a.ifDefined)(s)}
                    rel=${Object(a.ifDefined)(this.rel)}
                >${c}</a>`}}return Object(r.__decorate)([Object(s.property)({reflect:!0})],e.prototype,"download",void 0),Object(r.__decorate)([Object(s.property)()],e.prototype,"label",void 0),Object(r.__decorate)([Object(s.property)({reflect:!0})],e.prototype,"href",void 0),Object(r.__decorate)([Object(s.property)({reflect:!0})],e.prototype,"target",void 0),Object(r.__decorate)([Object(s.property)({reflect:!0})],e.prototype,"rel",void 0),e}},"MsV+":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(var(--spectrum-overlay-animation-distance)*-1))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(var(--spectrum-overlay-animation-distance)*-1))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400)}:host{border-radius:var(
--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-height:var(
--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400)
);min-width:var(
--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400)
);outline:none;position:absolute}#tip{position:absolute;-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
)}:host([dialog]){min-width:var(
--spectrum-popover-dialog-min-width
);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(
--spectrum-popover-target-offset
)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(
--spectrum-popover-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(--spectrum-global-dimension-size-150)*-1);top:50%}:host([placement*=bottom][tip]){margin-top:var(
--spectrum-popover-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(
--spectrum-popover-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
);-webkit-clip-path:inset(-30px -30px);clip-path:inset(-30px -30px);filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));-webkit-filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));will-change:filter}#tip .triangle{fill:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);stroke:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
)}:host{--sp-popover-tip-size:24px;min-width:min-content}:host([placement*=bottom]),:host([placement*=top]){max-height:calc(100% - var(--spectrum-overlay-animation-distance))}:host([placement*=left]),:host([placement*=right]){max-width:calc(100% - var(--spectrum-overlay-animation-distance))}::slotted(*){overscroll-behavior:contain}.tip{height:calc(var(--sp-popover-tip-size)/2);left:0;position:absolute;width:var(--sp-popover-tip-size)}:host([placement*=right]) #tip{transform:none}:host([placement*=bottom]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform:rotate(-90deg) translateY(-200%);transform-origin:100% 0}:host([placement*=right]) .tip{transform:rotate(90deg);transform-origin:0 0}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;e.default=r},MyFy:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-height:100%}:host:after{border-radius:calc(var(--spectrum-button-primary-texticon-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}:host(:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-button-primary-textonly-text-padding-bottom:var(
--spectrum-button-s-primary-textonly-text-padding-bottom
);--spectrum-button-primary-texticon-text-size:var(
--spectrum-button-s-primary-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-button-primary-texticon-text-font-weight:var(
--spectrum-button-s-primary-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-texticon-text-line-height:var(
--spectrum-button-s-primary-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-texticon-icon-gap:var(
--spectrum-button-s-primary-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-button-primary-texticon-focus-ring-size:var(
--spectrum-button-s-primary-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-texticon-border-size:var(
--spectrum-button-s-primary-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-texticon-border-radius:var(
--spectrum-button-s-primary-texticon-border-radius,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-texticon-padding-left:var(
--spectrum-button-s-primary-texticon-padding-left,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-textonly-border-size:var(
--spectrum-button-s-primary-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-textonly-min-width:var(
--spectrum-button-s-primary-textonly-min-width,var(--spectrum-global-dimension-size-675)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-s-primary-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-s-primary-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-textonly-height:var(
--spectrum-button-s-primary-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-textonly-text-padding-top:calc(var(
--spectrum-button-s-primary-textonly-text-padding-top,
var(--spectrum-global-dimension-static-size-50)
) - 1px)}:host([size=m]){--spectrum-button-primary-texticon-padding-left:var(
--spectrum-button-m-primary-texticon-padding-left
);--spectrum-button-primary-texticon-text-size:var(
--spectrum-button-m-primary-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-button-primary-texticon-text-font-weight:var(
--spectrum-button-m-primary-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-texticon-text-line-height:var(
--spectrum-button-m-primary-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-texticon-icon-gap:var(
--spectrum-button-m-primary-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-button-primary-texticon-focus-ring-size:var(
--spectrum-button-m-primary-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-texticon-border-size:var(
--spectrum-button-m-primary-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-texticon-border-radius:var(
--spectrum-button-m-primary-texticon-border-radius,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-textonly-text-padding-top:var(
--spectrum-button-m-primary-textonly-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-button-primary-textonly-border-size:var(
--spectrum-button-m-primary-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-textonly-min-width:var(
--spectrum-button-m-primary-textonly-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-m-primary-textonly-padding-right,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-m-primary-textonly-padding-left,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-textonly-height:var(
--spectrum-button-m-primary-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-button-primary-textonly-text-padding-bottom:calc(var(
--spectrum-button-m-primary-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-115)
) - 1px)}:host([size=l]){--spectrum-button-primary-textonly-text-padding-top:var(
--spectrum-button-l-primary-textonly-text-padding-top
);--spectrum-button-primary-texticon-text-size:var(
--spectrum-button-l-primary-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-button-primary-texticon-text-font-weight:var(
--spectrum-button-l-primary-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-texticon-text-line-height:var(
--spectrum-button-l-primary-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-texticon-icon-gap:var(
--spectrum-button-l-primary-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-button-primary-texticon-focus-ring-size:var(
--spectrum-button-l-primary-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-texticon-border-size:var(
--spectrum-button-l-primary-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-texticon-border-radius:var(
--spectrum-button-l-primary-texticon-border-radius,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-texticon-padding-left:var(
--spectrum-button-l-primary-texticon-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-button-primary-textonly-text-padding-bottom:var(
--spectrum-button-l-primary-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-button-primary-textonly-border-size:var(
--spectrum-button-l-primary-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-textonly-min-width:var(
--spectrum-button-l-primary-textonly-min-width,var(--spectrum-global-dimension-size-1125)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-l-primary-textonly-padding-right,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-l-primary-textonly-padding-left,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-textonly-height:var(
--spectrum-button-l-primary-textonly-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-button-primary-texticon-padding-left:var(
--spectrum-button-xl-primary-texticon-padding-left
);--spectrum-button-primary-texticon-text-size:var(
--spectrum-button-xl-primary-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-button-primary-texticon-text-font-weight:var(
--spectrum-button-xl-primary-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-texticon-text-line-height:var(
--spectrum-button-xl-primary-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-texticon-icon-gap:var(
--spectrum-button-xl-primary-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-texticon-focus-ring-size:var(
--spectrum-button-xl-primary-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-texticon-border-size:var(
--spectrum-button-xl-primary-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-texticon-border-radius:var(
--spectrum-button-xl-primary-texticon-border-radius,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-textonly-text-padding-top:var(
--spectrum-button-xl-primary-textonly-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-textonly-border-size:var(
--spectrum-button-xl-primary-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-textonly-min-width:var(
--spectrum-button-xl-primary-textonly-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-button-primary-textonly-padding-right:var(
--spectrum-button-xl-primary-textonly-padding-right,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-textonly-padding-left:var(
--spectrum-button-xl-primary-textonly-padding-left,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-textonly-height:var(
--spectrum-button-xl-primary-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-button-primary-textonly-text-padding-bottom:calc(var(
--spectrum-button-xl-primary-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-175)
) - 1px)}:host{--spectrum-button-primary-padding-left-adjusted:calc(var(--spectrum-button-primary-texticon-padding-left) - var(--spectrum-button-primary-texticon-border-size));--spectrum-button-primary-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-textonly-padding-left) - var(--spectrum-button-primary-texticon-border-size));--spectrum-button-primary-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-textonly-padding-right) - var(--spectrum-button-primary-texticon-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-button-primary-textonly-padding-left-adjusted
);padding-right:var(
--spectrum-button-primary-textonly-padding-right-adjusted
)}:host([dir=rtl]){padding-left:var(
--spectrum-button-primary-textonly-padding-right-adjusted
);padding-right:var(
--spectrum-button-primary-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-button-primary-texticon-border-radius);border-style:solid;border-width:var(
--spectrum-button-primary-texticon-border-size
);font-size:var(--spectrum-button-primary-texticon-text-size);font-weight:var(--spectrum-button-primary-texticon-text-font-weight);height:auto;min-height:var(--spectrum-button-primary-textonly-height);min-width:var(--spectrum-button-primary-textonly-min-width);padding-bottom:0;padding-top:0}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-button-primary-textonly-padding-left-adjusted) - var(--spectrum-button-primary-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-button-primary-textonly-padding-left-adjusted) - var(--spectrum-button-primary-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-button-primary-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-button-primary-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}#label{line-height:var(
--spectrum-button-primary-texticon-text-line-height
);padding-bottom:calc(var(--spectrum-button-primary-textonly-text-padding-bottom) - var(--spectrum-button-primary-textonly-border-size));padding-top:calc(var(--spectrum-button-primary-textonly-text-padding-top) - var(--spectrum-button-primary-textonly-border-size))}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-texticon-focus-ring-size) var(
--spectrum-button-m-primary-texticon-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-texticon-focus-ring-size) var(
--spectrum-button-m-primary-texticon-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([variant=cta]){background-color:var(
--spectrum-button-m-cta-texticon-background-color,var(--spectrum-semantic-cta-background-color-default)
);border-color:var(
--spectrum-button-m-cta-texticon-border-color,var(--spectrum-semantic-cta-background-color-default)
);color:var(
--spectrum-button-m-cta-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=cta]:hover){background-color:var(
--spectrum-button-m-cta-texticon-background-color-hover,var(--spectrum-semantic-cta-background-color-hover)
);border-color:var(
--spectrum-button-m-cta-texticon-border-color-hover,var(--spectrum-semantic-cta-background-color-hover)
);color:var(
--spectrum-button-m-cta-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=cta].focus-visible){background-color:var(
--spectrum-button-m-cta-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-hover)
);border-color:var(
--spectrum-button-m-cta-texticon-border-color-key-focus,var(--spectrum-semantic-cta-background-color-hover)
);color:var(
--spectrum-button-m-cta-texticon-text-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=cta]:focus-visible){background-color:var(
--spectrum-button-m-cta-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-hover)
);border-color:var(
--spectrum-button-m-cta-texticon-border-color-key-focus,var(--spectrum-semantic-cta-background-color-hover)
);color:var(
--spectrum-button-m-cta-texticon-text-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=cta][active]){background-color:var(
--spectrum-button-m-cta-texticon-background-color-down,var(--spectrum-semantic-cta-background-color-down)
);border-color:var(
--spectrum-button-m-cta-texticon-border-color-down,var(--spectrum-semantic-cta-background-color-down)
);color:var(
--spectrum-button-m-cta-texticon-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=cta]:disabled),:host([variant=cta][disabled]){background-color:var(
--spectrum-button-m-cta-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-cta-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-cta-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=primary]){background-color:var(
--spectrum-button-m-primary-texticon-background-color,var(--spectrum-alias-button-primary-background-color-default)
);border-color:var(
--spectrum-button-m-primary-texticon-border-color,var(--spectrum-alias-button-primary-border-color-default)
);color:var(
--spectrum-button-m-primary-texticon-text-color,var(--spectrum-alias-button-primary-text-color-default)
)}:host([variant=primary]:hover){background-color:var(
--spectrum-button-m-primary-texticon-background-color-hover,var(--spectrum-alias-button-primary-background-color-hover)
);border-color:var(
--spectrum-button-m-primary-texticon-border-color-hover,var(--spectrum-alias-button-primary-border-color-hover)
);color:var(
--spectrum-button-m-primary-texticon-text-color-hover,var(--spectrum-alias-button-primary-text-color-hover)
)}:host([variant=primary].focus-visible){background-color:var(
--spectrum-button-m-primary-texticon-background-color-key-focus,var(--spectrum-alias-button-primary-background-color-key-focus)
);border-color:var(
--spectrum-button-m-primary-texticon-border-color-key-focus,var(--spectrum-alias-button-primary-border-color-key-focus)
);color:var(
--spectrum-button-m-primary-texticon-text-color-key-focus,var(--spectrum-alias-button-primary-text-color-key-focus)
)}:host([variant=primary]:focus-visible){background-color:var(
--spectrum-button-m-primary-texticon-background-color-key-focus,var(--spectrum-alias-button-primary-background-color-key-focus)
);border-color:var(
--spectrum-button-m-primary-texticon-border-color-key-focus,var(--spectrum-alias-button-primary-border-color-key-focus)
);color:var(
--spectrum-button-m-primary-texticon-text-color-key-focus,var(--spectrum-alias-button-primary-text-color-key-focus)
)}:host([variant=primary][active]){background-color:var(
--spectrum-button-m-primary-texticon-background-color-down,var(--spectrum-alias-button-primary-background-color-down)
);border-color:var(
--spectrum-button-m-primary-texticon-border-color-down,var(--spectrum-alias-button-primary-border-color-down)
);color:var(
--spectrum-button-m-primary-texticon-text-color-down,var(--spectrum-alias-button-primary-text-color-down)
)}:host([variant=primary]:disabled),:host([variant=primary][disabled]){background-color:var(
--spectrum-button-m-primary-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-primary-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-primary-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=secondary]){background-color:var(
--spectrum-button-m-secondary-texticon-background-color,var(--spectrum-alias-button-secondary-background-color-default)
);border-color:var(
--spectrum-button-m-secondary-texticon-border-color,var(--spectrum-alias-button-secondary-border-color-default)
);color:var(
--spectrum-button-m-secondary-texticon-text-color,var(--spectrum-alias-button-secondary-text-color-default)
)}:host([variant=secondary]:hover){background-color:var(
--spectrum-button-m-secondary-texticon-background-color-hover,var(--spectrum-alias-button-secondary-background-color-hover)
);border-color:var(
--spectrum-button-m-secondary-texticon-border-color-hover,var(--spectrum-alias-button-secondary-border-color-hover)
);color:var(
--spectrum-button-m-secondary-texticon-text-color-hover,var(--spectrum-alias-button-secondary-text-color-hover)
)}:host([variant=secondary].focus-visible){background-color:var(
--spectrum-button-m-secondary-texticon-background-color-key-focus,var(--spectrum-alias-button-secondary-background-color-key-focus)
);border-color:var(
--spectrum-button-m-secondary-texticon-border-color-key-focus,var(--spectrum-alias-button-secondary-border-color-key-focus)
);color:var(
--spectrum-button-m-secondary-texticon-text-color-key-focus,var(--spectrum-alias-button-secondary-text-color-key-focus)
)}:host([variant=secondary]:focus-visible){background-color:var(
--spectrum-button-m-secondary-texticon-background-color-key-focus,var(--spectrum-alias-button-secondary-background-color-key-focus)
);border-color:var(
--spectrum-button-m-secondary-texticon-border-color-key-focus,var(--spectrum-alias-button-secondary-border-color-key-focus)
);color:var(
--spectrum-button-m-secondary-texticon-text-color-key-focus,var(--spectrum-alias-button-secondary-text-color-key-focus)
)}:host([variant=secondary][active]){background-color:var(
--spectrum-button-m-secondary-texticon-background-color-down,var(--spectrum-alias-button-secondary-background-color-down)
);border-color:var(
--spectrum-button-m-secondary-texticon-border-color-down,var(--spectrum-alias-button-secondary-border-color-down)
);color:var(
--spectrum-button-m-secondary-texticon-text-color-down,var(--spectrum-alias-button-secondary-text-color-down)
)}:host([variant=secondary]:disabled),:host([variant=secondary][disabled]){background-color:var(
--spectrum-button-m-secondary-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-secondary-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-secondary-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=negative]){background-color:var(
--spectrum-button-m-negative-texticon-background-color,var(--spectrum-alias-button-negative-background-color-default)
);border-color:var(
--spectrum-button-m-negative-texticon-border-color,var(--spectrum-alias-button-negative-border-color-default)
);color:var(
--spectrum-button-m-negative-texticon-text-color,var(--spectrum-alias-button-negative-text-color-default)
)}:host([variant=negative]:hover){background-color:var(
--spectrum-button-m-negative-texticon-background-color-hover,var(--spectrum-alias-button-negative-background-color-hover)
);border-color:var(
--spectrum-button-m-negative-texticon-border-color-hover,var(--spectrum-alias-button-negative-border-color-hover)
);color:var(
--spectrum-button-m-negative-texticon-text-color-hover,var(--spectrum-alias-button-negative-text-color-hover)
)}:host([variant=negative].focus-visible){background-color:var(
--spectrum-button-m-negative-texticon-background-color-key-focus,var(--spectrum-alias-button-negative-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-texticon-border-color-key-focus,var(--spectrum-alias-button-negative-border-color-key-focus)
);color:var(
--spectrum-button-m-negative-texticon-text-color-key-focus,var(--spectrum-alias-button-negative-text-color-key-focus)
)}:host([variant=negative]:focus-visible){background-color:var(
--spectrum-button-m-negative-texticon-background-color-key-focus,var(--spectrum-alias-button-negative-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-texticon-border-color-key-focus,var(--spectrum-alias-button-negative-border-color-key-focus)
);color:var(
--spectrum-button-m-negative-texticon-text-color-key-focus,var(--spectrum-alias-button-negative-text-color-key-focus)
)}:host([variant=negative][active]){background-color:var(
--spectrum-button-m-negative-texticon-background-color-down,var(--spectrum-alias-button-negative-background-color-down)
);border-color:var(
--spectrum-button-m-negative-texticon-border-color-down,var(--spectrum-alias-button-negative-border-color-down)
);color:var(
--spectrum-button-m-negative-texticon-text-color-down,var(--spectrum-alias-button-negative-text-color-down)
)}:host([variant=negative]:disabled),:host([variant=negative][disabled]){background-color:var(
--spectrum-button-m-negative-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-negative-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-negative-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=overBackground]){background-color:var(
--spectrum-button-m-primary-overbackground-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-overbackground-texticon-border-color,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-overbackground-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){background-color:var(
--spectrum-button-m-primary-overbackground-texticon-background-color-hover,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-m-primary-overbackground-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-m-primary-overbackground-texticon-background-color-hover,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-m-primary-overbackground-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground]:focus-visible){background-color:var(
--spectrum-button-m-primary-overbackground-texticon-background-color-hover,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-m-primary-overbackground-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-overbackground-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-overbackground-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){background-color:var(
--spectrum-button-m-primary-overbackground-texticon-background-color-down,var(--spectrum-global-color-static-white)
);border-color:var(
--spectrum-button-m-primary-overbackground-texticon-border-color-down,var(--spectrum-global-color-static-white)
);color:inherit}:host([variant=overBackground]:disabled),:host([variant=overBackground][disabled]){background-color:var(
--spectrum-button-m-primary-overbackground-texticon-background-color-disabled,var(--spectrum-alias-background-color-overbackground-disabled)
);border-color:var(
--spectrum-button-m-primary-overbackground-texticon-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-primary-overbackground-texticon-text-color-disabled,var(--spectrum-alias-text-color-overbackground-disabled)
)}:host([variant=overBackground][quiet]){background-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-border-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:hover){background-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-hover,var(--spectrum-alias-background-color-quiet-overbackground-hover)
);border-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-hover,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet].focus-visible){background-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-hover,var(--spectrum-alias-background-color-quiet-overbackground-hover)
);border-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-hover,var(--spectrum-alias-border-color-transparent)
);box-shadow:none;color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:focus-visible){background-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-hover,var(--spectrum-alias-background-color-quiet-overbackground-hover)
);border-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-hover,var(--spectrum-alias-border-color-transparent)
);box-shadow:none;color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-overbackground-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-overbackground-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet][active]){background-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-down,var(--spectrum-alias-background-color-quiet-overbackground-down)
);border-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-down,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][quiet]:disabled),:host([variant=overBackground][quiet][disabled]){background-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-disabled,var(--spectrum-alias-text-color-quiet-overbackground-disabled)
)}:host([variant=primary][quiet]){background-color:var(
--spectrum-button-m-primary-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-quiet-texticon-border-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-button-m-primary-quiet-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([variant=primary][quiet]:hover){background-color:var(
--spectrum-button-m-primary-quiet-texticon-background-color-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-primary-quiet-texticon-border-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-primary-quiet-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet].focus-visible){background-color:var(
--spectrum-button-m-primary-quiet-texticon-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-primary-quiet-texticon-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-primary-quiet-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet]:focus-visible){background-color:var(
--spectrum-button-m-primary-quiet-texticon-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-primary-quiet-texticon-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-primary-quiet-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet][active]){background-color:var(
--spectrum-button-m-primary-quiet-texticon-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-quiet-texticon-border-color-down,var(--spectrum-global-color-gray-300)
);color:var(
--spectrum-button-m-primary-quiet-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([variant=primary][quiet]:disabled),:host([variant=primary][quiet][disabled]){background-color:var(
--spectrum-button-m-primary-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-quiet-texticon-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-primary-quiet-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=secondary][quiet]){background-color:var(
--spectrum-button-m-secondary-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-quiet-texticon-border-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-button-m-secondary-quiet-texticon-text-color,var(--spectrum-global-color-gray-700)
)}:host([variant=secondary][quiet]:hover){background-color:var(
--spectrum-button-m-secondary-quiet-texticon-background-color-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-secondary-quiet-texticon-border-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-secondary-quiet-texticon-text-color-hover,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet].focus-visible){background-color:var(
--spectrum-button-m-secondary-quiet-texticon-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-secondary-quiet-texticon-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-secondary-quiet-texticon-text-color-key-focus,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet]:focus-visible){background-color:var(
--spectrum-button-m-secondary-quiet-texticon-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-secondary-quiet-texticon-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-secondary-quiet-texticon-text-color-key-focus,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet][active]){background-color:var(
--spectrum-button-m-secondary-quiet-texticon-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-quiet-texticon-border-color-down,var(--spectrum-global-color-gray-300)
);color:var(
--spectrum-button-m-secondary-quiet-texticon-text-color-down,var(--spectrum-global-color-gray-800)
)}:host([variant=secondary][quiet]:disabled),:host([variant=secondary][quiet][disabled]){background-color:var(
--spectrum-button-m-secondary-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-quiet-texticon-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-secondary-quiet-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=negative][quiet]){background-color:var(
--spectrum-button-m-negative-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-negative-quiet-texticon-border-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-button-m-negative-quiet-texticon-text-color,var(--spectrum-semantic-negative-text-color-small)
)}:host([variant=negative][quiet]:hover){background-color:var(
--spectrum-button-m-negative-quiet-texticon-background-color-hover,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-negative-quiet-texticon-border-color-hover,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-negative-quiet-texticon-text-color-hover,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet].focus-visible){background-color:var(
--spectrum-button-m-negative-quiet-texticon-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-negative-quiet-texticon-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-negative-quiet-texticon-text-color-key-focus,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet]:focus-visible){background-color:var(
--spectrum-button-m-negative-quiet-texticon-background-color-key-focus,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-button-m-negative-quiet-texticon-border-color-key-focus,var(--spectrum-global-color-gray-200)
);color:var(
--spectrum-button-m-negative-quiet-texticon-text-color-key-focus,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet][active]){background-color:var(
--spectrum-button-m-negative-quiet-texticon-background-color-down,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-negative-quiet-texticon-border-color-down,var(--spectrum-global-color-gray-300)
);color:var(
--spectrum-button-m-negative-quiet-texticon-text-color-down,var(--spectrum-global-color-red-700)
)}:host([variant=negative][quiet]:disabled),:host([variant=negative][quiet][disabled]){background-color:var(
--spectrum-button-m-negative-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-negative-quiet-texticon-border-color-disabled,var(--spectrum-alias-border-color-transparent)
);color:var(
--spectrum-button-m-negative-quiet-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}@media (forced-colors:active){:host{--spectrum-button-m-cta-texticon-background-color:ButtonText;--spectrum-button-m-cta-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-cta-texticon-background-color-down:Highlight;--spectrum-button-m-cta-texticon-background-color-hover:Highlight;--spectrum-button-m-cta-texticon-background-color-key-focus:Highlight;--spectrum-button-m-cta-texticon-border-color:ButtonFace;--spectrum-button-m-cta-texticon-border-color-disabled:GrayText;--spectrum-button-m-cta-texticon-border-color-down:Highlight;--spectrum-button-m-cta-texticon-border-color-hover:Highlight;--spectrum-button-m-cta-texticon-border-color-key-focus:Highlight;--spectrum-button-m-cta-texticon-text-color:ButtonFace;--spectrum-button-m-cta-texticon-text-color-disabled:GrayText;--spectrum-button-m-cta-texticon-text-color-down:Buttonface;--spectrum-button-m-cta-texticon-text-color-hover:Buttonface;--spectrum-button-m-cta-texticon-text-color-key-focus:Buttonface;--spectrum-button-m-negative-quiet-texticon-background-color:ButtonFace;--spectrum-button-m-negative-quiet-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-negative-quiet-texticon-background-color-down:ButtonFace;--spectrum-button-m-negative-quiet-texticon-background-color-hover:ButtonFace;--spectrum-button-m-negative-quiet-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-negative-quiet-texticon-border-color:ButtonText;--spectrum-button-m-negative-quiet-texticon-border-color-disabled:GrayText;--spectrum-button-m-negative-quiet-texticon-border-color-down:Highlight;--spectrum-button-m-negative-quiet-texticon-border-color-hover:Highlight;--spectrum-button-m-negative-quiet-texticon-border-color-key-focus:Highlight;--spectrum-button-m-negative-quiet-texticon-text-color:ButtonText;--spectrum-button-m-negative-quiet-texticon-text-color-disabled:GrayText;--spectrum-button-m-negative-quiet-texticon-text-color-down:ButtonText;--spectrum-button-m-negative-quiet-texticon-text-color-hover:ButtonText;--spectrum-button-m-negative-quiet-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-negative-texticon-background-color:ButtonFace;--spectrum-button-m-negative-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-negative-texticon-background-color-down:ButtonFace;--spectrum-button-m-negative-texticon-background-color-hover:ButtonFace;--spectrum-button-m-negative-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-negative-texticon-border-color:ButtonText;--spectrum-button-m-negative-texticon-border-color-disabled:GrayText;--spectrum-button-m-negative-texticon-border-color-down:Highlight;--spectrum-button-m-negative-texticon-border-color-hover:Highlight;--spectrum-button-m-negative-texticon-border-color-key-focus:Highlight;--spectrum-button-m-negative-texticon-text-color:ButtonText;--spectrum-button-m-negative-texticon-text-color-disabled:GrayText;--spectrum-button-m-negative-texticon-text-color-down:ButtonText;--spectrum-button-m-negative-texticon-text-color-hover:ButtonText;--spectrum-button-m-negative-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-overbackground-texticon-background-color:ButtonFace;--spectrum-button-m-primary-overbackground-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-overbackground-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-overbackground-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-overbackground-texticon-border-color:ButtonText;--spectrum-button-m-primary-overbackground-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-overbackground-texticon-border-color-down:Highlight;--spectrum-button-m-primary-overbackground-texticon-border-color-hover:Highlight;--spectrum-button-m-primary-overbackground-texticon-border-color-key-focus:Highlight;--spectrum-button-m-primary-overbackground-texticon-text-color:ButtonText;--spectrum-button-m-primary-overbackground-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-quiet-overbackground-texticon-background-color:ButtonFace;--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-quiet-overbackground-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-quiet-overbackground-texticon-border-color:ButtonText;--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-down:Highlight;--spectrum-button-m-primary-quiet-overbackground-texticon-border-color-hover:Highlight;--spectrum-button-m-primary-quiet-overbackground-texticon-text-color:ButtonText;--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-down:ButtonText;--spectrum-button-m-primary-quiet-overbackground-texticon-text-color-hover:ButtonText;--spectrum-button-m-primary-quiet-texticon-background-color:ButtonFace;--spectrum-button-m-primary-quiet-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-quiet-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-quiet-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-quiet-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-primary-quiet-texticon-border-color:ButtonText;--spectrum-button-m-primary-quiet-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-quiet-texticon-border-color-down:Highlight;--spectrum-button-m-primary-quiet-texticon-border-color-hover:Highlight;--spectrum-button-m-primary-quiet-texticon-border-color-key-focus:Highlight;--spectrum-button-m-primary-quiet-texticon-text-color:ButtonText;--spectrum-button-m-primary-quiet-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-quiet-texticon-text-color-down:ButtonText;--spectrum-button-m-primary-quiet-texticon-text-color-hover:ButtonText;--spectrum-button-m-primary-quiet-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-texticon-background-color:ButtonFace;--spectrum-button-m-primary-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-primary-texticon-border-color:ButtonText;--spectrum-button-m-primary-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-texticon-border-color-down:Highlight;--spectrum-button-m-primary-texticon-border-color-hover:Highlight;--spectrum-button-m-primary-texticon-border-color-key-focus:Highlight;--spectrum-button-m-primary-texticon-text-color:ButtonText;--spectrum-button-m-primary-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-texticon-text-color-down:ButtonText;--spectrum-button-m-primary-texticon-text-color-hover:ButtonText;--spectrum-button-m-primary-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-secondary-quiet-texticon-background-color:ButtonFace;--spectrum-button-m-secondary-quiet-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-quiet-texticon-background-color-down:ButtonFace;--spectrum-button-m-secondary-quiet-texticon-background-color-hover:ButtonFace;--spectrum-button-m-secondary-quiet-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-secondary-quiet-texticon-border-color:ButtonText;--spectrum-button-m-secondary-quiet-texticon-border-color-disabled:GrayText;--spectrum-button-m-secondary-quiet-texticon-border-color-down:Highlight;--spectrum-button-m-secondary-quiet-texticon-border-color-hover:Highlight;--spectrum-button-m-secondary-quiet-texticon-border-color-key-focus:Highlight;--spectrum-button-m-secondary-quiet-texticon-text-color:ButtonText;--spectrum-button-m-secondary-quiet-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-quiet-texticon-text-color-down:ButtonText;--spectrum-button-m-secondary-quiet-texticon-text-color-hover:ButtonText;--spectrum-button-m-secondary-quiet-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-secondary-texticon-background-color:ButtonFace;--spectrum-button-m-secondary-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-texticon-background-color-down:ButtonFace;--spectrum-button-m-secondary-texticon-background-color-hover:ButtonFace;--spectrum-button-m-secondary-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-secondary-texticon-border-color:ButtonText;--spectrum-button-m-secondary-texticon-border-color-disabled:GrayText;--spectrum-button-m-secondary-texticon-border-color-down:Highlight;--spectrum-button-m-secondary-texticon-border-color-hover:Highlight;--spectrum-button-m-secondary-texticon-border-color-key-focus:Highlight;--spectrum-button-m-secondary-texticon-text-color:ButtonText;--spectrum-button-m-secondary-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-texticon-text-color-down:ButtonText;--spectrum-button-m-secondary-texticon-text-color-hover:ButtonText;--spectrum-button-m-secondary-texticon-text-color-key-focus:ButtonText}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-texticon-focus-ring-size) Highlight}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-texticon-focus-ring-size) Highlight}:host{forced-color-adjust:none}:host([variant=overBackground]:hover){color:ButtonText}:host([variant=overBackground].focus-visible){color:ButtonText}:host([variant=overBackground]:focus-visible){color:ButtonText}:host([variant=overBackground][active]){color:ButtonText}}@media (forced-colors:active){.spectrum-LogicButton:after{--spectrum-button-m-primary-texticon-focus-ring-color-key-focus:Highlight;forced-color-adjust:none}.spectrum-LogicButton{--spectrum-button-primary-texticon-focus-ring-size:2;--spectrum-button-m-secondary-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-texticon-border-color-disabled:GrayText;--spectrum-logicbutton-and-background-color:ButtonFace;--spectrum-logicbutton-and-background-color-disabled:ButtonFace;--spectrum-logicbutton-and-background-color-hover:ButtonFace;--spectrum-logicbutton-and-border-color:ButtonText;--spectrum-logicbutton-and-border-color-disabled:GrayText;--spectrum-logicbutton-and-border-color-hover:Highlight;--spectrum-logicbutton-and-text-color:ButtonText;--spectrum-logicbutton-and-text-color-disabled:GrayText;--spectrum-logicbutton-or-background-color:ButtonFace;--spectrum-logicbutton-or-background-color-hover:ButtonFace;--spectrum-logicbutton-or-border-color:ButtonText;--spectrum-logicbutton-or-border-color-hover:Highlight;--spectrum-logicbutton-or-text-color:ButtonText;forced-color-adjust:none}}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;e.default=r},N1ga:function(t,e,o){"use strict";o.r(e),o.d(e,"toastVariants",(function(){return n})),o.d(e,"Toast",(function(){return l}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=(o("bnZq"),o("0Vag"),o("kB1b"),o("jSC6"),o("kyd7"));const n=["negative","positive","info","error","warning"];class l extends i.SpectrumElement{constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[c.default]}set timeout(t){const e=null!==typeof t&&t>0?Math.max(6e3,t):null,o=this.timeout;e&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=e,this.requestUpdate("timeout",o)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;n.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(t){switch(t){case"info":return s.html`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;case"negative":case"error":case"warning":return s.html`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;case"positive":case"success":return s.html`
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;default:return s.html``}}startCountdown(){this.countdown(),this.addEventListener("focusin",this.holdCountdown)}stopCountdown(){cancelAnimationFrame(this.nextCount),this.countdownStart=0}shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}close(){this.open=!1}render(){return s.html`
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this.shouldClose}
                    label="Close"
                    variant="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(null!==this.timeout&&this.open?this.startCountdown():this.stopCountdown())}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"open",void 0),Object(r.__decorate)([Object(a.property)({type:Number})],l.prototype,"timeout",null),Object(r.__decorate)([Object(a.property)({type:String})],l.prototype,"variant",null)},NPpS:function(t,e,o){"use strict";o.r(e);var r=o("LV7E");o.d(e,"customElement",(function(){return r.customElement}));var i=o("/vr8");o.d(e,"property",(function(){return i.property}));var s=o("QDvB");o.d(e,"state",(function(){return s.state}));var a=o("gnXq");o.d(e,"eventOptions",(function(){return a.eventOptions}));var c=o("2ksV");o.d(e,"query",(function(){return c.query}));var n=o("ntZx");o.d(e,"queryAll",(function(){return n.queryAll}));var l=o("WiLC");o.d(e,"queryAsync",(function(){return l.queryAsync}));var u=o("Xf6d");o.d(e,"queryAssignedElements",(function(){return u.queryAssignedElements}));var m=o("kWSZ");o.d(e,"queryAssignedNodes",(function(){return m.queryAssignedNodes}))},NTIh:function(t,e,o){"use strict";o.r(e),o.d(e,"Underlay",(function(){return n}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("pMVs");class n extends i.SpectrumElement{constructor(){super(...arguments),this.open=!1}static get styles(){return[c.default]}render(){return s.html``}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],n.prototype,"open",void 0)},OKCf:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host([size=s]){--spectrum-divider-height:var(
--spectrum-divider-s-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-s-vertical-height,var(--spectrum-global-dimension-size-10)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-s-vertical-width,var(--spectrum-global-dimension-size-10)
)}:host([size=m]){--spectrum-divider-height:var(
--spectrum-divider-m-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-m-vertical-height,var(--spectrum-global-dimension-size-25)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-m-vertical-width,var(--spectrum-global-dimension-size-25)
)}:host([size=l]){--spectrum-divider-height:var(
--spectrum-divider-l-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-height:var(
--spectrum-divider-l-vertical-height,var(--spectrum-global-dimension-size-50)
);--spectrum-divider-vertical-width:var(
--spectrum-divider-l-vertical-width,var(--spectrum-global-dimension-size-50)
)}:host{--spectrum-divider-vertical-height:100%}:host{border-width:medium;border:var(--spectrum-divider-height);border-radius:var(--spectrum-divider-height);height:var(--spectrum-divider-height);overflow:visible;width:100%}:host([vertical]){height:var(
--spectrum-divider-vertical-height
);width:var(--spectrum-divider-vertical-width)}:host{--spectrum-divider-l-background-color:var(
--spectrum-global-color-gray-800
);--spectrum-divider-m-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-divider-s-background-color:var(
--spectrum-global-color-gray-300
)}:host([size=l]){background-color:var(
--spectrum-divider-l-background-color,var(--spectrum-global-color-gray-800)
)}:host([size=m]){background-color:var(
--spectrum-divider-m-background-color,var(--spectrum-global-color-gray-300)
)}:host([size=s]){background-color:var(
--spectrum-divider-s-background-color,var(--spectrum-global-color-gray-300)
)}:host{display:block}hr{border:none;margin:0}
`;e.default=r},OLGJ:function(t,e,o){"use strict";let r;o.r(e),o.d(e,"tag",(function(){return i})),o.d(e,"setCustomTemplateLiteralTag",(function(){return s}));const i=function(t,...e){return r?r(t,...e):e.reduce((e,o,r)=>e+o+t[r+1],t[0])},s=t=>{r=t}},ONTX:function(t,e,o){"use strict";o.r(e);var r=o("SgYG");customElements.define("sp-picker",r.Picker)},OPPJ:function(t,e,o){"use strict";o.r(e);var r=o("QzZV");customElements.define("overlay-trigger",r.OverlayTrigger)},"ORM/":function(t,e,o){"use strict";o.r(e);var r=o("HZwX");customElements.define("sp-icon-asterisk100",r.IconAsterisk100)},OYdV:function(t,e,o){"use strict";o.r(e),o.d(e,"Cross500Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M8.457 7l4.54-4.54a1.03 1.03 0 00-1.458-1.456L7 5.543l-4.54-4.54a1.03 1.03 0 00-1.457 1.458L5.543 7l-4.54 4.54a1.03 1.03 0 101.457 1.456L7 8.457l4.54 4.54a1.03 1.03 0 001.456-1.458z"
    />
  </svg>`},OfE4:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{box-sizing:border-box;cursor:pointer;height:var(--spectrum-tabs-quiet-textonly-tabitem-height);line-height:var(--spectrum-tabs-quiet-textonly-tabitem-height);outline:none;position:relative;text-decoration:none;transition:color var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) ease-out;white-space:nowrap;z-index:1}:host([disabled]){cursor:default}:host([disabled]) #item-label{cursor:default}:host(:not([vertical])) ::slotted([slot=icon]){height:var(
--spectrum-tabs-quiet-textonly-tabitem-height
)}:host([dir=ltr]) slot[name=icon]+#item-label{margin-left:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=rtl]) slot[name=icon]+#item-label{margin-right:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=ltr]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host:before{border:var(--spectrum-tabs-textonly-tabitem-focus-ring-size) solid transparent;border-radius:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-radius
);box-sizing:border-box;content:"";height:var(--spectrum-tabs-textonly-tabitem-focus-ring-height);margin-top:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-height)/-2);pointer-events:none;position:absolute;top:50%}#item-label{cursor:pointer;display:inline-block;font-size:var(--spectrum-tabs-texticon-tabitem-text-size);font-weight:var(--spectrum-tabs-textonly-tabitem-text-font-weight);text-decoration:none;vertical-align:top}#item-label:empty{display:none}:host{color:var(
--spectrum-tabs-textonly-tabitem-text-color
)}:host(:not([vertical])) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color
)}:host(:hover){color:var(
--spectrum-tabs-textonly-tabitem-text-color-hover
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-hover
)}:host([selected]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected
)}:host(.focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(:focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(:focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host([disabled]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-disabled
)}:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-disabled
)}:host([disabled]){pointer-events:none}:host([vertical]){--sp-tab-vertial-margin-y:calc((var(
--spectrum-tabs-vertical-item-height,
var(--spectrum-global-dimension-size-550)
) - var(
--spectrum-tabs-focus-ring-height,
var(--spectrum-alias-single-line-height)
))/2);align-items:center;display:flex;flex-direction:column;height:auto!important;justify-content:center}:host([vertical]):before{bottom:0;height:auto;left:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);margin-top:0!important;right:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);top:0}:host([vertical]) ::slotted([slot=icon]){flex-shrink:0;margin-top:var(--sp-tab-vertial-margin-y)}:host(:not([vertical])) ::slotted([slot=icon]){height:100%}:host([dir][vertical]) slot[name=icon]+#item-label{font-size:var(
--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){position:relative;z-index:1}#item-label{position:relative;z-index:1}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]):before{background-color:Highlight;color:HighlightText}:host([selected]) #item-label{color:HighlightText}}
`;e.default=r},OqX7:function(t,e,o){"use strict";o.r(e);var r=o("nVRj");customElements.define("sp-checkbox",r.Checkbox)},Osxd:function(t,e,o){"use strict";o.r(e);var r=o("cRrS");customElements.define("sp-divider",r.Divider)},"P/Yy":function(t,e,o){"use strict";o.r(e);o("nvw5"),o("v2F8");var r=o("cnVg");o.d(e,"CSSResult",(function(){return r.CSSResult})),o.d(e,"adoptStyles",(function(){return r.adoptStyles})),o.d(e,"css",(function(){return r.css})),o.d(e,"getCompatibleStyle",(function(){return r.getCompatibleStyle})),o.d(e,"supportsAdoptingStyleSheets",(function(){return r.supportsAdoptingStyleSheets})),o.d(e,"unsafeCSS",(function(){return r.unsafeCSS})),o.d(e,"ReactiveElement",(function(){return r.ReactiveElement})),o.d(e,"defaultConverter",(function(){return r.defaultConverter})),o.d(e,"notEqual",(function(){return r.notEqual})),o.d(e,"_$LH",(function(){return r._$LH})),o.d(e,"html",(function(){return r.html})),o.d(e,"noChange",(function(){return r.noChange})),o.d(e,"nothing",(function(){return r.nothing})),o.d(e,"render",(function(){return r.render})),o.d(e,"svg",(function(){return r.svg})),o.d(e,"LitElement",(function(){return r.LitElement})),o.d(e,"UpdatingElement",(function(){return r.UpdatingElement})),o.d(e,"_$LE",(function(){return r._$LE}))},"PQr/":function(t,e,o){"use strict";o.r(e);var r=o("LJ+g");o.d(e,"live",(function(){return r.live}))},PYA5:function(t,e,o){"use strict";o.r(e),o.d(e,"Dash75Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M6.99 4.96H1.01a.96.96 0 010-1.92h5.98a.96.96 0 010 1.92z" />
  </svg>`},QDvB:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return i}));var r=o("/vr8");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return Object(r.property)({...t,state:!0})}},QebO:function(t,e,o){"use strict";o.r(e),o.d(e,"StyledButton",(function(){return s}));var r=o("Re9n"),i=o("KH6V");class s extends r.ButtonBase{static get styles(){return[i.default]}}},QzZV:function(t,e,o){"use strict";o.r(e),o.d(e,"LONGPRESS_INSTRUCTIONS",(function(){return m})),o.d(e,"OverlayTrigger",(function(){return d}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("U3Ba"),n=o("1e0g"),l=o("Wopf"),u=o("KZUk");const m={touch:"Double tap and long press for additional options",keyboard:"Press Space or Alt+Down Arrow for additional options",mouse:"Click and hold for additional options"};class d extends i.SpectrumElement{constructor(){super(...arguments),this.placement="bottom",this.offset=6,this.disabled=!1,this.hasLongpressContent=!1,this._longpressId="longpress-describedby-descriptor",this.abortOverlay=()=>{},this.openStatePromise=Promise.resolve()}static get styles(){return[u.default]}handleClose(t){t&&t.detail.interaction!==this.open&&t.detail.interaction!==this.type||this.removeAttribute("open")}render(){return s.html`
            <slot
                id="trigger"
                @click=${this.onTrigger}
                @longpress=${this.onTrigger}
                @mouseenter=${this.onTrigger}
                @mouseleave=${this.onTrigger}
                @focusin=${this.onTrigger}
                @focusout=${this.onTrigger}
                @sp-closed=${this.handleClose}
                @slotchange=${this.onTargetSlotChange}
                name="trigger"
            ></slot>
            <div id="overlay-content">
                <slot
                    @slotchange=${this.onClickSlotChange}
                    name="click-content"
                ></slot>
                <slot
                    @slotchange=${this.onLongpressSlotChange}
                    name="longpress-content"
                ></slot>
                <slot
                    @slotchange=${this.onHoverSlotChange}
                    name="hover-content"
                ></slot>
                <slot name=${this._longpressId}></slot>
            </div>
        `}updated(t){super.updated(t),this.disabled&&t.has("disabled")?this.closeAllOverlays():(t.has("open")&&this.manageOpen(),t.has("hasLongpressContent")&&this.manageLongpressDescriptor())}manageLongpressDescriptor(){const t=this.querySelector('[slot="trigger"]'),e=t.getAttribute("aria-describedby");let o=e?e.split(/\s+/):[];if(this.hasLongpressContent){this.longpressDescriptor||(this.longpressDescriptor=document.createElement("div"),this.longpressDescriptor.id=this._longpressId,this.longpressDescriptor.slot=this._longpressId);const t=Object(n.isIOS)()||Object(n.isAndroid)()?"touch":"keyboard";this.longpressDescriptor.textContent=m[t],this.appendChild(this.longpressDescriptor),o.push(this._longpressId)}else this.longpressDescriptor&&this.longpressDescriptor.remove(),o=o.filter(t=>t!==this._longpressId);o.length?t.setAttribute("aria-describedby",o.join(" ")):t.removeAttribute("aria-describedby")}closeAllOverlays(){this.abortOverlay&&this.abortOverlay(!0),["closeClickOverlay","closeHoverOverlay","closeLongpressOverlay"].forEach(async t=>{const e=this[t];null!=e&&(delete this[t],(await e)())})}manageOpen(){var t;({click:()=>this.onTriggerClick(),hover:()=>this.onTriggerMouseEnter(),longpress:()=>this.onTriggerLongpress(),none:()=>this.closeAllOverlays()})[null!==(t=this.open)&&void 0!==t?t:"none"]()}async openOverlay(t,e,o,r){return this.openStatePromise=new Promise(t=>this.openStateResolver=t),this.addEventListener("sp-opened",()=>{this.openStateResolver()},{once:!0}),d.openOverlay(t,e,o,r)}get overlayOptions(){return{offset:this.offset,placement:this.placement,receivesFocus:this.type&&"inline"!==this.type?"auto":void 0}}onTrigger(t){if(!this.disabled)switch(t.type){case"mouseenter":case"focusin":return void(!this.open&&this.hoverContent&&(this.open="hover"));case"mouseleave":case"focusout":return void("hover"===this.open&&this.handleClose());case"click":return void(this.clickContent?this.open=t.type:this.closeHoverOverlay&&t.preventDefault());case"longpress":return void(this.longpressContent&&(this._longpressEvent=t,this.open=t.type))}}prepareToFocusOverlayContent(t){if("modal"!==this.type)return;Object(c.firstFocusableIn)(t)||(t.tabIndex=0)}async onTriggerClick(){if(!this.targetContent||!this.clickContent||this.closeClickOverlay)return;const{targetContent:t,clickContent:e}=this;this.closeAllOverlays(),this.prepareToFocusOverlayContent(e),this.closeClickOverlay=this.openOverlay(t,this.type?this.type:"click",e,this.overlayOptions)}async onTriggerLongpress(){var t,e;if(!this.targetContent||!this.longpressContent||this.closeLongpressOverlay)return;const{targetContent:o,longpressContent:r}=this;this.closeAllOverlays(),this.prepareToFocusOverlayContent(r);const i="keyboard"!==(null===(e=null===(t=this._longpressEvent)||void 0===t?void 0:t.detail)||void 0===e?void 0:e.source);this.closeLongpressOverlay=this.openOverlay(o,this.type?this.type:"longpress",r,Object.assign(Object.assign({},this.overlayOptions),{receivesFocus:"auto",notImmediatelyClosable:i})),this._longpressEvent=void 0}async onTriggerMouseEnter(){if(!this.targetContent||!this.hoverContent||this.closeHoverOverlay)return;const t=new Promise(t=>{this.abortOverlay=t}),{targetContent:e,hoverContent:o}=this;this.closeHoverOverlay=this.openOverlay(e,"hover",o,Object.assign({abortPromise:t},this.overlayOptions))}onClickSlotChange(t){this.clickContent=this.extractSlotContentFromEvent(t),this.manageOpen()}onLongpressSlotChange(t){this.longpressContent=this.extractSlotContentFromEvent(t),this.hasLongpressContent=!!this.longpressContent||!!this.closeLongpressOverlay,this.manageOpen()}onHoverSlotChange(t){this.hoverContent=this.extractSlotContentFromEvent(t),this.manageOpen()}onTargetSlotChange(t){this.targetContent=this.extractSlotContentFromEvent(t)}extractSlotContentFromEvent(t){return t.target.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.openStatePromise,t}disconnectedCallback(){this.closeAllOverlays(),super.disconnectedCallback()}}d.openOverlay=async(t,e,o,r)=>Object(l.openOverlay)(t,e,o,r),Object(r.__decorate)([Object(a.property)({reflect:!0})],d.prototype,"placement",void 0),Object(r.__decorate)([Object(a.property)()],d.prototype,"type",void 0),Object(r.__decorate)([Object(a.property)({type:Number,reflect:!0})],d.prototype,"offset",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],d.prototype,"open",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),Object(r.__decorate)([Object(a.state)()],d.prototype,"hasLongpressContent",void 0)},R8hp:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(
--spectrum-picker-textonly-padding-left
);padding-right:var(--spectrum-picker-textonly-padding-right)}:host([dir=rtl]) #button{padding-left:var(--spectrum-picker-textonly-padding-right);padding-right:var(
--spectrum-picker-textonly-padding-left
)}#button{align-items:center;border-radius:var(--spectrum-picker-texticon-border-radius);border-style:solid;border-width:var(--spectrum-picker-texticon-border-size);display:flex;height:var(--spectrum-picker-texticon-height);justify-content:center;margin:0;min-width:var(--spectrum-picker-texticon-min-width);padding-bottom:0;padding-top:0;transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s);width:var(--spectrum-picker-texticon-width)}#button:disabled,:host([disabled]) #button{border-width:var(
--spectrum-picker-texticon-disabled-border-size
);cursor:default}:host([dir=ltr]) #button .icon{margin-right:var(
--spectrum-picker-texticon-icon-gap
)}:host([dir=rtl]) #button .icon{margin-left:var(
--spectrum-picker-texticon-icon-gap
)}.icon{flex-shrink:0}:host([dir=ltr]) #button #label+.icon{margin-left:var(
--spectrum-picker-texticon-icon-gap
)}:host([dir=rtl]) #button #label+.icon{margin-right:var(
--spectrum-picker-texticon-icon-gap
)}:host([size=s]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-s-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-s-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-s-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-s-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-s-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-s-texticon-popover-max-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-s-texticon-height,var(--spectrum-global-dimension-size-300)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-s-texticon-min-width,var(--spectrum-global-dimension-size-450)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-s-texticon-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-s-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
)}:host([size=m]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-m-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-m-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-m-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-m-texticon-popover-max-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-m-texticon-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([size=l]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-l-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-l-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-l-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-l-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-l-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-l-texticon-popover-max-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-l-texticon-height,var(--spectrum-global-dimension-size-500)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-l-texticon-min-width,var(--spectrum-global-dimension-size-750)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-l-texticon-width,var(--spectrum-global-dimension-size-2500)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-l-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
)}:host([size=xl]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-xl-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-xl-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-xl-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-xl-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-xl-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-xl-texticon-popover-max-width,var(--spectrum-global-dimension-size-3600)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-xl-texticon-height,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-xl-texticon-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-xl-texticon-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-xl-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
)}:host{--spectrum-picker-texticon-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-picker-texticon-disabled-border-size:0;--spectrum-picker-texticon-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-texticon-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-picker-texticon-border-size-increase-focus:1px}:host([quiet]) #button{--spectrum-picker-texticon-border-size:0;--spectrum-picker-texticon-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0}:host([quiet]) #button{min-width:0;width:auto}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;font-size:var(--spectrum-picker-texticon-text-size);height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);line-height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{font-style:var(--spectrum-picker-texticon-placeholder-font-style);font-weight:var(
--spectrum-picker-texticon-placeholder-font-weight
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;flex-shrink:0;position:relative;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;vertical-align:top}:host([dir=ltr]) .validation-icon{margin-left:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=rtl]) .validation-icon{margin-right:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=ltr]) #label~.picker{margin-left:var(
--spectrum-picker-texticon-ui-icon-gap
)}:host([dir=rtl]) #label~.picker{margin-right:var(
--spectrum-picker-texticon-ui-icon-gap
)}#popover{max-width:var(
--spectrum-picker-texticon-popover-max-width
)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}#button{background-color:var(
--spectrum-picker-m-texticon-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-picker-m-texticon-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}#button:hover{background-color:var(
--spectrum-picker-m-texticon-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-picker-m-texticon-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}#button:hover .picker{color:var(
--spectrum-picker-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#button:active,:host([open]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-picker-m-texticon-border-color-down,var(--spectrum-alias-component-border-color-down)
)}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([invalid]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([invalid]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-validation-icon-color-error,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #button:hover{border-color:var(
--spectrum-picker-m-texticon-border-color-error-hover,var(--spectrum-semantic-negative-color-hover)
)}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-down,var(--spectrum-semantic-negative-color-down)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.picker{color:var(
--spectrum-picker-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}#label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color,var(--spectrum-alias-placeholder-text-color)
)}#label.placeholder:hover{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.placeholder:active{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color-down)
)}:host([quiet]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]) #button:hover{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
)}:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validation-icon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`;e.default=r},REwO:function(t,e,o){"use strict";o.r(e),o.d(e,"Checkmark75Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.667 9.07a.96.96 0 01-.737-.344L.753 6.114a.96.96 0 111.474-1.23l1.418 1.701 4.112-5.233a.96.96 0 011.51 1.186L4.422 8.704a.962.962 0 01-.741.367z"
    />
  </svg>`},RNvx:function(t,e,o){"use strict";o.r(e),o.d(e,"IconInfo",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("9zM0"),a=o("OLGJ");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.InfoIcon)({hidden:!this.label,title:this.label})}}},Re9n:function(t,e,o){"use strict";o.r(e),o.d(e,"ButtonBase",(function(){return u}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=o("MiWL"),c=o("zKLX"),n=o("hSJ3"),l=o("Uv1x");class u extends(Object(a.LikeAnchor)(Object(n.ObserveSlotText)(Object(l.ObserveSlotPresence)(c.Focusable,'[slot="icon"]')))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const t=[i.html`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&t.unshift(i.html`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),t}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if("button"!==this.type){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return i.html`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return i.html`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;switch(e){case"Space":t.preventDefault(),void 0===this.href&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0)}}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click()}}handleKeyup(t){const{code:e}=t;switch(e){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click()}}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?("button"===this.getAttribute("role")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):(this.hasAttribute("role")&&"link"!==this.getAttribute("role")||this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],u.prototype,"active",void 0),Object(r.__decorate)([Object(s.property)({type:String})],u.prototype,"type",void 0),Object(r.__decorate)([Object(s.query)(".anchor")],u.prototype,"anchorElement",void 0)},SXNh:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{align-items:flex-start;max-width:100%;min-height:var(--spectrum-checkbox-height);position:relative}#input{box-sizing:border-box;cursor:pointer;font-family:inherit;font-size:100%;height:100%;line-height:1.15;margin:0;opacity:.0001;overflow:visible;padding:0;position:absolute;width:100%;z-index:1}#input:disabled{cursor:default}#input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}#input:checked+#box #checkmark{opacity:1;transform:scale(1)}#input.focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#box:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}:host([size=s]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-s-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-s-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-s-box-size,var(--spectrum-alias-control-two-size-s)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-s-text-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-s-text-padding-top,var(--spectrum-global-dimension-static-size-50)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-s-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-s-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-75)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-s-height,var(--spectrum-global-dimension-size-300)
)}:host([size=m]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-m-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-m-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-m-box-size,var(--spectrum-alias-control-two-size-m)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-m-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-m-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-m-height,var(--spectrum-global-dimension-size-400)
)}:host([size=l]){--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-l-text-padding-top
);--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-l-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-l-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-l-box-size,var(--spectrum-alias-control-two-size-l)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-l-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-l-text-gap,var(--spectrum-global-dimension-size-130)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-l-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-l-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-200)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-l-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-checkbox-box-border-radius:var(
--spectrum-checkbox-xl-box-border-radius,var(--spectrum-alias-border-radius-small)
);--spectrum-checkbox-box-border-size:var(
--spectrum-checkbox-xl-box-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-checkbox-box-size:var(
--spectrum-checkbox-xl-box-size,var(--spectrum-alias-control-two-size-xl)
);--spectrum-checkbox-text-size:var(
--spectrum-checkbox-xl-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-checkbox-text-gap:var(
--spectrum-checkbox-xl-text-gap,var(--spectrum-global-dimension-size-160)
);--spectrum-checkbox-text-padding-top:var(
--spectrum-checkbox-xl-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-checkbox-text-font-style:var(
--spectrum-checkbox-xl-text-font-style,var(--spectrum-global-font-style-regular)
);--spectrum-checkbox-text-font-weight:var(
--spectrum-checkbox-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-checkbox-text-line-height:var(
--spectrum-checkbox-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-checkbox-checkmark-size:var(
--spectrum-checkbox-xl-checkmark-size,var(--spectrum-alias-ui-icon-checkmark-size-300)
);--spectrum-checkbox-height:var(
--spectrum-checkbox-xl-height,var(--spectrum-global-dimension-size-600)
)}:host([indeterminate]) #box:before,:host([indeterminate]) #input:checked+#box:before{border-width:calc(var(--spectrum-checkbox-box-size)/2)}:host([indeterminate]) #box #checkmark,:host([indeterminate]) #input:checked+#box #checkmark{display:none}:host([indeterminate]) #box #partialCheckmark,:host([indeterminate]) #input:checked+#box #partialCheckmark{display:block;opacity:1;transform:scale(1)}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}:host([dir=ltr]) #label{margin-left:var(
--spectrum-checkbox-text-gap
)}:host([dir=rtl]) #label{margin-right:var(
--spectrum-checkbox-text-gap
)}#label{font-size:var(--spectrum-checkbox-text-size);font-style:var(--spectrum-checkbox-text-font-style);font-weight:var(--spectrum-checkbox-text-font-weight);line-height:var(--spectrum-checkbox-text-line-height);margin-top:var(
--spectrum-checkbox-text-padding-top
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#box{box-sizing:border-box;flex-grow:0;flex-shrink:0;height:var(--spectrum-checkbox-box-size);margin:calc((var(--spectrum-checkbox-height) - var(--spectrum-checkbox-box-size))/2) 0;position:relative;width:var(--spectrum-checkbox-box-size)}#box:before{border-radius:var(--spectrum-checkbox-box-border-radius);border-style:solid;border-width:var(--spectrum-checkbox-box-border-size);box-sizing:border-box;content:"";display:block;height:var(--spectrum-checkbox-box-size);position:absolute;transition:border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-checkbox-box-size);z-index:0}#box:after{border-radius:calc(var(--spectrum-checkbox-box-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:var(
--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)
);position:absolute;right:0;top:0;transform:translate(0);transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host([dir=ltr]) #checkmark,:host([dir=ltr]) #partialCheckmark{left:50%}:host([dir=rtl]) #checkmark,:host([dir=rtl]) #partialCheckmark{right:50%}#checkmark,#partialCheckmark{opacity:0;position:absolute;top:50%;transform:scale(0);transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) #checkmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #checkmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#checkmark{margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=ltr]) #partialCheckmark{margin-left:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host([dir=rtl]) #partialCheckmark{margin-right:calc(var(--spectrum-checkbox-checkmark-size)/-2)}#partialCheckmark{display:none;margin-top:calc(var(--spectrum-checkbox-checkmark-size)/-2)}:host{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#checkmark,#partialCheckmark{color:var(
--spectrum-checkbox-m-checkmark-color,var(--spectrum-alias-toggle-icon-color-selected)
)}#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
);forced-color-adjust:none}#label{color:var(
--spectrum-checkbox-m-text-color,var(--spectrum-alias-component-text-color-default)
)}#input:checked+#box:before,:host([indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host(:hover) #input:checked+#box:before,:host(:hover[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:active) #input:checked+#box:before,:host(:active[indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host(:hover) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
)}:host(:hover) #label{color:var(
--spectrum-checkbox-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:active) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active) #label{color:var(
--spectrum-checkbox-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}#input:disabled+#box:before,:host([dir]) #input:checked:disabled+#box:before{background-color:var(
--spectrum-checkbox-m-box-background-color-disabled,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-checkbox-m-box-border-color-disabled,var(--spectrum-global-color-gray-400)
)}#input:checked:disabled~#label,#input:disabled~#label{color:var(
--spectrum-checkbox-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);forced-color-adjust:none}#input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input.focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:focus-visible+#box:after{box-shadow:0 0 0 var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);forced-color-adjust:none}#input:checked.focus-visible+#box:before,:host([indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}#input:checked:focus-visible+#box:before,:host([indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}#input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized]) #input:checked+#box:before,:host([emphasized][indeterminate]) #box:before,:host([emphasized][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized]:hover) #input:checked+#box:before,:host([emphasized][indeterminate]:hover) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized]:active) #input:checked+#box:before,:host([emphasized][indeterminate]:active) #box:before{border-color:var(
--spectrum-checkbox-m-emphasized-box-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([invalid][dir]) #box:before,:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid]) #label{color:var(
--spectrum-checkbox-m-text-color-error,var(--spectrum-alias-component-text-color-error-default)
)}:host([invalid]) #input.focus-visible+#box:before,:host([invalid][indeterminate]) #input.focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input:focus-visible+#box:before,:host([invalid][indeterminate]) #input:focus-visible+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]) #input.focus-visible~#label,:host([invalid][indeterminate]) #input.focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]) #input:focus-visible~#label,:host([invalid][indeterminate]) #input:focus-visible~#label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]:hover) #box:before,:host([invalid][dir]:hover) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-hover,var(--spectrum-global-color-red-600)
)}:host([invalid]:hover) #label{color:var(
--spectrum-checkbox-m-text-color-error-hover,var(--spectrum-alias-component-text-color-error-hover)
)}:host([invalid]:active) #box:before,:host([invalid]:active) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]:active) #label{color:var(
--spectrum-checkbox-m-text-color-error-down,var(--spectrum-alias-component-text-color-error-down)
)}@media (forced-colors:active){#input.focus-visible+#box{forced-color-adjust:none;outline-color:var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);outline-offset:var(
--spectrum-checkbox-m-focus-ring-gap-key-focus,var(--spectrum-alias-focus-ring-gap)
);outline-style:auto;outline-width:var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
)}#input:focus-visible+#box{forced-color-adjust:none;outline-color:var(
--spectrum-checkbox-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);outline-offset:var(
--spectrum-checkbox-m-focus-ring-gap-key-focus,var(--spectrum-alias-focus-ring-gap)
);outline-style:auto;outline-width:var(
--spectrum-checkbox-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
)}:host{--spectrum-checkbox-m-box-background-color-disabled:ButtonFace;--spectrum-checkbox-m-box-background-color:ButtonFace;--spectrum-checkbox-m-box-border-color-disabled:GrayText;--spectrum-checkbox-m-box-border-color-down:Highlight;--spectrum-checkbox-m-box-border-color-error-down:Highlight;--spectrum-checkbox-m-box-border-color-hover:Highlight;--spectrum-checkbox-m-box-border-color-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-box-border-color-selected-key-focus:Highlight;--spectrum-checkbox-m-box-border-color-selected:Highlight;--spectrum-checkbox-m-box-border-color:ButtonText;--spectrum-checkbox-m-emphasized-box-border-color-selected-down:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected-hover:Highlight;--spectrum-checkbox-m-emphasized-box-border-color-selected:Highlight;--spectrum-checkbox-m-focus-ring-color-key-focus:FieldText;--spectrum-checkbox-m-text-color-disabled:GrayText;--spectrum-checkbox-m-text-color-down:FieldText;--spectrum-checkbox-m-text-color-error-down:FieldText;--spectrum-checkbox-m-text-color-error-hover:FieldText;--spectrum-checkbox-m-checkmark-color:HighlightText;--spectrum-checkbox-m-focus-ring-gap-key-focus:var(
--spectrum-global-dimension-static-size-25,2px
);--spectrum-checkbox-m-focus-ring-size:var(
--spectrum-global-dimension-static-size-40,3px
);--spectrum-checkbox-m-box-border-color-error:FieldText;--spectrum-checkbox-m-box-border-color-error-hover:FieldText;--spectrum-checkbox-m-text-color-error:FieldText;--spectrum-checkbox-m-text-color-hover:FieldText;--spectrum-checkbox-m-text-color-key-focus:FieldText;--spectrum-checkbox-m-text-color:FieldText}:host([invalid][dir]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color,var(--spectrum-alias-toggle-border-color-default)
)}:host([invalid][indeterminate]) #box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}:host([invalid][dir]) #input:checked+#box:before{border-color:var(
--spectrum-checkbox-m-box-border-color-error,var(--spectrum-global-color-red-500)
)}}:host{display:inline-flex;vertical-align:top}:host(:focus){outline:none}:host([disabled]){pointer-events:none}:host(:empty) label{display:none}
`;e.default=r},Sb28:function(t,e,o){"use strict";o.r(e);var r=o("vOIP");customElements.define("sp-icon-cross75",r.IconCross75)},SgYG:function(t,e,o){"use strict";o.r(e),o.d(e,"PickerBase",(function(){return b})),o.d(e,"Picker",(function(){return h}));var r=o("TToO"),i=o("3dPG"),s=o("P/Yy"),a=o("9lJu"),c=o("NPpS"),n=o("R8hp"),l=o("Sgsh"),u=o("zKLX"),m=o("15WJ"),d=(o("DWDt"),o("0Vag"),o("B6tL"),o("pJtK"),o("Wopf"));const p={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class b extends(Object(i.SizedMixin)(u.Focusable)){constructor(){super(),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=t=>{this.focused=!0,"ArrowDown"!==t.code&&"ArrowUp"!==t.code||(t.preventDefault(),this.toggle(!0))},this.overlayCloseCallback=()=>{this.open=!1},this._willUpdateItems=!1,this.itemsUpdated=Promise.resolve(),this.menuStatePromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(t){t.stopPropagation();const e=t.target,[o]=e.selectedItems;this.setValueFromItem(o,t)}async setValueFromItem(t,e){const o=this.selectedItem,r=this.value;this.selectedItem=t,this.value=t.value,this.open=!1,await this.updateComplete;if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0})))return e&&e.preventDefault(),this.selectedItem.selected=!1,o&&(o.selected=!0),this.selectedItem=o,this.value=r,void(this.open=!0);o&&(o.selected=!1),t.selected=!!this.selects}toggle(t){this.readonly||(this.open=void 0!==t?t:!this.open)}close(){this.readonly||(this.open=!1)}onOverlayClosed(){this.close(),this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.menuStateResolver()}generatePopover(t){this.popoverFragment||(this.popoverFragment=document.createDocumentFragment(),Object(s.render)(this.renderPopover,this.popoverFragment,{host:this}),this.popover=this.popoverFragment.children[0],this.optionsMenu=this.popover.children[1],t&&console.warn(`Deprecation Notice: You no longer need to provide an sp-menu child to ${this.tagName.toLowerCase()}. Any styling or attributes on the sp-menu will be ignored.`))}async openMenu(){let t=[];const e=this.querySelector("sp-menu");this.generatePopover(e),t=e?Array.from(e.children):Array.from(this.children).filter(t=>!t.hasAttribute("slot")),0!==t.length?(this.restoreChildren=Object(m.reparentChildren)(t,this.optionsMenu,()=>t=>{void 0!==t.focused&&(t.focused=!1)}),this.sizePopover(this.popover),this.addEventListener("sp-opened",async()=>{this.updateMenuItems(),await Promise.all([this.itemsUpdated,this.optionsMenu.updateComplete]),this.menuStateResolver()},{once:!0}),this.closeOverlay=await h.openOverlay(this,"modal",this.popover,{placement:this.placement,receivesFocus:"auto"})):this.menuStateResolver()}sizePopover(t){this.quiet||t.style.setProperty("min-width",this.offsetWidth+"px")}closeMenu(){this.closeOverlay&&(this.closeOverlay(),delete this.closeOverlay)}get selectedItemContent(){return this.selectedItem?this.selectedItem.itemChildren:{icon:[],content:[]}}renderLabelContent(t){return this.value&&this.selectedItem?t:s.html`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const t={"visually-hidden":"only"===this.icons&&!!this.value,placeholder:!this.value};return[s.html`
                <span id="icon" ?hidden=${"none"===this.icons}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${Object(a.classMap)(t)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?s.html`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:s.nothing}
                <sp-icon-chevron100
                    class="picker ${p[this.size]}"
                ></sp-icon-chevron100>
            `]}render(){return s.html`
            <span
                id="focus-helper"
                tabindex="${this.focused?"-1":"0"}"
                @focus=${this.onHelperFocus}
            ></span>
            <button
                aria-haspopup="true"
                aria-expanded=${this.open?"true":"false"}
                aria-labelledby="button icon label"
                id="button"
                class="button"
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
        `}update(t){this.selects&&(this.selects="single"),super.update(t)}get dismissHelper(){return s.html`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    arial-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `}get renderPopover(){return s.html`
            <sp-popover
                id="popover"
                role="dialog"
                @sp-menu-item-added-or-updated=${this.updateMenuItems}
                @sp-overlay-closed=${this.onOverlayClosed}
                .overlayCloseCallback=${this.overlayCloseCallback}
            >
                ${this.dismissHelper}
                <sp-menu
                    id="menu"
                    role="${this.listRole}"
                    @change=${this.handleChange}
                    .selects=${this.selects}
                ></sp-menu>
                ${this.dismissHelper}
            </sp-popover>
        `}updateMenuItems(t){if(this.open&&"sp-menu-item-removed"===(null==t?void 0:t.type))return;if(this._willUpdateItems)return;this._willUpdateItems=!0,(null==t?void 0:t.item)===this.selectedItem&&this.requestUpdate();let e=()=>{};this.itemsUpdated=new Promise(t=>e=t),window.requestAnimationFrame(async()=>{this.open?(await this.optionsMenu.updateComplete,this.menuItems=this.optionsMenu.childItems):this.menuItems=[...this.querySelectorAll("sp-menu-item")],this.manageSelection(),e(),this._willUpdateItems=!1})}updated(t){super.updated(t),t.has("value")&&!t.has("selectedItem")&&this.updateMenuItems(),t.has("disabled")&&this.disabled&&(this.open=!1),t.has("open")&&(this.open||void 0!==t.get("open"))&&(this.menuStatePromise=new Promise(t=>this.menuStateResolver=t),this.open?this.openMenu():this.closeMenu())}manageSelection(){let t;this.menuItems.forEach(e=>{this.value!==e.value||e.disabled?e.selected=!1:t=e}),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&this.optionsMenu.updateComplete.then(()=>{this.optionsMenu.updateSelectedItemIndex()})}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.menuStatePromise,await this.itemsUpdated,t}connectedCallback(){this.updateMenuItems(),this.addEventListener("sp-menu-item-added-or-updated",this.updateMenuItems),this.addEventListener("sp-menu-item-removed",this.updateMenuItems),super.connectedCallback()}disconnectedCallback(){this.open=!1,super.disconnectedCallback()}}b.openOverlay=async(t,e,o,r)=>await Object(d.openOverlay)(t,e,o,r),Object(r.__decorate)([Object(c.query)("#button")],b.prototype,"button",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],b.prototype,"disabled",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],b.prototype,"focused",void 0),Object(r.__decorate)([Object(c.property)({type:String,reflect:!0})],b.prototype,"icons",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],b.prototype,"invalid",void 0),Object(r.__decorate)([Object(c.property)()],b.prototype,"label",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],b.prototype,"open",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],b.prototype,"readonly",void 0),Object(r.__decorate)([Object(c.property)()],b.prototype,"placement",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],b.prototype,"quiet",void 0),Object(r.__decorate)([Object(c.property)({type:String})],b.prototype,"value",void 0),Object(r.__decorate)([Object(c.property)({attribute:!1})],b.prototype,"selectedItem",void 0);class h extends b{constructor(){super(...arguments),this.onKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if(t.preventDefault(),"ArrowUp"===e||"ArrowDown"===e)return void this.toggle(!0);const o=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,r=this.value&&"ArrowRight"!==e?-1:1;let i=o+r;for(;this.menuItems[i]&&this.menuItems[i].disabled;)i+=r;this.menuItems[i]&&!this.menuItems[i].disabled&&(this.value&&i===o||this.setValueFromItem(this.menuItems[i]))}}static get styles(){return[n.default,l.default]}}},Sgsh:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}
`;e.default=r},T0Aq:function(t,e,o){"use strict";o.r(e),o.d(e,"Popover",(function(){return n}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("MsV+");class n extends i.SpectrumElement{constructor(){super(...arguments),this.dialog=!1,this.open=!1,this.placement="none",this.tip=!1}static get styles(){return[c.default]}renderTip(){return s.html`
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("sp-overlay-query",this.onOverlayQuery)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sp-overlay-query",this.onOverlayQuery)}onOverlayQuery(t){if(!t.target)return;if(t.target!==this)return;const e=this.shadowRoot.querySelector("#tip");e&&(t.detail.overlayContentTipElement=e)}render(){return s.html`
            <slot></slot>
            ${this.tip?this.renderTip():s.nothing}
        `}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],n.prototype,"dialog",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],n.prototype,"open",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],n.prototype,"placement",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],n.prototype,"tip",void 0)},TF3L:function(t,e,o){"use strict";o.r(e),o.d(e,"IconChevron100",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("yZjE"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Chevron100Icon)()}}},TToO:function(t,e,o){"use strict";o.r(e),o.d(e,"__extends",(function(){return i})),o.d(e,"__assign",(function(){return s})),o.d(e,"__rest",(function(){return a})),o.d(e,"__decorate",(function(){return c})),o.d(e,"__param",(function(){return n})),o.d(e,"__metadata",(function(){return l})),o.d(e,"__awaiter",(function(){return u})),o.d(e,"__generator",(function(){return m})),o.d(e,"__createBinding",(function(){return d})),o.d(e,"__exportStar",(function(){return p})),o.d(e,"__values",(function(){return b})),o.d(e,"__read",(function(){return h})),o.d(e,"__spread",(function(){return g})),o.d(e,"__spreadArrays",(function(){return v})),o.d(e,"__spreadArray",(function(){return x})),o.d(e,"__await",(function(){return f})),o.d(e,"__asyncGenerator",(function(){return y})),o.d(e,"__asyncDelegator",(function(){return z})),o.d(e,"__asyncValues",(function(){return k})),o.d(e,"__makeTemplateObject",(function(){return w})),o.d(e,"__importStar",(function(){return C})),o.d(e,"__importDefault",(function(){return O})),o.d(e,"__classPrivateFieldGet",(function(){return A})),o.d(e,"__classPrivateFieldSet",(function(){return T}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var s=function(){return(s=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function a(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]])}return o}function c(t,e,o,r){var i,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(s<3?i(a):s>3?i(e,o,a):i(e,o))||a);return s>3&&a&&Object.defineProperty(e,o,a),a}function n(t,e){return function(o,r){e(o,r,t)}}function l(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function u(t,e,o,r){return new(o||(o=Promise))((function(i,s){function a(t){try{n(r.next(t))}catch(t){s(t)}}function c(t){try{n(r.throw(t))}catch(t){s(t)}}function n(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,c)}n((r=r.apply(t,e||[])).next())}))}function m(t,e){var o,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function c(s){return function(c){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{o=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var d=Object.create?function(t,e,o,r){void 0===r&&(r=o),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[o]}})}:function(t,e,o,r){void 0===r&&(r=o),t[r]=e[o]};function p(t,e){for(var o in t)"default"===o||Object.prototype.hasOwnProperty.call(e,o)||d(e,t,o)}function b(t){var e="function"==typeof Symbol&&Symbol.iterator,o=e&&t[e],r=0;if(o)return o.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,i,s=o.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}return a}function g(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t}function v(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<o;e++)for(var s=arguments[e],a=0,c=s.length;a<c;a++,i++)r[i]=s[a];return r}function x(t,e,o){if(o||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}function f(t){return this instanceof f?(this.v=t,this):new f(t)}function y(t,e,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=o.apply(t,e||[]),s=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){i[t]&&(r[t]=function(e){return new Promise((function(o,r){s.push([t,e,o,r])>1||c(t,e)}))})}function c(t,e){try{(o=i[t](e)).value instanceof f?Promise.resolve(o.value.v).then(n,l):u(s[0][2],o)}catch(t){u(s[0][3],t)}var o}function n(t){c("next",t)}function l(t){c("throw",t)}function u(t,e){t(e),s.shift(),s.length&&c(s[0][0],s[0][1])}}function z(t){var e,o;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,i){e[r]=t[r]?function(e){return(o=!o)?{value:f(t[r](e)),done:"return"===r}:i?i(e):e}:i}}function k(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=t[Symbol.asyncIterator];return o?o.call(t):(t=b(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(e){return new Promise((function(r,i){(function(t,e,o,r){Promise.resolve(r).then((function(e){t({value:e,done:o})}),e)})(r,i,(e=t[o](e)).done,e.value)}))}}}function w(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var q=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function C(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&d(e,t,o);return q(e,t),e}function O(t){return t&&t.__esModule?t:{default:t}}function A(t,e,o,r){if("a"===o&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?r:"a"===o?r.call(t):r?r.value:e.get(t)}function T(t,e,o,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,o):i?i.value=o:e.set(t,o),o}},TiAI:function(t,e,o){"use strict";o.r(e),o.d(e,"FieldLabel",(function(){return u}));var r=o("TToO"),i=o("3dPG"),s=o("Gsci"),a=o("P/Yy"),c=o("NPpS"),n=(o("ORM/"),o("5Hfj")),l=o("BlSX");class u extends(Object(i.SizedMixin)(s.SpectrumElement)){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1}static get styles(){return[l.default,n.default]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),o=this.target,r=o.getRootNode(),i=r.host;r===e&&o.forceFocusVisible?o.forceFocusVisible():i&&i.forceFocusVisible&&i.forceFocusVisible()}async manageFor(){if(!this.for)return;const t=this.getRootNode(),e=t.querySelector("#"+this.for);if(e){if(e.localName.search("-")>0&&await customElements.whenDefined(e.localName),void 0!==e.updateComplete&&await e.updateComplete,this.target=e.focusElement||e,this.target){this.target.getRootNode()===t?this.target.setAttribute("aria-labelledby",this.id):this.target.setAttribute("aria-label",this.labelText)}return Promise.resolve()}}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});if(!t.length)return"";return t.map(t=>(t.textContent||"").trim()).join(" ")}render(){return a.html`
            <label>
                <slot @slotchange=${this.manageFor}></slot>
                ${this.required?a.html`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:a.html``}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${u.instanceCount++}`),this.addEventListener("click",this.handleClick)}updated(t){super.updated(t),(t.has("for")||t.has("id"))&&this.manageFor()}}u.instanceCount=0,Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],u.prototype,"disabled",void 0),Object(r.__decorate)([Object(c.property)({type:String})],u.prototype,"id",void 0),Object(r.__decorate)([Object(c.property)({type:String})],u.prototype,"for",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],u.prototype,"required",void 0),Object(r.__decorate)([Object(c.query)("slot")],u.prototype,"slotEl",void 0),Object(r.__decorate)([Object(c.property)({type:String,reflect:!0,attribute:"side-aligned"})],u.prototype,"sideAligned",void 0)},Tvfg:function(t,e,o){"use strict";o.r(e);var r=o("E69E");customElements.define("sp-dialog",r.Dialog)},U3Ba:function(t,e,o){"use strict";o.r(e),o.d(e,"firstFocusableIn",(function(){return r}));const r=t=>t.querySelector('button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [focusable]:not([tabindex="-1"])')},UB7X:function(t,e,o){"use strict";o.r(e),o.d(e,"RovingTabindexController",(function(){return r}));class r{constructor(t,{direction:e,elementEnterAction:o,elements:r,focusInIndex:i,isFocusableElement:s,listenerScope:a}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=t=>{},this.firstUpdated=!0,this._focused=!1,this._focusInIndex=t=>0,this.isFocusableElement=t=>!0,this._listenerScope=()=>this.host,this.offset=0,this.managed=!0,this.manageIndexesAnimationFrame=0,this.handleFocusin=t=>{if(!this.isEventWithinListenerScope(t))return;this.isRelatedTargetAnElement(t)&&this.hostContainsFocus();const e=t.composedPath();let o=-1;e.find(t=>(o=this.elements.indexOf(t),-1!==o)),this.currentIndex=o>-1?o:this.currentIndex},this.handleFocusout=t=>{this.isRelatedTargetAnElement(t)&&this.hostNoLongerContainsFocus()},this.handleKeydown=t=>{if(!this.acceptsEventCode(t.code)||t.defaultPrevented)return;let e=0;switch(t.code){case"ArrowRight":e+=1;break;case"ArrowDown":e+="grid"===this.direction?this.directionLength:1;break;case"ArrowLeft":e-=1;break;case"ArrowUp":e-="grid"===this.direction?this.directionLength:1;break;case"End":this.currentIndex=0,e-=1;break;case"Home":this.currentIndex=this.elements.length-1,e+=1}t.preventDefault(),"grid"===this.direction&&this.currentIndex+e<0?this.currentIndex=0:"grid"===this.direction&&this.currentIndex+e>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(e),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=r,this.isFocusableElement=s||this.isFocusableElement,"string"==typeof e?this._direction=()=>e:"function"==typeof e&&(this._direction=e),this.elementEnterAction=o||this.elementEnterAction,"number"==typeof i?this._focusInIndex=()=>i:"function"==typeof i&&(this._focusInIndex=i),"object"==typeof a?this._listenerScope=()=>a:"function"==typeof a&&(this._listenerScope=a)}get currentIndex(){return-1===this._currentIndex&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t,this.manageTabindexes())}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host||t.composedPath().includes(this._listenerScope())}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){var e;null===(e=this.elements[this.currentIndex])||void 0===e||e.focus(t)}clearElementCache(t=0){delete this.cachedElements,cancelAnimationFrame(this.manageIndexesAnimationFrame),this.offset=t,this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame(()=>this.manageTabindexes()))}setCurrentIndexCircularly(t){const{length:e}=this.elements;let o=e,r=(e+this.currentIndex+t)%e;for(;o&&this.elements[r]&&!this.isFocusableElement(this.elements[r]);)r=(e+r+t)%e,o-=1;this.currentIndex=r}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.currentIndex=this.focusInIndex,this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if("End"===t||"Home"===t)return!0;switch(this.direction){case"horizontal":return"ArrowLeft"===t||"ArrowRight"===t;case"vertical":return"ArrowUp"===t||"ArrowDown"===t;case"both":case"grid":return t.startsWith("Arrow")}}manageTabindexes(){this.focused?this.updateTabindexes(()=>({tabIndex:-1})):this.updateTabindexes(t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1}))}updateTabindexes(t){this.elements.forEach(e=>{const{tabIndex:o,removeTabIndex:r}=t(e);if(!r)return void(e.tabIndex=o);e.removeAttribute("tabindex");const i=e;i.requestUpdate&&i.requestUpdate()})}manage(){this.managed=!0,this.manageTabindexes(),this.addEventListeners()}unmanage(){this.managed=!1,this.updateTabindexes(()=>({tabIndex:0})),this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostUpdated(){this.firstUpdated&&(this.manageTabindexes(),this.firstUpdated=!1)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}}},Ui7F:function(t,e,o){"use strict";o.r(e),o.d(e,"ProgressCircle",(function(){return u}));var r=o("TToO"),i=o("3dPG"),s=o("Gsci"),a=o("P/Yy"),c=o("NPpS"),n=o("h+pW"),l=o("fl79");class u extends(Object(i.SizedMixin)(s.SpectrumElement,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.indeterminate=!1,this.label="",this.overBackground=!1,this.progress=0}static get styles(){return[l.default]}makeRotation(t){return this.indeterminate?void 0:`transform: rotate(${t}deg);`}render(){const t=[this.makeRotation(3.6*Math.min(this.progress,50)-180),this.makeRotation(3.6*Math.max(this.progress-50,0)-180)];return a.html`
            <div class="track"></div>
            <div class="fills">
                ${["Mask1","Mask2"].map((e,o)=>a.html`
                        <div class="fill${e}">
                            <div
                                class="fillSub${e}"
                                style=${Object(n.ifDefined)(t[o])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `)}
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("role")||this.setAttribute("role","progressbar")}updated(t){super.updated(t),!this.indeterminate&&t.has("progress")?this.setAttribute("aria-valuenow",""+this.progress):this.hasAttribute("aria-valuenow")&&this.removeAttribute("aria-valuenow"),this.label&&t.has("label")&&this.setAttribute("aria-label",this.label)}}Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],u.prototype,"indeterminate",void 0),Object(r.__decorate)([Object(c.property)({type:String})],u.prototype,"label",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0,attribute:"over-background"})],u.prototype,"overBackground",void 0),Object(r.__decorate)([Object(c.property)({type:Number})],u.prototype,"progress",void 0)},Uv1x:function(t,e,o){"use strict";o.r(e),o.d(e,"ObserveSlotPresence",(function(){return a}));const r=Symbol("slotElementObserver"),i=Symbol("startObserving"),s=Symbol("slotContentIsPresent");function a(t,e){var o;const a=Array.isArray(e)?e:[e];class c extends t{constructor(){super(...arguments),this[o]=new Map,this.managePresenceObservedSlot=()=>{a.forEach(t=>{this[s].set(t,!!this.querySelector(t))}),this.requestUpdate()}}get slotContentIsPresent(){if(1===a.length)return this[s].get(a[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(t){if(this[s].has(t))return this[s].get(t)||!1;throw new Error("The provided selector `` is not being observed.")}[(o=s,i)](){this[r]||(this[r]=new MutationObserver(this.managePresenceObservedSlot)),this[r].observe(this,{childList:!0,subtree:!0}),this.managePresenceObservedSlot()}connectedCallback(){super.connectedCallback(),this[i]()}disconnectedCallback(){this[r].disconnect(),super.disconnectedCallback()}}return c}},"VOk/":function(t,e,o){"use strict";o.r(e);var r=o("l9S0");customElements.define("active-overlay",r.ActiveOverlay)},Vewf:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-fieldgroup-margin:var(
--spectrum-global-dimension-size-200
)}.group{display:flex;flex-wrap:wrap;vertical-align:top}:host([dir=ltr][horizontal]) slot:not([name])::slotted(:not(:last-child)){margin-right:var(
--spectrum-fieldgroup-margin
)}:host([dir=rtl][horizontal]) slot:not([name])::slotted(:not(:last-child)){margin-left:var(
--spectrum-fieldgroup-margin
)}:host([vertical]) .group{display:inline-flex;flex-direction:column}:host([dir=rtl]:not([vertical])) slot:not([name])::slotted(:not(:last-child)),:host([horizontal][dir=rtl]) slot:not([name])::slotted(:not(:last-child)){margin:0 0 0 var(--spectrum-fieldgroup-margin)}:host([dir=ltr]:not([vertical])) slot:not([name])::slotted(:not(:last-child)),:host([horizontal][dir=ltr]) slot:not([name])::slotted(:not(:last-child)){margin:0 var(--spectrum-fieldgroup-margin) 0 0}
`;e.default=r},WiLC:function(t,e,o){"use strict";o.r(e),o.d(e,"queryAsync",(function(){return i}));var r=o("596t");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return Object(r.decorateProperty)({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}},Wopf:function(t,e,o){"use strict";o.r(e),o.d(e,"openOverlay",(function(){return r}));const r=async(t,e,r,i)=>{const{Overlay:s}=await Promise.resolve().then(o.bind(null,"IEsu"));return s.open(t,e,r,i)}},XFfE:function(t,e,o){"use strict";o.r(e),o.d(e,"DialogWrapper",(function(){return m}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("h+pW"),n=(o("mO/9"),o("i+lW"),o("Tvfg"),o("2BBL")),l=o("j/Se"),u=o("U3Ba");class m extends(Object(l.FocusVisiblePolyfillMixin)(i.SpectrumElement)){constructor(){super(...arguments),this.error=!1,this.cancelLabel="",this.confirmLabel="",this.dismissable=!1,this.footer="",this.hero="",this.heroLabel="",this.noDivider=!1,this.open=!1,this.secondaryLabel="",this.headline="",this.responsive=!1,this.underlay=!1}static get styles(){return[n.default]}focus(){if(this.shadowRoot){const t=Object(u.firstFocusableIn)(this.shadowRoot);t?(t.updateComplete?t.updateComplete.then(()=>t.focus()):t.focus(),this.removeAttribute("tabindex")):this.dialog.focus()}else super.focus()}dismiss(){this.dismissable&&this.close()}clickSecondary(){this.dispatchEvent(new Event("secondary",{bubbles:!0}))}clickCancel(){this.dispatchEvent(new Event("cancel",{bubbles:!0}))}clickConfirm(){this.dispatchEvent(new Event("confirm",{bubbles:!0}))}close(){this.open=!1,this.dispatchEvent(new Event("close",{bubbles:!0}))}render(){return s.html`
            ${this.underlay?s.html`
                      <sp-underlay
                          ?open=${this.open}
                          @click=${this.dismiss}
                      ></sp-underlay>
                  `:s.html``}
            <div class="modal ${this.mode}">
                <sp-dialog
                    ?dismissable=${this.dismissable}
                    ?no-divider=${this.noDivider}
                    ?error=${this.error}
                    mode=${Object(c.ifDefined)(this.mode?this.mode:void 0)}
                    size=${Object(c.ifDefined)(this.size?this.size:void 0)}
                    @close=${this.close}
                >
                    ${this.hero?s.html`
                              <img
                                  src="${this.hero}"
                                  slot="hero"
                                  aria-hidden=${Object(c.ifDefined)(this.heroLabel?void 0:"true")}
                                  alt=${Object(c.ifDefined)(this.heroLabel?this.heroLabel:void 0)}
                              />
                          `:s.html``}
                    ${this.headline?s.html`
                              <h2 slot="heading">${this.headline}</h2>
                          `:s.html``}
                    <slot></slot>
                    ${this.footer?s.html`
                              <div slot="footer">${this.footer}</div>
                          `:s.html``}
                    ${this.secondaryLabel?s.html`
                              <sp-button
                                  variant="primary"
                                  slot="button"
                                  @click=${this.clickSecondary}
                              >
                                  ${this.secondaryLabel}
                              </sp-button>
                          `:s.html``}
                    ${this.cancelLabel?s.html`
                              <sp-button
                                  variant="secondary"
                                  slot="button"
                                  @click=${this.clickCancel}
                              >
                                  ${this.cancelLabel}
                              </sp-button>
                          `:s.html``}
                    ${this.confirmLabel?s.html`
                              <sp-button
                                  variant="cta"
                                  slot="button"
                                  @click=${this.clickConfirm}
                              >
                                  ${this.confirmLabel}
                              </sp-button>
                          `:s.html``}
                </sp-dialog>
            </div>
        `}updated(t){t.has("open")&&this.open&&this.dialog.updateComplete.then(()=>{this.dialog.shouldManageTabOrderForScrolling()})}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],m.prototype,"error",void 0),Object(r.__decorate)([Object(a.property)({attribute:"cancel-label"})],m.prototype,"cancelLabel",void 0),Object(r.__decorate)([Object(a.property)({attribute:"confirm-label"})],m.prototype,"confirmLabel",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],m.prototype,"dismissable",void 0),Object(r.__decorate)([Object(a.property)()],m.prototype,"footer",void 0),Object(r.__decorate)([Object(a.property)()],m.prototype,"hero",void 0),Object(r.__decorate)([Object(a.property)({attribute:"hero-label"})],m.prototype,"heroLabel",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0,attribute:"no-divider"})],m.prototype,"noDivider",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],m.prototype,"open",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],m.prototype,"mode",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],m.prototype,"size",void 0),Object(r.__decorate)([Object(a.property)({attribute:"secondary-label"})],m.prototype,"secondaryLabel",void 0),Object(r.__decorate)([Object(a.property)()],m.prototype,"headline",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean})],m.prototype,"responsive",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean})],m.prototype,"underlay",void 0),Object(r.__decorate)([Object(a.query)("sp-dialog")],m.prototype,"dialog",void 0)},Xf6d:function(t,e,o){"use strict";o.r(e),o.d(e,"queryAssignedElements",(function(){return a}));var r,i=o("596t");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=null!=(null===(r=window.HTMLSlotElement)||void 0===r?void 0:r.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function a(t){const{slot:e,selector:o}=null!=t?t:{};return Object(i.decorateProperty)({descriptor:r=>({get(){var r;const i="slot"+(e?`[name=${e}]`:":not([name])"),a=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(i),c=null!=a?s(a,t):[];return o?c.filter(t=>t.matches(o)):c},enumerable:!0,configurable:!0})})}},YSBh:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Dash50{height:var(--spectrum-alias-ui-icon-dash-size-50);width:var(
--spectrum-alias-ui-icon-dash-size-50
)}.spectrum-UIIcon-Dash75{height:var(--spectrum-alias-ui-icon-dash-size-75);width:var(
--spectrum-alias-ui-icon-dash-size-75
)}.spectrum-UIIcon-Dash100{height:var(--spectrum-alias-ui-icon-dash-size-100);width:var(
--spectrum-alias-ui-icon-dash-size-100
)}.spectrum-UIIcon-Dash200{height:var(--spectrum-alias-ui-icon-dash-size-200);width:var(
--spectrum-alias-ui-icon-dash-size-200
)}.spectrum-UIIcon-Dash300{height:var(--spectrum-alias-ui-icon-dash-size-300);width:var(
--spectrum-alias-ui-icon-dash-size-300
)}.spectrum-UIIcon-Dash400{height:var(--spectrum-alias-ui-icon-dash-size-400);width:var(
--spectrum-alias-ui-icon-dash-size-400
)}.spectrum-UIIcon-Dash500{height:var(--spectrum-alias-ui-icon-dash-size-500);width:var(
--spectrum-alias-ui-icon-dash-size-500
)}.spectrum-UIIcon-Dash600{height:var(--spectrum-alias-ui-icon-dash-size-600);width:var(
--spectrum-alias-ui-icon-dash-size-600
)}
`;e.default=r},ZP7E:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host,:root{--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-global-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-global-animation-ease-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-static-black:#000;--spectrum-global-color-static-white:#fff;--spectrum-global-color-static-blue:#1473e6;--spectrum-global-color-static-gray-50:#fff;--spectrum-global-color-static-gray-75:#fff;--spectrum-global-color-static-gray-100:#fff;--spectrum-global-color-static-gray-200:#f4f4f4;--spectrum-global-color-static-gray-300:#eaeaea;--spectrum-global-color-static-gray-400:#d3d3d3;--spectrum-global-color-static-gray-500:#bcbcbc;--spectrum-global-color-static-gray-600:#959595;--spectrum-global-color-static-gray-700:#747474;--spectrum-global-color-static-gray-800:#505050;--spectrum-global-color-static-gray-900:#323232;--spectrum-global-color-static-blue-200:#5aa9fa;--spectrum-global-color-static-blue-300:#4b9cf5;--spectrum-global-color-static-blue-400:#378ef0;--spectrum-global-color-static-blue-500:#2680eb;--spectrum-global-color-static-blue-600:#1473e6;--spectrum-global-color-static-blue-700:#0d66d0;--spectrum-global-color-static-blue-800:#095aba;--spectrum-global-color-static-red-400:#ec5b62;--spectrum-global-color-static-red-500:#e34850;--spectrum-global-color-static-red-600:#d7373f;--spectrum-global-color-static-red-700:#c9252d;--spectrum-global-color-static-red-800:#bb121a;--spectrum-global-color-static-orange-400:#f29423;--spectrum-global-color-static-orange-500:#e68619;--spectrum-global-color-static-orange-600:#da7b11;--spectrum-global-color-static-orange-700:#cb6f10;--spectrum-global-color-static-orange-800:#bd640d;--spectrum-global-color-static-green-400:#33ab84;--spectrum-global-color-static-green-500:#2d9d78;--spectrum-global-color-static-green-600:#268e6c;--spectrum-global-color-static-green-700:#12805c;--spectrum-global-color-static-green-800:#107154;--spectrum-global-color-static-celery-200:#58e06f;--spectrum-global-color-static-celery-300:#51d267;--spectrum-global-color-static-celery-400:#4bc35f;--spectrum-global-color-static-celery-500:#44b556;--spectrum-global-color-static-celery-600:#3da74e;--spectrum-global-color-static-celery-700:#379947;--spectrum-global-color-static-celery-800:#318b40;--spectrum-global-color-static-chartreuse-300:#9bec54;--spectrum-global-color-static-chartreuse-400:#8ede49;--spectrum-global-color-static-chartreuse-500:#85d044;--spectrum-global-color-static-chartreuse-600:#7cc33f;--spectrum-global-color-static-chartreuse-700:#73b53a;--spectrum-global-color-static-chartreuse-800:#6aa834;--spectrum-global-color-static-yellow-200:#ffe22e;--spectrum-global-color-static-yellow-300:#fad900;--spectrum-global-color-static-yellow-400:#edcc00;--spectrum-global-color-static-yellow-500:#dfbf00;--spectrum-global-color-static-yellow-600:#d2b200;--spectrum-global-color-static-yellow-700:#c4a600;--spectrum-global-color-static-yellow-800:#b79900;--spectrum-global-color-static-magenta-200:#f56bb7;--spectrum-global-color-static-magenta-300:#ec5aaa;--spectrum-global-color-static-magenta-400:#e2499d;--spectrum-global-color-static-magenta-500:#d83790;--spectrum-global-color-static-magenta-600:#ca2982;--spectrum-global-color-static-magenta-700:#bc1c74;--spectrum-global-color-static-magenta-800:#ae0e66;--spectrum-global-color-static-fuchsia-400:#cf3edc;--spectrum-global-color-static-fuchsia-500:#c038cc;--spectrum-global-color-static-fuchsia-600:#b130bd;--spectrum-global-color-static-fuchsia-700:#a228ad;--spectrum-global-color-static-fuchsia-800:#93219e;--spectrum-global-color-static-purple-400:#9d64e1;--spectrum-global-color-static-purple-500:#9256d9;--spectrum-global-color-static-purple-600:#864ccc;--spectrum-global-color-static-purple-700:#7a42bf;--spectrum-global-color-static-purple-800:#6f38b1;--spectrum-global-color-static-indigo-200:#9090fa;--spectrum-global-color-static-indigo-300:#8282f6;--spectrum-global-color-static-indigo-400:#7575f1;--spectrum-global-color-static-indigo-500:#6767ec;--spectrum-global-color-static-indigo-600:#5c5ce0;--spectrum-global-color-static-indigo-700:#5151d3;--spectrum-global-color-static-indigo-800:#4646c6;--spectrum-global-color-static-seafoam-200:#26c0c7;--spectrum-global-color-static-seafoam-300:#23b2b8;--spectrum-global-color-static-seafoam-400:#20a3a8;--spectrum-global-color-static-seafoam-500:#1b959a;--spectrum-global-color-static-seafoam-600:#16878c;--spectrum-global-color-static-seafoam-700:#0f797d;--spectrum-global-color-static-seafoam-800:#096c6f;--spectrum-global-color-sequential-cerulean:#e9fff1,#c8f1e4,#a5e3d7,#82d5ca,#68c5c1,#54b4ba,#3fa2b2,#2991ac,#2280a2,#1f6d98,#1d5c8d,#1a4b83,#1a3979,#1a266f,#191264,#180057;--spectrum-global-color-sequential-forest:#ffffdf,#e2f6ba,#c4eb95,#a4e16d,#8dd366,#77c460,#5fb65a,#48a754,#36984f,#2c894d,#237a4a,#196b47,#105c45,#094d41,#033f3e,#00313a;--spectrum-global-color-sequential-rose:#fff4dd,#ffddd7,#ffc5d2,#feaecb,#fa96c4,#f57ebd,#ef64b5,#e846ad,#d238a1,#bb2e96,#a3248c,#8a1b83,#71167c,#560f74,#370b6e,#000968;--spectrum-global-color-diverging-orange-yellow-seafoam:#580000,#79260b,#9c4511,#bd651a,#dd8629,#f5ad52,#fed693,#ffffe0,#bbe4d1,#76c7be,#3ea8a6,#208288,#076769,#00494b,#002c2d;--spectrum-global-color-diverging-red-yellow-blue:#4a001e,#751232,#a52747,#c65154,#e47961,#f0a882,#fad4ac,#ffffe0,#bce2cf,#89c0c4,#579eb9,#397aa8,#1c5796,#163771,#10194d;--spectrum-global-color-diverging-red-blue:#4a001e,#731331,#9f2945,#cc415a,#e06e85,#ed9ab0,#f8c3d9,#faf0ff,#c6d0f2,#92b2de,#5d94cb,#2f74b3,#265191,#163670,#0b194c;--spectrum-semantic-negative-background-color:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-color-default:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-hover:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-dark:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-border-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-icon-color:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-status-color:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-text-color-large:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-text-color-small:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-text-color-small-hover:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-text-color-small-key-focus:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-color-key-focus:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-background-color-default:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-background-color-hover:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-background-color-down:var(
--spectrum-global-color-static-red-800
);--spectrum-semantic-negative-background-color-key-focus:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-notice-background-color:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-color-default:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-dark:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-border-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-icon-color:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-status-color:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-text-color-large:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-text-color-small:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-down:var(
--spectrum-global-color-orange-700
);--spectrum-semantic-notice-color-key-focus:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-background-color-default:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-background-color-hover:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-background-color-down:var(
--spectrum-global-color-static-orange-800
);--spectrum-semantic-notice-background-color-key-focus:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-positive-background-color:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-color-default:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-dark:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-border-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-icon-color:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-status-color:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-text-color-large:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-text-color-small:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-down:var(
--spectrum-global-color-green-700
);--spectrum-semantic-positive-color-key-focus:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-background-color-default:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-background-color-hover:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-background-color-down:var(
--spectrum-global-color-static-green-800
);--spectrum-semantic-positive-background-color-key-focus:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-informative-background-color:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-dark:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-border-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-icon-color:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-status-color:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-text-color-large:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-text-color-small:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-informative-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-informative-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-cta-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-cta-background-color-key-focus:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-neutral-background-color-default:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-neutral-background-color-hover:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-neutral-background-color-down:var(
--spectrum-global-color-static-gray-900
);--spectrum-semantic-neutral-background-color-key-focus:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-presence-color-1:var(
--spectrum-global-color-static-red-500
);--spectrum-semantic-presence-color-2:var(
--spectrum-global-color-static-orange-400
);--spectrum-semantic-presence-color-3:var(
--spectrum-global-color-static-yellow-400
);--spectrum-semantic-presence-color-4:#4bcca2;--spectrum-semantic-presence-color-5:#00c7ff;--spectrum-semantic-presence-color-6:#008cb8;--spectrum-semantic-presence-color-7:#7e4bf3;--spectrum-semantic-presence-color-8:var(
--spectrum-global-color-static-fuchsia-600
);--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-70:70%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-0:0em;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-global-font-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-global-font-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-global-font-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-global-font-font-family-ja:adobe-clean-han-japanese,source-han-japanese,"Yu Gothic","\\30E1 \\30A4 \\30EA \\30AA","\\30D2 \\30E9 \\30AE \\30CE \\89D2 \\30B4  Pro W3","Hiragino Kaku Gothic Pro W3","Osaka","\\FF2D \\FF33 \\FF30 \\30B4 \\30B7 \\30C3 \\30AF","MS PGothic","sans-serif";--spectrum-global-font-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-loupe-entry-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-loupe-exit-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-heading-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-strong-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-margin-bottom:var(
--spectrum-global-font-multiplier-25
);--spectrum-alias-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-body-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-body-margin-bottom:var(
--spectrum-global-font-multiplier-75
);--spectrum-alias-detail-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-light:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-font-family:var(
--spectrum-global-font-family-code
);--spectrum-alias-code-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-code-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-code-margin-bottom:var(
--spectrum-global-font-multiplier-0
);--spectrum-alias-font-family-ar:var(--spectrum-global-font-font-family-ar);--spectrum-alias-font-family-he:var(--spectrum-global-font-font-family-he);--spectrum-alias-font-family-zh:var(--spectrum-global-font-font-family-zh);--spectrum-alias-font-family-zhhans:var(
--spectrum-global-font-font-family-zhhans
);--spectrum-alias-font-family-ko:var(--spectrum-global-font-font-family-ko);--spectrum-alias-font-family-ja:var(--spectrum-global-font-font-family-ja);--spectrum-alias-font-family-condensed:var(
--spectrum-global-font-font-family-condensed
);--spectrum-alias-button-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-component-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-han-component-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-serif-text-font-family:var(
--spectrum-global-font-family-serif
);--spectrum-alias-han-heading-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-han-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-body-text-line-height:var(
--spectrum-global-font-line-height-large
);--spectrum-alias-han-body-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-body-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-subheading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-detail-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
)}:host,:root{--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-border-radius-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-border-radius-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-border-radius-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-text-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-item-text-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-item-text-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-item-text-size-xl:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-item-text-padding-top-s:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-item-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-text-padding-top-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-text-padding-bottom-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-text-padding-bottom-xl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-icon-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-top-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-icon-padding-bottom-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-bottom-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-bottom-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-bottom-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-padding-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-padding-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-padding-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-icononly-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icononly-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icononly-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icononly-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-control-gap-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-gap-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-gap-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-control-gap-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-workflow-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-workflow-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-ui-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-ui-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-ui-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-ui-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-clearbutton-gap-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-clearbutton-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-workflow-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-rounded-workflow-padding-left-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-l:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-padding-top-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-top-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-bottom-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-bottom-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-bottom-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-mark-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-1-size-s:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-item-control-1-size-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-2-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-2-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-2-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-control-2-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-2-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-2-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-2-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-2-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-3-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-3-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-3-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-3-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-control-3-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-3-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-control-3-padding-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-3-padding-l:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-padding-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-mark-size-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-l:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-item-mark-size-xl:var(
--spectrum-global-dimension-size-325
);--spectrum-alias-heading-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-xxl-text-size:var(
--spectrum-global-dimension-font-size-1100
);--spectrum-alias-heading-xl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-l-text-size:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-m-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxl-margin-top:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-xl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-l-margin-top:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-m-margin-top:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-heading-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xl-text-size:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-l-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-m-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-han-xxl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-margin-top:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-han-l-margin-top:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-han-m-margin-top:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-han-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-han-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-han-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-component-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-component-border-radius-quiet:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-component-focusring-gap-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-component-focusring-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-component-focusring-size-emphasized:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-component-focusring-border-radius:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-input-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-input-focusring-gap:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-input-quiet-focusline-gap:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-control-two-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-two-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-two-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-control-two-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-control-two-border-radius-s:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-control-two-border-radius-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-control-two-border-radius-l:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-control-two-border-radius-xl:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-control-two-border-radius-xxl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-control-three-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-control-three-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-control-three-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-infieldbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-border-radius-sided:0;--spectrum-alias-infieldbutton-border-size:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-infieldbutton-fill-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-infieldbutton-fill-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-infieldbutton-fill-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-infieldbutton-fill-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-infieldbutton-padding-s:0;--spectrum-alias-infieldbutton-padding-m:0;--spectrum-alias-infieldbutton-padding-l:0;--spectrum-alias-infieldbutton-padding-xl:0;--spectrum-alias-infieldbutton-full-height-s:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-infieldbutton-full-height-m:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-infieldbutton-full-height-l:var(
--spectrum-global-dimension-size-500
);--spectrum-alias-infieldbutton-full-height-xl:var(
--spectrum-global-dimension-size-600
);--spectrum-alias-infieldbutton-half-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-infieldbutton-half-height-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-infieldbutton-half-height-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-infieldbutton-half-height-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-stepperbutton-gap:0;--spectrum-alias-stepperbutton-width-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-stepperbutton-width-m:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-stepperbutton-width-l:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-stepperbutton-width-xl:var(
--spectrum-global-dimension-size-450
);--spectrum-alias-stepperbutton-icon-x-offset-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-icon-x-offset-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-stepperbutton-icon-x-offset-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-stepperbutton-icon-x-offset-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-stepperbutton-icon-y-offset-top-s:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-stepperbutton-icon-y-offset-top-m:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-icon-y-offset-top-l:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-stepperbutton-icon-y-offset-top-xl:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-s:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-m:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-l:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-stepperbutton-icon-y-offset-bottom-xl:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-stepperbutton-radius-touching:0;--spectrum-alias-clearbutton-icon-margin-s:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-clearbutton-icon-margin-m:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-clearbutton-icon-margin-l:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-clearbutton-icon-margin-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-clearbutton-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-icononly-padding-x-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-pickerbutton-icononly-padding-x-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-pickerbutton-icononly-padding-x-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-pickerbutton-icononly-padding-x-xl:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-pickerbutton-icon-margin-y-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-pickerbutton-icon-margin-y-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-pickerbutton-icon-margin-y-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-pickerbutton-icon-margin-y-xl:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-pickerbutton-label-padding-y-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-pickerbutton-label-padding-y-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-pickerbutton-label-padding-y-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-pickerbutton-label-padding-y-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-pickerbutton-border-radius-rounded:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-search-border-radius:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-search-border-radius-quiet:0;--spectrum-alias-combobox-quiet-button-offset-x:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-thumbnail-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-search-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-search-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-search-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-percent-50:50%;--spectrum-alias-percent-70:70%;--spectrum-alias-percent-100:100%;--spectrum-alias-breakpoint-xsmall:304px;--spectrum-alias-breakpoint-small:768px;--spectrum-alias-breakpoint-medium:1280px;--spectrum-alias-breakpoint-large:1768px;--spectrum-alias-breakpoint-xlarge:2160px;--spectrum-alias-grid-columns:12;--spectrum-alias-grid-fluid-width:100%;--spectrum-alias-grid-fixed-max-width:1280px;--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-size-thicker:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-size-thickest:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thin:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-offset-thick:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-offset-thicker:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thickest:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-baseline:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-grid-gutter-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-gutter-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-gutter-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-gutter-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-gutter-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-margin-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-margin-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-margin-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-margin-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-margin-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-layout-region-margin-bottom-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-layout-region-margin-bottom-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-radial-reaction-size-default:var(
--spectrum-global-dimension-static-size-550
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-gap-small:var(
--spectrum-global-dimension-static-size-0
);--spectrum-alias-focus-ring-size-small:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-layout-label-gap-size:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-pill-button-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-pill-button-text-baseline:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-border-radius-xsmall:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-border-radius-medium:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-large:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-border-radius-xlarge:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-alias-workflow-icon-size-s:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-workflow-icon-size-m:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-workflow-icon-size-xl:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-alert-size-75:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-alert-size-100:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-ui-icon-alert-size-200:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-ui-icon-alert-size-300:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500);--spectrum-alias-avatar-border-size:var(
--spectrum-global-dimension-size-0
)}:host,:root{--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,.42);--spectrum-alias-component-text-color-disabled:var(
--spectrum-global-color-gray-500
);--spectrum-alias-component-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-component-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-component-text-color-key-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-mouse-focus:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-default:var(
--spectrum-alias-component-text-color-default
);--spectrum-alias-component-text-color-selected-hover:var(
--spectrum-alias-component-text-color-hover
);--spectrum-alias-component-text-color-selected-down:var(
--spectrum-alias-component-text-color-down
);--spectrum-alias-component-text-color-selected-key-focus:var(
--spectrum-alias-component-text-color-key-focus
);--spectrum-alias-component-text-color-selected-mouse-focus:var(
--spectrum-alias-component-text-color-mouse-focus
);--spectrum-alias-component-text-color-selected:var(
--spectrum-alias-component-text-color-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-text-color-emphasized-selected-hover:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-down:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected-mouse-focus:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-emphasized-selected:var(
--spectrum-alias-component-text-color-emphasized-selected-default
);--spectrum-alias-component-text-color-error-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-component-text-color-error-hover:var(
--spectrum-semantic-negative-text-color-small-hover
);--spectrum-alias-component-text-color-error-down:var(
--spectrum-semantic-negative-text-color-small-down
);--spectrum-alias-component-text-color-error-key-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error-mouse-focus:var(
--spectrum-semantic-negative-text-color-small-key-focus
);--spectrum-alias-component-text-color-error:var(
--spectrum-alias-component-text-color-error-default
);--spectrum-alias-component-icon-color-disabled:var(
--spectrum-alias-icon-color-disabled
);--spectrum-alias-component-icon-color-default:var(
--spectrum-alias-icon-color
);--spectrum-alias-component-icon-color-hover:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-down:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color-key-focus:var(
--spectrum-alias-icon-color-hover
);--spectrum-alias-component-icon-color-mouse-focus:var(
--spectrum-alias-icon-color-down
);--spectrum-alias-component-icon-color:var(
--spectrum-alias-component-icon-color-default
);--spectrum-alias-component-icon-color-selected:var(
--spectrum-alias-icon-color-selected-neutral-subdued
);--spectrum-alias-component-icon-color-emphasized-selected-default:var(
--spectrum-global-color-static-white
);--spectrum-alias-component-icon-color-emphasized-selected-hover:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-down:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected-key-focus:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-icon-color-emphasized-selected:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-component-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-quiet-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-selected-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-component-background-color-default:var(
--spectrum-global-color-gray-75
);--spectrum-alias-component-background-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-component-background-color:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-component-background-color-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected-key-focus:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-background-color-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet-down:var(
--spectrum-global-color-gray-300
);--spectrum-alias-component-background-color-quiet-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-component-background-color-quiet:var(
--spectrum-alias-component-background-color-quiet-default
);--spectrum-alias-component-background-color-quiet-selected-default:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-quiet-selected-hover:var(
--spectrum-alias-component-background-color-selected-hover
);--spectrum-alias-component-background-color-quiet-selected-down:var(
--spectrum-alias-component-background-color-selected-down
);--spectrum-alias-component-background-color-quiet-selected-key-focus:var(
--spectrum-alias-component-background-color-selected-key-focus
);--spectrum-alias-component-background-color-quiet-selected:var(
--spectrum-alias-component-background-color-selected-default
);--spectrum-alias-component-background-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-background-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-background-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-background-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-background-color-emphasized-selected:var(
--spectrum-alias-component-background-color-emphasized-selected-default
);--spectrum-alias-component-border-color-disabled:var(
--spectrum-alias-border-color-disabled
);--spectrum-alias-component-border-color-quiet-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color:var(
--spectrum-alias-component-border-color-default
);--spectrum-alias-component-border-color-selected-default:var(
--spectrum-alias-border-color
);--spectrum-alias-component-border-color-selected-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-component-border-color-selected-down:var(
--spectrum-alias-border-color-down
);--spectrum-alias-component-border-color-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-selected:var(
--spectrum-alias-component-border-color-selected-default
);--spectrum-alias-component-border-color-quiet-default:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-hover:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-down:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-component-border-color-quiet-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet:var(
--spectrum-alias-component-border-color-quiet-default
);--spectrum-alias-component-border-color-quiet-selected-default:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-hover:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-down:var(
--spectrum-global-color-gray-200
);--spectrum-alias-component-border-color-quiet-selected-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-component-border-color-quiet-selected:var(
--spectrum-alias-component-border-color-quiet-selected-default
);--spectrum-alias-component-border-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-component-border-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-component-border-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-component-border-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-component-border-color-emphasized-selected:var(
--spectrum-alias-component-border-color-emphasized-selected-default
);--spectrum-alias-avatar-border-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color:var(
--spectrum-alias-avatar-border-color-default
);--spectrum-alias-avatar-border-color-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-hover:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-down:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected-key-focus:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-avatar-border-color-selected:var(
--spectrum-alias-avatar-border-color-selected-default
);--spectrum-alias-avatar-border-color-selected-disabled:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-toggle-background-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-background-color:var(
--spectrum-alias-toggle-background-color-default
);--spectrum-alias-toggle-background-color-emphasized-selected-default:var(
--spectrum-semantic-cta-background-color-default
);--spectrum-alias-toggle-background-color-emphasized-selected-hover:var(
--spectrum-semantic-cta-background-color-hover
);--spectrum-alias-toggle-background-color-emphasized-selected-down:var(
--spectrum-semantic-cta-background-color-down
);--spectrum-alias-toggle-background-color-emphasized-selected-key-focus:var(
--spectrum-semantic-cta-background-color-key-focus
);--spectrum-alias-toggle-background-color-emphasized-selected:var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
);--spectrum-alias-toggle-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-toggle-border-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-toggle-border-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-toggle-border-color:var(
--spectrum-alias-toggle-border-color-default
);--spectrum-alias-toggle-icon-color-selected:var(
--spectrum-global-color-gray-75
);--spectrum-alias-toggle-icon-color-emphasized-selected:var(
--spectrum-alias-component-icon-color-emphasized-selected-default
);--spectrum-alias-button-primary-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-primary-background-color-hover:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-background-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-button-primary-background-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-background-color:var(
--spectrum-alias-button-primary-background-color-default
);--spectrum-alias-button-primary-border-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-border-color-hover:var(
--spectrum-alias-button-primary-background-color-hover
);--spectrum-alias-button-primary-border-color-down:var(
--spectrum-alias-button-primary-background-color-down
);--spectrum-alias-button-primary-border-color-key-focus:var(
--spectrum-alias-button-primary-background-color-key-focus
);--spectrum-alias-button-primary-border-color:var(
--spectrum-alias-button-primary-border-color-default
);--spectrum-alias-button-primary-text-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-primary-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-primary-text-color:var(
--spectrum-alias-button-primary-text-color-default
);--spectrum-alias-button-primary-icon-color-default:var(
--spectrum-alias-button-primary-text-color-default
);--spectrum-alias-button-primary-icon-color-hover:var(
--spectrum-alias-button-primary-text-color-hover
);--spectrum-alias-button-primary-icon-color-down:var(
--spectrum-alias-button-primary-text-color-down
);--spectrum-alias-button-primary-icon-color-key-focus:var(
--spectrum-alias-button-primary-text-color-key-focus
);--spectrum-alias-button-primary-icon-color:var(
--spectrum-alias-button-primary-icon-color-default
);--spectrum-alias-button-secondary-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-secondary-background-color-hover:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-background-color-down:var(
--spectrum-global-color-gray-800
);--spectrum-alias-button-secondary-background-color-key-focus:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-background-color:var(
--spectrum-alias-button-secondary-background-color-default
);--spectrum-alias-button-secondary-border-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-border-color-hover:var(
--spectrum-alias-button-secondary-background-color-hover
);--spectrum-alias-button-secondary-border-color-down:var(
--spectrum-alias-button-secondary-background-color-down
);--spectrum-alias-button-secondary-border-color-key-focus:var(
--spectrum-alias-button-secondary-background-color-key-focus
);--spectrum-alias-button-secondary-border-color:var(
--spectrum-alias-button-secondary-border-color-default
);--spectrum-alias-button-secondary-text-color-default:var(
--spectrum-global-color-gray-700
);--spectrum-alias-button-secondary-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-secondary-text-color:var(
--spectrum-alias-button-secondary-text-color-default
);--spectrum-alias-button-secondary-icon-color-default:var(
--spectrum-alias-button-secondary-text-color-default
);--spectrum-alias-button-secondary-icon-color-hover:var(
--spectrum-alias-button-secondary-text-color-hover
);--spectrum-alias-button-secondary-icon-color-down:var(
--spectrum-alias-button-secondary-text-color-down
);--spectrum-alias-button-secondary-icon-color-key-focus:var(
--spectrum-alias-button-secondary-text-color-key-focus
);--spectrum-alias-button-secondary-icon-color:var(
--spectrum-alias-button-secondary-icon-color-default
);--spectrum-alias-button-negative-background-color-default:var(
--spectrum-alias-background-color-transparent
);--spectrum-alias-button-negative-background-color-hover:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-background-color-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-button-negative-background-color-key-focus:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-background-color:var(
--spectrum-alias-button-negative-background-color-default
);--spectrum-alias-button-negative-border-color-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color-hover:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color-down:var(
--spectrum-global-color-red-700
);--spectrum-alias-button-negative-border-color-key-focus:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-border-color:var(
--spectrum-alias-button-negative-border-color-default
);--spectrum-alias-button-negative-text-color-default:var(
--spectrum-semantic-negative-text-color-small
);--spectrum-alias-button-negative-text-color-hover:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color-down:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color-key-focus:var(
--spectrum-global-color-gray-50
);--spectrum-alias-button-negative-text-color:var(
--spectrum-alias-button-negative-text-color-default
);--spectrum-alias-button-negative-icon-color-default:var(
--spectrum-alias-button-negative-text-color-default
);--spectrum-alias-button-negative-icon-color-hover:var(
--spectrum-alias-button-negative-text-color-hover
);--spectrum-alias-button-negative-icon-color-down:var(
--spectrum-alias-button-negative-text-color-down
);--spectrum-alias-button-negative-icon-color-key-focus:var(
--spectrum-alias-button-negative-text-color-key-focus
);--spectrum-alias-button-negative-icon-color:var(
--spectrum-alias-button-negative-icon-color-default
);--spectrum-alias-input-border-color-disabled:var(
--spectrum-alias-border-color-transparent
);--spectrum-alias-input-border-color-quiet-disabled:var(
--spectrum-alias-border-color-mid
);--spectrum-alias-input-border-color-default:var(
--spectrum-alias-border-color
);--spectrum-alias-input-border-color-hover:var(
--spectrum-alias-border-color-hover
);--spectrum-alias-input-border-color-down:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-mouse-focus:var(
--spectrum-alias-border-color-mouse-focus
);--spectrum-alias-input-border-color-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-input-border-color-invalid-default:var(
--spectrum-semantic-negative-color-default
);--spectrum-alias-input-border-color-invalid-hover:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-down:var(
--spectrum-semantic-negative-color-down
);--spectrum-alias-input-border-color-invalid-mouse-focus:var(
--spectrum-semantic-negative-color-hover
);--spectrum-alias-input-border-color-invalid-key-focus:var(
--spectrum-alias-border-color-key-focus
);--spectrum-alias-input-border-color-invalid:var(
--spectrum-alias-input-border-color-invalid-default
);--spectrum-alias-background-color-yellow-default:var(
--spectrum-global-color-static-yellow-600
);--spectrum-alias-background-color-yellow-hover:var(
--spectrum-global-color-static-yellow-700
);--spectrum-alias-background-color-yellow-key-focus:var(
--spectrum-global-color-static-yellow-700
);--spectrum-alias-background-color-yellow-down:var(
--spectrum-global-color-static-yellow-800
);--spectrum-alias-background-color-yellow:var(
--spectrum-alias-background-color-yellow-default
);--spectrum-alias-infieldbutton-background-color:var(
--spectrum-global-color-gray-200
);--spectrum-alias-infieldbutton-fill-loudnessLow-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-border-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-border-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-infieldbutton-fill-border-color-default:var(
--spectrum-alias-input-border-color-default
);--spectrum-alias-infieldbutton-fill-border-color-hover:var(
--spectrum-alias-input-border-color-hover
);--spectrum-alias-infieldbutton-fill-border-color-down:var(
--spectrum-alias-input-border-color-down
);--spectrum-alias-infieldbutton-fill-border-color-mouse-focus:var(
--spectrum-alias-input-border-color-mouse-focus
);--spectrum-alias-infieldbutton-fill-border-color-key-focus:var(
--spectrum-alias-input-border-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus:transparent;--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-default:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-hover:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-down:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-key-focus:var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessMedium-background-color-disabled:transparent;--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-default:var(
--spectrum-alias-component-background-color-default
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-hover:var(
--spectrum-alias-component-background-color-hover
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-down:var(
--spectrum-alias-component-background-color-down
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-key-focus:var(
--spectrum-alias-component-background-color-key-focus
);--spectrum-alias-infieldbutton-fill-loudnessHigh-background-color-disabled:var(
--spectrum-alias-component-background-color-disabled
);--spectrum-alias-actionbutton-staticBlack-border-color-default:rgba(0,0,0,.4);--spectrum-alias-actionbutton-staticBlack-background-color-default:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-hover:rgba(0,0,0,.55);--spectrum-alias-actionbutton-staticBlack-background-color-hover:rgba(0,0,0,.25);--spectrum-alias-actionbutton-staticBlack-border-color-down:rgba(0,0,0,.7);--spectrum-alias-actionbutton-staticBlack-background-color-down:rgba(0,0,0,.4);--spectrum-alias-actionbutton-staticBlack-border-color-key-focus:rgba(0,0,0,.55);--spectrum-alias-actionbutton-staticBlack-background-color-key-focus:rgba(0,0,0,.25);--spectrum-alias-actionbutton-staticBlack-border-color-disabled:rgba(0,0,0,.25);--spectrum-alias-actionbutton-staticBlack-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected:rgba(0,0,0,.1);--spectrum-alias-actionbutton-staticWhite-border-color-default:hsla(0,0%,100%,.4);--spectrum-alias-actionbutton-staticWhite-background-color-default:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-hover:hsla(0,0%,100%,.55);--spectrum-alias-actionbutton-staticWhite-background-color-hover:hsla(0,0%,100%,.25);--spectrum-alias-actionbutton-staticWhite-border-color-down:hsla(0,0%,100%,.7);--spectrum-alias-actionbutton-staticWhite-background-color-down:hsla(0,0%,100%,.4);--spectrum-alias-actionbutton-staticWhite-border-color-key-focus:hsla(0,0%,100%,.55);--spectrum-alias-actionbutton-staticWhite-background-color-key-focus:hsla(0,0%,100%,.25);--spectrum-alias-actionbutton-staticWhite-border-color-disabled:hsla(0,0%,100%,.25);--spectrum-alias-actionbutton-staticWhite-background-color-disabled:transparent;--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected:transparent;--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected:hsla(0,0%,100%,.1);--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-quiet-overbackground-hover:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quiet-overbackground-down:hsla(0,0%,100%,.2);--spectrum-alias-background-color-overbackground-disabled:hsla(0,0%,100%,.1);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,.2);--spectrum-alias-placeholder-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-alias-placeholder-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-selected:var(
--spectrum-global-color-gray-800
);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-mouse-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-text-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-text-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-text-color-quiet-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-key-focus:var(
--spectrum-global-color-blue-400
);--spectrum-alias-border-color-mouse-focus:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-border-color-extralight:var(
--spectrum-global-color-gray-100
);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(
--spectrum-global-color-gray-600
);--spectrum-alias-border-color-darker-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-darker-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-400);--spectrum-alias-track-fill-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-thumbnail-darksquare-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-thumbnail-lightsquare-background-color:var(
--spectrum-global-color-static-white
);--spectrum-alias-track-color-overbackground:hsla(0,0%,100%,.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-overbackground:var(
--spectrum-global-color-static-white
);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-key-focus:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-overbackground-disabled:hsla(0,0%,100%,.2);--spectrum-alias-icon-color-quiet-overbackground-disabled:hsla(0,0%,100%,.15);--spectrum-alias-icon-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-selected-neutral-subdued:var(
--spectrum-global-color-gray-800
);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-icon-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-icon-color-selected-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-image-opacity-disabled:var(
--spectrum-global-color-opacity-30
);--spectrum-alias-toolbar-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-alias-code-highlight-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-code-highlight-background-color:var(
--spectrum-global-color-gray-75
);--spectrum-alias-code-highlight-color-keyword:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-section:var(
--spectrum-global-color-red-600
);--spectrum-alias-code-highlight-color-literal:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-attribute:var(
--spectrum-global-color-seafoam-600
);--spectrum-alias-code-highlight-color-class:var(
--spectrum-global-color-magenta-600
);--spectrum-alias-code-highlight-color-variable:var(
--spectrum-global-color-purple-600
);--spectrum-alias-code-highlight-color-title:var(
--spectrum-global-color-indigo-600
);--spectrum-alias-code-highlight-color-string:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-function:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-comment:var(
--spectrum-global-color-gray-700
);--spectrum-alias-categorical-color-1:var(
--spectrum-global-color-static-seafoam-200
);--spectrum-alias-categorical-color-2:var(
--spectrum-global-color-static-indigo-700
);--spectrum-alias-categorical-color-3:var(
--spectrum-global-color-static-orange-500
);--spectrum-alias-categorical-color-4:var(
--spectrum-global-color-static-magenta-500
);--spectrum-alias-categorical-color-5:var(
--spectrum-global-color-static-indigo-200
);--spectrum-alias-categorical-color-6:var(
--spectrum-global-color-static-celery-200
);--spectrum-alias-categorical-color-7:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-categorical-color-8:var(
--spectrum-global-color-static-purple-800
);--spectrum-alias-categorical-color-9:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-categorical-color-10:var(
--spectrum-global-color-static-orange-700
);--spectrum-alias-categorical-color-11:var(
--spectrum-global-color-static-green-600
);--spectrum-alias-categorical-color-12:var(
--spectrum-global-color-static-chartreuse-300
);--spectrum-alias-categorical-color-13:var(
--spectrum-global-color-static-blue-200
);--spectrum-alias-categorical-color-14:var(
--spectrum-global-color-static-fuchsia-500
);--spectrum-alias-categorical-color-15:var(
--spectrum-global-color-static-magenta-200
);--spectrum-alias-categorical-color-16:var(
--spectrum-global-color-static-yellow-200
)}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;e.default=r},ZTUT:function(t,e,o){"use strict";o.r(e),o.d(e,"IconDash75",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("PYA5"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Dash75Icon)()}}},ZY41:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host,:root{--spectrum-global-dimension-scale-factor:1;--spectrum-global-dimension-size-0:0px;--spectrum-global-dimension-size-10:1px;--spectrum-global-dimension-size-25:2px;--spectrum-global-dimension-size-40:3px;--spectrum-global-dimension-size-50:4px;--spectrum-global-dimension-size-65:5px;--spectrum-global-dimension-size-75:6px;--spectrum-global-dimension-size-85:7px;--spectrum-global-dimension-size-100:8px;--spectrum-global-dimension-size-115:9px;--spectrum-global-dimension-size-125:10px;--spectrum-global-dimension-size-130:11px;--spectrum-global-dimension-size-150:12px;--spectrum-global-dimension-size-160:13px;--spectrum-global-dimension-size-175:14px;--spectrum-global-dimension-size-185:15px;--spectrum-global-dimension-size-200:16px;--spectrum-global-dimension-size-225:18px;--spectrum-global-dimension-size-250:20px;--spectrum-global-dimension-size-275:22px;--spectrum-global-dimension-size-300:24px;--spectrum-global-dimension-size-325:26px;--spectrum-global-dimension-size-350:28px;--spectrum-global-dimension-size-400:32px;--spectrum-global-dimension-size-450:36px;--spectrum-global-dimension-size-500:40px;--spectrum-global-dimension-size-550:44px;--spectrum-global-dimension-size-600:48px;--spectrum-global-dimension-size-650:52px;--spectrum-global-dimension-size-675:54px;--spectrum-global-dimension-size-700:56px;--spectrum-global-dimension-size-750:60px;--spectrum-global-dimension-size-800:64px;--spectrum-global-dimension-size-900:72px;--spectrum-global-dimension-size-1000:80px;--spectrum-global-dimension-size-1125:90px;--spectrum-global-dimension-size-1200:96px;--spectrum-global-dimension-size-1250:100px;--spectrum-global-dimension-size-1600:128px;--spectrum-global-dimension-size-1700:136px;--spectrum-global-dimension-size-1800:144px;--spectrum-global-dimension-size-2000:160px;--spectrum-global-dimension-size-2400:192px;--spectrum-global-dimension-size-2500:200px;--spectrum-global-dimension-size-3000:240px;--spectrum-global-dimension-size-3400:272px;--spectrum-global-dimension-size-3600:288px;--spectrum-global-dimension-size-4600:368px;--spectrum-global-dimension-size-5000:400px;--spectrum-global-dimension-size-6000:480px;--spectrum-global-dimension-font-size-25:10px;--spectrum-global-dimension-font-size-50:11px;--spectrum-global-dimension-font-size-75:12px;--spectrum-global-dimension-font-size-100:14px;--spectrum-global-dimension-font-size-150:15px;--spectrum-global-dimension-font-size-200:16px;--spectrum-global-dimension-font-size-300:18px;--spectrum-global-dimension-font-size-400:20px;--spectrum-global-dimension-font-size-500:22px;--spectrum-global-dimension-font-size-600:25px;--spectrum-global-dimension-font-size-700:28px;--spectrum-global-dimension-font-size-800:32px;--spectrum-global-dimension-font-size-900:36px;--spectrum-global-dimension-font-size-1000:40px;--spectrum-global-dimension-font-size-1100:45px;--spectrum-global-dimension-font-size-1200:50px;--spectrum-global-dimension-font-size-1300:60px;--spectrum-alias-item-text-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-s:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-item-workflow-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-rounded-workflow-padding-left-xl:21px;--spectrum-alias-item-mark-padding-top-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-bottom-m:var(
--spectrum-global-dimension-static-size-75
);--spectrum-alias-item-mark-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-1-size-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-2-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-control-3-width-s:23px;--spectrum-alias-item-control-3-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-item-control-3-width-l:29px;--spectrum-alias-item-control-3-width-xl:33px;--spectrum-alias-item-mark-size-m:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-control-two-size-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-height-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-control-three-width-s:23px;--spectrum-alias-control-three-width-m:var(
--spectrum-global-dimension-static-size-325
);--spectrum-alias-control-three-width-l:29px;--spectrum-alias-control-three-width-xl:33px;--spectrum-alias-search-padding-left-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-focus-ring-radius-default:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-workflow-icon-size-l:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-chevron-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-chevron-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-chevron-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-chevron-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-chevron-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-50:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-checkmark-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-checkmark-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-checkmark-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-checkmark-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-dash-size-50:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-dash-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-dash-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-dash-size-400:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-dash-size-500:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-dash-size-600:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-cross-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-100:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-cross-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-cross-size-300:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-400:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-cross-size-500:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-cross-size-600:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-75:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-100:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-arrow-size-200:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-ui-icon-arrow-size-300:var(
--spectrum-global-dimension-static-size-175
);--spectrum-alias-ui-icon-arrow-size-400:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-ui-icon-arrow-size-500:var(
--spectrum-global-dimension-static-size-225
);--spectrum-alias-ui-icon-arrow-size-600:var(
--spectrum-global-dimension-static-size-250
);--spectrum-alias-ui-icon-triplegripper-size-100-width:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-doublegripper-size-100-height:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-ui-icon-singlegripper-size-100-height:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-ui-icon-cornertriangle-size-100:var(
--spectrum-global-dimension-static-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-300:var(
--spectrum-global-dimension-static-size-85
);--spectrum-alias-ui-icon-asterisk-size-200:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-ui-icon-asterisk-size-300:var(
--spectrum-global-dimension-static-size-125
);--spectrum-alias-avatar-size-100:var(--spectrum-global-dimension-size-250);--spectrum-alias-avatar-size-400:var(--spectrum-global-dimension-size-350);--spectrum-alias-avatar-size-600:var(--spectrum-global-dimension-size-450);--spectrum-dragthumb-swatch-width:var(
--spectrum-global-dimension-static-size-150
);--spectrum-dragthumb-swatch-height:var(
--spectrum-global-dimension-static-size-200
);--spectrum-actionbutton-s-quiet-emphasized-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-black-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-white-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-black-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-white-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-black-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-white-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-black-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-white-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-black-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-white-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-black-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-white-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-black-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-white-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-black-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-white-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-black-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-white-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-black-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-white-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-quiet-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-quiet-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-black-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-white-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-black-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-white-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-actionbutton-s-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-s-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-quiet-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-black-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-quiet-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-white-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-quiet-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-black-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-quiet-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-white-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-black-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-white-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-black-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-white-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-actionbutton-m-quiet-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-quiet-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-m-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-black-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-black-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-white-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-white-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-black-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-black-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-white-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-white-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-black-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-black-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-white-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-white-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-black-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-black-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-white-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-white-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-black-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-black-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-white-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-white-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-black-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-black-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-white-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-white-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-black-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-black-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-white-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-white-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-black-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-black-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-white-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-white-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-black-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-black-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-white-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-emphasized-white-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-black-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-black-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-white-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-quiet-white-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-quiet-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-quiet-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-black-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-black-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-white-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-emphasized-white-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-black-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-black-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-white-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-actionbutton-l-white-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-actionbutton-l-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-l-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-black-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-black-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-white-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-white-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-black-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-black-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-white-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-white-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-quiet-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-emphasized-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-black-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-black-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-white-icononly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-actionbutton-xl-white-icononly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-badge-s-fuchsia-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-indigo-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-informative-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-magenta-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-negative-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-neutral-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-positive-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-purple-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-seafoam-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-yellow-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-fuchsia-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-indigo-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-informative-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-magenta-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-negative-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-positive-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-purple-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-seafoam-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-yellow-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-fuchsia-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-indigo-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-informative-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-magenta-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-negative-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-neutral-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-positive-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-purple-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-seafoam-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-s-yellow-icononly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-badge-m-fuchsia-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-indigo-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-informative-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-magenta-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-negative-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-neutral-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-positive-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-purple-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-seafoam-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-m-yellow-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-badge-l-fuchsia-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-fuchsia-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-indigo-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-indigo-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-informative-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-informative-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-magenta-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-magenta-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-negative-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-negative-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-neutral-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-neutral-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-positive-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-positive-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-purple-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-purple-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-seafoam-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-seafoam-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-yellow-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-yellow-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-fuchsia-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-fuchsia-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-indigo-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-indigo-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-informative-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-informative-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-magenta-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-magenta-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-negative-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-negative-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-neutral-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-neutral-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-positive-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-positive-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-purple-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-purple-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-seafoam-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-seafoam-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-yellow-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-yellow-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-fuchsia-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-fuchsia-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-indigo-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-indigo-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-informative-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-informative-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-magenta-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-magenta-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-negative-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-negative-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-neutral-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-neutral-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-positive-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-positive-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-purple-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-purple-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-seafoam-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-seafoam-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-badge-l-yellow-icononly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-badge-l-yellow-icononly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-breadcrumb-s-multiline-button-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-s-multiline-item-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-breadcrumb-s-multiline-item-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-s-button-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-s-item-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-breadcrumb-s-item-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-m-multiline-button-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-m-multiline-item-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-m-button-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-m-item-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-l-multiline-button-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-l-multiline-item-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-breadcrumb-l-multiline-item-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-l-button-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-breadcrumb-l-item-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-breadcrumb-l-item-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-overbackground-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-cta-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-cta-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-primary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-primary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-secondary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-secondary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-overbackground-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-button-s-negative-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-s-negative-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-cta-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-cta-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-cta-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-primary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-primary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-primary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-primary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-secondary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-secondary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-secondary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-secondary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-negative-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-negative-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-negative-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-overbackground-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-negative-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-texticon-padding-left:var(
--spectrum-global-dimension-size-175
);--spectrum-button-m-cta-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-cta-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-primary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-secondary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-m-negative-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-quiet-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-quiet-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-quiet-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-quiet-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-overbackground-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-overbackground-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-quiet-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-cta-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-cta-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-cta-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-quiet-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-primary-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-primary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-primary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-quiet-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-secondary-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-secondary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-secondary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-quiet-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-overbackground-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-overbackground-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-button-l-negative-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-button-l-negative-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-l-negative-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-overbackground-texticon-padding-left:21px;--spectrum-button-xl-cta-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-texticon-padding-left:21px;--spectrum-button-xl-cta-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-overbackground-texticon-padding-left:21px;--spectrum-button-xl-cta-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-texticon-padding-left:21px;--spectrum-button-xl-primary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-overbackground-texticon-padding-left:21px;--spectrum-button-xl-primary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-texticon-padding-left:21px;--spectrum-button-xl-primary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-overbackground-texticon-padding-left:21px;--spectrum-button-xl-primary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-texticon-padding-left:21px;--spectrum-button-xl-secondary-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-overbackground-texticon-padding-left:21px;--spectrum-button-xl-secondary-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-texticon-padding-left:21px;--spectrum-button-xl-secondary-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-overbackground-texticon-padding-left:21px;--spectrum-button-xl-secondary-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-texticon-padding-left:21px;--spectrum-button-xl-negative-quiet-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-overbackground-texticon-padding-left:21px;--spectrum-button-xl-negative-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-texticon-padding-left:21px;--spectrum-button-xl-negative-overbackground-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-overbackground-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-overbackground-texticon-padding-left:21px;--spectrum-button-xl-negative-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-texticon-padding-left:21px;--spectrum-button-xl-cta-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-cta-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-primary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-secondary-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-overbackground-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-overbackground-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-button-xl-negative-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-s-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-checkbox-s-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-checkbox-s-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-m-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-m-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-l-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-checkbox-l-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-checkbox-l-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-xl-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-checkbox-xl-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-colorloupe-colorhandle-gap:var(
--spectrum-global-dimension-static-size-125
);--spectrum-colorloupe-offset-y:var(
--spectrum-global-dimension-static-size-125
);--spectrum-colorslider-vertical-touch-hit-x:var(
--spectrum-global-dimension-size-150
);--spectrum-colorslider-touch-hit-y:var(
--spectrum-global-dimension-size-150
);--spectrum-colorwheel-min-size:var(--spectrum-global-dimension-size-2400);--spectrum-colorwheel-touch-hit-outer:var(
--spectrum-global-dimension-size-150
);--spectrum-colorwheel-touch-hit-inner:var(
--spectrum-global-dimension-size-150
);--spectrum-colorwheel-min-width:var(--spectrum-global-dimension-size-2400);--spectrum-colorwheel-min-height:var(
--spectrum-global-dimension-size-2400
);--spectrum-combobox-s-quiet-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-combobox-s-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-combobox-s-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-combobox-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-combobox-l-quiet-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-combobox-l-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-combobox-l-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-combobox-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-cyclebutton-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-cyclebutton-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-dialog-confirm-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-confirm-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-confirm-description-margin-bottom:var(
--spectrum-global-dimension-static-size-600
);--spectrum-dialog-confirm-max-width:var(
--spectrum-global-dimension-static-size-6000
);--spectrum-dialog-confirm-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-dialog-destructive-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-destructive-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-destructive-description-margin-bottom:var(
--spectrum-global-dimension-static-size-600
);--spectrum-dialog-destructive-max-width:var(
--spectrum-global-dimension-static-size-6000
);--spectrum-dialog-destructive-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-dialog-error-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-error-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-error-description-margin-bottom:var(
--spectrum-global-dimension-static-size-600
);--spectrum-dialog-error-max-width:var(
--spectrum-global-dimension-static-size-6000
);--spectrum-dialog-error-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-dialog-info-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-info-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-info-description-margin-bottom:var(
--spectrum-global-dimension-static-size-600
);--spectrum-dialog-info-max-width:var(
--spectrum-global-dimension-static-size-6000
);--spectrum-dialog-info-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-dialog-fullscreen-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-fullscreen-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-fullscreen-description-margin-bottom:var(
--spectrum-global-dimension-static-size-600
);--spectrum-dialog-fullscreen-max-width:var(
--spectrum-global-dimension-static-size-6000
);--spectrum-dialog-fullscreen-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-dialog-fullscreentakeover-title-text-size:var(
--spectrum-alias-heading-s-text-size
);--spectrum-dialog-fullscreentakeover-description-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-dialog-fullscreentakeover-description-margin-bottom:var(
--spectrum-global-dimension-static-size-600
);--spectrum-dialog-fullscreentakeover-max-width:var(
--spectrum-global-dimension-static-size-6000
);--spectrum-dialog-fullscreentakeover-padding:var(
--spectrum-global-dimension-static-size-500
);--spectrum-helptext-s-neutral-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-s-negative-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-s-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-s-negative-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-m-neutral-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-m-negative-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-m-neutral-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-m-negative-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-helptext-l-neutral-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-helptext-l-negative-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-helptext-l-neutral-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-helptext-l-negative-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-helptext-xl-neutral-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-helptext-xl-negative-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-helptext-xl-neutral-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-helptext-xl-negative-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-infieldbutton-l-left-fill-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-infieldbutton-l-right-fill-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-infieldbutton-l-none-fill-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-listitem-s-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-listitem-s-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-listitem-s-textthumbnail-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-listitem-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-listitem-m-textthumbnail-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-listitem-l-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-listitem-l-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-listitem-l-texticon-thumbnail-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-listitem-l-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-listitem-l-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-listitem-l-textonly-thumbnail-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-listitem-l-textthumbnail-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-listitem-l-textthumbnail-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-listitem-l-textthumbnail-thumbnail-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-meter-s-negative-overbackground-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-s-negative-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-meter-s-negative-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-s-negative-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-meter-s-notice-overbackground-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-s-notice-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-meter-s-notice-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-s-notice-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-meter-s-positive-overbackground-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-s-positive-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-meter-s-positive-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-s-positive-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-meter-m-negative-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-meter-m-negative-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-meter-m-notice-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-meter-m-notice-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-meter-m-positive-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-meter-m-positive-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-meter-l-negative-overbackground-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-meter-l-negative-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-meter-l-notice-overbackground-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-meter-l-notice-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-meter-l-positive-overbackground-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-meter-l-positive-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-meter-xl-negative-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-xl-negative-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-xl-notice-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-xl-notice-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-xl-positive-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-meter-xl-positive-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-pagination-page-button-line-height:26px;--spectrum-pagination-button-page-button-line-height:26px;--spectrum-pagination-explicit-page-button-line-height:26px;--spectrum-pagination-listing-page-button-line-height:26px;--spectrum-panel-s-collapsible-header-height:var(
--spectrum-global-dimension-size-600
);--spectrum-panel-s-header-height:var(--spectrum-global-dimension-size-600);--spectrum-panel-s-spacious-collapsible-header-height:var(
--spectrum-global-dimension-size-600
);--spectrum-panel-s-spacious-header-height:var(
--spectrum-global-dimension-size-600
);--spectrum-panel-l-collapsible-header-height:var(
--spectrum-global-dimension-size-600
);--spectrum-panel-l-header-height:var(--spectrum-global-dimension-size-600);--spectrum-panel-l-spacious-collapsible-header-height:var(
--spectrum-global-dimension-size-600
);--spectrum-panel-l-spacious-header-height:var(
--spectrum-global-dimension-size-600
);--spectrum-picker-s-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-quiet-texticon-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-texticon-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-quiet-textonly-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-textonly-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-quiet-textthumbnail-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-quiet-textthumbnail-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-quiet-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-quiet-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-textthumbnail-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-textthumbnail-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-picker-s-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-s-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-texticon-popover-offset-x:var(
--spectrum-global-dimension-size-125
);--spectrum-picker-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-picker-m-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-quiet-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-quiet-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-textthumbnail-popover-offset-x:var(
--spectrum-global-dimension-size-125
);--spectrum-picker-m-textthumbnail-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-picker-m-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-m-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-picker-l-quiet-texticon-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-picker-l-texticon-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-picker-l-quiet-textonly-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-picker-l-textonly-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-quiet-textthumbnail-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-quiet-textthumbnail-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-picker-l-quiet-textthumbnail-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-quiet-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-quiet-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-textthumbnail-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-textthumbnail-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-picker-l-textthumbnail-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-picker-l-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-l-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-quiet-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-quiet-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-textthumbnail-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-picker-xl-textthumbnail-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-progressbar-s-indeterminate-overbackground-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-s-indeterminate-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progressbar-s-indeterminate-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-s-indeterminate-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progressbar-s-overbackground-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-s-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progressbar-s-value-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-s-border-radius:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progressbar-m-indeterminate-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-progressbar-m-indeterminate-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-progressbar-m-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-progressbar-m-border-radius:var(
--spectrum-global-dimension-static-size-40
);--spectrum-progressbar-l-indeterminate-overbackground-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-progressbar-l-indeterminate-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-progressbar-l-overbackground-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-progressbar-l-value-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-progressbar-xl-indeterminate-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-xl-indeterminate-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-xl-overbackground-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progressbar-xl-border-radius:var(
--spectrum-global-dimension-static-size-65
);--spectrum-progresscircle-s-indeterminate-overbackground-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progresscircle-s-indeterminate-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progresscircle-s-overbackground-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progresscircle-s-border-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-progresscircle-m-indeterminate-overbackground-border-size:3px;--spectrum-progresscircle-m-indeterminate-border-size:3px;--spectrum-progresscircle-m-overbackground-border-size:3px;--spectrum-progresscircle-m-border-size:3px;--spectrum-radio-s-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-radio-s-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-radio-s-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-m-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-m-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-l-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-radio-l-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-radio-l-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-xl-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-radio-xl-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-rating-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-rating-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-search-s-quiet-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-search-s-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-search-s-quiet-touch-hit-x:var(
--spectrum-global-dimension-size-100
);--spectrum-search-s-quiet-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-search-s-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-search-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-search-s-touch-hit-x:var(--spectrum-global-dimension-size-100);--spectrum-search-s-touch-hit-y:var(--spectrum-global-dimension-size-100);--spectrum-search-m-quiet-touch-hit-x:var(
--spectrum-global-dimension-size-100
);--spectrum-search-m-quiet-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-search-m-touch-hit-x:var(--spectrum-global-dimension-size-100);--spectrum-search-m-touch-hit-y:var(--spectrum-global-dimension-size-100);--spectrum-search-l-quiet-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-search-l-quiet-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-search-l-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-search-l-quiet-touch-hit-x:var(
--spectrum-global-dimension-size-100
);--spectrum-search-l-quiet-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-search-l-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-search-l-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-search-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-search-l-touch-hit-x:var(--spectrum-global-dimension-size-100);--spectrum-search-l-touch-hit-y:var(--spectrum-global-dimension-size-100);--spectrum-search-xl-quiet-touch-hit-x:var(
--spectrum-global-dimension-size-100
);--spectrum-search-xl-quiet-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-search-xl-touch-hit-x:var(--spectrum-global-dimension-size-100);--spectrum-search-xl-touch-hit-y:var(--spectrum-global-dimension-size-100);--spectrum-searchwithin-s-quiet-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-searchwithin-s-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-searchwithin-s-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-searchwithin-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-searchwithin-l-quiet-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-searchwithin-l-quiet-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-searchwithin-l-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-searchwithin-l-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-searchwithin-l-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-searchwithin-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-sidenav-multilevel-item-touch-hit-bottom:var(
--spectrum-global-dimension-static-size-25
);--spectrum-sidenav-multilevel-main-item-touch-hit-bottom:var(
--spectrum-global-dimension-static-size-25
);--spectrum-sidenav-item-touch-hit-bottom:var(
--spectrum-global-dimension-static-size-25
);--spectrum-sidenav-main-item-touch-hit-bottom:var(
--spectrum-global-dimension-static-size-25
);--spectrum-slider-s-tick-editable-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-tick-editable-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-ramp-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-ramp-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-tick-editable-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-range-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-range-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-tick-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-tick-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-ramp-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-ramp-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-tick-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-range-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-range-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-editable-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-editable-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-ramp-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-ramp-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-editable-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-range-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-range-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-ramp-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-ramp-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-ramp-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-slider-s-range-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-s-range-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-s-range-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-ramp-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-range-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-ramp-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-range-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-ramp-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-range-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-ramp-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-ramp-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-m-range-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-m-range-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-tick-editable-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-tick-editable-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-ramp-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-ramp-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-tick-editable-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-range-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-range-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-tick-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-tick-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-ramp-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-ramp-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-tick-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-range-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-range-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-editable-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-editable-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-ramp-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-ramp-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-editable-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-range-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-range-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-ramp-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-ramp-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-ramp-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-slider-l-range-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-l-range-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-l-range-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-ramp-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-tick-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-range-tick-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-tick-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-ramp-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-tick-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-range-tick-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-tick-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-ramp-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-editable-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-range-editable-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-editable-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-ramp-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-ramp-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-track-touch-hit-y:var(
--spectrum-global-dimension-size-100
);--spectrum-slider-xl-range-handle-touch-hit-x:var(
--spectrum-global-dimension-size-200
);--spectrum-slider-xl-range-handle-touch-hit-y:var(
--spectrum-global-dimension-size-200
);--spectrum-statuslight-s-celery-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-chartreuse-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-fuchsia-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-indigo-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-info-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-magenta-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-neutral-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-negative-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-notice-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-positive-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-purple-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-seafoam-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-s-yellow-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-statuslight-l-celery-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-celery-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-chartreuse-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-chartreuse-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-fuchsia-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-fuchsia-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-indigo-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-indigo-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-info-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-info-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-magenta-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-magenta-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-neutral-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-neutral-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-negative-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-negative-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-notice-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-notice-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-positive-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-positive-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-purple-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-purple-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-seafoam-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-seafoam-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-l-yellow-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-l-yellow-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-statuslight-xl-celery-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-chartreuse-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-fuchsia-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-indigo-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-info-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-magenta-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-neutral-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-negative-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-notice-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-positive-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-purple-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-seafoam-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-statuslight-xl-yellow-dot-size:var(
--spectrum-global-dimension-size-125
);--spectrum-switch-s-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-switch-s-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-switch-s-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-m-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-m-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-l-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-switch-l-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-switch-l-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-xl-emphasized-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-switch-xl-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-tabs-s-quiet-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-quiet-emphasized-margin-left:-7px;--spectrum-tabs-s-quiet-emphasized-margin-right:-7px;--spectrum-tabs-s-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-quiet-focus-ring-border-radius:5px;--spectrum-tabs-s-quiet-margin-left:-7px;--spectrum-tabs-s-quiet-margin-right:-7px;--spectrum-tabs-s-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-emphasized-margin-left:-7px;--spectrum-tabs-s-emphasized-margin-right:-7px;--spectrum-tabs-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-focus-ring-border-radius:5px;--spectrum-tabs-s-margin-left:-7px;--spectrum-tabs-s-margin-right:-7px;--spectrum-tabs-s-vertical-quiet-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-vertical-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-s-vertical-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-vertical-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-vertical-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-quiet-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-quiet-emphasized-margin-left:-7px;--spectrum-tabs-s-compact-quiet-emphasized-margin-right:-7px;--spectrum-tabs-s-compact-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-quiet-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-quiet-margin-left:-7px;--spectrum-tabs-s-compact-quiet-margin-right:-7px;--spectrum-tabs-s-compact-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-emphasized-margin-left:-7px;--spectrum-tabs-s-compact-emphasized-margin-right:-7px;--spectrum-tabs-s-compact-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-margin-left:-7px;--spectrum-tabs-s-compact-margin-right:-7px;--spectrum-tabs-s-compact-vertical-quiet-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-vertical-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-vertical-emphasized-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-s-compact-vertical-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tabs-s-compact-vertical-focus-ring-border-radius:5px;--spectrum-tabs-m-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-quiet-emphasized-margin-left:-8px;--spectrum-tabs-m-quiet-emphasized-margin-right:-8px;--spectrum-tabs-m-quiet-focus-ring-border-radius:5px;--spectrum-tabs-m-quiet-margin-left:-8px;--spectrum-tabs-m-quiet-margin-right:-8px;--spectrum-tabs-m-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-emphasized-margin-left:-8px;--spectrum-tabs-m-emphasized-margin-right:-8px;--spectrum-tabs-m-focus-ring-border-radius:5px;--spectrum-tabs-m-margin-left:-8px;--spectrum-tabs-m-margin-right:-8px;--spectrum-tabs-m-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-m-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-vertical-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-quiet-emphasized-margin-left:-8px;--spectrum-tabs-m-compact-quiet-emphasized-margin-right:-8px;--spectrum-tabs-m-compact-quiet-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-quiet-margin-left:-8px;--spectrum-tabs-m-compact-quiet-margin-right:-8px;--spectrum-tabs-m-compact-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-emphasized-margin-left:-8px;--spectrum-tabs-m-compact-emphasized-margin-right:-8px;--spectrum-tabs-m-compact-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-margin-left:-8px;--spectrum-tabs-m-compact-margin-right:-8px;--spectrum-tabs-m-compact-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-m-compact-vertical-focus-ring-border-radius:5px;--spectrum-tabs-l-quiet-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-quiet-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-quiet-emphasized-margin-left:-9px;--spectrum-tabs-l-quiet-emphasized-margin-right:-9px;--spectrum-tabs-l-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-quiet-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-quiet-focus-ring-border-radius:5px;--spectrum-tabs-l-quiet-margin-left:-9px;--spectrum-tabs-l-quiet-margin-right:-9px;--spectrum-tabs-l-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-emphasized-margin-left:-9px;--spectrum-tabs-l-emphasized-margin-right:-9px;--spectrum-tabs-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-focus-ring-border-radius:5px;--spectrum-tabs-l-margin-left:-9px;--spectrum-tabs-l-margin-right:-9px;--spectrum-tabs-l-vertical-quiet-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-vertical-quiet-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-vertical-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-vertical-quiet-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-l-vertical-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-vertical-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-vertical-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-vertical-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-vertical-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-quiet-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-quiet-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-quiet-emphasized-margin-left:-9px;--spectrum-tabs-l-compact-quiet-emphasized-margin-right:-9px;--spectrum-tabs-l-compact-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-quiet-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-quiet-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-quiet-margin-left:-9px;--spectrum-tabs-l-compact-quiet-margin-right:-9px;--spectrum-tabs-l-compact-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-emphasized-margin-left:-9px;--spectrum-tabs-l-compact-emphasized-margin-right:-9px;--spectrum-tabs-l-compact-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-margin-left:-9px;--spectrum-tabs-l-compact-margin-right:-9px;--spectrum-tabs-l-compact-vertical-quiet-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-vertical-quiet-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-vertical-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-vertical-quiet-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-vertical-emphasized-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-vertical-emphasized-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-l-compact-vertical-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tabs-l-compact-vertical-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tabs-l-compact-vertical-focus-ring-border-radius:5px;--spectrum-tabs-xl-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-quiet-emphasized-margin-left:-10px;--spectrum-tabs-xl-quiet-emphasized-margin-right:-10px;--spectrum-tabs-xl-quiet-focus-ring-border-radius:5px;--spectrum-tabs-xl-quiet-margin-left:-10px;--spectrum-tabs-xl-quiet-margin-right:-10px;--spectrum-tabs-xl-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-emphasized-margin-left:-10px;--spectrum-tabs-xl-emphasized-margin-right:-10px;--spectrum-tabs-xl-focus-ring-border-radius:5px;--spectrum-tabs-xl-margin-left:-10px;--spectrum-tabs-xl-margin-right:-10px;--spectrum-tabs-xl-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-xl-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-vertical-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-quiet-emphasized-margin-left:-10px;--spectrum-tabs-xl-compact-quiet-emphasized-margin-right:-10px;--spectrum-tabs-xl-compact-quiet-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-quiet-margin-left:-10px;--spectrum-tabs-xl-compact-quiet-margin-right:-10px;--spectrum-tabs-xl-compact-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-emphasized-margin-left:-10px;--spectrum-tabs-xl-compact-emphasized-margin-right:-10px;--spectrum-tabs-xl-compact-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-margin-left:-10px;--spectrum-tabs-xl-compact-margin-right:-10px;--spectrum-tabs-xl-compact-vertical-quiet-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-vertical-quiet-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-vertical-emphasized-focus-ring-border-radius:5px;--spectrum-tabs-xl-compact-vertical-focus-ring-border-radius:5px;--spectrum-tag-s-removable-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tag-s-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tag-s-removable-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tag-s-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tag-s-removable-avatartext-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tag-s-avatartext-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tag-m-removable-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-tag-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-tag-m-removable-avatartext-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-tag-m-avatartext-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-tag-l-removable-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tag-l-removable-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tag-l-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tag-l-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tag-l-removable-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tag-l-removable-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tag-l-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tag-l-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tag-l-removable-avatartext-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tag-l-removable-avatartext-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-tag-l-avatartext-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-tag-l-avatartext-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-textarea-s-multiline-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-multiline-quiet-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-multiline-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-multiline-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-quiet-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-quiet-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-multiline-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-multiline-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-multiline-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-multiline-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textarea-s-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-s-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-multiline-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-multiline-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-multiline-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-multiline-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-m-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-multiline-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-multiline-quiet-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-multiline-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-multiline-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-quiet-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-quiet-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-multiline-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-multiline-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-multiline-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-multiline-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textarea-l-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-l-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-multiline-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-multiline-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-quiet-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-quiet-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-multiline-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-multiline-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textarea-xl-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-quiet-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-quiet-texticon-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-quiet-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-quiet-textonly-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-texticon-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-texticon-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-s-textonly-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-s-textonly-placeholder-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-textfield-m-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-texticon-padding-left:var(
--spectrum-global-dimension-size-125
);--spectrum-textfield-m-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-m-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-quiet-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-quiet-texticon-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-quiet-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-textfield-l-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-quiet-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-quiet-textonly-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-quiet-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-textfield-l-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-texticon-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-texticon-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-texticon-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-textfield-l-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-l-textonly-text-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-textonly-placeholder-padding-top:var(
--spectrum-global-dimension-size-115
);--spectrum-textfield-l-textonly-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-textfield-xl-quiet-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-quiet-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-quiet-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-quiet-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-texticon-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-texticon-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-textonly-touch-hit-x:var(
--spectrum-global-dimension-static-size-100
);--spectrum-textfield-xl-textonly-touch-hit-y:var(
--spectrum-global-dimension-static-size-100
);--spectrum-tooltip-neutral-text-margin-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tooltip-info-text-margin-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tooltip-positive-text-margin-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-tooltip-negative-text-margin-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-treeview-s-item-text-padding-bottom:var(
--spectrum-global-dimension-static-size-65
);--spectrum-treeview-l-item-icon-size:var(
--spectrum-global-dimension-static-size-250
);--spectrum-treeview-l-item-text-padding-top:var(
--spectrum-global-dimension-size-115
)}:host,:root{--spectrum-global-alias-appframe-border-size:2px}
`;e.default=r},ZdmD:function(t,e,o){"use strict";o.r(e);var r=o("hxBy");customElements.define("sp-link",r.Link)},aJ77:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
.header{color:var(--spectrum-listheading-text-color);display:block;font-size:var(--spectrum-listitem-texticon-heading-text-size);font-weight:var(--spectrum-listitem-texticon-heading-text-font-weight);letter-spacing:var(
--spectrum-listitem-texticon-heading-letter-spacing
);line-height:var(--spectrum-listitem-texticon-heading-line-height);margin:var(--spectrum-listitem-texticon-heading-margin);padding:var(--spectrum-listitem-texticon-heading-padding);text-transform:var(--spectrum-listitem-texticon-heading-text-transform)}:host{display:inline;margin:0;overflow:visible}:host([dir=ltr]) .header{padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150)}:host([dir=rtl]) .header{padding:0 var(--spectrum-global-dimension-size-150) 0 var(--spectrum-global-dimension-size-450)}sp-menu{display:block}
`;e.default=r},aYK6:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCheckmark300",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("8yrM"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Checkmark300Icon)()}}},avug:function(t,e,o){"use strict";o.r(e),o.d(e,"IconDash100",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("C0SI"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Dash100Icon)()}}},ayLo:function(t,e,o){"use strict";o.r(e);var r=o("qVIJ");o("Hcce").Theme.registerThemeFragment("dark","color",r.default)},bAss:function(t,e,o){"use strict";o.r(e);var r=o("kWA7");customElements.define("sp-textfield",r.Textfield)},bJmu:function(t,e,o){"use strict";function r(t,e,o){const r=t.getAttribute(e);let i=r?r.split(/\s+/):[];i=i.filter(t=>!o.find(e=>t===e)),i.length?t.setAttribute(e,i.join(" ")):t.removeAttribute(e)}function i(t,e,o){const i=Array.isArray(o)?o:[o],s=t.getAttribute(e),a=s?s.split(/\s+/):[];return i.every(t=>a.indexOf(t)>-1)?()=>{}:(a.push(...i),t.setAttribute(e,a.join(" ")),()=>r(t,e,i))}o.r(e),o.d(e,"conditionAttributeWithoutId",(function(){return r})),o.d(e,"conditionAttributeWithId",(function(){return i}))},bnZq:function(t,e,o){"use strict";o.r(e);var r=o("pqFP");customElements.define("sp-close-button",r.CloseButton)},cRrS:function(t,e,o){"use strict";o.r(e),o.d(e,"Divider",(function(){return l}));var r=o("TToO"),i=o("3dPG"),s=o("Gsci"),a=o("P/Yy"),c=o("NPpS"),n=o("OKCf");class l extends(Object(i.SizedMixin)(s.SpectrumElement,{validSizes:["s","m","l"]})){constructor(){super(...arguments),this.vertical=!1}render(){return a.html``}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","separator")}updated(t){super.updated(t),t.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}l.styles=[n.default],Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],l.prototype,"vertical",void 0)},cfEo:function(t,e,o){"use strict";o.r(e),o.d(e,"Radio",(function(){return l}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("j/Se"),n=o("9tKs");class l extends(Object(c.FocusVisiblePolyfillMixin)(i.SpectrumElement)){constructor(){super(...arguments),this.autofocus=!1,this.value="",this.checked=!1,this.disabled=!1,this.emphasized=!1,this.invalid=!1,this.readonly=!1}static get styles(){return[n.default]}click(){this.disabled||this.activate()}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focus())}activate(){this.checked=!0,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}handleKeyup(t){"Space"===t.code&&this.activate()}render(){return s.html`
            <div id="input"></div>
            <span id="button"></span>
            <span id="label" role="presentation"><slot></slot></span>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","radio"),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAutoFocus(),this.addEventListener("click",this.activate),this.addEventListener("keyup",this.handleKeyup)}updated(t){super.updated(t),t.has("invalid")&&(this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")),t.has("checked")&&(this.checked?this.setAttribute("aria-checked","true"):this.setAttribute("aria-checked","false")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabeld"))}}Object(r.__decorate)([Object(a.property)({type:Boolean})],l.prototype,"autofocus",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],l.prototype,"value",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"checked",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"emphasized",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"invalid",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"readonly",void 0)},cnVg:function(t,e,o){"use strict";o.r(e),o.d(e,"LitElement",(function(){return n})),o.d(e,"UpdatingElement",(function(){return c})),o.d(e,"_$LE",(function(){return u}));var r=o("nvw5");o.d(e,"CSSResult",(function(){return r.CSSResult})),o.d(e,"adoptStyles",(function(){return r.adoptStyles})),o.d(e,"css",(function(){return r.css})),o.d(e,"getCompatibleStyle",(function(){return r.getCompatibleStyle})),o.d(e,"supportsAdoptingStyleSheets",(function(){return r.supportsAdoptingStyleSheets})),o.d(e,"unsafeCSS",(function(){return r.unsafeCSS})),o.d(e,"ReactiveElement",(function(){return r.ReactiveElement})),o.d(e,"defaultConverter",(function(){return r.defaultConverter})),o.d(e,"notEqual",(function(){return r.notEqual}));var i,s,a=o("v2F8");o.d(e,"_$LH",(function(){return a._$LH})),o.d(e,"html",(function(){return a.html})),o.d(e,"noChange",(function(){return a.noChange})),o.d(e,"nothing",(function(){return a.nothing})),o.d(e,"render",(function(){return a.render})),o.d(e,"svg",(function(){return a.svg}));const c=r.ReactiveElement;class n extends r.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Object(a.render)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return a.noChange}}n.finalized=!0,n._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:n});const l=globalThis.litElementPolyfillSupport;null==l||l({LitElement:n});const u={_$AK:(t,e,o)=>{t._$AK(e,o)},_$AL:t=>t._$AL};(null!==(s=globalThis.litElementVersions)&&void 0!==s?s:globalThis.litElementVersions=[]).push("3.2.0")},dUdj:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-menu-margin-x:var(
--spectrum-global-dimension-size-40
);--spectrum-listitem-texticon-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-texticon-heading-text-font-weight:400;--spectrum-listitem-texticon-heading-text-transform:uppercase;--spectrum-listitem-texticon-heading-letter-spacing:0.06em;--spectrum-listitem-texticon-heading-margin:var(
--spectrum-global-dimension-size-75
) 0 0 0;--spectrum-listitem-texticon-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-texticon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-listitem-texticon-selectable-padding-right:calc(var(--spectrum-listitem-texticon-ui-icon-width) + var(--spectrum-listitem-texticon-ui-icon-gap) + var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
));--spectrum-listitem-texticon-label-line-height:1.3;--spectrum-listitem-texticon-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-texticon-padding-left:var(
--spectrum-listitem-m-texticon-padding-left
);--spectrum-listitem-textthumbnail-padding-left:var(
--spectrum-listitem-m-textthumbnail-padding-left
);--spectrum-listitem-texticon-text-size:var(
--spectrum-listitem-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-listitem-texticon-text-font-weight:var(
--spectrum-listitem-m-texticon-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-texticon-icon-gap:var(
--spectrum-listitem-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-divider-size:var(
--spectrum-listitem-m-texticon-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-divider-padding:var(
--spectrum-listitem-m-texticon-divider-padding,var(--spectrum-global-dimension-static-size-40)
);--spectrum-listitem-texticon-ui-icon-margin-top:var(
--spectrum-listitem-m-texticon-ui-icon-margin-top,var(--spectrum-global-dimension-size-125)
);--spectrum-listitem-texticon-ui-icon-width:var(
--spectrum-listitem-m-texticon-ui-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-listitem-texticon-ui-icon-gap:var(
--spectrum-listitem-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-padding-right:var(
--spectrum-listitem-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-listitem-texticon-focus-indicator-size:var(
--spectrum-listitem-m-texticon-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-height:var(
--spectrum-listitem-m-texticon-height,var(--spectrum-global-dimension-size-400)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(
--spectrum-global-color-gray-700
)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap))}:host(:focus){outline:none}:host sp-menu{display:block}
`;e.default=r},dkkJ:function(t,e,o){"use strict";o.r(e),o.d(e,"IconDash200",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("M5VR"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Dash200Icon)()}}},e1fm:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-switch-handle-size:var(
--spectrum-switch-m-handle-size,var(--spectrum-alias-control-two-size-m)
);--spectrum-switch-handle-border-size:var(
--spectrum-switch-m-handle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-switch-handle-border-radius:var(
--spectrum-switch-m-handle-border-radius,var(--spectrum-alias-control-two-border-radius-m)
);--spectrum-switch-text-gap:var(
--spectrum-switch-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-switch-text-size:var(
--spectrum-switch-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-switch-track-height:var(
--spectrum-switch-m-track-height,var(--spectrum-alias-control-three-height-m)
);--spectrum-switch-track-width:var(
--spectrum-switch-m-track-width,var(--spectrum-alias-control-three-width-m)
);--spectrum-switch-cursor-hit-x:var(
--spectrum-switch-m-cursor-hit-x,var(--spectrum-global-dimension-size-100)
);--spectrum-switch-height:var(
--spectrum-switch-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65
);--spectrum-switch-label-line-height:1.49}:host([dir=ltr]){margin-right:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host([dir=rtl]){margin-left:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host{align-items:flex-start;display:inline-flex;max-width:100%;min-height:var(--spectrum-switch-height);position:relative;vertical-align:top}:host([dir=ltr]) #input{left:0}:host([dir=rtl]) #input{right:0}#input{box-sizing:border-box;cursor:pointer;height:100%;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%;z-index:1}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - 100%))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc((var(--spectrum-switch-track-width) - 100%)*-1))}#input[disabled],:host([disabled]) #input{cursor:default}#input.focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#label{font-size:var(--spectrum-switch-text-size);line-height:var(--spectrum-switch-label-line-height);margin-bottom:0;margin-left:var(--spectrum-switch-text-gap);margin-right:var(--spectrum-switch-text-gap);margin-top:var(--spectrum-switch-label-margin-top);transition:color var(--spectrum-global-animation-duration-200,.16s) ease-in-out}:host([dir=ltr]) #switch{left:0}:host([dir=rtl]) #switch{right:0}:host([dir=ltr]) #switch{right:0}:host([dir=rtl]) #switch{left:0}#switch{border-radius:calc(var(--spectrum-switch-track-height)/2);box-sizing:border-box;display:inline-block;flex-grow:0;flex-shrink:0;height:var(--spectrum-switch-track-height);margin-bottom:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/2);margin-left:0;margin-right:0;margin-top:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/2);position:relative;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:middle;width:var(--spectrum-switch-track-width)}#switch:before{box-sizing:border-box;content:"";display:block;position:absolute}:host([dir=ltr]) #switch:before{left:0}:host([dir=rtl]) #switch:before{right:0}#switch:before{border-radius:var(--spectrum-switch-handle-border-radius);border-style:solid;border-width:var(--spectrum-switch-handle-border-size);height:var(--spectrum-switch-handle-size);top:0;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-switch-handle-size)}:host([dir=ltr]) #switch:after{left:0}:host([dir=rtl]) #switch:after{right:0}:host([dir=ltr]) #switch:after{right:0}:host([dir=rtl]) #switch:after{left:0}#switch:after{border-radius:calc(var(--spectrum-switch-track-height) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;margin:0;position:absolute;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}#switch{background-color:var(
--spectrum-switch-m-track-color,var(--spectrum-global-color-gray-300)
)}#switch:before{background-color:var(
--spectrum-switch-m-handle-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-switch-m-handle-border-color,var(--spectrum-alias-toggle-border-color-default)
)}#input~#label{color:var(
--spectrum-switch-m-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([checked]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host([checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host(:hover) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
);box-shadow:none}:host(:hover) #input~#label{color:var(
--spectrum-switch-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:active) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active) #input~#label{color:var(
--spectrum-switch-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host(:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host(:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host([disabled]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) #input~#label{color:var(
--spectrum-switch-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([disabled][checked][dir]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input~#label{color:var(
--spectrum-switch-m-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][checked]) #input+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]:hover) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized][checked]:hover) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized]:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([emphasized]:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}#input.focus-visible+#switch:after,:host(:hover) #input.focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input:focus-visible+#switch:after,:host(:hover) #input:focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input.focus-visible+#switch:before,:host(:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input:focus-visible+#switch:before,:host(:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}:host(:hover[checked]) #input.focus-visible+#switch,:host([checked]) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input:focus-visible+#switch,:host([checked]) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input.focus-visible+#switch:before,:host([checked]) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input:focus-visible+#switch:before,:host([checked]) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host([emphasized][checked]) #input.focus-visible+#switch,:host([emphasized][checked]:hover) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input:focus-visible+#switch,:host([emphasized][checked]:hover) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input.focus-visible+#switch:before,:host([emphasized][checked]:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input:focus-visible+#switch:before,:host([emphasized][checked]:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host{--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65,5px
);--spectrum-switch-track-width:var(--spectrum-global-dimension-size-325);--spectrum-switch-handle-border-radius:50%}:host([disabled]){pointer-events:none}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - var(--spectrum-switch-handle-size)))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-handle-size) - var(--spectrum-switch-track-width)))}
`;e.default=r},etvG:function(t,e,o){"use strict";o.r(e),o.d(e,"Menu",(function(){return u}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("D/7L"),n=o("dUdj");function l(t,e){return!!e&&(t===e||t.contains(e))}class u extends i.SpectrumElement{constructor(){super(),this.label="",this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[n.default]}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){this.cachedChildItems=[];const t=this.menuSlot?this.menuSlot.assignedElements({flatten:!0}):[];for(const e of t){const t=e instanceof c.MenuItem?[e]:[...e.querySelectorAll("*")];for(const e of t)this.childItemSet.has(e)&&this.cachedChildItems.push(e)}return this.cachedChildItems}get childRole(){if("listbox"===this.resolvedRole)return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){var e;t.item.menuData.focusRoot&&(this.tabIndex=-1),t.focusRoot=this,this.addChildItem(t.item),"inherit"===this.selects?(this.resolvedSelects="inherit",this.resolvedRole=(null===(e=t.currentAncestorWithSelects)||void 0===e?void 0:e.getAttribute("role"))||this.getAttribute("role")||void 0):this.selects?(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,t.currentAncestorWithSelects=this):(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects="none"===this.resolvedRole?"ignore":"none")}onSelectableItemAddedOrUpdated(t){!("single"===this.resolvedSelects||"multiple"===this.resolvedSelects)&&(this.selects||"ignore"===this.resolvedSelects)||t.item.menuData.selectionRoot||(t.item.setRole(this.childRole),t.selectionRoot=this)}addChildItem(t){this.childItemSet.add(t),this.handleItemsChanged()}async removeChildItem(t){this.childItemSet.delete(t.item),this.cachedChildItems=void 0,t.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every(t=>t.disabled))return;if(this.childItems.some(t=>t.menuData.focusRoot!==this))return void super.focus({preventScroll:t});this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.querySelector("[selected]");e&&!t&&e.scrollIntoView({block:"nearest"})}onClick(t){if(t.defaultPrevented)return;const e=t.composedPath().find(t=>t instanceof Element&&t.getAttribute("role")===this.childRole);(null==e?void 0:e.href)&&e.href.length||(null==e?void 0:e.menuData.selectionRoot)===this&&(t.preventDefault(),this.selectOrToggleItem(e),this.prepareToCleanUp())}handleFocusin(t){var e;const o=l(this,t.relatedTarget);if(o||this.childItems.some(t=>t.menuData.focusRoot!==this))return;const r=this.getRootNode().activeElement,i=(null===(e=this.childItems[this.focusedItemIndex])||void 0===e?void 0:e.menuData.selectionRoot)||this;if((r!==i||!o)&&(i.focus({preventScroll:!0}),r&&0===this.focusedItemIndex)){const t=this.childItems.findIndex(t=>t===r);t>0&&this.focusMenuItemByOffset(t)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(t){if(l(this,t.relatedTarget))t.composedPath()[0].focused=!1;else{if(this.stopListeningToKeyboard(),t.target===this&&this.childItems.some(t=>t.menuData.focusRoot===this)){const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1)}this.removeAttribute("aria-activedescendant")}}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(t){const e=this.resolvedSelects,o=new Map(this.selectedItemsMap),r=this.selected.slice(),i=this.selectedItems.slice(),s=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),"multiple"===e){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const e=[],o=[];this.childItemSet.forEach(t=>{t.menuData.selectionRoot===this&&this.selectedItemsMap.has(t)&&(e.push(t.value),o.push(t))}),this.selected=e,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this.selected=[t.value],this.selectedItems=[t];await this.updateComplete;if(!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})))return this.selected=r,this.selectedItems=i,this.selectedItemsMap=o,void(this.value=s);if("single"===e){for(const e of o.keys())e!==t&&(e.selected=!1);t.selected=!0}else"multiple"===e&&(t.selected=!t.selected)}handleKeydown(t){var e;const{code:o}=t;if("Tab"===o)return void this.prepareToCleanUp();if("Space"===o||"Enter"===o)return void(null===(e=this.childItems[this.focusedItemIndex])||void 0===e||e.click());if("ArrowDown"!==o&&"ArrowUp"!==o)return;const r=this.childItems[this.focusedItemIndex],i="ArrowDown"===o?1:-1,s=this.focusMenuItemByOffset(i);s!==r&&(t.preventDefault(),s.scrollIntoView({block:"nearest"}))}focusMenuItemByOffset(t){const e=t||1;this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],r=this.childItems.length;for(;o.disabled&&r;)r-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return(null==o?void 0:o.disabled)||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",()=>{requestAnimationFrame(()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())})},{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,o=[],r=[];let i=this.childItems.length;for(;i;){i-=1;const s=this.childItems[i];s.menuData.selectionRoot===this&&(s.selected&&(t=i,e.set(s,!0),o.unshift(s.value),r.unshift(s)),i!==t&&(s.focused=!1))}r.map((t,e)=>{e>0&&(t.focused=!1)}),this.selectedItemsMap=e,this.selected=o,this.selectedItems=r,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let t=()=>{};this.cacheUpdated=new Promise(e=>t=e),this._willUpdateItems=!0,window.requestAnimationFrame(()=>{void 0===this.cachedChildItems&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,t()})}}updateItemFocus(){if(0==this.childItems.length)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}forwardFocusVisibleToItem(t){t.menuData.focusRoot===this&&(t.focused=this.hasVisibleFocusInTree(),this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus())}render(){return s.html`
            <slot></slot>
        `}firstUpdated(t){if(super.firstUpdated(t),!this.hasAttribute("tabindex")){const t=this.getAttribute("role");"group"===t?this.tabIndex=-1:"none"!==t&&(this.tabIndex=0)}const e=[new Promise(t=>requestAnimationFrame(()=>t(!0)))];[...this.children].forEach(t=>{"sp-menu-item"===t.localName&&e.push(t.updateComplete)}),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const t=[new Promise(t=>requestAnimationFrame(()=>t(!0)))];this.childItemSet.forEach(e=>{t.push(e.triggerUpdate())}),this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role",this.ownRole),this.updateComplete.then(()=>this.updateItemFocus())}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],u.prototype,"label",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],u.prototype,"selects",void 0),Object(r.__decorate)([Object(a.property)({type:String})],u.prototype,"value",void 0),Object(r.__decorate)([Object(a.property)({type:String,attribute:"value-separator"})],u.prototype,"valueSeparator",void 0),Object(r.__decorate)([Object(a.property)({attribute:!1})],u.prototype,"selected",void 0),Object(r.__decorate)([Object(a.property)({attribute:!1})],u.prototype,"selectedItems",void 0),Object(r.__decorate)([Object(a.query)("slot:not([name])")],u.prototype,"menuSlot",void 0)},f5bh:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCheckmarkCircle",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("7fKK"),a=o("OLGJ");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.CheckmarkCircleIcon)({hidden:!this.label,title:this.label})}}},f68J:function(t,e,o){"use strict";o.r(e);var r=o("XFfE");customElements.define("sp-dialog-wrapper",r.DialogWrapper)},fGuI:function(t,e,o){"use strict";o.r(e);var r=o("1885");customElements.define("sp-switch",r.Switch)},fQXj:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host([size=s]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-s-border-radius
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-s-indeterminate-fill-width,var(--spectrum-global-dimension-static-percent-70)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-s-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-progressbar-value-gap-y:var(
--spectrum-progressbar-s-value-gap-y,0px
);--spectrum-progressbar-height:var(
--spectrum-progressbar-s-height,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-s-width,var(--spectrum-global-dimension-static-size-2400)
)}:host([size=m]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-m-border-radius
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-m-indeterminate-fill-width,var(--spectrum-global-dimension-static-percent-70)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-m-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-progressbar-value-gap-y:var(
--spectrum-progressbar-m-value-gap-y,0px
);--spectrum-progressbar-height:var(
--spectrum-progressbar-m-height,var(--spectrum-global-dimension-size-75)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-m-width,var(--spectrum-global-dimension-static-size-2400)
);--spectrum-fieldlabel-side-padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([size=l]){--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-l-indeterminate-fill-width,var(--spectrum-global-dimension-static-percent-70)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-l-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-progressbar-value-gap-y:var(
--spectrum-progressbar-l-value-gap-y,0px
);--spectrum-progressbar-height:var(
--spectrum-progressbar-l-height,var(--spectrum-global-dimension-size-100)
);--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-l-border-radius,var(--spectrum-global-dimension-size-50)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-l-width,var(--spectrum-global-dimension-static-size-2500)
)}:host([size=xl]){--spectrum-progressbar-border-radius:var(
--spectrum-progressbar-xl-border-radius
);--spectrum-progressbar-indeterminate-fill-width:var(
--spectrum-progressbar-xl-indeterminate-fill-width,var(--spectrum-global-dimension-static-percent-70)
);--spectrum-progressbar-indeterminate-duration:var(
--spectrum-progressbar-xl-indeterminate-duration,var(--spectrum-global-animation-duration-2000)
);--spectrum-progressbar-value-gap-y:var(
--spectrum-progressbar-xl-value-gap-y,0px
);--spectrum-progressbar-height:var(
--spectrum-progressbar-xl-height,var(--spectrum-global-dimension-size-125)
);--spectrum-progressbar-width:var(
--spectrum-progressbar-xl-width,var(--spectrum-global-dimension-static-size-2800)
)}:host{align-items:center;display:inline-flex;flex-flow:row wrap;justify-content:space-between;position:relative;vertical-align:top;width:var(--spectrum-progressbar-width)}.track{border-radius:var(--spectrum-progressbar-border-radius);overflow:hidden;width:100%;z-index:1}.fill,.track{height:var(--spectrum-progressbar-height)}.fill{border:none;transition:width 1s}:host([dir=ltr]) .label,:host([dir=ltr]) .percentage{text-align:left}:host([dir=rtl]) .label,:host([dir=rtl]) .percentage{text-align:right}.label,.percentage{margin-bottom:var(
--spectrum-progressbar-value-gap-y
)}.label{flex:1 1 0%}:host([dir=ltr]) .percentage{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl]) .percentage{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}.percentage{align-self:flex-start}:host([side-label]){display:inline-flex;flex-flow:row;justify-content:space-between;width:auto}:host([side-label]) .track{flex:1 1 var(--spectrum-progressbar-width);min-width:var(
--spectrum-progressbar-width
)}:host([dir=ltr][side-label]) .label{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl][side-label]) .label{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([side-label]) .label{flex-grow:0;margin-bottom:0}:host([dir=ltr][side-label]) .percentage{text-align:right}:host([dir=rtl][side-label]) .percentage{text-align:left}:host([dir=ltr][side-label]) .percentage{margin-left:var(
--spectrum-fieldlabel-side-padding-right
)}:host([dir=rtl][side-label]) .percentage{margin-right:var(
--spectrum-fieldlabel-side-padding-right
)}:host([side-label]) .percentage{margin-bottom:0;order:3}:host([indeterminate]) .fill{animation-timing-function:var(
--spectrum-progressbar-indeterminate-animation-ease
);position:relative;width:var(
--spectrum-progressbar-indeterminate-fill-width
);will-change:transform}:host([dir=ltr][indeterminate]) .fill{animation:indeterminate-loop-ltr var(--spectrum-progressbar-indeterminate-duration) infinite}:host([dir=rtl][indeterminate]) .fill{animation:indeterminate-loop-rtl var(--spectrum-progressbar-indeterminate-duration) infinite}@keyframes indeterminate-loop-ltr{0%{transform:translate(calc(var(--spectrum-progressbar-indeterminate-fill-width)*-1))}to{transform:translate(var(--spectrum-progressbar-width))}}@keyframes indeterminate-loop-rtl{0%{transform:translate(var(--spectrum-progressbar-width))}to{transform:translate(calc(var(--spectrum-progressbar-width)*-1))}}.fill{background:var(
--spectrum-progressbar-m-track-fill-color,var(--spectrum-semantic-informative-color-default)
)}.track{background-color:var(
--spectrum-progressbar-m-track-color,var(--spectrum-alias-track-color-default)
)}:host([over-background]) .fill{background:var(
--spectrum-progressbar-m-overbackground-track-fill-color,var(--spectrum-alias-track-fill-color-overbackground)
)}:host([over-background]) .label,:host([over-background]) .percentage{color:var(
--spectrum-progressbar-m-overbackground-track-fill-color,var(--spectrum-alias-track-fill-color-overbackground)
)}:host([over-background]) .track{background-color:var(
--spectrum-progressbar-m-overbackground-track-color,var(--spectrum-alias-track-color-overbackground)
)}:host([positive]) .fill{background:var(
--spectrum-meter-m-positive-track-fill-color,var(--spectrum-semantic-positive-status-color)
)}:host(.is-notice) .fill{background:var(
--spectrum-meter-m-notice-track-fill-color,var(--spectrum-semantic-notice-status-color)
)}:host(.is-negative) .fill{background:var(
--spectrum-meter-m-negative-track-fill-color,var(--spectrum-semantic-negative-status-color)
)}.label,.percentage{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}.fill{transform-origin:left;width:100%}:host([dir=rtl]) .fill{transform-origin:right}
`;e.default=r},fjtd:function(t,e,o){"use strict";o.r(e),o.d(e,"TemplateResultType",(function(){return a})),o.d(e,"clearPart",(function(){return x})),o.d(e,"getCommittedValue",(function(){return g})),o.d(e,"getDirectiveClass",(function(){return l})),o.d(e,"insertPart",(function(){return d})),o.d(e,"isDirectiveResult",(function(){return n})),o.d(e,"isPrimitive",(function(){return s})),o.d(e,"isSingleExpression",(function(){return u})),o.d(e,"isTemplateResult",(function(){return c})),o.d(e,"removePart",(function(){return v})),o.d(e,"setChildPartValue",(function(){return p})),o.d(e,"setCommittedValue",(function(){return h}));var r=o("v2F8");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:i}=r._$LH,s=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a={HTML:1,SVG:2},c=(t,e)=>{var o,r;return void 0===e?void 0!==(null===(o=t)||void 0===o?void 0:o._$litType$):(null===(r=t)||void 0===r?void 0:r._$litType$)===e},n=t=>{var e;return void 0!==(null===(e=t)||void 0===e?void 0:e._$litDirective$)},l=t=>{var e;return null===(e=t)||void 0===e?void 0:e._$litDirective$},u=t=>void 0===t.strings,m=()=>document.createComment(""),d=(t,e,o)=>{var r;const s=t._$AA.parentNode,a=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=s.insertBefore(m(),a),r=s.insertBefore(m(),a);o=new i(e,r,t,t.options)}else{const e=o._$AB.nextSibling,i=o._$AM,c=i!==t;if(c){let e;null===(r=o._$AQ)||void 0===r||r.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==i._$AU&&o._$AP(e)}if(e!==a||c){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,a),t=e}}}return o},p=(t,e,o=t)=>(t._$AI(e,o),t),b={},h=(t,e=b)=>t._$AH=e,g=t=>t._$AH,v=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const r=t._$AB.nextSibling;for(;o!==r;){const t=o.nextSibling;o.remove(),o=t}},x=t=>{t._$AR()}},fl79:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
.fill-submask-2{animation:spectrum-fill-mask-2 1s linear infinite}@keyframes spectrum-fill-mask-1{0%{transform:rotate(90deg)}1.69%{transform:rotate(72.3deg)}3.39%{transform:rotate(55.5deg)}5.08%{transform:rotate(40.3deg)}6.78%{transform:rotate(25deg)}8.47%{transform:rotate(10.6deg)}10.17%{transform:rotate(0deg)}11.86%{transform:rotate(0deg)}13.56%{transform:rotate(0deg)}15.25%{transform:rotate(0deg)}16.95%{transform:rotate(0deg)}18.64%{transform:rotate(0deg)}20.34%{transform:rotate(0deg)}22.03%{transform:rotate(0deg)}23.73%{transform:rotate(0deg)}25.42%{transform:rotate(0deg)}27.12%{transform:rotate(0deg)}28.81%{transform:rotate(0deg)}30.51%{transform:rotate(0deg)}32.2%{transform:rotate(0deg)}33.9%{transform:rotate(0deg)}35.59%{transform:rotate(0deg)}37.29%{transform:rotate(0deg)}38.98%{transform:rotate(0deg)}40.68%{transform:rotate(0deg)}42.37%{transform:rotate(5.3deg)}44.07%{transform:rotate(13.4deg)}45.76%{transform:rotate(20.6deg)}47.46%{transform:rotate(29deg)}49.15%{transform:rotate(36.5deg)}50.85%{transform:rotate(42.6deg)}52.54%{transform:rotate(48.8deg)}54.24%{transform:rotate(54.2deg)}55.93%{transform:rotate(59.4deg)}57.63%{transform:rotate(63.2deg)}59.32%{transform:rotate(67.2deg)}61.02%{transform:rotate(70.8deg)}62.71%{transform:rotate(73.8deg)}64.41%{transform:rotate(76.2deg)}66.1%{transform:rotate(78.7deg)}67.8%{transform:rotate(80.6deg)}69.49%{transform:rotate(82.6deg)}71.19%{transform:rotate(83.7deg)}72.88%{transform:rotate(85deg)}74.58%{transform:rotate(86.3deg)}76.27%{transform:rotate(87deg)}77.97%{transform:rotate(87.7deg)}79.66%{transform:rotate(88.3deg)}81.36%{transform:rotate(88.6deg)}83.05%{transform:rotate(89.2deg)}84.75%{transform:rotate(89.2deg)}86.44%{transform:rotate(89.5deg)}88.14%{transform:rotate(89.9deg)}89.83%{transform:rotate(89.7deg)}91.53%{transform:rotate(90.1deg)}93.22%{transform:rotate(90.2deg)}94.92%{transform:rotate(90.1deg)}96.61%{transform:rotate(90deg)}98.31%{transform:rotate(89.8deg)}to{transform:rotate(90deg)}}@keyframes spectrum-fill-mask-2{0%{transform:rotate(180deg)}1.69%{transform:rotate(180deg)}3.39%{transform:rotate(180deg)}5.08%{transform:rotate(180deg)}6.78%{transform:rotate(180deg)}8.47%{transform:rotate(180deg)}10.17%{transform:rotate(179.2deg)}11.86%{transform:rotate(164deg)}13.56%{transform:rotate(151.8deg)}15.25%{transform:rotate(140.8deg)}16.95%{transform:rotate(130.3deg)}18.64%{transform:rotate(120.4deg)}20.34%{transform:rotate(110.8deg)}22.03%{transform:rotate(101.6deg)}23.73%{transform:rotate(93.5deg)}25.42%{transform:rotate(85.4deg)}27.12%{transform:rotate(78.1deg)}28.81%{transform:rotate(71.2deg)}30.51%{transform:rotate(89.1deg)}32.2%{transform:rotate(105.5deg)}33.9%{transform:rotate(121.3deg)}35.59%{transform:rotate(135.5deg)}37.29%{transform:rotate(148.4deg)}38.98%{transform:rotate(161deg)}40.68%{transform:rotate(173.5deg)}42.37%{transform:rotate(180deg)}44.07%{transform:rotate(180deg)}45.76%{transform:rotate(180deg)}47.46%{transform:rotate(180deg)}49.15%{transform:rotate(180deg)}50.85%{transform:rotate(180deg)}52.54%{transform:rotate(180deg)}54.24%{transform:rotate(180deg)}55.93%{transform:rotate(180deg)}57.63%{transform:rotate(180deg)}59.32%{transform:rotate(180deg)}61.02%{transform:rotate(180deg)}62.71%{transform:rotate(180deg)}64.41%{transform:rotate(180deg)}66.1%{transform:rotate(180deg)}67.8%{transform:rotate(180deg)}69.49%{transform:rotate(180deg)}71.19%{transform:rotate(180deg)}72.88%{transform:rotate(180deg)}74.58%{transform:rotate(180deg)}76.27%{transform:rotate(180deg)}77.97%{transform:rotate(180deg)}79.66%{transform:rotate(180deg)}81.36%{transform:rotate(180deg)}83.05%{transform:rotate(180deg)}84.75%{transform:rotate(180deg)}86.44%{transform:rotate(180deg)}88.14%{transform:rotate(180deg)}89.83%{transform:rotate(180deg)}91.53%{transform:rotate(180deg)}93.22%{transform:rotate(180deg)}94.92%{transform:rotate(180deg)}96.61%{transform:rotate(180deg)}98.31%{transform:rotate(180deg)}to{transform:rotate(180deg)}}@keyframes spectrum-fills-rotate{0%{transform:rotate(-90deg)}to{transform:rotate(270deg)}}:host{direction:ltr;display:inline-block;height:var(
--spectrum-progresscircle-m-height,var(--spectrum-global-dimension-size-400)
);position:relative;transform:translateZ(0);width:var(
--spectrum-progresscircle-m-width,var(--spectrum-global-dimension-size-400)
)}.track{border-radius:var(
--spectrum-progresscircle-m-width,var(--spectrum-global-dimension-size-400)
);border-style:solid;border-width:var(--spectrum-progresscircle-m-border-size);box-sizing:border-box;height:var(
--spectrum-progresscircle-m-height,var(--spectrum-global-dimension-size-400)
);width:var(
--spectrum-progresscircle-m-width,var(--spectrum-global-dimension-size-400)
)}:host([dir=ltr]) .fills{left:0}:host([dir=rtl]) .fills{right:0}.fills{height:100%;position:absolute;top:0;width:100%}.fill{border-radius:var(
--spectrum-progresscircle-m-width,var(--spectrum-global-dimension-size-400)
);border-style:solid;border-width:var(--spectrum-progresscircle-m-border-size);box-sizing:border-box;height:var(
--spectrum-progresscircle-m-height,var(--spectrum-global-dimension-size-400)
);width:var(
--spectrum-progresscircle-m-width,var(--spectrum-global-dimension-size-400)
)}.fillMask1,.fillMask2{height:100%;overflow:hidden;position:absolute;transform:rotate(180deg);transform-origin:100% center;width:50%}.fillSubMask1,.fillSubMask2{height:100%;overflow:hidden;transform:rotate(-180deg);transform-origin:100% center;width:100%}.fillMask2{transform:rotate(0deg)}:host([size=s]){height:var(
--spectrum-progresscircle-s-height,var(--spectrum-global-dimension-size-200)
);width:var(
--spectrum-progresscircle-s-width,var(--spectrum-global-dimension-size-200)
)}:host([size=s]) .track{border-radius:var(
--spectrum-progresscircle-s-width,var(--spectrum-global-dimension-size-200)
);border-style:solid;border-width:var(--spectrum-progresscircle-s-border-size);height:var(
--spectrum-progresscircle-s-height,var(--spectrum-global-dimension-size-200)
);width:var(
--spectrum-progresscircle-s-width,var(--spectrum-global-dimension-size-200)
)}:host([size=s]) .fill{border-radius:var(
--spectrum-progresscircle-s-width,var(--spectrum-global-dimension-size-200)
);border-style:solid;border-width:var(--spectrum-progresscircle-s-border-size);height:var(
--spectrum-progresscircle-s-height,var(--spectrum-global-dimension-size-200)
);width:var(
--spectrum-progresscircle-s-width,var(--spectrum-global-dimension-size-200)
)}:host([size=l]){height:var(
--spectrum-progresscircle-l-height,var(--spectrum-global-dimension-size-800)
);width:var(
--spectrum-progresscircle-l-width,var(--spectrum-global-dimension-size-800)
)}:host([size=l]) .track{border-radius:var(
--spectrum-progresscircle-l-width,var(--spectrum-global-dimension-size-800)
);border-style:solid;border-width:var(
--spectrum-progresscircle-l-border-size,var(--spectrum-global-dimension-size-50)
);height:var(
--spectrum-progresscircle-l-height,var(--spectrum-global-dimension-size-800)
);width:var(
--spectrum-progresscircle-l-width,var(--spectrum-global-dimension-size-800)
)}:host([size=l]) .fill{border-radius:var(
--spectrum-progresscircle-l-width,var(--spectrum-global-dimension-size-800)
);border-style:solid;border-width:var(
--spectrum-progresscircle-l-border-size,var(--spectrum-global-dimension-size-50)
);height:var(
--spectrum-progresscircle-l-height,var(--spectrum-global-dimension-size-800)
);width:var(
--spectrum-progresscircle-l-width,var(--spectrum-global-dimension-size-800)
)}:host([indeterminate]) .fills{animation:spectrum-fills-rotate 1s cubic-bezier(.25,.78,.48,.89) infinite;transform:translateZ(0);transform-origin:center;will-change:transform}:host([indeterminate]) .fillSubMask1{animation:spectrum-fill-mask-1 1s linear infinite;transform:translateZ(0);will-change:transform}:host([indeterminate]) .fillSubMask2{animation:spectrum-fill-mask-2 1s linear infinite;transform:translateZ(0);will-change:transform}.track{border-color:var(
--spectrum-progresscircle-m-track-color,var(--spectrum-alias-track-color-default)
)}.fill{border-color:var(
--spectrum-progresscircle-m-track-fill-color,var(--spectrum-semantic-informative-color-default)
)}:host([over-background]) .track{border-color:var(
--spectrum-progresscircle-m-over-background-track-color
)}:host([over-background]) .fill{border-color:var(
--spectrum-progresscircle-m-over-background-track-fill-color
)}:host([indeterminate][over-background]) .track{border-color:var(
--spectrum-progresscircle-m-over-background-track-color
)}:host([indeterminate][over-background]) .fill{border-color:var(
--spectrum-progresscircle-m-over-background-track-fill-color
)}:host{--spectrum-progresscircle-m-over-background-track-fill-color:var(
--spectrum-alias-track-fill-color-overbackground
)}
`;e.default=r},fwrO:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host([size=s]){--spectrum-link-primary-text-size:var(
--spectrum-link-s-primary-text-size,var(--spectrum-global-dimension-font-size-75)
)}:host([size=m]){--spectrum-link-primary-text-size:var(
--spectrum-link-m-primary-text-size,var(--spectrum-global-dimension-font-size-100)
)}:host([size=l]){--spectrum-link-primary-text-size:var(
--spectrum-link-l-primary-text-size,var(--spectrum-global-dimension-font-size-200)
)}:host([size=xl]){--spectrum-link-primary-text-size:var(
--spectrum-link-xl-primary-text-size,var(--spectrum-global-dimension-font-size-300)
)}a{-webkit-text-decoration-skip:objects;background-color:transparent;cursor:pointer;font-size:var(--spectrum-link-primary-text-size);outline:none;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}a,a.focus-visible,a.focus-visible{text-decoration:underline}a.focus-visible{-webkit-text-decoration-style:double;text-decoration-style:double}a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([quiet]) a{text-decoration:none}:host([quiet]) a:hover{text-decoration:underline}a{color:var(
--spectrum-link-m-primary-text-color,var(--spectrum-global-color-blue-600)
)}a:hover{color:var(
--spectrum-link-m-primary-text-color-hover,var(--spectrum-global-color-blue-600)
)}a:active{color:var(
--spectrum-link-m-primary-text-color-down,var(--spectrum-global-color-blue-700)
)}a.focus-visible{color:var(
--spectrum-link-m-primary-text-color-key-focus,var(--spectrum-alias-text-color-key-focus)
)}a:focus-visible{color:var(
--spectrum-link-m-primary-text-color-key-focus,var(--spectrum-alias-text-color-key-focus)
)}:host([variant=secondary]) a{color:inherit}:host([variant=secondary]) a:hover{color:inherit}:host([variant=secondary]) a:active{color:inherit}:host([variant=secondary]) a:focus{color:inherit}:host([over-background]) a{color:var(
--spectrum-link-m-primary-overbackground-text-color,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:hover{color:var(
--spectrum-link-m-primary-overbackground-text-color-hover,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:active{color:var(
--spectrum-link-m-primary-overbackground-text-color-down,var(--spectrum-alias-text-color-overbackground)
)}:host([over-background]) a:focus{color:var(
--spectrum-link-m-primary-overbackground-text-color-key-focus,var(--spectrum-alias-text-color-overbackground)
)}@media (forced-colors:active){:host([variant=secondary]) a{color:linktext}:host([variant=secondary]) a:hover{color:linktext}:host([variant=secondary]) a:active{color:linktext}:host([variant=secondary]) a:focus{color:linktext}}:host{display:inline}:host(:focus){outline:none}:host([href]) a.focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}:host([href]) a:focus-visible{text-decoration:underline;-webkit-text-decoration-style:double;text-decoration-style:double}
`;e.default=r},gnXq:function(t,e,o){"use strict";o.r(e),o.d(e,"eventOptions",(function(){return i}));var r=o("596t");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return Object(r.decorateProperty)({finisher:(e,o)=>{Object.assign(e.prototype[o],t)}})}},"h+pW":function(t,e,o){"use strict";o.r(e);var r=o("C9Xx");o.d(e,"ifDefined",(function(){return r.ifDefined}))},hNrx:function(t,e,o){"use strict";o.r(e),o.d(e,"VirtualTrigger",(function(){return i}));var r=o("IEsu");class i{constructor(t,e){this.x=0,this.y=0,this.x=t,this.y=e}updateBoundingClientRect(t,e){this.x=t,this.y=e,r.Overlay.update()}getBoundingClientRect(){return{width:0,height:0,top:this.y,right:this.x,y:this.y,x:this.x,bottom:this.y,left:this.x,toJSON(){}}}}},hSJ3:function(t,e,o){"use strict";o.r(e),o.d(e,"ObserveSlotText",(function(){return n}));var r=o("TToO"),i=o("NPpS");const s=Symbol("slotElementObserver"),a=Symbol("assignedNodes"),c=Symbol("startObserving");function n(t,e){var o;class n extends t{constructor(){super(...arguments),this.slotHasContent=!1}manageTextObservedSlot(){if(!this[a])return;const t=[...this[a]].filter(t=>!!t.tagName||!!t.textContent&&t.textContent.trim());this.slotHasContent=t.length>0}firstUpdated(t){super.firstUpdated(t),this.manageTextObservedSlot()}[(o=a,c)](){if(!this[s]){const t=t=>{for(const e of t)"characterData"===e.type&&this.manageTextObservedSlot()};this[s]=new MutationObserver(t)}this[s].observe(this,{characterData:!0,subtree:!0})}connectedCallback(){super.connectedCallback(),this[c]()}disconnectedCallback(){this[s]&&this[s].disconnect(),super.disconnectedCallback()}}return Object(r.__decorate)([Object(i.property)({type:Boolean,attribute:!1})],n.prototype,"slotHasContent",void 0),Object(r.__decorate)([Object(i.queryAssignedNodes)(e,!0)],n.prototype,o,void 0),n}},hUtM:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host([size=s]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-s-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-s-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-s-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-s-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-s-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-s-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-s-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-s-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-s-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-s-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-s-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-450)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-s-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-s-compact-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
)}:host([size=m]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-m-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-m-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-m-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-m-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-m-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-m-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-m-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-m-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-m-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-m-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-m-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-550)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-m-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-m-compact-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
)}:host([size=l]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-l-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-l-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-700)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-l-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-l-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-l-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-l-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-l-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-l-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-l-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-l-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-l-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-650)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-l-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-l-compact-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
)}:host([size=xl]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-800)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-xl-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-xl-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-xl-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-xl-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-xl-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-xl-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-xl-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-xl-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-750)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-xl-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-xl-compact-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
)}:host{--spectrum-tabs-compact-item-height:calc(var(--spectrum-tabs-compact-textonly-height) - var(--spectrum-tabs-compact-textonly-divider-size))}#list{display:flex;margin:0;padding-bottom:0;padding-top:0;position:relative;vertical-align:top;z-index:0}:host([dir=ltr]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) #selection-indicator{left:0}:host([dir=rtl]) #selection-indicator{right:0}#selection-indicator{border-radius:var(--spectrum-tabs-textonly-divider-border-radius);position:absolute;transform-origin:top left;transition:transform var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) var(--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease);z-index:0}:host([compact]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-item-height
);line-height:var(--spectrum-tabs-compact-item-height)}:host([direction^=horizontal]) #list{align-items:center;border-bottom:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=horizontal]) ::slotted(:not([slot])){vertical-align:top}:host([dir=ltr][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-left:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([dir=rtl][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-right:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([direction^=horizontal]) #selection-indicator{bottom:0;bottom:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1);height:var(--spectrum-tabs-quiet-textonly-divider-size);position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box;height:var(--spectrum-tabs-compact-item-height)}:host([quiet]) #list{display:inline-flex}:host([dir=ltr][direction^=vertical]) #list{border-left:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([dir=rtl][direction^=vertical]) #list{border-right:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])){margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([direction^=vertical]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-vertical-textonly-tabitem-gap);padding-bottom:0;padding-left:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-right:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-top:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([direction^=vertical]) .spectrum-Icon{height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height)}:host([direction^=vertical][compact]) #list ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-compact-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-compact-vertical-textonly-tabitem-gap)}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:0}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:0}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([direction^=vertical]) #selection-indicator{position:absolute;width:var(--spectrum-tabs-quiet-textonly-divider-size)}#list{border-bottom-color:var(
--spectrum-tabs-textonly-divider-background-color
)}:host([dir=ltr][direction^=vertical]) #list{border-left-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical]) #list{border-right-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}#selection-indicator{background-color:var(
--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected
)}.spectrum-Tabs--emphasized #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([quiet]) #list{border-bottom-color:var(
--spectrum-tabs-quiet-textonly-divider-background-color
)}:host([quiet]) #selection-indicator{background-color:var(
--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected
)}:host([quiet]) #list.spectrum-Tabs--emphasized #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical][compact]) #list,:host([dir=ltr][direction^=vertical][quiet]) #list{border-left-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical][compact]) #list,:host([dir=rtl][direction^=vertical][quiet]) #list{border-right-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([direction^=vertical][compact]) #list #selection-indicator,:host([direction^=vertical][quiet]) #list #selection-indicator{background-color:var(
--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical]) .spectrum-Tabs--emphasized{border-left-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical]) .spectrum-Tabs--emphasized{border-right-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([direction^=vertical]) #list.spectrum-Tabs--emphasized #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}@media (forced-colors:active){#list{--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:HighlightText;--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-icon-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-tabitem-text-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-text-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-text-color:ButtonText;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:Highlight;forced-color-adjust:none}::slotted(:not([slot])):before{background-color:ButtonFace}#list.spectrum-Tabs--emphasized ::slotted(:not([slot])):before{background-color:ButtonFace}#list.spectrum-Tabs--emphasized .is-selected,#list.spectrum-Tabs--emphasized .is-selected .spectrum-Icon{color:HighlightText}#list.spectrum-Tabs--emphasized .is-selected:before{background-color:Highlight;color:HighlightText}#list.spectrum-Tabs--emphasized .is-selected .spectrum-Tabs-itemLabel{color:HighlightText}}.is-selected,.is-selected .spectrum-Icon{color:HighlightText}.is-selected:before{background-color:Highlight;color:HighlightText}.is-selected .spectrum-Tabs-itemLabel{color:HighlightText}:host{--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;display:grid}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([disabled]) #selection-indicator{background-color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #selection-indicator,:host([direction=vertical]) #selection-indicator{height:1px;top:0}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}:host([direction=horizontal]:not([quiet])) #list{border-bottom-color:var(
--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir][direction=horizontal]) #selection-indicator{width:1px}:host([dir=ltr][direction=vertical-right]) #list{border-left:0;border-right:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-right-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir=rtl][direction=vertical-right]) #list{border-left:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-left-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
);border-right:0}:host([dir=ltr][direction=vertical-right]) #selection-indicator{left:auto;right:calc(var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick))*-1)}:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:calc(var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick))*-1);right:auto}#selection-indicator.first-position{transition:none}
`;e.default=r},hiRm:function(t,e,o){"use strict";o.r(e),o.d(e,"computePosition",(function(){return I})),o.d(e,"getScrollParents",(function(){return O}));var r=o("/Co9");function i(t){return"[object Window]"===(null==t?void 0:t.toString())}function s(t){if(null==t)return window;if(!i(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function a(t){return s(t).getComputedStyle(t)}function c(t){return i(t)?"":t?(t.nodeName||"").toLowerCase():""}function n(t){return t instanceof s(t).HTMLElement}function l(t){return t instanceof s(t).Element}function u(t){return t instanceof s(t).ShadowRoot||t instanceof ShadowRoot}function m(t){const{overflow:e,overflowX:o,overflowY:r}=a(t);return/auto|scroll|overlay|hidden/.test(e+r+o)}function d(t){return["table","td","th"].includes(c(t))}function p(t){const e=navigator.userAgent.toLowerCase().includes("firefox"),o=a(t);return"none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||["transform","perspective"].includes(o.willChange)||e&&"filter"===o.willChange||e&&!!o.filter&&"none"!==o.filter}o.d(e,"arrow",(function(){return r.arrow})),o.d(e,"autoPlacement",(function(){return r.autoPlacement})),o.d(e,"detectOverflow",(function(){return r.detectOverflow})),o.d(e,"flip",(function(){return r.flip})),o.d(e,"hide",(function(){return r.hide})),o.d(e,"inline",(function(){return r.inline})),o.d(e,"limitShift",(function(){return r.limitShift})),o.d(e,"offset",(function(){return r.offset})),o.d(e,"shift",(function(){return r.shift})),o.d(e,"size",(function(){return r.size}));const b=Math.min,h=Math.max,g=Math.round;function v(t,e){void 0===e&&(e=!1);const o=t.getBoundingClientRect();let r=1,i=1;return e&&n(t)&&(r=t.offsetWidth>0&&g(o.width)/t.offsetWidth||1,i=t.offsetHeight>0&&g(o.height)/t.offsetHeight||1),{width:o.width/r,height:o.height/i,top:o.top/i,right:o.right/r,bottom:o.bottom/i,left:o.left/r,x:o.left/r,y:o.top/i}}function x(t){return(e=t,(e instanceof s(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function f(t){return i(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function y(t){return v(x(t)).left+f(t).scrollLeft}function z(t,e,o){const r=n(e),i=x(e),s=v(t,r&&function(t){const e=v(t);return g(e.width)!==t.offsetWidth||g(e.height)!==t.offsetHeight}(e));let a={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(r||!r&&"fixed"!==o)if(("body"!==c(e)||m(i))&&(a=f(e)),n(e)){const t=v(e,!0);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else i&&(l.x=y(i));return{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function k(t){return"html"===c(t)?t:t.assignedSlot||t.parentNode||(u(t)?t.host:null)||x(t)}function w(t){return n(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function q(t){const e=s(t);let o=w(t);for(;o&&d(o)&&"static"===getComputedStyle(o).position;)o=w(o);return o&&("html"===c(o)||"body"===c(o)&&"static"===getComputedStyle(o).position&&!p(o))?e:o||function(t){let e=k(t);for(;n(e)&&!["html","body"].includes(c(e));){if(p(e))return e;e=e.parentNode}return null}(t)||e}function C(t){return{width:t.offsetWidth,height:t.offsetHeight}}function O(t,e){var o;void 0===e&&(e=[]);const r=function t(e){return["html","body","#document"].includes(c(e))?e.ownerDocument.body:n(e)&&m(e)?e:t(k(e))}(t),i=r===(null==(o=t.ownerDocument)?void 0:o.body),a=s(r),l=i?[a].concat(a.visualViewport||[],m(r)?r:[]):r,u=e.concat(l);return i?u:u.concat(O(k(l)))}function A(t,e){return"viewport"===e?Object(r.rectToClientRect)(function(t){const e=s(t),o=x(t),r=e.visualViewport;let i=o.clientWidth,a=o.clientHeight,c=0,n=0;return r&&(i=r.width,a=r.height,Math.abs(e.innerWidth/r.scale-r.width)<.01&&(c=r.offsetLeft,n=r.offsetTop)),{width:i,height:a,x:c,y:n}}(t)):l(e)?function(t){const e=v(t),o=e.top+t.clientTop,r=e.left+t.clientLeft;return{top:o,left:r,x:r,y:o,right:r+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e):Object(r.rectToClientRect)(function(t){var e;const o=x(t),r=f(t),i=null==(e=t.ownerDocument)?void 0:e.body,s=h(o.scrollWidth,o.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),c=h(o.scrollHeight,o.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let n=-r.scrollLeft+y(t);const l=-r.scrollTop;return"rtl"===a(i||o).direction&&(n+=h(o.clientWidth,i?i.clientWidth:0)-s),{width:s,height:c,x:n,y:l}}(x(t)))}function T(t){const e=O(k(t)),o=["absolute","fixed"].includes(a(t).position)&&n(t)?q(t):t;return l(o)?e.filter(t=>l(t)&&function(t,e){const o=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(o&&u(o)){let o=e;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}(t,o)&&"body"!==c(t)):[]}const _={getElementRects:t=>{let{reference:e,floating:o,strategy:r}=t;return{reference:z(e,q(o),r),floating:{...C(o),x:0,y:0}}},convertOffsetParentRelativeRectToViewportRelativeRect:t=>function(t){let{rect:e,offsetParent:o,strategy:r}=t;const i=n(o),s=x(o);if(o===s)return e;let a={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==c(o)||m(s))&&(a=f(o)),n(o))){const t=v(o,!0);l.x=t.x+o.clientLeft,l.y=t.y+o.clientTop}return{...e,x:e.x-a.scrollLeft+l.x,y:e.y-a.scrollTop+l.y}}(t),getOffsetParent:t=>{let{element:e}=t;return q(e)},isElement:t=>l(t),getDocumentElement:t=>{let{element:e}=t;return x(e)},getClippingClientRect:t=>function(t){let{element:e,boundary:o,rootBoundary:r}=t;const i=[..."clippingParents"===o?T(e):[].concat(o),r],s=i[0],a=i.reduce((t,o)=>{const r=A(e,o);return t.top=h(r.top,t.top),t.right=b(r.right,t.right),t.bottom=b(r.bottom,t.bottom),t.left=h(r.left,t.left),t},A(e,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(t),getDimensions:t=>{let{element:e}=t;return C(e)},getClientRects:t=>{let{element:e}=t;return e.getClientRects()}},I=(t,e,o)=>Object(r.computePosition)(t,e,{platform:_,...o})},hlMX:function(t,e,o){"use strict";o.r(e);var r=o("BA4z");customElements.define("sp-button-group",r.ButtonGroup)},htO6:function(t,e,o){"use strict";o.r(e),o.d(e,"ManageHelpText",(function(){return i}));var r=o("wmwB");function i(t,{mode:e}={mode:"internal"}){return class extends t{constructor(){super(...arguments),this.helpTextManager=new r.HelpTextManager(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(t){return this.helpTextManager.render(t)}}}},hxBy:function(t,e,o){"use strict";o.r(e),o.d(e,"Link",(function(){return l}));var r=o("TToO"),i=o("3dPG"),s=o("NPpS"),a=o("MiWL"),c=o("zKLX"),n=o("fwrO");class l extends(Object(i.SizedMixin)(Object(a.LikeAnchor)(c.Focusable),{noDefaultSize:!0})){static get styles(){return[n.default]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}Object(r.__decorate)([Object(s.query)("#anchor")],l.prototype,"anchorElement",void 0),Object(r.__decorate)([Object(s.property)({type:String,reflect:!0})],l.prototype,"variant",void 0)},"i+lW":function(t,e,o){"use strict";o.r(e);var r=o("45A8");customElements.define("sp-button",r.Button)},itat:function(t,e,o){"use strict";o.r(e);var r=o("mTUR");customElements.define("sp-icon-cross100",r.IconCross100)},"j/Se":function(t,e,o){"use strict";o.r(e),o.d(e,"FocusVisiblePolyfillMixin",(function(){return i}));o("zlO1");let r=!0;try{document.body.querySelector(":focus-visible")}catch(t){r=!1}const i=t=>{var e;const o=Symbol("endPolyfillCoordination");return e=o,class extends t{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),r||requestAnimationFrame(()=>{null==this[o]&&(this[o]=(t=>{if(null==t.shadowRoot||t.hasAttribute("data-js-focus-visible"))return()=>{};if(!self.applyFocusVisiblePolyfill){const e=()=>{self.applyFocusVisiblePolyfill&&t.shadowRoot&&self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",e,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",e)}}return self.applyFocusVisiblePolyfill(t.shadowRoot),t.manageAutoFocus&&t.manageAutoFocus(),()=>{}})(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),r||requestAnimationFrame(()=>{null!=this[o]&&(this[o](),this[o]=null)})}}}},jBp9:function(t,e,o){"use strict";o.r(e),o.d(e,"ActionGroup",(function(){return l}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("Kv8c");const n=[];class l extends i.SpectrumElement{constructor(){super(...arguments),this.buttons=[],this._buttonSelector="sp-action-button",this.compact=!1,this.emphasized=!1,this.justified=!1,this.label="",this.quiet=!1,this.vertical=!1,this._selected=n,this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown)},this.handleKeydown=t=>{const{code:e}=t;if(!["ArrowUp","ArrowLeft","ArrowRight","ArrowDown","End","Home","PageUp","PageDown"].includes(e))return;const o=this.getRootNode().activeElement;if(!o)return;let r=this.buttons.indexOf(o);if(-1===r)return;const i=(t,e)=>t[(t.length+e)%t.length],s=t=>{for(r+=t;i(this.buttons,r).disabled;)r+=t};switch(e){case"ArrowUp":s(-1);break;case"ArrowLeft":s(this.isLTR?-1:1);break;case"ArrowRight":s(this.isLTR?1:-1);break;case"ArrowDown":s(1);break;case"End":r=this.buttons.length,s(-1);break;case"Home":r=-1,s(1);break;case"PageUp":case"PageDown":default:const o=[...this.getRootNode().querySelectorAll("sp-action-group")];if(o.length<2)return;t.preventDefault();const a="PageUp"===e?-1:1;let c=o.indexOf(this)+a,n=i(o,c);for(;!n.buttons.length;)c+=a,n=i(o,c);return void n.focus()}t.preventDefault();const a=i(this.buttons,r);o.tabIndex=-1,a.tabIndex=0,a.focus()},this.handleFocusout=t=>{const{relatedTarget:e}=t;if(!e||!this.contains(e)){const t=this.buttons.find(t=>this.selected.length?t.selected:!t.disabled);t&&(t.tabIndex=0)}this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.manageButtons=()=>{const t=this.shadowRoot.querySelector("slot");if(!t)return;const e=t.assignedElements({flatten:!0}).reduce((t,e)=>{if(e.matches(this._buttonSelector))t.push(e);else{const o=Array.from(e.querySelectorAll(":scope > "+this._buttonSelector));t.push(...o)}return t},[]);this.buttons=e,this.manageChildren(),this.manageSelects()}}static get styles(){return[c.default]}get selected(){return this._selected}set selected(t){if(t===this.selected)return;const e=this.selected;this._selected=t;this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._selected=e,this.buttons.map(t=>{t.selected=this.selected.includes(t.value)}))}focus(t){if(!this.buttons.length)return;const e=this.buttons.find(t=>this.selected?t.selected:!t.disabled);e&&e.focus(t)}handleClick(t){const e=t.target;if(void 0!==e.value)switch(this.selects){case"single":[...this.querySelectorAll("[selected]")].forEach(t=>{t.selected=!1,t.tabIndex=-1,t.setAttribute("aria-checked","false")}),e.selected=!0,e.tabIndex=0,e.setAttribute("aria-checked","true"),this.selected=[e.value],e.focus();break;case"multiple":{const t=[...this.selected];e.selected=!e.selected,e.setAttribute("aria-checked",e.selected?"true":"false"),e.selected?t.push(e.value):t.splice(this.selected.indexOf(e.value),1),this.selected=t;break}default:this.selected=n}}async manageSelects(){if(this.buttons.length)switch(this.selects){case"single":{let t,e;this.setAttribute("role","radiogroup");const o=this.buttons.map(async o=>{await o.updateComplete,o.setAttribute("role","radio"),o.setAttribute("aria-checked",o.selected?"true":"false"),o.tabIndex=o.selected?0:-1,o.selected&&(t=o),e||o.disabled||(e=o)});await Promise.all(o),(t||e)&&((t||e).tabIndex=0),this.selected=t?[t.value]:n;break}case"multiple":{this.setAttribute("role","group");const t=[],e=this.buttons.map(async e=>{await e.updateComplete,e.setAttribute("role","checkbox"),e.setAttribute("aria-checked",e.selected?"true":"false"),e.tabIndex=0,e.selected&&t.push(e.value)});await Promise.all(e),this.selected=t.length?t:n;break}default:this.buttons.forEach(t=>{t.setAttribute("role","button"),t.tabIndex=0}),this.removeAttribute("role"),this.selected=n}}render(){return s.html`
            <slot role="presentation" @slotchange=${this.manageButtons}></slot>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick),this.addEventListener("focusin",this.handleFocusin)}updated(t){super.updated(t),t.has("selects")&&this.manageSelects(),(t.has("quiet")&&this.quiet||t.has("emphasized")&&this.emphasized)&&this.manageChildren(),t.has("label")&&(this.label||void 0!==t.get("label"))&&(this.label.length?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}manageChildren(){this.buttons.forEach(t=>{t.quiet=this.quiet,t.emphasized=this.emphasized})}connectedCallback(){super.connectedCallback(),this.observer||(this.observer=new MutationObserver(this.manageButtons),this.manageButtons()),this.observer.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"compact",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"emphasized",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"justified",void 0),Object(r.__decorate)([Object(a.property)({type:String})],l.prototype,"label",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"quiet",void 0),Object(r.__decorate)([Object(a.property)({type:String})],l.prototype,"selects",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"vertical",void 0),Object(r.__decorate)([Object(a.property)({type:Array})],l.prototype,"selected",null)},jSC6:function(t,e,o){"use strict";o.r(e);var r=o("f5bh");customElements.define("sp-icon-checkmark-circle",r.IconCheckmarkCircle)},jf9D:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCross500",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("OYdV"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Cross500Icon)()}}},kB1b:function(t,e,o){"use strict";o.r(e);var r=o("RNvx");customElements.define("sp-icon-info",r.IconInfo)},kWA7:function(t,e,o){"use strict";o.r(e),o.d(e,"TextfieldBase",(function(){return p})),o.d(e,"Textfield",(function(){return b}));var r=o("TToO"),i=o("P/Yy"),s=o("h+pW"),a=o("PQr/"),c=o("NPpS"),n=o("htO6"),l=o("zKLX"),u=(o("J+qT"),o("0Vag"),o("2lhV")),m=o("w7+0");const d=["text","url","tel","email","password"];class p extends(Object(n.ManageHelpText)(l.Focusable)){constructor(){super(...arguments),this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[u.default,m.default]}get type(){var t;return null!==(t=d.find(t=>t===this._type))&&void 0!==t?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}onInput(){if(this.allowedKeys&&this.inputElement.value){if(!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const t=this.inputElement.selectionStart-1;return this.inputElement.value=this.value.toString(),void this.inputElement.setSelectionRange(t,t)}}this.value=this.inputElement.value}onChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!0}onBlur(){this.focused=!1}renderStateIcons(){return this.invalid?i.html`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?i.html`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:i.nothing}get displayValue(){return this.value.toString()}select(){this.inputElement.select()}get renderMultiline(){return i.html`
            ${this.grows&&!this.quiet?i.html`
                      <div id="sizer">${this.value}</div>
                  `:i.nothing}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${Object(s.ifDefined)(this.invalid||void 0)}
                class="input"
                maxlength=${Object(s.ifDefined)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${Object(s.ifDefined)(this.minlength>-1?this.minlength:void 0)}
                pattern=${Object(s.ifDefined)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.onChange}
                @input=${this.onInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${Object(s.ifDefined)(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return i.html`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${Object(s.ifDefined)(this.invalid||void 0)}
                class="input"
                maxlength=${Object(s.ifDefined)(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${Object(s.ifDefined)(this.minlength>-1?this.minlength:void 0)}
                pattern=${Object(s.ifDefined)(this.pattern)}
                placeholder=${this.placeholder}
                .value=${Object(a.live)(this.displayValue)}
                @change=${this.onChange}
                @input=${this.onInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${Object(s.ifDefined)(this.autocomplete)}
            />
        `}renderField(){return i.html`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return i.html`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}updated(t){(t.has("value")||t.has("required")&&this.required)&&this.checkValidity()}checkValidity(){let t=this.inputElement.checkValidity();if(this.required||this.value&&this.pattern){if((this.disabled||this.multiline)&&this.pattern){t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())}void 0!==this.minlength&&(t=t&&this.value.toString().length>this.minlength),this.valid=t,this.invalid=!t}return t}}Object(r.__decorate)([Object(c.property)({attribute:"allowed-keys"})],p.prototype,"allowedKeys",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"focused",void 0),Object(r.__decorate)([Object(c.query)(".input")],p.prototype,"inputElement",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"invalid",void 0),Object(r.__decorate)([Object(c.property)()],p.prototype,"label",void 0),Object(r.__decorate)([Object(c.property)()],p.prototype,"placeholder",void 0),Object(r.__decorate)([Object(c.property)({attribute:"type",reflect:!0})],p.prototype,"_type",void 0),Object(r.__decorate)([Object(c.state)()],p.prototype,"type",null),Object(r.__decorate)([Object(c.property)()],p.prototype,"pattern",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"grows",void 0),Object(r.__decorate)([Object(c.property)({type:Number})],p.prototype,"maxlength",void 0),Object(r.__decorate)([Object(c.property)({type:Number})],p.prototype,"minlength",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"multiline",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"readonly",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"valid",void 0),Object(r.__decorate)([Object(c.property)({type:String})],p.prototype,"value",null),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"quiet",void 0),Object(r.__decorate)([Object(c.property)({type:Boolean,reflect:!0})],p.prototype,"required",void 0),Object(r.__decorate)([Object(c.property)({type:String,reflect:!0})],p.prototype,"autocomplete",void 0);class b extends p{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}Object(r.__decorate)([Object(c.property)({type:String})],b.prototype,"value",null)},kWSZ:function(t,e,o){"use strict";o.r(e),o.d(e,"queryAssignedNodes",(function(){return s}));var r=o("596t"),i=o("Xf6d");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function s(t,e,o){let s,a=t;return"object"==typeof t?(a=t.slot,s=t):s={flatten:e},o?Object(i.queryAssignedElements)({slot:a,flatten:e,selector:o}):Object(r.decorateProperty)({descriptor:t=>({get(){var t,e;const o="slot"+(a?`[name=${a}]`:":not([name])"),r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o);return null!==(e=null==r?void 0:r.assignedNodes(s))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},kfxf:function(t,e,o){"use strict";o.r(e);var r=o("IEsu");o.d(e,"Overlay",(function(){return r.Overlay}));var i=o("QzZV");o.d(e,"LONGPRESS_INSTRUCTIONS",(function(){return i.LONGPRESS_INSTRUCTIONS})),o.d(e,"OverlayTrigger",(function(){return i.OverlayTrigger}));var s=o("l9S0");o.d(e,"ActiveOverlay",(function(){return s.ActiveOverlay}));var a=o("Wopf");o.d(e,"openOverlay",(function(){return a.openOverlay}));var c=o("hNrx");o.d(e,"VirtualTrigger",(function(){return c.VirtualTrigger}))},kqxq:function(t,e,o){"use strict";o.r(e),o.d(e,"ActionButton",(function(){return d}));var r=o("TToO"),i=o("3dPG"),s=o("P/Yy"),a=o("NPpS"),c=o("pflg"),n=o("D8VC"),l=o("BegL");o("IfAH");const u={s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"};let m;class d extends(Object(i.SizedMixin)(c.ButtonBase)){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{if(!this.toggles)return;this.selected=!this.selected;this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected)},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[n.default,l.default]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(){this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),m=setTimeout(()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))},300)}onPointerup(){clearTimeout(m),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.preventDefault(),"ArrowDown"===e&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:o}=t;("Space"===e||o&&"ArrowDown"===e)&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const t=super.buttonContent;return this.holdAffordance&&t.unshift(s.html`
                <sp-icon-corner-triangle300
                    id="hold-affordance"
                    class="${u[this.size]}"
                ></sp-icon-corner-triangle300>
            `),t}updated(t){super.updated(t);const e="button"===this.role&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(e?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],d.prototype,"emphasized",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0,attribute:"hold-affordance"})],d.prototype,"holdAffordance",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],d.prototype,"quiet",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],d.prototype,"role",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],d.prototype,"selected",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],d.prototype,"toggles",void 0),Object(r.__decorate)([Object(a.property)({type:String})],d.prototype,"value",null)},"kt/5":function(t,e,o){"use strict";o.r(e);var r=o("JjMa");customElements.define("sp-icon-cross300",r.IconCross300)},ktQV:function(t,e,o){"use strict";o.r(e);var r=o("xrKi");customElements.define("sp-tab",r.Tab)},kyd7:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{--spectrum-toast-icon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-toast-neutral-content-padding-top:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-content-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-button-margin-right:var(
--spectrum-global-dimension-size-130
)}:host([dir=ltr]){padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]){padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]){padding-left:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]){padding-right:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host{-webkit-font-smoothing:antialiased;align-items:stretch;border-radius:var(
--spectrum-toast-neutral-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-toast-neutral-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-neutral-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);padding-bottom:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
);padding-top:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .type{margin-right:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl]) .type{margin-left:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=ltr]) .type{margin-left:0}:host([dir=rtl]) .type{margin-right:0}.type{flex-grow:0;flex-shrink:0;margin-bottom:var(--spectrum-toast-icon-padding-y);margin-top:var(--spectrum-toast-icon-padding-y)}:host([dir=ltr]) .content{padding-right:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]) .content{padding-left:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=ltr]) .content{padding-left:0}:host([dir=rtl]) .content{padding-right:0}:host([dir=ltr]) .content{text-align:left}:host([dir=rtl]) .content{text-align:right}.content{box-sizing:border-box;display:inline-block;flex:1 1 auto;font-size:var(
--spectrum-toast-info-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-info-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:var(
--spectrum-toast-info-text-line-height,var(--spectrum-alias-component-text-line-height)
);padding-bottom:var(--spectrum-toast-content-padding-bottom);padding-top:var(
--spectrum-toast-neutral-content-padding-top,var(--spectrum-global-dimension-size-65)
)}.buttons{align-items:flex-start;display:flex;flex:0 0 auto}:host([dir=ltr]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=ltr]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=ltr]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=ltr]) .buttons slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=rtl]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=rtl]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=rtl]) .buttons slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}.body{align-self:center;flex:1 1 auto}:host([dir=ltr]) .body ::slotted([slot=action]){float:right}:host([dir=rtl]) .body ::slotted([slot=action]){float:left}:host([dir=ltr]) .body ::slotted([slot=action]){margin-right:var(
--spectrum-toast-button-margin-right
)}:host([dir=rtl]) .body ::slotted([slot=action]){margin-left:var(
--spectrum-toast-button-margin-right
)}:host([dir=ltr]) .body+.buttons{padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .body+.buttons{padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .body+.buttons{border-left-width:1px}:host([dir=rtl]) .body+.buttons{border-right-width:1px}:host([dir=ltr]) .body+.buttons{border-left-style:solid}:host([dir=rtl]) .body+.buttons{border-right-style:solid}:host{background-color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
);color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
)}.content{color:var(
--spectrum-toast-neutral-text-color,var(--spectrum-global-color-static-white)
)}.type{color:#fff}:host([dir=ltr]) .buttons{border-left-color:hsla(0,0%,100%,.2)}:host([dir=rtl]) .buttons{border-right-color:hsla(0,0%,100%,.2)}:host([variant=error]),:host([variant=negative]){background-color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
);color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton.focus-visible:not(:active),:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton:focus-visible:not(:active),:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=info]){background-color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
);color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=positive]),:host([variant=success]){background-color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
);color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active),:host([variant=success]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active),:host([variant=success]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}.content{line-height:1.5}:host(:not([open])){display:none}
`;e.default=r},l9S0:function(t,e,o){"use strict";o.r(e),o.d(e,"ActiveOverlay",(function(){return g}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("h+pW"),c=o("NPpS"),n=o("15WJ"),l=o("U3Ba"),u=o("wd6U"),m=o("/Co9"),d=o("hiRm");const p={initial:"idle",states:{idle:{on:{active:"active"}},active:{on:{hiding:"hiding",idle:"idle"}},hiding:{on:{dispose:"dispose"}},dispose:{on:{disposed:"disposed"}},disposed:{on:{}}}},b=(t,e)=>t?e&&p.states[t].on[e]||t:p.initial,h=t=>{const e=t.closest("active-overlay");if(e)return e;const o=t.getRootNode();return o.host?h(o.host):null};class g extends i.SpectrumElement{constructor(){super(),this._state=b(),this.animating=!1,this.theme={},this.tabbingAway=!1,this.offset=6,this.interaction="hover",this.positionAnimationFrame=0,this.willNotifyClosed=!1,this.isConstrained=!1,this.updateOverlayPosition=async()=>{if(!this.placement||"none"===this.placement)return;function t(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e||0}await(document.fonts?document.fonts.ready:Promise.resolve());const e=[Object(m.offset)(this.offset),Object(m.flip)({fallbackStrategy:"initialPlacement"}),Object(m.shift)({padding:8}),Object(m.size)({padding:8,apply:({width:t,height:e,floating:o})=>{const r=Math.max(100,Math.floor(e)),i=o.height;this.initialHeight=this.isConstrained&&this.initialHeight||i,this.isConstrained=i<this.initialHeight||r<=i;const s=this.isConstrained?r+"px":"";Object.assign(this.style,{maxWidth:Math.floor(t)+"px",maxHeight:s,height:s})}})];this.overlayContentTip&&e.push(Object(m.arrow)({element:this.overlayContentTip}));const{x:o,y:r,placement:i,middlewareData:s}=await Object(d.computePosition)(this.virtualTrigger||this.trigger,this,{placement:this.placement,middleware:e});if(Object.assign(this.style,{left:t(o)+"px",top:t(r)+"px"}),i!==this.getAttribute("actual-placement")&&(this.setAttribute("actual-placement",i),this.overlayContent.setAttribute("placement",i)),this.overlayContentTip&&s.arrow){const{x:e,y:o}=s.arrow;Object.assign(this.overlayContentTip.style,{left:null!=e?t(e)+"px":"",top:null!=o?t(o)+"px":"",right:"",bottom:""})}},this.handleInlineTriggerKeydown=t=>{const{code:e,shiftKey:o}=t;if("Tab"===e){if(o)return this.tabbingAway=!0,void this.dispatchEvent(new Event("close"));t.stopPropagation(),t.preventDefault(),this.focus()}},this.stealOverlayContentPromise=Promise.resolve(),this.stealOverlayContentPromise=new Promise(t=>this.stealOverlayContentResolver=t)}get state(){return this._state}set state(t){const e=b(this.state,t);e!==this.state&&(this._state=e,"active"===this.state||"hiding"===this.state?this.setAttribute("state",this.state):this.removeAttribute("state"))}focus(){const t=Object(l.firstFocusableIn)(this);t?t.focus():super.focus(),this.removeAttribute("tabindex")}get hasTheme(){return!!this.theme.color||!!this.theme.scale||!!this.theme.lang}static get styles(){return[u.default]}get hasModalRoot(){return!!this._modalRoot}feature(){this.tabIndex=-1;const t=h(this.trigger),e=t&&"open"===t.slot;("modal"===this.interaction||e||this._modalRoot)&&(this.slot="open",this._modalRoot&&(null==t||t.feature()))}obscure(t){if(this.slot&&"modal"===t){if(this.removeAttribute("slot"),"modal"!==this.interaction){const e=h(this.trigger);return this._modalRoot=null==e?void 0:e.obscure(t),this._modalRoot}return this}}async firstUpdated(t){super.firstUpdated(t),this.overlayContent&&this.trigger&&(this.stealOverlayContent(this.overlayContent),this.state="active",this.feature(),this.placement&&"none"!==this.placement&&(await this.updateOverlayPosition(),document.addEventListener("sp-update-overlays",this.updateOverlayPosition),window.addEventListener("scroll",this.updateOverlayPosition)),await this.applyContentAnimation("sp-overlay-fade-in"),this.receivesFocus&&this.focus(),this.trigger.dispatchEvent(new CustomEvent("sp-opened",{bubbles:!0,composed:!0,cancelable:!0,detail:{interaction:this.interaction}})))}open(t){this.extractDetail(t)}extractDetail(t){this.overlayContent=t.content,this.overlayContentTip=t.contentTip,this.trigger=t.trigger,this.virtualTrigger=t.virtualTrigger,this.placement=t.placement,this.offset=t.offset,this.interaction=t.interaction,this.theme=t.theme,this.receivesFocus=t.receivesFocus}dispose(){"dispose"===this.state&&(this.timeout&&(clearTimeout(this.timeout),delete this.timeout),this.trigger.removeEventListener("keydown",this.handleInlineTriggerKeydown),this.returnOverlayContent(),this.state="disposed",this.willNotifyClosed&&(this.overlayContent.dispatchEvent(new Event("sp-overlay-closed")),this.willNotifyClosed=!1))}stealOverlayContent(t){this.originalPlacement=t.getAttribute("placement"),this.restoreContent=Object(n.reparentChildren)([t],this,t=>{const e=t.slot,o=t.placement;return t.removeAttribute("slot"),t=>{t.slot=e,t.placement=o}}),this.stealOverlayContentResolver()}returnOverlayContent(){if(!this.restoreContent)return;const[t]=this.restoreContent();this.restoreContent=void 0,this.willNotifyClosed=!0,this.originalPlacement&&(t.setAttribute("placement",this.originalPlacement),delete this.originalPlacement)}async hide(t=!0){this.state="hiding",t&&await this.applyContentAnimation("sp-overlay-fade-out"),this.state="dispose"}schedulePositionUpdate(){cancelAnimationFrame(this.positionAnimationFrame),this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition())}onSlotChange(){this.schedulePositionUpdate()}applyContentAnimation(t){return new Promise(e=>{const o=this.shadowRoot.querySelector("#contents"),r=i=>{t===i.animationName&&(o.removeEventListener("animationend",r),o.removeEventListener("animationcancel",r),this.animating=!1,e("animationcancel"===i.type))};o.addEventListener("animationend",r),o.addEventListener("animationcancel",r),o.style.animationName=t,this.animating=!0})}renderTheme(t){const{color:e,scale:o,lang:r}=this.theme;return s.html`
            <sp-theme
                color=${Object(a.ifDefined)(e)}
                scale=${Object(a.ifDefined)(o)}
                lang=${Object(a.ifDefined)(r)}
                part="theme"
            >
                ${t}
            </sp-theme>
        `}render(){const t=s.html`
            <div id="contents">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `;return this.hasTheme?this.renderTheme(t):t}static create(t){const e=new g;return t.content&&e.open(t),e}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.stealOverlayContentPromise,t}disconnectedCallback(){document.removeEventListener("sp-update-overlays",this.updateOverlayPosition),window.removeEventListener("scroll",this.updateOverlayPosition),super.disconnectedCallback()}}Object(r.__decorate)([Object(c.property)()],g.prototype,"_state",void 0),Object(r.__decorate)([Object(c.property)({reflect:!0,type:Boolean})],g.prototype,"animating",void 0),Object(r.__decorate)([Object(c.property)({reflect:!0})],g.prototype,"placement",void 0),Object(r.__decorate)([Object(c.property)({attribute:!1})],g.prototype,"theme",void 0),Object(r.__decorate)([Object(c.property)({attribute:!1})],g.prototype,"receivesFocus",void 0)},lNNE:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{display:inline-flex}:host(:not([selected])){display:none}
`;e.default=r},lNTL:function(t,e,o){"use strict";o.r(e),o.d(e,"MenuGroup",(function(){return n}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=o("etvG"),c=(o("B6tL"),o("aJ77"));class n extends a.Menu{constructor(){super(),n.instances+=1,this.headerId="sp-menu-group-label-"+n.instances}static get styles(){return[...super.styles,c.default]}get ownRole(){switch(this.selects){case"multiple":case"single":case"inherit":return"group";default:return"menu"}}updateLabel(){const t=this.headerElements.length?this.headerElements[0]:void 0;if(t!==this.headerElement)if(this.headerElement&&this.headerElement.id===this.headerId&&this.headerElement.removeAttribute("id"),t){const e=t.id||this.headerId;t.id||(t.id=e),this.setAttribute("aria-labelledby",e)}else this.removeAttribute("aria-labelledby");this.headerElement=t}render(){return i.html`
            <span class="header" aria-hidden="true">
                <slot name="header" @slotchange=${this.updateLabel}></slot>
            </span>
            <sp-menu role="none">
                <slot></slot>
            </sp-menu>
        `}}n.instances=0,Object(r.__decorate)([Object(s.queryAssignedNodes)("header",!0)],n.prototype,"headerElements",void 0)},"mO/9":function(t,e,o){"use strict";o.r(e);var r=o("NTIh");customElements.define("sp-underlay",r.Underlay)},mTUR:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCross100",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("mrXU"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Cross100Icon)()}}},mY5E:function(t,e,o){"use strict";o.r(e);var r=o("A4SF");customElements.define("sp-tabs",r.Tabs)},maHB:function(t,e,o){"use strict";o.r(e);var r=o("avug");customElements.define("sp-icon-dash100",r.IconDash100)},mqll:function(t,e,o){"use strict";o.r(e),o.d(e,"Cross75Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`},mrXU:function(t,e,o){"use strict";o.r(e),o.d(e,"Cross100Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`},nVRj:function(t,e,o){"use strict";o.r(e),o.d(e,"Checkbox",(function(){return p}));var r=o("TToO"),i=o("P/Yy"),s=o("3dPG"),a=o("NPpS"),c=o("2DuV"),n=(o("9SAB"),o("J+qT"),o("uLPB"),o("Bg3B"),o("3GM5"),o("maHB"),o("Ajia"),o("qiXM"),o("SXNh")),l=o("w7+0"),u=o("YSBh");const m={s:i.html`
        <sp-icon-checkmark75
            id="checkmark"
            class="spectrum-UIIcon-Checkmark75"
        ></sp-icon-checkmark75>
    `,m:i.html`
        <sp-icon-checkmark100
            id="checkmark"
            class="spectrum-UIIcon-Checkmark100"
        ></sp-icon-checkmark100>
    `,l:i.html`
        <sp-icon-checkmark200
            id="checkmark"
            class="spectrum-UIIcon-Checkmark200"
        ></sp-icon-checkmark200>
    `,xl:i.html`
        <sp-icon-checkmark300
            id="checkmark"
            class="spectrum-UIIcon-Checkmark300"
        ></sp-icon-checkmark300>
    `},d={s:i.html`
        <sp-icon-dash75
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash75"
        ></sp-icon-dash75>
    `,m:i.html`
        <sp-icon-dash100
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash100"
        ></sp-icon-dash100>
    `,l:i.html`
        <sp-icon-dash200
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash200"
        ></sp-icon-dash200>
    `,xl:i.html`
        <sp-icon-dash300
            id="partialCheckmark"
            class="spectrum-UIIcon-Dash300"
        ></sp-icon-dash300>
    `};class p extends(Object(s.SizedMixin)(c.CheckboxBase)){constructor(){super(...arguments),this.indeterminate=!1,this.invalid=!1,this.emphasized=!1}static get styles(){return[n.default,l.default,u.default]}render(){return i.html`
            ${super.render()}
            <span id="box">
                ${m[this.size]}
                ${d[this.size]}
            </span>
            <label id="label"><slot></slot></label>
        `}updated(t){super.updated(t),t.has("invalid")&&(this.invalid?this.inputElement.setAttribute("aria-invalid","true"):this.inputElement.removeAttribute("aria-invalid")),t.has("indeterminate")&&(this.indeterminate?this.inputElement.setAttribute("aria-checked","mixed"):this.inputElement.removeAttribute("aria-checked"))}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],p.prototype,"indeterminate",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],p.prototype,"invalid",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],p.prototype,"emphasized",void 0)},nWeJ:function(t,e,o){"use strict";o.r(e),o.d(e,"CornerTriangle300Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`},ntZx:function(t,e,o){"use strict";o.r(e),o.d(e,"queryAll",(function(){return i}));var r=o("596t");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return Object(r.decorateProperty)({descriptor:e=>({get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}},nvw5:function(t,e,o){"use strict";o.r(e),o.d(e,"ReactiveElement",(function(){return m})),o.d(e,"defaultConverter",(function(){return n})),o.d(e,"notEqual",(function(){return l}));var r,i=o("ofNR");o.d(e,"CSSResult",(function(){return i.CSSResult})),o.d(e,"adoptStyles",(function(){return i.adoptStyles})),o.d(e,"css",(function(){return i.css})),o.d(e,"getCompatibleStyle",(function(){return i.getCompatibleStyle})),o.d(e,"supportsAdoptingStyleSheets",(function(){return i.supportsAdoptingStyleSheets})),o.d(e,"unsafeCSS",(function(){return i.unsafeCSS}));const s=window.trustedTypes,a=s?s.emptyScript:"",c=window.reactiveElementPolyfillSupport,n={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},l=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:l};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const r=this._$Eh(o,e);void 0!==r&&(this._$Eu.set(r,o),t.push(r))}),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(Object(i.getCompatibleStyle)(t))}else void 0!==t&&e.push(Object(i.getCompatibleStyle)(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return Object(i.adoptStyles)(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=u){var r,i;const s=this.constructor._$Eh(t,o);if(void 0!==s&&!0===o.reflect){const a=(null!==(i=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:n.toAttribute)(e,o.type);this._$Ei=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var o,r,i;const s=this.constructor,a=s._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=s.getPropertyOptions(a),c=t.converter,l=null!==(i=null!==(r=null===(o=c)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof c?c:null)&&void 0!==i?i:n.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||l)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((t,e)=>this[e]=t),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$ES(e,this[e],t)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.1")},o3VE:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400:#44b556;--spectrum-global-color-celery-500:#3da74e;--spectrum-global-color-celery-600:#379947;--spectrum-global-color-celery-700:#318b40;--spectrum-global-color-chartreuse-400:#85d044;--spectrum-global-color-chartreuse-500:#7cc33f;--spectrum-global-color-chartreuse-600:#73b53a;--spectrum-global-color-chartreuse-700:#6aa834;--spectrum-global-color-yellow-400:#dfbf00;--spectrum-global-color-yellow-500:#d2b200;--spectrum-global-color-yellow-600:#c4a600;--spectrum-global-color-yellow-700:#b79900;--spectrum-global-color-magenta-400:#d83790;--spectrum-global-color-magenta-500:#ce2783;--spectrum-global-color-magenta-600:#bc1c74;--spectrum-global-color-magenta-700:#ae0e66;--spectrum-global-color-fuchsia-400:#c038cc;--spectrum-global-color-fuchsia-500:#b130bd;--spectrum-global-color-fuchsia-600:#a228ad;--spectrum-global-color-fuchsia-700:#93219e;--spectrum-global-color-purple-400:#9256d9;--spectrum-global-color-purple-500:#864ccc;--spectrum-global-color-purple-600:#7a42bf;--spectrum-global-color-purple-700:#6f38b1;--spectrum-global-color-indigo-400:#6767ec;--spectrum-global-color-indigo-500:#5c5ce0;--spectrum-global-color-indigo-600:#5151d3;--spectrum-global-color-indigo-700:#4646c6;--spectrum-global-color-seafoam-400:#1b959a;--spectrum-global-color-seafoam-500:#16878c;--spectrum-global-color-seafoam-600:#0f797d;--spectrum-global-color-seafoam-700:#096c6f;--spectrum-global-color-red-400:#e34850;--spectrum-global-color-red-500:#d7373f;--spectrum-global-color-red-600:#c9252d;--spectrum-global-color-red-700:#bb121a;--spectrum-global-color-orange-400:#e68619;--spectrum-global-color-orange-500:#da7b11;--spectrum-global-color-orange-600:#cb6f10;--spectrum-global-color-orange-700:#bd640d;--spectrum-global-color-green-400:#2d9d78;--spectrum-global-color-green-500:#268e6c;--spectrum-global-color-green-600:#12805c;--spectrum-global-color-green-700:#107154;--spectrum-global-color-blue-400:#2680eb;--spectrum-global-color-blue-500:#1473e6;--spectrum-global-color-blue-600:#0d66d0;--spectrum-global-color-blue-700:#095aba;--spectrum-global-color-gray-50:#fff;--spectrum-global-color-gray-75:#fafafa;--spectrum-global-color-gray-100:#f5f5f5;--spectrum-global-color-gray-200:#eaeaea;--spectrum-global-color-gray-300:#e1e1e1;--spectrum-global-color-gray-400:#cacaca;--spectrum-global-color-gray-500:#b3b3b3;--spectrum-global-color-gray-600:#8e8e8e;--spectrum-global-color-gray-700:#6e6e6e;--spectrum-global-color-gray-800:#4b4b4b;--spectrum-global-color-gray-900:#2c2c2c;--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-50
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-300
);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.4);--spectrum-alias-dropshadow-color:rgba(0,0,0,.15);--spectrum-alias-background-color-hover-overlay:rgba(44,44,44,.04);--spectrum-alias-highlight-hover:rgba(44,44,44,.06);--spectrum-alias-highlight-down:rgba(44,44,44,.1);--spectrum-alias-highlight-selected:rgba(20,115,230,.1);--spectrum-alias-highlight-selected-hover:rgba(20,115,230,.2);--spectrum-alias-text-highlight-color:rgba(20,115,230,.2);--spectrum-alias-background-color-quickactions:hsla(0,0%,96%,.9);--spectrum-alias-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-translucent:rgba(44,44,44,.1);--spectrum-alias-radial-reaction-color-default:rgba(75,75,75,.6);--spectrum-alias-pasteboard-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-appframe-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-appframe-separator-color:var(
--spectrum-global-color-gray-300
);--spectrum-slider-s-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-ramp-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-range-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-ramp-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-range-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-ramp-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-range-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-ramp-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-s-range-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-ramp-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-range-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-ramp-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-range-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-ramp-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-range-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-ramp-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-m-range-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-ramp-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-range-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-ramp-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-range-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-ramp-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-range-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-ramp-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-l-range-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-ramp-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-range-tick-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-ramp-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-range-tick-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-ramp-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-range-editable-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-ramp-radial-reaction-color:rgba(75,75,75,.6);--spectrum-slider-xl-range-radial-reaction-color:rgba(75,75,75,.6);--spectrum-well-background-color:rgba(75,75,75,.02);--spectrum-well-border-color:rgba(44,44,44,.05)}
`;e.default=r},ofNR:function(t,e,o){"use strict";o.r(e),o.d(e,"CSSResult",(function(){return a})),o.d(e,"adoptStyles",(function(){return l})),o.d(e,"css",(function(){return n})),o.d(e,"getCompatibleStyle",(function(){return u})),o.d(e,"supportsAdoptingStyleSheets",(function(){return r})),o.d(e,"unsafeCSS",(function(){return c}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class a{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return r&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const c=t=>new a("string"==typeof t?t:t+"",i),n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new a(o,i)},l=(t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)})},u=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return c(e)})(t):t},pJtK:function(t,e,o){"use strict";o.r(e);var r=o("T0Aq");customElements.define("sp-popover",r.Popover)},pMVs:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0ms;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1)}:host{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(
--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)
) var(
--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)
) var(
--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)
),visibility 0ms linear calc(var(
--spectrum-dialog-confirm-background-exit-animation-delay,
var(--spectrum-global-animation-duration-200)
) + var(
--spectrum-dialog-confirm-background-exit-animation-duration,
var(--spectrum-global-animation-duration-300)
));z-index:1}:host([open]){transition:opacity var(
--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
) var(
--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)
) var(--spectrum-dialog-confirm-background-entry-animation-delay,0ms)}:host{background:var(
--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay)
)}
`;e.default=r},pflg:function(t,e,o){"use strict";o.r(e),o.d(e,"ButtonBase",(function(){return u}));var r=o("TToO"),i=o("P/Yy"),s=o("NPpS"),a=o("MiWL"),c=o("zKLX"),n=o("hSJ3"),l=o("Uv1x");class u extends(Object(a.LikeAnchor)(Object(n.ObserveSlotText)(Object(l.ObserveSlotPresence)(c.Focusable,'[slot="icon"]')))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const t=[i.html`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&t.unshift(i.html`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),t}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if("button"!==this.type){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return i.html`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return i.html`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;switch(e){case"Space":t.preventDefault(),void 0===this.href&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0)}}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click()}}handleKeyup(t){const{code:e}=t;switch(e){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click()}}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?("button"===this.getAttribute("role")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):(this.hasAttribute("role")&&"link"!==this.getAttribute("role")||this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],u.prototype,"active",void 0),Object(r.__decorate)([Object(s.property)({type:String})],u.prototype,"type",void 0),Object(r.__decorate)([Object(s.query)(".anchor")],u.prototype,"anchorElement",void 0)},pqFP:function(t,e,o){"use strict";o.r(e),o.d(e,"CloseButton",(function(){return m}));var r=o("TToO"),i=o("P/Yy"),s=o("3dPG"),a=o("NPpS"),c=o("QebO"),n=o("zKbv"),l=(o("Sb28"),o("itat"),o("KSKi"),o("kt/5"),o("9mbA"));const u={s:()=>i.html`
        <sp-icon-cross75
            slot="icon"
            class="icon spectrum-UIIcon-Cross75"
        ></sp-icon-cross75>
    `,m:()=>i.html`
        <sp-icon-cross100
            slot="icon"
            class="icon spectrum-UIIcon-Cross100"
        ></sp-icon-cross100>
    `,l:()=>i.html`
        <sp-icon-cross200
            slot="icon"
            class="icon spectrum-UIIcon-Cross200"
        ></sp-icon-cross200>
    `,xl:()=>i.html`
        <sp-icon-cross300
            slot="icon"
            class="icon spectrum-UIIcon-Cross300"
        ></sp-icon-cross300>
    `};class m extends(Object(s.SizedMixin)(c.StyledButton)){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,n.default,l.default]}get buttonContent(){return[u[this.size]()]}}Object(r.__decorate)([Object(a.property)({reflect:!0})],m.prototype,"variant",void 0)},qLE0:function(t,e,o){"use strict";o.r(e),o.d(e,"IconBase",(function(){return n}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("9tGC");class n extends i.SpectrumElement{static get styles(){return[c.default]}render(){return s.html`
            <slot></slot>
        `}}Object(r.__decorate)([Object(a.property)()],n.prototype,"label",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],n.prototype,"size",void 0)},qVIJ:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1.0;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-70:0.7;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-55:0.55;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-global-color-opacity-0:0;--spectrum-global-color-celery-400:#44b556;--spectrum-global-color-celery-500:#4bc35f;--spectrum-global-color-celery-600:#51d267;--spectrum-global-color-celery-700:#58e06f;--spectrum-global-color-chartreuse-400:#85d044;--spectrum-global-color-chartreuse-500:#8ede49;--spectrum-global-color-chartreuse-600:#9bec54;--spectrum-global-color-chartreuse-700:#a3f858;--spectrum-global-color-yellow-400:#dfbf00;--spectrum-global-color-yellow-500:#edcc00;--spectrum-global-color-yellow-600:#fad900;--spectrum-global-color-yellow-700:#ffe22e;--spectrum-global-color-magenta-400:#d83790;--spectrum-global-color-magenta-500:#e2499d;--spectrum-global-color-magenta-600:#ec5aaa;--spectrum-global-color-magenta-700:#f56bb7;--spectrum-global-color-fuchsia-400:#c038cc;--spectrum-global-color-fuchsia-500:#cf3edc;--spectrum-global-color-fuchsia-600:#d951e5;--spectrum-global-color-fuchsia-700:#e366ef;--spectrum-global-color-purple-400:#9256d9;--spectrum-global-color-purple-500:#9d64e1;--spectrum-global-color-purple-600:#a873e9;--spectrum-global-color-purple-700:#b483f0;--spectrum-global-color-indigo-400:#6767ec;--spectrum-global-color-indigo-500:#7575f1;--spectrum-global-color-indigo-600:#8282f6;--spectrum-global-color-indigo-700:#9090fa;--spectrum-global-color-seafoam-400:#1b959a;--spectrum-global-color-seafoam-500:#20a3a8;--spectrum-global-color-seafoam-600:#23b2b8;--spectrum-global-color-seafoam-700:#26c0c7;--spectrum-global-color-red-400:#e34850;--spectrum-global-color-red-500:#ec5b62;--spectrum-global-color-red-600:#f76d74;--spectrum-global-color-red-700:#ff7b82;--spectrum-global-color-orange-400:#e68619;--spectrum-global-color-orange-500:#f29423;--spectrum-global-color-orange-600:#f9a43f;--spectrum-global-color-orange-700:#ffb55b;--spectrum-global-color-green-400:#2d9d78;--spectrum-global-color-green-500:#33ab84;--spectrum-global-color-green-600:#39b990;--spectrum-global-color-green-700:#3fc89c;--spectrum-global-color-blue-400:#2680eb;--spectrum-global-color-blue-500:#378ef0;--spectrum-global-color-blue-600:#4b9cf5;--spectrum-global-color-blue-700:#5aa9fa;--spectrum-global-color-gray-50:#252525;--spectrum-global-color-gray-75:#2f2f2f;--spectrum-global-color-gray-100:#323232;--spectrum-global-color-gray-200:#3e3e3e;--spectrum-global-color-gray-300:#4a4a4a;--spectrum-global-color-gray-400:#5a5a5a;--spectrum-global-color-gray-500:#6e6e6e;--spectrum-global-color-gray-600:#909090;--spectrum-global-color-gray-700:#b9b9b9;--spectrum-global-color-gray-800:#e3e3e3;--spectrum-global-color-gray-900:#fff;--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-75
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-50
);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,.5);--spectrum-alias-dropshadow-color:rgba(0,0,0,.5);--spectrum-alias-background-color-hover-overlay:hsla(0,0%,100%,.06);--spectrum-alias-highlight-hover:hsla(0,0%,100%,.07);--spectrum-alias-highlight-down:hsla(0,0%,100%,.1);--spectrum-alias-highlight-selected:rgba(55,142,240,.15);--spectrum-alias-highlight-selected-hover:rgba(55,142,240,.25);--spectrum-alias-text-highlight-color:rgba(55,142,240,.25);--spectrum-alias-background-color-quickactions:rgba(50,50,50,.9);--spectrum-alias-border-color-selected:var(
--spectrum-global-color-blue-600
);--spectrum-alias-border-color-translucent:hsla(0,0%,100%,.1);--spectrum-alias-radial-reaction-color-default:hsla(0,0%,89%,.6);--spectrum-alias-pasteboard-background-color:var(
--spectrum-global-color-gray-50
);--spectrum-alias-appframe-border-color:var(
--spectrum-global-color-gray-50
);--spectrum-alias-appframe-separator-color:var(
--spectrum-global-color-gray-50
);--spectrum-slider-s-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-ramp-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-range-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-ramp-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-range-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-ramp-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-range-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-ramp-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-s-range-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-ramp-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-range-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-ramp-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-range-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-ramp-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-range-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-ramp-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-m-range-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-ramp-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-range-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-ramp-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-range-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-ramp-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-range-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-ramp-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-l-range-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-ramp-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-range-tick-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-ramp-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-range-tick-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-ramp-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-range-editable-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-ramp-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-slider-xl-range-radial-reaction-color:hsla(0,0%,89%,.6);--spectrum-well-background-color:hsla(0,0%,89%,.02);--spectrum-well-border-color:hsla(0,0%,100%,.05)}
`;e.default=r},qiXM:function(t,e,o){"use strict";o.r(e);var r=o("rGgc");customElements.define("sp-icon-dash300",r.IconDash300)},r2Ge:function(t,e,o){"use strict";o.r(e),o.d(e,"FieldGroup",(function(){return l}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("htO6"),n=o("Vewf");class l extends(Object(c.ManageHelpText)(i.SpectrumElement,{mode:"external"})){constructor(){super(...arguments),this.horizontal=!1,this.invalid=!1,this.label="",this.vertical=!1}static get styles(){return[n.default]}handleSlotchange(){}render(){return s.html`
            <div class="group" role="presentation">
                <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            ${this.renderHelpText(this.invalid)}
        `}updated(t){super.updated(t),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}}Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"horizontal",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"invalid",void 0),Object(r.__decorate)([Object(a.property)()],l.prototype,"label",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],l.prototype,"vertical",void 0)},rGgc:function(t,e,o){"use strict";o.r(e),o.d(e,"IconDash300",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("uy2T"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Dash300Icon)()}}},rrT8:function(t,e,o){"use strict";o.r(e);var r=o("ZY41");o("Hcce").Theme.registerThemeFragment("medium","scale",r.default)},tHmz:function(t,e,o){"use strict";o.r(e),o.d(e,"openOverlay",(function(){return r}));const r=async(t,e,r,i)=>{const{Overlay:s}=await o.e(1).then(o.bind(null,"YGaC"));return s.open(t,e,r,i)}},tXkP:function(t,e,o){"use strict";o.r(e);var r=o("vMS7");customElements.define("sp-tooltip",r.Tooltip)},uLPB:function(t,e,o){"use strict";o.r(e);var r=o("+sm+");customElements.define("sp-icon-checkmark200",r.IconCheckmark200)},uQ6g:function(t,e,o){"use strict";o.r(e),o.d(e,"TabPanel",(function(){return n}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("lNNE");class n extends i.SpectrumElement{constructor(){super(...arguments),this.selected=!1,this.value=""}render(){return s.html`
            <slot></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id="sp-tab-panel-"+n.instanceCount++)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}}n.styles=[c.default],n.instanceCount=0,Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],n.prototype,"selected",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],n.prototype,"value",void 0)},ue1T:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCheckmark100",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("wV+B"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Checkmark100Icon)()}}},ufih:function(t,e,o){"use strict";o.r(e);var r=o("D/7L");customElements.define("sp-menu-item",r.MenuItem)},uiJ8:function(t,e,o){"use strict";let r;o.r(e),o.d(e,"tag",(function(){return i})),o.d(e,"setCustomTemplateLiteralTag",(function(){return s}));const i=function(t,...e){return r?r(t,...e):e.reduce((e,o,r)=>e+o+t[r+1],t[0])},s=t=>{r=t}},uy2T:function(t,e,o){"use strict";o.r(e),o.d(e,"Dash300Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M10.61 7.085H1.39a1.085 1.085 0 010-2.17h9.22a1.085 1.085 0 010 2.17z" />
  </svg>`},v2F8:function(t,e,o){"use strict";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var r;o.r(e),o.d(e,"_$LH",(function(){return R})),o.d(e,"html",(function(){return k})),o.d(e,"noChange",(function(){return q})),o.d(e,"nothing",(function(){return C})),o.d(e,"render",(function(){return A})),o.d(e,"svg",(function(){return w}));const i=globalThis.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,n=`<${c}>`,l=document,u=(t="")=>l.createComment(t),m=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,p=t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h=/-->/g,g=/>/g,v=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,f=/"/g,y=/^(?:script|style|textarea|title)$/i,z=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),k=z(1),w=z(2),q=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),O=new WeakMap,A=(t,e,o)=>{var r,i;const s=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let a=s._$litPart$;if(void 0===a){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;s._$litPart$=a=new j(e.insertBefore(u(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a},T=l.createTreeWalker(l,129,null,!1),_=(t,e)=>{const o=t.length-1,r=[];let i,c=2===e?"<svg>":"",l=b;for(let e=0;e<o;e++){const o=t[e];let s,u,m=-1,d=0;for(;d<o.length&&(l.lastIndex=d,u=l.exec(o),null!==u);)d=l.lastIndex,l===b?"!--"===u[1]?l=h:void 0!==u[1]?l=g:void 0!==u[2]?(y.test(u[2])&&(i=RegExp("</"+u[2],"g")),l=v):void 0!==u[3]&&(l=v):l===v?">"===u[0]?(l=null!=i?i:b,m=-1):void 0===u[1]?m=-2:(m=l.lastIndex-u[2].length,s=u[1],l=void 0===u[3]?v:'"'===u[3]?f:x):l===f||l===x?l=v:l===h||l===g?l=b:(l=v,i=void 0);const p=l===v&&t[e+1].startsWith("/>")?" ":"";c+=l===b?o+n:m>=0?(r.push(s),o.slice(0,m)+"$lit$"+o.slice(m)+a+p):o+a+(-2===m?(r.push(void 0),e):p)}const u=c+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(u):u,r]};class I{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let s=0,n=0;const l=t.length-1,m=this.parts,[d,p]=_(t,e);if(this.el=I.createElement(d,o),T.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=T.nextNode())&&m.length<l;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const o=p[n++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(o);m.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?P:"?"===e[1]?$:"@"===e[1]?F:S})}else m.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(y.test(r.tagName)){const t=r.textContent.split(a),e=t.length-1;if(e>0){r.textContent=i?i.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],u()),T.nextNode(),m.push({type:2,index:++s});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===c)m.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(a,t+1));)m.push({type:7,index:s}),t+=a.length-1}s++}}static createElement(t,e){const o=l.createElement("template");return o.innerHTML=t,o}}function E(t,e,o=t,r){var i,s,a,c;if(e===q)return e;let n=void 0!==r?null===(i=o._$Cl)||void 0===i?void 0:i[r]:o._$Cu;const l=m(e)?void 0:e._$litDirective$;return(null==n?void 0:n.constructor)!==l&&(null===(s=null==n?void 0:n._$AO)||void 0===s||s.call(n,!1),void 0===l?n=void 0:(n=new l(t),n._$AT(t,o,r)),void 0!==r?(null!==(a=(c=o)._$Cl)&&void 0!==a?a:c._$Cl=[])[r]=n:o._$Cu=n),void 0!==n&&(e=E(t,n._$AS(t,e.values),n,r)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:l).importNode(o,!0);T.currentNode=i;let s=T.nextNode(),a=0,c=0,n=r[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new j(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new U(s,this,t)),this.v.push(e),n=r[++c]}a!==(null==n?void 0:n.index)&&(s=T.nextNode(),a++)}return i}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class j{constructor(t,e,o,r){var i;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),m(t)?t===C||null==t||""===t?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==q&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):p(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==C&&m(this._$AH)?this._$AA.nextSibling.data=t:this.k(l.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=I.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(o);else{const t=new B(i,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new I(t)),e}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new j(this.A(u()),this.A(u()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class S{constructor(t,e,o,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let s=!1;if(void 0===i)t=E(this,t,e,0),s=!m(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const r=t;let a,c;for(t=i[0],a=0;a<i.length-1;a++)c=E(this,r[o+a],e,a),c===q&&(c=this._$AH[a]),s||(s=!m(c)||c!==this._$AH[a]),c===C?t=C:t!==C&&(t+=(null!=c?c:"")+i[a+1]),this._$AH[a]=c}s&&!r&&this.C(t)}C(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class P extends S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===C?void 0:t}}const L=i?i.emptyScript:"";class $ extends S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==C?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class F extends S{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=E(this,t,e,0))&&void 0!==o?o:C)===q)return;const r=this._$AH,i=t===C&&r!==C||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==C&&(r===C||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class U{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const R={P:"$lit$",L:a,V:c,I:1,N:_,R:B,D:p,j:E,H:j,O:S,F:$,B:F,W:P,Z:U},H=window.litHtmlPolyfillSupport;null==H||H(I,j),(null!==(r=globalThis.litHtmlVersions)&&void 0!==r?r:globalThis.litHtmlVersions=[]).push("2.2.1")},vMS7:function(t,e,o){"use strict";o.r(e),o.d(e,"TooltipProxy",(function(){return l})),o.d(e,"Tooltip",(function(){return u}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("tHmz"),n=o("0Xw0");class l extends HTMLElement{disconnectedCallback(){this.dispatchEvent(new Event("disconnected"))}}customElements.define("tooltip-proxy",l);class u extends i.SpectrumElement{constructor(){super(),this._tooltipId="sp-tooltip-describedby-helper-"+u.instanceCount++,this.selfManaged=!1,this.offset=6,this.hadTooltipId=!1,this.open=!1,this.placement="top",this._variant="",this.abortOverlay=()=>{},this.openOverlay=()=>{const t=this.parentElement,e=new Promise(t=>{this.abortOverlay=t});this.closeOverlayCallback=Object(c.openOverlay)(t,"hover",this,{abortPromise:e,offset:this.offset,placement:this.placement})},this.closeOverlay=async()=>{this.abortOverlay&&this.abortOverlay(!0),this.closeOverlayCallback&&((await this.closeOverlayCallback)(),delete this.closeOverlayCallback)},this.addEventListener("sp-overlay-query",this.onOverlayQuery)}static get styles(){return[n.default]}get variant(){return this._variant}set variant(t){if(t!==this.variant){if(["info","positive","negative"].includes(t))return this.setAttribute("variant",t),void(this._variant=t);this.removeAttribute("variant"),this._variant=""}}onOverlayQuery(t){if(!t.target)return;t.target===this&&(t.detail.overlayContentTipElement=this.tipElement)}generateProxy(){this._proxy||(this._proxy=document.createElement("tooltip-proxy"),this._proxy.id=this._tooltipId,this._proxy.hidden=!0,this._proxy.slot="hidden-tooltip-content",this._proxy.setAttribute("role","tooltip"),this._proxy.addEventListener("disconnected",this.closeOverlay))}overlayWillOpenCallback({trigger:t}){this.setAttribute("aria-hidden","true"),this.generateProxy(),this._proxy.textContent=this.textContent;const e=t.getAttribute("aria-describedby")||"";this.hadTooltipId=e.search(this._tooltipId)>-1,this.insertAdjacentElement("beforebegin",this._proxy),this.hadTooltipId||(e?t.setAttribute("aria-describedby",`${e} ${this._tooltipId}`):t.setAttribute("aria-describedby",""+this._tooltipId))}overlayOpenCancelledCallback({trigger:t}){this.overlayCloseCallback({trigger:t})}overlayCloseCallback({trigger:t}){let e=(t.getAttribute("aria-describedby")||"").split(/\s+/);this.hadTooltipId||(e=e.filter(t=>t!==this._tooltipId)),e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby"),this.removeAttribute("aria-hidden"),this.removeProxy()}removeProxy(){this._proxy.remove()}manageTooltip(){const t=this.parentElement;this.selfManaged?(this.slot&&(this.previousSlot=this.slot),this.slot="self-managed-tooltip",t.addEventListener("pointerenter",this.openOverlay),t.addEventListener("focusin",this.openOverlay),t.addEventListener("pointerleave",this.closeOverlay),t.addEventListener("focusout",this.closeOverlay)):(this.previousSlot?this.slot=this.previousSlot:"self-managed-tooltip"===this.slot&&this.removeAttribute("slot"),t.removeEventListener("pointerenter",this.openOverlay),t.removeEventListener("focusin",this.openOverlay),t.removeEventListener("pointerleave",this.closeOverlay),t.removeEventListener("focusout",this.closeOverlay))}render(){return s.html`
            <slot name="icon"></slot>
            <span id="label"><slot></slot></span>
            <span id="tip"></span>
        `}async update(t){t.has("open")&&this.selfManaged&&(this.open?this.openOverlay():this.closeOverlay()),this.generateProxy(),super.update(t)}updated(t){super.updated(t),t.has("selfManaged")&&this.manageTooltip()}}u.instanceCount=0,Object(r.__decorate)([Object(a.property)({type:Boolean,attribute:"self-managed"})],u.prototype,"selfManaged",void 0),Object(r.__decorate)([Object(a.property)({type:Number,reflect:!0})],u.prototype,"offset",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],u.prototype,"open",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],u.prototype,"placement",void 0),Object(r.__decorate)([Object(a.query)("#tip")],u.prototype,"tipElement",void 0),Object(r.__decorate)([Object(a.property)({type:String})],u.prototype,"variant",null)},vOIP:function(t,e,o){"use strict";o.r(e),o.d(e,"IconCross75",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("mqll"),a=o("uiJ8");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.Cross75Icon)()}}},vUAz:function(t,e,o){"use strict";o.r(e);var r=o("uQ6g");customElements.define("sp-tab-panel",r.TabPanel)},vrNp:function(t,e,o){"use strict";o.r(e);var r=o("Ui7F");customElements.define("sp-progress-circle",r.ProgressCircle)},"w7+0":function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}
`;e.default=r},"wV+B":function(t,e,o){"use strict";o.r(e),o.d(e,"Checkmark100Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`},wd6U:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
@keyframes sp-overlay-fade-in{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes sp-overlay-fade-out{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{display:inline-block;left:0;pointer-events:none;position:absolute;top:0;z-index:1000}:host(:focus){outline:none}#contents,sp-theme{height:100%}#contents{animation-duration:var(--spectrum-global-animation-duration-200,.16s);animation-timing-function:var(
--spectrum-global-animation-ease-out,ease-out
);display:inline-block;opacity:1;pointer-events:none;visibility:visible}:host([actual-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75));align-items:flex-end;display:inline-flex}:host([actual-placement*=right]) #contents{--sp-overlay-from:translateX(calc(var(--spectrum-global-dimension-size-75)*-1))}:host([actual-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(var(--spectrum-global-dimension-size-75)*-1))}:host([actual-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75))}:host([animating]) ::slotted(*){pointer-events:none}:host(:not([animating])) ::slotted(*){pointer-events:auto}#contents ::slotted(*){position:relative}
`;e.default=r},wmwB:function(t,e,o){"use strict";o.r(e),o.d(e,"HelpTextManager",(function(){return a}));var r=o("P/Yy"),i=o("h+pW"),s=o("bJmu");class a{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:t})=>{this.handleHelpText(t),this.handleNegativeHelpText(t)},this.host=t,this.instanceCount=a.instanceCount++,this.id="sp-help-text-"+this.instanceCount,this.mode=e}get isInternal(){return"internal"===this.mode}render(t){return r.html`
            <div id=${Object(i.ifDefined)(this.isInternal?this.id:void 0)}>
                <slot
                    name=${t?"negative-help-text":"pass-through-help-text-"+this.instanceCount}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=Object(s.conditionAttributeWithId)(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),this.helpTextElement||(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){if("negative-help-text"!==t.name)return;t.assignedElements().forEach(t=>t.variant="negative")}}a.instanceCount=0},"x4+g":function(t,e,o){"use strict";o.r(e),o.d(e,"RadioGroup",(function(){return l}));var r=o("TToO"),i=o("NPpS"),s=o("j/Se"),a=o("r2Ge"),c=o("cfEo"),n=o("UB7X");class l extends(Object(s.FocusVisiblePolyfillMixin)(a.FieldGroup)){constructor(){super(...arguments),this.name="",this.rovingTabindexController=new n.RovingTabindexController(this,{focusInIndex:t=>t.findIndex(t=>this.selected?!t.disabled&&t.value===this.selected:!t.disabled),elementEnterAction:t=>{this.selected=t.value},elements:()=>this.buttons,isFocusableElement:t=>!t.disabled}),this.selected=""}get buttons(){return this.defaultNodes.filter(t=>t instanceof c.Radio)}focus(){this.rovingTabindexController.focus()}_setSelected(t){if(t===this.selected)return;const e=this.selected,o=t?this.querySelector(`sp-radio[value="${t}"]`):void 0;this.selected=o?t:"";this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))?this.validateRadios():this.selected=e}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","radiogroup");const e=this.querySelector("sp-radio[checked]"),o=e?e.value:"";if(this.selected=o||this.selected,this.selected&&this.selected!==o){const t=this.querySelector(`sp-radio[value="${this.selected}"]`);t?t.checked=!0:this.selected=""}this.addEventListener("change",t=>{if(t.target===this)return;t.stopPropagation();const e=t.target;this._setSelected(e.value)})}updated(t){super.updated(t),t.has("selected")&&this.validateRadios()}validateRadios(){let t=!1;this.buttons.map(e=>{e.checked=this.selected===e.value,t=t||e.checked}),t||(this.selected="")}handleSlotchange(){this.rovingTabindexController.clearElementCache()}}Object(r.__decorate)([Object(i.property)({type:String})],l.prototype,"name",void 0),Object(r.__decorate)([Object(i.queryAssignedNodes)("")],l.prototype,"defaultNodes",void 0),Object(r.__decorate)([Object(i.property)({reflect:!0})],l.prototype,"selected",void 0)},"xkU+":function(t,e,o){"use strict";o.r(e),o.d(e,"OverlayTimer",(function(){return r}));class r{constructor(t={}){this.warmUpDelay=1e3,this.coolDownDelay=1e3,this.isWarm=!1,this.timeout=0,Object.assign(this,t)}async openTimer(t){if(this.cancelCooldownTimer(),this.component&&t===this.component){if(this.promise)return this.promise;throw new Error("Inconsistent state")}return this.component&&(this.close(this.component),this.cancelCooldownTimer()),this.component=t,!this.isWarm&&(this.promise=new Promise(t=>{this.resolve=t,this.timeout=window.setTimeout(()=>{this.resolve&&(this.resolve(!1),this.isWarm=!0)},this.warmUpDelay)}),this.promise)}close(t){this.component&&this.component===t&&(this.resetCooldownTimer(),this.timeout>0&&(clearTimeout(this.timeout),this.timeout=0),this.resolve&&(this.resolve(!0),delete this.resolve),delete this.promise,delete this.component)}resetCooldownTimer(){this.isWarm&&(this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=!1,delete this.cooldownTimeout},this.coolDownDelay))}cancelCooldownTimer(){this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),delete this.cooldownTimeout}}},xlqn:function(t,e,o){"use strict";o.r(e),o.d(e,"IconAlert",(function(){return c}));var r=o("P/Yy"),i=o("qLE0"),s=o("FFFR"),a=o("OLGJ");class c extends i.IconBase{render(){return Object(a.setCustomTemplateLiteralTag)(r.html),Object(s.AlertIcon)({hidden:!this.label,title:this.label})}}},xrKi:function(t,e,o){"use strict";o.r(e),o.d(e,"Tab",(function(){return m}));var r=o("TToO"),i=o("Gsci"),s=o("P/Yy"),a=o("NPpS"),c=o("j/Se"),n=o("hSJ3"),l=o("Uv1x"),u=o("OfE4");class m extends(Object(c.FocusVisiblePolyfillMixin)(Object(n.ObserveSlotText)(Object(l.ObserveSlotPresence)(i.SpectrumElement,'[slot="icon"]'),""))){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[u.default]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}handleContentChange(){this.dispatchEvent(new Event("sp-tab-contentchange",{bubbles:!0,composed:!0}))}render(){return s.html`
            ${this.hasIcon?s.html`
                      <slot name="icon"></slot>
                  `:s.html``}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?s.html``:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id="sp-tab-"+m.instanceCount++),this.shadowRoot.addEventListener("slotchange",this.handleContentChange)}updated(t){super.updated(t),t.has("label")&&void 0!==t.get("label")&&this.handleContentChange(),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}m.instanceCount=0,Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],m.prototype,"disabled",void 0),Object(r.__decorate)([Object(a.property)({reflect:!0})],m.prototype,"label",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],m.prototype,"selected",void 0),Object(r.__decorate)([Object(a.property)({type:Boolean,reflect:!0})],m.prototype,"vertical",void 0),Object(r.__decorate)([Object(a.property)({type:String,reflect:!0})],m.prototype,"value",void 0)},yThL:function(t,e,o){"use strict";o.r(e);var r=o("jf9D");customElements.define("sp-icon-cross500",r.IconCross500)},yZjE:function(t,e,o){"use strict";o.r(e),o.d(e,"Chevron100Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`},zJ5V:function(t,e,o){"use strict";o.r(e),o.d(e,"Cross200Icon",(function(){return i}));var r=o("uiJ8");o.d(e,"setCustomTemplateLiteralTag",(function(){return r.setCustomTemplateLiteralTag}));const i=()=>r.tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`},zKLX:function(t,e,o){"use strict";o.r(e),o.d(e,"Focusable",(function(){return c}));var r=o("TToO"),i=o("Gsci"),s=o("NPpS"),a=o("j/Se");class c extends(Object(a.FocusVisiblePolyfillMixin)(i.SpectrumElement)){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const t=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(t)?-1:t}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex)this.manipulatingTabindex=!1;else if(this.focusElement!==this){if(-1===t?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),-1===t||this.disabled)return this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),void(-1!==t&&this.manageFocusElementTabindex(t));this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}else if(t!==this.tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.setAttribute("tabindex",e)}}onPointerdownManagementOfTabIndex(){-1===this.tabIndex&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,null===t?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){!this.disabled&&this.focusElement&&(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")&&"-1"===this.getAttribute("tabindex")||this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const o=()=>this.focusElement!==this&&void 0!==this.focusElement.disabled;t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,o()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,o()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.manageAutoFocus()})})}}Object(r.__decorate)([Object(s.property)({type:Boolean,reflect:!0})],c.prototype,"disabled",void 0),Object(r.__decorate)([Object(s.property)({type:Boolean})],c.prototype,"autofocus",void 0),Object(r.__decorate)([Object(s.property)({type:Number})],c.prototype,"tabIndex",null)},zKbv:function(t,e,o){"use strict";o.r(e);const r=o("P/Yy").css`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}:host{border-color:transparent;border-width:0;color:inherit;position:relative}:host{--spectrum-closebutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-closebutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-closebutton-focus-ring-color:var(
--spectrum-alias-focus-ring-color,var(--spectrum-alias-focus-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:calc(var(--spectrum-CloseButton-size) + var(--spectrum-closebutton-focus-ring-gap));bottom:0;content:"";left:0;margin:calc(var(--spectrum-closebutton-focus-ring-gap)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-closebutton-focus-ring-size) var(--spectrum-closebutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-closebutton-focus-ring-size) var(--spectrum-closebutton-focus-ring-color)}:host([variant=white]){--spectrum-closebutton-focus-ring-color:var(
--spectrum-global-color-static-white,#fff
)}:host([variant=black]){--spectrum-closebutton-focus-ring-color:var(
--spectrum-global-color-static-black,#000
)}:host{align-items:center;border-radius:var(--spectrum-CloseButton-size);display:inline-flex;flex-direction:row;justify-content:center;padding:0}:host([size=s]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-300);border-radius:var(
--spectrum-global-dimension-size-300
);height:var(--spectrum-global-dimension-size-300);width:var(--spectrum-global-dimension-size-300)}:host([size=m]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-400);border-radius:var(
--spectrum-global-dimension-size-400
);height:var(--spectrum-global-dimension-size-400);width:var(--spectrum-global-dimension-size-400)}:host([size=l]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-500);border-radius:var(
--spectrum-global-dimension-size-500
);height:var(--spectrum-global-dimension-size-500);width:var(--spectrum-global-dimension-size-500)}:host([size=xl]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-600);border-radius:var(
--spectrum-global-dimension-size-600
);height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600)}:host(:disabled){background-color:transparent}:host(:disabled) .icon{color:var(
--spectrum-alias-component-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host(:not(:disabled)){background-color:transparent}:host(:not(:disabled):hover){background-color:var(
--spectrum-global-color-gray-200
)}:host(:not(:disabled):hover) .icon{color:var(
--spectrum-alias-component-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)[active]){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled)[active]) .icon{color:var(
--spectrum-alias-component-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host(:not(:disabled).focus-visible){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled):focus-visible){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled).focus-visible) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled):focus-visible) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)[focused]){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled)[focused]) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)) .icon{color:var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
)}:host(:not(:disabled):focus) .icon{color:var(
--spectrum-alias-component-icon-color-mouse-focus,var(--spectrum-alias-icon-color-down)
)}:host(:not(:disabled).is-focused) .icon{color:var(
--spectrum-alias-component-icon-color-mouse-focus,var(--spectrum-alias-icon-color-down)
)}:host([variant=black]:not(:disabled)){background-color:transparent}:host([variant=black]:not(:disabled):hover){background-color:var(
--spectrum-closebutton-m-black-background-color-hover,rgba(0,0,0,.4)
)}:host([variant=black]:not(:disabled):hover) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-hover,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)[active]){background-color:var(
--spectrum-closebutton-m-black-background-color-down,rgba(0,0,0,.55)
)}:host([variant=black]:not(:disabled)[active]) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-down,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled).focus-visible){background-color:var(
--spectrum-closebutton-m-black-background-color-mouse-focus,transparent
)}:host([variant=black]:not(:disabled):focus-visible){background-color:var(
--spectrum-closebutton-m-black-background-color-mouse-focus,transparent
)}:host([variant=black]:not(:disabled).focus-visible) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-mouse-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled):focus-visible) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-mouse-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)[focused]){background-color:var(
--spectrum-closebutton-m-black-background-color-key-focus,rgba(0,0,0,.4)
)}:host([variant=black]:not(:disabled)[focused]) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-key-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black]:disabled) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-disabled,rgba(0,0,0,.4)
)}:host([variant=white]:not(:disabled)){background-color:transparent}:host([variant=white]:not(:disabled):hover){background-color:var(
--spectrum-closebutton-m-white-background-color-hover,hsla(0,0%,100%,.4)
)}:host([variant=white]:not(:disabled):hover) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)[active]){background-color:var(
--spectrum-closebutton-m-white-background-color-down,hsla(0,0%,100%,.55)
)}:host([variant=white]:not(:disabled)[active]) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled).focus-visible){background-color:var(
--spectrum-closebutton-m-white-background-color-mouse-focus,transparent
)}:host([variant=white]:not(:disabled):focus-visible){background-color:var(
--spectrum-closebutton-m-white-background-color-mouse-focus,transparent
)}:host([variant=white]:not(:disabled).focus-visible) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-mouse-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled):focus-visible) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-mouse-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)[focused]){background-color:var(
--spectrum-closebutton-m-white-background-color-key-focus,hsla(0,0%,100%,.4)
)}:host([variant=white]:not(:disabled)[focused]) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white]:disabled) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-disabled,hsla(0,0%,100%,.4)
)}.icon{margin:0}
`;e.default=r},zlO1:function(t,e,o){!function(){"use strict";function t(t){var e=!0,o=!1,r=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function a(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function c(t){e=!1}function n(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(s(t.activeElement)&&a(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",c,!0),document.addEventListener("pointerdown",c,!0),document.addEventListener("touchstart",c,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(o&&(e=!0),n())}),!0),n(),t.addEventListener("focus",(function(t){var o,r,c;s(t.target)&&(e||(o=t.target,r=o.type,"INPUT"===(c=o.tagName)&&i[r]&&!o.readOnly||"TEXTAREA"===c&&!o.readOnly||o.isContentEditable))&&a(t.target)}),!0),t.addEventListener("blur",(function(t){var e;s(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(r),r=window.setTimeout((function(){o=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)}()}});
