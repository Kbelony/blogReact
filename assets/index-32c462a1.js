function h2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sv={exports:{}},Wl={},ov={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),d2=Symbol.for("react.portal"),p2=Symbol.for("react.fragment"),m2=Symbol.for("react.strict_mode"),g2=Symbol.for("react.profiler"),y2=Symbol.for("react.provider"),v2=Symbol.for("react.context"),_2=Symbol.for("react.forward_ref"),w2=Symbol.for("react.suspense"),E2=Symbol.for("react.memo"),T2=Symbol.for("react.lazy"),em=Symbol.iterator;function I2(e){return e===null||typeof e!="object"?null:(e=em&&e[em]||e["@@iterator"],typeof e=="function"?e:null)}var av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lv=Object.assign,uv={};function ji(e,t,n){this.props=e,this.context=t,this.refs=uv,this.updater=n||av}ji.prototype.isReactComponent={};ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cv(){}cv.prototype=ji.prototype;function Mh(e,t,n){this.props=e,this.context=t,this.refs=uv,this.updater=n||av}var Fh=Mh.prototype=new cv;Fh.constructor=Mh;lv(Fh,ji.prototype);Fh.isPureReactComponent=!0;var tm=Array.isArray,fv=Object.prototype.hasOwnProperty,$h={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function dv(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)fv.call(t,r)&&!hv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:To,type:e,key:s,ref:o,props:i,_owner:$h.current}}function S2(e,t){return{$$typeof:To,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===To}function A2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nm=/\/+/g;function Gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A2(""+e.key):t.toString(36)}function ba(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case To:case d2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gu(o,0):r,tm(i)?(n="",e!=null&&(n=e.replace(nm,"$&/")+"/"),ba(i,t,n,"",function(u){return u})):i!=null&&(jh(i)&&(i=S2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",tm(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Gu(s,a);o+=ba(s,t,n,l,i)}else if(l=I2(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Gu(s,a++),o+=ba(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(e,t,n){if(e==null)return e;var r=[],i=0;return ba(e,r,"","",function(s){return t.call(n,s,i++)}),r}function k2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},Na={transition:null},C2={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Na,ReactCurrentOwner:$h};K.Children={map:Yo,forEach:function(e,t,n){Yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yo(e,function(){t++}),t},toArray:function(e){return Yo(e,function(t){return t})||[]},only:function(e){if(!jh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=ji;K.Fragment=p2;K.Profiler=g2;K.PureComponent=Mh;K.StrictMode=m2;K.Suspense=w2;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C2;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lv({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$h.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)fv.call(t,l)&&!hv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:To,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:v2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:y2,_context:e},e.Consumer=e};K.createElement=dv;K.createFactory=function(e){var t=dv.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:_2,render:e}};K.isValidElement=jh;K.lazy=function(e){return{$$typeof:T2,_payload:{_status:-1,_result:e},_init:k2}};K.memo=function(e,t){return{$$typeof:E2,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return tt.current.useCallback(e,t)};K.useContext=function(e){return tt.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};K.useEffect=function(e,t){return tt.current.useEffect(e,t)};K.useId=function(){return tt.current.useId()};K.useImperativeHandle=function(e,t,n){return tt.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return tt.current.useMemo(e,t)};K.useReducer=function(e,t,n){return tt.current.useReducer(e,t,n)};K.useRef=function(e){return tt.current.useRef(e)};K.useState=function(e){return tt.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return tt.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return tt.current.useTransition()};K.version="18.2.0";ov.exports=K;var k=ov.exports;const ql=iv(k),x2=h2({__proto__:null,default:ql},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P2=k,R2=Symbol.for("react.element"),b2=Symbol.for("react.fragment"),N2=Object.prototype.hasOwnProperty,D2=P2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V2={key:!0,ref:!0,__self:!0,__source:!0};function pv(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)N2.call(t,r)&&!V2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:R2,type:e,key:s,ref:o,props:i,_owner:D2.current}}Wl.Fragment=b2;Wl.jsx=pv;Wl.jsxs=pv;sv.exports=Wl;var y=sv.exports,Gc={},mv={exports:{}},gt={},gv={exports:{}},yv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var H=N.length;N.push(B);e:for(;0<H;){var ye=H-1>>>1,xe=N[ye];if(0<i(xe,B))N[ye]=B,N[H]=xe,H=ye;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],H=N.pop();if(H!==B){N[0]=H;e:for(var ye=0,xe=N.length,Go=xe>>>1;ye<Go;){var lr=2*(ye+1)-1,Ku=N[lr],ur=lr+1,Qo=N[ur];if(0>i(Ku,H))ur<xe&&0>i(Qo,Ku)?(N[ye]=Qo,N[ur]=H,ye=ur):(N[ye]=Ku,N[lr]=H,ye=lr);else if(ur<xe&&0>i(Qo,H))N[ye]=Qo,N[ur]=H,ye=ur;else break e}}return B}function i(N,B){var H=N.sortIndex-B.sortIndex;return H!==0?H:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,m=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function w(N){if(_=!1,g(N),!v)if(n(l)!==null)v=!0,Wu(T);else{var B=n(u);B!==null&&qu(w,B.startTime-N)}}function T(N,B){v=!1,_&&(_=!1,p(D),D=-1),m=!0;var H=h;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||N&&!_t());){var ye=f.callback;if(typeof ye=="function"){f.callback=null,h=f.priorityLevel;var xe=ye(f.expirationTime<=B);B=e.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&r(l),g(B)}else r(l);f=n(l)}if(f!==null)var Go=!0;else{var lr=n(u);lr!==null&&qu(w,lr.startTime-B),Go=!1}return Go}finally{f=null,h=H,m=!1}}var C=!1,P=null,D=-1,G=5,U=-1;function _t(){return!(e.unstable_now()-U<G)}function Ji(){if(P!==null){var N=e.unstable_now();U=N;var B=!0;try{B=P(!0,N)}finally{B?Zi():(C=!1,P=null)}}else C=!1}var Zi;if(typeof d=="function")Zi=function(){d(Ji)};else if(typeof MessageChannel<"u"){var Zp=new MessageChannel,f2=Zp.port2;Zp.port1.onmessage=Ji,Zi=function(){f2.postMessage(null)}}else Zi=function(){E(Ji,0)};function Wu(N){P=N,C||(C=!0,Zi())}function qu(N,B){D=E(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Wu(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var H=h;h=B;try{return N()}finally{h=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=h;h=N;try{return B()}finally{h=H}},e.unstable_scheduleCallback=function(N,B,H){var ye=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ye+H:ye):H=ye,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=H+xe,N={id:c++,callback:B,priorityLevel:N,startTime:H,expirationTime:xe,sortIndex:-1},H>ye?(N.sortIndex=H,t(u,N),n(l)===null&&N===n(u)&&(_?(p(D),D=-1):_=!0,qu(w,H-ye))):(N.sortIndex=xe,t(l,N),v||m||(v=!0,Wu(T))),N},e.unstable_shouldYield=_t,e.unstable_wrapCallback=function(N){var B=h;return function(){var H=h;h=B;try{return N.apply(this,arguments)}finally{h=H}}}})(yv);gv.exports=yv;var O2=gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=k,pt=O2;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,Ms={};function Ur(e,t){Ii(e,t),Ii(e+"Capture",t)}function Ii(e,t){for(Ms[e]=t,e=0;e<t.length;e++)_v.add(t[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,L2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},im={};function M2(e){return Qc.call(im,e)?!0:Qc.call(rm,e)?!1:L2.test(e)?im[e]=!0:(rm[e]=!0,!1)}function F2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $2(e,t,n,r){if(t===null||typeof t>"u"||F2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function zh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uh,zh);$e[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uh,zh);$e[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uh,zh);$e[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bh(e,t,n,r){var i=$e.hasOwnProperty(t)?$e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($2(t,n,i,r)&&(n=null),r||i===null?M2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _n=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),sm=Symbol.iterator;function es(e){return e===null||typeof e!="object"?null:(e=sm&&e[sm]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,Qu;function cs(e){if(Qu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||""}return`
`+Qu+e}var Yu=!1;function Xu(e,t){if(!e||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cs(e):""}function j2(e){switch(e.tag){case 5:return cs(e.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return e=Xu(e.type,!1),e;case 11:return e=Xu(e.type.render,!1),e;case 1:return e=Xu(e.type,!0),e;default:return""}}function Zc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xr:return"Fragment";case Yr:return"Portal";case Yc:return"Profiler";case Hh:return"StrictMode";case Xc:return"Suspense";case Jc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ev:return(e.displayName||"Context")+".Consumer";case wv:return(e._context.displayName||"Context")+".Provider";case Wh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qh:return t=e.displayName||null,t!==null?t:Zc(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return Zc(e(t))}catch{}}return null}function U2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(t);case 8:return t===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Iv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z2(e){var t=Iv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jo(e){e._valueTracker||(e._valueTracker=z2(e))}function Sv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Iv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ef(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function om(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Av(e,t){t=t.checked,t!=null&&Bh(e,"checked",t,!1)}function tf(e,t){Av(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nf(e,t.type,n):t.hasOwnProperty("defaultValue")&&nf(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function am(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nf(e,t,n){(t!=="number"||Qa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fs=Array.isArray;function hi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(fs(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function kv(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function um(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zo,xv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B2=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(e){B2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ws[t]=ws[e]})});function Pv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ws.hasOwnProperty(e)&&ws[e]?(""+t).trim():t+"px"}function Rv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var H2=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(e,t){if(t){if(H2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Kh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uf=null,di=null,pi=null;function cm(e){if(e=Ao(e)){if(typeof uf!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Xl(t),uf(e.stateNode,e.type,t))}}function bv(e){di?pi?pi.push(e):pi=[e]:di=e}function Nv(){if(di){var e=di,t=pi;if(pi=di=null,cm(e),t)for(e=0;e<t.length;e++)cm(t[e])}}function Dv(e,t){return e(t)}function Vv(){}var Ju=!1;function Ov(e,t,n){if(Ju)return e(t,n);Ju=!0;try{return Dv(e,t,n)}finally{Ju=!1,(di!==null||pi!==null)&&(Vv(),Nv())}}function $s(e,t){var n=e.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var cf=!1;if(an)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){cf=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{cf=!1}function W2(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Es=!1,Ya=null,Xa=!1,ff=null,q2={onError:function(e){Es=!0,Ya=e}};function K2(e,t,n,r,i,s,o,a,l){Es=!1,Ya=null,W2.apply(q2,arguments)}function G2(e,t,n,r,i,s,o,a,l){if(K2.apply(this,arguments),Es){if(Es){var u=Ya;Es=!1,Ya=null}else throw Error(S(198));Xa||(Xa=!0,ff=u)}}function zr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fm(e){if(zr(e)!==e)throw Error(S(188))}function Q2(e){var t=e.alternate;if(!t){if(t=zr(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fm(i),e;if(s===r)return fm(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Mv(e){return e=Q2(e),e!==null?Fv(e):null}function Fv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fv(e);if(t!==null)return t;e=e.sibling}return null}var $v=pt.unstable_scheduleCallback,hm=pt.unstable_cancelCallback,Y2=pt.unstable_shouldYield,X2=pt.unstable_requestPaint,ve=pt.unstable_now,J2=pt.unstable_getCurrentPriorityLevel,Gh=pt.unstable_ImmediatePriority,jv=pt.unstable_UserBlockingPriority,Ja=pt.unstable_NormalPriority,Z2=pt.unstable_LowPriority,Uv=pt.unstable_IdlePriority,Kl=null,qt=null;function eT(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:rT,tT=Math.log,nT=Math.LN2;function rT(e){return e>>>=0,e===0?32:31-(tT(e)/nT|0)|0}var ea=64,ta=4194304;function hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=hs(a):(s&=o,s!==0&&(r=hs(s)))}else o=n&~i,o!==0?r=hs(o):s!==0&&(r=hs(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function iT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=iT(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zv(){var e=ea;return ea<<=1,!(ea&4194240)&&(ea=64),e}function Zu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function oT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Qh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function Bv(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hv,Yh,Wv,qv,Kv,df=!1,na=[],Nn=null,Dn=null,Vn=null,js=new Map,Us=new Map,An=[],aT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(t.pointerId)}}function ns(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ao(t),t!==null&&Yh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lT(e,t,n,r,i){switch(t){case"focusin":return Nn=ns(Nn,e,t,n,r,i),!0;case"dragenter":return Dn=ns(Dn,e,t,n,r,i),!0;case"mouseover":return Vn=ns(Vn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return js.set(s,ns(js.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Us.set(s,ns(Us.get(s)||null,e,t,n,r,i)),!0}return!1}function Gv(e){var t=pr(e.target);if(t!==null){var n=zr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lv(n),t!==null){e.blockedOn=t,Kv(e.priority,function(){Wv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Da(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return t=Ao(n),t!==null&&Yh(t),e.blockedOn=n,!1;t.shift()}return!0}function pm(e,t,n){Da(e)&&n.delete(t)}function uT(){df=!1,Nn!==null&&Da(Nn)&&(Nn=null),Dn!==null&&Da(Dn)&&(Dn=null),Vn!==null&&Da(Vn)&&(Vn=null),js.forEach(pm),Us.forEach(pm)}function rs(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,uT)))}function zs(e){function t(i){return rs(i,e)}if(0<na.length){rs(na[0],e);for(var n=1;n<na.length;n++){var r=na[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&rs(Nn,e),Dn!==null&&rs(Dn,e),Vn!==null&&rs(Vn,e),js.forEach(t),Us.forEach(t),n=0;n<An.length;n++)r=An[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)Gv(n),n.blockedOn===null&&An.shift()}var mi=_n.ReactCurrentBatchConfig,el=!0;function cT(e,t,n,r){var i=Z,s=mi.transition;mi.transition=null;try{Z=1,Xh(e,t,n,r)}finally{Z=i,mi.transition=s}}function fT(e,t,n,r){var i=Z,s=mi.transition;mi.transition=null;try{Z=4,Xh(e,t,n,r)}finally{Z=i,mi.transition=s}}function Xh(e,t,n,r){if(el){var i=pf(e,t,n,r);if(i===null)uc(e,t,r,tl,n),dm(e,r);else if(lT(i,e,t,n,r))r.stopPropagation();else if(dm(e,r),t&4&&-1<aT.indexOf(e)){for(;i!==null;){var s=Ao(i);if(s!==null&&Hv(s),s=pf(e,t,n,r),s===null&&uc(e,t,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uc(e,t,r,null,n)}}var tl=null;function pf(e,t,n,r){if(tl=null,e=Kh(r),e=pr(e),e!==null)if(t=zr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tl=e,null}function Qv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J2()){case Gh:return 1;case jv:return 4;case Ja:case Z2:return 16;case Uv:return 536870912;default:return 16}default:return 16}}var Cn=null,Jh=null,Va=null;function Yv(){if(Va)return Va;var e,t=Jh,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Va=i.slice(e,1<r?1-r:void 0)}function Oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ra(){return!0}function mm(){return!1}function yt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ra:mm,this.isPropagationStopped=mm,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),t}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=yt(Ui),So=he({},Ui,{view:0,detail:0}),hT=yt(So),ec,tc,is,Gl=he({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==is&&(is&&e.type==="mousemove"?(ec=e.screenX-is.screenX,tc=e.screenY-is.screenY):tc=ec=0,is=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:tc}}),gm=yt(Gl),dT=he({},Gl,{dataTransfer:0}),pT=yt(dT),mT=he({},So,{relatedTarget:0}),nc=yt(mT),gT=he({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),yT=yt(gT),vT=he({},Ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_T=yt(vT),wT=he({},Ui,{data:0}),ym=yt(wT),ET={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ST(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=IT[e])?!!t[e]:!1}function ed(){return ST}var AT=he({},So,{key:function(e){if(e.key){var t=ET[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?TT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(e){return e.type==="keypress"?Oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kT=yt(AT),CT=he({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=yt(CT),xT=he({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),PT=yt(xT),RT=he({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),bT=yt(RT),NT=he({},Gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=yt(NT),VT=[9,13,27,32],td=an&&"CompositionEvent"in window,Ts=null;an&&"documentMode"in document&&(Ts=document.documentMode);var OT=an&&"TextEvent"in window&&!Ts,Xv=an&&(!td||Ts&&8<Ts&&11>=Ts),_m=String.fromCharCode(32),wm=!1;function Jv(e,t){switch(e){case"keyup":return VT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function LT(e,t){switch(e){case"compositionend":return Zv(t);case"keypress":return t.which!==32?null:(wm=!0,_m);case"textInput":return e=t.data,e===_m&&wm?null:e;default:return null}}function MT(e,t){if(Jr)return e==="compositionend"||!td&&Jv(e,t)?(e=Yv(),Va=Jh=Cn=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xv&&t.locale!=="ko"?null:t.data;default:return null}}var FT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Em(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!FT[e.type]:t==="textarea"}function e0(e,t,n,r){bv(r),t=nl(t,"onChange"),0<t.length&&(n=new Zh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Is=null,Bs=null;function $T(e){f0(e,0)}function Ql(e){var t=ti(e);if(Sv(t))return e}function jT(e,t){if(e==="change")return t}var t0=!1;if(an){var rc;if(an){var ic="oninput"in document;if(!ic){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),ic=typeof Tm.oninput=="function"}rc=ic}else rc=!1;t0=rc&&(!document.documentMode||9<document.documentMode)}function Im(){Is&&(Is.detachEvent("onpropertychange",n0),Bs=Is=null)}function n0(e){if(e.propertyName==="value"&&Ql(Bs)){var t=[];e0(t,Bs,e,Kh(e)),Ov($T,t)}}function UT(e,t,n){e==="focusin"?(Im(),Is=t,Bs=n,Is.attachEvent("onpropertychange",n0)):e==="focusout"&&Im()}function zT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Bs)}function BT(e,t){if(e==="click")return Ql(t)}function HT(e,t){if(e==="input"||e==="change")return Ql(t)}function WT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:WT;function Hs(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qc.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Am(e,t){var n=Sm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function r0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?r0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function i0(){for(var e=window,t=Qa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qa(e.document)}return t}function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qT(e){var t=i0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&r0(n.ownerDocument.documentElement,n)){if(r!==null&&nd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Am(n,s);var o=Am(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var KT=an&&"documentMode"in document&&11>=document.documentMode,Zr=null,mf=null,Ss=null,gf=!1;function km(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||Zr==null||Zr!==Qa(r)||(r=Zr,"selectionStart"in r&&nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&Hs(Ss,r)||(Ss=r,r=nl(mf,"onSelect"),0<r.length&&(t=new Zh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function ia(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ei={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},sc={},s0={};an&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Yl(e){if(sc[e])return sc[e];if(!ei[e])return e;var t=ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in s0)return sc[e]=t[n];return e}var o0=Yl("animationend"),a0=Yl("animationiteration"),l0=Yl("animationstart"),u0=Yl("transitionend"),c0=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){c0.set(e,t),Ur(t,[e])}for(var oc=0;oc<Cm.length;oc++){var ac=Cm[oc],GT=ac.toLowerCase(),QT=ac[0].toUpperCase()+ac.slice(1);tr(GT,"on"+QT)}tr(o0,"onAnimationEnd");tr(a0,"onAnimationIteration");tr(l0,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(u0,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function xm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G2(r,t,void 0,e),e.currentTarget=null}function f0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;xm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;xm(i,a,u),s=l}}}if(Xa)throw e=ff,Xa=!1,ff=null,e}function ne(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(h0(t,e,2,!1),n.add(r))}function lc(e,t,n){var r=0;t&&(r|=4),h0(n,e,r,t)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Ws(e){if(!e[sa]){e[sa]=!0,_v.forEach(function(n){n!=="selectionchange"&&(YT.has(n)||lc(n,!1,e),lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sa]||(t[sa]=!0,lc("selectionchange",!1,t))}}function h0(e,t,n,r){switch(Qv(t)){case 1:var i=cT;break;case 4:i=fT;break;default:i=Xh}n=i.bind(null,t,n,e),i=void 0,!cf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uc(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ov(function(){var u=s,c=Kh(n),f=[];e:{var h=c0.get(e);if(h!==void 0){var m=Zh,v=e;switch(e){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":m=kT;break;case"focusin":v="focus",m=nc;break;case"focusout":v="blur",m=nc;break;case"beforeblur":case"afterblur":m=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=PT;break;case o0:case a0:case l0:m=yT;break;case u0:m=bT;break;case"scroll":m=hT;break;case"wheel":m=DT;break;case"copy":case"cut":case"paste":m=_T;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vm}var _=(t&4)!==0,E=!_&&e==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var d=u,g;d!==null;){g=d;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=$s(d,p),w!=null&&_.push(qs(d,w,g)))),E)break;d=d.return}0<_.length&&(h=new m(h,v,null,n,c),f.push({event:h,listeners:_}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==lf&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[ln]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?pr(v):null,v!==null&&(E=zr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=gm,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(_=vm,w="onPointerLeave",p="onPointerEnter",d="pointer"),E=m==null?h:ti(m),g=v==null?h:ti(v),h=new _(w,d+"leave",m,n,c),h.target=E,h.relatedTarget=g,w=null,pr(c)===u&&(_=new _(p,d+"enter",v,n,c),_.target=g,_.relatedTarget=E,w=_),E=w,m&&v)t:{for(_=m,p=v,d=0,g=_;g;g=qr(g))d++;for(g=0,w=p;w;w=qr(w))g++;for(;0<d-g;)_=qr(_),d--;for(;0<g-d;)p=qr(p),g--;for(;d--;){if(_===p||p!==null&&_===p.alternate)break t;_=qr(_),p=qr(p)}_=null}else _=null;m!==null&&Pm(f,h,m,_,!1),v!==null&&E!==null&&Pm(f,E,v,_,!0)}}e:{if(h=u?ti(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=jT;else if(Em(h))if(t0)T=HT;else{T=zT;var C=UT}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=BT);if(T&&(T=T(e,u))){e0(f,T,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&nf(h,"number",h.value)}switch(C=u?ti(u):window,e){case"focusin":(Em(C)||C.contentEditable==="true")&&(Zr=C,mf=u,Ss=null);break;case"focusout":Ss=mf=Zr=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,km(f,n,c);break;case"selectionchange":if(KT)break;case"keydown":case"keyup":km(f,n,c)}var P;if(td)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Jr?Jv(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Xv&&n.locale!=="ko"&&(Jr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Jr&&(P=Yv()):(Cn=c,Jh="value"in Cn?Cn.value:Cn.textContent,Jr=!0)),C=nl(u,D),0<C.length&&(D=new ym(D,e,null,n,c),f.push({event:D,listeners:C}),P?D.data=P:(P=Zv(n),P!==null&&(D.data=P)))),(P=OT?LT(e,n):MT(e,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(c=new ym("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}f0(f,t)})}function qs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$s(e,n),s!=null&&r.unshift(qs(e,s,i)),s=$s(e,t),s!=null&&r.push(qs(e,s,i))),e=e.return}return r}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pm(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$s(n,s),l!=null&&o.unshift(qs(n,l,a))):i||(l=$s(n,s),l!=null&&o.push(qs(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var XT=/\r\n?/g,JT=/\u0000|\uFFFD/g;function Rm(e){return(typeof e=="string"?e:""+e).replace(XT,`
`).replace(JT,"")}function oa(e,t,n){if(t=Rm(t),Rm(e)!==t&&n)throw Error(S(425))}function rl(){}var yf=null,vf=null;function _f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,ZT=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,eI=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(tI)}:wf;function tI(e){setTimeout(function(){throw e})}function cc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Ut="__reactFiber$"+zi,Ks="__reactProps$"+zi,ln="__reactContainer$"+zi,Ef="__reactEvents$"+zi,nI="__reactListeners$"+zi,rI="__reactHandles$"+zi;function pr(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nm(e);e!==null;){if(n=e[Ut])return n;e=Nm(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[Ut]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ti(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Xl(e){return e[Ks]||null}var Tf=[],ni=-1;function nr(e){return{current:e}}function se(e){0>ni||(e.current=Tf[ni],Tf[ni]=null,ni--)}function te(e,t){ni++,Tf[ni]=e.current,e.current=t}var qn={},Ye=nr(qn),st=nr(!1),kr=qn;function Si(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function il(){se(st),se(Ye)}function Dm(e,t,n){if(Ye.current!==qn)throw Error(S(168));te(Ye,t),te(st,n)}function d0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,U2(e)||"Unknown",i));return he({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,kr=Ye.current,te(Ye,e),te(st,st.current),!0}function Vm(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=d0(e,t,kr),r.__reactInternalMemoizedMergedChildContext=e,se(st),se(Ye),te(Ye,e)):se(st),te(st,n)}var en=null,Jl=!1,fc=!1;function p0(e){en===null?en=[e]:en.push(e)}function iI(e){Jl=!0,p0(e)}function rr(){if(!fc&&en!==null){fc=!0;var e=0,t=Z;try{var n=en;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,Jl=!1}catch(i){throw en!==null&&(en=en.slice(e+1)),$v(Gh,rr),i}finally{Z=t,fc=!1}}return null}var ri=[],ii=0,ol=null,al=0,wt=[],Et=0,Cr=null,tn=1,nn="";function cr(e,t){ri[ii++]=al,ri[ii++]=ol,ol=e,al=t}function m0(e,t,n){wt[Et++]=tn,wt[Et++]=nn,wt[Et++]=Cr,Cr=e;var r=tn;e=nn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tn=1<<32-Ot(t)+i|n<<i|r,nn=s+e}else tn=1<<s|n<<i|r,nn=e}function rd(e){e.return!==null&&(cr(e,1),m0(e,1,0))}function id(e){for(;e===ol;)ol=ri[--ii],ri[ii]=null,al=ri[--ii],ri[ii]=null;for(;e===Cr;)Cr=wt[--Et],wt[Et]=null,nn=wt[--Et],wt[Et]=null,tn=wt[--Et],wt[Et]=null}var ht=null,ct=null,le=!1,Nt=null;function g0(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Om(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ct=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cr!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ct=null,!0):!1;default:return!1}}function If(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sf(e){if(le){var t=ct;if(t){var n=t;if(!Om(e,t)){if(If(e))throw Error(S(418));t=On(n.nextSibling);var r=ht;t&&Om(e,t)?g0(r,n):(e.flags=e.flags&-4097|2,le=!1,ht=e)}}else{if(If(e))throw Error(S(418));e.flags=e.flags&-4097|2,le=!1,ht=e}}}function Lm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function aa(e){if(e!==ht)return!1;if(!le)return Lm(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_f(e.type,e.memoizedProps)),t&&(t=ct)){if(If(e))throw y0(),Error(S(418));for(;t;)g0(e,t),t=On(t.nextSibling)}if(Lm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ht?On(e.stateNode.nextSibling):null;return!0}function y0(){for(var e=ct;e;)e=On(e.nextSibling)}function Ai(){ct=ht=null,le=!1}function sd(e){Nt===null?Nt=[e]:Nt.push(e)}var sI=_n.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ll=nr(null),ul=null,si=null,od=null;function ad(){od=si=ul=null}function ld(e){var t=ll.current;se(ll),e._currentValue=t}function Af(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gi(e,t){ul=e,od=si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(od!==e)if(e={context:e,memoizedValue:t,next:null},si===null){if(ul===null)throw Error(S(308));si=e,ul.dependencies={lanes:0,firstContext:e}}else si=si.next=e;return t}var mr=null;function ud(e){mr===null?mr=[e]:mr.push(e)}function v0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ud(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Sn=!1;function cd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,ud(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function La(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qh(e,n)}}function Mm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cl(e,t,n,r){var i=e.updateQueue;Sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,_=a;switch(h=t,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(m,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(m,f,h):v,h==null)break e;f=he({},f,h);break e;case 2:Sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Pr|=o,e.lanes=o,e.memoizedState=f}}function Fm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var w0=new vv.Component().refs;function kf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zl={isMounted:function(e){return(e=e._reactInternals)?zr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),i=Fn(e),s=sn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ln(e,s,i),t!==null&&(Lt(t,e,i,r),La(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),i=Fn(e),s=sn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ln(e,s,i),t!==null&&(Lt(t,e,i,r),La(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=Fn(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ln(e,i,r),t!==null&&(Lt(t,e,r,n),La(t,e,r))}};function $m(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function E0(e,t,n){var r=!1,i=qn,s=t.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ot(t)?kr:Ye.current,r=t.contextTypes,s=(r=r!=null)?Si(e,i):qn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function jm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zl.enqueueReplaceState(t,t.state,null)}function Cf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=w0,cd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ot(t)?kr:Ye.current,i.context=Si(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(kf(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zl.enqueueReplaceState(i,i.state,null),cl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ss(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===w0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function la(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Um(e){var t=e._init;return t(e._payload)}function T0(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=$n(p,d),p.index=0,p.sibling=null,p}function s(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,w){return d===null||d.tag!==6?(d=vc(g,p.mode,w),d.return=p,d):(d=i(d,g),d.return=p,d)}function l(p,d,g,w){var T=g.type;return T===Xr?c(p,d,g.props.children,w,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===In&&Um(T)===d.type)?(w=i(d,g.props),w.ref=ss(p,d,g),w.return=p,w):(w=za(g.type,g.key,g.props,null,p.mode,w),w.ref=ss(p,d,g),w.return=p,w)}function u(p,d,g,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=_c(g,p.mode,w),d.return=p,d):(d=i(d,g.children||[]),d.return=p,d)}function c(p,d,g,w,T){return d===null||d.tag!==7?(d=Sr(g,p.mode,w,T),d.return=p,d):(d=i(d,g),d.return=p,d)}function f(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=vc(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xo:return g=za(d.type,d.key,d.props,null,p.mode,g),g.ref=ss(p,null,d),g.return=p,g;case Yr:return d=_c(d,p.mode,g),d.return=p,d;case In:var w=d._init;return f(p,w(d._payload),g)}if(fs(d)||es(d))return d=Sr(d,p.mode,g,null),d.return=p,d;la(p,d)}return null}function h(p,d,g,w){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(p,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:return g.key===T?l(p,d,g,w):null;case Yr:return g.key===T?u(p,d,g,w):null;case In:return T=g._init,h(p,d,T(g._payload),w)}if(fs(g)||es(g))return T!==null?null:c(p,d,g,w,null);la(p,g)}return null}function m(p,d,g,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(d,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Xo:return p=p.get(w.key===null?g:w.key)||null,l(d,p,w,T);case Yr:return p=p.get(w.key===null?g:w.key)||null,u(d,p,w,T);case In:var C=w._init;return m(p,d,g,C(w._payload),T)}if(fs(w)||es(w))return p=p.get(g)||null,c(d,p,w,T,null);la(d,w)}return null}function v(p,d,g,w){for(var T=null,C=null,P=d,D=d=0,G=null;P!==null&&D<g.length;D++){P.index>D?(G=P,P=null):G=P.sibling;var U=h(p,P,g[D],w);if(U===null){P===null&&(P=G);break}e&&P&&U.alternate===null&&t(p,P),d=s(U,d,D),C===null?T=U:C.sibling=U,C=U,P=G}if(D===g.length)return n(p,P),le&&cr(p,D),T;if(P===null){for(;D<g.length;D++)P=f(p,g[D],w),P!==null&&(d=s(P,d,D),C===null?T=P:C.sibling=P,C=P);return le&&cr(p,D),T}for(P=r(p,P);D<g.length;D++)G=m(P,p,D,g[D],w),G!==null&&(e&&G.alternate!==null&&P.delete(G.key===null?D:G.key),d=s(G,d,D),C===null?T=G:C.sibling=G,C=G);return e&&P.forEach(function(_t){return t(p,_t)}),le&&cr(p,D),T}function _(p,d,g,w){var T=es(g);if(typeof T!="function")throw Error(S(150));if(g=T.call(g),g==null)throw Error(S(151));for(var C=T=null,P=d,D=d=0,G=null,U=g.next();P!==null&&!U.done;D++,U=g.next()){P.index>D?(G=P,P=null):G=P.sibling;var _t=h(p,P,U.value,w);if(_t===null){P===null&&(P=G);break}e&&P&&_t.alternate===null&&t(p,P),d=s(_t,d,D),C===null?T=_t:C.sibling=_t,C=_t,P=G}if(U.done)return n(p,P),le&&cr(p,D),T;if(P===null){for(;!U.done;D++,U=g.next())U=f(p,U.value,w),U!==null&&(d=s(U,d,D),C===null?T=U:C.sibling=U,C=U);return le&&cr(p,D),T}for(P=r(p,P);!U.done;D++,U=g.next())U=m(P,p,D,U.value,w),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?D:U.key),d=s(U,d,D),C===null?T=U:C.sibling=U,C=U);return e&&P.forEach(function(Ji){return t(p,Ji)}),le&&cr(p,D),T}function E(p,d,g,w){if(typeof g=="object"&&g!==null&&g.type===Xr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:e:{for(var T=g.key,C=d;C!==null;){if(C.key===T){if(T=g.type,T===Xr){if(C.tag===7){n(p,C.sibling),d=i(C,g.props.children),d.return=p,p=d;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===In&&Um(T)===C.type){n(p,C.sibling),d=i(C,g.props),d.ref=ss(p,C,g),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}g.type===Xr?(d=Sr(g.props.children,p.mode,w,g.key),d.return=p,p=d):(w=za(g.type,g.key,g.props,null,p.mode,w),w.ref=ss(p,d,g),w.return=p,p=w)}return o(p);case Yr:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=i(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=_c(g,p.mode,w),d.return=p,p=d}return o(p);case In:return C=g._init,E(p,d,C(g._payload),w)}if(fs(g))return v(p,d,g,w);if(es(g))return _(p,d,g,w);la(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,g),d.return=p,p=d):(n(p,d),d=vc(g,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return E}var ki=T0(!0),I0=T0(!1),ko={},Kt=nr(ko),Gs=nr(ko),Qs=nr(ko);function gr(e){if(e===ko)throw Error(S(174));return e}function fd(e,t){switch(te(Qs,t),te(Gs,e),te(Kt,ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sf(t,e)}se(Kt),te(Kt,t)}function Ci(){se(Kt),se(Gs),se(Qs)}function S0(e){gr(Qs.current);var t=gr(Kt.current),n=sf(t,e.type);t!==n&&(te(Gs,e),te(Kt,n))}function hd(e){Gs.current===e&&(se(Kt),se(Gs))}var ce=nr(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hc=[];function dd(){for(var e=0;e<hc.length;e++)hc[e]._workInProgressVersionPrimary=null;hc.length=0}var Ma=_n.ReactCurrentDispatcher,dc=_n.ReactCurrentBatchConfig,xr=0,fe=null,Ie=null,Re=null,hl=!1,As=!1,Ys=0,oI=0;function je(){throw Error(S(321))}function pd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function md(e,t,n,r,i,s){if(xr=s,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ma.current=e===null||e.memoizedState===null?cI:fI,e=n(r,i),As){s=0;do{if(As=!1,Ys=0,25<=s)throw Error(S(301));s+=1,Re=Ie=null,t.updateQueue=null,Ma.current=hI,e=n(r,i)}while(As)}if(Ma.current=dl,t=Ie!==null&&Ie.next!==null,xr=0,Re=Ie=fe=null,hl=!1,t)throw Error(S(300));return e}function gd(){var e=Ys!==0;return Ys=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?fe.memoizedState=Re=e:Re=Re.next=e,Re}function xt(){if(Ie===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Re===null?fe.memoizedState:Re.next;if(t!==null)Re=t,Ie=e;else{if(e===null)throw Error(S(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Re===null?fe.memoizedState=Re=e:Re=Re.next=e}return Re}function Xs(e,t){return typeof t=="function"?t(e):t}function pc(e){var t=xt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,fe.lanes|=c,Pr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,fe.lanes|=s,Pr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mc(e){var t=xt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Mt(s,t.memoizedState)||(it=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function A0(){}function k0(e,t){var n=fe,r=xt(),i=t(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,yd(P0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Js(9,x0.bind(null,n,r,i,t),void 0,null),be===null)throw Error(S(349));xr&30||C0(n,t,i)}return i}function C0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function x0(e,t,n,r){t.value=n,t.getSnapshot=r,R0(t)&&b0(e)}function P0(e,t,n){return n(function(){R0(t)&&b0(e)})}function R0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function b0(e){var t=un(e,1);t!==null&&Lt(t,e,1,-1)}function zm(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=uI.bind(null,fe,e),[t.memoizedState,e]}function Js(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function N0(){return xt().memoizedState}function Fa(e,t,n,r){var i=jt();fe.flags|=e,i.memoizedState=Js(1|t,n,void 0,r===void 0?null:r)}function eu(e,t,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&pd(r,o.deps)){i.memoizedState=Js(t,n,s,r);return}}fe.flags|=e,i.memoizedState=Js(1|t,n,s,r)}function Bm(e,t){return Fa(8390656,8,e,t)}function yd(e,t){return eu(2048,8,e,t)}function D0(e,t){return eu(4,2,e,t)}function V0(e,t){return eu(4,4,e,t)}function O0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L0(e,t,n){return n=n!=null?n.concat([e]):null,eu(4,4,O0.bind(null,t,e),n)}function vd(){}function M0(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function F0(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $0(e,t,n){return xr&21?(Mt(n,t)||(n=zv(),fe.lanes|=n,Pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function aI(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=dc.transition;dc.transition={};try{e(!1),t()}finally{Z=n,dc.transition=r}}function j0(){return xt().memoizedState}function lI(e,t,n){var r=Fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},U0(e))z0(t,n);else if(n=v0(e,t,n,r),n!==null){var i=et();Lt(n,e,r,i),B0(n,t,r)}}function uI(e,t,n){var r=Fn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(U0(e))z0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,o)){var l=t.interleaved;l===null?(i.next=i,ud(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=v0(e,t,i,r),n!==null&&(i=et(),Lt(n,e,r,i),B0(n,t,r))}}function U0(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function z0(e,t){As=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function B0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qh(e,n)}}var dl={readContext:Ct,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},cI={readContext:Ct,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Bm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fa(4194308,4,O0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fa(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lI.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:zm,useDebugValue:vd,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=zm(!1),t=e[0];return e=aI.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=jt();if(le){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),be===null)throw Error(S(349));xr&30||C0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Bm(P0.bind(null,r,s,e),[e]),r.flags|=2048,Js(9,x0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=jt(),t=be.identifierPrefix;if(le){var n=nn,r=tn;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ys++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fI={readContext:Ct,useCallback:M0,useContext:Ct,useEffect:yd,useImperativeHandle:L0,useInsertionEffect:D0,useLayoutEffect:V0,useMemo:F0,useReducer:pc,useRef:N0,useState:function(){return pc(Xs)},useDebugValue:vd,useDeferredValue:function(e){var t=xt();return $0(t,Ie.memoizedState,e)},useTransition:function(){var e=pc(Xs)[0],t=xt().memoizedState;return[e,t]},useMutableSource:A0,useSyncExternalStore:k0,useId:j0,unstable_isNewReconciler:!1},hI={readContext:Ct,useCallback:M0,useContext:Ct,useEffect:yd,useImperativeHandle:L0,useInsertionEffect:D0,useLayoutEffect:V0,useMemo:F0,useReducer:mc,useRef:N0,useState:function(){return mc(Xs)},useDebugValue:vd,useDeferredValue:function(e){var t=xt();return Ie===null?t.memoizedState=e:$0(t,Ie.memoizedState,e)},useTransition:function(){var e=mc(Xs)[0],t=xt().memoizedState;return[e,t]},useMutableSource:A0,useSyncExternalStore:k0,useId:j0,unstable_isNewReconciler:!1};function xi(e,t){try{var n="",r=t;do n+=j2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function gc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dI=typeof WeakMap=="function"?WeakMap:Map;function H0(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,Ff=r),xf(e,t)},n}function W0(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xf(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Hm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=CI.bind(null,e,t,n),t.then(e,e))}function Wm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e)}var pI=_n.ReactCurrentOwner,it=!1;function Je(e,t,n,r){t.child=e===null?I0(t,null,n,r):ki(t,e.child,n,r)}function Km(e,t,n,r,i){n=n.render;var s=t.ref;return gi(t,i),r=md(e,t,n,r,s,i),n=gd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(le&&n&&rd(t),t.flags|=1,Je(e,t,r,i),t.child)}function Gm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,q0(e,t,s,r,i)):(e=za(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=$n(s,r),e.ref=t.ref,e.return=t,t.child=e}function q0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Hs(s,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,cn(e,t,i)}return Pf(e,t,n,r,i)}function K0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(ai,ut),ut|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(ai,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(ai,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,te(ai,ut),ut|=r;return Je(e,t,i,n),t.child}function G0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,n,r,i){var s=ot(n)?kr:Ye.current;return s=Si(t,s),gi(t,i),n=md(e,t,n,r,s,i),r=gd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(le&&r&&rd(t),t.flags|=1,Je(e,t,n,i),t.child)}function Qm(e,t,n,r,i){if(ot(n)){var s=!0;sl(t)}else s=!1;if(gi(t,i),t.stateNode===null)$a(e,t),E0(t,n,r),Cf(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=ot(n)?kr:Ye.current,u=Si(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&jm(t,o,r,u),Sn=!1;var h=t.memoizedState;o.state=h,cl(t,r,o,i),l=t.memoizedState,a!==r||h!==l||st.current||Sn?(typeof c=="function"&&(kf(t,n,c,r),l=t.memoizedState),(a=Sn||$m(t,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,_0(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rt(t.type,a),o.props=u,f=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=ot(n)?kr:Ye.current,l=Si(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&jm(t,o,r,l),Sn=!1,h=t.memoizedState,o.state=h,cl(t,r,o,i);var v=t.memoizedState;a!==f||h!==v||st.current||Sn?(typeof m=="function"&&(kf(t,n,m,r),v=t.memoizedState),(u=Sn||$m(t,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Rf(e,t,n,r,s,i)}function Rf(e,t,n,r,i,s){G0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Vm(t,n,!1),cn(e,t,s);r=t.stateNode,pI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ki(t,e.child,null,s),t.child=ki(t,null,a,s)):Je(e,t,a,s),t.memoizedState=r.state,i&&Vm(t,n,!0),t.child}function Q0(e){var t=e.stateNode;t.pendingContext?Dm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dm(e,t.context,!1),fd(e,t.containerInfo)}function Ym(e,t,n,r,i){return Ai(),sd(i),t.flags|=256,Je(e,t,n,r),t.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Nf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Y0(e,t,n){var r=t.pendingProps,i=ce.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ce,i&1),e===null)return Sf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),e=Sr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Nf(n),t.memoizedState=bf,e):_d(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=$n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=bf,r}return s=e.child,e=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _d(e,t){return t=ru({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ua(e,t,n,r){return r!==null&&sd(r),ki(t,e.child,null,n),e=_d(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=gc(Error(S(422))),ua(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ki(t,e.child,null,o),t.child.memoizedState=Nf(o),t.memoizedState=bf,s);if(!(t.mode&1))return ua(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=gc(s,r,void 0),ua(e,t,o,r)}if(a=(o&e.childLanes)!==0,it||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,un(e,i),Lt(r,e,i,-1))}return Ad(),r=gc(Error(S(421))),ua(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xI.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ct=On(i.nextSibling),ht=t,le=!0,Nt=null,e!==null&&(wt[Et++]=tn,wt[Et++]=nn,wt[Et++]=Cr,tn=e.id,nn=e.overflow,Cr=t),t=_d(t,r.children),t.flags|=4096,t)}function Xm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Af(e.return,t,n)}function yc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Je(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,n,t);else if(e.tag===19)Xm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yc(t,!0,n,null,s);break;case"together":yc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gI(e,t,n){switch(t.tag){case 3:Q0(t),Ai();break;case 5:S0(t);break;case 1:ot(t.type)&&sl(t);break;case 4:fd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Y0(e,t,n):(te(ce,ce.current&1),e=cn(e,t,n),e!==null?e.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return X0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,K0(e,t,n)}return cn(e,t,n)}var J0,Df,Z0,e1;J0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};Z0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(Kt.current);var s=null;switch(n){case"input":i=ef(e,i),r=ef(e,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=rf(e,i),r=rf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}of(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ms.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};e1=function(e,t,n,r){n!==r&&(t.flags|=4)};function os(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yI(e,t,n){var r=t.pendingProps;switch(id(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return ot(t.type)&&il(),Ue(t),null;case 3:return r=t.stateNode,Ci(),se(st),se(Ye),dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(Uf(Nt),Nt=null))),Df(e,t),Ue(t),null;case 5:hd(t);var i=gr(Qs.current);if(n=t.type,e!==null&&t.stateNode!=null)Z0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ue(t),null}if(e=gr(Kt.current),aa(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ut]=t,r[Ks]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<ds.length;i++)ne(ds[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":om(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":lm(r,s),ne("invalid",r)}of(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&oa(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oa(r.textContent,a,e),i=["children",""+a]):Ms.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Jo(r),am(r,s,!0);break;case"textarea":Jo(r),um(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ut]=t,e[Ks]=r,J0(e,t,!1,!1),t.stateNode=e;e:{switch(o=af(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<ds.length;i++)ne(ds[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":om(e,r),i=ef(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),ne("invalid",e);break;case"textarea":lm(e,r),i=rf(e,r),ne("invalid",e);break;default:i=r}of(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Rv(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xv(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fs(e,l):typeof l=="number"&&Fs(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",e):l!=null&&Bh(e,s,l,o))}switch(n){case"input":Jo(e),am(e,r,!1);break;case"textarea":Jo(e),um(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?hi(e,!!r.multiple,s,!1):r.defaultValue!=null&&hi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)e1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=gr(Qs.current),gr(Kt.current),aa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(s=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:oa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return Ue(t),null;case 13:if(se(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&ct!==null&&t.mode&1&&!(t.flags&128))y0(),Ai(),t.flags|=98560,s=!1;else if(s=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Ut]=t}else Ai(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),s=!1}else Nt!==null&&(Uf(Nt),Nt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Ae===0&&(Ae=3):Ad())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Ci(),Df(e,t),e===null&&Ws(t.stateNode.containerInfo),Ue(t),null;case 10:return ld(t.type._context),Ue(t),null;case 17:return ot(t.type)&&il(),Ue(t),null;case 19:if(se(ce),s=t.memoizedState,s===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)os(s,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fl(e),o!==null){for(t.flags|=128,os(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),t.child}e=e.sibling}s.tail!==null&&ve()>Pi&&(t.flags|=128,r=!0,os(s,!1),t.lanes=4194304)}else{if(!r)if(e=fl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return Ue(t),null}else 2*ve()-s.renderingStartTime>Pi&&n!==1073741824&&(t.flags|=128,r=!0,os(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Sd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function vI(e,t){switch(id(t),t.tag){case 1:return ot(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),se(st),se(Ye),dd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hd(t),null;case 13:if(se(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ce),null;case 4:return Ci(),null;case 10:return ld(t.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var ca=!1,He=!1,_I=typeof WeakSet=="function"?WeakSet:Set,b=null;function oi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Vf(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Jm=!1;function wI(e,t){if(yf=el,e=i0(),nd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:e,selectionRange:n},el=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Rt(t.type,_),E);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return v=Jm,Jm=!1,v}function ks(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vf(t,n,s)}i=i.next}while(i!==r)}}function tu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Of(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function t1(e){var t=e.alternate;t!==null&&(e.alternate=null,t1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[Ks],delete t[Ef],delete t[nI],delete t[rI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function n1(e){return e.tag===5||e.tag===3||e.tag===4}function Zm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(Lf(e,t,n),e=e.sibling;e!==null;)Lf(e,t,n),e=e.sibling}function Mf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mf(e,t,n),e=e.sibling;e!==null;)Mf(e,t,n),e=e.sibling}var Ve=null,bt=!1;function En(e,t,n){for(n=n.child;n!==null;)r1(e,t,n),n=n.sibling}function r1(e,t,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:He||oi(n,t);case 6:var r=Ve,i=bt;Ve=null,En(e,t,n),Ve=r,bt=i,Ve!==null&&(bt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(bt?(e=Ve,n=n.stateNode,e.nodeType===8?cc(e.parentNode,n):e.nodeType===1&&cc(e,n),zs(e)):cc(Ve,n.stateNode));break;case 4:r=Ve,i=bt,Ve=n.stateNode.containerInfo,bt=!0,En(e,t,n),Ve=r,bt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vf(n,t,o),i=i.next}while(i!==r)}En(e,t,n);break;case 1:if(!He&&(oi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,t,a)}En(e,t,n);break;case 21:En(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,En(e,t,n),He=r):En(e,t,n);break;default:En(e,t,n)}}function eg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _I),t.forEach(function(r){var i=PI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,bt=!1;break e;case 3:Ve=a.stateNode.containerInfo,bt=!0;break e;case 4:Ve=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ve===null)throw Error(S(160));r1(s,o,i),Ve=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)i1(t,e),t=t.sibling}function i1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),$t(e),r&4){try{ks(3,e,e.return),tu(3,e)}catch(_){pe(e,e.return,_)}try{ks(5,e,e.return)}catch(_){pe(e,e.return,_)}}break;case 1:Pt(t,e),$t(e),r&512&&n!==null&&oi(n,n.return);break;case 5:if(Pt(t,e),$t(e),r&512&&n!==null&&oi(n,n.return),e.flags&32){var i=e.stateNode;try{Fs(i,"")}catch(_){pe(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Av(i,s),af(a,o);var u=af(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Rv(i,f):c==="dangerouslySetInnerHTML"?xv(i,f):c==="children"?Fs(i,f):Bh(i,c,f,u)}switch(a){case"input":tf(i,s);break;case"textarea":kv(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hi(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(_){pe(e,e.return,_)}}break;case 6:if(Pt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){pe(e,e.return,_)}}break;case 3:if(Pt(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(t.containerInfo)}catch(_){pe(e,e.return,_)}break;case 4:Pt(t,e),$t(e);break;case 13:Pt(t,e),$t(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=ve())),r&4&&eg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||c,Pt(t,e),He=u):Pt(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(b=e,c=e.child;c!==null;){for(f=b=c;b!==null;){switch(h=b,m=h.child,h.tag){case 0:case 11:case 14:case 15:ks(4,h,h.return);break;case 1:oi(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(_){pe(r,n,_)}}break;case 5:oi(h,h.return);break;case 22:if(h.memoizedState!==null){ng(f);continue}}m!==null?(m.return=h,b=m):ng(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Pv("display",o))}catch(_){pe(e,e.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){pe(e,e.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pt(t,e),$t(e),r&4&&eg(e);break;case 21:break;default:Pt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(n1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fs(i,""),r.flags&=-33);var s=Zm(e);Mf(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zm(e);Lf(e,a,o);break;default:throw Error(S(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function EI(e,t,n){b=e,s1(e)}function s1(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ca;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=ca;var u=He;if(ca=o,(He=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?rg(i):l!==null?(l.return=o,b=l):rg(i);for(;s!==null;)b=s,s1(s),s=s.sibling;b=i,ca=a,He=u}tg(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):tg(e)}}function tg(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||tu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fm(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fm(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}He||t.flags&512&&Of(t)}catch(h){pe(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function ng(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function rg(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tu(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){pe(t,i,l)}}var s=t.return;try{Of(t)}catch(l){pe(t,s,l)}break;case 5:var o=t.return;try{Of(t)}catch(l){pe(t,o,l)}}}catch(l){pe(t,t.return,l)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var TI=Math.ceil,pl=_n.ReactCurrentDispatcher,wd=_n.ReactCurrentOwner,At=_n.ReactCurrentBatchConfig,Y=0,be=null,Ee=null,Me=0,ut=0,ai=nr(0),Ae=0,Zs=null,Pr=0,nu=0,Ed=0,Cs=null,rt=null,Td=0,Pi=1/0,Zt=null,ml=!1,Ff=null,Mn=null,fa=!1,xn=null,gl=0,xs=0,$f=null,ja=-1,Ua=0;function et(){return Y&6?ve():ja!==-1?ja:ja=ve()}function Fn(e){return e.mode&1?Y&2&&Me!==0?Me&-Me:sI.transition!==null?(Ua===0&&(Ua=zv()),Ua):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Qv(e.type)),e):1}function Lt(e,t,n,r){if(50<xs)throw xs=0,$f=null,Error(S(185));Io(e,n,r),(!(Y&2)||e!==be)&&(e===be&&(!(Y&2)&&(nu|=n),Ae===4&&kn(e,Me)),at(e,r),n===1&&Y===0&&!(t.mode&1)&&(Pi=ve()+500,Jl&&rr()))}function at(e,t){var n=e.callbackNode;sT(e,t);var r=Za(e,e===be?Me:0);if(r===0)n!==null&&hm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hm(n),t===1)e.tag===0?iI(ig.bind(null,e)):p0(ig.bind(null,e)),eI(function(){!(Y&6)&&rr()}),n=null;else{switch(Bv(r)){case 1:n=Gh;break;case 4:n=jv;break;case 16:n=Ja;break;case 536870912:n=Uv;break;default:n=Ja}n=d1(n,o1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o1(e,t){if(ja=-1,Ua=0,Y&6)throw Error(S(327));var n=e.callbackNode;if(yi()&&e.callbackNode!==n)return null;var r=Za(e,e===be?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yl(e,r);else{t=r;var i=Y;Y|=2;var s=l1();(be!==e||Me!==t)&&(Zt=null,Pi=ve()+500,Ir(e,t));do try{AI();break}catch(a){a1(e,a)}while(1);ad(),pl.current=s,Y=i,Ee!==null?t=0:(be=null,Me=0,t=Ae)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(r=i,t=jf(e,i))),t===1)throw n=Zs,Ir(e,0),kn(e,r),at(e,ve()),n;if(t===6)kn(e,r);else{if(i=e.current.alternate,!(r&30)&&!II(i)&&(t=yl(e,r),t===2&&(s=hf(e),s!==0&&(r=s,t=jf(e,s))),t===1))throw n=Zs,Ir(e,0),kn(e,r),at(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:fr(e,rt,Zt);break;case 3:if(kn(e,r),(r&130023424)===r&&(t=Td+500-ve(),10<t)){if(Za(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wf(fr.bind(null,e,rt,Zt),t);break}fr(e,rt,Zt);break;case 4:if(kn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TI(r/1960))-r,10<r){e.timeoutHandle=wf(fr.bind(null,e,rt,Zt),r);break}fr(e,rt,Zt);break;case 5:fr(e,rt,Zt);break;default:throw Error(S(329))}}}return at(e,ve()),e.callbackNode===n?o1.bind(null,e):null}function jf(e,t){var n=Cs;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=yl(e,t),e!==2&&(t=rt,rt=n,t!==null&&Uf(t)),e}function Uf(e){rt===null?rt=e:rt.push.apply(rt,e)}function II(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~Ed,t&=~nu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function ig(e){if(Y&6)throw Error(S(327));yi();var t=Za(e,0);if(!(t&1))return at(e,ve()),null;var n=yl(e,t);if(e.tag!==0&&n===2){var r=hf(e);r!==0&&(t=r,n=jf(e,r))}if(n===1)throw n=Zs,Ir(e,0),kn(e,t),at(e,ve()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e,rt,Zt),at(e,ve()),null}function Id(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(Pi=ve()+500,Jl&&rr())}}function Rr(e){xn!==null&&xn.tag===0&&!(Y&6)&&yi();var t=Y;Y|=1;var n=At.transition,r=Z;try{if(At.transition=null,Z=1,e)return e()}finally{Z=r,At.transition=n,Y=t,!(Y&6)&&rr()}}function Sd(){ut=ai.current,se(ai)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ZT(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Ci(),se(st),se(Ye),dd();break;case 5:hd(r);break;case 4:Ci();break;case 13:se(ce);break;case 19:se(ce);break;case 10:ld(r.type._context);break;case 22:case 23:Sd()}n=n.return}if(be=e,Ee=e=$n(e.current,null),Me=ut=t,Ae=0,Zs=null,Ed=nu=Pr=0,rt=Cs=null,mr!==null){for(t=0;t<mr.length;t++)if(n=mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mr=null}return e}function a1(e,t){do{var n=Ee;try{if(ad(),Ma.current=dl,hl){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(xr=0,Re=Ie=fe=null,As=!1,Ys=0,wd.current=null,n===null||n.return===null){Ae=1,Zs=t,Ee=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Wm(o);if(m!==null){m.flags&=-257,qm(m,o,a,s,t),m.mode&1&&Hm(s,u,t),t=m,l=u;var v=t.updateQueue;if(v===null){var _=new Set;_.add(l),t.updateQueue=_}else v.add(l);break e}else{if(!(t&1)){Hm(s,u,t),Ad();break e}l=Error(S(426))}}else if(le&&a.mode&1){var E=Wm(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),qm(E,o,a,s,t),sd(xi(l,a));break e}}s=l=xi(l,a),Ae!==4&&(Ae=2),Cs===null?Cs=[s]:Cs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=H0(s,l,t);Mm(s,p);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mn===null||!Mn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=W0(s,a,t);Mm(s,w);break e}}s=s.return}while(s!==null)}c1(n)}catch(T){t=T,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function l1(){var e=pl.current;return pl.current=dl,e===null?dl:e}function Ad(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),be===null||!(Pr&268435455)&&!(nu&268435455)||kn(be,Me)}function yl(e,t){var n=Y;Y|=2;var r=l1();(be!==e||Me!==t)&&(Zt=null,Ir(e,t));do try{SI();break}catch(i){a1(e,i)}while(1);if(ad(),Y=n,pl.current=r,Ee!==null)throw Error(S(261));return be=null,Me=0,Ae}function SI(){for(;Ee!==null;)u1(Ee)}function AI(){for(;Ee!==null&&!Y2();)u1(Ee)}function u1(e){var t=h1(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?c1(e):Ee=t,wd.current=null}function c1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vI(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ee=null;return}}else if(n=yI(n,t,ut),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ae===0&&(Ae=5)}function fr(e,t,n){var r=Z,i=At.transition;try{At.transition=null,Z=1,kI(e,t,n,r)}finally{At.transition=i,Z=r}return null}function kI(e,t,n,r){do yi();while(xn!==null);if(Y&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(oT(e,s),e===be&&(Ee=be=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,d1(Ja,function(){return yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=Z;Z=1;var a=Y;Y|=4,wd.current=null,wI(e,n),i1(n,e),qT(vf),el=!!yf,vf=yf=null,e.current=n,EI(n),X2(),Y=a,Z=o,At.transition=s}else e.current=n;if(fa&&(fa=!1,xn=e,gl=i),s=e.pendingLanes,s===0&&(Mn=null),eT(n.stateNode),at(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,e=Ff,Ff=null,e;return gl&1&&e.tag!==0&&yi(),s=e.pendingLanes,s&1?e===$f?xs++:(xs=0,$f=e):xs=0,rr(),null}function yi(){if(xn!==null){var e=Bv(gl),t=At.transition,n=Z;try{if(At.transition=null,Z=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,gl=0,Y&6)throw Error(S(331));var i=Y;for(Y|=4,b=e.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:ks(8,c,s)}var f=c.child;if(f!==null)f.return=c,b=f;else for(;b!==null;){c=b;var h=c.sibling,m=c.return;if(t1(c),c===u){b=null;break}if(h!==null){h.return=m,b=h;break}b=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ks(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var d=e.current;for(b=d;b!==null;){o=b;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,b=g;else e:for(o=d;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(T){pe(a,a.return,T)}if(a===o){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(Y=i,rr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Kl,e)}catch{}r=!0}return r}finally{Z=n,At.transition=t}}return!1}function sg(e,t,n){t=xi(n,t),t=H0(e,t,1),e=Ln(e,t,1),t=et(),e!==null&&(Io(e,1,t),at(e,t))}function pe(e,t,n){if(e.tag===3)sg(e,e,n);else for(;t!==null;){if(t.tag===3){sg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=xi(n,e),e=W0(t,e,1),t=Ln(t,e,1),e=et(),t!==null&&(Io(t,1,e),at(t,e));break}}t=t.return}}function CI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Me&n)===n&&(Ae===4||Ae===3&&(Me&130023424)===Me&&500>ve()-Td?Ir(e,0):Ed|=n),at(e,t)}function f1(e,t){t===0&&(e.mode&1?(t=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):t=1);var n=et();e=un(e,t),e!==null&&(Io(e,t,n),at(e,n))}function xI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),f1(e,n)}function PI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),f1(e,n)}var h1;h1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,gI(e,t,n);it=!!(e.flags&131072)}else it=!1,le&&t.flags&1048576&&m0(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$a(e,t),e=t.pendingProps;var i=Si(t,Ye.current);gi(t,n),i=md(null,t,r,e,i,n);var s=gd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(s=!0,sl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cd(t),i.updater=Zl,t.stateNode=i,i._reactInternals=t,Cf(t,r,e,n),t=Rf(null,t,r,!0,s,n)):(t.tag=0,le&&s&&rd(t),Je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($a(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bI(r),e=Rt(r,e),i){case 0:t=Pf(null,t,r,e,n);break e;case 1:t=Qm(null,t,r,e,n);break e;case 11:t=Km(null,t,r,e,n);break e;case 14:t=Gm(null,t,r,Rt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Pf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Qm(e,t,r,i,n);case 3:e:{if(Q0(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,_0(e,t),cl(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=xi(Error(S(423)),t),t=Ym(e,t,r,n,i);break e}else if(r!==i){i=xi(Error(S(424)),t),t=Ym(e,t,r,n,i);break e}else for(ct=On(t.stateNode.containerInfo.firstChild),ht=t,le=!0,Nt=null,n=I0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ai(),r===i){t=cn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return S0(t),e===null&&Sf(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,_f(r,i)?o=null:s!==null&&_f(r,s)&&(t.flags|=32),G0(e,t),Je(e,t,o,n),t.child;case 6:return e===null&&Sf(t),null;case 13:return Y0(e,t,n);case 4:return fd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ki(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Km(e,t,r,i,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,te(ll,r._currentValue),r._currentValue=o,s!==null)if(Mt(s.value,o)){if(s.children===i.children&&!st.current){t=cn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Af(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gi(t,n),i=Ct(i),r=r(i),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),Gm(e,t,r,i,n);case 15:return q0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),$a(e,t),t.tag=1,ot(r)?(e=!0,sl(t)):e=!1,gi(t,n),E0(t,r,i),Cf(t,r,i,n),Rf(null,t,r,!0,e,n);case 19:return X0(e,t,n);case 22:return K0(e,t,n)}throw Error(S(156,t.tag))};function d1(e,t){return $v(e,t)}function RI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new RI(e,t,n,r)}function kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bI(e){if(typeof e=="function")return kd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wh)return 11;if(e===qh)return 14}return 2}function $n(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function za(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")kd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xr:return Sr(n.children,i,s,t);case Hh:o=8,i|=8;break;case Yc:return e=St(12,n,t,i|2),e.elementType=Yc,e.lanes=s,e;case Xc:return e=St(13,n,t,i),e.elementType=Xc,e.lanes=s,e;case Jc:return e=St(19,n,t,i),e.elementType=Jc,e.lanes=s,e;case Tv:return ru(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wv:o=10;break e;case Ev:o=9;break e;case Wh:o=11;break e;case qh:o=14;break e;case In:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=St(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Sr(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function ru(e,t,n,r){return e=St(22,e,r,t),e.elementType=Tv,e.lanes=n,e.stateNode={isHidden:!1},e}function vc(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function _c(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function NI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cd(e,t,n,r,i,s,o,a,l){return e=new NI(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=St(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(s),e}function DI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function p1(e){if(!e)return qn;e=e._reactInternals;e:{if(zr(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ot(n))return d0(e,n,t)}return t}function m1(e,t,n,r,i,s,o,a,l){return e=Cd(n,r,!0,e,i,s,o,a,l),e.context=p1(null),n=e.current,r=et(),i=Fn(n),s=sn(r,i),s.callback=t??null,Ln(n,s,i),e.current.lanes=i,Io(e,i,r),at(e,r),e}function iu(e,t,n,r){var i=t.current,s=et(),o=Fn(i);return n=p1(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ln(i,t,o),e!==null&&(Lt(e,i,o,s),La(e,i,o)),o}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xd(e,t){og(e,t),(e=e.alternate)&&og(e,t)}function VI(){return null}var g1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pd(e){this._internalRoot=e}su.prototype.render=Pd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));iu(e,t,null,null)};su.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){iu(null,e,null,null)}),t[ln]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var t=qv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&Gv(e)}};function Rd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ag(){}function OI(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vl(o);s.call(u)}}var o=m1(t,r,e,0,null,!1,!1,"",ag);return e._reactRootContainer=o,e[ln]=o.current,Ws(e.nodeType===8?e.parentNode:e),Rr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vl(l);a.call(u)}}var l=Cd(e,0,!1,null,null,!1,!1,"",ag);return e._reactRootContainer=l,e[ln]=l.current,Ws(e.nodeType===8?e.parentNode:e),Rr(function(){iu(t,l,n,r)}),l}function au(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vl(o);a.call(l)}}iu(t,o,e,i)}else o=OI(n,t,e,i,r);return vl(o)}Hv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hs(t.pendingLanes);n!==0&&(Qh(t,n|1),at(t,ve()),!(Y&6)&&(Pi=ve()+500,rr()))}break;case 13:Rr(function(){var r=un(e,1);if(r!==null){var i=et();Lt(r,e,1,i)}}),xd(e,1)}};Yh=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=et();Lt(t,e,134217728,n)}xd(e,134217728)}};Wv=function(e){if(e.tag===13){var t=Fn(e),n=un(e,t);if(n!==null){var r=et();Lt(n,e,t,r)}xd(e,t)}};qv=function(){return Z};Kv=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};uf=function(e,t,n){switch(t){case"input":if(tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xl(r);if(!i)throw Error(S(90));Sv(r),tf(r,i)}}}break;case"textarea":kv(e,n);break;case"select":t=n.value,t!=null&&hi(e,!!n.multiple,t,!1)}};Dv=Id;Vv=Rr;var LI={usingClientEntryPoint:!1,Events:[Ao,ti,Xl,bv,Nv,Id]},as={findFiberByHostInstance:pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},MI={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mv(e),e===null?null:e.stateNode},findFiberByHostInstance:as.findFiberByHostInstance||VI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Kl=ha.inject(MI),qt=ha}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LI;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(t))throw Error(S(200));return DI(e,t,null,n)};gt.createRoot=function(e,t){if(!Rd(e))throw Error(S(299));var n=!1,r="",i=g1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cd(e,1,!1,null,null,n,!1,r,i),e[ln]=t.current,Ws(e.nodeType===8?e.parentNode:e),new Pd(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Mv(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Rr(e)};gt.hydrate=function(e,t,n){if(!ou(t))throw Error(S(200));return au(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Rd(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=g1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=m1(t,null,e,1,n??null,i,!1,s,o),e[ln]=t.current,Ws(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new su(t)};gt.render=function(e,t,n){if(!ou(t))throw Error(S(200));return au(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!ou(e))throw Error(S(40));return e._reactRootContainer?(Rr(function(){au(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};gt.unstable_batchedUpdates=Id;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ou(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return au(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function y1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y1)}catch(e){console.error(e)}}y1(),mv.exports=gt;var FI=mv.exports,lg=FI;Gc.createRoot=lg.createRoot,Gc.hydrateRoot=lg.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eo.apply(this,arguments)}var Pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pn||(Pn={}));const ug="popstate";function $I(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return zf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_l(i)}return UI(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function jI(){return Math.random().toString(36).substr(2,8)}function cg(e,t){return{usr:e.state,key:e.key,idx:t}}function zf(e,t,n,r){return n===void 0&&(n=null),eo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Bi(t):t,{state:n,key:t&&t.key||r||jI()})}function _l(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Bi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function UI(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(eo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Pn.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:p})}function h(E,p){a=Pn.Push;let d=zf(_.location,E,p);n&&n(d,E),u=c()+1;let g=cg(d,u),w=_.createHref(d);try{o.pushState(g,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function m(E,p){a=Pn.Replace;let d=zf(_.location,E,p);n&&n(d,E),u=c();let g=cg(d,u),w=_.createHref(d);o.replaceState(g,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:_l(E);return Te(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let _={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ug,f),l=E,()=>{i.removeEventListener(ug,f),l=null}},createHref(E){return t(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(E){return o.go(E)}};return _}var fg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fg||(fg={}));function zI(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Bi(t):t,i=Nd(r.pathname||"/",n);if(i==null)return null;let s=v1(e);BI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=JI(s[a],tS(i));return o}function v1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),v1(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:YI(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _1(s.path))i(s,o,l)}),t}function _1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function BI(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:XI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const HI=/^:\w+$/,WI=3,qI=2,KI=1,GI=10,QI=-2,hg=e=>e==="*";function YI(e,t){let n=e.split("/"),r=n.length;return n.some(hg)&&(r+=QI),t&&(r+=qI),n.filter(i=>!hg(i)).reduce((i,s)=>i+(HI.test(s)?WI:s===""?KI:GI),r)}function XI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function JI(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=ZI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:jn([i,c.pathname]),pathnameBase:sS(jn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=jn([i,c.pathnameBase]))}return s}function ZI(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=eS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=nS(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function eS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function tS(e){try{return decodeURI(e)}catch(t){return bd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nS(e,t){try{return decodeURIComponent(e)}catch(n){return bd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Nd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Bi(e):e;return{pathname:n?n.startsWith("/")?n:iS(n,t):t,search:oS(r),hash:aS(i)}}function iS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function w1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function E1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Bi(e):(i=eo({},e),Te(!i.pathname||!i.pathname.includes("?"),wc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),wc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),wc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=rS(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),sS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T1=["post","put","patch","delete"];new Set(T1);const uS=["get",...T1];new Set(uS);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wl.apply(this,arguments)}const Dd=k.createContext(null),cS=k.createContext(null),Hi=k.createContext(null),lu=k.createContext(null),ir=k.createContext({outlet:null,matches:[],isDataRoute:!1}),I1=k.createContext(null);function fS(e,t){let{relative:n}=t===void 0?{}:t;Co()||Te(!1);let{basename:r,navigator:i}=k.useContext(Hi),{hash:s,pathname:o,search:a}=k1(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Co(){return k.useContext(lu)!=null}function uu(){return Co()||Te(!1),k.useContext(lu).location}function S1(e){k.useContext(Hi).static||k.useLayoutEffect(e)}function A1(){let{isDataRoute:e}=k.useContext(ir);return e?AS():hS()}function hS(){Co()||Te(!1);let e=k.useContext(Dd),{basename:t,navigator:n}=k.useContext(Hi),{matches:r}=k.useContext(ir),{pathname:i}=uu(),s=JSON.stringify(w1(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return S1(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=E1(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:jn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}function dS(){let{matches:e}=k.useContext(ir),t=e[e.length-1];return t?t.params:{}}function k1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(ir),{pathname:i}=uu(),s=JSON.stringify(w1(r).map(o=>o.pathnameBase));return k.useMemo(()=>E1(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function pS(e,t){return mS(e,t)}function mS(e,t,n){Co()||Te(!1);let{navigator:r}=k.useContext(Hi),{matches:i}=k.useContext(ir),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=uu(),u;if(t){var c;let _=typeof t=="string"?Bi(t):t;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Te(!1),u=_}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",m=zI(e,{pathname:h}),v=wS(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:jn([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:jn([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&v?k.createElement(lu.Provider,{value:{location:wl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pn.Pop}},v):v}function gS(){let e=SS(),t=lS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,s)}const yS=k.createElement(gS,null);class vS extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(ir.Provider,{value:this.props.routeContext},k.createElement(I1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _S(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Dd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(ir.Provider,{value:t},r)}function wS(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Te(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||yS);let h=t.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=f:l.route.Component?v=k.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,k.createElement(_S,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(vS,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var C1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(C1||{}),El=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(El||{});function ES(e){let t=k.useContext(Dd);return t||Te(!1),t}function TS(e){let t=k.useContext(cS);return t||Te(!1),t}function IS(e){let t=k.useContext(ir);return t||Te(!1),t}function x1(e){let t=IS(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function SS(){var e;let t=k.useContext(I1),n=TS(El.UseRouteError),r=x1(El.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function AS(){let{router:e}=ES(C1.UseNavigateStable),t=x1(El.UseNavigateStable),n=k.useRef(!1);return S1(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wl({fromRouteId:t},s)))},[e,t])}function hr(e){Te(!1)}function kS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Pn.Pop,navigator:s,static:o=!1}=e;Co()&&Te(!1);let a=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Bi(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:m="default"}=r,v=k.useMemo(()=>{let _=Nd(u,a);return _==null?null:{location:{pathname:_,search:c,hash:f,state:h,key:m},navigationType:i}},[a,u,c,f,h,m,i]);return v==null?null:k.createElement(Hi.Provider,{value:l},k.createElement(lu.Provider,{children:n,value:v}))}function CS(e){let{children:t,location:n}=e;return pS(Bf(t),n)}new Promise(()=>{});function Bf(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Bf(r.props.children,s));return}r.type!==hr&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hf(){return Hf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hf.apply(this,arguments)}function xS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function PS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function RS(e,t){return e.button===0&&(!t||t==="_self")&&!PS(e)}const bS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],NS="startTransition",dg=x2[NS];function DS(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=$I({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(f=>{u&&dg?dg(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(kS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const VS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LS=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,f=xS(t,bS),{basename:h}=k.useContext(Hi),m,v=!1;if(typeof u=="string"&&OS.test(u)&&(m=u,VS))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),w=Nd(g.pathname,h);g.origin===d.origin&&w!=null?u=w+g.search+g.hash:v=!0}catch{}let _=fS(u,{relative:i}),E=MS(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(d){r&&r(d),d.defaultPrevented||E(d)}return k.createElement("a",Hf({},f,{href:m||_,onClick:v||s?r:p,ref:n,target:l}))});var pg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(pg||(pg={}));var mg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mg||(mg={}));function MS(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=A1(),l=uu(),u=k1(e,{relative:o});return k.useCallback(c=>{if(RS(c,n)){c.preventDefault();let f=r!==void 0?r:_l(l)===_l(u);a(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}function gg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gg(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tl(e){"@babel/helpers - typeof";return Tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tl(e)}function FS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $S(e,t,n){return t&&yg(e.prototype,t),n&&yg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vd(e,t){return US(e)||BS(e,t)||P1(e,t)||WS()}function xo(e){return jS(e)||zS(e)||P1(e)||HS()}function jS(e){if(Array.isArray(e))return Wf(e)}function US(e){if(Array.isArray(e))return e}function zS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function BS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function P1(e,t){if(e){if(typeof e=="string")return Wf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wf(e,t)}}function Wf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function HS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vg=function(){},Od={},R1={},b1=null,N1={mark:vg,measure:vg};try{typeof window<"u"&&(Od=window),typeof document<"u"&&(R1=document),typeof MutationObserver<"u"&&(b1=MutationObserver),typeof performance<"u"&&(N1=performance)}catch{}var qS=Od.navigator||{},_g=qS.userAgent,wg=_g===void 0?"":_g,Kn=Od,oe=R1,Eg=b1,da=N1;Kn.document;var wn=!!oe.documentElement&&!!oe.head&&typeof oe.addEventListener=="function"&&typeof oe.createElement=="function",D1=~wg.indexOf("MSIE")||~wg.indexOf("Trident/"),pa,ma,ga,ya,va,fn="___FONT_AWESOME___",qf=16,V1="fa",O1="svg-inline--fa",br="data-fa-i2svg",Kf="data-fa-pseudo-element",KS="data-fa-pseudo-element-pending",Ld="data-prefix",Md="data-icon",Tg="fontawesome-i2svg",GS="async",QS=["HTML","HEAD","STYLE","SCRIPT"],L1=function(){try{return!0}catch{return!1}}(),re="classic",me="sharp",Fd=[re,me];function Po(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[re]}})}var to=Po((pa={},Ce(pa,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ce(pa,me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),pa)),no=Po((ma={},Ce(ma,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ce(ma,me,{solid:"fass",regular:"fasr",light:"fasl"}),ma)),ro=Po((ga={},Ce(ga,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ce(ga,me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ga)),YS=Po((ya={},Ce(ya,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ce(ya,me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ya)),XS=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,M1="fa-layers-text",JS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ZS=Po((va={},Ce(va,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ce(va,me,{900:"fass",400:"fasr",300:"fasl"}),va)),F1=[1,2,3,4,5,6,7,8,9,10],eA=F1.concat([11,12,13,14,15,16,17,18,19,20]),tA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},io=new Set;Object.keys(no[re]).map(io.add.bind(io));Object.keys(no[me]).map(io.add.bind(io));var nA=[].concat(Fd,xo(io),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yr.GROUP,yr.SWAP_OPACITY,yr.PRIMARY,yr.SECONDARY]).concat(F1.map(function(e){return"".concat(e,"x")})).concat(eA.map(function(e){return"w-".concat(e)})),Ps=Kn.FontAwesomeConfig||{};function rA(e){var t=oe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function iA(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(oe&&typeof oe.querySelector=="function"){var sA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sA.forEach(function(e){var t=Vd(e,2),n=t[0],r=t[1],i=iA(rA(n));i!=null&&(Ps[r]=i)})}var $1={styleDefault:"solid",familyDefault:"classic",cssPrefix:V1,replacementClass:O1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ps.familyPrefix&&(Ps.cssPrefix=Ps.familyPrefix);var Ri=R(R({},$1),Ps);Ri.autoReplaceSvg||(Ri.observeMutations=!1);var V={};Object.keys($1).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){Ri[e]=n,Rs.forEach(function(r){return r(V)})},get:function(){return Ri[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){Ri.cssPrefix=t,Rs.forEach(function(n){return n(V)})},get:function(){return Ri.cssPrefix}});Kn.FontAwesomeConfig=V;var Rs=[];function oA(e){return Rs.push(e),function(){Rs.splice(Rs.indexOf(e),1)}}var Tn=qf,Bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aA(e){if(!(!e||!wn)){var t=oe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=oe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return oe.head.insertBefore(t,r),e}}var lA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function so(){for(var e=12,t="";e-- >0;)t+=lA[Math.random()*62|0];return t}function Wi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $d(e){return e.classList?Wi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function j1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uA(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(j1(e[n]),'" ')},"").trim()}function cu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function jd(e){return e.size!==Bt.size||e.x!==Bt.x||e.y!==Bt.y||e.rotate!==Bt.rotate||e.flipX||e.flipY}function cA(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function fA(e){var t=e.transform,n=e.width,r=n===void 0?qf:n,i=e.height,s=i===void 0?qf:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&D1?l+="translate(".concat(t.x/Tn-r/2,"em, ").concat(t.y/Tn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Tn,"em), calc(-50% + ").concat(t.y/Tn,"em)) "):l+="translate(".concat(t.x/Tn,"em, ").concat(t.y/Tn,"em) "),l+="scale(".concat(t.size/Tn*(t.flipX?-1:1),", ").concat(t.size/Tn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var hA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function U1(){var e=V1,t=O1,n=V.cssPrefix,r=V.replacementClass,i=hA;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ig=!1;function Ec(){V.autoAddCss&&!Ig&&(aA(U1()),Ig=!0)}var dA={mixout:function(){return{dom:{css:U1,insertCss:Ec}}},hooks:function(){return{beforeDOMElementCreation:function(){Ec()},beforeI2svg:function(){Ec()}}}},hn=Kn||{};hn[fn]||(hn[fn]={});hn[fn].styles||(hn[fn].styles={});hn[fn].hooks||(hn[fn].hooks={});hn[fn].shims||(hn[fn].shims=[]);var Dt=hn[fn],z1=[],pA=function e(){oe.removeEventListener("DOMContentLoaded",e),Il=1,z1.map(function(t){return t()})},Il=!1;wn&&(Il=(oe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(oe.readyState),Il||oe.addEventListener("DOMContentLoaded",pA));function mA(e){wn&&(Il?setTimeout(e,0):z1.push(e))}function Ro(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?j1(e):"<".concat(t," ").concat(uA(r),">").concat(s.map(Ro).join(""),"</").concat(t,">")}function Sg(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gA=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Tc=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?gA(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,t[u],u,t);return c};function yA(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Gf(e){var t=yA(e);return t.length===1?t[0].toString(16):null}function vA(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ag(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ag(t);typeof Dt.hooks.addPack=="function"&&!i?Dt.hooks.addPack(e,Ag(t)):Dt.styles[e]=R(R({},Dt.styles[e]||{}),s),e==="fas"&&Qf("fa",t)}var _a,wa,Ea,li=Dt.styles,_A=Dt.shims,wA=(_a={},Ce(_a,re,Object.values(ro[re])),Ce(_a,me,Object.values(ro[me])),_a),Ud=null,B1={},H1={},W1={},q1={},K1={},EA=(wa={},Ce(wa,re,Object.keys(to[re])),Ce(wa,me,Object.keys(to[me])),wa);function TA(e){return~nA.indexOf(e)}function IA(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!TA(i)?i:null}var G1=function(){var t=function(s){return Tc(li,function(o,a,l){return o[l]=Tc(a,s,{}),o},{})};B1=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),H1=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),K1=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in li||V.autoFetchSvg,r=Tc(_A,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});W1=r.names,q1=r.unicodes,Ud=fu(V.styleDefault,{family:V.familyDefault})};oA(function(e){Ud=fu(e.styleDefault,{family:V.familyDefault})});G1();function zd(e,t){return(B1[e]||{})[t]}function SA(e,t){return(H1[e]||{})[t]}function vr(e,t){return(K1[e]||{})[t]}function Q1(e){return W1[e]||{prefix:null,iconName:null}}function AA(e){var t=q1[e],n=zd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gn(){return Ud}var Bd=function(){return{prefix:null,iconName:null,rest:[]}};function fu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?re:n,i=to[r][e],s=no[r][e]||no[r][i],o=e in Dt.styles?e:null;return s||o||null}var kg=(Ea={},Ce(Ea,re,Object.keys(ro[re])),Ce(Ea,me,Object.keys(ro[me])),Ea);function hu(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Ce(t,re,"".concat(V.cssPrefix,"-").concat(re)),Ce(t,me,"".concat(V.cssPrefix,"-").concat(me)),t),o=null,a=re;(e.includes(s[re])||e.some(function(u){return kg[re].includes(u)}))&&(a=re),(e.includes(s[me])||e.some(function(u){return kg[me].includes(u)}))&&(a=me);var l=e.reduce(function(u,c){var f=IA(V.cssPrefix,c);if(li[c]?(c=wA[a].includes(c)?YS[a][c]:c,o=c,u.prefix=c):EA[a].indexOf(c)>-1?(o=c,u.prefix=fu(c,{family:a})):f?u.iconName=f:c!==V.replacementClass&&c!==s[re]&&c!==s[me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Q1(u.iconName):{},m=vr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||m||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!li.far&&li.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},Bd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===me&&(li.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=vr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Gn()||"fas"),l}var kA=function(){function e(){FS(this,e),this.definitions={}}return $S(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Qf(a,o[a]);var l=ro[re][a];l&&Qf(l,o[a]),G1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),Cg=[],ui={},vi={},CA=Object.keys(vi);function xA(e,t){var n=t.mixoutsTo;return Cg=e,ui={},Object.keys(vi).forEach(function(r){CA.indexOf(r)===-1&&delete vi[r]}),Cg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Tl(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ui[o]||(ui[o]=[]),ui[o].push(s[o])})}r.provides&&r.provides(vi)}),n}function Yf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ui[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ui[e]||[];i.forEach(function(s){s.apply(null,n)})}function dn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vi[e]?vi[e].apply(null,t):void 0}function Xf(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gn();if(t)return t=vr(n,t)||t,Sg(Y1.definitions,n,t)||Sg(Dt.styles,n,t)}var Y1=new kA,PA=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Nr("noAuto")},RA={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wn?(Nr("beforeI2svg",t),dn("pseudoElements2svg",t),dn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,mA(function(){NA({autoReplaceSvgRoot:n}),Nr("watch",t)})}},bA={icon:function(t){if(t===null)return null;if(Tl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fu(t[0]);return{prefix:r,iconName:vr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(XS))){var i=hu(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gn(),iconName:vr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Gn();return{prefix:s,iconName:vr(s,t)||t}}}},vt={noAuto:PA,config:V,dom:RA,parse:bA,library:Y1,findIconDefinition:Xf,toHtml:Ro},NA=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?oe:n;(Object.keys(Dt.styles).length>0||V.autoFetchSvg)&&wn&&V.autoReplaceSvg&&vt.dom.i2svg({node:r})};function du(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ro(r)})}}),Object.defineProperty(e,"node",{get:function(){if(wn){var r=oe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function DA(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(jd(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=cu(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function VA(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Hd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,m=h===void 0?!1:h,v=r.found?r:n,_=v.width,E=v.height,p=i==="fak",d=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(G){return f.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(f.classes).join(" "),g={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(E)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/E*16*.0625,"em")}:{};m&&(g.attributes[br]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||so())},children:[l]}),delete g.attributes.title);var T=R(R({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},w),f.styles)}),C=r.found&&n.found?dn("generateAbstractMask",T)||{children:[],attributes:{}}:dn("generateAbstractIcon",T)||{children:[],attributes:{}},P=C.children,D=C.attributes;return T.children=P,T.attributes=D,a?VA(T):DA(T)}function xg(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[br]="");var c=R({},o.styles);jd(i)&&(c.transform=fA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=cu(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function OA(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=cu(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ic=Dt.styles;function Jf(e){var t=e[0],n=e[1],r=e.slice(4),i=Vd(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(yr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(yr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(yr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var LA={found:!1,width:512,height:512};function MA(e,t){!L1&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zf(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=Gn()),new Promise(function(r,i){if(dn("missingIconAbstract"),n==="fa"){var s=Q1(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ic[t]&&Ic[t][e]){var o=Ic[t][e];return r(Jf(o))}MA(e,t),r(R(R({},LA),{},{icon:V.showMissingIcons&&e?dn("missingIconAbstract")||{}:{}}))})}var Pg=function(){},eh=V.measurePerformance&&da&&da.mark&&da.measure?da:{mark:Pg,measure:Pg},ps='FA "6.4.2"',FA=function(t){return eh.mark("".concat(ps," ").concat(t," begins")),function(){return X1(t)}},X1=function(t){eh.mark("".concat(ps," ").concat(t," ends")),eh.measure("".concat(ps," ").concat(t),"".concat(ps," ").concat(t," begins"),"".concat(ps," ").concat(t," ends"))},Wd={begin:FA,end:X1},Ba=function(){};function Rg(e){var t=e.getAttribute?e.getAttribute(br):null;return typeof t=="string"}function $A(e){var t=e.getAttribute?e.getAttribute(Ld):null,n=e.getAttribute?e.getAttribute(Md):null;return t&&n}function jA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function UA(){if(V.autoReplaceSvg===!0)return Ha.replace;var e=Ha[V.autoReplaceSvg];return e||Ha.replace}function zA(e){return oe.createElementNS("http://www.w3.org/2000/svg",e)}function BA(e){return oe.createElement(e)}function J1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?zA:BA:n;if(typeof e=="string")return oe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(J1(o,{ceFn:r}))}),i}function HA(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ha={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(J1(i),n)}),n.getAttribute(br)===null&&V.keepOriginalSource){var r=oe.createComment(HA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~$d(n).indexOf(V.replacementClass))return Ha.replace(t);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ro(a)}).join(`
`);n.setAttribute(br,""),n.innerHTML=o}};function bg(e){e()}function Z1(e,t){var n=typeof t=="function"?t:Ba;if(e.length===0)n();else{var r=bg;V.mutateApproach===GS&&(r=Kn.requestAnimationFrame||bg),r(function(){var i=UA(),s=Wd.begin("mutate");e.map(i),s(),n()})}}var qd=!1;function e_(){qd=!0}function th(){qd=!1}var Sl=null;function Ng(e){if(Eg&&V.observeMutations){var t=e.treeCallback,n=t===void 0?Ba:t,r=e.nodeCallback,i=r===void 0?Ba:r,s=e.pseudoElementsCallback,o=s===void 0?Ba:s,a=e.observeMutationsRoot,l=a===void 0?oe:a;Sl=new Eg(function(u){if(!qd){var c=Gn();Wi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Rg(f.addedNodes[0])&&(V.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&V.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Rg(f.target)&&~tA.indexOf(f.attributeName))if(f.attributeName==="class"&&$A(f.target)){var h=hu($d(f.target)),m=h.prefix,v=h.iconName;f.target.setAttribute(Ld,m||c),v&&f.target.setAttribute(Md,v)}else jA(f.target)&&i(f.target)})}}),wn&&Sl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function WA(){Sl&&Sl.disconnect()}function qA(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function KA(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=hu($d(e));return i.prefix||(i.prefix=Gn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=SA(i.prefix,e.innerText)||zd(i.prefix,Gf(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function GA(e){var t=Wi(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return V.autoA11y&&(n?t["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||so()):(t["aria-hidden"]="true",t.focusable="false")),t}function QA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=KA(e),r=n.iconName,i=n.prefix,s=n.rest,o=GA(e),a=Yf("parseNodeAttributes",{},e),l=t.styleParser?qA(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var YA=Dt.styles;function t_(e){var t=V.autoReplaceSvg==="nest"?Dg(e,{styleParser:!1}):Dg(e);return~t.extra.classes.indexOf(M1)?dn("generateLayersText",e,t):dn("generateSvgReplacementMutation",e,t)}var Qn=new Set;Fd.map(function(e){Qn.add("fa-".concat(e))});Object.keys(to[re]).map(Qn.add.bind(Qn));Object.keys(to[me]).map(Qn.add.bind(Qn));Qn=xo(Qn);function Vg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wn)return Promise.resolve();var n=oe.documentElement.classList,r=function(f){return n.add("".concat(Tg,"-").concat(f))},i=function(f){return n.remove("".concat(Tg,"-").concat(f))},s=V.autoFetchSvg?Qn:Fd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(YA));s.includes("fa")||s.push("fa");var o=[".".concat(M1,":not([").concat(br,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(br,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Wi(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Wd.begin("onTree"),u=a.reduce(function(c,f){try{var h=t_(f);h&&c.push(h)}catch(m){L1||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){Z1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function XA(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;t_(e).then(function(n){n&&Z1([n],t)})}function JA(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xf(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Xf(i||{})),e(r,R(R({},n),{},{mask:i}))}}var ZA=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Bt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,m=n.titleId,v=m===void 0?null:m,_=n.classes,E=_===void 0?[]:_,p=n.attributes,d=p===void 0?{}:p,g=n.styles,w=g===void 0?{}:g;if(t){var T=t.prefix,C=t.iconName,P=t.icon;return du(R({type:"icon"},t),function(){return Nr("beforeDOMElementCreation",{iconDefinition:t,params:n}),V.autoA11y&&(h?d["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(v||so()):(d["aria-hidden"]="true",d.focusable="false")),Hd({icons:{main:Jf(P),mask:l?Jf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:C,transform:R(R({},Bt),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:w,classes:E}})})}},ek={mixout:function(){return{icon:JA(ZA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Vg,n.nodeCallback=XA,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?oe:r,s=n.callback,o=s===void 0?function(){}:s;return Vg(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,v){Promise.all([Zf(i,a),c.iconName?Zf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var E=Vd(_,2),p=E[0],d=E[1];m([n,Hd({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=cu(a);l.length>0&&(i.style=l);var u;return jd(o)&&(u=dn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},tk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return du({type:"layer"},function(){Nr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(xo(s)).join(" ")},children:o}]})}}}},nk={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return du({type:"counter",content:n},function(){return Nr("beforeDOMElementCreation",{content:n,params:r}),OA({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(xo(a))}})})}}}},rk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Bt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,m=h===void 0?{}:h;return du({type:"text",content:n},function(){return Nr("beforeDOMElementCreation",{content:n,params:r}),xg({content:n,transform:R(R({},Bt),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(V.cssPrefix,"-layers-text")].concat(xo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(D1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xg({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},ik=new RegExp('"',"ug"),Og=[1105920,1112319];function sk(e){var t=e.replace(ik,""),n=vA(t,0),r=n>=Og[0]&&n<=Og[1],i=t.length===2?t[0]===t[1]:!1;return{value:Gf(i?t[0]:t),isSecondary:r||i}}function Lg(e,t){var n="".concat(KS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Wi(e.children),o=s.filter(function(P){return P.getAttribute(Kf)===t})[0],a=Kn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(JS),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?me:re,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?no[h][l[2].toLowerCase()]:ZS[h][u],v=sk(f),_=v.value,E=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=zd(m,_),g=d;if(p){var w=AA(_);w.iconName&&w.prefix&&(d=w.iconName,m=w.prefix)}if(d&&!E&&(!o||o.getAttribute(Ld)!==m||o.getAttribute(Md)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var T=QA(),C=T.extra;C.attributes[Kf]=t,Zf(d,m).then(function(P){var D=Hd(R(R({},T),{},{icons:{main:P,mask:Bd()},prefix:m,iconName:g,extra:C,watchable:!0})),G=oe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=D.map(function(U){return Ro(U)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ok(e){return Promise.all([Lg(e,"::before"),Lg(e,"::after")])}function ak(e){return e.parentNode!==document.head&&!~QS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Mg(e){if(wn)return new Promise(function(t,n){var r=Wi(e.querySelectorAll("*")).filter(ak).map(ok),i=Wd.begin("searchPseudoElements");e_(),Promise.all(r).then(function(){i(),th(),t()}).catch(function(){i(),th(),n()})})}var lk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Mg,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?oe:r;V.searchPseudoElements&&Mg(i)}}},Fg=!1,uk={mixout:function(){return{dom:{unwatch:function(){e_(),Fg=!0}}}},hooks:function(){return{bootstrap:function(){Ng(Yf("mutationObserverCallbacks",{}))},noAuto:function(){WA()},watch:function(n){var r=n.observeMutationsRoot;Fg?th():Ng(Yf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$g=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},ck={mixout:function(){return{parse:{transform:function(n){return $g(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=$g(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:R({},m.outer),children:[{tag:"g",attributes:R({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),m.path)}]}]}}}},Sc={x:0,y:0,width:"100%",height:"100%"};function jg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fk(e){return e.tag==="g"?e.children:[e]}var hk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?hu(i.split(" ").map(function(o){return o.trim()})):Bd();return s.prefix||(s.prefix=Gn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,m=cA({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:R(R({},Sc),{},{fill:"white"})},_=c.children?{children:c.children.map(jg)}:{},E={tag:"g",attributes:R({},m.inner),children:[jg(R({tag:c.tag,attributes:R(R({},c.attributes),m.path)},_))]},p={tag:"g",attributes:R({},m.outer),children:[E]},d="mask-".concat(a||so()),g="clip-".concat(a||so()),w={tag:"mask",attributes:R(R({},Sc),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:fk(h)},w]};return r.push(T,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Sc)}),{children:r,attributes:i}}}},dk={provides:function(t){var n=!1;Kn.matchMedia&&(n=Kn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},mk=[dA,ek,tk,nk,rk,lk,uk,ck,hk,dk,pk];xA(mk,{mixoutsTo:vt});vt.noAuto;vt.config;vt.library;vt.dom;var nh=vt.parse;vt.findIconDefinition;vt.toHtml;var gk=vt.icon;vt.layer;vt.text;vt.counter;var n_={exports:{}},yk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vk=yk,_k=vk;function r_(){}function i_(){}i_.resetWarningCache=r_;var wk=function(){function e(r,i,s,o,a,l){if(l!==_k){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i_,resetWarningCache:r_};return n.PropTypes=n,n};n_.exports=wk();var Ek=n_.exports;const W=iv(Ek);function Ug(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ug(Object(n),!0).forEach(function(r){ci(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ug(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Al(e){"@babel/helpers - typeof";return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Al(e)}function ci(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ik(e,t){if(e==null)return{};var n=Tk(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function rh(e){return Sk(e)||Ak(e)||kk(e)||Ck()}function Sk(e){if(Array.isArray(e))return ih(e)}function Ak(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kk(e,t){if(e){if(typeof e=="string")return ih(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ih(e,t)}}function ih(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ck(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xk(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,m=e.inverse,v=e.border,_=e.listItem,E=e.flip,p=e.size,d=e.rotation,g=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":m,"fa-border":v,"fa-li":_,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},ci(t,"fa-".concat(p),typeof p<"u"&&p!==null),ci(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),ci(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ci(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(T){return w[T]?T:null}).filter(function(T){return T})}function Pk(e){return e=e-0,e===e}function s_(e){return Pk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Rk=["style"];function bk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Nk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=s_(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[bk(i)]=s:t[i]=s,t},{})}function o_(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return o_(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Nk(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[s_(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Ik(n,Rk);return i.attrs.style=Rn(Rn({},i.attrs.style),o),e.apply(void 0,[t.tag,Rn(Rn({},i.attrs),a)].concat(rh(r)))}var a_=!1;try{a_=!0}catch{}function Dk(){if(!a_&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zg(e){if(e&&Al(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(nh.icon)return nh.icon(e);if(e===null)return null;if(e&&Al(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ac(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ci({},e,t):{}}var ft=ql.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,u=zg(n),c=Ac("classes",[].concat(rh(xk(e)),rh(s.split(" ")))),f=Ac("transform",typeof e.transform=="string"?nh.transform(e.transform):e.transform),h=Ac("mask",zg(r)),m=gk(u,Rn(Rn(Rn(Rn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return Dk("Could not find icon",u),null;var v=m.abstract,_={ref:t};return Object.keys(e).forEach(function(E){ft.defaultProps.hasOwnProperty(E)||(_[E]=e[E])}),Vk(v[0],_)});ft.displayName="FontAwesomeIcon";ft.propTypes={beat:W.bool,border:W.bool,beatFade:W.bool,bounce:W.bool,className:W.string,fade:W.bool,flash:W.bool,mask:W.oneOfType([W.object,W.array,W.string]),maskId:W.string,fixedWidth:W.bool,inverse:W.bool,flip:W.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.oneOfType([W.object,W.array,W.string]),listItem:W.bool,pull:W.oneOf(["right","left"]),pulse:W.bool,rotation:W.oneOf([0,90,180,270]),shake:W.bool,size:W.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.bool,spinPulse:W.bool,spinReverse:W.bool,symbol:W.oneOfType([W.bool,W.string]),title:W.string,titleId:W.string,transform:W.oneOfType([W.string,W.object]),swapOpacity:W.bool};ft.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Vk=o_.bind(null,ql.createElement),Ok={prefix:"fas",iconName:"virus",icon:[512,512,[],"e074","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H43.5c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H468.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5V32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Lk={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},Mk={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Fk={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},$k={prefix:"fas",iconName:"up-long",icon:[320,512,["long-arrow-alt-up"],"f30c","M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z"]},jk={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Uk={prefix:"fas",iconName:"hammer",icon:[576,512,[128296],"f6e3","M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"]},zk={prefix:"fas",iconName:"scale-balanced",icon:[640,512,[9878,"balance-scale"],"f24e","M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"]},Bk={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};const Hk=()=>{const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";return y.jsx("nav",{className:"navbar navbar-expand-lg bg-light navbar-light mb-3",children:y.jsxs("div",{className:"container",children:[y.jsx("a",{className:"navbar-brand",href:"https://kbelony.github.io/blogReact/",children:y.jsx("img",{id:"Logo",src:"https://uploads-ssl.webflow.com/63f29d4eb366b713474ba881/6446760426bdb95288c586ef_LogoNomWhite.png",alt:"Logo",draggable:"false",height:"30"})}),y.jsx("button",{className:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:y.jsx("i",{className:"fas fa-bars"})}),e&&y.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:y.jsxs("ul",{className:"navbar-nav ms-auto align-items-center",children:[y.jsx("li",{className:"nav-item",children:y.jsxs("a",{className:"nav-link mx-2",href:"blogReact/create",children:[y.jsx(ft,{icon:jk}),"Create"]})}),y.jsx("li",{className:"nav-item",children:y.jsxs("a",{className:"nav-link mx-2",href:"blogReact/delete",children:[y.jsx(ft,{icon:Fk}),"Delete"]})})]})})]})})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Wk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),r.push(n[c],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(l_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new qk;const h=s<<2|a>>4;if(r.push(h),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kk=function(e){const t=l_(e);return u_.encodeByteArray(t,!0)},kl=function(e){return Kk(e).replace(/\./g,"")},Gk=function(e){try{return u_.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=()=>Qk().__FIREBASE_DEFAULTS__,Xk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Jk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gk(e[1]);return t&&JSON.parse(t)},c_=()=>{try{return Yk()||Xk()||Jk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zk=e=>{var t,n;return(n=(t=c_())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},eC=e=>{const t=Zk(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},f_=()=>{var e;return(e=c_())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[kl(JSON.stringify(n)),kl(JSON.stringify(o)),a].join(".")}function rC(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function h_(){try{return typeof indexedDB=="object"}catch{return!1}}function d_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function iC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="FirebaseError";class sr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sC,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pu.prototype.create)}}class pu{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?oC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function oC(e,t){return e.replace(aC,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const aC=/\{\$([^}]+)}/g;function Cl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Bg(s)&&Bg(o)){if(!Cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=1e3,uC=2,cC=4*60*60*1e3,fC=.5;function Hg(e,t=lC,n=uC){const r=t*Math.pow(n,e),i=Math.round(fC*r*(Math.random()-.5)*2);return Math.min(cC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){return e&&e._delegate?e._delegate:e}class pn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new tC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pC(t))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=dr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dr){return this.instances.has(t)}getOptions(t=dr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dr){return this.component?this.component.multipleInstances?t:dr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dC(e){return e===dr?void 0:e}function pC(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const gC={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},yC=J.INFO,vC={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},_C=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=vC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kd{constructor(t){this.name=t,this._logLevel=yC,this._logHandler=_C,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const wC=(e,t)=>t.some(n=>e instanceof n);let Wg,qg;function EC(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TC(){return qg||(qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,sh=new WeakMap,m_=new WeakMap,kc=new WeakMap,Gd=new WeakMap;function IC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Un(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&p_.set(n,e)}).catch(()=>{}),Gd.set(t,e),t}function SC(e){if(sh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});sh.set(e,t)}let oh={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||m_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function AC(e){oh=e(oh)}function kC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cc(this),t,...n);return m_.set(r,t.sort?t.sort():[t]),Un(r)}:TC().includes(e)?function(...t){return e.apply(Cc(this),t),Un(p_.get(this))}:function(...t){return Un(e.apply(Cc(this),t))}}function CC(e){return typeof e=="function"?kC(e):(e instanceof IDBTransaction&&SC(e),wC(e,EC())?new Proxy(e,oh):e)}function Un(e){if(e instanceof IDBRequest)return IC(e);if(kc.has(e))return kc.get(e);const t=CC(e);return t!==e&&(kc.set(e,t),Gd.set(t,e)),t}const Cc=e=>Gd.get(e);function xC(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const PC=["get","getKey","getAll","getAllKeys","count"],RC=["put","add","delete","clear"],xc=new Map;function Kg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xc.get(t))return xc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=RC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xc.set(t,s),s}AC(e=>({...e,get:(t,n,r)=>Kg(t,n)||e.get(t,n,r),has:(t,n)=>!!Kg(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ah="@firebase/app",Gg="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Kd("@firebase/app"),DC="@firebase/app-compat",VC="@firebase/analytics-compat",OC="@firebase/analytics",LC="@firebase/app-check-compat",MC="@firebase/app-check",FC="@firebase/auth",$C="@firebase/auth-compat",jC="@firebase/database",UC="@firebase/database-compat",zC="@firebase/functions",BC="@firebase/functions-compat",HC="@firebase/installations",WC="@firebase/installations-compat",qC="@firebase/messaging",KC="@firebase/messaging-compat",GC="@firebase/performance",QC="@firebase/performance-compat",YC="@firebase/remote-config",XC="@firebase/remote-config-compat",JC="@firebase/storage",ZC="@firebase/storage-compat",ex="@firebase/firestore",tx="@firebase/firestore-compat",nx="firebase",rx="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="[DEFAULT]",ix={[ah]:"fire-core",[DC]:"fire-core-compat",[OC]:"fire-analytics",[VC]:"fire-analytics-compat",[MC]:"fire-app-check",[LC]:"fire-app-check-compat",[FC]:"fire-auth",[$C]:"fire-auth-compat",[jC]:"fire-rtdb",[UC]:"fire-rtdb-compat",[zC]:"fire-fn",[BC]:"fire-fn-compat",[HC]:"fire-iid",[WC]:"fire-iid-compat",[qC]:"fire-fcm",[KC]:"fire-fcm-compat",[GC]:"fire-perf",[QC]:"fire-perf-compat",[YC]:"fire-rc",[XC]:"fire-rc-compat",[JC]:"fire-gcs",[ZC]:"fire-gcs-compat",[ex]:"fire-fst",[tx]:"fire-fst-compat","fire-js":"fire-js",[nx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map,uh=new Map;function sx(e,t){try{e.container.addComponent(t)}catch(n){Vr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yn(e){const t=e.name;if(uh.has(t))return Vr.debug(`There were multiple attempts to register component ${t}.`),!1;uh.set(t,e);for(const n of xl.values())sx(n,e);return!0}function bo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new pu("app","Firebase",ox);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=rx;function g_(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:lh,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw zn.create("bad-app-name",{appName:String(i)});if(n||(n=f_()),!n)throw zn.create("no-options");const s=xl.get(i);if(s){if(Cl(n,s.options)&&Cl(r,s.config))return s;throw zn.create("duplicate-app",{appName:i})}const o=new mC(i);for(const l of uh.values())o.addComponent(l);const a=new ax(n,r,o);return xl.set(i,a),a}function y_(e=lh){const t=xl.get(e);if(!t&&e===lh&&f_())return g_();if(!t)throw zn.create("no-app",{appName:e});return t}function Gt(e,t,n){var r;let i=(r=ix[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vr.warn(a.join(" "));return}Yn(new pn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="firebase-heartbeat-database",cx=1,oo="firebase-heartbeat-store";let Pc=null;function v_(){return Pc||(Pc=xC(ux,cx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(oo)}}}).catch(e=>{throw zn.create("idb-open",{originalErrorMessage:e.message})})),Pc}async function fx(e){try{return await(await v_()).transaction(oo).objectStore(oo).get(__(e))}catch(t){if(t instanceof sr)Vr.warn(t.message);else{const n=zn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(n.message)}}}async function Qg(e,t){try{const r=(await v_()).transaction(oo,"readwrite");await r.objectStore(oo).put(t,__(e)),await r.done}catch(n){if(n instanceof sr)Vr.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(r.message)}}}function __(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=1024,dx=30*24*60*60*1e3;class px{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yg(),{heartbeatsToSend:n,unsentEntries:r}=mx(this._heartbeatsCache.heartbeats),i=kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yg(){return new Date().toISOString().substring(0,10)}function mx(e,t=hx){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return h_()?d_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Xg(e){return kl(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(e){Yn(new pn("platform-logger",t=>new bC(t),"PRIVATE")),Yn(new pn("heartbeat",t=>new px(t),"PRIVATE")),Gt(ah,Gg,e),Gt(ah,Gg,"esm2017"),Gt("fire-js","")}yx("");var vx="firebase",_x="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(vx,_x,"app");const wx=(e,t)=>t.some(n=>e instanceof n);let Jg,Zg;function Ex(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tx(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const w_=new WeakMap,ch=new WeakMap,E_=new WeakMap,Rc=new WeakMap,Qd=new WeakMap;function Ix(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Bn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&w_.set(n,e)}).catch(()=>{}),Qd.set(t,e),t}function Sx(e){if(ch.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ch.set(e,t)}let fh={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ch.get(e);if(t==="objectStoreNames")return e.objectStoreNames||E_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ax(e){fh=e(fh)}function kx(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bc(this),t,...n);return E_.set(r,t.sort?t.sort():[t]),Bn(r)}:Tx().includes(e)?function(...t){return e.apply(bc(this),t),Bn(w_.get(this))}:function(...t){return Bn(e.apply(bc(this),t))}}function Cx(e){return typeof e=="function"?kx(e):(e instanceof IDBTransaction&&Sx(e),wx(e,Ex())?new Proxy(e,fh):e)}function Bn(e){if(e instanceof IDBRequest)return Ix(e);if(Rc.has(e))return Rc.get(e);const t=Cx(e);return t!==e&&(Rc.set(e,t),Qd.set(t,e)),t}const bc=e=>Qd.get(e);function xx(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Bn(o.result),l.oldVersion,l.newVersion,Bn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Px=["get","getKey","getAll","getAllKeys","count"],Rx=["put","add","delete","clear"],Nc=new Map;function ey(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Nc.get(t))return Nc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Rx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Px.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Nc.set(t,s),s}Ax(e=>({...e,get:(t,n,r)=>ey(t,n)||e.get(t,n,r),has:(t,n)=>!!ey(t,n)||e.has(t,n)}));const T_="@firebase/installations",Yd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=1e4,S_=`w:${Yd}`,A_="FIS_v2",bx="https://firebaseinstallations.googleapis.com/v1",Nx=60*60*1e3,Dx="installations",Vx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Or=new pu(Dx,Vx,Ox);function k_(e){return e instanceof sr&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_({projectId:e}){return`${bx}/projects/${e}/installations`}function x_(e){return{token:e.token,requestStatus:2,expiresIn:Mx(e.expiresIn),creationTime:Date.now()}}async function P_(e,t){const r=(await t.json()).error;return Or.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function R_({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Lx(e,{refreshToken:t}){const n=R_(e);return n.append("Authorization",Fx(t)),n}async function b_(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Mx(e){return Number(e.replace("s","000"))}function Fx(e){return`${A_} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=C_(e),i=R_(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:A_,appId:e.appId,sdkVersion:S_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await b_(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:x_(u.authToken)}}else throw await P_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=/^[cdef][\w-]{21}$/,hh="";function zx(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Bx(e);return Ux.test(n)?n:hh}catch{return hh}}function Bx(e){return jx(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new Map;function V_(e,t){const n=mu(e);O_(n,t),Hx(n,t)}function O_(e,t){const n=D_.get(e);if(n)for(const r of n)r(t)}function Hx(e,t){const n=Wx();n&&n.postMessage({key:e,fid:t}),qx()}let _r=null;function Wx(){return!_r&&"BroadcastChannel"in self&&(_r=new BroadcastChannel("[Firebase] FID Change"),_r.onmessage=e=>{O_(e.data.key,e.data.fid)}),_r}function qx(){D_.size===0&&_r&&(_r.close(),_r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="firebase-installations-database",Gx=1,Lr="firebase-installations-store";let Dc=null;function Xd(){return Dc||(Dc=xx(Kx,Gx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Lr)}}})),Dc}async function Pl(e,t){const n=mu(e),i=(await Xd()).transaction(Lr,"readwrite"),s=i.objectStore(Lr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&V_(e,t.fid),t}async function L_(e){const t=mu(e),r=(await Xd()).transaction(Lr,"readwrite");await r.objectStore(Lr).delete(t),await r.done}async function gu(e,t){const n=mu(e),i=(await Xd()).transaction(Lr,"readwrite"),s=i.objectStore(Lr),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&V_(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(e){let t;const n=await gu(e.appConfig,r=>{const i=Qx(r),s=Yx(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===hh?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Qx(e){const t=e||{fid:zx(),registrationStatus:0};return M_(t)}function Yx(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Or.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Xx(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Jx(e)}:{installationEntry:t}}async function Xx(e,t){try{const n=await $x(e,t);return Pl(e.appConfig,n)}catch(n){throw k_(n)&&n.customData.serverCode===409?await L_(e.appConfig):await Pl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Jx(e){let t=await ty(e.appConfig);for(;t.registrationStatus===1;)await N_(100),t=await ty(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jd(e);return r||n}return t}function ty(e){return gu(e,t=>{if(!t)throw Or.create("installation-not-found");return M_(t)})}function M_(e){return Zx(e)?{fid:e.fid,registrationStatus:0}:e}function Zx(e){return e.registrationStatus===1&&e.registrationTime+I_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP({appConfig:e,heartbeatServiceProvider:t},n){const r=tP(e,n),i=Lx(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:S_,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await b_(()=>fetch(r,a));if(l.ok){const u=await l.json();return x_(u)}else throw await P_("Generate Auth Token",l)}function tP(e,{fid:t}){return`${C_(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(e,t=!1){let n;const r=await gu(e.appConfig,s=>{if(!F_(s))throw Or.create("not-registered");const o=s.authToken;if(!t&&iP(o))return s;if(o.requestStatus===1)return n=nP(e,t),s;{if(!navigator.onLine)throw Or.create("app-offline");const a=oP(s);return n=rP(e,a),a}});return n?await n:r.authToken}async function nP(e,t){let n=await ny(e.appConfig);for(;n.authToken.requestStatus===1;)await N_(100),n=await ny(e.appConfig);const r=n.authToken;return r.requestStatus===0?Zd(e,t):r}function ny(e){return gu(e,t=>{if(!F_(t))throw Or.create("not-registered");const n=t.authToken;return aP(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function rP(e,t){try{const n=await eP(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Pl(e.appConfig,r),n}catch(n){if(k_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await L_(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pl(e.appConfig,r)}throw n}}function F_(e){return e!==void 0&&e.registrationStatus===2}function iP(e){return e.requestStatus===2&&!sP(e)}function sP(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Nx}function oP(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function aP(e){return e.requestStatus===1&&e.requestTime+I_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(e){const t=e,{installationEntry:n,registrationPromise:r}=await Jd(t);return r?r.catch(console.error):Zd(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(e,t=!1){const n=e;return await cP(n),(await Zd(n,t)).token}async function cP(e){const{registrationPromise:t}=await Jd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(e){if(!e||!e.options)throw Vc("App Configuration");if(!e.name)throw Vc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Vc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Vc(e){return Or.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="installations",hP="installations-internal",dP=e=>{const t=e.getProvider("app").getImmediate(),n=fP(t),r=bo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pP=e=>{const t=e.getProvider("app").getImmediate(),n=bo(t,$_).getImmediate();return{getId:()=>lP(n),getToken:i=>uP(n,i)}};function mP(){Yn(new pn($_,dP,"PUBLIC")),Yn(new pn(hP,pP,"PRIVATE"))}mP();Gt(T_,Yd);Gt(T_,Yd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="analytics",gP="firebase_id",yP="origin",vP=60*1e3,_P="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ep="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Kd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new pu("analytics","Analytics",wP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(e){if(!e.startsWith(ep)){const t=dt.create("invalid-gtag-resource",{gtagURL:e});return lt.warn(t.message),""}return e}function j_(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function TP(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function IP(e,t){const n=TP("firebase-js-sdk-policy",{createScriptURL:EP}),r=document.createElement("script"),i=`${ep}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function SP(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function AP(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await j_(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){lt.error(a)}e("config",i,s)}async function kP(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await j_(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){lt.error(s)}}function CP(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await kP(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await AP(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){lt.error(a)}}return i}function xP(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=CP(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function PP(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ep)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=30,bP=1e3;class NP{constructor(t={},n=bP){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const U_=new NP;function DP(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function VP(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:DP(r)},s=_P.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function OP(e,t=U_,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw dt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new FP;return setTimeout(async()=>{a.abort()},n!==void 0?n:vP),z_({appId:r,apiKey:i,measurementId:s},o,a,t)}async function z_(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=U_){var s;const{appId:o,measurementId:a}=e;try{await LP(r,t)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await VP(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!MP(u)){if(i.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hg(n,i.intervalMillis,RP):Hg(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),lt.debug(`Calling attemptFetch again in ${c} millis`),z_(e,f,r,i)}}function LP(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(dt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function MP(e){if(!(e instanceof sr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class FP{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $P(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(){if(h_())try{await d_()}catch(e){return lt.warn(dt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return lt.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function UP(e,t,n,r,i,s,o){var a;const l=OP(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>lt.error(m)),t.push(l);const u=jP().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([l,u]);PP(s)||IP(s,c.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[yP]="firebase",h.update=!0,f!=null&&(h[gP]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(t){this.app=t}_delete(){return delete bs[this.app.options.appId],Promise.resolve()}}let bs={},ry=[];const iy={};let Oc="dataLayer",BP="gtag",sy,B_,oy=!1;function HP(){const e=[];if(rC()&&e.push("This is a browser extension environment."),iC()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:t});lt.warn(n.message)}}function WP(e,t,n){HP();const r=e.options.appId;if(!r)throw dt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(bs[r]!=null)throw dt.create("already-exists",{id:r});if(!oy){SP(Oc);const{wrappedGtag:s,gtagCore:o}=xP(bs,ry,iy,Oc,BP);B_=s,sy=o,oy=!0}return bs[r]=UP(e,ry,iy,t,sy,Oc,n),new zP(e)}function qP(e=y_()){e=Dr(e);const t=bo(e,Rl);return t.isInitialized()?t.getImmediate():KP(e)}function KP(e,t={}){const n=bo(e,Rl);if(n.isInitialized()){const i=n.getImmediate();if(Cl(t,n.getOptions()))return i;throw dt.create("already-initialized")}return n.initialize({options:t})}function GP(e,t,n,r){e=Dr(e),$P(B_,bs[e.app.options.appId],t,n,r).catch(i=>lt.error(i))}const ay="@firebase/analytics",ly="0.10.0";function QP(){Yn(new pn(Rl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return WP(r,i,n)},"PUBLIC")),Yn(new pn("analytics-internal",e,"PRIVATE")),Gt(ay,ly),Gt(ay,ly,"esm2017");function e(t){try{const n=t.getProvider(Rl).getImmediate();return{logEvent:(r,i,s)=>GP(n,r,i,s)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}QP();var YP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,tp=tp||{},$=YP||self;function yu(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function No(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function XP(e){return Object.prototype.hasOwnProperty.call(e,Lc)&&e[Lc]||(e[Lc]=++JP)}var Lc="closure_uid_"+(1e9*Math.random()>>>0),JP=0;function ZP(e,t,n){return e.call.apply(e.bind,arguments)}function eR(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ke(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=ZP:Ke=eR,Ke.apply(null,arguments)}function Ta(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function De(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var tR=0;or.prototype.s=!1;or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tR!=0)&&XP(this)};or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const H_=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function np(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function uy(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yu(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ge(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var nR=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$.addEventListener("test",()=>{},t),$.removeEventListener("test",()=>{},t)}catch{}return e}();function ao(e){return/^[\s\xa0]*$/.test(e)}function vu(){var e=$.navigator;return e&&(e=e.userAgent)?e:""}function zt(e){return vu().indexOf(e)!=-1}function rp(e){return rp[" "](e),e}rp[" "]=function(){};function rR(e,t){var n=QR;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var iR=zt("Opera"),bi=zt("Trident")||zt("MSIE"),W_=zt("Edge"),dh=W_||bi,q_=zt("Gecko")&&!(vu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),sR=vu().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function K_(){var e=$.document;return e?e.documentMode:void 0}var ph;e:{var Mc="",Fc=function(){var e=vu();if(q_)return/rv:([^\);]+)(\)|;)/.exec(e);if(W_)return/Edge\/([\d\.]+)/.exec(e);if(bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(sR)return/WebKit\/(\S+)/.exec(e);if(iR)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fc&&(Mc=Fc?Fc[1]:""),bi){var $c=K_();if($c!=null&&$c>parseFloat(Mc)){ph=String($c);break e}}ph=Mc}var mh;if($.document&&bi){var cy=K_();mh=cy||parseInt(ph,10)||void 0}else mh=void 0;var oR=mh;function lo(e,t){if(Ge.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q_){e:{try{rp(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:aR[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&lo.$.h.call(this)}}De(lo,Ge);var aR={2:"touch",3:"pen",4:"mouse"};lo.prototype.h=function(){lo.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Do="closure_listenable_"+(1e6*Math.random()|0),lR=0;function uR(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++lR,this.fa=this.ia=!1}function _u(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ip(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function cR(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function G_(e){const t={};for(const n in e)t[n]=e[n];return t}const fy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Q_(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<fy.length;s++)n=fy[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function wu(e){this.src=e,this.g={},this.h=0}wu.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=yh(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new uR(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function gh(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=H_(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_u(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function yh(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var sp="closure_lm_"+(1e6*Math.random()|0),jc={};function Y_(e,t,n,r,i){if(r&&r.once)return J_(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Y_(e,t[s],n,r,i);return null}return n=lp(n),e&&e[Do]?e.O(t,n,No(r)?!!r.capture:!!r,i):X_(e,t,n,!1,r,i)}function X_(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=No(i)?!!i.capture:!!i,a=ap(e);if(a||(e[sp]=a=new wu(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fR(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)nR||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ew(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fR(){function e(n){return t.call(e.src,e.listener,n)}const t=hR;return e}function J_(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)J_(e,t[s],n,r,i);return null}return n=lp(n),e&&e[Do]?e.P(t,n,No(r)?!!r.capture:!!r,i):X_(e,t,n,!0,r,i)}function Z_(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Z_(e,t[s],n,r,i);else r=No(r)?!!r.capture:!!r,n=lp(n),e&&e[Do]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=yh(s,n,r,i),-1<n&&(_u(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=ap(e))&&(t=e.g[t.toString()],e=-1,t&&(e=yh(t,n,r,i)),(n=-1<e?t[e]:null)&&op(n))}function op(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Do])gh(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ew(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ap(t))?(gh(n,e),n.h==0&&(n.src=null,t[sp]=null)):_u(e)}}}function ew(e){return e in jc?jc[e]:jc[e]="on"+e}function hR(e,t){if(e.fa)e=!0;else{t=new lo(t,this);var n=e.listener,r=e.la||e.src;e.ia&&op(e),e=n.call(r,t)}return e}function ap(e){return e=e[sp],e instanceof wu?e:null}var Uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function lp(e){return typeof e=="function"?e:(e[Uc]||(e[Uc]=function(t){return e.handleEvent(t)}),e[Uc])}function Ne(){or.call(this),this.i=new wu(this),this.S=this,this.J=null}De(Ne,or);Ne.prototype[Do]=!0;Ne.prototype.removeEventListener=function(e,t,n,r){Z_(this,e,t,n,r)};function Fe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ge(t,e);else if(t instanceof Ge)t.target=t.target||e;else{var i=t;t=new Ge(r,e),Q_(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ia(o,r,!0,t)&&i}if(o=t.g=e,i=Ia(o,r,!0,t)&&i,i=Ia(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ia(o,r,!1,t)&&i}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)_u(n[r]);delete e.g[t],e.h--}}this.J=null};Ne.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Ne.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ia(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&gh(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var up=$.JSON.stringify;class dR{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function pR(){var e=cp;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mR{constructor(){this.h=this.g=null}add(t,n){const r=tw.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tw=new dR(()=>new gR,e=>e.reset());class gR{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yR(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function vR(e){$.setTimeout(()=>{throw e},0)}let uo,co=!1,cp=new mR,nw=()=>{const e=$.Promise.resolve(void 0);uo=()=>{e.then(_R)}};var _R=()=>{for(var e;e=pR();){try{e.h.call(e.g)}catch(n){vR(n)}var t=tw;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}co=!1};function Eu(e,t){Ne.call(this),this.h=e||1,this.g=t||$,this.j=Ke(this.qb,this),this.l=Date.now()}De(Eu,Ne);x=Eu.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fe(this,"tick"),this.ga&&(fp(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fp(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}x.N=function(){Eu.$.N.call(this),fp(this),delete this.g};function hp(e,t,n){if(typeof e=="function")n&&(e=Ke(e,n));else if(e&&typeof e.handleEvent=="function")e=Ke(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:$.setTimeout(e,t||0)}function rw(e){e.g=hp(()=>{e.g=null,e.i&&(e.i=!1,rw(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class wR extends or{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:rw(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(e){or.call(this),this.h=e,this.g={}}De(fo,or);var hy=[];function iw(e,t,n,r){Array.isArray(n)||(n&&(hy[0]=n.toString()),n=hy);for(var i=0;i<n.length;i++){var s=Y_(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function sw(e){ip(e.g,function(t,n){this.g.hasOwnProperty(n)&&op(t)},e),e.g={}}fo.prototype.N=function(){fo.$.N.call(this),sw(this)};fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tu(){this.g=!0}Tu.prototype.Ea=function(){this.g=!1};function ER(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function TR(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function fi(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+SR(e,n)+(r?" "+r:"")})}function IR(e,t){e.info(function(){return"TIMEOUT: "+t})}Tu.prototype.info=function(){};function SR(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return up(n)}catch{return t}}var Br={},dy=null;function Iu(){return dy=dy||new Ne}Br.Ta="serverreachability";function ow(e){Ge.call(this,Br.Ta,e)}De(ow,Ge);function ho(e){const t=Iu();Fe(t,new ow(t))}Br.STAT_EVENT="statevent";function aw(e,t){Ge.call(this,Br.STAT_EVENT,e),this.stat=t}De(aw,Ge);function Ze(e){const t=Iu();Fe(t,new aw(t,e))}Br.Ua="timingevent";function lw(e,t){Ge.call(this,Br.Ua,e),this.size=t}De(lw,Ge);function Vo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){e()},t)}var Su={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function dp(){}dp.prototype.h=null;function py(e){return e.h||(e.h=e.i())}function cw(){}var Oo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pp(){Ge.call(this,"d")}De(pp,Ge);function mp(){Ge.call(this,"c")}De(mp,Ge);var vh;function Au(){}De(Au,dp);Au.prototype.g=function(){return new XMLHttpRequest};Au.prototype.i=function(){return{}};vh=new Au;function Lo(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new fo(this),this.P=AR,e=dh?125:void 0,this.V=new Eu(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new fw}function fw(){this.i=null,this.g="",this.h=!1}var AR=45e3,_h={},bl={};x=Lo.prototype;x.setTimeout=function(e){this.P=e};function wh(e,t,n){e.L=1,e.v=Cu(mn(t)),e.s=n,e.S=!0,hw(e,null)}function hw(e,t){e.G=Date.now(),Mo(e),e.A=mn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ww(n.i,"t",r),e.C=0,n=e.l.J,e.h=new fw,e.g=Uw(e.l,n?t:null,!e.s),0<e.O&&(e.M=new wR(Ke(e.Pa,e,e.g),e.O)),iw(e.U,e.g,"readystatechange",e.nb),t=e.I?G_(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ho(),ER(e.j,e.u,e.A,e.m,e.W,e.s)}x.nb=function(e){e=e.target;const t=this.M;t&&Ht(e)==3?t.l():this.Pa(e)};x.Pa=function(e){try{if(e==this.g)e:{const c=Ht(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||dh||this.g&&(this.h.h||this.g.ja()||vy(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?ho(3):ho(2)),ku(this);var n=this.g.da();this.ca=n;t:if(dw(this)){var r=vy(this.g);e="";var i=r.length,s=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),Ns(this);var o="";break t}this.h.i=new $.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,TR(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ao(a)){var u=a;break t}}u=null}if(n=u)fi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eh(this,n);else{this.i=!1,this.o=3,Ze(12),wr(this),Ns(this);break e}}this.S?(pw(this,c,o),dh&&this.i&&c==3&&(iw(this.U,this.V,"tick",this.mb),this.V.start())):(fi(this.j,this.m,o,null),Eh(this,o)),c==4&&wr(this),this.i&&!this.J&&(c==4?Mw(this.l,this):(this.i=!1,Mo(this)))}else qR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),wr(this),Ns(this)}}}catch{}finally{}};function dw(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function pw(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=kR(e,n),i==bl){t==4&&(e.o=4,Ze(14),r=!1),fi(e.j,e.m,null,"[Incomplete Response]");break}else if(i==_h){e.o=4,Ze(15),fi(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else fi(e.j,e.m,i,null),Eh(e,i);dw(e)&&i!=bl&&i!=_h&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ze(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ep(t),t.M=!0,Ze(11))):(fi(e.j,e.m,n,"[Invalid Chunked Response]"),wr(e),Ns(e))}x.mb=function(){if(this.g){var e=Ht(this.g),t=this.g.ja();this.C<t.length&&(ku(this),pw(this,e,t),this.i&&e!=4&&Mo(this))}};function kR(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?bl:(n=Number(t.substring(n,r)),isNaN(n)?_h:(r+=1,r+n>t.length?bl:(t=t.slice(r,r+n),e.C=r+n,t)))}x.cancel=function(){this.J=!0,wr(this)};function Mo(e){e.Y=Date.now()+e.P,mw(e,e.P)}function mw(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Vo(Ke(e.lb,e),t)}function ku(e){e.B&&($.clearTimeout(e.B),e.B=null)}x.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(IR(this.j,this.A),this.L!=2&&(ho(),Ze(17)),wr(this),this.o=2,Ns(this)):mw(this,this.Y-e)};function Ns(e){e.l.H==0||e.J||Mw(e.l,e)}function wr(e){ku(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,fp(e.V),sw(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Eh(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Th(n.i,e))){if(!e.K&&Th(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Vl(n),Ru(n);else break e;wp(n),Ze(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vo(Ke(n.ib,n),6e3));if(1>=Iw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Er(n,11)}else if((e.K||n.g==e)&&Vl(n),!ao(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gp(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ie(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=jw(r,r.J?r.pa:null,r.Y),o.K){Sw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ku(a),Mo(a)),r.g=o}else Ow(r);0<n.j.length&&bu(n)}else u[0]!="stop"&&u[0]!="close"||Er(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Er(n,7):_p(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ho(4)}catch{}}function CR(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(yu(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function xR(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(yu(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function gw(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(yu(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=xR(e),r=CR(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var yw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PR(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ar(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ar){this.h=e.h,Nl(this,e.j),this.s=e.s,this.g=e.g,Dl(this,e.m),this.l=e.l;var t=e.i,n=new po;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),my(this,n),this.o=e.o}else e&&(t=String(e).match(yw))?(this.h=!1,Nl(this,t[1]||"",!0),this.s=ms(t[2]||""),this.g=ms(t[3]||"",!0),Dl(this,t[4]),this.l=ms(t[5]||"",!0),my(this,t[6]||"",!0),this.o=ms(t[7]||"")):(this.h=!1,this.i=new po(null,this.h))}Ar.prototype.toString=function(){var e=[],t=this.j;t&&e.push(gs(t,gy,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(gs(t,gy,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(gs(n,n.charAt(0)=="/"?NR:bR,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",gs(n,VR)),e.join("")};function mn(e){return new Ar(e)}function Nl(e,t,n){e.j=n?ms(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dl(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function my(e,t,n){t instanceof po?(e.i=t,OR(e.i,e.h)):(n||(t=gs(t,DR)),e.i=new po(t,e.h))}function ie(e,t,n){e.i.set(t,n)}function Cu(e){return ie(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ms(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function gs(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,RR),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function RR(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gy=/[#\/\?@]/g,bR=/[#\?:]/g,NR=/[#\?]/g,DR=/[#\?@]/g,VR=/#/g;function po(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ar(e){e.g||(e.g=new Map,e.h=0,e.i&&PR(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}x=po.prototype;x.add=function(e,t){ar(this),this.i=null,e=qi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function vw(e,t){ar(e),t=qi(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _w(e,t){return ar(e),t=qi(e,t),e.g.has(t)}x.forEach=function(e,t){ar(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};x.ta=function(){ar(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};x.Z=function(e){ar(this);let t=[];if(typeof e=="string")_w(this,e)&&(t=t.concat(this.g.get(qi(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};x.set=function(e,t){return ar(this),this.i=null,e=qi(this,e),_w(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};x.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ww(e,t,n){vw(e,t),0<n.length&&(e.i=null,e.g.set(qi(e,t),np(n)),e.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function qi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function OR(e,t){t&&!e.j&&(ar(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(vw(this,r),ww(this,i,n))},e)),e.j=t}var LR=class{constructor(e,t){this.g=e,this.map=t}};function Ew(e){this.l=e||MR,$.PerformanceNavigationTiming?(e=$.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var MR=10;function Tw(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Iw(e){return e.h?1:e.g?e.g.size:0}function Th(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function gp(e,t){e.g?e.g.add(t):e.h=t}function Sw(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ew.prototype.cancel=function(){if(this.i=Aw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Aw(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return np(e.i)}var FR=class{stringify(e){return $.JSON.stringify(e,void 0)}parse(e){return $.JSON.parse(e,void 0)}};function $R(){this.g=new FR}function jR(e,t,n){const r=n||"";try{gw(e,function(i,s){let o=i;No(i)&&(o=up(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function UR(e,t){const n=new Tu;if($.Image){const r=new Image;r.onload=Ta(Sa,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ta(Sa,n,r,"TestLoadImage: error",!1,t),r.onabort=Ta(Sa,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ta(Sa,n,r,"TestLoadImage: timeout",!1,t),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Sa(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Fo(e){this.l=e.fc||null,this.j=e.ob||!1}De(Fo,dp);Fo.prototype.g=function(){return new xu(this.l,this.j)};Fo.prototype.i=function(e){return function(){return e}}({});function xu(e,t){Ne.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=yp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(xu,Ne);var yp=0;x=xu.prototype;x.open=function(e,t){if(this.readyState!=yp)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,mo(this)};x.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||$).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=yp};x.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,mo(this)),this.g&&(this.readyState=3,mo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kw(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function kw(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}x.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$o(this):mo(this),this.readyState==3&&kw(this)}};x.Za=function(e){this.g&&(this.response=this.responseText=e,$o(this))};x.Ya=function(e){this.g&&(this.response=e,$o(this))};x.ka=function(){this.g&&$o(this)};function $o(e){e.readyState=4,e.l=null,e.j=null,e.A=null,mo(e)}x.setRequestHeader=function(e,t){this.v.append(e,t)};x.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function mo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var zR=$.JSON.parse;function ge(e){Ne.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cw,this.L=this.M=!1}De(ge,Ne);var Cw="",BR=/^https?$/i,HR=["POST","PUT"];x=ge.prototype;x.Oa=function(e){this.M=e};x.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vh.g(),this.C=this.u?py(this.u):py(vh),this.g.onreadystatechange=Ke(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){yy(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&e instanceof $.FormData,!(0<=H_(HR,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rw(this),0<this.B&&((this.L=WR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.ua,this)):this.A=hp(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){yy(this,s)}};function WR(e){return bi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}x.ua=function(){typeof tp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function yy(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,xw(e),Pu(e)}function xw(e){e.F||(e.F=!0,Fe(e,"complete"),Fe(e,"error"))}x.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Fe(this,"complete"),Fe(this,"abort"),Pu(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pu(this,!0)),ge.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?Pw(this):this.kb())};x.kb=function(){Pw(this)};function Pw(e){if(e.h&&typeof tp<"u"&&(!e.C[1]||Ht(e)!=4||e.da()!=2)){if(e.v&&Ht(e)==4)hp(e.La,0,e);else if(Fe(e,"readystatechange"),Ht(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(yw)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!BR.test(i?i.toLowerCase():"")}n=r}if(n)Fe(e,"complete"),Fe(e,"success");else{e.m=6;try{var s=2<Ht(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",xw(e)}}finally{Pu(e)}}}}function Pu(e,t){if(e.g){Rw(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Fe(e,"ready");try{n.onreadystatechange=r}catch{}}}function Rw(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&($.clearTimeout(e.A),e.A=null)}x.isActive=function(){return!!this.g};function Ht(e){return e.g?e.g.readyState:0}x.da=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),zR(t)}};function vy(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Cw:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function qR(e){const t={};e=(e.g&&2<=Ht(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ao(e[r]))continue;var n=yR(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}cR(t,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bw(e){let t="";return ip(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function vp(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bw(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ie(e,t,n))}function ls(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Nw(e){this.Ga=0,this.j=[],this.l=new Tu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ls("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ls("baseRetryDelayMs",5e3,e),this.hb=ls("retryDelaySeedMs",1e4,e),this.eb=ls("forwardChannelMaxRetries",2,e),this.xa=ls("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ew(e&&e.concurrentRequestLimit),this.Ja=new $R,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=Nw.prototype;x.ra=8;x.H=1;function _p(e){if(Dw(e),e.H==3){var t=e.W++,n=mn(e.I);if(ie(n,"SID",e.K),ie(n,"RID",t),ie(n,"TYPE","terminate"),jo(e,n),t=new Lo(e,e.l,t),t.L=2,t.v=Cu(mn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&$.Image&&(new Image().src=t.v,n=!0),n||(t.g=Uw(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Mo(t)}$w(e)}function Ru(e){e.g&&(Ep(e),e.g.cancel(),e.g=null)}function Dw(e){Ru(e),e.u&&($.clearTimeout(e.u),e.u=null),Vl(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&$.clearTimeout(e.m),e.m=null)}function bu(e){if(!Tw(e.i)&&!e.m){e.m=!0;var t=e.Na;uo||nw(),co||(uo(),co=!0),cp.add(t,e),e.C=0}}function KR(e,t){return Iw(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Vo(Ke(e.Na,e,t),Fw(e,e.C)),e.C++,!0)}x.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Lo(this,this.l,e);let s=this.s;if(this.U&&(s?(s=G_(s),Q_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Vw(this,i,t),n=mn(this.I),ie(n,"RID",e),ie(n,"CVER",22),this.F&&ie(n,"X-HTTP-Session-Id",this.F),jo(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bw(s)))+"&"+t:this.o&&vp(n,this.o,s)),gp(this.i,i),this.bb&&ie(n,"TYPE","init"),this.P?(ie(n,"$req",t),ie(n,"SID","null"),i.aa=!0,wh(i,n,null)):wh(i,n,t),this.H=2}}else this.H==3&&(e?_y(this,e):this.j.length==0||Tw(this.i)||_y(this))};function _y(e,t){var n;t?n=t.m:n=e.W++;const r=mn(e.I);ie(r,"SID",e.K),ie(r,"RID",n),ie(r,"AID",e.V),jo(e,r),e.o&&e.s&&vp(r,e.o,e.s),n=new Lo(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Vw(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),gp(e.i,n),wh(n,r,t)}function jo(e,t){e.na&&ip(e.na,function(n,r){ie(t,r,n)}),e.h&&gw({},function(n,r){ie(t,r,n)})}function Vw(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ke(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{jR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Ow(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;uo||nw(),co||(uo(),co=!0),cp.add(t,e),e.A=0}}function wp(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Vo(Ke(e.Ma,e),Fw(e,e.A)),e.A++,!0)}x.Ma=function(){if(this.u=null,Lw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Vo(Ke(this.jb,this),e)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ze(10),Ru(this),Lw(this))};function Ep(e){e.B!=null&&($.clearTimeout(e.B),e.B=null)}function Lw(e){e.g=new Lo(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=mn(e.wa);ie(t,"RID","rpc"),ie(t,"SID",e.K),ie(t,"AID",e.V),ie(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ie(t,"TO",e.qa),ie(t,"TYPE","xmlhttp"),jo(e,t),e.o&&e.s&&vp(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Cu(mn(t)),n.s=null,n.S=!0,hw(n,e)}x.ib=function(){this.v!=null&&(this.v=null,Ru(this),wp(this),Ze(19))};function Vl(e){e.v!=null&&($.clearTimeout(e.v),e.v=null)}function Mw(e,t){var n=null;if(e.g==t){Vl(e),Ep(e),e.g=null;var r=2}else if(Th(e.i,t))n=t.F,Sw(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Iu(),Fe(r,new lw(r,n)),bu(e)}else Ow(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&KR(e,t)||r==2&&wp(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Er(e,5);break;case 4:Er(e,10);break;case 3:Er(e,6);break;default:Er(e,2)}}}function Fw(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Er(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ke(e.pb,e);n||(n=new Ar("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Nl(n,"https"),Cu(n)),UR(n.toString(),r)}else Ze(2);e.H=0,e.h&&e.h.za(t),$w(e),Dw(e)}x.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ze(2)):(this.l.info("Failed to ping google.com"),Ze(1))};function $w(e){if(e.H=0,e.ma=[],e.h){const t=Aw(e.i);(t.length!=0||e.j.length!=0)&&(uy(e.ma,t),uy(e.ma,e.j),e.i.i.length=0,np(e.j),e.j.length=0),e.h.ya()}}function jw(e,t,n){var r=n instanceof Ar?mn(n):new Ar(n);if(r.g!="")t&&(r.g=t+"."+r.g),Dl(r,r.m);else{var i=$.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ar(null);r&&Nl(s,r),t&&(s.g=t),i&&Dl(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ie(r,n,t),ie(r,"VER",e.ra),jo(e,r),r}function Uw(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ge(new Fo({ob:!0})):new ge(e.va),t.Oa(e.J),t}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function zw(){}x=zw.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Ol(){if(bi&&!(10<=Number(oR)))throw Error("Environmental error: no available transport.")}Ol.prototype.g=function(e,t){return new mt(e,t)};function mt(e,t){Ne.call(this),this.g=new Nw(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ao(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ao(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ki(this)}De(mt,Ne);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ze(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=jw(e,null,e.Y),bu(e)};mt.prototype.close=function(){_p(this.g)};mt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=up(e),e=n);t.j.push(new LR(t.fb++,e)),t.H==3&&bu(t)};mt.prototype.N=function(){this.g.h=null,delete this.j,_p(this.g),delete this.g,mt.$.N.call(this)};function Bw(e){pp.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}De(Bw,pp);function Hw(){mp.call(this),this.status=1}De(Hw,mp);function Ki(e){this.g=e}De(Ki,zw);Ki.prototype.Ba=function(){Fe(this.g,"a")};Ki.prototype.Aa=function(e){Fe(this.g,new Bw(e))};Ki.prototype.za=function(e){Fe(this.g,new Hw)};Ki.prototype.ya=function(){Fe(this.g,"b")};function GR(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(Ft,GR);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zc(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Ft.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)zc(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){zc(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){zc(this,r),i=0;break}}this.h=i,this.i+=t};Ft.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ee(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var QR={};function Tp(e){return-128<=e&&128>e?rR(e,function(t){return new ee([t|0],0>t?-1:0)}):new ee([e|0],0>e?-1:0)}function Wt(e){if(isNaN(e)||!isFinite(e))return _i;if(0>e)return Le(Wt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ih;return new ee(t,0)}function Ww(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Le(Ww(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Wt(Math.pow(t,8)),r=_i,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Wt(Math.pow(t,s)),r=r.R(s).add(Wt(o))):(r=r.R(n),r=r.add(Wt(o)))}return r}var Ih=4294967296,_i=Tp(0),Sh=Tp(1),wy=Tp(16777216);x=ee.prototype;x.ea=function(){if(Tt(this))return-Le(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ih+r)*t,t*=Ih}return e};x.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(rn(this))return"0";if(Tt(this))return"-"+Le(this).toString(e);for(var t=Wt(Math.pow(e,6)),n=this,r="";;){var i=Ml(n,t).g;n=Ll(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,rn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function rn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Tt(e){return e.h==-1}x.X=function(e){return e=Ll(this,e),Tt(e)?-1:rn(e)?0:1};function Le(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ee(n,~e.h).add(Sh)}x.abs=function(){return Tt(this)?Le(this):this};x.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ee(n,n[n.length-1]&-2147483648?-1:0)};function Ll(e,t){return e.add(Le(t))}x.R=function(e){if(rn(this)||rn(e))return _i;if(Tt(this))return Tt(e)?Le(this).R(Le(e)):Le(Le(this).R(e));if(Tt(e))return Le(this.R(Le(e)));if(0>this.X(wy)&&0>e.X(wy))return Wt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Aa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Aa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Aa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Aa(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ee(n,0)};function Aa(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function us(e,t){this.g=e,this.h=t}function Ml(e,t){if(rn(t))throw Error("division by zero");if(rn(e))return new us(_i,_i);if(Tt(e))return t=Ml(Le(e),t),new us(Le(t.g),Le(t.h));if(Tt(t))return t=Ml(e,Le(t)),new us(Le(t.g),t.h);if(30<e.g.length){if(Tt(e)||Tt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Sh,r=t;0>=r.X(e);)n=Ey(n),r=Ey(r);var i=Kr(n,1),s=Kr(r,1);for(r=Kr(r,2),n=Kr(n,2);!rn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Kr(r,1),n=Kr(n,1)}return t=Ll(e,i.R(t)),new us(i,t)}for(i=_i;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Wt(n),o=s.R(t);Tt(o)||0<o.X(e);)n-=r,s=Wt(n),o=s.R(t);rn(s)&&(s=Sh),i=i.add(s),e=Ll(e,o)}return new us(i,e)}x.gb=function(e){return Ml(this,e).h};x.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ee(n,this.h&e.h)};x.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ee(n,this.h|e.h)};x.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ee(n,this.h^e.h)};function Ey(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ee(n,e.h)}function Kr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new ee(i,e.h)}Ol.prototype.createWebChannel=Ol.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;Su.NO_ERROR=0;Su.TIMEOUT=8;Su.HTTP_ERROR=6;uw.COMPLETE="complete";cw.EventType=Oo;Oo.OPEN="a";Oo.CLOSE="b";Oo.ERROR="c";Oo.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;ge.prototype.listenOnce=ge.prototype.P;ge.prototype.getLastError=ge.prototype.Sa;ge.prototype.getLastErrorCode=ge.prototype.Ia;ge.prototype.getStatus=ge.prototype.da;ge.prototype.getResponseJson=ge.prototype.Wa;ge.prototype.getResponseText=ge.prototype.ja;ge.prototype.send=ge.prototype.ha;ge.prototype.setWithCredentials=ge.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;ee.prototype.add=ee.prototype.add;ee.prototype.multiply=ee.prototype.R;ee.prototype.modulo=ee.prototype.gb;ee.prototype.compare=ee.prototype.X;ee.prototype.toNumber=ee.prototype.ea;ee.prototype.toString=ee.prototype.toString;ee.prototype.getBits=ee.prototype.D;ee.fromNumber=Wt;ee.fromString=Ww;var YR=function(){return new Ol},XR=function(){return Iu()},Bc=Su,JR=uw,ZR=Br,Ty={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},e4=Fo,ka=cw,t4=ge,n4=Ft,wi=ee;const Iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Kd("@firebase/firestore");function Sy(){return Mr.logLevel}function O(e,...t){if(Mr.logLevel<=J.DEBUG){const n=t.map(Ip);Mr.debug(`Firestore (${Gi}): ${e}`,...n)}}function gn(e,...t){if(Mr.logLevel<=J.ERROR){const n=t.map(Ip);Mr.error(`Firestore (${Gi}): ${e}`,...n)}}function Ni(e,...t){if(Mr.logLevel<=J.WARN){const n=t.map(Ip);Mr.warn(`Firestore (${Gi}): ${e}`,...n)}}function Ip(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e="Unexpected state"){const t=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+e;throw gn(t),new Error(t)}function ae(e,t){e||F()}function z(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends sr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class r4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class i4{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s4{constructor(t){this.t=t,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new on;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new on,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new on)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new qw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ae(t===null||typeof t=="string"),new Be(t)}}class o4{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a4{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new o4(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l4{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u4{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new l4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=c4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function X(e,t){return e<t?-1:e>t?1:0}function Di(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ke.fromMillis(Date.now())}static fromDate(t){return ke.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.timestamp=t}static fromTimestamp(t){return new j(t)}static min(){return new j(new ke(0,0))}static max(){return new j(new ke(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,n,r){n===void 0?n=0:n>t.length&&F(),r===void 0?r=t.length-n:r>t.length-n&&F(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return go.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof go?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ue extends go{construct(t,n,r){return new ue(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const f4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends go{construct(t,n,r){return new qe(t,n,r)}static isValidIdentifier(t){return f4.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(I.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(I.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(I.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(ue.fromString(t))}static fromName(t){return new M(ue.fromString(t).popFirst(5))}static empty(){return new M(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ue.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ue.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new ue(t.slice()))}}function h4(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Xn(i,M.empty(),t)}function d4(e){return new Xn(e.readTime,e.key,-1)}class Xn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(j.min(),M.empty(),-1)}static max(){return new Xn(j.max(),M.empty(),-1)}}function p4(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=M.comparator(e.documentKey,t.documentKey),n!==0?n:X(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==m4)throw e;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):A.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):A.reject(n)}static resolve(t){return new A((n,r)=>{n(t)})}static reject(t){return new A((n,r)=>{r(t)})}static waitFor(t){return new A((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=A.resolve(!1);for(const r of t)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new A((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new A((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function zo(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Sp.ae=-1;function Nu(e){return e==null}function Fl(e){return e===0&&1/e==-1/0}function y4(e){return typeof e=="number"&&Number.isInteger(e)&&!Fl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Qi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Gw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,n){this.comparator=t,this.root=n||Oe.EMPTY}insert(t,n){return new de(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(t){return new de(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ca(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ca(this.root,t,this.comparator,!0)}}class Ca{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Oe{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Oe(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Oe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.comparator=t,this.data=new de(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ky(this.data.getIterator())}getIteratorFrom(t){return new ky(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Qe)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Qe(this.comparator);return n.data=t,n}}class ky{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(qe.comparator)}static empty(){return new Vt([])}unionWith(t){let n=new Qe(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Vt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Di(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qw("Invalid base64 string: "+s):s}}(t);return new Xe(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Xe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const v4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(e){if(ae(!!e),typeof e=="string"){let t=0;const n=v4.exec(e);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:we(e.seconds),nanos:we(e.nanos)}}function we(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Fr(e){return typeof e=="string"?Xe.fromBase64String(e):Xe.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kp(e){const t=e.mapValue.fields.__previous_value__;return Ap(t)?kp(t):t}function yo(e){const t=Jn(e.mapValue.fields.__local_write_time__.timestampValue);return new ke(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class vo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ap(e)?4:w4(e)?9007199254740991:10:F()}function Xt(e,t){if(e===t)return!0;const n=$r(e);if(n!==$r(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return yo(e).isEqual(yo(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Jn(i.timestampValue),a=Jn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?Fl(o)===Fl(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Di(e.arrayValue.values||[],t.arrayValue.values||[],Xt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ay(o)!==Ay(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xt(o[l],a[l])))return!1;return!0}(e,t);default:return F()}}function _o(e,t){return(e.values||[]).find(n=>Xt(n,t))!==void 0}function Vi(e,t){if(e===t)return 0;const n=$r(e),r=$r(t);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Cy(e.timestampValue,t.timestampValue);case 4:return Cy(yo(e),yo(t));case 5:return X(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Fr(s),l=Fr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=X(we(s.latitude),we(o.latitude));return a!==0?a:X(we(s.longitude),we(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Vi(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===xa.mapValue&&o===xa.mapValue)return 0;if(s===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=X(l[f],c[f]);if(h!==0)return h;const m=Vi(a[l[f]],u[c[f]]);if(m!==0)return m}return X(l.length,c.length)}(e.mapValue,t.mapValue);default:throw F()}}function Cy(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return X(e,t);const n=Jn(e),r=Jn(t),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function Oi(e){return Ah(e)}function Ah(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Fr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return M.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ah(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ah(n.fields[o])}`;return i+"}"}(e.mapValue):F()}function kh(e){return!!e&&"integerValue"in e}function Cp(e){return!!e&&"arrayValue"in e}function xy(e){return!!e&&"nullValue"in e}function Py(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Wa(e){return!!e&&"mapValue"in e}function Ds(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Qi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ds(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ds(e.arrayValue.values[n]);return t}return Object.assign({},e)}function w4(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ds(n)}setAll(t){let n=qe.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Xt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Qi(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new It(Ds(this.value))}}function Yw(e){const t=[];return Qi(e.fields,(n,r)=>{const i=new qe([n]);if(Wa(r)){const s=Yw(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new We(t,0,j.min(),j.min(),j.min(),It.empty(),0)}static newFoundDocument(t,n,r,i){return new We(t,1,n,j.min(),r,i,0)}static newNoDocument(t,n){return new We(t,2,n,j.min(),j.min(),It.empty(),0)}static newUnknownDocument(t,n){return new We(t,3,n,j.min(),j.min(),It.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof We&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n){this.position=t,this.inclusive=n}}function Ry(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function by(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,n="asc"){this.field=t,this.dir=n}}function E4(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{}class Se extends Xw{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new I4(t,n,r):n==="array-contains"?new k4(t,r):n==="in"?new C4(t,r):n==="not-in"?new x4(t,r):n==="array-contains-any"?new P4(t,r):new Se(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new S4(t,r):new A4(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vi(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Vi(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends Xw{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Jt(t,n)}matches(t){return Jw(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Jw(e){return e.op==="and"}function Zw(e){return T4(e)&&Jw(e)}function T4(e){for(const t of e.filters)if(t instanceof Jt)return!1;return!0}function Ch(e){if(e instanceof Se)return e.field.canonicalString()+e.op.toString()+Oi(e.value);if(Zw(e))return e.filters.map(t=>Ch(t)).join(",");{const t=e.filters.map(n=>Ch(n)).join(",");return`${e.op}(${t})`}}function eE(e,t){return e instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(e,t):e instanceof Jt?function(r,i){return i instanceof Jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&eE(o,i.filters[a]),!0):!1}(e,t):void F()}function tE(e){return e instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Oi(n.value)}`}(e):e instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(tE).join(" ,")+"}"}(e):"Filter"}class I4 extends Se{constructor(t,n,r){super(t,n,r),this.key=M.fromName(r.referenceValue)}matches(t){const n=M.comparator(t.key,this.key);return this.matchesComparison(n)}}class S4 extends Se{constructor(t,n){super(t,"in",n),this.keys=nE("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class A4 extends Se{constructor(t,n){super(t,"not-in",n),this.keys=nE("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nE(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class k4 extends Se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Cp(n)&&_o(n.arrayValue,this.value)}}class C4 extends Se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class x4 extends Se{constructor(t,n){super(t,"not-in",n)}matches(t){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class P4 extends Se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ny(e,t=null,n=[],r=[],i=null,s=null,o=null){return new R4(e,t,n,r,i,s,o)}function xp(e){const t=z(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ch(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nu(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Oi(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Oi(r)).join(",")),t.he=n}return t.he}function Pp(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!E4(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!eE(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!by(e.startAt,t.startAt)&&by(e.endAt,t.endAt)}function xh(e){return M.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function b4(e,t,n,r,i,s,o,a){return new Du(e,t,n,r,i,s,o,a)}function Rp(e){return new Du(e)}function Dy(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function N4(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function D4(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function V4(e){return e.collectionGroup!==null}function Ei(e){const t=z(e);if(t.Pe===null){t.Pe=[];const n=D4(t),r=N4(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Vs(n)),t.Pe.push(new Vs(qe.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Vs(qe.keyField(),s))}}}return t.Pe}function yn(e){const t=z(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Ny(t.path,t.collectionGroup,Ei(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Ei(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Vs(s.field,o))}const r=t.endAt?new $l(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new $l(t.startAt.position,t.startAt.inclusive):null;t.Ie=Ny(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function Ph(e,t,n){return new Du(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Vu(e,t){return Pp(yn(e),yn(t))&&e.limitType===t.limitType}function rE(e){return`${xp(yn(e))}|lt:${e.limitType}`}function Rh(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tE(i)).join(", ")}]`),Nu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Oi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Oi(i)).join(",")),`Target(${r})`}(yn(e))}; limitType=${e.limitType})`}function Ou(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Ei(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Ry(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ei(r),i)||r.endAt&&!function(o,a,l){const u=Ry(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ei(r),i))}(e,t)}function O4(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function iE(e){return(t,n)=>{let r=!1;for(const i of Ei(e)){const s=L4(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function L4(e,t,n){const r=e.field.isKeyField()?M.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Vi(l,u):F()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Qi(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Gw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4=new de(M.comparator);function vn(){return M4}const sE=new de(M.comparator);function ys(...e){let t=sE;for(const n of e)t=t.insert(n.key,n);return t}function oE(e){let t=sE;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Tr(){return Os()}function aE(){return Os()}function Os(){return new Yi(e=>e.toString(),(e,t)=>e.isEqual(t))}const F4=new de(M.comparator),$4=new Qe(M.comparator);function q(...e){let t=$4;for(const n of e)t=t.add(n);return t}const j4=new Qe(X);function U4(){return j4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(t)?"-0":t}}function uE(e){return{integerValue:""+e}}function z4(e,t){return y4(t)?uE(t):lE(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this._=void 0}}function B4(e,t,n){return e instanceof jl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ap(s)&&(s=kp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof wo?fE(e,t):e instanceof Eo?hE(e,t):function(i,s){const o=cE(i,s),a=Vy(o)+Vy(i.Te);return kh(o)&&kh(i.Te)?uE(a):lE(i.serializer,a)}(e,t)}function H4(e,t,n){return e instanceof wo?fE(e,t):e instanceof Eo?hE(e,t):n}function cE(e,t){return e instanceof Ul?function(r){return kh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class jl extends Lu{}class wo extends Lu{constructor(t){super(),this.elements=t}}function fE(e,t){const n=dE(t);for(const r of e.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Eo extends Lu{constructor(t){super(),this.elements=t}}function hE(e,t){let n=dE(t);for(const r of e.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class Ul extends Lu{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Vy(e){return we(e.integerValue||e.doubleValue)}function dE(e){return Cp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function W4(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof wo&&i instanceof wo||r instanceof Eo&&i instanceof Eo?Di(r.elements,i.elements,Xt):r instanceof Ul&&i instanceof Ul?Xt(r.Te,i.Te):r instanceof jl&&i instanceof jl}(e.transform,t.transform)}class q4{constructor(t,n){this.version=t,this.transformResults=n}}class Qt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Qt}static exists(t){return new Qt(void 0,t)}static updateTime(t){return new Qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qa(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Mu{}function pE(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new bp(e.key,Qt.none()):new Bo(e.key,e.data,Qt.none());{const n=e.data,r=It.empty();let i=new Qe(qe.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(e.key,r,new Vt(i.toArray()),Qt.none())}}function K4(e,t,n){e instanceof Bo?function(i,s,o){const a=i.value.clone(),l=Ly(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Hr?function(i,s,o){if(!qa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ly(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(mE(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ls(e,t,n,r){return e instanceof Bo?function(s,o,a,l){if(!qa(s.precondition,o))return a;const u=s.value.clone(),c=My(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Hr?function(s,o,a,l){if(!qa(s.precondition,o))return a;const u=My(s.fieldTransforms,l,o),c=o.data;return c.setAll(mE(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,r):function(s,o,a){return qa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function G4(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=cE(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function Oy(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Di(r,i,(s,o)=>W4(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Bo extends Mu{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends Mu{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mE(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ly(e,t,n){const r=new Map;ae(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,H4(o,a,n[i]))}return r}function My(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,B4(s,o,t))}return r}class bp extends Mu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q4 extends Mu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&K4(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ls(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ls(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=aE();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=pE(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),q())}isEqual(t){return this.batchId===t.batchId&&Di(this.mutations,t.mutations,(n,r)=>Oy(n,r))&&Di(this.baseMutations,t.baseMutations,(n,r)=>Oy(n,r))}}class Np{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ae(t.mutations.length===r.length);let i=function(){return F4}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Np(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Q;function Z4(e){switch(e){default:return F();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function gE(e){if(e===void 0)return gn("GRPC error has no .code"),I.UNKNOWN;switch(e){case _e.OK:return I.OK;case _e.CANCELLED:return I.CANCELLED;case _e.UNKNOWN:return I.UNKNOWN;case _e.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case _e.INTERNAL:return I.INTERNAL;case _e.UNAVAILABLE:return I.UNAVAILABLE;case _e.UNAUTHENTICATED:return I.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case _e.NOT_FOUND:return I.NOT_FOUND;case _e.ALREADY_EXISTS:return I.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return I.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case _e.ABORTED:return I.ABORTED;case _e.OUT_OF_RANGE:return I.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return I.UNIMPLEMENTED;case _e.DATA_LOSS:return I.DATA_LOSS;default:return F()}}(Q=_e||(_e={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Pa}static getOrCreateInstance(){return Pa===null&&(Pa=new Dp),Pa}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Pa=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new wi([4294967295,4294967295],0);function Fy(e){const t=eb().encode(e),n=new n4;return n.update(t),new Uint8Array(n.digest())}function $y(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new wi([n,r],0),new wi([i,s],0)]}class Vp{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vs(`Invalid padding: ${n}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new vs(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=wi.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(wi.fromNumber(r)));return i.compare(tb)===1&&(i=new wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Fy(t),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Vp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Fy(t),[r,i]=$y(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ho.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Fu(j.min(),i,new de(X),vn(),q())}}class Ho{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ho(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class yE{constructor(t,n){this.targetId=t,this.pe=n}}class vE{constructor(t,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jy{constructor(){this.ye=0,this.we=zy(),this.Se=Xe.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=q(),n=q(),r=q();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Ho(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=zy()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class nb{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=vn(),this.$e=Uy(),this.Ue=new de(X)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:F()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(xh(a))if(s===0){const l=new M(a.path);this.ze(i,l,We.newNoDocument(l,j.min()))}else ae(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(t,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Dp.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(f,h,m,v){var _,E,p,d,g,w;const T={localCacheCount:m,existenceFilterCount:v.count},C=v.unchangedNames;return C&&(T.bloomFilter={applied:f===0,hashCount:(_=C==null?void 0:C.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(d=(p=(E=C==null?void 0:C.bits)===null||E===void 0?void 0:E.bitmap)===null||p===void 0?void 0:p.length)!==null&&d!==void 0?d:0,padding:(w=(g=C==null?void 0:C.bits)===null||g===void 0?void 0:g.padding)!==null&&w!==void 0?w:0},h&&(T.bloomFilter.mightContain=h)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Fr(s).toUint8Array()}catch(f){if(f instanceof Qw)return Ni("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw f}try{u=new Vp(l,o,a)}catch(f){return Ni(f instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",f),{status:1}}const c=f=>{const h=this.qe.rt();return u.mightContain(`projects/${h.projectId}/databases/${h.database}/documents/${f}`)};return u.de===0?{status:1}:{status:i===n-this.it(t.targetId,c)?0:2,nt:c}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&xh(a.target)){const l=new M(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,We.newNoDocument(l,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=q();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new Fu(t,n,this.Ue,this.Ke,r);return this.Ke=vn(),this.$e=Uy(),this.Ue=new de(X),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new jy,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Qe(X),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||O("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new jy),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function Uy(){return new de(M.comparator)}function zy(){return new de(M.comparator)}const rb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ib=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),sb=(()=>({and:"AND",or:"OR"}))();class ob{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function bh(e,t){return e.useProto3Json||Nu(t)?t:{value:t}}function zl(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _E(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ab(e,t){return zl(e,t.toTimestamp())}function Yt(e){return ae(!!e),j.fromTimestamp(function(n){const r=Jn(n);return new ke(r.seconds,r.nanos)}(e))}function Op(e,t){return function(r){return new ue(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function wE(e){const t=ue.fromString(e);return ae(SE(t)),t}function Nh(e,t){return Op(e.databaseId,t.path)}function Hc(e,t){const n=wE(t);if(n.get(1)!==e.databaseId.projectId)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new M(EE(n))}function Dh(e,t){return Op(e.databaseId,t)}function lb(e){const t=wE(e);return t.length===4?ue.emptyPath():EE(t)}function Vh(e){return new ue(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function EE(e){return ae(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function By(e,t,n){return{name:Nh(e,t),fields:n.value.mapValue.fields}}function ub(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ae(c===void 0||typeof c=="string"),Xe.fromBase64String(c||"")):(ae(c===void 0||c instanceof Uint8Array),Xe.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?I.UNKNOWN:gE(u.code);return new L(c,u.message||"")}(o);n=new vE(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hc(e,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):j.min(),a=new It({mapValue:{fields:r.document.fields}}),l=We.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ka(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Hc(e,r.document),s=r.readTime?Yt(r.readTime):j.min(),o=We.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ka([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Hc(e,r.document),s=r.removedTargetIds||[];n=new Ka([],s,i,null)}else{if(!("filter"in t))return F();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new J4(i,s),a=r.targetId;n=new yE(a,o)}}return n}function cb(e,t){let n;if(t instanceof Bo)n={update:By(e,t.key,t.value)};else if(t instanceof bp)n={delete:Nh(e,t.key)};else if(t instanceof Hr)n={update:By(e,t.key,t.data),updateMask:_b(t.fieldMask)};else{if(!(t instanceof Q4))return F();n={verify:Nh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof jl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ul)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw F()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ab(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(e,t.precondition)),n}function fb(e,t){return e&&e.length>0?(ae(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Yt(i.updateTime):Yt(s);return o.isEqual(j.min())&&(o=Yt(s)),new q4(o,i.transformResults||[])}(n,t))):[]}function hb(e,t){return{documents:[Dh(e,t.path)]}}function db(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Dh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Dh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return IE(Jt.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Gr(f.field),direction:gb(f.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=bh(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function pb(e){let t=lb(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=TE(f);return h instanceof Jt&&Zw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(v){return new Vs(Qr(v.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Nu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,m=f.values||[];return new $l(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,m=f.values||[];return new $l(m,h)}(n.endAt)),b4(t,i,o,s,a,"F",l,u)}function mb(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function TE(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(n.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(n.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(e):e.fieldFilter!==void 0?function(n){return Se.create(Qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>TE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(e):F()}function gb(e){return rb[e]}function yb(e){return ib[e]}function vb(e){return sb[e]}function Gr(e){return{fieldPath:e.canonicalString()}}function Qr(e){return qe.fromServerFormat(e.fieldPath)}function IE(e){return e instanceof Se?function(n){if(n.op==="=="){if(Py(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(xy(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Py(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(xy(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:yb(n.op),value:n.value}}}(e):e instanceof Jt?function(n){const r=n.getFilters().map(i=>IE(i));return r.length===1?r[0]:{compositeFilter:{op:vb(n.op),filters:r}}}(e):F()}function _b(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function SE(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n,r,i,s=j.min(),o=j.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new bn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(t){this.ct=t}}function Eb(e){const t=pb({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ph(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.sn=new Ib}addToCollectionParentIndex(t,n){return this.sn.add(n),A.resolve()}getCollectionParents(t,n){return A.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return A.resolve()}deleteFieldIndex(t,n){return A.resolve()}getDocumentsMatchingTarget(t,n){return A.resolve(null)}getIndexType(t,n){return A.resolve(0)}getFieldIndexes(t,n){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,n){return A.resolve(Xn.min())}getMinOffsetFromCollectionGroup(t,n){return A.resolve(Xn.min())}updateCollectionGroup(t,n,r){return A.resolve()}updateIndexEntries(t,n){return A.resolve()}}class Ib{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Qe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Qe(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Li(0)}static On(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.changes=new Yi(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,We.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Ls(r.mutation,i,Vt.empty(),ke.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,n,r=q()){const i=Tr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=ys();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Tr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,q()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=vn();const o=Os(),a=function(){return Os()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Hr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ls(c.mutation,u,c.mutation.getFieldMask(),ke.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new Ab(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Os();let i=new de((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Vt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=aE();c.forEach(h=>{if(!s.has(h)){const m=pE(n.get(h),r.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return M.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):V4(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):A.resolve(Tr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,q())).next(c=>({batchId:a,changes:oE(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new M(n)).next(r=>{let i=ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=ys();return this.indexManager.getCollectionParents(t,i).next(o=>A.forEach(o,a=>{const l=function(c,f){return new Du(f,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,We.newInvalidDocument(u)))});let o=ys();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ls(u.mutation,l,Vt.empty(),ke.now()),Ou(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return A.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(n)),A.resolve()}getNamedQuery(t,n){return A.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:Eb(i.bundledQuery),readTime:Yt(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.overlays=new de(M.comparator),this.cr=new Map}getOverlay(t,n){return A.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Tr();return A.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),A.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),A.resolve()}getOverlaysForCollection(t,n,r){const i=Tr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new de((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Tr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Tr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new X4(n,r));let s=this.cr.get(n);s===void 0&&(s=q(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.lr=new Qe(Pe.hr),this.Pr=new Qe(Pe.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Pe(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Pe(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new M(new ue([])),r=new Pe(n,t),i=new Pe(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new M(new ue([])),r=new Pe(n,t),i=new Pe(n,t+1);let s=q();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Pe(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Pe{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return M.comparator(t.key,n.key)||X(t.mr,n.mr)}static Ir(t,n){return X(t.mr,n.mr)||M.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Qe(Pe.hr)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Y4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(t,n){return A.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Qe(X);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),A.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new M(s),0);let a=new Qe(X);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),A.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ae(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return A.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Pe(n,0),i=this.pr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(t){this.Dr=t,this.docs=function(){return new de(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(t,n){let r=vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():We.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=vn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||p4(d4(c),r)<=0||(i.has(c.key)||Ou(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(t,n,r,i){F()}vr(t,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new bb(this)}getSize(t){return A.resolve(this.size)}}class bb extends Sb{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),A.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(t){this.persistence=t,this.Cr=new Yi(n=>xp(n),Pp),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Lp,this.targetCount=0,this.Or=Li.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),A.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Li(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,A.resolve()}updateTargetData(t,n){return this.Ln(n),A.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return A.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),A.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),A.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return A.resolve(r)}containsKey(t,n){return A.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t,n){this.Nr={},this.overlays={},this.Br=new Sp(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new Nb(this),this.indexManager=new Tb,this.remoteDocumentCache=function(i){return new Rb(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new wb(n),this.Qr=new Cb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new xb,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new Pb(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){O("MemoryPersistence","Starting transaction:",t);const i=new Vb(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return A.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class Vb extends g4{constructor(t){super(),this.currentSequenceNumber=t}}class Mp{constructor(t){this.persistence=t,this.Wr=new Lp,this.Gr=null}static zr(t){return new Mp(t)}get jr(){if(this.Gr)return this.Gr;throw F()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),A.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),A.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.jr,r=>{const i=M.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return A.or([()=>A.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fp(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(Dy(n))return A.resolve(null);let r=yn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ph(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=q(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(t,Ph(n,null,"F")):this.ji(t,u,n,l)}))})))}Ui(t,n,r,i){return Dy(n)||i.isEqual(j.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(Sy()<=J.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rh(n)),this.ji(t,o,n,h4(i,-1)))})}Gi(t,n){let r=new Qe(iE(t));return n.forEach((i,s)=>{Ou(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return Sy()<=J.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Rh(n)),this.Ki.getDocumentsMatchingQuery(t,n,Xn.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new de(X),this.Yi=new Yi(s=>xp(s),Pp),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kb(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Mb(e,t,n,r){return new Lb(e,t,n,r)}async function AE(e,t){const n=z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Fb(e,t){const n=z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let m=A.resolve();return h.forEach(v=>{m=m.next(()=>c.getEntry(l,v)).next(_=>{const E=u.docVersions.get(v);ae(E!==null),_.version.compareTo(E)<0&&(f.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function kE(e){const t=z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function $b(e,t){const n=z(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(Xe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(f,m),function(_,E,p){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,m,c)&&a.push(n.kr.updateTargetData(s,m))});let l=vn(),u=q();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(jb(s,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(j.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(f=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function jb(e,t,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=vn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function Ub(e,t){const n=z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function zb(e,t){const n=z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,A.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new bn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Oh(e,t,n){const r=z(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function Hy(e,t,n){const r=z(e);let i=j.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const f=z(l),h=f.Yi.get(c);return h!==void 0?A.resolve(f.Ji.get(h)):f.kr.getTargetData(u,c)}(r,o,yn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:j.min(),n?s:q())).next(a=>(Bb(r,O4(t),a),{documents:a,ss:s})))}function Bb(e,t,n){let r=e.Zi.get(t)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class Wy{constructor(){this.activeTargetIds=U4()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hb{constructor(){this.Hs=new Wy,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Wy,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra=null;function Wc(){return Ra===null?Ra=function(){return 268435456+Math.round(2147483648*Math.random())}():Ra++,"0x"+Ra.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class Gb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Wc(),l=this.mo(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ni("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=qb[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Wc();return new Promise((o,a)=>{const l=new t4;l.setWithCredentials(!0),l.listenOnce(JR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bc.NO_ERROR:const c=l.getResponseJson();O(ze,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Bc.TIMEOUT:O(ze,`RPC '${t}' ${s} timed out`),a(new L(I.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const f=l.getStatus();if(O(ze,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const v=function(E){const p=E.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(p)>=0?p:I.UNKNOWN}(m.status);a(new L(v,m.message))}else a(new L(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(I.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O(ze,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);O(ze,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(t,n,r){const i=Wc(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=YR(),a=XR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new e4({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");O(ze,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,m=!1;const v=new Kb({so:E=>{m?O(ze,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(h||(O(ze,`Opening RPC '${t}' stream ${i} transport.`),f.open(),h=!0),O(ze,`RPC '${t}' stream ${i} sending:`,E),f.send(E))},oo:()=>f.close()}),_=(E,p,d)=>{E.listen(p,g=>{try{d(g)}catch(w){setTimeout(()=>{throw w},0)}})};return _(f,ka.EventType.OPEN,()=>{m||O(ze,`RPC '${t}' stream ${i} transport opened.`)}),_(f,ka.EventType.CLOSE,()=>{m||(m=!0,O(ze,`RPC '${t}' stream ${i} transport closed`),v.Po())}),_(f,ka.EventType.ERROR,E=>{m||(m=!0,Ni(ze,`RPC '${t}' stream ${i} transport errored:`,E),v.Po(new L(I.UNAVAILABLE,"The operation could not be completed")))}),_(f,ka.EventType.MESSAGE,E=>{var p;if(!m){const d=E.data[0];ae(!!d);const g=d,w=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(w){O(ze,`RPC '${t}' stream ${i} received error:`,w);const T=w.status;let C=function(G){const U=_e[G];if(U!==void 0)return gE(U)}(T),P=w.message;C===void 0&&(C=I.INTERNAL,P="Unknown error status: "+T+" with message "+w.message),m=!0,v.Po(new L(C,P)),f.close()}else O(ze,`RPC '${t}' stream ${i} received:`,d),v.Io(d)}}),_(a,ZR.STAT_EVENT,E=>{E.stat===Ty.PROXY?O(ze,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===Ty.NOPROXY&&O(ze,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){return new ob(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(t,n,r,i,s,o,a,l){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new CE(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new L(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qb extends xE{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=ub(this.serializer,t),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Yt(o.readTime):j.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=Vh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=xh(l)?{documents:hb(s,l)}:{query:db(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_E(s,o.resumeToken);const u=bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=zl(s,o.snapshotVersion.toTimestamp());const u=bh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=mb(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=Vh(this.serializer),n.removeTarget=t,this.Ho(n)}}class Yb extends xE{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(ae(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=fb(t.writeResults,t.commitTime),r=Yt(t.commitTime);return this.listener.u_(r,n)}return ae(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Vh(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>cb(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(I.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(I.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class Jb{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(gn(n),this.d_=!1):O("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=z(l);u.y_.add(4),await Wo(u),u.b_.set("Unknown"),u.y_.delete(4),await ju(u)}(this))})}),this.b_=new Jb(r,i)}}async function ju(e){if(Wr(e))for(const t of e.w_)await t(!0)}async function Wo(e){for(const t of e.w_)await t(!1)}function PE(e,t){const n=z(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),Up(n)?jp(n):Xi(n).Uo()&&$p(n,t))}function RE(e,t){const n=z(e),r=Xi(n);n.p_.delete(t),r.Uo()&&bE(n,t),n.p_.size===0&&(r.Uo()?r.zo():Wr(n)&&n.b_.set("Unknown"))}function $p(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(j.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Xi(e).i_(t)}function bE(e,t){e.D_.Be(t),Xi(e).s_(t)}function jp(e){e.D_=new nb({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Xi(e).start(),e.b_.A_()}function Up(e){return Wr(e)&&!Xi(e).$o()&&e.p_.size>0}function Wr(e){return z(e).y_.size===0}function NE(e){e.D_=void 0}async function eN(e){e.p_.forEach((t,n)=>{$p(e,t)})}async function tN(e,t){NE(e),Up(e)?(e.b_.m_(t),jp(e)):e.b_.set("Unknown")}async function nN(e,t,n){if(e.b_.set("Online"),t instanceof vE&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Bl(e,r)}else if(t instanceof Ka?e.D_.We(t):t instanceof yE?e.D_.Ze(t):e.D_.je(t),!n.isEqual(j.min()))try{const r=await kE(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),bE(s,l);const f=new bn(c.target,l,u,c.sequenceNumber);$p(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Bl(e,r)}}async function Bl(e,t,n){if(!zo(t))throw t;e.y_.add(1),await Wo(e),e.b_.set("Offline"),n||(n=()=>kE(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await ju(e)})}function DE(e,t){return t().catch(n=>Bl(e,n,t))}async function Uu(e){const t=z(e),n=Zn(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;rN(t);)try{const i=await Ub(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,iN(t,i)}catch(i){await Bl(t,i)}VE(t)&&OE(t)}function rN(e){return Wr(e)&&e.g_.length<10}function iN(e,t){e.g_.push(t);const n=Zn(e);n.Uo()&&n.__&&n.a_(t.mutations)}function VE(e){return Wr(e)&&!Zn(e).$o()&&e.g_.length>0}function OE(e){Zn(e).start()}async function sN(e){Zn(e).l_()}async function oN(e){const t=Zn(e);for(const n of e.g_)t.a_(n.mutations)}async function aN(e,t,n){const r=e.g_.shift(),i=Np.from(r,t,n);await DE(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Uu(e)}async function lN(e,t){t&&Zn(e).__&&await async function(r,i){if(function(o){return Z4(o)&&o!==I.ABORTED}(i.code)){const s=r.g_.shift();Zn(r).Go(),await DE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uu(r)}}(e,t),VE(e)&&OE(e)}async function Ky(e,t){const n=z(e);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.y_.add(3),await Wo(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await ju(n)}async function uN(e,t){const n=z(e);t?(n.y_.delete(2),await ju(n)):t||(n.y_.add(2),await Wo(n),n.b_.set("Unknown"))}function Xi(e){return e.v_||(e.v_=function(n,r,i){const s=z(n);return s.P_(),new Qb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:eN.bind(null,e),uo:tN.bind(null,e),r_:nN.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),Up(e)?jp(e):e.b_.set("Unknown")):(await e.v_.stop(),NE(e))})),e.v_}function Zn(e){return e.C_||(e.C_=function(n,r,i){const s=z(n);return s.P_(),new Yb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:sN.bind(null,e),uo:lN.bind(null,e),c_:oN.bind(null,e),u_:aN.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Uu(e)):(await e.C_.stop(),e.g_.length>0&&(O("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new on,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new zp(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(I.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bp(e,t){if(gn("AsyncQueue",`${t}: ${e}`),zo(e))return new L(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this.comparator=t?(n,r)=>t(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=ys(),this.sortedSet=new de(this.comparator)}static emptySet(t){return new Ti(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ti)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.F_=new de(M.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):F():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Mi{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mi(t,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.x_=void 0,this.listeners=[]}}class fN{constructor(){this.queries=new Yi(t=>rE(t),Vu),this.onlineState="Unknown",this.O_=new Set}}async function LE(e,t){const n=z(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new cN),i)try{s.x_=await n.onListen(r)}catch(o){const a=Bp(o,`Initialization of query '${Rh(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&Hp(n)}async function ME(e,t){const n=z(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function hN(e,t){const n=z(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Hp(n)}function dN(e,t,n){const r=z(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Hp(e){e.O_.forEach(t=>{t.next()})}class FE{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Mi(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Mi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t){this.key=t}}class jE{constructor(t){this.key=t}}class pN{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=q(),this.mutatedKeys=q(),this.na=iE(t),this.ra=new Ti(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Gy,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const h=i.get(c),m=Ou(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;h&&m?h.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),E=!0):this._a(h,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.na(m,l)>0||u&&this.na(m,u)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),E=!0):h&&!m&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,c)=>function(h,m){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return v(h)-v(m)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Mi(this.query,t.ra,i,s,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Gy,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=q(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new jE(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new $E(r))}),n}ha(t){this.X_=t.ss,this.ta=q();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Mi.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class mN{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class gN{constructor(t){this.key=t,this.Ia=!1}}class yN{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new Yi(a=>rE(a),Vu),this.da=new Map,this.Aa=new Set,this.Ra=new de(M.comparator),this.Va=new Map,this.ma=new Lp,this.fa={},this.ga=new Map,this.pa=Li.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function vN(e,t){const n=xN(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await zb(n.localStore,yn(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await _N(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&PE(n.remoteStore,o)}return i}async function _N(e,t,n,r,i){e.wa=(f,h,m)=>async function(_,E,p,d){let g=E.view.sa(p);g.zi&&(g=await Hy(_.localStore,E.query,!1).then(({documents:C})=>E.view.sa(C,g)));const w=d&&d.targetChanges.get(E.targetId),T=E.view.applyChanges(g,_.isPrimaryClient,w);return Yy(_,E.targetId,T.ca),T.snapshot}(e,f,h,m);const s=await Hy(e.localStore,t,!0),o=new pN(t,s.ss),a=o.sa(s.documents),l=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);Yy(e,n,u.ca);const c=new mN(t,n,o);return e.Ea.set(t,c),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function wN(e,t){const n=z(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Vu(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Oh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),RE(n.remoteStore,r.targetId),Lh(n,r.targetId)}).catch(Uo)):(Lh(n,r.targetId),await Oh(n.localStore,r.targetId,!0))}async function EN(e,t,n){const r=PN(e);try{const i=await function(o,a){const l=z(o),u=ke.now(),c=a.reduce((m,v)=>m.add(v.key),q());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=vn(),_=q();return l.Xi.getEntries(m,c).next(E=>{v=E,v.forEach((p,d)=>{d.isValidDocument()||(_=_.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,v)).next(E=>{f=E;const p=[];for(const d of a){const g=G4(d,f.get(d.key).overlayedDocument);g!=null&&p.push(new Hr(d.key,g,Yw(g.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(E=>{h=E;const p=E.applyToLocalDocumentSet(f,_);return l.documentOverlayCache.saveOverlays(m,E.batchId,p)})}).then(()=>({batchId:h.batchId,changes:oE(f)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new de(X)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await qo(r,i.changes),await Uu(r.remoteStore)}catch(i){const s=Bp(i,"Failed to persist write");n.reject(s)}}async function UE(e,t){const n=z(e);try{const r=await $b(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?ae(o.Ia):i.removedDocuments.size>0&&(ae(o.Ia),o.Ia=!1))}),await qo(n,r,t)}catch(r){await Uo(r)}}function Qy(e,t,n){const r=z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.N_(a)&&(u=!0)}),u&&Hp(l)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function TN(e,t,n){const r=z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new de(M.comparator);o=o.insert(s,We.newNoDocument(s,j.min()));const a=q().add(s),l=new Fu(j.min(),new Map,new de(X),o,a);await UE(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(t),Wp(r)}else await Oh(r.localStore,t,!1).then(()=>Lh(r,t,n)).catch(Uo)}async function IN(e,t){const n=z(e),r=t.batch.batchId;try{const i=await Fb(n.localStore,t);BE(n,r,null),zE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,i)}catch(i){await Uo(i)}}async function SN(e,t,n){const r=z(e);try{const i=await function(o,a){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(ae(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);BE(r,t,n),zE(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await qo(r,i)}catch(i){await Uo(i)}}function zE(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function BE(e,t,n){const r=z(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function Lh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||HE(e,r)})}function HE(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(RE(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),Wp(e))}function Yy(e,t,n){for(const r of n)r instanceof $E?(e.ma.addReference(r.key,t),AN(e,r)):r instanceof jE?(O("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||HE(e,r.key)):F()}function AN(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(O("SyncEngine","New document in limbo: "+n),e.Aa.add(r),Wp(e))}function Wp(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new M(ue.fromString(t)),r=e.pa.next();e.Va.set(r,new gN(n)),e.Ra=e.Ra.insert(n,r),PE(e.remoteStore,new bn(yn(Rp(n.path)),r,"TargetPurposeLimboResolution",Sp.ae))}}async function qo(e,t,n){const r=z(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Fp.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>A.forEach(u,h=>A.forEach(h.Li,m=>c.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>A.forEach(h.ki,m=>c.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!zo(f))throw f;O("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const m=c.Ji.get(h),v=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(h,_)}}}(r.localStore,s))}async function kN(e,t){const n=z(e);if(!n.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const r=await AE(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new L(I.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qo(n,r.ts)}}function CN(e,t){const n=z(e),r=n.Va.get(t);if(r&&r.Ia)return q().add(r.key);{let i=q();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function xN(e){const t=z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=UE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=CN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=TN.bind(null,t),t.Ta.r_=hN.bind(null,t.eventManager),t.Ta.Sa=dN.bind(null,t.eventManager),t}function PN(e){const t=z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=IN.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=SN.bind(null,t),t}class Xy{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=$u(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Mb(this.persistence,new Ob,t.initialUser,this.serializer)}createPersistence(t){return new Db(Mp.zr,this.serializer)}createSharedClientState(t){return new Hb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RN{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kN.bind(null,this.syncEngine),await uN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fN}()}createDatastore(t){const n=$u(t.databaseInfo.databaseId),r=function(s){return new Gb(s)}(t.databaseInfo);return function(s,o,a,l){return new Xb(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Zb(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Qy(this.syncEngine,n,0),function(){return qy.v()?new qy:new Wb}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,c){const f=new yN(i,s,o,a,l,u);return c&&(f.ya=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=z(n);O("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Wo(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):gn("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=Kw.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new on;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Bp(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Kc(e,t){e.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AE(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Jy(e,t){e.asyncQueue.verifyOperationInProgress();const n=await DN(e);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Ky(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Ky(t.remoteStore,s)),e._onlineComponents=t}function NN(e){return e.name==="FirebaseError"?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function DN(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!NN(n))throw n;Ni("Error using user provided cache. Falling back to memory cache: "+n),await Kc(e,new Xy)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Kc(e,new Xy);return e._offlineComponents}async function qE(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Jy(e,e._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Jy(e,new RN))),e._onlineComponents}function VN(e){return qE(e).then(t=>t.syncEngine)}async function KE(e){const t=await qE(e),n=t.eventManager;return n.onListen=vN.bind(null,t.syncEngine),n.onUnlisten=wN.bind(null,t.syncEngine),n}function ON(e,t,n={}){const r=new on;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new WE({next:h=>{o.enqueueAndForget(()=>ME(s,f));const m=h.docs.has(a);!m&&h.fromCache?u.reject(new L(I.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&l&&l.source==="server"?u.reject(new L(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new FE(Rp(a.path),c,{includeMetadataChanges:!0,W_:!0});return LE(s,f)}(await KE(e),e.asyncQueue,t,n,r)),r.promise}function LN(e,t,n={}){const r=new on;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new WE({next:h=>{o.enqueueAndForget(()=>ME(s,f)),h.fromCache&&l.source==="server"?u.reject(new L(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new FE(a,c,{includeMetadataChanges:!0,W_:!0});return LE(s,f)}(await KE(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(e,t,n){if(!n)throw new L(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function MN(e,t,n,r){if(t===!0&&r===!0)throw new L(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ev(e){if(!M.isDocumentKey(e))throw new L(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function tv(e){if(M.isDocumentKey(e))throw new L(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function qp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":F()}function jr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qp(e);throw new L(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}MN("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class zu{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nv(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r4;switch(r.type){case"firstParty":return new a4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zy.get(n);r&&(O("ComponentProvider","Removing Datastore"),Zy.delete(n),r.terminate())}(this),Promise.resolve()}}function FN(e,t,n,r={}){var i;const s=(e=jr(e,zu))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Be.MOCK_USER;else{a=nC(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Be(u)}e._authCredentials=new i4(new qw(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Bu(this.firestore,t,this._query)}}class kt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class Hn extends Bu{constructor(t,n,r){super(t,n,Rp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new M(t))}withConverter(t){return new Hn(this.firestore,t,this._path)}}function Fi(e,t,...n){if(e=Dr(e),QE("collection","path",t),e instanceof zu){const r=ue.fromString(t,...n);return tv(r),new Hn(e,null,r)}{if(!(e instanceof kt||e instanceof Hn))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ue.fromString(t,...n));return tv(r),new Hn(e.firestore,null,r)}}function Kp(e,t,...n){if(e=Dr(e),arguments.length===1&&(t=Kw.V()),QE("doc","path",t),e instanceof zu){const r=ue.fromString(t,...n);return ev(r),new kt(e,null,new M(r))}{if(!(e instanceof kt||e instanceof Hn))throw new L(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ue.fromString(t,...n));return ev(r),new kt(e.firestore,e instanceof Hn?e.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new CE(this,"async_queue_retry"),this.Xa=()=>{const n=qc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=qc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new on;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!zo(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=zp.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&F()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}class Ko extends zu{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new $N}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||XE(this),this._firestoreClient.terminate()}}function YE(e,t){const n=typeof e=="object"?e:y_(),r=typeof e=="string"?e:t||"(default)",i=bo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=eC("firestore");s&&FN(i,...s)}return i}function Gp(e){return e._firestoreClient||XE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function XE(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new _4(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,GE(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new bN(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $i(Xe.fromBase64String(t))}catch(n){throw new L(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $i(Xe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=/^__.*__$/;class UN{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Hr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(t,this.data,n,this.fieldTransforms)}}function ZE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Xp{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Xp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Hl(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(ZE(this.uu)&&jN.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class zN{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||$u(t)}Ru(t,n,r,i=!1){return new Xp({uu:t,methodName:n,Au:r,path:qe.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BN(e){const t=e._freezeSettings(),n=$u(e._databaseId);return new zN(e._databaseId,!!t.ignoreUndefinedProperties,n)}function HN(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);r2("Data must be an object, but it was:",o,r);const a=t2(r,o);let l,u;if(s.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=WN(t,f,n);if(!o.contains(h))throw new L(I.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);KN(c,h)||c.push(h)}l=new Vt(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new UN(new It(a),l,u)}function e2(e,t){if(n2(e=Dr(e)))return r2("Unsupported field value:",t,e),t2(e,t);if(e instanceof JE)return function(r,i){if(!ZE(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=e2(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Dr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return z4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:zl(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zl(i.serializer,s)}}if(r instanceof Yp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $i)return{bytesValue:_E(i.serializer,r._byteString)};if(r instanceof kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Op(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${qp(r)}`)}(e,t)}function t2(e,t){const n={};return Gw(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qi(e,(r,i)=>{const s=e2(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function n2(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ke||e instanceof Yp||e instanceof $i||e instanceof kt||e instanceof JE)}function r2(e,t,n){if(!n2(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qp(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function WN(e,t,n){if((t=Dr(t))instanceof Qp)return t._internalPath;if(typeof t=="string")return i2(e,t);throw Hl("Field path arguments must be of type string or ",e,!1,void 0,n)}const qN=new RegExp("[~\\*/\\[\\]]");function i2(e,t,n){if(t.search(qN)>=0)throw Hl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qp(...t.split("."))._internalPath}catch{throw Hl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(I.INVALID_ARGUMENT,a+e+l)}function KN(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new GN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(o2("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GN extends s2{data(){return super.data()}}function o2(e,t){return typeof t=="string"?i2(e,t):t instanceof Qp?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new L(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class YN{convertValue(t,n="none"){switch($r(t)){case 0:return null;case 1:return t.booleanValue;case 2:return we(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Fr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw F()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Qi(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Yp(we(t.latitude),we(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=kp(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yo(t));default:return null}}convertTimestamp(t){const n=Jn(t);return new ke(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ue.fromString(t);ae(SE(r));const i=new vo(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||gn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class a2 extends s2{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(o2("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ga extends a2{data(t={}){return super.data(t)}}class JN{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new _s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new _s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ga(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:ZN(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(e){e=jr(e,kt);const t=jr(e.firestore,Ko);return ON(Gp(t),e._key).then(n=>n3(t,e,n))}class l2 extends YN{constructor(t){super(),this.firestore=t}convertBytes(t){return new $i(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Hu(e){e=jr(e,Bu);const t=jr(e.firestore,Ko),n=Gp(t),r=new l2(t);return QN(e._query),LN(n,e._query).then(i=>new JN(t,r,e,i))}function t3(e){return c2(jr(e.firestore,Ko),[new bp(e._key,Qt.none())])}function u2(e,t){const n=jr(e.firestore,Ko),r=Kp(e),i=XN(e.converter,t);return c2(n,[HN(BN(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then(()=>r)}function c2(e,t){return function(r,i){const s=new on;return r.asyncQueue.enqueueAndForget(async()=>EN(await VN(r),i,s)),s.promise}(Gp(e),t)}function n3(e,t,n){const r=n.docs.get(t._key),i=new l2(e);return new a2(e,i,t._key,r,new _s(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){Gi=i})(lx),Yn(new pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ko(new s4(r.getProvider("auth-internal")),new u4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new L(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Gt(Iy,"4.1.0",t),Gt(Iy,"4.1.0","esm2017")})();const r3={apiKey:"AIzaSyBO107C7FXURFgHFa2kfj5AKXu--Z-t46Q",authDomain:"blogreact-b8387.firebaseapp.com",projectId:"blogreact-b8387",storageBucket:"blogreact-b8387.appspot.com",messagingSenderId:"1098841125799",appId:"1:1098841125799:web:13309fa1194820708afc82",measurementId:"G-G1DH5PE7L6"},Jp=g_(r3);qP(Jp);YE(Jp);const er=YE(Jp);function i3({setSelectedTease:e}){const[t,n]=k.useState([]),r=Fi(er,"tease"),i=async()=>{const u=await Hu(r);n(u.docs.map(c=>({...c.data(),title:c.data().title,icon:c.data().icon,id:c.id})))};k.useEffect(()=>{i()},[]);const s=u=>{e(u),console.log(u)},o=["La technologie est le meilleur outil que nous ayons pour changer le monde.","L'innovation distingue un leader d'un suiveur.","La technologie ne connaît pas de frontières.","L'innovation distingue les leaders des suiveurs. - Steve Jobs","Le progrès n'est pas dû à la technologie, mais à l'usage intelligent de la technologie. - Nido Qubein","La créativité découle de l'interaction entre l'expérience, la connaissance, l'imagination et les stimuli extérieurs.  - Bob Nelson","Le futur appartient à ceux qui voient les possibilités avant qu'elles ne deviennent évidentes. - John Sculley","Le succès, c'est la somme de petits efforts répétés jour après jour. - Robert Collier","Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre.  - Steve Jobs","La connaissance s'accroît quand on la partage.","Les problèmes sont des opportunités déguisées. - John Adams","La persévérance n'est pas une longue course, c'est de nombreux petits pas.  - Winston Churchill","Le changement est le résultat final de tout véritable apprentissage.  - Leo Buscaglia","La clé du succès est de commencer avant d'être prêt.  - Marie Forleo","Le succès, c'est de tomber sept fois et de se relever huit. - Proverbe japonais","L'échec est l'opportunité de recommencer intelligemment. - Henry Ford","Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez. - Albert Schweitzer","La seule manière de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs"],[a,l]=k.useState(o[Math.floor(Math.random()*o.length)]);return k.useEffect(()=>{const u=setInterval(()=>{l(o[Math.floor(Math.random()*o.length)])},1728e5);return()=>clearInterval(u)},[a]),y.jsxs("div",{className:"sidebar sticky-top",children:[y.jsxs("div",{className:"filterbar",children:[y.jsx("h5",{children:"Filtres"}),y.jsx("div",{className:"container",children:y.jsx("div",{className:"row",children:t.map(u=>y.jsxs("div",{className:"row",children:[y.jsxs("div",{className:"col-1",children:[u.icon==="faScaleBalanced"&&y.jsx(ft,{icon:zk}),u.icon==="faVirus"&&y.jsx(ft,{icon:Ok}),u.icon==="faGraduationCap"&&y.jsx(ft,{icon:Bk}),u.icon==="faHammer"&&y.jsx(ft,{icon:Uk})]}),y.jsx("div",{className:"col-11",children:y.jsx("a",{onClick:()=>s(String(u.title)),children:u.title})})]},u.id))})})]}),y.jsxs("div",{className:"quotebar",children:[y.jsx("h5",{children:"Daily quote 🧠"}),y.jsxs("h6",{children:["“ ",a,"”"]})]}),y.jsx("div",{className:"linkbar",children:y.jsx("a",{href:"https://kbelony.webflow.io/",target:"_blank",children:y.jsx("h4",{children:"Lien utile"})})}),y.jsxs("div",{className:"explainationbar",children:[y.jsx("h5",{children:"Explication projet"}),y.jsxs("div",{className:"explainationtext",children:["Ce projet m'a permis d'apprendre ",y.jsx("b",{children:"React"})," en autodidacte en l'espace de deux semaines :",y.jsx("a",{href:"/explanation",children:"En savoir plus"})]})]})]})}const s3=()=>y.jsx("nav",{"aria-label":"breadcrumb",children:y.jsx("ol",{className:"breadcrumb",children:y.jsx("li",{className:"breadcrumb-item",children:y.jsx("a",{href:"#",onClick:()=>window.location.reload(),children:"Home"})})})});function o3(){const[e,t]=k.useState([]),n=Fi(er,"posts"),[r,i]=k.useState(""),s=async()=>{const a=await Hu(n);t(a.docs.map(l=>({...l.data(),id:l.id,thumbnail:l.data().thumbnail,description:l.data().description,tease:l.data().tease,title:l.data().title,date:l.data().date})))};k.useEffect(()=>{s()},[]);const o=e.filter(a=>r===""||a.tease===r);return y.jsxs("div",{className:"row",children:[y.jsxs("div",{className:"col-sm-12 col-md-12 col-lg-9",children:[y.jsx(s3,{}),y.jsx("div",{className:"row row-cols-1 row-cols-md-1 g-4",children:o.map(a=>y.jsx("div",{className:"col",children:y.jsx(LS,{to:`/read/${a.id}`,children:y.jsx("div",{className:"card mb-3",children:y.jsxs("div",{className:"row g-0",children:[y.jsx("div",{className:"col-md-3",children:y.jsx("img",{src:a.thumbnail,className:"img-fluid img-card-group",alt:"Post img thumbnail"})}),y.jsx("div",{className:"col-md-9",children:y.jsxs("div",{className:"card-body",children:[y.jsx("p",{className:"tease-category",children:a.tease}),y.jsx("h5",{className:"card-title",children:a.title}),y.jsx("p",{className:"card-text",children:a.description}),y.jsx("p",{className:"card-text",children:y.jsxs("small",{className:"text-body-secondary",children:["Last updated ",a.date]})})]})})]})})})},a.id))})]}),y.jsx("div",{className:"col-sm-0 col-md-0 col-lg-3",children:y.jsx(i3,{setSelectedTease:i})})]})}const a3=()=>{const e=k.useRef(null),t=async n=>{var i;n.preventDefault(),console.log(e);const r={email:(i=e.current)==null?void 0:i.value};try{await u2(Fi(er,"email"),r)}catch{console.log(e)}};return y.jsxs("footer",{className:"bg-light text-center text-lg-start mt-3",children:[y.jsx("div",{className:"inspo text-center p-4",children:y.jsxs("h6",{children:["Ce site est grandement inspirée de ",y.jsx("a",{href:"https://lecrabeinfo.net/",target:"_blank",children:"https://lecrabeinfo.net/"})]})}),y.jsx("div",{className:"text-center p-3",children:y.jsxs("form",{onSubmit:t,children:[y.jsx("label",{children:"Entrer votre e-mail"}),y.jsx("input",{type:"email",ref:e}),y.jsx("button",{type:"submit",children:"Save"})]})})]})},l3=()=>{const e=A1(),t=new Date,n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),s=`${n}-${r}-${i}`,o=k.useRef(null),a=k.useRef(null),l=k.useRef(null),u=k.useRef(null),c=k.useRef(null),f=k.useRef(null),h=k.useRef(null),m=k.useRef(null),[v,_]=k.useState([]),E=Fi(er,"tease"),p=async()=>{const g=await Hu(E);_(g.docs.map(w=>({...w.data(),id:w.id,title:w.data().title})))};k.useEffect(()=>{p()},[]);const d=async g=>{var T,C,P,D,G,U;g.preventDefault();const w={date:s,description:(T=a.current)==null?void 0:T.value,id:(C=l.current)==null?void 0:C.value,postText:(P=u.current)==null?void 0:P.value,tease:(D=c.current)==null?void 0:D.value,thumbnail:(G=f.current)==null?void 0:G.value,title:(U=h.current)==null?void 0:U.value};try{await u2(Fi(er,"posts"),w)}catch{console.log(w)}e("/")};return y.jsx("div",{className:"container",children:y.jsxs("form",{onSubmit:d,children:[y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"dateInput",className:"form-label",children:"Date"}),y.jsx("input",{type:"date",className:"form-control",id:"dateInput","aria-describedby":"datehelp",ref:o,defaultValue:s})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"descriptionInput",className:"form-label",children:"Description"}),y.jsx("input",{type:"text",className:"form-control",id:"descriptionInput","aria-describedby":"descriptionhelp",ref:a,defaultValue:""})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"idInput",className:"form-label",children:"Id"}),y.jsx("input",{type:"number",className:"form-control",id:"idInput","aria-describedby":"idhelp",ref:l})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"SummaryInput",className:"form-label",children:"Resumer"}),y.jsx("input",{type:"text",className:"form-control",id:"summaryInput","aria-describedby":"summaryhelp",ref:m})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"postTextInput",className:"form-label",children:"Texte de l'article"}),y.jsx("input",{type:"text",className:"form-control",id:"postTextInput","aria-describedby":"postTexthelp",ref:u})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"teaseInput",className:"form-label",children:"Catégorie"}),y.jsx("select",{className:"form-control",id:"teaseInput","aria-describedby":"teasehelp",ref:c,children:v.map(g=>y.jsx("option",{value:g.title,children:g.title},g.id))})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"thumbnailInput",className:"form-label",children:"URL de l'image"}),y.jsx("input",{type:"text",className:"form-control",id:"thumbnailInput","aria-describedby":"thumbnailhelp",ref:f})]}),y.jsxs("div",{className:"mb-3",children:[y.jsx("label",{htmlFor:"titleInput",className:"form-label",children:"Titre"}),y.jsx("input",{type:"text",className:"form-control",id:"titleInput","aria-describedby":"titlehelp",ref:h})]}),y.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};function u3(){const[e,t]=k.useState([]),[n,r]=k.useState(-1),i=Fi(er,"posts"),s=async()=>{const u=await Hu(i);t(u.docs.map(c=>({...c.data(),id:c.id,thumbnail:c.data().thumbnail,description:c.data().description,tease:c.data().tease,title:c.data().title,date:c.data().date})))};k.useEffect(()=>{s()},[]);const o=u=>{r(u)},a=()=>{r(-1)},l=async u=>{try{await t3(Kp(er,"posts",u)),console.log("Document deleted successfully"),s()}catch(c){console.error("Error deleting document: ",c)}};return y.jsx("div",{className:"container delete-post",children:y.jsx("div",{className:"row mt-4",children:e.map((u,c)=>y.jsx("div",{className:"col-md-4",onMouseEnter:()=>o(c),onMouseLeave:a,children:y.jsxs("div",{className:"card",children:[y.jsx("img",{src:u.thumbnail,className:"card-img-top",alt:"Post img thumbnail",style:{opacity:n===c?.7:1}}),n===c&&y.jsx("div",{className:"card-overlay",children:y.jsx("div",{className:"delete-icon",onClick:()=>u&&l(u.id),children:y.jsx(ft,{icon:Mk})})})]})}))})})}function c3(){const{id:e}=dS(),[t,n]=k.useState(null);return k.useEffect(()=>{(async()=>{const i=await e3(Kp(er,"posts",e??""));n((i==null?void 0:i.data())??null)})()},[e]),t?y.jsxs("div",{className:"row",children:[y.jsx("div",{className:"col-sm-12 col-md-12 col-lg-9",children:y.jsxs("div",{className:"container",children:[y.jsx("nav",{"aria-label":"breadcrumb",children:y.jsxs("ol",{className:"breadcrumb",children:[y.jsx("li",{className:"breadcrumb-item",children:y.jsx("a",{href:"https://kbelony.github.io/blogReact/",children:"Home"})}),y.jsx("li",{className:"breadcrumb-item active",children:t.tease}),y.jsxs("li",{className:"breadcrumb-item active","aria-current":"page",children:[" ",t.title]})]})}),y.jsx("h1",{className:"title-post",children:t.title}),y.jsx("div",{className:"meta",children:y.jsxs("div",{className:"row",children:[y.jsxs("div",{className:"col-1",children:[y.jsx("img",{src:"https://picsum.photos/200",alt:"Logo writer",className:"rounded-circle"}),y.jsx("p",{children:"John.D"})]}),y.jsxs("div",{className:"col-11",children:[y.jsxs("p",{children:["Le ",t.date]}),y.jsxs("p",{children:["Mis à jour le ",t.date]}),y.jsxs("p",{children:[Math.floor(Math.random()*401)+50," vues"]})]})]})}),y.jsx("div",{className:"thumbnail-post",children:y.jsx("img",{src:t.thumbnail,alt:"Post img thumbnail",className:"mx-auto d-block "})}),y.jsx("div",{className:"row",children:y.jsxs("div",{className:"singular-entry-body",children:[y.jsx("p",{children:t.description}),y.jsx("br",{}),y.jsx("div",{className:"navigation-bar ",children:y.jsxs("div",{className:"summary-bar-item-body mx-auto d-block",children:[y.jsx("h5",{children:"Sommaire"}),y.jsx("div",{className:"summary-bar-item-link",children:y.jsx("div",{dangerouslySetInnerHTML:{__html:t.summary}})})]})}),y.jsx("div",{dangerouslySetInnerHTML:{__html:t.postText}})]})})]})}),y.jsx("div",{className:"col-sm-0 col-md-0 col-lg-3",children:y.jsx("div",{className:"navigation-bar sticky-top mx-auto d-block",children:y.jsxs("div",{className:"navigation-bar-item-body",children:[y.jsx("h5",{children:"Navigation"}),y.jsx("div",{className:"navigation-bar-item-link",children:y.jsx("div",{dangerouslySetInnerHTML:{__html:t.summary}})}),y.jsxs("div",{className:"navigation-bar-item-meta",children:[y.jsxs("p",{children:[y.jsx(ft,{icon:Lk}),Math.floor(Math.random()*25)+0," like"]}),y.jsxs("a",{href:"#top",children:[y.jsx(ft,{icon:$k}),"Retourner en haut"]})]})]})})})]}):y.jsx("div",{children:"Loading..."})}const rv=()=>y.jsxs("div",{className:"text-center align-items-center",children:[y.jsx("h1",{children:"Explication projet"}),y.jsx("p",{children:"J'ai pris la décision de lancer ce projet dans le but d'apprendre à créer un site web en utilisant la technologie React, et d'acquérir les compétences nécessaires pour le déployer de manière autonome. L'idée de développer un blog m'est venue à l'esprit après avoir visionné une vidéo qui a suscité mon intérêt :"}),y.jsx("iframe",{className:"mb-3 mt-3",width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/xaUj-NCDu7c",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),y.jsxs("p",{children:["J'ai construit un backend en utilisant Firebase. Pour la mise en place de mon projet React, j'ai opté pour"," ",y.jsx("a",{href:"https://vitejs.dev/guide/",children:"Vite"}),". Après avoir démarré par la page d'accueil et créé plusieurs publications directement dans la base de données, j'ai réalisé qu'il serait plus pratique pour moi de créer mes articles directement depuis le site. C'est ainsi que j'ai développé une page de création accessible uniquement en local. Vous pouvez voir une image ci-dessous illustrant cela :"]}),y.jsx("img",{src:"src/assets/img/Create-screen.png"}),y.jsx("p",{children:"Puis, j'ai conçu une page dédiée à la suppression, me permettant ainsi d'effacer des éléments en même temps. Ces deux pages m'ont ouvert la voie pour exploiter pleinement le concept de CRUD (Create, Read, Update, Delete), qui constitue le fondement de la gestion des données. Avec le CRUD, je peux créer de nouveaux contenus, les afficher, les mettre à jour et les supprimer, offrant ainsi une expérience complète et interactive aux utilisateurs. L'image ci-dessous illustre cette approche dynamique :"}),y.jsx("img",{src:"src/assets/img/delete-screen.png"})]});function f3(){const e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";return y.jsxs("div",{children:[y.jsx(Hk,{}),y.jsxs(CS,{children:[y.jsx(hr,{path:"blogReact/",element:y.jsx("div",{children:y.jsx(o3,{})})}),e&&y.jsxs(y.Fragment,{children:[y.jsx(hr,{path:"blogReact/create",element:y.jsx(l3,{})}),y.jsx(hr,{path:"blogReact/delete",element:y.jsx(u3,{})})]}),y.jsx(hr,{path:"/read/:id",element:y.jsx(c3,{})}),y.jsx(hr,{path:"blogReact/explanation",element:y.jsx(rv,{})}),y.jsx(hr,{path:"blogReact/blogReact/explanation",element:y.jsx(rv,{})})]}),y.jsx(a3,{})]})}Gc.createRoot(document.getElementById("root")).render(y.jsx(ql.StrictMode,{children:y.jsx(DS,{children:y.jsx(f3,{})})}));
