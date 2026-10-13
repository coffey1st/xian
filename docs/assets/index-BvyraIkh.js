(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Me={},Cs=[],oi=()=>{},md=()=>!1,Ya=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ja=n=>n.startsWith("onUpdate:"),Je=Object.assign,Eu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Pm=Object.prototype.hasOwnProperty,de=(n,t)=>Pm.call(n,t),$t=Array.isArray,is=n=>Ao(n)==="[object Map]",yr=n=>Ao(n)==="[object Set]",_h=n=>Ao(n)==="[object Date]",Qt=n=>typeof n=="function",Ue=n=>typeof n=="string",li=n=>typeof n=="symbol",ye=n=>n!==null&&typeof n=="object",gd=n=>(ye(n)||Qt(n))&&Qt(n.then)&&Qt(n.catch),_d=Object.prototype.toString,Ao=n=>_d.call(n),Lm=n=>Ao(n).slice(8,-1),vd=n=>Ao(n)==="[object Object]",Tu=n=>Ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ao=wu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Dm=/-\w/g,Xn=Ka(n=>n.replace(Dm,t=>t.slice(1).toUpperCase())),Im=/\B([A-Z])/g,Fs=Ka(n=>n.replace(Im,"-$1").toLowerCase()),xd=Ka(n=>n.charAt(0).toUpperCase()+n.slice(1)),xl=Ka(n=>n?`on${xd(n)}`:""),ii=(n,t)=>!Object.is(n,t),xa=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},yd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Au=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let vh;const Za=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dn(n){if($t(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ue(i)?Om(i):Dn(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ue(n)||ye(n))return n}const Um=/;(?![^(]*\))/g,Nm=/:([^]+)/,Fm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Om(n){const t={};return n.replace(Fm,e=>e.startsWith("/*")?"":e).split(Um).forEach(e=>{if(e){const i=e.split(Nm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function oe(n){let t="";if(Ue(n))t=n;else if($t(n))for(let e=0;e<n.length;e++){const i=oe(n[e]);i&&(t+=i+" ")}else if(ye(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zm=wu(km);function Md(n){return!!n||n===""}function Bm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Cr(n[s],t[s],e);return i}function xh(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Cr(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Hm(n,t,e){let i=is(n),s=is(t);if(i||s||(i=yr(n),s=yr(t),i||s))return i&&s?xh(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Cr(n[a],t[a],e))return!1}return String(n)===String(t)}function yh(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Cr(n,t,e){if(n===t)return!0;let i=_h(n),s=_h(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=li(n),s=li(t),i||s?n===t:(i=$t(n),s=$t(t),i||s?i&&s?yh(n,t,e,Bm):!1:(i=ye(n),s=ye(t),i||s?!i||!s?!1:yh(n,t,e,Hm):String(n)===String(t))))}function bd(n,t){return n.findIndex(e=>Cr(e,t))}const Sd=n=>!!(n&&n.__v_isRef===!0),ft=n=>Ue(n)?n:n==null?"":$t(n)||ye(n)&&(n.toString===_d||!Qt(n.toString))?Sd(n)?ft(n.value):JSON.stringify(n,wd,2):String(n),wd=(n,t)=>Sd(t)?wd(n,t.value):is(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[yl(i,r)+" =>"]=s,e),{})}:yr(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>yl(e))}:li(t)?yl(t):ye(t)&&!$t(t)&&!vd(t)?String(t):t,yl=(n,t="")=>{var e;return li(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class Vm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&We&&(We.active?(this.parent=We,this.index=(We.scopes||(We.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=We;try{return We=this,t()}finally{We=e}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){if(this._on>0&&--this._on===0){if(We===this)We=this.prevScope;else{let t=We;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gm(){return We}let Se;const Ml=new WeakSet;class Ed{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&(We.active?We.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ad(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mh(this),Cd(this);const t=Se,e=$n;Se=this,$n=!0;try{return this.fn()}finally{Rd(this),Se=t,$n=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Pu(t);this.deps=this.depsTail=void 0,Mh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bc(this)&&this.run()}get dirty(){return bc(this)}}let Td=0,lo,co;function Ad(n,t=!1){if(n.flags|=8,t){n.next=co,co=n;return}n.next=lo,lo=n}function Cu(){Td++}function Ru(){if(--Td>0)return;if(co){let t=co;for(co=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;lo;){let t=lo;for(lo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Cd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Pu(i),Wm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function bc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Pd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Pd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===mo)||(n.globalVersion=mo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bc(n))))return;n.flags|=2;const t=n.dep,e=Se,i=$n;Se=n,$n=!0;try{Cd(n);const s=n.fn(n._value);(t.version===0||ii(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Se=e,$n=i,Rd(n),n.flags&=-3}}function Pu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Pu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Wm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let $n=!0;const Ld=[];function Di(){Ld.push($n),$n=!1}function Ii(){const n=Ld.pop();$n=n===void 0?!0:n}function Mh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Se;Se=void 0;try{t()}finally{Se=e}}}let mo=0;class Xm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Se||!$n||Se===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Se)e=this.activeLink=new Xm(Se,this),Se.deps?(e.prevDep=Se.depsTail,Se.depsTail.nextDep=e,Se.depsTail=e):Se.deps=Se.depsTail=e,Dd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Se.depsTail,e.nextDep=void 0,Se.depsTail.nextDep=e,Se.depsTail=e,Se.deps===e&&(Se.deps=i)}return e}trigger(t){this.version++,mo++,this.notify(t)}notify(t){Cu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ru()}}}function Dd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Dd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Sc=new WeakMap,Ds=Symbol(""),wc=Symbol(""),go=Symbol("");function Ke(n,t,e){if($n&&Se){let i=Sc.get(n);i||Sc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Lu),s.map=i,s.key=e),s.track()}}function Si(n,t,e,i,s,r){const o=Sc.get(n);if(!o){mo++;return}const a=l=>{l&&l.trigger()};if(Cu(),t==="clear")o.forEach(a);else{const l=$t(n),c=l&&Tu(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===go||!li(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(go)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ds)),is(n)&&a(o.get(wc)));break;case"delete":l||(a(o.get(Ds)),is(n)&&a(o.get(wc)));break;case"set":is(n)&&a(o.get(Ds));break}}Ru()}function zs(n){const t=fe(n);return t===n||(Ke(t,"iterate",go),Nn(n))?t:ci(n)?ss(n)?t.map(e=>ls(Fn(e))):t.map(ls):t.map(Fn)}function Ja(n){return Ke(n=fe(n),"iterate",go),n}function ti(n,t){return ci(n)?ls(ss(n)?Fn(t):t):Fn(t)}const $m={__proto__:null,[Symbol.iterator](){return bl(this,Symbol.iterator,n=>ti(this,n))},concat(...n){return zs(this).concat(...n.map(t=>$t(t)?zs(t):t))},entries(){return bl(this,"entries",n=>(n[1]=ti(this,n[1]),n))},every(n,t){return fi(this,"every",n,t,void 0,arguments)},filter(n,t){return fi(this,"filter",n,t,e=>e.map(i=>ti(this,i)),arguments)},find(n,t){return fi(this,"find",n,t,e=>ti(this,e),arguments)},findIndex(n,t){return fi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return fi(this,"findLast",n,t,e=>ti(this,e),arguments)},findLastIndex(n,t){return fi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return fi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Sl(this,"includes",n)},indexOf(...n){return Sl(this,"indexOf",n)},join(n){return zs(this).join(n)},lastIndexOf(...n){return Sl(this,"lastIndexOf",n)},map(n,t){return fi(this,"map",n,t,void 0,arguments)},pop(){return Or(this,"pop")},push(...n){return Or(this,"push",n)},reduce(n,...t){return bh(this,"reduce",n,t)},reduceRight(n,...t){return bh(this,"reduceRight",n,t)},shift(){return Or(this,"shift")},some(n,t){return fi(this,"some",n,t,void 0,arguments)},splice(...n){return Or(this,"splice",n)},toReversed(){return zs(this).toReversed()},toSorted(n){return zs(this).toSorted(n)},toSpliced(...n){return zs(this).toSpliced(...n)},unshift(...n){return Or(this,"unshift",n)},values(){return bl(this,"values",n=>ti(this,n))}};function bl(n,t,e){const i=Ja(n),s=i[t]();return i!==n&&!Nn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const qm=Array.prototype;function fi(n,t,e,i,s,r){const o=Ja(n),a=o!==n&&!Nn(n),l=o[t];if(l!==qm[t]){const h=l.apply(n,r);return a?Fn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,ti(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function bh(n,t,e,i){const s=Ja(n),r=s!==n&&!Nn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=ti(n,c)),e.call(this,c,ti(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?ti(n,l):l}function Sl(n,t,e){const i=fe(n);Ke(i,"iterate",go);const s=i[t](...e);return(s===-1||s===!1)&&Uu(e[0])?(e[0]=fe(e[0]),i[t](...e)):s}function Or(n,t,e=[]){Di(),Cu();const i=fe(n)[t].apply(n,e);return Ru(),Ii(),i}const Ym=wu("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(li));function jm(n){li(n)||(n=String(n));const t=fe(this);return Ke(t,"has",n),t.hasOwnProperty(n)}class Ud{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?r0:kd:r?Od:Fd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=$t(t);if(!s){let l;if(o&&(l=$m[e]))return l;if(e==="hasOwnProperty")return jm}const a=Reflect.get(t,e,Ze(t)?t:i);if((li(e)?Id.has(e):Ym(e))||(s||Ke(t,"get",e),r))return a;if(Ze(a)){const l=o&&Tu(e)?a:a.value;return s&&ye(l)?Tc(l):l}return ye(a)?s?Tc(a):Rr(a):a}}class Nd extends Ud{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=$t(t)&&Tu(e);if(!this._isShallow){const c=ci(r);if(!Nn(i)&&!ci(i)&&(r=fe(r),i=fe(i)),!o&&Ze(r)&&!Ze(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:de(t,e),l=Reflect.set(t,e,i,Ze(t)?t:s);return t===fe(s)&&l&&(a?ii(i,r)&&Si(t,"set",e,i):Si(t,"add",e,i)),l}deleteProperty(t,e){const i=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Si(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!li(e)||!Id.has(e))&&Ke(t,"has",e),i}ownKeys(t){return Ke(t,"iterate",$t(t)?"length":Ds),Reflect.ownKeys(t)}}class Km extends Ud{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Zm=new Nd,Jm=new Km,Qm=new Nd(!0);const Ec=n=>n,No=n=>Reflect.getPrototypeOf(n);function t0(n,t,e){return function(...i){const s=this.__v_raw,r=fe(s),o=is(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ec:t?ls:Fn;return!t&&Ke(r,"iterate",l?wc:Ds),Je(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Fo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function e0(n,t){const e={get(s){const r=this.__v_raw,o=fe(r),a=fe(s);n||(ii(s,a)&&Ke(o,"get",s),Ke(o,"get",a));const{has:l}=No(o),c=t?Ec:n?ls:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ke(fe(s),"iterate",Ds),s.size},has(s){const r=this.__v_raw,o=fe(r),a=fe(s);return n||(ii(s,a)&&Ke(o,"has",s),Ke(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=fe(a),c=t?Ec:n?ls:Fn;return!n&&Ke(l,"iterate",Ds),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Je(e,n?{add:Fo("add"),set:Fo("set"),delete:Fo("delete"),clear:Fo("clear")}:{add(s){const r=fe(this),o=No(r),a=fe(s),l=!t&&!Nn(s)&&!ci(s)?a:s;return o.has.call(r,l)||ii(s,l)&&o.has.call(r,s)||ii(a,l)&&o.has.call(r,a)||(r.add(l),Si(r,"add",l,l)),this},set(s,r){!t&&!Nn(r)&&!ci(r)&&(r=fe(r));const o=fe(this),{has:a,get:l}=No(o);let c=a.call(o,s);c||(s=fe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ii(r,u)&&Si(o,"set",s,r):Si(o,"add",s,r),this},delete(s){const r=fe(this),{has:o,get:a}=No(r);let l=o.call(r,s);l||(s=fe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=fe(this),r=s.size!==0,o=s.clear();return r&&Si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=t0(s,n,t)}),e}function Du(n,t){const e=e0(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(de(e,s)&&s in i?e:i,s,r)}const n0={get:Du(!1,!1)},i0={get:Du(!1,!0)},s0={get:Du(!0,!1)};const Fd=new WeakMap,Od=new WeakMap,kd=new WeakMap,r0=new WeakMap;function o0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rr(n){return ci(n)?n:Iu(n,!1,Zm,n0,Fd)}function a0(n){return Iu(n,!1,Qm,i0,Od)}function Tc(n){return Iu(n,!0,Jm,s0,kd)}function Iu(n,t,e,i,s){if(!ye(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=o0(Lm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ss(n){return ci(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function Nn(n){return!!(n&&n.__v_isShallow)}function Uu(n){return n?!!n.__v_raw:!1}function fe(n){const t=n&&n.__v_raw;return t?fe(t):n}function l0(n){return!de(n,"__v_skip")&&Object.isExtensible(n)&&yd(n,"__v_skip",!0),n}const Fn=n=>ye(n)?Rr(n):n,ls=n=>ye(n)?Tc(n):n;function Ze(n){return n?n.__v_isRef===!0:!1}function Te(n){return c0(n,!1)}function c0(n,t){return Ze(n)?n:new u0(n,t)}class u0{constructor(t,e){this.dep=new Lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:fe(t),this._value=e?t:Fn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Nn(t)||ci(t);t=i?t:fe(t),ii(t,e)&&(this._rawValue=t,this._value=i?t:Fn(t),this.dep.trigger())}}function G(n){return Ze(n)?n.value:n}const h0={get:(n,t,e)=>t==="__v_raw"?n:G(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ze(s)&&!Ze(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function zd(n){return ss(n)?n:new Proxy(n,h0)}class f0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Ad(this,!0),!0}get value(){const t=this.dep.track();return Pd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function d0(n,t,e=!1){let i,s;return Qt(n)?i=n:(i=n.get,s=n.set),new f0(i,s,e)}const Oo={},Da=new WeakMap;let Ss;function p0(n,t=!1,e=Ss){if(e){let i=Da.get(e);i||Da.set(e,i=[]),i.push(n)}}function m0(n,t,e=Me){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=v=>s?v:Nn(v)||s===!1||s===0?wi(v,1):wi(v);let u,h,f,p,g=!1,_=!1;if(Ze(n)?(h=()=>n.value,g=Nn(n)):ss(n)?(h=()=>c(n),g=!0):$t(n)?(_=!0,g=n.some(v=>ss(v)||Nn(v)),h=()=>n.map(v=>{if(Ze(v))return v.value;if(ss(v))return c(v);if(Qt(v))return l?l(v,2):v()})):Qt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Di();try{f()}finally{Ii()}}const v=Ss;Ss=u;try{return l?l(n,3,[p]):n(p)}finally{Ss=v}}:h=oi,t&&s){const v=h,L=s===!0?1/0:s;h=()=>wi(v(),L)}const m=Gm(),d=()=>{u.stop(),m&&m.active&&Eu(m.effects,u)};if(r&&t){const v=t;t=(...L)=>{const M=v(...L);return d(),M}}let w=_?new Array(n.length).fill(Oo):Oo;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const L=u.run();if(v||s||g||(_?L.some((M,E)=>ii(M,w[E])):ii(L,w))){f&&f();const M=Ss;Ss=u;try{const E=[L,w===Oo?void 0:_&&w[0]===Oo?[]:w,p];w=L,l?l(t,3,E):t(...E)}finally{Ss=M}}}else u.run()};return a&&a(y),u=new Ed(h),u.scheduler=o?()=>o(y,!1):y,p=v=>p0(v,!1,u),f=u.onStop=()=>{const v=Da.get(u);if(v){if(l)l(v,4);else for(const L of v)L();Da.delete(u)}},t?i?y(!0):w=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function wi(n,t=1/0,e){if(t<=0||!ye(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ze(n))wi(n.value,t,e);else if($t(n))for(let i=0;i<n.length;i++)wi(n[i],t,e);else if(yr(n)||is(n))n.forEach(i=>{wi(i,t,e)});else if(vd(n)){for(const i in n)wi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Co(n,t,e,i){try{return i?n(...i):n()}catch(s){Qa(s,t,e)}}function Yn(n,t,e,i){if(Qt(n)){const s=Co(n,t,e,i);return s&&gd(s)&&s.catch(r=>{Qa(r,t,e)}),s}if($t(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Yn(n[r],t,e,i));return s}}function Qa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Di(),Co(r,null,10,[n,l,c]),Ii();return}}g0(n,e,s,i,o)}function g0(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const rn=[];let Qn=-1;const dr=[];let Zi=null,or=0;const Bd=Promise.resolve();let Ia=null;function tl(n){const t=Ia||Bd;return n?t.then(this?n.bind(this):n):t}function _0(n){let t=Qn+1,e=rn.length;for(;t<e;){const i=t+e>>>1,s=rn[i],r=_o(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Nu(n){if(!(n.flags&1)){const t=_o(n),e=rn[rn.length-1];!e||!(n.flags&2)&&t>=_o(e)?rn.push(n):rn.splice(_0(t),0,n),n.flags|=1,Hd()}}function Hd(){Ia||(Ia=Bd.then(Gd))}function v0(n){if(!$t(n))Zi&&n.id===-1?Zi.splice(or+1,0,n):n.flags&1||(dr.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)dr.push(n[t]);Hd()}function Sh(n,t,e=Qn+1){for(;e<rn.length;e++){const i=rn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;rn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vd(n){if(dr.length){const t=[...new Set(dr)].sort((e,i)=>_o(e)-_o(i));if(dr.length=0,Zi){for(let e=0;e<t.length;e++)Zi.push(t[e]);return}for(Zi=t,or=0;or<Zi.length;or++){const e=Zi[or];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Zi=null,or=0}}const _o=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gd(n){try{for(Qn=0;Qn<rn.length;Qn++){const t=rn[Qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Co(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qn<rn.length;Qn++){const t=rn[Qn];t&&(t.flags&=-2)}Qn=-1,rn.length=0,Vd(),Ia=null,(rn.length||dr.length)&&Gd()}}let In=null,Wd=null;function Ua(n){const t=In;return In=n,Wd=n&&n.type.__scopeId||null,t}function x0(n,t=In,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Uh(-1);const r=Ua(t),o=Is.length;let a;try{a=n(...s)}finally{for(let l=Is.length;l>o;l--)pp();Ua(r),i._d&&Uh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function sn(n,t){if(In===null)return n;const e=rl(In),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Me]=t[s];r&&(Qt(r)&&(r={mounted:r,updated:r}),r.deep&&wi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ps(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Di(),Yn(l,e,8,[n.el,a,n,t]),Ii())}}function y0(n,t){if(an){let e=an.provides;const i=an.parent&&an.parent.provides;i===e&&(e=an.provides=Object.create(i)),e[n]=t}}function ya(n,t,e=!1){const i=gg();if(i||mr){let s=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Qt(t)?t.call(i&&i.proxy):t}}const M0=Symbol.for("v-scx"),b0=()=>ya(M0);function pr(n,t,e){return Xd(n,t,e)}function Xd(n,t,e=Me){const{immediate:i,deep:s,flush:r,once:o}=e,a=Je({},e),l=t&&i||!t&&r!=="post";let c;if(yo){if(r==="sync"){const p=b0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=oi,p.resume=oi,p.pause=oi,p}}const u=an;a.call=(p,g,_)=>Yn(p,u,g,_);let h=!1;r==="post"?a.scheduler=p=>{dn(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Nu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=m0(n,t,a);return yo&&(c?c.push(f):l&&f()),f}function S0(n,t,e){const i=this.proxy,s=Ue(n)?n.includes(".")?$d(i,n):()=>i[n]:n.bind(i,i);let r;Qt(t)?r=t:(r=t.handler,e=t);const o=Ro(this),a=Xd(s,r.bind(i),e);return o(),a}function $d(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const w0=Symbol("_vte"),el=n=>n.__isTeleport,wl=Symbol("_leaveCb");function E0(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ui){t=e;break}}return t}function qd(n){if(!Ou(n))return el(n.type)&&n.children?E0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Qt(e.default))return e.default()}}function Fu(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Fu(el(e.type)&&qd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Yd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Na=new WeakMap;function uo(n,t,e,i,s=!1){if($t(n)){n.forEach((_,m)=>uo(_,t&&($t(t)?t[m]:t),e,i,s));return}if(ho(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&uo(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?rl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState,f=fe(h),p=h===Me?md:_=>wh(u,_)?!1:de(f,_),g=(_,m)=>!(m&&wh(u,m));if(c!=null&&c!==l){if(Eh(t),Ue(c))u[c]=null,p(c)&&(h[c]=null);else if(Ze(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Qt(l))Co(l,a,12,[o,u]);else{const _=Ue(l),m=Ze(l);if(_||m){const d=()=>{if(n.f){const w=_?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)$t(w)&&Eu(w,r);else if($t(w))w.includes(r)||w.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{d(),Na.delete(n)};w.id=-1,Na.set(n,w),dn(w,e)}else Eh(n),d()}}}function Eh(n){const t=Na.get(n);t&&(t.flags|=8,Na.delete(n))}Za().requestIdleCallback;Za().cancelIdleCallback;const ho=n=>!!n.type.__asyncLoader,Ou=n=>n.type.__isKeepAlive;function T0(n,t){jd(n,"a",t)}function A0(n,t){jd(n,"da",t)}function jd(n,t,e=an){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(nl(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ou(s.parent.vnode)&&C0(i,t,e,s),s=s.parent}}function C0(n,t,e,i){const s=nl(t,n,i,!0);Kd(()=>{Eu(i[t],s)},e)}function nl(n,t,e=an,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Di();const a=Ro(e),l=Yn(t,e,n,o);return a(),Ii(),l});return i?s.unshift(r):s.push(r),r}}const ki=n=>(t,e=an)=>{(!yo||n==="sp")&&nl(n,(...i)=>t(...i),e)},R0=ki("bm"),P0=ki("m"),L0=ki("bu"),D0=ki("u"),ku=ki("bum"),Kd=ki("um"),I0=ki("sp"),U0=ki("rtg"),N0=ki("rtc");function F0(n,t=an){nl("ec",n,t)}const O0=Symbol.for("v-ndc");function ce(n,t,e,i){let s;const r=e,o=$t(n);if(o||Ue(n)){const a=o&&ss(n);let l=!1,c=!1;a&&(l=!Nn(n),c=ci(n),n=Ja(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?ls(Fn(n[u])):Fn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ye(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Ac=n=>n?vp(n)?rl(n):Ac(n.parent):null,fo=Je(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ac(n.parent),$root:n=>Ac(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Jd(n),$forceUpdate:n=>n.f||(n.f=()=>{Nu(n.update)}),$nextTick:n=>n.n||(n.n=tl.bind(n.proxy)),$watch:n=>S0.bind(n)}),El=(n,t)=>n!==Me&&!n.__isScriptSetup&&de(n,t),k0={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(El(i,t))return o[t]=1,i[t];if(s!==Me&&de(s,t))return o[t]=2,s[t];if(de(r,t))return o[t]=3,r[t];if(e!==Me&&de(e,t))return o[t]=4,e[t];Cc&&(o[t]=0)}}const c=fo[t];let u,h;if(c)return t==="$attrs"&&Ke(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Me&&de(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,de(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return El(s,t)?(s[t]=e,!0):i!==Me&&de(i,t)?(i[t]=e,!0):de(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==Me&&a[0]!=="$"&&de(n,a)||El(t,a)||de(r,a)||de(i,a)||de(fo,a)||de(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:de(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Th(n){return $t(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Cc=!0;function z0(n){const t=Jd(n),e=n.proxy,i=n.ctx;Cc=!1,t.beforeCreate&&Ah(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:y,unmounted:v,render:L,renderTracked:M,renderTriggered:E,errorCaptured:I,serverPrefetch:C,expose:S,inheritAttrs:D,components:Y,directives:k,filters:W}=t;if(c&&B0(c,i,null),o)for(const lt in o){const $=o[lt];Qt($)&&(i[lt]=$.bind(e))}if(s){const lt=s.call(e,e);ye(lt)&&(n.data=Rr(lt))}if(Cc=!0,r)for(const lt in r){const $=r[lt],yt=Qt($)?$.bind(e,e):Qt($.get)?$.get.bind(e,e):oi,St=!Qt($)&&Qt($.set)?$.set.bind(e):oi,Lt=wn({get:yt,set:St});Object.defineProperty(i,lt,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:mt=>Lt.value=mt})}if(a)for(const lt in a)Zd(a[lt],i,e,lt);if(l){const lt=Qt(l)?l.call(e):l;Reflect.ownKeys(lt).forEach($=>{y0($,lt[$])})}u&&Ah(u,n,"c");function tt(lt,$){$t($)?$.forEach(yt=>lt(yt.bind(e))):$&&lt($.bind(e))}if(tt(R0,h),tt(P0,f),tt(L0,p),tt(D0,g),tt(T0,_),tt(A0,m),tt(F0,I),tt(N0,M),tt(U0,E),tt(ku,w),tt(Kd,v),tt(I0,C),$t(S))if(S.length){const lt=n.exposed||(n.exposed={});S.forEach($=>{Object.defineProperty(lt,$,{get:()=>e[$],set:yt=>e[$]=yt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===oi&&(n.render=L),D!=null&&(n.inheritAttrs=D),Y&&(n.components=Y),k&&(n.directives=k),C&&Yd(n)}function B0(n,t,e=oi){$t(n)&&(n=Rc(n));for(const i in n){const s=n[i];let r;ye(s)?"default"in s?r=ya(s.from||i,s.default,!0):r=ya(s.from||i):r=ya(s),Ze(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ah(n,t,e){Yn($t(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Zd(n,t,e,i){let s=i.includes(".")?$d(e,i):()=>e[i];if(Ue(n)){const r=t[n];Qt(r)&&pr(s,r)}else if(Qt(n))pr(s,n.bind(e));else if(ye(n))if($t(n))n.forEach(r=>Zd(r,t,e,i));else{const r=Qt(n.handler)?n.handler.bind(e):t[n.handler];Qt(r)&&pr(s,r,n)}}function Jd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Fa(l,c,o,!0)),Fa(l,t,o)),ye(t)&&r.set(t,l),l}function Fa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Fa(n,r,e,!0),s&&s.forEach(o=>Fa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=H0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const H0={data:Ch,props:Rh,emits:Rh,methods:Jr,computed:Jr,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Jr,directives:Jr,watch:G0,provide:Ch,inject:V0};function Ch(n,t){return t?n?function(){return Je(Qt(n)?n.call(this,this):n,Qt(t)?t.call(this,this):t)}:t:n}function V0(n,t){return Jr(Rc(n),Rc(t))}function Rc(n){if($t(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function en(n,t){return n?[...new Set([].concat(n,t))]:t}function Jr(n,t){return n?Je(Object.create(null),n,t):t}function Rh(n,t){return n?$t(n)&&$t(t)?[...new Set([...n,...t])]:Je(Object.create(null),Th(n),Th(t??{})):t}function G0(n,t){if(!n)return t;if(!t)return n;const e=Je(Object.create(null),n);for(const i in t)e[i]=en(n[i],t[i]);return e}function Qd(){return{app:null,config:{isNativeTag:md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W0=0;function X0(n,t){return function(i,s=null){Qt(i)||(i=Je({},i)),s!=null&&!ye(s)&&(s=null);const r=Qd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:W0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:bg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Qt(u.install)?(o.add(u),u.install(c,...h)):Qt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||qn(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,rl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=mr;mr=c;try{return u()}finally{mr=h}}};return c}}let mr=null;const $0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Xn(t)}Modifiers`]||n[`${Fs(t)}Modifiers`];function q0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Me;let s=e;const r=t.startsWith("update:"),o=r&&$0(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ue(u)?u.trim():u)),o.number&&(s=s.map(Au)));let a,l=i[a=xl(t)]||i[a=xl(Xn(t))];!l&&r&&(l=i[a=xl(Fs(t))]),l&&Yn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yn(c,n,6,s)}}const Y0=new WeakMap;function tp(n,t,e=!1){const i=e?Y0:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qt(n)){const l=c=>{const u=tp(c,t,!0);u&&(a=!0,Je(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ye(n)&&i.set(n,null),null):($t(r)?r.forEach(l=>o[l]=null):Je(o,r),ye(n)&&i.set(n,o),o)}function il(n,t){return!n||!Ya(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),de(n,t[0].toLowerCase()+t.slice(1))||de(n,Fs(t))||de(n,t))}function Ph(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:_}=n,m=Ua(n);let d,w;try{if(e.shapeFlag&4){const v=s||i,L=v;d=ei(c.call(L,v,u,h,p,f,g)),w=a}else{const v=t;d=ei(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),w=t.props?a:j0(a)}}catch(v){Is.length=0,Qa(v,n,1),d=qn(Ui)}let y=d;if(w&&_!==!1){const v=Object.keys(w),{shapeFlag:L}=y;v.length&&L&7&&(r&&v.some(ja)&&(w=K0(w,r)),y=Mr(y,w,!1,!0))}if(e.dirs&&(y=Mr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition){const v=el(y.type)&&qd(y)||y;Fu(v,e.transition)}return d=y,Ua(m),d}const j0=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ya(e))&&((t||(t={}))[e]=n[e]);return t},K0=(n,t)=>{const e={};for(const i in n)(!ja(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Z0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Lh(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(ep(o,i,f)&&!il(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lh(i,o,c):!0:!!o;return!1}function Lh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(ep(t,n,r)&&!il(e,r))return!0}return!1}function ep(n,t,e){const i=n[e],s=t[e];return e==="style"&&ye(i)&&ye(s)?!Cr(i,s):i!==s}function J0({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const np={},ip=()=>Object.create(np),sp=n=>Object.getPrototypeOf(n)===np;function Q0(n,t,e,i=!1){const s={},r=ip();n.propsDefaults=Object.create(null),rp(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:a0(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function tg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=fe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(il(n.emitsOptions,f))continue;const p=t[f];if(l)if(de(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Xn(f);s[g]=Pc(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{rp(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!de(t,h)&&((u=Fs(h))===h||!de(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Pc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!de(t,h))&&(delete r[h],c=!0)}c&&Si(n.attrs,"set","")}function rp(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ao(l))continue;const c=t[l];let u;s&&de(s,u=Xn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:il(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=fe(e),c=a||Me;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Pc(s,l,h,c[h],n,!de(c,h))}}return o}function Pc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Ro(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fs(e))&&(i=!0))}return i}const eg=new WeakMap;function op(n,t,e=!1){const i=e?eg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qt(n)){const u=h=>{l=!0;const[f,p]=op(h,t,!0);Je(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ye(n)&&i.set(n,Cs),Cs;if($t(r))for(let u=0;u<r.length;u++){const h=Xn(r[u]);Dh(h)&&(o[h]=Me)}else if(r)for(const u in r){const h=Xn(u);if(Dh(h)){const f=r[u],p=o[h]=$t(f)||Qt(f)?{type:f}:Je({},f),g=p.type;let _=!1,m=!0;if($t(g))for(let d=0;d<g.length;++d){const w=g[d],y=Qt(w)&&w.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=Qt(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||de(p,"default"))&&a.push(h)}}const c=[o,a];return ye(n)&&i.set(n,c),c}function Dh(n){return n[0]!=="$"&&!ao(n)}const zu=n=>n==="_"||n==="_ctx"||n==="$stable",Bu=n=>$t(n)?n.map(ei):[ei(n)],ng=(n,t,e)=>{if(t._n)return t;const i=x0((...s)=>Bu(t(...s)),e);return i._c=!1,i},ap=(n,t,e)=>{const i=n._ctx;for(const s in n){if(zu(s))continue;const r=n[s];if(Qt(r))t[s]=ng(s,r,i);else if(r!=null){const o=Bu(r);t[s]=()=>o}}},lp=(n,t)=>{const e=Bu(t);n.slots.default=()=>e},cp=(n,t,e)=>{for(const i in t)(e||!zu(i))&&(n[i]=t[i])},ig=(n,t,e)=>{const i=n.slots=ip();if(n.vnode.shapeFlag&32){const s=t._;s?(cp(i,t,e),e&&yd(i,"_",s,!0)):ap(t,i)}else t&&lp(n,t)},sg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Me;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:cp(s,t,e):(r=!t.$stable,ap(t,s)),o=t}else t&&(lp(n,t),o={default:1});if(r)for(const a in s)!zu(a)&&o[a]==null&&delete s[a]},dn=cg;function rg(n){return og(n)}function og(n,t){const e=Za();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=oi,insertStaticContent:g}=n,_=(A,N,T,nt=null,q=null,J=null,ot=void 0,gt=null,at=!!N.dynamicChildren)=>{if(A===N)return;A&&!kr(A,N)&&(nt=Mt(A),mt(A,q,J,!0),A=null),N.patchFlag===-2&&(at=!1,N.dynamicChildren=null),N.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(N.dynamicChildren===Cs&&(N.dynamicChildren=[]),N.dynamicChildren.hasOnce=!0);const{type:b,ref:x,shapeFlag:F}=N;switch(b){case sl:m(A,N,T,nt);break;case Ui:d(A,N,T,nt);break;case Ma:A==null&&w(N,T,nt,ot);break;case Zt:Y(A,N,T,nt,q,J,ot,gt,at);break;default:F&1?L(A,N,T,nt,q,J,ot,gt,at):F&6?k(A,N,T,nt,q,J,ot,gt,at):(F&64||F&128)&&b.process(A,N,T,nt,q,J,ot,gt,at,O)}x!=null&&q?uo(x,A&&A.ref,J,N||A,!N):x==null&&A&&A.ref!=null&&uo(A.ref,null,J,A,!0)},m=(A,N,T,nt)=>{if(A==null)i(N.el=a(N.children),T,nt);else{const q=N.el=A.el;N.children!==A.children&&c(q,N.children)}},d=(A,N,T,nt)=>{A==null?i(N.el=l(N.children||""),T,nt):N.el=A.el},w=(A,N,T,nt)=>{[A.el,A.anchor]=g(A.children,N,T,nt,A.el,A.anchor)},y=({el:A,anchor:N},T,nt)=>{let q;for(;A&&A!==N;)q=f(A),i(A,T,nt),A=q;i(N,T,nt)},v=({el:A,anchor:N})=>{let T;for(;A&&A!==N;)T=f(A),s(A),A=T;s(N)},L=(A,N,T,nt,q,J,ot,gt,at)=>{if(N.type==="svg"?ot="svg":N.type==="math"&&(ot="mathml"),A==null)M(N,T,nt,q,J,ot,gt,at);else{const b=A.el&&A.el._isVueCE?A.el:null;try{b&&b._beginPatch(),C(A,N,q,J,ot,gt,at)}finally{b&&b._endPatch()}}},M=(A,N,T,nt,q,J,ot,gt)=>{let at,b;const{props:x,shapeFlag:F,transition:B,dirs:j}=A;if(at=A.el=o(A.type,J,x&&x.is,x),F&8?u(at,A.children):F&16&&I(A.children,at,null,nt,q,Tl(A,J),ot,gt),j&&ps(A,null,nt,"created"),E(at,A,A.scopeId,ot,nt),x){for(const bt in x)bt!=="value"&&!ao(bt)&&r(at,bt,null,x[bt],J,nt);"value"in x&&r(at,"value",null,x.value,J),(b=x.onVnodeBeforeMount)&&Kn(b,nt,A)}j&&ps(A,null,nt,"beforeMount");const Z=ag(q,B);Z&&B.beforeEnter(at),i(at,N,T),((b=x&&x.onVnodeMounted)||Z||j)&&dn(()=>{try{b&&Kn(b,nt,A),Z&&B.enter(at),j&&ps(A,null,nt,"mounted")}finally{}},q)},E=(A,N,T,nt,q)=>{if(T&&p(A,T),nt)for(let J=0;J<nt.length;J++)p(A,nt[J]);if(q){let J=q.subTree;if(N===J||dp(J.type)&&(J.ssContent===N||J.ssFallback===N)){const ot=q.vnode;E(A,ot,ot.scopeId,ot.slotScopeIds,q.parent)}}},I=(A,N,T,nt,q,J,ot,gt,at=0)=>{for(let b=at;b<A.length;b++){const x=A[b]=gt?bi(A[b]):ei(A[b]);_(null,x,N,T,nt,q,J,ot,gt)}},C=(A,N,T,nt,q,J,ot)=>{const gt=N.el=A.el;let{patchFlag:at,dynamicChildren:b,dirs:x}=N;at|=A.patchFlag&16;const F=A.props||Me,B=N.props||Me;let j;if(T&&ms(T,!1),(j=B.onVnodeBeforeUpdate)&&Kn(j,T,N,A),x&&ps(N,A,T,"beforeUpdate"),T&&ms(T,!0),b&&(!A.dynamicChildren||A.dynamicChildren.length!==b.length)&&(at=0,ot=!1,b=null),(F.innerHTML&&B.innerHTML==null||F.textContent&&B.textContent==null)&&u(gt,""),b?S(A.dynamicChildren,b,gt,T,nt,Tl(N,q),J):ot||$(A,N,gt,null,T,nt,Tl(N,q),J,!1),at>0){if(at&16)D(gt,F,B,T,q);else if(at&2&&F.class!==B.class&&r(gt,"class",null,B.class,q),at&4&&r(gt,"style",F.style,B.style,q),at&8){const Z=N.dynamicProps;for(let bt=0;bt<Z.length;bt++){const vt=Z[bt],wt=F[vt],Gt=B[vt];(Gt!==wt||vt==="value")&&r(gt,vt,wt,Gt,q,T)}}at&1&&A.children!==N.children&&u(gt,N.children)}else!ot&&b==null&&D(gt,F,B,T,q);((j=B.onVnodeUpdated)||x)&&dn(()=>{j&&Kn(j,T,N,A),x&&ps(N,A,T,"updated")},nt)},S=(A,N,T,nt,q,J,ot)=>{for(let gt=0;gt<N.length;gt++){const at=A[gt],b=N[gt],x=at.el&&(at.type===Zt||!kr(at,b)||at.shapeFlag&198)?h(at.el):T;_(at,b,x,null,nt,q,J,ot,!0)}},D=(A,N,T,nt,q)=>{if(N!==T){if(N!==Me)for(const J in N)!ao(J)&&!(J in T)&&r(A,J,N[J],null,q,nt);for(const J in T){if(ao(J))continue;const ot=T[J],gt=N[J];ot!==gt&&J!=="value"&&r(A,J,gt,ot,q,nt)}"value"in T&&r(A,"value",N.value,T.value,q)}},Y=(A,N,T,nt,q,J,ot,gt,at)=>{const b=N.el=A?A.el:a(""),x=N.anchor=A?A.anchor:a("");let{patchFlag:F,dynamicChildren:B,slotScopeIds:j}=N;j&&(gt=gt?gt.concat(j):j),A==null?(i(b,T,nt),i(x,T,nt),I(N.children||[],T,x,q,J,ot,gt,at)):F>0&&F&64&&B&&A.dynamicChildren&&A.dynamicChildren.length===B.length?(S(A.dynamicChildren,B,T,q,J,ot,gt),(N.key!=null||q&&N===q.subTree)&&up(A,N,!0)):$(A,N,T,x,q,J,ot,gt,at)},k=(A,N,T,nt,q,J,ot,gt,at)=>{N.slotScopeIds=gt,A==null?N.shapeFlag&512?q.ctx.activate(N,T,nt,ot,at):W(N,T,nt,q,J,ot,at):rt(A,N,at)},W=(A,N,T,nt,q,J,ot)=>{const gt=A.component=mg(A,nt,q);if(Ou(A)&&(gt.ctx.renderer=O),_g(gt,!1,ot),gt.asyncDep){if(q&&q.registerDep(gt,tt,ot),!A.el){const at=gt.subTree=qn(Ui);d(null,at,N,T),A.placeholder=at.el}}else tt(gt,A,N,T,q,J,ot)},rt=(A,N,T)=>{const nt=N.component=A.component;if(Z0(A,N,T))if(nt.asyncDep&&!nt.asyncResolved){N.el=A.el,lt(nt,N,T);return}else nt.next=N,nt.update();else N.el=A.el,nt.vnode=N},tt=(A,N,T,nt,q,J,ot)=>{const gt=()=>{if(A.isMounted){let{next:F,bu:B,u:j,parent:Z,vnode:bt}=A;{const Dt=hp(A);if(Dt){F&&(F.el=bt.el,lt(A,F,ot)),Dt.asyncDep.then(()=>{dn(()=>{A.isUnmounted||b()},q)});return}}let vt=F,wt;ms(A,!1),F?(F.el=bt.el,lt(A,F,ot)):F=bt,B&&xa(B),(wt=F.props&&F.props.onVnodeBeforeUpdate)&&Kn(wt,Z,F,bt),ms(A,!0);const Gt=Ph(A),xt=A.subTree;A.subTree=Gt,_(xt,Gt,h(xt.el),Mt(xt),A,q,J),F.el=Gt.el,vt===null&&J0(A,Gt.el),j&&dn(j,q),(wt=F.props&&F.props.onVnodeUpdated)&&dn(()=>Kn(wt,Z,F,bt),q)}else{let F;const{el:B,props:j}=N,{bm:Z,m:bt,parent:vt,root:wt,type:Gt}=A,xt=ho(N);ms(A,!1),Z&&xa(Z),!xt&&(F=j&&j.onVnodeBeforeMount)&&Kn(F,vt,N),ms(A,!0);{wt.ce&&wt.ce._hasShadowRoot()&&wt.ce._injectChildStyle(Gt,A.parent?A.parent.type:void 0);const Dt=A.subTree=Ph(A);_(null,Dt,T,nt,A,q,J),N.el=Dt.el}if(bt&&dn(bt,q),!xt&&(F=j&&j.onVnodeMounted)){const Dt=N;dn(()=>Kn(F,vt,Dt),q)}(N.shapeFlag&256||vt&&ho(vt.vnode)&&vt.vnode.shapeFlag&256)&&A.a&&dn(A.a,q),A.isMounted=!0,N=T=nt=null}};A.scope.on();const at=A.effect=new Ed(gt);A.scope.off();const b=A.update=at.run.bind(at),x=A.job=at.runIfDirty.bind(at);x.i=A,x.id=A.uid,at.scheduler=()=>Nu(x),ms(A,!0),b()},lt=(A,N,T)=>{N.component=A;const nt=A.vnode.props;A.vnode=N,A.next=null,tg(A,N.props,nt,T),sg(A,N.children,T),Di(),Sh(A),Ii()},$=(A,N,T,nt,q,J,ot,gt,at=!1)=>{const b=A&&A.children,x=A?A.shapeFlag:0,F=N.children,{patchFlag:B,shapeFlag:j}=N;if(B>0){if(B&128){St(b,F,T,nt,q,J,ot,gt,at);return}else if(B&256){yt(b,F,T,nt,q,J,ot,gt,at);return}}j&8?(x&16&&Tt(b,q,J),F!==b&&u(T,F)):x&16?j&16?St(b,F,T,nt,q,J,ot,gt,at):Tt(b,q,J,!0):(x&8&&u(T,""),j&16&&I(F,T,nt,q,J,ot,gt,at))},yt=(A,N,T,nt,q,J,ot,gt,at)=>{A=A||Cs,N=N||Cs;const b=A.length,x=N.length,F=Math.min(b,x);let B;for(B=0;B<F;B++){const j=N[B]=at?bi(N[B]):ei(N[B]);_(A[B],j,T,null,q,J,ot,gt,at)}b>x?Tt(A,q,J,!0,!1,F):I(N,T,nt,q,J,ot,gt,at,F)},St=(A,N,T,nt,q,J,ot,gt,at)=>{let b=0;const x=N.length;let F=A.length-1,B=x-1;for(;b<=F&&b<=B;){const j=A[b],Z=N[b]=at?bi(N[b]):ei(N[b]);if(kr(j,Z))_(j,Z,T,null,q,J,ot,gt,at);else break;b++}for(;b<=F&&b<=B;){const j=A[F],Z=N[B]=at?bi(N[B]):ei(N[B]);if(kr(j,Z))_(j,Z,T,null,q,J,ot,gt,at);else break;F--,B--}if(b>F){if(b<=B){const j=B+1,Z=j<x?N[j].el:nt;for(;b<=B;)_(null,N[b]=at?bi(N[b]):ei(N[b]),T,Z,q,J,ot,gt,at),b++}}else if(b>B)for(;b<=F;)mt(A[b],q,J,!0),b++;else{const j=b,Z=b,bt=new Map;for(b=Z;b<=B;b++){const Rt=N[b]=at?bi(N[b]):ei(N[b]);Rt.key!=null&&bt.set(Rt.key,b)}let vt,wt=0;const Gt=B-Z+1;let xt=!1,Dt=0;const Vt=new Array(Gt);for(b=0;b<Gt;b++)Vt[b]=0;for(b=j;b<=F;b++){const Rt=A[b];if(wt>=Gt){mt(Rt,q,J,!0);continue}let qt;if(Rt.key!=null)qt=bt.get(Rt.key);else for(vt=Z;vt<=B;vt++)if(Vt[vt-Z]===0&&kr(Rt,N[vt])){qt=vt;break}qt===void 0?mt(Rt,q,J,!0):(Vt[qt-Z]=b+1,qt>=Dt?Dt=qt:xt=!0,_(Rt,N[qt],T,null,q,J,ot,gt,at),wt++)}const Wt=xt?lg(Vt):Cs;for(vt=Wt.length-1,b=Gt-1;b>=0;b--){const Rt=Z+b,qt=N[Rt],jt=N[Rt+1],pe=Rt+1<x?jt.el||fp(jt):nt;Vt[b]===0?_(null,qt,T,pe,q,J,ot,gt,at):xt&&(vt<0||b!==Wt[vt]?Lt(qt,T,pe,2):vt--)}}},Lt=(A,N,T,nt,q=null)=>{const{el:J,type:ot,transition:gt,children:at,shapeFlag:b}=A;if(b&6){Lt(A.component.subTree,N,T,nt);return}if(b&128){A.suspense.move(N,T,nt);return}if(b&64){ot.move(A,N,T,O);return}if(ot===Zt){i(J,N,T);for(let F=0;F<at.length;F++)Lt(at[F],N,T,nt);i(A.anchor,N,T);return}if(ot===Ma){y(A,N,T);return}if(nt!==2&&b&1&&gt)if(nt===0)gt.persisted&&!J[wl]?i(J,N,T):(gt.beforeEnter(J),i(J,N,T),dn(()=>gt.enter(J),q));else{const{leave:F,delayLeave:B,afterLeave:j}=gt,Z=()=>{A.ctx.isUnmounted?s(J):i(J,N,T)},bt=()=>{const vt=J._isLeaving||!!J[wl];J._isLeaving&&J[wl](!0),gt.persisted&&!vt?Z():F(J,()=>{Z(),j&&j()})};B?B(J,Z,bt):bt()}else i(J,N,T)},mt=(A,N,T,nt=!1,q=!1)=>{const{type:J,props:ot,ref:gt,children:at,dynamicChildren:b,shapeFlag:x,patchFlag:F,dirs:B,cacheIndex:j,memo:Z}=A;if((F===-2||b&&b.hasOnce)&&(q=!1),gt!=null&&(Di(),uo(gt,null,T,A,!0),Ii()),j!=null&&(!A.ctx||A.ctx===N)&&(N.renderCache[j]=void 0),x&256){N.ctx.deactivate(A);return}const bt=x&1&&B,vt=!ho(A);let wt;if(vt&&(wt=ot&&ot.onVnodeBeforeUnmount)&&Kn(wt,N,A),x&6)ct(A.component,T,nt);else{if(x&128){A.suspense.unmount(T,nt);return}bt&&ps(A,null,N,"beforeUnmount"),x&64?A.type.remove(A,N,T,O,nt):b&&!b.hasOnce&&(J!==Zt||F>0&&F&64)?Tt(b,N,T,!1,!0):(J===Zt&&F&384||!q&&x&16)&&Tt(at,N,T),nt&&st(A)}const Gt=Z!=null&&j==null;(vt&&(wt=ot&&ot.onVnodeUnmounted)||bt||Gt)&&dn(()=>{wt&&Kn(wt,N,A),bt&&ps(A,null,N,"unmounted"),Gt&&(A.el=null)},T)},st=A=>{const{type:N,el:T,anchor:nt,transition:q}=A;if(N===Zt){U(T,nt);return}if(N===Ma){v(A),q&&!q.persisted&&q.afterLeave&&q.afterLeave();return}const J=()=>{s(T),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:ot,delayLeave:gt}=q,at=()=>ot(T,J);gt?gt(A.el,J,at):at()}else J()},U=(A,N)=>{let T;for(;A!==N;)T=f(A),s(A),A=T;s(N)},ct=(A,N,T)=>{const{bum:nt,scope:q,job:J,subTree:ot,um:gt,m:at,a:b}=A;Ih(at),Ih(b),nt&&xa(nt),q.stop(),J?(J.flags|=8,mt(ot,A,N,T)):A.vnode.el&&ot&&(ot.transition=A.vnode.transition,mt(ot,A,N,T)),gt&&dn(gt,N),dn(()=>{A.isUnmounted=!0},N)},Tt=(A,N,T,nt=!1,q=!1,J=0)=>{for(let ot=J;ot<A.length;ot++)mt(A[ot],N,T,nt,q)},Mt=A=>{if(A.shapeFlag&6)return Mt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const N=f(A.anchor||A.el),T=N&&N[w0];return T?f(T):N};let ut=!1;const K=(A,N,T)=>{let nt;A==null?N._vnode&&(mt(N._vnode,null,null,!0),nt=N._vnode.component):_(N._vnode||null,A,N,null,null,null,T),N._vnode=A,ut||(ut=!0,Sh(nt),Vd(),ut=!1)},O={p:_,um:mt,m:Lt,r:st,mt:W,mc:I,pc:$,pbc:S,n:Mt,o:n};return{render:K,hydrate:void 0,createApp:X0(K)}}function Tl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function ag(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function up(n,t,e=!1){const i=n.children,s=t.children;if($t(i)&&$t(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&up(o,a)),a.type===sl&&(a.patchFlag===-1&&(a=s[r]=bi(a)),a.el=o.el),a.type===Ui&&!a.el&&(a.el=o.el)}}function lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function hp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hp(t)}function Ih(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function fp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?fp(t.subTree):null}const dp=n=>n.__isSuspense;function cg(n,t){t&&t.pendingBranch?$t(n)?t.effects.push(...n):t.effects.push(n):v0(n)}const Zt=Symbol.for("v-fgt"),sl=Symbol.for("v-txt"),Ui=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),Is=[];let Tn=null;function dt(n=!1){Is.push(Tn=n?null:[])}function pp(){Is.pop(),Tn=Is[Is.length-1]||null}let vo=1;function Uh(n,t=!1){vo+=n,n<0&&Tn&&t&&(Tn.hasOnce=!0)}function mp(n){return n.dynamicChildren=vo>0?Tn||Cs:null,pp(),vo>0&&Tn&&Tn.push(n),n}function pt(n,t,e,i,s,r){return mp(P(n,t,e,i,s,r,!0))}function Lc(n,t,e,i,s){return mp(qn(n,t,e,i,s,!0))}function gp(n){return n?n.__v_isVNode===!0:!1}function kr(n,t){return n.type===t.type&&n.key===t.key}const _p=({key:n})=>n??null,ba=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ue(n)||Ze(n)||Qt(n)?{i:In,r:n,k:t,f:!!e}:n:null);function P(n,t=null,e=null,i=0,s=null,r=n===Zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&_p(t),ref:t&&ba(t),scopeId:Wd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:In};return a?(ka(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ue(e)?8:16),vo>0&&!o&&Tn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Tn.push(l),l}const qn=ug;function ug(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===O0)&&(n=Ui),gp(n)){const a=Mr(n,t,!0);return e&&ka(a,e),vo>0&&!r&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(n)]=a:Tn.push(a)),a.patchFlag=-2,a}if(Mg(n)&&(n=n.__vccOpts),t){t=hg(t);let{class:a,style:l}=t;a&&!Ue(a)&&(t.class=oe(a)),ye(l)&&(Uu(l)&&!$t(l)&&(l=Je({},l)),t.style=Dn(l))}const o=Ue(n)?1:dp(n)?128:el(n)?64:ye(n)?4:Qt(n)?2:0;return P(n,t,e,i,s,o,r,!0)}function hg(n){return n?Uu(n)||sp(n)?Je({},n):n:null}function Mr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?fg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_p(c),ref:t&&t.ref?e&&r?$t(r)?r.concat(ba(t)):[r,ba(t)]:ba(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Zt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Mr(n.ssContent),ssFallback:n.ssFallback&&Mr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Fu(u,l.clone(u)),u}function ve(n=" ",t=0){return qn(sl,null,n,t)}function Oa(n,t){const e=qn(Ma,null,n);return e.staticCount=t,e}function Jt(n="",t=!1){return t?(dt(),Lc(Ui,null,n)):qn(Ui,null,n)}function ei(n){return n==null||typeof n=="boolean"?qn(Ui):$t(n)?qn(Zt,null,n.slice()):gp(n)?bi(n):qn(sl,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Mr(n)}function ka(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if($t(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ka(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!sp(t)?t._ctx=In:s===3&&In&&(In.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Qt(t)){if(i&65){ka(n,{default:t});return}t={default:t,_ctx:In},e=32}else t=String(t),i&64?(e=16,t=[ve(t)]):e=8;n.children=t,n.shapeFlag|=e}function fg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=oe([t.class,i.class]));else if(s==="style")t.style=Dn([t.style,i.style]);else if(Ya(s)){const r=t[s],o=i[s];o&&r!==o&&!($t(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ja(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Kn(n,t,e,i=null){Yn(n,t,7,[e,i])}const dg=Qd();let pg=0;function mg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||dg,r={uid:pg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(i,s),emitsOptions:tp(i,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:i.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=q0.bind(null,r),n.ce&&n.ce(r),r}let an=null;const gg=()=>an||In;let za,xo;{const n=Za(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};za=t("__VUE_INSTANCE_SETTERS__",e=>an=e),xo=t("__VUE_SSR_SETTERS__",e=>yo=e)}const Ro=n=>{const t=an;return za(n),n.scope.on(),()=>{n.scope.off(),za(t)}},Nh=()=>{an&&an.scope.off(),za(null)};function vp(n){return n.vnode.shapeFlag&4}let yo=!1;function _g(n,t=!1,e=!1){t&&xo(t);const{props:i,children:s}=n.vnode,r=vp(n);Q0(n,i,r,t),ig(n,s,e||t);const o=r?vg(n,t):void 0;return t&&xo(!1),o}function vg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,k0);const{setup:i}=e;if(i){Di();const s=n.setupContext=i.length>1?yg(n):null,r=Ro(n),o=Co(i,n,0,[n.props,s]),a=gd(o);if(Ii(),r(),(a||n.sp)&&!ho(n)&&Yd(n),a){if(o.then(Nh,Nh),t)return o.then(l=>{xo(!0);try{Fh(n,l,t)}finally{xo(!1)}}).catch(l=>{Qa(l,n,0)});n.asyncDep=o}else Fh(n,o)}else xp(n)}function Fh(n,t,e){Qt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ye(t)&&(n.setupState=zd(t)),xp(n)}function xp(n,t,e){const i=n.type;n.render||(n.render=i.render||oi);{const s=Ro(n);Di();try{z0(n)}finally{Ii(),s()}}}const xg={get(n,t){return Ke(n,"get",""),n[t]}};function yg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,xg),slots:n.slots,emit:n.emit,expose:t}}function rl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(zd(l0(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in fo)return fo[e](n)},has(t,e){return e in t||e in fo}})):n.proxy}function Mg(n){return Qt(n)&&"__vccOpts"in n}const wn=(n,t)=>d0(n,t,yo),bg="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dc;const Oh=typeof window<"u"&&window.trustedTypes;if(Oh)try{Dc=Oh.createPolicy("vue",{createHTML:n=>n})}catch{}const yp=Dc?n=>Dc.createHTML(n):n=>n,Sg="http://www.w3.org/2000/svg",wg="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,kh=Mi&&Mi.createElement("template"),Eg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Mi.createElementNS(Sg,n):t==="mathml"?Mi.createElementNS(wg,n):e?Mi.createElement(n,{is:e}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{kh.innerHTML=yp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=kh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Tg=Symbol("_vtc");function Ag(n,t,e){const i=n[Tg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Ba=Symbol("_vod"),Mp=Symbol("_vsh"),Qr={name:"show",beforeMount(n,{value:t},{transition:e}){n[Ba]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):zr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),zr(n,!0),i.enter(n)):i.leave(n,()=>{zr(n,!1)}):zr(n,t))},beforeUnmount(n,{value:t}){zr(n,t)}};function zr(n,t){n.style.display=t?n[Ba]:"none",n[Mp]=!t}const Cg=Symbol(""),Rg=/(?:^|;)\s*display\s*:/;function Pg(n,t,e){const i=n.style,s=Ue(e);let r=!1;if(e&&!s){if(t)if(Ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&to(i,a,"")}else for(const o in t)e[o]==null&&to(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Dg(n,o,!Ue(t)&&t?t[o]:void 0,a)||to(i,o,a):to(i,o,"")}}else if(s){if(t!==e){const o=i[Cg];o&&(e+=";"+o),i.cssText=e,r=Rg.test(e)}}else t&&n.removeAttribute("style");Ba in n&&(n[Ba]=r?i.display:"",n[Mp]&&(i.display="none"))}const ko=/\s*!important$/;function to(n,t,e){if($t(e))e.forEach(i=>to(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))ko.test(e)?n.setProperty(t,e.replace(ko,""),"important"):n.setProperty(t,e);else{const i=Lg(n,t);ko.test(e)?n.setProperty(Fs(i),e.replace(ko,""),"important"):n[i]=e}}const zh=["Webkit","Moz","ms"],Al={};function Lg(n,t){const e=Al[t];if(e)return e;let i=Xn(t);if(i!=="filter"&&i in n)return Al[t]=i;i=xd(i);for(let s=0;s<zh.length;s++){const r=zh[s]+i;if(r in n)return Al[t]=r}return t}function Dg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ue(i)&&e===i}const Bh="http://www.w3.org/1999/xlink";function Hh(n,t,e,i,s,r=zm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Bh,t.slice(6,t.length)):n.setAttributeNS(Bh,t,e):e==null||r&&!Md(e)?n.removeAttribute(t):n.setAttribute(t,r?"":li(e)?String(e):e)}function Vh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?yp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Md(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Es(n,t,e,i){n.addEventListener(t,e,i)}function Ig(n,t,e,i){n.removeEventListener(t,e,i)}const Gh=Symbol("_vei");function Ug(n,t,e,i,s=null){const r=n[Gh]||(n[Gh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Og(t);if(i){const c=r[t]=Bg(i,s);Es(n,a,c,l)}else o&&(Ig(n,a,o,l),r[t]=void 0)}}const Ng=/(Once|Passive|Capture)$/,Fg=/^on:?(?:Once|Passive|Capture)$/;function Og(n){let t,e;for(;(e=n.match(Ng))&&!Fg.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Fs(n.slice(2)),t]}let Cl=0;const kg=Promise.resolve(),zg=()=>Cl||(kg.then(()=>Cl=0),Cl=Date.now());function Bg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if($t(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Yn(c,t,5,a)}}else Yn(s,t,5,[i])};return e.value=n,e.attached=zg(),e}const Wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Hg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Ag(n,i,o):t==="style"?Pg(n,e,i):Ya(t)?ja(t)||Ug(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vg(n,t,i,o))?(Vh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hh(n,t,i,o,r,t!=="value")):n._isVueCE&&(Gg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ue(i)))?Vh(n,Xn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Hh(n,t,i,o))};function Vg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Wh(t)&&Qt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wh(t)&&Ue(e)?!1:t in n}function Gg(n,t){const e=n._def.props;if(!e)return!1;const i=Xn(t);return Array.isArray(e)?e.some(s=>Xn(s)===i):Object.keys(e).some(s=>Xn(s)===i)}const Ha=n=>{const t=n.props["onUpdate:modelValue"]||!1;return $t(t)?e=>xa(t,e):t};function Wg(n){n.target.composing=!0}function Xh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rs=Symbol("_assign"),zo=Symbol("_initialValue");function Rl(n,t,e){return t&&(n=n.trim()),e&&(n=Au(n)),n}const lr={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[zo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[zo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Rs]=Ha(s);const r=i||s.props&&s.props.type==="number";Es(n,t?"change":"input",o=>{o.target.composing||n[Rs](Rl(n.value,e,r))}),(e||r)&&Es(n,"change",()=>{n.value=Rl(n.value,e,r)}),t||(Es(n,"compositionstart",Wg),Es(n,"compositionend",Xh),Es(n,"change",Xh))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[zo];delete n[zo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Rs](Rl(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Rs]=Ha(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Au(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Bo={deep:!0,created(n,t,e){n[Rs]=Ha(e),Es(n,"change",()=>{const i=n._modelValue,s=Xg(n),r=n.checked,o=n[Rs];if($t(i)){const a=bd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(yr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(bp(n,r))})},mounted:$h,beforeUpdate(n,t,e){n[Rs]=Ha(e),$h(n,t,e)}};function $h(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if($t(t))s=bd(t,i.props.value)>-1;else if(yr(t))s=t.has(i.props.value);else{if(t===e)return;s=Cr(t,bp(n,!0))}n.checked!==s&&(n.checked=s)}function Xg(n){return"_value"in n?n._value:n.value}function bp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const $g=["ctrl","shift","alt","meta"],qg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>$g.some(e=>n[`${e}Key`]&&!t.includes(e))},pn=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=qg[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},Yg=Je({patchProp:Hg},Eg);let qh;function jg(){return qh||(qh=rg(Yg))}const Kg=((...n)=>{const t=jg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Jg(i);if(!s)return;const r=t._component;!Qt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Zg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Zg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Jg(n){return Ue(n)?document.querySelector(n):n}const Ei={paomo:{name:"牛羊肉泡馍",icon:"🥣",price:38,desc:"掰馍、煮馍、配糖蒜，汤浓肉烂。自己把馍掰成黄豆大小，也是吃泡馍的重要仪式感。"},roujiamo:{name:"腊汁肉夹馍",icon:"🥙",price:15,desc:"白吉馍外酥内软，夹入长时间卤制的腊汁肉，一口下去肉香与麦香交织。"},liangpi:{name:"秦镇米皮",icon:"🍜",price:12,desc:"米皮筋薄细穰，拌入辣子油、醋与时蔬，是关中人四季都爱的清爽味道。"},hulutou:{name:"葫芦头泡馍",icon:"🍲",price:32,desc:"以猪大肠、猪肚和高汤烩馍，汤味醇厚，是西安南院门一带的传统风味。"},biangbiang:{name:"油泼 biangbiang 面",icon:"🍝",price:22,desc:"宽如裤带的手工面配辣椒面、葱花与蒜末，热油一泼，香气瞬间升腾。"},guokui:{name:"锅盔",icon:"🫓",price:10,desc:"关中传统面食，饼厚耐储、麦香扎实，可夹菜、夹肉，也能掰入汤中。"},persimmon:{name:"黄桂柿子饼",icon:"🟠",price:10,desc:"以临潼火晶柿子和面，包入黄桂、核桃等馅料煎制，外皮金黄香甜。"},mirrorcake:{name:"镜糕",icon:"🍡",price:8,desc:"糯米粉蒸成小圆糕，蘸上白糖、果酱与坚果碎，是回民街常见甜点。"},zenggao:{name:"甑糕",icon:"🍚",price:12,desc:"糯米、红枣与蜜枣层层铺叠蒸熟，软糯香甜，适合作为一早的能量补给。"},sourplum:{name:"酸梅汤",icon:"🥤",price:8,desc:"乌梅、山楂、甘草等熬制，酸甜解腻，与西安重口小吃十分相配。"}},Mo={changancenter:{name:"长安中轴",icon:"🧭",desc:"钟楼位于古城中心，东南西北四条大街在此交汇。棋盘式街坊与中轴秩序延续着隋唐都城规划的城市传统。"},drum:{name:"晨钟暮鼓",icon:"🥁",desc:"古代城市以钟鼓报时，清晨鸣钟、傍晚击鼓。钟楼与鼓楼共同构成西安古城最有辨识度的时间地标。"},citywall:{name:"明城墙礼仪",icon:"🏯",desc:"西安城墙形成于明代，城门、箭楼、瓮城和马道组成完整防御体系。南门至今仍举行富有仪式感的入城表演。"},calligraphy:{name:"碑林书法",icon:"🖌️",desc:"碑林保存大量汉唐以来碑刻，篆、隶、楷、行、草诸体俱全，是观察中国书法史与石刻艺术的珍贵现场。"},terracotta:{name:"秦俑军阵",icon:"🗿",desc:"兵马俑按步兵、弩兵、车兵与骑兵等军阵排列，陶俑面容、发髻和铠甲各不相同，展现秦代军制与雕塑工艺。"},tangdance:{name:"盛唐乐舞",icon:"💃",desc:"唐代长安汇聚各地音乐与舞蹈。今天的唐风演艺以鼓乐、舞姿、服饰和灯光重新想象开放包容的国际都会。"},tangart:{name:"唐代艺术",icon:"🎨",desc:"唐代壁画、金银器、三彩与陶俑共同呈现自信、丰盈且兼收并蓄的时代审美。"},tangpalace:{name:"唐宫礼制",icon:"👑",desc:"大明宫以宏阔中轴和分层院落承载朝会、议政与内廷生活，是理解盛唐国家礼制和建筑尺度的重要遗址。"},huaqing:{name:"华清宫故事",icon:"♨️",desc:"骊山温泉被历代经营为离宫园林。唐玄宗、杨贵妃的故事与近现代历史事件，使华清宫拥有多重记忆。"},silkroad:{name:"丝绸之路",icon:"🐫",desc:"长安是古代丝绸之路东方起点之一。商旅、宗教、技术、艺术和生活方式在这里相遇，塑造了多元开放的城市气质。"},qin:{name:"秦制天下",icon:"⚔️",desc:"秦统一后推行郡县制、统一文字与度量衡。秦始皇陵及其陪葬体系折射出帝国治理、工艺组织和宇宙观。"},qinling:{name:"秦岭生态",icon:"🐼",desc:"秦岭是中国重要地理与生态分界线，也是大熊猫、金丝猴、羚牛等珍稀动物的家园。"}},Pn={s_pagoda:{name:"大雁塔积木",icon:"🗼",desc:"登上大雁塔获得。"},s_warrior:{name:"秦俑小像",icon:"🗿",desc:"参观兵马俑或在文创店购买。",price:68},s_tiger:{name:"虎符冰箱贴",icon:"🐯",desc:"秦文化主题纪念品。",price:28},s_wall:{name:"城墙骑行章",icon:"🏯",desc:"完成城墙探索路线获得。"},s_drum:{name:"晨钟暮鼓徽章",icon:"🥁",desc:"打卡钟楼与鼓楼获得。"},s_tang:{name:"唐风宫灯",icon:"🏮",desc:"完成雁塔盛唐路线获得。"},s_scroll:{name:"碑林拓片卷轴",icon:"📜",desc:"完成碑林文脉路线获得。"},s_silk:{name:"丝路骆驼",icon:"🐫",desc:"体验丝绸之路文化获得。",price:35},s_cable:{name:"骊山索道票根",icon:"🚡",desc:"乘坐骊山索道获得。"},s_boat:{name:"曲江夜游船票",icon:"🎫",desc:"乘坐曲江池游船获得。"},s_foodie:{name:"长安金筷子",icon:"🥢",desc:"品尝六种西安美食。"},s_culture:{name:"古都文化达人证",icon:"📕",desc:"解锁八项西安文化。"},s_postcard:{name:"长安十二景明信片",icon:"🖼️",desc:"拍摄十张照片获得。",price:18},s_badge:{name:"长安旅行家纪念章",icon:"🏅",desc:"完成新手旅行任务获得。"},s_metro:{name:"西安地铁纪念卡",icon:"💳",desc:"首次乘坐地铁获得。"}},Qg={paomo:{name:"老字号泡馍馆",greet:"馍要自己慢慢掰，掰得细，煮出来才入味！",items:["paomo","hulutou"]},snacks:{name:"秦味小吃铺",greet:"肉夹馍、凉皮、冰峰，来一套正合适！",items:["roujiamo","liangpi","biangbiang","sourplum"]},nightmarket:{name:"长安夜市",greet:"华灯初上，尝口甑糕和黄桂柿子饼吧。",items:["zenggao","persimmon","mirrorcake"]},souvenir:{name:"长安手信店",greet:"把一份长安记忆带回家吧！",items:["s_silk","s_postcard","s_tiger"]},terracotta:{name:"秦俑文创店",greet:"每一尊秦俑都有自己的表情，挑一尊带走吧。",items:["s_warrior","s_tiger"]}},ts=[{id:"n1",title:"拍摄大雁塔",desc:"前往雁塔区，用相机（C 键）拍下大雁塔。",cond:{type:"photo",id:"cantontower"},reward:{money:100}},{id:"n2",title:"寻找兵马俑",desc:"前往临潼区，找到秦始皇帝陵博物院兵马俑坑。",cond:{type:"discover",id:"chenclan"},reward:{money:120,item:"s_warrior"}},{id:"n3",title:"吃一碗泡馍",desc:"到回民街老字号泡馍馆，体验自己掰馍。",cond:{type:"buy",id:"paomo"},reward:{money:80}},{id:"n4",title:"完成长安初体验",desc:"登上大雁塔，俯瞰长安中轴。",cond:{type:"deck"},reward:{money:300,item:"s_badge"}}],Sp=[{id:"q_oldcity",district:"beilin",title:"古城·晨钟暮鼓",desc:"拍摄钟楼、鼓楼、永宁门与碑林",cond:{type:"photoSet",ids:["huacheng","drumtower","beijingroad","beilinmuseum"],n:4},reward:{money:220,item:"s_wall"}},{id:"q_lianhu",district:"lianhu",title:"莲湖·市井与丝路",desc:"探访回民街、清真大寺与大唐西市",cond:{type:"discoverSet",ids:["muslimquarter","greatmosque","silkroad"],n:3},reward:{money:200,item:"s_silk"}},{id:"q_yanta",district:"yanta",title:"雁塔·盛唐风华",desc:"拍摄大雁塔、大唐不夜城、陕历博和大唐芙蓉园",cond:{type:"photoSet",ids:["cantontower","shamian","shaanximuseum","tangparadise"],n:4},reward:{money:250,item:"s_tang"}},{id:"q_tang",district:"weiyang",title:"未央·千宫之宫",desc:"探访大明宫并解锁唐宫礼制",cond:{type:"discover",id:"damingpalace"},reward:{money:180,item:"s_scroll"}},{id:"q_qin",district:"lintong",title:"临潼·秦风骊山",desc:"拍摄兵马俑、华清宫，并登上骊山",cond:{type:"photoSet",ids:["chenclan","huaqing","baiyun"],n:3},reward:{money:260,item:"s_warrior"}},{id:"q_night",district:"yanta",title:"曲江·长安夜未央",desc:"夜晚拍摄大唐不夜城，并乘坐一次曲江夜游",cond:{type:"multi",parts:[{type:"nightPhoto",id:"shamian"},{type:"cruise"}]},reward:{money:250,item:"s_boat"}},{id:"q_food",title:"长安味道",desc:"品尝六种不同的西安美食",cond:{type:"foodCount",n:6},reward:{money:160,item:"s_foodie"}},{id:"q_culture",title:"古都文化达人",desc:"解锁八项西安文化图鉴",cond:{type:"cultureCount",n:8},reward:{money:180,item:"s_culture"}}],ol=[{id:"d_photo3",title:"拍摄三个景点",cond:{type:"dailyPhotos",n:3},reward:{money:60}},{id:"d_npc5",title:"和五位路人聊天",cond:{type:"dailyTalk",n:5},reward:{money:50}},{id:"d_district",title:"探索两个城区",cond:{type:"dailyDistricts",n:2},reward:{money:60}},{id:"d_bus",title:"乘坐一次观光巴士",cond:{type:"dailyCount",key:"bus",n:1},reward:{money:40}},{id:"d_metro",title:"乘坐一次地铁",cond:{type:"dailyCount",key:"metro",n:1},reward:{money:40}},{id:"d_food2",title:"品尝两种美食",cond:{type:"dailyCount",key:"food",n:2},reward:{money:50}},{id:"d_night",title:"拍一张长安夜景",cond:{type:"dailyCount",key:"nightPhoto",n:1},reward:{money:50}},{id:"d_walk",title:"步行一千米",cond:{type:"dailyCount",key:"walk",n:1e3},reward:{money:40}},{id:"d_culture",title:"体验一项古都文化",cond:{type:"dailyCount",key:"culture",n:1},reward:{money:50}},{id:"d_selfie",title:"拍一张自拍",cond:{type:"dailyCount",key:"selfie",n:1},reward:{money:30}}],t_={office:{name:"上班族",weight:3},student:{name:"学生",weight:2},elder:{name:"老人",weight:2},tourist:{name:"游客",weight:3},kid:{name:"小孩",weight:1},local:{name:"西安街坊",weight:2}},e_=["张","王","李","赵","刘","马","杨","郭","高","韩","白","杜","苏","董","雷"],n_={office:["先生","女士","经理","工"],student:["同学"],elder:["大爷","奶奶","叔","姨"],tourist:["游客"],kid:["小朋友"],local:["师傅","姐","哥"]},Pl={office:["地铁二号线又从钟楼下面穿过去咧。","下班去城墙根儿遛一圈，风一吹就舒服了。","今天小寨人还是多得很。","周末去陕历博，得早点约票。"],student:["大雁塔晚上亮灯可好看了！","历史老师说明城墙一圈有十三公里多。","我最喜欢在书院门逛文创店。","放假想去秦岭看金丝猴。"],elder:["以前城墙根儿可安静咧。","娃，泡馍得自己掰，机器切的没灵魂。","钟楼鼓楼一亮灯，长安味儿就出来了。","秋天去骊山看晚照，美得很。"],tourist:["第一次来西安，先登城墙还是先去大雁塔？","兵马俑每一张脸真的都不一样。","大唐不夜城晚上氛围太好了！","我准备把西安面食都吃一遍。"],kid:["我想坐城墙自行车！","兵马俑会不会晚上偷偷换队形呀？","妈妈说带我去看大熊猫！"],local:["来了西安就甭急，慢慢转。","肉夹馍配凉皮，再来瓶冰峰。","西安人说“嘹咋咧”，就是特别好。","春天风大，出门记得带件外套。"]},Ll={rain:["下雨咧，快到城门洞里避一避。","青砖被雨一打，古城颜色更沉了。"],typhoon:["下雪咧！城墙和大雁塔都白了。","雪天路滑，慢慢走。"],night:["钟楼亮灯咧，夜长安正好看。","走，去不夜城看演出！","夜宵来碗泡馍，暖和。"]},Dl={huacheng:["钟楼就在古城正中心，四条大街都从这里展开。"],drumtower:["鼓楼后面就是回民街，晚上可热闹。"],beijingroad:["永宁门是西安南门，登城墙骑车很过瘾。"],cantontower:["大雁塔和玄奘法师取经的故事有关。"],shamian:["不夜城的演出一场接一场，晚上来最有氛围。"],chenclan:["仔细看，秦俑的发髻、铠甲和表情都不同。"],muslimquarter:["泡馍要自己掰得细细的，师傅才好煮。"],damingpalace:["含元殿当年是大唐举行重要朝会的地方。"],huaqing:["华清宫背靠骊山，温泉从古到今都很有名。"],baiyun:["骊山晚照是关中有名的景致。"]};function Un(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Il(n,t,e=0){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}const on=(n,t,e)=>n<t?t:n>e?e:n,wp=(n,t,e)=>n+(t-n)*e,i_=n=>n*n*(3-2*n);function De(n,t){return t[Math.floor(n()*t.length)%t.length]}function s_(n,t,e,i,s,r){const o=s-e,a=r-i,l=o*o+a*a;let c=l>0?((n-e)*o+(t-i)*a)/l:0;c=c<0?0:c>1?1:c;const u=e+o*c,h=i+a*c;return{d:Math.hypot(n-u,t-h),t:c}}function Ul(n){let t=0;for(let e=1;e<n.length;e++)t+=Math.hypot(n[e].x-n[e-1].x,n[e].z-n[e-1].z);return t}function Zn(n,t){let e=0;for(let s=1;s<n.length;s++){const r=n[s-1],o=n[s],a=Math.hypot(o.x-r.x,o.z-r.z);if(e+a>=t||s===n.length-1){const l=a>0?on((t-e)/a,0,1):0;return{x:r.x+(o.x-r.x)*l,z:r.z+(o.z-r.z)*l,dir:Math.atan2(o.x-r.x,o.z-r.z),seg:s-1}}e+=a}const i=n[n.length-1];return{x:i.x,z:i.z,dir:0,seg:n.length-2}}function Nl(n){const t=Math.floor(n)%24,e=Math.floor((n-Math.floor(n))*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}function r_(){const n=new Date;return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()}const Hu="block-xian-save-v1";function eo(){return{profile:null,money:500,discovered:[],photographed:{},nightPhotos:[],foods:[],culture:[],items:{},novice:0,quests:{},views:[],flags:{},talked:0,districts:[],stats:{photos:0,walk:0,bus:0,metro:0,cruise:0},daily:{date:"",ids:[],progress:{},done:{}},settings:{quality:"high",reflect:!0,shadows:!0,timeSpeed:1,sensitivity:1,showMinimap:!0},lastPos:null}}function o_(){try{const n=JSON.parse(localStorage.getItem(Hu));if(n)return{...eo(),...n,settings:{...eo().settings,...n.settings||{}},stats:{...eo().stats,...n.stats||{}}}}catch{}return eo()}const Q=Rr({save:o_(),ui:{screen:"menu",panel:null,photoMode:!1,photoView:"third",filter:"none",prompt:null,toasts:[],banner:null,hud:{district:"",place:"",time:"09:00",period:"早晨",weather:"sunny",weatherName:"晴天",weatherIcon:"☀️",fps:0,heading:0,ride:null,loading:0},dialog:null,shop:null,flash:!1,lastPhoto:null,fade:!1,fadeText:"",rideInfo:null,pointerLocked:!1,mobile:!1,portrait:!1,fullscreen:!1,ignorePortrait:!1,waypoint:null,loadingText:""}});let Yh=null;function Pr(){clearTimeout(Yh),Yh=setTimeout(()=>{try{localStorage.setItem(Hu,JSON.stringify(Q.save))}catch{}},300)}function a_(){localStorage.removeItem(Hu),Object.assign(Q.save,eo())}function Ce(n,t="info",e=3200){const i=Math.random();Q.ui.toasts.push({id:i,text:n,kind:t}),setTimeout(()=>{const s=Q.ui.toasts.findIndex(r=>r.id===i);s>=0&&Q.ui.toasts.splice(s,1)},e)}function ar(n,t="",e=3500){Q.ui.banner={title:n,sub:t,id:Math.random()};const i=Q.ui.banner.id;setTimeout(()=>{Q.ui.banner&&Q.ui.banner.id===i&&(Q.ui.banner=null)},e)}function Ji(){const n=Q.save.daily,t=r_();if(n.date===t)return;const e=t.split("-").reduce((o,a)=>o*31+Number(a),7),i=Un(e),s=ol.slice(),r=[];for(;r.length<3;){const o=Math.floor(i()*s.length);r.push(s.splice(o,1)[0].id)}Q.save.daily={date:t,ids:r,progress:{photos:[],talk:0,districts:[],counts:{}},done:{}},Pr()}function Fl(n,t){n&&(n.money&&(Q.save.money+=n.money),n.item&&Ki(n.item),Ce(`🎁 任务完成「${t}」 +¥${n.money||0}${n.item?" · "+Pn[n.item].icon+Pn[n.item].name:""}`,"reward",4500))}function Ki(n,t=1){const e=Q.save.items[n]||0;Q.save.items[n]=e+t,e||Ce(`获得纪念品：${Pn[n].icon} ${Pn[n].name}`,"item"),Pr()}function bo(n){const t=Q.save;switch(n.type){case"photo":return!!t.photographed[n.id];case"discover":return t.discovered.includes(n.id);case"buy":return t.foods.includes(n.id);case"deck":return!!t.flags.deck;case"photoSet":return n.ids.filter(e=>t.photographed[e]).length>=n.n;case"discoverSet":return n.ids.filter(e=>t.discovered.includes(e)).length>=n.n;case"nightPhoto":return t.nightPhotos.includes(n.id);case"cruise":return t.stats.cruise>0;case"view":return t.views.includes(n.id);case"foodCount":return t.foods.length>=n.n;case"cultureCount":return t.culture.length>=n.n;case"multi":return n.parts.every(bo)}return!1}function l_(n){const t=Q.save;switch(n.type){case"photoSet":return[n.ids.filter(e=>t.photographed[e]).length,n.n];case"discoverSet":return[n.ids.filter(e=>t.discovered.includes(e)).length,n.n];case"foodCount":return[t.foods.length,n.n];case"cultureCount":return[t.culture.length,n.n];case"multi":return[n.parts.filter(bo).length,n.parts.length]}return[bo(n)?1:0,1]}function Ep(n){const t=Q.save.daily.progress;switch(n.type){case"dailyPhotos":return t.photos.length;case"dailyTalk":return t.talk;case"dailyDistricts":return t.districts.length;case"dailyCount":return t.counts[n.key]||0}return 0}function Tp(n){return[Math.min(n.cond.n,Math.floor(Ep(n.cond))),n.cond.n]}function di(){const n=Q.save;for(;n.novice<ts.length&&bo(ts[n.novice].cond);){const e=ts[n.novice];n.novice++,Fl(e.reward,e.title),n.novice<ts.length?Ce(`📌 新任务：${ts[n.novice].title}`,"task",4500):ar("🎉 长安旅行完成！","你已成为“长安旅行家”，继续探索更多景点吧")}for(const e of Sp)n.quests[e.id]||bo(e.cond)&&(n.quests[e.id]=!0,Fl(e.reward,e.title));Ji();const t=n.daily;for(const e of t.ids){if(t.done[e])continue;const i=ol.find(s=>s.id===e);i&&Ep(i.cond)>=i.cond.n&&(t.done[e]=!0,Fl(i.reward,"每日："+i.title))}Pr()}const fn={discover(n,t){const e=Q.save;return e.discovered.includes(n)?!1:(e.discovered.push(n),di(),!0)},photo(n,{night:t,selfie:e}){const i=Q.save;Ji(),i.stats.photos++;const s=[];for(const o of n)i.photographed[o]||s.push(o),i.photographed[o]=(i.photographed[o]||0)+1,t&&!i.nightPhotos.includes(o)&&i.nightPhotos.push(o),i.daily.progress.photos.includes(o)||i.daily.progress.photos.push(o);const r=i.daily.progress.counts;return t&&(r.nightPhoto=(r.nightPhoto||0)+1),e&&(r.selfie=(r.selfie||0)+1),i.stats.photos===10&&Ki("s_postcard"),di(),s},buy(n,t){const e=Q.save;return e.money<t?!1:(e.money-=t,Ji(),Ei[n]?(e.foods.includes(n)||(e.foods.push(n),Ce(`🍽️ 图鉴解锁：${Ei[n].icon} ${Ei[n].name}`,"dex")),e.daily.progress.counts.food=(e.daily.progress.counts.food||0)+1,n==="dimsum"&&fn.culture("teaculture")):Pn[n]&&Ki(n),di(),!0)},culture(n){const t=Q.save;if(Ji(),!t.culture.includes(n)){t.culture.push(n),Ce(`🏮 图鉴解锁：${Mo[n].icon} ${Mo[n].name}`,"dex"),t.daily.progress.counts.culture=(t.daily.progress.counts.culture||0)+1;const e={lion:"s_lion",wuyang:"s_ram",kapok:"s_kapok",opera:"s_opera"};e[n]&&Ki(e[n])}di()},talk(){Ji(),Q.save.talked++,Q.save.daily.progress.talk++,di()},district(n){const t=Q.save;Ji(),t.districts.includes(n)||t.districts.push(n),t.daily.progress.districts.includes(n)||t.daily.progress.districts.push(n),di()},count(n,t=1){const e=Q.save;Ji(),e.stats[n]!=null&&(e.stats[n]+=t),e.daily.progress.counts[n]=(e.daily.progress.counts[n]||0)+t,n==="metro"&&!e.items.s_card&&Ki("s_card"),n==="cruise"&&!e.items.s_cruise&&Ki("s_cruise"),n==="cable"&&!e.items.s_cable&&Ki("s_cable"),di()},deck(){const n=Q.save;n.flags.deck||(n.flags.deck=!0,Ki("s_tower")),di()},view(n){const t=Q.save;n&&!t.views.includes(n)&&t.views.push(n),di()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="170",c_=0,jh=1,u_=2,Ap=1,Cp=2,yi=3,cs=0,ln=1,Ti=2,rs=0,gr=1,Kh=2,Zh=3,Jh=4,h_=5,Ts=100,f_=101,d_=102,p_=103,m_=104,g_=200,__=201,v_=202,x_=203,Ic=204,Uc=205,y_=206,M_=207,b_=208,S_=209,w_=210,E_=211,T_=212,A_=213,C_=214,Nc=0,Fc=1,Oc=2,br=3,kc=4,zc=5,Bc=6,Hc=7,al=0,R_=1,P_=2,os=0,L_=1,D_=2,I_=3,Rp=4,U_=5,N_=6,F_=7,Pp=300,Sr=301,wr=302,Vc=303,Gc=304,ll=306,Va=1e3,Ps=1001,Wc=1002,cn=1003,O_=1004,no=1005,ri=1006,Ol=1007,Ls=1008,Ni=1009,Lp=1010,Dp=1011,So=1012,Gu=1013,Us=1014,Ci=1015,Os=1016,Wu=1017,Xu=1018,Er=1020,Ip=35902,Up=1021,Np=1022,Wn=1023,Fp=1024,Op=1025,_r=1026,Tr=1027,kp=1028,$u=1029,zp=1030,qu=1031,Yu=1033,Sa=33776,wa=33777,Ea=33778,Ta=33779,Xc=35840,$c=35841,qc=35842,Yc=35843,jc=36196,Kc=37492,Zc=37496,Jc=37808,Qc=37809,tu=37810,eu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,hu=37821,Aa=36492,fu=36494,du=36495,Bp=36283,pu=36284,mu=36285,gu=36286,k_=3200,z_=3201,ju=0,B_=1,Ai="",Xe="srgb",Lr="srgb-linear",cl="linear",ge="srgb",Bs=7680,Qh=519,H_=512,V_=513,G_=514,Hp=515,W_=516,X_=517,$_=518,q_=519,_u=35044,tf="300 es",Ri=2e3,Ga=2001;class Dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,vu=180/Math.PI;function as(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function mn(n,t,e){return Math.max(t,Math.min(e,n))}function Y_(n,t){return(n%t+t)%t}function zl(n,t,e){return(1-e)*n+e*t}function si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,i,s,r,o,a,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],w=s[1],y=s[4],v=s[7],L=s[2],M=s[5],E=s[8];return r[0]=o*_+a*w+l*L,r[3]=o*m+a*y+l*M,r[6]=o*d+a*v+l*E,r[1]=c*_+u*w+h*L,r[4]=c*m+u*y+h*M,r[7]=c*d+u*v+h*E,r[2]=f*_+p*w+g*L,r[5]=f*m+p*y+g*M,r[8]=f*d+p*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bl=new ne;function Vp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function j_(){const n=Wa("canvas");return n.style.display="block",n}const ef={};function io(n){n in ef||(ef[n]=!0,console.warn(n))}function K_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Z_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function J_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=vr(n.r),n.g=vr(n.g),n.b=vr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ai?cl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const nf=[.64,.33,.3,.6,.15,.06],sf=[.2126,.7152,.0722],rf=[.3127,.329],of=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Lr]:{primaries:nf,whitePoint:rf,transfer:cl,toXYZ:of,fromXYZ:af,luminanceCoefficients:sf,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:nf,whitePoint:rf,transfer:ge,toXYZ:of,fromXYZ:af,luminanceCoefficients:sf,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let Hs;class Q_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=Wa("canvas")),Hs.width=t.width,Hs.height=t.height;const i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tv=0;class Gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Q_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ev=0;class un extends Dr{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,i=Ps,s=Ps,r=ri,o=Ls,a=Wn,l=Ni,c=un.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=as(),this.name="",this.source=new Gp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Ps:t.x=t.x<0?0:1;break;case Wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Ps:t.y=t.y<0?0:1;break;case Wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Pp;un.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,L=(d+1)/2,M=(u+f)/4,E=(h+_)/4,I=(g+m)/4;return y>v&&y>L?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=M/i,r=E/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=E/r,s=I/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nv extends Dr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new un(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends nv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wp extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iv extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,w=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const L=Math.sqrt(y),M=Math.atan2(L,d*w);m=Math.sin(m*M)/L,a=Math.sin(a*M)/L}const v=a*w;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(mn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(mn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vl=new z,lf=new Ns;class Po{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(t.matrixWorld),this.union(Ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Vo.subVectors(this.max,Br),Vs.subVectors(t.a,Br),Gs.subVectors(t.b,Br),Ws.subVectors(t.c,Br),Vi.subVectors(Gs,Vs),Gi.subVectors(Ws,Gs),gs.subVectors(Vs,Ws);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-gs.z,gs.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,gs.z,0,-gs.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-gs.y,gs.x,0];return!Gl(e,Vs,Gs,Ws,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,Vs,Gs,Ws,Vo))?!1:(Go.crossVectors(Vi,Gi),e=[Go.x,Go.y,Go.z],Gl(e,Vs,Gs,Ws,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,Ho=new Po,Vs=new z,Gs=new z,Ws=new z,Vi=new z,Gi=new z,gs=new z,Br=new z,Vo=new z,Go=new z,_s=new z;function Gl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sv=new Po,Hr=new z,Wl=new z;class Lo{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hr.subVectors(t,this.center);const e=Hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hr.copy(t.center).add(Wl)),this.expandByPoint(Hr.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new z,Xl=new z,Wo=new z,Wi=new z,$l=new z,Xo=new z,ql=new z;class Ku{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xl.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(Xl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wo),a=Wi.dot(this.direction),l=-Wi.dot(Wo),c=Wi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xl).addScaledVector(Wo,f),p}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,s,r){$l.subVectors(e,t),Xo.subVectors(i,t),ql.crossVectors($l,Xo);let o=this.direction.dot(ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const l=a*this.direction.dot(Xo.crossVectors(Wi,Xo));if(l<0)return null;const c=a*this.direction.dot($l.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(ql);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Xs.setFromMatrixColumn(t,0).length(),r=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rv,t,ov)}lookAt(t,e,i){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Xi.crossVectors(i,Mn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Xi.crossVectors(i,Mn)),Xi.normalize(),$o.crossVectors(Mn,Xi),s[0]=Xi.x,s[4]=$o.x,s[8]=Mn.x,s[1]=Xi.y,s[5]=$o.y,s[9]=Mn.y,s[2]=Xi.z,s[6]=$o.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],w=i[3],y=i[7],v=i[11],L=i[15],M=s[0],E=s[4],I=s[8],C=s[12],S=s[1],D=s[5],Y=s[9],k=s[13],W=s[2],rt=s[6],tt=s[10],lt=s[14],$=s[3],yt=s[7],St=s[11],Lt=s[15];return r[0]=o*M+a*S+l*W+c*$,r[4]=o*E+a*D+l*rt+c*yt,r[8]=o*I+a*Y+l*tt+c*St,r[12]=o*C+a*k+l*lt+c*Lt,r[1]=u*M+h*S+f*W+p*$,r[5]=u*E+h*D+f*rt+p*yt,r[9]=u*I+h*Y+f*tt+p*St,r[13]=u*C+h*k+f*lt+p*Lt,r[2]=g*M+_*S+m*W+d*$,r[6]=g*E+_*D+m*rt+d*yt,r[10]=g*I+_*Y+m*tt+d*St,r[14]=g*C+_*k+m*lt+d*Lt,r[3]=w*M+y*S+v*W+L*$,r[7]=w*E+y*D+v*rt+L*yt,r[11]=w*I+y*Y+v*tt+L*St,r[15]=w*C+y*k+v*lt+L*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],w=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,v=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,L=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,M=e*w+i*y+s*v+r*L;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=w*E,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*E,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*E,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*E,t[4]=y*E,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*E,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*E,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*E,t[8]=v*E,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*d-e*h*d)*E,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*E,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*E,t[12]=L*E,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*E,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,w=l*c,y=l*u,v=l*h,L=i.x,M=i.y,E=i.z;return s[0]=(1-(_+d))*L,s[1]=(p+v)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(f+d))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(g+y)*E,s[9]=(m-w)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);const c=1/r,u=1/o,h=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,e.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ri){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===Ri)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ga)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ri){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,p=(i+s)*u;let g,_;if(a===Ri)g=(o+r)*h,_=-2*h;else if(a===Ga)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xs=new z,Vn=new xe,rv=new z(0,0,0),ov=new z(1,1,1),Xi=new z,$o=new z,Mn=new z,cf=new xe,uf=new Ns;class On{constructor(t=0,e=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uf.setFromEuler(this),this.setFromQuaternion(uf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let av=0;const hf=new z,$s=new Ns,gi=new xe,qo=new z,Vr=new z,lv=new z,cv=new Ns,ff=new z(1,0,0),df=new z(0,1,0),pf=new z(0,0,1),mf={type:"added"},uv={type:"removed"},qs={type:"childadded",child:null},Yl={type:"childremoved",child:null};class Fe extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new z,e=new On,i=new Ns,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ne}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(ff,t)}rotateY(t){return this.rotateOnAxis(df,t)}rotateZ(t){return this.rotateOnAxis(pf,t)}translateOnAxis(t,e){return hf.copy(t).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ff,t)}translateY(t){return this.translateOnAxis(df,t)}translateZ(t){return this.translateOnAxis(pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qo.copy(t):qo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Vr,qo,this.up):gi.lookAt(qo,Vr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(gi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mf),qs.child=t,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uv),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mf),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new z(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new z,_i=new z,jl=new z,vi=new z,Ys=new z,js=new z,gf=new z,Kl=new z,Zl=new z,Jl=new z,Ql=new Ae,tc=new Ae,ec=new Ae;class Ln{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Gn.subVectors(t,e),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Gn.subVectors(s,e),_i.subVectors(i,e),jl.subVectors(t,e);const o=Gn.dot(Gn),a=Gn.dot(_i),l=Gn.dot(jl),c=_i.dot(_i),u=_i.dot(jl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,i),ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,i,s){return Gn.subVectors(i,e),_i.subVectors(t,e),Gn.cross(_i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ys.subVectors(s,i),js.subVectors(r,i),Kl.subVectors(t,i);const l=Ys.dot(Kl),c=js.dot(Kl);if(l<=0&&c<=0)return e.copy(i);Zl.subVectors(t,s);const u=Ys.dot(Zl),h=js.dot(Zl);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ys,o);Jl.subVectors(t,r);const p=Ys.dot(Jl),g=js.dot(Jl);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(js,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return gf.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(gf,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Ys,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function nc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Y_(t,1),e=mn(e,0,1),i=mn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=$p[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ae.fromWorkingColorSpace(je.copy(this),t),Math.round(mn(je.r*255,0,255))*65536+Math.round(mn(je.g*255,0,255))*256+Math.round(mn(je.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(je.copy(this),e);const i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Xe){ae.fromWorkingColorSpace(je.copy(this),t);const e=je.r,i=je.g,s=je.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Yo);const i=zl($i.h,Yo.h,e),s=zl($i.s,Yo.s,e),r=zl($i.l,Yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Ot;Ot.NAMES=$p;let hv=0;class zi extends Dr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=as(),this.name="",this.blending=gr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Uc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ic&&(i.blendSrc=this.blendSrc),this.blendDst!==Uc&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Li extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new z,jo=new ie;class vn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_u,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_u&&(t.usage=this.usage),t}}class ul extends vn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hl extends vn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ie extends vn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fv=0;const Cn=new xe,ic=new Fe,Ks=new z,bn=new Po,Gr=new Po,Be=new z;class Ge extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vp(t)?hl:ul)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(bn.min,Gr.min),bn.expandByPoint(Be),Be.addVectors(bn.max,Gr.max),bn.expandByPoint(Be)):(bn.expandByPoint(Gr.min),bn.expandByPoint(Gr.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),Be.add(Ks)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const c=new z,u=new z,h=new z,f=new ie,p=new ie,g=new ie,_=new z,m=new z;function d(I,C,S){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[C].add(_),a[S].add(_),l[I].add(m),l[C].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,C=w.length;I<C;++I){const S=w[I],D=S.start,Y=S.count;for(let k=D,W=D+Y;k<W;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new z,v=new z,L=new z,M=new z;function E(I){L.fromBufferAttribute(s,I),M.copy(L);const C=a[I];y.copy(C),y.sub(L.multiplyScalar(L.dot(C))).normalize(),v.crossVectors(M,C);const D=v.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,C=w.length;I<C;++I){const S=w[I],D=S.start,Y=S.count;for(let k=D,W=D+Y;k<W;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _f=new xe,vs=new Ku,Ko=new Lo,vf=new z,Zo=new z,Jo=new z,Qo=new z,sc=new z,ta=new z,xf=new z,ea=new z;class re extends Fe{constructor(t=new Ge,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(sc.fromBufferAttribute(h,t),o?ta.addScaledVector(sc,u):ta.addScaledVector(sc.sub(e),u))}e.add(ta)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(Ko.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ko,vf)===null||vs.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(_f.copy(r).invert(),vs.copy(t.ray).applyMatrix4(_f),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,L=y;v<L;v+=3){const M=a.getX(v),E=a.getX(v+1),I=a.getX(v+2);s=na(this,d,t,i,c,u,h,M,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=na(this,o,t,i,c,u,h,w,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,L=y;v<L;v+=3){const M=v,E=v+1,I=v+2;s=na(this,d,t,i,c,u,h,M,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=m,y=m+1,v=m+2;s=na(this,o,t,i,c,u,h,w,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function dv(n,t,e,i,s,r,o,a){let l;if(t.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===cs,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:n}}function na(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Jo),n.getVertexPosition(c,Qo);const u=dv(n,t,e,i,Zo,Jo,Qo,xf);if(u){const h=new z;Ln.getBarycoord(xf,Zo,Jo,Qo,h),s&&(u.uv=Ln.getInterpolatedAttribute(s,a,l,c,h,new ie)),r&&(u.uv1=Ln.getInterpolatedAttribute(r,a,l,c,h,new ie)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Ln.getNormal(Zo,Jo,Qo,f.normal),u.face=f,u.barycoord=h}return u}class Re extends Ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function g(_,m,d,w,y,v,L,M,E,I,C){const S=v/E,D=L/I,Y=v/2,k=L/2,W=M/2,rt=E+1,tt=I+1;let lt=0,$=0;const yt=new z;for(let St=0;St<tt;St++){const Lt=St*D-k;for(let mt=0;mt<rt;mt++){const st=mt*S-Y;yt[_]=st*w,yt[m]=Lt*y,yt[d]=W,c.push(yt.x,yt.y,yt.z),yt[_]=0,yt[m]=0,yt[d]=M>0?1:-1,u.push(yt.x,yt.y,yt.z),h.push(mt/E),h.push(1-St/I),lt+=1}}for(let St=0;St<I;St++)for(let Lt=0;Lt<E;Lt++){const mt=f+Lt+rt*St,st=f+Lt+rt*(St+1),U=f+(Lt+1)+rt*(St+1),ct=f+(Lt+1)+rt*St;l.push(mt,st,ct),l.push(st,U,ct),$+=6}a.addGroup(p,$,C),p+=$,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=Ar(n[e]);for(const s in i)t[s]=i[s]}return t}function pv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Yp={clone:Ar,merge:nn};var mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=pv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jp extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new z,yf=new ie,Mf=new ie;class gn extends jp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,yf,Mf),e.subVectors(Mf,yf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zs=-90,Js=1;class _v extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Zs,Js,t,e);s.layers=this.layers,this.add(s);const r=new gn(Zs,Js,t,e);r.layers=this.layers,this.add(r);const o=new gn(Zs,Js,t,e);o.layers=this.layers,this.add(o);const a=new gn(Zs,Js,t,e);a.layers=this.layers,this.add(a);const l=new gn(Zs,Js,t,e);l.layers=this.layers,this.add(l);const c=new gn(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kp extends un{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vv extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Re(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:rs});r.uniforms.tEquirect.value=e;const o=new re(s,r),a=e.minFilter;return e.minFilter===Ls&&(e.minFilter=ri),new _v(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const rc=new z,xv=new z,yv=new ne;class Qi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=rc.subVectors(i,e).cross(xv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yv.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Lo,ia=new z;class Zu{constructor(t=new Qi,e=new Qi,i=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],w=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-p,v-d).normalize(),i[1].setComponents(l+r,f+c,m+p,v+d).normalize(),i[2].setComponents(l+o,f+u,m+g,v+w).normalize(),i[3].setComponents(l-o,f-u,m-g,v-w).normalize(),i[4].setComponents(l-a,f-h,m-_,v-y).normalize(),e===Ri)i[5].setComponents(l+a,f+h,m+_,v+y).normalize();else if(e===Ga)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Mv(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class us extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const w=d*f-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-w,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const y=w+c*d,v=w+c*(d+1),L=w+1+c*(d+1),M=w+1+c*d;p.push(y,v,M),p.push(v,L,M)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$v=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,B1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:bv,alphahash_pars_fragment:Sv,alphamap_fragment:wv,alphamap_pars_fragment:Ev,alphatest_fragment:Tv,alphatest_pars_fragment:Av,aomap_fragment:Cv,aomap_pars_fragment:Rv,batching_pars_vertex:Pv,batching_vertex:Lv,begin_vertex:Dv,beginnormal_vertex:Iv,bsdfs:Uv,iridescence_fragment:Nv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Bv,color_fragment:Hv,color_pars_fragment:Vv,color_pars_vertex:Gv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:$v,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:jv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Jv,colorspace_pars_fragment:Qv,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:rx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:cx,lightmap_pars_fragment:ux,lights_lambert_fragment:hx,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:Mx,lights_fragment_maps:bx,lights_fragment_end:Sx,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Cx,map_pars_fragment:Rx,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Bx,normal_pars_fragment:Hx,normal_pars_vertex:Vx,normal_vertex:Gx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:jx,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Jx,dithering_fragment:Qx,dithering_pars_fragment:t1,roughnessmap_fragment:e1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:i1,shadowmap_pars_vertex:s1,shadowmap_vertex:r1,shadowmask_pars_fragment:o1,skinbase_vertex:a1,skinning_pars_vertex:l1,skinning_vertex:c1,skinnormal_vertex:u1,specularmap_fragment:h1,specularmap_pars_fragment:f1,tonemapping_fragment:d1,tonemapping_pars_fragment:p1,transmission_fragment:m1,transmission_pars_fragment:g1,uv_pars_fragment:_1,uv_pars_vertex:v1,uv_vertex:x1,worldpos_vertex:y1,background_vert:M1,background_frag:b1,backgroundCube_vert:S1,backgroundCube_frag:w1,cube_vert:E1,cube_frag:T1,depth_vert:A1,depth_frag:C1,distanceRGBA_vert:R1,distanceRGBA_frag:P1,equirect_vert:L1,equirect_frag:D1,linedashed_vert:I1,linedashed_frag:U1,meshbasic_vert:N1,meshbasic_frag:F1,meshlambert_vert:O1,meshlambert_frag:k1,meshmatcap_vert:z1,meshmatcap_frag:B1,meshnormal_vert:H1,meshnormal_frag:V1,meshphong_vert:G1,meshphong_frag:W1,meshphysical_vert:X1,meshphysical_frag:$1,meshtoon_vert:q1,meshtoon_frag:Y1,points_vert:j1,points_frag:K1,shadow_vert:Z1,shadow_frag:J1,sprite_vert:Q1,sprite_frag:ty},Pt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ni={basic:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:nn([Pt.points,Pt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:nn([Pt.common,Pt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:nn([Pt.sprite,Pt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:nn([Pt.lights,Pt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ni.physical={uniforms:nn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const sa={r:0,b:0,g:0},ys=new On,ey=new xe;function ny(n,t,e,i,s,r,o){const a=new Ot(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function _(w){let y=!1;const v=g(w);v===null?d(a,l):v&&v.isColor&&(d(v,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===ll)?(u===void 0&&(u=new re(new Re(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Ar(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(y.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(ys)),u.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new re(new us(2,2),new kn({name:"BackgroundMaterial",uniforms:Ar(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(sa,qp(n)),i.buffers.color.setClear(sa.r,sa.g,sa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:_,addToRenderList:m}}function iy(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,D,Y,k,W){let rt=!1;const tt=h(k,Y,D);r!==tt&&(r=tt,c(r.object)),rt=p(S,k,Y,W),rt&&g(S,k,Y,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,v(S,D,Y,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,D,Y){const k=Y.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let rt=W[D.id];rt===void 0&&(rt={},W[D.id]=rt);let tt=rt[k];return tt===void 0&&(tt=f(l()),rt[k]=tt),tt}function f(S){const D=[],Y=[],k=[];for(let W=0;W<e;W++)D[W]=0,Y[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,D,Y,k){const W=r.attributes,rt=D.attributes;let tt=0;const lt=Y.getAttributes();for(const $ in lt)if(lt[$].location>=0){const St=W[$];let Lt=rt[$];if(Lt===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Lt=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Lt=S.instanceColor)),St===void 0||St.attribute!==Lt||Lt&&St.data!==Lt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==k}function g(S,D,Y,k){const W={},rt=D.attributes;let tt=0;const lt=Y.getAttributes();for(const $ in lt)if(lt[$].location>=0){let St=rt[$];St===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(St=S.instanceColor));const Lt={};Lt.attribute=St,St&&St.data&&(Lt.data=St.data),W[$]=Lt,tt++}r.attributes=W,r.attributesNum=tt,r.index=k}function _(){const S=r.newAttributes;for(let D=0,Y=S.length;D<Y;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const Y=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;Y[S]=1,k[S]===0&&(n.enableVertexAttribArray(S),k[S]=1),W[S]!==D&&(n.vertexAttribDivisor(S,D),W[S]=D)}function w(){const S=r.newAttributes,D=r.enabledAttributes;for(let Y=0,k=D.length;Y<k;Y++)D[Y]!==S[Y]&&(n.disableVertexAttribArray(Y),D[Y]=0)}function y(S,D,Y,k,W,rt,tt){tt===!0?n.vertexAttribIPointer(S,D,Y,W,rt):n.vertexAttribPointer(S,D,Y,k,W,rt)}function v(S,D,Y,k){_();const W=k.attributes,rt=Y.getAttributes(),tt=D.defaultAttributeValues;for(const lt in rt){const $=rt[lt];if($.location>=0){let yt=W[lt];if(yt===void 0&&(lt==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),lt==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),yt!==void 0){const St=yt.normalized,Lt=yt.itemSize,mt=t.get(yt);if(mt===void 0)continue;const st=mt.buffer,U=mt.type,ct=mt.bytesPerElement,Tt=U===n.INT||U===n.UNSIGNED_INT||yt.gpuType===Gu;if(yt.isInterleavedBufferAttribute){const Mt=yt.data,ut=Mt.stride,K=yt.offset;if(Mt.isInstancedInterleavedBuffer){for(let O=0;O<$.locationSize;O++)d($.location+O,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let O=0;O<$.locationSize;O++)m($.location+O);n.bindBuffer(n.ARRAY_BUFFER,st);for(let O=0;O<$.locationSize;O++)y($.location+O,Lt/$.locationSize,U,St,ut*ct,(K+Lt/$.locationSize*O)*ct,Tt)}else{if(yt.isInstancedBufferAttribute){for(let Mt=0;Mt<$.locationSize;Mt++)d($.location+Mt,yt.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Mt=0;Mt<$.locationSize;Mt++)m($.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Mt=0;Mt<$.locationSize;Mt++)y($.location+Mt,Lt/$.locationSize,U,St,Lt*ct,Lt/$.locationSize*Mt*ct,Tt)}}else if(tt!==void 0){const St=tt[lt];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv($.location,St);break;case 3:n.vertexAttrib3fv($.location,St);break;case 4:n.vertexAttrib4fv($.location,St);break;default:n.vertexAttrib1fv($.location,St)}}}}w()}function L(){I();for(const S in i){const D=i[S];for(const Y in D){const k=D[Y];for(const W in k)u(k[W].object),delete k[W];delete D[Y]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const Y in D){const k=D[Y];for(const W in k)u(k[W].object),delete k[W];delete D[Y]}delete i[S.id]}function E(S){for(const D in i){const Y=i[D];if(Y[S.id]===void 0)continue;const k=Y[S.id];for(const W in k)u(k[W].object),delete k[W];delete Y[S.id]}}function I(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function sy(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ry(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Wn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const I=E===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ni&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ci&&!I)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:M}}function oy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Qi,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,y=w*4;let v=d.clippingState||null;l.value=v,v=u(g,f,y,p);for(let L=0;L!==y;++L)v[L]=e[L];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ay(n){let t=new WeakMap;function e(o,a){return a===Vc?o.mapping=Sr:a===Gc&&(o.mapping=wr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===Gc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ju extends jp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,bf=[.125,.215,.35,.446,.526,.582],As=20,oc=new Ju,Sf=new Ot;let ac=null,lc=0,cc=0,uc=!1;const ws=(1+Math.sqrt(5))/2,Qs=1/ws,wf=[new z(-ws,Qs,0),new z(ws,Qs,0),new z(-Qs,0,ws),new z(Qs,0,ws),new z(0,ws,-Qs),new z(0,ws,Qs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Ef{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,lc,cc),this._renderer.xr.enabled=uc,t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Os,format:Wn,colorSpace:Lr,depthBuffer:!1},s=Tf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(r)),this._blurMaterial=cy(r,t,e)}return s}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,oc)}_sceneToCubeUV(t,e,i,s){const a=new gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sf),u.toneMapping=os,u.autoClear=!1;const p=new Li({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new re(new Re,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Sf),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;ra(s,w*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Sr||t.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ra(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,oc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wf[(s-r-1)%wf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new re(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*As-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):As;m>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const d=[];let w=0;for(let E=0;E<As;++E){const I=E/_,C=Math.exp(-I*I/2);d.push(C),E===0?w+=C:E<m&&(w+=2*C)}for(let E=0;E<d.length;E++)d[E]=d[E]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[s],L=3*v*(s>y-cr?s-y+cr:0),M=4*(this._cubeSize-v);ra(e,L,M,3*v,2*v),l.setRenderTarget(e),l.render(h,oc)}}function ly(n){const t=[],e=[],i=[];let s=n;const r=n-cr+1+bf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-cr?l=bf[o-n+cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,I=M>2?0:-1,C=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];w.set(C,_*g*M),y.set(f,m*g*M);const S=[M,M,M,M,M,M];v.set(S,d*g*M)}const L=new Ge;L.setAttribute("position",new vn(w,_)),L.setAttribute("uv",new vn(y,m)),L.setAttribute("faceIndex",new vn(v,d)),t.push(L),s>cr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Tf(n,t,e){const i=new Fi(n,t,e);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function cy(n,t,e){const i=new Float32Array(As),s=new z(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Af(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Cf(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vc||l===Gc,u=l===Sr||l===wr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ef(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Ef(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function hy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function fy(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let y=0,v=w.length;y<v;y+=3){const L=w[y+0],M=w[y+1],E=w[y+2];f.push(L,M,M,E,E,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const L=y+0,M=y+1,E=y+2;f.push(L,M,M,E,E,L)}}else return;const m=new(Vp(f)?hl:ul)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dy(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=p[w]*_[w];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function py(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function my(n,t,e){const i=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,M=1;L>t.maxTextureSize&&(M=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*M*4*h),I=new Wp(E,L,M,h);I.type=Ci,I.needsUpdate=!0;const C=v*4;for(let D=0;D<h;D++){const Y=d[D],k=w[D],W=y[D],rt=L*M*4*D;for(let tt=0;tt<Y.count;tt++){const lt=tt*C;g===!0&&(s.fromBufferAttribute(Y,tt),E[rt+lt+0]=s.x,E[rt+lt+1]=s.y,E[rt+lt+2]=s.z,E[rt+lt+3]=0),_===!0&&(s.fromBufferAttribute(k,tt),E[rt+lt+4]=s.x,E[rt+lt+5]=s.y,E[rt+lt+6]=s.z,E[rt+lt+7]=0),m===!0&&(s.fromBufferAttribute(W,tt),E[rt+lt+8]=s.x,E[rt+lt+9]=s.y,E[rt+lt+10]=s.z,E[rt+lt+11]=W.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new ie(L,M)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function gy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Jp extends un{constructor(t,e,i,s,r,o,a,l,c,u=_r){if(u!==_r&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_r&&(i=Us),i===void 0&&u===Tr&&(i=Er),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qp=new un,Rf=new Jp(1,1),tm=new Wp,em=new iv,nm=new Kp,Pf=[],Lf=[],Df=new Float32Array(16),If=new Float32Array(9),Uf=new Float32Array(4);function Ir(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fl(n,t){let e=Lf[t];e===void 0&&(e=new Int32Array(t),Lf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _y(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function My(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Uf.set(i),n.uniformMatrix2fv(this.addr,!1,Uf),ze(e,i)}}function by(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),ze(e,i)}}function Sy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,i))return;Df.set(i),n.uniformMatrix4fv(this.addr,!1,Df),ze(e,i)}}function wy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function Cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function Ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function Dy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rf.compareFunction=Hp,r=Rf):r=Qp,e.setTexture2D(t||r,s)}function Iy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||em,s)}function Uy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nm,s)}function Ny(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tm,s)}function Fy(n){switch(n){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return by;case 35676:return Sy;case 5124:case 35670:return wy;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Dy;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(n,t){n.uniform1fv(this.addr,t)}function ky(n,t){const e=Ir(t,this.size,2);n.uniform2fv(this.addr,e)}function zy(n,t){const e=Ir(t,this.size,3);n.uniform3fv(this.addr,e)}function By(n,t){const e=Ir(t,this.size,4);n.uniform4fv(this.addr,e)}function Hy(n,t){const e=Ir(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Vy(n,t){const e=Ir(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Gy(n,t){const e=Ir(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Wy(n,t){n.uniform1iv(this.addr,t)}function Xy(n,t){n.uniform2iv(this.addr,t)}function $y(n,t){n.uniform3iv(this.addr,t)}function qy(n,t){n.uniform4iv(this.addr,t)}function Yy(n,t){n.uniform1uiv(this.addr,t)}function jy(n,t){n.uniform2uiv(this.addr,t)}function Ky(n,t){n.uniform3uiv(this.addr,t)}function Zy(n,t){n.uniform4uiv(this.addr,t)}function Jy(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qp,r[o])}function Qy(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||em,r[o])}function tM(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nm,r[o])}function eM(n,t,e){const i=this.cache,s=t.length,r=fl(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tm,r[o])}function nM(n){switch(n){case 5126:return Oy;case 35664:return ky;case 35665:return zy;case 35666:return By;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return $y;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return jy;case 36295:return Ky;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}}class sM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class rM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function Nf(n,t){n.seq.push(t),n.map[t.id]=t}function oM(n,t,e){const i=n.name,s=i.length;for(hc.lastIndex=0;;){const r=hc.exec(i),o=hc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nf(e,c===void 0?new iM(a,n,t):new sM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new rM(a),Nf(e,h)),e=h}}}class Ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);oM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ff(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const aM=37297;let lM=0;function cM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Of=new ne;function uM(n){ae._getMatrix(Of,ae.workingColorSpace,n);const t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case cl:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+cM(n.getShaderSource(t),o)}else return s}function hM(n,t){const e=uM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fM(n,t){let e;switch(t){case L_:e="Linear";break;case D_:e="Reinhard";break;case I_:e="Cineon";break;case Rp:e="ACESFilmic";break;case N_:e="AgX";break;case F_:e="Neutral";break;case U_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oa=new z;function dM(){ae.getLuminanceCoefficients(oa);const n=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function mM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function so(n){return n!==""}function zf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(n){return n.replace(_M,xM)}const vM=new Map;function xM(n,t){let e=se[t];if(e===void 0){const i=vM.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xu(e)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(n){return n.replace(yM,MM)}function MM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ap?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function SM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case wr:t="ENVMAP_TYPE_CUBE";break;case ll:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function EM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case al:t="ENVMAP_BLENDING_MULTIPLY";break;case R_:t="ENVMAP_BLENDING_MIX";break;case P_:t="ENVMAP_BLENDING_ADD";break}return t}function TM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function AM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bM(e),c=SM(e),u=wM(e),h=EM(e),f=TM(e),p=pM(e),g=mM(r),_=s.createProgram();let m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(so).join(`
`),d.length>0&&(d+=`
`)):(m=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),d=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?se.tonemapping_pars_fragment:"",e.toneMapping!==os?fM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,hM("linearToOutputTexel",e.outputColorSpace),dM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(so).join(`
`)),o=xu(o),o=zf(o,e),o=Bf(o,e),a=xu(a),a=zf(a,e),a=Bf(a,e),o=Hf(o),a=Hf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=w+m+o,v=w+d+a,L=Ff(s,s.VERTEX_SHADER,y),M=Ff(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(M).trim();let rt=!0,tt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,M);else{const lt=kf(s,L,"vertex"),$=kf(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+lt+`
`+$)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(k===""||W==="")&&(tt=!1);tt&&(D.diagnostics={runnable:rt,programLog:Y,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(L),s.deleteShader(M),I=new Ca(s,_),C=gM(s,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,aM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=M,this}let CM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new PM(t),e.set(t,i)),i}}class PM{constructor(t){this.id=CM++,this.code=t,this.usedTimes=0}}function LM(n,t,e,i,s,r,o){const a=new Xp,l=new RM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,S,D,Y,k){const W=Y.fog,rt=k.geometry,tt=C.isMeshStandardMaterial?Y.environment:null,lt=(C.isMeshStandardMaterial?e:t).get(C.envMap||tt),$=lt&&lt.mapping===ll?lt.image.height:null,yt=g[C.type];C.precision!==null&&(p=s.getMaxPrecision(C.precision),p!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",p,"instead."));const St=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Lt=St!==void 0?St.length:0;let mt=0;rt.morphAttributes.position!==void 0&&(mt=1),rt.morphAttributes.normal!==void 0&&(mt=2),rt.morphAttributes.color!==void 0&&(mt=3);let st,U,ct,Tt;if(yt){const me=ni[yt];st=me.vertexShader,U=me.fragmentShader}else st=C.vertexShader,U=C.fragmentShader,l.update(C),ct=l.getVertexShaderID(C),Tt=l.getFragmentShaderID(C);const Mt=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),K=k.isInstancedMesh===!0,O=k.isBatchedMesh===!0,At=!!C.map,A=!!C.matcap,N=!!lt,T=!!C.aoMap,nt=!!C.lightMap,q=!!C.bumpMap,J=!!C.normalMap,ot=!!C.displacementMap,gt=!!C.emissiveMap,at=!!C.metalnessMap,b=!!C.roughnessMap,x=C.anisotropy>0,F=C.clearcoat>0,B=C.dispersion>0,j=C.iridescence>0,Z=C.sheen>0,bt=C.transmission>0,vt=x&&!!C.anisotropyMap,wt=F&&!!C.clearcoatMap,Gt=F&&!!C.clearcoatNormalMap,xt=F&&!!C.clearcoatRoughnessMap,Dt=j&&!!C.iridescenceMap,Vt=j&&!!C.iridescenceThicknessMap,Wt=Z&&!!C.sheenColorMap,Rt=Z&&!!C.sheenRoughnessMap,qt=!!C.specularMap,jt=!!C.specularColorMap,pe=!!C.specularIntensityMap,H=bt&&!!C.transmissionMap,It=bt&&!!C.thicknessMap,ht=!!C.gradientMap,_t=!!C.alphaMap,Ft=C.alphaTest>0,Ut=!!C.alphaHash,te=!!C.extensions;let Le=os;C.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Le=n.toneMapping);const qe={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:st,fragmentShader:U,defines:C.defines,customVertexShaderID:ct,customFragmentShaderID:Tt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:p,batching:O,batchingColor:O&&k._colorsTexture!==null,instancing:K,instancingColor:K&&k.instanceColor!==null,instancingMorph:K&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Lr,alphaToCoverage:!!C.alphaToCoverage,map:At,matcap:A,envMap:N,envMapMode:N&&lt.mapping,envMapCubeUVHeight:$,aoMap:T,lightMap:nt,bumpMap:q,normalMap:J,displacementMap:f&&ot,emissiveMap:gt,normalMapObjectSpace:J&&C.normalMapType===B_,normalMapTangentSpace:J&&C.normalMapType===ju,metalnessMap:at,roughnessMap:b,anisotropy:x,anisotropyMap:vt,clearcoat:F,clearcoatMap:wt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:xt,dispersion:B,iridescence:j,iridescenceMap:Dt,iridescenceThicknessMap:Vt,sheen:Z,sheenColorMap:Wt,sheenRoughnessMap:Rt,specularMap:qt,specularColorMap:jt,specularIntensityMap:pe,transmission:bt,transmissionMap:H,thicknessMap:It,gradientMap:ht,opaque:C.transparent===!1&&C.blending===gr&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ft,alphaHash:Ut,combine:C.combine,mapUv:At&&_(C.map.channel),aoMapUv:T&&_(C.aoMap.channel),lightMapUv:nt&&_(C.lightMap.channel),bumpMapUv:q&&_(C.bumpMap.channel),normalMapUv:J&&_(C.normalMap.channel),displacementMapUv:ot&&_(C.displacementMap.channel),emissiveMapUv:gt&&_(C.emissiveMap.channel),metalnessMapUv:at&&_(C.metalnessMap.channel),roughnessMapUv:b&&_(C.roughnessMap.channel),anisotropyMapUv:vt&&_(C.anisotropyMap.channel),clearcoatMapUv:wt&&_(C.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(C.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(C.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(C.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(C.sheenRoughnessMap.channel),specularMapUv:qt&&_(C.specularMap.channel),specularColorMapUv:jt&&_(C.specularColorMap.channel),specularIntensityMapUv:pe&&_(C.specularIntensityMap.channel),transmissionMapUv:H&&_(C.transmissionMap.channel),thicknessMapUv:It&&_(C.thicknessMap.channel),alphaMapUv:_t&&_(C.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(J||x),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!rt.attributes.uv&&(At||_t),fog:!!W,useFog:C.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ut,skinning:k.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:At&&C.map.isVideoTexture===!0&&ae.getTransfer(C.map.colorSpace)===ge,decodeVideoTextureEmissive:gt&&C.emissiveMap.isVideoTexture===!0&&ae.getTransfer(C.emissiveMap.colorSpace)===ge,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ti,flipSided:C.side===ln,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:te&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&C.extensions.multiDraw===!0||O)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function d(C){const S=[];if(C.shaderID?S.push(C.shaderID):(S.push(C.customVertexShaderID),S.push(C.customFragmentShaderID)),C.defines!==void 0)for(const D in C.defines)S.push(D),S.push(C.defines[D]);return C.isRawShaderMaterial===!1&&(w(S,C),y(S,C),S.push(n.outputColorSpace)),S.push(C.customProgramCacheKey),S.join()}function w(C,S){C.push(S.precision),C.push(S.outputColorSpace),C.push(S.envMapMode),C.push(S.envMapCubeUVHeight),C.push(S.mapUv),C.push(S.alphaMapUv),C.push(S.lightMapUv),C.push(S.aoMapUv),C.push(S.bumpMapUv),C.push(S.normalMapUv),C.push(S.displacementMapUv),C.push(S.emissiveMapUv),C.push(S.metalnessMapUv),C.push(S.roughnessMapUv),C.push(S.anisotropyMapUv),C.push(S.clearcoatMapUv),C.push(S.clearcoatNormalMapUv),C.push(S.clearcoatRoughnessMapUv),C.push(S.iridescenceMapUv),C.push(S.iridescenceThicknessMapUv),C.push(S.sheenColorMapUv),C.push(S.sheenRoughnessMapUv),C.push(S.specularMapUv),C.push(S.specularColorMapUv),C.push(S.specularIntensityMapUv),C.push(S.transmissionMapUv),C.push(S.thicknessMapUv),C.push(S.combine),C.push(S.fogExp2),C.push(S.sizeAttenuation),C.push(S.morphTargetsCount),C.push(S.morphAttributeCount),C.push(S.numDirLights),C.push(S.numPointLights),C.push(S.numSpotLights),C.push(S.numSpotLightMaps),C.push(S.numHemiLights),C.push(S.numRectAreaLights),C.push(S.numDirLightShadows),C.push(S.numPointLightShadows),C.push(S.numSpotLightShadows),C.push(S.numSpotLightShadowsWithMaps),C.push(S.numLightProbes),C.push(S.shadowMapType),C.push(S.toneMapping),C.push(S.numClippingPlanes),C.push(S.numClipIntersection),C.push(S.depthPacking)}function y(C,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),C.push(a.mask)}function v(C){const S=g[C.type];let D;if(S){const Y=ni[S];D=Yp.clone(Y.uniforms)}else D=C.uniforms;return D}function L(C,S){let D;for(let Y=0,k=u.length;Y<k;Y++){const W=u[Y];if(W.cacheKey===S){D=W,++D.usedTimes;break}}return D===void 0&&(D=new AM(n,S,C,r),u.push(D)),D}function M(C){if(--C.usedTimes===0){const S=u.indexOf(C);u[S]=u[u.length-1],u.pop(),C.destroy()}}function E(C){l.remove(C)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:L,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:I}}function DM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function IM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Gf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||IM),i.length>1&&i.sort(f||Gf),s.length>1&&s.sort(f||Gf)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function UM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wf,n.set(i,[o])):s>=r.length?(o=new Wf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function NM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ot};break;case"SpotLight":e={position:new z,direction:new z,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function FM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let OM=0;function kM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zM(n){const t=new NM,e=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new xe,o=new xe;function a(c){let u=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,w=0,y=0,v=0,L=0,M=0,E=0;c.sort(kM);for(let C=0,S=c.length;C<S;C++){const D=c[C],Y=D.color,k=D.intensity,W=D.distance,rt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Y.r*k,h+=Y.g*k,f+=Y.b*k;else if(D.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(D.sh.coefficients[tt],k);E++}else if(D.isDirectionalLight){const tt=t.get(D);if(tt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const lt=D.shadow,$=e.get(D);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=rt,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=tt,p++}else if(D.isSpotLight){const tt=t.get(D);tt.position.setFromMatrixPosition(D.matrixWorld),tt.color.copy(Y).multiplyScalar(k),tt.distance=W,tt.coneCos=Math.cos(D.angle),tt.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),tt.decay=D.decay,i.spot[_]=tt;const lt=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,lt.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[_]=lt.matrix,D.castShadow){const $=e.get(D);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=rt,v++}_++}else if(D.isRectAreaLight){const tt=t.get(D);tt.color.copy(Y).multiplyScalar(k),tt.halfWidth.set(D.width*.5,0,0),tt.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=tt,m++}else if(D.isPointLight){const tt=t.get(D);if(tt.color.copy(D.color).multiplyScalar(D.intensity),tt.distance=D.distance,tt.decay=D.decay,D.castShadow){const lt=D.shadow,$=e.get(D);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,$.shadowCameraNear=lt.camera.near,$.shadowCameraFar=lt.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=tt,g++}else if(D.isHemisphereLight){const tt=t.get(D);tt.skyColor.copy(D.color).multiplyScalar(k),tt.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[d]=tt,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==L||I.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+L-M,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=E,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=L,I.numLightProbes=E,i.version=OM++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Xf(n){const t=new zM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Xf(n),t.set(s,[a])):r>=o.length?(a=new Xf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class HM extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class VM extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(n,t,e){let i=new Zu;const s=new ie,r=new ie,o=new Ae,a=new HM({depthPacking:z_}),l=new VM,c={},u=e.maxTextureSize,h={[cs]:ln,[ln]:cs,[Ti]:Ti},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ap;let d=this.type;this.render=function(M,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const C=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(rs),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const k=d!==yi&&this.type===yi,W=d===yi&&this.type!==yi;for(let rt=0,tt=M.length;rt<tt;rt++){const lt=M[rt],$=lt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const yt=$.getFrameExtents();if(s.multiply(yt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/yt.x),s.x=r.x*yt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/yt.y),s.y=r.y*yt.y,$.mapSize.y=r.y)),$.map===null||k===!0||W===!0){const Lt=this.type!==yi?{minFilter:cn,magFilter:cn}:{};$.map!==null&&$.map.dispose(),$.map=new Fi(s.x,s.y,Lt),$.map.texture.name=lt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const St=$.getViewportCount();for(let Lt=0;Lt<St;Lt++){const mt=$.getViewport(Lt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),Y.viewport(o),$.updateMatrices(lt,Lt),i=$.getFrustum(),v(E,I,$.camera,lt,this.type)}$.isPointLightShadow!==!0&&this.type===yi&&w($,I),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(C,S,D)};function w(M,E){const I=t.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Fi(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,I,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,I,p,_,null)}function y(M,E,I,C){let S=null;const D=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Y=S.uuid,k=E.uuid;let W=c[Y];W===void 0&&(W={},c[Y]=W);let rt=W[k];rt===void 0&&(rt=S.clone(),W[k]=rt,E.addEventListener("dispose",L)),S=rt}if(S.visible=E.visible,S.wireframe=E.wireframe,C===yi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=n.properties.get(S);Y.light=I}return S}function v(M,E,I,C,S){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===yi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const k=t.update(M),W=M.material;if(Array.isArray(W)){const rt=k.groups;for(let tt=0,lt=rt.length;tt<lt;tt++){const $=rt[tt],yt=W[$.materialIndex];if(yt&&yt.visible){const St=y(M,yt,C,S);M.onBeforeShadow(n,M,E,I,k,St,$),n.renderBufferDirect(I,null,k,St,M,$),M.onAfterShadow(n,M,E,I,k,St,$)}}}else if(W.visible){const rt=y(M,W,C,S);M.onBeforeShadow(n,M,E,I,k,rt,null),n.renderBufferDirect(I,null,k,rt,M,null),M.onAfterShadow(n,M,E,I,k,rt,null)}}const Y=M.children;for(let k=0,W=Y.length;k<W;k++)v(Y[k],E,I,C,S)}function L(M){M.target.removeEventListener("dispose",L);for(const I in c){const C=c[I],S=M.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}const $M={[Nc]:Fc,[Oc]:Bc,[kc]:Hc,[br]:zc,[Fc]:Nc,[Bc]:Oc,[Hc]:kc,[zc]:br};function qM(n,t){function e(){let H=!1;const It=new Ae;let ht=null;const _t=new Ae(0,0,0,0);return{setMask:function(Ft){ht!==Ft&&!H&&(n.colorMask(Ft,Ft,Ft,Ft),ht=Ft)},setLocked:function(Ft){H=Ft},setClear:function(Ft,Ut,te,Le,qe){qe===!0&&(Ft*=Le,Ut*=Le,te*=Le),It.set(Ft,Ut,te,Le),_t.equals(It)===!1&&(n.clearColor(Ft,Ut,te,Le),_t.copy(It))},reset:function(){H=!1,ht=null,_t.set(-1,0,0,0)}}}function i(){let H=!1,It=!1,ht=null,_t=null,Ft=null;return{setReversed:function(Ut){if(It!==Ut){const te=t.get("EXT_clip_control");It?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Le=Ft;Ft=null,this.setClear(Le)}It=Ut},getReversed:function(){return It},setTest:function(Ut){Ut?Mt(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function(Ut){ht!==Ut&&!H&&(n.depthMask(Ut),ht=Ut)},setFunc:function(Ut){if(It&&(Ut=$M[Ut]),_t!==Ut){switch(Ut){case Nc:n.depthFunc(n.NEVER);break;case Fc:n.depthFunc(n.ALWAYS);break;case Oc:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case kc:n.depthFunc(n.EQUAL);break;case zc:n.depthFunc(n.GEQUAL);break;case Bc:n.depthFunc(n.GREATER);break;case Hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Ut}},setLocked:function(Ut){H=Ut},setClear:function(Ut){Ft!==Ut&&(It&&(Ut=1-Ut),n.clearDepth(Ut),Ft=Ut)},reset:function(){H=!1,ht=null,_t=null,Ft=null,It=!1}}}function s(){let H=!1,It=null,ht=null,_t=null,Ft=null,Ut=null,te=null,Le=null,qe=null;return{setTest:function(me){H||(me?Mt(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(me){It!==me&&!H&&(n.stencilMask(me),It=me)},setFunc:function(me,zn,ui){(ht!==me||_t!==zn||Ft!==ui)&&(n.stencilFunc(me,zn,ui),ht=me,_t=zn,Ft=ui)},setOp:function(me,zn,ui){(Ut!==me||te!==zn||Le!==ui)&&(n.stencilOp(me,zn,ui),Ut=me,te=zn,Le=ui)},setLocked:function(me){H=me},setClear:function(me){qe!==me&&(n.clearStencil(me),qe=me)},reset:function(){H=!1,It=null,ht=null,_t=null,Ft=null,Ut=null,te=null,Le=null,qe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,y=null,v=null,L=null,M=null,E=new Ot(0,0,0),I=0,C=!1,S=null,D=null,Y=null,k=null,W=null;const rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,lt=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec($)[1]),tt=lt>=1):$.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),tt=lt>=2);let yt=null,St={};const Lt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),st=new Ae().fromArray(Lt),U=new Ae().fromArray(mt);function ct(H,It,ht,_t){const Ft=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(H,Ut),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<ht;te++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(It+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return Ut}const Tt={};Tt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(n.DEPTH_TEST),o.setFunc(br),q(!1),J(jh),Mt(n.CULL_FACE),T(rs);function Mt(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function ut(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function K(H,It){return h[H]!==It?(n.bindFramebuffer(H,It),h[H]=It,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=It),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=It),!0):!1}function O(H,It){let ht=p,_t=!1;if(H){ht=f.get(It),ht===void 0&&(ht=[],f.set(It,ht));const Ft=H.textures;if(ht.length!==Ft.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,te=Ft.length;Ut<te;Ut++)ht[Ut]=n.COLOR_ATTACHMENT0+Ut;ht.length=Ft.length,_t=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,_t=!0);_t&&n.drawBuffers(ht)}function At(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const A={[Ts]:n.FUNC_ADD,[f_]:n.FUNC_SUBTRACT,[d_]:n.FUNC_REVERSE_SUBTRACT};A[p_]=n.MIN,A[m_]=n.MAX;const N={[g_]:n.ZERO,[__]:n.ONE,[v_]:n.SRC_COLOR,[Ic]:n.SRC_ALPHA,[w_]:n.SRC_ALPHA_SATURATE,[b_]:n.DST_COLOR,[y_]:n.DST_ALPHA,[x_]:n.ONE_MINUS_SRC_COLOR,[Uc]:n.ONE_MINUS_SRC_ALPHA,[S_]:n.ONE_MINUS_DST_COLOR,[M_]:n.ONE_MINUS_DST_ALPHA,[E_]:n.CONSTANT_COLOR,[T_]:n.ONE_MINUS_CONSTANT_COLOR,[A_]:n.CONSTANT_ALPHA,[C_]:n.ONE_MINUS_CONSTANT_ALPHA};function T(H,It,ht,_t,Ft,Ut,te,Le,qe,me){if(H===rs){_===!0&&(ut(n.BLEND),_=!1);return}if(_===!1&&(Mt(n.BLEND),_=!0),H!==h_){if(H!==m||me!==C){if((d!==Ts||v!==Ts)&&(n.blendEquation(n.FUNC_ADD),d=Ts,v=Ts),me)switch(H){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFunc(n.ONE,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}w=null,y=null,L=null,M=null,E.set(0,0,0),I=0,m=H,C=me}return}Ft=Ft||It,Ut=Ut||ht,te=te||_t,(It!==d||Ft!==v)&&(n.blendEquationSeparate(A[It],A[Ft]),d=It,v=Ft),(ht!==w||_t!==y||Ut!==L||te!==M)&&(n.blendFuncSeparate(N[ht],N[_t],N[Ut],N[te]),w=ht,y=_t,L=Ut,M=te),(Le.equals(E)===!1||qe!==I)&&(n.blendColor(Le.r,Le.g,Le.b,qe),E.copy(Le),I=qe),m=H,C=!1}function nt(H,It){H.side===Ti?ut(n.CULL_FACE):Mt(n.CULL_FACE);let ht=H.side===ln;It&&(ht=!ht),q(ht),H.blending===gr&&H.transparent===!1?T(rs):T(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const _t=H.stencilWrite;a.setTest(_t),_t&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(H){S!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),S=H)}function J(H){H!==c_?(Mt(n.CULL_FACE),H!==D&&(H===jh?n.cullFace(n.BACK):H===u_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),D=H}function ot(H){H!==Y&&(tt&&n.lineWidth(H),Y=H)}function gt(H,It,ht){H?(Mt(n.POLYGON_OFFSET_FILL),(k!==It||W!==ht)&&(n.polygonOffset(It,ht),k=It,W=ht)):ut(n.POLYGON_OFFSET_FILL)}function at(H){H?Mt(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function b(H){H===void 0&&(H=n.TEXTURE0+rt-1),yt!==H&&(n.activeTexture(H),yt=H)}function x(H,It,ht){ht===void 0&&(yt===null?ht=n.TEXTURE0+rt-1:ht=yt);let _t=St[ht];_t===void 0&&(_t={type:void 0,texture:void 0},St[ht]=_t),(_t.type!==H||_t.texture!==It)&&(yt!==ht&&(n.activeTexture(ht),yt=ht),n.bindTexture(H,It||Tt[H]),_t.type=H,_t.texture=It)}function F(){const H=St[yt];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function vt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Wt(H){st.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),st.copy(H))}function Rt(H){U.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),U.copy(H))}function qt(H,It){let ht=c.get(It);ht===void 0&&(ht=new WeakMap,c.set(It,ht));let _t=ht.get(H);_t===void 0&&(_t=n.getUniformBlockIndex(It,H.name),ht.set(H,_t))}function jt(H,It){const _t=c.get(It).get(H);l.get(It)!==_t&&(n.uniformBlockBinding(It,_t,H.__bindingPointIndex),l.set(It,_t))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},yt=null,St={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,y=null,v=null,L=null,M=null,E=new Ot(0,0,0),I=0,C=!1,S=null,D=null,Y=null,k=null,W=null,st.set(0,0,n.canvas.width,n.canvas.height),U.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:ut,bindFramebuffer:K,drawBuffers:O,useProgram:At,setBlending:T,setMaterial:nt,setFlipSided:q,setCullFace:J,setLineWidth:ot,setPolygonOffset:gt,setScissorTest:at,activeTexture:b,bindTexture:x,unbindTexture:F,compressedTexImage2D:B,compressedTexImage3D:j,texImage2D:Dt,texImage3D:Vt,updateUBOMapping:qt,uniformBlockBinding:jt,texStorage2D:Gt,texStorage3D:xt,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:vt,compressedTexSubImage3D:wt,scissor:Wt,viewport:Rt,reset:pe}}function $f(n,t,e,i){const s=YM(i);switch(e){case Up:return n*t;case Fp:return n*t;case Op:return n*t*2;case kp:return n*t/s.components*s.byteLength;case $u:return n*t/s.components*s.byteLength;case zp:return n*t*2/s.components*s.byteLength;case qu:return n*t*2/s.components*s.byteLength;case Np:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case Yu:return n*t*4/s.components*s.byteLength;case Sa:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $c:case Yc:return Math.max(n,16)*Math.max(t,8)/4;case Xc:case qc:return Math.max(n,8)*Math.max(t,8)/2;case jc:case Kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case tu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case eu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case su:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ru:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ou:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case au:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Aa:case fu:case du:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bp:case pu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case mu:case gu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function YM(n){switch(n){case Ni:case Lp:return{byteLength:1,components:1};case So:case Dp:case Os:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case Us:case Gu:case Ci:return{byteLength:4,components:1};case Ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Wa("canvas")}function _(b,x,F){let B=1;const j=at(b);if((j.width>F||j.height>F)&&(B=F/Math.max(j.width,j.height)),B<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(B*j.width),bt=Math.floor(B*j.height);h===void 0&&(h=g(Z,bt));const vt=x?g(Z,bt):h;return vt.width=Z,vt.height=bt,vt.getContext("2d").drawImage(b,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+bt+")."),vt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,x,F,B,j=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const bt=j?cl:ae.getTransfer(B);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=bt===ge?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(b,x){let F;return b?x===null||x===Us||x===Er?F=n.DEPTH24_STENCIL8:x===Ci?F=n.DEPTH32F_STENCIL8:x===So&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Us||x===Er?F=n.DEPTH_COMPONENT24:x===Ci?F=n.DEPTH_COMPONENT32F:x===So&&(F=n.DEPTH_COMPONENT16),F}function L(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==cn&&b.minFilter!==ri?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function M(b){const x=b.target;x.removeEventListener("dispose",M),I(x),x.isVideoTexture&&u.delete(x)}function E(b){const x=b.target;x.removeEventListener("dispose",E),S(x)}function I(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,B=f.get(F);if(B){const j=B[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(b),Object.keys(B).length===0&&f.delete(F)}i.remove(b)}function C(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,B=f.get(F);delete B[x.__cacheKey],o.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(x.__webglFramebuffer[B]))for(let j=0;j<x.__webglFramebuffer[B].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[B][j]);else n.deleteFramebuffer(x.__webglFramebuffer[B]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[B])}else{if(Array.isArray(x.__webglFramebuffer))for(let B=0;B<x.__webglFramebuffer.length;B++)n.deleteFramebuffer(x.__webglFramebuffer[B]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let B=0;B<x.__webglColorRenderbuffer.length;B++)x.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[B]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let B=0,j=F.length;B<j;B++){const Z=i.get(F[B]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(F[B])}i.remove(b)}let D=0;function Y(){D=0}function k(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function W(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function rt(b,x){const F=i.get(b);if(b.isVideoTexture&&ot(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const B=b.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(F,b,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function tt(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){U(F,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function lt(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){U(F,b,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function $(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){ct(F,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const yt={[Va]:n.REPEAT,[Ps]:n.CLAMP_TO_EDGE,[Wc]:n.MIRRORED_REPEAT},St={[cn]:n.NEAREST,[O_]:n.NEAREST_MIPMAP_NEAREST,[no]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Ol]:n.LINEAR_MIPMAP_NEAREST,[Ls]:n.LINEAR_MIPMAP_LINEAR},Lt={[H_]:n.NEVER,[q_]:n.ALWAYS,[V_]:n.LESS,[Hp]:n.LEQUAL,[G_]:n.EQUAL,[$_]:n.GEQUAL,[W_]:n.GREATER,[X_]:n.NOTEQUAL};function mt(b,x){if(x.type===Ci&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ri||x.magFilter===Ol||x.magFilter===no||x.magFilter===Ls||x.minFilter===ri||x.minFilter===Ol||x.minFilter===no||x.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,yt[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,yt[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,yt[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,St[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==no&&x.minFilter!==Ls||x.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",M));const B=x.source;let j=f.get(B);j===void 0&&(j={},f.set(B,j));const Z=W(x);if(Z!==b.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[Z].usedTimes++;const bt=j[b.__cacheKey];bt!==void 0&&(j[b.__cacheKey].usedTimes--,bt.usedTimes===0&&C(x)),b.__cacheKey=Z,b.__webglTexture=j[Z].texture}return F}function U(b,x,F){let B=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=n.TEXTURE_3D);const j=st(b,x),Z=x.source;e.bindTexture(B,b.__webglTexture,n.TEXTURE0+F);const bt=i.get(Z);if(Z.version!==bt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const vt=ae.getPrimaries(ae.workingColorSpace),wt=x.colorSpace===Ai?null:ae.getPrimaries(x.colorSpace),Gt=x.colorSpace===Ai||vt===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let xt=_(x.image,!1,s.maxTextureSize);xt=gt(x,xt);const Dt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Wt=y(x.internalFormat,Dt,Vt,x.colorSpace,x.isVideoTexture);mt(B,x);let Rt;const qt=x.mipmaps,jt=x.isVideoTexture!==!0,pe=bt.__version===void 0||j===!0,H=Z.dataReady,It=L(x,xt);if(x.isDepthTexture)Wt=v(x.format===Tr,x.type),pe&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Wt,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Wt,xt.width,xt.height,0,Dt,Vt,null));else if(x.isDataTexture)if(qt.length>0){jt&&pe&&e.texStorage2D(n.TEXTURE_2D,It,Wt,qt[0].width,qt[0].height);for(let ht=0,_t=qt.length;ht<_t;ht++)Rt=qt[ht],jt?H&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Rt.width,Rt.height,Dt,Vt,Rt.data):e.texImage2D(n.TEXTURE_2D,ht,Wt,Rt.width,Rt.height,0,Dt,Vt,Rt.data);x.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(n.TEXTURE_2D,It,Wt,xt.width,xt.height),H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,Dt,Vt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,Wt,xt.width,xt.height,0,Dt,Vt,xt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){jt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Wt,qt[0].width,qt[0].height,xt.depth);for(let ht=0,_t=qt.length;ht<_t;ht++)if(Rt=qt[ht],x.format!==Wn)if(Dt!==null)if(jt){if(H)if(x.layerUpdates.size>0){const Ft=$f(Rt.width,Rt.height,x.format,x.type);for(const Ut of x.layerUpdates){const te=Rt.data.subarray(Ut*Ft/Rt.data.BYTES_PER_ELEMENT,(Ut+1)*Ft/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Ut,Rt.width,Rt.height,1,Dt,te)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Rt.width,Rt.height,xt.depth,Dt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,Wt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,Rt.width,Rt.height,xt.depth,Dt,Vt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,Wt,Rt.width,Rt.height,xt.depth,0,Dt,Vt,Rt.data)}else{jt&&pe&&e.texStorage2D(n.TEXTURE_2D,It,Wt,qt[0].width,qt[0].height);for(let ht=0,_t=qt.length;ht<_t;ht++)Rt=qt[ht],x.format!==Wn?Dt!==null?jt?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,Wt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?H&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Rt.width,Rt.height,Dt,Vt,Rt.data):e.texImage2D(n.TEXTURE_2D,ht,Wt,Rt.width,Rt.height,0,Dt,Vt,Rt.data)}else if(x.isDataArrayTexture)if(jt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Wt,xt.width,xt.height,xt.depth),H)if(x.layerUpdates.size>0){const ht=$f(xt.width,xt.height,x.format,x.type);for(const _t of x.layerUpdates){const Ft=xt.data.subarray(_t*ht/xt.data.BYTES_PER_ELEMENT,(_t+1)*ht/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Dt,Vt,Ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Dt,Vt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Wt,xt.width,xt.height,xt.depth,0,Dt,Vt,xt.data);else if(x.isData3DTexture)jt?(pe&&e.texStorage3D(n.TEXTURE_3D,It,Wt,xt.width,xt.height,xt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Dt,Vt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Wt,xt.width,xt.height,xt.depth,0,Dt,Vt,xt.data);else if(x.isFramebufferTexture){if(pe)if(jt)e.texStorage2D(n.TEXTURE_2D,It,Wt,xt.width,xt.height);else{let ht=xt.width,_t=xt.height;for(let Ft=0;Ft<It;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,Wt,ht,_t,0,Dt,Vt,null),ht>>=1,_t>>=1}}else if(qt.length>0){if(jt&&pe){const ht=at(qt[0]);e.texStorage2D(n.TEXTURE_2D,It,Wt,ht.width,ht.height)}for(let ht=0,_t=qt.length;ht<_t;ht++)Rt=qt[ht],jt?H&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Dt,Vt,Rt):e.texImage2D(n.TEXTURE_2D,ht,Wt,Dt,Vt,Rt);x.generateMipmaps=!1}else if(jt){if(pe){const ht=at(xt);e.texStorage2D(n.TEXTURE_2D,It,Wt,ht.width,ht.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Dt,Vt,xt)}else e.texImage2D(n.TEXTURE_2D,0,Wt,Dt,Vt,xt);m(x)&&d(B),bt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ct(b,x,F){if(x.image.length!==6)return;const B=st(b,x),j=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const Z=i.get(j);if(j.version!==Z.__version||B===!0){e.activeTexture(n.TEXTURE0+F);const bt=ae.getPrimaries(ae.workingColorSpace),vt=x.colorSpace===Ai?null:ae.getPrimaries(x.colorSpace),wt=x.colorSpace===Ai||bt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,Dt=[];for(let _t=0;_t<6;_t++)!Gt&&!xt?Dt[_t]=_(x.image[_t],!0,s.maxCubemapSize):Dt[_t]=xt?x.image[_t].image:x.image[_t],Dt[_t]=gt(x,Dt[_t]);const Vt=Dt[0],Wt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),qt=y(x.internalFormat,Wt,Rt,x.colorSpace),jt=x.isVideoTexture!==!0,pe=Z.__version===void 0||B===!0,H=j.dataReady;let It=L(x,Vt);mt(n.TEXTURE_CUBE_MAP,x);let ht;if(Gt){jt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,It,qt,Vt.width,Vt.height);for(let _t=0;_t<6;_t++){ht=Dt[_t].mipmaps;for(let Ft=0;Ft<ht.length;Ft++){const Ut=ht[Ft];x.format!==Wn?Wt!==null?jt?H&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,Ut.width,Ut.height,Wt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,0,0,Ut.width,Ut.height,Wt,Rt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft,qt,Ut.width,Ut.height,0,Wt,Rt,Ut.data)}}}else{if(ht=x.mipmaps,jt&&pe){ht.length>0&&It++;const _t=at(Dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,It,qt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){jt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt[_t].width,Dt[_t].height,Wt,Rt,Dt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,qt,Dt[_t].width,Dt[_t].height,0,Wt,Rt,Dt[_t].data);for(let Ft=0;Ft<ht.length;Ft++){const te=ht[Ft].image[_t].image;jt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,te.width,te.height,Wt,Rt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,qt,te.width,te.height,0,Wt,Rt,te.data)}}else{jt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Rt,Dt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,qt,Wt,Rt,Dt[_t]);for(let Ft=0;Ft<ht.length;Ft++){const Ut=ht[Ft];jt?H&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,0,0,Wt,Rt,Ut.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ft+1,qt,Wt,Rt,Ut.image[_t])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),Z.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Tt(b,x,F,B,j,Z){const bt=r.convert(F.format,F.colorSpace),vt=r.convert(F.type),wt=y(F.internalFormat,bt,vt,F.colorSpace),Gt=i.get(x),xt=i.get(F);if(xt.__renderTarget=x,!Gt.__hasExternalTextures){const Dt=Math.max(1,x.width>>Z),Vt=Math.max(1,x.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,wt,Dt,Vt,x.depth,0,bt,vt,null):e.texImage2D(j,Z,wt,Dt,Vt,0,bt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,j,xt.__webglTexture,0,q(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,j,xt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const B=x.depthTexture,j=B&&B.isDepthTexture?B.type:null,Z=v(x.stencilBuffer,j),bt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=q(x);J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,Z,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,b)}else{const B=x.textures;for(let j=0;j<B.length;j++){const Z=B[j],bt=r.convert(Z.format,Z.colorSpace),vt=r.convert(Z.type),wt=y(Z.internalFormat,bt,vt,Z.colorSpace),Gt=q(x);F&&J(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,wt,x.width,x.height):J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,wt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,wt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ut(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(x.depthTexture);B.__renderTarget=x,(!B.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),rt(x.depthTexture,0);const j=B.__webglTexture,Z=q(x);if(x.depthTexture.format===_r)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Tr)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function K(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const B=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),B){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,B.removeEventListener("dispose",j)};B.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=B}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]===void 0)x.__webglDepthbuffer[B]=n.createRenderbuffer(),Mt(x.__webglDepthbuffer[B],b,!1);else{const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Mt(x.__webglDepthbuffer,b,!1);else{const B=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function O(b,x,F){const B=i.get(b);x!==void 0&&Tt(B.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&K(b)}function At(b){const x=b.texture,F=i.get(b),B=i.get(x);b.addEventListener("dispose",E);const j=b.textures,Z=b.isWebGLCubeRenderTarget===!0,bt=j.length>1;if(bt||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=x.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[vt]=[];for(let wt=0;wt<x.mipmaps.length;wt++)F.__webglFramebuffer[vt][wt]=n.createFramebuffer()}else F.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let vt=0;vt<x.mipmaps.length;vt++)F.__webglFramebuffer[vt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(bt)for(let vt=0,wt=j.length;vt<wt;vt++){const Gt=i.get(j[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&J(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let vt=0;vt<j.length;vt++){const wt=j[vt];F.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[vt]);const Gt=r.convert(wt.format,wt.colorSpace),xt=r.convert(wt.type),Dt=y(wt.internalFormat,Gt,xt,wt.colorSpace,b.isXRRenderTarget===!0),Vt=q(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Dt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,F.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),mt(n.TEXTURE_CUBE_MAP,x);for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)Tt(F.__webglFramebuffer[vt][wt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt);else Tt(F.__webglFramebuffer[vt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let vt=0,wt=j.length;vt<wt;vt++){const Gt=j[vt],xt=i.get(Gt);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),mt(n.TEXTURE_2D,Gt),Tt(F.__webglFramebuffer,b,Gt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),m(Gt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(vt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,B.__webglTexture),mt(vt,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)Tt(F.__webglFramebuffer[wt],b,x,n.COLOR_ATTACHMENT0,vt,wt);else Tt(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,vt,0);m(x)&&d(vt),e.unbindTexture()}b.depthBuffer&&K(b)}function A(b){const x=b.textures;for(let F=0,B=x.length;F<B;F++){const j=x[F];if(m(j)){const Z=w(b),bt=i.get(j).__webglTexture;e.bindTexture(Z,bt),d(Z),e.unbindTexture()}}}const N=[],T=[];function nt(b){if(b.samples>0){if(J(b)===!1){const x=b.textures,F=b.width,B=b.height;let j=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(b),vt=x.length>1;if(vt)for(let wt=0;wt<x.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<x.length;wt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);const Gt=i.get(x[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,F,B,0,0,F,B,j,n.NEAREST),l===!0&&(N.length=0,T.length=0,N.push(n.COLOR_ATTACHMENT0+wt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(N.push(Z),T.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let wt=0;wt<x.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);const Gt=i.get(x[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function q(b){return Math.min(s.maxSamples,b.samples)}function J(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ot(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function gt(b,x){const F=b.colorSpace,B=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Lr&&F!==Ai&&(ae.getTransfer(F)===ge?(B!==Wn||j!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function at(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.setTexture2D=rt,this.setTexture2DArray=tt,this.setTexture3D=lt,this.setTextureCube=$,this.rebindTextures=O,this.setupRenderTarget=At,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=J}function KM(n,t){function e(i,s=Ai){let r;const o=ae.getTransfer(s);if(i===Ni)return n.UNSIGNED_BYTE;if(i===Wu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ip)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lp)return n.BYTE;if(i===Dp)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Gu)return n.INT;if(i===Us)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Os)return n.HALF_FLOAT;if(i===Up)return n.ALPHA;if(i===Np)return n.RGB;if(i===Wn)return n.RGBA;if(i===Fp)return n.LUMINANCE;if(i===Op)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===kp)return n.RED;if(i===$u)return n.RED_INTEGER;if(i===zp)return n.RG;if(i===qu)return n.RG_INTEGER;if(i===Yu)return n.RGBA_INTEGER;if(i===Sa||i===wa||i===Ea||i===Ta)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===$c||i===qc||i===Yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jc||i===Kc||i===Zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jc||i===Kc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===Qc||i===tu||i===eu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ru)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ou)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===au)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hu)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===fu||i===du)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Aa)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bp||i===pu||i===mu||i===gu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ZM extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class He extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const QM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new kn({vertexShader:QM,fragmentShader:tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends Dr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new eb,m=e.getContextAttributes();let d=null,w=null;const y=[],v=[],L=new ie;let M=null;const E=new gn;E.viewport=new Ae;const I=new gn;I.viewport=new Ae;const C=[E,I],S=new ZM;let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let ct=y[U];return ct===void 0&&(ct=new fc,y[U]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(U){let ct=y[U];return ct===void 0&&(ct=new fc,y[U]=ct),ct.getGripSpace()},this.getHand=function(U){let ct=y[U];return ct===void 0&&(ct=new fc,y[U]=ct),ct.getHandSpace()};function k(U){const ct=v.indexOf(U.inputSource);if(ct===-1)return;const Tt=y[ct];Tt!==void 0&&(Tt.update(U.inputSource,U.frame,c||o),Tt.dispatchEvent({type:U.type,data:U.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",rt);for(let U=0;U<y.length;U++){const ct=v[U];ct!==null&&(v[U]=null,y[U].disconnect(ct))}D=null,Y=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,w=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Fi(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,Tt=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?Tr:_r,Tt=m.stencil?Er:Us);const ut={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Fi(f.textureWidth,f.textureHeight,{format:Wn,type:Ni,depthTexture:new Jp(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(U){for(let ct=0;ct<U.removed.length;ct++){const Tt=U.removed[ct],Mt=v.indexOf(Tt);Mt>=0&&(v[Mt]=null,y[Mt].disconnect(Tt))}for(let ct=0;ct<U.added.length;ct++){const Tt=U.added[ct];let Mt=v.indexOf(Tt);if(Mt===-1){for(let K=0;K<y.length;K++)if(K>=v.length){v.push(Tt),Mt=K;break}else if(v[K]===null){v[K]=Tt,Mt=K;break}if(Mt===-1)break}const ut=y[Mt];ut&&ut.connect(Tt)}}const tt=new z,lt=new z;function $(U,ct,Tt){tt.setFromMatrixPosition(ct.matrixWorld),lt.setFromMatrixPosition(Tt.matrixWorld);const Mt=tt.distanceTo(lt),ut=ct.projectionMatrix.elements,K=Tt.projectionMatrix.elements,O=ut[14]/(ut[10]-1),At=ut[14]/(ut[10]+1),A=(ut[9]+1)/ut[5],N=(ut[9]-1)/ut[5],T=(ut[8]-1)/ut[0],nt=(K[8]+1)/K[0],q=O*T,J=O*nt,ot=Mt/(-T+nt),gt=ot*-T;if(ct.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(gt),U.translateZ(ot),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ut[10]===-1)U.projectionMatrix.copy(ct.projectionMatrix),U.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const at=O+ot,b=At+ot,x=q-gt,F=J+(Mt-gt),B=A*At/b*at,j=N*At/b*at;U.projectionMatrix.makePerspective(x,F,B,j,at,b),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function yt(U,ct){ct===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(ct.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let ct=U.near,Tt=U.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),S.near=I.near=E.near=ct,S.far=I.far=E.far=Tt,(D!==S.near||Y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,Y=S.far),E.layers.mask=U.layers.mask|2,I.layers.mask=U.layers.mask|4,S.layers.mask=E.layers.mask|I.layers.mask;const Mt=U.parent,ut=S.cameras;yt(S,Mt);for(let K=0;K<ut.length;K++)yt(ut[K],Mt);ut.length===2?$(S,E,I):S.projectionMatrix.copy(E.projectionMatrix),St(U,S,Mt)};function St(U,ct,Tt){Tt===null?U.matrix.copy(ct.matrixWorld):(U.matrix.copy(Tt.matrixWorld),U.matrix.invert(),U.matrix.multiply(ct.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(ct.projectionMatrix),U.projectionMatrixInverse.copy(ct.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=vu*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(U){l=U,f!==null&&(f.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Lt=null;function mt(U,ct){if(u=ct.getViewerPose(c||o),g=ct,u!==null){const Tt=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let Mt=!1;Tt.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let K=0;K<Tt.length;K++){const O=Tt[K];let At=null;if(p!==null)At=p.getViewport(O);else{const N=h.getViewSubImage(f,O);At=N.viewport,K===0&&(t.setRenderTargetTextures(w,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),t.setRenderTarget(w))}let A=C[K];A===void 0&&(A=new gn,A.layers.enable(K),A.viewport=new Ae,C[K]=A),A.matrix.fromArray(O.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(O.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(At.x,At.y,At.width,At.height),K===0&&(S.matrix.copy(A.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(A)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const K=h.getDepthInformation(Tt[0]);K&&K.isValid&&K.texture&&_.init(t,K,s.renderState)}}for(let Tt=0;Tt<y.length;Tt++){const Mt=v[Tt],ut=y[Tt];Mt!==null&&ut!==void 0&&ut.update(Mt,ct,c||o)}Lt&&Lt(U,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const st=new Zp;st.setAnimationLoop(mt),this.setAnimationLoop=function(U){Lt=U},this.dispose=function(){}}}const Ms=new On,ib=new xe;function sb(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,qp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=t.get(d),y=w.envMap,v=w.envMapRotation;y&&(m.envMap.value=y,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(Ms)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rb(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const v=y.program;i.uniformBlockBinding(w,v)}function c(w,y){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(w,L);const M=t.render.frame;r[w.id]!==M&&(f(w),r[w.id]=M)}function u(w){const y=h();w.__bindingPointIndex=y;const v=n.createBuffer(),L=w.__size,M=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=s[w.id],v=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,E=v.length;M<E;M++){const I=Array.isArray(v[M])?v[M]:[v[M]];for(let C=0,S=I.length;C<S;C++){const D=I[C];if(p(D,M,C,L)===!0){const Y=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let rt=0;rt<k.length;rt++){const tt=k[rt],lt=_(tt);typeof tt=="number"||typeof tt=="boolean"?(D.__data[0]=tt,n.bufferSubData(n.UNIFORM_BUFFER,Y+W,D.__data)):tt.isMatrix3?(D.__data[0]=tt.elements[0],D.__data[1]=tt.elements[1],D.__data[2]=tt.elements[2],D.__data[3]=0,D.__data[4]=tt.elements[3],D.__data[5]=tt.elements[4],D.__data[6]=tt.elements[5],D.__data[7]=0,D.__data[8]=tt.elements[6],D.__data[9]=tt.elements[7],D.__data[10]=tt.elements[8],D.__data[11]=0):(tt.toArray(D.__data,W),W+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,v,L){const M=w.value,E=y+"_"+v;if(L[E]===void 0)return typeof M=="number"||typeof M=="boolean"?L[E]=M:L[E]=M.clone(),!0;{const I=L[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return L[E]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(w){const y=w.uniforms;let v=0;const L=16;for(let E=0,I=y.length;E<I;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,D=C.length;S<D;S++){const Y=C[S],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let W=0,rt=k.length;W<rt;W++){const tt=k[W],lt=_(tt),$=v%L,yt=$%lt.boundary,St=$+yt;v+=yt,St!==0&&L-St<lt.storage&&(v+=L-St),Y.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=v,v+=lt.storage}}}const M=v%L;return M>0&&(v+=L-M),w.__size=v,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class im{constructor(t={}){const{canvas:e=j_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const w=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=os,this.toneMappingExposure=1;const v=this;let L=!1,M=0,E=0,I=null,C=-1,S=null;const D=new Ae,Y=new Ae;let k=null;const W=new Ot(0);let rt=0,tt=e.width,lt=e.height,$=1,yt=null,St=null;const Lt=new Ae(0,0,tt,lt),mt=new Ae(0,0,tt,lt);let st=!1;const U=new Zu;let ct=!1,Tt=!1;const Mt=new xe,ut=new xe,K=new z,O=new Ae,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function N(){return I===null?$:1}let T=i;function nt(R,V){return e.getContext(R,V)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vu}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),T===null){const V="webgl2";if(T=nt(V,R),T===null)throw nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let q,J,ot,gt,at,b,x,F,B,j,Z,bt,vt,wt,Gt,xt,Dt,Vt,Wt,Rt,qt,jt,pe,H;function It(){q=new hy(T),q.init(),jt=new KM(T,q),J=new ry(T,q,t,jt),ot=new qM(T,q),J.reverseDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),gt=new py(T),at=new DM,b=new jM(T,q,ot,at,J,jt,gt),x=new ay(v),F=new uy(v),B=new Mv(T),pe=new iy(T,B),j=new fy(T,B,gt,pe),Z=new gy(T,j,B,gt),Wt=new my(T,J,b),xt=new oy(at),bt=new LM(v,x,F,q,J,pe,xt),vt=new sb(v,at),wt=new UM,Gt=new BM(q),Vt=new ny(v,x,F,ot,Z,p,l),Dt=new XM(v,Z,J),H=new rb(T,gt,J,ot),Rt=new sy(T,q,gt),qt=new dy(T,q,gt),gt.programs=bt.programs,v.capabilities=J,v.extensions=q,v.properties=at,v.renderLists=wt,v.shadowMap=Dt,v.state=ot,v.info=gt}It();const ht=new nb(v,T);this.xr=ht,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const R=q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(tt,lt,!1))},this.getSize=function(R){return R.set(tt,lt)},this.setSize=function(R,V,et=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,lt=V,e.width=Math.floor(R*$),e.height=Math.floor(V*$),et===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(tt*$,lt*$).floor()},this.setDrawingBufferSize=function(R,V,et){tt=R,lt=V,$=et,e.width=Math.floor(R*et),e.height=Math.floor(V*et),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Lt)},this.setViewport=function(R,V,et,it){R.isVector4?Lt.set(R.x,R.y,R.z,R.w):Lt.set(R,V,et,it),ot.viewport(D.copy(Lt).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,V,et,it){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,V,et,it),ot.scissor(Y.copy(mt).multiplyScalar($).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){ot.setScissorTest(st=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(R=!0,V=!0,et=!0){let it=0;if(R){let X=!1;if(I!==null){const Et=I.texture.format;X=Et===Yu||Et===qu||Et===$u}if(X){const Et=I.texture.type,Nt=Et===Ni||Et===Us||Et===So||Et===Er||Et===Wu||Et===Xu,kt=Vt.getClearColor(),zt=Vt.getClearAlpha(),Yt=kt.r,ee=kt.g,Bt=kt.b;Nt?(g[0]=Yt,g[1]=ee,g[2]=Bt,g[3]=zt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Yt,_[1]=ee,_[2]=Bt,_[3]=zt,T.clearBufferiv(T.COLOR,0,_))}else it|=T.COLOR_BUFFER_BIT}V&&(it|=T.DEPTH_BUFFER_BIT),et&&(it|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),wt.dispose(),Gt.dispose(),at.dispose(),x.dispose(),F.dispose(),Z.dispose(),pe.dispose(),H.dispose(),bt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ch),ht.removeEventListener("sessionend",uh),ds.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=gt.autoReset,V=Dt.enabled,et=Dt.autoUpdate,it=Dt.needsUpdate,X=Dt.type;It(),gt.autoReset=R,Dt.enabled=V,Dt.autoUpdate=et,Dt.needsUpdate=it,Dt.type=X}function Ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const V=R.target;V.removeEventListener("dispose",te),Le(V)}function Le(R){qe(R),at.remove(R)}function qe(R){const V=at.get(R).programs;V!==void 0&&(V.forEach(function(et){bt.releaseProgram(et)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,et,it,X,Et){V===null&&(V=At);const Nt=X.isMesh&&X.matrixWorld.determinant()<0,kt=Am(R,V,et,it,X);ot.setMaterial(it,Nt);let zt=et.index,Yt=1;if(it.wireframe===!0){if(zt=j.getWireframeAttribute(et),zt===void 0)return;Yt=2}const ee=et.drawRange,Bt=et.attributes.position;let le=ee.start*Yt,be=(ee.start+ee.count)*Yt;Et!==null&&(le=Math.max(le,Et.start*Yt),be=Math.min(be,(Et.start+Et.count)*Yt)),zt!==null?(le=Math.max(le,0),be=Math.min(be,zt.count)):Bt!=null&&(le=Math.max(le,0),be=Math.min(be,Bt.count));const we=be-le;if(we<0||we===1/0)return;pe.setup(X,it,kt,et,zt);let hn,ue=Rt;if(zt!==null&&(hn=B.get(zt),ue=qt,ue.setIndex(hn)),X.isMesh)it.wireframe===!0?(ot.setLineWidth(it.wireframeLinewidth*N()),ue.setMode(T.LINES)):ue.setMode(T.TRIANGLES);else if(X.isLine){let Ht=it.linewidth;Ht===void 0&&(Ht=1),ot.setLineWidth(Ht*N()),X.isLineSegments?ue.setMode(T.LINES):X.isLineLoop?ue.setMode(T.LINE_LOOP):ue.setMode(T.LINE_STRIP)}else X.isPoints?ue.setMode(T.POINTS):X.isSprite&&ue.setMode(T.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ue.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ht=X._multiDrawStarts,hi=X._multiDrawCounts,he=X._multiDrawCount,Bn=zt?B.get(zt).bytesPerElement:1,ks=at.get(it).currentProgram.getUniforms();for(let yn=0;yn<he;yn++)ks.setValue(T,"_gl_DrawID",yn),ue.render(Ht[yn]/Bn,hi[yn])}else if(X.isInstancedMesh)ue.renderInstances(le,we,X.count);else if(et.isInstancedBufferGeometry){const Ht=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,hi=Math.min(et.instanceCount,Ht);ue.renderInstances(le,we,hi)}else ue.render(le,we)};function me(R,V,et){R.transparent===!0&&R.side===Ti&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,Uo(R,V,et),R.side=cs,R.needsUpdate=!0,Uo(R,V,et),R.side=Ti):Uo(R,V,et)}this.compile=function(R,V,et=null){et===null&&(et=R),d=Gt.get(et),d.init(V),y.push(d),et.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),R!==et&&R.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();const it=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Et=X.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){const kt=Et[Nt];me(kt,et,X),it.add(kt)}else me(Et,et,X),it.add(Et)}),y.pop(),d=null,it},this.compileAsync=function(R,V,et=null){const it=this.compile(R,V,et);return new Promise(X=>{function Et(){if(it.forEach(function(Nt){at.get(Nt).currentProgram.isReady()&&it.delete(Nt)}),it.size===0){X(R);return}setTimeout(Et,10)}q.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let zn=null;function ui(R){zn&&zn(R)}function ch(){ds.stop()}function uh(){ds.start()}const ds=new Zp;ds.setAnimationLoop(ui),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(R){zn=R,ht.setAnimationLoop(R),R===null?ds.stop():ds.start()},ht.addEventListener("sessionstart",ch),ht.addEventListener("sessionend",uh),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(V),V=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,I),d=Gt.get(R,y.length),d.init(V),y.push(d),ut.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),U.setFromProjectionMatrix(ut),Tt=this.localClippingEnabled,ct=xt.init(this.clippingPlanes,Tt),m=wt.get(R,w.length),m.init(),w.push(m),ht.enabled===!0&&ht.isPresenting===!0){const Et=v.xr.getDepthSensingMesh();Et!==null&&vl(Et,V,-1/0,v.sortObjects)}vl(R,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(yt,St),A=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,A&&Vt.addToRenderList(m,R),this.info.render.frame++,ct===!0&&xt.beginShadows();const et=d.state.shadowsArray;Dt.render(et,R,V),ct===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=m.opaque,X=m.transmissive;if(d.setupLights(),V.isArrayCamera){const Et=V.cameras;if(X.length>0)for(let Nt=0,kt=Et.length;Nt<kt;Nt++){const zt=Et[Nt];fh(it,X,R,zt)}A&&Vt.render(R);for(let Nt=0,kt=Et.length;Nt<kt;Nt++){const zt=Et[Nt];hh(m,R,zt,zt.viewport)}}else X.length>0&&fh(it,X,R,V),A&&Vt.render(R),hh(m,R,V);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(v,R,V),pe.resetDefaultState(),C=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],ct===!0&&xt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function vl(R,V,et,it){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||U.intersectsSprite(R)){it&&O.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const Nt=Z.update(R),kt=R.material;kt.visible&&m.push(R,Nt,kt,et,O.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||U.intersectsObject(R))){const Nt=Z.update(R),kt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),O.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),O.copy(Nt.boundingSphere.center)),O.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(kt)){const zt=Nt.groups;for(let Yt=0,ee=zt.length;Yt<ee;Yt++){const Bt=zt[Yt],le=kt[Bt.materialIndex];le&&le.visible&&m.push(R,Nt,le,et,O.z,Bt)}}else kt.visible&&m.push(R,Nt,kt,et,O.z,null)}}const Et=R.children;for(let Nt=0,kt=Et.length;Nt<kt;Nt++)vl(Et[Nt],V,et,it)}function hh(R,V,et,it){const X=R.opaque,Et=R.transmissive,Nt=R.transparent;d.setupLightsView(et),ct===!0&&xt.setGlobalState(v.clippingPlanes,et),it&&ot.viewport(D.copy(it)),X.length>0&&Io(X,V,et),Et.length>0&&Io(Et,V,et),Nt.length>0&&Io(Nt,V,et),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function fh(R,V,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[it.id]===void 0&&(d.state.transmissionRenderTarget[it.id]=new Fi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Os:Ni,minFilter:Ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const Et=d.state.transmissionRenderTarget[it.id],Nt=it.viewport||D;Et.setSize(Nt.z,Nt.w);const kt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(W),rt=v.getClearAlpha(),rt<1&&v.setClearColor(16777215,.5),v.clear(),A&&Vt.render(et);const zt=v.toneMapping;v.toneMapping=os;const Yt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),d.setupLightsView(it),ct===!0&&xt.setGlobalState(v.clippingPlanes,it),Io(R,et,it),b.updateMultisampleRenderTarget(Et),b.updateRenderTargetMipmap(Et),q.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Bt=0,le=V.length;Bt<le;Bt++){const be=V[Bt],we=be.object,hn=be.geometry,ue=be.material,Ht=be.group;if(ue.side===Ti&&we.layers.test(it.layers)){const hi=ue.side;ue.side=ln,ue.needsUpdate=!0,dh(we,et,it,hn,ue,Ht),ue.side=hi,ue.needsUpdate=!0,ee=!0}}ee===!0&&(b.updateMultisampleRenderTarget(Et),b.updateRenderTargetMipmap(Et))}v.setRenderTarget(kt),v.setClearColor(W,rt),Yt!==void 0&&(it.viewport=Yt),v.toneMapping=zt}function Io(R,V,et){const it=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Et=R.length;X<Et;X++){const Nt=R[X],kt=Nt.object,zt=Nt.geometry,Yt=it===null?Nt.material:it,ee=Nt.group;kt.layers.test(et.layers)&&dh(kt,V,et,zt,Yt,ee)}}function dh(R,V,et,it,X,Et){R.onBeforeRender(v,V,et,it,X,Et),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(v,V,et,it,R,Et),X.transparent===!0&&X.side===Ti&&X.forceSinglePass===!1?(X.side=ln,X.needsUpdate=!0,v.renderBufferDirect(et,V,it,X,R,Et),X.side=cs,X.needsUpdate=!0,v.renderBufferDirect(et,V,it,X,R,Et),X.side=Ti):v.renderBufferDirect(et,V,it,X,R,Et),R.onAfterRender(v,V,et,it,X,Et)}function Uo(R,V,et){V.isScene!==!0&&(V=At);const it=at.get(R),X=d.state.lights,Et=d.state.shadowsArray,Nt=X.state.version,kt=bt.getParameters(R,X.state,Et,V,et),zt=bt.getProgramCacheKey(kt);let Yt=it.programs;it.environment=R.isMeshStandardMaterial?V.environment:null,it.fog=V.fog,it.envMap=(R.isMeshStandardMaterial?F:x).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",te),Yt=new Map,it.programs=Yt);let ee=Yt.get(zt);if(ee!==void 0){if(it.currentProgram===ee&&it.lightsStateVersion===Nt)return mh(R,kt),ee}else kt.uniforms=bt.getUniforms(R),R.onBeforeCompile(kt,v),ee=bt.acquireProgram(kt,zt),Yt.set(zt,ee),it.uniforms=kt.uniforms;const Bt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=xt.uniform),mh(R,kt),it.needsLights=Rm(R),it.lightsStateVersion=Nt,it.needsLights&&(Bt.ambientLightColor.value=X.state.ambient,Bt.lightProbe.value=X.state.probe,Bt.directionalLights.value=X.state.directional,Bt.directionalLightShadows.value=X.state.directionalShadow,Bt.spotLights.value=X.state.spot,Bt.spotLightShadows.value=X.state.spotShadow,Bt.rectAreaLights.value=X.state.rectArea,Bt.ltc_1.value=X.state.rectAreaLTC1,Bt.ltc_2.value=X.state.rectAreaLTC2,Bt.pointLights.value=X.state.point,Bt.pointLightShadows.value=X.state.pointShadow,Bt.hemisphereLights.value=X.state.hemi,Bt.directionalShadowMap.value=X.state.directionalShadowMap,Bt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Bt.spotShadowMap.value=X.state.spotShadowMap,Bt.spotLightMatrix.value=X.state.spotLightMatrix,Bt.spotLightMap.value=X.state.spotLightMap,Bt.pointShadowMap.value=X.state.pointShadowMap,Bt.pointShadowMatrix.value=X.state.pointShadowMatrix),it.currentProgram=ee,it.uniformsList=null,ee}function ph(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Ca.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function mh(R,V){const et=at.get(R);et.outputColorSpace=V.outputColorSpace,et.batching=V.batching,et.batchingColor=V.batchingColor,et.instancing=V.instancing,et.instancingColor=V.instancingColor,et.instancingMorph=V.instancingMorph,et.skinning=V.skinning,et.morphTargets=V.morphTargets,et.morphNormals=V.morphNormals,et.morphColors=V.morphColors,et.morphTargetsCount=V.morphTargetsCount,et.numClippingPlanes=V.numClippingPlanes,et.numIntersection=V.numClipIntersection,et.vertexAlphas=V.vertexAlphas,et.vertexTangents=V.vertexTangents,et.toneMapping=V.toneMapping}function Am(R,V,et,it,X){V.isScene!==!0&&(V=At),b.resetTextureUnits();const Et=V.fog,Nt=it.isMeshStandardMaterial?V.environment:null,kt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Lr,zt=(it.isMeshStandardMaterial?F:x).get(it.envMap||Nt),Yt=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Bt=!!et.morphAttributes.position,le=!!et.morphAttributes.normal,be=!!et.morphAttributes.color;let we=os;it.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(we=v.toneMapping);const hn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ue=hn!==void 0?hn.length:0,Ht=at.get(it),hi=d.state.lights;if(ct===!0&&(Tt===!0||R!==S)){const An=R===S&&it.id===C;xt.setState(it,R,An)}let he=!1;it.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==hi.state.version||Ht.outputColorSpace!==kt||X.isBatchedMesh&&Ht.batching===!1||!X.isBatchedMesh&&Ht.batching===!0||X.isBatchedMesh&&Ht.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ht.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ht.instancing===!1||!X.isInstancedMesh&&Ht.instancing===!0||X.isSkinnedMesh&&Ht.skinning===!1||!X.isSkinnedMesh&&Ht.skinning===!0||X.isInstancedMesh&&Ht.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ht.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ht.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ht.instancingMorph===!1&&X.morphTexture!==null||Ht.envMap!==zt||it.fog===!0&&Ht.fog!==Et||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==xt.numPlanes||Ht.numIntersection!==xt.numIntersection)||Ht.vertexAlphas!==Yt||Ht.vertexTangents!==ee||Ht.morphTargets!==Bt||Ht.morphNormals!==le||Ht.morphColors!==be||Ht.toneMapping!==we||Ht.morphTargetsCount!==ue)&&(he=!0):(he=!0,Ht.__version=it.version);let Bn=Ht.currentProgram;he===!0&&(Bn=Uo(it,V,X));let ks=!1,yn=!1,Nr=!1;const Ee=Bn.getUniforms(),jn=Ht.uniforms;if(ot.useProgram(Bn.program)&&(ks=!0,yn=!0,Nr=!0),it.id!==C&&(C=it.id,yn=!0),ks||S!==R){ot.buffers.depth.getReversed()?(Mt.copy(R.projectionMatrix),Z_(Mt),J_(Mt),Ee.setValue(T,"projectionMatrix",Mt)):Ee.setValue(T,"projectionMatrix",R.projectionMatrix),Ee.setValue(T,"viewMatrix",R.matrixWorldInverse);const Bi=Ee.map.cameraPosition;Bi!==void 0&&Bi.setValue(T,K.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&Ee.setValue(T,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ee.setValue(T,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,yn=!0,Nr=!0)}if(X.isSkinnedMesh){Ee.setOptional(T,X,"bindMatrix"),Ee.setOptional(T,X,"bindMatrixInverse");const An=X.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ee.setValue(T,"boneTexture",An.boneTexture,b))}X.isBatchedMesh&&(Ee.setOptional(T,X,"batchingTexture"),Ee.setValue(T,"batchingTexture",X._matricesTexture,b),Ee.setOptional(T,X,"batchingIdTexture"),Ee.setValue(T,"batchingIdTexture",X._indirectTexture,b),Ee.setOptional(T,X,"batchingColorTexture"),X._colorsTexture!==null&&Ee.setValue(T,"batchingColorTexture",X._colorsTexture,b));const Fr=et.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&Wt.update(X,et,Bn),(yn||Ht.receiveShadow!==X.receiveShadow)&&(Ht.receiveShadow=X.receiveShadow,Ee.setValue(T,"receiveShadow",X.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(jn.envMap.value=zt,jn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&V.environment!==null&&(jn.envMapIntensity.value=V.environmentIntensity),yn&&(Ee.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Cm(jn,Nr),Et&&it.fog===!0&&vt.refreshFogUniforms(jn,Et),vt.refreshMaterialUniforms(jn,it,$,lt,d.state.transmissionRenderTarget[R.id]),Ca.upload(T,ph(Ht),jn,b)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ca.upload(T,ph(Ht),jn,b),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ee.setValue(T,"center",X.center),Ee.setValue(T,"modelViewMatrix",X.modelViewMatrix),Ee.setValue(T,"normalMatrix",X.normalMatrix),Ee.setValue(T,"modelMatrix",X.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const An=it.uniformsGroups;for(let Bi=0,Hi=An.length;Bi<Hi;Bi++){const gh=An[Bi];H.update(gh,Bn),H.bind(gh,Bn)}}return Bn}function Cm(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Rm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,V,et){at.get(R.texture).__webglTexture=V,at.get(R.depthTexture).__webglTexture=et;const it=at.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const et=at.get(R);et.__webglFramebuffer=V,et.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,et=0){I=R,M=V,E=et;let it=!0,X=null,Et=!1,Nt=!1;if(R){const zt=at.get(R);if(zt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(T.FRAMEBUFFER,null),it=!1;else if(zt.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(zt.__hasExternalTextures)b.rebindTextures(R,at.get(R.texture).__webglTexture,at.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Bt=R.depthTexture;if(zt.__boundDepthTexture!==Bt){if(Bt!==null&&at.has(Bt)&&(R.width!==Bt.image.width||R.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);const ee=at.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[V])?X=ee[V][et]:X=ee[V],Et=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?X=at.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?X=ee[et]:X=ee,D.copy(R.viewport),Y.copy(R.scissor),k=R.scissorTest}else D.copy(Lt).multiplyScalar($).floor(),Y.copy(mt).multiplyScalar($).floor(),k=st;if(ot.bindFramebuffer(T.FRAMEBUFFER,X)&&it&&ot.drawBuffers(R,X),ot.viewport(D),ot.scissor(Y),ot.setScissorTest(k),Et){const zt=at.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,et)}else if(Nt){const zt=at.get(R.texture),Yt=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,zt.__webglTexture,et||0,Yt)}C=-1},this.readRenderTargetPixels=function(R,V,et,it,X,Et,Nt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=at.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){ot.bindFramebuffer(T.FRAMEBUFFER,kt);try{const zt=R.texture,Yt=zt.format,ee=zt.type;if(!J.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-it&&et>=0&&et<=R.height-X&&T.readPixels(V,et,it,X,jt.convert(Yt),jt.convert(ee),Et)}finally{const zt=I!==null?at.get(I).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,V,et,it,X,Et,Nt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=at.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){const zt=R.texture,Yt=zt.format,ee=zt.type;if(!J.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-it&&et>=0&&et<=R.height-X){ot.bindFramebuffer(T.FRAMEBUFFER,kt);const Bt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Bt),T.bufferData(T.PIXEL_PACK_BUFFER,Et.byteLength,T.STREAM_READ),T.readPixels(V,et,it,X,jt.convert(Yt),jt.convert(ee),0);const le=I!==null?at.get(I).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,le);const be=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await K_(T,be,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Bt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Et),T.deleteBuffer(Bt),T.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,et=0){R.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const it=Math.pow(2,-et),X=Math.floor(R.image.width*it),Et=Math.floor(R.image.height*it),Nt=V!==null?V.x:0,kt=V!==null?V.y:0;b.setTexture2D(R,0),T.copyTexSubImage2D(T.TEXTURE_2D,et,0,0,Nt,kt,X,Et),ot.unbindTexture()},this.copyTextureToTexture=function(R,V,et=null,it=null,X=0){R.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],V=arguments[2],X=arguments[3]||0,et=null);let Et,Nt,kt,zt,Yt,ee,Bt,le,be;const we=R.isCompressedTexture?R.mipmaps[X]:R.image;et!==null?(Et=et.max.x-et.min.x,Nt=et.max.y-et.min.y,kt=et.isBox3?et.max.z-et.min.z:1,zt=et.min.x,Yt=et.min.y,ee=et.isBox3?et.min.z:0):(Et=we.width,Nt=we.height,kt=we.depth||1,zt=0,Yt=0,ee=0),it!==null?(Bt=it.x,le=it.y,be=it.z):(Bt=0,le=0,be=0);const hn=jt.convert(V.format),ue=jt.convert(V.type);let Ht;V.isData3DTexture?(b.setTexture3D(V,0),Ht=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),Ht=T.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),Ht=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);const hi=T.getParameter(T.UNPACK_ROW_LENGTH),he=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Bn=T.getParameter(T.UNPACK_SKIP_PIXELS),ks=T.getParameter(T.UNPACK_SKIP_ROWS),yn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,we.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,we.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,zt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Yt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ee);const Nr=R.isDataArrayTexture||R.isData3DTexture,Ee=V.isDataArrayTexture||V.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const jn=at.get(R),Fr=at.get(V),An=at.get(jn.__renderTarget),Bi=at.get(Fr.__renderTarget);ot.bindFramebuffer(T.READ_FRAMEBUFFER,An.__webglFramebuffer),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Hi=0;Hi<kt;Hi++)Nr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,at.get(R).__webglTexture,X,ee+Hi),R.isDepthTexture?(Ee&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,at.get(V).__webglTexture,X,be+Hi),T.blitFramebuffer(zt,Yt,Et,Nt,Bt,le,Et,Nt,T.DEPTH_BUFFER_BIT,T.NEAREST)):Ee?T.copyTexSubImage3D(Ht,X,Bt,le,be+Hi,zt,Yt,Et,Nt):T.copyTexSubImage2D(Ht,X,Bt,le,be+Hi,zt,Yt,Et,Nt);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?T.texSubImage3D(Ht,X,Bt,le,be,Et,Nt,kt,hn,ue,we.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Ht,X,Bt,le,be,Et,Nt,kt,hn,we.data):T.texSubImage3D(Ht,X,Bt,le,be,Et,Nt,kt,hn,ue,we):R.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,X,Bt,le,Et,Nt,hn,ue,we.data):R.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,X,Bt,le,we.width,we.height,hn,we.data):T.texSubImage2D(T.TEXTURE_2D,X,Bt,le,Et,Nt,hn,ue,we);T.pixelStorei(T.UNPACK_ROW_LENGTH,hi),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,he),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Bn),T.pixelStorei(T.UNPACK_SKIP_ROWS,ks),T.pixelStorei(T.UNPACK_SKIP_IMAGES,yn),X===0&&V.generateMipmaps&&T.generateMipmap(Ht),ot.unbindTexture()},this.copyTextureToTexture3D=function(R,V,et=null,it=null,X=0){return R.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,it=arguments[1]||null,R=arguments[2],V=arguments[3],X=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,et,it,X)},this.initRenderTarget=function(R){at.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),ot.unbindTexture()},this.resetState=function(){M=0,E=0,I=null,ot.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class th{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new th(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eh extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ob{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new z;class Xa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sm extends zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let tr;const Wr=new z,er=new z,nr=new z,ir=new ie,Xr=new ie,rm=new xe,aa=new z,$r=new z,la=new z,qf=new ie,dc=new ie,Yf=new ie;class ab extends Fe{constructor(t=new sm){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ob(e,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Xa(i,3,0,!1)),tr.setAttribute("uv",new Xa(i,2,3,!1))}this.geometry=tr,this.material=t,this.center=new ie(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),rm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-nr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ca(aa.set(-.5,-.5,0),nr,o,er,s,r),ca($r.set(.5,-.5,0),nr,o,er,s,r),ca(la.set(.5,.5,0),nr,o,er,s,r),qf.set(0,0),dc.set(1,0),Yf.set(1,1);let a=t.ray.intersectTriangle(aa,$r,la,!1,Wr);if(a===null&&(ca($r.set(-.5,.5,0),nr,o,er,s,r),dc.set(0,1),a=t.ray.intersectTriangle(aa,la,$r,!1,Wr),a===null))return;const l=t.ray.origin.distanceTo(Wr);l<t.near||l>t.far||e.push({distance:l,point:Wr.clone(),uv:Ln.getInterpolation(Wr,aa,$r,la,qf,dc,Yf,new ie),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ca(n,t,e,i,s,r){ir.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Xr.x=r*ir.x-s*ir.y,Xr.y=s*ir.x+r*ir.y):Xr.copy(ir),n.copy(t),n.x+=Xr.x,n.y+=Xr.y,n.applyMatrix4(rm)}class lb extends zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $a=new z,qa=new z,jf=new xe,qr=new Ku,ua=new Lo,pc=new z,Kf=new z;class cb extends Fe{constructor(t=new Ge,e=new lb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)$a.fromBufferAttribute(e,s-1),qa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=$a.distanceTo(qa);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;jf.copy(s).invert(),qr.copy(t.ray).applyMatrix4(jf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),w=u.getX(_+1),y=ha(this,t,qr,l,d,w);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=ha(this,t,qr,l,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=ha(this,t,qr,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=ha(this,t,qr,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ha(n,t,e,i,s,r){const o=n.geometry.attributes.position;if($a.fromBufferAttribute(o,s),qa.fromBufferAttribute(o,r),e.distanceSqToSegment($a,qa,pc,Kf)>i)return;pc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(pc);if(!(l<t.near||l>t.far))return{distance:l,point:Kf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Zf=new z,Jf=new z;class ub extends cb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Zf.fromBufferAttribute(e,s),Jf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Zf.distanceTo(Jf);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class om extends zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qf=new xe,yu=new Ku,fa=new Lo,da=new z;class hb extends Fe{constructor(t=new Ge,e=new om){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Qf.copy(s).invert(),yu.copy(t.ray).applyMatrix4(Qf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);da.fromBufferAttribute(h,m),td(da,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)da.fromBufferAttribute(h,g),td(da,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function td(n,t,e,i,s,r,o){const a=yu.distanceSqToPoint(n);if(a<e){const l=new z;yu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class dl extends un{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nh extends Ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,f=new z,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const w=[],y=d/i;let v=0;d===0&&o===0?v=.5/e:d===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const M=L/e;h.x=-t*Math.cos(s+M*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(M+v,1-y),w.push(c++)}u.push(w)}for(let d=0;d<i;d++)for(let w=0;w<e;w++){const y=u[d][w+1],v=u[d][w],L=u[d+1][w],M=u[d+1][w+1];(d!==0||o>0)&&p.push(y,v,M),(d!==i-1||l<Math.PI)&&p.push(v,L,M)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ra extends zi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ot(16777215),this.specular=new Ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hs extends zi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class am extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lm extends am{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mc=new xe,ed=new z,nd=new z;class fb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zu,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(ed),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class db extends fb{constructor(){super(new Ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cm extends am{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new db}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class um{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=id();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function id(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);const Ct=1.8/32,po=["#f3d2b3","#e8bc96","#d9a47c","#c48a62","#a8704c"],ur=["#1a1410","#3a2a1e","#5a3a22","#8a5a2a","#c8a060","#d8d8d8","#a83a2a","#2a3a6a"];function Kt(n,t,e,i,s=1,r=1){n.fillStyle=t,n.fillRect(e,i,s,r)}function pa(n,t,e,i,s,r,o){Kt(n,o,t+r,e,i*2,r),Kt(n,o,t,e+r,r*2+i*2,s)}function Yr(n,t){const e=parseInt(n.slice(1),16),i=Math.min(255,Math.max(0,(e>>16&255)*t)),s=Math.min(255,Math.max(0,(e>>8&255)*t)),r=Math.min(255,Math.max(0,(e&255)*t));return`rgb(${i|0},${s|0},${r|0})`}function ih(n){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=Un(n.seed||1),s=n.skin||po[0],r=n.hair||ur[0],o=n.shirt||"#3a7ad0",a=n.pants||"#2a2a3a",l=n.shoes||"#222222";pa(e,0,0,8,8,8,s),Kt(e,r,8,0,8,8),Kt(e,r,24,8,8,n.gender==="f"||n.hairStyle==="long"?8:5),Kt(e,r,0,8,8,n.gender==="f"?7:3),Kt(e,r,16,8,8,n.gender==="f"?7:3),Kt(e,r,8,8,8,n.hairStyle==="bald"?0:2),n.gender==="f"&&(Kt(e,r,8,8,1,6),Kt(e,r,15,8,1,6)),n.type==="elder"&&(Kt(e,"#d8d8d8",8,0,8,8),Kt(e,"#d8d8d8",24,8,8,4));const c=n.type==="kid"?"#2a1a10":"#1a1a2a";Kt(e,"#ffffff",9,12,2,1),Kt(e,"#ffffff",13,12,2,1),Kt(e,c,10,12,1,1),Kt(e,c,13,12,1,1),Kt(e,Yr(s,.85),11,13,2,1),Kt(e,n.gender==="f"?"#c0505a":Yr(s,.65),10,14,4,1),n.gender==="f"&&(Kt(e,"#e8a0a0",9,13,1,1),Kt(e,"#e8a0a0",14,13,1,1)),(n.glasses||n.type==="elder")&&(Kt(e,"#333",9,11,6,1),Kt(e,"#333",9,12,1,1),Kt(e,"#333",14,12,1,1)),n.type==="elder"&&Kt(e,Yr(s,.8),9,15,6,1),pa(e,16,16,8,12,4,o),Kt(e,Yr(o,.8),20,31,8,1),Kt(e,s,22,20,4,1);for(const[u,h]of[[40,16],[32,48]]){pa(e,u,h,4,12,4,s);const f=n.longSleeve?12:4;Kt(e,o,u,h+4,16,f),Kt(e,o,u+4,h,4,4)}for(const[u,h]of[[0,16],[16,48]])pa(e,u,h,4,12,4,a),Kt(e,l,u,h+4+9,16,3),Kt(e,l,u+8,h,4,4),n.shorts&&Kt(e,s,u,h+4+5,16,4);if(n.type==="office")Kt(e,"#ffffff",20,20,8,12),Kt(e,n.tie||"#a02a2a",23,20,2,8),Kt(e,o,20,20,2,12),Kt(e,o,26,20,2,12);else if(n.type==="student"){Kt(e,"#f2f2f2",20,20,8,12),Kt(e,"#2a5ac8",20,20,2,12),Kt(e,"#2a5ac8",26,20,2,12);for(const[u,h]of[[40,16],[32,48]])Kt(e,"#2a5ac8",u,h+4,16,2)}else if(n.type==="tourist")for(let u=0;u<6;u++)Kt(e,De(i,["#f2c230","#e05050","#50a0e0","#ffffff"]),20+Math.floor(i()*7),21+Math.floor(i()*10),1,1);else if(n.type==="elder"){Kt(e,Yr(o,.85),23,20,2,12);for(let u=22;u<32;u+=3)Kt(e,"#c8a040",23,u,2,1)}return n.gender==="f"&&n.dress&&(Kt(e,o,0,20,16,6),Kt(e,o,16,52,16,6)),t}function pb(n,t,e,i,s,r){const a=[[t+r+i,e+r,r,s],[t,e+r,r,s],[t+r,e,i,r],[t+r+i,e,i,r],[t+r,e+r,i,s],[t+2*r+i,e+r,i,s]],l=n.attributes.uv;for(let c=0;c<6;c++){const[u,h,f,p]=a[c],g=u/64,_=(u+f)/64,m=1-h/64,d=1-(h+p)/64,w=c*4;l.setXY(w,g,m),l.setXY(w+1,_,m),l.setXY(w+2,g,d),l.setXY(w+3,_,d)}l.needsUpdate=!0}function sr(n,t,e,i,s,r,o,a=0){const l=new Re((t+a)*Ct,(e+a)*Ct,(i+a)*Ct);pb(l,s,r,t,e,i),l.translate(0,-e*Ct*.5+o*Ct,0);const c=new re(l,n);return c.castShadow=!0,c}const sd=new WeakMap;function rd(n){let t=sd.get(n);return t||(t=new dl(n),t.magFilter=cn,t.minFilter=cn,t.colorSpace=Xe,sd.set(n,t)),t}class sh{constructor(t,e={}){this.group=new He,this.scale=e.scale||1,this.mat=new hs({map:rd(t),transparent:!1,alphaTest:.5});const i=new He;if(i.scale.setScalar(this.scale),this.root=i,this.group.add(i),this.legR=sr(this.mat,4,12,4,0,16,0),this.legL=sr(this.mat,4,12,4,16,48,0),this.legR.position.set(-2*Ct,12*Ct,0),this.legL.position.set(2*Ct,12*Ct,0),this.body=sr(this.mat,8,12,4,16,16,6),this.body.position.set(0,18*Ct,0),this.armR=sr(this.mat,4,12,4,40,16,2),this.armL=sr(this.mat,4,12,4,32,48,2),this.armR.position.set(-6*Ct,22*Ct,0),this.armL.position.set(6*Ct,22*Ct,0),this.head=sr(this.mat,8,8,8,0,0,8),this.head.position.set(0,24*Ct,0),i.add(this.legR,this.legL,this.body,this.armR,this.armL,this.head),this.phase=Math.random()*10,this.anim="idle",this.animT=0,this.acc={},e.accessories)for(const s of e.accessories)this.addAccessory(s)}setSkin(t){this.mat.map=rd(t),this.mat.needsUpdate=!0}addAccessory(t){if(this.acc[t])return this.acc[t];const e=s=>new hs({color:s});let i;if(t==="hat"){i=new He;const s=new re(new Re(10*Ct,2*Ct,10*Ct),e(15917216)),r=new re(new Re(8.4*Ct,3*Ct,8.4*Ct),e(15917216));s.position.y=8.2*Ct,r.position.y=9.5*Ct,i.add(s,r),this.head.add(i)}else if(t==="cap"){i=new He;const s=new re(new Re(8.4*Ct,2.5*Ct,8.4*Ct),e(14168112)),r=new re(new Re(8*Ct,.6*Ct,4*Ct),e(14168112));s.position.y=8.4*Ct,r.position.set(0,7.6*Ct,5.5*Ct),i.add(s,r),this.head.add(i)}else if(t==="backpack")i=new re(new Re(7*Ct,8*Ct,3*Ct),e(2779824)),i.position.set(0,0,-3.5*Ct),this.body.add(i);else if(t==="camera"){i=new He;const s=new re(new Re(4*Ct,3*Ct,2.5*Ct),e(2236962)),r=new re(new Re(1.8*Ct,1.8*Ct,1.8*Ct),e(5592405));r.position.z=2*Ct,i.add(s,r),i.position.set(0,-11*Ct,2.5*Ct),this.armR.add(i)}else if(t==="briefcase")i=new re(new Re(1.5*Ct,6*Ct,8*Ct),e(3811866)),i.position.set(-.5*Ct,-13.5*Ct,0),this.armL.add(i);else if(t==="cane")i=new re(new Re(1*Ct,14*Ct,1*Ct),e(6965802)),i.position.set(0,-15*Ct,2*Ct),this.armR.add(i);else if(t==="umbrella"){i=new He;const s=new re(new Re(.8*Ct,20*Ct,.8*Ct),e(4473924));s.position.y=0;const r=new re(new Re(22*Ct,2*Ct,22*Ct),e(De(Math.random,[14168112,2779824,15909424,2787914,14708896])));r.position.y=10*Ct;const o=new re(new Re(14*Ct,2*Ct,14*Ct),r.material);o.position.y=12*Ct,i.add(s,r,o),i.position.set(0,-10*Ct,0),i.rotation.x=1.2,this.armL.add(i)}else t==="phone"?(i=new re(new Re(2.4*Ct,4*Ct,.6*Ct),e(1118481)),i.position.set(0,-12*Ct,1.5*Ct),this.armR.add(i)):t==="bag"&&(i=new re(new Re(2*Ct,5*Ct,5*Ct),e(12597866)),i.position.set(2.5*Ct,-10*Ct,0),this.armL.add(i));return i&&(i.traverse(s=>s.isMesh&&(s.castShadow=!0)),this.acc[t]=i),i}showAccessory(t,e){e&&!this.acc[t]&&this.addAccessory(t),this.acc[t]&&(this.acc[t].visible=e)}setAnim(t){this.anim!==t&&(this.anim=t,this.animT=0)}update(t,e=0){this.animT+=t;const i=Math.min(1.6,e/6);this.phase+=t*(4+e*1.1);const s=Math.sin(this.phase)*.9*i;let r=s,o=-s,a=-s,l=s,c=0,u=0,h=0,f=0,p=0;const g=this.anim;if(e<.2){const _=Math.sin(this.animT*1.6)*.04;r=_,o=-_,a=0,l=0,c=.03,u=-.03}g==="photo"?(r=-1.5,c=.3,o=-1.4,u=-.4,h=.05):g==="wave"?(r=Math.PI,c=.3+Math.sin(this.animT*8)*.4):g==="pose"?(r=-Math.PI*.85,c=.5,o=-.2,u=-.4):g==="talk"?(h=Math.sin(this.animT*5)*.08,r=-.4+Math.sin(this.animT*3)*.2):g==="sit"?(a=l=-Math.PI/2,p=-10*Ct,r=o=-.6):g==="umbrella"?(o=-1.2,u=.15):g==="phone"?(r=-1.1,c=.4,h=.35):g==="shop"&&(r=-.9+Math.sin(this.animT*2)*.1),this.armR.rotation.set(r,0,c),this.armL.rotation.set(o,0,u),this.legR.rotation.x=a,this.legL.rotation.x=l,this.head.rotation.x=h,this.head.rotation.y=f,this.root.position.y=p+(e>.2?Math.abs(Math.cos(this.phase))*.03*i:0)}dispose(){this.group.traverse(t=>t.geometry&&t.geometry.dispose()),this.mat.dispose()}}function mb(n,t){const e=Un(t),i=e()<.5?"f":"m",s={gender:i,type:n,seed:t,skin:De(e,po.slice(0,4)),hair:De(e,ur.slice(0,5))},r=[];switch(n){case"office":s.shirt=De(e,["#2a2a3a","#3a4a6a","#4a4a4a"]),s.pants="#1a1a24",s.shoes="#111111",s.longSleeve=!0,s.tie=De(e,["#a02a2a","#2a4aa0","#3a3a3a"]),e()<.6?r.push("briefcase"):r.push("phone");break;case"student":s.shirt="#f2f2f2",s.pants="#2a5ac8",s.shoes="#f0f0f0",r.push("backpack");break;case"elder":s.shirt=De(e,["#8a6a4a","#5a6a7a","#a8a090","#6a3a3a"]),s.pants="#3a3a3a",s.shoes="#2a2a2a",s.longSleeve=!0,e()<.5&&r.push("cane");break;case"tourist":s.shirt=De(e,["#f2c230","#e05050","#50a0e0","#f080b0","#60c060"]),s.pants=De(e,["#c8b48a","#3a5a8a","#e0e0e0"]),s.shorts=e()<.6,r.push(e()<.5?"hat":"cap","camera"),e()<.5&&r.push("backpack");break;case"kid":s.shirt=De(e,["#f2c230","#e05050","#50a0e0","#f080b0","#60c060","#f0a030"]),s.pants=De(e,["#2a5ac8","#3a3a3a","#d84a6a"]),s.shorts=!0,e()<.4&&r.push("cap");break;default:s.shirt=De(e,["#c03a3a","#3a7ad0","#3aa060","#e0a030","#8a5ac0","#f2f2f2","#2a2a2a"]),s.pants=De(e,["#2a2a3a","#3a5a8a","#6a5a4a"]),e()<.3&&r.push("bag")}return i==="f"&&e()<.3&&n!=="student"&&(s.dress=!0),{params:s,accessories:r,scale:n==="kid"?.62:.95+e()*.1}}const Yi=32;class gb{constructor(){this.grid=new Map,this.owners=new Map,this.platforms=[]}add(t,e="static"){t.owner=e;const i=Math.floor(t.x0/Yi),s=Math.floor(t.x1/Yi),r=Math.floor(t.z0/Yi),o=Math.floor(t.z1/Yi),a=[];for(let c=i;c<=s;c++)for(let u=r;u<=o;u++){const h=c*100003+u;let f=this.grid.get(h);f||this.grid.set(h,f=[]),f.push(t),a.push(h)}t.keys=a;let l=this.owners.get(e);l||this.owners.set(e,l=[]),l.push(t)}addPlatform(t,e="static"){t.owner=e,this.platforms.push(t)}removeOwner(t){const e=this.owners.get(t);if(e){for(const i of e)for(const s of i.keys){const r=this.grid.get(s);if(!r)continue;const o=r.indexOf(i);o>=0&&r.splice(o,1),r.length||this.grid.delete(s)}this.owners.delete(t)}this.platforms=this.platforms.filter(i=>i.owner!==t)}query(t,e,i,s,r=[]){r.length=0;const o=Math.floor(t/Yi),a=Math.floor(i/Yi),l=Math.floor(e/Yi),c=Math.floor(s/Yi);for(let u=o;u<=a;u++)for(let h=l;h<=c;h++){const f=this.grid.get(u*100003+h);if(f)for(const p of f)p.x1>t&&p.x0<i&&p.z1>e&&p.z0<s&&r.indexOf(p)<0&&r.push(p)}return r}supportAt(t,e,i,s=.3){let r=-1/0;const o=this.query(t-s,e-s,t+s,e+s,this._tmp||(this._tmp=[]));for(const a of o)a.y1<=i&&a.y1>r&&(r=a.y1);for(const a of this.platforms)a.y>i||a.y<=r||ro(a,t,e)&&(r=a.y);return r}}function ro(n,t,e){if(n.type==="ellipse"){const i=(t-n.cx)/n.rx,s=(e-n.cz)/n.rz,r=i*i+s*s;if(n.inner){const o=(t-n.cx)/n.inner.rx,a=(e-n.cz)/n.inner.rz;if(o*o+a*a<1)return!1}return r<=1}return t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1}const ns={sunny:{name:"晴天",icon:"☀️",fog:75e-5,cloud:.35,light:1,rain:0,dark:0},cloudy:{name:"阴天",icon:"☁️",fog:.0011,cloud:.8,light:.65,rain:0,dark:.35},rain:{name:"下雨",icon:"🌧️",fog:.0019,cloud:1,light:.45,rain:1,dark:.6},typhoon:{name:"飘雪",icon:"❄️",fog:.0022,cloud:1,light:.5,rain:.9,dark:.55}},_b=`
varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }`,vb=`
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSun; uniform vec3 uSunColor; uniform float uNight; uniform float uFlash;
varying vec3 vDir;
void main(){
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  vec3 col = mix(uHorizon, uTop, pow(max(h,0.0), 0.55));
  if (d.y < 0.0) col = uHorizon * 0.9;
  float s = max(dot(d, normalize(uSun)), 0.0);
  col += uSunColor * pow(s, 8.0) * 0.35 * (1.0 - uNight);
  // 城市光污染（夜晚地平线泛紫）
  col += vec3(0.25,0.12,0.3) * uNight * pow(1.0 - max(h,0.0), 6.0) * 0.5;
  col += vec3(uFlash);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;class xb{constructor(t,e){this.scene=t,this.renderer=e,this.hour=9,this.speed=24/1200,this.weather="sunny",this.weatherLock=null,this.nextWeatherChange=2+Math.random()*2,this.wf={...ns.sunny},this.flash=0,this.flashTimer=5,this.rng=Un(Date.now()&65535),this.onWeatherChange=null,this.fog=new th(12574975,8e-4),t.fog=this.fog,this.skyUniforms={uTop:{value:new Ot},uHorizon:{value:new Ot},uSun:{value:new z(0,1,0)},uSunColor:{value:new Ot(1,.9,.7)},uNight:{value:0},uFlash:{value:0}},this.sky=new re(new nh(4e3,32,16),new kn({uniforms:this.skyUniforms,vertexShader:_b,fragmentShader:vb,side:ln,depthWrite:!1,fog:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.sun=new re(new us(180,180),new Li({color:16774336,fog:!1,transparent:!0,depthWrite:!1})),this.moon=new re(new us(110,110),new Li({color:15265528,fog:!1,transparent:!0,depthWrite:!1})),this.sun.renderOrder=this.moon.renderOrder=-9,t.add(this.sun,this.moon);const i=[],s=Un(7);for(let a=0;a<1500;a++){const l=s()*2-1,c=s()*Math.PI*2,u=Math.abs(l),h=Math.sqrt(1-u*u);i.push(Math.cos(c)*h*3500,u*3500,Math.sin(c)*h*3500)}const r=new Ge;r.setAttribute("position",new Ie(i,3)),this.stars=new hb(r,new om({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1})),t.add(this.stars),this.hemi=new lm(13625087,9075304,1.2),t.add(this.hemi),this.dir=new cm(16777215,2.2),this.dir.castShadow=!0,this.dir.shadow.mapSize.set(2048,2048);const o=this.dir.shadow.camera;o.left=-140,o.right=140,o.top=140,o.bottom=-140,o.near=10,o.far=800,this.dir.shadow.bias=-6e-4,this.dir.shadow.normalBias=.6,t.add(this.dir,this.dir.target),this.clouds=this.makeClouds(),t.add(this.clouds),this.rain=this.makeRain(),t.add(this.rain)}makeClouds(){const t=new He,e=Un(99),i=48,s=70,r=[];for(let c=0;c<i;c++){r[c]=[];for(let u=0;u<i;u++)r[c][u]=e()}const o=(c,u)=>{let h=0;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++)h+=r[(c+f+i)%i][(u+p+i)%i];return h/9},a=[[],[]],l=new Re(s,10,s);for(let c=0;c<i;c++)for(let u=0;u<i;u++){const h=o(c,u),f=h>.58?0:h>.5?1:-1;if(f<0)continue;const p=new xe().makeTranslation((c-i/2)*s,0,(u-i/2)*s);a[f].push(l.clone().applyMatrix4(p))}this.cloudMats=[];for(let c=0;c<2;c++){if(!a[c].length)continue;const u=yb(a[c]),h=new hs({color:16777215,transparent:!0,opacity:.85,fog:!1,depthWrite:!1});this.cloudMats.push(h);const f=new re(u,h);f.userData.layer=c,t.add(f)}return t.position.y=260,this.cloudSpan=i*s,t}makeRain(){const e=new Float32Array(96e3),i=Un(3);for(let a=0;a<16e3;a++){const l=(i()-.5)*100,c=i()*60,u=(i()-.5)*100;e.set([l,c,u,l,c,u],a*6)}const s=new Ge;s.setAttribute("position",new vn(e,3)),this.rainU={uTime:{value:0},uWind:{value:new ie},uOrigin:{value:new z},uAlpha:{value:0}};const r=new kn({uniforms:this.rainU,transparent:!0,depthWrite:!1,vertexShader:`uniform float uTime; uniform vec2 uWind; uniform vec3 uOrigin;
        void main(){ vec3 p = position; float fall = mod(p.y - uTime*42.0, 60.0);
          p.y = fall; p.xz += uWind * (60.0 - fall) * 0.25;
          if (mod(float(gl_VertexID),2.0) > 0.5) { p.y -= 1.6; p.xz += uWind*0.4; }
          vec3 w = vec3(mod(p.x - uOrigin.x + 50.0, 100.0) - 50.0 + uOrigin.x, uOrigin.y - 20.0 + p.y, mod(p.z - uOrigin.z + 50.0, 100.0) - 50.0 + uOrigin.z);
          gl_Position = projectionMatrix * viewMatrix * vec4(w,1.0); }`,fragmentShader:"uniform float uAlpha; void main(){ gl_FragColor = vec4(0.75,0.82,0.95,uAlpha); }"}),o=new ub(s,r);return o.frustumCulled=!1,o.visible=!1,o}setWeather(t,e=!1){ns[t]&&(this.weather=t,e&&(this.weatherLock=t),this.onWeatherChange&&this.onWeatherChange(t))}unlock(){this.weatherLock=null}get night(){return this._night||0}update(t,e,i){const s=this.hour;if(this.hour=(this.hour+t*this.speed)%24,!this.weatherLock&&(this.nextWeatherChange-=t*this.speed,this.nextWeatherChange<=0)){const E=this.rng(),I=E<.45?"sunny":E<.75?"cloudy":E<.93?"rain":"typhoon";this.nextWeatherChange=2+this.rng()*3,I!==this.weather&&this.setWeather(I)}const r=ns[this.weather],o=Math.min(1,t*.4);for(const E of["fog","cloud","light","rain","dark"])this.wf[E]=wp(this.wf[E],r[E],o);const a=this.wf,l=(this.hour-6)/12*Math.PI,c=new z(Math.cos(l),Math.sin(l),.35).normalize(),u=c.y,h=on((.06-u)/.22,0,1);this._night=h;const f=on(1-Math.abs(u-.05)/.22,0,1)*(1-h*.6);this.dusk=f;const p=new Ot(4032224),g=new Ot(12574975);p.lerp(new Ot(3820170),f*.6).lerp(new Ot(263695),h),g.lerp(new Ot(16751194),f*.85).lerp(new Ot(1316910),h);const _=new Ot(9080984).multiplyScalar(1-h*.85);p.lerp(_,a.dark*.85),g.lerp(_,a.dark*.75),this.flashTimer-=t,a.rain>.5&&this.flashTimer<0&&(this.flashTimer=9+Math.random()*8,this.flash=1),this.flash=Math.max(0,this.flash-t*4);const m=this.flash>.5||this.flash>.2&&this.flash<.3?this.flash:0;this.skyUniforms.uTop.value.copy(p),this.skyUniforms.uHorizon.value.copy(g),this.skyUniforms.uSun.value.copy(c),this.skyUniforms.uNight.value=h,this.skyUniforms.uFlash.value=m*.6,this.fog.color.copy(g),this.fog.density=a.fog;const d=on(u*3+.2,0,1)*a.light;this.hemi.color.copy(new Ot(13625087).lerp(new Ot(7372992),h)),this.hemi.groundColor.copy(new Ot(9075304).lerp(new Ot(5917264),h)),this.hemi.intensity=.35+d*1+h*.75+m*2.5;const w=c.clone().multiplyScalar(-1),y=u<0,v=y?w:c;this.dir.intensity=y?.5*a.light+.1:2.4*d,this.dir.color.copy(y?new Ot(9349375):new Ot(16777215).lerp(new Ot(16752736),f)),this.dir.position.copy(i).addScaledVector(v,400),this.dir.target.position.copy(i),this.sky.position.copy(e.position),this.stars.position.copy(e.position),this.stars.material.opacity=h*(1-a.dark)*.9,this.stars.rotation.y=this.hour*.05,this.sun.position.copy(e.position).addScaledVector(c,3200),this.sun.lookAt(e.position),this.sun.material.opacity=(1-a.dark)*on(u*6+.6,0,1),this.sun.material.color.copy(new Ot(16774336).lerp(new Ot(16744512),f)),this.moon.position.copy(e.position).addScaledVector(w,3200),this.moon.lookAt(e.position),this.moon.material.opacity=(1-a.dark)*on(-u*6+.4,0,1),this.cloudT=(this.cloudT||0)+t*4,this.clouds.position.x=Math.floor(e.position.x/70)*70+this.cloudT%70,this.clouds.position.z=Math.floor(e.position.z/70)*70;const L=new Ot(16777215).lerp(new Ot(7370368),a.dark).lerp(new Ot(1711658),h).lerp(new Ot(16756864),f*.5*(1-a.dark));this.clouds.children.forEach(E=>{E.visible=E.userData.layer===0?!0:a.cloud>.6,E.material.color.copy(L),E.material.opacity=.55+a.cloud*.4}),this.rain.visible=a.rain>.05,this.rainU.uTime.value+=t,this.rainU.uAlpha.value=on(a.rain*.6,0,.8),this.rainU.uOrigin.value.copy(e.position);const M=this.weather==="typhoon"?.15:.3;return this.rainU.uWind.value.set(M,M*.4),{night:h,dusk:f,flash:m,crossedHour:Math.floor(s)!==Math.floor(this.hour)}}get period(){const t=this.hour;return t>=5&&t<11?"早晨":t>=11&&t<17?"下午":t>=17&&t<19.5?"黄昏":"夜晚"}}function yb(n){let t=0;for(const a of n)t+=a.attributes.position.count;const e=new Float32Array(t*3),i=new Float32Array(t*3),s=[];let r=0;for(const a of n){e.set(a.attributes.position.array,r*3),i.set(a.attributes.normal.array,r*3);for(const l of a.index.array)s.push(l+r);r+=a.attributes.position.count}const o=new Ge;return o.setAttribute("position",new vn(e,3)),o.setAttribute("normal",new vn(i,3)),o.setIndex(s.length>65e3?new hl(s,1):new ul(s,1)),o}class pl extends re{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new gn;const i=this,s=e.color!==void 0?new Ot(e.color):new Ot(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||pl.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new Qi,h=new z,f=new z,p=new z,g=new xe,_=new z(0,0,-1),m=new Ae,d=new z,w=new z,y=new Ae,v=new xe,L=this.camera,M=new Fi(r,o,{samples:c,type:Os}),E=new kn({name:l.name!==void 0?l.name:"unspecified",uniforms:Yp.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(I,C,S){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(p),w.subVectors(f,_),w.reflect(h).negate(),w.add(f),L.position.copy(d),L.up.set(0,1,0),L.up.applyMatrix4(g),L.up.reflect(h),L.lookAt(w),L.far=S.far,L.updateMatrixWorld(),L.projectionMatrix.copy(S.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(L.projectionMatrix),v.multiply(L.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(L.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const D=L.projectionMatrix;y.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],y.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],y.z=-1,y.w=(1+D.elements[10])/D.elements[14],m.multiplyScalar(2/m.dot(y)),D.elements[2]=m.x,D.elements[6]=m.y,D.elements[10]=m.z+1-a,D.elements[14]=m.w,i.visible=!1;const Y=I.getRenderTarget(),k=I.xr.enabled,W=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(M),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(C,L),I.xr.enabled=k,I.shadowMap.autoUpdate=W,I.setRenderTarget(Y);const rt=S.viewport;rt!==void 0&&I.state.viewport(rt),i.visible=!0},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),i.material.dispose()}}}pl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const wo={lat:34.255,lon:108.95},Mu=200,hm=111.32*Math.cos(wo.lat*Math.PI/180),fm=110.574,Pa=13,dm=.3;function Mb(n,t){const e=(t-wo.lon)*hm,i=(n-wo.lat)*fm;return Math.hypot(e,i)>Pa?dm:1}function Ur(n,t){let e=(t-wo.lon)*hm,i=(n-wo.lat)*fm;const s=Math.hypot(e,i);if(s>Pa){const r=(Pa+(s-Pa)*dm)/s;e*=r,i*=r}return{x:e*Mu,z:-i*Mu}}const Oi=(n,t)=>Ur(n,t),bb=[{name:"西安护城河",pts:[[34.276,108.922,.035],[34.276,108.97,.035],[34.238,108.97,.035],[34.238,108.922,.035],[34.276,108.922,.035]]},{name:"曲江池",pts:[[34.204,108.976,.08],[34.202,108.982,.09],[34.198,108.985,.08],[34.195,108.98,.08],[34.197,108.974,.08],[34.204,108.976,.08]]},{name:"浐河",pts:[[34.36,109.07,.11],[34.32,109.06,.13],[34.28,109.055,.15],[34.24,109.06,.16],[34.19,109.075,.18]]},{name:"灞河",pts:[[34.39,109.03,.17],[34.35,109.05,.2],[34.31,109.075,.22],[34.27,109.1,.24],[34.22,109.12,.27]]},{name:"渭河",pts:[[34.43,108.75,.5],[34.44,108.86,.55],[34.445,108.98,.6],[34.44,109.1,.62],[34.43,109.22,.65]]}],ml=bb.map(n=>({name:n.name,pts:n.pts.map(([t,e,i])=>({...Oi(t,e),w:i*Mu*Mb(t,e)}))})),Sb=[{name:"朱雀大街",w:15,pts:[[34.276,108.94],[34.26,108.94],[34.238,108.94],[34.218,108.94],[34.18,108.94],[34.12,108.94]]},{name:"长安北路",w:16,pts:[[34.24,108.953],[34.225,108.953],[34.205,108.952],[34.17,108.95],[34.12,108.945]]},{name:"未央路",w:16,pts:[[34.276,108.95],[34.31,108.95],[34.35,108.95],[34.39,108.95],[34.44,108.95]]},{name:"北大街",w:14,pts:[[34.276,108.947],[34.262,108.947]]},{name:"南大街",w:14,pts:[[34.262,108.947],[34.24,108.947]]},{name:"东大街",w:14,pts:[[34.262,108.947],[34.262,108.97]]},{name:"西大街",w:14,pts:[[34.262,108.947],[34.262,108.922]]},{name:"雁塔路",w:13,pts:[[34.255,108.96],[34.235,108.96],[34.218,108.964],[34.2,108.975]]},{name:"友谊路",w:13,pts:[[34.245,108.91],[34.245,108.95],[34.245,109]]},{name:"二环南路",w:16,pts:[[34.225,108.88],[34.225,108.94],[34.225,109.02]]},{name:"太华路",w:13,pts:[[34.262,108.975],[34.295,108.975],[34.34,108.98]]},{name:"华清路",w:14,pts:[[34.275,108.97],[34.29,109.05],[34.33,109.14],[34.365,109.214],[34.385,109.278]]},{name:"咸宁路",w:13,pts:[[34.252,108.97],[34.255,109.03],[34.27,109.08]]},{name:"曲江路",w:12,pts:[[34.218,108.964],[34.207,108.976],[34.198,108.982],[34.19,108.97]]},{name:"环城北路",w:15,pts:[[34.276,108.922],[34.276,108.97]]},{name:"环城东路",w:15,pts:[[34.276,108.97],[34.238,108.97]]},{name:"环城南路",w:15,pts:[[34.238,108.97],[34.238,108.922]]},{name:"环城西路",w:15,pts:[[34.238,108.922],[34.276,108.922]]},{name:"大唐不夜城步行街",w:18,ped:!0,pts:[[34.218,108.964],[34.195,108.964]]}],gl=Sb.map(n=>({...n,pts:n.pts.map(([t,e])=>Oi(t,e))})),En={beilin:{name:"碑林区",color:"#b45a3c",theme:"城墙文脉"},lianhu:{name:"莲湖区",color:"#d49a45",theme:"市井长安"},xincheng:{name:"新城区",color:"#c96d55",theme:"古今交汇"},yanta:{name:"雁塔区",color:"#7258a8",theme:"盛唐风华"},weiyang:{name:"未央区",color:"#567fb0",theme:"汉唐宫阙"},lintong:{name:"临潼区",color:"#9a784b",theme:"秦风骊山"},changan:{name:"长安区",color:"#548b55",theme:"终南山水"},baqiao:{name:"灞桥区",color:"#4f9b9d",theme:"丝路水岸"}},bu=[["beilin",34.25,108.95],["beilin",34.24,108.96],["lianhu",34.27,108.93],["lianhu",34.26,108.92],["xincheng",34.27,108.98],["xincheng",34.25,108.99],["yanta",34.21,108.96],["yanta",34.19,108.98],["weiyang",34.32,108.95],["weiyang",34.39,108.94],["lintong",34.36,109.21],["lintong",34.385,109.278],["changan",34.08,108.9],["changan",34.02,108.98],["baqiao",34.28,109.08],["baqiao",34.34,109.05]].map(([n,t,e])=>({id:n,...Oi(t,e)}));function fs(n,t){let e=bu[0],i=1/0;for(const s of bu){const r=(s.x-n)**2+(s.z-t)**2;r<i&&(i=r,e=s)}return e.id}const wb=[[34.355,109.215,85,220],[34.34,109.2,55,180],[34.38,109.22,38,150],[34.02,108.99,130,300],[34.06,108.91,105,280],[34.1,108.86,65,220]].map(([n,t,e,i])=>({...Oi(n,t),h:e,r:i}));function pm(n,t){let e=0;for(const i of wb){const s=(n-i.x)**2+(t-i.z)**2;s<i.r*i.r*6&&(e+=i.h*Math.exp(-s/(i.r*i.r*.6)))}return e>1&&(e+=(Math.sin(n*.06)*Math.cos(t*.04)+Math.sin((n+t)*.028))*Math.min(4,e*.08)),e<.6?0:e}function $e(n,t){let e=pm(n,t);if(e>0){const i=xr(n,t,18);i&&(e*=Math.min(1,Math.max(0,(i.d-i.hw+18)/18)**2))}return Math.floor(e)}const Eb=[[34.296,108.964,180],[34.218,108.964,75],[34.202,108.98,150],[34.245,108.939,55],[34.276,109.05,90],[34.365,109.214,180],[34.385,109.278,160],[34.06,108.91,260]].map(([n,t,e])=>({...Oi(n,t),r:e}));function La(n,t){return Eb.some(e=>(e.x-n)**2+(e.z-t)**2<e.r*e.r)}const hr=64;function mm(n,t){const e=new Map;for(const i of n)for(let s=1;s<i.pts.length;s++){const r=i.pts[s-1],o=i.pts[s],a=Math.max(t(i,r),t(i,o))/2+20,l={ax:r.x,az:r.z,bx:o.x,bz:o.z,wa:t(i,r),wb:t(i,o),line:i};for(let c=Math.floor((Math.min(r.x,o.x)-a)/hr);c<=Math.floor((Math.max(r.x,o.x)+a)/hr);c++)for(let u=Math.floor((Math.min(r.z,o.z)-a)/hr);u<=Math.floor((Math.max(r.z,o.z)+a)/hr);u++){const h=c+","+u,f=e.get(h)||[];f.push(l),e.set(h,f)}}return e}const gm=mm(ml,(n,t)=>t.w),rh=mm(gl,n=>n.w);function Do(n,t,e,i=0){const s=n.get(Math.floor(t/hr)+","+Math.floor(e/hr));if(!s)return null;let r=null;for(const o of s){const{d:a,t:l}=s_(t,e,o.ax,o.az,o.bx,o.bz),c=(o.wa+(o.wb-o.wa)*l)/2+i;a<c&&(!r||a-c<r.m)&&(r={seg:o,d:a,hw:c,m:a-c,line:o.line})}return r}const _m=[];function Tb(n,t,e,i){_m.push({x0:Math.min(n,e),z0:Math.min(t,i),x1:Math.max(n,e),z1:Math.max(t,i)})}function Ab(n,t){return _m.some(e=>n>=e.x0&&n<=e.x1&&t>=e.z0&&t<=e.z1)}function gc(n,t,e=0){return Do(gm,n,t,e)}function ai(n,t){return!!Do(gm,n,t)&&!Ab(n,t)}function xr(n,t,e=0){return Do(rh,n,t,e)}function vm(n,t){return ai(n,t)&&!!Do(rh,n,t)}function xm(n,t){return!ai(n,t)||!!Do(rh,n,t,-.5)}const oo=-.7,fr=.35,Su={pts:[[34.262,108.947],[34.238,108.947],[34.225,108.953],[34.218,108.964],[34.207,108.976],[34.198,108.982]].map(([n,t])=>Oi(n,t)),stops:[{name:"钟楼",lat:34.262,lon:108.947},{name:"永宁门",lat:34.238,lon:108.947},{name:"陕西历史博物馆",lat:34.225,lon:108.955},{name:"大雁塔",lat:34.218,lon:108.964},{name:"大唐不夜城",lat:34.207,lon:108.964},{name:"曲江池",lat:34.198,lon:108.982}].map(n=>({...n,...Oi(n.lat,n.lon)}))},Eo=[{id:"zhonglou",name:"钟楼站",lines:["2号线","6号线"],lat:34.262,lon:108.947},{id:"beidajie",name:"北大街站",lines:["1号线","2号线"],lat:34.271,lon:108.947},{id:"yongningmen",name:"永宁门站",lines:["2号线"],lat:34.239,lon:108.947},{id:"xiaozhai",name:"小寨站",lines:["2号线","3号线"],lat:34.225,lon:108.953},{id:"dayanta",name:"大雁塔站",lines:["3号线","4号线"],lat:34.218,lon:108.964},{id:"datang",name:"大唐芙蓉园站",lines:["4号线"],lat:34.207,lon:108.976},{id:"daminggong",name:"大明宫站",lines:["4号线"],lat:34.295,lon:108.965},{id:"banpo",name:"半坡站",lines:["1号线"],lat:34.275,lon:109.047},{id:"huaqingchi",name:"华清池站",lines:["9号线"],lat:34.365,lon:109.214},{id:"qinyong",name:"秦陵西站",lines:["9号线"],lat:34.379,lon:109.25},{id:"beikezhan",name:"西安北站",lines:["2号线","4号线","14号线"],lat:34.376,lon:108.939},{id:"aoti",name:"奥体中心站",lines:["14号线"],lat:34.37,lon:109.02}].map(n=>({...n,...Oi(n.lat,n.lon)}));function Cb(){return ml.find(n=>n.name==="曲江池").pts.map(n=>({x:n.x,z:n.z}))}const ma=[{id:"nanhu",name:"南湖码头",lat:34.203,lon:108.976},{id:"qujiang",name:"曲江池码头",lat:34.197,lon:108.984}].map(n=>({...n,...Oi(n.lat,n.lon)}));function Rb(){let n=1/0,t=-1/0,e=1/0,i=-1/0;for(const s of bu)n=Math.min(n,s.x),t=Math.max(t,s.x),e=Math.min(e,s.z),i=Math.max(i,s.z);return{x0:n-600,x1:t+600,z0:e-600,z1:i+600}}function Rn(n,t,e,i={}){const s=document.createElement("canvas");s.width=n,s.height=t;const r=s.getContext("2d");e(r,n,t);const o=new dl(s);return o.magFilter=cn,o.minFilter=i.mip===!1?cn:no,o.wrapS=o.wrapT=Va,o.colorSpace=i.linear?Ai:Xe,o.anisotropy=4,o}function jr(n,t,e,i,s,r){for(let o=0;o<e;o++)for(let a=0;a<t;a++){const l=Math.max(0,Math.min(255,i+(r()-.5)*s));n.fillStyle=`rgb(${l},${l},${l})`,n.fillRect(a,o,1,1)}}const tn={};function oh(){if(tn.block)return tn;const n=Un(42);tn.block=Rn(16,16,(e,i,s)=>{jr(e,i,s,225,40,n),e.fillStyle="rgba(0,0,0,0.13)",e.fillRect(0,15,16,1),e.fillRect(15,0,1,16),e.fillStyle="rgba(255,255,255,0.1)",e.fillRect(0,0,16,1),e.fillRect(0,0,1,16)}),tn.leaf=Rn(16,16,(e,i,s)=>{for(let r=0;r<s;r++)for(let o=0;o<i;o++){const a=n(),l=a<.15?150:a<.5?200:240;e.fillStyle=`rgb(${l},${l},${l})`,e.fillRect(o,r,1,1)}}),tn.brick=Rn(16,16,e=>{jr(e,16,16,215,30,n),e.fillStyle="rgba(40,40,40,0.35)";for(let i=0;i<4;i++){e.fillRect(0,i*4+3,16,1);const s=i%2?4:0;e.fillRect(s+0,i*4,1,3),e.fillRect(s+8,i*4,1,3)}}),tn.roof=Rn(16,16,e=>{jr(e,16,16,200,25,n),e.fillStyle="rgba(0,0,0,0.3)";for(let i=0;i<16;i+=4)e.fillRect(i,0,1,16);e.fillStyle="rgba(255,255,255,0.15)";for(let i=2;i<16;i+=4)e.fillRect(i,0,1,16);e.fillStyle="rgba(0,0,0,0.2)",e.fillRect(0,15,16,1)}),tn.wood=Rn(16,16,e=>{jr(e,16,16,205,30,n),e.fillStyle="rgba(0,0,0,0.25)";for(let i=3;i<16;i+=4)e.fillRect(0,i,16,1)});const t=[];for(let e=0;e<64;e++)t.push(n()<.55);return tn.window=Rn(64,64,e=>{e.fillStyle="#e8e8e8",e.fillRect(0,0,64,64);for(let i=0;i<8;i++)for(let s=0;s<8;s++){const r=120+Math.floor(n()*50);e.fillStyle=`rgb(${r-20},${r},${r+30})`,e.fillRect(i*8+1,s*8+1,6,6),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(i*8+1,s*8+1,2,1)}}),tn.windowLit=Rn(64,64,e=>{e.fillStyle="#000",e.fillRect(0,0,64,64);for(let i=0;i<8;i++)for(let s=0;s<8;s++){if(!t[i*8+s])continue;const r=n()<.7;e.fillStyle=r?"#ffd890":"#cfe8ff",e.fillRect(i*8+1,s*8+1,6,6)}}),tn.curtain=Rn(32,32,e=>{for(let i=0;i<32;i++){const s=150+Math.floor(i/32*70);e.fillStyle=`rgb(${s},${s},${s})`,e.fillRect(0,i,32,1)}e.fillStyle="rgba(255,255,255,0.8)";for(let i=0;i<32;i+=8)e.fillRect(i,0,1,32);for(let i=0;i<32;i+=8)e.fillRect(0,i,32,1)}),tn.curtainLit=Rn(32,32,e=>{e.fillStyle="#000",e.fillRect(0,0,32,32);for(let i=0;i<4;i++)for(let s=0;s<4;s++)n()<.45||(e.fillStyle=n()<.6?"#ffe2a8":"#d8ecff",e.fillRect(i*8+1,s*8+1,7,7))}),tn.road=Rn(32,32,e=>{jr(e,32,32,90,18,n),e.fillStyle="#d8d8d0",e.fillRect(0,0,2,32),e.fillRect(30,0,2,32),e.fillStyle="#e8c840",e.fillRect(15,0,2,16)},{mip:!0}),tn.grass=Rn(16,16,e=>{for(let i=0;i<16;i++)for(let s=0;s<16;s++){const r=200+Math.floor(n()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(s,i,1,1)}}),tn.water=Rn(64,64,e=>{for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=128+Math.sin(s*.4+Math.sin(i*.3)*2)*40+(n()-.5)*30;e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(s,i,1,1)}},{linear:!0}),tn}let Kr=null;function ym(){if(Kr)return Kr;const n=oh(),t=e=>new hs({vertexColors:!0,...e});return Kr={block:{mat:t({map:n.block}),uv:1},stone:{mat:t({map:n.block}),uv:.5},brick:{mat:t({map:n.brick}),uv:1},roof:{mat:t({map:n.roof}),uv:1},wood:{mat:t({map:n.wood}),uv:1},leaf:{mat:t({map:n.leaf}),uv:.7},grass:{mat:t({map:n.grass}),uv:.5},window:{mat:t({map:n.window,emissiveMap:n.windowLit,emissive:16777215,emissiveIntensity:0}),uv:1/8},curtain:{mat:new Ra({vertexColors:!0,map:n.curtain,emissiveMap:n.curtainLit,emissive:16777215,emissiveIntensity:0,shininess:80,specular:6710886}),uv:1/8},glass:{mat:new Ra({vertexColors:!0,transparent:!0,opacity:.45,shininess:100,specular:16777215,depthWrite:!1}),uv:1},lamp:{mat:new Li({vertexColors:!0,color:7829367}),uv:1,night:"lamp"},neon:{mat:new Li({vertexColors:!0,color:8947848}),uv:1,night:"neon"},glow:{mat:new Li({vertexColors:!0}),uv:1},pond:{mat:new Ra({vertexColors:!0,map:n.water,shininess:90,specular:10139856}),uv:.08},sign:{mat:t({}),uv:1}},Kr.lamp.mat.userData.noFog=!1,Kr}function Pb(n){const t=ym();t.window.mat.emissiveIntensity=n*1,t.curtain.mat.emissiveIntensity=n*.9;const e=.45+n*.65;t.lamp.mat.color.setRGB(e,e,e);const i=.6+n*.6;t.neon.mat.color.setRGB(i,i,i)}const _c=new Map;function Lb(n,t={}){const e=n+JSON.stringify(t);if(_c.has(e))return _c.get(e);const{bg:i="#1a1a1a",fg:s="#ffd76a",font:r="bold",vertical:o=!1,border:a=null,px:l=64}=t,c=document.createElement("canvas"),u=c.getContext("2d"),h=[...n];o?(c.width=l*1.25,c.height=l*h.length*1.1+l*.4):(u.font=`${r} ${l}px "Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif`,c.width=Math.ceil(u.measureText(n).width+l*.8),c.height=l*1.4),u.fillStyle=i,u.fillRect(0,0,c.width,c.height),a&&(u.strokeStyle=a,u.lineWidth=l*.12,u.strokeRect(l*.08,l*.08,c.width-l*.16,c.height-l*.16)),u.font=`${r} ${l}px "Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif`,u.fillStyle=s,u.textAlign="center",u.textBaseline="middle",o?h.forEach((g,_)=>u.fillText(g,c.width/2,l*.75+_*l*1.1)):u.fillText(n,c.width/2,c.height/2+l*.04);const f=new dl(c);f.colorSpace=Xe,f.anisotropy=4;const p={tex:f,aspect:c.width/c.height};return _c.set(e,p),p}const vc=new Map;function Db(n,t={}){const e=n+JSON.stringify(t);if(vc.has(e))return vc.get(e);const{tex:i,aspect:s}=Lb(n,t),o={mat:t.glow?new Li({map:i,toneMapped:!1}):new hs({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.25}),aspect:s};return vc.set(e,o),o}const od=new Map;function rr(n){let t=od.get(n);if(!t){const e=new Ot().setHex(n);t=[e.r,e.g,e.b],od.set(n,t)}return t}const Ib=new Set(["leaf","lamp","neon","glow","glass"]),xc=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[2,1]},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[2,1]},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uv:[0,2]},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[0,2]},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[0,1]},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[0,1]}],Ub=[.86,.86,1,.6,.93,.93];class Nb{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[],this.n=0}}class _n{constructor(t=0,e=0,i=0,s=0,r=null,o="static"){this.ox=t,this.oy=e,this.oz=i,this.rot=s,this.cos=Math.cos(s),this.sin=Math.sin(s),this.world=r,this.owner=o,this.buckets={},this.extras=[],this.mats=ym(),this.jitter=!0}wx(t,e){return this.ox+t*this.cos+e*this.sin}wz(t,e){return this.oz-t*this.sin+e*this.cos}toWorld(t,e,i){return new z(this.wx(t,i),this.oy+e,this.wz(t,i))}bucket(t){return this.buckets[t]||(this.buckets[t]=new Nb)}_opt(t){return t?typeof t=="string"?{mat:t}:{mat:"block",...t}:{mat:"block"}}box(t,e,i,s,r,o,a,l){const c=this._opt(l);t>s&&([t,s]=[s,t]),e>r&&([e,r]=[r,e]),i>o&&([i,o]=[o,i]);const u=this.bucket(c.mat),h=(this.mats[c.mat]||this.mats.block).uv;let[f,p,g]=rr(a);if(this.jitter&&c.jitter!==!1){const v=1+Math.sin(t*12.9898+i*78.233+e*37.719)*43758.5453%1*.06;f*=v,p*=v,g*=v}const _=c.top!=null?rr(c.top):null,m=[t,e,i],d=[s,r,o],w=c.skip||0;for(let v=0;v<6;v++){if(w&1<<v)continue;const L=xc[v],M=u.n,E=L.n[0]*this.cos+L.n[2]*this.sin,I=-L.n[0]*this.sin+L.n[2]*this.cos,C=c.flat?1:Ub[v],S=v===2&&_?_:[f,p,g];for(let D=0;D<4;D++){const Y=L.c[D],k=Y[0]?d[0]:m[0],W=Y[1]?d[1]:m[1],rt=Y[2]?d[2]:m[2];u.pos.push(this.wx(k,rt),this.oy+W,this.wz(k,rt)),u.nor.push(E,L.n[1],I);const tt=[k,W,rt];u.uv.push(tt[L.uv[0]]*h*(L.n[0]<0||L.n[2]>0?1:-1),tt[L.uv[1]]*h),u.col.push(S[0]*C,S[1]*C,S[2]*C)}u.idx.push(M,M+1,M+2,M,M+2,M+3),u.n+=4}(c.solid!=null?c.solid:!Ib.has(c.mat)&&(s-t>=.45||o-i>=.45)&&r-e>=.3)&&this.world&&this.collider(t,e,i,s,r,o)}boxC(t,e,i,s,r,o,a,l){this.box(t-s/2,e,i-o/2,t+s/2,e+r,i+o/2,a,l)}collider(t,e,i,s,r,o){if(!this.world)return;const a=[this.wx(t,i),this.wx(s,i),this.wx(t,o),this.wx(s,o)],l=[this.wz(t,i),this.wz(s,i),this.wz(t,o),this.wz(s,o)];this.world.add({x0:Math.min(...a),x1:Math.max(...a),z0:Math.min(...l),z1:Math.max(...l),y0:this.oy+e,y1:this.oy+r},this.owner)}platform(t){this.world&&this.world.addPlatform(t,this.owner)}rbox(t,e,i,s,r,o,a,l,c,u,h){const f=this._opt(h),p=this.bucket(f.mat),g=(this.mats[f.mat]||this.mats.block).uv,[_,m,d]=rr(u),w=new Ns().setFromEuler(new On(a,l,c,"YXZ")),y=new z,v=new z;for(let L=0;L<6;L++){const M=xc[L],E=p.n;v.set(M.n[0],M.n[1],M.n[2]).applyQuaternion(w);const I=v.x*this.cos+v.z*this.sin,C=-v.x*this.sin+v.z*this.cos,S=f.flat?1:.75+.25*Math.max(0,v.y)+.12*Math.abs(v.x);for(let D=0;D<4;D++){const Y=M.c[D];y.set((Y[0]-.5)*s,(Y[1]-.5)*r,(Y[2]-.5)*o).applyQuaternion(w);const k=t+y.x,W=e+y.y,rt=i+y.z;p.pos.push(this.wx(k,rt),this.oy+W,this.wz(k,rt)),p.nor.push(I,v.y,C);const tt=[(Y[0]-.5)*s,(Y[1]-.5)*r,(Y[2]-.5)*o];p.uv.push(tt[M.uv[0]]*g,tt[M.uv[1]]*g),p.col.push(_*S,m*S,d*S)}p.idx.push(E,E+1,E+2,E,E+2,E+3),p.n+=4}if(f.solid&&this.world){const L=Math.max(s,o)/2;this.collider(t-L,e-r/2,i-L,t+L,e+r/2,i+L)}}beam(t,e,i,s,r,o,a,l,c){const u=s-t,h=r-e,f=o-i,p=Math.hypot(u,h,f);if(p<1e-4)return;const g=this._opt(c),_=this.bucket(g.mat),[m,d,w]=rr(l),y=new z(u/p,h/p,f/p),v=new Ns().setFromUnitVectors(new z(0,1,0),y),L=new z,M=new z,E=(t+s)/2,I=(e+r)/2,C=(i+o)/2,S=g.tz||a;for(let D=0;D<6;D++){if((D===2||D===3)&&g.noCaps)continue;const Y=xc[D],k=_.n;M.set(Y.n[0],Y.n[1],Y.n[2]).applyQuaternion(v);const W=M.x*this.cos+M.z*this.sin,rt=-M.x*this.sin+M.z*this.cos,tt=.78+.22*Math.max(0,M.y)+.1*Math.abs(M.x);for(let lt=0;lt<4;lt++){const $=Y.c[lt];L.set(($[0]-.5)*a,($[1]-.5)*p,($[2]-.5)*S).applyQuaternion(v);const yt=E+L.x,St=I+L.y,Lt=C+L.z;_.pos.push(this.wx(yt,Lt),this.oy+St,this.wz(yt,Lt)),_.nor.push(W,M.y,rt),_.uv.push($[0]*.3,$[1]*p*.3),_.col.push(m*tt,d*tt,w*tt)}_.idx.push(k,k+1,k+2,k,k+2,k+3),_.n+=4}}prism(t,e,i,s,r,o,a,l,c){const u=this._opt(c),h=this.bucket(u.mat),f=(this.mats[u.mat]||this.mats.block).uv,[p,g,_]=rr(l),m=u.rot||0,d=u.rx1!=null?u.rx1:r,w=u.rz1!=null?u.rz1:o,y=[],v=[];for(let M=0;M<a;M++){const E=m+M/a*Math.PI*2;y.push([t+Math.cos(E)*r,e+Math.sin(E)*o]),v.push([t+Math.cos(E)*d,e+Math.sin(E)*w])}let L=0;for(let M=0;M<a;M++){const E=y[M],I=y[(M+1)%a],C=v[M],S=v[(M+1)%a],D=I[0]-E[0],Y=I[1]-E[1],k=Math.hypot(D,Y);let W=Y/k,rt=-D/k;const tt=W*this.cos+rt*this.sin,lt=-W*this.sin+rt*this.cos,$=h.n,yt=.82+.12*Math.abs(W),St=[[E[0],i,E[1]],[I[0],i,I[1]],[S[0],s,S[1]],[C[0],s,C[1]]],Lt=[L,L+k,L+k,L];St.forEach((mt,st)=>{h.pos.push(this.wx(mt[0],mt[2]),this.oy+mt[1],this.wz(mt[0],mt[2])),h.nor.push(tt,0,lt),h.uv.push(Lt[st]*f,mt[1]*f),h.col.push(p*yt,g*yt,_*yt)}),L+=k,h.idx.push($,$+2,$+1,$,$+3,$+2),h.n+=4}if(!u.open){const M=u.top!=null?rr(u.top):[p,g,_];for(const[E,I,C]of[[s,v,1],[i,y,-1]]){if(C<0&&u.noBottom)continue;const S=h.n;h.pos.push(this.wx(t,e),this.oy+E,this.wz(t,e)),h.nor.push(0,C,0),h.uv.push(t*f,e*f),h.col.push(M[0],M[1],M[2]);for(const D of I)h.pos.push(this.wx(D[0],D[1]),this.oy+E,this.wz(D[0],D[1])),h.nor.push(0,C,0),h.uv.push(D[0]*f,D[1]*f),h.col.push(M[0],M[1],M[2]);for(let D=0;D<a;D++){const Y=S+1+D,k=S+1+(D+1)%a;C>0?h.idx.push(S,k,Y):h.idx.push(S,Y,k)}h.n+=a+1}}if(u.solid!==!1&&this.world&&s-i>.3){const M=Math.max(r,o)*(a<=8?.85:.8);this.collider(t-M,i,e-M,t+M,s,e+M)}}gableRoof(t,e,i,s,r,o,a,l={}){const c=Math.max(2,Math.round(o/(l.step||.5))),u=o/c,h=(s-i)/2/c,f=l.over!=null?l.over:.6;for(let p=0;p<c;p++){const g=i-f+h*p+(p?f*(p/c):0),_=s+f-h*p-(p?f*(p/c):0);this.box(t-(l.ox||0),r+p*u,g,e+(l.ox||0),r+(p+1)*u,_,p===0&&l.eave?l.eave:a,{mat:l.mat||"roof",solid:l.solid!=null?l.solid:p===0})}return r+o}hipRoof(t,e,i,s,r,o,a,l={}){const c=Math.max(2,Math.round(o/(l.step||.5))),u=o/c,h=l.over!=null?l.over:.6;for(let f=0;f<c;f++){const p=1-f/c,g=(i+h*2)*p+(l.minW||.6)*(1-p),_=(s+h*2)*p+(l.minD||.6)*(1-p);this.boxC(t,r+f*u,e,g,u,_,f===0&&l.eave?l.eave:a,{mat:l.mat||"roof",solid:f===0})}return r+o}sign(t,e,i,s,r,o=0,a={}){const{mat:l,aspect:c}=Db(t,a),u=a.w||r*c,h=new us(u,r),f=new re(h,l);if(f.position.copy(this.toWorld(e,i,s)),f.rotation.y=this.rot+o,f.userData.sign=!0,this.extras.push(f),a.back){const p=f.clone();p.rotation.y+=Math.PI,this.extras.push(p)}return f}add(t){return this.extras.push(t),t}build(t=!0){const e=new He;for(const i in this.buckets){const s=this.buckets[i];if(!s.n)continue;const r=new Ge;r.setAttribute("position",new Ie(s.pos,3)),r.setAttribute("normal",new Ie(s.nor,3)),r.setAttribute("uv",new Ie(s.uv,2)),r.setAttribute("color",new Ie(s.col,3)),r.setIndex(s.n>65e3?new hl(s.idx,1):new ul(s.idx,1)),r.computeBoundingSphere();const o=new re(r,(this.mats[i]||this.mats.block).mat);o.castShadow=t&&i!=="glass"&&i!=="lamp"&&i!=="neon"&&i!=="glow",o.receiveShadow=t,o.userData.matKey=i,e.add(o)}for(const i of this.extras)e.add(i);return this.buckets={},this.extras=[],e}}function ah(n){n.traverse(t=>{t.geometry&&t.geometry.dispose()}),n.parent&&n.parent.remove(n)}function Fb(){const n=[],t=[];let e=0;const i=(a,l)=>[a,-l];for(const a of ml){const l=a.pts;for(let c=0;c<l.length;c++){const u=l[Math.max(0,c-1)],h=l[Math.min(l.length-1,c+1)];let f=h.x-u.x,p=h.z-u.z;const g=Math.hypot(f,p)||1;f/=g,p/=g;const _=-p,m=f,d=l[c].w/2,w=i(l[c].x+_*d,l[c].z+m*d),y=i(l[c].x-_*d,l[c].z-m*d);n.push(w[0],w[1],0,y[0],y[1],0),c>0&&t.push(e-2,e-1,e,e-1,e+1,e),e+=2}for(const c of l){const u=i(c.x,c.z),h=e;n.push(u[0],u[1],0),e++;const f=16;for(let p=0;p<f;p++){const g=p/f*Math.PI*2;n.push(u[0]+Math.cos(g)*c.w/2,u[1]+Math.sin(g)*c.w/2,0),e++}for(let p=0;p<f;p++)t.push(h,h+1+p,h+1+(p+1)%f)}}const s=new Ge;s.setAttribute("position",new Ie(n,3));const r=s.attributes.position.array;for(let a=0;a<t.length;a+=3){const l=t[a]*3,c=t[a+1]*3,u=t[a+2]*3;if((r[c]-r[l])*(r[u+1]-r[l+1])-(r[c+1]-r[l+1])*(r[u]-r[l])<0){const f=t[a+1];t[a+1]=t[a+2],t[a+2]=f}}s.setIndex(t),s.computeVertexNormals();const o=[];for(let a=0;a<r.length;a+=3)o.push(r[a]/40,r[a+1]/40);return s.setAttribute("uv",new Ie(o,2)),s.computeBoundingSphere(),s}const Ob={name:"XianWater",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uCam:{value:new z},uFogColor:{value:new Ot},uFogDensity:{value:6e-4},uDeep:{value:new Ot(1919578)}},vertexShader:`
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform vec3 color;
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec3 uCam;
    uniform vec3 uFogColor;
    uniform float uFogDensity;
    uniform vec3 uDeep;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vec2 w = vec2(
        sin(vWorld.x * 0.09 + uTime * 1.3) + sin(vWorld.z * 0.13 + uTime * 0.9) + sin((vWorld.x - vWorld.z) * 0.31 + uTime * 2.1) * 0.4,
        cos(vWorld.z * 0.08 - uTime * 1.1) + sin((vWorld.x + vWorld.z) * 0.05 + uTime * 0.7) + cos((vWorld.x + vWorld.z) * 0.27 - uTime * 1.7) * 0.4
      ) * 0.01;
      vec4 uv = vUv;
      uv.xy += w * uv.w;
      vec3 refl = texture2DProj(tDiffuse, uv).rgb;
      vec3 V = normalize(uCam - vWorld);
      float fres = 0.3 + 0.7 * pow(1.0 - clamp(V.y, 0.0, 1.0), 2.5);
      vec3 col = mix(uDeep, refl * color, fres);
      // 方块化像素波光
      vec2 cell = floor(vWorld.xz * 0.5);
      float sp = step(0.985, fract(sin(dot(cell, vec2(12.9898, 78.233)) + floor(uTime * 3.0)) * 43758.5453));
      col += sp * 0.12;
      float d = length(uCam - vWorld);
      float fog = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
      gl_FragColor = vec4(mix(col, uFogColor, fog), 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`};class kb{constructor(t,e=!0){this.scene=t,this.geo=Fb(),this.reflect=e,this.create()}create(){if(this.mesh&&(this.scene.remove(this.mesh),this.mesh.dispose&&this.mesh.dispose()),this.reflect){const t=Math.min(1,1024/window.innerWidth),e=new pl(this.geo,{textureWidth:Math.floor(window.innerWidth*.5*t*(window.devicePixelRatio||1)),textureHeight:Math.floor(window.innerHeight*.5*t*(window.devicePixelRatio||1)),color:12110032,clipBias:.003,shader:Ob});e.material.uniforms.color.value=new Ot(12110032),this.uniforms=e.material.uniforms,this.mesh=e}else{const t=oh(),e=new Ra({color:3107456,specular:8956620,shininess:60,transparent:!0,opacity:.92,map:t.water});this.mesh=new re(this.geo,e),this.uniforms=null}this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=oo,this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,this.scene.add(this.mesh)}setReflect(t){t!==this.reflect&&(this.reflect=t,this.create())}update(t,e,i,s){this.uniforms?(this.uniforms.uTime.value=t,this.uniforms.uCam.value.copy(e.position),i&&(this.uniforms.uFogColor.value.copy(i.color),this.uniforms.uFogDensity.value=i.density),this.uniforms.uDeep.value.setRGB(.05+.04*(1-s),.14*(1-s)+.03,.2*(1-s)+.06)):this.mesh.material.map&&this.mesh.material.map.offset.set(t*.01,t*.007)}}function zb(n){const t=oh(),e=[],i=[],s=[];let r=0;const o=new _n(0,0,0,0,null),a=[],l=[];let c=0;gl.forEach((d,w)=>{const y=d.pts;let v=0;for(let L=1;L<y.length;L++){const M=y[L-1],E=y[L],I=Math.hypot(E.x-M.x,E.z-M.z),C=Math.max(1,Math.ceil(I/16)),S=(E.x-M.x)/I,D=(E.z-M.z)/I,Y=-D,k=S,W=d.w/2;for(let rt=0;rt<C;rt++){const tt=rt/C,lt=(rt+1)/C,$=M.x+(E.x-M.x)*tt,yt=M.z+(E.z-M.z)*tt,St=M.x+(E.x-M.x)*lt,Lt=M.z+(E.z-M.z)*lt,mt=($+St)/2,st=(yt+Lt)/2,U=!!gc(mt,st,2)||!!gc($,yt)||!!gc(St,Lt),ct=U?fr+.03:.04+w*.0015,Tt=.6,Mt=$-S*Tt,ut=yt-D*Tt,K=St+S*Tt,O=Lt+D*Tt;e.push(Mt+Y*W,ct,ut+k*W,Mt-Y*W,ct,ut-k*W,K+Y*W,ct,O+k*W,K-Y*W,ct,O-k*W);const At=I/C,A=v/10,N=(v+At)/10;i.push(0,A,1,A,0,N,1,N),s.push(r,r+2,r+1,r+1,r+2,r+3),r+=4,v+=At;const T=W+2.2,nt=ct-.015;if(a.push(Mt+Y*T,nt,ut+k*T,Mt-Y*T,nt,ut-k*T,K+Y*T,nt,O+k*T,K-Y*T,nt,O-k*T),l.push(c,c+2,c+1,c+1,c+2,c+3),c+=4,U){const q=Math.atan2(S,D),J=At+1.2;o.rbox(mt,fr-.9,st,W*2+3,1.8,J,0,q,0,9079428);for(const ot of[-1,1])o.rbox(mt+Y*(W+1.3)*ot,fr+.55,st+k*(W+1.3)*ot,.35,1.1,J,0,q,0,13158592),o.rbox(mt+Y*(W+1.3)*ot,fr+1.15,st+k*(W+1.3)*ot,.25,.18,J,0,q,0,15786144,{mat:"lamp"});Math.floor(v/16)%3===0&&o.rbox(mt,-4,st,W*2-2,6,3,0,q,0,8026740)}}}});const u=new Ge;u.setAttribute("position",new Ie(e,3)),u.setAttribute("uv",new Ie(i,2)),u.setIndex(s),u.computeVertexNormals();const h=t.road,f=new hs({map:h,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p=new re(u,f);p.receiveShadow=!0,p.frustumCulled=!1;const g=new Ge;g.setAttribute("position",new Ie(a,3)),g.setIndex(l),g.computeVertexNormals();const _=new re(g,new hs({color:11840928,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));_.receiveShadow=!0,_.frustumCulled=!1;const m=new He;return m.add(_,p,o.build(!1)),n.add(m),m}const Pe={wood:7028514,darkWood:4860438,greyBrick:8226176,stone:12104872,granite:10131343,glazedGreen:3111509,leaf:4033082,darkLeaf:2911022,kapok:14103338,trunk:6965808,pave:12367530};function Bb(n,t,e,i,s=1,r=1){const o=Un(r);n.boxC(t,e,i,1.4*s,4*s,1.4*s,Pe.trunk,"wood");for(let a=0;a<4;a++){const l=o()*Math.PI*2,c=2+o()*2.5;n.boxC(t+Math.cos(l)*c*s,e,i+Math.sin(l)*c*s,.25,4.5*s,.25,8019008,{mat:"wood",solid:!1})}n.boxC(t,e+3.5*s,i,8*s,2.5*s,7*s,Pe.darkLeaf,"leaf"),n.boxC(t+.5*s,e+5.5*s,i-.5*s,6*s,1.8*s,6*s,Pe.leaf,"leaf"),n.boxC(t-1*s,e+4*s,i+1,4*s,1.5*s,4*s,4889152,"leaf")}function Hb(n,t,e,i,s=1,r=!0){n.boxC(t,e,i,.7*s,7*s,.7*s,8022616,"wood");for(const[o,a,l,c]of[[0,5,0,5],[0,7,0,3.6],[1.2,6,.6,2.2],[-1.2,6.2,-.6,2.2]])n.boxC(t+o*s,e+a*s,i+l*s,c*s,1*s,c*s,r?Pe.kapok:Pe.leaf,"leaf"),r&&n.boxC(t+o*s,e+a*s+1*s,i+l*s,c*.6*s,.5*s,c*.6*s,15226682,"leaf");n.boxC(t,e+3*s,i,3*s,.4*s,.3*s,8022616,{mat:"wood",solid:!1})}function es(n,t,e,i,s=1,r=Pe.leaf){n.boxC(t,e,i,.5*s,3*s,.5*s,Pe.trunk,"wood"),n.boxC(t,e+2.2*s,i,3.2*s,2.6*s,3.2*s,r,"leaf"),n.boxC(t,e+4.8*s,i,2*s,1*s,2*s,r,"leaf")}function To(n,t,e,i,s=1){n.boxC(t,e,i,.5*s,2*s,.5*s,Pe.trunk,"wood"),n.boxC(t,e+1.5*s,i,3.4*s,1.6*s,3.4*s,2776624,"leaf"),n.boxC(t,e+3.1*s,i,2.4*s,1.6*s,2.4*s,3107380,"leaf"),n.boxC(t,e+4.7*s,i,1.2*s,1.4*s,1.2*s,3437112,"leaf")}function lh(n,t,e,i,s=4.5,r="modern"){r==="old"?(n.boxC(t,e,i,.25,s,.25,2763306,{solid:!1}),n.boxC(t,e+s,i,.7,.8,.7,16769184,"lamp"),n.boxC(t,e+s+.8,i,.9,.2,.9,2763306,{solid:!1})):(n.boxC(t,e,i,.22,s,.22,6711920,{solid:!1}),n.box(t-.1,e+s-.2,i-.1,t+1.2,e+s,i+.1,6711920,{solid:!1}),n.box(t+.6,e+s-.35,i-.2,t+1.3,e+s-.15,i+.2,16773832,"lamp"))}function Mm(n,t,e,i,s=9071162,r=1,o=0){n.boxC(t,e,i,1.2*r,.9*r,1.2*r,Pe.granite);const a=e+.9*r;n.boxC(t-.17*r,a,i,.3*r,.9*r,.3*r,s,{solid:!1}),n.boxC(t+.17*r,a,i,.3*r,.9*r,.3*r,s,{solid:!1}),n.boxC(t,a+.9*r,i,.7*r,.9*r,.38*r,s,{solid:!1}),n.boxC(t,a+1.8*r,i,.5*r,.5*r,.5*r,s,{solid:!1}),n.boxC(t-.45*r,a+.95*r,i,.2*r,.85*r,.25*r,s,{solid:!1}),o===1?n.boxC(t+.45*r,a+1.6*r,i,.2*r,.8*r,.25*r,s,{solid:!1}):n.boxC(t+.45*r,a+.95*r,i,.2*r,.85*r,.25*r,s,{solid:!1})}function bm(n,t,e,i,s=1){n.boxC(t,e,i,1.2,.6,1.4,Pe.granite),n.boxC(t,e+.6,i,.9,.7,1.2,11052186,{solid:!1}),n.boxC(t,e+1.3,i+.3*s,.9,.8,.8,11578530,{solid:!1}),n.boxC(t,e+1.4,i+.75*s,.5,.4,.15,9078396,{solid:!1})}function ad(n,t,e,i,s,r,o=1,a=14210248,l=1.5,c={}){const u=Math.hypot(i-t,s-e),h=Math.max(1,Math.round(u/l));for(let p=0;p<=h;p++){const g=p/h;n.boxC(t+(i-t)*g,r,e+(s-e)*g,.25,o,.25,a,{solid:!1})}const f=.15;n.box(Math.min(t,i)-f,r+o-.15,Math.min(e,s)-f,Math.max(t,i)+f,r+o,Math.max(e,s)+f,a,{solid:!1}),c.solid!==!1&&n.collider(Math.min(t,i)-f,r,Math.min(e,s)-f,Math.max(t,i)+f,r+o+.6,Math.max(e,s)+f)}function xn(n,t,e,i,s,r=0,o=Pe.pave,a=.12){n.box(t,r,e,i,r+a,s,o,{mat:"stone",solid:!1})}function Vb(n,t,e,i=0,s=""){n.box(t-3,0,e-.8,t+3,.15,e+.8,10132122,{solid:!1});for(const r of[-2.8,2.8])n.boxC(t+r,0,e-.6,.15,2.8,.15,3828378,{solid:!1});n.box(t-3,2.8,e-.9,t+3,3,e+.9,3828378,{solid:!1}),n.box(t-2.8,.4,e-.7,t+2.8,2.6,e-.6,10471136,{mat:"glass",solid:!1}),n.box(t-2.2,.5,e-.5,t+2.2,.7,e-.1,9079434,{solid:!1}),n.boxC(t+3.4,0,e,.15,3.2,.15,6710886,{solid:!1}),n.boxC(t+3.4,3.2,e,1.1,.8,.12,2779824,{solid:!1}),s&&n.sign(s,t,3.35,e+.95,.6,0,{bg:"#2a6ab0",fg:"#ffffff",px:48})}function Gb(n,t,e,i){n.box(t-2.5,0,e-3,t+2.5,.2,e+3,9079434,{solid:!1}),n.box(t-2.5,.2,e-3,t-2.2,3.2,e+3,13158600),n.box(t+2.2,.2,e-3,t+2.5,3.2,e+3,13158600),n.box(t-2.5,.2,e-3,t+2.5,3.2,e-2.7,13158600),n.box(t-2.8,3.2,e-3.3,t+2.8,3.6,e+3.3,12067370),n.box(t-1.8,.21,e-2.2,t+1.8,.25,e+2.6,3355443,{solid:!1}),n.boxC(t+3.2,0,e+2.8,.3,4.2,.3,8947848,{solid:!1}),n.boxC(t+3.2,4.2,e+2.8,1.2,1.2,.3,12067370,"neon"),n.sign("M",t+3.2,4.8,e+2.97,.9,0,{bg:"#b8222a",fg:"#ffffff",px:64,glow:!0}),n.sign(i,t,3.4,e+3.32,.4,0,{bg:"#b8222a",fg:"#ffffff",px:48})}function Sm(n,t,e,i,s,r,o=Pe.granite,a=Pe.glazedGreen,l={}){const c=[-i/2,-i/6,i/6,i/2];for(const u of c)n.boxC(t+u,0,e,.9,s,.9,o),n.boxC(t+u,0,e,1.4,1,1.4,o);n.box(t-i/2-.5,s-1.5,e-.4,t+i/2+.5,s-.8,e+.4,o,{solid:!1}),n.box(t-i/6,s-3.2,e-.35,t+i/6,s-1.5,e+.35,o,{solid:!1}),n.hipRoof(t,e,i/3+1.2,1.6,s,1.3,a,{over:.5,eave:a,minW:i/3}),n.hipRoof(t-i/3,e,i/3,1.4,s-.9,1,a,{over:.4,minW:i/4}),n.hipRoof(t+i/3,e,i/3,1.4,s-.9,1,a,{over:.4,minW:i/4}),r&&(n.sign(r,t,s-2.35,e+.4,1.3,0,{bg:"#1e3a5a",fg:"#ffd76a",border:"#d9a628",...l}),n.sign(r,t,s-2.35,e-.4,1.3,Math.PI,{bg:"#1e3a5a",fg:"#ffd76a",border:"#d9a628",...l}))}const Oe=240,Sn=4,xi=24,ld=Ur(34.205,108.975),cd=Ur(34.215,108.89),ud=Ur(34.34,108.95);function Wb(n,t,e){const i=fs(n,t),s=Math.hypot(n-ld.x,t-ld.z),r=fs(n,t);if(s<380&&r==="yanta")return{type:"cbd",dens:.62,hmin:28,hmax:90};if(Math.hypot(n-cd.x,t-cd.z)<420)return{type:"office",dens:.8,hmin:25,hmax:90};if(Math.hypot(n-ud.x,t-ud.z)<390)return{type:"office",dens:.65,hmin:20,hmax:72};const o=e>2600;switch(i){case"yanta":return{type:"resi",dens:.7,hmin:16,hmax:52};case"beilin":return{type:"old",dens:.78,hmin:5,hmax:18};case"lianhu":return{type:"old",dens:.82,hmin:5,hmax:16};case"xincheng":return{type:"resi",dens:.72,hmin:12,hmax:42};case"weiyang":return{type:"resi",dens:.58,hmin:12,hmax:44};case"lintong":return o?{type:"village",dens:.3,hmin:4,hmax:10}:{type:"resi",dens:.45,hmin:10,hmax:30};case"changan":return{type:"village",dens:.28,hmin:4,hmax:12};case"baqiao":return{type:"resi",dens:.45,hmin:10,hmax:38};default:return{type:"resi",dens:.5,hmin:10,hmax:30}}}const ga=[14208960,13220256,14735044,12101776,13680816,11049098,14998732,12626064],hd=[15262940,14209220,13159632,14735560,13945016,15789284,12107976,15260872],_a=[9089224,10405084,8034480,11585752,6982312,8956088];class Xb{constructor(t,e,i){this.scene=t,this.world=e,this.excl=i,this.chunks=new Map,this.queue=[],this.viewR=1250,this.detailR=560,this.shadows=!0}excluded(t,e,i=0){for(const s of this.excl)if(s.r!=null){if((t-s.x)**2+(e-s.z)**2<(s.r+i)**2)return s}else if(Math.abs(t-s.x)<s.hw+i&&Math.abs(e-s.z)<s.hd+i)return s;return null}update(t,e,i=1){const s=Math.ceil(this.viewR/Oe),r=Math.floor(t/Oe),o=Math.floor(e/Oe),a=[];for(let u=-s;u<=s;u++)for(let h=-s;h<=s;h++){const f=r+u,p=o+h,g=(f+.5)*Oe,_=(p+.5)*Oe,m=Math.hypot(g-t,_-e);if(m>this.viewR+Oe*.7)continue;const d=f+","+p,w=m<this.detailR,y=this.chunks.get(d);(!y||w&&!y.detail)&&a.push({cx:f,cz:p,key:d,d:m,detail:w})}a.sort((u,h)=>u.d-h.d);let l=0;const c=performance.now();for(const u of a){if(l>=i&&performance.now()-c>6)break;const h=this.chunks.get(u.key);h&&this.disposeChunk(u.key,h),this.chunks.set(u.key,this.buildChunk(u.cx,u.cz,u.detail)),l++}for(const[u,h]of this.chunks){const f=(h.cx+.5)*Oe,p=(h.cz+.5)*Oe;Math.hypot(f-t,p-e)>this.viewR+Oe*1.5&&this.disposeChunk(u,h)}return a.length-l}disposeChunk(t,e){ah(e.group),this.world.removeOwner("chunk:"+t),this.chunks.delete(t)}buildChunk(t,e,i){const r="chunk:"+(t+","+e),o=t*Oe,a=e*Oe,l=new He;l.add(this.buildTerrain(o,a,r));const c=new _n(0,0,0,0,this.world,r);return this.buildLots(c,o,a,i),i&&this.buildStreets(c,o,a),l.add(c.build(this.shadows)),this.scene.add(l),{cx:t,cz:e,group:l,detail:i}}buildTerrain(t,e,i){const s=Oe/Sn,r=new Int16Array((s+2)*(s+2)),o=new Uint8Array((s+2)*(s+2));let a=!0;for(let u=-1;u<=s;u++)for(let h=-1;h<=s;h++){const f=t+(u+.5)*Sn,p=e+(h+.5)*Sn,g=ai(f,p);let _=g?-3:$e(f,p);const m=(u+1)*(s+2)+(h+1);r[m]=_,o[m]=g?1:0,_!==0&&(a=!1)}const l=new _n(0,0,0,0,null);if(l.jitter=!1,a){const u=La(t+Oe/2,e+Oe/2);l.box(t,-2,e,t+Oe,0,e+Oe,u?6989898:10131084,{mat:u?"grass":"stone",skip:59})}else{const u=(h,f)=>(h+1)*(s+2)+(f+1);for(let h=0;h<s;h++)for(let f=0;f<s;f++){const p=u(h,f),g=r[p],_=t+h*Sn,m=e+f*Sn,d=_+Sn/2,w=m+Sn/2;let y,v,L;if(o[p])y=6974034,v=5921352,L="stone";else if(g>=2){const E=Il(h+t,f+e,5);y=g>110&&E<.4?9079428:E<.1?5212724:6265406,v=8018490,L="grass"}else o[u(h-1,f)]||o[u(h+1,f)]||o[u(h,f-1)]||o[u(h,f+1)]?(y=9077880,L="stone"):La(d,w)?(y=6989898,L="grass"):(y=10131084,L="stone"),v=8025192;l.box(_,g-1,m,_+Sn,g,m+Sn,y,{mat:L,solid:!1,skip:59});const M=[[1,0,0],[-1,0,1],[0,1,4],[0,-1,5]];for(const[E,I,C]of M){const S=r[u(h+E,f+I)];if(S<g){const D=E===1?_+Sn:_,Y=I===1?m+Sn:m;E?l.box(D-.001,S,m,D+.001,g,m+Sn,v,{mat:"block",solid:!1,skip:~(1<<C)&63}):l.box(_,S,Y-.001,_+Sn,g,Y+.001,v,{mat:"block",solid:!1,skip:~(1<<C)&63})}}}}const c=l.build(!1);return c.traverse(u=>{u.isMesh&&(u.receiveShadow=this.shadows,u.castShadow=!1)}),c}buildLots(t,e,i,s){const r=Oe/xi;for(let o=0;o<r;o++)for(let a=0;a<r;a++){const l=e+(o+.5)*xi,c=i+(a+.5)*xi,u=Un(Math.floor(Il(Math.floor(l),Math.floor(c),77)*1e9)),h=Math.hypot(l,c),f=$e(l,c);if(this.excluded(l,c,xi*.5))continue;let p=!1;for(const[_,m]of[[0,0],[-10,-10],[10,-10],[-10,10],[10,10]])ai(l+_,c+m)&&(p=!0);if(p||xr(l,c,xi*.5+1))continue;if(f>=2){if(!s&&u()<.5)continue;const _=2+Math.floor(u()*3);for(let m=0;m<_;m++){const d=l+(u()-.5)*xi*.8,w=c+(u()-.5)*xi*.8,y=$e(d,w);y<1||(u()<.5?To(t,d,y,w,1+u()*.6):es(t,d,y,w,1.1+u()*.6,u()<.5?4028980:4885050))}continue}if(La(l,c)){if(s&&u()<.7){const _=l+(u()-.5)*12,m=c+(u()-.5)*12;u()<.3?Hb(t,_,0,m,.9):Bb(t,_,0,m,.8,Math.floor(u()*99))}continue}const g=Wb(l,c,h);if(u()>g.dens){s&&u()<.5&&(t.box(l-9,0,c-9,l+9,.3,c+9,6989898,{mat:"grass",solid:!1}),es(t,l+(u()-.5)*8,.3,c+(u()-.5)*8,.9));continue}this.building(t,l,c,g,u,s)}}building(t,e,i,s,r,o){const a=10+Math.floor(r()*9),l=10+Math.floor(r()*9),c=e+(r()-.5)*(xi-a-3),u=i+(r()-.5)*(xi-l-3),h=c-a/2,f=c+a/2,p=u-l/2,g=u+l/2;let _=Math.round(s.hmin+Math.pow(r(),1.6)*(s.hmax-s.hmin));if(s.type==="cbd"){const w=_a[Math.floor(r()*_a.length)];t.box(h-1,0,p-1,f+1,6,g+1,12106944,"window");const y=r();if(y<.35){const v=Math.round(_*.7);t.box(h,6,p,f,v,g,w,"curtain"),t.box(h+1.5,v,p+1.5,f-1.5,_,g-1.5,w,"curtain")}else if(y<.6)t.prism(c,u,6,_,a/2,l/2,8,w,{mat:"curtain",rot:Math.PI/8});else{t.box(h,6,p,f,_,g,w,"curtain");for(let v=h+2;v<f;v+=3)t.box(v-.2,6,g,v+.2,_,g+.3,15265008,{solid:!1})}t.box(h+2,_,p+2,f-2,_+2,g-2,13685976),r()<.5&&(t.boxC(c,_+2,u,.3,6,.3,14540253,{solid:!1}),t.boxC(c,_+8,u,.6,.6,.6,16724016,"lamp"));return}if(s.type==="office"){const w=_a[Math.floor(r()*_a.length)];t.box(h,0,p,f,_,g,w,r()<.6?"curtain":"window"),t.box(h-.3,_,p-.3,f+.3,_+1,g+.3,14211288),o&&this.roofStuff(t,c,u,a,l,_+1,r);return}if(s.type==="resi"){const w=hd[Math.floor(r()*hd.length)];if(t.box(h,0,p,f,_,g,w,"window"),o){for(let y=3;y<_-1;y+=3)t.box(h-.3,y,g,f+.3,y+.3,g+.6,15921906,{solid:!1});t.box(h-.2,0,p-.2,f+.2,4,g+.2,9079440,{mat:"window"}),r()<.5&&t.box(h+1,3,g+.2,f-1,3.8,g+.4,[12597547,2779824,2787914,14715424][Math.floor(r()*4)],"neon")}t.box(h-.2,_,p-.2,f+.2,_+.8,g+.2,12104876),o&&this.roofStuff(t,c,u,a,l,_+.8,r);return}if(s.type==="old"){const w=1+Math.floor(r()*3),y=a/w;for(let v=0;v<w;v++){const L=Math.max(4,_+Math.floor((r()-.5)*6)),M=ga[Math.floor(r()*ga.length)],E=h+v*y,I=E+y;t.box(E,0,p,I,L,g,M,r()<.25?"brick":"window"),t.box(E-.1,L,p-.1,I+.1,L+.6,g+.1,10127992),o&&(r()<.4&&t.box(E+.5,L+.6,p+1,I-.5,L+2.2,p+3,8030842,{solid:!1}),r()<.5&&t.box(E+.5,2.8,g,I-.5,3.4,g+1.2,[2779722,9054746,2771594][Math.floor(r()*3)],{solid:!1}))}return}const m=ga[Math.floor(r()*ga.length)],d=Math.max(4,_);t.box(h+2,0,p+2,f-2,d,g-2,m,"window"),r()<.5?t.gableRoof(h+2,f-2,p+2,g-2,d,2.2,r()<.5?9062970:5921376,{over:.4}):t.box(h+1.8,d,p+1.8,f-1.8,d+.6,g-1.8,10127992),o&&r()<.6&&es(t,f-1,0,g-1,.8)}roofStuff(t,e,i,s,r,o,a){if(a()<.6&&t.boxC(e+(a()-.5)*(s-4),o,i+(a()-.5)*(r-4),2,1.4,2,10526880,{solid:!1}),a()<.4){const l=e+(a()-.5)*(s-4),c=i+(a()-.5)*(r-4);for(const[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])t.boxC(l+u,o,c+h,.15,1.6,.15,6710886,{solid:!1});t.prism(l,c,o+1.6,o+3.2,1,1,8,5929632,{solid:!1})}a()<.3&&t.box(e-s/2+1,o,i-1,e-s/2+3,o+1,i+1,13684944,{solid:!1})}buildStreets(t,e,i){for(let r=e+14/2;r<e+Oe;r+=14)for(let o=i+14/2;o<i+Oe;o+=14){const a=xr(r,o,4);if(!a||a.line.ped)continue;const l=a.seg,c=l.bx-l.ax,u=l.bz-l.az,h=Math.hypot(c,u)||1,f=-u/h,p=c/h,g=Math.max(0,Math.min(1,((r-l.ax)*c+(o-l.az)*u)/(h*h))),_=l.ax+c*g,m=l.az+u*g,d=(r-_)*f+(o-m)*p>0?1:-1,w=a.hw-4+2.6,y=_+f*w*d,v=m+p*w*d;if(ai(y,v)||this.excluded(y,v,2)||$e(y,v)>0||xr(y,v,-1.5))continue;const L=Il(Math.floor(y),Math.floor(v),3);L<.18?To(t,y,0,v,.85):L<.62?es(t,y,0,v,.9,L<.4?5147194:12950834):L<.74?es(t,y,0,v,.75,4028980):L<.85&&lh(t,y,0,v,5)}}}const yc=9268047,$b=3945261,wm=4015430,qb=10301222,Em=14065966,Yb=10782567;function Ve(n,t,e,i,s,r,o){n.box(t-i/2-1,0,e-s/2-1,t+i/2+1,.7,e+s/2+1,Pe.granite);for(const a of[t-i/2+1.2,t+i/2-1.2])for(const l of[e-s/2+1.2,e+s/2-1.2])n.boxC(a,.7,l,.65,r-.7,.65,qb);n.box(t-i/2,.7,e-s/2,t+i/2,r,e+s/2,14073226),n.gableRoof(t-i/2-1.5,t+i/2+1.5,e-s/2-1.3,e+s/2+1.3,r,3.2,wm,{over:1.2}),n.boxC(t,1,e+s/2+.1,Math.min(4,i*.3),2.8,.3,Pe.darkWood,{mat:"wood",solid:!1}),o&&n.sign(o,t,r-1,e+s/2+.2,.7,0,{bg:"#5f251f",fg:"#f2d48a"})}function Tm(n,t=7,e=1){n.box(-11*e,0,-11*e,11*e,1.2,11*e,Pe.granite);let i=1.2;for(let s=0;s<t;s++){const r=(9.2-s*.72)*e,o=(4.2-Math.min(s,4)*.16)*e;n.box(-r,i,-r,r,i+o,r,Yb),n.box(-r-.7,i+o,-r-.7,r+.7,i+o+.45,r+.7,$b,{solid:!1}),n.boxC(0,i+1.15,r+.08,1.7,2,.16,3090725,{mat:"wood",solid:!1});for(const a of[-r*.55,r*.55])n.boxC(a,i+o*.55,r+.1,.8,1.2,.12,3419175,{mat:"wood",solid:!1});i+=o+.55}return n.prism(0,0,i,i+4*e,1.1*e,1.1*e,8,Em,{rx1:.2,rz1:.2,mat:"metal",solid:!1}),i}function jb(n,t){xn(n,-32,-30,32,36,0);const e=Tm(n,7,1);n.sign("大雁塔",0,3,11.25,1.1,0,{bg:"#4a3024",fg:"#f2d48a"});for(const i of[-25,25])for(let s=-24;s<=28;s+=13)es(n,i,.15,s,1.1);t.platform({x0:-7,z0:-7,x1:7,z1:7,y:e+.4}),t.interact({x:0,z:14,r:5,label:"登大雁塔",type:"elevator"}),t.interact({x:0,y:e+.6,z:5,r:8,label:"大雁塔顶层",type:"elevatorTop"}),t.interact({x:10,z:13,r:5,label:"了解大雁塔",type:"info",text:"大雁塔始建于唐永徽三年，是玄奘法师为保存经丝绸之路带回长安的佛经与佛像而主持修建的唐代楼阁式砖塔。"}),t.crowd(0,20,24,10,14)}function Kb(n){Tm(n,7,.72)}function Zb(n,t){xn(n,-28,-28,28,28),n.box(-13,0,-13,13,9,13,10128760),n.box(-15,9,-15,15,11,15,Pe.granite),Ve(n,0,0,24,24,21,"钟楼"),n.gableRoof(-15,15,-15,15,21,5,3232586,{over:1.2}),n.boxC(0,26,0,1,2.6,1,Em,{solid:!1});for(const[e,i]of[[-20,-20],[20,-20],[-20,20],[20,20]])lh(n,e,0,i,6,"old");t.interact({x:0,z:17,r:7,label:"西安钟楼",type:"culture",id:"changancenter"}),t.crowd(0,18,22,10,14)}function Jb(n,t){xn(n,-28,-22,28,25),n.box(-16,0,-10,16,10,10,10721154),n.box(-18,10,-12,18,12,12,Pe.granite),Ve(n,0,0,30,18,21,"鼓楼"),n.gableRoof(-18,18,-13,13,21,4.5,3232586,{over:1});for(let e=-12;e<=12;e+=4)n.prism(e,12,12.2,14.4,.8,.5,8,11022888,{solid:!1});t.interact({x:0,z:15,r:6,label:"聆听暮鼓",type:"culture",id:"drum"})}function Qb(n,t){xn(n,-85,-22,85,30),n.box(-90,0,-6,90,12,6,yc),n.box(-92,12,-8,92,14,8,Pe.greyBrick);for(let e=-88;e<=88;e+=5)n.box(e,14,-8,e+2.5,16,-6,yc,{solid:!1}),n.box(e,14,6,e+2.5,16,8,yc,{solid:!1});n.box(-7,0,-7,7,8,7,2368548,{solid:!1}),Ve(n,0,0,30,18,25,"永宁门"),n.gableRoof(-18,18,-13,13,25,5,wm,{over:1}),t.platform({x0:-88,z0:-7,x1:88,z1:7,y:14.2}),t.interact({x:20,y:14.4,z:0,r:8,label:"骑行明城墙",type:"view",id:"wallride"}),t.interact({x:0,z:20,r:7,label:"永宁门入城仪式",type:"culture",id:"citywall"})}function tS(n,t){xn(n,-55,-42,55,45),n.box(-50,0,-35,50,19,25,12893872,{mat:"window"}),n.gableRoof(-52,52,-38,28,19,8,6717579,{over:1}),n.sign("秦始皇兵马俑博物馆",0,14,25.2,1.1,0,{bg:"#3d352e",fg:"#e9d7aa"});for(let e=0;e<6;e++)for(let i=0;i<14;i++)Mm(n,-39+i*6,.2,-27+e*7,9138781,.72,i%5===0?1:0);for(const e of[-46,46])bm(n,e,.2,31,1);t.interact({x:0,z:31,r:8,label:"走进一号坑",type:"culture",id:"terracotta"}),t.interact({x:32,z:30,r:4,label:"秦俑文创店",type:"shop",shop:"terracotta"}),t.crowd(0,32,35,8,15)}function eS(n,t){xn(n,-28,-80,28,80,0,12164988);for(let e=-70;e<=70;e+=14){for(const i of[-20,20])lh(n,i,0,e,8,"old"),n.boxC(i,7.8,e,1.4,.8,1.4,16756800,"neon");e%28===0&&Mm(n,0,0,e,9069624,1.5,1)}Ve(n,-42,-45,18,16,12,"长安十二时辰"),Ve(n,42,10,18,16,12,"唐风市集"),n.sign("大唐不夜城",0,7,-76,1.4,0,{bg:"#7b1f27",fg:"#ffd36a",glow:!0}),t.interact({x:0,z:8,r:7,label:"观看盛唐巡游",type:"culture",id:"tangdance"}),t.interact({x:35,z:10,r:4,label:"长安食肆",type:"shop",shop:"nightmarket"}),t.crowd(0,0,24,70,26)}function nS(n,t,e="陕西历史博物馆"){xn(n,-40,-32,40,36),Ve(n,0,-2,58,34,14,e),Ve(n,-28,7,18,24,10),Ve(n,28,7,18,24,10),t.interact({x:0,z:23,r:7,label:"参观唐代壁画珍品",type:"culture",id:"tangart"})}function iS(n,t){xn(n,-60,-65,60,70),Ve(n,0,-24,72,42,28,"含元殿"),Ve(n,-35,28,24,22,15,"宣政殿"),Ve(n,35,28,24,22,15,"紫宸殿");for(const e of[-50,50])for(let i=-45;i<=55;i+=18)To(n,e,0,i,1.2);t.interact({x:0,z:5,r:8,label:"大明宫国家遗址公园",type:"culture",id:"tangpalace"})}function sS(n,t){xn(n,-45,-35,45,45),Ve(n,0,-12,36,24,15,"华清宫"),Ve(n,-28,16,18,16,11,"海棠汤"),Ve(n,28,16,18,16,11,"莲花汤"),n.prism(0,24,.2,1.1,11,7,16,7252149,{solid:!1});for(const e of[-38,-20,20,38])es(n,e,0,34,1.2);t.interact({x:0,z:25,r:7,label:"聆听华清宫故事",type:"culture",id:"huaqing"})}function rS(n,t){Sm(n,0,7,16,9,"骊山",Pe.granite,3232586),n.sign("骊山索道",18,5,0,.7,0,{bg:"#5e3b2b",fg:"#fff3c4"}),n.box(13,0,-6,23,5,6,12429703),t.interact({x:18,z:2,r:4,label:"乘坐骊山索道上山",type:"cable",dir:1})}function oS(n,t){n.box(-12,0,-12,12,1,12,Pe.granite),Ve(n,0,0,15,13,10,"晚照亭");for(const[e,i]of[[-18,-10],[18,-6],[-16,16],[15,17]])To(n,e,0,i,1.4);t.interact({x:0,z:12,r:7,label:"骊山晚照",type:"view",id:"peak"}),t.interact({x:9,z:-4,r:4,label:"乘坐骊山索道下山",type:"cable",dir:-1})}function aS(n,t){xn(n,-34,-20,34,28),Ve(n,-20,-5,18,14,9,"曲江亭");for(const e of[-30,-15,15,30])es(n,e,0,20,1.2);t.interact({x:0,z:18,r:8,label:"泛舟曲江池",type:"view"})}function lS(n,t,e="nanhu"){n.box(-10,0,-6,10,5,0,14141610),n.sign(e==="nanhu"?"南湖码头":"曲江池码头",0,4,.1,.75,0,{bg:"#4c3526",fg:"#f6dfaa"}),n.box(-3,.1,0,3,.4,18,Pe.wood,{mat:"wood",solid:!1}),ad(n,-3,0,-3,18,.4,1,7037528,2),ad(n,3,0,3,18,.4,1,7037528,2),t.interact({x:0,z:15,r:5,label:"登船：曲江夜游",type:"cruise",pier:e})}function cS(n,t){xn(n,-35,-35,35,40),Sm(n,0,7,18,10,"化觉巷",Pe.stone,3232586),Ve(n,0,-18,34,22,13,"清真大寺");for(const e of[-25,25])for(const i of[-20,5,28])To(n,e,0,i,1.1);t.interact({x:0,z:8,r:7,label:"清真大寺",type:"culture",id:"silkroad"})}function uS(n,t){xn(n,-52,-18,52,20,0,11112300);const e=["泡馍馆","肉夹馍","凉皮","镜糕","酸梅汤","柿子饼"];for(let i=0;i<e.length;i++){const s=-44+i*17.5;n.box(s-7,0,-12,s+7,8,13545603),n.sign(e[i],s,5.5,-12.1,.65,Math.PI,{bg:"#7b2c25",fg:"#ffd98c"})}t.interact({x:-35,z:-8,r:4,label:"老孙家泡馍",type:"shop",shop:"paomo"}),t.interact({x:0,z:-8,r:4,label:"秦味小吃",type:"shop",shop:"snacks"}),t.interact({x:35,z:-8,r:4,label:"长安手信",type:"shop",shop:"souvenir"}),t.crowd(0,4,45,10,22)}function hS(n,t,e,i){xn(n,-26,-24,26,30),Ve(n,0,0,38,26,14,e);for(const s of[-20,20])bm(n,s,.2,18,1);t.interact({x:0,z:20,r:7,label:e,type:i?"culture":"view",id:i})}function fS(n,t,e){xn(n,-38,-28,38,32),n.box(-34,0,-20,34,15,18,10128504),n.box(-28,15,-14,28,20,12,13087887),n.box(-24,4,18,24,12,20,8364203,{mat:"window"}),n.sign(e,0,11,20.1,.9,0,{bg:"#43372d",fg:"#f3dfae"}),t.interact({x:0,z:25,r:7,label:e,type:"view"})}const ji=(n,t)=>(e,i)=>hS(e,i,n,t),fd=n=>(t,e)=>fS(t,e,n),dd=n=>(t,e)=>lS(t,e,n),dS=[{id:"huacheng",name:"西安钟楼",alias:"古城中心",district:"beilin",grade:"S",lat:34.2619,lon:108.9467,rect:[32,32],focusY:25,build:Zb,desc:"西安钟楼位于明城墙内东西南北四条大街交汇处，始建于明洪武年间，是西安城市中轴与古城天际线的重要标志。"},{id:"drumtower",name:"西安鼓楼",alias:"晨钟暮鼓",district:"lianhu",grade:"S",lat:34.2612,lon:108.9432,rect:[34,28],focusY:24,build:Jb,desc:"鼓楼始建于明洪武十三年，与钟楼东西相望。高台重檐建筑曾以击鼓报时，“晨钟暮鼓”延续着古都生活节律。"},{id:"beijingroad",name:"西安城墙·永宁门",alias:"南门",district:"beilin",grade:"S",lat:34.2378,lon:108.9468,rect:[95,34],focusY:24,photoR:520,build:Qb,desc:"西安城墙是中国现存规模最大、保存最完整的古代城垣之一。永宁门是南城门，可登城步行或骑行，俯瞰城内棋盘路网。"},{id:"beilinmuseum",name:"西安碑林博物馆",alias:"石质书库",district:"beilin",grade:"A",lat:34.2506,lon:108.9525,rect:[30,34],focusY:14,build:ji("西安碑林博物馆","calligraphy"),desc:"碑林以收藏、研究和陈列历代碑刻、墓志与石刻艺术著称，被誉为“石质书库”和“书法艺术故乡”。"},{id:"shuyuanmen",name:"书院门文化街",district:"beilin",grade:"B",lat:34.2495,lon:108.9489,rect:[42,20],focusY:8,build:ji("书院门","calligraphy"),desc:"书院门因关中书院得名，街巷聚集文房四宝、碑帖拓片、印章和书画，是感受西安书法文化的经典去处。"},{id:"muslimquarter",name:"回民街",alias:"北院门",district:"lianhu",grade:"A",lat:34.2652,lon:108.9407,rect:[58,26],focusY:8,build:uS,desc:"回民街泛指钟鼓楼西北侧多条历史街巷，清真饮食与市井生活交织，泡馍、肉夹馍、凉皮、镜糕香气一路相随。"},{id:"greatmosque",name:"西安化觉巷清真大寺",district:"lianhu",grade:"A",lat:34.2648,lon:108.9373,rect:[40,42],focusY:14,build:cS,desc:"化觉巷清真大寺将中国传统院落布局、木构建筑与伊斯兰文化融为一体，是丝绸之路多元文明交流的见证。"},{id:"cantontower",name:"大雁塔",alias:"慈恩寺塔",district:"yanta",grade:"S",lat:34.2173,lon:108.9641,rect:[40,42],focusY:34,photoR:900,lod:Kb,lodAlways:!0,build:jb,desc:"大雁塔始建于唐永徽三年，由玄奘主持修建，用于保存经丝绸之路带回长安的佛经与佛像，是盛唐长安的文化坐标。",tip:"登塔远眺长安中轴，夜晚向南漫步大唐不夜城。"},{id:"shamian",name:"大唐不夜城",alias:"盛唐天街",district:"yanta",grade:"S",lat:34.2048,lon:108.9643,rect:[40,90],focusY:12,photoR:650,build:eS,desc:"大唐不夜城以大雁塔为北端，沿唐文化主题步行街展开。夜幕下的灯组、雕塑、演艺与仿唐建筑共同营造盛唐长安意象。"},{id:"shaanximuseum",name:"陕西历史博物馆",alias:"古都明珠",district:"yanta",grade:"S",lat:34.2252,lon:108.9552,rect:[48,40],focusY:16,build:nS,desc:"陕西历史博物馆以周秦汉唐文物见长，建筑取唐风中央殿堂、四隅崇楼格局，系统展示陕西悠久而厚重的历史。"},{id:"tangparadise",name:"大唐芙蓉园",district:"yanta",grade:"A",lat:34.207,lon:108.9765,rect:[44,42],focusY:18,build:ji("大唐芙蓉园·紫云楼","tangdance"),desc:"大唐芙蓉园以盛唐皇家园林为灵感，楼阁、水景与夜间演艺相映成趣，是体验唐风审美的主题文化景区。"},{id:"qujiang",name:"曲江池遗址公园",alias:"曲江流饮",district:"yanta",grade:"A",lat:34.1985,lon:108.9815,rect:[38,30],focusY:8,build:aS,desc:"曲江池自秦汉以来就是长安重要风景地，唐代尤为兴盛。今日园区以水岸、亭台与绿地再现“曲江流饮”的城市记忆。"},{id:"nanhu_pier",name:"南湖码头",hidden:!0,district:"yanta",grade:"B",lat:34.203,lon:108.976,rect:[14,12],build:dd("nanhu")},{id:"qujiang_pier",name:"曲江池码头",hidden:!0,district:"yanta",grade:"B",lat:34.197,lon:108.984,rect:[14,12],build:dd("qujiang")},{id:"smallpagoda",name:"小雁塔",alias:"荐福寺塔",district:"beilin",grade:"A",lat:34.2447,lon:108.9392,rect:[34,34],focusY:28,build:ji("小雁塔","silkroad"),desc:"小雁塔建于唐景龙年间，塔形秀丽，历经地震仍保存至今。“雁塔晨钟”曾列关中八景。"},{id:"damingpalace",name:"大明宫国家遗址公园",alias:"千宫之宫",district:"weiyang",grade:"S",lat:34.2955,lon:108.965,rect:[72,78],focusY:30,photoR:650,build:iS,desc:"大明宫是唐代帝国的重要宫城，含元殿、宣政殿、紫宸殿构成宏阔中轴。遗址公园以考古保护和展示讲述盛唐国家礼制。"},{id:"chenclan",name:"秦始皇帝陵博物院·兵马俑",alias:"世界第八大奇迹",district:"lintong",grade:"S",lat:34.3853,lon:109.2784,rect:[64,54],focusY:22,photoR:750,build:tS,desc:"兵马俑坑是秦始皇陵大型陪葬坑，陶俑、陶马按军阵排列，真实呈现秦代军队的组织、装备与雕塑艺术。"},{id:"qinshihuang",name:"秦始皇陵",district:"lintong",grade:"A",lat:34.3817,lon:109.2538,rect:[40,38],focusY:16,build:ji("秦始皇陵","qin"),desc:"秦始皇陵是中国历史上第一位皇帝嬴政的陵墓，陵园布局宏大，兵马俑坑只是其庞大地下世界的一部分。"},{id:"huaqing",name:"华清宫",alias:"华清池",district:"lintong",grade:"S",lat:34.3652,lon:109.2143,rect:[52,46],focusY:18,build:sS,desc:"华清宫依骊山而建，以温泉资源和唐代皇家离宫闻名。宫苑、汤池与近现代历史遗迹共同构成层次丰富的叙事。"},{id:"baiyungate",name:"骊山索道下站",district:"lintong",grade:"B",lat:34.355,lon:109.207,rect:[30,20],focusY:10,foundation:!0,build:rS,desc:"骊山是秦岭北侧支脉，山势秀美，与华清宫、秦始皇陵共同构成临潼最具代表性的历史山水。"},{id:"baiyun",name:"骊山·晚照亭",alias:"骊山晚照",district:"lintong",grade:"A",lat:34.346,lon:109.218,rect:[24,24],focusY:12,foundation:!0,build:oS,desc:"登骊山可俯瞰华清宫与渭河平原，夕阳为山体镀上暖色，“骊山晚照”是关中著名景观。"},{id:"banpo",name:"西安半坡博物馆",district:"baqiao",grade:"A",lat:34.2762,lon:109.048,rect:[42,34],focusY:18,build:fd("西安半坡博物馆"),desc:"半坡遗址是新石器时代仰韶文化聚落遗址，展示半地穴式房屋、陶器、生产工具与早期聚落生活。"},{id:"silkroad",name:"大唐西市",alias:"丝路起点意象",district:"lianhu",grade:"A",lat:34.252,lon:108.905,rect:[46,34],focusY:14,build:ji("大唐西市","silkroad"),desc:"唐长安西市是重要国际贸易市场，商旅、货物与文化在此汇聚。今日大唐西市延续丝路主题展示与城市商业。"},{id:"chimelong",name:"秦岭野生动物园",district:"changan",grade:"A",lat:34.067,lon:108.866,rect:[58,44],focusY:10,foundation:!0,build:ji("秦岭野生动物园","qinling"),desc:"秦岭野生动物园位于秦岭北麓，以山地生态为背景，展示大熊猫、金丝猴、羚牛等多种动物。"},{id:"cuihuashan",name:"翠华山",alias:"终南独秀",district:"changan",grade:"A",lat:33.998,lon:109.002,rect:[28,24],focusY:14,foundation:!0,build:ji("翠华山","qinling"),desc:"翠华山位于秦岭北麓，以山崩地貌、天池与峰林景观著称，是西安近郊重要的自然体验目的地。"},{id:"wetland",name:"浐灞国家湿地公园",district:"baqiao",grade:"B",lat:34.34,lon:109.06,rect:[54,44],focusY:8,build:fd("浐灞生态展馆"),desc:"浐灞水系是西安东部重要生态廊道，湿地、公园与城市公共空间共同展现古都面向自然与未来的一面。"}],pS={S:"重点还原",A:"主要景点",B:"区域氛围"};class mS{constructor(t,e,i){this.scene=t,this.world=e,this.game=i,this.items=dS.map(s=>{const r=Ur(s.lat,s.lon);let o=r.x,a=r.z;if(s.snap){const[u,h]={south:[0,1],north:[0,-1],east:[1,0],west:[-1,0]}[s.snap];for(let f=0;f<1500;f++)if(ai(o+u*f,a+h*f)){const p=f-(s.snapOff||0);o+=u*p,a+=h*p;break}}const l=s.foundation?$e(o,a):Math.max(0,$e(o,a)),c=s.rot||0;return{def:s,x:o,y:l,z:a,rot:c,loaded:!1,group:null,lodGroup:null,updates:[],dist:1/0}}),this.byId={};for(const s of this.items)this.byId[s.def.id]=s;this.loadQueue=[]}exclusions(){return this.items.filter(t=>t.def.rect).map(t=>({x:t.x,z:t.z,hw:t.def.rect[0]+4,hd:t.def.rect[1]+4}))}nearest(t,e,i){let s=null,r=i;for(const o of this.items){if(o.def.hidden)continue;const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,s=o)}return s}makeCtx(t,e,i){const s="lm:"+t.def.id,r=this.game,o=this;return{interact(a){const l=e.wx(a.x,a.z),c=e.wz(a.x,a.z);r.interact.add({...a,x:l,z:c,y:e.oy+(a.y||0),high:a.y!=null,landmark:t.def.id},s)},add(a){i.add(a)},onUpdate(a){t.updates.push(a)},landOverride(a,l,c,u){const h=[e.wx(a,l),e.wz(a,l)],f=[e.wx(c,u),e.wz(c,u)];Tb(h[0],h[1],f[0],f[1])},platform(a){const l=[e.wx(a.x0,a.z0),e.wz(a.x0,a.z0)],c=[e.wx(a.x1,a.z1),e.wz(a.x1,a.z1)];o.world.addPlatform({type:"rect",x0:Math.min(l[0],c[0]),z0:Math.min(l[1],c[1]),x1:Math.max(l[0],c[0]),z1:Math.max(l[1],c[1]),y:e.oy+a.y},s)},crowd(a,l,c,u,h){h==null&&u!=null&&(h=u,u=c),r.npcs.addCrowd({x:e.wx(a,l),z:e.wz(a,l),rx:c,rz:u||c,count:h||6,owner:s})},height(a,l){return Math.max(0,$e(e.wx(a,l),e.wz(a,l))-e.oy)}}}load(t){const e="lm:"+t.def.id,i=new _n(t.x,t.y,t.z,t.rot,this.world,e),s=new He;s.position.set(t.x,t.y,t.z),s.rotation.y=t.rot;const r=this.makeCtx(t,i,s);t.updates=[],t.def.build(i,r);const o=i.build(this.game.shadows);o.add(s),this.scene.add(o),t.group=o,t.loaded=!0,t.lodGroup&&(t.lodGroup.visible=!1)}unload(t){const e="lm:"+t.def.id;ah(t.group),t.group=null,t.loaded=!1,t.updates=[],this.world.removeOwner(e),this.game.interact.removeOwner(e),this.game.npcs.removeCrowds(e),t.lodGroup&&(t.lodGroup.visible=!0)}buildLODs(){for(const t of this.items){if(!t.def.lod)continue;const e=new _n(t.x,t.y,t.z,t.rot,null);t.def.lod(e),t.lodGroup=e.build(!1),this.scene.add(t.lodGroup)}}update(t,e,i,s,r,o=1){let a=0;const l=this.items.slice().sort((c,u)=>Math.hypot(c.x-i,c.z-s)-Math.hypot(u.x-i,u.z-s));for(const c of l){const u=Math.hypot(c.x-i,c.z-s);c.dist=u;const h=c.def.loadR||750;if(!c.loaded&&u<h&&a<o?(this.load(c),a++):c.loaded&&u>h+250&&this.unload(c),c.loaded)for(const f of c.updates)f(t,e,r)}return a}pending(t,e){return this.items.filter(i=>!i.loaded&&Math.hypot(i.x-t,i.z-e)<(i.def.loadR||750)).length}setVisibleAll(t){for(const e of this.items)e.group&&(e.group.visible=t)}toWorld(t,e,i,s){const r=this.byId[t],o=Math.cos(r.rot),a=Math.sin(r.rot);return new z(r.x+e*o+s*a,r.y+i,r.z-e*a+s*o)}}const Mc=new Map;function gS(n,t){const e=n+t;if(!Mc.has(e)){const i=mb(n,t*7919+n.length*131);Mc.set(e,{canvas:ih(i.params),ap:i})}return Mc.get(e)}function _S(n){const t=document.createElement("canvas"),e=t.getContext("2d");e.font='bold 28px "Microsoft YaHei",sans-serif';const i=Math.min(520,e.measureText(n).width+30);t.width=i,t.height=50,e.fillStyle="rgba(255,255,255,0.92)",e.fillRect(0,0,i,42),e.fillRect(i/2-6,42,12,8),e.strokeStyle="#333",e.lineWidth=3,e.strokeRect(1.5,1.5,i-3,39),e.font='bold 26px "Microsoft YaHei",sans-serif',e.fillStyle="#222",e.textBaseline="middle",e.fillText(n.length>18?n.slice(0,17)+"…":n,15,22);const s=new dl(t);s.colorSpace=Xe;const r=new ab(new sm({map:s,depthTest:!0,transparent:!0}));return r.scale.set(i/50*.55,.55,1),r}class vS{constructor(t,e,i){this.scene=t,this.world=e,this.game=i,this.list=[],this.max=55,this.crowds=[],this.rng=Un(12345),this.spawnTimer=0,this._tmp=[],this.uid=0}addCrowd(t){this.crowds.push(t)}removeCrowds(t){this.crowds=this.crowds.filter(e=>e.owner!==t)}groundAt(t,e,i){let s=$e(t,e);vm(t,e)&&(s=Math.max(s,fr));const r=this.world.supportAt(t,e,i+1.05,.25);return Math.max(s,r)}free(t,e,i){if(!xm(t,e)||$e(t,e)>i+1.05)return!1;const s=this.world.query(t-.3,e-.3,t+.3,e+.3,this._tmp);for(const r of s)if(r.y1>i+1.05&&r.y0<i+1.7)return!1;return!0}chooseType(t,e,i){const s=fs(t,e),r=this.game.sky.night>.5,o={office:3,student:2,elder:2,tourist:3,kid:1,local:3};(s==="yanta"||s==="weiyang")&&(o.office=6,o.elder=1),(s==="lianhu"||s==="beilin")&&(o.elder=4,o.local=4),i&&(o.tourist+=4),r&&(o.kid=.2,o.elder=.6,o.student*=.5);const a=this.game.sky.hour;a>7&&a<9.5&&(o.office+=3);let l=0;for(const u in o)l+=o[u];let c=this.rng()*l;for(const u in o)if(c-=o[u],c<=0)return u;return"local"}spawnOne(t,e){const i=this.rng;let s,r,o=null;const a=this.crowds.filter(m=>Math.hypot(m.x-t,m.z-e)<170+Math.max(m.rx,m.rz));if(a.length&&i()<.7)o=De(i,a),s=o.x+(i()*2-1)*o.rx,r=o.z+(i()*2-1)*o.rz;else{const m=i()*Math.PI*2,d=30+i()*110;s=t+Math.cos(m)*d,r=e+Math.sin(m)*d;const w=xr(s,r,8);if(w&&!w.line.ped){const y=w.seg,v=y.bx-y.ax,L=y.bz-y.az,M=Math.hypot(v,L)||1,E=-L/M,I=v/M,C=on(((s-y.ax)*v+(r-y.az)*L)/(M*M),0,1),S=i()<.5?1:-1;s=y.ax+v*C+E*(w.hw-8+1.2)*S,r=y.az+L*C+I*(w.hw-8+1.2)*S}}const l=Math.hypot(s-t,r-e);if(l<18||l>190)return;const c=this.groundAt(s,r,400);if(c>60&&!o||!this.free(s,r,c)||ai(s,r))return;const u=this.chooseType(s,r,!!o),h=Math.floor(i()*6),f=gS(u,h),p=new sh(f.canvas,{accessories:f.ap.accessories,scale:f.ap.scale});p.group.position.set(s,c,r),p.showAccessory("camera",u==="tourist"),this.scene.add(p.group);const g=De(i,e_),_={id:++this.uid,type:u,name:u==="tourist"?"游客"+g+De(i,["先生","小姐","同学"]):g+De(i,n_[u]||["师傅"]),typeName:t_[u].name,ch:p,x:s,y:c,z:r,yaw:i()*Math.PI*2,state:"idle",timer:1+i()*3,target:null,speed:u==="kid"?2.6:u==="elder"?1.2:1.8+i()*.6,crowd:o,talked:!1,bubble:null,bubbleT:0};this.list.push(_)}despawn(t){this.scene.remove(t.ch.group),t.bubble&&t.ch.group.remove(t.bubble),t.ch.dispose();const e=this.list.indexOf(t);e>=0&&this.list.splice(e,1)}clear(){for(const t of this.list.slice())this.despawn(t)}pickState(t){const e=this.rng,i=this.game.sky.weather,s=e();if(i==="typhoon"){t.state="walk",t.target=this.randomTarget(t,40);return}if(s<.5)t.state="walk",t.target=this.randomTarget(t,t.crowd?0:35),t.timer=20;else if(s<.65&&i!=="rain"){const r=this.list.find(o=>o!==t&&o.state!=="chat"&&Math.hypot(o.x-t.x,o.z-t.z)<6);r?(t.state=r.state="chat",t.partner=r,r.partner=t,t.timer=r.timer=6+e()*8,this.showBubble(t,De(e,Pl[t.type]))):(t.state="idle",t.timer=2+e()*3)}else if(s<.78&&(t.type==="tourist"||e()<.3)){t.state="photo",t.timer=3+e()*3;const r=this.game.landmarks.nearest(t.x,t.z,400);r&&(t.yaw=Math.atan2(r.x-t.x,r.z-t.z))}else if(s<.86){const r=this.game.interact.nearestOfType(t.x,t.z,"shop",50);r?(t.state="walk",t.target={x:r.x+(e()-.5)*3,z:r.z+(e()-.5)*3},t.after="shop",t.timer=25):(t.state="idle",t.timer=2)}else if(s<.93){const r=this.game.transport.nearestStop(t.x,t.z,70);r?(t.state="walk",t.target={x:r.wx+(e()-.5)*4,z:r.wz+(e()-.5)*2},t.after="bus",t.busStop=r,t.timer=40):(t.state=t.type==="office"?"phone":"idle",t.timer=3+e()*4)}else t.state=t.type==="office"||t.type==="student"?"phone":"idle",t.timer=3+e()*5}randomTarget(t,e){const i=this.rng;if(t.crowd&&i()<.8){const o=t.crowd;return{x:o.x+(i()*2-1)*o.rx,z:o.z+(i()*2-1)*o.rz}}const s=t.yaw+(i()-.5)*1.5,r=10+i()*(e||30);return{x:t.x+Math.sin(s)*r,z:t.z+Math.cos(s)*r}}showBubble(t,e){t.bubble&&t.ch.group.remove(t.bubble),t.bubble=_S(e),t.bubble.position.y=2.5*t.ch.scale+.3,t.ch.group.add(t.bubble),t.bubbleT=4}talkLine(t){const e=this.rng,i=this.game.landmarks.nearest(t.x,t.z,200),s=this.game.sky.weather,r=[...Pl[t.type]];return i&&Dl[i.def.id]&&r.push(...Dl[i.def.id],...Dl[i.def.id]),(s==="rain"||s==="typhoon")&&r.push(...Ll[s],...Ll[s]),this.game.sky.night>.5&&r.push(...Ll.night),De(e,r)}update(t,e){const i=e.pos.x,s=e.pos.z,r=this.game.sky.weather;let o=this.max;if(r==="rain"&&(o=Math.floor(o*.6)),r==="typhoon"&&(o=Math.floor(o*.15)),this.game.sky.night>.7&&(o=Math.floor(o*.75)),e.pos.y>60&&(o=Math.floor(o*.3)),this.spawnTimer-=t,this.list.length<o&&this.spawnTimer<=0){for(let l=0;l<3&&this.list.length<o;l++)this.spawnOne(i,s);this.spawnTimer=.15}const a=r==="rain"||r==="typhoon";for(const l of this.list.slice()){const c=Math.hypot(l.x-i,l.z-s);if(c>230||this.list.length>o+5&&c>60){this.despawn(l);continue}if(l.talkingToPlayer){l.yaw=Math.atan2(i-l.x,s-l.z),l.ch.setAnim("talk"),l.ch.update(t,0),this.sync(l);continue}l.timer-=t;let u=0;if(l.state==="walk"&&l.target){const f=l.target.x-l.x,p=l.target.z-l.z,g=Math.hypot(f,p),_=l.speed*(a?1.5:1)*(r==="typhoon"?1.6:1);if(g<.6||l.timer<0)l.target=null,l.after==="shop"?(l.state="shop",l.timer=4+this.rng()*4):l.after==="bus"?(l.state="bus",l.timer=60):(l.state="idle",l.timer=1+this.rng()*3),l.after=null;else{let d=Math.atan2(f,p)-l.yaw;d=Math.atan2(Math.sin(d),Math.cos(d)),l.yaw+=d*Math.min(1,t*6);const w=Math.min(g,_*t),y=l.x+Math.sin(l.yaw)*w,v=l.z+Math.cos(l.yaw)*w,L=y-i,M=v-s;if(L*L+M*M<.8&&c<3)l.timer=Math.min(l.timer,.5);else if(this.free(y,v,l.y)){l.x=y,l.z=v,u=_;const E=this.groundAt(l.x,l.z,l.y);l.y+=(E-l.y)*Math.min(1,t*12)}else l.target=this.randomTarget(l,20),l.yaw+=Math.PI*(.5+this.rng())}}else l.timer<=0&&(l.state==="chat"&&l.partner&&(l.partner.state="idle",l.partner.timer=1,l.partner.partner=null,l.partner=null),l.state==="bus"&&(l.state="idle",l.busStop=null),this.pickState(l));if(l.state==="chat"&&l.partner&&(l.yaw=Math.atan2(l.partner.x-l.x,l.partner.z-l.z)),l.state==="bus"&&l.busStop&&this.game.transport.busAt(l.busStop)){this.despawn(l);continue}const h=l.state==="chat"?"talk":l.state==="photo"?"photo":l.state==="shop"?"shop":l.state==="phone"?"phone":a?"umbrella":"idle";l.ch.setAnim(h),l.ch.showAccessory("umbrella",a),c<90&&l.ch.update(t,u),l.bubble?(l.bubbleT-=t,l.bubbleT<=0&&(l.ch.group.remove(l.bubble),l.bubble.material.map.dispose(),l.bubble=null)):l.state==="chat"&&this.rng()<t*.25&&c<40&&this.showBubble(l,De(this.rng,Pl[l.type])),this.sync(l)}}sync(t){t.ch.group.position.set(t.x,t.y,t.z),t.ch.group.rotation.y=t.yaw}nearestTo(t,e,i){let s=null,r=i;for(const o of this.list){const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,s=o)}return s}}class xS{constructor(){this.items=[]}add(t,e="static"){return t.owner=e,this.items.push(t),t}removeOwner(t){this.items=this.items.filter(e=>e.owner!==t)}nearest(t,e,i,s=6){let r=null,o=1/0;for(const a of this.items){if(a.y==null&&(a.y=$e(a.x,a.z)),Math.abs(a.y-e)>5)continue;const l=Math.hypot(a.x-t,a.z-i);l<a.r&&l<o&&(o=l,r=a)}return r}nearestOfType(t,e,i,s){let r=null,o=s;for(const a of this.items){if(a.type!==i||a.high)continue;const l=Math.hypot(a.x-t,a.z-e);l<o&&(o=l,r=a)}return r}}function yS(){const n=new _n;n.box(-1.4,.5,-6,1.4,2.9,6,13117482,{solid:!1}),n.box(-1.42,1.3,-5.5,1.42,2.5,5.2,2767434,{mat:"window",solid:!1}),n.box(-1.3,1.3,5.95,1.3,2.6,6.05,2767434,{mat:"window",solid:!1}),n.box(-1.45,.5,-6.02,1.45,1,6.02,15921906,{solid:!1}),n.box(-1.4,2.9,-6,-1.25,3.9,6,13117482,{solid:!1}),n.box(1.25,2.9,-6,1.4,3.9,6,13117482,{solid:!1}),n.box(-1.4,2.9,5.85,1.4,4,6,13117482,{solid:!1}),n.box(-1.4,2.9,-6,1.4,3.9,-5.85,13117482,{solid:!1}),n.box(-1.3,3.9,5.6,1.3,4.3,6,10471136,{mat:"glass",solid:!1});for(let t=-5;t<=4.5;t+=1.5)for(const e of[-.7,.7])n.box(e-.45,2.9,t-.3,e+.45,3.35,t+.3,2763370,{solid:!1}),n.box(e-.45,3.35,t-.35,e+.45,3.9,t-.25,2763370,{solid:!1});for(const t of[-4,4])for(const e of[-1.25,1.25])n.box(e-.25,0,t-.6,e+.25,1.1,t+.6,1710618,{solid:!1});return n.box(-1,.9,6.02,-.5,1.2,6.1,16773824,{mat:"lamp",solid:!1}),n.box(.5,.9,6.02,1,1.2,6.1,16773824,{mat:"lamp",solid:!1}),n.sign("长安观光巴士 1路",1.46,3.4,0,.45,Math.PI/2,{bg:"#9b2f28",fg:"#ffffff",px:40}),n.sign("长安观光巴士 1路",-1.46,3.4,0,.45,-Math.PI/2,{bg:"#9b2f28",fg:"#ffffff",px:40}),n.sign("1 钟楼⇄曲江池",0,2.7,6.06,.32,0,{bg:"#111",fg:"#ffcf66",px:40,glow:!0}),n.build()}function MS(n,t){const e=new _n;e.box(-.95,.35,-2.2,.95,1.15,2.2,n,{solid:!1}),e.box(-.85,1.15,-1.2,.85,1.85,1,n,{solid:!1}),e.box(-.87,1.2,-1.1,.87,1.75,.9,2767434,{mat:"window",solid:!1});for(const i of[-1.4,1.4])for(const s of[-.9,.9])e.box(s-.15,0,i-.4,s+.15,.7,i+.4,1118481,{solid:!1});return e.box(-.8,.6,2.2,-.4,.85,2.25,16773824,{mat:"lamp",solid:!1}),e.box(.4,.6,2.2,.8,.85,2.25,16773824,{mat:"lamp",solid:!1}),e.box(-.8,.6,-2.25,-.4,.85,-2.2,16724016,{mat:"lamp",solid:!1}),e.box(.4,.6,-2.25,.8,.85,-2.2,16724016,{mat:"lamp",solid:!1}),t&&(e.box(-.85,.35,-2.2,.85,.75,2.2,15921906,{solid:!1}),e.box(-.3,1.85,-.2,.3,2.1,.2,15909424,{mat:"neon",solid:!1})),e.build()}function bS(){const n=new _n;n.box(-4,-.8,-14,4,1.2,12,15921906,{solid:!1});for(let t=0;t<4;t++)n.box(-4+t*.9,-.8,12+t*1.2,4-t*.9,1.2,13.2+t*1.2,15921906,{solid:!1});n.box(-4.05,.2,-14,4.05,.5,12,2775720,{solid:!1}),n.box(-3.6,1.2,-12,3.6,4,8,15263976,{mat:"window",solid:!1}),n.box(-3.7,4,-12.2,3.7,4.3,8.2,16053492,{solid:!1}),n.box(-3,4.3,-10,3,6.6,4,15263976,{mat:"window",solid:!1}),n.box(-3.1,6.6,-10.2,3.1,6.9,4.2,16053492,{solid:!1}),n.box(-1.5,6.9,-6,1.5,8.4,0,14737632,{mat:"window",solid:!1});for(const t of[1.25,4.35,6.95])n.box(-3.75,t,-12.3,-3.65,t+.12,8.3,16728224,{mat:"neon",solid:!1}),n.box(3.65,t,-12.3,3.75,t+.12,8.3,4243711,{mat:"neon",solid:!1});for(let t=-12;t<=8;t+=2)n.boxC(3.8,1.2,t,.12,1,.12,13421772,{solid:!1}),n.boxC(-3.8,1.2,t,.12,1,.12,13421772,{solid:!1});return n.sign("曲江夜游",0,5.4,4.05,.9,0,{bg:"#5a2524",fg:"#ffd76a",glow:!0}),n.build()}function SS(){const n=new _n;return n.box(-1,-2.4,-1,1,-.4,1,14168112,{solid:!1}),n.box(-1.02,-1.8,-.8,1.02,-.8,.8,10471136,{mat:"window",solid:!1}),n.boxC(0,-.4,0,.15,.6,.15,4473924,{solid:!1}),n.build()}class wS{constructor(t,e,i){this.scene=t,this.world=e,this.game=i,this.static=new He,t.add(this.static);const s=Su.pts;this.busRoute=s,this.busLen=Ul(s),this.stops=Su.stops.map(a=>{let l=0,c=1/0,u=0;for(let g=1;g<s.length;g++){const _=s[g-1],m=s[g],d=Math.hypot(m.x-_.x,m.z-_.z);for(let w=0;w<=1;w+=.02){const y=_.x+(m.x-_.x)*w,v=_.z+(m.z-_.z)*w,L=Math.hypot(y-a.x,v-a.z);L<c&&(c=L,l=u+d*w)}u+=d}const h=Zn(s,l),f=Math.cos(h.dir),p=-Math.sin(h.dir);return{...a,s:l,wx:h.x+f*9.5,wz:h.z+p*9.5,dir:h.dir}}),this.bus=yS(),t.add(this.bus),this.busS=0,this.busDir=1,this.busWait=5,this.busStopIdx=0,this.busSpeed=24,new _n(0,0,0,0,e,"transport");for(const a of this.stops){const l=new _n(a.wx,0,a.wz,a.dir-Math.PI/2,e,"transport");Vb(l,0,0,0,"观光巴士·"+a.name),this.static.add(l.build()),i.interact.add({x:a.wx,z:a.wz,r:4.5,type:"bus",label:"观光巴士 · "+a.name+"站",stop:a},"transport")}for(const a of Eo){const l=new _n(a.x,$e(a.x,a.z),a.z,0,e,"transport");Gb(l,0,0,a.name),this.static.add(l.build()),i.interact.add({x:a.x,z:a.z+2,r:4,type:"metro",label:"进入地铁 · "+a.name,station:a},"transport")}this.cruisePath=Cb(),this.cruiseLen=Ul(this.cruisePath),this.boat=bS(),this.boat.visible=!0,t.add(this.boat),this.boatState={s:0,dir:1,active:!1},this.placeIdleBoat(),this.cars=[],this.carModels=[];const r=[15921906,1710618,10132128,12595248,3824282,6974064,15261904];for(let a=0;a<8;a++)this.carModels.push({color:r[a%r.length],taxi:a>=6});this.carRoads=gl.filter(a=>!a.ped).map(a=>({road:a,len:Ul(a.pts)})),this.rng=Un(5);const o=new _n;o.box(-1.1,0,-1.1,1.1,2.6,1.1,10471136,{mat:"glass",solid:!1}),o.box(-1.2,-.2,-1.2,1.2,0,1.2,13421772,{solid:!1}),o.box(-1.2,2.6,-1.2,1.2,2.8,1.2,13421772,{solid:!1}),this.elevatorCab=o.build(!1),this.elevatorCab.visible=!1,t.add(this.elevatorCab),this.cable=null,this.gondolas=[]}placeIdleBoat(){const t=Zn(this.cruisePath,this.cruiseLen*.82);this.boat.position.set(t.x,oo+.6,t.z),this.boat.rotation.y=t.dir}nearestStop(t,e,i){let s=null,r=i;for(const o of this.stops){const a=Math.hypot(o.wx-t,o.wz-e);a<r&&(r=a,s=o)}return s}busAt(t){return this.busWait>0&&this.stops[this.busStopIdx]===t}busETA(t){let e=(t.s-this.busS)*this.busDir;return e<0&&(e=Math.abs(e)+(this.busDir>0?(this.busLen-this.busS)*2:this.busS*2)*.5),Math.round(e/this.busSpeed+Math.max(0,this.busWait))}updateBus(t){if(this.busWait>0)this.busWait-=t,this.busWait<=0&&this.game.onBusDepart&&this.game.onBusDepart(this.stops[this.busStopIdx]);else{const u=this.busS;this.busS+=this.busDir*this.busSpeed*t;for(let h=0;h<this.stops.length;h++){const f=this.stops[h],p=u-f.s,g=this.busS-f.s;if(p!==0&&p*g<=0){this.busS=f.s,this.busWait=8,this.busStopIdx=h,h===0&&(this.busDir=1),h===this.stops.length-1&&(this.busDir=-1),this.game.onBusArrive&&this.game.onBusArrive(f);break}}this.busS>this.busLen&&(this.busS=this.busLen,this.busDir=-1),this.busS<0&&(this.busS=0,this.busDir=1)}const e=Zn(this.busRoute,this.busS),i=this.busDir>0?e.dir:e.dir+Math.PI,s=Math.cos(i),r=-Math.sin(i),o=e.x-s*3.5,a=e.z-r*3.5;let l=.05;xr(o,a),ai(o,a)&&(l=.4),this.bus.position.set(o,l,a);let c=i-this.bus.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),this.bus.rotation.y+=c*Math.min(1,t*5)}updateCars(t,e,i){let r=0;for(;this.cars.length<26&&r++<4;){const o=De(this.rng,this.carRoads),a=this.rng()*o.len,l=Zn(o.road.pts,a),c=Math.hypot(l.x-e,l.z-i);if(c>260||c<40)continue;const u=De(this.rng,this.carModels),h=MS(u.color,u.taxi);this.scene.add(h),this.cars.push({cr:o,s:a,dir:this.rng()<.5?1:-1,sp:9+this.rng()*7,obj:h,lane:o.road.w/4})}for(const o of this.cars.slice()){const a=Zn(o.cr.road.pts,o.s);if(Math.hypot(a.x-e,a.z-i)>320||o.s<0||o.s>o.cr.len){ah(o.obj),this.cars.splice(this.cars.indexOf(o),1);continue}const c=Zn(o.cr.road.pts,o.s+o.dir*6),u=o.dir>0?c.dir:c.dir+Math.PI,h=Math.cos(u),f=-Math.sin(u),p=c.x-h*o.lane,g=c.z-f*o.lane,_=this.game.player,m=Math.hypot(p-_.pos.x,g-_.pos.z)<3.5&&_.pos.y<3,d=Math.hypot(p-this.bus.position.x,g-this.bus.position.z)<6,w=m||d?0:o.sp;o.v=(o.v||o.sp)+(w-(o.v||o.sp))*Math.min(1,t*3),o.s+=o.dir*o.v*t;const y=Zn(o.cr.road.pts,o.s),v=o.dir>0?y.dir:y.dir+Math.PI,L=Math.cos(v),M=-Math.sin(v),E=y.x-L*o.lane,I=y.z-M*o.lane;o.obj.position.set(E,ai(E,I)?.4:.05,I);let C=v-o.obj.rotation.y;C=Math.atan2(Math.sin(C),Math.cos(C)),o.obj.rotation.y+=C*Math.min(1,t*6),o.honk=m}}startCruise(t){let e=0,i=1/0;for(let r=0;r<this.cruiseLen;r+=5){const o=Zn(this.cruisePath,r),a=Math.hypot(o.x-t.x,o.z-t.z);a<i&&(i=a,e=r)}this.boatState={active:!0,s:e,start:e,dir:1,leg:0,t:0};const s=Zn(this.cruisePath,e);return this.boat.position.set(s.x,oo+.6,s.z),this.boat.rotation.y=s.dir,this.boat}updateBoat(t){const e=this.boatState;e.t=(e.t||0)+t;const i=Math.sin(e.t*1.4)*.08;if(!e.active)return this.boat.position.y=oo+.6+i,null;const s=22;e.s+=e.dir*s*t;let r=!1;e.leg===0&&e.s>=this.cruiseLen-4?(e.leg=1,e.dir=-1):e.leg===1&&e.s<=4?(e.leg=2,e.dir=1):e.leg===2&&e.s>=e.start&&(r=!0),e.s=on(e.s,0,this.cruiseLen);const o=Zn(this.cruisePath,e.s),a=e.dir>0?o.dir:o.dir+Math.PI,l=Math.cos(a),c=-Math.sin(a);this.boat.position.set(o.x-l*7,oo+.6+i,o.z-c*7);let u=a-this.boat.rotation.y;return u=Math.atan2(Math.sin(u),Math.cos(u)),this.boat.rotation.y+=u*Math.min(1,t*1.2),this.boat.rotation.z=Math.sin(e.t*.9)*.01,r?(e.active=!1,"done"):e.leg}setupCable(t,e){if(this.cable)return;this.cableA=t,this.cableB=e;const i=new He,s=new _n,r=30;this.cablePts=[];for(let o=0;o<=r;o++){const a=o/r,l=t.x+(e.x-t.x)*a,c=t.z+(e.z-t.z)*a,u=t.y+(e.y-t.y)*a-Math.sin(a*Math.PI)*12,h=$e(l,c);this.cablePts.push(new z(l,Math.max(u,h+8),c))}for(let o=1;o<=r;o++){const a=this.cablePts[o-1],l=this.cablePts[o];if(s.beam(a.x,a.y,a.z,l.x,l.y,l.z,.12,3355443),s.beam(a.x+2,a.y,a.z,l.x+2,l.y,l.z,.12,3355443),o%6===0){const c=$e(l.x,l.z);s.beam(l.x+1,c,l.z,l.x+1,l.y+1,l.z,.8,9079434),s.beam(l.x-.5,l.y+.6,l.z,l.x+2.5,l.y+.6,l.z,.4,9079434)}}i.add(s.build());for(let o=0;o<8;o++){const a=SS();a.userData.u=o/8,i.add(a),this.gondolas.push(a)}this.cable=i,this.scene.add(i)}cablePoint(t){const e=this.cablePts,i=on(t,0,1)*(e.length-1),s=Math.min(e.length-2,Math.floor(i));return e[s].clone().lerp(e[s+1],i-s)}updateCable(t){if(this.cable)for(const e of this.gondolas){if(e.userData.ridden)continue;e.userData.u=(e.userData.u+t*.02)%1;const i=e.userData.u,s=this.cablePoint(i<.5?i*2:2-i*2);e.position.copy(s),e.position.x+=i<.5?0:2}}update(t,e,i){return this.updateBus(t),this.updateCars(t,e,i),this.updateCable(t),this.updateBoat(t)}}const ES=[{id:"none",name:"原图"},{id:"lingnan",name:"长安·复古胶片"},{id:"night",name:"盛唐·夜色霓虹"},{id:"fresh",name:"清新"},{id:"bw",name:"黑白"},{id:"pixel",name:"像素"}],TS={none:0,lingnan:1,night:2,fresh:3,bw:4,pixel:5},AS=`
uniform sampler2D tDiffuse; uniform float uMode; uniform float uTime; uniform vec2 uRes; uniform float uVignette;
varying vec2 vUv;
float rnd(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + uTime) * 43758.5453); }
vec3 sat(vec3 c, float s){ float l = dot(c, vec3(0.299,0.587,0.114)); return mix(vec3(l), c, s); }
void main(){
  vec2 uv = vUv;
  if (uMode > 4.5) { vec2 px = vec2(6.0) / uRes; uv = (floor(uv / px) + 0.5) * px; }
  vec3 c = texture2D(tDiffuse, uv).rgb;
  if (uMode > 0.5 && uMode < 1.5) {
    // 长安旧影：暖黄 + 褪色 + 颗粒
    c = sat(c, 0.75);
    c = c * vec3(1.08, 0.98, 0.78) + vec3(0.06, 0.04, 0.0);
    c = mix(vec3(0.08,0.06,0.04), c, 0.9);
    c = pow(c, vec3(0.95));
    c += (rnd(uv * uRes) - 0.5) * 0.07;
  } else if (uMode > 1.5 && uMode < 2.5) {
    // 盛唐夜色：霓虹增强 + 光晕
    vec3 glow = vec3(0.0);
    for (int i = 0; i < 8; i++) {
      float a = float(i) * 0.785;
      vec2 o = vec2(cos(a), sin(a)) * 6.0 / uRes;
      vec3 s = texture2D(tDiffuse, uv + o).rgb;
      glow += max(s - 0.55, 0.0);
      s = texture2D(tDiffuse, uv + o * 2.5).rgb;
      glow += max(s - 0.55, 0.0) * 0.6;
    }
    c = sat(c, 1.55);
    c = (c - 0.5) * 1.18 + 0.5;
    float l = dot(c, vec3(0.3,0.59,0.11));
    c += mix(vec3(0.12,0.02,0.18), vec3(0.0), smoothstep(0.0, 0.5, l)) ;
    c += glow * vec3(0.55, 0.45, 0.7) * 0.35;
  } else if (uMode > 2.5 && uMode < 3.5) {
    c = sat(c, 1.15) * 1.06 + vec3(0.0, 0.03, 0.05);
    c = mix(c, vec3(1.0), 0.06);
  } else if (uMode > 3.5 && uMode < 4.5) {
    float l = dot(c, vec3(0.299,0.587,0.114));
    l = (l - 0.5) * 1.25 + 0.5;
    c = vec3(l) + (rnd(uv * uRes) - 0.5) * 0.06;
  }
  vec2 d = vUv - 0.5;
  float v = 1.0 - dot(d, d) * uVignette;
  c *= v;
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
  #include <colorspace_fragment>
}`;class CS{constructor(t){this.renderer=t,this.filter="none";const e=t.getDrawingBufferSize(new ie);this.rt=new Fi(e.x,e.y,{samples:4,type:Os}),this.uniforms={tDiffuse:{value:this.rt.texture},uMode:{value:0},uTime:{value:0},uRes:{value:e.clone()},uVignette:{value:.6}},this.quadScene=new eh,this.quadCam=new Ju(-1,1,1,-1,0,1);const i=new kn({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:AS,depthTest:!1,depthWrite:!1});this.quad=new re(new us(2,2),i),this.quadScene.add(this.quad),this.dbp=null}resize(){const t=this.renderer.getDrawingBufferSize(new ie);this.rt.setSize(t.x,t.y),this.uniforms.uRes.value.copy(t)}render(t,e,i){if(this.filter==="none"){this.renderer.setRenderTarget(null),this.renderer.render(t,e);return}this.uniforms.uMode.value=TS[this.filter]||0,this.uniforms.uTime.value=i%10,this.uniforms.uVignette.value=this.filter==="lingnan"?1.4:this.filter==="bw"?1:.5,this.renderer.setRenderTarget(this.rt),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.quadScene,this.quadCam)}recognize(t,e,i){const s=[],r=new z,o=t.position;for(const a of e){if(a.def.hidden)continue;r.set(a.x,a.y+(a.def.focusY||8),a.z);const l=r.distanceTo(o),c=a.def.photoR||380;if(l>c)continue;const h=Math.max(a.def.rect?Math.max(a.def.rect[0],a.def.rect[1]):20,(a.def.focusY||8)*.8)/Math.max(1,l);if(h<.045)continue;const f=r.clone().project(t);if(f.z>1||Math.abs(f.x)>.82||Math.abs(f.y)>.9){const _=new z(a.x,a.y+2,a.z).project(t);if(_.z>1||Math.abs(_.x)>.8||Math.abs(_.y)>.88)continue}let p=0;const g=16;for(let _=1;_<g-1;_++){const m=_/g,d=o.x+(r.x-o.x)*m,w=o.y+(r.y-o.y)*m,y=o.z+(r.z-o.z)*m,v=i.query(d-.1,y-.1,d+.1,y+.1,[]);for(const L of v)w>L.y0&&w<L.y1&&L.owner!=="lm:"+a.def.id&&p++}p>1||s.push({lm:a,score:h*(1-Math.hypot(f.x,f.y)*.4)})}return s.sort((a,l)=>l.score-a.score),s.slice(0,3).map(a=>a.lm)}capture(t,e){const s=t.height/t.width,r=document.createElement("canvas");r.width=1280,r.height=Math.round(1280*s);const o=r.getContext("2d");if(o.drawImage(t,0,0,r.width,r.height),e){o.fillStyle="rgba(0,0,0,0.45)",o.fillRect(0,r.height-64,r.width,64),o.fillStyle="#ffd76a",o.font='bold 30px "Microsoft YaHei",sans-serif',o.fillText(e.title,24,r.height-24),o.fillStyle="#ffffff",o.font='22px "Microsoft YaHei",sans-serif';const u=e.sub,h=o.measureText(u).width;o.fillText(u,r.width-h-24,r.height-26)}const a=r.toDataURL("image/jpeg",.88),l=document.createElement("canvas");return l.width=320,l.height=Math.round(320*s),l.getContext("2d").drawImage(r,0,0,l.width,l.height),{full:a,thumb:l.toDataURL("image/jpeg",.8)}}db(){return this.dbp?this.dbp:(this.dbp=new Promise((t,e)=>{const i=indexedDB.open("block-xian",1);i.onupgradeneeded=()=>i.result.createObjectStore("photos",{keyPath:"id"}),i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)}),this.dbp)}async savePhoto(t){try{const e=await this.db();await new Promise((i,s)=>{const r=e.transaction("photos","readwrite");r.objectStore("photos").put(t),r.oncomplete=i,r.onerror=()=>s(r.error)})}catch(e){console.warn("save photo failed",e)}}async listPhotos(){try{const t=await this.db();return await new Promise((e,i)=>{const r=t.transaction("photos","readonly").objectStore("photos").getAll();r.onsuccess=()=>e(r.result.sort((o,a)=>a.id-o.id)),r.onerror=()=>i(r.error)})}catch{return[]}}async deletePhoto(t){const e=await this.db();return new Promise(i=>{const s=e.transaction("photos","readwrite");s.objectStore("photos").delete(t),s.oncomplete=i})}}const Jn=.32,va=1.8,Zr=1.05,RS=30;class PS{constructor(t,e,i,s=[]){this.scene=t,this.world=e,this.char=new sh(i,{accessories:s}),this.char.showAccessory("camera",!1),t.add(this.char.group),this.pos=new z,this.vy=0,this.onGround=!0,this.yaw=0,this.modelYaw=0,this.camYaw=0,this.camPitch=.3,this.camDist=6,this.view="third",this.speed=0,this.ride=null,this.scripted=null,this.frozen=!1,this.distance=0,this.fly=!1,this._tmp=[],this.camPos=new z,this.camTarget=new z}setSkin(t){this.char.setSkin(t)}teleport(t,e,i,s){this.pos.set(t,e,i),this.vy=0,s!=null&&(this.camYaw=s,this.modelYaw=s+Math.PI),this.ride=null,this.scripted=null}groundAt(t,e,i){let s=$e(t,e);ai(t,e)&&(s=-3),vm(t,e)&&(s=Math.max(s,fr));const r=this.world.supportAt(t,e,i+Zr,Jn);return Math.max(s,r)}blocked(t,e){const i=this.pos.y;if(i<2.5&&!xm(t,e)&&this.world.supportAt(t,e,i+Zr,Jn)<i-.5||$e(t,e)>i+Zr)return!0;const s=this.world.query(t-Jn,e-Jn,t+Jn,e+Jn,this._tmp);for(const r of s)if(r.y1>i+Zr&&r.y0<i+va-.1)return!0;for(const r of this.world.platforms)if(r.wall&&!(Math.abs(i-r.y)>1.2)&&ro(r,this.pos.x,this.pos.z)&&!ro(r,t,e))return!0;return!1}update(t,e,i){const s=e.consumeLook(),r=.0026*(this.sensitivity||1);if(this.camYaw-=s.x*r,this.camPitch=on(this.camPitch+s.y*r,-1.2,1.35),e.wheel&&this.view==="third"&&(this.camDist=on(this.camDist+e.wheel*.8,2.5,16)),this.scripted){this.scripted(t,this),this.char.update(t,0),this.syncModel(t);return}if(this.ride){this.updateRide(t,e),this.syncModel(t);return}const o=this.frozen?{x:0,y:0}:e.axis(),l=e.down("ShiftLeft")||e.down("ShiftRight")||e.joy.sprint?15:7,c=Math.sin(this.camYaw),u=Math.cos(this.camYaw);let h=-c*o.y+u*o.x,f=-u*o.y-c*o.x;const p=Math.hypot(h,f)>.01,g=p?l*Math.min(1,Math.hypot(o.x,o.y)):0;if(this.speed+=(g-this.speed)*Math.min(1,t*10),p){const y=Math.hypot(h,f);h/=y,f/=y,this.moveDir=Math.atan2(h,f)}const _=this.speed*t;if(_>1e-4&&this.moveDir!=null){const y=Math.sin(this.moveDir)*_,v=Math.cos(this.moveDir)*_,L=Math.ceil(_/.3);for(let M=0;M<L;M++){const E=y/L,I=v/L;this.blocked(this.pos.x+E,this.pos.z)||(this.pos.x+=E),this.blocked(this.pos.x,this.pos.z+I)||(this.pos.z+=I);const C=this.groundAt(this.pos.x,this.pos.z,this.pos.y);this.onGround&&C>this.pos.y&&C<=this.pos.y+Zr&&(this.pos.y=C)}this.distance+=_}(e.hit("Space")||e.joy.jump)&&this.onGround&&!this.frozen&&(this.vy=10,this.onGround=!1,e.joy.jump=!1),this.vy-=RS*t;let m=this.pos.y+this.vy*t;const d=this.groundAt(this.pos.x,this.pos.z,this.pos.y);if(this.vy>0){const y=this.world.query(this.pos.x-Jn,this.pos.z-Jn,this.pos.x+Jn,this.pos.z+Jn,this._tmp);for(const v of y)v.y0>=this.pos.y+va-.05&&v.y0<m+va&&(m=v.y0-va,this.vy=0)}m<=d?(m=d,this.vy=0,this.onGround=!0):this.onGround=m-d<.05,this.pos.y=m;for(const y of this.world.platforms)if(y.spin&&Math.abs(this.pos.y-y.y)<.2&&ro(y,this.pos.x,this.pos.z)){const v=y.spin*t,L=this.pos.x-y.cx,M=this.pos.z-y.cz,E=Math.cos(v),I=Math.sin(v),C=y.cx+L*E-M*I,S=y.cz+L*I+M*E;ro(y,C,S)&&(this.pos.x=C,this.pos.z=S,this.camYaw-=v,this.moveDir!=null&&(this.moveDir-=v),this.modelYaw-=v)}this.pos.y<-20&&(this.pos.y=this.groundAt(this.pos.x,this.pos.z,500));const w=i&&(i.weather==="rain"||i.weather==="typhoon");if(this.char.showAccessory("umbrella",w&&this.view!=="selfie"),this.view!=="selfie"&&this.char.setAnim(w?"umbrella":"idle"),this.char.update(t,this.speed),this.view==="first")this.modelYaw=this.camYaw+Math.PI;else if(p){let y=this.moveDir-this.modelYaw;y=Math.atan2(Math.sin(y),Math.cos(y)),this.modelYaw+=y*Math.min(1,t*12)}this.syncModel(t)}updateRide(t,e){const i=this.ride;if(i.free){const r=e.axis(),o=Math.sin(this.camYaw-i.obj.rotation.y),a=Math.cos(this.camYaw-i.obj.rotation.y),l=-o*r.y+a*r.x,c=-a*r.y-o*r.x,u=4*t;i.local.x=on(i.local.x+l*u,i.bounds[0],i.bounds[1]),i.local.z=on(i.local.z+c*u,i.bounds[2],i.bounds[3]),this.speed=Math.hypot(l,c)*4,this.speed>.1&&(this.modelYaw=Math.atan2(l,c)+i.obj.rotation.y)}else this.speed=0;i.obj.updateMatrixWorld();const s=i.local.clone().applyMatrix4(i.obj.matrixWorld);this.pos.copy(s),i.free||(this.modelYaw=i.obj.rotation.y+(i.faceYaw||0)),this.char.setAnim(i.sit?"sit":"idle"),this.char.update(t,this.speed)}syncModel(){this.char.group.position.copy(this.pos),this.char.group.rotation.y=this.modelYaw,this.char.group.visible=this.view!=="first"||!!this.forceVisible}updateCamera(t,e,i=!0){const s=new z(this.pos.x,this.pos.y+1.62*this.char.scale,this.pos.z),r=new z(Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),Math.cos(this.camYaw)*Math.cos(this.camPitch));if(this.view==="first"){t.position.copy(s).addScaledVector(r,-.15),t.lookAt(s.clone().addScaledVector(r,-10));return}if(this.view==="selfie"){const l=this.modelYaw,c=new z(Math.sin(l),0,Math.cos(l)),u=this.selfieDist||2.6,h=s.clone().addScaledVector(c,u);h.y+=.25+Math.sin(this.camPitch)*1.2,h.addScaledVector(new z(c.z,0,-c.x),Math.sin(this.camYaw-l)*1.2),t.position.copy(h),t.lookAt(s.x,s.y-.1,s.z);return}const o=s.clone();o.y+=.25;let a=this.camDist;if(i){const l=Math.ceil(a/.5);for(let c=1;c<=l;c++){const u=c/l*a,h=o.clone().addScaledVector(r,u),f=this.world.query(h.x-.2,h.z-.2,h.x+.2,h.z+.2,this._tmp);let p=$e(h.x,h.z)>h.y-.3;for(const g of f)h.y>g.y0&&h.y<g.y1+.2&&(p=!0);if(p){a=Math.max(.8,u-.4);break}}}this.camDistEff=this.camDistEff==null?a:this.camDistEff+(a-this.camDistEff)*Math.min(1,e*(a<this.camDistEff?20:4)),t.position.copy(o).addScaledVector(r,this.camDistEff),t.lookAt(o)}}class LS{constructor(t){this.dom=t,this.keys=new Set,this.pressed=new Set,this.lookDX=0,this.lookDY=0,this.wheel=0,this.joy={x:0,y:0,active:!1},this.touchLook=null,this.locked=!1,this.enabled=!0,this.mouseDown=!1,this.onKey=null,this._kd=i=>{i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA")||(this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code),["Space","Tab"].includes(i.code)&&i.preventDefault(),this.onKey&&this.onKey(i.code,i))},this._ku=i=>this.keys.delete(i.code),this._mm=i=>{(this.locked||this.mouseDown)&&(this.lookDX+=i.movementX||0,this.lookDY+=i.movementY||0)},this._wh=i=>{i.target===t&&(this.wheel+=Math.sign(i.deltaY))},this._md=i=>{i.target===t&&i.button===2&&(this.mouseDown=!0)},this._mu=()=>this.mouseDown=!1,this._plc=()=>this.locked=document.pointerLockElement===t,this._blur=()=>this.keys.clear(),window.addEventListener("keydown",this._kd),window.addEventListener("keyup",this._ku),window.addEventListener("mousemove",this._mm),window.addEventListener("wheel",this._wh,{passive:!0}),window.addEventListener("mousedown",this._md),window.addEventListener("mouseup",this._mu),window.addEventListener("blur",this._blur),document.addEventListener("pointerlockchange",this._plc),t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("touchstart",i=>{for(const s of i.changedTouches)s.clientX>window.innerWidth*.4&&!this.touchLook&&(this.touchLook={id:s.identifier,x:s.clientX,y:s.clientY})},{passive:!0}),t.addEventListener("touchmove",i=>{for(const s of i.changedTouches)this.touchLook&&s.identifier===this.touchLook.id&&(this.lookDX+=(s.clientX-this.touchLook.x)*1.6,this.lookDY+=(s.clientY-this.touchLook.y)*1.6,this.touchLook.x=s.clientX,this.touchLook.y=s.clientY)},{passive:!0});const e=i=>{for(const s of i.changedTouches)this.touchLook&&s.identifier===this.touchLook.id&&(this.touchLook=null)};t.addEventListener("touchend",e),t.addEventListener("touchcancel",e)}requestLock(){if(this.dom.requestPointerLock&&!("ontouchstart"in window&&navigator.maxTouchPoints>0))try{const t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.enabled&&this.keys.has(t)}hit(t){return this.enabled&&this.pressed.has(t)}axis(){if(!this.enabled)return{x:0,y:0};let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),this.joy.active&&(t+=this.joy.x,e+=this.joy.y);const i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,y:e}}consumeLook(){const t={x:this.lookDX,y:this.lookDY};return this.lookDX=this.lookDY=0,t}endFrame(){this.pressed.clear(),this.wheel=0}dispose(){window.removeEventListener("keydown",this._kd),window.removeEventListener("keyup",this._ku),window.removeEventListener("mousemove",this._mm),window.removeEventListener("wheel",this._wh),window.removeEventListener("mousedown",this._md),window.removeEventListener("mouseup",this._mu),window.removeEventListener("blur",this._blur),document.removeEventListener("pointerlockchange",this._plc)}}function DS(){const n=Rb(),t=n.x1-n.x0,e=n.z1-n.z0,i=2048/Math.max(t,e),s=Math.ceil(t*i),r=Math.ceil(e*i),o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.fillStyle="#dcd6c8",a.fillRect(0,0,s,r);const l=4,c=m=>[parseInt(m.slice(1,3),16),parseInt(m.slice(3,5),16),parseInt(m.slice(5,7),16)],u={};for(const m in En)u[m]=c(En[m].color);const h=a.createImageData(s,r);for(let m=0;m<r;m+=l)for(let d=0;d<s;d+=l){const w=n.x0+(d+l/2)/i,y=n.z0+(m+l/2)/i,v=fs(w,y);let[L,M,E]=u[v]||[200,200,200];L=L*.28+228*.72,M=M*.28+222*.72,E=E*.28+208*.72;const I=pm(w,y);if(I>1){const C=Math.min(1,I/140);L=150-C*60,M=190-C*60,E=120-C*50}else La(w,y)&&(L=168,M=206,E=140);for(let C=0;C<l&&m+C<r;C++)for(let S=0;S<l&&d+S<s;S++){const D=((m+C)*s+d+S)*4;h.data[D]=L,h.data[D+1]=M,h.data[D+2]=E,h.data[D+3]=255}}a.putImageData(h,0,0);const f=m=>(m-n.x0)*i,p=m=>(m-n.z0)*i;a.fillStyle="rgba(90,70,60,0.35)";const g=8;let _=null;for(let m=0;m<r;m+=g){let d=null;const w=[];for(let y=0;y<s;y+=g){const v=fs(n.x0+y/i,n.z0+m/i);w.push(v),(d&&d!==v||_&&_[w.length-1]!==v)&&a.fillRect(y-1,m-1,2,2),d=v}_=w}a.strokeStyle="#6fa8d8",a.lineCap="round",a.lineJoin="round";for(const m of ml)for(let d=1;d<m.pts.length;d++){const w=m.pts[d-1],y=m.pts[d];a.lineWidth=Math.max(1.5,(w.w+y.w)/2*i),a.beginPath(),a.moveTo(f(w.x),p(w.z)),a.lineTo(f(y.x),p(y.z)),a.stroke()}for(const m of[0,1])for(const d of gl)a.strokeStyle=m===0?"#9a9080":d.ped?"#f0e8d0":d.w>=14?"#ffd88a":"#ffffff",a.lineWidth=Math.max(1,d.w*i)+(m===0?1.5:0),a.beginPath(),d.pts.forEach((w,y)=>y?a.lineTo(f(w.x),p(w.z)):a.moveTo(f(w.x),p(w.z))),a.stroke();return a.setLineDash([6,4]),a.strokeStyle="#d8302a",a.lineWidth=2,a.beginPath(),Su.pts.forEach((m,d)=>d?a.lineTo(f(m.x),p(m.z)):a.moveTo(f(m.x),p(m.z))),a.stroke(),a.setLineDash([]),{canvas:o,bounds:n,scale:i}}function IS(){return{beilin:[34.248,108.955],lianhu:[34.27,108.925],xincheng:[34.27,108.99],yanta:[34.2,108.97],weiyang:[34.34,108.95],lintong:[34.36,109.22],changan:[34.07,108.91],baqiao:[34.31,109.07]}}const bs={DECK_Y:33,RESTAURANT_Y:24,CORE:[3,3]},US=[{id:"huacheng",name:"钟楼",desc:"碑林区 · 古城中心",lm:"huacheng",off:[0,0,34],yaw:0},{id:"beijingroad",name:"永宁门",desc:"碑林区 · 明城墙南门",lm:"beijingroad",off:[0,0,38],yaw:0},{id:"cantontower",name:"大雁塔",desc:"雁塔区 · 慈恩寺塔前",lm:"cantontower",off:[0,0,38],yaw:0},{id:"shamian",name:"大唐不夜城",desc:"雁塔区 · 盛唐天街",lm:"shamian",off:[0,0,60],yaw:Math.PI},{id:"muslimquarter",name:"回民街",desc:"莲湖区 · 长安市井",lm:"muslimquarter",off:[0,0,28],yaw:0},{id:"chenclan",name:"兵马俑",desc:"临潼区 · 秦俑一号坑",lm:"chenclan",off:[0,0,48],yaw:0},{id:"huaqing",name:"华清宫",desc:"临潼区 · 骊山脚下",lm:"huaqing",off:[0,0,45],yaw:0},{id:"baiyungate",name:"骊山",desc:"临潼区 · 索道下站",lm:"baiyungate",off:[0,0,18],yaw:0}];class NS{constructor(t){this.container=t;const e=Q.save.settings;this.renderer=new im({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.pixelRatio()),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=e.shadows&&e.quality!=="low",this.renderer.shadowMap.type=Cp,this.renderer.toneMapping=Rp,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.shadows=this.renderer.shadowMap.enabled,this.scene=new eh,this.camera=new gn(65,t.clientWidth/t.clientHeight,.1,4500),this.world=new gb,this.interact=new xS,this.input=new LS(this.canvas),this.sky=new xb(this.scene,this.renderer),this.sky.onWeatherChange=s=>{const r=ns[s];Ce(`${r.icon} 天气变化：${r.name}`,s==="typhoon"?"warn":"info"),s==="typhoon"&&ar("❄️ 降雪提示","古城落雪，路面湿滑，请慢慢游览")},this.water=new kb(this.scene,e.reflect&&e.quality==="high"),this.roads=zb(this.scene),this.npcs=new vS(this.scene,this.world,this),this.landmarks=new mS(this.scene,this.world,this),this.landmarks.buildLODs(),this.city=new Xb(this.scene,this.world,[...this.landmarks.exclusions(),...Eo.map(s=>({x:s.x,z:s.z,r:9})),...ma.map(s=>({x:s.x,z:s.z,r:14}))]),this.city.shadows=this.shadows,this.transport=new wS(this.scene,this.world,this);for(const s of this.transport.stops)this.city.excl.push({x:s.wx,z:s.wz,r:7});this.photo=new CS(this.renderer),this.applyQuality(),this.setupCable(),this.baseMap=DS(this.landmarks);const i=Q.save.profile;this.player=new PS(this.scene,this.world,this.profileSkin(i),[]),this.clock=new um,this.time=0,this.hudT=0,this.lastDistrict=null,this.running=!1,this.captureReq=null,this.fovTarget=65,this.waypointMesh=this.makeWaypoint(),this.scene.add(this.waypointMesh),this.walkAcc=0,this.input.onKey=s=>this.onKey(s),this.onBusArrive=s=>{this.player.ride&&this.player.ride.type==="bus"&&Ce(`🚌 到站：${s.name}站（按 E 下车）`,"info",5e3)},this._resize=()=>this.resize(),window.addEventListener("resize",this._resize),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.canvas.addEventListener("click",()=>{!Q.ui.panel&&!Q.ui.dialog&&!Q.ui.mobile&&(Q.ui.photoMode?this.shutter():this.input.requestLock())}),document.addEventListener("pointerlockchange",()=>Q.ui.pointerLocked=document.pointerLockElement===this.canvas),Ji()}pixelRatio(){const t=Q.save.settings.quality,e=window.devicePixelRatio||1;return t==="low"?Math.min(e,.8):t==="medium"?Math.min(e,1):Math.min(e,1.5)}applyQuality(){const t=Q.save.settings,e=t.quality;this.renderer.setPixelRatio(this.pixelRatio()),this.city.viewR=e==="low"?800:e==="medium"?1050:1300,this.city.detailR=e==="low"?380:e==="medium"?480:600,this.npcs.max=e==="low"?22:e==="medium"?40:55,this.water.setReflect(t.reflect&&e!=="low");const i=t.shadows&&e!=="low";i!==this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.enabled=i,this.scene.traverse(s=>s.material&&(s.material.needsUpdate=!0))),this.sky.dir.castShadow=i,this.sky.speed=24/1200*(t.timeSpeed||1),this.resize()}profileSkin(t){if(t&&t.customSkin){const e=document.createElement("canvas");e.width=e.height=64;const i=new Image;return i.onload=()=>{e.getContext("2d").drawImage(i,0,0,64,64),this.player&&this.player.setSkin(e),this.player&&(this.player.char.mat.map.needsUpdate=!0)},i.src=t.customSkin,e}return ih(t?t.skinParams:{gender:"m",seed:1})}refreshSkin(){this.player.setSkin(this.profileSkin(Q.save.profile))}setupCable(){this.landmarks.byId.baiyungate,this.landmarks.byId.baiyun;const t=this.landmarks.toWorld("baiyungate",18,10,-4),e=this.landmarks.toWorld("baiyun",9,6,-9);this.transport.setupCable(t,e)}makeWaypoint(){const t=new He,e=new re(new Re(1.2,400,1.2),new Li({color:16764992,transparent:!0,opacity:.35,depthWrite:!1,fog:!1}));return e.position.y=200,t.add(e),t.visible=!1,t}setWaypoint(t){Q.ui.waypoint=t,this.waypointMesh.visible=!!t,t&&this.waypointMesh.position.set(t.x,0,t.z)}resize(){const t=this.container.clientWidth,e=this.container.clientHeight;!t||!e||(this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.photo&&this.photo.resize())}async spawnAt(t,e){let i,s,r,o;if(t.pos)({x:i,y:s,z:r}=t.pos),o=t.yaw||0;else{const a=this.landmarks.toWorld(t.lm,...t.off);i=a.x,r=a.z,s=a.y,o=t.yaw}this.player.teleport(i,s+.2,r,o),await this.preload(i,r,e),this.player.pos.y=Math.max(this.player.groundAt(i,r,s+3),s),this.lastDistrict=null}async preload(t,e,i){const s=()=>new Promise(u=>setTimeout(u,0));let r=this.landmarks.pending(t,e)+1,o=0;for(;this.landmarks.pending(t,e)>0;)this.landmarks.update(0,0,t,e,0,1),o++,i&&i(Math.min(.6,o/r*.6),"正在搭建景点…"),await s();const a=this.city.viewR;this.city.viewR=Math.min(a,700);let l=999,c=0;for(;l>0&&c<400;)l=this.city.update(t,e,3),c++,i&&i(.6+Math.min(.39,c/120),"正在生成城市街区…"),await s();this.city.viewR=a}start(){if(this.running)return;this.running=!0,this.clock.start();const t=()=>{this.running&&(this.raf=requestAnimationFrame(t),this.frame())};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}dispose(){this.stop(),window.removeEventListener("resize",this._resize),this.ro.disconnect(),this.input.dispose(),this.renderer.dispose(),this.canvas.remove()}frame(){const t=Math.min(.05,this.clock.getDelta());this.time+=t;const e=Q.ui,i=!!e.panel||!!e.dialog||e.fade;this.input.enabled=!i;const s=this.player;s.sensitivity=Q.save.settings.sensitivity||1;const o=this.sky.update(t,this.camera,s.pos).night;Pb(o),this.renderer.toneMappingExposure=1.05+o*.45;const a=s.pos.clone();i?(this.input.consumeLook(),s.char.update(t,0)):s.update(t,this.input,this.sky),e.photoMode&&s.view==="selfie"&&(s.char.setAnim(this.selfiePose||"pose"),s.char.showAccessory("umbrella",!1));const l=Math.hypot(s.pos.x-a.x,s.pos.z-a.z);if(!s.ride&&!s.scripted&&l<5&&(this.walkAcc+=l*2.5,this.walkAcc>50&&(fn.count("walk",Math.round(this.walkAcc)),this.walkAcc=0)),this.landmarks.update(t,this.time,s.pos.x,s.pos.z,o,1),this.city.update(s.pos.x,s.pos.z,1),this.npcs.update(t,s),this.transport.update(t,s.pos.x,s.pos.z)==="done"&&s.ride&&s.ride.type==="cruise"&&this.endCruise(),this.water.update(this.time,this.camera,this.scene.fog,o),this.fovTarget=e.photoMode?this.photoFov||55:65,this.camera.fov+=(this.fovTarget-this.camera.fov)*Math.min(1,t*8),this.camera.updateProjectionMatrix(),s.updateCamera(this.camera,t),this.debugCam){const u=this.debugCam;this.camera.position.set(u[0],u[1],u[2]),this.camera.lookAt(u[3],u[4],u[5])}if(this.sky.weather==="typhoon"&&!e.photoMode&&(this.camera.position.x+=Math.sin(this.time*13)*.04,this.camera.position.y+=Math.sin(this.time*17)*.03),this.updateInteractions(),this.checkDiscovery(),this.photo.filter=e.photoMode?e.filter:"none",this.photo.render(this.scene,this.camera,this.time),this.captureReq){const u=this.captureReq;this.captureReq=null,this.finishCapture(u)}this.hudT-=t,this.hudT<=0&&(this.hudT=.2,this.updateHUD(t)),this.input.endFrame()}updateHUD(t){const e=this.player,i=Q.ui.hud,s=fs(e.pos.x,e.pos.z);i.district=En[s]?En[s].name:"";const r=this.landmarks.nearest(e.pos.x,e.pos.z,160);if(i.place=r?r.def.name:"",i.time=Nl(this.sky.hour),i.period=this.sky.period,i.weather=this.sky.weather,i.weatherName=ns[this.sky.weather].name,i.weatherIcon=this.sky.night>.5&&this.sky.weather==="sunny"?"🌙":ns[this.sky.weather].icon,i.fps=Math.round(1/Math.max(.001,t)),i.heading=this.player.camYaw,i.x=e.pos.x,i.z=e.pos.z,i.alt=Math.round(e.pos.y*2.5),s!==this.lastDistrict){this.lastDistrict;{const o=En[s];o&&ar(`进入 ${o.name}`,o.theme),fn.district(s)}this.lastDistrict=s}if(e.ride&&e.ride.type==="bus"){const o=this.transport.stops[this.transport.busStopIdx];i.ride=this.transport.busWait>0?`🚌 停靠 ${o.name}站 · 按 E 下车`:"🚌 观光巴士行驶中…"}else e.ride&&e.ride.type==="cruise"?i.ride="🚢 曲江夜游中 · WASD 在甲板走动 · C 拍照 · E 提前下船":e.scripted&&this.rideLabel?i.ride=this.rideLabel():i.ride=null;this.saveT=(this.saveT||0)+.2,this.saveT>15&&!e.ride&&!e.scripted&&(this.saveT=0,Q.save.lastPos={x:e.pos.x,y:e.pos.y,z:e.pos.z,yaw:e.camYaw},Pr())}checkDiscovery(){const t=this.player;for(const e of this.landmarks.items){if(e.def.hidden)continue;const i=(e.def.rect?Math.max(e.def.rect[0],e.def.rect[1]):20)+25;Math.abs(e.x-t.pos.x)>i||Math.abs(e.z-t.pos.z)>i||Math.hypot(e.x-t.pos.x,e.z-t.pos.z)<i&&fn.discover(e.def.id)&&ar(`📍 发现新景点：${e.def.name}`,`${e.def.grade}级 · ${En[e.def.district].name} · 按 C 拍照收集`)}}updateInteractions(){const t=Q.ui,e=this.player;if(t.panel||t.dialog||t.photoMode){t.prompt=null;return}if(e.ride){t.prompt=e.ride.type==="bus"?this.transport.busWait>0?{label:"下车"}:null:{label:"下船"},this.currentInteract=null;return}if(e.scripted){t.prompt=null;return}const i=this.interact.nearest(e.pos.x,e.pos.y,e.pos.z),s=this.npcs.nearestTo(e.pos.x,e.pos.z,2.6);let r=null;s&&(!i||Math.hypot(s.x-e.pos.x,s.z-e.pos.z)<Math.hypot(i.x-e.pos.x,i.z-e.pos.z))?r={npc:s}:i&&(r={it:i}),this.currentInteract=r,r?r.npc?t.prompt={label:`与 ${r.npc.name}（${r.npc.typeName}）聊天`}:t.prompt={label:r.it.label}:t.prompt=null}onKey(t){const e=Q.ui;if(e.screen!=="game")return;if(t==="Escape"){e.dialog?this.closeDialog():e.panel?e.panel=null:e.photoMode&&this.togglePhoto(!1);return}if(e.dialog){if(t==="KeyE"||t==="Enter"){const s=e.dialog.options&&e.dialog.options[0];s?s.action():this.closeDialog()}return}const i={KeyM:"map",KeyB:"bag",KeyP:"album",KeyN:"dex",KeyJ:"tasks",KeyH:"help"};if(i[t]){e.panel=e.panel===i[t]?null:i[t],e.panel&&this.input.exitLock();return}if(!e.panel)if(t==="KeyC")this.togglePhoto();else if(t==="KeyV")e.photoMode?this.cyclePhotoView():this.player.view=this.player.view==="first"?"third":"first";else if(t==="KeyE")this.doInteract();else if(e.photoMode&&(t==="Enter"||t==="KeyF"))this.shutter();else if(e.photoMode&&/^Digit[1-6]$/.test(t)){const s=["none","lingnan","night","fresh","bw","pixel"][Number(t.slice(5))-1];e.filter=s}else t==="KeyT"&&(this.sky.hour=(Math.floor(this.sky.hour/6)*6+6)%24+.5,Ce(`⏰ 时间跳转到 ${Nl(this.sky.hour)}`))}togglePhoto(t){const e=Q.ui,i=t??!e.photoMode;e.photoMode=i,i?(this.prevView=this.player.view,this.player.view=e.photoView||"third",this.player.char.showAccessory("camera",!0),this.photoFov=55):(this.player.view=this.prevView==="selfie"?"third":this.prevView||"third",this.player.char.showAccessory("camera",!1),this.player.char.setAnim("idle"))}setPhotoView(t){Q.ui.photoView=t,this.player.view=t,t==="selfie"&&(this.player.camYaw=this.player.modelYaw)}cyclePhotoView(){const t=["third","first","selfie"],e=t.indexOf(Q.ui.photoView);this.setPhotoView(t[(e+1)%3])}shutter(){!Q.ui.photoMode||this.captureReq||(this.captureReq={view:Q.ui.photoView,filter:Q.ui.filter})}finishCapture(t){const e=this.photo.recognize(this.camera,this.landmarks.items.filter(f=>f.loaded||f.lodGroup),this.world),i=this.player,s=En[fs(i.pos.x,i.pos.z)],r=this.sky.night>.5,o=e.map(f=>f.def.name),a=o.length?o.slice(0,3).join(" · "):Q.ui.hud.place||s.name,l=`${s.name} · ${Nl(this.sky.hour)} ${this.sky.period} · ${ns[this.sky.weather].name} · 方块长安`,c=this.photo.capture(this.canvas,{title:a,sub:l});Q.ui.flash=!0,setTimeout(()=>Q.ui.flash=!1,180);const u={id:Date.now(),full:c.full,thumb:c.thumb,title:a,sub:l,landmarks:e.map(f=>f.def.id),filter:t.filter,view:t.view,night:r,district:s.name};this.photo.savePhoto(u),Q.ui.lastPhoto={thumb:c.thumb,title:a},setTimeout(()=>{Q.ui.lastPhoto&&Q.ui.lastPhoto.thumb===c.thumb&&(Q.ui.lastPhoto=null)},3500);const h=fn.photo(u.landmarks,{night:r,selfie:t.view==="selfie"});if(h.length)for(const f of h)Ce(`📖 图鉴解锁·建筑：${this.landmarks.byId[f].def.name}`,"dex",4500);else e.length?Ce("📷 已保存到相册："+a):Ce("📷 已保存到相册（画面中没有识别到景点，靠近一些试试）")}dialog(t){Q.ui.dialog=t,this.input.exitLock()}closeDialog(){const t=Q.ui.dialog;Q.ui.dialog=null,t&&t.onClose&&t.onClose()}doInteract(){const t=this.player;if(t.ride){t.ride.type==="bus"?this.transport.busWait>0?this.alightBus():Ce("巴士行驶中，请到站后再下车"):t.ride.type==="cruise"&&this.endCruise();return}const e=this.currentInteract;if(!e)return;if(e.npc)return this.talkNPC(e.npc);const i=e.it;switch(i.type){case"elevator":return this.dialog({title:"大雁塔 · 登塔",text:"沿塔内阶梯登临各层（游戏中快速抵达）。请选择目的地：",options:[{label:"七层 · 长安眺望台",action:()=>this.rideElevator(bs.DECK_Y)},{label:"五层 · 玄奘文化展",action:()=>this.rideElevator(bs.RESTAURANT_Y)},{label:"取消",action:()=>this.closeDialog()}]});case"elevatorTop":return this.dialog({title:"大雁塔 · 登塔",text:"请选择目的楼层：",options:[{label:"返回地面",action:()=>this.rideElevator(0)},{label:"七层 · 长安眺望台",action:()=>this.rideElevator(bs.DECK_Y)},{label:"五层 · 玄奘文化展",action:()=>this.rideElevator(bs.RESTAURANT_Y)},{label:"取消",action:()=>this.closeDialog()}]});case"shop":Q.ui.shop={id:i.shop,...Qg[i.shop]},Q.ui.panel="shop",this.input.exitLock();return;case"culture":{const s=Mo[i.id];return fn.culture(i.id),this.dialog({title:`${s.icon} ${s.name}`,text:s.desc,options:[{label:"好的",action:()=>this.closeDialog()}]})}case"info":return this.dialog({title:i.label,text:i.text,options:[{label:"知道了",action:()=>this.closeDialog()}]});case"view":{fn.view(i.id);const s=this.landmarks.byId[i.landmark];return this.dialog({title:i.label,text:(s?s.def.desc:"")+`

小贴士：按 C 进入摄影模式拍下眼前的风景。`,options:[{label:"拍照",action:()=>{this.closeDialog(),this.togglePhoto(!0)}},{label:"关闭",action:()=>this.closeDialog()}]})}case"metro":Q.ui.metroFrom=i.station,Q.ui.panel="metro",this.input.exitLock();return;case"bus":return this.busInteract(i.stop);case"cruise":return this.dialog({title:"🚢 曲江夜游",text:`从${ma.find(s=>s.id===i.pier).name}登船，环游曲江池，欣赏亭台、水岸与盛唐灯影。
船票 ¥60（夜晚体验最佳）。`,options:[{label:"购票登船（¥60）",action:()=>this.startCruise(i)},{label:"取消",action:()=>this.closeDialog()}]});case"cable":return this.dialog({title:"🚡 骊山索道",text:i.dir>0?"乘坐索道上山，前往晚照亭方向（¥25）。":"乘坐索道下山，返回华清宫一侧（¥25）。",options:[{label:"购票乘坐（¥25）",action:()=>this.rideCable(i.dir)},{label:"取消",action:()=>this.closeDialog()}]})}}talkNPC(t){t.talkingToPlayer=!0;const e=!t.talked;t.talked=!0,e&&fn.talk();const i=()=>this.dialog({title:`${t.name}`,sub:t.typeName,text:this.npcs.talkLine(t),npc:t,options:[{label:"再聊聊",action:()=>i()},{label:"一起合影",action:()=>{this.closeDialog(),this.togglePhoto(!0),this.setPhotoView("selfie"),t.talkingToPlayer=!0,setTimeout(()=>t.talkingToPlayer=!1,8e3)}},{label:"拜拜",action:()=>this.closeDialog()}],onClose:()=>t.talkingToPlayer=!1});i()}buy(t){const e=Ei[t]||Pn[t],i=e.price||0;if(Q.save.money<i)return Ce("💸 钱不够了，完成任务可以获得奖励","warn");fn.buy(t,i)&&Ce(`购买成功：${e.icon} ${e.name}  -¥${i}`)}metroTravel(t){Q.ui.panel=null;const e=Q.ui.metroFrom;e&&e.id===t.id||this.fade(`🚇 西安地铁 ${t.lines.join(" / ")} · 开往 ${t.name}`,async()=>{const i=$e(t.x,t.z);this.player.teleport(t.x,i+.3,t.z+6,Math.PI),await this.preload(t.x,t.z+6),this.player.pos.y=this.player.groundAt(t.x,t.z+6,i+3),fn.count("metro"),Ce(`已到达 ${t.name}`)})}fade(t,e){const i=Q.ui;i.fade=!0,i.fadeText=t,setTimeout(async()=>{await e(),setTimeout(()=>i.fade=!1,600)},900)}busInteract(t){if(this.transport.busAt(t)){if(Q.save.money<2)return Ce("车费不足","warn");Q.save.money-=2;const e=this.player;e.ride={type:"bus",obj:this.transport.bus,local:new z(.7,3.35,1.4),sit:!0,faceYaw:0},e.view="third",e.camDist=9,fn.count("bus"),Ce("🚌 已上车（¥2）。到站后按 E 下车")}else{const e=this.transport.busETA(t);this.dialog({title:"🚌 长安观光巴士 1 路",text:`线路：钟楼 ⇄ 永宁门 ⇄ 陕历博 ⇄ 大雁塔 ⇄ 大唐不夜城 ⇄ 曲江池
下一班车预计 ${e} 秒后到达 ${t.name}站，请在站台稍候。`,options:[{label:"好的",action:()=>this.closeDialog()}]})}}alightBus(){const t=this.transport.stops[this.transport.busStopIdx],e=this.player;e.ride=null,e.teleport(t.wx,.2,t.wz,e.camYaw),e.pos.y=e.groundAt(t.wx,t.wz,3),Ce(`已在 ${t.name}站 下车`)}startCruise(t){if(this.closeDialog(),Q.save.money<60)return Ce("船票需要 ¥60","warn");Q.save.money-=60,this.cruisePier=ma.find(e=>e.id===t.pier),this.fade("🚢 登船中…",()=>{const e=this.transport.startCruise(this.cruisePier),i=this.player;i.ride={type:"cruise",obj:e,local:new z(0,6.95,-6),free:!0,bounds:[-2.7,2.7,-9.8,3.8]},i.view="third",fn.count("cruise"),this.sky.night<.5&&Ce("💡 提示：夜晚乘船可以看到曲江两岸唐风灯影（按 T 快进时间）","info",6e3)})}endCruise(){const t=this.cruisePier||ma[0];this.transport.boatState.active=!1,this.fade("🚢 靠岸下船…",()=>{const e=this.player;e.ride=null;const i=this.interact.items.find(o=>o.type==="cruise"&&o.pier===t.id),s=i?i.x:t.x,r=i?i.z:t.z;e.teleport(s,.5,r,e.camYaw),e.pos.y=e.groundAt(s,r,3),this.transport.placeIdleBoat(),Ce("感谢乘坐曲江夜游！")})}rideElevator(t){this.closeDialog();const e=this.landmarks.byId.cantontower,i=e.x,s=e.z+bs.CORE[1]+1.3,r=this.player,o=r.pos.y,a=t+(t?0:.6),l=Math.max(3,Math.abs(a-o)/30);let c=0;const u=this.transport.elevatorCab;u.visible=!0,r.view="third",r.camDist=7,this.rideLabel=()=>`🪜 大雁塔登塔 · 第 ${Math.max(1,Math.round(r.pos.y/5))} 层`,r.scripted=(h,f)=>{c+=h;const p=i_(on(c/l,0,1));f.pos.set(i,wp(o,a,p),s),f.modelYaw=0,u.position.set(i,f.pos.y-.2,s),c>=l&&(f.scripted=null,u.visible=!1,this.rideLabel=null,t===0?f.teleport(e.x,.8,e.z+23,0):f.teleport(e.x,t+.05,e.z+5.5,Math.PI),t===bs.DECK_Y?(fn.deck(),ar("🗼 大雁塔 · 七层眺望台","北望古城，南眺曲江！按 C 拍照")):t===bs.RESTAURANT_Y&&ar("📜 玄奘文化展","了解佛经沿丝绸之路抵达长安的故事"))}}rideCable(t){if(this.closeDialog(),Q.save.money<25)return Ce("票价 ¥25","warn");Q.save.money-=25;const e=this.transport,i=this.player,s=e.gondolas[0];s.userData.ridden=!0;let r=0;const o=28;i.view="third",i.camDist=9,this.rideLabel=()=>`🚡 骊山索道 · 海拔 ${Math.round(i.pos.y*2.5)} 米`,i.scripted=(a,l)=>{r+=a/o;const c=t>0?r:1-r,u=e.cablePoint(c);if(s.position.copy(u),l.pos.set(u.x,u.y-2.3,u.z),r>=1){l.scripted=null,this.rideLabel=null,s.userData.ridden=!1;const h=t>0?this.landmarks.toWorld("baiyun",9,.5,-3):this.landmarks.toWorld("baiyungate",18,.3,3);l.teleport(h.x,h.y+.2,h.z,l.camYaw),l.pos.y=l.groundAt(h.x,h.z,h.y+3),fn.count("cable"),Ce(t>0?"已到达骊山 · 晚照亭":"已到达骊山索道下站")}}}}const Xt={game:null},_l=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},FS={class:"menu-root"},OS={key:0,class:"center"},kS={class:"col"},zS={key:0,class:"mc-panel help"},BS={key:1,class:"create mc-panel"},HS={class:"create-body"},VS={class:"form scroll"},GS={class:"row"},WS={class:"row"},XS=["onClick"],$S={class:"row"},qS=["onClick"],YS={class:"row"},jS=["onClick"],KS={class:"row"},ZS={class:"row"},JS={class:"ck"},QS={class:"ck"},t2={class:"ck"},e2={key:0,class:"ck"},n2={class:"row custom"},i2={class:"mc-btn small"},s2={class:"actions"},r2={key:2,class:"spawn mc-panel"},o2={class:"spawn-grid"},a2=["onClick"],l2={class:"sn"},c2={class:"muted"},u2={key:0,class:"found"},h2={class:"actions"},f2={__name:"Menu",emits:["start"],setup(n,{emit:t}){const e=t,i=Te("menu"),s=Te(!1),r=wn(()=>!!Q.save.profile),o=Te(Q.save.profile?Q.save.profile.name:""),a=Rr(Q.save.profile?{...Q.save.profile.skinParams}:{gender:"m",skin:po[0],hair:ur[0],hairStyle:"short",shirt:"#c8282a",pants:"#2a3a5a",shoes:"#222222",longSleeve:!1,shorts:!1,glasses:!1,dress:!1,seed:1}),l=Te(Q.save.profile&&Q.save.profile.customSkin||null),c=[{v:"short",n:"短发"},{v:"long",n:"长发"},{v:"bald",n:"寸头"}],u=Te(null);let h=null;function f(){i.value="create"}function p(){confirm("确定清除所有存档（含图鉴与进度）吗？")&&(a_(),location.reload())}function g(){const L=Math.random;a.gender=L()<.5?"m":"f",a.skin=po[Math.floor(L()*4)],a.hair=ur[Math.floor(L()*ur.length)],a.hairStyle=a.gender==="f"?"long":"short";const M=()=>"#"+Math.floor(L()*16777215).toString(16).padStart(6,"0");a.shirt=M(),a.pants=M(),a.shorts=L()<.3,a.glasses=L()<.2}function _(L){const M=L.target.files[0];if(!M)return;const E=new FileReader;E.onload=()=>{const I=new Image;I.onload=()=>{if(I.width!==64||I.height!==64&&I.height!==32)return alert("请上传 64×64 的皮肤图片");const C=document.createElement("canvas");C.width=C.height=64,C.getContext("2d").drawImage(I,0,0),l.value=C.toDataURL("image/png")},I.src=E.result},E.readAsDataURL(M)}function m(){Q.save.profile={name:o.value.trim()||"长安旅行家",skinParams:{...a},customSkin:l.value},Pr(),Xt.game&&Xt.game.refreshSkin(),i.value="spawn"}function d(L){e("start",L)}function w(){if(l.value){const L=document.createElement("canvas");L.width=L.height=64;const M=new Image;return M.onload=()=>{L.getContext("2d").drawImage(M,0,0),h&&(h.ch.mat.map.needsUpdate=!0)},M.src=l.value,L}return ih(a)}function y(){const L=u.value;if(!L)return;const M=new im({antialias:!0,alpha:!0});M.setPixelRatio(Math.min(2,window.devicePixelRatio)),M.setSize(L.clientWidth,L.clientHeight),M.outputColorSpace=Xe,L.appendChild(M.domElement);const E=new eh;E.add(new lm(16777215,6710886,2.2));const I=new cm(16777215,1.5);I.position.set(2,3,4),E.add(I);const C=new gn(35,L.clientWidth/L.clientHeight,.1,50);C.position.set(0,1.2,4.4),C.lookAt(0,.95,0);const S=new sh(w(),{accessories:["camera"]});E.add(S.group);const D=new re(new Re(1.6,.2,1.6),new hs({color:6265406}));D.position.y=-.1,E.add(D);let Y;const k=new um,W=()=>{Y=requestAnimationFrame(W);const rt=k.getDelta();S.group.rotation.y+=rt*.7,S.update(rt,0),M.render(E,C)};W(),h={r:M,ch:S,stop:()=>cancelAnimationFrame(Y)}}function v(){h&&(h.stop(),h.r.dispose(),h.r.domElement.remove(),h=null)}return pr(i,async L=>{v(),L==="create"&&(await tl(),y())}),pr([()=>({...a}),l],()=>{h&&h.ch.setSkin(w())}),ku(v),(L,M)=>(dt(),pt("div",FS,[M[37]||(M[37]=Oa('<svg class="skyline" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" data-v-632218f5><defs data-v-632218f5><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1" data-v-632218f5><stop offset="0" stop-color="#1a2348" data-v-632218f5></stop><stop offset="0.6" stop-color="#6a4a7a" data-v-632218f5></stop><stop offset="1" stop-color="#f09a5a" data-v-632218f5></stop></linearGradient></defs><rect width="1200" height="400" fill="url(#sk)" data-v-632218f5></rect><g fill="#14161f" data-v-632218f5><rect x="0" y="300" width="1200" height="100" data-v-632218f5></rect><rect x="40" y="250" width="40" height="60" data-v-632218f5></rect><rect x="90" y="220" width="30" height="90" data-v-632218f5></rect><rect x="130" y="260" width="50" height="50" data-v-632218f5></rect><rect x="200" y="200" width="36" height="110" data-v-632218f5></rect><rect x="244" y="230" width="28" height="80" data-v-632218f5></rect><rect x="260" y="258" width="250" height="52" data-v-632218f5></rect><rect x="350" y="205" width="72" height="53" data-v-632218f5></rect><polygon points="338,205 386,174 434,205" data-v-632218f5></polygon><polygon points="548,310 558,274 566,274 570,236 578,236 582,196 590,196 594,152 602,152 608,104 616,152 624,152 628,196 636,196 640,236 648,236 652,274 662,274 672,310" data-v-632218f5></polygon><rect x="606" y="70" width="4" height="36" data-v-632218f5></rect><rect x="440" y="245" width="84" height="65" data-v-632218f5></rect><polygon points="428,245 482,205 536,245" data-v-632218f5></polygon><rect x="459" y="188" width="46" height="27" data-v-632218f5></rect><polygon points="450,188 482,162 514,188" data-v-632218f5></polygon><rect x="660" y="180" width="40" height="130" data-v-632218f5></rect><rect x="710" y="230" width="34" height="80" data-v-632218f5></rect><rect x="760" y="150" width="30" height="160" data-v-632218f5></rect><rect x="800" y="210" width="50" height="100" data-v-632218f5></rect><rect x="870" y="250" width="70" height="60" data-v-632218f5></rect><rect x="950" y="200" width="30" height="110" data-v-632218f5></rect><rect x="990" y="240" width="60" height="70" data-v-632218f5></rect><rect x="1060" y="190" width="36" height="120" data-v-632218f5></rect><rect x="1110" y="260" width="60" height="50" data-v-632218f5></rect></g><g fill="#ff5ab0" opacity="0.85" data-v-632218f5><rect x="575" y="200" width="22" height="4" data-v-632218f5></rect><rect x="579" y="160" width="14" height="3" data-v-632218f5></rect><rect x="571" y="260" width="30" height="4" data-v-632218f5></rect></g><rect x="0" y="330" width="1200" height="70" fill="#1d2a48" data-v-632218f5></rect><g fill="#ff7ac0" opacity="0.35" data-v-632218f5><rect x="570" y="335" width="32" height="60" data-v-632218f5></rect></g></svg>',1)),i.value==="menu"?(dt(),pt("div",OS,[M[17]||(M[17]=P("div",{class:"logo"},[P("div",{class:"big"},"方块长安"),P("div",{class:"sub"},"BLOCK XI'AN · 西安城市观光模拟器")],-1)),P("div",kS,[r.value?(dt(),pt("button",{key:0,class:"mc-btn primary wide",onClick:M[0]||(M[0]=E=>i.value="spawn")},"▶ 继续旅行（"+ft(G(Q).save.profile.name)+"）",1)):Jt("",!0),P("button",{class:oe(["mc-btn wide",{primary:!r.value}]),onClick:f},ft(r.value?"✎ 修改角色":"▶ 开始游戏"),3),P("button",{class:"mc-btn wide",onClick:M[1]||(M[1]=E=>s.value=!s.value)},"❓ 操作说明"),r.value?(dt(),pt("button",{key:1,class:"mc-btn wide small",onClick:p},"🗑 清除存档")):Jt("",!0)]),s.value?(dt(),pt("div",zS,[...M[16]||(M[16]=[Oa("<p data-v-632218f5><kbd data-v-632218f5>W</kbd><kbd data-v-632218f5>A</kbd><kbd data-v-632218f5>S</kbd><kbd data-v-632218f5>D</kbd> 移动 · 鼠标 旋转视角（点击画面锁定鼠标）· <kbd data-v-632218f5>Shift</kbd> 奔跑 · <kbd data-v-632218f5>空格</kbd> 跳跃</p><p data-v-632218f5><kbd data-v-632218f5>V</kbd> 第一/第三人称 · <kbd data-v-632218f5>C</kbd> 摄影模式 · <kbd data-v-632218f5>E</kbd> 交互/对话/乘车 · <kbd data-v-632218f5>T</kbd> 时间快进</p><p data-v-632218f5><kbd data-v-632218f5>M</kbd> 地图 · <kbd data-v-632218f5>B</kbd> 背包 · <kbd data-v-632218f5>P</kbd> 相册 · <kbd data-v-632218f5>N</kbd> 图鉴 · <kbd data-v-632218f5>J</kbd> 任务 · <kbd data-v-632218f5>H</kbd> 帮助 · <kbd data-v-632218f5>Esc</kbd> 关闭</p><p data-v-632218f5>移动端：建议横屏游玩，左侧虚拟摇杆移动，右侧滑动旋转视角，横屏时可用底部“⛶ 全屏”按钮。</p>",4)])])):Jt("",!0),M[18]||(M[18]=P("div",{class:"foot muted"},"西安地图比例缩小 · 1公里 ≈ 200格 · 8大区域 20+ 景点",-1))])):i.value==="create"?(dt(),pt("div",BS,[M[34]||(M[34]=P("div",{class:"mc-title"},"创建你的方块角色",-1)),P("div",HS,[P("div",{class:"preview",ref_key:"previewEl",ref:u},null,512),P("div",VS,[P("label",null,[M[19]||(M[19]=ve("名字 ",-1)),sn(P("input",{"onUpdate:modelValue":M[2]||(M[2]=E=>o.value=E),maxlength:"10",placeholder:"长安旅行家"},null,512),[[lr,o.value]])]),P("div",GS,[M[20]||(M[20]=P("span",null,"性别",-1)),P("button",{class:oe(["mc-btn small",{active:a.gender==="m"}]),onClick:M[3]||(M[3]=E=>a.gender="m")},"男",2),P("button",{class:oe(["mc-btn small",{active:a.gender==="f"}]),onClick:M[4]||(M[4]=E=>a.gender="f")},"女",2),P("button",{class:"mc-btn small",onClick:g},"🎲 随机")]),P("div",WS,[M[21]||(M[21]=P("span",null,"肤色",-1)),(dt(!0),pt(Zt,null,ce(G(po),E=>(dt(),pt("i",{key:E,class:oe(["sw",{on:a.skin===E}]),style:Dn({background:E}),onClick:I=>a.skin=E},null,14,XS))),128))]),P("div",$S,[M[22]||(M[22]=P("span",null,"发色",-1)),(dt(!0),pt(Zt,null,ce(G(ur),E=>(dt(),pt("i",{key:E,class:oe(["sw",{on:a.hair===E}]),style:Dn({background:E}),onClick:I=>a.hair=E},null,14,qS))),128))]),P("div",YS,[M[23]||(M[23]=P("span",null,"发型",-1)),(dt(),pt(Zt,null,ce(c,E=>P("button",{key:E.v,class:oe(["mc-btn small",{active:a.hairStyle===E.v}]),onClick:I=>a.hairStyle=E.v},ft(E.n),11,jS)),64))]),P("div",KS,[M[24]||(M[24]=P("span",null,"上衣",-1)),sn(P("input",{type:"color","onUpdate:modelValue":M[5]||(M[5]=E=>a.shirt=E)},null,512),[[lr,a.shirt]]),M[25]||(M[25]=P("span",null,"裤子",-1)),sn(P("input",{type:"color","onUpdate:modelValue":M[6]||(M[6]=E=>a.pants=E)},null,512),[[lr,a.pants]]),M[26]||(M[26]=P("span",null,"鞋子",-1)),sn(P("input",{type:"color","onUpdate:modelValue":M[7]||(M[7]=E=>a.shoes=E)},null,512),[[lr,a.shoes]])]),P("div",ZS,[P("label",JS,[sn(P("input",{type:"checkbox","onUpdate:modelValue":M[8]||(M[8]=E=>a.longSleeve=E)},null,512),[[Bo,a.longSleeve]]),M[27]||(M[27]=ve(" 长袖",-1))]),P("label",QS,[sn(P("input",{type:"checkbox","onUpdate:modelValue":M[9]||(M[9]=E=>a.shorts=E)},null,512),[[Bo,a.shorts]]),M[28]||(M[28]=ve(" 短裤",-1))]),P("label",t2,[sn(P("input",{type:"checkbox","onUpdate:modelValue":M[10]||(M[10]=E=>a.glasses=E)},null,512),[[Bo,a.glasses]]),M[29]||(M[29]=ve(" 眼镜",-1))]),a.gender==="f"?(dt(),pt("label",e2,[sn(P("input",{type:"checkbox","onUpdate:modelValue":M[11]||(M[11]=E=>a.dress=E)},null,512),[[Bo,a.dress]]),M[30]||(M[30]=ve(" 裙子",-1))])):Jt("",!0)]),P("div",n2,[M[32]||(M[32]=P("span",null,"自定义皮肤",-1)),P("label",i2,[M[31]||(M[31]=ve("上传 64×64 PNG",-1)),P("input",{type:"file",accept:"image/png",hidden:"",onChange:_},null,32)]),l.value?(dt(),pt("button",{key:0,class:"mc-btn small",onClick:M[12]||(M[12]=E=>l.value=null)},"移除")):Jt("",!0)]),M[33]||(M[33]=P("div",{class:"muted hint"},"支持标准 Minecraft 皮肤格式（64×64）。",-1))])]),P("div",s2,[P("button",{class:"mc-btn",onClick:M[13]||(M[13]=E=>i.value="menu")},"返回"),P("button",{class:"mc-btn primary",onClick:m},"确认角色 ▶")])])):i.value==="spawn"?(dt(),pt("div",r2,[M[36]||(M[36]=P("div",{class:"mc-title"},"选择出生地点",-1)),P("div",o2,[G(Q).save.lastPos?(dt(),pt("button",{key:0,class:"spawn-card last",onClick:M[14]||(M[14]=E=>d({pos:G(Q).save.lastPos,yaw:G(Q).save.lastPos.yaw}))},[...M[35]||(M[35]=[P("div",{class:"sn"},"📍 上次位置",-1),P("div",{class:"muted"},"继续上次的旅程",-1)])])):Jt("",!0),(dt(!0),pt(Zt,null,ce(G(US),E=>(dt(),pt("button",{key:E.id,class:"spawn-card",onClick:I=>d(E)},[P("div",l2,ft(E.name),1),P("div",c2,ft(E.desc),1),G(Q).save.discovered.includes(E.lm)?(dt(),pt("div",u2,"✔ 已到访")):Jt("",!0)],8,a2))),128))]),P("div",h2,[P("button",{class:"mc-btn",onClick:M[15]||(M[15]=E=>i.value="menu")},"返回")])])):Jt("",!0)]))}},d2=_l(f2,[["__scopeId","data-v-632218f5"]]),p2={key:0,class:"mc-panel panel big"},m2={class:"map-body"},g2={class:"map-side scroll"},_2={class:"legend"},v2={class:"muted"},x2={key:0,class:"sel mc-panel"},y2={class:"muted"},M2={key:0,class:"desc"},b2={key:1,class:"desc muted"},S2={class:"lmlist"},w2=["onClick"],E2={class:"muted"},T2={key:0},A2={key:1,class:"mc-panel panel big"},C2={class:"head"},R2={class:"muted"},P2={class:"checklist"},L2={key:0,class:"viewer"},D2=["src"],I2={class:"vbar"},U2={class:"muted"},N2=["href","download"],F2={key:1,class:"photos scroll"},O2={key:0,class:"muted empty"},k2=["onClick"],z2=["src"],B2={class:"pt"},H2={key:2,class:"mc-panel panel big"},V2={class:"head"},G2={class:"muted"},W2={class:"tabs"},X2=["onClick"],$2={class:"dex scroll"},q2={class:"ci"},Y2={class:"cb"},j2={key:0,class:"muted"},K2={class:"muted small"},Z2={class:"desc"},J2={class:"ci"},Q2={class:"cb"},tw={class:"desc"},ew={class:"ci"},nw={class:"cb"},iw={class:"desc"},sw={key:3,class:"mc-panel panel"},rw={class:"head"},ow={class:"slots"},aw=["title"],lw={class:"si"},cw={class:"sn"},uw={key:0,class:"cnt"},hw={key:0,class:"muted"},fw={class:"slots"},dw={class:"si"},pw={class:"sn"},mw={class:"stats"},gw={key:4,class:"mc-panel panel"},_w={class:"scroll tasklist"},vw={class:"muted small"},xw={class:"rw"},yw={class:"muted sub"},Mw={class:"muted"},bw={class:"rw"},Sw={class:"muted"},ww={class:"muted small"},Ew={class:"rw"},Tw={key:5,class:"mc-panel panel"},Aw={class:"set"},Cw={class:"srow"},Rw=["onClick"],Pw={class:"srow"},Lw={class:"srow"},Dw=["onClick"],Iw={class:"srow"},Uw=["onClick"],Nw={class:"srow"},Fw=["onClick"],Ow={class:"srow"},kw={key:6,class:"mc-panel panel"},zw={class:"head"},Bw={class:"mc-title"},Hw={class:"greet"},Vw={class:"shop"},Gw={class:"si"},Ww={class:"cb"},Xw={class:"muted small"},$w=["onClick"],qw={key:0,class:"have"},Yw={key:7,class:"mc-panel panel"},jw={class:"muted"},Kw={class:"metro scroll"},Zw=["disabled","onClick"],Jw={class:"lines"},Qw={class:"muted small"},tE={key:8,class:"mc-panel panel"},eE={__name:"Panels",setup(n){const t=Q.ui,e=Q.save.settings,i=()=>t.panel=null,s=[{v:"low",n:"流畅"},{v:"medium",n:"均衡"},{v:"high",n:"高清"}],r=[{h:7,n:"早晨"},{h:14,n:"下午"},{h:18.2,n:"黄昏"},{h:21,n:"夜晚"}],o=[{id:"building",n:"🏛️ 建筑"},{id:"food",n:"🍜 食物"},{id:"culture",n:"🏮 文化"}],a=Te("building"),l={changancenter:"前往钟楼，观察古城四条大街的交汇。",drum:"在鼓楼聆听晨钟暮鼓。",citywall:"从永宁门登上明城墙。",calligraphy:"前往碑林博物馆或书院门。",terracotta:"走进兵马俑一号坑。",tangdance:"夜游大唐不夜城或大唐芙蓉园。",tangart:"在陕西历史博物馆欣赏唐代艺术。",tangpalace:"探访大明宫含元殿遗址。",huaqing:"前往骊山脚下的华清宫。",silkroad:"探访清真大寺、小雁塔或大唐西市。",qin:"前往秦始皇陵。",qinling:"到秦岭北麓亲近自然。"},c=wn(()=>Xt.game?Xt.game.landmarks.items.filter(ut=>!ut.def.hidden):[]),u=ut=>Q.save.discovered.includes(ut.def.id)||!!Q.save.photographed[ut.def.id],h=wn(()=>c.value.length+Object.keys(Ei).length+Object.keys(Mo).length),f=wn(()=>Object.keys(Q.save.photographed).length+Q.save.foods.length+Q.save.culture.length),p=wn(()=>(Q.save.daily.ids||[]).map(ut=>{const K=ol.find(O=>O.id===ut);return{...K,done:!!Q.save.daily.done[ut],p:Tp(K)}})),g=ut=>Ei[ut]||Pn[ut],_={"1号线":"#1d8a53","2号线":"#c72535","3号线":"#8d4d92","4号线":"#62a746","6号线":"#245f9e","9号线":"#ef7b24","14号线":"#00a2a5"},m=ut=>_[ut]||"#888";function d(){Pr(),Xt.game&&(Xt.game.applyQuality(),Xt.game.sensitivity=e.sensitivity)}const w=Te(Xt.game?Xt.game.sky.weatherLock:null);function y(ut){Xt.game.sky.setWeather(ut,!0),w.value=ut}function v(){Xt.game.sky.unlock(),w.value=null}function L(ut){Xt.game.sky.hour=ut}function M(){t.panel=null,Xt.game.stop(),Q.ui.screen="menu",Xt.game.input.exitLock()}const E=Te([]),I=Te(null);async function C(){E.value=Xt.game?await Xt.game.photo.listPhotos():[]}async function S(ut){confirm("删除这张照片？")&&(await Xt.game.photo.deletePhoto(ut.id),I.value=null,C())}const D=Te(null),Y=Te(null),k=Te(null),W={cx:0,cz:0,zoom:1};let rt=null;const tt=wn(()=>c.value.slice().sort((ut,K)=>(u(K)?1:0)-(u(ut)?1:0)));function lt(ut){const K=Xt.game.player.pos,O=Math.hypot(ut.x-K.x,ut.z-K.z)*5;return O>1e3?(O/1e3).toFixed(1)+" km":Math.round(O)+" m"}function $(ut){k.value=ut,W.cx=ut.x,W.cz=ut.z,W.zoom=Math.max(W.zoom,3),St()}function yt(ut){Xt.game.setWaypoint({x:ut.x,z:ut.z,name:ut.def.name}),St()}function St(){const ut=D.value,K=Xt.game;if(!ut||!K)return;const O=Y.value.clientWidth,At=Y.value.clientHeight;ut.width=O,ut.height=At;const A=ut.getContext("2d"),N=K.baseMap,T=Math.min(O/N.canvas.width,At/N.canvas.height),nt=T*W.zoom*N.scale,q=(B,j)=>[(B-W.cx)*nt+O/2,(j-W.cz)*nt+At/2];A.fillStyle="#5a8ab8",A.fillRect(0,0,O,At);const[J,ot]=q(N.bounds.x0,N.bounds.z0);A.imageSmoothingEnabled=W.zoom<4,A.drawImage(N.canvas,J,ot,N.canvas.width*T*W.zoom,N.canvas.height*T*W.zoom);const gt=IS();A.textAlign="center";for(const B in gt){const j=Ur(gt[B][0],gt[B][1]),[Z,bt]=q(j.x,j.z);A.font=`bold ${Math.min(26,12+W.zoom*3)}px "Microsoft YaHei",sans-serif`,A.fillStyle="rgba(40,30,20,0.55)",A.fillText(En[B].name,Z,bt)}for(const B of Eo){const[j,Z]=q(B.x,B.z);A.fillStyle="#b8222a",A.fillRect(j-4,Z-4,8,8),W.zoom>3&&(A.font="11px sans-serif",A.fillStyle="#7a1010",A.fillText(B.name,j,Z+15))}for(const B of c.value){const[j,Z]=q(B.x,B.z),bt=u(B);if(A.fillStyle=Q.save.photographed[B.def.id]?"#ffd040":bt?"#ffffff":"#555",A.strokeStyle=k.value===B?"#ff3030":"#000",A.lineWidth=k.value===B?3:2,A.beginPath(),A.arc(j,Z,B.def.grade==="S"?7:5,0,Math.PI*2),A.fill(),A.stroke(),W.zoom>1.6||B.def.grade==="S"){A.font=`bold ${B.def.grade==="S"?13:11}px "Microsoft YaHei",sans-serif`,A.lineWidth=3,A.strokeStyle="#000";const vt=bt?B.def.name:"？";A.strokeText(vt,j,Z-10),A.fillStyle="#fff",A.fillText(vt,j,Z-10)}}if(t.waypoint){const[B,j]=q(t.waypoint.x,t.waypoint.z);A.fillStyle="#ffd040",A.beginPath(),A.moveTo(B,j),A.lineTo(B-8,j-16),A.lineTo(B+8,j-16),A.fill()}const at=K.player.pos,[b,x]=q(at.x,at.z);A.save(),A.translate(b,x),A.rotate(-K.player.camYaw),A.fillStyle="#ff3a3a",A.strokeStyle="#fff",A.lineWidth=2,A.beginPath(),A.moveTo(0,-11),A.lineTo(8,9),A.lineTo(0,4),A.lineTo(-8,9),A.closePath(),A.fill(),A.stroke(),A.restore(),A.textAlign="left";const F=200*nt;A.fillStyle="#000",A.fillRect(16,At-20,F,4),A.font="12px sans-serif",A.fillText("1 km",16,At-26),W.k=nt,W.T=q}function Lt(ut){rt={x:ut.clientX,y:ut.clientY,cx:W.cx,cz:W.cz,moved:!1}}function mt(ut){if(!rt)return;const K=ut.clientX-rt.x,O=ut.clientY-rt.y;Math.abs(K)+Math.abs(O)>4&&(rt.moved=!0),W.cx=rt.cx-K/W.k,W.cz=rt.cz-O/W.k,St()}function st(ut){if(rt&&!rt.moved&&ut.type==="mouseup"){const K=D.value.getBoundingClientRect(),O=ut.clientX-K.left,At=ut.clientY-K.top;let A=null,N=18;for(const T of c.value){const[nt,q]=W.T(T.x,T.z),J=Math.hypot(nt-O,q-At);J<N&&(N=J,A=T)}A&&(k.value=A,St())}rt=null}function U(ut){W.zoom=Math.max(.8,Math.min(14,W.zoom*(ut.deltaY<0?1.2:1/1.2))),St()}let ct=null;function Tt(ut){const K=ut.touches[0];ct={x:K.clientX,y:K.clientY,cx:W.cx,cz:W.cz,d:ut.touches.length>1?Math.hypot(ut.touches[0].clientX-ut.touches[1].clientX,ut.touches[0].clientY-ut.touches[1].clientY):0,zoom:W.zoom}}function Mt(ut){if(ct){if(ut.touches.length>1&&ct.d){const K=Math.hypot(ut.touches[0].clientX-ut.touches[1].clientX,ut.touches[0].clientY-ut.touches[1].clientY);W.zoom=Math.max(.8,Math.min(14,ct.zoom*K/ct.d))}else{const K=ut.touches[0];W.cx=ct.cx-(K.clientX-ct.x)/W.k,W.cz=ct.cz-(K.clientY-ct.y)/W.k}St()}}return pr(()=>t.panel,async ut=>{if(ut==="album"&&(I.value=null,C()),ut==="map"){await tl();const K=Xt.game.player.pos;W.cx=K.x,W.cz=K.z,W.zoom=3,St()}ut==="settings"&&(w.value=Xt.game.sky.weatherLock)}),(ut,K)=>G(t).panel?(dt(),pt("div",{key:0,class:"overlay",onMousedown:pn(i,["self"])},[G(t).panel==="map"?(dt(),pt("div",p2,[P("div",{class:"head"},[K[8]||(K[8]=P("span",{class:"mc-title"},"🗺 西安地图",-1)),K[9]||(K[9]=P("span",{class:"muted"},"滚轮缩放 · 拖动平移 · 点击景点设置导航",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",m2,[P("div",{class:"map-wrap",ref_key:"mapWrap",ref:Y},[P("canvas",{ref_key:"mapCv",ref:D,onMousedown:Lt,onMousemove:mt,onMouseup:st,onMouseleave:st,onWheel:pn(U,["prevent"]),onTouchstart:pn(Tt,["prevent"]),onTouchmove:pn(Mt,["prevent"])},null,544)],512),P("div",g2,[P("div",_2,[(dt(!0),pt(Zt,null,ce(G(En),(O,At)=>(dt(),pt("div",{key:At,class:"lg"},[P("i",{style:Dn({background:O.color})},null,4),ve(ft(O.name),1),P("span",v2,ft(O.theme),1)]))),128)),K[10]||(K[10]=Oa('<div class="lg" data-v-2598844b><i style="background:#ffd040;border-radius:50%;" data-v-2598844b></i>已拍摄 <i style="background:#fff;border-radius:50%;margin-left:8px;" data-v-2598844b></i>已发现 <i style="background:#555;border-radius:50%;margin-left:8px;" data-v-2598844b></i>未发现</div><div class="lg" data-v-2598844b><i style="background:#b8222a;" data-v-2598844b></i>地铁站 <i style="background:#d8302a;width:18px;height:3px;margin-left:8px;" data-v-2598844b></i>观光巴士</div>',2))]),k.value?(dt(),pt("div",x2,[P("div",null,[P("span",{class:oe(["tag",k.value.def.grade])},ft(k.value.def.grade),3),P("b",null,ft(u(k.value)?k.value.def.name:"？？？"),1)]),P("div",y2,ft(G(En)[k.value.def.district].name)+" · 距离 "+ft(lt(k.value)),1),u(k.value)?(dt(),pt("div",M2,ft(k.value.def.desc),1)):(dt(),pt("div",b2,"尚未发现的景点，前往探索吧！")),P("button",{class:"mc-btn small green",onClick:K[0]||(K[0]=O=>yt(k.value))},"📍 设为导航目标")])):Jt("",!0),G(t).waypoint?(dt(),pt("button",{key:1,class:"mc-btn small",onClick:K[1]||(K[1]=O=>G(Xt).game.setWaypoint(null))},"取消导航")):Jt("",!0),P("div",S2,[(dt(!0),pt(Zt,null,ce(tt.value,O=>(dt(),pt("div",{key:O.def.id,class:oe(["lmi",{on:k.value===O}]),onClick:At=>$(O)},[P("span",{class:oe(["tag",O.def.grade])},ft(O.def.grade),3),ve(ft(u(O)?O.def.name:"？？？")+" ",1),P("span",E2,ft(G(En)[O.def.district].name),1),G(Q).save.photographed[O.def.id]?(dt(),pt("span",T2,"📷")):Jt("",!0)],10,w2))),128))])])])])):G(t).panel==="album"?(dt(),pt("div",A2,[P("div",C2,[K[11]||(K[11]=P("span",{class:"mc-title"},"📷 长安旅游相册",-1)),P("span",R2,"共 "+ft(E.value.length)+" 张",1),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",P2,[(dt(!0),pt(Zt,null,ce(c.value,O=>(dt(),pt("span",{key:O.def.id,class:oe(["ck",{on:G(Q).save.photographed[O.def.id]}])},ft(G(Q).save.photographed[O.def.id]?"☑":"☐")+" "+ft(u(O)?O.def.name:"？？？"),3))),128))]),I.value?(dt(),pt("div",L2,[P("img",{src:I.value.full},null,8,D2),P("div",I2,[P("b",null,ft(I.value.title),1),P("span",U2,ft(I.value.sub),1),P("a",{class:"mc-btn small green",href:I.value.full,download:"方块长安-"+I.value.id+".jpg"},"⬇ 下载",8,N2),P("button",{class:"mc-btn small",onClick:K[2]||(K[2]=O=>S(I.value))},"🗑 删除"),P("button",{class:"mc-btn small",onClick:K[3]||(K[3]=O=>I.value=null)},"返回")])])):(dt(),pt("div",F2,[E.value.length?Jt("",!0):(dt(),pt("div",O2,[...K[12]||(K[12]=[ve("还没有照片。按 ",-1),P("kbd",null,"C",-1),ve(" 进入摄影模式，点击画面或按 ",-1),P("kbd",null,"F",-1),ve(" 拍照。",-1)])])),(dt(!0),pt(Zt,null,ce(E.value,O=>(dt(),pt("div",{key:O.id,class:"ph",onClick:At=>I.value=O},[P("img",{src:O.thumb},null,8,z2),P("div",B2,ft(O.title),1)],8,k2))),128))]))])):G(t).panel==="dex"?(dt(),pt("div",H2,[P("div",V2,[K[13]||(K[13]=P("span",{class:"mc-title"},"📖 西安百科图鉴",-1)),P("span",G2,"完成度 "+ft(f.value)+"/"+ft(h.value),1),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",W2,[(dt(),pt(Zt,null,ce(o,O=>P("button",{key:O.id,class:oe(["mc-btn small",{active:a.value===O.id}]),onClick:At=>a.value=O.id},ft(O.n),11,X2)),64))]),P("div",$2,[a.value==="building"?(dt(!0),pt(Zt,{key:0},ce(c.value,O=>(dt(),pt("div",{key:O.def.id,class:oe(["card",{locked:!G(Q).save.photographed[O.def.id]}])},[P("div",q2,ft(G(Q).save.photographed[O.def.id]?"🏛️":"❔"),1),P("div",Y2,[P("div",null,[P("span",{class:oe(["tag",O.def.grade])},ft(O.def.grade)+"级",3),P("b",null,ft(G(Q).save.photographed[O.def.id]?O.def.name:u(O)?O.def.name+"（未拍摄）":"？？？"),1),O.def.alias&&G(Q).save.photographed[O.def.id]?(dt(),pt("span",j2," · "+ft(O.def.alias),1)):Jt("",!0)]),P("div",K2,ft(G(En)[O.def.district].name)+" · "+ft(G(pS)[O.def.grade]),1),P("div",Z2,ft(G(Q).save.photographed[O.def.id]?O.def.desc:"拍摄该景点以解锁介绍。"),1)])],2))),128)):a.value==="food"?(dt(!0),pt(Zt,{key:1},ce(G(Ei),(O,At)=>(dt(),pt("div",{key:At,class:oe(["card",{locked:!G(Q).save.foods.includes(At)}])},[P("div",J2,ft(G(Q).save.foods.includes(At)?O.icon:"❔"),1),P("div",Q2,[P("b",null,ft(G(Q).save.foods.includes(At)?O.name:"？？？"),1),P("div",tw,ft(G(Q).save.foods.includes(At)?O.desc:"在西安街巷的小吃店购买以解锁。"),1)])],2))),128)):(dt(!0),pt(Zt,{key:2},ce(G(Mo),(O,At)=>(dt(),pt("div",{key:At,class:oe(["card",{locked:!G(Q).save.culture.includes(At)}])},[P("div",ew,ft(G(Q).save.culture.includes(At)?O.icon:"❔"),1),P("div",nw,[P("b",null,ft(G(Q).save.culture.includes(At)?O.name:"？？？"),1),P("div",iw,ft(G(Q).save.culture.includes(At)?O.desc:l[At]),1)])],2))),128))])])):G(t).panel==="bag"?(dt(),pt("div",sw,[P("div",rw,[K[14]||(K[14]=P("span",{class:"mc-title"},"🎒 背包",-1)),P("span",null,"💰 ¥"+ft(G(Q).save.money),1),P("button",{class:"mc-btn small",onClick:i},"✕")]),K[15]||(K[15]=P("div",{class:"muted sub"},"纪念品",-1)),P("div",ow,[(dt(!0),pt(Zt,null,ce(G(Q).save.items,(O,At)=>(dt(),pt("div",{key:At,class:"slot",title:G(Pn)[At].name+"："+G(Pn)[At].desc},[P("span",lw,ft(G(Pn)[At].icon),1),P("span",cw,ft(G(Pn)[At].name),1),O>1?(dt(),pt("span",uw,"×"+ft(O),1)):Jt("",!0)],8,aw))),128)),Object.keys(G(Q).save.items).length?Jt("",!0):(dt(),pt("div",hw,"空空如也，完成任务获得纪念品吧。"))]),K[16]||(K[16]=P("div",{class:"muted sub"},"品尝过的美食",-1)),P("div",fw,[(dt(!0),pt(Zt,null,ce(G(Q).save.foods,O=>(dt(),pt("div",{key:O,class:"slot"},[P("span",dw,ft(G(Ei)[O].icon),1),P("span",pw,ft(G(Ei)[O].name),1)]))),128))]),K[17]||(K[17]=P("div",{class:"muted sub"},"旅行统计",-1)),P("div",mw,[P("span",null,"📷 拍照 "+ft(G(Q).save.stats.photos),1),P("span",null,"🚶 步行 "+ft(Math.round(G(Q).save.stats.walk))+" 米",1),P("span",null,"🚌 巴士 "+ft(G(Q).save.stats.bus),1),P("span",null,"🚇 地铁 "+ft(G(Q).save.stats.metro),1),P("span",null,"🚢 夜游 "+ft(G(Q).save.stats.cruise),1),P("span",null,"💬 聊天 "+ft(G(Q).save.talked),1),P("span",null,"📍 景点 "+ft(G(Q).save.discovered.length)+"/"+ft(c.value.length),1)])])):G(t).panel==="tasks"?(dt(),pt("div",gw,[P("div",{class:"head"},[K[18]||(K[18]=P("span",{class:"mc-title"},"📌 任务",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",_w,[K[21]||(K[21]=P("div",{class:"muted sub"},"新手任务 · 长安初体验",-1)),(dt(!0),pt(Zt,null,ce(G(ts),(O,At)=>(dt(),pt("div",{key:O.id,class:oe(["trow",{done:At<G(Q).save.novice,cur:At===G(Q).save.novice}])},[P("span",null,ft(At<G(Q).save.novice?"☑":"□"),1),P("div",null,[P("b",null,ft(O.title),1),P("div",vw,ft(O.desc),1)]),P("span",xw,"¥"+ft(O.reward.money),1)],2))),128)),P("div",yw,"每日任务 · "+ft(G(Q).save.daily.date),1),(dt(!0),pt(Zt,null,ce(p.value,O=>(dt(),pt("div",{key:O.id,class:oe(["trow",{done:O.done}])},[P("span",null,ft(O.done?"☑":"□"),1),P("div",null,[P("b",null,ft(O.title),1),K[19]||(K[19]=ve()),P("span",Mw,ft(O.p[0])+"/"+ft(O.p[1]),1)]),P("span",bw,"¥"+ft(O.reward.money),1)],2))),128)),K[22]||(K[22]=P("div",{class:"muted sub"},"城市任务",-1)),(dt(!0),pt(Zt,null,ce(G(Sp),O=>(dt(),pt("div",{key:O.id,class:oe(["trow",{done:G(Q).save.quests[O.id]}])},[P("span",null,ft(G(Q).save.quests[O.id]?"☑":"□"),1),P("div",null,[P("b",null,ft(O.title),1),K[20]||(K[20]=ve()),P("span",Sw,ft(G(l_)(O.cond).join("/")),1),P("div",ww,ft(O.desc),1)]),P("span",Ew,ft(G(Pn)[O.reward.item].icon),1)],2))),128))])])):G(t).panel==="settings"?(dt(),pt("div",Tw,[P("div",{class:"head"},[K[23]||(K[23]=P("span",{class:"mc-title"},"⚙ 设置",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",Aw,[P("div",Cw,[K[24]||(K[24]=P("span",null,"画质",-1)),(dt(),pt(Zt,null,ce(s,O=>P("button",{key:O.v,class:oe(["mc-btn small",{active:G(e).quality===O.v}]),onClick:At=>{G(e).quality=O.v,d()}},ft(O.n),11,Rw)),64))]),P("div",Pw,[K[25]||(K[25]=P("span",null,"水面倒影",-1)),P("button",{class:oe(["mc-btn small",{active:G(e).reflect}]),onClick:K[4]||(K[4]=O=>{G(e).reflect=!G(e).reflect,d()})},ft(G(e).reflect?"开":"关"),3),K[26]||(K[26]=P("span",null,"阴影",-1)),P("button",{class:oe(["mc-btn small",{active:G(e).shadows}]),onClick:K[5]||(K[5]=O=>{G(e).shadows=!G(e).shadows,d()})},ft(G(e).shadows?"开":"关"),3),K[27]||(K[27]=P("span",null,"小地图",-1)),P("button",{class:oe(["mc-btn small",{active:G(e).showMinimap}]),onClick:K[6]||(K[6]=O=>{G(e).showMinimap=!G(e).showMinimap,d()})},ft(G(e).showMinimap?"开":"关"),3)]),P("div",Lw,[K[28]||(K[28]=P("span",null,"时间流速",-1)),(dt(),pt(Zt,null,ce([0,.5,1,3,10],O=>P("button",{key:O,class:oe(["mc-btn small",{active:G(e).timeSpeed===O}]),onClick:At=>{G(e).timeSpeed=O,d()}},ft(O===0?"暂停":O+"×"),11,Dw)),64))]),P("div",Iw,[K[29]||(K[29]=P("span",null,"设定时间",-1)),(dt(),pt(Zt,null,ce(r,O=>P("button",{key:O.h,class:"mc-btn small",onClick:At=>L(O.h)},ft(O.n),9,Uw)),64))]),P("div",Nw,[K[30]||(K[30]=P("span",null,"天气",-1)),P("button",{class:oe(["mc-btn small",{active:!w.value}]),onClick:v},"随机",2),(dt(!0),pt(Zt,null,ce(G(ns),(O,At)=>(dt(),pt("button",{key:At,class:oe(["mc-btn small",{active:w.value===At}]),onClick:A=>y(At)},ft(O.icon)+" "+ft(O.name),11,Fw))),128))]),P("div",Ow,[K[31]||(K[31]=P("span",null,"鼠标灵敏度",-1)),sn(P("input",{type:"range",min:"0.3",max:"2.5",step:"0.1","onUpdate:modelValue":K[7]||(K[7]=O=>G(e).sensitivity=O),onChange:d},null,544),[[lr,G(e).sensitivity,void 0,{number:!0}]]),ve(" "+ft(G(e).sensitivity),1)]),P("div",{class:"srow"},[P("button",{class:"mc-btn small",onClick:M},"返回主菜单（修改角色/换出生点）")]),K[32]||(K[32]=P("div",{class:"muted small"},"提示：低端设备请选择“流畅”，并关闭水面倒影与阴影。",-1))])])):G(t).panel==="shop"&&G(t).shop?(dt(),pt("div",kw,[P("div",zw,[P("span",Bw,"🏮 "+ft(G(t).shop.name),1),P("span",null,"💰 ¥"+ft(G(Q).save.money),1),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",Hw,"“"+ft(G(t).shop.greet)+"”",1),P("div",Vw,[(dt(!0),pt(Zt,null,ce(G(t).shop.items,O=>(dt(),pt("div",{key:O,class:"sitem"},[P("span",Gw,ft(g(O).icon),1),P("div",Ww,[P("b",null,ft(g(O).name),1),P("div",Xw,ft(g(O).desc),1)]),P("button",{class:"mc-btn small primary",onClick:At=>G(Xt).game.buy(O)},"¥"+ft(g(O).price)+" 购买",9,$w),G(Q).save.foods.includes(O)||G(Q).save.items[O]?(dt(),pt("span",qw,"✔")):Jt("",!0)]))),128))])])):G(t).panel==="metro"?(dt(),pt("div",Yw,[P("div",{class:"head"},[K[33]||(K[33]=P("span",{class:"mc-title"},"🚇 西安地铁 · 快速传送",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",jw,"当前车站："+ft(G(t).metroFrom&&G(t).metroFrom.name)+" · 选择目的地站点",1),P("div",Kw,[(dt(!0),pt(Zt,null,ce(G(Eo),O=>(dt(),pt("button",{key:O.id,class:"mst",disabled:G(t).metroFrom&&O.id===G(t).metroFrom.id,onClick:At=>G(Xt).game.metroTravel(O)},[P("b",null,ft(O.name),1),P("span",Jw,[(dt(!0),pt(Zt,null,ce(O.lines,At=>(dt(),pt("span",{key:At,class:"ln",style:Dn({background:m(At)})},ft(At),5))),128))]),P("span",Qw,ft(G(En)[G(fs)(O.x,O.z)].name),1)],8,Zw))),128))])])):G(t).panel==="help"?(dt(),pt("div",tE,[P("div",{class:"head"},[K[34]||(K[34]=P("span",{class:"mc-title"},"❓ 操作说明",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),K[35]||(K[35]=Oa('<div class="help" data-v-2598844b><p data-v-2598844b><kbd data-v-2598844b>W</kbd><kbd data-v-2598844b>A</kbd><kbd data-v-2598844b>S</kbd><kbd data-v-2598844b>D</kbd> 移动 · 鼠标旋转视角（点击画面锁定）· 右键拖动也可旋转 · <kbd data-v-2598844b>Shift</kbd> 奔跑 · <kbd data-v-2598844b>空格</kbd> 跳跃 · 滚轮 镜头远近</p><p data-v-2598844b><kbd data-v-2598844b>V</kbd> 第一/第三人称 · <kbd data-v-2598844b>E</kbd> 交互（对话、乘车、购物、观看表演）· <kbd data-v-2598844b>T</kbd> 时间快进到下个时段</p><p data-v-2598844b><kbd data-v-2598844b>C</kbd> 摄影模式：<kbd data-v-2598844b>V</kbd> 切换第一人称/第三人称/自拍，<kbd data-v-2598844b>1</kbd>-<kbd data-v-2598844b>6</kbd> 切换滤镜（长安旧影、盛唐霓虹…），点击画面或 <kbd data-v-2598844b>F</kbd> 拍照，滚轮变焦</p><p data-v-2598844b><kbd data-v-2598844b>M</kbd> 地图 · <kbd data-v-2598844b>B</kbd> 背包 · <kbd data-v-2598844b>P</kbd> 相册 · <kbd data-v-2598844b>N</kbd> 图鉴 · <kbd data-v-2598844b>J</kbd> 任务 · <kbd data-v-2598844b>Esc</kbd> 关闭面板</p><p data-v-2598844b>🎯 玩法：步行探索 → 发现景点 → 拍照解锁图鉴 → 完成任务获得纪念品。</p><p data-v-2598844b>🚌 长安观光巴士 1 路：钟楼 ⇄ 永宁门 ⇄ 陕历博 ⇄ 大雁塔 ⇄ 大唐不夜城 ⇄ 曲江池，在站台按 E 候车/上车。</p><p data-v-2598844b>🚇 地铁：在红色“M”地铁口按 E，可快速传送至全市各站。</p><p data-v-2598844b>🚢 曲江夜游：在南湖码头或曲江池码头登船；🗼 大雁塔：塔底入口登塔；🚡 骊山索道：华清宫东侧上山。</p><p data-v-2598844b>🍜 美食：回民街（泡馍、肉夹馍、凉皮、镜糕）、大唐不夜城（甑糕、柿子饼）、街头面馆（油泼面）。</p><p data-v-2598844b>🏮 文化：明城墙、碑林书法、秦俑军阵、盛唐乐舞、丝绸之路、唐宫礼制与秦岭生态。</p></div>',1))])):Jt("",!0)],32)):Jt("",!0)}},nE=_l(eE,[["__scopeId","data-v-2598844b"]]),iE={class:"gv"},sE={class:"hud-tl"},rE={class:"loc mc-panel"},oE={class:"dist"},aE={key:0,class:"place"},lE={class:"meta"},cE={key:0},uE={key:0,class:"tasks mc-panel"},hE={key:0,class:"task"},fE={class:"muted"},dE={class:"muted"},pE={class:"compass"},mE={class:"bt"},gE={class:"bs"},_E={class:"toasts"},vE={key:2,class:"ride mc-panel"},xE={key:3,class:"cross"},yE={class:"bottom"},ME={key:4,class:"lock-hint"},bE={key:5,class:"photo"},SE={class:"ph-top mc-panel"},wE=["onClick"],EE={class:"ph-left mc-panel"},TE=["onClick"],AE=["onClick"],CE={class:"muted",style:{"margin-top":"8px"}},RE={key:6,class:"flash"},PE={key:7,class:"lastphoto mc-panel"},LE=["src"],DE={key:8,class:"dialog mc-panel"},IE={class:"d-head"},UE={class:"mc-title",style:{"font-size":"17px"}},NE={key:0,class:"tag"},FE={class:"d-text"},OE={class:"d-opts"},kE=["onClick"],zE={class:"mbtns"},BE={key:1,class:"rotate-hint"},pd=360,HE={__name:"GameView",setup(n,{expose:t}){const e=Te(null),i=Te(null),s=Te(!1),r=Q.ui,o=r.hud,a=Te(!1),l=Rr({x:0,y:0}),c=Te(55),u=Te("pose"),h=[{id:"third",n:"第三人称"},{id:"first",n:"第一人称"},{id:"selfie",n:"自拍"}],f=[{id:"pose",n:"✌ 比耶"},{id:"wave",n:"👋 挥手"},{id:"idle",n:"🧍 站立"},{id:"photo",n:"📸 举相机"}];let p=null;const g=wn(()=>Xt.game&&Xt.game.player&&Xt.game.player.view==="first"&&o.fps>=0),_=wn(()=>{const mt=Q.save.novice;return mt<ts.length?ts[mt]:null}),m=wn(()=>{const mt=Q.save.daily;return(mt.ids||[]).map(st=>{const U=ol.find(ct=>ct.id===st);return{...U,done:!!mt.done[st],p:Tp(U)}})}),d=wn(()=>-((-o.heading*180/Math.PI%360+360)%360)*2+pd/2-360*2),w=wn(()=>{const mt=[],st={0:"北",45:"东北",90:"东",135:"东南",180:"南",225:"西南",270:"西",315:"西北"};for(let U=0;U<3;U++)for(let ct=0;ct<360;ct+=15)mt.push({k:U+"-"+ct,x:(U*360+ct)*2,t:st[ct]||"·",major:!!st[ct]});return mt}),y=wn(()=>{const mt=r.waypoint;if(!mt||o.x==null)return null;const st=mt.x-o.x,U=mt.z-o.z,ct=Math.hypot(st,U),Tt=Math.atan2(st,-U)*180/Math.PI,Mt=-o.heading*180/Math.PI;let ut=(Tt-Mt+540)%360-180;return ut=Math.max(-88,Math.min(88,ut)),{x:pd/2+ut*2-6,d:ct>1e3?(ct*.005).toFixed(1)+"km":Math.round(ct*5)+"m"}});async function v(mt,st){Xt.game||(Xt.game=new NS(e.value),r.mobile="ontouchstart"in window&&navigator.maxTouchPoints>0),L(),await Xt.game.spawnAt(mt,st),Xt.game.start(),s.value=!0,clearInterval(p),p=setInterval(Lt,200)}t({boot:v});function L(){r.portrait=window.innerHeight>window.innerWidth}window.addEventListener("resize",L),window.addEventListener("orientationchange",L),L();const M=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);function E(){const mt=document.documentElement,st=document.fullscreenElement||document.webkitFullscreenElement;try{if(st)(document.exitFullscreen||document.webkitExitFullscreen).call(document);else{const ct=(mt.requestFullscreen||mt.webkitRequestFullscreen).call(mt);ct&&ct.then&&ct.then(()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}}catch{}}function I(){r.fullscreen=!!(document.fullscreenElement||document.webkitFullscreenElement)}document.addEventListener("fullscreenchange",I),document.addEventListener("webkitfullscreenchange",I);function C(mt){r.panel=r.panel===mt?null:mt,r.panel&&Xt.game.input.exitLock()}function S(mt){const st=Xt.game;st&&(mt==="jump"?st.input.joy.jump=!0:st.onKey("Key"+mt))}function D(mt){Xt.game.setPhotoView(mt)}function Y(){Xt.game.togglePhoto(!1)}function k(){Xt.game.shutter()}function W(){Xt.game.photoFov=c.value}function rt(mt){u.value=mt,Xt.game.selfiePose=mt}window.addEventListener("wheel",mt=>{r.photoMode&&Xt.game&&(c.value=Math.max(20,Math.min(90,c.value+Math.sign(mt.deltaY)*3)),Xt.game.photoFov=c.value)},{passive:!0});let tt=null,lt=null;function $(mt){tt=mt.changedTouches[0].identifier;const U=mt.currentTarget.getBoundingClientRect();lt={x:U.left+U.width/2,y:U.top+U.height/2},yt(mt)}function yt(mt){for(const st of mt.changedTouches){if(st.identifier!==tt)continue;let U=(st.clientX-lt.x)/50,ct=-(st.clientY-lt.y)/50;const Tt=Math.hypot(U,ct);Tt>1&&(U/=Tt,ct/=Tt),l.x=U,l.y=ct,Object.assign(Xt.game.input.joy,{x:U,y:ct,active:!0})}}function St(){l.x=l.y=0,Object.assign(Xt.game.input.joy,{x:0,y:0,active:!1})}function Lt(){const mt=Xt.game,st=i.value;if(!mt||!st||r.photoMode)return;const U=st.getContext("2d"),ct=mt.baseMap,Tt=mt.player.pos,Mt=320,ut=ct.scale,K=(Tt.x-Mt-ct.bounds.x0)*ut,O=(Tt.z-Mt-ct.bounds.z0)*ut;U.imageSmoothingEnabled=!1,U.fillStyle="#6fa8d8",U.fillRect(0,0,200,200),U.drawImage(ct.canvas,K,O,Mt*2*ut,Mt*2*ut,0,0,200,200);const At=200/(Mt*2),A=(T,nt)=>[(T-Tt.x+Mt)*At,(nt-Tt.z+Mt)*At];for(const T of Eo){const[nt,q]=A(T.x,T.z);nt<-5||q<-5||nt>205||q>205||(U.fillStyle="#b8222a",U.fillRect(nt-4,q-4,8,8),U.fillStyle="#fff",U.font="bold 7px sans-serif",U.fillText("M",nt-3,q+3))}for(const T of mt.landmarks.items){if(T.def.hidden)continue;const[nt,q]=A(T.x,T.z);if(nt<-5||q<-5||nt>205||q>205)continue;const J=Q.save.discovered.includes(T.def.id),ot=Q.save.photographed[T.def.id];U.fillStyle=ot?"#ffd040":J?"#ffffff":"#555",U.strokeStyle="#000",U.lineWidth=2,U.beginPath(),U.arc(nt,q,T.def.grade==="S"?5:4,0,Math.PI*2),U.fill(),U.stroke(),J&&(U.font='bold 10px "Microsoft YaHei",sans-serif',U.lineWidth=3,U.strokeText(T.def.name,nt+6,q+4),U.fillText(T.def.name,nt+6,q+4))}const N=mt.transport.bus.position;{const[T,nt]=A(N.x,N.z);U.fillStyle="#e8302a",U.fillRect(T-3,nt-3,6,6)}if(r.waypoint){let[T,nt]=A(r.waypoint.x,r.waypoint.z);T=Math.max(6,Math.min(194,T)),nt=Math.max(6,Math.min(194,nt)),U.fillStyle="#ffd040",U.beginPath(),U.moveTo(T,nt+6),U.lineTo(T-6,nt-6),U.lineTo(T+6,nt-6),U.fill()}U.save(),U.translate(100,100),U.rotate(-mt.player.camYaw),U.fillStyle="#ff3a3a",U.strokeStyle="#fff",U.lineWidth=2,U.beginPath(),U.moveTo(0,-9),U.lineTo(6,7),U.lineTo(0,3),U.lineTo(-6,7),U.closePath(),U.fill(),U.stroke(),U.restore(),U.fillStyle="#fff",U.font="bold 12px sans-serif",U.fillText("N",95,13)}return ku(()=>{clearInterval(p),window.removeEventListener("resize",L),window.removeEventListener("orientationchange",L),document.removeEventListener("fullscreenchange",I),document.removeEventListener("webkitfullscreenchange",I),Xt.game&&Xt.game.dispose(),Xt.game=null}),(mt,st)=>(dt(),pt("div",iE,[P("div",{ref_key:"host",ref:e,class:"host"},null,512),s.value?(dt(),pt(Zt,{key:0},[sn(P("div",sE,[P("div",rE,[P("div",oE,[ve(ft(G(o).district)+" ",1),G(o).place?(dt(),pt("span",aE,"· "+ft(G(o).place),1)):Jt("",!0)]),P("div",lE,[P("span",null,ft(G(o).weatherIcon)+" "+ft(G(o).weatherName),1),P("span",null,"🕒 "+ft(G(o).time)+" "+ft(G(o).period),1),P("span",null,"💰 ¥"+ft(G(Q).save.money),1),G(o).alt>30?(dt(),pt("span",cE,"⛰ "+ft(G(o).alt)+"m",1)):Jt("",!0)])]),_.value||m.value.length?(dt(),pt("div",uE,[st[16]||(st[16]=P("div",{class:"tt"},"📌 任务",-1)),_.value?(dt(),pt("div",hE,[P("b",null,"□ "+ft(_.value.title),1),P("div",fE,ft(_.value.desc),1)])):Jt("",!0),(dt(!0),pt(Zt,null,ce(m.value,U=>(dt(),pt("div",{key:U.id,class:"task small"},[ve(ft(U.done?"☑":"□")+" "+ft(U.title)+" ",1),P("span",dE,ft(U.p[0])+"/"+ft(U.p[1]),1)]))),128))])):Jt("",!0)],512),[[Qr,!G(r).photoMode]]),sn(P("div",pE,[P("div",{class:"strip",style:Dn({transform:`translateX(${d.value}px)`})},[(dt(!0),pt(Zt,null,ce(w.value,U=>(dt(),pt("span",{key:U.k,style:Dn({left:U.x+"px"}),class:oe({major:U.major})},ft(U.t),7))),128))],4),y.value?(dt(),pt("div",{key:0,class:"wp",style:Dn({left:y.value.x+"px"})},[st[17]||(st[17]=ve("▼",-1)),P("small",null,ft(y.value.d),1)],4)):Jt("",!0),st[18]||(st[18]=P("div",{class:"needle"},null,-1))],512),[[Qr,!G(r).photoMode]]),sn(P("canvas",{ref_key:"mini",ref:i,class:"minimap",width:"200",height:"200",onClick:st[0]||(st[0]=U=>G(r).panel="map")},null,512),[[Qr,!G(r).photoMode&&G(Q).save.settings.showMinimap]]),G(r).banner?(dt(),pt("div",{class:"banner",key:G(r).banner.id},[P("div",mE,ft(G(r).banner.title),1),P("div",gE,ft(G(r).banner.sub),1)])):Jt("",!0),P("div",_E,[(dt(!0),pt(Zt,null,ce(G(r).toasts,U=>(dt(),pt("div",{key:U.id,class:oe(["toast",U.kind])},ft(U.text),3))),128))]),G(r).prompt&&!G(r).dialog&&!G(r).panel?(dt(),pt("div",{key:1,class:"prompt",onClick:st[1]||(st[1]=U=>S("E"))},[st[19]||(st[19]=P("kbd",null,"E",-1)),ve(" "+ft(G(r).prompt.label),1)])):Jt("",!0),G(o).ride&&!G(r).photoMode?(dt(),pt("div",vE,ft(G(o).ride),1)):Jt("",!0),g.value&&!G(r).photoMode?(dt(),pt("div",xE,"+")):Jt("",!0),sn(P("div",yE,[P("button",{class:"mc-btn small",onClick:st[2]||(st[2]=U=>C("bag"))},[...st[20]||(st[20]=[ve("🎒 背包",-1),P("kbd",null,"B",-1)])]),P("button",{class:"mc-btn small",onClick:st[3]||(st[3]=U=>C("album"))},[...st[21]||(st[21]=[ve("📷 相册",-1),P("kbd",null,"P",-1)])]),P("button",{class:"mc-btn small",onClick:st[4]||(st[4]=U=>C("map"))},[...st[22]||(st[22]=[ve("🗺 地图",-1),P("kbd",null,"M",-1)])]),P("button",{class:"mc-btn small",onClick:st[5]||(st[5]=U=>C("dex"))},[...st[23]||(st[23]=[ve("📖 图鉴",-1),P("kbd",null,"N",-1)])]),P("button",{class:"mc-btn small",onClick:st[6]||(st[6]=U=>C("tasks"))},[...st[24]||(st[24]=[ve("📌 任务",-1),P("kbd",null,"J",-1)])]),P("button",{class:"mc-btn small",onClick:st[7]||(st[7]=U=>C("settings"))},"⚙ 设置"),P("button",{class:"mc-btn small",onClick:st[8]||(st[8]=U=>C("help"))},[...st[25]||(st[25]=[ve("❓",-1),P("kbd",null,"H",-1)])]),G(r).mobile&&!G(r).portrait&&M?(dt(),pt("button",{key:0,class:"mc-btn small",onClick:E},ft(G(r).fullscreen?"⛶ 退出全屏":"⛶ 全屏"),1)):Jt("",!0)],512),[[Qr,!G(r).photoMode]]),!G(r).pointerLocked&&!G(r).mobile&&!G(r).panel&&!G(r).dialog&&!G(r).photoMode?(dt(),pt("div",ME,[...st[26]||(st[26]=[ve("点击画面锁定鼠标以旋转视角 · ",-1),P("kbd",null,"C",-1),ve(" 拍照 · ",-1),P("kbd",null,"V",-1),ve(" 切换视角",-1)])])):Jt("",!0),G(r).photoMode?(dt(),pt("div",bE,[st[31]||(st[31]=P("div",{class:"grid"},[P("i"),P("i"),P("i"),P("i")],-1)),st[32]||(st[32]=P("div",{class:"corners"},[P("b"),P("b"),P("b"),P("b")],-1)),P("div",SE,[st[27]||(st[27]=P("span",{class:"mc-title",style:{"font-size":"16px"}},"📷 摄影模式",-1)),(dt(),pt(Zt,null,ce(h,U=>P("button",{key:U.id,class:oe(["mc-btn small",{active:G(r).photoView===U.id}]),onClick:ct=>D(U.id)},ft(U.n),11,wE)),64)),st[28]||(st[28]=P("span",{class:"muted"},"V 切换 · 滚轮/滑块 变焦",-1)),P("button",{class:"mc-btn small",onClick:Y},"✕ 退出 (C)")]),P("div",EE,[st[30]||(st[30]=P("div",{class:"muted"},"滤镜（1-6）",-1)),(dt(!0),pt(Zt,null,ce(G(ES),(U,ct)=>(dt(),pt("button",{key:U.id,class:oe(["mc-btn small",{active:G(r).filter===U.id}]),onClick:Tt=>G(r).filter=U.id},ft(ct+1)+". "+ft(U.name),11,TE))),128)),G(r).photoView==="selfie"?(dt(),pt(Zt,{key:0},[st[29]||(st[29]=P("div",{class:"muted",style:{"margin-top":"8px"}},"姿势",-1)),(dt(),pt(Zt,null,ce(f,U=>P("button",{key:U.id,class:oe(["mc-btn small",{active:u.value===U.id}]),onClick:ct=>rt(U.id)},ft(U.n),11,AE)),64))],64)):Jt("",!0),P("div",CE,"变焦 "+ft(c.value)+"°",1),sn(P("input",{type:"range",min:"20",max:"90","onUpdate:modelValue":st[9]||(st[9]=U=>c.value=U),onInput:W},null,544),[[lr,c.value,void 0,{number:!0}]])]),P("button",{class:"shutter",onClick:k,title:"拍照（点击画面 / F / Enter）"})])):Jt("",!0),G(r).flash?(dt(),pt("div",RE)):Jt("",!0),G(r).lastPhoto?(dt(),pt("div",PE,[P("img",{src:G(r).lastPhoto.thumb},null,8,LE),P("div",null,ft(G(r).lastPhoto.title),1)])):Jt("",!0),G(r).dialog?(dt(),pt("div",DE,[P("div",IE,[P("span",UE,ft(G(r).dialog.title),1),G(r).dialog.sub?(dt(),pt("span",NE,ft(G(r).dialog.sub),1)):Jt("",!0)]),P("div",FE,ft(G(r).dialog.text),1),P("div",OE,[(dt(!0),pt(Zt,null,ce(G(r).dialog.options,(U,ct)=>(dt(),pt("button",{key:ct,class:oe(["mc-btn small",{primary:ct===0}]),onClick:Tt=>U.action()},ft(U.label),11,kE))),128))])])):Jt("",!0),qn(nE),G(r).mobile&&!G(r).panel&&!G(r).dialog?(dt(),pt(Zt,{key:9},[P("div",{class:"joy",ref:"joyEl",onTouchstart:pn($,["prevent"]),onTouchmove:pn(yt,["prevent"]),onTouchend:pn(St,["prevent"]),onTouchcancel:pn(St,["prevent"])},[P("div",{class:"knob",style:Dn({transform:`translate(${l.x*40}px, ${-l.y*40}px)`})},null,4)],544),P("div",zE,[P("button",{class:"mb",onTouchstart:st[10]||(st[10]=pn(U=>S("jump"),["prevent"]))},"跳",32),P("button",{class:oe(["mb",{on:a.value}]),onTouchstart:st[11]||(st[11]=pn(U=>{a.value=!a.value,G(Xt).game.input.joy.sprint=a.value},["prevent"]))},"跑",34),P("button",{class:"mb",onTouchstart:st[12]||(st[12]=pn(U=>S("E"),["prevent"]))},"E",32),P("button",{class:"mb",onTouchstart:st[13]||(st[13]=pn(U=>S("C"),["prevent"]))},"📷",32),P("button",{class:"mb",onTouchstart:st[14]||(st[14]=pn(U=>S("V"),["prevent"]))},"👁",32),G(r).photoMode?(dt(),pt("button",{key:0,class:"mb big",onTouchstart:pn(k,["prevent"])},"●",32)):Jt("",!0)])],64)):Jt("",!0)],64)):Jt("",!0),G(r).mobile&&G(r).portrait&&!G(r).ignorePortrait&&!G(r).panel&&!G(r).dialog&&!G(r).photoMode?(dt(),pt("div",BE,[st[33]||(st[33]=P("div",{class:"rh-icon"},"📱",-1)),st[34]||(st[34]=P("div",{class:"rh-text"},"请横屏操作",-1)),st[35]||(st[35]=P("div",{class:"rh-sub"},"将手机旋转至横屏，获得最佳视野与操作体验",-1)),P("button",{class:"mc-btn small",onClick:st[15]||(st[15]=U=>G(r).ignorePortrait=!0)},"仍要竖屏继续")])):Jt("",!0),P("div",{class:oe(["fade",{on:G(r).fade}])},[P("div",null,ft(G(r).fadeText),1)],2)]))}},VE=_l(HE,[["__scopeId","data-v-a217e246"]]),GE={class:"app"},WE={key:2,class:"loading"},XE={class:"mc-panel load-box"},$E={class:"load-text"},qE={class:"bar"},YE={class:"muted tip"},jE={__name:"App",setup(n){const t=Te(!1),e=Te(!1),i=Te(0),s=Te(""),r=Te(null),o=["小贴士：按 C 进入摄影模式，拍下景点即可解锁图鉴。","小贴士：大唐不夜城夜晚演出丰富，按 T 可以快速跳转时间。","小贴士：在地铁口按 E 可以快速传送到其他站点。","小贴士：和路人聊天可以完成每日任务“找到5个NPC”。","小贴士：曲江夜游可在南湖码头或曲江池码头登船。","小贴士：回民街泡馍要自己慢慢掰，掰得细更入味。"],a=Te(o[0]);async function l(c){e.value=!0,i.value=0,a.value=o[Math.floor(Math.random()*o.length)],s.value="正在初始化长安世界…",await new Promise(u=>setTimeout(u,30)),t.value||(t.value=!0,await tl()),await r.value.boot(c,(u,h)=>{i.value=u,h&&(s.value=h)}),i.value=1,Q.ui.screen="game",e.value=!1}return(c,u)=>(dt(),pt("div",GE,[G(Q).ui.screen!=="game"?(dt(),Lc(d2,{key:0,onStart:l})):Jt("",!0),t.value?sn((dt(),Lc(VE,{key:1,ref_key:"gv",ref:r},null,512)),[[Qr,G(Q).ui.screen==="game"]]):Jt("",!0),e.value?(dt(),pt("div",WE,[P("div",XE,[u[0]||(u[0]=P("div",{class:"mc-title"},"方块长安",-1)),P("div",$E,ft(s.value),1),P("div",qE,[P("div",{class:"fill",style:Dn({width:(i.value*100).toFixed(0)+"%"})},null,4)]),P("div",YE,ft(a.value),1)])])):Jt("",!0)]))}},KE=_l(jE,[["__scopeId","data-v-d1f16ce8"]]);Kg(KE).mount("#app");
