(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Au(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const be={},Rs=[],oi=()=>{},_d=()=>!1,ja=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ka=n=>n.startsWith("onUpdate:"),en=Object.assign,Cu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Dm=Object.prototype.hasOwnProperty,de=(n,t)=>Dm.call(n,t),Xt=Array.isArray,is=n=>Co(n)==="[object Map]",Mr=n=>Co(n)==="[object Set]",xh=n=>Co(n)==="[object Date]",Qt=n=>typeof n=="function",Ue=n=>typeof n=="string",li=n=>typeof n=="symbol",Me=n=>n!==null&&typeof n=="object",vd=n=>(Me(n)||Qt(n))&&Qt(n.then)&&Qt(n.catch),xd=Object.prototype.toString,Co=n=>xd.call(n),Im=n=>Co(n).slice(8,-1),yd=n=>Co(n)==="[object Object]",Ru=n=>Ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,co=Au(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Za=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Um=/-\w/g,Xn=Za(n=>n.replace(Um,t=>t.slice(1).toUpperCase())),Nm=/\B([A-Z])/g,Os=Za(n=>n.replace(Nm,"-$1").toLowerCase()),Md=Za(n=>n.charAt(0).toUpperCase()+n.slice(1)),bl=Za(n=>n?`on${Md(n)}`:""),ii=(n,t)=>!Object.is(n,t),ya=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},bd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Pu=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let yh;const Ja=()=>yh||(yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ue(i)?zm(i):gn(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ue(n)||Me(n))return n}const Fm=/;(?![^(]*\))/g,km=/:([^]+)/,Om=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function zm(n){const t={};return n.replace(Om,e=>e.startsWith("/*")?"":e).split(Fm).forEach(e=>{if(e){const i=e.split(km);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ne(n){let t="";if(Ue(n))t=n;else if(Xt(n))for(let e=0;e<n.length;e++){const i=ne(n[e]);i&&(t+=i+" ")}else if(Me(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vm=Au(Bm);function Sd(n){return!!n||n===""}function Hm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Lr(n[s],t[s],e);return i}function Mh(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Lr(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Gm(n,t,e){let i=is(n),s=is(t);if(i||s||(i=Mr(n),s=Mr(t),i||s))return i&&s?Mh(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Lr(n[a],t[a],e))return!1}return String(n)===String(t)}function bh(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Lr(n,t,e){if(n===t)return!0;let i=xh(n),s=xh(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=li(n),s=li(t),i||s?n===t:(i=Xt(n),s=Xt(t),i||s?i&&s?bh(n,t,e,Hm):!1:(i=Me(n),s=Me(t),i||s?!i||!s?!1:bh(n,t,e,Gm):String(n)===String(t))))}function wd(n,t){return n.findIndex(e=>Lr(e,t))}const Ed=n=>!!(n&&n.__v_isRef===!0),ut=n=>Ue(n)?n:n==null?"":Xt(n)||Me(n)&&(n.toString===xd||!Qt(n.toString))?Ed(n)?ut(n.value):JSON.stringify(n,Td,2):String(n),Td=(n,t)=>Ed(t)?Td(n,t.value):is(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Sl(i,r)+" =>"]=s,e),{})}:Mr(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Sl(e))}:li(t)?Sl(t):Me(t)&&!Xt(t)&&!yd(t)?String(t):t,Sl=(n,t="")=>{var e;return li(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Wm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Xe&&(Xe.active?(this.parent=Xe,this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Xe;try{return Xe=this,t()}finally{Xe=e}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){if(this._on>0&&--this._on===0){if(Xe===this)Xe=this.prevScope;else{let t=Xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xm(){return Xe}let we;const wl=new WeakSet;class Ad{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&(Xe.active?Xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sh(this),Pd(this);const t=we,e=$n;we=this,$n=!0;try{return this.fn()}finally{Ld(this),we=t,$n=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Iu(t);this.deps=this.depsTail=void 0,Sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let Cd=0,uo,ho;function Rd(n,t=!1){if(n.flags|=8,t){n.next=ho,ho=n;return}n.next=uo,uo=n}function Lu(){Cd++}function Du(){if(--Cd>0)return;if(ho){let t=ho;for(ho=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;uo;){let t=uo;for(uo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Pd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ld(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Iu(i),$m(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ec(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Dd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Dd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_o)||(n.globalVersion=_o,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ec(n))))return;n.flags|=2;const t=n.dep,e=we,i=$n;we=n,$n=!0;try{Pd(n);const s=n.fn(n._value);(t.version===0||ii(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{we=e,$n=i,Ld(n),n.flags&=-3}}function Iu(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Iu(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function $m(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let $n=!0;const Id=[];function Di(){Id.push($n),$n=!1}function Ii(){const n=Id.pop();$n=n===void 0?!0:n}function Sh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=we;we=void 0;try{t()}finally{we=e}}}let _o=0;class qm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!we||!$n||we===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==we)e=this.activeLink=new qm(we,this),we.deps?(e.prevDep=we.depsTail,we.depsTail.nextDep=e,we.depsTail=e):we.deps=we.depsTail=e,Ud(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=we.depsTail,e.nextDep=void 0,we.depsTail.nextDep=e,we.depsTail=e,we.deps===e&&(we.deps=i)}return e}trigger(t){this.version++,_o++,this.notify(t)}notify(t){Lu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Du()}}}function Ud(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Ud(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Tc=new WeakMap,Us=Symbol(""),Ac=Symbol(""),vo=Symbol("");function Je(n,t,e){if($n&&we){let i=Tc.get(n);i||Tc.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Uu),s.map=i,s.key=e),s.track()}}function Si(n,t,e,i,s,r){const o=Tc.get(n);if(!o){_o++;return}const a=l=>{l&&l.trigger()};if(Lu(),t==="clear")o.forEach(a);else{const l=Xt(n),c=l&&Ru(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===vo||!li(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(vo)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Us)),is(n)&&a(o.get(Ac)));break;case"delete":l||(a(o.get(Us)),is(n)&&a(o.get(Ac)));break;case"set":is(n)&&a(o.get(Us));break}}Du()}function Hs(n){const t=fe(n);return t===n||(Je(t,"iterate",vo),Nn(n))?t:ci(n)?ss(n)?t.map(e=>ls(Fn(e))):t.map(ls):t.map(Fn)}function Qa(n){return Je(n=fe(n),"iterate",vo),n}function ti(n,t){return ci(n)?ls(ss(n)?Fn(t):t):Fn(t)}const Ym={__proto__:null,[Symbol.iterator](){return El(this,Symbol.iterator,n=>ti(this,n))},concat(...n){return Hs(this).concat(...n.map(t=>Xt(t)?Hs(t):t))},entries(){return El(this,"entries",n=>(n[1]=ti(this,n[1]),n))},every(n,t){return fi(this,"every",n,t,void 0,arguments)},filter(n,t){return fi(this,"filter",n,t,e=>e.map(i=>ti(this,i)),arguments)},find(n,t){return fi(this,"find",n,t,e=>ti(this,e),arguments)},findIndex(n,t){return fi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return fi(this,"findLast",n,t,e=>ti(this,e),arguments)},findLastIndex(n,t){return fi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return fi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Tl(this,"includes",n)},indexOf(...n){return Tl(this,"indexOf",n)},join(n){return Hs(this).join(n)},lastIndexOf(...n){return Tl(this,"lastIndexOf",n)},map(n,t){return fi(this,"map",n,t,void 0,arguments)},pop(){return zr(this,"pop")},push(...n){return zr(this,"push",n)},reduce(n,...t){return wh(this,"reduce",n,t)},reduceRight(n,...t){return wh(this,"reduceRight",n,t)},shift(){return zr(this,"shift")},some(n,t){return fi(this,"some",n,t,void 0,arguments)},splice(...n){return zr(this,"splice",n)},toReversed(){return Hs(this).toReversed()},toSorted(n){return Hs(this).toSorted(n)},toSpliced(...n){return Hs(this).toSpliced(...n)},unshift(...n){return zr(this,"unshift",n)},values(){return El(this,"values",n=>ti(this,n))}};function El(n,t,e){const i=Qa(n),s=i[t]();return i!==n&&!Nn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const jm=Array.prototype;function fi(n,t,e,i,s,r){const o=Qa(n),a=o!==n&&!Nn(n),l=o[t];if(l!==jm[t]){const h=l.apply(n,r);return a?Fn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,ti(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function wh(n,t,e,i){const s=Qa(n),r=s!==n&&!Nn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=ti(n,c)),e.call(this,c,ti(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?ti(n,l):l}function Tl(n,t,e){const i=fe(n);Je(i,"iterate",vo);const s=i[t](...e);return(s===-1||s===!1)&&ku(e[0])?(e[0]=fe(e[0]),i[t](...e)):s}function zr(n,t,e=[]){Di(),Lu();const i=fe(n)[t].apply(n,e);return Du(),Ii(),i}const Km=Au("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(li));function Zm(n){li(n)||(n=String(n));const t=fe(this);return Je(t,"has",n),t.hasOwnProperty(n)}class Fd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?a0:Bd:r?zd:Od).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Xt(t);if(!s){let l;if(o&&(l=Ym[e]))return l;if(e==="hasOwnProperty")return Zm}const a=Reflect.get(t,e,tn(t)?t:i);if((li(e)?Nd.has(e):Km(e))||(s||Je(t,"get",e),r))return a;if(tn(a)){const l=o&&Ru(e)?a:a.value;return s&&Me(l)?Rc(l):l}return Me(a)?s?Rc(a):Dr(a):a}}class kd extends Fd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Xt(t)&&Ru(e);if(!this._isShallow){const c=ci(r);if(!Nn(i)&&!ci(i)&&(r=fe(r),i=fe(i)),!o&&tn(r)&&!tn(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:de(t,e),l=Reflect.set(t,e,i,tn(t)?t:s);return t===fe(s)&&l&&(a?ii(i,r)&&Si(t,"set",e,i):Si(t,"add",e,i)),l}deleteProperty(t,e){const i=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Si(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!li(e)||!Nd.has(e))&&Je(t,"has",e),i}ownKeys(t){return Je(t,"iterate",Xt(t)?"length":Us),Reflect.ownKeys(t)}}class Jm extends Fd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Qm=new kd,t0=new Jm,e0=new kd(!0);const Cc=n=>n,Fo=n=>Reflect.getPrototypeOf(n);function n0(n,t,e){return function(...i){const s=this.__v_raw,r=fe(s),o=is(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Cc:t?ls:Fn;return!t&&Je(r,"iterate",l?Ac:Us),en(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function ko(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function i0(n,t){const e={get(s){const r=this.__v_raw,o=fe(r),a=fe(s);n||(ii(s,a)&&Je(o,"get",s),Je(o,"get",a));const{has:l}=Fo(o),c=t?Cc:n?ls:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Je(fe(s),"iterate",Us),s.size},has(s){const r=this.__v_raw,o=fe(r),a=fe(s);return n||(ii(s,a)&&Je(o,"has",s),Je(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=fe(a),c=t?Cc:n?ls:Fn;return!n&&Je(l,"iterate",Us),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return en(e,n?{add:ko("add"),set:ko("set"),delete:ko("delete"),clear:ko("clear")}:{add(s){const r=fe(this),o=Fo(r),a=fe(s),l=!t&&!Nn(s)&&!ci(s)?a:s;return o.has.call(r,l)||ii(s,l)&&o.has.call(r,s)||ii(a,l)&&o.has.call(r,a)||(r.add(l),Si(r,"add",l,l)),this},set(s,r){!t&&!Nn(r)&&!ci(r)&&(r=fe(r));const o=fe(this),{has:a,get:l}=Fo(o);let c=a.call(o,s);c||(s=fe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ii(r,u)&&Si(o,"set",s,r):Si(o,"add",s,r),this},delete(s){const r=fe(this),{has:o,get:a}=Fo(r);let l=o.call(r,s);l||(s=fe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=fe(this),r=s.size!==0,o=s.clear();return r&&Si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=n0(s,n,t)}),e}function Nu(n,t){const e=i0(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(de(e,s)&&s in i?e:i,s,r)}const s0={get:Nu(!1,!1)},r0={get:Nu(!1,!0)},o0={get:Nu(!0,!1)};const Od=new WeakMap,zd=new WeakMap,Bd=new WeakMap,a0=new WeakMap;function l0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dr(n){return ci(n)?n:Fu(n,!1,Qm,s0,Od)}function c0(n){return Fu(n,!1,e0,r0,zd)}function Rc(n){return Fu(n,!0,t0,o0,Bd)}function Fu(n,t,e,i,s){if(!Me(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=l0(Im(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ss(n){return ci(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function Nn(n){return!!(n&&n.__v_isShallow)}function ku(n){return n?!!n.__v_raw:!1}function fe(n){const t=n&&n.__v_raw;return t?fe(t):n}function u0(n){return!de(n,"__v_skip")&&Object.isExtensible(n)&&bd(n,"__v_skip",!0),n}const Fn=n=>Me(n)?Dr(n):n,ls=n=>Me(n)?Rc(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Ae(n){return h0(n,!1)}function h0(n,t){return tn(n)?n:new f0(n,t)}class f0{constructor(t,e){this.dep=new Uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:fe(t),this._value=e?t:Fn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Nn(t)||ci(t);t=i?t:fe(t),ii(t,e)&&(this._rawValue=t,this._value=i?t:Fn(t),this.dep.trigger())}}function O(n){return tn(n)?n.value:n}const d0={get:(n,t,e)=>t==="__v_raw"?n:O(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return tn(s)&&!tn(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Vd(n){return ss(n)?n:new Proxy(n,d0)}class p0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Rd(this,!0),!0}get value(){const t=this.dep.track();return Dd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function m0(n,t,e=!1){let i,s;return Qt(n)?i=n:(i=n.get,s=n.set),new p0(i,s,e)}const Oo={},Ia=new WeakMap;let Ss;function g0(n,t=!1,e=Ss){if(e){let i=Ia.get(e);i||Ia.set(e,i=[]),i.push(n)}}function _0(n,t,e=be){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=v=>s?v:Nn(v)||s===!1||s===0?wi(v,1):wi(v);let u,h,f,p,g=!1,_=!1;if(tn(n)?(h=()=>n.value,g=Nn(n)):ss(n)?(h=()=>c(n),g=!0):Xt(n)?(_=!0,g=n.some(v=>ss(v)||Nn(v)),h=()=>n.map(v=>{if(tn(v))return v.value;if(ss(v))return c(v);if(Qt(v))return l?l(v,2):v()})):Qt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Di();try{f()}finally{Ii()}}const v=Ss;Ss=u;try{return l?l(n,3,[p]):n(p)}finally{Ss=v}}:h=oi,t&&s){const v=h,L=s===!0?1/0:s;h=()=>wi(v(),L)}const m=Xm(),d=()=>{u.stop(),m&&m.active&&Cu(m.effects,u)};if(r&&t){const v=t;t=(...L)=>{const M=v(...L);return d(),M}}let w=_?new Array(n.length).fill(Oo):Oo;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const L=u.run();if(v||s||g||(_?L.some((M,E)=>ii(M,w[E])):ii(L,w))){f&&f();const M=Ss;Ss=u;try{const E=[L,w===Oo?void 0:_&&w[0]===Oo?[]:w,p];w=L,l?l(t,3,E):t(...E)}finally{Ss=M}}}else u.run()};return a&&a(y),u=new Ad(h),u.scheduler=o?()=>o(y,!1):y,p=v=>g0(v,!1,u),f=u.onStop=()=>{const v=Ia.get(u);if(v){if(l)l(v,4);else for(const L of v)L();Ia.delete(u)}},t?i?y(!0):w=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function wi(n,t=1/0,e){if(t<=0||!Me(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,tn(n))wi(n.value,t,e);else if(Xt(n))for(let i=0;i<n.length;i++)wi(n[i],t,e);else if(Mr(n)||is(n))n.forEach(i=>{wi(i,t,e)});else if(yd(n)){for(const i in n)wi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ro(n,t,e,i){try{return i?n(...i):n()}catch(s){tl(s,t,e)}}function Yn(n,t,e,i){if(Qt(n)){const s=Ro(n,t,e,i);return s&&vd(s)&&s.catch(r=>{tl(r,t,e)}),s}if(Xt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Yn(n[r],t,e,i));return s}}function tl(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Di(),Ro(r,null,10,[n,l,c]),Ii();return}}v0(n,e,s,i,o)}function v0(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const an=[];let Qn=-1;const pr=[];let Zi=null,cr=0;const Hd=Promise.resolve();let Ua=null;function el(n){const t=Ua||Hd;return n?t.then(this?n.bind(this):n):t}function x0(n){let t=Qn+1,e=an.length;for(;t<e;){const i=t+e>>>1,s=an[i],r=xo(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Ou(n){if(!(n.flags&1)){const t=xo(n),e=an[an.length-1];!e||!(n.flags&2)&&t>=xo(e)?an.push(n):an.splice(x0(t),0,n),n.flags|=1,Gd()}}function Gd(){Ua||(Ua=Hd.then(Xd))}function y0(n){if(!Xt(n))Zi&&n.id===-1?Zi.splice(cr+1,0,n):n.flags&1||(pr.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)pr.push(n[t]);Gd()}function Eh(n,t,e=Qn+1){for(;e<an.length;e++){const i=an[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;an.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wd(n){if(pr.length){const t=[...new Set(pr)].sort((e,i)=>xo(e)-xo(i));if(pr.length=0,Zi){for(let e=0;e<t.length;e++)Zi.push(t[e]);return}for(Zi=t,cr=0;cr<Zi.length;cr++){const e=Zi[cr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Zi=null,cr=0}}const xo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xd(n){try{for(Qn=0;Qn<an.length;Qn++){const t=an[Qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ro(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qn<an.length;Qn++){const t=an[Qn];t&&(t.flags&=-2)}Qn=-1,an.length=0,Wd(),Ua=null,(an.length||pr.length)&&Xd()}}let In=null,$d=null;function Na(n){const t=In;return In=n,$d=n&&n.type.__scopeId||null,t}function M0(n,t=In,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Fh(-1);const r=Na(t),o=Ns.length;let a;try{a=n(...s)}finally{for(let l=Ns.length;l>o;l--)gp();Na(r),i._d&&Fh(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ze(n,t){if(In===null)return n;const e=ol(In),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=be]=t[s];r&&(Qt(r)&&(r={mounted:r,updated:r}),r.deep&&wi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ps(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Di(),Yn(l,e,8,[n.el,a,n,t]),Ii())}}function b0(n,t){if(cn){let e=cn.provides;const i=cn.parent&&cn.parent.provides;i===e&&(e=cn.provides=Object.create(i)),e[n]=t}}function Ma(n,t,e=!1){const i=vg();if(i||gr){let s=gr?gr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Qt(t)?t.call(i&&i.proxy):t}}const S0=Symbol.for("v-scx"),w0=()=>Ma(S0);function mr(n,t,e){return qd(n,t,e)}function qd(n,t,e=be){const{immediate:i,deep:s,flush:r,once:o}=e,a=en({},e),l=t&&i||!t&&r!=="post";let c;if(bo){if(r==="sync"){const p=w0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=oi,p.resume=oi,p.pause=oi,p}}const u=cn;a.call=(p,g,_)=>Yn(p,u,g,_);let h=!1;r==="post"?a.scheduler=p=>{pn(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Ou(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=_0(n,t,a);return bo&&(c?c.push(f):l&&f()),f}function E0(n,t,e){const i=this.proxy,s=Ue(n)?n.includes(".")?Yd(i,n):()=>i[n]:n.bind(i,i);let r;Qt(t)?r=t:(r=t.handler,e=t);const o=Po(this),a=qd(s,r.bind(i),e);return o(),a}function Yd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const T0=Symbol("_vte"),nl=n=>n.__isTeleport,Al=Symbol("_leaveCb");function A0(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ui){t=e;break}}return t}function jd(n){if(!Bu(n))return nl(n.type)&&n.children?A0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Qt(e.default))return e.default()}}function zu(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;zu(nl(e.type)&&jd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Kd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Th(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Fa=new WeakMap;function fo(n,t,e,i,s=!1){if(Xt(n)){n.forEach((_,m)=>fo(_,t&&(Xt(t)?t[m]:t),e,i,s));return}if(po(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fo(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?ol(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState,f=fe(h),p=h===be?_d:_=>Th(u,_)?!1:de(f,_),g=(_,m)=>!(m&&Th(u,m));if(c!=null&&c!==l){if(Ah(t),Ue(c))u[c]=null,p(c)&&(h[c]=null);else if(tn(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Qt(l))Ro(l,a,12,[o,u]);else{const _=Ue(l),m=tn(l);if(_||m){const d=()=>{if(n.f){const w=_?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Xt(w)&&Cu(w,r);else if(Xt(w))w.includes(r)||w.push(r);else if(_)u[l]=[r],p(l)&&(h[l]=u[l]);else{const y=[r];g(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{d(),Fa.delete(n)};w.id=-1,Fa.set(n,w),pn(w,e)}else Ah(n),d()}}}function Ah(n){const t=Fa.get(n);t&&(t.flags|=8,Fa.delete(n))}Ja().requestIdleCallback;Ja().cancelIdleCallback;const po=n=>!!n.type.__asyncLoader,Bu=n=>n.type.__isKeepAlive;function C0(n,t){Zd(n,"a",t)}function R0(n,t){Zd(n,"da",t)}function Zd(n,t,e=cn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(il(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Bu(s.parent.vnode)&&P0(i,t,e,s),s=s.parent}}function P0(n,t,e,i){const s=il(t,n,i,!0);Jd(()=>{Cu(i[t],s)},e)}function il(n,t,e=cn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Di();const a=Po(e),l=Yn(t,e,n,o);return a(),Ii(),l});return i?s.unshift(r):s.push(r),r}}const Oi=n=>(t,e=cn)=>{(!bo||n==="sp")&&il(n,(...i)=>t(...i),e)},L0=Oi("bm"),D0=Oi("m"),I0=Oi("bu"),U0=Oi("u"),Vu=Oi("bum"),Jd=Oi("um"),N0=Oi("sp"),F0=Oi("rtg"),k0=Oi("rtc");function O0(n,t=cn){il("ec",n,t)}const z0=Symbol.for("v-ndc");function ae(n,t,e,i){let s;const r=e,o=Xt(n);if(o||Ue(n)){const a=o&&ss(n);let l=!1,c=!1;a&&(l=!Nn(n),c=ci(n),n=Qa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?ls(Fn(n[u])):Fn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(Me(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Pc=n=>n?yp(n)?ol(n):Pc(n.parent):null,mo=en(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pc(n.parent),$root:n=>Pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>tp(n),$forceUpdate:n=>n.f||(n.f=()=>{Ou(n.update)}),$nextTick:n=>n.n||(n.n=el.bind(n.proxy)),$watch:n=>E0.bind(n)}),Cl=(n,t)=>n!==be&&!n.__isScriptSetup&&de(n,t),B0={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Cl(i,t))return o[t]=1,i[t];if(s!==be&&de(s,t))return o[t]=2,s[t];if(de(r,t))return o[t]=3,r[t];if(e!==be&&de(e,t))return o[t]=4,e[t];Lc&&(o[t]=0)}}const c=mo[t];let u,h;if(c)return t==="$attrs"&&Je(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==be&&de(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,de(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Cl(s,t)?(s[t]=e,!0):i!==be&&de(i,t)?(i[t]=e,!0):de(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==be&&a[0]!=="$"&&de(n,a)||Cl(t,a)||de(r,a)||de(i,a)||de(mo,a)||de(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:de(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ch(n){return Xt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Lc=!0;function V0(n){const t=tp(n),e=n.proxy,i=n.ctx;Lc=!1,t.beforeCreate&&Rh(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:y,unmounted:v,render:L,renderTracked:M,renderTriggered:E,errorCaptured:I,serverPrefetch:A,expose:S,inheritAttrs:D,components:Z,directives:B,filters:q}=t;if(c&&H0(c,i,null),o)for(const ct in o){const j=o[ct];Qt(j)&&(i[ct]=j.bind(e))}if(s){const ct=s.call(e,e);Me(ct)&&(n.data=Dr(ct))}if(Lc=!0,r)for(const ct in r){const j=r[ct],yt=Qt(j)?j.bind(e,e):Qt(j.get)?j.get.bind(e,e):oi,bt=!Qt(j)&&Qt(j.set)?j.set.bind(e):oi,Ct=En({get:yt,set:bt});Object.defineProperty(i,ct,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Ft=>Ct.value=Ft})}if(a)for(const ct in a)Qd(a[ct],i,e,ct);if(l){const ct=Qt(l)?l.call(e):l;Reflect.ownKeys(ct).forEach(j=>{b0(j,ct[j])})}u&&Rh(u,n,"c");function it(ct,j){Xt(j)?j.forEach(yt=>ct(yt.bind(e))):j&&ct(j.bind(e))}if(it(L0,h),it(D0,f),it(I0,p),it(U0,g),it(C0,_),it(R0,m),it(O0,I),it(k0,M),it(F0,E),it(Vu,w),it(Jd,v),it(N0,A),Xt(S))if(S.length){const ct=n.exposed||(n.exposed={});S.forEach(j=>{Object.defineProperty(ct,j,{get:()=>e[j],set:yt=>e[j]=yt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===oi&&(n.render=L),D!=null&&(n.inheritAttrs=D),Z&&(n.components=Z),B&&(n.directives=B),A&&Kd(n)}function H0(n,t,e=oi){Xt(n)&&(n=Dc(n));for(const i in n){const s=n[i];let r;Me(s)?"default"in s?r=Ma(s.from||i,s.default,!0):r=Ma(s.from||i):r=Ma(s),tn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Rh(n,t,e){Yn(Xt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Qd(n,t,e,i){let s=i.includes(".")?Yd(e,i):()=>e[i];if(Ue(n)){const r=t[n];Qt(r)&&mr(s,r)}else if(Qt(n))mr(s,n.bind(e));else if(Me(n))if(Xt(n))n.forEach(r=>Qd(r,t,e,i));else{const r=Qt(n.handler)?n.handler.bind(e):t[n.handler];Qt(r)&&mr(s,r,n)}}function tp(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ka(l,c,o,!0)),ka(l,t,o)),Me(t)&&r.set(t,l),l}function ka(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ka(n,r,e,!0),s&&s.forEach(o=>ka(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=G0[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const G0={data:Ph,props:Lh,emits:Lh,methods:to,computed:to,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:to,directives:to,watch:X0,provide:Ph,inject:W0};function Ph(n,t){return t?n?function(){return en(Qt(n)?n.call(this,this):n,Qt(t)?t.call(this,this):t)}:t:n}function W0(n,t){return to(Dc(n),Dc(t))}function Dc(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function rn(n,t){return n?[...new Set([].concat(n,t))]:t}function to(n,t){return n?en(Object.create(null),n,t):t}function Lh(n,t){return n?Xt(n)&&Xt(t)?[...new Set([...n,...t])]:en(Object.create(null),Ch(n),Ch(t??{})):t}function X0(n,t){if(!n)return t;if(!t)return n;const e=en(Object.create(null),n);for(const i in t)e[i]=rn(n[i],t[i]);return e}function ep(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $0=0;function q0(n,t){return function(i,s=null){Qt(i)||(i=en({},i)),s!=null&&!Me(s)&&(s=null);const r=ep(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:$0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Qt(u.install)?(o.add(u),u.install(c,...h)):Qt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||qn(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,ol(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=gr;gr=c;try{return u()}finally{gr=h}}};return c}}let gr=null;const Y0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Xn(t)}Modifiers`]||n[`${Os(t)}Modifiers`];function j0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||be;let s=e;const r=t.startsWith("update:"),o=r&&Y0(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ue(u)?u.trim():u)),o.number&&(s=s.map(Pu)));let a,l=i[a=bl(t)]||i[a=bl(Xn(t))];!l&&r&&(l=i[a=bl(Os(t))]),l&&Yn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yn(c,n,6,s)}}const K0=new WeakMap;function np(n,t,e=!1){const i=e?K0:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qt(n)){const l=c=>{const u=np(c,t,!0);u&&(a=!0,en(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Me(n)&&i.set(n,null),null):(Xt(r)?r.forEach(l=>o[l]=null):en(o,r),Me(n)&&i.set(n,o),o)}function sl(n,t){return!n||!ja(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),de(n,t[0].toLowerCase()+t.slice(1))||de(n,Os(t))||de(n,t))}function Dh(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:_}=n,m=Na(n);let d,w;try{if(e.shapeFlag&4){const v=s||i,L=v;d=ei(c.call(L,v,u,h,p,f,g)),w=a}else{const v=t;d=ei(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),w=t.props?a:Z0(a)}}catch(v){Ns.length=0,tl(v,n,1),d=qn(Ui)}let y=d;if(w&&_!==!1){const v=Object.keys(w),{shapeFlag:L}=y;v.length&&L&7&&(r&&v.some(Ka)&&(w=J0(w,r)),y=br(y,w,!1,!0))}if(e.dirs&&(y=br(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition){const v=nl(y.type)&&jd(y)||y;zu(v,e.transition)}return d=y,Na(m),d}const Z0=n=>{let t;for(const e in n)(e==="class"||e==="style"||ja(e))&&((t||(t={}))[e]=n[e]);return t},J0=(n,t)=>{const e={};for(const i in n)(!Ka(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Q0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Ih(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(ip(o,i,f)&&!sl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ih(i,o,c):!0:!!o;return!1}function Ih(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(ip(t,n,r)&&!sl(e,r))return!0}return!1}function ip(n,t,e){const i=n[e],s=t[e];return e==="style"&&Me(i)&&Me(s)?!Lr(i,s):i!==s}function tg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const sp={},rp=()=>Object.create(sp),op=n=>Object.getPrototypeOf(n)===sp;function eg(n,t,e,i=!1){const s={},r=rp();n.propsDefaults=Object.create(null),ap(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:c0(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function ng(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=fe(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(sl(n.emitsOptions,f))continue;const p=t[f];if(l)if(de(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Xn(f);s[g]=Ic(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{ap(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!de(t,h)&&((u=Os(h))===h||!de(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ic(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!de(t,h))&&(delete r[h],c=!0)}c&&Si(n.attrs,"set","")}function ap(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(co(l))continue;const c=t[l];let u;s&&de(s,u=Xn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:sl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=fe(e),c=a||be;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ic(s,l,h,c[h],n,!de(c,h))}}return o}function Ic(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=de(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Po(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Os(e))&&(i=!0))}return i}const ig=new WeakMap;function lp(n,t,e=!1){const i=e?ig:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qt(n)){const u=h=>{l=!0;const[f,p]=lp(h,t,!0);en(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Me(n)&&i.set(n,Rs),Rs;if(Xt(r))for(let u=0;u<r.length;u++){const h=Xn(r[u]);Uh(h)&&(o[h]=be)}else if(r)for(const u in r){const h=Xn(u);if(Uh(h)){const f=r[u],p=o[h]=Xt(f)||Qt(f)?{type:f}:en({},f),g=p.type;let _=!1,m=!0;if(Xt(g))for(let d=0;d<g.length;++d){const w=g[d],y=Qt(w)&&w.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=Qt(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||de(p,"default"))&&a.push(h)}}const c=[o,a];return Me(n)&&i.set(n,c),c}function Uh(n){return n[0]!=="$"&&!co(n)}const Hu=n=>n==="_"||n==="_ctx"||n==="$stable",Gu=n=>Xt(n)?n.map(ei):[ei(n)],sg=(n,t,e)=>{if(t._n)return t;const i=M0((...s)=>Gu(t(...s)),e);return i._c=!1,i},cp=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Hu(s))continue;const r=n[s];if(Qt(r))t[s]=sg(s,r,i);else if(r!=null){const o=Gu(r);t[s]=()=>o}}},up=(n,t)=>{const e=Gu(t);n.slots.default=()=>e},hp=(n,t,e)=>{for(const i in t)(e||!Hu(i))&&(n[i]=t[i])},rg=(n,t,e)=>{const i=n.slots=rp();if(n.vnode.shapeFlag&32){const s=t._;s?(hp(i,t,e),e&&bd(i,"_",s,!0)):cp(t,i)}else t&&up(n,t)},og=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=be;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:hp(s,t,e):(r=!t.$stable,cp(t,s)),o=t}else t&&(up(n,t),o={default:1});if(r)for(const a in s)!Hu(a)&&o[a]==null&&delete s[a]},pn=hg;function ag(n){return lg(n)}function lg(n,t){const e=Ja();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=oi,insertStaticContent:g}=n,_=(T,U,C,ft=null,X=null,J=null,nt=void 0,gt=null,lt=!!U.dynamicChildren)=>{if(T===U)return;T&&!Br(T,U)&&(ft=pt(T),Ft(T,X,J,!0),T=null),U.patchFlag===-2&&(lt=!1,U.dynamicChildren=null),U.dynamicChildren&&T&&T.dynamicChildren&&T.dynamicChildren.hasOnce&&(U.dynamicChildren===Rs&&(U.dynamicChildren=[]),U.dynamicChildren.hasOnce=!0);const{type:b,ref:x,shapeFlag:N}=U;switch(b){case rl:m(T,U,C,ft);break;case Ui:d(T,U,C,ft);break;case ba:T==null&&w(U,C,ft,nt);break;case qt:Z(T,U,C,ft,X,J,nt,gt,lt);break;default:N&1?L(T,U,C,ft,X,J,nt,gt,lt):N&6?B(T,U,C,ft,X,J,nt,gt,lt):(N&64||N&128)&&b.process(T,U,C,ft,X,J,nt,gt,lt,k)}x!=null&&X?fo(x,T&&T.ref,J,U||T,!U):x==null&&T&&T.ref!=null&&fo(T.ref,null,J,T,!0)},m=(T,U,C,ft)=>{if(T==null)i(U.el=a(U.children),C,ft);else{const X=U.el=T.el;U.children!==T.children&&c(X,U.children)}},d=(T,U,C,ft)=>{T==null?i(U.el=l(U.children||""),C,ft):U.el=T.el},w=(T,U,C,ft)=>{[T.el,T.anchor]=g(T.children,U,C,ft,T.el,T.anchor)},y=({el:T,anchor:U},C,ft)=>{let X;for(;T&&T!==U;)X=f(T),i(T,C,ft),T=X;i(U,C,ft)},v=({el:T,anchor:U})=>{let C;for(;T&&T!==U;)C=f(T),s(T),T=C;s(U)},L=(T,U,C,ft,X,J,nt,gt,lt)=>{if(U.type==="svg"?nt="svg":U.type==="math"&&(nt="mathml"),T==null)M(U,C,ft,X,J,nt,gt,lt);else{const b=T.el&&T.el._isVueCE?T.el:null;try{b&&b._beginPatch(),A(T,U,X,J,nt,gt,lt)}finally{b&&b._endPatch()}}},M=(T,U,C,ft,X,J,nt,gt)=>{let lt,b;const{props:x,shapeFlag:N,transition:H,dirs:tt}=T;if(lt=T.el=o(T.type,J,x&&x.is,x),N&8?u(lt,T.children):N&16&&I(T.children,lt,null,ft,X,Rl(T,J),nt,gt),tt&&ps(T,null,ft,"created"),E(lt,T,T.scopeId,nt,ft),x){for(const Mt in x)Mt!=="value"&&!co(Mt)&&r(lt,Mt,null,x[Mt],J,ft);"value"in x&&r(lt,"value",null,x.value,J),(b=x.onVnodeBeforeMount)&&Kn(b,ft,T)}tt&&ps(T,null,ft,"beforeMount");const et=cg(X,H);et&&H.beforeEnter(lt),i(lt,U,C),((b=x&&x.onVnodeMounted)||et||tt)&&pn(()=>{try{b&&Kn(b,ft,T),et&&H.enter(lt),tt&&ps(T,null,ft,"mounted")}finally{}},X)},E=(T,U,C,ft,X)=>{if(C&&p(T,C),ft)for(let J=0;J<ft.length;J++)p(T,ft[J]);if(X){let J=X.subTree;if(U===J||mp(J.type)&&(J.ssContent===U||J.ssFallback===U)){const nt=X.vnode;E(T,nt,nt.scopeId,nt.slotScopeIds,X.parent)}}},I=(T,U,C,ft,X,J,nt,gt,lt=0)=>{for(let b=lt;b<T.length;b++){const x=T[b]=gt?bi(T[b]):ei(T[b]);_(null,x,U,C,ft,X,J,nt,gt)}},A=(T,U,C,ft,X,J,nt)=>{const gt=U.el=T.el;let{patchFlag:lt,dynamicChildren:b,dirs:x}=U;lt|=T.patchFlag&16;const N=T.props||be,H=U.props||be;let tt;if(C&&ms(C,!1),(tt=H.onVnodeBeforeUpdate)&&Kn(tt,C,U,T),x&&ps(U,T,C,"beforeUpdate"),C&&ms(C,!0),b&&(!T.dynamicChildren||T.dynamicChildren.length!==b.length)&&(lt=0,nt=!1,b=null),(N.innerHTML&&H.innerHTML==null||N.textContent&&H.textContent==null)&&u(gt,""),b?S(T.dynamicChildren,b,gt,C,ft,Rl(U,X),J):nt||j(T,U,gt,null,C,ft,Rl(U,X),J,!1),lt>0){if(lt&16)D(gt,N,H,C,X);else if(lt&2&&N.class!==H.class&&r(gt,"class",null,H.class,X),lt&4&&r(gt,"style",N.style,H.style,X),lt&8){const et=U.dynamicProps;for(let Mt=0;Mt<et.length;Mt++){const vt=et[Mt],St=N[vt],Ht=H[vt];(Ht!==St||vt==="value")&&r(gt,vt,St,Ht,X,C)}}lt&1&&T.children!==U.children&&u(gt,U.children)}else!nt&&b==null&&D(gt,N,H,C,X);((tt=H.onVnodeUpdated)||x)&&pn(()=>{tt&&Kn(tt,C,U,T),x&&ps(U,T,C,"updated")},ft)},S=(T,U,C,ft,X,J,nt)=>{for(let gt=0;gt<U.length;gt++){const lt=T[gt],b=U[gt],x=lt.el&&(lt.type===qt||!Br(lt,b)||lt.shapeFlag&198)?h(lt.el):C;_(lt,b,x,null,ft,X,J,nt,!0)}},D=(T,U,C,ft,X)=>{if(U!==C){if(U!==be)for(const J in U)!co(J)&&!(J in C)&&r(T,J,U[J],null,X,ft);for(const J in C){if(co(J))continue;const nt=C[J],gt=U[J];nt!==gt&&J!=="value"&&r(T,J,gt,nt,X,ft)}"value"in C&&r(T,"value",U.value,C.value,X)}},Z=(T,U,C,ft,X,J,nt,gt,lt)=>{const b=U.el=T?T.el:a(""),x=U.anchor=T?T.anchor:a("");let{patchFlag:N,dynamicChildren:H,slotScopeIds:tt}=U;tt&&(gt=gt?gt.concat(tt):tt),T==null?(i(b,C,ft),i(x,C,ft),I(U.children||[],C,x,X,J,nt,gt,lt)):N>0&&N&64&&H&&T.dynamicChildren&&T.dynamicChildren.length===H.length?(S(T.dynamicChildren,H,C,X,J,nt,gt),(U.key!=null||X&&U===X.subTree)&&fp(T,U,!0)):j(T,U,C,x,X,J,nt,gt,lt)},B=(T,U,C,ft,X,J,nt,gt,lt)=>{U.slotScopeIds=gt,T==null?U.shapeFlag&512?X.ctx.activate(U,C,ft,nt,lt):q(U,C,ft,X,J,nt,lt):ot(T,U,lt)},q=(T,U,C,ft,X,J,nt)=>{const gt=T.component=_g(T,ft,X);if(Bu(T)&&(gt.ctx.renderer=k),xg(gt,!1,nt),gt.asyncDep){if(X&&X.registerDep(gt,it,nt),!T.el){const lt=gt.subTree=qn(Ui);d(null,lt,U,C),T.placeholder=lt.el}}else it(gt,T,U,C,X,J,nt)},ot=(T,U,C)=>{const ft=U.component=T.component;if(Q0(T,U,C))if(ft.asyncDep&&!ft.asyncResolved){U.el=T.el,ct(ft,U,C);return}else ft.next=U,ft.update();else U.el=T.el,ft.vnode=U},it=(T,U,C,ft,X,J,nt)=>{const gt=()=>{if(T.isMounted){let{next:N,bu:H,u:tt,parent:et,vnode:Mt}=T;{const Pt=dp(T);if(Pt){N&&(N.el=Mt.el,ct(T,N,nt)),Pt.asyncDep.then(()=>{pn(()=>{T.isUnmounted||b()},X)});return}}let vt=N,St;ms(T,!1),N?(N.el=Mt.el,ct(T,N,nt)):N=Mt,H&&ya(H),(St=N.props&&N.props.onVnodeBeforeUpdate)&&Kn(St,et,N,Mt),ms(T,!0);const Ht=Dh(T),xt=T.subTree;T.subTree=Ht,_(xt,Ht,h(xt.el),pt(xt),T,X,J),N.el=Ht.el,vt===null&&tg(T,Ht.el),tt&&pn(tt,X),(St=N.props&&N.props.onVnodeUpdated)&&pn(()=>Kn(St,et,N,Mt),X)}else{let N;const{el:H,props:tt}=U,{bm:et,m:Mt,parent:vt,root:St,type:Ht}=T,xt=po(U);ms(T,!1),et&&ya(et),!xt&&(N=tt&&tt.onVnodeBeforeMount)&&Kn(N,vt,U),ms(T,!0);{St.ce&&St.ce._hasShadowRoot()&&St.ce._injectChildStyle(Ht,T.parent?T.parent.type:void 0);const Pt=T.subTree=Dh(T);_(null,Pt,C,ft,T,X,J),U.el=Pt.el}if(Mt&&pn(Mt,X),!xt&&(N=tt&&tt.onVnodeMounted)){const Pt=U;pn(()=>Kn(N,vt,Pt),X)}(U.shapeFlag&256||vt&&po(vt.vnode)&&vt.vnode.shapeFlag&256)&&T.a&&pn(T.a,X),T.isMounted=!0,U=C=ft=null}};T.scope.on();const lt=T.effect=new Ad(gt);T.scope.off();const b=T.update=lt.run.bind(lt),x=T.job=lt.runIfDirty.bind(lt);x.i=T,x.id=T.uid,lt.scheduler=()=>Ou(x),ms(T,!0),b()},ct=(T,U,C)=>{U.component=T;const ft=T.vnode.props;T.vnode=U,T.next=null,ng(T,U.props,ft,C),og(T,U.children,C),Di(),Eh(T),Ii()},j=(T,U,C,ft,X,J,nt,gt,lt=!1)=>{const b=T&&T.children,x=T?T.shapeFlag:0,N=U.children,{patchFlag:H,shapeFlag:tt}=U;if(H>0){if(H&128){bt(b,N,C,ft,X,J,nt,gt,lt);return}else if(H&256){yt(b,N,C,ft,X,J,nt,gt,lt);return}}tt&8?(x&16&&z(b,X,J),N!==b&&u(C,N)):x&16?tt&16?bt(b,N,C,ft,X,J,nt,gt,lt):z(b,X,J,!0):(x&8&&u(C,""),tt&16&&I(N,C,ft,X,J,nt,gt,lt))},yt=(T,U,C,ft,X,J,nt,gt,lt)=>{T=T||Rs,U=U||Rs;const b=T.length,x=U.length,N=Math.min(b,x);let H;for(H=0;H<N;H++){const tt=U[H]=lt?bi(U[H]):ei(U[H]);_(T[H],tt,C,null,X,J,nt,gt,lt)}b>x?z(T,X,J,!0,!1,N):I(U,C,ft,X,J,nt,gt,lt,N)},bt=(T,U,C,ft,X,J,nt,gt,lt)=>{let b=0;const x=U.length;let N=T.length-1,H=x-1;for(;b<=N&&b<=H;){const tt=T[b],et=U[b]=lt?bi(U[b]):ei(U[b]);if(Br(tt,et))_(tt,et,C,null,X,J,nt,gt,lt);else break;b++}for(;b<=N&&b<=H;){const tt=T[N],et=U[H]=lt?bi(U[H]):ei(U[H]);if(Br(tt,et))_(tt,et,C,null,X,J,nt,gt,lt);else break;N--,H--}if(b>N){if(b<=H){const tt=H+1,et=tt<x?U[tt].el:ft;for(;b<=H;)_(null,U[b]=lt?bi(U[b]):ei(U[b]),C,et,X,J,nt,gt,lt),b++}}else if(b>H)for(;b<=N;)Ft(T[b],X,J,!0),b++;else{const tt=b,et=b,Mt=new Map;for(b=et;b<=H;b++){const At=U[b]=lt?bi(U[b]):ei(U[b]);At.key!=null&&Mt.set(At.key,b)}let vt,St=0;const Ht=H-et+1;let xt=!1,Pt=0;const Vt=new Array(Ht);for(b=0;b<Ht;b++)Vt[b]=0;for(b=tt;b<=N;b++){const At=T[b];if(St>=Ht){Ft(At,X,J,!0);continue}let $t;if(At.key!=null)$t=Mt.get(At.key);else for(vt=et;vt<=H;vt++)if(Vt[vt-et]===0&&Br(At,U[vt])){$t=vt;break}$t===void 0?Ft(At,X,J,!0):(Vt[$t-et]=b+1,$t>=Pt?Pt=$t:xt=!0,_(At,U[$t],C,null,X,J,nt,gt,lt),St++)}const Gt=xt?ug(Vt):Rs;for(vt=Gt.length-1,b=Ht-1;b>=0;b--){const At=et+b,$t=U[At],Kt=U[At+1],pe=At+1<x?Kt.el||pp(Kt):ft;Vt[b]===0?_(null,$t,C,pe,X,J,nt,gt,lt):xt&&(vt<0||b!==Gt[vt]?Ct($t,C,pe,2):vt--)}}},Ct=(T,U,C,ft,X=null)=>{const{el:J,type:nt,transition:gt,children:lt,shapeFlag:b}=T;if(b&6){Ct(T.component.subTree,U,C,ft);return}if(b&128){T.suspense.move(U,C,ft);return}if(b&64){nt.move(T,U,C,k);return}if(nt===qt){i(J,U,C);for(let N=0;N<lt.length;N++)Ct(lt[N],U,C,ft);i(T.anchor,U,C);return}if(nt===ba){y(T,U,C);return}if(ft!==2&&b&1&&gt)if(ft===0)gt.persisted&&!J[Al]?i(J,U,C):(gt.beforeEnter(J),i(J,U,C),pn(()=>gt.enter(J),X));else{const{leave:N,delayLeave:H,afterLeave:tt}=gt,et=()=>{T.ctx.isUnmounted?s(J):i(J,U,C)},Mt=()=>{const vt=J._isLeaving||!!J[Al];J._isLeaving&&J[Al](!0),gt.persisted&&!vt?et():N(J,()=>{et(),tt&&tt()})};H?H(J,et,Mt):Mt()}else i(J,U,C)},Ft=(T,U,C,ft=!1,X=!1)=>{const{type:J,props:nt,ref:gt,children:lt,dynamicChildren:b,shapeFlag:x,patchFlag:N,dirs:H,cacheIndex:tt,memo:et}=T;if((N===-2||b&&b.hasOnce)&&(X=!1),gt!=null&&(Di(),fo(gt,null,C,T,!0),Ii()),tt!=null&&(!T.ctx||T.ctx===U)&&(U.renderCache[tt]=void 0),x&256){U.ctx.deactivate(T);return}const Mt=x&1&&H,vt=!po(T);let St;if(vt&&(St=nt&&nt.onVnodeBeforeUnmount)&&Kn(St,U,T),x&6)F(T.component,C,ft);else{if(x&128){T.suspense.unmount(C,ft);return}Mt&&ps(T,null,U,"beforeUnmount"),x&64?T.type.remove(T,U,C,k,ft):b&&!b.hasOnce&&(J!==qt||N>0&&N&64)?z(b,U,C,!1,!0):(J===qt&&N&384||!X&&x&16)&&z(lt,U,C),ft&&jt(T)}const Ht=et!=null&&tt==null;(vt&&(St=nt&&nt.onVnodeUnmounted)||Mt||Ht)&&pn(()=>{St&&Kn(St,U,T),Mt&&ps(T,null,U,"unmounted"),Ht&&(T.el=null)},C)},jt=T=>{const{type:U,el:C,anchor:ft,transition:X}=T;if(U===qt){K(C,ft);return}if(U===ba){v(T),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const J=()=>{s(C),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(T.shapeFlag&1&&X&&!X.persisted){const{leave:nt,delayLeave:gt}=X,lt=()=>nt(C,J);gt?gt(T.el,J,lt):lt()}else J()},K=(T,U)=>{let C;for(;T!==U;)C=f(T),s(T),T=C;s(U)},F=(T,U,C)=>{const{bum:ft,scope:X,job:J,subTree:nt,um:gt,m:lt,a:b}=T;Nh(lt),Nh(b),ft&&ya(ft),X.stop(),J?(J.flags|=8,Ft(nt,T,U,C)):T.vnode.el&&nt&&(nt.transition=T.vnode.transition,Ft(nt,T,U,C)),gt&&pn(gt,U),pn(()=>{T.isUnmounted=!0},U)},z=(T,U,C,ft=!1,X=!1,J=0)=>{for(let nt=J;nt<T.length;nt++)Ft(T[nt],U,C,ft,X)},pt=T=>{if(T.shapeFlag&6)return pt(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const U=f(T.anchor||T.el),C=U&&U[T0];return C?f(C):U};let at=!1;const W=(T,U,C)=>{let ft;T==null?U._vnode&&(Ft(U._vnode,null,null,!0),ft=U._vnode.component):_(U._vnode||null,T,U,null,null,null,C),U._vnode=T,at||(at=!0,Eh(ft),Wd(),at=!1)},k={p:_,um:Ft,m:Ct,r:jt,mt:q,mc:I,pc:j,pbc:S,n:pt,o:n};return{render:W,hydrate:void 0,createApp:q0(W)}}function Rl({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ms({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function cg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function fp(n,t,e=!1){const i=n.children,s=t.children;if(Xt(i)&&Xt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=bi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&fp(o,a)),a.type===rl&&(a.patchFlag===-1&&(a=s[r]=bi(a)),a.el=o.el),a.type===Ui&&!a.el&&(a.el=o.el)}}function ug(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function dp(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dp(t)}function Nh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function pp(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?pp(t.subTree):null}const mp=n=>n.__isSuspense;function hg(n,t){t&&t.pendingBranch?Xt(n)?t.effects.push(...n):t.effects.push(n):y0(n)}const qt=Symbol.for("v-fgt"),rl=Symbol.for("v-txt"),Ui=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),Ns=[];let An=null;function dt(n=!1){Ns.push(An=n?null:[])}function gp(){Ns.pop(),An=Ns[Ns.length-1]||null}let yo=1;function Fh(n,t=!1){yo+=n,n<0&&An&&t&&(An.hasOnce=!0)}function _p(n){return n.dynamicChildren=yo>0?An||Rs:null,gp(),yo>0&&An&&An.push(n),n}function mt(n,t,e,i,s,r){return _p(P(n,t,e,i,s,r,!0))}function Uc(n,t,e,i,s){return _p(qn(n,t,e,i,s,!0))}function vp(n){return n?n.__v_isVNode===!0:!1}function Br(n,t){return n.type===t.type&&n.key===t.key}const xp=({key:n})=>n??null,Sa=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ue(n)||tn(n)||Qt(n)?{i:In,r:n,k:t,f:!!e}:n:null);function P(n,t=null,e=null,i=0,s=null,r=n===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&xp(t),ref:t&&Sa(t),scopeId:$d,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:In};return a?(za(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ue(e)?8:16),yo>0&&!o&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const qn=fg;function fg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===z0)&&(n=Ui),vp(n)){const a=br(n,t,!0);return e&&za(a,e),yo>0&&!r&&An&&(a.shapeFlag&6?An[An.indexOf(n)]=a:An.push(a)),a.patchFlag=-2,a}if(Sg(n)&&(n=n.__vccOpts),t){t=dg(t);let{class:a,style:l}=t;a&&!Ue(a)&&(t.class=ne(a)),Me(l)&&(ku(l)&&!Xt(l)&&(l=en({},l)),t.style=gn(l))}const o=Ue(n)?1:mp(n)?128:nl(n)?64:Me(n)?4:Qt(n)?2:0;return P(n,t,e,i,s,o,r,!0)}function dg(n){return n?ku(n)||op(n)?en({},n):n:null}function br(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?pg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xp(c),ref:t&&t.ref?e&&r?Xt(r)?r.concat(Sa(t)):[r,Sa(t)]:Sa(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&br(n.ssContent),ssFallback:n.ssFallback&&br(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&zu(u,l.clone(u)),u}function ge(n=" ",t=0){return qn(rl,null,n,t)}function Oa(n,t){const e=qn(ba,null,n);return e.staticCount=t,e}function Jt(n="",t=!1){return t?(dt(),Uc(Ui,null,n)):qn(Ui,null,n)}function ei(n){return n==null||typeof n=="boolean"?qn(Ui):Xt(n)?qn(qt,null,n.slice()):vp(n)?bi(n):qn(rl,null,String(n))}function bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:br(n)}function za(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Xt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),za(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!op(t)?t._ctx=In:s===3&&In&&(In.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Qt(t)){if(i&65){za(n,{default:t});return}t={default:t,_ctx:In},e=32}else t=String(t),i&64?(e=16,t=[ge(t)]):e=8;n.children=t,n.shapeFlag|=e}function pg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ne([t.class,i.class]));else if(s==="style")t.style=gn([t.style,i.style]);else if(ja(s)){const r=t[s],o=i[s];o&&r!==o&&!(Xt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ka(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Kn(n,t,e,i=null){Yn(n,t,7,[e,i])}const mg=ep();let gg=0;function _g(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||mg,r={uid:gg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(i,s),emitsOptions:np(i,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=j0.bind(null,r),n.ce&&n.ce(r),r}let cn=null;const vg=()=>cn||In;let Ba,Mo;{const n=Ja(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ba=t("__VUE_INSTANCE_SETTERS__",e=>cn=e),Mo=t("__VUE_SSR_SETTERS__",e=>bo=e)}const Po=n=>{const t=cn;return Ba(n),n.scope.on(),()=>{n.scope.off(),Ba(t)}},kh=()=>{cn&&cn.scope.off(),Ba(null)};function yp(n){return n.vnode.shapeFlag&4}let bo=!1;function xg(n,t=!1,e=!1){t&&Mo(t);const{props:i,children:s}=n.vnode,r=yp(n);eg(n,i,r,t),rg(n,s,e||t);const o=r?yg(n,t):void 0;return t&&Mo(!1),o}function yg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,B0);const{setup:i}=e;if(i){Di();const s=n.setupContext=i.length>1?bg(n):null,r=Po(n),o=Ro(i,n,0,[n.props,s]),a=vd(o);if(Ii(),r(),(a||n.sp)&&!po(n)&&Kd(n),a){if(o.then(kh,kh),t)return o.then(l=>{Mo(!0);try{Oh(n,l,t)}finally{Mo(!1)}}).catch(l=>{tl(l,n,0)});n.asyncDep=o}else Oh(n,o)}else Mp(n)}function Oh(n,t,e){Qt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Me(t)&&(n.setupState=Vd(t)),Mp(n)}function Mp(n,t,e){const i=n.type;n.render||(n.render=i.render||oi);{const s=Po(n);Di();try{V0(n)}finally{Ii(),s()}}}const Mg={get(n,t){return Je(n,"get",""),n[t]}};function bg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Mg),slots:n.slots,emit:n.emit,expose:t}}function ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vd(u0(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in mo)return mo[e](n)},has(t,e){return e in t||e in mo}})):n.proxy}function Sg(n){return Qt(n)&&"__vccOpts"in n}const En=(n,t)=>m0(n,t,bo),wg="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nc;const zh=typeof window<"u"&&window.trustedTypes;if(zh)try{Nc=zh.createPolicy("vue",{createHTML:n=>n})}catch{}const bp=Nc?n=>Nc.createHTML(n):n=>n,Eg="http://www.w3.org/2000/svg",Tg="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,Bh=Mi&&Mi.createElement("template"),Ag={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Mi.createElementNS(Eg,n):t==="mathml"?Mi.createElementNS(Tg,n):e?Mi.createElement(n,{is:e}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Bh.innerHTML=bp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Cg=Symbol("_vtc");function Rg(n,t,e){const i=n[Cg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Va=Symbol("_vod"),Sp=Symbol("_vsh"),eo={name:"show",beforeMount(n,{value:t},{transition:e}){n[Va]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Vr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Vr(n,!0),i.enter(n)):i.leave(n,()=>{Vr(n,!1)}):Vr(n,t))},beforeUnmount(n,{value:t}){Vr(n,t)}};function Vr(n,t){n.style.display=t?n[Va]:"none",n[Sp]=!t}const Pg=Symbol(""),Lg=/(?:^|;)\s*display\s*:/;function Dg(n,t,e){const i=n.style,s=Ue(e);let r=!1;if(e&&!s){if(t)if(Ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&no(i,a,"")}else for(const o in t)e[o]==null&&no(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Ug(n,o,!Ue(t)&&t?t[o]:void 0,a)||no(i,o,a):no(i,o,"")}}else if(s){if(t!==e){const o=i[Pg];o&&(e+=";"+o),i.cssText=e,r=Lg.test(e)}}else t&&n.removeAttribute("style");Va in n&&(n[Va]=r?i.display:"",n[Sp]&&(i.display="none"))}const zo=/\s*!important$/;function no(n,t,e){if(Xt(e))e.forEach(i=>no(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))zo.test(e)?n.setProperty(t,e.replace(zo,""),"important"):n.setProperty(t,e);else{const i=Ig(n,t);zo.test(e)?n.setProperty(Os(i),e.replace(zo,""),"important"):n[i]=e}}const Vh=["Webkit","Moz","ms"],Pl={};function Ig(n,t){const e=Pl[t];if(e)return e;let i=Xn(t);if(i!=="filter"&&i in n)return Pl[t]=i;i=Md(i);for(let s=0;s<Vh.length;s++){const r=Vh[s]+i;if(r in n)return Pl[t]=r}return t}function Ug(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ue(i)&&e===i}const Hh="http://www.w3.org/1999/xlink";function Gh(n,t,e,i,s,r=Vm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Hh,t.slice(6,t.length)):n.setAttributeNS(Hh,t,e):e==null||r&&!Sd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":li(e)?String(e):e)}function Wh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?bp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Sd(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Ts(n,t,e,i){n.addEventListener(t,e,i)}function Ng(n,t,e,i){n.removeEventListener(t,e,i)}const Xh=Symbol("_vei");function Fg(n,t,e,i,s=null){const r=n[Xh]||(n[Xh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=zg(t);if(i){const c=r[t]=Hg(i,s);Ts(n,a,c,l)}else o&&(Ng(n,a,o,l),r[t]=void 0)}}const kg=/(Once|Passive|Capture)$/,Og=/^on:?(?:Once|Passive|Capture)$/;function zg(n){let t,e;for(;(e=n.match(kg))&&!Og.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Os(n.slice(2)),t]}let Ll=0;const Bg=Promise.resolve(),Vg=()=>Ll||(Bg.then(()=>Ll=0),Ll=Date.now());function Hg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Xt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Yn(c,t,5,a)}}else Yn(s,t,5,[i])};return e.value=n,e.attached=Vg(),e}const $h=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Gg=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Rg(n,i,o):t==="style"?Dg(n,e,i):ja(t)?Ka(t)||Fg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wg(n,t,i,o))?(Wh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Gh(n,t,i,o,r,t!=="value")):n._isVueCE&&(Xg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ue(i)))?Wh(n,Xn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Gh(n,t,i,o))};function Wg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&$h(t)&&Qt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $h(t)&&Ue(e)?!1:t in n}function Xg(n,t){const e=n._def.props;if(!e)return!1;const i=Xn(t);return Array.isArray(e)?e.some(s=>Xn(s)===i):Object.keys(e).some(s=>Xn(s)===i)}const Ha=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Xt(t)?e=>ya(t,e):t};function $g(n){n.target.composing=!0}function qh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ps=Symbol("_assign"),Bo=Symbol("_initialValue");function Dl(n,t,e){return t&&(n=n.trim()),e&&(n=Pu(n)),n}const Ls={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[Bo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Bo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Ps]=Ha(s);const r=i||s.props&&s.props.type==="number";Ts(n,t?"change":"input",o=>{o.target.composing||n[Ps](Dl(n.value,e,r))}),(e||r)&&Ts(n,"change",()=>{n.value=Dl(n.value,e,r)}),t||(Ts(n,"compositionstart",$g),Ts(n,"compositionend",qh),Ts(n,"change",qh))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[Bo];delete n[Bo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Ps](Dl(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Ps]=Ha(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Pu(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Vo={deep:!0,created(n,t,e){n[Ps]=Ha(e),Ts(n,"change",()=>{const i=n._modelValue,s=qg(n),r=n.checked,o=n[Ps];if(Xt(i)){const a=wd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Mr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(wp(n,r))})},mounted:Yh,beforeUpdate(n,t,e){n[Ps]=Ha(e),Yh(n,t,e)}};function Yh(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Xt(t))s=wd(t,i.props.value)>-1;else if(Mr(t))s=t.has(i.props.value);else{if(t===e)return;s=Lr(t,wp(n,!0))}n.checked!==s&&(n.checked=s)}function qg(n){return"_value"in n?n._value:n.value}function wp(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const Yg=["ctrl","shift","alt","meta"],jg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Yg.some(e=>n[`${e}Key`]&&!t.includes(e))},mn=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let o=0;o<t.length;o++){const a=jg[t[o]];if(a&&a(s,t))return}return n(s,...r)}))},Kg=en({patchProp:Gg},Ag);let jh;function Zg(){return jh||(jh=ag(Kg))}const Jg=((...n)=>{const t=Zg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=t_(i);if(!s)return;const r=t._component;!Qt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Qg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Qg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function t_(n){return Ue(n)?document.querySelector(n):n}const Ei={paomo:{name:"牛羊肉泡馍",icon:"🥣",price:38,desc:"掰馍、煮馍、配糖蒜，汤浓肉烂。自己把馍掰成黄豆大小，也是吃泡馍的重要仪式感。"},roujiamo:{name:"腊汁肉夹馍",icon:"🥙",price:15,desc:"白吉馍外酥内软，夹入长时间卤制的腊汁肉，一口下去肉香与麦香交织。"},liangpi:{name:"秦镇米皮",icon:"🍜",price:12,desc:"米皮筋薄细穰，拌入辣子油、醋与时蔬，是关中人四季都爱的清爽味道。"},hulutou:{name:"葫芦头泡馍",icon:"🍲",price:32,desc:"以猪大肠、猪肚和高汤烩馍，汤味醇厚，是西安南院门一带的传统风味。"},biangbiang:{name:"油泼 biangbiang 面",icon:"🍝",price:22,desc:"宽如裤带的手工面配辣椒面、葱花与蒜末，热油一泼，香气瞬间升腾。"},guokui:{name:"锅盔",icon:"🫓",price:10,desc:"关中传统面食，饼厚耐储、麦香扎实，可夹菜、夹肉，也能掰入汤中。"},persimmon:{name:"黄桂柿子饼",icon:"🟠",price:10,desc:"以临潼火晶柿子和面，包入黄桂、核桃等馅料煎制，外皮金黄香甜。"},mirrorcake:{name:"镜糕",icon:"🍡",price:8,desc:"糯米粉蒸成小圆糕，蘸上白糖、果酱与坚果碎，是回民街常见甜点。"},zenggao:{name:"甑糕",icon:"🍚",price:12,desc:"糯米、红枣与蜜枣层层铺叠蒸熟，软糯香甜，适合作为一早的能量补给。"},sourplum:{name:"酸梅汤",icon:"🥤",price:8,desc:"乌梅、山楂、甘草等熬制，酸甜解腻，与西安重口小吃十分相配。"},bingfeng:{name:"冰峰汽水",icon:"🍊",price:5,desc:"橙味汽水是西安餐桌上的经典搭配，与凉皮、肉夹馍组成熟悉的“三秦套餐”。"},hulatang:{name:"肉丸胡辣汤",icon:"🥘",price:12,desc:"牛肉丸、土豆、莲花白等煎煮成浓稠早餐，胡椒香辛暖胃。"},shuipen:{name:"水盆羊肉",icon:"🍲",price:36,desc:"清亮羊肉汤中放入粉丝、香菜和葱花，配上月牙饼，鲜香不膻。"},xiaochao:{name:"小炒泡馍",icon:"🌶️",price:35,desc:"西红柿、黄花、木耳、辣椒和牛肉炒煮掀馍，酸辣醇厚。"},honeyzong:{name:"黄桂蜜凉粽",icon:"🍯",price:10,desc:"糯米粽浇上蜜桂花与玫瑰糖汁，冰凉甜糯，是夏日街头甜品。"},youcha:{name:"油茶麻花",icon:"🥨",price:9,desc:"热油茶里泡入现炸麻花，咸香绵厚，是很有关中味道的传统早点。"},saozimian:{name:"岐山臊子面",icon:"🍜",price:18,desc:"面条薄筋光，汤味酸辣鲜香，臊子、黄花、木耳与豆腐点出五色。"},youta:{name:"金线油塔",icon:"🫓",price:16,desc:"面丝层层盘绕如金线，蒸熟后松软油润，蘸蒜汁食用更清香。"},fengzhengrou:{name:"粉蒸牛羊肉",icon:"🥩",price:28,desc:"牛羊肉裹上炒香面粉与调料蒸制，绵软浓郁，配热茶恰到好处。"},curedbeef:{name:"腊牛肉",icon:"🍖",price:30,desc:"牛肉用老汤与香料卤煮，切片后肉质紧实、咸香醇厚。"}},So={changancenter:{name:"长安中轴",icon:"🧭",desc:"钟楼位于古城中心，东南西北四条大街在此交汇。棋盘式街坊与中轴秩序延续着隋唐都城规划的城市传统。"},drum:{name:"晨钟暮鼓",icon:"🥁",desc:"古代城市以钟鼓报时，清晨鸣钟、傍晚击鼓。钟楼与鼓楼共同构成西安古城最有辨识度的时间地标。"},citywall:{name:"明城墙礼仪",icon:"🏯",desc:"西安城墙形成于明代，城门、箭楼、瓮城和马道组成完整防御体系。南门至今仍举行富有仪式感的入城表演。"},calligraphy:{name:"碑林书法",icon:"🖌️",desc:"碑林保存大量汉唐以来碑刻，篆、隶、楷、行、草诸体俱全，是观察中国书法史与石刻艺术的珍贵现场。"},terracotta:{name:"秦俑军阵",icon:"🗿",desc:"兵马俑按步兵、弩兵、车兵与骑兵等军阵排列，陶俑面容、发髻和铠甲各不相同，展现秦代军制与雕塑工艺。"},tangdance:{name:"盛唐乐舞",icon:"💃",desc:"唐代长安汇聚各地音乐与舞蹈。今天的唐风演艺以鼓乐、舞姿、服饰和灯光重新想象开放包容的国际都会。"},tangart:{name:"唐代艺术",icon:"🎨",desc:"唐代壁画、金银器、三彩与陶俑共同呈现自信、丰盈且兼收并蓄的时代审美。"},tangpalace:{name:"唐宫礼制",icon:"👑",desc:"大明宫以宏阔中轴和分层院落承载朝会、议政与内廷生活，是理解盛唐国家礼制和建筑尺度的重要遗址。"},huaqing:{name:"华清宫故事",icon:"♨️",desc:"骊山温泉被历代经营为离宫园林。唐玄宗、杨贵妃的故事与近现代历史事件，使华清宫拥有多重记忆。"},silkroad:{name:"丝绸之路",icon:"🐫",desc:"长安是古代丝绸之路东方起点之一。商旅、宗教、技术、艺术和生活方式在这里相遇，塑造了多元开放的城市气质。"},qin:{name:"秦制天下",icon:"⚔️",desc:"秦统一后推行郡县制、统一文字与度量衡。秦始皇陵及其陪葬体系折射出帝国治理、工艺组织和宇宙观。"},qinling:{name:"秦岭生态",icon:"🐼",desc:"秦岭是中国重要地理与生态分界线，也是大熊猫、金丝猴、羚牛等珍稀动物的家园。"}},Ln={s_pagoda:{name:"大雁塔积木",icon:"🗼",desc:"登上大雁塔获得。"},s_warrior:{name:"秦俑小像",icon:"🗿",desc:"参观兵马俑或在文创店购买。",price:68},s_tiger:{name:"虎符冰箱贴",icon:"🐯",desc:"秦文化主题纪念品。",price:28},s_wall:{name:"城墙骑行章",icon:"🏯",desc:"完成城墙探索路线获得。"},s_drum:{name:"晨钟暮鼓徽章",icon:"🥁",desc:"打卡钟楼与鼓楼获得。"},s_tang:{name:"唐风宫灯",icon:"🏮",desc:"完成雁塔盛唐路线获得。"},s_scroll:{name:"碑林拓片卷轴",icon:"📜",desc:"完成碑林文脉路线获得。"},s_silk:{name:"丝路骆驼",icon:"🐫",desc:"体验丝绸之路文化获得。",price:35},s_cable:{name:"骊山索道票根",icon:"🚡",desc:"乘坐骊山索道获得。"},s_boat:{name:"曲江夜游船票",icon:"🎫",desc:"乘坐曲江池游船获得。"},s_foodie:{name:"长安金筷子",icon:"🥢",desc:"品尝六种西安美食。"},s_culture:{name:"古都文化达人证",icon:"📕",desc:"解锁八项西安文化。"},s_postcard:{name:"长安十二景明信片",icon:"🖼️",desc:"拍摄十张照片获得。",price:18},s_badge:{name:"长安旅行家纪念章",icon:"🏅",desc:"完成新手旅行任务获得。"},s_metro:{name:"西安地铁纪念卡",icon:"💳",desc:"首次乘坐地铁获得。"}},e_={paomo:{name:"老字号泡馍馆",greet:"馍要自己慢慢掰，掰得细，煮出来才入味！",items:["paomo","hulutou"]},snacks:{name:"三秦套餐铺",greet:"肉夹馍、凉皮、冰峰，来一套正合适！",items:["roujiamo","liangpi","bingfeng","sourplum"]},noodles:{name:"关中面馆",greet:"面要现扯，辣子要热油一激才香！",items:["biangbiang","saozimian","guokui","youta"]},breakfast:{name:"洒金桥早市",greet:"大早上来碗胡辣汤，再就一口甑糕。",items:["hulatang","youcha","zenggao"]},halal:{name:"清真老味道",greet:"水盆、小炒、腊牛肉，都是慢火熬出来的香。",items:["shuipen","xiaochao","curedbeef","fengzhengrou"]},nightmarket:{name:"长安夜市",greet:"华灯初上，来点古城甜味吧。",items:["persimmon","mirrorcake","honeyzong"]},souvenir:{name:"长安手信店",greet:"把一份长安记忆带回家吧！",items:["s_silk","s_postcard","s_tiger"]},terracotta:{name:"秦俑文创店",greet:"每一尊秦俑都有自己的表情，挑一尊带走吧。",items:["s_warrior","s_tiger"]}},ts=[{id:"n1",title:"拍摄大雁塔",desc:"前往雁塔区，用相机（C 键）拍下大雁塔。",cond:{type:"photo",id:"cantontower"},reward:{money:100}},{id:"n2",title:"寻找兵马俑",desc:"前往临潼区，找到秦始皇帝陵博物院兵马俑坑。",cond:{type:"discover",id:"chenclan"},reward:{money:120,item:"s_warrior"}},{id:"n3",title:"吃一碗泡馍",desc:"到回民街老字号泡馍馆，体验自己掰馍。",cond:{type:"buy",id:"paomo"},reward:{money:80}},{id:"n4",title:"完成长安初体验",desc:"登上大雁塔，俯瞰长安中轴。",cond:{type:"deck"},reward:{money:300,item:"s_badge"}}],Ep=[{id:"q_oldcity",district:"beilin",title:"古城·晨钟暮鼓",desc:"拍摄钟楼、鼓楼、永宁门与碑林",cond:{type:"photoSet",ids:["huacheng","drumtower","beijingroad","beilinmuseum"],n:4},reward:{money:220,item:"s_wall"}},{id:"q_lianhu",district:"lianhu",title:"莲湖·市井与丝路",desc:"探访回民街、清真大寺与大唐西市",cond:{type:"discoverSet",ids:["muslimquarter","greatmosque","silkroad"],n:3},reward:{money:200,item:"s_silk"}},{id:"q_yanta",district:"yanta",title:"雁塔·盛唐风华",desc:"拍摄大雁塔、大唐不夜城、陕历博和大唐芙蓉园",cond:{type:"photoSet",ids:["cantontower","shamian","shaanximuseum","tangparadise"],n:4},reward:{money:250,item:"s_tang"}},{id:"q_tang",district:"weiyang",title:"未央·千宫之宫",desc:"探访大明宫并解锁唐宫礼制",cond:{type:"discover",id:"damingpalace"},reward:{money:180,item:"s_scroll"}},{id:"q_qin",district:"lintong",title:"临潼·秦风骊山",desc:"拍摄兵马俑、华清宫，并登上骊山",cond:{type:"photoSet",ids:["chenclan","huaqing","baiyun"],n:3},reward:{money:260,item:"s_warrior"}},{id:"q_night",district:"yanta",title:"曲江·长安夜未央",desc:"夜晚拍摄大唐不夜城，并乘坐一次曲江夜游",cond:{type:"multi",parts:[{type:"nightPhoto",id:"shamian"},{type:"cruise"}]},reward:{money:250,item:"s_boat"}},{id:"q_food",title:"长安味道",desc:"品尝六种不同的西安美食",cond:{type:"foodCount",n:6},reward:{money:160,item:"s_foodie"}},{id:"q_food_master",title:"碳水之都",desc:"品尝十二种西安美食",cond:{type:"foodCount",n:12},reward:{money:320,item:"s_foodie"}},{id:"q_wall",district:"beilin",title:"城墙·四门巡游",desc:"发现永宁门、安远门、长乐门与安定门",cond:{type:"discoverSet",ids:["beijingroad","anyuanmen","changlemen","andingmen"],n:4},reward:{money:260,item:"s_wall"}},{id:"q_culture",title:"古都文化达人",desc:"解锁八项西安文化图鉴",cond:{type:"cultureCount",n:8},reward:{money:180,item:"s_culture"}}],al=[{id:"d_photo3",title:"拍摄三个景点",cond:{type:"dailyPhotos",n:3},reward:{money:60}},{id:"d_npc5",title:"和五位路人聊天",cond:{type:"dailyTalk",n:5},reward:{money:50}},{id:"d_district",title:"探索两个城区",cond:{type:"dailyDistricts",n:2},reward:{money:60}},{id:"d_bus",title:"乘坐一次观光巴士",cond:{type:"dailyCount",key:"bus",n:1},reward:{money:40}},{id:"d_metro",title:"乘坐一次地铁",cond:{type:"dailyCount",key:"metro",n:1},reward:{money:40}},{id:"d_ebike",title:"骑一次共享电单车",cond:{type:"dailyCount",key:"ebike",n:1},reward:{money:40}},{id:"d_food2",title:"品尝两种美食",cond:{type:"dailyCount",key:"food",n:2},reward:{money:50}},{id:"d_night",title:"拍一张长安夜景",cond:{type:"dailyCount",key:"nightPhoto",n:1},reward:{money:50}},{id:"d_walk",title:"步行一千米",cond:{type:"dailyCount",key:"walk",n:1e3},reward:{money:40}},{id:"d_culture",title:"体验一项古都文化",cond:{type:"dailyCount",key:"culture",n:1},reward:{money:50}},{id:"d_selfie",title:"拍一张自拍",cond:{type:"dailyCount",key:"selfie",n:1},reward:{money:30}}],n_={office:{name:"上班族",weight:3},student:{name:"学生",weight:2},elder:{name:"老人",weight:2},tourist:{name:"游客",weight:3},kid:{name:"小孩",weight:1},local:{name:"西安街坊",weight:2}},i_=["张","王","李","赵","刘","马","杨","郭","高","韩","白","杜","苏","董","雷"],s_={office:["先生","女士","经理","工"],student:["同学"],elder:["大爷","奶奶","叔","姨"],tourist:["游客"],kid:["小朋友"],local:["师傅","姐","哥"]},Il={office:["地铁二号线又从钟楼下面穿过去咧。","下班去城墙根儿遛一圈，风一吹就舒服了。","今天小寨人还是多得很。","周末去陕历博，得早点约票。"],student:["大雁塔晚上亮灯可好看了！","历史老师说明城墙一圈有十三公里多。","我最喜欢在书院门逛文创店。","放假想去秦岭看金丝猴。"],elder:["以前城墙根儿可安静咧。","娃，泡馍得自己掰，机器切的没灵魂。","钟楼鼓楼一亮灯，长安味儿就出来了。","秋天去骊山看晚照，美得很。"],tourist:["第一次来西安，先登城墙还是先去大雁塔？","兵马俑每一张脸真的都不一样。","大唐不夜城晚上氛围太好了！","我准备把西安面食都吃一遍。"],kid:["我想坐城墙自行车！","兵马俑会不会晚上偷偷换队形呀？","妈妈说带我去看大熊猫！"],local:["来了西安就甭急，慢慢转。","肉夹馍配凉皮，再来瓶冰峰。","西安人说“嘹咋咧”，就是特别好。","春天风大，出门记得带件外套。"]},Ul={rain:["下雨咧，快到城门洞里避一避。","青砖被雨一打，古城颜色更沉了。"],typhoon:["下雪咧！城墙和大雁塔都白了。","雪天路滑，慢慢走。"],night:["钟楼亮灯咧，夜长安正好看。","走，去不夜城看演出！","夜宵来碗泡馍，暖和。"]},Nl={huacheng:["钟楼就在古城正中心，四条大街都从这里展开。"],drumtower:["鼓楼后面就是回民街，晚上可热闹。"],beijingroad:["永宁门是西安南门，登城墙骑车很过瘾。"],cantontower:["大雁塔和玄奘法师取经的故事有关。"],shamian:["不夜城的演出一场接一场，晚上来最有氛围。"],chenclan:["仔细看，秦俑的发髻、铠甲和表情都不同。"],muslimquarter:["泡馍要自己掰得细细的，师傅才好煮。"],damingpalace:["含元殿当年是大唐举行重要朝会的地方。"],huaqing:["华清宫背靠骊山，温泉从古到今都很有名。"],baiyun:["骊山晚照是关中有名的景致。"]};function Un(n){let t=n>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Fl(n,t,e=0){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}const ln=(n,t,e)=>n<t?t:n>e?e:n,Tp=(n,t,e)=>n+(t-n)*e,r_=n=>n*n*(3-2*n);function De(n,t){return t[Math.floor(n()*t.length)%t.length]}function o_(n,t,e,i,s,r){const o=s-e,a=r-i,l=o*o+a*a;let c=l>0?((n-e)*o+(t-i)*a)/l:0;c=c<0?0:c>1?1:c;const u=e+o*c,h=i+a*c;return{d:Math.hypot(n-u,t-h),t:c}}function kl(n){let t=0;for(let e=1;e<n.length;e++)t+=Math.hypot(n[e].x-n[e-1].x,n[e].z-n[e-1].z);return t}function Zn(n,t){let e=0;for(let s=1;s<n.length;s++){const r=n[s-1],o=n[s],a=Math.hypot(o.x-r.x,o.z-r.z);if(e+a>=t||s===n.length-1){const l=a>0?ln((t-e)/a,0,1):0;return{x:r.x+(o.x-r.x)*l,z:r.z+(o.z-r.z)*l,dir:Math.atan2(o.x-r.x,o.z-r.z),seg:s-1}}e+=a}const i=n[n.length-1];return{x:i.x,z:i.z,dir:0,seg:n.length-2}}function Ol(n){const t=Math.floor(n)%24,e=Math.floor((n-Math.floor(n))*60);return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")}function a_(){const n=new Date;return n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()}const Wu="block-xian-save-v1";function io(){return{profile:null,money:500,discovered:[],photographed:{},nightPhotos:[],foods:[],culture:[],items:{},novice:0,quests:{},views:[],flags:{},talked:0,districts:[],stats:{photos:0,walk:0,bus:0,metro:0,cruise:0,ebike:0},daily:{date:"",ids:[],progress:{},done:{}},settings:{quality:"high",reflect:!0,shadows:!0,timeSpeed:1,sensitivity:1,showMinimap:!0,audio:!0,music:!0,sfx:!0,volume:.75},lastPos:null}}function l_(){try{const n=JSON.parse(localStorage.getItem(Wu));if(n)return{...io(),...n,settings:{...io().settings,...n.settings||{}},stats:{...io().stats,...n.stats||{}}}}catch{}return io()}const Q=Dr({save:l_(),ui:{screen:"menu",panel:null,photoMode:!1,photoView:"third",filter:"none",prompt:null,toasts:[],banner:null,hud:{district:"",place:"",time:"09:00",period:"早晨",weather:"sunny",weatherName:"晴天",weatherIcon:"☀️",fps:0,heading:0,ride:null,loading:0,speed:0,night:0},dialog:null,shop:null,flash:!1,effect:null,lastPhoto:null,fade:!1,fadeText:"",rideInfo:null,pointerLocked:!1,mobile:!1,portrait:!1,fullscreen:!1,ignorePortrait:!1,waypoint:null,loadingText:""}});let Kh=null;function zs(){clearTimeout(Kh),Kh=setTimeout(()=>{try{localStorage.setItem(Wu,JSON.stringify(Q.save))}catch{}},300)}function c_(){localStorage.removeItem(Wu),Object.assign(Q.save,io())}function _e(n,t="info",e=3200){const i=Math.random();Q.ui.toasts.push({id:i,text:n,kind:t}),setTimeout(()=>{const s=Q.ui.toasts.findIndex(r=>r.id===i);s>=0&&Q.ui.toasts.splice(s,1)},e)}function ws(n,t="",e=3500){Q.ui.banner={title:n,sub:t,id:Math.random()};const i=Q.ui.banner.id;setTimeout(()=>{Q.ui.banner&&Q.ui.banner.id===i&&(Q.ui.banner=null)},e)}function Ji(){const n=Q.save.daily,t=a_();if(n.date===t)return;const e=t.split("-").reduce((o,a)=>o*31+Number(a),7),i=Un(e),s=al.slice(),r=[];for(;r.length<3;){const o=Math.floor(i()*s.length);r.push(s.splice(o,1)[0].id)}Q.save.daily={date:t,ids:r,progress:{photos:[],talk:0,districts:[],counts:{}},done:{}},zs()}function zl(n,t){n&&(n.money&&(Q.save.money+=n.money),n.item&&Ki(n.item),_e(`🎁 任务完成「${t}」 +¥${n.money||0}${n.item?" · "+Ln[n.item].icon+Ln[n.item].name:""}`,"reward",4500))}function Ki(n,t=1){const e=Q.save.items[n]||0;Q.save.items[n]=e+t,e||_e(`获得纪念品：${Ln[n].icon} ${Ln[n].name}`,"item"),zs()}function wo(n){const t=Q.save;switch(n.type){case"photo":return!!t.photographed[n.id];case"discover":return t.discovered.includes(n.id);case"buy":return t.foods.includes(n.id);case"deck":return!!t.flags.deck;case"photoSet":return n.ids.filter(e=>t.photographed[e]).length>=n.n;case"discoverSet":return n.ids.filter(e=>t.discovered.includes(e)).length>=n.n;case"nightPhoto":return t.nightPhotos.includes(n.id);case"cruise":return t.stats.cruise>0;case"view":return t.views.includes(n.id);case"foodCount":return t.foods.length>=n.n;case"cultureCount":return t.culture.length>=n.n;case"multi":return n.parts.every(wo)}return!1}function u_(n){const t=Q.save;switch(n.type){case"photoSet":return[n.ids.filter(e=>t.photographed[e]).length,n.n];case"discoverSet":return[n.ids.filter(e=>t.discovered.includes(e)).length,n.n];case"foodCount":return[t.foods.length,n.n];case"cultureCount":return[t.culture.length,n.n];case"multi":return[n.parts.filter(wo).length,n.parts.length]}return[wo(n)?1:0,1]}function Ap(n){const t=Q.save.daily.progress;switch(n.type){case"dailyPhotos":return t.photos.length;case"dailyTalk":return t.talk;case"dailyDistricts":return t.districts.length;case"dailyCount":return t.counts[n.key]||0}return 0}function Cp(n){return[Math.min(n.cond.n,Math.floor(Ap(n.cond))),n.cond.n]}function di(){const n=Q.save;for(;n.novice<ts.length&&wo(ts[n.novice].cond);){const e=ts[n.novice];n.novice++,zl(e.reward,e.title),n.novice<ts.length?_e(`📌 新任务：${ts[n.novice].title}`,"task",4500):ws("🎉 长安旅行完成！","你已成为“长安旅行家”，继续探索更多景点吧")}for(const e of Ep)n.quests[e.id]||wo(e.cond)&&(n.quests[e.id]=!0,zl(e.reward,e.title));Ji();const t=n.daily;for(const e of t.ids){if(t.done[e])continue;const i=al.find(s=>s.id===e);i&&Ap(i.cond)>=i.cond.n&&(t.done[e]=!0,zl(i.reward,"每日："+i.title))}zs()}const Ke={discover(n,t){const e=Q.save;return e.discovered.includes(n)?!1:(e.discovered.push(n),di(),!0)},photo(n,{night:t,selfie:e}){const i=Q.save;Ji(),i.stats.photos++;const s=[];for(const o of n)i.photographed[o]||s.push(o),i.photographed[o]=(i.photographed[o]||0)+1,t&&!i.nightPhotos.includes(o)&&i.nightPhotos.push(o),i.daily.progress.photos.includes(o)||i.daily.progress.photos.push(o);const r=i.daily.progress.counts;return t&&(r.nightPhoto=(r.nightPhoto||0)+1),e&&(r.selfie=(r.selfie||0)+1),i.stats.photos===10&&Ki("s_postcard"),di(),s},buy(n,t){const e=Q.save;return e.money<t?!1:(e.money-=t,Ji(),Ei[n]?(e.foods.includes(n)||(e.foods.push(n),_e(`🍽️ 图鉴解锁：${Ei[n].icon} ${Ei[n].name}`,"dex")),e.daily.progress.counts.food=(e.daily.progress.counts.food||0)+1,n==="dimsum"&&Ke.culture("teaculture")):Ln[n]&&Ki(n),di(),!0)},culture(n){const t=Q.save;if(Ji(),!t.culture.includes(n)){t.culture.push(n),_e(`🏮 图鉴解锁：${So[n].icon} ${So[n].name}`,"dex"),t.daily.progress.counts.culture=(t.daily.progress.counts.culture||0)+1;const e={lion:"s_lion",wuyang:"s_ram",kapok:"s_kapok",opera:"s_opera"};e[n]&&Ki(e[n])}di()},talk(){Ji(),Q.save.talked++,Q.save.daily.progress.talk++,di()},district(n){const t=Q.save;Ji(),t.districts.includes(n)||t.districts.push(n),t.daily.progress.districts.includes(n)||t.daily.progress.districts.push(n),di()},count(n,t=1){const e=Q.save;Ji(),e.stats[n]!=null&&(e.stats[n]+=t),e.daily.progress.counts[n]=(e.daily.progress.counts[n]||0)+t,n==="metro"&&!e.items.s_card&&Ki("s_card"),n==="cruise"&&!e.items.s_cruise&&Ki("s_cruise"),n==="cable"&&!e.items.s_cable&&Ki("s_cable"),di()},deck(){const n=Q.save;n.flags.deck||(n.flags.deck=!0,Ki("s_tower")),di()},view(n){const t=Q.save;n&&!t.views.includes(n)&&t.views.push(n),di()}},h_=()=>window.AudioContext||window.webkitAudioContext;class f_{constructor(){this.ctx=null,this.ready=!1,this.musicTimer=null,this._uiPointer=t=>{t.target.closest&&t.target.closest("button:not(.shutter), .spawn-card, .lmi, .ph")&&this.ui()}}unlock(){const t=h_();return t?(this.ctx||this.setup(new t),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.applySettings(),!0):!1}setup(t){this.ctx=t,this.master=t.createGain(),this.musicGain=t.createGain(),this.sfxGain=t.createGain(),this.ambientGain=t.createGain(),this.musicGain.connect(this.master),this.sfxGain.connect(this.master),this.ambientGain.connect(this.master),this.master.connect(t.destination);const e=Math.max(1,Math.floor(t.sampleRate*2));this.noiseBuffer=t.createBuffer(1,e,t.sampleRate);const i=this.noiseBuffer.getChannelData(0);let s=0;for(let a=0;a<e;a++)s=s*.75+(Math.random()*2-1)*.25,i[a]=s;this.rainGain=this.loopNoise("highpass",1200),this.windGain=this.loopNoise("lowpass",520),this.engineGain=t.createGain(),this.engineGain.gain.value=0;const r=t.createOscillator();r.type="sawtooth",r.frequency.value=46;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=170,r.connect(o).connect(this.engineGain).connect(this.ambientGain),r.start(),this.engine=r,document.addEventListener("pointerdown",this._uiPointer,!0),this.ready=!0,this.startMusic()}loopNoise(t,e){const i=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();return i.buffer=this.noiseBuffer,i.loop=!0,s.type=t,s.frequency.value=e,r.gain.value=0,i.connect(s).connect(r).connect(this.ambientGain),i.start(),r}applySettings(){if(!this.ctx)return;const t=Q.save.settings,e=this.ctx.currentTime,i=t.audio===!1?0:Math.max(0,Math.min(1,t.volume??.75));this.master.gain.setTargetAtTime(i,e,.04),this.musicGain.gain.setTargetAtTime(t.music===!1?0:.28,e,.1),this.sfxGain.gain.setTargetAtTime(t.sfx===!1?0:.9,e,.04),this.ambientGain.gain.setTargetAtTime(t.sfx===!1?0:.6,e,.1)}startMusic(){if(this.musicTimer)return;const t=()=>{if(!this.ctx||this.ctx.state!=="running"||Q.save.settings.audio===!1||Q.save.settings.music===!1)return;const e=220,i=[1,1.5,1.25,2,1.5,1.25,1,.75],s=this.ctx.currentTime+.08;i.forEach((r,o)=>this.pluck(e*r,1.8,.045,s+o*.62)),this.pluck(110,4.2,.025,s),this.pluck(165,3.4,.018,s+2.5)};t(),this.musicTimer=setInterval(t,11500)}pluck(t,e=.5,i=.08,s=null){if(!this.ctx)return;const r=s??this.ctx.currentTime;for(const[o,a]of[[1,1],[2,.25],[3,.08]]){const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=o===1?"triangle":"sine",l.frequency.setValueAtTime(t*o,r),l.frequency.exponentialRampToValueAtTime(t*o*.992,r+e),c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(i*a,r+.012),c.gain.exponentialRampToValueAtTime(1e-4,r+e),l.connect(c).connect(this.musicGain),l.start(r),l.stop(r+e+.05)}}tone(t,e=.15,i=.1,s="sine",r=0){if(!this.ctx||Q.save.settings.audio===!1||Q.save.settings.sfx===!1)return;const o=this.ctx.currentTime+r,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=s,a.frequency.setValueAtTime(t,o),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+.008),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(this.sfxGain),a.start(o),a.stop(o+e+.03)}noise(t=.08,e=.08,i=900,s="lowpass",r=0){if(!this.ctx||Q.save.settings.audio===!1||Q.save.settings.sfx===!1)return;const o=this.ctx.currentTime+r,a=this.ctx.createBufferSource(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();a.buffer=this.noiseBuffer,l.type=s,l.frequency.value=i,c.gain.setValueAtTime(e,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l).connect(c).connect(this.sfxGain),a.start(o),a.stop(o+t+.03)}ui(){this.unlock(),this.tone(420,.045,.035,"square"),this.tone(620,.035,.018,"square",.035)}step(t=!1){this.noise(.075,t?.1:.065,t?260:210),this.tone(t?82:68,.06,t?.045:.03,"triangle")}jump(){this.tone(145,.18,.08,"triangle"),this.tone(230,.15,.045,"sine",.04)}land(){this.noise(.13,.13,180),this.tone(58,.12,.08,"sine")}shutter(){this.noise(.045,.16,1900,"highpass"),this.tone(180,.055,.11,"square"),this.tone(105,.09,.08,"triangle",.06)}interact(){this.tone(330,.09,.075,"triangle"),this.tone(495,.13,.055,"sine",.07)}discover(){[523,659,784,1047].forEach((t,e)=>this.tone(t,.42,.075,"sine",e*.11))}purchase(){this.tone(880,.08,.07,"square"),this.tone(1175,.18,.075,"sine",.09)}transport(t="metro"){const e=t==="bus"?120:t==="cruise"?96:t==="ebike"?210:170;this.tone(e,.42,.09,"sawtooth"),this.tone(e*1.5,.5,.05,"triangle",.12)}weather(t){t==="rain"||t==="typhoon"?this.noise(.8,.06,t==="typhoon"?700:1200,"bandpass"):this.tone(392,.35,.035,"sine")}update({weather:t="sunny",night:e=0,speed:i=0,ride:s=null}={}){if(!this.ctx)return;const r=this.ctx.currentTime,o=t==="rain"?.22:t==="typhoon"?.34:0,a=t==="typhoon"?.18:t==="cloudy"?.045:e>.55?.025:.012,l=s==="bus"?.09:s==="cruise"?.055:s==="ebike"?.035+Math.min(.035,i*.002):0;this.rainGain.gain.setTargetAtTime(o,r,.35),this.windGain.gain.setTargetAtTime(a,r,.7),this.engineGain.gain.setTargetAtTime(l,r,.25),this.engine.frequency.setTargetAtTime(s==="bus"?48+Math.min(10,i):s==="ebike"?84+Math.min(70,i*4):39,r,.2)}dispose(){document.removeEventListener("pointerdown",this._uiPointer,!0),clearInterval(this.musicTimer),this.musicTimer=null,this.ctx&&this.ctx.close().catch(()=>{}),this.ctx=null,this.ready=!1}}const Sr=new f_;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xu="170",d_=0,Zh=1,p_=2,Rp=1,Pp=2,yi=3,cs=0,un=1,Ti=2,rs=0,_r=1,Jh=2,Qh=3,tf=4,m_=5,As=100,g_=101,__=102,v_=103,x_=104,y_=200,M_=201,b_=202,S_=203,Fc=204,kc=205,w_=206,E_=207,T_=208,A_=209,C_=210,R_=211,P_=212,L_=213,D_=214,Oc=0,zc=1,Bc=2,wr=3,Vc=4,Hc=5,Gc=6,Wc=7,ll=0,I_=1,U_=2,os=0,N_=1,F_=2,k_=3,Lp=4,O_=5,z_=6,B_=7,Dp=300,Er=301,Tr=302,Xc=303,$c=304,cl=306,Ga=1e3,Ds=1001,qc=1002,hn=1003,V_=1004,so=1005,ri=1006,Bl=1007,Is=1008,Ni=1009,Ip=1010,Up=1011,Eo=1012,$u=1013,Fs=1014,Ci=1015,Bs=1016,qu=1017,Yu=1018,Ar=1020,Np=35902,Fp=1021,kp=1022,Wn=1023,Op=1024,zp=1025,vr=1026,Cr=1027,Bp=1028,ju=1029,Vp=1030,Ku=1031,Zu=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,Yc=35840,jc=35841,Kc=35842,Zc=35843,Jc=36196,Qc=37492,tu=37496,eu=37808,nu=37809,iu=37810,su=37811,ru=37812,ou=37813,au=37814,lu=37815,cu=37816,uu=37817,hu=37818,fu=37819,du=37820,pu=37821,Ca=36492,mu=36494,gu=36495,Hp=36283,_u=36284,vu=36285,xu=36286,H_=3200,G_=3201,Ju=0,W_=1,Ai="",$e="srgb",Ir="srgb-linear",ul="linear",ve="srgb",Gs=7680,ef=519,X_=512,$_=513,q_=514,Gp=515,Y_=516,j_=517,K_=518,Z_=519,yu=35044,nf="300 es",Ri=2e3,Wa=2001;class Ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=Math.PI/180,Mu=180/Math.PI;function as(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function _n(n,t,e){return Math.max(t,Math.min(e,n))}function J_(n,t){return(n%t+t)%t}function Hl(n,t,e){return(1-e)*n+e*t}function si(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,i,s,r,o,a,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],w=s[1],y=s[4],v=s[7],L=s[2],M=s[5],E=s[8];return r[0]=o*_+a*w+l*L,r[3]=o*m+a*y+l*M,r[6]=o*d+a*v+l*E,r[1]=c*_+u*w+h*L,r[4]=c*m+u*y+h*M,r[7]=c*d+u*v+h*E,r[2]=f*_+p*w+g*L,r[5]=f*m+p*y+g*M,r[8]=f*d+p*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gl.makeScale(t,e)),this}rotate(t){return this.premultiply(Gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gl=new ie;function Wp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Q_(){const n=Xa("canvas");return n.style.display="block",n}const sf={};function ro(n){n in sf||(sf[n]=!0,console.warn(n))}function tv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function ev(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nv(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(n.r=xr(n.r),n.g=xr(n.g),n.b=xr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ai?ul:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const rf=[.64,.33,.3,.6,.15,.06],of=[.2126,.7152,.0722],af=[.3127,.329],lf=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Ir]:{primaries:rf,whitePoint:af,transfer:ul,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:rf,whitePoint:af,transfer:ve,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:of,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let Ws;class iv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ws===void 0&&(Ws=Xa("canvas")),Ws.width=t.width,Ws.height=t.height;const i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sv=0;class Xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rv=0;class fn extends Ur{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,i=Ds,s=Ds,r=ri,o=Is,a=Wn,l=Ni,c=fn.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=as(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Dp;fn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,i=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,L=(d+1)/2,M=(u+f)/4,E=(h+_)/4,I=(g+m)/4;return y>v&&y>L?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=M/i,r=E/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=E/r,s=I/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ov extends Ur{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new fn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends ov{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $p extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class av extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,w=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const L=Math.sqrt(y),M=Math.atan2(L,d*w);m=Math.sin(m*M)/L,a=Math.sin(a*M)/L}const v=a*w;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_n(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xl.copy(this).projectOnVector(t),this.sub(Xl)}reflect(t){return this.sub(Xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_n(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new V,uf=new ks;class Lo{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(t.matrixWorld),this.union(Ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Go.subVectors(this.max,Hr),Xs.subVectors(t.a,Hr),$s.subVectors(t.b,Hr),qs.subVectors(t.c,Hr),Hi.subVectors($s,Xs),Gi.subVectors(qs,$s),gs.subVectors(Xs,qs);let e=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-gs.z,gs.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,gs.z,0,-gs.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-gs.y,gs.x,0];return!$l(e,Xs,$s,qs,Go)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,Xs,$s,qs,Go))?!1:(Wo.crossVectors(Hi,Gi),e=[Wo.x,Wo.y,Wo.z],$l(e,Xs,$s,qs,Go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new V,new V,new V,new V,new V,new V,new V,new V],Vn=new V,Ho=new Lo,Xs=new V,$s=new V,qs=new V,Hi=new V,Gi=new V,gs=new V,Hr=new V,Go=new V,Wo=new V,_s=new V;function $l(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const lv=new Lo,Gr=new V,ql=new V;class Do{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(ql)),this.expandByPoint(Gr.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new V,Yl=new V,Xo=new V,Wi=new V,jl=new V,$o=new V,Kl=new V;class Qu{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Yl.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(Yl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Xo),a=Wi.dot(this.direction),l=-Wi.dot(Xo),c=Wi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Yl).addScaledVector(Xo,f),p}intersectSphere(t,e){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,s,r){jl.subVectors(e,t),$o.subVectors(i,t),Kl.crossVectors(jl,$o);let o=this.direction.dot(Kl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const l=a*this.direction.dot($o.crossVectors(Wi,$o));if(l<0)return null;const c=a*this.direction.dot(jl.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Kl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cv,t,uv)}lookAt(t,e,i){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Xi.crossVectors(i,bn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Xi.crossVectors(i,bn)),Xi.normalize(),qo.crossVectors(bn,Xi),s[0]=Xi.x,s[4]=qo.x,s[8]=bn.x,s[1]=Xi.y,s[5]=qo.y,s[9]=bn.y,s[2]=Xi.z,s[6]=qo.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],w=i[3],y=i[7],v=i[11],L=i[15],M=s[0],E=s[4],I=s[8],A=s[12],S=s[1],D=s[5],Z=s[9],B=s[13],q=s[2],ot=s[6],it=s[10],ct=s[14],j=s[3],yt=s[7],bt=s[11],Ct=s[15];return r[0]=o*M+a*S+l*q+c*j,r[4]=o*E+a*D+l*ot+c*yt,r[8]=o*I+a*Z+l*it+c*bt,r[12]=o*A+a*B+l*ct+c*Ct,r[1]=u*M+h*S+f*q+p*j,r[5]=u*E+h*D+f*ot+p*yt,r[9]=u*I+h*Z+f*it+p*bt,r[13]=u*A+h*B+f*ct+p*Ct,r[2]=g*M+_*S+m*q+d*j,r[6]=g*E+_*D+m*ot+d*yt,r[10]=g*I+_*Z+m*it+d*bt,r[14]=g*A+_*B+m*ct+d*Ct,r[3]=w*M+y*S+v*q+L*j,r[7]=w*E+y*D+v*ot+L*yt,r[11]=w*I+y*Z+v*it+L*bt,r[15]=w*A+y*B+v*ct+L*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],w=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,v=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,L=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,M=e*w+i*y+s*v+r*L;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=w*E,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*E,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*E,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*p-i*l*p)*E,t[4]=y*E,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*E,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*E,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*E,t[8]=v*E,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*d-e*h*d)*E,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*E,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*E,t[12]=L*E,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*E,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*E,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,w=l*c,y=l*u,v=l*h,L=i.x,M=i.y,E=i.z;return s[0]=(1-(_+d))*L,s[1]=(p+v)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(f+d))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(g+y)*E,s[9]=(m-w)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Hn.copy(this);const c=1/r,u=1/o,h=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,e.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ri){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===Ri)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wa)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ri){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,p=(i+s)*u;let g,_;if(a===Ri)g=(o+r)*h,_=-2*h;else if(a===Wa)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ys=new V,Hn=new ye,cv=new V(0,0,0),uv=new V(1,1,1),Xi=new V,qo=new V,bn=new V,hf=new ye,ff=new ks;class kn{constructor(t=0,e=0,i=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ff.setFromEuler(this),this.setFromQuaternion(ff,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class qp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hv=0;const df=new V,js=new ks,gi=new ye,Yo=new V,Wr=new V,fv=new V,dv=new ks,pf=new V(1,0,0),mf=new V(0,1,0),gf=new V(0,0,1),_f={type:"added"},pv={type:"removed"},Ks={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Fe extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new V,e=new kn,i=new ks,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new ie}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(gf,t)}translateOnAxis(t,e){return df.copy(t).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yo.copy(t):Yo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Wr,Yo,this.up):gi.lookAt(Yo,Wr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(gi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_f),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pv),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_f),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,fv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,dv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new V(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new V,_i=new V,Jl=new V,vi=new V,Zs=new V,Js=new V,vf=new V,Ql=new V,tc=new V,ec=new V,nc=new Ce,ic=new Ce,sc=new Ce;class Dn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Gn.subVectors(t,e),s.cross(Gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Gn.subVectors(s,e),_i.subVectors(i,e),Jl.subVectors(t,e);const o=Gn.dot(Gn),a=Gn.dot(_i),l=Gn.dot(Jl),c=_i.dot(_i),u=_i.dot(Jl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(t,e),ic.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(nc,r.x),o.addScaledVector(ic,r.y),o.addScaledVector(sc,r.z),o}static isFrontFacing(t,e,i,s){return Gn.subVectors(i,e),_i.subVectors(t,e),Gn.cross(_i).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Zs.subVectors(s,i),Js.subVectors(r,i),Ql.subVectors(t,i);const l=Zs.dot(Ql),c=Js.dot(Ql);if(l<=0&&c<=0)return e.copy(i);tc.subVectors(t,s);const u=Zs.dot(tc),h=Js.dot(tc);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Zs,o);ec.subVectors(t,r);const p=Zs.dot(ec),g=Js.dot(ec);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Js,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return vf.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(vf,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Zs,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},jo={h:0,s:0,l:0};function rc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Nt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=J_(t,1),e=_n(e,0,1),i=_n(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=rc(o,r,t+1/3),this.g=rc(o,r,t),this.b=rc(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Yp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return le.fromWorkingColorSpace(je.copy(this),t),Math.round(_n(je.r*255,0,255))*65536+Math.round(_n(je.g*255,0,255))*256+Math.round(_n(je.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(je.copy(this),e);const i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=$e){le.fromWorkingColorSpace(je.copy(this),t);const e=je.r,i=je.g,s=je.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(jo);const i=Hl($i.h,jo.h,e),s=Hl($i.s,jo.s,e),r=Hl($i.l,jo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Nt;Nt.NAMES=Yp;let mv=0;class zi extends Ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=as(),this.name="",this.blending=_r,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=kc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fc&&(i.blendSrc=this.blendSrc),this.blendDst!==kc&&(i.blendDst=this.blendDst),this.blendEquation!==As&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Li extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new V,Ko=new se;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yu,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yu&&(t.usage=this.usage),t}}class hl extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fl extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ie extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gv=0;const Rn=new ye,oc=new Fe,Qs=new V,Sn=new Lo,Xr=new Lo,Ve=new V;class We extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?fl:hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,i){return Rn.makeTranslation(t,e,i),this.applyMatrix4(Rn),this}scale(t,e,i){return Rn.makeScale(t,e,i),this.applyMatrix4(Rn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(Sn.min,Xr.min),Sn.expandByPoint(Ve),Ve.addVectors(Sn.max,Xr.max),Sn.expandByPoint(Ve)):(Sn.expandByPoint(Xr.min),Sn.expandByPoint(Xr.max))}Sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(t,c),Ve.add(Qs)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new V,l[I]=new V;const c=new V,u=new V,h=new V,f=new se,p=new se,g=new se,_=new V,m=new V;function d(I,A,S){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[A].add(_),a[S].add(_),l[I].add(m),l[A].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,A=w.length;I<A;++I){const S=w[I],D=S.start,Z=S.count;for(let B=D,q=D+Z;B<q;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new V,v=new V,L=new V,M=new V;function E(I){L.fromBufferAttribute(s,I),M.copy(L);const A=a[I];y.copy(A),y.sub(L.multiplyScalar(L.dot(A))).normalize(),v.crossVectors(M,A);const D=v.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,A=w.length;I<A;++I){const S=w[I],D=S.start,Z=S.count;for(let B=D,q=D+Z;B<q;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,h=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new xn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xf=new ye,vs=new Qu,Zo=new Do,yf=new V,Jo=new V,Qo=new V,ta=new V,ac=new V,ea=new V,Mf=new V,na=new V;class oe extends Fe{constructor(t=new We,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ac.fromBufferAttribute(h,t),o?ea.addScaledVector(ac,u):ea.addScaledVector(ac.sub(e),u))}e.add(ea)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(Zo.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Zo,yf)===null||vs.origin.distanceToSquared(yf)>(t.far-t.near)**2))&&(xf.copy(r).invert(),vs.copy(t.ray).applyMatrix4(xf),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,L=y;v<L;v+=3){const M=a.getX(v),E=a.getX(v+1),I=a.getX(v+2);s=ia(this,d,t,i,c,u,h,M,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=ia(this,o,t,i,c,u,h,w,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,L=y;v<L;v+=3){const M=v,E=v+1,I=v+2;s=ia(this,d,t,i,c,u,h,M,E,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=m,y=m+1,v=m+2;s=ia(this,o,t,i,c,u,h,w,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _v(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===cs,a),l===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:n}}function ia(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Jo),n.getVertexPosition(l,Qo),n.getVertexPosition(c,ta);const u=_v(n,t,e,i,Jo,Qo,ta,Mf);if(u){const h=new V;Dn.getBarycoord(Mf,Jo,Qo,ta,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,h,new se)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,h,new se)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Dn.getNormal(Jo,Qo,ta,f.normal),u.face=f,u.barycoord=h}return u}class Pe extends We{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function g(_,m,d,w,y,v,L,M,E,I,A){const S=v/E,D=L/I,Z=v/2,B=L/2,q=M/2,ot=E+1,it=I+1;let ct=0,j=0;const yt=new V;for(let bt=0;bt<it;bt++){const Ct=bt*D-B;for(let Ft=0;Ft<ot;Ft++){const jt=Ft*S-Z;yt[_]=jt*w,yt[m]=Ct*y,yt[d]=q,c.push(yt.x,yt.y,yt.z),yt[_]=0,yt[m]=0,yt[d]=M>0?1:-1,u.push(yt.x,yt.y,yt.z),h.push(Ft/E),h.push(1-bt/I),ct+=1}}for(let bt=0;bt<I;bt++)for(let Ct=0;Ct<E;Ct++){const Ft=f+Ct+ot*bt,jt=f+Ct+ot*(bt+1),K=f+(Ct+1)+ot*(bt+1),F=f+(Ct+1)+ot*bt;l.push(Ft,jt,F),l.push(jt,K,F),j+=6}a.addGroup(p,j,A),p+=j,f+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function on(n){const t={};for(let e=0;e<n.length;e++){const i=Rr(n[e]);for(const s in i)t[s]=i[s]}return t}function vv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Kp={clone:Rr,merge:on};var xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=vv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zp extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new V,bf=new se,Sf=new se;class vn extends Zp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mu*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,bf,Sf),e.subVectors(Sf,bf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tr=-90,er=1;class Mv extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(tr,er,t,e);s.layers=this.layers,this.add(s);const r=new vn(tr,er,t,e);r.layers=this.layers,this.add(r);const o=new vn(tr,er,t,e);o.layers=this.layers,this.add(o);const a=new vn(tr,er,t,e);a.layers=this.layers,this.add(a);const l=new vn(tr,er,t,e);l.layers=this.layers,this.add(l);const c=new vn(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jp extends fn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Er,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bv extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:rs});r.uniforms.tEquirect.value=e;const o=new oe(s,r),a=e.minFilter;return e.minFilter===Is&&(e.minFilter=ri),new Mv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const lc=new V,Sv=new V,wv=new ie;class Qi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=lc.subVectors(i,e).cross(Sv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||wv.getNormalMatrix(t),s=this.coplanarPoint(lc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Do,sa=new V;class th{constructor(t=new Qi,e=new Qi,i=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ri){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],w=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,m-p,v-d).normalize(),i[1].setComponents(l+r,f+c,m+p,v+d).normalize(),i[2].setComponents(l+o,f+u,m+g,v+w).normalize(),i[3].setComponents(l-o,f-u,m-g,v-w).normalize(),i[4].setComponents(l-a,f-h,m-_,v-y).normalize(),e===Ri)i[5].setComponents(l+a,f+h,m+_,v+y).normalize();else if(e===Wa)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ev(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class us extends We{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const w=d*f-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-w,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const y=w+c*d,v=w+c*(d+1),L=w+1+c*(d+1),M=w+1+c*d;p.push(y,v,M),p.push(v,L,M)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Av=`#ifdef USE_ALPHAHASH
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
#endif`,Cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
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
#endif`,Iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uv=`#ifdef USE_BATCHING
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
#endif`,Nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zv=`#ifdef USE_IRIDESCENCE
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
#endif`,Bv=`#ifdef USE_BUMPMAP
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jv=`#define PI 3.141592653589793
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
} // validated`,Kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zv=`vec3 transformedNormal = objectNormal;
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
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
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
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
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
#endif`,wx=`struct PhysicalMaterial {
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
}`,Ex=`
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
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
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,D1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
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
}`,O1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,H1=`#define LAMBERT
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
}`,G1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,$1=`#define NORMAL
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
}`,q1=`#define PHONG
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
}`,Y1=`#define PHONG
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
}`,j1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,Z1=`#define TOON
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
}`,J1=`#define TOON
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
}`,Q1=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Tv,alphahash_pars_fragment:Av,alphamap_fragment:Cv,alphamap_pars_fragment:Rv,alphatest_fragment:Pv,alphatest_pars_fragment:Lv,aomap_fragment:Dv,aomap_pars_fragment:Iv,batching_pars_vertex:Uv,batching_vertex:Nv,begin_vertex:Fv,beginnormal_vertex:kv,bsdfs:Ov,iridescence_fragment:zv,bumpmap_pars_fragment:Bv,clipping_planes_fragment:Vv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Wv,color_fragment:Xv,color_pars_fragment:$v,color_pars_vertex:qv,color_vertex:Yv,common:jv,cube_uv_reflection_fragment:Kv,defaultnormal_vertex:Zv,displacementmap_pars_vertex:Jv,displacementmap_vertex:Qv,emissivemap_fragment:tx,emissivemap_pars_fragment:ex,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:sx,envmap_common_pars_fragment:rx,envmap_pars_fragment:ox,envmap_pars_vertex:ax,envmap_physical_pars_fragment:vx,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:fx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:_x,lights_toon_fragment:xx,lights_toon_pars_fragment:yx,lights_phong_fragment:Mx,lights_phong_pars_fragment:bx,lights_physical_fragment:Sx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Lx,map_fragment:Dx,map_pars_fragment:Ix,map_particle_fragment:Ux,map_particle_pars_fragment:Nx,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:kx,morphinstance_vertex:Ox,morphcolor_vertex:zx,morphnormal_vertex:Bx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Hx,normal_fragment_begin:Gx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:$x,normal_vertex:qx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:t1,premultiplied_alpha_fragment:e1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:s1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:l1,shadowmap_vertex:c1,shadowmask_pars_fragment:u1,skinbase_vertex:h1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:g1,tonemapping_fragment:_1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:y1,uv_pars_fragment:M1,uv_pars_vertex:b1,uv_vertex:S1,worldpos_vertex:w1,background_vert:E1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:C1,cube_vert:R1,cube_frag:P1,depth_vert:L1,depth_frag:D1,distanceRGBA_vert:I1,distanceRGBA_frag:U1,equirect_vert:N1,equirect_frag:F1,linedashed_vert:k1,linedashed_frag:O1,meshbasic_vert:z1,meshbasic_frag:B1,meshlambert_vert:V1,meshlambert_frag:H1,meshmatcap_vert:G1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:$1,meshphong_vert:q1,meshphong_frag:Y1,meshphysical_vert:j1,meshphysical_frag:K1,meshtoon_vert:Z1,meshtoon_frag:J1,points_vert:Q1,points_frag:ty,shadow_vert:ey,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},Rt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ni={basic:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:on([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:on([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:on([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:on([Rt.points,Rt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:on([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:on([Rt.common,Rt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:on([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:on([Rt.sprite,Rt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:on([Rt.common,Rt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:on([Rt.lights,Rt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ni.physical={uniforms:on([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ra={r:0,b:0,g:0},ys=new kn,ry=new ye;function oy(n,t,e,i,s,r,o){const a=new Nt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function _(w){let y=!1;const v=g(w);v===null?d(a,l):v&&v.isColor&&(d(v,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===cl)?(u===void 0&&(u=new oe(new Pe(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Rr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(y.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(ys)),u.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oe(new us(2,2),new On({name:"BackgroundMaterial",uniforms:Rr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(ra,jp(n)),i.buffers.color.setClear(ra.r,ra.g,ra.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:_,addToRenderList:m}}function ay(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,D,Z,B,q){let ot=!1;const it=h(B,Z,D);r!==it&&(r=it,c(r.object)),ot=p(S,B,Z,q),ot&&g(S,B,Z,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,v(S,D,Z,B),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,D,Z){const B=Z.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let ot=q[D.id];ot===void 0&&(ot={},q[D.id]=ot);let it=ot[B];return it===void 0&&(it=f(l()),ot[B]=it),it}function f(S){const D=[],Z=[],B=[];for(let q=0;q<e;q++)D[q]=0,Z[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,D,Z,B){const q=r.attributes,ot=D.attributes;let it=0;const ct=Z.getAttributes();for(const j in ct)if(ct[j].location>=0){const bt=q[j];let Ct=ot[j];if(Ct===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor)),bt===void 0||bt.attribute!==Ct||Ct&&bt.data!==Ct.data)return!0;it++}return r.attributesNum!==it||r.index!==B}function g(S,D,Z,B){const q={},ot=D.attributes;let it=0;const ct=Z.getAttributes();for(const j in ct)if(ct[j].location>=0){let bt=ot[j];bt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor));const Ct={};Ct.attribute=bt,bt&&bt.data&&(Ct.data=bt.data),q[j]=Ct,it++}r.attributes=q,r.attributesNum=it,r.index=B}function _(){const S=r.newAttributes;for(let D=0,Z=S.length;D<Z;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const Z=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;Z[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),q[S]!==D&&(n.vertexAttribDivisor(S,D),q[S]=D)}function w(){const S=r.newAttributes,D=r.enabledAttributes;for(let Z=0,B=D.length;Z<B;Z++)D[Z]!==S[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function y(S,D,Z,B,q,ot,it){it===!0?n.vertexAttribIPointer(S,D,Z,q,ot):n.vertexAttribPointer(S,D,Z,B,q,ot)}function v(S,D,Z,B){_();const q=B.attributes,ot=Z.getAttributes(),it=D.defaultAttributeValues;for(const ct in ot){const j=ot[ct];if(j.location>=0){let yt=q[ct];if(yt===void 0&&(ct==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),ct==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),yt!==void 0){const bt=yt.normalized,Ct=yt.itemSize,Ft=t.get(yt);if(Ft===void 0)continue;const jt=Ft.buffer,K=Ft.type,F=Ft.bytesPerElement,z=K===n.INT||K===n.UNSIGNED_INT||yt.gpuType===$u;if(yt.isInterleavedBufferAttribute){const pt=yt.data,at=pt.stride,W=yt.offset;if(pt.isInstancedInterleavedBuffer){for(let k=0;k<j.locationSize;k++)d(j.location+k,pt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let k=0;k<j.locationSize;k++)m(j.location+k);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let k=0;k<j.locationSize;k++)y(j.location+k,Ct/j.locationSize,K,bt,at*F,(W+Ct/j.locationSize*k)*F,z)}else{if(yt.isInstancedBufferAttribute){for(let pt=0;pt<j.locationSize;pt++)d(j.location+pt,yt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let pt=0;pt<j.locationSize;pt++)m(j.location+pt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let pt=0;pt<j.locationSize;pt++)y(j.location+pt,Ct/j.locationSize,K,bt,Ct*F,Ct/j.locationSize*pt*F,z)}}else if(it!==void 0){const bt=it[ct];if(bt!==void 0)switch(bt.length){case 2:n.vertexAttrib2fv(j.location,bt);break;case 3:n.vertexAttrib3fv(j.location,bt);break;case 4:n.vertexAttrib4fv(j.location,bt);break;default:n.vertexAttrib1fv(j.location,bt)}}}}w()}function L(){I();for(const S in i){const D=i[S];for(const Z in D){const B=D[Z];for(const q in B)u(B[q].object),delete B[q];delete D[Z]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const Z in D){const B=D[Z];for(const q in B)u(B[q].object),delete B[q];delete D[Z]}delete i[S.id]}function E(S){for(const D in i){const Z=i[D];if(Z[S.id]===void 0)continue;const B=Z[S.id];for(const q in B)u(B[q].object),delete B[q];delete Z[S.id]}}function I(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function ly(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cy(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Wn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const I=E===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ni&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ci&&!I)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:M}}function uy(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Qi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,y=w*4;let v=d.clippingState||null;l.value=v,v=u(g,f,y,p);for(let L=0;L!==y;++L)v[L]=e[L];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function hy(n){let t=new WeakMap;function e(o,a){return a===Xc?o.mapping=Er:a===$c&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xc||a===$c)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class eh extends Zp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ur=4,wf=[.125,.215,.35,.446,.526,.582],Cs=20,cc=new eh,Ef=new Nt;let uc=null,hc=0,fc=0,dc=!1;const Es=(1+Math.sqrt(5))/2,nr=1/Es,Tf=[new V(-Es,nr,0),new V(Es,nr,0),new V(-nr,0,Es),new V(nr,0,Es),new V(0,Es,-nr),new V(0,Es,nr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Af{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,hc,fc),this._renderer.xr.enabled=dc,t.scissorTest=!1,oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Bs,format:Wn,colorSpace:Ir,depthBuffer:!1},s=Cf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fy(r)),this._blurMaterial=dy(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,cc)}_sceneToCubeUV(t,e,i,s){const a=new vn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ef),u.toneMapping=os,u.autoClear=!1;const p=new Li({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new oe(new Pe,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Ef),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;oa(s,w*y,d>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Er||t.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;oa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,cc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tf[(s-r-1)%Tf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Cs;m>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);const d=[];let w=0;for(let E=0;E<Cs;++E){const I=E/_,A=Math.exp(-I*I/2);d.push(A),E===0?w+=A:E<m&&(w+=2*A)}for(let E=0;E<d.length;E++)d[E]=d[E]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[s],L=3*v*(s>y-ur?s-y+ur:0),M=4*(this._cubeSize-v);oa(e,L,M,3*v,2*v),l.setRenderTarget(e),l.render(h,cc)}}function fy(n){const t=[],e=[],i=[];let s=n;const r=n-ur+1+wf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ur?l=wf[o-n+ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,I=M>2?0:-1,A=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];w.set(A,_*g*M),y.set(f,m*g*M);const S=[M,M,M,M,M,M];v.set(S,d*g*M)}const L=new We;L.setAttribute("position",new xn(w,_)),L.setAttribute("uv",new xn(y,m)),L.setAttribute("faceIndex",new xn(v,d)),t.push(L),s>ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Cf(n,t,e){const i=new Fi(n,t,e);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function dy(n,t,e){const i=new Float32Array(Cs),s=new V(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Rf(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Pf(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function py(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xc||l===$c,u=l===Er||l===Tr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Af(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Af(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function my(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gy(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let y=0,v=w.length;y<v;y+=3){const L=w[y+0],M=w[y+1],E=w[y+2];f.push(L,M,M,E,E,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const L=y+0,M=y+1,E=y+2;f.push(L,M,M,E,E,L)}}else return;const m=new(Wp(f)?fl:hl)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function _y(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=p[w]*_[w];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function xy(n,t,e){const i=new WeakMap,s=new Ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,M=1;L>t.maxTextureSize&&(M=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*M*4*h),I=new $p(E,L,M,h);I.type=Ci,I.needsUpdate=!0;const A=v*4;for(let D=0;D<h;D++){const Z=d[D],B=w[D],q=y[D],ot=L*M*4*D;for(let it=0;it<Z.count;it++){const ct=it*A;g===!0&&(s.fromBufferAttribute(Z,it),E[ot+ct+0]=s.x,E[ot+ct+1]=s.y,E[ot+ct+2]=s.z,E[ot+ct+3]=0),_===!0&&(s.fromBufferAttribute(B,it),E[ot+ct+4]=s.x,E[ot+ct+5]=s.y,E[ot+ct+6]=s.z,E[ot+ct+7]=0),m===!0&&(s.fromBufferAttribute(q,it),E[ot+ct+8]=s.x,E[ot+ct+9]=s.y,E[ot+ct+10]=s.z,E[ot+ct+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new se(L,M)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function yy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class tm extends fn{constructor(t,e,i,s,r,o,a,l,c,u=vr){if(u!==vr&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Fs),i===void 0&&u===Cr&&(i=Ar),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const em=new fn,Lf=new tm(1,1),nm=new $p,im=new av,sm=new Jp,Df=[],If=[],Uf=new Float32Array(16),Nf=new Float32Array(9),Ff=new Float32Array(4);function Nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function dl(n,t){let e=If[t];e===void 0&&(e=new Int32Array(t),If[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function My(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function by(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Ey(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),Be(e,i)}}function Ty(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,i))return;Nf.set(i),n.uniformMatrix3fv(this.addr,!1,Nf),Be(e,i)}}function Ay(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ze(e,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),Be(e,i)}}function Cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function Dy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Ny(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function Fy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lf.compareFunction=Gp,r=Lf):r=em,e.setTexture2D(t||r,s)}function ky(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||im,s)}function Oy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||sm,s)}function zy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||nm,s)}function By(n){switch(n){case 5126:return My;case 35664:return by;case 35665:return Sy;case 35666:return wy;case 35674:return Ey;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Iy;case 36295:return Uy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return zy}}function Vy(n,t){n.uniform1fv(this.addr,t)}function Hy(n,t){const e=Nr(t,this.size,2);n.uniform2fv(this.addr,e)}function Gy(n,t){const e=Nr(t,this.size,3);n.uniform3fv(this.addr,e)}function Wy(n,t){const e=Nr(t,this.size,4);n.uniform4fv(this.addr,e)}function Xy(n,t){const e=Nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $y(n,t){const e=Nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qy(n,t){const e=Nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Yy(n,t){n.uniform1iv(this.addr,t)}function jy(n,t){n.uniform2iv(this.addr,t)}function Ky(n,t){n.uniform3iv(this.addr,t)}function Zy(n,t){n.uniform4iv(this.addr,t)}function Jy(n,t){n.uniform1uiv(this.addr,t)}function Qy(n,t){n.uniform2uiv(this.addr,t)}function tM(n,t){n.uniform3uiv(this.addr,t)}function eM(n,t){n.uniform4uiv(this.addr,t)}function nM(n,t,e){const i=this.cache,s=t.length,r=dl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||em,r[o])}function iM(n,t,e){const i=this.cache,s=t.length,r=dl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||im,r[o])}function sM(n,t,e){const i=this.cache,s=t.length,r=dl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sm,r[o])}function rM(n,t,e){const i=this.cache,s=t.length,r=dl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nm,r[o])}function oM(n){switch(n){case 5126:return Vy;case 35664:return Hy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return $y;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return jy;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return tM;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}class aM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=By(e.type)}}class lM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oM(e.type)}}class cM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function kf(n,t){n.seq.push(t),n.map[t.id]=t}function uM(n,t,e){const i=n.name,s=i.length;for(pc.lastIndex=0;;){const r=pc.exec(i),o=pc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kf(e,c===void 0?new aM(a,n,t):new lM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new cM(a),kf(e,h)),e=h}}}class Ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);uM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Of(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hM=37297;let fM=0;function dM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const zf=new ie;function pM(n){le._getMatrix(zf,le.workingColorSpace,n);const t=`mat3( ${zf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case ul:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dM(n.getShaderSource(t),o)}else return s}function mM(n,t){const e=pM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gM(n,t){let e;switch(t){case N_:e="Linear";break;case F_:e="Reinhard";break;case k_:e="Cineon";break;case Lp:e="ACESFilmic";break;case z_:e="AgX";break;case B_:e="Neutral";break;case O_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const aa=new V;function _M(){le.getLuminanceCoefficients(aa);const n=aa.x.toFixed(4),t=aa.y.toFixed(4),e=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function xM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function yM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function oo(n){return n!==""}function Vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(n){return n.replace(MM,SM)}const bM=new Map;function SM(n,t){let e=re[t];if(e===void 0){const i=bM.get(t);if(i!==void 0)e=re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bu(e)}const wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(n){return n.replace(wM,EM)}function EM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function TM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(t="SHADOWMAP_TYPE_VSM"),t}function AM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case cl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function CM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function RM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case I_:t="ENVMAP_BLENDING_MIX";break;case U_:t="ENVMAP_BLENDING_ADD";break}return t}function PM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function LM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=TM(e),c=AM(e),u=CM(e),h=RM(e),f=PM(e),p=vM(e),g=xM(r),_=s.createProgram();let m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),d.length>0&&(d+=`
`)):(m=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),d=[Wf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?re.tonemapping_pars_fragment:"",e.toneMapping!==os?gM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,mM("linearToOutputTexel",e.outputColorSpace),_M(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=bu(o),o=Vf(o,e),o=Hf(o,e),a=bu(a),a=Vf(a,e),a=Hf(a,e),o=Gf(o),a=Gf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=w+m+o,v=w+d+a,L=Of(s,s.VERTEX_SHADER,y),M=Of(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(D){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(L).trim(),q=s.getShaderInfoLog(M).trim();let ot=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ot=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,M);else{const ct=Bf(s,L,"vertex"),j=Bf(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+ct+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(B===""||q==="")&&(it=!1);it&&(D.diagnostics={runnable:ot,programLog:Z,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:d}})}s.deleteShader(L),s.deleteShader(M),I=new Ra(s,_),A=yM(s,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,hM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=M,this}let DM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new UM(t),e.set(t,i)),i}}class UM{constructor(t){this.id=DM++,this.code=t,this.usedTimes=0}}function NM(n,t,e,i,s,r,o){const a=new qp,l=new IM,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,S,D,Z,B){const q=Z.fog,ot=B.geometry,it=A.isMeshStandardMaterial?Z.environment:null,ct=(A.isMeshStandardMaterial?e:t).get(A.envMap||it),j=ct&&ct.mapping===cl?ct.image.height:null,yt=g[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const bt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ct=bt!==void 0?bt.length:0;let Ft=0;ot.morphAttributes.position!==void 0&&(Ft=1),ot.morphAttributes.normal!==void 0&&(Ft=2),ot.morphAttributes.color!==void 0&&(Ft=3);let jt,K,F,z;if(yt){const me=ni[yt];jt=me.vertexShader,K=me.fragmentShader}else jt=A.vertexShader,K=A.fragmentShader,l.update(A),F=l.getVertexShaderID(A),z=l.getFragmentShaderID(A);const pt=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),W=B.isInstancedMesh===!0,k=B.isBatchedMesh===!0,Et=!!A.map,T=!!A.matcap,U=!!ct,C=!!A.aoMap,ft=!!A.lightMap,X=!!A.bumpMap,J=!!A.normalMap,nt=!!A.displacementMap,gt=!!A.emissiveMap,lt=!!A.metalnessMap,b=!!A.roughnessMap,x=A.anisotropy>0,N=A.clearcoat>0,H=A.dispersion>0,tt=A.iridescence>0,et=A.sheen>0,Mt=A.transmission>0,vt=x&&!!A.anisotropyMap,St=N&&!!A.clearcoatMap,Ht=N&&!!A.clearcoatNormalMap,xt=N&&!!A.clearcoatRoughnessMap,Pt=tt&&!!A.iridescenceMap,Vt=tt&&!!A.iridescenceThicknessMap,Gt=et&&!!A.sheenColorMap,At=et&&!!A.sheenRoughnessMap,$t=!!A.specularMap,Kt=!!A.specularColorMap,pe=!!A.specularIntensityMap,G=Mt&&!!A.transmissionMap,Lt=Mt&&!!A.thicknessMap,ht=!!A.gradientMap,_t=!!A.alphaMap,Ut=A.alphaTest>0,Dt=!!A.alphaHash,te=!!A.extensions;let Le=os;A.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Le=n.toneMapping);const qe={shaderID:yt,shaderType:A.type,shaderName:A.name,vertexShader:jt,fragmentShader:K,defines:A.defines,customVertexShaderID:F,customFragmentShaderID:z,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:k,batchingColor:k&&B._colorsTexture!==null,instancing:W,instancingColor:W&&B.instanceColor!==null,instancingMorph:W&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ir,alphaToCoverage:!!A.alphaToCoverage,map:Et,matcap:T,envMap:U,envMapMode:U&&ct.mapping,envMapCubeUVHeight:j,aoMap:C,lightMap:ft,bumpMap:X,normalMap:J,displacementMap:f&&nt,emissiveMap:gt,normalMapObjectSpace:J&&A.normalMapType===W_,normalMapTangentSpace:J&&A.normalMapType===Ju,metalnessMap:lt,roughnessMap:b,anisotropy:x,anisotropyMap:vt,clearcoat:N,clearcoatMap:St,clearcoatNormalMap:Ht,clearcoatRoughnessMap:xt,dispersion:H,iridescence:tt,iridescenceMap:Pt,iridescenceThicknessMap:Vt,sheen:et,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:$t,specularColorMap:Kt,specularIntensityMap:pe,transmission:Mt,transmissionMap:G,thicknessMap:Lt,gradientMap:ht,opaque:A.transparent===!1&&A.blending===_r&&A.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ut,alphaHash:Dt,combine:A.combine,mapUv:Et&&_(A.map.channel),aoMapUv:C&&_(A.aoMap.channel),lightMapUv:ft&&_(A.lightMap.channel),bumpMapUv:X&&_(A.bumpMap.channel),normalMapUv:J&&_(A.normalMap.channel),displacementMapUv:nt&&_(A.displacementMap.channel),emissiveMapUv:gt&&_(A.emissiveMap.channel),metalnessMapUv:lt&&_(A.metalnessMap.channel),roughnessMapUv:b&&_(A.roughnessMap.channel),anisotropyMapUv:vt&&_(A.anisotropyMap.channel),clearcoatMapUv:St&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(A.sheenRoughnessMap.channel),specularMapUv:$t&&_(A.specularMap.channel),specularColorMapUv:Kt&&_(A.specularColorMap.channel),specularIntensityMapUv:pe&&_(A.specularIntensityMap.channel),transmissionMapUv:G&&_(A.transmissionMap.channel),thicknessMapUv:Lt&&_(A.thicknessMap.channel),alphaMapUv:_t&&_(A.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(J||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ot.attributes.uv&&(Et||_t),fog:!!q,useFog:A.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:at,skinning:B.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Le,decodeVideoTexture:Et&&A.map.isVideoTexture===!0&&le.getTransfer(A.map.colorSpace)===ve,decodeVideoTextureEmissive:gt&&A.emissiveMap.isVideoTexture===!0&&le.getTransfer(A.emissiveMap.colorSpace)===ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ti,flipSided:A.side===un,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:te&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&A.extensions.multiDraw===!0||k)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function d(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)S.push(D),S.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(w(S,A),y(S,A),S.push(n.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function w(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function y(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){const S=g[A.type];let D;if(S){const Z=ni[S];D=Kp.clone(Z.uniforms)}else D=A.uniforms;return D}function L(A,S){let D;for(let Z=0,B=u.length;Z<B;Z++){const q=u[Z];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new LM(n,S,A,r),u.push(D)),D}function M(A){if(--A.usedTimes===0){const S=u.indexOf(A);u[S]=u[u.length-1],u.pop(),A.destroy()}}function E(A){l.remove(A)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:L,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:I}}function FM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function kM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $f(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||kM),i.length>1&&i.sort(f||Xf),s.length>1&&s.sort(f||Xf)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function OM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new $f,n.set(i,[o])):s>=r.length?(o=new $f,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Nt};break;case"SpotLight":e={position:new V,direction:new V,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function BM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let VM=0;function HM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function GM(n){const t=new zM,e=BM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new ye,o=new ye;function a(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,w=0,y=0,v=0,L=0,M=0,E=0;c.sort(HM);for(let A=0,S=c.length;A<S;A++){const D=c[A],Z=D.color,B=D.intensity,q=D.distance,ot=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Z.r*B,h+=Z.g*B,f+=Z.b*B;else if(D.isLightProbe){for(let it=0;it<9;it++)i.probe[it].addScaledVector(D.sh.coefficients[it],B);E++}else if(D.isDirectionalLight){const it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ct=D.shadow,j=e.get(D);j.shadowIntensity=ct.intensity,j.shadowBias=ct.bias,j.shadowNormalBias=ct.normalBias,j.shadowRadius=ct.radius,j.shadowMapSize=ct.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=ot,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=it,p++}else if(D.isSpotLight){const it=t.get(D);it.position.setFromMatrixPosition(D.matrixWorld),it.color.copy(Z).multiplyScalar(B),it.distance=q,it.coneCos=Math.cos(D.angle),it.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),it.decay=D.decay,i.spot[_]=it;const ct=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,ct.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[_]=ct.matrix,D.castShadow){const j=e.get(D);j.shadowIntensity=ct.intensity,j.shadowBias=ct.bias,j.shadowNormalBias=ct.normalBias,j.shadowRadius=ct.radius,j.shadowMapSize=ct.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=ot,v++}_++}else if(D.isRectAreaLight){const it=t.get(D);it.color.copy(Z).multiplyScalar(B),it.halfWidth.set(D.width*.5,0,0),it.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=it,m++}else if(D.isPointLight){const it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),it.distance=D.distance,it.decay=D.decay,D.castShadow){const ct=D.shadow,j=e.get(D);j.shadowIntensity=ct.intensity,j.shadowBias=ct.bias,j.shadowNormalBias=ct.normalBias,j.shadowRadius=ct.radius,j.shadowMapSize=ct.mapSize,j.shadowCameraNear=ct.camera.near,j.shadowCameraFar=ct.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=ot,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=it,g++}else if(D.isHemisphereLight){const it=t.get(D);it.skyColor.copy(D.color).multiplyScalar(B),it.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[d]=it,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==w||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==L||I.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+L-M,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=E,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=w,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=L,I.numLightProbes=E,i.version=VM++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function qf(n){const t=new GM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function WM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new qf(n),t.set(s,[a])):r>=o.length?(a=new qf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class XM extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $M extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function jM(n,t,e){let i=new th;const s=new se,r=new se,o=new Ce,a=new XM({depthPacking:G_}),l=new $M,c={},u=e.maxTextureSize,h={[cs]:un,[un]:cs,[Ti]:Ti},f=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:qM,fragmentShader:YM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp;let d=this.type;this.render=function(M,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const A=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(rs),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const B=d!==yi&&this.type===yi,q=d===yi&&this.type!==yi;for(let ot=0,it=M.length;ot<it;ot++){const ct=M[ot],j=ct.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const yt=j.getFrameExtents();if(s.multiply(yt),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/yt.x),s.x=r.x*yt.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/yt.y),s.y=r.y*yt.y,j.mapSize.y=r.y)),j.map===null||B===!0||q===!0){const Ct=this.type!==yi?{minFilter:hn,magFilter:hn}:{};j.map!==null&&j.map.dispose(),j.map=new Fi(s.x,s.y,Ct),j.map.texture.name=ct.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const bt=j.getViewportCount();for(let Ct=0;Ct<bt;Ct++){const Ft=j.getViewport(Ct);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),Z.viewport(o),j.updateMatrices(ct,Ct),i=j.getFrustum(),v(E,I,j.camera,ct,this.type)}j.isPointLightShadow!==!0&&this.type===yi&&w(j,I),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(A,S,D)};function w(M,E){const I=t.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Fi(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,I,f,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,I,p,_,null)}function y(M,E,I,A){let S=null;const D=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Z=S.uuid,B=E.uuid;let q=c[Z];q===void 0&&(q={},c[Z]=q);let ot=q[B];ot===void 0&&(ot=S.clone(),q[B]=ot,E.addEventListener("dispose",L)),S=ot}if(S.visible=E.visible,S.wireframe=E.wireframe,A===yi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Z=n.properties.get(S);Z.light=I}return S}function v(M,E,I,A,S){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===yi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const B=t.update(M),q=M.material;if(Array.isArray(q)){const ot=B.groups;for(let it=0,ct=ot.length;it<ct;it++){const j=ot[it],yt=q[j.materialIndex];if(yt&&yt.visible){const bt=y(M,yt,A,S);M.onBeforeShadow(n,M,E,I,B,bt,j),n.renderBufferDirect(I,null,B,bt,M,j),M.onAfterShadow(n,M,E,I,B,bt,j)}}}else if(q.visible){const ot=y(M,q,A,S);M.onBeforeShadow(n,M,E,I,B,ot,null),n.renderBufferDirect(I,null,B,ot,M,null),M.onAfterShadow(n,M,E,I,B,ot,null)}}const Z=M.children;for(let B=0,q=Z.length;B<q;B++)v(Z[B],E,I,A,S)}function L(M){M.target.removeEventListener("dispose",L);for(const I in c){const A=c[I],S=M.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const KM={[Oc]:zc,[Bc]:Gc,[Vc]:Wc,[wr]:Hc,[zc]:Oc,[Gc]:Bc,[Wc]:Vc,[Hc]:wr};function ZM(n,t){function e(){let G=!1;const Lt=new Ce;let ht=null;const _t=new Ce(0,0,0,0);return{setMask:function(Ut){ht!==Ut&&!G&&(n.colorMask(Ut,Ut,Ut,Ut),ht=Ut)},setLocked:function(Ut){G=Ut},setClear:function(Ut,Dt,te,Le,qe){qe===!0&&(Ut*=Le,Dt*=Le,te*=Le),Lt.set(Ut,Dt,te,Le),_t.equals(Lt)===!1&&(n.clearColor(Ut,Dt,te,Le),_t.copy(Lt))},reset:function(){G=!1,ht=null,_t.set(-1,0,0,0)}}}function i(){let G=!1,Lt=!1,ht=null,_t=null,Ut=null;return{setReversed:function(Dt){if(Lt!==Dt){const te=t.get("EXT_clip_control");Lt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Le=Ut;Ut=null,this.setClear(Le)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?pt(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(Dt){ht!==Dt&&!G&&(n.depthMask(Dt),ht=Dt)},setFunc:function(Dt){if(Lt&&(Dt=KM[Dt]),_t!==Dt){switch(Dt){case Oc:n.depthFunc(n.NEVER);break;case zc:n.depthFunc(n.ALWAYS);break;case Bc:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case Vc:n.depthFunc(n.EQUAL);break;case Hc:n.depthFunc(n.GEQUAL);break;case Gc:n.depthFunc(n.GREATER);break;case Wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Dt}},setLocked:function(Dt){G=Dt},setClear:function(Dt){Ut!==Dt&&(Lt&&(Dt=1-Dt),n.clearDepth(Dt),Ut=Dt)},reset:function(){G=!1,ht=null,_t=null,Ut=null,Lt=!1}}}function s(){let G=!1,Lt=null,ht=null,_t=null,Ut=null,Dt=null,te=null,Le=null,qe=null;return{setTest:function(me){G||(me?pt(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(me){Lt!==me&&!G&&(n.stencilMask(me),Lt=me)},setFunc:function(me,zn,ui){(ht!==me||_t!==zn||Ut!==ui)&&(n.stencilFunc(me,zn,ui),ht=me,_t=zn,Ut=ui)},setOp:function(me,zn,ui){(Dt!==me||te!==zn||Le!==ui)&&(n.stencilOp(me,zn,ui),Dt=me,te=zn,Le=ui)},setLocked:function(me){G=me},setClear:function(me){qe!==me&&(n.clearStencil(me),qe=me)},reset:function(){G=!1,Lt=null,ht=null,_t=null,Ut=null,Dt=null,te=null,Le=null,qe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,y=null,v=null,L=null,M=null,E=new Nt(0,0,0),I=0,A=!1,S=null,D=null,Z=null,B=null,q=null;const ot=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,ct=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(j)[1]),it=ct>=1):j.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),it=ct>=2);let yt=null,bt={};const Ct=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),jt=new Ce().fromArray(Ct),K=new Ce().fromArray(Ft);function F(G,Lt,ht,_t){const Ut=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(G,Dt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<ht;te++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Lt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Ut):n.texImage2D(Lt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ut);return Dt}const z={};z[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(wr),X(!1),J(Zh),pt(n.CULL_FACE),C(rs);function pt(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function at(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function W(G,Lt){return h[G]!==Lt?(n.bindFramebuffer(G,Lt),h[G]=Lt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Lt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Lt),!0):!1}function k(G,Lt){let ht=p,_t=!1;if(G){ht=f.get(Lt),ht===void 0&&(ht=[],f.set(Lt,ht));const Ut=G.textures;if(ht.length!==Ut.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,te=Ut.length;Dt<te;Dt++)ht[Dt]=n.COLOR_ATTACHMENT0+Dt;ht.length=Ut.length,_t=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,_t=!0);_t&&n.drawBuffers(ht)}function Et(G){return g!==G?(n.useProgram(G),g=G,!0):!1}const T={[As]:n.FUNC_ADD,[g_]:n.FUNC_SUBTRACT,[__]:n.FUNC_REVERSE_SUBTRACT};T[v_]=n.MIN,T[x_]=n.MAX;const U={[y_]:n.ZERO,[M_]:n.ONE,[b_]:n.SRC_COLOR,[Fc]:n.SRC_ALPHA,[C_]:n.SRC_ALPHA_SATURATE,[T_]:n.DST_COLOR,[w_]:n.DST_ALPHA,[S_]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[A_]:n.ONE_MINUS_DST_COLOR,[E_]:n.ONE_MINUS_DST_ALPHA,[R_]:n.CONSTANT_COLOR,[P_]:n.ONE_MINUS_CONSTANT_COLOR,[L_]:n.CONSTANT_ALPHA,[D_]:n.ONE_MINUS_CONSTANT_ALPHA};function C(G,Lt,ht,_t,Ut,Dt,te,Le,qe,me){if(G===rs){_===!0&&(at(n.BLEND),_=!1);return}if(_===!1&&(pt(n.BLEND),_=!0),G!==m_){if(G!==m||me!==A){if((d!==As||v!==As)&&(n.blendEquation(n.FUNC_ADD),d=As,v=As),me)switch(G){case _r:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _r:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}w=null,y=null,L=null,M=null,E.set(0,0,0),I=0,m=G,A=me}return}Ut=Ut||Lt,Dt=Dt||ht,te=te||_t,(Lt!==d||Ut!==v)&&(n.blendEquationSeparate(T[Lt],T[Ut]),d=Lt,v=Ut),(ht!==w||_t!==y||Dt!==L||te!==M)&&(n.blendFuncSeparate(U[ht],U[_t],U[Dt],U[te]),w=ht,y=_t,L=Dt,M=te),(Le.equals(E)===!1||qe!==I)&&(n.blendColor(Le.r,Le.g,Le.b,qe),E.copy(Le),I=qe),m=G,A=!1}function ft(G,Lt){G.side===Ti?at(n.CULL_FACE):pt(n.CULL_FACE);let ht=G.side===un;Lt&&(ht=!ht),X(ht),G.blending===_r&&G.transparent===!1?C(rs):C(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const _t=G.stencilWrite;a.setTest(_t),_t&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(G){S!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),S=G)}function J(G){G!==d_?(pt(n.CULL_FACE),G!==D&&(G===Zh?n.cullFace(n.BACK):G===p_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),D=G}function nt(G){G!==Z&&(it&&n.lineWidth(G),Z=G)}function gt(G,Lt,ht){G?(pt(n.POLYGON_OFFSET_FILL),(B!==Lt||q!==ht)&&(n.polygonOffset(Lt,ht),B=Lt,q=ht)):at(n.POLYGON_OFFSET_FILL)}function lt(G){G?pt(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function b(G){G===void 0&&(G=n.TEXTURE0+ot-1),yt!==G&&(n.activeTexture(G),yt=G)}function x(G,Lt,ht){ht===void 0&&(yt===null?ht=n.TEXTURE0+ot-1:ht=yt);let _t=bt[ht];_t===void 0&&(_t={type:void 0,texture:void 0},bt[ht]=_t),(_t.type!==G||_t.texture!==Lt)&&(yt!==ht&&(n.activeTexture(ht),yt=ht),n.bindTexture(G,Lt||z[G]),_t.type=G,_t.texture=Lt)}function N(){const G=bt[yt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(G){jt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),jt.copy(G))}function At(G){K.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function $t(G,Lt){let ht=c.get(Lt);ht===void 0&&(ht=new WeakMap,c.set(Lt,ht));let _t=ht.get(G);_t===void 0&&(_t=n.getUniformBlockIndex(Lt,G.name),ht.set(G,_t))}function Kt(G,Lt){const _t=c.get(Lt).get(G);l.get(Lt)!==_t&&(n.uniformBlockBinding(Lt,_t,G.__bindingPointIndex),l.set(Lt,_t))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},yt=null,bt={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,y=null,v=null,L=null,M=null,E=new Nt(0,0,0),I=0,A=!1,S=null,D=null,Z=null,B=null,q=null,jt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:at,bindFramebuffer:W,drawBuffers:k,useProgram:Et,setBlending:C,setMaterial:ft,setFlipSided:X,setCullFace:J,setLineWidth:nt,setPolygonOffset:gt,setScissorTest:lt,activeTexture:b,bindTexture:x,unbindTexture:N,compressedTexImage2D:H,compressedTexImage3D:tt,texImage2D:Pt,texImage3D:Vt,updateUBOMapping:$t,uniformBlockBinding:Kt,texStorage2D:Ht,texStorage3D:xt,texSubImage2D:et,texSubImage3D:Mt,compressedTexSubImage2D:vt,compressedTexSubImage3D:St,scissor:Gt,viewport:At,reset:pe}}function Yf(n,t,e,i){const s=JM(i);switch(e){case Fp:return n*t;case Op:return n*t;case zp:return n*t*2;case Bp:return n*t/s.components*s.byteLength;case ju:return n*t/s.components*s.byteLength;case Vp:return n*t*2/s.components*s.byteLength;case Ku:return n*t*2/s.components*s.byteLength;case kp:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case Zu:return n*t*4/s.components*s.byteLength;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jc:case Zc:return Math.max(n,16)*Math.max(t,8)/4;case Yc:case Kc:return Math.max(n,8)*Math.max(t,8)/2;case Jc:case Qc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case su:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ru:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case au:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case hu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case du:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ca:case mu:case gu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Hp:case _u:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vu:case xu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function JM(n){switch(n){case Ni:case Ip:return{byteLength:1,components:1};case Eo:case Up:case Bs:return{byteLength:2,components:1};case qu:case Yu:return{byteLength:2,components:4};case Fs:case $u:case Ci:return{byteLength:4,components:1};case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function QM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):Xa("canvas")}function _(b,x,N){let H=1;const tt=lt(b);if((tt.width>N||tt.height>N)&&(H=N/Math.max(tt.width,tt.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const et=Math.floor(H*tt.width),Mt=Math.floor(H*tt.height);h===void 0&&(h=g(et,Mt));const vt=x?g(et,Mt):h;return vt.width=et,vt.height=Mt,vt.getContext("2d").drawImage(b,0,0,et,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+et+"x"+Mt+")."),vt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,x,N,H,tt=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let et=x;if(x===n.RED&&(N===n.FLOAT&&(et=n.R32F),N===n.HALF_FLOAT&&(et=n.R16F),N===n.UNSIGNED_BYTE&&(et=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.R8UI),N===n.UNSIGNED_SHORT&&(et=n.R16UI),N===n.UNSIGNED_INT&&(et=n.R32UI),N===n.BYTE&&(et=n.R8I),N===n.SHORT&&(et=n.R16I),N===n.INT&&(et=n.R32I)),x===n.RG&&(N===n.FLOAT&&(et=n.RG32F),N===n.HALF_FLOAT&&(et=n.RG16F),N===n.UNSIGNED_BYTE&&(et=n.RG8)),x===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RG8UI),N===n.UNSIGNED_SHORT&&(et=n.RG16UI),N===n.UNSIGNED_INT&&(et=n.RG32UI),N===n.BYTE&&(et=n.RG8I),N===n.SHORT&&(et=n.RG16I),N===n.INT&&(et=n.RG32I)),x===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RGB8UI),N===n.UNSIGNED_SHORT&&(et=n.RGB16UI),N===n.UNSIGNED_INT&&(et=n.RGB32UI),N===n.BYTE&&(et=n.RGB8I),N===n.SHORT&&(et=n.RGB16I),N===n.INT&&(et=n.RGB32I)),x===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),N===n.UNSIGNED_INT&&(et=n.RGBA32UI),N===n.BYTE&&(et=n.RGBA8I),N===n.SHORT&&(et=n.RGBA16I),N===n.INT&&(et=n.RGBA32I)),x===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),x===n.RGBA){const Mt=tt?ul:le.getTransfer(H);N===n.FLOAT&&(et=n.RGBA32F),N===n.HALF_FLOAT&&(et=n.RGBA16F),N===n.UNSIGNED_BYTE&&(et=Mt===ve?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(b,x){let N;return b?x===null||x===Fs||x===Ar?N=n.DEPTH24_STENCIL8:x===Ci?N=n.DEPTH32F_STENCIL8:x===Eo&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fs||x===Ar?N=n.DEPTH_COMPONENT24:x===Ci?N=n.DEPTH_COMPONENT32F:x===Eo&&(N=n.DEPTH_COMPONENT16),N}function L(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==ri?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function M(b){const x=b.target;x.removeEventListener("dispose",M),I(x),x.isVideoTexture&&u.delete(x)}function E(b){const x=b.target;x.removeEventListener("dispose",E),S(x)}function I(b){const x=i.get(b);if(x.__webglInit===void 0)return;const N=b.source,H=f.get(N);if(H){const tt=H[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&A(b),Object.keys(H).length===0&&f.delete(N)}i.remove(b)}function A(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const N=b.source,H=f.get(N);delete H[x.__cacheKey],o.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let tt=0;tt<x.__webglFramebuffer[H].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[H][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)n.deleteFramebuffer(x.__webglFramebuffer[H]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=b.textures;for(let H=0,tt=N.length;H<tt;H++){const et=i.get(N[H]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),i.remove(N[H])}i.remove(b)}let D=0;function Z(){D=0}function B(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function q(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function ot(b,x){const N=i.get(b);if(b.isVideoTexture&&nt(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,b,x);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function it(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){K(N,b,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function ct(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){K(N,b,x);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function j(b,x){const N=i.get(b);if(b.version>0&&N.__version!==b.version){F(N,b,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const yt={[Ga]:n.REPEAT,[Ds]:n.CLAMP_TO_EDGE,[qc]:n.MIRRORED_REPEAT},bt={[hn]:n.NEAREST,[V_]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Bl]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},Ct={[X_]:n.NEVER,[Z_]:n.ALWAYS,[$_]:n.LESS,[Gp]:n.LEQUAL,[q_]:n.EQUAL,[K_]:n.GEQUAL,[Y_]:n.GREATER,[j_]:n.NOTEQUAL};function Ft(b,x){if(x.type===Ci&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===ri||x.magFilter===Bl||x.magFilter===so||x.magFilter===Is||x.minFilter===ri||x.minFilter===Bl||x.minFilter===so||x.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,yt[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,yt[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,yt[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,bt[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,bt[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ct[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==so&&x.minFilter!==Is||x.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function jt(b,x){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",M));const H=x.source;let tt=f.get(H);tt===void 0&&(tt={},f.set(H,tt));const et=q(x);if(et!==b.__cacheKey){tt[et]===void 0&&(tt[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),tt[et].usedTimes++;const Mt=tt[b.__cacheKey];Mt!==void 0&&(tt[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(x)),b.__cacheKey=et,b.__webglTexture=tt[et].texture}return N}function K(b,x,N){let H=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=n.TEXTURE_3D);const tt=jt(b,x),et=x.source;e.bindTexture(H,b.__webglTexture,n.TEXTURE0+N);const Mt=i.get(et);if(et.version!==Mt.__version||tt===!0){e.activeTexture(n.TEXTURE0+N);const vt=le.getPrimaries(le.workingColorSpace),St=x.colorSpace===Ai?null:le.getPrimaries(x.colorSpace),Ht=x.colorSpace===Ai||vt===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let xt=_(x.image,!1,s.maxTextureSize);xt=gt(x,xt);const Pt=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Gt=y(x.internalFormat,Pt,Vt,x.colorSpace,x.isVideoTexture);Ft(H,x);let At;const $t=x.mipmaps,Kt=x.isVideoTexture!==!0,pe=Mt.__version===void 0||tt===!0,G=et.dataReady,Lt=L(x,xt);if(x.isDepthTexture)Gt=v(x.format===Cr,x.type),pe&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Gt,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,xt.width,xt.height,0,Pt,Vt,null));else if(x.isDataTexture)if($t.length>0){Kt&&pe&&e.texStorage2D(n.TEXTURE_2D,Lt,Gt,$t[0].width,$t[0].height);for(let ht=0,_t=$t.length;ht<_t;ht++)At=$t[ht],Kt?G&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Pt,Vt,At.data):e.texImage2D(n.TEXTURE_2D,ht,Gt,At.width,At.height,0,Pt,Vt,At.data);x.generateMipmaps=!1}else Kt?(pe&&e.texStorage2D(n.TEXTURE_2D,Lt,Gt,xt.width,xt.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,Pt,Vt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,xt.width,xt.height,0,Pt,Vt,xt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Gt,$t[0].width,$t[0].height,xt.depth);for(let ht=0,_t=$t.length;ht<_t;ht++)if(At=$t[ht],x.format!==Wn)if(Pt!==null)if(Kt){if(G)if(x.layerUpdates.size>0){const Ut=Yf(At.width,At.height,x.format,x.type);for(const Dt of x.layerUpdates){const te=At.data.subarray(Dt*Ut/At.data.BYTES_PER_ELEMENT,(Dt+1)*Ut/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,Dt,At.width,At.height,1,Pt,te)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,xt.depth,Pt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,Gt,At.width,At.height,xt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,At.width,At.height,xt.depth,Pt,Vt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,Gt,At.width,At.height,xt.depth,0,Pt,Vt,At.data)}else{Kt&&pe&&e.texStorage2D(n.TEXTURE_2D,Lt,Gt,$t[0].width,$t[0].height);for(let ht=0,_t=$t.length;ht<_t;ht++)At=$t[ht],x.format!==Wn?Pt!==null?Kt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?G&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,At.width,At.height,Pt,Vt,At.data):e.texImage2D(n.TEXTURE_2D,ht,Gt,At.width,At.height,0,Pt,Vt,At.data)}else if(x.isDataArrayTexture)if(Kt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Gt,xt.width,xt.height,xt.depth),G)if(x.layerUpdates.size>0){const ht=Yf(xt.width,xt.height,x.format,x.type);for(const _t of x.layerUpdates){const Ut=xt.data.subarray(_t*ht/xt.data.BYTES_PER_ELEMENT,(_t+1)*ht/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,Pt,Vt,Ut)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(x.isData3DTexture)Kt?(pe&&e.texStorage3D(n.TEXTURE_3D,Lt,Gt,xt.width,xt.height,xt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,Vt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,xt.width,xt.height,xt.depth,0,Pt,Vt,xt.data);else if(x.isFramebufferTexture){if(pe)if(Kt)e.texStorage2D(n.TEXTURE_2D,Lt,Gt,xt.width,xt.height);else{let ht=xt.width,_t=xt.height;for(let Ut=0;Ut<Lt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,Gt,ht,_t,0,Pt,Vt,null),ht>>=1,_t>>=1}}else if($t.length>0){if(Kt&&pe){const ht=lt($t[0]);e.texStorage2D(n.TEXTURE_2D,Lt,Gt,ht.width,ht.height)}for(let ht=0,_t=$t.length;ht<_t;ht++)At=$t[ht],Kt?G&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,Pt,Vt,At):e.texImage2D(n.TEXTURE_2D,ht,Gt,Pt,Vt,At);x.generateMipmaps=!1}else if(Kt){if(pe){const ht=lt(xt);e.texStorage2D(n.TEXTURE_2D,Lt,Gt,ht.width,ht.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Vt,xt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,Pt,Vt,xt);m(x)&&d(H),Mt.__version=et.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function F(b,x,N){if(x.image.length!==6)return;const H=jt(b,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);const et=i.get(tt);if(tt.version!==et.__version||H===!0){e.activeTexture(n.TEXTURE0+N);const Mt=le.getPrimaries(le.workingColorSpace),vt=x.colorSpace===Ai?null:le.getPrimaries(x.colorSpace),St=x.colorSpace===Ai||Mt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Ht=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!Ht&&!xt?Pt[_t]=_(x.image[_t],!0,s.maxCubemapSize):Pt[_t]=xt?x.image[_t].image:x.image[_t],Pt[_t]=gt(x,Pt[_t]);const Vt=Pt[0],Gt=r.convert(x.format,x.colorSpace),At=r.convert(x.type),$t=y(x.internalFormat,Gt,At,x.colorSpace),Kt=x.isVideoTexture!==!0,pe=et.__version===void 0||H===!0,G=tt.dataReady;let Lt=L(x,Vt);Ft(n.TEXTURE_CUBE_MAP,x);let ht;if(Ht){Kt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,$t,Vt.width,Vt.height);for(let _t=0;_t<6;_t++){ht=Pt[_t].mipmaps;for(let Ut=0;Ut<ht.length;Ut++){const Dt=ht[Ut];x.format!==Wn?Gt!==null?Kt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Dt.width,Dt.height,Gt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,$t,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Dt.width,Dt.height,Gt,At,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,$t,Dt.width,Dt.height,0,Gt,At,Dt.data)}}}else{if(ht=x.mipmaps,Kt&&pe){ht.length>0&&Lt++;const _t=lt(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,$t,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){Kt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Gt,At,Pt[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Pt[_t].width,Pt[_t].height,0,Gt,At,Pt[_t].data);for(let Ut=0;Ut<ht.length;Ut++){const te=ht[Ut].image[_t].image;Kt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,te.width,te.height,Gt,At,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,$t,te.width,te.height,0,Gt,At,te.data)}}else{Kt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,At,Pt[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Gt,At,Pt[_t]);for(let Ut=0;Ut<ht.length;Ut++){const Dt=ht[Ut];Kt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Gt,At,Dt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,$t,Gt,At,Dt.image[_t])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),et.__version=tt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function z(b,x,N,H,tt,et){const Mt=r.convert(N.format,N.colorSpace),vt=r.convert(N.type),St=y(N.internalFormat,Mt,vt,N.colorSpace),Ht=i.get(x),xt=i.get(N);if(xt.__renderTarget=x,!Ht.__hasExternalTextures){const Pt=Math.max(1,x.width>>et),Vt=Math.max(1,x.height>>et);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,St,Pt,Vt,x.depth,0,Mt,vt,null):e.texImage2D(tt,et,St,Pt,Vt,0,Mt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,tt,xt.__webglTexture,0,X(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,tt,xt.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(b,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const H=x.depthTexture,tt=H&&H.isDepthTexture?H.type:null,et=v(x.stencilBuffer,tt),Mt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=X(x);J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,et,x.width,x.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,et,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,et,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,b)}else{const H=x.textures;for(let tt=0;tt<H.length;tt++){const et=H[tt],Mt=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),St=y(et.internalFormat,Mt,vt,et.colorSpace),Ht=X(x);N&&J(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,St,x.width,x.height):J(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht,St,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,St,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(x.depthTexture);H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ot(x.depthTexture,0);const tt=H.__webglTexture,et=X(x);if(x.depthTexture.format===vr)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Cr)J(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function W(b){const x=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const H=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",tt)};H.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=H}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");at(x.__webglFramebuffer,b)}else if(N){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=n.createRenderbuffer(),pt(x.__webglDepthbuffer[H],b,!1);else{const tt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,et)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),pt(x.__webglDepthbuffer,b,!1);else{const H=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function k(b,x,N){const H=i.get(b);x!==void 0&&z(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&W(b)}function Et(b){const x=b.texture,N=i.get(b),H=i.get(x);b.addEventListener("dispose",E);const tt=b.textures,et=b.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=x.version,o.memory.textures++),et){N.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[vt]=[];for(let St=0;St<x.mipmaps.length;St++)N.__webglFramebuffer[vt][St]=n.createFramebuffer()}else N.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let vt=0;vt<x.mipmaps.length;vt++)N.__webglFramebuffer[vt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let vt=0,St=tt.length;vt<St;vt++){const Ht=i.get(tt[vt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&J(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let vt=0;vt<tt.length;vt++){const St=tt[vt];N.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[vt]);const Ht=r.convert(St.format,St.colorSpace),xt=r.convert(St.type),Pt=y(St.internalFormat,Ht,xt,St.colorSpace,b.isXRRenderTarget===!0),Vt=X(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Pt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,N.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,x);for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)z(N.__webglFramebuffer[vt][St],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else z(N.__webglFramebuffer[vt],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let vt=0,St=tt.length;vt<St;vt++){const Ht=tt[vt],xt=i.get(Ht);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),Ft(n.TEXTURE_2D,Ht),z(N.__webglFramebuffer,b,Ht,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),m(Ht)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(vt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,H.__webglTexture),Ft(vt,x),x.mipmaps&&x.mipmaps.length>0)for(let St=0;St<x.mipmaps.length;St++)z(N.__webglFramebuffer[St],b,x,n.COLOR_ATTACHMENT0,vt,St);else z(N.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,vt,0);m(x)&&d(vt),e.unbindTexture()}b.depthBuffer&&W(b)}function T(b){const x=b.textures;for(let N=0,H=x.length;N<H;N++){const tt=x[N];if(m(tt)){const et=w(b),Mt=i.get(tt).__webglTexture;e.bindTexture(et,Mt),d(et),e.unbindTexture()}}}const U=[],C=[];function ft(b){if(b.samples>0){if(J(b)===!1){const x=b.textures,N=b.width,H=b.height;let tt=n.COLOR_BUFFER_BIT;const et=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(b),vt=x.length>1;if(vt)for(let St=0;St<x.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);const Ht=i.get(x[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,N,H,0,0,N,H,tt,n.NEAREST),l===!0&&(U.length=0,C.length=0,U.push(n.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(et),C.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<x.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);const Ht=i.get(x[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function X(b){return Math.min(s.maxSamples,b.samples)}function J(b){const x=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nt(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function gt(b,x){const N=b.colorSpace,H=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Ir&&N!==Ai&&(le.getTransfer(N)===ve?(H!==Wn||tt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function lt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=Z,this.setTexture2D=ot,this.setTexture2DArray=it,this.setTexture3D=ct,this.setTextureCube=j,this.rebindTextures=k,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=z,this.useMultisampledRTT=J}function tb(n,t){function e(i,s=Ai){let r;const o=le.getTransfer(s);if(i===Ni)return n.UNSIGNED_BYTE;if(i===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Np)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ip)return n.BYTE;if(i===Up)return n.SHORT;if(i===Eo)return n.UNSIGNED_SHORT;if(i===$u)return n.INT;if(i===Fs)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===Bs)return n.HALF_FLOAT;if(i===Fp)return n.ALPHA;if(i===kp)return n.RGB;if(i===Wn)return n.RGBA;if(i===Op)return n.LUMINANCE;if(i===zp)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===Cr)return n.DEPTH_STENCIL;if(i===Bp)return n.RED;if(i===ju)return n.RED_INTEGER;if(i===Vp)return n.RG;if(i===Ku)return n.RG_INTEGER;if(i===Zu)return n.RGBA_INTEGER;if(i===wa||i===Ea||i===Ta||i===Aa)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===jc||i===Kc||i===Zc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jc||i===Qc||i===tu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jc||i===Qc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===eu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===iu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===su)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ru)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ou)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===au)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===du)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ca||i===mu||i===gu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ca)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hp||i===_u||i===vu||i===xu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class eb extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class He extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nb={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
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

}`;class rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new On({vertexShader:ib,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ob extends Ur{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new rb,m=e.getContextAttributes();let d=null,w=null;const y=[],v=[],L=new se;let M=null;const E=new vn;E.viewport=new Ce;const I=new vn;I.viewport=new Ce;const A=[E,I],S=new eb;let D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let F=y[K];return F===void 0&&(F=new mc,y[K]=F),F.getTargetRaySpace()},this.getControllerGrip=function(K){let F=y[K];return F===void 0&&(F=new mc,y[K]=F),F.getGripSpace()},this.getHand=function(K){let F=y[K];return F===void 0&&(F=new mc,y[K]=F),F.getHandSpace()};function B(K){const F=v.indexOf(K.inputSource);if(F===-1)return;const z=y[F];z!==void 0&&(z.update(K.inputSource,K.frame,c||o),z.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ot);for(let K=0;K<y.length;K++){const F=v[K];F!==null&&(v[K]=null,y[K].disconnect(F))}D=null,Z=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,w=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const F={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Fi(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let F=null,z=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=m.stencil?Cr:vr,z=m.stencil?Ar:Fs);const at={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Fi(f.textureWidth,f.textureHeight,{format:Wn,type:Ni,depthTexture:new tm(f.textureWidth,f.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ot(K){for(let F=0;F<K.removed.length;F++){const z=K.removed[F],pt=v.indexOf(z);pt>=0&&(v[pt]=null,y[pt].disconnect(z))}for(let F=0;F<K.added.length;F++){const z=K.added[F];let pt=v.indexOf(z);if(pt===-1){for(let W=0;W<y.length;W++)if(W>=v.length){v.push(z),pt=W;break}else if(v[W]===null){v[W]=z,pt=W;break}if(pt===-1)break}const at=y[pt];at&&at.connect(z)}}const it=new V,ct=new V;function j(K,F,z){it.setFromMatrixPosition(F.matrixWorld),ct.setFromMatrixPosition(z.matrixWorld);const pt=it.distanceTo(ct),at=F.projectionMatrix.elements,W=z.projectionMatrix.elements,k=at[14]/(at[10]-1),Et=at[14]/(at[10]+1),T=(at[9]+1)/at[5],U=(at[9]-1)/at[5],C=(at[8]-1)/at[0],ft=(W[8]+1)/W[0],X=k*C,J=k*ft,nt=pt/(-C+ft),gt=nt*-C;if(F.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(gt),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),at[10]===-1)K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const lt=k+nt,b=Et+nt,x=X-gt,N=J+(pt-gt),H=T*Et/b*lt,tt=U*Et/b*lt;K.projectionMatrix.makePerspective(x,N,H,tt,lt,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function yt(K,F){F===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(F.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let F=K.near,z=K.far;_.texture!==null&&(_.depthNear>0&&(F=_.depthNear),_.depthFar>0&&(z=_.depthFar)),S.near=I.near=E.near=F,S.far=I.far=E.far=z,(D!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,Z=S.far),E.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,S.layers.mask=E.layers.mask|I.layers.mask;const pt=K.parent,at=S.cameras;yt(S,pt);for(let W=0;W<at.length;W++)yt(at[W],pt);at.length===2?j(S,E,I):S.projectionMatrix.copy(E.projectionMatrix),bt(K,S,pt)};function bt(K,F,z){z===null?K.matrix.copy(F.matrixWorld):(K.matrix.copy(z.matrixWorld),K.matrix.invert(),K.matrix.multiply(F.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ct=null;function Ft(K,F){if(u=F.getViewerPose(c||o),g=F,u!==null){const z=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let pt=!1;z.length!==S.cameras.length&&(S.cameras.length=0,pt=!0);for(let W=0;W<z.length;W++){const k=z[W];let Et=null;if(p!==null)Et=p.getViewport(k);else{const U=h.getViewSubImage(f,k);Et=U.viewport,W===0&&(t.setRenderTargetTextures(w,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(w))}let T=A[W];T===void 0&&(T=new vn,T.layers.enable(W),T.viewport=new Ce,A[W]=T),T.matrix.fromArray(k.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(k.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(Et.x,Et.y,Et.width,Et.height),W===0&&(S.matrix.copy(T.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pt===!0&&S.cameras.push(T)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const W=h.getDepthInformation(z[0]);W&&W.isValid&&W.texture&&_.init(t,W,s.renderState)}}for(let z=0;z<y.length;z++){const pt=v[z],at=y[z];pt!==null&&at!==void 0&&at.update(pt,F,c||o)}Ct&&Ct(K,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),g=null}const jt=new Qp;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(K){Ct=K},this.dispose=function(){}}}const Ms=new kn,ab=new ye;function lb(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,jp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=t.get(d),y=w.envMap,v=w.envMapRotation;y&&(m.envMap.value=y,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(Ms)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cb(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const v=y.program;i.uniformBlockBinding(w,v)}function c(w,y){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(w,L);const M=t.render.frame;r[w.id]!==M&&(f(w),r[w.id]=M)}function u(w){const y=h();w.__bindingPointIndex=y;const v=n.createBuffer(),L=w.__size,M=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const y=s[w.id],v=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,E=v.length;M<E;M++){const I=Array.isArray(v[M])?v[M]:[v[M]];for(let A=0,S=I.length;A<S;A++){const D=I[A];if(p(D,M,A,L)===!0){const Z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let ot=0;ot<B.length;ot++){const it=B[ot],ct=_(it);typeof it=="number"||typeof it=="boolean"?(D.__data[0]=it,n.bufferSubData(n.UNIFORM_BUFFER,Z+q,D.__data)):it.isMatrix3?(D.__data[0]=it.elements[0],D.__data[1]=it.elements[1],D.__data[2]=it.elements[2],D.__data[3]=0,D.__data[4]=it.elements[3],D.__data[5]=it.elements[4],D.__data[6]=it.elements[5],D.__data[7]=0,D.__data[8]=it.elements[6],D.__data[9]=it.elements[7],D.__data[10]=it.elements[8],D.__data[11]=0):(it.toArray(D.__data,q),q+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,y,v,L){const M=w.value,E=y+"_"+v;if(L[E]===void 0)return typeof M=="number"||typeof M=="boolean"?L[E]=M:L[E]=M.clone(),!0;{const I=L[E];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return L[E]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(w){const y=w.uniforms;let v=0;const L=16;for(let E=0,I=y.length;E<I;E++){const A=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,D=A.length;S<D;S++){const Z=A[S],B=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,ot=B.length;q<ot;q++){const it=B[q],ct=_(it),j=v%L,yt=j%ct.boundary,bt=j+yt;v+=yt,bt!==0&&L-bt<ct.storage&&(v+=L-bt),Z.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=v,v+=ct.storage}}}const M=v%L;return M>0&&(v+=L-M),w.__size=v,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){const y=w.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class rm{constructor(t={}){const{canvas:e=Q_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const w=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=os,this.toneMappingExposure=1;const v=this;let L=!1,M=0,E=0,I=null,A=-1,S=null;const D=new Ce,Z=new Ce;let B=null;const q=new Nt(0);let ot=0,it=e.width,ct=e.height,j=1,yt=null,bt=null;const Ct=new Ce(0,0,it,ct),Ft=new Ce(0,0,it,ct);let jt=!1;const K=new th;let F=!1,z=!1;const pt=new ye,at=new ye,W=new V,k=new Ce,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let T=!1;function U(){return I===null?j:1}let C=i;function ft(R,$){return e.getContext(R,$)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xu}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),C===null){const $="webgl2";if(C=ft($,R),C===null)throw ft($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let X,J,nt,gt,lt,b,x,N,H,tt,et,Mt,vt,St,Ht,xt,Pt,Vt,Gt,At,$t,Kt,pe,G;function Lt(){X=new my(C),X.init(),Kt=new tb(C,X),J=new cy(C,X,t,Kt),nt=new ZM(C,X),J.reverseDepthBuffer&&f&&nt.buffers.depth.setReversed(!0),gt=new vy(C),lt=new FM,b=new QM(C,X,nt,lt,J,Kt,gt),x=new hy(v),N=new py(v),H=new Ev(C),pe=new ay(C,H),tt=new gy(C,H,gt,pe),et=new yy(C,tt,H,gt),Gt=new xy(C,J,b),xt=new uy(lt),Mt=new NM(v,x,N,X,J,pe,xt),vt=new lb(v,lt),St=new OM,Ht=new WM(X),Vt=new oy(v,x,N,nt,et,p,l),Pt=new jM(v,et,J),G=new cb(C,gt,J,nt),At=new ly(C,X,gt),$t=new _y(C,X,gt),gt.programs=Mt.programs,v.capabilities=J,v.extensions=X,v.properties=lt,v.renderLists=St,v.shadowMap=Pt,v.state=nt,v.info=gt}Lt();const ht=new ob(v,C);this.xr=ht,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=X.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=X.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(it,ct,!1))},this.getSize=function(R){return R.set(it,ct)},this.setSize=function(R,$,st=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=R,ct=$,e.width=Math.floor(R*j),e.height=Math.floor($*j),st===!0&&(e.style.width=R+"px",e.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(it*j,ct*j).floor()},this.setDrawingBufferSize=function(R,$,st){it=R,ct=$,j=st,e.width=Math.floor(R*st),e.height=Math.floor($*st),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Ct)},this.setViewport=function(R,$,st,rt){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,$,st,rt),nt.viewport(D.copy(Ct).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Ft)},this.setScissor=function(R,$,st,rt){R.isVector4?Ft.set(R.x,R.y,R.z,R.w):Ft.set(R,$,st,rt),nt.scissor(Z.copy(Ft).multiplyScalar(j).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(R){nt.setScissorTest(jt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(R=!0,$=!0,st=!0){let rt=0;if(R){let Y=!1;if(I!==null){const wt=I.texture.format;Y=wt===Zu||wt===Ku||wt===ju}if(Y){const wt=I.texture.type,It=wt===Ni||wt===Fs||wt===Eo||wt===Ar||wt===qu||wt===Yu,kt=Vt.getClearColor(),Ot=Vt.getClearAlpha(),Yt=kt.r,ee=kt.g,zt=kt.b;It?(g[0]=Yt,g[1]=ee,g[2]=zt,g[3]=Ot,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Yt,_[1]=ee,_[2]=zt,_[3]=Ot,C.clearBufferiv(C.COLOR,0,_))}else rt|=C.COLOR_BUFFER_BIT}$&&(rt|=C.DEPTH_BUFFER_BIT),st&&(rt|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),St.dispose(),Ht.dispose(),lt.dispose(),x.dispose(),N.dispose(),et.dispose(),pe.dispose(),G.dispose(),Mt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",hh),ht.removeEventListener("sessionend",fh),ds.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=gt.autoReset,$=Pt.enabled,st=Pt.autoUpdate,rt=Pt.needsUpdate,Y=Pt.type;Lt(),gt.autoReset=R,Pt.enabled=$,Pt.autoUpdate=st,Pt.needsUpdate=rt,Pt.type=Y}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){const $=R.target;$.removeEventListener("dispose",te),Le($)}function Le(R){qe(R),lt.remove(R)}function qe(R){const $=lt.get(R).programs;$!==void 0&&($.forEach(function(st){Mt.releaseProgram(st)}),R.isShaderMaterial&&Mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,st,rt,Y,wt){$===null&&($=Et);const It=Y.isMesh&&Y.matrixWorld.determinant()<0,kt=Rm(R,$,st,rt,Y);nt.setMaterial(rt,It);let Ot=st.index,Yt=1;if(rt.wireframe===!0){if(Ot=tt.getWireframeAttribute(st),Ot===void 0)return;Yt=2}const ee=st.drawRange,zt=st.attributes.position;let ce=ee.start*Yt,Se=(ee.start+ee.count)*Yt;wt!==null&&(ce=Math.max(ce,wt.start*Yt),Se=Math.min(Se,(wt.start+wt.count)*Yt)),Ot!==null?(ce=Math.max(ce,0),Se=Math.min(Se,Ot.count)):zt!=null&&(ce=Math.max(ce,0),Se=Math.min(Se,zt.count));const Ee=Se-ce;if(Ee<0||Ee===1/0)return;pe.setup(Y,rt,kt,st,Ot);let dn,ue=At;if(Ot!==null&&(dn=H.get(Ot),ue=$t,ue.setIndex(dn)),Y.isMesh)rt.wireframe===!0?(nt.setLineWidth(rt.wireframeLinewidth*U()),ue.setMode(C.LINES)):ue.setMode(C.TRIANGLES);else if(Y.isLine){let Bt=rt.linewidth;Bt===void 0&&(Bt=1),nt.setLineWidth(Bt*U()),Y.isLineSegments?ue.setMode(C.LINES):Y.isLineLoop?ue.setMode(C.LINE_LOOP):ue.setMode(C.LINE_STRIP)}else Y.isPoints?ue.setMode(C.POINTS):Y.isSprite&&ue.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ue.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))ue.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Bt=Y._multiDrawStarts,hi=Y._multiDrawCounts,he=Y._multiDrawCount,Bn=Ot?H.get(Ot).bytesPerElement:1,Vs=lt.get(rt).currentProgram.getUniforms();for(let Mn=0;Mn<he;Mn++)Vs.setValue(C,"_gl_DrawID",Mn),ue.render(Bt[Mn]/Bn,hi[Mn])}else if(Y.isInstancedMesh)ue.renderInstances(ce,Ee,Y.count);else if(st.isInstancedBufferGeometry){const Bt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,hi=Math.min(st.instanceCount,Bt);ue.renderInstances(ce,Ee,hi)}else ue.render(ce,Ee)};function me(R,$,st){R.transparent===!0&&R.side===Ti&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,No(R,$,st),R.side=cs,R.needsUpdate=!0,No(R,$,st),R.side=Ti):No(R,$,st)}this.compile=function(R,$,st=null){st===null&&(st=R),d=Ht.get(st),d.init($),y.push(d),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),R!==st&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const rt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const wt=Y.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){const kt=wt[It];me(kt,st,Y),rt.add(kt)}else me(wt,st,Y),rt.add(wt)}),y.pop(),d=null,rt},this.compileAsync=function(R,$,st=null){const rt=this.compile(R,$,st);return new Promise(Y=>{function wt(){if(rt.forEach(function(It){lt.get(It).currentProgram.isReady()&&rt.delete(It)}),rt.size===0){Y(R);return}setTimeout(wt,10)}X.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let zn=null;function ui(R){zn&&zn(R)}function hh(){ds.stop()}function fh(){ds.start()}const ds=new Qp;ds.setAnimationLoop(ui),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(R){zn=R,ht.setAnimationLoop(R),R===null?ds.stop():ds.start()},ht.addEventListener("sessionstart",hh),ht.addEventListener("sessionend",fh),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera($),$=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,$,I),d=Ht.get(R,y.length),d.init($),y.push(d),at.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),K.setFromProjectionMatrix(at),z=this.localClippingEnabled,F=xt.init(this.clippingPlanes,z),m=St.get(R,w.length),m.init(),w.push(m),ht.enabled===!0&&ht.isPresenting===!0){const wt=v.xr.getDepthSensingMesh();wt!==null&&Ml(wt,$,-1/0,v.sortObjects)}Ml(R,$,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(yt,bt),T=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,T&&Vt.addToRenderList(m,R),this.info.render.frame++,F===!0&&xt.beginShadows();const st=d.state.shadowsArray;Pt.render(st,R,$),F===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=m.opaque,Y=m.transmissive;if(d.setupLights(),$.isArrayCamera){const wt=$.cameras;if(Y.length>0)for(let It=0,kt=wt.length;It<kt;It++){const Ot=wt[It];ph(rt,Y,R,Ot)}T&&Vt.render(R);for(let It=0,kt=wt.length;It<kt;It++){const Ot=wt[It];dh(m,R,Ot,Ot.viewport)}}else Y.length>0&&ph(rt,Y,R,$),T&&Vt.render(R),dh(m,R,$);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(v,R,$),pe.resetDefaultState(),A=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],F===!0&&xt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ml(R,$,st,rt){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){rt&&k.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);const It=et.update(R),kt=R.material;kt.visible&&m.push(R,It,kt,st,k.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const It=et.update(R),kt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),k.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),k.copy(It.boundingSphere.center)),k.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(kt)){const Ot=It.groups;for(let Yt=0,ee=Ot.length;Yt<ee;Yt++){const zt=Ot[Yt],ce=kt[zt.materialIndex];ce&&ce.visible&&m.push(R,It,ce,st,k.z,zt)}}else kt.visible&&m.push(R,It,kt,st,k.z,null)}}const wt=R.children;for(let It=0,kt=wt.length;It<kt;It++)Ml(wt[It],$,st,rt)}function dh(R,$,st,rt){const Y=R.opaque,wt=R.transmissive,It=R.transparent;d.setupLightsView(st),F===!0&&xt.setGlobalState(v.clippingPlanes,st),rt&&nt.viewport(D.copy(rt)),Y.length>0&&Uo(Y,$,st),wt.length>0&&Uo(wt,$,st),It.length>0&&Uo(It,$,st),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function ph(R,$,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[rt.id]===void 0&&(d.state.transmissionRenderTarget[rt.id]=new Fi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Bs:Ni,minFilter:Is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const wt=d.state.transmissionRenderTarget[rt.id],It=rt.viewport||D;wt.setSize(It.z,It.w);const kt=v.getRenderTarget();v.setRenderTarget(wt),v.getClearColor(q),ot=v.getClearAlpha(),ot<1&&v.setClearColor(16777215,.5),v.clear(),T&&Vt.render(st);const Ot=v.toneMapping;v.toneMapping=os;const Yt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),d.setupLightsView(rt),F===!0&&xt.setGlobalState(v.clippingPlanes,rt),Uo(R,st,rt),b.updateMultisampleRenderTarget(wt),b.updateRenderTargetMipmap(wt),X.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let zt=0,ce=$.length;zt<ce;zt++){const Se=$[zt],Ee=Se.object,dn=Se.geometry,ue=Se.material,Bt=Se.group;if(ue.side===Ti&&Ee.layers.test(rt.layers)){const hi=ue.side;ue.side=un,ue.needsUpdate=!0,mh(Ee,st,rt,dn,ue,Bt),ue.side=hi,ue.needsUpdate=!0,ee=!0}}ee===!0&&(b.updateMultisampleRenderTarget(wt),b.updateRenderTargetMipmap(wt))}v.setRenderTarget(kt),v.setClearColor(q,ot),Yt!==void 0&&(rt.viewport=Yt),v.toneMapping=Ot}function Uo(R,$,st){const rt=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,wt=R.length;Y<wt;Y++){const It=R[Y],kt=It.object,Ot=It.geometry,Yt=rt===null?It.material:rt,ee=It.group;kt.layers.test(st.layers)&&mh(kt,$,st,Ot,Yt,ee)}}function mh(R,$,st,rt,Y,wt){R.onBeforeRender(v,$,st,rt,Y,wt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,$,st,rt,R,wt),Y.transparent===!0&&Y.side===Ti&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,v.renderBufferDirect(st,$,rt,Y,R,wt),Y.side=cs,Y.needsUpdate=!0,v.renderBufferDirect(st,$,rt,Y,R,wt),Y.side=Ti):v.renderBufferDirect(st,$,rt,Y,R,wt),R.onAfterRender(v,$,st,rt,Y,wt)}function No(R,$,st){$.isScene!==!0&&($=Et);const rt=lt.get(R),Y=d.state.lights,wt=d.state.shadowsArray,It=Y.state.version,kt=Mt.getParameters(R,Y.state,wt,$,st),Ot=Mt.getProgramCacheKey(kt);let Yt=rt.programs;rt.environment=R.isMeshStandardMaterial?$.environment:null,rt.fog=$.fog,rt.envMap=(R.isMeshStandardMaterial?N:x).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",te),Yt=new Map,rt.programs=Yt);let ee=Yt.get(Ot);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===It)return _h(R,kt),ee}else kt.uniforms=Mt.getUniforms(R),R.onBeforeCompile(kt,v),ee=Mt.acquireProgram(kt,Ot),Yt.set(Ot,ee),rt.uniforms=kt.uniforms;const zt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=xt.uniform),_h(R,kt),rt.needsLights=Lm(R),rt.lightsStateVersion=It,rt.needsLights&&(zt.ambientLightColor.value=Y.state.ambient,zt.lightProbe.value=Y.state.probe,zt.directionalLights.value=Y.state.directional,zt.directionalLightShadows.value=Y.state.directionalShadow,zt.spotLights.value=Y.state.spot,zt.spotLightShadows.value=Y.state.spotShadow,zt.rectAreaLights.value=Y.state.rectArea,zt.ltc_1.value=Y.state.rectAreaLTC1,zt.ltc_2.value=Y.state.rectAreaLTC2,zt.pointLights.value=Y.state.point,zt.pointLightShadows.value=Y.state.pointShadow,zt.hemisphereLights.value=Y.state.hemi,zt.directionalShadowMap.value=Y.state.directionalShadowMap,zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,zt.spotShadowMap.value=Y.state.spotShadowMap,zt.spotLightMatrix.value=Y.state.spotLightMatrix,zt.spotLightMap.value=Y.state.spotLightMap,zt.pointShadowMap.value=Y.state.pointShadowMap,zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function gh(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Ra.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function _h(R,$){const st=lt.get(R);st.outputColorSpace=$.outputColorSpace,st.batching=$.batching,st.batchingColor=$.batchingColor,st.instancing=$.instancing,st.instancingColor=$.instancingColor,st.instancingMorph=$.instancingMorph,st.skinning=$.skinning,st.morphTargets=$.morphTargets,st.morphNormals=$.morphNormals,st.morphColors=$.morphColors,st.morphTargetsCount=$.morphTargetsCount,st.numClippingPlanes=$.numClippingPlanes,st.numIntersection=$.numClipIntersection,st.vertexAlphas=$.vertexAlphas,st.vertexTangents=$.vertexTangents,st.toneMapping=$.toneMapping}function Rm(R,$,st,rt,Y){$.isScene!==!0&&($=Et),b.resetTextureUnits();const wt=$.fog,It=rt.isMeshStandardMaterial?$.environment:null,kt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ir,Ot=(rt.isMeshStandardMaterial?N:x).get(rt.envMap||It),Yt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),zt=!!st.morphAttributes.position,ce=!!st.morphAttributes.normal,Se=!!st.morphAttributes.color;let Ee=os;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const dn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ue=dn!==void 0?dn.length:0,Bt=lt.get(rt),hi=d.state.lights;if(F===!0&&(z===!0||R!==S)){const Cn=R===S&&rt.id===A;xt.setState(rt,R,Cn)}let he=!1;rt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==hi.state.version||Bt.outputColorSpace!==kt||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==Ot||rt.fog===!0&&Bt.fog!==wt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==xt.numPlanes||Bt.numIntersection!==xt.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==ee||Bt.morphTargets!==zt||Bt.morphNormals!==ce||Bt.morphColors!==Se||Bt.toneMapping!==Ee||Bt.morphTargetsCount!==ue)&&(he=!0):(he=!0,Bt.__version=rt.version);let Bn=Bt.currentProgram;he===!0&&(Bn=No(rt,$,Y));let Vs=!1,Mn=!1,kr=!1;const Te=Bn.getUniforms(),jn=Bt.uniforms;if(nt.useProgram(Bn.program)&&(Vs=!0,Mn=!0,kr=!0),rt.id!==A&&(A=rt.id,Mn=!0),Vs||S!==R){nt.buffers.depth.getReversed()?(pt.copy(R.projectionMatrix),ev(pt),nv(pt),Te.setValue(C,"projectionMatrix",pt)):Te.setValue(C,"projectionMatrix",R.projectionMatrix),Te.setValue(C,"viewMatrix",R.matrixWorldInverse);const Bi=Te.map.cameraPosition;Bi!==void 0&&Bi.setValue(C,W.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Te.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Mn=!0,kr=!0)}if(Y.isSkinnedMesh){Te.setOptional(C,Y,"bindMatrix"),Te.setOptional(C,Y,"bindMatrixInverse");const Cn=Y.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Te.setValue(C,"boneTexture",Cn.boneTexture,b))}Y.isBatchedMesh&&(Te.setOptional(C,Y,"batchingTexture"),Te.setValue(C,"batchingTexture",Y._matricesTexture,b),Te.setOptional(C,Y,"batchingIdTexture"),Te.setValue(C,"batchingIdTexture",Y._indirectTexture,b),Te.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",Y._colorsTexture,b));const Or=st.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&Gt.update(Y,st,Bn),(Mn||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,Te.setValue(C,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(jn.envMap.value=Ot,jn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&$.environment!==null&&(jn.envMapIntensity.value=$.environmentIntensity),Mn&&(Te.setValue(C,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Pm(jn,kr),wt&&rt.fog===!0&&vt.refreshFogUniforms(jn,wt),vt.refreshMaterialUniforms(jn,rt,j,ct,d.state.transmissionRenderTarget[R.id]),Ra.upload(C,gh(Bt),jn,b)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ra.upload(C,gh(Bt),jn,b),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Te.setValue(C,"center",Y.center),Te.setValue(C,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(C,"normalMatrix",Y.normalMatrix),Te.setValue(C,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Cn=rt.uniformsGroups;for(let Bi=0,Vi=Cn.length;Bi<Vi;Bi++){const vh=Cn[Bi];G.update(vh,Bn),G.bind(vh,Bn)}}return Bn}function Pm(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Lm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,$,st){lt.get(R.texture).__webglTexture=$,lt.get(R.depthTexture).__webglTexture=st;const rt=lt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,$){const st=lt.get(R);st.__webglFramebuffer=$,st.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,st=0){I=R,M=$,E=st;let rt=!0,Y=null,wt=!1,It=!1;if(R){const Ot=lt.get(R);if(Ot.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(C.FRAMEBUFFER,null),rt=!1;else if(Ot.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Ot.__hasExternalTextures)b.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const zt=R.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&lt.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);const ee=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[$])?Y=ee[$][st]:Y=ee[$],wt=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?Y=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Y=ee[st]:Y=ee,D.copy(R.viewport),Z.copy(R.scissor),B=R.scissorTest}else D.copy(Ct).multiplyScalar(j).floor(),Z.copy(Ft).multiplyScalar(j).floor(),B=jt;if(nt.bindFramebuffer(C.FRAMEBUFFER,Y)&&rt&&nt.drawBuffers(R,Y),nt.viewport(D),nt.scissor(Z),nt.setScissorTest(B),wt){const Ot=lt.get(R.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot.__webglTexture,st)}else if(It){const Ot=lt.get(R.texture),Yt=$||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ot.__webglTexture,st||0,Yt)}A=-1},this.readRenderTargetPixels=function(R,$,st,rt,Y,wt,It){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){nt.bindFramebuffer(C.FRAMEBUFFER,kt);try{const Ot=R.texture,Yt=Ot.format,ee=Ot.type;if(!J.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-rt&&st>=0&&st<=R.height-Y&&C.readPixels($,st,rt,Y,Kt.convert(Yt),Kt.convert(ee),wt)}finally{const Ot=I!==null?lt.get(I).__webglFramebuffer:null;nt.bindFramebuffer(C.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,$,st,rt,Y,wt,It){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){const Ot=R.texture,Yt=Ot.format,ee=Ot.type;if(!J.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=R.width-rt&&st>=0&&st<=R.height-Y){nt.bindFramebuffer(C.FRAMEBUFFER,kt);const zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.bufferData(C.PIXEL_PACK_BUFFER,wt.byteLength,C.STREAM_READ),C.readPixels($,st,rt,Y,Kt.convert(Yt),Kt.convert(ee),0);const ce=I!==null?lt.get(I).__webglFramebuffer:null;nt.bindFramebuffer(C.FRAMEBUFFER,ce);const Se=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await tv(C,Se,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,wt),C.deleteBuffer(zt),C.deleteSync(Se),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,$=null,st=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-st),Y=Math.floor(R.image.width*rt),wt=Math.floor(R.image.height*rt),It=$!==null?$.x:0,kt=$!==null?$.y:0;b.setTexture2D(R,0),C.copyTexSubImage2D(C.TEXTURE_2D,st,0,0,It,kt,Y,wt),nt.unbindTexture()},this.copyTextureToTexture=function(R,$,st=null,rt=null,Y=0){R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],$=arguments[2],Y=arguments[3]||0,st=null);let wt,It,kt,Ot,Yt,ee,zt,ce,Se;const Ee=R.isCompressedTexture?R.mipmaps[Y]:R.image;st!==null?(wt=st.max.x-st.min.x,It=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,Ot=st.min.x,Yt=st.min.y,ee=st.isBox3?st.min.z:0):(wt=Ee.width,It=Ee.height,kt=Ee.depth||1,Ot=0,Yt=0,ee=0),rt!==null?(zt=rt.x,ce=rt.y,Se=rt.z):(zt=0,ce=0,Se=0);const dn=Kt.convert($.format),ue=Kt.convert($.type);let Bt;$.isData3DTexture?(b.setTexture3D($,0),Bt=C.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(b.setTexture2DArray($,0),Bt=C.TEXTURE_2D_ARRAY):(b.setTexture2D($,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,$.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,$.unpackAlignment);const hi=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Bn=C.getParameter(C.UNPACK_SKIP_PIXELS),Vs=C.getParameter(C.UNPACK_SKIP_ROWS),Mn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ee.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ee.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ot),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ee);const kr=R.isDataArrayTexture||R.isData3DTexture,Te=$.isDataArrayTexture||$.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const jn=lt.get(R),Or=lt.get($),Cn=lt.get(jn.__renderTarget),Bi=lt.get(Or.__renderTarget);nt.bindFramebuffer(C.READ_FRAMEBUFFER,Cn.__webglFramebuffer),nt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Vi=0;Vi<kt;Vi++)kr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,lt.get(R).__webglTexture,Y,ee+Vi),R.isDepthTexture?(Te&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,lt.get($).__webglTexture,Y,Se+Vi),C.blitFramebuffer(Ot,Yt,wt,It,zt,ce,wt,It,C.DEPTH_BUFFER_BIT,C.NEAREST)):Te?C.copyTexSubImage3D(Bt,Y,zt,ce,Se+Vi,Ot,Yt,wt,It):C.copyTexSubImage2D(Bt,Y,zt,ce,Se+Vi,Ot,Yt,wt,It);nt.bindFramebuffer(C.READ_FRAMEBUFFER,null),nt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Te?R.isDataTexture||R.isData3DTexture?C.texSubImage3D(Bt,Y,zt,ce,Se,wt,It,kt,dn,ue,Ee.data):$.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,Y,zt,ce,Se,wt,It,kt,dn,Ee.data):C.texSubImage3D(Bt,Y,zt,ce,Se,wt,It,kt,dn,ue,Ee):R.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Y,zt,ce,wt,It,dn,ue,Ee.data):R.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Y,zt,ce,Ee.width,Ee.height,dn,Ee.data):C.texSubImage2D(C.TEXTURE_2D,Y,zt,ce,wt,It,dn,ue,Ee);C.pixelStorei(C.UNPACK_ROW_LENGTH,hi),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Mn),Y===0&&$.generateMipmaps&&C.generateMipmap(Bt),nt.unbindTexture()},this.copyTextureToTexture3D=function(R,$,st=null,rt=null,Y=0){return R.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],$=arguments[3],Y=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,$,st,rt,Y)},this.initRenderTarget=function(R){lt.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),nt.unbindTexture()},this.resetState=function(){M=0,E=0,I=null,nt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class ih{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new ih(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sh extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ub{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yu,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new V;class $a{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=si(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class om extends zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ir;const $r=new V,sr=new V,rr=new V,or=new se,qr=new se,am=new ye,la=new V,Yr=new V,ca=new V,jf=new se,gc=new se,Kf=new se;class hb extends Fe{constructor(t=new om){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ub(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new $a(i,3,0,!1)),ir.setAttribute("uv",new $a(i,2,3,!1))}this.geometry=ir,this.material=t,this.center=new se(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),am.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ua(la.set(-.5,-.5,0),rr,o,sr,s,r),ua(Yr.set(.5,-.5,0),rr,o,sr,s,r),ua(ca.set(.5,.5,0),rr,o,sr,s,r),jf.set(0,0),gc.set(1,0),Kf.set(1,1);let a=t.ray.intersectTriangle(la,Yr,ca,!1,$r);if(a===null&&(ua(Yr.set(-.5,.5,0),rr,o,sr,s,r),gc.set(0,1),a=t.ray.intersectTriangle(la,ca,Yr,!1,$r),a===null))return;const l=t.ray.origin.distanceTo($r);l<t.near||l>t.far||e.push({distance:l,point:$r.clone(),uv:Dn.getInterpolation($r,la,Yr,ca,jf,gc,Kf,new se),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ua(n,t,e,i,s,r){or.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(qr.x=r*or.x-s*or.y,qr.y=s*or.x+r*or.y):qr.copy(or),n.copy(t),n.x+=qr.x,n.y+=qr.y,n.applyMatrix4(am)}class fb extends zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qa=new V,Ya=new V,Zf=new ye,jr=new Qu,ha=new Do,_c=new V,Jf=new V;class db extends Fe{constructor(t=new We,e=new fb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)qa.fromBufferAttribute(e,s-1),Ya.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=qa.distanceTo(Ya);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,t.ray.intersectsSphere(ha)===!1)return;Zf.copy(s).invert(),jr.copy(t.ray).applyMatrix4(Zf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),w=u.getX(_+1),y=fa(this,t,jr,l,d,w);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=fa(this,t,jr,l,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=fa(this,t,jr,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=fa(this,t,jr,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fa(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(qa.fromBufferAttribute(o,s),Ya.fromBufferAttribute(o,r),e.distanceSqToSegment(qa,Ya,_c,Jf)>i)return;_c.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_c);if(!(l<t.near||l>t.far))return{distance:l,point:Jf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Qf=new V,td=new V;class pb extends db{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Qf.fromBufferAttribute(e,s),td.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qf.distanceTo(td);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lm extends zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ed=new ye,Su=new Qu,da=new Do,pa=new V;class mb extends Fe{constructor(t=new We,e=new lm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;ed.copy(s).invert(),Su.copy(t.ray).applyMatrix4(ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);pa.fromBufferAttribute(h,m),nd(pa,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)pa.fromBufferAttribute(h,g),nd(pa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nd(n,t,e,i,s,r,o){const a=Su.distanceSqToPoint(n);if(a<e){const l=new V;Su.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pl extends fn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rh extends We{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new V,f=new V,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const w=[],y=d/i;let v=0;d===0&&o===0?v=.5/e:d===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const M=L/e;h.x=-t*Math.cos(s+M*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(M+v,1-y),w.push(c++)}u.push(w)}for(let d=0;d<i;d++)for(let w=0;w<e;w++){const y=u[d][w+1],v=u[d][w],L=u[d+1][w],M=u[d+1][w+1];(d!==0||o>0)&&p.push(y,v,M),(d!==i-1||l<Math.PI)&&p.push(v,L,M)}this.setIndex(p),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pa extends zi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Nt(16777215),this.specular=new Nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hs extends zi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cm extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class um extends cm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vc=new ye,id=new V,sd=new V;class gb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _b extends gb{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hm extends cm{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new _b}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);const Tt=1.8/32,go=["#f3d2b3","#e8bc96","#d9a47c","#c48a62","#a8704c"],hr=["#1a1410","#3a2a1e","#5a3a22","#8a5a2a","#c8a060","#d8d8d8","#a83a2a","#2a3a6a"];function Zt(n,t,e,i,s=1,r=1){n.fillStyle=t,n.fillRect(e,i,s,r)}function ma(n,t,e,i,s,r,o){Zt(n,o,t+r,e,i*2,r),Zt(n,o,t,e+r,r*2+i*2,s)}function Kr(n,t){const e=parseInt(n.slice(1),16),i=Math.min(255,Math.max(0,(e>>16&255)*t)),s=Math.min(255,Math.max(0,(e>>8&255)*t)),r=Math.min(255,Math.max(0,(e&255)*t));return`rgb(${i|0},${s|0},${r|0})`}function oh(n){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=Un(n.seed||1),s=n.skin||go[0],r=n.hair||hr[0],o=n.shirt||"#3a7ad0",a=n.pants||"#2a2a3a",l=n.shoes||"#222222";ma(e,0,0,8,8,8,s),Zt(e,r,8,0,8,8),Zt(e,r,24,8,8,n.gender==="f"||n.hairStyle==="long"?8:5),Zt(e,r,0,8,8,n.gender==="f"?7:3),Zt(e,r,16,8,8,n.gender==="f"?7:3),Zt(e,r,8,8,8,n.hairStyle==="bald"?0:2),n.gender==="f"&&(Zt(e,r,8,8,1,6),Zt(e,r,15,8,1,6)),n.type==="elder"&&(Zt(e,"#d8d8d8",8,0,8,8),Zt(e,"#d8d8d8",24,8,8,4));const c=n.type==="kid"?"#2a1a10":"#1a1a2a";Zt(e,"#ffffff",9,12,2,1),Zt(e,"#ffffff",13,12,2,1),Zt(e,c,10,12,1,1),Zt(e,c,13,12,1,1),Zt(e,Kr(s,.85),11,13,2,1),Zt(e,n.gender==="f"?"#c0505a":Kr(s,.65),10,14,4,1),n.gender==="f"&&(Zt(e,"#e8a0a0",9,13,1,1),Zt(e,"#e8a0a0",14,13,1,1)),(n.glasses||n.type==="elder")&&(Zt(e,"#333",9,11,6,1),Zt(e,"#333",9,12,1,1),Zt(e,"#333",14,12,1,1)),n.type==="elder"&&Zt(e,Kr(s,.8),9,15,6,1),ma(e,16,16,8,12,4,o),Zt(e,Kr(o,.8),20,31,8,1),Zt(e,s,22,20,4,1);for(const[u,h]of[[40,16],[32,48]]){ma(e,u,h,4,12,4,s);const f=n.longSleeve?12:4;Zt(e,o,u,h+4,16,f),Zt(e,o,u+4,h,4,4)}for(const[u,h]of[[0,16],[16,48]])ma(e,u,h,4,12,4,a),Zt(e,l,u,h+4+9,16,3),Zt(e,l,u+8,h,4,4),n.shorts&&Zt(e,s,u,h+4+5,16,4);if(n.type==="office")Zt(e,"#ffffff",20,20,8,12),Zt(e,n.tie||"#a02a2a",23,20,2,8),Zt(e,o,20,20,2,12),Zt(e,o,26,20,2,12);else if(n.type==="student"){Zt(e,"#f2f2f2",20,20,8,12),Zt(e,"#2a5ac8",20,20,2,12),Zt(e,"#2a5ac8",26,20,2,12);for(const[u,h]of[[40,16],[32,48]])Zt(e,"#2a5ac8",u,h+4,16,2)}else if(n.type==="tourist")for(let u=0;u<6;u++)Zt(e,De(i,["#f2c230","#e05050","#50a0e0","#ffffff"]),20+Math.floor(i()*7),21+Math.floor(i()*10),1,1);else if(n.type==="elder"){Zt(e,Kr(o,.85),23,20,2,12);for(let u=22;u<32;u+=3)Zt(e,"#c8a040",23,u,2,1)}return n.gender==="f"&&n.dress&&(Zt(e,o,0,20,16,6),Zt(e,o,16,52,16,6)),t}function vb(n,t,e,i,s,r){const a=[[t+r+i,e+r,r,s],[t,e+r,r,s],[t+r,e,i,r],[t+r+i,e,i,r],[t+r,e+r,i,s],[t+2*r+i,e+r,i,s]],l=n.attributes.uv;for(let c=0;c<6;c++){const[u,h,f,p]=a[c],g=u/64,_=(u+f)/64,m=1-h/64,d=1-(h+p)/64,w=c*4;l.setXY(w,g,m),l.setXY(w+1,_,m),l.setXY(w+2,g,d),l.setXY(w+3,_,d)}l.needsUpdate=!0}function ar(n,t,e,i,s,r,o,a=0){const l=new Pe((t+a)*Tt,(e+a)*Tt,(i+a)*Tt);vb(l,s,r,t,e,i),l.translate(0,-e*Tt*.5+o*Tt,0);const c=new oe(l,n);return c.castShadow=!0,c}const od=new WeakMap;function ad(n){let t=od.get(n);return t||(t=new pl(n),t.magFilter=hn,t.minFilter=hn,t.colorSpace=$e,od.set(n,t)),t}class ah{constructor(t,e={}){this.group=new He,this.scale=e.scale||1,this.mat=new hs({map:ad(t),transparent:!1,alphaTest:.5});const i=new He;if(i.scale.setScalar(this.scale),this.root=i,this.group.add(i),this.legR=ar(this.mat,4,12,4,0,16,0),this.legL=ar(this.mat,4,12,4,16,48,0),this.legR.position.set(-2*Tt,12*Tt,0),this.legL.position.set(2*Tt,12*Tt,0),this.body=ar(this.mat,8,12,4,16,16,6),this.body.position.set(0,18*Tt,0),this.armR=ar(this.mat,4,12,4,40,16,2),this.armL=ar(this.mat,4,12,4,32,48,2),this.armR.position.set(-6*Tt,22*Tt,0),this.armL.position.set(6*Tt,22*Tt,0),this.head=ar(this.mat,8,8,8,0,0,8),this.head.position.set(0,24*Tt,0),i.add(this.legR,this.legL,this.body,this.armR,this.armL,this.head),this.phase=Math.random()*10,this.anim="idle",this.animT=0,this.acc={},e.accessories)for(const s of e.accessories)this.addAccessory(s)}setSkin(t){this.mat.map=ad(t),this.mat.needsUpdate=!0}addAccessory(t){if(this.acc[t])return this.acc[t];const e=s=>new hs({color:s});let i;if(t==="hat"){i=new He;const s=new oe(new Pe(10*Tt,2*Tt,10*Tt),e(15917216)),r=new oe(new Pe(8.4*Tt,3*Tt,8.4*Tt),e(15917216));s.position.y=8.2*Tt,r.position.y=9.5*Tt,i.add(s,r),this.head.add(i)}else if(t==="cap"){i=new He;const s=new oe(new Pe(8.4*Tt,2.5*Tt,8.4*Tt),e(14168112)),r=new oe(new Pe(8*Tt,.6*Tt,4*Tt),e(14168112));s.position.y=8.4*Tt,r.position.set(0,7.6*Tt,5.5*Tt),i.add(s,r),this.head.add(i)}else if(t==="backpack")i=new oe(new Pe(7*Tt,8*Tt,3*Tt),e(2779824)),i.position.set(0,0,-3.5*Tt),this.body.add(i);else if(t==="camera"){i=new He;const s=new oe(new Pe(4*Tt,3*Tt,2.5*Tt),e(2236962)),r=new oe(new Pe(1.8*Tt,1.8*Tt,1.8*Tt),e(5592405));r.position.z=2*Tt,i.add(s,r),i.position.set(0,-11*Tt,2.5*Tt),this.armR.add(i)}else if(t==="briefcase")i=new oe(new Pe(1.5*Tt,6*Tt,8*Tt),e(3811866)),i.position.set(-.5*Tt,-13.5*Tt,0),this.armL.add(i);else if(t==="cane")i=new oe(new Pe(1*Tt,14*Tt,1*Tt),e(6965802)),i.position.set(0,-15*Tt,2*Tt),this.armR.add(i);else if(t==="umbrella"){i=new He;const s=new oe(new Pe(.8*Tt,20*Tt,.8*Tt),e(4473924));s.position.y=0;const r=new oe(new Pe(22*Tt,2*Tt,22*Tt),e(De(Math.random,[14168112,2779824,15909424,2787914,14708896])));r.position.y=10*Tt;const o=new oe(new Pe(14*Tt,2*Tt,14*Tt),r.material);o.position.y=12*Tt,i.add(s,r,o),i.position.set(0,-10*Tt,0),i.rotation.x=1.2,this.armL.add(i)}else t==="phone"?(i=new oe(new Pe(2.4*Tt,4*Tt,.6*Tt),e(1118481)),i.position.set(0,-12*Tt,1.5*Tt),this.armR.add(i)):t==="bag"&&(i=new oe(new Pe(2*Tt,5*Tt,5*Tt),e(12597866)),i.position.set(2.5*Tt,-10*Tt,0),this.armL.add(i));return i&&(i.traverse(s=>s.isMesh&&(s.castShadow=!0)),this.acc[t]=i),i}showAccessory(t,e){e&&!this.acc[t]&&this.addAccessory(t),this.acc[t]&&(this.acc[t].visible=e)}setAnim(t){this.anim!==t&&(this.anim=t,this.animT=0)}update(t,e=0){this.animT+=t;const i=Math.min(1.6,e/6);this.phase+=t*(4+e*1.1);const s=Math.sin(this.phase)*.9*i;let r=s,o=-s,a=-s,l=s,c=0,u=0,h=0,f=0,p=0;const g=this.anim;if(e<.2){const _=Math.sin(this.animT*1.6)*.04;r=_,o=-_,a=0,l=0,c=.03,u=-.03}g==="photo"?(r=-1.5,c=.3,o=-1.4,u=-.4,h=.05):g==="wave"?(r=Math.PI,c=.3+Math.sin(this.animT*8)*.4):g==="pose"?(r=-Math.PI*.85,c=.5,o=-.2,u=-.4):g==="talk"?(h=Math.sin(this.animT*5)*.08,r=-.4+Math.sin(this.animT*3)*.2):g==="sit"?(a=l=-Math.PI/2,p=-10*Tt,r=o=-.6):g==="umbrella"?(o=-1.2,u=.15):g==="phone"?(r=-1.1,c=.4,h=.35):g==="shop"&&(r=-.9+Math.sin(this.animT*2)*.1),this.armR.rotation.set(r,0,c),this.armL.rotation.set(o,0,u),this.legR.rotation.x=a,this.legL.rotation.x=l,this.head.rotation.x=h,this.head.rotation.y=f,this.root.position.y=p+(e>.2?Math.abs(Math.cos(this.phase))*.03*i:0)}dispose(){this.group.traverse(t=>t.geometry&&t.geometry.dispose()),this.mat.dispose()}}function xb(n,t){const e=Un(t),i=e()<.5?"f":"m",s={gender:i,type:n,seed:t,skin:De(e,go.slice(0,4)),hair:De(e,hr.slice(0,5))},r=[];switch(n){case"office":s.shirt=De(e,["#2a2a3a","#3a4a6a","#4a4a4a"]),s.pants="#1a1a24",s.shoes="#111111",s.longSleeve=!0,s.tie=De(e,["#a02a2a","#2a4aa0","#3a3a3a"]),e()<.6?r.push("briefcase"):r.push("phone");break;case"student":s.shirt="#f2f2f2",s.pants="#2a5ac8",s.shoes="#f0f0f0",r.push("backpack");break;case"elder":s.shirt=De(e,["#8a6a4a","#5a6a7a","#a8a090","#6a3a3a"]),s.pants="#3a3a3a",s.shoes="#2a2a2a",s.longSleeve=!0,e()<.5&&r.push("cane");break;case"tourist":s.shirt=De(e,["#f2c230","#e05050","#50a0e0","#f080b0","#60c060"]),s.pants=De(e,["#c8b48a","#3a5a8a","#e0e0e0"]),s.shorts=e()<.6,r.push(e()<.5?"hat":"cap","camera"),e()<.5&&r.push("backpack");break;case"kid":s.shirt=De(e,["#f2c230","#e05050","#50a0e0","#f080b0","#60c060","#f0a030"]),s.pants=De(e,["#2a5ac8","#3a3a3a","#d84a6a"]),s.shorts=!0,e()<.4&&r.push("cap");break;default:s.shirt=De(e,["#c03a3a","#3a7ad0","#3aa060","#e0a030","#8a5ac0","#f2f2f2","#2a2a2a"]),s.pants=De(e,["#2a2a3a","#3a5a8a","#6a5a4a"]),e()<.3&&r.push("bag")}return i==="f"&&e()<.3&&n!=="student"&&(s.dress=!0),{params:s,accessories:r,scale:n==="kid"?.62:.95+e()*.1}}const Yi=32;class yb{constructor(){this.grid=new Map,this.owners=new Map,this.platforms=[]}add(t,e="static"){t.owner=e;const i=Math.floor(t.x0/Yi),s=Math.floor(t.x1/Yi),r=Math.floor(t.z0/Yi),o=Math.floor(t.z1/Yi),a=[];for(let c=i;c<=s;c++)for(let u=r;u<=o;u++){const h=c*100003+u;let f=this.grid.get(h);f||this.grid.set(h,f=[]),f.push(t),a.push(h)}t.keys=a;let l=this.owners.get(e);l||this.owners.set(e,l=[]),l.push(t)}addPlatform(t,e="static"){t.owner=e,this.platforms.push(t)}removeOwner(t){const e=this.owners.get(t);if(e){for(const i of e)for(const s of i.keys){const r=this.grid.get(s);if(!r)continue;const o=r.indexOf(i);o>=0&&r.splice(o,1),r.length||this.grid.delete(s)}this.owners.delete(t)}this.platforms=this.platforms.filter(i=>i.owner!==t)}query(t,e,i,s,r=[]){r.length=0;const o=Math.floor(t/Yi),a=Math.floor(i/Yi),l=Math.floor(e/Yi),c=Math.floor(s/Yi);for(let u=o;u<=a;u++)for(let h=l;h<=c;h++){const f=this.grid.get(u*100003+h);if(f)for(const p of f)p.x1>t&&p.x0<i&&p.z1>e&&p.z0<s&&r.indexOf(p)<0&&r.push(p)}return r}supportAt(t,e,i,s=.3){let r=-1/0;const o=this.query(t-s,e-s,t+s,e+s,this._tmp||(this._tmp=[]));for(const a of o)a.y1<=i&&a.y1>r&&(r=a.y1);for(const a of this.platforms)a.y>i||a.y<=r||ao(a,t,e)&&(r=a.y);return r}}function ao(n,t,e){if(n.type==="ellipse"){const i=(t-n.cx)/n.rx,s=(e-n.cz)/n.rz,r=i*i+s*s;if(n.inner){const o=(t-n.cx)/n.inner.rx,a=(e-n.cz)/n.inner.rz;if(o*o+a*a<1)return!1}return r<=1}return t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1}const ns={sunny:{name:"晴天",icon:"☀️",fog:75e-5,cloud:.35,light:1,rain:0,dark:0},cloudy:{name:"阴天",icon:"☁️",fog:.0011,cloud:.8,light:.65,rain:0,dark:.35},rain:{name:"下雨",icon:"🌧️",fog:.0019,cloud:1,light:.45,rain:1,dark:.6},typhoon:{name:"飘雪",icon:"❄️",fog:.0022,cloud:1,light:.5,rain:.9,dark:.55}},Mb=`
varying vec3 vDir;
void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }`,bb=`
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
}`;class Sb{constructor(t,e){this.scene=t,this.renderer=e,this.hour=9,this.speed=24/1200,this.weather="sunny",this.weatherLock=null,this.nextWeatherChange=2+Math.random()*2,this.wf={...ns.sunny},this.flash=0,this.flashTimer=5,this.rng=Un(Date.now()&65535),this.onWeatherChange=null,this.fog=new ih(12574975,8e-4),t.fog=this.fog,this.skyUniforms={uTop:{value:new Nt},uHorizon:{value:new Nt},uSun:{value:new V(0,1,0)},uSunColor:{value:new Nt(1,.9,.7)},uNight:{value:0},uFlash:{value:0}},this.sky=new oe(new rh(4e3,32,16),new On({uniforms:this.skyUniforms,vertexShader:Mb,fragmentShader:bb,side:un,depthWrite:!1,fog:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky),this.sun=new oe(new us(180,180),new Li({color:16774336,fog:!1,transparent:!0,depthWrite:!1})),this.moon=new oe(new us(110,110),new Li({color:15265528,fog:!1,transparent:!0,depthWrite:!1})),this.sun.renderOrder=this.moon.renderOrder=-9,t.add(this.sun,this.moon);const i=[],s=Un(7);for(let a=0;a<1500;a++){const l=s()*2-1,c=s()*Math.PI*2,u=Math.abs(l),h=Math.sqrt(1-u*u);i.push(Math.cos(c)*h*3500,u*3500,Math.sin(c)*h*3500)}const r=new We;r.setAttribute("position",new Ie(i,3)),this.stars=new mb(r,new lm({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1,transparent:!0,depthWrite:!1})),t.add(this.stars),this.hemi=new um(13625087,9075304,1.2),t.add(this.hemi),this.dir=new hm(16777215,2.2),this.dir.castShadow=!0,this.dir.shadow.mapSize.set(2048,2048);const o=this.dir.shadow.camera;o.left=-140,o.right=140,o.top=140,o.bottom=-140,o.near=10,o.far=800,this.dir.shadow.bias=-6e-4,this.dir.shadow.normalBias=.6,t.add(this.dir,this.dir.target),this.clouds=this.makeClouds(),t.add(this.clouds),this.rain=this.makeRain(),t.add(this.rain)}makeClouds(){const t=new He,e=Un(99),i=48,s=70,r=[];for(let c=0;c<i;c++){r[c]=[];for(let u=0;u<i;u++)r[c][u]=e()}const o=(c,u)=>{let h=0;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++)h+=r[(c+f+i)%i][(u+p+i)%i];return h/9},a=[[],[]],l=new Pe(s,10,s);for(let c=0;c<i;c++)for(let u=0;u<i;u++){const h=o(c,u),f=h>.58?0:h>.5?1:-1;if(f<0)continue;const p=new ye().makeTranslation((c-i/2)*s,0,(u-i/2)*s);a[f].push(l.clone().applyMatrix4(p))}this.cloudMats=[];for(let c=0;c<2;c++){if(!a[c].length)continue;const u=wb(a[c]),h=new hs({color:16777215,transparent:!0,opacity:.85,fog:!1,depthWrite:!1});this.cloudMats.push(h);const f=new oe(u,h);f.userData.layer=c,t.add(f)}return t.position.y=260,this.cloudSpan=i*s,t}makeRain(){const e=new Float32Array(96e3),i=Un(3);for(let a=0;a<16e3;a++){const l=(i()-.5)*100,c=i()*60,u=(i()-.5)*100;e.set([l,c,u,l,c,u],a*6)}const s=new We;s.setAttribute("position",new xn(e,3)),this.rainU={uTime:{value:0},uWind:{value:new se},uOrigin:{value:new V},uAlpha:{value:0}};const r=new On({uniforms:this.rainU,transparent:!0,depthWrite:!1,vertexShader:`uniform float uTime; uniform vec2 uWind; uniform vec3 uOrigin;
        void main(){ vec3 p = position; float fall = mod(p.y - uTime*42.0, 60.0);
          p.y = fall; p.xz += uWind * (60.0 - fall) * 0.25;
          if (mod(float(gl_VertexID),2.0) > 0.5) { p.y -= 1.6; p.xz += uWind*0.4; }
          vec3 w = vec3(mod(p.x - uOrigin.x + 50.0, 100.0) - 50.0 + uOrigin.x, uOrigin.y - 20.0 + p.y, mod(p.z - uOrigin.z + 50.0, 100.0) - 50.0 + uOrigin.z);
          gl_Position = projectionMatrix * viewMatrix * vec4(w,1.0); }`,fragmentShader:"uniform float uAlpha; void main(){ gl_FragColor = vec4(0.75,0.82,0.95,uAlpha); }"}),o=new pb(s,r);return o.frustumCulled=!1,o.visible=!1,o}setWeather(t,e=!1){ns[t]&&(this.weather=t,e&&(this.weatherLock=t),this.onWeatherChange&&this.onWeatherChange(t))}unlock(){this.weatherLock=null}get night(){return this._night||0}update(t,e,i){const s=this.hour;if(this.hour=(this.hour+t*this.speed)%24,!this.weatherLock&&(this.nextWeatherChange-=t*this.speed,this.nextWeatherChange<=0)){const E=this.rng(),I=E<.45?"sunny":E<.75?"cloudy":E<.93?"rain":"typhoon";this.nextWeatherChange=2+this.rng()*3,I!==this.weather&&this.setWeather(I)}const r=ns[this.weather],o=Math.min(1,t*.4);for(const E of["fog","cloud","light","rain","dark"])this.wf[E]=Tp(this.wf[E],r[E],o);const a=this.wf,l=(this.hour-6)/12*Math.PI,c=new V(Math.cos(l),Math.sin(l),.35).normalize(),u=c.y,h=ln((.06-u)/.22,0,1);this._night=h;const f=ln(1-Math.abs(u-.05)/.22,0,1)*(1-h*.6);this.dusk=f;const p=new Nt(4032224),g=new Nt(12574975);p.lerp(new Nt(3820170),f*.6).lerp(new Nt(263695),h),g.lerp(new Nt(16751194),f*.85).lerp(new Nt(1316910),h);const _=new Nt(9080984).multiplyScalar(1-h*.85);p.lerp(_,a.dark*.85),g.lerp(_,a.dark*.75),this.flashTimer-=t,a.rain>.5&&this.flashTimer<0&&(this.flashTimer=9+Math.random()*8,this.flash=1),this.flash=Math.max(0,this.flash-t*4);const m=this.flash>.5||this.flash>.2&&this.flash<.3?this.flash:0;this.skyUniforms.uTop.value.copy(p),this.skyUniforms.uHorizon.value.copy(g),this.skyUniforms.uSun.value.copy(c),this.skyUniforms.uNight.value=h,this.skyUniforms.uFlash.value=m*.6,this.fog.color.copy(g),this.fog.density=a.fog;const d=ln(u*3+.2,0,1)*a.light;this.hemi.color.copy(new Nt(13625087).lerp(new Nt(7372992),h)),this.hemi.groundColor.copy(new Nt(9075304).lerp(new Nt(5917264),h)),this.hemi.intensity=.35+d*1+h*.75+m*2.5;const w=c.clone().multiplyScalar(-1),y=u<0,v=y?w:c;this.dir.intensity=y?.5*a.light+.1:2.4*d,this.dir.color.copy(y?new Nt(9349375):new Nt(16777215).lerp(new Nt(16752736),f)),this.dir.position.copy(i).addScaledVector(v,400),this.dir.target.position.copy(i),this.sky.position.copy(e.position),this.stars.position.copy(e.position),this.stars.material.opacity=h*(1-a.dark)*.9,this.stars.rotation.y=this.hour*.05,this.sun.position.copy(e.position).addScaledVector(c,3200),this.sun.lookAt(e.position),this.sun.material.opacity=(1-a.dark)*ln(u*6+.6,0,1),this.sun.material.color.copy(new Nt(16774336).lerp(new Nt(16744512),f)),this.moon.position.copy(e.position).addScaledVector(w,3200),this.moon.lookAt(e.position),this.moon.material.opacity=(1-a.dark)*ln(-u*6+.4,0,1),this.cloudT=(this.cloudT||0)+t*4,this.clouds.position.x=Math.floor(e.position.x/70)*70+this.cloudT%70,this.clouds.position.z=Math.floor(e.position.z/70)*70;const L=new Nt(16777215).lerp(new Nt(7370368),a.dark).lerp(new Nt(1711658),h).lerp(new Nt(16756864),f*.5*(1-a.dark));this.clouds.children.forEach(E=>{E.visible=E.userData.layer===0?!0:a.cloud>.6,E.material.color.copy(L),E.material.opacity=.55+a.cloud*.4}),this.rain.visible=a.rain>.05,this.rainU.uTime.value+=t,this.rainU.uAlpha.value=ln(a.rain*.6,0,.8),this.rainU.uOrigin.value.copy(e.position);const M=this.weather==="typhoon"?.15:.3;return this.rainU.uWind.value.set(M,M*.4),{night:h,dusk:f,flash:m,crossedHour:Math.floor(s)!==Math.floor(this.hour)}}get period(){const t=this.hour;return t>=5&&t<11?"早晨":t>=11&&t<17?"下午":t>=17&&t<19.5?"黄昏":"夜晚"}}function wb(n){let t=0;for(const a of n)t+=a.attributes.position.count;const e=new Float32Array(t*3),i=new Float32Array(t*3),s=[];let r=0;for(const a of n){e.set(a.attributes.position.array,r*3),i.set(a.attributes.normal.array,r*3);for(const l of a.index.array)s.push(l+r);r+=a.attributes.position.count}const o=new We;return o.setAttribute("position",new xn(e,3)),o.setAttribute("normal",new xn(i,3)),o.setIndex(s.length>65e3?new fl(s,1):new hl(s,1)),o}class ml extends oe{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new vn;const i=this,s=e.color!==void 0?new Nt(e.color):new Nt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||ml.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new Qi,h=new V,f=new V,p=new V,g=new ye,_=new V(0,0,-1),m=new Ce,d=new V,w=new V,y=new Ce,v=new ye,L=this.camera,M=new Fi(r,o,{samples:c,type:Bs}),E=new On({name:l.name!==void 0?l.name:"unspecified",uniforms:Kp.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(I,A,S){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),g.extractRotation(i.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),d.subVectors(f,p),d.dot(h)>0)return;d.reflect(h).negate(),d.add(f),g.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(p),w.subVectors(f,_),w.reflect(h).negate(),w.add(f),L.position.copy(d),L.up.set(0,1,0),L.up.applyMatrix4(g),L.up.reflect(h),L.lookAt(w),L.far=S.far,L.updateMatrixWorld(),L.projectionMatrix.copy(S.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(L.projectionMatrix),v.multiply(L.matrixWorldInverse),v.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(L.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const D=L.projectionMatrix;y.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],y.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],y.z=-1,y.w=(1+D.elements[10])/D.elements[14],m.multiplyScalar(2/m.dot(y)),D.elements[2]=m.x,D.elements[6]=m.y,D.elements[10]=m.z+1-a,D.elements[14]=m.w,i.visible=!1;const Z=I.getRenderTarget(),B=I.xr.enabled,q=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(M),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(A,L),I.xr.enabled=B,I.shadowMap.autoUpdate=q,I.setRenderTarget(Z);const ot=S.viewport;ot!==void 0&&I.state.viewport(ot),i.visible=!0},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),i.material.dispose()}}}ml.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const To={lat:34.255,lon:108.95},wu=200,dm=111.32*Math.cos(To.lat*Math.PI/180),pm=110.574,La=13,mm=.3;function Eb(n,t){const e=(t-To.lon)*dm,i=(n-To.lat)*pm;return Math.hypot(e,i)>La?mm:1}function Fr(n,t){let e=(t-To.lon)*dm,i=(n-To.lat)*pm;const s=Math.hypot(e,i);if(s>La){const r=(La+(s-La)*mm)/s;e*=r,i*=r}return{x:e*wu,z:-i*wu}}const ki=(n,t)=>Fr(n,t),Tb=[{name:"西安护城河",pts:[[34.276,108.922,.035],[34.276,108.97,.035],[34.238,108.97,.035],[34.238,108.922,.035],[34.276,108.922,.035]]},{name:"曲江池",pts:[[34.204,108.976,.08],[34.202,108.982,.09],[34.198,108.985,.08],[34.195,108.98,.08],[34.197,108.974,.08],[34.204,108.976,.08]]},{name:"浐河",pts:[[34.36,109.07,.11],[34.32,109.06,.13],[34.28,109.055,.15],[34.24,109.06,.16],[34.19,109.075,.18]]},{name:"灞河",pts:[[34.39,109.03,.17],[34.35,109.05,.2],[34.31,109.075,.22],[34.27,109.1,.24],[34.22,109.12,.27]]},{name:"渭河",pts:[[34.43,108.75,.5],[34.44,108.86,.55],[34.445,108.98,.6],[34.44,109.1,.62],[34.43,109.22,.65]]}],gl=Tb.map(n=>({name:n.name,pts:n.pts.map(([t,e,i])=>({...ki(t,e),w:i*wu*Eb(t,e)}))})),Ab=[{name:"朱雀大街",w:15,pts:[[34.276,108.94],[34.26,108.94],[34.238,108.94],[34.218,108.94],[34.18,108.94],[34.12,108.94]]},{name:"长安北路",w:16,pts:[[34.24,108.953],[34.225,108.953],[34.205,108.952],[34.17,108.95],[34.12,108.945]]},{name:"未央路",w:16,pts:[[34.276,108.95],[34.31,108.95],[34.35,108.95],[34.39,108.95],[34.44,108.95]]},{name:"北大街",w:14,pts:[[34.276,108.947],[34.262,108.947]]},{name:"南大街",w:14,pts:[[34.262,108.947],[34.24,108.947]]},{name:"东大街",w:14,pts:[[34.262,108.947],[34.262,108.97]]},{name:"西大街",w:14,pts:[[34.262,108.947],[34.262,108.922]]},{name:"雁塔路",w:13,pts:[[34.255,108.96],[34.235,108.96],[34.218,108.964],[34.2,108.975]]},{name:"友谊路",w:13,pts:[[34.245,108.91],[34.245,108.95],[34.245,109]]},{name:"二环南路",w:16,pts:[[34.225,108.88],[34.225,108.94],[34.225,109.02]]},{name:"太华路",w:13,pts:[[34.262,108.975],[34.295,108.975],[34.34,108.98]]},{name:"华清路",w:14,pts:[[34.275,108.97],[34.29,109.05],[34.33,109.14],[34.365,109.214],[34.385,109.278]]},{name:"咸宁路",w:13,pts:[[34.252,108.97],[34.255,109.03],[34.27,109.08]]},{name:"曲江路",w:12,pts:[[34.218,108.964],[34.207,108.976],[34.198,108.982],[34.19,108.97]]},{name:"环城北路",w:15,pts:[[34.276,108.922],[34.276,108.97]]},{name:"环城东路",w:15,pts:[[34.276,108.97],[34.238,108.97]]},{name:"环城南路",w:15,pts:[[34.238,108.97],[34.238,108.922]]},{name:"环城西路",w:15,pts:[[34.238,108.922],[34.276,108.922]]},{name:"大唐不夜城步行街",w:18,ped:!0,pts:[[34.218,108.964],[34.195,108.964]]}],_l=Ab.map(n=>({...n,pts:n.pts.map(([t,e])=>ki(t,e))})),Tn={beilin:{name:"碑林区",color:"#b45a3c",theme:"城墙文脉"},lianhu:{name:"莲湖区",color:"#d49a45",theme:"市井长安"},xincheng:{name:"新城区",color:"#c96d55",theme:"古今交汇"},yanta:{name:"雁塔区",color:"#7258a8",theme:"盛唐风华"},weiyang:{name:"未央区",color:"#567fb0",theme:"汉唐宫阙"},lintong:{name:"临潼区",color:"#9a784b",theme:"秦风骊山"},changan:{name:"长安区",color:"#548b55",theme:"终南山水"},baqiao:{name:"灞桥区",color:"#4f9b9d",theme:"丝路水岸"}},Eu=[["beilin",34.25,108.95],["beilin",34.24,108.96],["lianhu",34.27,108.93],["lianhu",34.26,108.92],["xincheng",34.27,108.98],["xincheng",34.25,108.99],["yanta",34.21,108.96],["yanta",34.19,108.98],["weiyang",34.32,108.95],["weiyang",34.39,108.94],["lintong",34.36,109.21],["lintong",34.385,109.278],["changan",34.08,108.9],["changan",34.02,108.98],["baqiao",34.28,109.08],["baqiao",34.34,109.05]].map(([n,t,e])=>({id:n,...ki(t,e)}));function fs(n,t){let e=Eu[0],i=1/0;for(const s of Eu){const r=(s.x-n)**2+(s.z-t)**2;r<i&&(i=r,e=s)}return e.id}const Cb=[[34.355,109.215,85,220],[34.34,109.2,55,180],[34.38,109.22,38,150],[34.02,108.99,130,300],[34.06,108.91,105,280],[34.1,108.86,65,220]].map(([n,t,e,i])=>({...ki(n,t),h:e,r:i}));function gm(n,t){let e=0;for(const i of Cb){const s=(n-i.x)**2+(t-i.z)**2;s<i.r*i.r*6&&(e+=i.h*Math.exp(-s/(i.r*i.r*.6)))}return e>1&&(e+=(Math.sin(n*.06)*Math.cos(t*.04)+Math.sin((n+t)*.028))*Math.min(4,e*.08)),e<.6?0:e}function Oe(n,t){let e=gm(n,t);if(e>0){const i=yr(n,t,18);i&&(e*=Math.min(1,Math.max(0,(i.d-i.hw+18)/18)**2))}return Math.floor(e)}const Rb=[[34.296,108.964,180],[34.218,108.964,75],[34.202,108.98,150],[34.245,108.939,55],[34.276,109.05,90],[34.365,109.214,180],[34.385,109.278,160],[34.06,108.91,260]].map(([n,t,e])=>({...ki(n,t),r:e}));function Da(n,t){return Rb.some(e=>(e.x-n)**2+(e.z-t)**2<e.r*e.r)}const fr=64;function _m(n,t){const e=new Map;for(const i of n)for(let s=1;s<i.pts.length;s++){const r=i.pts[s-1],o=i.pts[s],a=Math.max(t(i,r),t(i,o))/2+20,l={ax:r.x,az:r.z,bx:o.x,bz:o.z,wa:t(i,r),wb:t(i,o),line:i};for(let c=Math.floor((Math.min(r.x,o.x)-a)/fr);c<=Math.floor((Math.max(r.x,o.x)+a)/fr);c++)for(let u=Math.floor((Math.min(r.z,o.z)-a)/fr);u<=Math.floor((Math.max(r.z,o.z)+a)/fr);u++){const h=c+","+u,f=e.get(h)||[];f.push(l),e.set(h,f)}}return e}const vm=_m(gl,(n,t)=>t.w),lh=_m(_l,n=>n.w);function Io(n,t,e,i=0){const s=n.get(Math.floor(t/fr)+","+Math.floor(e/fr));if(!s)return null;let r=null;for(const o of s){const{d:a,t:l}=o_(t,e,o.ax,o.az,o.bx,o.bz),c=(o.wa+(o.wb-o.wa)*l)/2+i;a<c&&(!r||a-c<r.m)&&(r={seg:o,d:a,hw:c,m:a-c,line:o.line})}return r}const xm=[];function Pb(n,t,e,i){xm.push({x0:Math.min(n,e),z0:Math.min(t,i),x1:Math.max(n,e),z1:Math.max(t,i)})}function Lb(n,t){return xm.some(e=>n>=e.x0&&n<=e.x1&&t>=e.z0&&t<=e.z1)}function xc(n,t,e=0){return Io(vm,n,t,e)}function ai(n,t){return!!Io(vm,n,t)&&!Lb(n,t)}function yr(n,t,e=0){return Io(lh,n,t,e)}function ym(n,t){return ai(n,t)&&!!Io(lh,n,t)}function Mm(n,t){return!ai(n,t)||!!Io(lh,n,t,-.5)}const lo=-.7,dr=.35,Tu={pts:[[34.262,108.947],[34.238,108.947],[34.225,108.953],[34.218,108.964],[34.207,108.976],[34.198,108.982]].map(([n,t])=>ki(n,t)),stops:[{name:"钟楼",lat:34.262,lon:108.947},{name:"永宁门",lat:34.238,lon:108.947},{name:"陕西历史博物馆",lat:34.225,lon:108.955},{name:"大雁塔",lat:34.218,lon:108.964},{name:"大唐不夜城",lat:34.207,lon:108.964},{name:"曲江池",lat:34.198,lon:108.982}].map(n=>({...n,...ki(n.lat,n.lon)}))},Pr=[{id:"zhonglou",name:"钟楼站",lines:["2号线","6号线"],lat:34.262,lon:108.947},{id:"beidajie",name:"北大街站",lines:["1号线","2号线"],lat:34.271,lon:108.947},{id:"yongningmen",name:"永宁门站",lines:["2号线"],lat:34.239,lon:108.947},{id:"xiaozhai",name:"小寨站",lines:["2号线","3号线"],lat:34.225,lon:108.953},{id:"dayanta",name:"大雁塔站",lines:["3号线","4号线"],lat:34.218,lon:108.964},{id:"datang",name:"大唐芙蓉园站",lines:["4号线"],lat:34.207,lon:108.976},{id:"daminggong",name:"大明宫站",lines:["4号线"],lat:34.295,lon:108.965},{id:"banpo",name:"半坡站",lines:["1号线"],lat:34.275,lon:109.047},{id:"huaqingchi",name:"华清池站",lines:["9号线"],lat:34.365,lon:109.214},{id:"qinyong",name:"秦陵西站",lines:["9号线"],lat:34.379,lon:109.25},{id:"beikezhan",name:"西安北站",lines:["2号线","4号线","14号线"],lat:34.376,lon:108.939},{id:"aoti",name:"奥体中心站",lines:["14号线"],lat:34.37,lon:109.02}].map(n=>({...n,...ki(n.lat,n.lon)}));function Db(){return gl.find(n=>n.name==="曲江池").pts.map(n=>({x:n.x,z:n.z}))}const ga=[{id:"nanhu",name:"南湖码头",lat:34.203,lon:108.976},{id:"qujiang",name:"曲江池码头",lat:34.197,lon:108.984}].map(n=>({...n,...ki(n.lat,n.lon)}));function Ib(){let n=1/0,t=-1/0,e=1/0,i=-1/0;for(const s of Eu)n=Math.min(n,s.x),t=Math.max(t,s.x),e=Math.min(e,s.z),i=Math.max(i,s.z);return{x0:n-600,x1:t+600,z0:e-600,z1:i+600}}function Pn(n,t,e,i={}){const s=document.createElement("canvas");s.width=n,s.height=t;const r=s.getContext("2d");e(r,n,t);const o=new pl(s);return o.magFilter=hn,o.minFilter=i.mip===!1?hn:so,o.wrapS=o.wrapT=Ga,o.colorSpace=i.linear?Ai:$e,o.anisotropy=4,o}function Zr(n,t,e,i,s,r){for(let o=0;o<e;o++)for(let a=0;a<t;a++){const l=Math.max(0,Math.min(255,i+(r()-.5)*s));n.fillStyle=`rgb(${l},${l},${l})`,n.fillRect(a,o,1,1)}}const sn={};function ch(){if(sn.block)return sn;const n=Un(42);sn.block=Pn(16,16,(e,i,s)=>{Zr(e,i,s,225,40,n),e.fillStyle="rgba(0,0,0,0.13)",e.fillRect(0,15,16,1),e.fillRect(15,0,1,16),e.fillStyle="rgba(255,255,255,0.1)",e.fillRect(0,0,16,1),e.fillRect(0,0,1,16)}),sn.leaf=Pn(16,16,(e,i,s)=>{for(let r=0;r<s;r++)for(let o=0;o<i;o++){const a=n(),l=a<.15?150:a<.5?200:240;e.fillStyle=`rgb(${l},${l},${l})`,e.fillRect(o,r,1,1)}}),sn.brick=Pn(16,16,e=>{Zr(e,16,16,215,30,n),e.fillStyle="rgba(40,40,40,0.35)";for(let i=0;i<4;i++){e.fillRect(0,i*4+3,16,1);const s=i%2?4:0;e.fillRect(s+0,i*4,1,3),e.fillRect(s+8,i*4,1,3)}}),sn.roof=Pn(16,16,e=>{Zr(e,16,16,200,25,n),e.fillStyle="rgba(0,0,0,0.3)";for(let i=0;i<16;i+=4)e.fillRect(i,0,1,16);e.fillStyle="rgba(255,255,255,0.15)";for(let i=2;i<16;i+=4)e.fillRect(i,0,1,16);e.fillStyle="rgba(0,0,0,0.2)",e.fillRect(0,15,16,1)}),sn.wood=Pn(16,16,e=>{Zr(e,16,16,205,30,n),e.fillStyle="rgba(0,0,0,0.25)";for(let i=3;i<16;i+=4)e.fillRect(0,i,16,1)});const t=[];for(let e=0;e<64;e++)t.push(n()<.55);return sn.window=Pn(64,64,e=>{e.fillStyle="#e8e8e8",e.fillRect(0,0,64,64);for(let i=0;i<8;i++)for(let s=0;s<8;s++){const r=120+Math.floor(n()*50);e.fillStyle=`rgb(${r-20},${r},${r+30})`,e.fillRect(i*8+1,s*8+1,6,6),e.fillStyle="rgba(255,255,255,0.35)",e.fillRect(i*8+1,s*8+1,2,1)}}),sn.windowLit=Pn(64,64,e=>{e.fillStyle="#000",e.fillRect(0,0,64,64);for(let i=0;i<8;i++)for(let s=0;s<8;s++){if(!t[i*8+s])continue;const r=n()<.7;e.fillStyle=r?"#ffd890":"#cfe8ff",e.fillRect(i*8+1,s*8+1,6,6)}}),sn.curtain=Pn(32,32,e=>{for(let i=0;i<32;i++){const s=150+Math.floor(i/32*70);e.fillStyle=`rgb(${s},${s},${s})`,e.fillRect(0,i,32,1)}e.fillStyle="rgba(255,255,255,0.8)";for(let i=0;i<32;i+=8)e.fillRect(i,0,1,32);for(let i=0;i<32;i+=8)e.fillRect(0,i,32,1)}),sn.curtainLit=Pn(32,32,e=>{e.fillStyle="#000",e.fillRect(0,0,32,32);for(let i=0;i<4;i++)for(let s=0;s<4;s++)n()<.45||(e.fillStyle=n()<.6?"#ffe2a8":"#d8ecff",e.fillRect(i*8+1,s*8+1,7,7))}),sn.road=Pn(32,32,e=>{Zr(e,32,32,90,18,n),e.fillStyle="#d8d8d0",e.fillRect(0,0,2,32),e.fillRect(30,0,2,32),e.fillStyle="#e8c840",e.fillRect(15,0,2,16)},{mip:!0}),sn.grass=Pn(16,16,e=>{for(let i=0;i<16;i++)for(let s=0;s<16;s++){const r=200+Math.floor(n()*55);e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(s,i,1,1)}}),sn.water=Pn(64,64,e=>{for(let i=0;i<64;i++)for(let s=0;s<64;s++){const r=128+Math.sin(s*.4+Math.sin(i*.3)*2)*40+(n()-.5)*30;e.fillStyle=`rgb(${r},${r},${r})`,e.fillRect(s,i,1,1)}},{linear:!0}),sn}let Jr=null;function bm(){if(Jr)return Jr;const n=ch(),t=e=>new hs({vertexColors:!0,...e});return Jr={block:{mat:t({map:n.block}),uv:1},stone:{mat:t({map:n.block}),uv:.5},brick:{mat:t({map:n.brick}),uv:1},roof:{mat:t({map:n.roof}),uv:1},wood:{mat:t({map:n.wood}),uv:1},leaf:{mat:t({map:n.leaf}),uv:.7},grass:{mat:t({map:n.grass}),uv:.5},window:{mat:t({map:n.window,emissiveMap:n.windowLit,emissive:16777215,emissiveIntensity:0}),uv:1/8},curtain:{mat:new Pa({vertexColors:!0,map:n.curtain,emissiveMap:n.curtainLit,emissive:16777215,emissiveIntensity:0,shininess:80,specular:6710886}),uv:1/8},glass:{mat:new Pa({vertexColors:!0,transparent:!0,opacity:.45,shininess:100,specular:16777215,depthWrite:!1}),uv:1},lamp:{mat:new Li({vertexColors:!0,color:7829367}),uv:1,night:"lamp"},neon:{mat:new Li({vertexColors:!0,color:8947848}),uv:1,night:"neon"},glow:{mat:new Li({vertexColors:!0}),uv:1},pond:{mat:new Pa({vertexColors:!0,map:n.water,shininess:90,specular:10139856}),uv:.08},sign:{mat:t({}),uv:1}},Jr.lamp.mat.userData.noFog=!1,Jr}function Ub(n){const t=bm();t.window.mat.emissiveIntensity=n*1,t.curtain.mat.emissiveIntensity=n*.9;const e=.45+n*.65;t.lamp.mat.color.setRGB(e,e,e);const i=.6+n*.6;t.neon.mat.color.setRGB(i,i,i)}const yc=new Map;function Nb(n,t={}){const e=n+JSON.stringify(t);if(yc.has(e))return yc.get(e);const{bg:i="#1a1a1a",fg:s="#ffd76a",font:r="bold",vertical:o=!1,border:a=null,px:l=64}=t,c=document.createElement("canvas"),u=c.getContext("2d"),h=[...n];o?(c.width=l*1.25,c.height=l*h.length*1.1+l*.4):(u.font=`${r} ${l}px "Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif`,c.width=Math.ceil(u.measureText(n).width+l*.8),c.height=l*1.4),u.fillStyle=i,u.fillRect(0,0,c.width,c.height),a&&(u.strokeStyle=a,u.lineWidth=l*.12,u.strokeRect(l*.08,l*.08,c.width-l*.16,c.height-l*.16)),u.font=`${r} ${l}px "Microsoft YaHei","PingFang SC","Noto Sans SC",sans-serif`,u.fillStyle=s,u.textAlign="center",u.textBaseline="middle",o?h.forEach((g,_)=>u.fillText(g,c.width/2,l*.75+_*l*1.1)):u.fillText(n,c.width/2,c.height/2+l*.04);const f=new pl(c);f.colorSpace=$e,f.anisotropy=4;const p={tex:f,aspect:c.width/c.height};return yc.set(e,p),p}const Mc=new Map;function Fb(n,t={}){const e=n+JSON.stringify(t);if(Mc.has(e))return Mc.get(e);const{tex:i,aspect:s}=Nb(n,t),o={mat:t.glow?new Li({map:i,toneMapped:!1}):new hs({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.25}),aspect:s};return Mc.set(e,o),o}const ld=new Map;function lr(n){let t=ld.get(n);if(!t){const e=new Nt().setHex(n);t=[e.r,e.g,e.b],ld.set(n,t)}return t}const kb=new Set(["leaf","lamp","neon","glow","glass"]),bc=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[2,1]},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[2,1]},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uv:[0,2]},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[0,2]},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[0,1]},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[0,1]}],Ob=[.86,.86,1,.6,.93,.93];class zb{constructor(){this.pos=[],this.nor=[],this.uv=[],this.col=[],this.idx=[],this.n=0}}class Qe{constructor(t=0,e=0,i=0,s=0,r=null,o="static"){this.ox=t,this.oy=e,this.oz=i,this.rot=s,this.cos=Math.cos(s),this.sin=Math.sin(s),this.world=r,this.owner=o,this.buckets={},this.extras=[],this.mats=bm(),this.jitter=!0}wx(t,e){return this.ox+t*this.cos+e*this.sin}wz(t,e){return this.oz-t*this.sin+e*this.cos}toWorld(t,e,i){return new V(this.wx(t,i),this.oy+e,this.wz(t,i))}bucket(t){return this.buckets[t]||(this.buckets[t]=new zb)}_opt(t){return t?typeof t=="string"?{mat:t}:{mat:"block",...t}:{mat:"block"}}box(t,e,i,s,r,o,a,l){const c=this._opt(l);t>s&&([t,s]=[s,t]),e>r&&([e,r]=[r,e]),i>o&&([i,o]=[o,i]);const u=this.bucket(c.mat),h=(this.mats[c.mat]||this.mats.block).uv;let[f,p,g]=lr(a);if(this.jitter&&c.jitter!==!1){const v=1+Math.sin(t*12.9898+i*78.233+e*37.719)*43758.5453%1*.06;f*=v,p*=v,g*=v}const _=c.top!=null?lr(c.top):null,m=[t,e,i],d=[s,r,o],w=c.skip||0;for(let v=0;v<6;v++){if(w&1<<v)continue;const L=bc[v],M=u.n,E=L.n[0]*this.cos+L.n[2]*this.sin,I=-L.n[0]*this.sin+L.n[2]*this.cos,A=c.flat?1:Ob[v],S=v===2&&_?_:[f,p,g];for(let D=0;D<4;D++){const Z=L.c[D],B=Z[0]?d[0]:m[0],q=Z[1]?d[1]:m[1],ot=Z[2]?d[2]:m[2];u.pos.push(this.wx(B,ot),this.oy+q,this.wz(B,ot)),u.nor.push(E,L.n[1],I);const it=[B,q,ot];u.uv.push(it[L.uv[0]]*h*(L.n[0]<0||L.n[2]>0?1:-1),it[L.uv[1]]*h),u.col.push(S[0]*A,S[1]*A,S[2]*A)}u.idx.push(M,M+1,M+2,M,M+2,M+3),u.n+=4}(c.solid!=null?c.solid:!kb.has(c.mat)&&(s-t>=.45||o-i>=.45)&&r-e>=.3)&&this.world&&this.collider(t,e,i,s,r,o)}boxC(t,e,i,s,r,o,a,l){this.box(t-s/2,e,i-o/2,t+s/2,e+r,i+o/2,a,l)}collider(t,e,i,s,r,o){if(!this.world)return;const a=[this.wx(t,i),this.wx(s,i),this.wx(t,o),this.wx(s,o)],l=[this.wz(t,i),this.wz(s,i),this.wz(t,o),this.wz(s,o)];this.world.add({x0:Math.min(...a),x1:Math.max(...a),z0:Math.min(...l),z1:Math.max(...l),y0:this.oy+e,y1:this.oy+r},this.owner)}platform(t){this.world&&this.world.addPlatform(t,this.owner)}rbox(t,e,i,s,r,o,a,l,c,u,h){const f=this._opt(h),p=this.bucket(f.mat),g=(this.mats[f.mat]||this.mats.block).uv,[_,m,d]=lr(u),w=new ks().setFromEuler(new kn(a,l,c,"YXZ")),y=new V,v=new V;for(let L=0;L<6;L++){const M=bc[L],E=p.n;v.set(M.n[0],M.n[1],M.n[2]).applyQuaternion(w);const I=v.x*this.cos+v.z*this.sin,A=-v.x*this.sin+v.z*this.cos,S=f.flat?1:.75+.25*Math.max(0,v.y)+.12*Math.abs(v.x);for(let D=0;D<4;D++){const Z=M.c[D];y.set((Z[0]-.5)*s,(Z[1]-.5)*r,(Z[2]-.5)*o).applyQuaternion(w);const B=t+y.x,q=e+y.y,ot=i+y.z;p.pos.push(this.wx(B,ot),this.oy+q,this.wz(B,ot)),p.nor.push(I,v.y,A);const it=[(Z[0]-.5)*s,(Z[1]-.5)*r,(Z[2]-.5)*o];p.uv.push(it[M.uv[0]]*g,it[M.uv[1]]*g),p.col.push(_*S,m*S,d*S)}p.idx.push(E,E+1,E+2,E,E+2,E+3),p.n+=4}if(f.solid&&this.world){const L=Math.max(s,o)/2;this.collider(t-L,e-r/2,i-L,t+L,e+r/2,i+L)}}beam(t,e,i,s,r,o,a,l,c){const u=s-t,h=r-e,f=o-i,p=Math.hypot(u,h,f);if(p<1e-4)return;const g=this._opt(c),_=this.bucket(g.mat),[m,d,w]=lr(l),y=new V(u/p,h/p,f/p),v=new ks().setFromUnitVectors(new V(0,1,0),y),L=new V,M=new V,E=(t+s)/2,I=(e+r)/2,A=(i+o)/2,S=g.tz||a;for(let D=0;D<6;D++){if((D===2||D===3)&&g.noCaps)continue;const Z=bc[D],B=_.n;M.set(Z.n[0],Z.n[1],Z.n[2]).applyQuaternion(v);const q=M.x*this.cos+M.z*this.sin,ot=-M.x*this.sin+M.z*this.cos,it=.78+.22*Math.max(0,M.y)+.1*Math.abs(M.x);for(let ct=0;ct<4;ct++){const j=Z.c[ct];L.set((j[0]-.5)*a,(j[1]-.5)*p,(j[2]-.5)*S).applyQuaternion(v);const yt=E+L.x,bt=I+L.y,Ct=A+L.z;_.pos.push(this.wx(yt,Ct),this.oy+bt,this.wz(yt,Ct)),_.nor.push(q,M.y,ot),_.uv.push(j[0]*.3,j[1]*p*.3),_.col.push(m*it,d*it,w*it)}_.idx.push(B,B+1,B+2,B,B+2,B+3),_.n+=4}}prism(t,e,i,s,r,o,a,l,c){const u=this._opt(c),h=this.bucket(u.mat),f=(this.mats[u.mat]||this.mats.block).uv,[p,g,_]=lr(l),m=u.rot||0,d=u.rx1!=null?u.rx1:r,w=u.rz1!=null?u.rz1:o,y=[],v=[];for(let M=0;M<a;M++){const E=m+M/a*Math.PI*2;y.push([t+Math.cos(E)*r,e+Math.sin(E)*o]),v.push([t+Math.cos(E)*d,e+Math.sin(E)*w])}let L=0;for(let M=0;M<a;M++){const E=y[M],I=y[(M+1)%a],A=v[M],S=v[(M+1)%a],D=I[0]-E[0],Z=I[1]-E[1],B=Math.hypot(D,Z);let q=Z/B,ot=-D/B;const it=q*this.cos+ot*this.sin,ct=-q*this.sin+ot*this.cos,j=h.n,yt=.82+.12*Math.abs(q),bt=[[E[0],i,E[1]],[I[0],i,I[1]],[S[0],s,S[1]],[A[0],s,A[1]]],Ct=[L,L+B,L+B,L];bt.forEach((Ft,jt)=>{h.pos.push(this.wx(Ft[0],Ft[2]),this.oy+Ft[1],this.wz(Ft[0],Ft[2])),h.nor.push(it,0,ct),h.uv.push(Ct[jt]*f,Ft[1]*f),h.col.push(p*yt,g*yt,_*yt)}),L+=B,h.idx.push(j,j+2,j+1,j,j+3,j+2),h.n+=4}if(!u.open){const M=u.top!=null?lr(u.top):[p,g,_];for(const[E,I,A]of[[s,v,1],[i,y,-1]]){if(A<0&&u.noBottom)continue;const S=h.n;h.pos.push(this.wx(t,e),this.oy+E,this.wz(t,e)),h.nor.push(0,A,0),h.uv.push(t*f,e*f),h.col.push(M[0],M[1],M[2]);for(const D of I)h.pos.push(this.wx(D[0],D[1]),this.oy+E,this.wz(D[0],D[1])),h.nor.push(0,A,0),h.uv.push(D[0]*f,D[1]*f),h.col.push(M[0],M[1],M[2]);for(let D=0;D<a;D++){const Z=S+1+D,B=S+1+(D+1)%a;A>0?h.idx.push(S,B,Z):h.idx.push(S,Z,B)}h.n+=a+1}}if(u.solid!==!1&&this.world&&s-i>.3){const M=Math.max(r,o)*(a<=8?.85:.8);this.collider(t-M,i,e-M,t+M,s,e+M)}}gableRoof(t,e,i,s,r,o,a,l={}){const c=Math.max(2,Math.round(o/(l.step||.5))),u=o/c,h=(s-i)/2/c,f=l.over!=null?l.over:.6;for(let p=0;p<c;p++){const g=i-f+h*p+(p?f*(p/c):0),_=s+f-h*p-(p?f*(p/c):0);this.box(t-(l.ox||0),r+p*u,g,e+(l.ox||0),r+(p+1)*u,_,p===0&&l.eave?l.eave:a,{mat:l.mat||"roof",solid:l.solid!=null?l.solid:p===0})}return r+o}hipRoof(t,e,i,s,r,o,a,l={}){const c=Math.max(2,Math.round(o/(l.step||.5))),u=o/c,h=l.over!=null?l.over:.6;for(let f=0;f<c;f++){const p=1-f/c,g=(i+h*2)*p+(l.minW||.6)*(1-p),_=(s+h*2)*p+(l.minD||.6)*(1-p);this.boxC(t,r+f*u,e,g,u,_,f===0&&l.eave?l.eave:a,{mat:l.mat||"roof",solid:f===0})}return r+o}sign(t,e,i,s,r,o=0,a={}){const{mat:l,aspect:c}=Fb(t,a),u=a.w||r*c,h=new us(u,r),f=new oe(h,l);if(f.position.copy(this.toWorld(e,i,s)),f.rotation.y=this.rot+o,f.userData.sign=!0,this.extras.push(f),a.back){const p=f.clone();p.rotation.y+=Math.PI,this.extras.push(p)}return f}add(t){return this.extras.push(t),t}build(t=!0){const e=new He;for(const i in this.buckets){const s=this.buckets[i];if(!s.n)continue;const r=new We;r.setAttribute("position",new Ie(s.pos,3)),r.setAttribute("normal",new Ie(s.nor,3)),r.setAttribute("uv",new Ie(s.uv,2)),r.setAttribute("color",new Ie(s.col,3)),r.setIndex(s.n>65e3?new fl(s.idx,1):new hl(s.idx,1)),r.computeBoundingSphere();const o=new oe(r,(this.mats[i]||this.mats.block).mat);o.castShadow=t&&i!=="glass"&&i!=="lamp"&&i!=="neon"&&i!=="glow",o.receiveShadow=t,o.userData.matKey=i,e.add(o)}for(const i of this.extras)e.add(i);return this.buckets={},this.extras=[],e}}function uh(n){n.traverse(t=>{t.geometry&&t.geometry.dispose()}),n.parent&&n.parent.remove(n)}function Bb(){const n=[],t=[];let e=0;const i=(a,l)=>[a,-l];for(const a of gl){const l=a.pts;for(let c=0;c<l.length;c++){const u=l[Math.max(0,c-1)],h=l[Math.min(l.length-1,c+1)];let f=h.x-u.x,p=h.z-u.z;const g=Math.hypot(f,p)||1;f/=g,p/=g;const _=-p,m=f,d=l[c].w/2,w=i(l[c].x+_*d,l[c].z+m*d),y=i(l[c].x-_*d,l[c].z-m*d);n.push(w[0],w[1],0,y[0],y[1],0),c>0&&t.push(e-2,e-1,e,e-1,e+1,e),e+=2}for(const c of l){const u=i(c.x,c.z),h=e;n.push(u[0],u[1],0),e++;const f=16;for(let p=0;p<f;p++){const g=p/f*Math.PI*2;n.push(u[0]+Math.cos(g)*c.w/2,u[1]+Math.sin(g)*c.w/2,0),e++}for(let p=0;p<f;p++)t.push(h,h+1+p,h+1+(p+1)%f)}}const s=new We;s.setAttribute("position",new Ie(n,3));const r=s.attributes.position.array;for(let a=0;a<t.length;a+=3){const l=t[a]*3,c=t[a+1]*3,u=t[a+2]*3;if((r[c]-r[l])*(r[u+1]-r[l+1])-(r[c+1]-r[l+1])*(r[u]-r[l])<0){const f=t[a+1];t[a+1]=t[a+2],t[a+2]=f}}s.setIndex(t),s.computeVertexNormals();const o=[];for(let a=0;a<r.length;a+=3)o.push(r[a]/40,r[a+1]/40);return s.setAttribute("uv",new Ie(o,2)),s.computeBoundingSphere(),s}const Vb={name:"XianWater",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uCam:{value:new V},uFogColor:{value:new Nt},uFogDensity:{value:6e-4},uDeep:{value:new Nt(1919578)}},vertexShader:`
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
    }`};class Hb{constructor(t,e=!0){this.scene=t,this.geo=Bb(),this.reflect=e,this.create()}create(){if(this.mesh&&(this.scene.remove(this.mesh),this.mesh.dispose&&this.mesh.dispose()),this.reflect){const t=Math.min(1,1024/window.innerWidth),e=new ml(this.geo,{textureWidth:Math.floor(window.innerWidth*.5*t*(window.devicePixelRatio||1)),textureHeight:Math.floor(window.innerHeight*.5*t*(window.devicePixelRatio||1)),color:12110032,clipBias:.003,shader:Vb});e.material.uniforms.color.value=new Nt(12110032),this.uniforms=e.material.uniforms,this.mesh=e}else{const t=ch(),e=new Pa({color:3107456,specular:8956620,shininess:60,transparent:!0,opacity:.92,map:t.water});this.mesh=new oe(this.geo,e),this.uniforms=null}this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=lo,this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,this.scene.add(this.mesh)}setReflect(t){t!==this.reflect&&(this.reflect=t,this.create())}update(t,e,i,s){this.uniforms?(this.uniforms.uTime.value=t,this.uniforms.uCam.value.copy(e.position),i&&(this.uniforms.uFogColor.value.copy(i.color),this.uniforms.uFogDensity.value=i.density),this.uniforms.uDeep.value.setRGB(.05+.04*(1-s),.14*(1-s)+.03,.2*(1-s)+.06)):this.mesh.material.map&&this.mesh.material.map.offset.set(t*.01,t*.007)}}function Gb(n){const t=ch(),e=[],i=[],s=[];let r=0;const o=new Qe(0,0,0,0,null),a=[],l=[];let c=0;_l.forEach((d,w)=>{const y=d.pts;let v=0;for(let L=1;L<y.length;L++){const M=y[L-1],E=y[L],I=Math.hypot(E.x-M.x,E.z-M.z),A=Math.max(1,Math.ceil(I/16)),S=(E.x-M.x)/I,D=(E.z-M.z)/I,Z=-D,B=S,q=d.w/2;for(let ot=0;ot<A;ot++){const it=ot/A,ct=(ot+1)/A,j=M.x+(E.x-M.x)*it,yt=M.z+(E.z-M.z)*it,bt=M.x+(E.x-M.x)*ct,Ct=M.z+(E.z-M.z)*ct,Ft=(j+bt)/2,jt=(yt+Ct)/2,K=!!xc(Ft,jt,2)||!!xc(j,yt)||!!xc(bt,Ct),F=K?dr+.03:.04+w*.0015,z=.6,pt=j-S*z,at=yt-D*z,W=bt+S*z,k=Ct+D*z;e.push(pt+Z*q,F,at+B*q,pt-Z*q,F,at-B*q,W+Z*q,F,k+B*q,W-Z*q,F,k-B*q);const Et=I/A,T=v/10,U=(v+Et)/10;i.push(0,T,1,T,0,U,1,U),s.push(r,r+2,r+1,r+1,r+2,r+3),r+=4,v+=Et;const C=q+2.2,ft=F-.015;if(a.push(pt+Z*C,ft,at+B*C,pt-Z*C,ft,at-B*C,W+Z*C,ft,k+B*C,W-Z*C,ft,k-B*C),l.push(c,c+2,c+1,c+1,c+2,c+3),c+=4,K){const X=Math.atan2(S,D),J=Et+1.2;o.rbox(Ft,dr-.9,jt,q*2+3,1.8,J,0,X,0,9079428);for(const nt of[-1,1])o.rbox(Ft+Z*(q+1.3)*nt,dr+.55,jt+B*(q+1.3)*nt,.35,1.1,J,0,X,0,13158592),o.rbox(Ft+Z*(q+1.3)*nt,dr+1.15,jt+B*(q+1.3)*nt,.25,.18,J,0,X,0,15786144,{mat:"lamp"});Math.floor(v/16)%3===0&&o.rbox(Ft,-4,jt,q*2-2,6,3,0,X,0,8026740)}}}});const u=new We;u.setAttribute("position",new Ie(e,3)),u.setAttribute("uv",new Ie(i,2)),u.setIndex(s),u.computeVertexNormals();const h=t.road,f=new hs({map:h,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),p=new oe(u,f);p.receiveShadow=!0,p.frustumCulled=!1;const g=new We;g.setAttribute("position",new Ie(a,3)),g.setIndex(l),g.computeVertexNormals();const _=new oe(g,new hs({color:11840928,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));_.receiveShadow=!0,_.frustumCulled=!1;const m=new He;return m.add(_,p,o.build(!1)),n.add(m),m}const Re={wood:7028514,darkWood:4860438,greyBrick:8226176,stone:12104872,granite:10131343,glazedGreen:3111509,leaf:4033082,darkLeaf:2911022,kapok:14103338,trunk:6965808,pave:12367530};function Wb(n,t,e,i,s=1,r=1){const o=Un(r);n.boxC(t,e,i,1.4*s,4*s,1.4*s,Re.trunk,"wood");for(let a=0;a<4;a++){const l=o()*Math.PI*2,c=2+o()*2.5;n.boxC(t+Math.cos(l)*c*s,e,i+Math.sin(l)*c*s,.25,4.5*s,.25,8019008,{mat:"wood",solid:!1})}n.boxC(t,e+3.5*s,i,8*s,2.5*s,7*s,Re.darkLeaf,"leaf"),n.boxC(t+.5*s,e+5.5*s,i-.5*s,6*s,1.8*s,6*s,Re.leaf,"leaf"),n.boxC(t-1*s,e+4*s,i+1,4*s,1.5*s,4*s,4889152,"leaf")}function Xb(n,t,e,i,s=1,r=!0){n.boxC(t,e,i,.7*s,7*s,.7*s,8022616,"wood");for(const[o,a,l,c]of[[0,5,0,5],[0,7,0,3.6],[1.2,6,.6,2.2],[-1.2,6.2,-.6,2.2]])n.boxC(t+o*s,e+a*s,i+l*s,c*s,1*s,c*s,r?Re.kapok:Re.leaf,"leaf"),r&&n.boxC(t+o*s,e+a*s+1*s,i+l*s,c*.6*s,.5*s,c*.6*s,15226682,"leaf");n.boxC(t,e+3*s,i,3*s,.4*s,.3*s,8022616,{mat:"wood",solid:!1})}function es(n,t,e,i,s=1,r=Re.leaf){n.boxC(t,e,i,.5*s,3*s,.5*s,Re.trunk,"wood"),n.boxC(t,e+2.2*s,i,3.2*s,2.6*s,3.2*s,r,"leaf"),n.boxC(t,e+4.8*s,i,2*s,1*s,2*s,r,"leaf")}function Ao(n,t,e,i,s=1){n.boxC(t,e,i,.5*s,2*s,.5*s,Re.trunk,"wood"),n.boxC(t,e+1.5*s,i,3.4*s,1.6*s,3.4*s,2776624,"leaf"),n.boxC(t,e+3.1*s,i,2.4*s,1.6*s,2.4*s,3107380,"leaf"),n.boxC(t,e+4.7*s,i,1.2*s,1.4*s,1.2*s,3437112,"leaf")}function vl(n,t,e,i,s=4.5,r="modern"){r==="old"?(n.boxC(t,e,i,.25,s,.25,2763306,{solid:!1}),n.boxC(t,e+s,i,.7,.8,.7,16769184,"lamp"),n.boxC(t,e+s+.8,i,.9,.2,.9,2763306,{solid:!1})):(n.boxC(t,e,i,.22,s,.22,6711920,{solid:!1}),n.box(t-.1,e+s-.2,i-.1,t+1.2,e+s,i+.1,6711920,{solid:!1}),n.box(t+.6,e+s-.35,i-.2,t+1.3,e+s-.15,i+.2,16773832,"lamp"))}function Sm(n,t,e,i,s=9071162,r=1,o=0){n.boxC(t,e,i,1.2*r,.9*r,1.2*r,Re.granite);const a=e+.9*r;n.boxC(t-.17*r,a,i,.3*r,.9*r,.3*r,s,{solid:!1}),n.boxC(t+.17*r,a,i,.3*r,.9*r,.3*r,s,{solid:!1}),n.boxC(t,a+.9*r,i,.7*r,.9*r,.38*r,s,{solid:!1}),n.boxC(t,a+1.8*r,i,.5*r,.5*r,.5*r,s,{solid:!1}),n.boxC(t-.45*r,a+.95*r,i,.2*r,.85*r,.25*r,s,{solid:!1}),o===1?n.boxC(t+.45*r,a+1.6*r,i,.2*r,.8*r,.25*r,s,{solid:!1}):n.boxC(t+.45*r,a+.95*r,i,.2*r,.85*r,.25*r,s,{solid:!1})}function wm(n,t,e,i,s=1){n.boxC(t,e,i,1.2,.6,1.4,Re.granite),n.boxC(t,e+.6,i,.9,.7,1.2,11052186,{solid:!1}),n.boxC(t,e+1.3,i+.3*s,.9,.8,.8,11578530,{solid:!1}),n.boxC(t,e+1.4,i+.75*s,.5,.4,.15,9078396,{solid:!1})}function cd(n,t,e,i,s,r,o=1,a=14210248,l=1.5,c={}){const u=Math.hypot(i-t,s-e),h=Math.max(1,Math.round(u/l));for(let p=0;p<=h;p++){const g=p/h;n.boxC(t+(i-t)*g,r,e+(s-e)*g,.25,o,.25,a,{solid:!1})}const f=.15;n.box(Math.min(t,i)-f,r+o-.15,Math.min(e,s)-f,Math.max(t,i)+f,r+o,Math.max(e,s)+f,a,{solid:!1}),c.solid!==!1&&n.collider(Math.min(t,i)-f,r,Math.min(e,s)-f,Math.max(t,i)+f,r+o+.6,Math.max(e,s)+f)}function yn(n,t,e,i,s,r=0,o=Re.pave,a=.12){n.box(t,r,e,i,r+a,s,o,{mat:"stone",solid:!1})}function $b(n,t,e,i=0,s=""){n.box(t-3,0,e-.8,t+3,.15,e+.8,10132122,{solid:!1});for(const r of[-2.8,2.8])n.boxC(t+r,0,e-.6,.15,2.8,.15,3828378,{solid:!1});n.box(t-3,2.8,e-.9,t+3,3,e+.9,3828378,{solid:!1}),n.box(t-2.8,.4,e-.7,t+2.8,2.6,e-.6,10471136,{mat:"glass",solid:!1}),n.box(t-2.2,.5,e-.5,t+2.2,.7,e-.1,9079434,{solid:!1}),n.boxC(t+3.4,0,e,.15,3.2,.15,6710886,{solid:!1}),n.boxC(t+3.4,3.2,e,1.1,.8,.12,2779824,{solid:!1}),s&&n.sign(s,t,3.35,e+.95,.6,0,{bg:"#2a6ab0",fg:"#ffffff",px:48})}function qb(n,t,e,i){n.box(t-2.5,0,e-3,t+2.5,.2,e+3,9079434,{solid:!1}),n.box(t-2.5,.2,e-3,t-2.2,3.2,e+3,13158600),n.box(t+2.2,.2,e-3,t+2.5,3.2,e+3,13158600),n.box(t-2.5,.2,e-3,t+2.5,3.2,e-2.7,13158600),n.box(t-2.8,3.2,e-3.3,t+2.8,3.6,e+3.3,12067370),n.box(t-1.8,.21,e-2.2,t+1.8,.25,e+2.6,3355443,{solid:!1}),n.boxC(t+3.2,0,e+2.8,.3,4.2,.3,8947848,{solid:!1}),n.boxC(t+3.2,4.2,e+2.8,1.2,1.2,.3,12067370,"neon"),n.sign("M",t+3.2,4.8,e+2.97,.9,0,{bg:"#b8222a",fg:"#ffffff",px:64,glow:!0}),n.sign(i,t,3.4,e+3.32,.4,0,{bg:"#b8222a",fg:"#ffffff",px:48})}function Em(n,t,e,i,s,r,o=Re.granite,a=Re.glazedGreen,l={}){const c=[-i/2,-i/6,i/6,i/2];for(const u of c)n.boxC(t+u,0,e,.9,s,.9,o),n.boxC(t+u,0,e,1.4,1,1.4,o);n.box(t-i/2-.5,s-1.5,e-.4,t+i/2+.5,s-.8,e+.4,o,{solid:!1}),n.box(t-i/6,s-3.2,e-.35,t+i/6,s-1.5,e+.35,o,{solid:!1}),n.hipRoof(t,e,i/3+1.2,1.6,s,1.3,a,{over:.5,eave:a,minW:i/3}),n.hipRoof(t-i/3,e,i/3,1.4,s-.9,1,a,{over:.4,minW:i/4}),n.hipRoof(t+i/3,e,i/3,1.4,s-.9,1,a,{over:.4,minW:i/4}),r&&(n.sign(r,t,s-2.35,e+.4,1.3,0,{bg:"#1e3a5a",fg:"#ffd76a",border:"#d9a628",...l}),n.sign(r,t,s-2.35,e-.4,1.3,Math.PI,{bg:"#1e3a5a",fg:"#ffd76a",border:"#d9a628",...l}))}const ke=240,wn=4,xi=24,ud=Fr(34.205,108.975),hd=Fr(34.215,108.89),fd=Fr(34.34,108.95);function Yb(n,t,e){const i=fs(n,t),s=Math.hypot(n-ud.x,t-ud.z),r=fs(n,t);if(s<380&&r==="yanta")return{type:"cbd",dens:.62,hmin:28,hmax:90};if(Math.hypot(n-hd.x,t-hd.z)<420)return{type:"office",dens:.8,hmin:25,hmax:90};if(Math.hypot(n-fd.x,t-fd.z)<390)return{type:"office",dens:.65,hmin:20,hmax:72};const o=e>2600;switch(i){case"yanta":return{type:"resi",dens:.7,hmin:16,hmax:52};case"beilin":return{type:"old",dens:.78,hmin:5,hmax:18};case"lianhu":return{type:"old",dens:.82,hmin:5,hmax:16};case"xincheng":return{type:"resi",dens:.72,hmin:12,hmax:42};case"weiyang":return{type:"resi",dens:.58,hmin:12,hmax:44};case"lintong":return o?{type:"village",dens:.3,hmin:4,hmax:10}:{type:"resi",dens:.45,hmin:10,hmax:30};case"changan":return{type:"village",dens:.28,hmin:4,hmax:12};case"baqiao":return{type:"resi",dens:.45,hmin:10,hmax:38};default:return{type:"resi",dens:.5,hmin:10,hmax:30}}}const _a=[14208960,13220256,14735044,12101776,13680816,11049098,14998732,12626064],dd=[15262940,14209220,13159632,14735560,13945016,15789284,12107976,15260872],va=[9089224,10405084,8034480,11585752,6982312,8956088];class jb{constructor(t,e,i){this.scene=t,this.world=e,this.excl=i,this.chunks=new Map,this.queue=[],this.viewR=1250,this.detailR=560,this.shadows=!0}excluded(t,e,i=0){for(const s of this.excl)if(s.r!=null){if((t-s.x)**2+(e-s.z)**2<(s.r+i)**2)return s}else if(Math.abs(t-s.x)<s.hw+i&&Math.abs(e-s.z)<s.hd+i)return s;return null}update(t,e,i=1){const s=Math.ceil(this.viewR/ke),r=Math.floor(t/ke),o=Math.floor(e/ke),a=[];for(let u=-s;u<=s;u++)for(let h=-s;h<=s;h++){const f=r+u,p=o+h,g=(f+.5)*ke,_=(p+.5)*ke,m=Math.hypot(g-t,_-e);if(m>this.viewR+ke*.7)continue;const d=f+","+p,w=m<this.detailR,y=this.chunks.get(d);(!y||w&&!y.detail)&&a.push({cx:f,cz:p,key:d,d:m,detail:w})}a.sort((u,h)=>u.d-h.d);let l=0;const c=performance.now();for(const u of a){if(l>=i&&performance.now()-c>6)break;const h=this.chunks.get(u.key);h&&this.disposeChunk(u.key,h),this.chunks.set(u.key,this.buildChunk(u.cx,u.cz,u.detail)),l++}for(const[u,h]of this.chunks){const f=(h.cx+.5)*ke,p=(h.cz+.5)*ke;Math.hypot(f-t,p-e)>this.viewR+ke*1.5&&this.disposeChunk(u,h)}return a.length-l}disposeChunk(t,e){uh(e.group),this.world.removeOwner("chunk:"+t),this.chunks.delete(t)}buildChunk(t,e,i){const r="chunk:"+(t+","+e),o=t*ke,a=e*ke,l=new He;l.add(this.buildTerrain(o,a,r));const c=new Qe(0,0,0,0,this.world,r);return this.buildLots(c,o,a,i),i&&this.buildStreets(c,o,a),l.add(c.build(this.shadows)),this.scene.add(l),{cx:t,cz:e,group:l,detail:i}}buildTerrain(t,e,i){const s=ke/wn,r=new Int16Array((s+2)*(s+2)),o=new Uint8Array((s+2)*(s+2));let a=!0;for(let u=-1;u<=s;u++)for(let h=-1;h<=s;h++){const f=t+(u+.5)*wn,p=e+(h+.5)*wn,g=ai(f,p);let _=g?-3:Oe(f,p);const m=(u+1)*(s+2)+(h+1);r[m]=_,o[m]=g?1:0,_!==0&&(a=!1)}const l=new Qe(0,0,0,0,null);if(l.jitter=!1,a){const u=Da(t+ke/2,e+ke/2);l.box(t,-2,e,t+ke,0,e+ke,u?6989898:10131084,{mat:u?"grass":"stone",skip:59})}else{const u=(h,f)=>(h+1)*(s+2)+(f+1);for(let h=0;h<s;h++)for(let f=0;f<s;f++){const p=u(h,f),g=r[p],_=t+h*wn,m=e+f*wn,d=_+wn/2,w=m+wn/2;let y,v,L;if(o[p])y=6974034,v=5921352,L="stone";else if(g>=2){const E=Fl(h+t,f+e,5);y=g>110&&E<.4?9079428:E<.1?5212724:6265406,v=8018490,L="grass"}else o[u(h-1,f)]||o[u(h+1,f)]||o[u(h,f-1)]||o[u(h,f+1)]?(y=9077880,L="stone"):Da(d,w)?(y=6989898,L="grass"):(y=10131084,L="stone"),v=8025192;l.box(_,g-1,m,_+wn,g,m+wn,y,{mat:L,solid:!1,skip:59});const M=[[1,0,0],[-1,0,1],[0,1,4],[0,-1,5]];for(const[E,I,A]of M){const S=r[u(h+E,f+I)];if(S<g){const D=E===1?_+wn:_,Z=I===1?m+wn:m;E?l.box(D-.001,S,m,D+.001,g,m+wn,v,{mat:"block",solid:!1,skip:~(1<<A)&63}):l.box(_,S,Z-.001,_+wn,g,Z+.001,v,{mat:"block",solid:!1,skip:~(1<<A)&63})}}}}const c=l.build(!1);return c.traverse(u=>{u.isMesh&&(u.receiveShadow=this.shadows,u.castShadow=!1)}),c}buildLots(t,e,i,s){const r=ke/xi;for(let o=0;o<r;o++)for(let a=0;a<r;a++){const l=e+(o+.5)*xi,c=i+(a+.5)*xi,u=Un(Math.floor(Fl(Math.floor(l),Math.floor(c),77)*1e9)),h=Math.hypot(l,c),f=Oe(l,c);if(this.excluded(l,c,xi*.5))continue;let p=!1;for(const[_,m]of[[0,0],[-10,-10],[10,-10],[-10,10],[10,10]])ai(l+_,c+m)&&(p=!0);if(p||yr(l,c,xi*.5+1))continue;if(f>=2){if(!s&&u()<.5)continue;const _=2+Math.floor(u()*3);for(let m=0;m<_;m++){const d=l+(u()-.5)*xi*.8,w=c+(u()-.5)*xi*.8,y=Oe(d,w);y<1||(u()<.5?Ao(t,d,y,w,1+u()*.6):es(t,d,y,w,1.1+u()*.6,u()<.5?4028980:4885050))}continue}if(Da(l,c)){if(s&&u()<.7){const _=l+(u()-.5)*12,m=c+(u()-.5)*12;u()<.3?Xb(t,_,0,m,.9):Wb(t,_,0,m,.8,Math.floor(u()*99))}continue}const g=Yb(l,c,h);if(u()>g.dens){s&&u()<.5&&(t.box(l-9,0,c-9,l+9,.3,c+9,6989898,{mat:"grass",solid:!1}),es(t,l+(u()-.5)*8,.3,c+(u()-.5)*8,.9));continue}this.building(t,l,c,g,u,s)}}building(t,e,i,s,r,o){const a=10+Math.floor(r()*9),l=10+Math.floor(r()*9),c=e+(r()-.5)*(xi-a-3),u=i+(r()-.5)*(xi-l-3),h=c-a/2,f=c+a/2,p=u-l/2,g=u+l/2;let _=Math.round(s.hmin+Math.pow(r(),1.6)*(s.hmax-s.hmin));if(s.type==="cbd"){const w=va[Math.floor(r()*va.length)];t.box(h-1,0,p-1,f+1,6,g+1,12106944,"window");const y=r();if(y<.35){const v=Math.round(_*.7);t.box(h,6,p,f,v,g,w,"curtain"),t.box(h+1.5,v,p+1.5,f-1.5,_,g-1.5,w,"curtain")}else if(y<.6)t.prism(c,u,6,_,a/2,l/2,8,w,{mat:"curtain",rot:Math.PI/8});else{t.box(h,6,p,f,_,g,w,"curtain");for(let v=h+2;v<f;v+=3)t.box(v-.2,6,g,v+.2,_,g+.3,15265008,{solid:!1})}t.box(h+2,_,p+2,f-2,_+2,g-2,13685976),r()<.5&&(t.boxC(c,_+2,u,.3,6,.3,14540253,{solid:!1}),t.boxC(c,_+8,u,.6,.6,.6,16724016,"lamp"));return}if(s.type==="office"){const w=va[Math.floor(r()*va.length)];t.box(h,0,p,f,_,g,w,r()<.6?"curtain":"window"),t.box(h-.3,_,p-.3,f+.3,_+1,g+.3,14211288),o&&this.roofStuff(t,c,u,a,l,_+1,r);return}if(s.type==="resi"){const w=dd[Math.floor(r()*dd.length)];if(t.box(h,0,p,f,_,g,w,"window"),o){for(let y=3;y<_-1;y+=3)t.box(h-.3,y,g,f+.3,y+.3,g+.6,15921906,{solid:!1});t.box(h-.2,0,p-.2,f+.2,4,g+.2,9079440,{mat:"window"}),r()<.5&&t.box(h+1,3,g+.2,f-1,3.8,g+.4,[12597547,2779824,2787914,14715424][Math.floor(r()*4)],"neon")}t.box(h-.2,_,p-.2,f+.2,_+.8,g+.2,12104876),o&&this.roofStuff(t,c,u,a,l,_+.8,r);return}if(s.type==="old"){const w=1+Math.floor(r()*3),y=a/w;for(let v=0;v<w;v++){const L=Math.max(4,_+Math.floor((r()-.5)*6)),M=_a[Math.floor(r()*_a.length)],E=h+v*y,I=E+y;t.box(E,0,p,I,L,g,M,r()<.25?"brick":"window"),t.box(E-.1,L,p-.1,I+.1,L+.6,g+.1,10127992),o&&(r()<.4&&t.box(E+.5,L+.6,p+1,I-.5,L+2.2,p+3,8030842,{solid:!1}),r()<.5&&t.box(E+.5,2.8,g,I-.5,3.4,g+1.2,[2779722,9054746,2771594][Math.floor(r()*3)],{solid:!1}))}return}const m=_a[Math.floor(r()*_a.length)],d=Math.max(4,_);t.box(h+2,0,p+2,f-2,d,g-2,m,"window"),r()<.5?t.gableRoof(h+2,f-2,p+2,g-2,d,2.2,r()<.5?9062970:5921376,{over:.4}):t.box(h+1.8,d,p+1.8,f-1.8,d+.6,g-1.8,10127992),o&&r()<.6&&es(t,f-1,0,g-1,.8)}roofStuff(t,e,i,s,r,o,a){if(a()<.6&&t.boxC(e+(a()-.5)*(s-4),o,i+(a()-.5)*(r-4),2,1.4,2,10526880,{solid:!1}),a()<.4){const l=e+(a()-.5)*(s-4),c=i+(a()-.5)*(r-4);for(const[u,h]of[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]])t.boxC(l+u,o,c+h,.15,1.6,.15,6710886,{solid:!1});t.prism(l,c,o+1.6,o+3.2,1,1,8,5929632,{solid:!1})}a()<.3&&t.box(e-s/2+1,o,i-1,e-s/2+3,o+1,i+1,13684944,{solid:!1})}buildStreets(t,e,i){for(let r=e+14/2;r<e+ke;r+=14)for(let o=i+14/2;o<i+ke;o+=14){const a=yr(r,o,4);if(!a||a.line.ped)continue;const l=a.seg,c=l.bx-l.ax,u=l.bz-l.az,h=Math.hypot(c,u)||1,f=-u/h,p=c/h,g=Math.max(0,Math.min(1,((r-l.ax)*c+(o-l.az)*u)/(h*h))),_=l.ax+c*g,m=l.az+u*g,d=(r-_)*f+(o-m)*p>0?1:-1,w=a.hw-4+2.6,y=_+f*w*d,v=m+p*w*d;if(ai(y,v)||this.excluded(y,v,2)||Oe(y,v)>0||yr(y,v,-1.5))continue;const L=Fl(Math.floor(y),Math.floor(v),3);L<.18?Ao(t,y,0,v,.85):L<.62?es(t,y,0,v,.9,L<.4?5147194:12950834):L<.74?es(t,y,0,v,.75,4028980):L<.85&&vl(t,y,0,v,5)}}}const Sc=9268047,Kb=3945261,Tm=4015430,Zb=10301222,Am=14065966,Jb=10782567;function Ge(n,t,e,i,s,r,o){n.box(t-i/2-1,0,e-s/2-1,t+i/2+1,.7,e+s/2+1,Re.granite);for(const a of[t-i/2+1.2,t+i/2-1.2])for(const l of[e-s/2+1.2,e+s/2-1.2])n.boxC(a,.7,l,.65,r-.7,.65,Zb);n.box(t-i/2,.7,e-s/2,t+i/2,r,e+s/2,14073226),n.gableRoof(t-i/2-1.5,t+i/2+1.5,e-s/2-1.3,e+s/2+1.3,r,3.2,Tm,{over:1.2}),n.boxC(t,1,e+s/2+.1,Math.min(4,i*.3),2.8,.3,Re.darkWood,{mat:"wood",solid:!1}),o&&n.sign(o,t,r-1,e+s/2+.2,.7,0,{bg:"#5f251f",fg:"#f2d48a"})}function Cm(n,t=7,e=1){n.box(-11*e,0,-11*e,11*e,1.2,11*e,Re.granite);let i=1.2;for(let s=0;s<t;s++){const r=(9.2-s*.72)*e,o=(4.2-Math.min(s,4)*.16)*e;n.box(-r,i,-r,r,i+o,r,Jb),n.box(-r-.7,i+o,-r-.7,r+.7,i+o+.45,r+.7,Kb,{solid:!1}),n.boxC(0,i+1.15,r+.08,1.7,2,.16,3090725,{mat:"wood",solid:!1});for(const a of[-r*.55,r*.55])n.boxC(a,i+o*.55,r+.1,.8,1.2,.12,3419175,{mat:"wood",solid:!1});i+=o+.55}return n.prism(0,0,i,i+4*e,1.1*e,1.1*e,8,Am,{rx1:.2,rz1:.2,mat:"metal",solid:!1}),i}function Qb(n,t){yn(n,-32,-30,32,36,0);const e=Cm(n,7,1);n.sign("大雁塔",0,3,11.25,1.1,0,{bg:"#4a3024",fg:"#f2d48a"});for(const i of[-25,25])for(let s=-24;s<=28;s+=13)es(n,i,.15,s,1.1);t.platform({x0:-7,z0:-7,x1:7,z1:7,y:e+.4}),t.interact({x:0,z:14,r:5,label:"登大雁塔",type:"elevator"}),t.interact({x:0,y:e+.6,z:5,r:8,label:"大雁塔顶层",type:"elevatorTop"}),t.interact({x:10,z:13,r:5,label:"了解大雁塔",type:"info",text:"大雁塔始建于唐永徽三年，是玄奘法师为保存经丝绸之路带回长安的佛经与佛像而主持修建的唐代楼阁式砖塔。"}),t.crowd(0,20,24,10,14)}function tS(n){Cm(n,7,.72)}function eS(n,t){yn(n,-28,-28,28,28),n.box(-13,0,-13,13,9,13,10128760),n.box(-15,9,-15,15,11,15,Re.granite),Ge(n,0,0,24,24,21,"钟楼"),n.gableRoof(-15,15,-15,15,21,5,3232586,{over:1.2}),n.boxC(0,26,0,1,2.6,1,Am,{solid:!1});for(const[e,i]of[[-20,-20],[20,-20],[-20,20],[20,20]])vl(n,e,0,i,6,"old");t.interact({x:0,z:17,r:7,label:"西安钟楼",type:"culture",id:"changancenter"}),t.crowd(0,18,22,10,14)}function nS(n,t){yn(n,-28,-22,28,25),n.box(-16,0,-10,16,10,10,10721154),n.box(-18,10,-12,18,12,12,Re.granite),Ge(n,0,0,30,18,21,"鼓楼"),n.gableRoof(-18,18,-13,13,21,4.5,3232586,{over:1});for(let e=-12;e<=12;e+=4)n.prism(e,12,12.2,14.4,.8,.5,8,11022888,{solid:!1});t.interact({x:0,z:15,r:6,label:"聆听暮鼓",type:"culture",id:"drum"})}function xl(n,t,e,i=!1){yn(n,-85,-22,85,30),n.box(-90,0,-6,90,12,6,Sc),n.box(-92,12,-8,92,14,8,Re.greyBrick);for(let s=-88;s<=88;s+=5)n.box(s,14,-8,s+2.5,16,-6,Sc,{solid:!1}),n.box(s,14,6,s+2.5,16,8,Sc,{solid:!1});n.box(-7,0,-7,7,8,7,2368548,{solid:!1}),Ge(n,0,0,30,18,25,e),n.gableRoof(-18,18,-13,13,25,5,Tm,{over:1});for(let s=0;s<14;s++)n.box(24,s,20-s,31,s+1,22-s,Re.greyBrick);for(const s of[-65,-42,42,65])vl(n,s,14.1,0,3.2,"old");t.platform({x0:-88,z0:-7,x1:88,z1:7,y:14.2}),t.interact({x:20,z:20,r:7,label:`登${e}城墙`,type:"wallUp",topLocal:{x:20,y:14.4,z:0}}),t.interact({x:20,y:14.4,z:0,r:8,label:`从${e}下城`,type:"wallDown",groundLocal:{x:20,y:.3,z:20}}),t.interact({x:0,z:20,r:7,label:i?"永宁门入城仪式":`了解${e}`,type:"culture",id:"citywall"})}function iS(n,t){xl(n,t,"永宁门",!0)}function sS(n,t){xl(n,t,"安远门")}function rS(n,t){xl(n,t,"长乐门")}function oS(n,t){xl(n,t,"安定门")}function aS(n,t){yn(n,-55,-42,55,45),n.box(-50,0,-35,50,19,25,12893872,{mat:"window"}),n.gableRoof(-52,52,-38,28,19,8,6717579,{over:1}),n.sign("秦始皇兵马俑博物馆",0,14,25.2,1.1,0,{bg:"#3d352e",fg:"#e9d7aa"});for(let e=0;e<6;e++)for(let i=0;i<14;i++)Sm(n,-39+i*6,.2,-27+e*7,9138781,.72,i%5===0?1:0);for(const e of[-46,46])wm(n,e,.2,31,1);t.interact({x:0,z:31,r:8,label:"走进一号坑",type:"culture",id:"terracotta"}),t.interact({x:32,z:30,r:4,label:"秦俑文创店",type:"shop",shop:"terracotta"}),t.crowd(0,32,35,8,15)}function lS(n,t){yn(n,-28,-80,28,80,0,12164988);for(let e=-70;e<=70;e+=14){for(const i of[-20,20])vl(n,i,0,e,8,"old"),n.boxC(i,7.8,e,1.4,.8,1.4,16756800,"neon");e%28===0&&Sm(n,0,0,e,9069624,1.5,1)}Ge(n,-42,-45,18,16,12,"长安十二时辰"),Ge(n,42,10,18,16,12,"唐风市集"),n.sign("大唐不夜城",0,7,-76,1.4,0,{bg:"#7b1f27",fg:"#ffd36a",glow:!0}),t.interact({x:0,z:8,r:7,label:"观看盛唐巡游",type:"culture",id:"tangdance"}),t.interact({x:35,z:10,r:4,label:"长安食肆",type:"shop",shop:"nightmarket"}),t.crowd(0,0,24,70,26)}function cS(n,t,e="陕西历史博物馆"){yn(n,-40,-32,40,36),Ge(n,0,-2,58,34,14,e),Ge(n,-28,7,18,24,10),Ge(n,28,7,18,24,10),t.interact({x:0,z:23,r:7,label:"参观唐代壁画珍品",type:"culture",id:"tangart"})}function uS(n,t){yn(n,-60,-65,60,70),Ge(n,0,-24,72,42,28,"含元殿"),Ge(n,-35,28,24,22,15,"宣政殿"),Ge(n,35,28,24,22,15,"紫宸殿");for(const e of[-50,50])for(let i=-45;i<=55;i+=18)Ao(n,e,0,i,1.2);t.interact({x:0,z:5,r:8,label:"大明宫国家遗址公园",type:"culture",id:"tangpalace"})}function hS(n,t){yn(n,-45,-35,45,45),Ge(n,0,-12,36,24,15,"华清宫"),Ge(n,-28,16,18,16,11,"海棠汤"),Ge(n,28,16,18,16,11,"莲花汤"),n.prism(0,24,.2,1.1,11,7,16,7252149,{solid:!1});for(const e of[-38,-20,20,38])es(n,e,0,34,1.2);t.interact({x:0,z:25,r:7,label:"聆听华清宫故事",type:"culture",id:"huaqing"})}function fS(n,t){Em(n,0,7,16,9,"骊山",Re.granite,3232586),n.sign("骊山索道",18,5,0,.7,0,{bg:"#5e3b2b",fg:"#fff3c4"}),n.box(13,0,-6,23,5,6,12429703),t.interact({x:18,z:2,r:4,label:"乘坐骊山索道上山",type:"cable",dir:1})}function dS(n,t){n.box(-12,0,-12,12,1,12,Re.granite),Ge(n,0,0,15,13,10,"晚照亭");for(const[e,i]of[[-18,-10],[18,-6],[-16,16],[15,17]])Ao(n,e,0,i,1.4);t.interact({x:0,z:12,r:7,label:"骊山晚照",type:"view",id:"peak"}),t.interact({x:9,z:-4,r:4,label:"乘坐骊山索道下山",type:"cable",dir:-1})}function pS(n,t){yn(n,-34,-20,34,28),Ge(n,-20,-5,18,14,9,"曲江亭");for(const e of[-30,-15,15,30])es(n,e,0,20,1.2);t.interact({x:0,z:18,r:8,label:"泛舟曲江池",type:"view"})}function mS(n,t,e="nanhu"){n.box(-10,0,-6,10,5,0,14141610),n.sign(e==="nanhu"?"南湖码头":"曲江池码头",0,4,.1,.75,0,{bg:"#4c3526",fg:"#f6dfaa"}),n.box(-3,.1,0,3,.4,18,Re.wood,{mat:"wood",solid:!1}),cd(n,-3,0,-3,18,.4,1,7037528,2),cd(n,3,0,3,18,.4,1,7037528,2),t.interact({x:0,z:15,r:5,label:"登船：曲江夜游",type:"cruise",pier:e})}function gS(n,t){yn(n,-35,-35,35,40),Em(n,0,7,18,10,"化觉巷",Re.stone,3232586),Ge(n,0,-18,34,22,13,"清真大寺");for(const e of[-25,25])for(const i of[-20,5,28])Ao(n,e,0,i,1.1);t.interact({x:0,z:8,r:7,label:"清真大寺",type:"culture",id:"silkroad"})}function _S(n,t){yn(n,-72,-18,72,20,0,11112300);const e=["泡馍馆","胡辣汤","肉夹馍","凉皮冰峰","biangbiang 面","水盆羊肉","腊牛肉","镜糕凉粽","柿子饼"];for(let i=0;i<e.length;i++){const s=-64+i*16;n.box(s-7,0,-12,s+7,8,13545603),n.sign(e[i],s,5.5,-12.1,.65,Math.PI,{bg:"#7b2c25",fg:"#ffd98c"})}t.interact({x:-58,z:-8,r:4,label:"老字号泡馍",type:"shop",shop:"paomo"}),t.interact({x:-34,z:-8,r:4,label:"洒金桥早市",type:"shop",shop:"breakfast"}),t.interact({x:-10,z:-8,r:4,label:"三秦套餐",type:"shop",shop:"snacks"}),t.interact({x:14,z:-8,r:4,label:"关中面馆",type:"shop",shop:"noodles"}),t.interact({x:38,z:-8,r:4,label:"清真老味道",type:"shop",shop:"halal"}),t.interact({x:62,z:-8,r:4,label:"长安手信",type:"shop",shop:"souvenir"}),t.crowd(0,4,62,10,30)}function vS(n,t,e,i){yn(n,-26,-24,26,30),Ge(n,0,0,38,26,14,e);for(const s of[-20,20])wm(n,s,.2,18,1);t.interact({x:0,z:20,r:7,label:e,type:i?"culture":"view",id:i})}function xS(n,t,e){yn(n,-38,-28,38,32),n.box(-34,0,-20,34,15,18,10128504),n.box(-28,15,-14,28,20,12,13087887),n.box(-24,4,18,24,12,20,8364203,{mat:"window"}),n.sign(e,0,11,20.1,.9,0,{bg:"#43372d",fg:"#f3dfae"}),t.interact({x:0,z:25,r:7,label:e,type:"view"})}const ji=(n,t)=>(e,i)=>vS(e,i,n,t),pd=n=>(t,e)=>xS(t,e,n),md=n=>(t,e)=>mS(t,e,n),yS=[{id:"huacheng",name:"西安钟楼",alias:"古城中心",district:"beilin",grade:"S",lat:34.2619,lon:108.9467,rect:[32,32],focusY:25,build:eS,desc:"西安钟楼位于明城墙内东西南北四条大街交汇处，始建于明洪武年间，是西安城市中轴与古城天际线的重要标志。"},{id:"drumtower",name:"西安鼓楼",alias:"晨钟暮鼓",district:"lianhu",grade:"S",lat:34.2612,lon:108.9432,rect:[34,28],focusY:24,build:nS,desc:"鼓楼始建于明洪武十三年，与钟楼东西相望。高台重檐建筑曾以击鼓报时，“晨钟暮鼓”延续着古都生活节律。"},{id:"beijingroad",name:"西安城墙·永宁门",alias:"南门",district:"beilin",grade:"S",lat:34.2378,lon:108.9468,rect:[95,34],focusY:24,photoR:520,build:iS,desc:"西安城墙是中国现存规模最大、保存最完整的古代城垣之一。永宁门是南城门，可登城步行或骑行，俯瞰城内棋盘路网。"},{id:"anyuanmen",name:"西安城墙·安远门",alias:"北门",district:"lianhu",grade:"A",lat:34.278,lon:108.9467,rect:[95,34],focusY:24,photoR:520,build:sS,desc:"安远门是西安城墙北门，名字寓意安定边远，是古城南北中轴的重要门户。"},{id:"changlemen",name:"西安城墙·长乐门",alias:"东门",district:"beilin",grade:"A",lat:34.2624,lon:108.9707,rect:[34,95],rot:Math.PI/2,focusY:24,photoR:520,build:rS,desc:"长乐门是西安城墙东门，“长乐”承载着对城市长久安乐的祝愿。"},{id:"andingmen",name:"西安城墙·安定门",alias:"西门",district:"lianhu",grade:"A",lat:34.2624,lon:108.9215,rect:[34,95],rot:Math.PI/2,focusY:24,photoR:520,build:oS,desc:"安定门是西安城墙西门，门外曾通往丝绸之路方向，见证古长安的开放与交往。"},{id:"beilinmuseum",name:"西安碑林博物馆",alias:"石质书库",district:"beilin",grade:"A",lat:34.2506,lon:108.9525,rect:[30,34],focusY:14,build:ji("西安碑林博物馆","calligraphy"),desc:"碑林以收藏、研究和陈列历代碑刻、墓志与石刻艺术著称，被誉为“石质书库”和“书法艺术故乡”。"},{id:"shuyuanmen",name:"书院门文化街",district:"beilin",grade:"B",lat:34.2495,lon:108.9489,rect:[42,20],focusY:8,build:ji("书院门","calligraphy"),desc:"书院门因关中书院得名，街巷聚集文房四宝、碑帖拓片、印章和书画，是感受西安书法文化的经典去处。"},{id:"muslimquarter",name:"回民街",alias:"北院门",district:"lianhu",grade:"A",lat:34.2652,lon:108.9407,rect:[58,26],focusY:8,build:_S,desc:"回民街泛指钟鼓楼西北侧多条历史街巷，清真饮食与市井生活交织，泡馍、肉夹馍、凉皮、镜糕香气一路相随。"},{id:"greatmosque",name:"西安化觉巷清真大寺",district:"lianhu",grade:"A",lat:34.2648,lon:108.9373,rect:[40,42],focusY:14,build:gS,desc:"化觉巷清真大寺将中国传统院落布局、木构建筑与伊斯兰文化融为一体，是丝绸之路多元文明交流的见证。"},{id:"cantontower",name:"大雁塔",alias:"慈恩寺塔",district:"yanta",grade:"S",lat:34.2173,lon:108.9641,rect:[40,42],focusY:34,photoR:900,lod:tS,lodAlways:!0,build:Qb,desc:"大雁塔始建于唐永徽三年，由玄奘主持修建，用于保存经丝绸之路带回长安的佛经与佛像，是盛唐长安的文化坐标。",tip:"登塔远眺长安中轴，夜晚向南漫步大唐不夜城。"},{id:"shamian",name:"大唐不夜城",alias:"盛唐天街",district:"yanta",grade:"S",lat:34.2048,lon:108.9643,rect:[40,90],focusY:12,photoR:650,build:lS,desc:"大唐不夜城以大雁塔为北端，沿唐文化主题步行街展开。夜幕下的灯组、雕塑、演艺与仿唐建筑共同营造盛唐长安意象。"},{id:"shaanximuseum",name:"陕西历史博物馆",alias:"古都明珠",district:"yanta",grade:"S",lat:34.2252,lon:108.9552,rect:[48,40],focusY:16,build:cS,desc:"陕西历史博物馆以周秦汉唐文物见长，建筑取唐风中央殿堂、四隅崇楼格局，系统展示陕西悠久而厚重的历史。"},{id:"tangparadise",name:"大唐芙蓉园",district:"yanta",grade:"A",lat:34.207,lon:108.9765,rect:[44,42],focusY:18,build:ji("大唐芙蓉园·紫云楼","tangdance"),desc:"大唐芙蓉园以盛唐皇家园林为灵感，楼阁、水景与夜间演艺相映成趣，是体验唐风审美的主题文化景区。"},{id:"qujiang",name:"曲江池遗址公园",alias:"曲江流饮",district:"yanta",grade:"A",lat:34.1985,lon:108.9815,rect:[38,30],focusY:8,build:pS,desc:"曲江池自秦汉以来就是长安重要风景地，唐代尤为兴盛。今日园区以水岸、亭台与绿地再现“曲江流饮”的城市记忆。"},{id:"nanhu_pier",name:"南湖码头",hidden:!0,district:"yanta",grade:"B",lat:34.203,lon:108.976,rect:[14,12],build:md("nanhu")},{id:"qujiang_pier",name:"曲江池码头",hidden:!0,district:"yanta",grade:"B",lat:34.197,lon:108.984,rect:[14,12],build:md("qujiang")},{id:"smallpagoda",name:"小雁塔",alias:"荐福寺塔",district:"beilin",grade:"A",lat:34.2447,lon:108.9392,rect:[34,34],focusY:28,build:ji("小雁塔","silkroad"),desc:"小雁塔建于唐景龙年间，塔形秀丽，历经地震仍保存至今。“雁塔晨钟”曾列关中八景。"},{id:"damingpalace",name:"大明宫国家遗址公园",alias:"千宫之宫",district:"weiyang",grade:"S",lat:34.2955,lon:108.965,rect:[72,78],focusY:30,photoR:650,build:uS,desc:"大明宫是唐代帝国的重要宫城，含元殿、宣政殿、紫宸殿构成宏阔中轴。遗址公园以考古保护和展示讲述盛唐国家礼制。"},{id:"chenclan",name:"秦始皇帝陵博物院·兵马俑",alias:"世界第八大奇迹",district:"lintong",grade:"S",lat:34.3853,lon:109.2784,rect:[64,54],focusY:22,photoR:750,build:aS,desc:"兵马俑坑是秦始皇陵大型陪葬坑，陶俑、陶马按军阵排列，真实呈现秦代军队的组织、装备与雕塑艺术。"},{id:"qinshihuang",name:"秦始皇陵",district:"lintong",grade:"A",lat:34.3817,lon:109.2538,rect:[40,38],focusY:16,build:ji("秦始皇陵","qin"),desc:"秦始皇陵是中国历史上第一位皇帝嬴政的陵墓，陵园布局宏大，兵马俑坑只是其庞大地下世界的一部分。"},{id:"huaqing",name:"华清宫",alias:"华清池",district:"lintong",grade:"S",lat:34.3652,lon:109.2143,rect:[52,46],focusY:18,build:hS,desc:"华清宫依骊山而建，以温泉资源和唐代皇家离宫闻名。宫苑、汤池与近现代历史遗迹共同构成层次丰富的叙事。"},{id:"baiyungate",name:"骊山索道下站",district:"lintong",grade:"B",lat:34.355,lon:109.207,rect:[30,20],focusY:10,foundation:!0,build:fS,desc:"骊山是秦岭北侧支脉，山势秀美，与华清宫、秦始皇陵共同构成临潼最具代表性的历史山水。"},{id:"baiyun",name:"骊山·晚照亭",alias:"骊山晚照",district:"lintong",grade:"A",lat:34.346,lon:109.218,rect:[24,24],focusY:12,foundation:!0,build:dS,desc:"登骊山可俯瞰华清宫与渭河平原，夕阳为山体镀上暖色，“骊山晚照”是关中著名景观。"},{id:"banpo",name:"西安半坡博物馆",district:"baqiao",grade:"A",lat:34.2762,lon:109.048,rect:[42,34],focusY:18,build:pd("西安半坡博物馆"),desc:"半坡遗址是新石器时代仰韶文化聚落遗址，展示半地穴式房屋、陶器、生产工具与早期聚落生活。"},{id:"silkroad",name:"大唐西市",alias:"丝路起点意象",district:"lianhu",grade:"A",lat:34.252,lon:108.905,rect:[46,34],focusY:14,build:ji("大唐西市","silkroad"),desc:"唐长安西市是重要国际贸易市场，商旅、货物与文化在此汇聚。今日大唐西市延续丝路主题展示与城市商业。"},{id:"chimelong",name:"秦岭野生动物园",district:"changan",grade:"A",lat:34.067,lon:108.866,rect:[58,44],focusY:10,foundation:!0,build:ji("秦岭野生动物园","qinling"),desc:"秦岭野生动物园位于秦岭北麓，以山地生态为背景，展示大熊猫、金丝猴、羚牛等多种动物。"},{id:"cuihuashan",name:"翠华山",alias:"终南独秀",district:"changan",grade:"A",lat:33.998,lon:109.002,rect:[28,24],focusY:14,foundation:!0,build:ji("翠华山","qinling"),desc:"翠华山位于秦岭北麓，以山崩地貌、天池与峰林景观著称，是西安近郊重要的自然体验目的地。"},{id:"wetland",name:"浐灞国家湿地公园",district:"baqiao",grade:"B",lat:34.34,lon:109.06,rect:[54,44],focusY:8,build:pd("浐灞生态展馆"),desc:"浐灞水系是西安东部重要生态廊道，湿地、公园与城市公共空间共同展现古都面向自然与未来的一面。"}],MS={S:"重点还原",A:"主要景点",B:"区域氛围"};class bS{constructor(t,e,i){this.scene=t,this.world=e,this.game=i,this.items=yS.map(s=>{const r=Fr(s.lat,s.lon);let o=r.x,a=r.z;if(s.snap){const[u,h]={south:[0,1],north:[0,-1],east:[1,0],west:[-1,0]}[s.snap];for(let f=0;f<1500;f++)if(ai(o+u*f,a+h*f)){const p=f-(s.snapOff||0);o+=u*p,a+=h*p;break}}const l=s.foundation?Oe(o,a):Math.max(0,Oe(o,a)),c=s.rot||0;return{def:s,x:o,y:l,z:a,rot:c,loaded:!1,group:null,lodGroup:null,updates:[],dist:1/0}}),this.byId={};for(const s of this.items)this.byId[s.def.id]=s;this.loadQueue=[]}exclusions(){return this.items.filter(t=>t.def.rect).map(t=>({x:t.x,z:t.z,hw:t.def.rect[0]+4,hd:t.def.rect[1]+4}))}nearest(t,e,i){let s=null,r=i;for(const o of this.items){if(o.def.hidden)continue;const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,s=o)}return s}makeCtx(t,e,i){const s="lm:"+t.def.id,r=this.game,o=this;return{interact(a){const l=e.wx(a.x,a.z),c=e.wz(a.x,a.z);r.interact.add({...a,x:l,z:c,y:e.oy+(a.y||0),high:a.y!=null,landmark:t.def.id},s)},add(a){i.add(a)},onUpdate(a){t.updates.push(a)},landOverride(a,l,c,u){const h=[e.wx(a,l),e.wz(a,l)],f=[e.wx(c,u),e.wz(c,u)];Pb(h[0],h[1],f[0],f[1])},platform(a){const l=[e.wx(a.x0,a.z0),e.wz(a.x0,a.z0)],c=[e.wx(a.x1,a.z1),e.wz(a.x1,a.z1)];o.world.addPlatform({type:"rect",x0:Math.min(l[0],c[0]),z0:Math.min(l[1],c[1]),x1:Math.max(l[0],c[0]),z1:Math.max(l[1],c[1]),y:e.oy+a.y},s)},crowd(a,l,c,u,h){h==null&&u!=null&&(h=u,u=c),r.npcs.addCrowd({x:e.wx(a,l),z:e.wz(a,l),rx:c,rz:u||c,count:h||6,owner:s})},height(a,l){return Math.max(0,Oe(e.wx(a,l),e.wz(a,l))-e.oy)}}}load(t){const e="lm:"+t.def.id,i=new Qe(t.x,t.y,t.z,t.rot,this.world,e),s=new He;s.position.set(t.x,t.y,t.z),s.rotation.y=t.rot;const r=this.makeCtx(t,i,s);t.updates=[],t.def.build(i,r);const o=i.build(this.game.shadows);o.add(s),this.scene.add(o),t.group=o,t.loaded=!0,t.lodGroup&&(t.lodGroup.visible=!1)}unload(t){const e="lm:"+t.def.id;uh(t.group),t.group=null,t.loaded=!1,t.updates=[],this.world.removeOwner(e),this.game.interact.removeOwner(e),this.game.npcs.removeCrowds(e),t.lodGroup&&(t.lodGroup.visible=!0)}buildLODs(){for(const t of this.items){if(!t.def.lod)continue;const e=new Qe(t.x,t.y,t.z,t.rot,null);t.def.lod(e),t.lodGroup=e.build(!1),this.scene.add(t.lodGroup)}}update(t,e,i,s,r,o=1){let a=0;const l=this.items.slice().sort((c,u)=>Math.hypot(c.x-i,c.z-s)-Math.hypot(u.x-i,u.z-s));for(const c of l){const u=Math.hypot(c.x-i,c.z-s);c.dist=u;const h=c.def.loadR||750;if(!c.loaded&&u<h&&a<o?(this.load(c),a++):c.loaded&&u>h+250&&this.unload(c),c.loaded)for(const f of c.updates)f(t,e,r)}return a}pending(t,e){return this.items.filter(i=>!i.loaded&&Math.hypot(i.x-t,i.z-e)<(i.def.loadR||750)).length}setVisibleAll(t){for(const e of this.items)e.group&&(e.group.visible=t)}toWorld(t,e,i,s){const r=this.byId[t],o=Math.cos(r.rot),a=Math.sin(r.rot);return new V(r.x+e*o+s*a,r.y+i,r.z-e*a+s*o)}}const wc=new Map;function SS(n,t){const e=n+t;if(!wc.has(e)){const i=xb(n,t*7919+n.length*131);wc.set(e,{canvas:oh(i.params),ap:i})}return wc.get(e)}function wS(n){const t=document.createElement("canvas"),e=t.getContext("2d");e.font='bold 28px "Microsoft YaHei",sans-serif';const i=Math.min(520,e.measureText(n).width+30);t.width=i,t.height=50,e.fillStyle="rgba(255,255,255,0.92)",e.fillRect(0,0,i,42),e.fillRect(i/2-6,42,12,8),e.strokeStyle="#333",e.lineWidth=3,e.strokeRect(1.5,1.5,i-3,39),e.font='bold 26px "Microsoft YaHei",sans-serif',e.fillStyle="#222",e.textBaseline="middle",e.fillText(n.length>18?n.slice(0,17)+"…":n,15,22);const s=new pl(t);s.colorSpace=$e;const r=new hb(new om({map:s,depthTest:!0,transparent:!0}));return r.scale.set(i/50*.55,.55,1),r}class ES{constructor(t,e,i){this.scene=t,this.world=e,this.game=i,this.list=[],this.max=55,this.crowds=[],this.rng=Un(12345),this.spawnTimer=0,this._tmp=[],this.uid=0}addCrowd(t){this.crowds.push(t)}removeCrowds(t){this.crowds=this.crowds.filter(e=>e.owner!==t)}groundAt(t,e,i){let s=Oe(t,e);ym(t,e)&&(s=Math.max(s,dr));const r=this.world.supportAt(t,e,i+1.05,.25);return Math.max(s,r)}free(t,e,i){if(!Mm(t,e)||Oe(t,e)>i+1.05)return!1;const s=this.world.query(t-.3,e-.3,t+.3,e+.3,this._tmp);for(const r of s)if(r.y1>i+1.05&&r.y0<i+1.7)return!1;return!0}chooseType(t,e,i){const s=fs(t,e),r=this.game.sky.night>.5,o={office:3,student:2,elder:2,tourist:3,kid:1,local:3};(s==="yanta"||s==="weiyang")&&(o.office=6,o.elder=1),(s==="lianhu"||s==="beilin")&&(o.elder=4,o.local=4),i&&(o.tourist+=4),r&&(o.kid=.2,o.elder=.6,o.student*=.5);const a=this.game.sky.hour;a>7&&a<9.5&&(o.office+=3);let l=0;for(const u in o)l+=o[u];let c=this.rng()*l;for(const u in o)if(c-=o[u],c<=0)return u;return"local"}spawnOne(t,e){const i=this.rng;let s,r,o=null;const a=this.crowds.filter(m=>Math.hypot(m.x-t,m.z-e)<170+Math.max(m.rx,m.rz));if(a.length&&i()<.7)o=De(i,a),s=o.x+(i()*2-1)*o.rx,r=o.z+(i()*2-1)*o.rz;else{const m=i()*Math.PI*2,d=30+i()*110;s=t+Math.cos(m)*d,r=e+Math.sin(m)*d;const w=yr(s,r,8);if(w&&!w.line.ped){const y=w.seg,v=y.bx-y.ax,L=y.bz-y.az,M=Math.hypot(v,L)||1,E=-L/M,I=v/M,A=ln(((s-y.ax)*v+(r-y.az)*L)/(M*M),0,1),S=i()<.5?1:-1;s=y.ax+v*A+E*(w.hw-8+1.2)*S,r=y.az+L*A+I*(w.hw-8+1.2)*S}}const l=Math.hypot(s-t,r-e);if(l<18||l>190)return;const c=this.groundAt(s,r,400);if(c>60&&!o||!this.free(s,r,c)||ai(s,r))return;const u=this.chooseType(s,r,!!o),h=Math.floor(i()*6),f=SS(u,h),p=new ah(f.canvas,{accessories:f.ap.accessories,scale:f.ap.scale});p.group.position.set(s,c,r),p.showAccessory("camera",u==="tourist"),this.scene.add(p.group);const g=De(i,i_),_={id:++this.uid,type:u,name:u==="tourist"?"游客"+g+De(i,["先生","小姐","同学"]):g+De(i,s_[u]||["师傅"]),typeName:n_[u].name,ch:p,x:s,y:c,z:r,yaw:i()*Math.PI*2,state:"idle",timer:1+i()*3,target:null,speed:u==="kid"?2.6:u==="elder"?1.2:1.8+i()*.6,crowd:o,talked:!1,bubble:null,bubbleT:0};this.list.push(_)}despawn(t){this.scene.remove(t.ch.group),t.bubble&&t.ch.group.remove(t.bubble),t.ch.dispose();const e=this.list.indexOf(t);e>=0&&this.list.splice(e,1)}clear(){for(const t of this.list.slice())this.despawn(t)}pickState(t){const e=this.rng,i=this.game.sky.weather,s=e();if(i==="typhoon"){t.state="walk",t.target=this.randomTarget(t,40);return}if(s<.5)t.state="walk",t.target=this.randomTarget(t,t.crowd?0:35),t.timer=20;else if(s<.65&&i!=="rain"){const r=this.list.find(o=>o!==t&&o.state!=="chat"&&Math.hypot(o.x-t.x,o.z-t.z)<6);r?(t.state=r.state="chat",t.partner=r,r.partner=t,t.timer=r.timer=6+e()*8,this.showBubble(t,De(e,Il[t.type]))):(t.state="idle",t.timer=2+e()*3)}else if(s<.78&&(t.type==="tourist"||e()<.3)){t.state="photo",t.timer=3+e()*3;const r=this.game.landmarks.nearest(t.x,t.z,400);r&&(t.yaw=Math.atan2(r.x-t.x,r.z-t.z))}else if(s<.86){const r=this.game.interact.nearestOfType(t.x,t.z,"shop",50);r?(t.state="walk",t.target={x:r.x+(e()-.5)*3,z:r.z+(e()-.5)*3},t.after="shop",t.timer=25):(t.state="idle",t.timer=2)}else if(s<.93){const r=this.game.transport.nearestStop(t.x,t.z,70);r?(t.state="walk",t.target={x:r.wx+(e()-.5)*4,z:r.wz+(e()-.5)*2},t.after="bus",t.busStop=r,t.timer=40):(t.state=t.type==="office"?"phone":"idle",t.timer=3+e()*4)}else t.state=t.type==="office"||t.type==="student"?"phone":"idle",t.timer=3+e()*5}randomTarget(t,e){const i=this.rng;if(t.crowd&&i()<.8){const o=t.crowd;return{x:o.x+(i()*2-1)*o.rx,z:o.z+(i()*2-1)*o.rz}}const s=t.yaw+(i()-.5)*1.5,r=10+i()*(e||30);return{x:t.x+Math.sin(s)*r,z:t.z+Math.cos(s)*r}}showBubble(t,e){t.bubble&&t.ch.group.remove(t.bubble),t.bubble=wS(e),t.bubble.position.y=2.5*t.ch.scale+.3,t.ch.group.add(t.bubble),t.bubbleT=4}talkLine(t){const e=this.rng,i=this.game.landmarks.nearest(t.x,t.z,200),s=this.game.sky.weather,r=[...Il[t.type]];return i&&Nl[i.def.id]&&r.push(...Nl[i.def.id],...Nl[i.def.id]),(s==="rain"||s==="typhoon")&&r.push(...Ul[s],...Ul[s]),this.game.sky.night>.5&&r.push(...Ul.night),De(e,r)}update(t,e){const i=e.pos.x,s=e.pos.z,r=this.game.sky.weather;let o=this.max;if(r==="rain"&&(o=Math.floor(o*.6)),r==="typhoon"&&(o=Math.floor(o*.15)),this.game.sky.night>.7&&(o=Math.floor(o*.75)),e.pos.y>60&&(o=Math.floor(o*.3)),this.spawnTimer-=t,this.list.length<o&&this.spawnTimer<=0){for(let l=0;l<3&&this.list.length<o;l++)this.spawnOne(i,s);this.spawnTimer=.15}const a=r==="rain"||r==="typhoon";for(const l of this.list.slice()){const c=Math.hypot(l.x-i,l.z-s);if(c>230||this.list.length>o+5&&c>60){this.despawn(l);continue}if(l.talkingToPlayer){l.yaw=Math.atan2(i-l.x,s-l.z),l.ch.setAnim("talk"),l.ch.update(t,0),this.sync(l);continue}l.timer-=t;let u=0;if(l.state==="walk"&&l.target){const f=l.target.x-l.x,p=l.target.z-l.z,g=Math.hypot(f,p),_=l.speed*(a?1.5:1)*(r==="typhoon"?1.6:1);if(g<.6||l.timer<0)l.target=null,l.after==="shop"?(l.state="shop",l.timer=4+this.rng()*4):l.after==="bus"?(l.state="bus",l.timer=60):(l.state="idle",l.timer=1+this.rng()*3),l.after=null;else{let d=Math.atan2(f,p)-l.yaw;d=Math.atan2(Math.sin(d),Math.cos(d)),l.yaw+=d*Math.min(1,t*6);const w=Math.min(g,_*t),y=l.x+Math.sin(l.yaw)*w,v=l.z+Math.cos(l.yaw)*w,L=y-i,M=v-s;if(L*L+M*M<.8&&c<3)l.timer=Math.min(l.timer,.5);else if(this.free(y,v,l.y)){l.x=y,l.z=v,u=_;const E=this.groundAt(l.x,l.z,l.y);l.y+=(E-l.y)*Math.min(1,t*12)}else l.target=this.randomTarget(l,20),l.yaw+=Math.PI*(.5+this.rng())}}else l.timer<=0&&(l.state==="chat"&&l.partner&&(l.partner.state="idle",l.partner.timer=1,l.partner.partner=null,l.partner=null),l.state==="bus"&&(l.state="idle",l.busStop=null),this.pickState(l));if(l.state==="chat"&&l.partner&&(l.yaw=Math.atan2(l.partner.x-l.x,l.partner.z-l.z)),l.state==="bus"&&l.busStop&&this.game.transport.busAt(l.busStop)){this.despawn(l);continue}const h=l.state==="chat"?"talk":l.state==="photo"?"photo":l.state==="shop"?"shop":l.state==="phone"?"phone":a?"umbrella":"idle";l.ch.setAnim(h),l.ch.showAccessory("umbrella",a),c<90&&l.ch.update(t,u),l.bubble?(l.bubbleT-=t,l.bubbleT<=0&&(l.ch.group.remove(l.bubble),l.bubble.material.map.dispose(),l.bubble=null)):l.state==="chat"&&this.rng()<t*.25&&c<40&&this.showBubble(l,De(this.rng,Il[l.type])),this.sync(l)}}sync(t){t.ch.group.position.set(t.x,t.y,t.z),t.ch.group.rotation.y=t.yaw}nearestTo(t,e,i){let s=null,r=i;for(const o of this.list){const a=Math.hypot(o.x-t,o.z-e);a<r&&(r=a,s=o)}return s}}class TS{constructor(){this.items=[]}add(t,e="static"){return t.owner=e,this.items.push(t),t}removeOwner(t){this.items=this.items.filter(e=>e.owner!==t)}nearest(t,e,i,s=6){let r=null,o=1/0;for(const a of this.items){if(a.disabled||(a.y==null&&(a.y=Oe(a.x,a.z)),Math.abs(a.y-e)>5))continue;const l=Math.hypot(a.x-t,a.z-i);l<a.r&&l<o&&(o=l,r=a)}return r}nearestOfType(t,e,i,s){let r=null,o=s;for(const a of this.items){if(a.disabled||a.type!==i||a.high)continue;const l=Math.hypot(a.x-t,a.z-e);l<o&&(o=l,r=a)}return r}}function AS(){const n=new Qe;n.box(-1.4,.5,-6,1.4,2.9,6,13117482,{solid:!1}),n.box(-1.42,1.3,-5.5,1.42,2.5,5.2,2767434,{mat:"window",solid:!1}),n.box(-1.3,1.3,5.95,1.3,2.6,6.05,2767434,{mat:"window",solid:!1}),n.box(-1.45,.5,-6.02,1.45,1,6.02,15921906,{solid:!1}),n.box(-1.4,2.9,-6,-1.25,3.9,6,13117482,{solid:!1}),n.box(1.25,2.9,-6,1.4,3.9,6,13117482,{solid:!1}),n.box(-1.4,2.9,5.85,1.4,4,6,13117482,{solid:!1}),n.box(-1.4,2.9,-6,1.4,3.9,-5.85,13117482,{solid:!1}),n.box(-1.3,3.9,5.6,1.3,4.3,6,10471136,{mat:"glass",solid:!1});for(let t=-5;t<=4.5;t+=1.5)for(const e of[-.7,.7])n.box(e-.45,2.9,t-.3,e+.45,3.35,t+.3,2763370,{solid:!1}),n.box(e-.45,3.35,t-.35,e+.45,3.9,t-.25,2763370,{solid:!1});for(const t of[-4,4])for(const e of[-1.25,1.25])n.box(e-.25,0,t-.6,e+.25,1.1,t+.6,1710618,{solid:!1});return n.box(-1,.9,6.02,-.5,1.2,6.1,16773824,{mat:"lamp",solid:!1}),n.box(.5,.9,6.02,1,1.2,6.1,16773824,{mat:"lamp",solid:!1}),n.sign("长安观光巴士 1路",1.46,3.4,0,.45,Math.PI/2,{bg:"#9b2f28",fg:"#ffffff",px:40}),n.sign("长安观光巴士 1路",-1.46,3.4,0,.45,-Math.PI/2,{bg:"#9b2f28",fg:"#ffffff",px:40}),n.sign("1 钟楼⇄曲江池",0,2.7,6.06,.32,0,{bg:"#111",fg:"#ffcf66",px:40,glow:!0}),n.build()}function CS(n,t){const e=new Qe;e.box(-.95,.35,-2.2,.95,1.15,2.2,n,{solid:!1}),e.box(-.85,1.15,-1.2,.85,1.85,1,n,{solid:!1}),e.box(-.87,1.2,-1.1,.87,1.75,.9,2767434,{mat:"window",solid:!1});for(const i of[-1.4,1.4])for(const s of[-.9,.9])e.box(s-.15,0,i-.4,s+.15,.7,i+.4,1118481,{solid:!1});return e.box(-.8,.6,2.2,-.4,.85,2.25,16773824,{mat:"lamp",solid:!1}),e.box(.4,.6,2.2,.8,.85,2.25,16773824,{mat:"lamp",solid:!1}),e.box(-.8,.6,-2.25,-.4,.85,-2.2,16724016,{mat:"lamp",solid:!1}),e.box(.4,.6,-2.25,.8,.85,-2.2,16724016,{mat:"lamp",solid:!1}),t&&(e.box(-.85,.35,-2.2,.85,.75,2.2,15921906,{solid:!1}),e.box(-.3,1.85,-.2,.3,2.1,.2,15909424,{mat:"neon",solid:!1})),e.build()}function RS(n=3786873){const t=new Qe;for(const e of[-1.05,1.05])t.box(-.13,.05,e-.48,.13,1.02,e+.48,1710618,{solid:!1}),t.box(-.15,.2,e-.32,.15,.87,e+.32,10265512,{solid:!1});return t.beam(0,.55,-1.05,0,1.05,.15,.12,n),t.beam(0,1.05,.15,0,.55,1.05,.12,n),t.beam(0,.55,-1.05,0,.55,1.05,.1,n),t.box(-.22,.95,-.2,.22,1.18,.35,2236962,{solid:!1}),t.box(-.12,.55,-.75,.12,.92,-.15,3159096,{mat:"metal",solid:!1}),t.beam(0,.88,.72,0,1.48,1.05,.1,3159096),t.beam(-.48,1.48,1.05,.48,1.48,1.05,.09,3159096),t.box(-.42,1,.55,.42,1.4,1.05,n,{solid:!1}),t.box(-.18,1.2,1.06,.18,1.42,1.12,16773544,{mat:"lamp",solid:!1}),t.build(!1)}function PS(){const n=new Qe;n.box(-4,-.8,-14,4,1.2,12,15921906,{solid:!1});for(let t=0;t<4;t++)n.box(-4+t*.9,-.8,12+t*1.2,4-t*.9,1.2,13.2+t*1.2,15921906,{solid:!1});n.box(-4.05,.2,-14,4.05,.5,12,2775720,{solid:!1}),n.box(-3.6,1.2,-12,3.6,4,8,15263976,{mat:"window",solid:!1}),n.box(-3.7,4,-12.2,3.7,4.3,8.2,16053492,{solid:!1}),n.box(-3,4.3,-10,3,6.6,4,15263976,{mat:"window",solid:!1}),n.box(-3.1,6.6,-10.2,3.1,6.9,4.2,16053492,{solid:!1}),n.box(-1.5,6.9,-6,1.5,8.4,0,14737632,{mat:"window",solid:!1});for(const t of[1.25,4.35,6.95])n.box(-3.75,t,-12.3,-3.65,t+.12,8.3,16728224,{mat:"neon",solid:!1}),n.box(3.65,t,-12.3,3.75,t+.12,8.3,4243711,{mat:"neon",solid:!1});for(let t=-12;t<=8;t+=2)n.boxC(3.8,1.2,t,.12,1,.12,13421772,{solid:!1}),n.boxC(-3.8,1.2,t,.12,1,.12,13421772,{solid:!1});return n.sign("曲江夜游",0,5.4,4.05,.9,0,{bg:"#5a2524",fg:"#ffd76a",glow:!0}),n.build()}function LS(){const n=new Qe;return n.box(-1,-2.4,-1,1,-.4,1,14168112,{solid:!1}),n.box(-1.02,-1.8,-.8,1.02,-.8,.8,10471136,{mat:"window",solid:!1}),n.boxC(0,-.4,0,.15,.6,.15,4473924,{solid:!1}),n.build()}class DS{constructor(t,e,i){this.scene=t,this.world=e,this.game=i,this.static=new He,t.add(this.static);const s=Tu.pts;this.busRoute=s,this.busLen=kl(s),this.stops=Tu.stops.map(c=>{let u=0,h=1/0,f=0;for(let m=1;m<s.length;m++){const d=s[m-1],w=s[m],y=Math.hypot(w.x-d.x,w.z-d.z);for(let v=0;v<=1;v+=.02){const L=d.x+(w.x-d.x)*v,M=d.z+(w.z-d.z)*v,E=Math.hypot(L-c.x,M-c.z);E<h&&(h=E,u=f+y*v)}f+=y}const p=Zn(s,u),g=Math.cos(p.dir),_=-Math.sin(p.dir);return{...c,s:u,wx:p.x+g*9.5,wz:p.z+_*9.5,dir:p.dir}}),this.bus=AS(),t.add(this.bus),this.busS=0,this.busDir=1,this.busWait=5,this.busStopIdx=0,this.busSpeed=24,new Qe(0,0,0,0,e,"transport");for(const c of this.stops){const u=new Qe(c.wx,0,c.wz,c.dir-Math.PI/2,e,"transport");$b(u,0,0,0,"观光巴士·"+c.name),this.static.add(u.build()),i.interact.add({x:c.wx,z:c.wz,r:4.5,type:"bus",label:"观光巴士 · "+c.name+"站",stop:c},"transport")}for(const c of Pr){const u=new Qe(c.x,Oe(c.x,c.z),c.z,0,e,"transport");qb(u,0,0,c.name),this.static.add(u.build()),i.interact.add({x:c.x,z:c.z+2,r:4,type:"metro",label:"进入地铁 · "+c.name,station:c},"transport")}this.ebikes=[];const r=["zhonglou","yongningmen","dayanta","datang","daminggong","huaqingchi"],o=[3786873,3516415,16762415];for(let c=0;c<r.length;c++){const u=Pr.find(d=>d.id===r[c]);if(!u)continue;const h=u.x+6,f=u.z-5,p=Oe(h,f)+.04,g=new Qe(h,p,f,0,null,"transport");g.box(-1.2,0,-.25,1.2,.18,.25,5593953,{mat:"metal",solid:!1}),g.box(-.12,.15,-.12,.12,1.65,.12,3786873,{solid:!1}),g.sign("扫码骑行",0,1.7,0,.34,0,{bg:"#16764a",fg:"#ffffff",px:36}),this.static.add(g.build(!1));const _=RS(o[c%o.length]);_.position.set(h+1.6,p,f),_.rotation.y=c%2?Math.PI:0,t.add(_);const m={id:`ebike-${u.id}`,obj:_,station:u,heading:_.rotation.y,speed:0};m.interact=i.interact.add({x:_.position.x,y:p,z:_.position.z,r:4,type:"ebike",label:`共享电单车 · ${u.name}（¥5）`,bike:m},"transport"),this.ebikes.push(m)}this.cruisePath=Db(),this.cruiseLen=kl(this.cruisePath),this.boat=PS(),this.boat.visible=!0,t.add(this.boat),this.boatState={s:0,dir:1,active:!1},this.placeIdleBoat(),this.cars=[],this.carModels=[];const a=[15921906,1710618,10132128,12595248,3824282,6974064,15261904];for(let c=0;c<8;c++)this.carModels.push({color:a[c%a.length],taxi:c>=6});this.carRoads=_l.filter(c=>!c.ped).map(c=>({road:c,len:kl(c.pts)})),this.rng=Un(5);const l=new Qe;l.box(-1.1,0,-1.1,1.1,2.6,1.1,10471136,{mat:"glass",solid:!1}),l.box(-1.2,-.2,-1.2,1.2,0,1.2,13421772,{solid:!1}),l.box(-1.2,2.6,-1.2,1.2,2.8,1.2,13421772,{solid:!1}),this.elevatorCab=l.build(!1),this.elevatorCab.visible=!1,t.add(this.elevatorCab),this.cable=null,this.gondolas=[]}placeIdleBoat(){const t=Zn(this.cruisePath,this.cruiseLen*.82);this.boat.position.set(t.x,lo+.6,t.z),this.boat.rotation.y=t.dir}nearestStop(t,e,i){let s=null,r=i;for(const o of this.stops){const a=Math.hypot(o.wx-t,o.wz-e);a<r&&(r=a,s=o)}return s}busAt(t){return this.busWait>0&&this.stops[this.busStopIdx]===t}busETA(t){let e=(t.s-this.busS)*this.busDir;return e<0&&(e=Math.abs(e)+(this.busDir>0?(this.busLen-this.busS)*2:this.busS*2)*.5),Math.round(e/this.busSpeed+Math.max(0,this.busWait))}updateBus(t){if(this.busWait>0)this.busWait-=t,this.busWait<=0&&this.game.onBusDepart&&this.game.onBusDepart(this.stops[this.busStopIdx]);else{const u=this.busS;this.busS+=this.busDir*this.busSpeed*t;for(let h=0;h<this.stops.length;h++){const f=this.stops[h],p=u-f.s,g=this.busS-f.s;if(p!==0&&p*g<=0){this.busS=f.s,this.busWait=8,this.busStopIdx=h,h===0&&(this.busDir=1),h===this.stops.length-1&&(this.busDir=-1),this.game.onBusArrive&&this.game.onBusArrive(f);break}}this.busS>this.busLen&&(this.busS=this.busLen,this.busDir=-1),this.busS<0&&(this.busS=0,this.busDir=1)}const e=Zn(this.busRoute,this.busS),i=this.busDir>0?e.dir:e.dir+Math.PI,s=Math.cos(i),r=-Math.sin(i),o=e.x-s*3.5,a=e.z-r*3.5;let l=.05;yr(o,a),ai(o,a)&&(l=.4),this.bus.position.set(o,l,a);let c=i-this.bus.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),this.bus.rotation.y+=c*Math.min(1,t*5)}updateCars(t,e,i){let r=0;for(;this.cars.length<26&&r++<4;){const o=De(this.rng,this.carRoads),a=this.rng()*o.len,l=Zn(o.road.pts,a),c=Math.hypot(l.x-e,l.z-i);if(c>260||c<40)continue;const u=De(this.rng,this.carModels),h=CS(u.color,u.taxi);this.scene.add(h),this.cars.push({cr:o,s:a,dir:this.rng()<.5?1:-1,sp:9+this.rng()*7,obj:h,lane:o.road.w/4})}for(const o of this.cars.slice()){const a=Zn(o.cr.road.pts,o.s);if(Math.hypot(a.x-e,a.z-i)>320||o.s<0||o.s>o.cr.len){uh(o.obj),this.cars.splice(this.cars.indexOf(o),1);continue}const c=Zn(o.cr.road.pts,o.s+o.dir*6),u=o.dir>0?c.dir:c.dir+Math.PI,h=Math.cos(u),f=-Math.sin(u),p=c.x-h*o.lane,g=c.z-f*o.lane,_=this.game.player,m=Math.hypot(p-_.pos.x,g-_.pos.z)<3.5&&_.pos.y<3,d=Math.hypot(p-this.bus.position.x,g-this.bus.position.z)<6,w=m||d?0:o.sp;o.v=(o.v||o.sp)+(w-(o.v||o.sp))*Math.min(1,t*3),o.s+=o.dir*o.v*t;const y=Zn(o.cr.road.pts,o.s),v=o.dir>0?y.dir:y.dir+Math.PI,L=Math.cos(v),M=-Math.sin(v),E=y.x-L*o.lane,I=y.z-M*o.lane;o.obj.position.set(E,ai(E,I)?.4:.05,I);let A=v-o.obj.rotation.y;A=Math.atan2(Math.sin(A),Math.cos(A)),o.obj.rotation.y+=A*Math.min(1,t*6),o.honk=m}}startCruise(t){let e=0,i=1/0;for(let r=0;r<this.cruiseLen;r+=5){const o=Zn(this.cruisePath,r),a=Math.hypot(o.x-t.x,o.z-t.z);a<i&&(i=a,e=r)}this.boatState={active:!0,s:e,start:e,dir:1,leg:0,t:0};const s=Zn(this.cruisePath,e);return this.boat.position.set(s.x,lo+.6,s.z),this.boat.rotation.y=s.dir,this.boat}updateBoat(t){const e=this.boatState;e.t=(e.t||0)+t;const i=Math.sin(e.t*1.4)*.08;if(!e.active)return this.boat.position.y=lo+.6+i,null;const s=22;e.s+=e.dir*s*t;let r=!1;e.leg===0&&e.s>=this.cruiseLen-4?(e.leg=1,e.dir=-1):e.leg===1&&e.s<=4?(e.leg=2,e.dir=1):e.leg===2&&e.s>=e.start&&(r=!0),e.s=ln(e.s,0,this.cruiseLen);const o=Zn(this.cruisePath,e.s),a=e.dir>0?o.dir:o.dir+Math.PI,l=Math.cos(a),c=-Math.sin(a);this.boat.position.set(o.x-l*7,lo+.6+i,o.z-c*7);let u=a-this.boat.rotation.y;return u=Math.atan2(Math.sin(u),Math.cos(u)),this.boat.rotation.y+=u*Math.min(1,t*1.2),this.boat.rotation.z=Math.sin(e.t*.9)*.01,r?(e.active=!1,"done"):e.leg}setupCable(t,e){if(this.cable)return;this.cableA=t,this.cableB=e;const i=new He,s=new Qe,r=30;this.cablePts=[];for(let o=0;o<=r;o++){const a=o/r,l=t.x+(e.x-t.x)*a,c=t.z+(e.z-t.z)*a,u=t.y+(e.y-t.y)*a-Math.sin(a*Math.PI)*12,h=Oe(l,c);this.cablePts.push(new V(l,Math.max(u,h+8),c))}for(let o=1;o<=r;o++){const a=this.cablePts[o-1],l=this.cablePts[o];if(s.beam(a.x,a.y,a.z,l.x,l.y,l.z,.12,3355443),s.beam(a.x+2,a.y,a.z,l.x+2,l.y,l.z,.12,3355443),o%6===0){const c=Oe(l.x,l.z);s.beam(l.x+1,c,l.z,l.x+1,l.y+1,l.z,.8,9079434),s.beam(l.x-.5,l.y+.6,l.z,l.x+2.5,l.y+.6,l.z,.4,9079434)}}i.add(s.build());for(let o=0;o<8;o++){const a=LS();a.userData.u=o/8,i.add(a),this.gondolas.push(a)}this.cable=i,this.scene.add(i)}cablePoint(t){const e=this.cablePts,i=ln(t,0,1)*(e.length-1),s=Math.min(e.length-2,Math.floor(i));return e[s].clone().lerp(e[s+1],i-s)}updateCable(t){if(this.cable)for(const e of this.gondolas){if(e.userData.ridden)continue;e.userData.u=(e.userData.u+t*.02)%1;const i=e.userData.u,s=this.cablePoint(i<.5?i*2:2-i*2);e.position.copy(s),e.position.x+=i<.5?0:2}}update(t,e,i){return this.updateBus(t),this.updateCars(t,e,i),this.updateCable(t),this.updateBoat(t)}}const IS=[{id:"none",name:"原图"},{id:"lingnan",name:"长安·复古胶片"},{id:"night",name:"盛唐·夜色霓虹"},{id:"fresh",name:"清新"},{id:"bw",name:"黑白"},{id:"pixel",name:"像素"}],US={none:0,lingnan:1,night:2,fresh:3,bw:4,pixel:5},NS=`
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
}`;class FS{constructor(t){this.renderer=t,this.filter="none";const e=t.getDrawingBufferSize(new se);this.rt=new Fi(e.x,e.y,{samples:4,type:Bs}),this.uniforms={tDiffuse:{value:this.rt.texture},uMode:{value:0},uTime:{value:0},uRes:{value:e.clone()},uVignette:{value:.6}},this.quadScene=new sh,this.quadCam=new eh(-1,1,1,-1,0,1);const i=new On({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:NS,depthTest:!1,depthWrite:!1});this.quad=new oe(new us(2,2),i),this.quadScene.add(this.quad),this.dbp=null}resize(){const t=this.renderer.getDrawingBufferSize(new se);this.rt.setSize(t.x,t.y),this.uniforms.uRes.value.copy(t)}render(t,e,i){if(this.filter==="none"){this.renderer.setRenderTarget(null),this.renderer.render(t,e);return}this.uniforms.uMode.value=US[this.filter]||0,this.uniforms.uTime.value=i%10,this.uniforms.uVignette.value=this.filter==="lingnan"?1.4:this.filter==="bw"?1:.5,this.renderer.setRenderTarget(this.rt),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.quadScene,this.quadCam)}recognize(t,e,i){const s=[],r=new V,o=t.position;for(const a of e){if(a.def.hidden)continue;r.set(a.x,a.y+(a.def.focusY||8),a.z);const l=r.distanceTo(o),c=a.def.photoR||380;if(l>c)continue;const h=Math.max(a.def.rect?Math.max(a.def.rect[0],a.def.rect[1]):20,(a.def.focusY||8)*.8)/Math.max(1,l);if(h<.045)continue;const f=r.clone().project(t);if(f.z>1||Math.abs(f.x)>.82||Math.abs(f.y)>.9){const _=new V(a.x,a.y+2,a.z).project(t);if(_.z>1||Math.abs(_.x)>.8||Math.abs(_.y)>.88)continue}let p=0;const g=16;for(let _=1;_<g-1;_++){const m=_/g,d=o.x+(r.x-o.x)*m,w=o.y+(r.y-o.y)*m,y=o.z+(r.z-o.z)*m,v=i.query(d-.1,y-.1,d+.1,y+.1,[]);for(const L of v)w>L.y0&&w<L.y1&&L.owner!=="lm:"+a.def.id&&p++}p>1||s.push({lm:a,score:h*(1-Math.hypot(f.x,f.y)*.4)})}return s.sort((a,l)=>l.score-a.score),s.slice(0,3).map(a=>a.lm)}capture(t,e){const s=t.height/t.width,r=document.createElement("canvas");r.width=1280,r.height=Math.round(1280*s);const o=r.getContext("2d");if(o.drawImage(t,0,0,r.width,r.height),e){o.fillStyle="rgba(0,0,0,0.45)",o.fillRect(0,r.height-64,r.width,64),o.fillStyle="#ffd76a",o.font='bold 30px "Microsoft YaHei",sans-serif',o.fillText(e.title,24,r.height-24),o.fillStyle="#ffffff",o.font='22px "Microsoft YaHei",sans-serif';const u=e.sub,h=o.measureText(u).width;o.fillText(u,r.width-h-24,r.height-26)}const a=r.toDataURL("image/jpeg",.88),l=document.createElement("canvas");return l.width=320,l.height=Math.round(320*s),l.getContext("2d").drawImage(r,0,0,l.width,l.height),{full:a,thumb:l.toDataURL("image/jpeg",.8)}}db(){return this.dbp?this.dbp:(this.dbp=new Promise((t,e)=>{const i=indexedDB.open("block-xian",1);i.onupgradeneeded=()=>i.result.createObjectStore("photos",{keyPath:"id"}),i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)}),this.dbp)}async savePhoto(t){try{const e=await this.db();await new Promise((i,s)=>{const r=e.transaction("photos","readwrite");r.objectStore("photos").put(t),r.oncomplete=i,r.onerror=()=>s(r.error)})}catch(e){console.warn("save photo failed",e)}}async listPhotos(){try{const t=await this.db();return await new Promise((e,i)=>{const r=t.transaction("photos","readonly").objectStore("photos").getAll();r.onsuccess=()=>e(r.result.sort((o,a)=>a.id-o.id)),r.onerror=()=>i(r.error)})}catch{return[]}}async deletePhoto(t){const e=await this.db();return new Promise(i=>{const s=e.transaction("photos","readwrite");s.objectStore("photos").delete(t),s.oncomplete=i})}}const Jn=.32,xa=1.8,Qr=1.05,kS=30;class OS{constructor(t,e,i,s=[]){this.scene=t,this.world=e,this.char=new ah(i,{accessories:s}),this.char.showAccessory("camera",!1),t.add(this.char.group),this.pos=new V,this.vy=0,this.onGround=!0,this.yaw=0,this.modelYaw=0,this.camYaw=0,this.camPitch=.3,this.camDist=6,this.view="third",this.speed=0,this.ride=null,this.scripted=null,this.frozen=!1,this.distance=0,this.fly=!1,this._tmp=[],this.camPos=new V,this.camTarget=new V}setSkin(t){this.char.setSkin(t)}teleport(t,e,i,s){this.pos.set(t,e,i),this.vy=0,s!=null&&(this.camYaw=s,this.modelYaw=s+Math.PI),this.ride=null,this.scripted=null}groundAt(t,e,i){let s=Oe(t,e);ai(t,e)&&(s=-3),ym(t,e)&&(s=Math.max(s,dr));const r=this.world.supportAt(t,e,i+Qr,Jn);return Math.max(s,r)}blocked(t,e){const i=this.pos.y;if(i<2.5&&!Mm(t,e)&&this.world.supportAt(t,e,i+Qr,Jn)<i-.5||Oe(t,e)>i+Qr)return!0;const s=this.world.query(t-Jn,e-Jn,t+Jn,e+Jn,this._tmp);for(const r of s)if(r.y1>i+Qr&&r.y0<i+xa-.1)return!0;for(const r of this.world.platforms)if(r.wall&&!(Math.abs(i-r.y)>1.2)&&ao(r,this.pos.x,this.pos.z)&&!ao(r,t,e))return!0;return!1}update(t,e,i){const s=e.consumeLook(),r=.0026*(this.sensitivity||1);if(this.camYaw-=s.x*r,this.camPitch=ln(this.camPitch+s.y*r,-1.2,1.35),e.wheel&&this.view==="third"&&(this.camDist=ln(this.camDist+e.wheel*.8,2.5,16)),this.scripted){this.scripted(t,this),this.char.update(t,0),this.syncModel(t);return}if(this.ride){this.updateRide(t,e),this.syncModel(t);return}const o=this.frozen?{x:0,y:0}:e.axis(),l=e.down("ShiftLeft")||e.down("ShiftRight")||e.joy.sprint?15:7,c=Math.sin(this.camYaw),u=Math.cos(this.camYaw);let h=-c*o.y+u*o.x,f=-u*o.y-c*o.x;const p=Math.hypot(h,f)>.01,g=p?l*Math.min(1,Math.hypot(o.x,o.y)):0;if(this.speed+=(g-this.speed)*Math.min(1,t*10),p){const y=Math.hypot(h,f);h/=y,f/=y,this.moveDir=Math.atan2(h,f)}const _=this.speed*t;if(_>1e-4&&this.moveDir!=null){const y=Math.sin(this.moveDir)*_,v=Math.cos(this.moveDir)*_,L=Math.ceil(_/.3);for(let M=0;M<L;M++){const E=y/L,I=v/L;this.blocked(this.pos.x+E,this.pos.z)||(this.pos.x+=E),this.blocked(this.pos.x,this.pos.z+I)||(this.pos.z+=I);const A=this.groundAt(this.pos.x,this.pos.z,this.pos.y);this.onGround&&A>this.pos.y&&A<=this.pos.y+Qr&&(this.pos.y=A)}this.distance+=_}(e.hit("Space")||e.joy.jump)&&this.onGround&&!this.frozen&&(this.vy=10,this.onGround=!1,e.joy.jump=!1),this.vy-=kS*t;let m=this.pos.y+this.vy*t;const d=this.groundAt(this.pos.x,this.pos.z,this.pos.y);if(this.vy>0){const y=this.world.query(this.pos.x-Jn,this.pos.z-Jn,this.pos.x+Jn,this.pos.z+Jn,this._tmp);for(const v of y)v.y0>=this.pos.y+xa-.05&&v.y0<m+xa&&(m=v.y0-xa,this.vy=0)}m<=d?(m=d,this.vy=0,this.onGround=!0):this.onGround=m-d<.05,this.pos.y=m;for(const y of this.world.platforms)if(y.spin&&Math.abs(this.pos.y-y.y)<.2&&ao(y,this.pos.x,this.pos.z)){const v=y.spin*t,L=this.pos.x-y.cx,M=this.pos.z-y.cz,E=Math.cos(v),I=Math.sin(v),A=y.cx+L*E-M*I,S=y.cz+L*I+M*E;ao(y,A,S)&&(this.pos.x=A,this.pos.z=S,this.camYaw-=v,this.moveDir!=null&&(this.moveDir-=v),this.modelYaw-=v)}this.pos.y<-20&&(this.pos.y=this.groundAt(this.pos.x,this.pos.z,500));const w=i&&(i.weather==="rain"||i.weather==="typhoon");if(this.char.showAccessory("umbrella",w&&this.view!=="selfie"),this.view!=="selfie"&&this.char.setAnim(w?"umbrella":"idle"),this.char.update(t,this.speed),this.view==="first")this.modelYaw=this.camYaw+Math.PI;else if(p){let y=this.moveDir-this.modelYaw;y=Math.atan2(Math.sin(y),Math.cos(y)),this.modelYaw+=y*Math.min(1,t*12)}this.syncModel(t)}updateRide(t,e){const i=this.ride;if(i.type==="ebike"){const r=this.frozen?{x:0,y:0}:e.axis(),o=-r.y,a=o>=0?o*18:o*6;i.speed+=(a-i.speed)*Math.min(1,t*(Math.abs(o)>.02?4:2.3)),Math.abs(i.speed)<.04&&(i.speed=0);const l=r.x*t*(1.25+Math.min(1,Math.abs(i.speed)/7))*(i.speed<-.1?-1:1);i.heading+=l;const c=i.speed*t,u=Math.max(1,Math.ceil(Math.abs(c)/.28));for(let f=0;f<u;f++){const p=Math.sin(i.heading)*c/u,g=Math.cos(i.heading)*c/u;if(!this.blocked(this.pos.x+p,this.pos.z+g))this.pos.x+=p,this.pos.z+=g;else{i.speed*=-.12;break}}const h=this.groundAt(this.pos.x,this.pos.z,this.pos.y);i.obj.position.set(this.pos.x,h+.04,this.pos.z),i.obj.rotation.y=i.heading,this.pos.y=h+1.12,this.speed=Math.abs(i.speed),this.modelYaw=i.heading,this.char.setAnim("sit"),this.char.update(t,this.speed);return}if(i.free){const r=e.axis(),o=Math.sin(this.camYaw-i.obj.rotation.y),a=Math.cos(this.camYaw-i.obj.rotation.y),l=-o*r.y+a*r.x,c=-a*r.y-o*r.x,u=4*t;i.local.x=ln(i.local.x+l*u,i.bounds[0],i.bounds[1]),i.local.z=ln(i.local.z+c*u,i.bounds[2],i.bounds[3]),this.speed=Math.hypot(l,c)*4,this.speed>.1&&(this.modelYaw=Math.atan2(l,c)+i.obj.rotation.y)}else this.speed=0;i.obj.updateMatrixWorld();const s=i.local.clone().applyMatrix4(i.obj.matrixWorld);this.pos.copy(s),i.free||(this.modelYaw=i.obj.rotation.y+(i.faceYaw||0)),this.char.setAnim(i.sit?"sit":"idle"),this.char.update(t,this.speed)}syncModel(){this.char.group.position.copy(this.pos),this.char.group.rotation.y=this.modelYaw,this.char.group.visible=this.view!=="first"||!!this.forceVisible}updateCamera(t,e,i=!0){const s=new V(this.pos.x,this.pos.y+1.62*this.char.scale,this.pos.z),r=new V(Math.sin(this.camYaw)*Math.cos(this.camPitch),Math.sin(this.camPitch),Math.cos(this.camYaw)*Math.cos(this.camPitch));if(this.view==="first"){t.position.copy(s).addScaledVector(r,-.15),t.lookAt(s.clone().addScaledVector(r,-10));return}if(this.view==="selfie"){const l=this.modelYaw,c=new V(Math.sin(l),0,Math.cos(l)),u=this.selfieDist||2.6,h=s.clone().addScaledVector(c,u);h.y+=.25+Math.sin(this.camPitch)*1.2,h.addScaledVector(new V(c.z,0,-c.x),Math.sin(this.camYaw-l)*1.2),t.position.copy(h),t.lookAt(s.x,s.y-.1,s.z);return}const o=s.clone();o.y+=.25;let a=this.camDist;if(i){const l=Math.ceil(a/.5);for(let c=1;c<=l;c++){const u=c/l*a,h=o.clone().addScaledVector(r,u),f=this.world.query(h.x-.2,h.z-.2,h.x+.2,h.z+.2,this._tmp);let p=Oe(h.x,h.z)>h.y-.3;for(const g of f)h.y>g.y0&&h.y<g.y1+.2&&(p=!0);if(p){a=Math.max(.8,u-.4);break}}}this.camDistEff=this.camDistEff==null?a:this.camDistEff+(a-this.camDistEff)*Math.min(1,e*(a<this.camDistEff?20:4)),t.position.copy(o).addScaledVector(r,this.camDistEff),t.lookAt(o)}}class zS{constructor(t){this.dom=t,this.keys=new Set,this.pressed=new Set,this.lookDX=0,this.lookDY=0,this.wheel=0,this.joy={x:0,y:0,active:!1},this.touchLook=null,this.locked=!1,this.enabled=!0,this.mouseDown=!1,this.onKey=null,this._kd=i=>{i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA")||(this.keys.has(i.code)||this.pressed.add(i.code),this.keys.add(i.code),["Space","Tab"].includes(i.code)&&i.preventDefault(),this.onKey&&this.onKey(i.code,i))},this._ku=i=>this.keys.delete(i.code),this._mm=i=>{(this.locked||this.mouseDown)&&(this.lookDX+=i.movementX||0,this.lookDY+=i.movementY||0)},this._wh=i=>{i.target===t&&(this.wheel+=Math.sign(i.deltaY))},this._md=i=>{i.target===t&&i.button===2&&(this.mouseDown=!0)},this._mu=()=>this.mouseDown=!1,this._plc=()=>this.locked=document.pointerLockElement===t,this._blur=()=>this.keys.clear(),window.addEventListener("keydown",this._kd),window.addEventListener("keyup",this._ku),window.addEventListener("mousemove",this._mm),window.addEventListener("wheel",this._wh,{passive:!0}),window.addEventListener("mousedown",this._md),window.addEventListener("mouseup",this._mu),window.addEventListener("blur",this._blur),document.addEventListener("pointerlockchange",this._plc),t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("touchstart",i=>{for(const s of i.changedTouches)s.clientX>window.innerWidth*.4&&!this.touchLook&&(this.touchLook={id:s.identifier,x:s.clientX,y:s.clientY})},{passive:!0}),t.addEventListener("touchmove",i=>{for(const s of i.changedTouches)this.touchLook&&s.identifier===this.touchLook.id&&(this.lookDX+=(s.clientX-this.touchLook.x)*1.6,this.lookDY+=(s.clientY-this.touchLook.y)*1.6,this.touchLook.x=s.clientX,this.touchLook.y=s.clientY)},{passive:!0});const e=i=>{for(const s of i.changedTouches)this.touchLook&&s.identifier===this.touchLook.id&&(this.touchLook=null)};t.addEventListener("touchend",e),t.addEventListener("touchcancel",e)}requestLock(){if(this.dom.requestPointerLock&&!("ontouchstart"in window&&navigator.maxTouchPoints>0))try{const t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}down(t){return this.enabled&&this.keys.has(t)}hit(t){return this.enabled&&this.pressed.has(t)}axis(){if(!this.enabled)return{x:0,y:0};let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),this.joy.active&&(t+=this.joy.x,e+=this.joy.y);const i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,y:e}}consumeLook(){const t={x:this.lookDX,y:this.lookDY};return this.lookDX=this.lookDY=0,t}endFrame(){this.pressed.clear(),this.wheel=0}dispose(){window.removeEventListener("keydown",this._kd),window.removeEventListener("keyup",this._ku),window.removeEventListener("mousemove",this._mm),window.removeEventListener("wheel",this._wh),window.removeEventListener("mousedown",this._md),window.removeEventListener("mouseup",this._mu),window.removeEventListener("blur",this._blur),document.removeEventListener("pointerlockchange",this._plc)}}function BS(){const n=Ib(),t=n.x1-n.x0,e=n.z1-n.z0,i=2048/Math.max(t,e),s=Math.ceil(t*i),r=Math.ceil(e*i),o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.fillStyle="#dcd6c8",a.fillRect(0,0,s,r);const l=4,c=m=>[parseInt(m.slice(1,3),16),parseInt(m.slice(3,5),16),parseInt(m.slice(5,7),16)],u={};for(const m in Tn)u[m]=c(Tn[m].color);const h=a.createImageData(s,r);for(let m=0;m<r;m+=l)for(let d=0;d<s;d+=l){const w=n.x0+(d+l/2)/i,y=n.z0+(m+l/2)/i,v=fs(w,y);let[L,M,E]=u[v]||[200,200,200];L=L*.28+228*.72,M=M*.28+222*.72,E=E*.28+208*.72;const I=gm(w,y);if(I>1){const A=Math.min(1,I/140);L=150-A*60,M=190-A*60,E=120-A*50}else Da(w,y)&&(L=168,M=206,E=140);for(let A=0;A<l&&m+A<r;A++)for(let S=0;S<l&&d+S<s;S++){const D=((m+A)*s+d+S)*4;h.data[D]=L,h.data[D+1]=M,h.data[D+2]=E,h.data[D+3]=255}}a.putImageData(h,0,0);const f=m=>(m-n.x0)*i,p=m=>(m-n.z0)*i;a.fillStyle="rgba(90,70,60,0.35)";const g=8;let _=null;for(let m=0;m<r;m+=g){let d=null;const w=[];for(let y=0;y<s;y+=g){const v=fs(n.x0+y/i,n.z0+m/i);w.push(v),(d&&d!==v||_&&_[w.length-1]!==v)&&a.fillRect(y-1,m-1,2,2),d=v}_=w}a.strokeStyle="#6fa8d8",a.lineCap="round",a.lineJoin="round";for(const m of gl)for(let d=1;d<m.pts.length;d++){const w=m.pts[d-1],y=m.pts[d];a.lineWidth=Math.max(1.5,(w.w+y.w)/2*i),a.beginPath(),a.moveTo(f(w.x),p(w.z)),a.lineTo(f(y.x),p(y.z)),a.stroke()}for(const m of[0,1])for(const d of _l)a.strokeStyle=m===0?"#9a9080":d.ped?"#f0e8d0":d.w>=14?"#ffd88a":"#ffffff",a.lineWidth=Math.max(1,d.w*i)+(m===0?1.5:0),a.beginPath(),d.pts.forEach((w,y)=>y?a.lineTo(f(w.x),p(w.z)):a.moveTo(f(w.x),p(w.z))),a.stroke();return a.setLineDash([6,4]),a.strokeStyle="#d8302a",a.lineWidth=2,a.beginPath(),Tu.pts.forEach((m,d)=>d?a.lineTo(f(m.x),p(m.z)):a.moveTo(f(m.x),p(m.z))),a.stroke(),a.setLineDash([]),{canvas:o,bounds:n,scale:i}}function VS(){return{beilin:[34.248,108.955],lianhu:[34.27,108.925],xincheng:[34.27,108.99],yanta:[34.2,108.97],weiyang:[34.34,108.95],lintong:[34.36,109.22],changan:[34.07,108.91],baqiao:[34.31,109.07]}}const bs={DECK_Y:33,RESTAURANT_Y:24,CORE:[3,3]},HS=[{id:"huacheng",name:"钟楼",desc:"碑林区 · 古城中心",lm:"huacheng",off:[0,0,34],yaw:0},{id:"beijingroad",name:"永宁门",desc:"碑林区 · 明城墙南门",lm:"beijingroad",off:[0,0,38],yaw:0},{id:"cantontower",name:"大雁塔",desc:"雁塔区 · 慈恩寺塔前",lm:"cantontower",off:[0,0,38],yaw:0},{id:"shamian",name:"大唐不夜城",desc:"雁塔区 · 盛唐天街",lm:"shamian",off:[0,0,60],yaw:Math.PI},{id:"muslimquarter",name:"回民街",desc:"莲湖区 · 长安市井",lm:"muslimquarter",off:[0,0,28],yaw:0},{id:"chenclan",name:"兵马俑",desc:"临潼区 · 秦俑一号坑",lm:"chenclan",off:[0,0,48],yaw:0},{id:"huaqing",name:"华清宫",desc:"临潼区 · 骊山脚下",lm:"huaqing",off:[0,0,45],yaw:0},{id:"baiyungate",name:"骊山",desc:"临潼区 · 索道下站",lm:"baiyungate",off:[0,0,18],yaw:0}];class GS{constructor(t){this.container=t;const e=Q.save.settings;this.renderer=new rm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.pixelRatio()),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=e.shadows&&e.quality!=="low",this.renderer.shadowMap.type=Pp,this.renderer.toneMapping=Lp,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.shadows=this.renderer.shadowMap.enabled,this.scene=new sh,this.camera=new vn(65,t.clientWidth/t.clientHeight,.1,4500),this.world=new yb,this.interact=new TS,this.input=new zS(this.canvas),this.audio=Sr,this.audio.unlock(),this.sky=new Sb(this.scene,this.renderer),this.sky.onWeatherChange=s=>{const r=ns[s];this.audio.weather(s),_e(`${r.icon} 天气变化：${r.name}`,s==="typhoon"?"warn":"info"),s==="typhoon"&&ws("❄️ 降雪提示","古城落雪，路面湿滑，请慢慢游览")},this.water=new Hb(this.scene,e.reflect&&e.quality==="high"),this.roads=Gb(this.scene),this.npcs=new ES(this.scene,this.world,this),this.landmarks=new bS(this.scene,this.world,this),this.landmarks.buildLODs(),this.city=new jb(this.scene,this.world,[...this.landmarks.exclusions(),...Pr.map(s=>({x:s.x,z:s.z,r:9})),...ga.map(s=>({x:s.x,z:s.z,r:14}))]),this.city.shadows=this.shadows,this.transport=new DS(this.scene,this.world,this);for(const s of this.transport.stops)this.city.excl.push({x:s.wx,z:s.wz,r:7});this.photo=new FS(this.renderer),this.applyQuality(),this.setupCable(),this.baseMap=BS(this.landmarks);const i=Q.save.profile;this.player=new OS(this.scene,this.world,this.profileSkin(i),[]),this.clock=new fm,this.time=0,this.hudT=0,this.lastDistrict=null,this.running=!1,this.captureReq=null,this.fovTarget=65,this.waypointMesh=this.makeWaypoint(),this.scene.add(this.waypointMesh),this.walkAcc=0,this.stepAcc=0,this.input.onKey=s=>this.onKey(s),this.onBusArrive=s=>{this.player.ride&&this.player.ride.type==="bus"&&(this.audio.transport("bus"),_e(`🚌 到站：${s.name}站（按 E 下车）`,"info",5e3))},this._resize=()=>this.resize(),window.addEventListener("resize",this._resize),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t),this.canvas.addEventListener("click",()=>{!Q.ui.panel&&!Q.ui.dialog&&!Q.ui.mobile&&(Q.ui.photoMode?this.shutter():this.input.requestLock())}),document.addEventListener("pointerlockchange",()=>Q.ui.pointerLocked=document.pointerLockElement===this.canvas),Ji()}pixelRatio(){const t=Q.save.settings.quality,e=window.devicePixelRatio||1;return t==="low"?Math.min(e,.8):t==="medium"?Math.min(e,1):Math.min(e,1.5)}applyQuality(){const t=Q.save.settings,e=t.quality;this.renderer.setPixelRatio(this.pixelRatio()),this.city.viewR=e==="low"?800:e==="medium"?1050:1300,this.city.detailR=e==="low"?380:e==="medium"?480:600,this.npcs.max=e==="low"?22:e==="medium"?40:55,this.water.setReflect(t.reflect&&e!=="low");const i=t.shadows&&e!=="low";i!==this.renderer.shadowMap.enabled&&(this.renderer.shadowMap.enabled=i,this.scene.traverse(s=>s.material&&(s.material.needsUpdate=!0))),this.sky.dir.castShadow=i,this.sky.speed=24/1200*(t.timeSpeed||1),this.resize()}profileSkin(t){if(t&&t.customSkin){const e=document.createElement("canvas");e.width=e.height=64;const i=new Image;return i.onload=()=>{e.getContext("2d").drawImage(i,0,0,64,64),this.player&&this.player.setSkin(e),this.player&&(this.player.char.mat.map.needsUpdate=!0)},i.src=t.customSkin,e}return oh(t?t.skinParams:{gender:"m",seed:1})}refreshSkin(){this.player.setSkin(this.profileSkin(Q.save.profile))}setupCable(){this.landmarks.byId.baiyungate,this.landmarks.byId.baiyun;const t=this.landmarks.toWorld("baiyungate",18,10,-4),e=this.landmarks.toWorld("baiyun",9,6,-9);this.transport.setupCable(t,e)}makeWaypoint(){const t=new He,e=new oe(new Pe(1.2,400,1.2),new Li({color:16764992,transparent:!0,opacity:.35,depthWrite:!1,fog:!1}));return e.position.y=200,t.add(e),t.visible=!1,t}setWaypoint(t){Q.ui.waypoint=t,this.waypointMesh.visible=!!t,t&&this.waypointMesh.position.set(t.x,0,t.z)}resize(){const t=this.container.clientWidth,e=this.container.clientHeight;!t||!e||(this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.photo&&this.photo.resize())}async spawnAt(t,e){let i,s,r,o;if(t.pos)({x:i,y:s,z:r}=t.pos),o=t.yaw||0;else{const a=this.landmarks.toWorld(t.lm,...t.off);i=a.x,r=a.z,s=a.y,o=t.yaw}this.player.teleport(i,s+.2,r,o),await this.preload(i,r,e),this.player.pos.y=Math.max(this.player.groundAt(i,r,s+3),s),this.lastDistrict=null}async preload(t,e,i){const s=()=>new Promise(u=>setTimeout(u,0));let r=this.landmarks.pending(t,e)+1,o=0;for(;this.landmarks.pending(t,e)>0;)this.landmarks.update(0,0,t,e,0,1),o++,i&&i(Math.min(.6,o/r*.6),"正在搭建景点…"),await s();const a=this.city.viewR;this.city.viewR=Math.min(a,700);let l=999,c=0;for(;l>0&&c<400;)l=this.city.update(t,e,3),c++,i&&i(.6+Math.min(.39,c/120),"正在生成城市街区…"),await s();this.city.viewR=a}start(){if(this.running)return;this.running=!0,this.clock.start();const t=()=>{this.running&&(this.raf=requestAnimationFrame(t),this.frame())};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}dispose(){this.stop(),window.removeEventListener("resize",this._resize),this.ro.disconnect(),this.input.dispose(),this.audio.dispose(),this.renderer.dispose(),this.canvas.remove()}frame(){const t=Math.min(.05,this.clock.getDelta());this.time+=t;const e=Q.ui,i=!!e.panel||!!e.dialog||e.fade;this.input.enabled=!i;const s=this.player,r=s.onGround;s.sensitivity=Q.save.settings.sensitivity||1;const a=this.sky.update(t,this.camera,s.pos).night;Ub(a),this.renderer.toneMappingExposure=1.05+a*.45;const l=s.pos.clone();i?(this.input.consumeLook(),s.char.update(t,0)):s.update(t,this.input,this.sky),e.photoMode&&s.view==="selfie"&&(s.char.setAnim(this.selfiePose||"pose"),s.char.showAccessory("umbrella",!1));const c=Math.hypot(s.pos.x-l.x,s.pos.z-l.z);if(!s.ride&&!s.scripted&&c<5){if(this.walkAcc+=c*2.5,s.onGround&&c>.001){this.stepAcc+=c;const h=s.speed>10?1.65:1.2;this.stepAcc>=h&&(this.stepAcc%=h,this.audio.step(s.speed>10))}this.walkAcc>50&&(Ke.count("walk",Math.round(this.walkAcc)),this.walkAcc=0)}if(r&&!s.onGround&&s.vy>4&&this.audio.jump(),!r&&s.onGround&&this.audio.land(),this.landmarks.update(t,this.time,s.pos.x,s.pos.z,a,1),this.city.update(s.pos.x,s.pos.z,1),this.npcs.update(t,s),this.transport.update(t,s.pos.x,s.pos.z)==="done"&&s.ride&&s.ride.type==="cruise"&&this.endCruise(),this.water.update(this.time,this.camera,this.scene.fog,a),this.audio.update({weather:this.sky.weather,night:a,speed:s.speed,ride:s.ride&&s.ride.type}),this.fovTarget=e.photoMode?this.photoFov||55:65,this.camera.fov+=(this.fovTarget-this.camera.fov)*Math.min(1,t*8),this.camera.updateProjectionMatrix(),s.updateCamera(this.camera,t),this.debugCam){const h=this.debugCam;this.camera.position.set(h[0],h[1],h[2]),this.camera.lookAt(h[3],h[4],h[5])}if(this.sky.weather==="typhoon"&&!e.photoMode&&(this.camera.position.x+=Math.sin(this.time*13)*.04,this.camera.position.y+=Math.sin(this.time*17)*.03),this.updateInteractions(),this.checkDiscovery(),this.photo.filter=e.photoMode?e.filter:"none",this.photo.render(this.scene,this.camera,this.time),this.captureReq){const h=this.captureReq;this.captureReq=null,this.finishCapture(h)}this.hudT-=t,this.hudT<=0&&(this.hudT=.2,this.updateHUD(t)),this.input.endFrame()}updateHUD(t){const e=this.player,i=Q.ui.hud,s=fs(e.pos.x,e.pos.z);i.district=Tn[s]?Tn[s].name:"";const r=this.landmarks.nearest(e.pos.x,e.pos.z,160);if(i.place=r?r.def.name:"",i.time=Ol(this.sky.hour),i.period=this.sky.period,i.weather=this.sky.weather,i.weatherName=ns[this.sky.weather].name,i.weatherIcon=this.sky.night>.5&&this.sky.weather==="sunny"?"🌙":ns[this.sky.weather].icon,i.fps=Math.round(1/Math.max(.001,t)),i.heading=this.player.camYaw,i.speed=e.speed,i.night=this.sky.night,i.x=e.pos.x,i.z=e.pos.z,i.alt=Math.round(e.pos.y*2.5),s!==this.lastDistrict){this.lastDistrict;{const o=Tn[s];o&&ws(`进入 ${o.name}`,o.theme),Ke.district(s)}this.lastDistrict=s}if(e.ride&&e.ride.type==="bus"){const o=this.transport.stops[this.transport.busStopIdx];i.ride=this.transport.busWait>0?`🚌 停靠 ${o.name}站 · 按 E 下车`:"🚌 观光巴士行驶中…"}else e.ride&&e.ride.type==="cruise"?i.ride="🚢 曲江夜游中 · WASD 在甲板走动 · C 拍照 · E 提前下船":e.ride&&e.ride.type==="ebike"?i.ride=`🛵 共享电单车 · ${Math.round((e.ride.speed||0)*1.8)} km/h · WASD 骑行 · E 停车`:e.scripted&&this.rideLabel?i.ride=this.rideLabel():i.ride=null;this.saveT=(this.saveT||0)+.2,this.saveT>15&&!e.ride&&!e.scripted&&(this.saveT=0,Q.save.lastPos={x:e.pos.x,y:e.pos.y,z:e.pos.z,yaw:e.camYaw},zs())}checkDiscovery(){const t=this.player;for(const e of this.landmarks.items){if(e.def.hidden)continue;const i=(e.def.rect?Math.max(e.def.rect[0],e.def.rect[1]):20)+25;Math.abs(e.x-t.pos.x)>i||Math.abs(e.z-t.pos.z)>i||Math.hypot(e.x-t.pos.x,e.z-t.pos.z)<i&&Ke.discover(e.def.id)&&(this.audio.discover(),this.triggerEffect("discover",900),ws(`📍 发现新景点：${e.def.name}`,`${e.def.grade}级 · ${Tn[e.def.district].name} · 按 C 拍照收集`))}}triggerEffect(t,e=700){const i={type:t,id:Math.random()};Q.ui.effect=i,setTimeout(()=>{Q.ui.effect&&Q.ui.effect.id===i.id&&(Q.ui.effect=null)},e)}updateInteractions(){const t=Q.ui,e=this.player;if(t.panel||t.dialog||t.photoMode){t.prompt=null;return}if(e.ride){t.prompt=e.ride.type==="bus"?this.transport.busWait>0?{label:"下车"}:null:{label:"下船"},this.currentInteract=null;return}if(e.scripted){t.prompt=null;return}const i=this.interact.nearest(e.pos.x,e.pos.y,e.pos.z),s=this.npcs.nearestTo(e.pos.x,e.pos.z,2.6);let r=null;s&&(!i||Math.hypot(s.x-e.pos.x,s.z-e.pos.z)<Math.hypot(i.x-e.pos.x,i.z-e.pos.z))?r={npc:s}:i&&(r={it:i}),this.currentInteract=r,r?r.npc?t.prompt={label:`与 ${r.npc.name}（${r.npc.typeName}）聊天`}:t.prompt={label:r.it.label}:t.prompt=null}onKey(t){const e=Q.ui;if(e.screen!=="game")return;if(t==="Escape"){e.dialog?this.closeDialog():e.panel?e.panel=null:e.photoMode&&this.togglePhoto(!1);return}if(e.dialog){if(t==="KeyE"||t==="Enter"){const s=e.dialog.options&&e.dialog.options[0];s?s.action():this.closeDialog()}return}const i={KeyM:"map",KeyB:"bag",KeyP:"album",KeyN:"dex",KeyJ:"tasks",KeyH:"help"};if(i[t]){this.audio.ui(),e.panel=e.panel===i[t]?null:i[t],e.panel&&this.input.exitLock();return}if(!e.panel)if(t==="KeyC")this.togglePhoto();else if(t==="KeyV")e.photoMode?this.cyclePhotoView():this.player.view=this.player.view==="first"?"third":"first";else if(t==="KeyE")this.doInteract();else if(e.photoMode&&(t==="Enter"||t==="KeyF"))this.shutter();else if(e.photoMode&&/^Digit[1-6]$/.test(t)){const s=["none","lingnan","night","fresh","bw","pixel"][Number(t.slice(5))-1];e.filter=s}else t==="KeyT"&&(this.sky.hour=(Math.floor(this.sky.hour/6)*6+6)%24+.5,this.audio.discover(),this.triggerEffect("time",850),_e(`⏰ 时间跳转到 ${Ol(this.sky.hour)}`))}togglePhoto(t){const e=Q.ui,i=t??!e.photoMode;this.audio.ui(),e.photoMode=i,i?(this.prevView=this.player.view,this.player.view=e.photoView||"third",this.player.char.showAccessory("camera",!0),this.photoFov=55):(this.player.view=this.prevView==="selfie"?"third":this.prevView||"third",this.player.char.showAccessory("camera",!1),this.player.char.setAnim("idle"))}setPhotoView(t){Q.ui.photoView=t,this.player.view=t,t==="selfie"&&(this.player.camYaw=this.player.modelYaw)}cyclePhotoView(){const t=["third","first","selfie"],e=t.indexOf(Q.ui.photoView);this.setPhotoView(t[(e+1)%3])}shutter(){!Q.ui.photoMode||this.captureReq||(this.audio.shutter(),this.captureReq={view:Q.ui.photoView,filter:Q.ui.filter})}finishCapture(t){const e=this.photo.recognize(this.camera,this.landmarks.items.filter(f=>f.loaded||f.lodGroup),this.world),i=this.player,s=Tn[fs(i.pos.x,i.pos.z)],r=this.sky.night>.5,o=e.map(f=>f.def.name),a=o.length?o.slice(0,3).join(" · "):Q.ui.hud.place||s.name,l=`${s.name} · ${Ol(this.sky.hour)} ${this.sky.period} · ${ns[this.sky.weather].name} · 方块长安`,c=this.photo.capture(this.canvas,{title:a,sub:l});Q.ui.flash=!0,setTimeout(()=>Q.ui.flash=!1,180);const u={id:Date.now(),full:c.full,thumb:c.thumb,title:a,sub:l,landmarks:e.map(f=>f.def.id),filter:t.filter,view:t.view,night:r,district:s.name};this.photo.savePhoto(u),Q.ui.lastPhoto={thumb:c.thumb,title:a},setTimeout(()=>{Q.ui.lastPhoto&&Q.ui.lastPhoto.thumb===c.thumb&&(Q.ui.lastPhoto=null)},3500);const h=Ke.photo(u.landmarks,{night:r,selfie:t.view==="selfie"});if(h.length)for(const f of h)_e(`📖 图鉴解锁·建筑：${this.landmarks.byId[f].def.name}`,"dex",4500);else e.length?_e("📷 已保存到相册："+a):_e("📷 已保存到相册（画面中没有识别到景点，靠近一些试试）")}dialog(t){Q.ui.dialog=t,this.input.exitLock()}closeDialog(){const t=Q.ui.dialog;Q.ui.dialog=null,t&&t.onClose&&t.onClose()}doInteract(){this.audio.interact();const t=this.player;if(t.ride){t.ride.type==="bus"?this.transport.busWait>0?this.alightBus():_e("巴士行驶中，请到站后再下车"):t.ride.type==="cruise"?this.endCruise():t.ride.type==="ebike"&&this.endEBike();return}const e=this.currentInteract;if(!e)return;if(e.npc)return this.talkNPC(e.npc);const i=e.it;switch(i.type){case"elevator":return this.dialog({title:"大雁塔 · 登塔",text:"沿塔内阶梯登临各层（游戏中快速抵达）。请选择目的地：",options:[{label:"七层 · 长安眺望台",action:()=>this.rideElevator(bs.DECK_Y)},{label:"五层 · 玄奘文化展",action:()=>this.rideElevator(bs.RESTAURANT_Y)},{label:"取消",action:()=>this.closeDialog()}]});case"elevatorTop":return this.dialog({title:"大雁塔 · 登塔",text:"请选择目的楼层：",options:[{label:"返回地面",action:()=>this.rideElevator(0)},{label:"七层 · 长安眺望台",action:()=>this.rideElevator(bs.DECK_Y)},{label:"五层 · 玄奘文化展",action:()=>this.rideElevator(bs.RESTAURANT_Y)},{label:"取消",action:()=>this.closeDialog()}]});case"shop":Q.ui.shop={id:i.shop,...e_[i.shop]},Q.ui.panel="shop",this.input.exitLock();return;case"culture":{const s=So[i.id];return Ke.culture(i.id),this.dialog({title:`${s.icon} ${s.name}`,text:s.desc,options:[{label:"好的",action:()=>this.closeDialog()}]})}case"info":return this.dialog({title:i.label,text:i.text,options:[{label:"知道了",action:()=>this.closeDialog()}]});case"view":{Ke.view(i.id);const s=this.landmarks.byId[i.landmark];return this.dialog({title:i.label,text:(s?s.def.desc:"")+`

小贴士：按 C 进入摄影模式拍下眼前的风景。`,options:[{label:"拍照",action:()=>{this.closeDialog(),this.togglePhoto(!0)}},{label:"关闭",action:()=>this.closeDialog()}]})}case"metro":Q.ui.metroFrom=i.station,Q.ui.panel="metro",this.input.exitLock();return;case"bus":return this.busInteract(i.stop);case"ebike":return this.dialog({title:"🛵 共享电动自行车",text:`扫码解锁 ${i.bike.station.name} 附近车辆。
W/S 加速或倒车，A/D 转向，E 安全停车。请遵守交通规则。`,options:[{label:"扫码骑行（¥5）",action:()=>this.rentEBike(i)},{label:"取消",action:()=>this.closeDialog()}]});case"wallUp":return this.enterWall(i);case"wallDown":return this.leaveWall(i);case"cruise":return this.dialog({title:"🚢 曲江夜游",text:`从${ga.find(s=>s.id===i.pier).name}登船，环游曲江池，欣赏亭台、水岸与盛唐灯影。
船票 ¥60（夜晚体验最佳）。`,options:[{label:"购票登船（¥60）",action:()=>this.startCruise(i)},{label:"取消",action:()=>this.closeDialog()}]});case"cable":return this.dialog({title:"🚡 骊山索道",text:i.dir>0?"乘坐索道上山，前往晚照亭方向（¥25）。":"乘坐索道下山，返回华清宫一侧（¥25）。",options:[{label:"购票乘坐（¥25）",action:()=>this.rideCable(i.dir)},{label:"取消",action:()=>this.closeDialog()}]})}}talkNPC(t){t.talkingToPlayer=!0;const e=!t.talked;t.talked=!0,e&&Ke.talk();const i=()=>this.dialog({title:`${t.name}`,sub:t.typeName,text:this.npcs.talkLine(t),npc:t,options:[{label:"再聊聊",action:()=>i()},{label:"一起合影",action:()=>{this.closeDialog(),this.togglePhoto(!0),this.setPhotoView("selfie"),t.talkingToPlayer=!0,setTimeout(()=>t.talkingToPlayer=!1,8e3)}},{label:"拜拜",action:()=>this.closeDialog()}],onClose:()=>t.talkingToPlayer=!1});i()}buy(t){const e=Ei[t]||Ln[t],i=e.price||0;if(Q.save.money<i)return _e("💸 钱不够了，完成任务可以获得奖励","warn");Ke.buy(t,i)&&(this.audio.purchase(),this.triggerEffect("reward",750),_e(`购买成功：${e.icon} ${e.name}  -¥${i}`))}metroTravel(t){this.audio.transport("metro"),Q.ui.panel=null;const e=Q.ui.metroFrom;e&&e.id===t.id||this.fade(`🚇 西安地铁 ${t.lines.join(" / ")} · 开往 ${t.name}`,async()=>{const i=Oe(t.x,t.z);this.player.teleport(t.x,i+.3,t.z+6,Math.PI),await this.preload(t.x,t.z+6),this.player.pos.y=this.player.groundAt(t.x,t.z+6,i+3),Ke.count("metro"),_e(`已到达 ${t.name}`)})}fade(t,e){const i=Q.ui;i.fade=!0,i.fadeText=t,setTimeout(async()=>{await e(),setTimeout(()=>i.fade=!1,600)},900)}busInteract(t){if(this.transport.busAt(t)){if(Q.save.money<2)return _e("车费不足","warn");Q.save.money-=2;const e=this.player;e.ride={type:"bus",obj:this.transport.bus,local:new V(.7,3.35,1.4),sit:!0,faceYaw:0},e.view="third",e.camDist=9,Ke.count("bus"),this.audio.transport("bus"),_e("🚌 已上车（¥2）。到站后按 E 下车")}else{const e=this.transport.busETA(t);this.dialog({title:"🚌 长安观光巴士 1 路",text:`线路：钟楼 ⇄ 永宁门 ⇄ 陕历博 ⇄ 大雁塔 ⇄ 大唐不夜城 ⇄ 曲江池
下一班车预计 ${e} 秒后到达 ${t.name}站，请在站台稍候。`,options:[{label:"好的",action:()=>this.closeDialog()}]})}}alightBus(){const t=this.transport.stops[this.transport.busStopIdx],e=this.player;e.ride=null,e.teleport(t.wx,.2,t.wz,e.camYaw),e.pos.y=e.groundAt(t.wx,t.wz,3),_e(`已在 ${t.name}站 下车`)}rentEBike(t){if(this.closeDialog(),Q.save.money<5)return _e("解锁电单车需要 ¥5","warn");Q.save.money-=5;const e=t.bike;t.disabled=!0,e.obj.position.set(this.player.pos.x,this.player.groundAt(this.player.pos.x,this.player.pos.z,this.player.pos.y)+.04,this.player.pos.z),this.player.ride={type:"ebike",obj:e.obj,bike:e,heading:e.heading||this.player.modelYaw,speed:0},this.player.view="third",this.player.camDist=7,Ke.count("ebike"),this.audio.transport("ebike"),this.triggerEffect("reward",500),_e("🛵 已解锁（¥5）· WASD 骑行 · E 停车")}endEBike(){const t=this.player.ride;if(!t||t.type!=="ebike")return;const e=t.bike;e.heading=t.heading,e.speed=0;const i=e.obj.position.x+Math.cos(t.heading)*1.35,s=e.obj.position.z-Math.sin(t.heading)*1.35;this.player.ride=null,this.player.teleport(i,Oe(i,s)+.3,s,this.player.camYaw),this.player.pos.y=this.player.groundAt(i,s,4),e.interact.x=e.obj.position.x,e.interact.y=e.obj.position.y,e.interact.z=e.obj.position.z,e.interact.label="继续骑行共享电单车（¥5）",e.interact.disabled=!1,this.audio.transport("ebike"),_e("🅿️ 已停车锁车，感谢文明骑行")}enterWall(t){const e=t.topLocal,i=this.landmarks.toWorld(t.landmark,e.x,e.y,e.z);Ke.view("wallride:"+t.landmark),this.audio.transport("elevator"),this.fade("🏰 登上西安城墙…",()=>{this.player.teleport(i.x,i.y,i.z,this.player.camYaw),ws("登临明城墙","漫步青砖马道，俯瞰千年古都"),_e("📷 可沿城墙行走拍照，靠近出口按 E 下城")})}leaveWall(t){const e=t.groundLocal,i=this.landmarks.toWorld(t.landmark,e.x,e.y,e.z);this.fade("🏰 沿马道下城…",()=>this.player.teleport(i.x,i.y,i.z,this.player.camYaw))}startCruise(t){if(this.closeDialog(),Q.save.money<60)return _e("船票需要 ¥60","warn");Q.save.money-=60,this.audio.transport("cruise"),this.cruisePier=ga.find(e=>e.id===t.pier),this.fade("🚢 登船中…",()=>{const e=this.transport.startCruise(this.cruisePier),i=this.player;i.ride={type:"cruise",obj:e,local:new V(0,6.95,-6),free:!0,bounds:[-2.7,2.7,-9.8,3.8]},i.view="third",Ke.count("cruise"),this.sky.night<.5&&_e("💡 提示：夜晚乘船可以看到曲江两岸唐风灯影（按 T 快进时间）","info",6e3)})}endCruise(){const t=this.cruisePier||ga[0];this.transport.boatState.active=!1,this.fade("🚢 靠岸下船…",()=>{const e=this.player;e.ride=null;const i=this.interact.items.find(o=>o.type==="cruise"&&o.pier===t.id),s=i?i.x:t.x,r=i?i.z:t.z;e.teleport(s,.5,r,e.camYaw),e.pos.y=e.groundAt(s,r,3),this.transport.placeIdleBoat(),_e("感谢乘坐曲江夜游！")})}rideElevator(t){this.closeDialog(),this.audio.transport("elevator");const e=this.landmarks.byId.cantontower,i=e.x,s=e.z+bs.CORE[1]+1.3,r=this.player,o=r.pos.y,a=t+(t?0:.6),l=Math.max(3,Math.abs(a-o)/30);let c=0;const u=this.transport.elevatorCab;u.visible=!0,r.view="third",r.camDist=7,this.rideLabel=()=>`🪜 大雁塔登塔 · 第 ${Math.max(1,Math.round(r.pos.y/5))} 层`,r.scripted=(h,f)=>{c+=h;const p=r_(ln(c/l,0,1));f.pos.set(i,Tp(o,a,p),s),f.modelYaw=0,u.position.set(i,f.pos.y-.2,s),c>=l&&(f.scripted=null,u.visible=!1,this.rideLabel=null,t===0?f.teleport(e.x,.8,e.z+23,0):f.teleport(e.x,t+.05,e.z+5.5,Math.PI),t===bs.DECK_Y?(Ke.deck(),ws("🗼 大雁塔 · 七层眺望台","北望古城，南眺曲江！按 C 拍照")):t===bs.RESTAURANT_Y&&ws("📜 玄奘文化展","了解佛经沿丝绸之路抵达长安的故事"))}}rideCable(t){if(this.closeDialog(),Q.save.money<25)return _e("票价 ¥25","warn");Q.save.money-=25,this.audio.transport("cable");const e=this.transport,i=this.player,s=e.gondolas[0];s.userData.ridden=!0;let r=0;const o=28;i.view="third",i.camDist=9,this.rideLabel=()=>`🚡 骊山索道 · 海拔 ${Math.round(i.pos.y*2.5)} 米`,i.scripted=(a,l)=>{r+=a/o;const c=t>0?r:1-r,u=e.cablePoint(c);if(s.position.copy(u),l.pos.set(u.x,u.y-2.3,u.z),r>=1){l.scripted=null,this.rideLabel=null,s.userData.ridden=!1;const h=t>0?this.landmarks.toWorld("baiyun",9,.5,-3):this.landmarks.toWorld("baiyungate",18,.3,3);l.teleport(h.x,h.y+.2,h.z,l.camYaw),l.pos.y=l.groundAt(h.x,h.z,h.y+3),Ke.count("cable"),_e(t>0?"已到达骊山 · 晚照亭":"已到达骊山索道下站")}}}}const Wt={game:null},yl=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},WS={class:"menu-root"},XS={key:0,class:"center"},$S={class:"col"},qS={key:0,class:"mc-panel help"},YS={key:1,class:"create mc-panel"},jS={class:"create-body"},KS={class:"form scroll"},ZS={class:"row"},JS={class:"row"},QS=["onClick"],t2={class:"row"},e2=["onClick"],n2={class:"row"},i2=["onClick"],s2={class:"row"},r2={class:"row"},o2={class:"ck"},a2={class:"ck"},l2={class:"ck"},c2={key:0,class:"ck"},u2={class:"row custom"},h2={class:"mc-btn small"},f2={class:"actions"},d2={key:2,class:"spawn mc-panel"},p2={class:"spawn-grid"},m2=["onClick"],g2={class:"sn"},_2={class:"muted"},v2={key:0,class:"found"},x2={class:"actions"},y2={__name:"Menu",emits:["start"],setup(n,{emit:t}){const e=t,i=Ae("menu"),s=Ae(!1),r=En(()=>!!Q.save.profile),o=Ae(Q.save.profile?Q.save.profile.name:""),a=Dr(Q.save.profile?{...Q.save.profile.skinParams}:{gender:"m",skin:go[0],hair:hr[0],hairStyle:"short",shirt:"#c8282a",pants:"#2a3a5a",shoes:"#222222",longSleeve:!1,shorts:!1,glasses:!1,dress:!1,seed:1}),l=Ae(Q.save.profile&&Q.save.profile.customSkin||null),c=[{v:"short",n:"短发"},{v:"long",n:"长发"},{v:"bald",n:"寸头"}],u=Ae(null);let h=null;function f(){i.value="create"}function p(){confirm("确定清除所有存档（含图鉴与进度）吗？")&&(c_(),location.reload())}function g(){const L=Math.random;a.gender=L()<.5?"m":"f",a.skin=go[Math.floor(L()*4)],a.hair=hr[Math.floor(L()*hr.length)],a.hairStyle=a.gender==="f"?"long":"short";const M=()=>"#"+Math.floor(L()*16777215).toString(16).padStart(6,"0");a.shirt=M(),a.pants=M(),a.shorts=L()<.3,a.glasses=L()<.2}function _(L){const M=L.target.files[0];if(!M)return;const E=new FileReader;E.onload=()=>{const I=new Image;I.onload=()=>{if(I.width!==64||I.height!==64&&I.height!==32)return alert("请上传 64×64 的皮肤图片");const A=document.createElement("canvas");A.width=A.height=64,A.getContext("2d").drawImage(I,0,0),l.value=A.toDataURL("image/png")},I.src=E.result},E.readAsDataURL(M)}function m(){Q.save.profile={name:o.value.trim()||"长安旅行家",skinParams:{...a},customSkin:l.value},zs(),Wt.game&&Wt.game.refreshSkin(),i.value="spawn"}function d(L){e("start",L)}function w(){if(l.value){const L=document.createElement("canvas");L.width=L.height=64;const M=new Image;return M.onload=()=>{L.getContext("2d").drawImage(M,0,0),h&&(h.ch.mat.map.needsUpdate=!0)},M.src=l.value,L}return oh(a)}function y(){const L=u.value;if(!L)return;const M=new rm({antialias:!0,alpha:!0});M.setPixelRatio(Math.min(2,window.devicePixelRatio)),M.setSize(L.clientWidth,L.clientHeight),M.outputColorSpace=$e,L.appendChild(M.domElement);const E=new sh;E.add(new um(16777215,6710886,2.2));const I=new hm(16777215,1.5);I.position.set(2,3,4),E.add(I);const A=new vn(35,L.clientWidth/L.clientHeight,.1,50);A.position.set(0,1.2,4.4),A.lookAt(0,.95,0);const S=new ah(w(),{accessories:["camera"]});E.add(S.group);const D=new oe(new Pe(1.6,.2,1.6),new hs({color:6265406}));D.position.y=-.1,E.add(D);let Z;const B=new fm,q=()=>{Z=requestAnimationFrame(q);const ot=B.getDelta();S.group.rotation.y+=ot*.7,S.update(ot,0),M.render(E,A)};q(),h={r:M,ch:S,stop:()=>cancelAnimationFrame(Z)}}function v(){h&&(h.stop(),h.r.dispose(),h.r.domElement.remove(),h=null)}return mr(i,async L=>{v(),L==="create"&&(await el(),y())}),mr([()=>({...a}),l],()=>{h&&h.ch.setSkin(w())}),Vu(v),(L,M)=>(dt(),mt("div",WS,[M[37]||(M[37]=Oa('<svg class="skyline" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" data-v-632218f5><defs data-v-632218f5><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1" data-v-632218f5><stop offset="0" stop-color="#1a2348" data-v-632218f5></stop><stop offset="0.6" stop-color="#6a4a7a" data-v-632218f5></stop><stop offset="1" stop-color="#f09a5a" data-v-632218f5></stop></linearGradient></defs><rect width="1200" height="400" fill="url(#sk)" data-v-632218f5></rect><g fill="#14161f" data-v-632218f5><rect x="0" y="300" width="1200" height="100" data-v-632218f5></rect><rect x="40" y="250" width="40" height="60" data-v-632218f5></rect><rect x="90" y="220" width="30" height="90" data-v-632218f5></rect><rect x="130" y="260" width="50" height="50" data-v-632218f5></rect><rect x="200" y="200" width="36" height="110" data-v-632218f5></rect><rect x="244" y="230" width="28" height="80" data-v-632218f5></rect><rect x="260" y="258" width="250" height="52" data-v-632218f5></rect><rect x="350" y="205" width="72" height="53" data-v-632218f5></rect><polygon points="338,205 386,174 434,205" data-v-632218f5></polygon><polygon points="548,310 558,274 566,274 570,236 578,236 582,196 590,196 594,152 602,152 608,104 616,152 624,152 628,196 636,196 640,236 648,236 652,274 662,274 672,310" data-v-632218f5></polygon><rect x="606" y="70" width="4" height="36" data-v-632218f5></rect><rect x="440" y="245" width="84" height="65" data-v-632218f5></rect><polygon points="428,245 482,205 536,245" data-v-632218f5></polygon><rect x="459" y="188" width="46" height="27" data-v-632218f5></rect><polygon points="450,188 482,162 514,188" data-v-632218f5></polygon><rect x="660" y="180" width="40" height="130" data-v-632218f5></rect><rect x="710" y="230" width="34" height="80" data-v-632218f5></rect><rect x="760" y="150" width="30" height="160" data-v-632218f5></rect><rect x="800" y="210" width="50" height="100" data-v-632218f5></rect><rect x="870" y="250" width="70" height="60" data-v-632218f5></rect><rect x="950" y="200" width="30" height="110" data-v-632218f5></rect><rect x="990" y="240" width="60" height="70" data-v-632218f5></rect><rect x="1060" y="190" width="36" height="120" data-v-632218f5></rect><rect x="1110" y="260" width="60" height="50" data-v-632218f5></rect></g><g fill="#ff5ab0" opacity="0.85" data-v-632218f5><rect x="575" y="200" width="22" height="4" data-v-632218f5></rect><rect x="579" y="160" width="14" height="3" data-v-632218f5></rect><rect x="571" y="260" width="30" height="4" data-v-632218f5></rect></g><rect x="0" y="330" width="1200" height="70" fill="#1d2a48" data-v-632218f5></rect><g fill="#ff7ac0" opacity="0.35" data-v-632218f5><rect x="570" y="335" width="32" height="60" data-v-632218f5></rect></g></svg>',1)),i.value==="menu"?(dt(),mt("div",XS,[M[17]||(M[17]=P("div",{class:"logo"},[P("div",{class:"big"},"方块长安"),P("div",{class:"sub"},"BLOCK XI'AN · 西安城市观光模拟器")],-1)),P("div",$S,[r.value?(dt(),mt("button",{key:0,class:"mc-btn primary wide",onClick:M[0]||(M[0]=E=>i.value="spawn")},"▶ 继续旅行（"+ut(O(Q).save.profile.name)+"）",1)):Jt("",!0),P("button",{class:ne(["mc-btn wide",{primary:!r.value}]),onClick:f},ut(r.value?"✎ 修改角色":"▶ 开始游戏"),3),P("button",{class:"mc-btn wide",onClick:M[1]||(M[1]=E=>s.value=!s.value)},"❓ 操作说明"),r.value?(dt(),mt("button",{key:1,class:"mc-btn wide small",onClick:p},"🗑 清除存档")):Jt("",!0)]),s.value?(dt(),mt("div",qS,[...M[16]||(M[16]=[Oa("<p data-v-632218f5><kbd data-v-632218f5>W</kbd><kbd data-v-632218f5>A</kbd><kbd data-v-632218f5>S</kbd><kbd data-v-632218f5>D</kbd> 移动 · 鼠标 旋转视角（点击画面锁定鼠标）· <kbd data-v-632218f5>Shift</kbd> 奔跑 · <kbd data-v-632218f5>空格</kbd> 跳跃</p><p data-v-632218f5><kbd data-v-632218f5>V</kbd> 第一/第三人称 · <kbd data-v-632218f5>C</kbd> 摄影模式 · <kbd data-v-632218f5>E</kbd> 交互/对话/乘车 · <kbd data-v-632218f5>T</kbd> 时间快进</p><p data-v-632218f5><kbd data-v-632218f5>M</kbd> 地图 · <kbd data-v-632218f5>B</kbd> 背包 · <kbd data-v-632218f5>P</kbd> 相册 · <kbd data-v-632218f5>N</kbd> 图鉴 · <kbd data-v-632218f5>J</kbd> 任务 · <kbd data-v-632218f5>H</kbd> 帮助 · <kbd data-v-632218f5>Esc</kbd> 关闭</p><p data-v-632218f5>移动端：建议横屏游玩，左侧虚拟摇杆移动，右侧滑动旋转视角，横屏时可用底部“⛶ 全屏”按钮。</p>",4)])])):Jt("",!0),M[18]||(M[18]=P("div",{class:"foot muted"},"西安地图比例缩小 · 1公里 ≈ 200格 · 8大区域 20+ 景点",-1))])):i.value==="create"?(dt(),mt("div",YS,[M[34]||(M[34]=P("div",{class:"mc-title"},"创建你的方块角色",-1)),P("div",jS,[P("div",{class:"preview",ref_key:"previewEl",ref:u},null,512),P("div",KS,[P("label",null,[M[19]||(M[19]=ge("名字 ",-1)),Ze(P("input",{"onUpdate:modelValue":M[2]||(M[2]=E=>o.value=E),maxlength:"10",placeholder:"长安旅行家"},null,512),[[Ls,o.value]])]),P("div",ZS,[M[20]||(M[20]=P("span",null,"性别",-1)),P("button",{class:ne(["mc-btn small",{active:a.gender==="m"}]),onClick:M[3]||(M[3]=E=>a.gender="m")},"男",2),P("button",{class:ne(["mc-btn small",{active:a.gender==="f"}]),onClick:M[4]||(M[4]=E=>a.gender="f")},"女",2),P("button",{class:"mc-btn small",onClick:g},"🎲 随机")]),P("div",JS,[M[21]||(M[21]=P("span",null,"肤色",-1)),(dt(!0),mt(qt,null,ae(O(go),E=>(dt(),mt("i",{key:E,class:ne(["sw",{on:a.skin===E}]),style:gn({background:E}),onClick:I=>a.skin=E},null,14,QS))),128))]),P("div",t2,[M[22]||(M[22]=P("span",null,"发色",-1)),(dt(!0),mt(qt,null,ae(O(hr),E=>(dt(),mt("i",{key:E,class:ne(["sw",{on:a.hair===E}]),style:gn({background:E}),onClick:I=>a.hair=E},null,14,e2))),128))]),P("div",n2,[M[23]||(M[23]=P("span",null,"发型",-1)),(dt(),mt(qt,null,ae(c,E=>P("button",{key:E.v,class:ne(["mc-btn small",{active:a.hairStyle===E.v}]),onClick:I=>a.hairStyle=E.v},ut(E.n),11,i2)),64))]),P("div",s2,[M[24]||(M[24]=P("span",null,"上衣",-1)),Ze(P("input",{type:"color","onUpdate:modelValue":M[5]||(M[5]=E=>a.shirt=E)},null,512),[[Ls,a.shirt]]),M[25]||(M[25]=P("span",null,"裤子",-1)),Ze(P("input",{type:"color","onUpdate:modelValue":M[6]||(M[6]=E=>a.pants=E)},null,512),[[Ls,a.pants]]),M[26]||(M[26]=P("span",null,"鞋子",-1)),Ze(P("input",{type:"color","onUpdate:modelValue":M[7]||(M[7]=E=>a.shoes=E)},null,512),[[Ls,a.shoes]])]),P("div",r2,[P("label",o2,[Ze(P("input",{type:"checkbox","onUpdate:modelValue":M[8]||(M[8]=E=>a.longSleeve=E)},null,512),[[Vo,a.longSleeve]]),M[27]||(M[27]=ge(" 长袖",-1))]),P("label",a2,[Ze(P("input",{type:"checkbox","onUpdate:modelValue":M[9]||(M[9]=E=>a.shorts=E)},null,512),[[Vo,a.shorts]]),M[28]||(M[28]=ge(" 短裤",-1))]),P("label",l2,[Ze(P("input",{type:"checkbox","onUpdate:modelValue":M[10]||(M[10]=E=>a.glasses=E)},null,512),[[Vo,a.glasses]]),M[29]||(M[29]=ge(" 眼镜",-1))]),a.gender==="f"?(dt(),mt("label",c2,[Ze(P("input",{type:"checkbox","onUpdate:modelValue":M[11]||(M[11]=E=>a.dress=E)},null,512),[[Vo,a.dress]]),M[30]||(M[30]=ge(" 裙子",-1))])):Jt("",!0)]),P("div",u2,[M[32]||(M[32]=P("span",null,"自定义皮肤",-1)),P("label",h2,[M[31]||(M[31]=ge("上传 64×64 PNG",-1)),P("input",{type:"file",accept:"image/png",hidden:"",onChange:_},null,32)]),l.value?(dt(),mt("button",{key:0,class:"mc-btn small",onClick:M[12]||(M[12]=E=>l.value=null)},"移除")):Jt("",!0)]),M[33]||(M[33]=P("div",{class:"muted hint"},"支持标准 Minecraft 皮肤格式（64×64）。",-1))])]),P("div",f2,[P("button",{class:"mc-btn",onClick:M[13]||(M[13]=E=>i.value="menu")},"返回"),P("button",{class:"mc-btn primary",onClick:m},"确认角色 ▶")])])):i.value==="spawn"?(dt(),mt("div",d2,[M[36]||(M[36]=P("div",{class:"mc-title"},"选择出生地点",-1)),P("div",p2,[O(Q).save.lastPos?(dt(),mt("button",{key:0,class:"spawn-card last",onClick:M[14]||(M[14]=E=>d({pos:O(Q).save.lastPos,yaw:O(Q).save.lastPos.yaw}))},[...M[35]||(M[35]=[P("div",{class:"sn"},"📍 上次位置",-1),P("div",{class:"muted"},"继续上次的旅程",-1)])])):Jt("",!0),(dt(!0),mt(qt,null,ae(O(HS),E=>(dt(),mt("button",{key:E.id,class:"spawn-card",onClick:I=>d(E)},[P("div",g2,ut(E.name),1),P("div",_2,ut(E.desc),1),O(Q).save.discovered.includes(E.lm)?(dt(),mt("div",v2,"✔ 已到访")):Jt("",!0)],8,m2))),128))]),P("div",x2,[P("button",{class:"mc-btn",onClick:M[15]||(M[15]=E=>i.value="menu")},"返回")])])):Jt("",!0)]))}},M2=yl(y2,[["__scopeId","data-v-632218f5"]]),b2={key:0,class:"mc-panel panel big"},S2={class:"map-body"},w2={class:"map-side scroll"},E2={class:"legend"},T2={class:"muted"},A2={key:0,class:"sel mc-panel"},C2={class:"muted"},R2={key:0,class:"desc"},P2={key:1,class:"desc muted"},L2={class:"lmlist"},D2=["onClick"],I2={class:"muted"},U2={key:0},N2={key:1,class:"mc-panel panel big"},F2={class:"head"},k2={class:"muted"},O2={class:"checklist"},z2={key:0,class:"viewer"},B2=["src"],V2={class:"vbar"},H2={class:"muted"},G2=["href","download"],W2={key:1,class:"photos scroll"},X2={key:0,class:"muted empty"},$2=["onClick"],q2=["src"],Y2={class:"pt"},j2={key:2,class:"mc-panel panel big"},K2={class:"head"},Z2={class:"muted"},J2={class:"tabs"},Q2=["onClick"],tw={class:"dex scroll"},ew={class:"ci"},nw={class:"cb"},iw={key:0,class:"muted"},sw={class:"muted small"},rw={class:"desc"},ow={class:"ci"},aw={class:"cb"},lw={class:"desc"},cw={class:"ci"},uw={class:"cb"},hw={class:"desc"},fw={key:3,class:"mc-panel panel"},dw={class:"head"},pw={class:"slots"},mw=["title"],gw={class:"si"},_w={class:"sn"},vw={key:0,class:"cnt"},xw={key:0,class:"muted"},yw={class:"slots"},Mw={class:"si"},bw={class:"sn"},Sw={class:"stats"},ww={key:4,class:"mc-panel panel"},Ew={class:"scroll tasklist"},Tw={class:"muted small"},Aw={class:"rw"},Cw={class:"muted sub"},Rw={class:"muted"},Pw={class:"rw"},Lw={class:"muted"},Dw={class:"muted small"},Iw={class:"rw"},Uw={key:5,class:"mc-panel panel"},Nw={class:"set"},Fw={class:"srow"},kw=["onClick"],Ow={class:"srow"},zw={class:"srow"},Bw={class:"srow"},Vw={class:"srow"},Hw=["onClick"],Gw={class:"srow"},Ww=["onClick"],Xw={class:"srow"},$w=["onClick"],qw={class:"srow"},Yw={key:6,class:"mc-panel panel"},jw={class:"head"},Kw={class:"mc-title"},Zw={class:"greet"},Jw={class:"shop"},Qw={class:"si"},tE={class:"cb"},eE={class:"muted small"},nE=["onClick"],iE={key:0,class:"have"},sE={key:7,class:"mc-panel panel"},rE={class:"muted"},oE={class:"metro scroll"},aE=["disabled","onClick"],lE={class:"lines"},cE={class:"muted small"},uE={key:8,class:"mc-panel panel"},hE={__name:"Panels",setup(n){const t=Q.ui,e=Q.save.settings,i=()=>t.panel=null,s=[{v:"low",n:"流畅"},{v:"medium",n:"均衡"},{v:"high",n:"高清"}],r=[{h:7,n:"早晨"},{h:14,n:"下午"},{h:18.2,n:"黄昏"},{h:21,n:"夜晚"}],o=[{id:"building",n:"🏛️ 建筑"},{id:"food",n:"🍜 食物"},{id:"culture",n:"🏮 文化"}],a=Ae("building"),l={changancenter:"前往钟楼，观察古城四条大街的交汇。",drum:"在鼓楼聆听晨钟暮鼓。",citywall:"从永宁门登上明城墙。",calligraphy:"前往碑林博物馆或书院门。",terracotta:"走进兵马俑一号坑。",tangdance:"夜游大唐不夜城或大唐芙蓉园。",tangart:"在陕西历史博物馆欣赏唐代艺术。",tangpalace:"探访大明宫含元殿遗址。",huaqing:"前往骊山脚下的华清宫。",silkroad:"探访清真大寺、小雁塔或大唐西市。",qin:"前往秦始皇陵。",qinling:"到秦岭北麓亲近自然。"},c=En(()=>Wt.game?Wt.game.landmarks.items.filter(at=>!at.def.hidden):[]),u=at=>Q.save.discovered.includes(at.def.id)||!!Q.save.photographed[at.def.id],h=En(()=>c.value.length+Object.keys(Ei).length+Object.keys(So).length),f=En(()=>Object.keys(Q.save.photographed).length+Q.save.foods.length+Q.save.culture.length),p=En(()=>(Q.save.daily.ids||[]).map(at=>{const W=al.find(k=>k.id===at);return{...W,done:!!Q.save.daily.done[at],p:Cp(W)}})),g=at=>Ei[at]||Ln[at],_={"1号线":"#1d8a53","2号线":"#c72535","3号线":"#8d4d92","4号线":"#62a746","6号线":"#245f9e","9号线":"#ef7b24","14号线":"#00a2a5"},m=at=>_[at]||"#888";function d(){zs(),e.audio&&Sr.unlock(),Sr.applySettings(),Wt.game&&(Wt.game.applyQuality(),Wt.game.sensitivity=e.sensitivity)}const w=Ae(Wt.game?Wt.game.sky.weatherLock:null);function y(at){Wt.game.sky.setWeather(at,!0),w.value=at}function v(){Wt.game.sky.unlock(),w.value=null}function L(at){Wt.game.sky.hour=at}function M(){t.panel=null,Wt.game.stop(),Q.ui.screen="menu",Wt.game.input.exitLock()}const E=Ae([]),I=Ae(null);async function A(){E.value=Wt.game?await Wt.game.photo.listPhotos():[]}async function S(at){confirm("删除这张照片？")&&(await Wt.game.photo.deletePhoto(at.id),I.value=null,A())}const D=Ae(null),Z=Ae(null),B=Ae(null),q={cx:0,cz:0,zoom:1};let ot=null;const it=En(()=>c.value.slice().sort((at,W)=>(u(W)?1:0)-(u(at)?1:0)));function ct(at){const W=Wt.game.player.pos,k=Math.hypot(at.x-W.x,at.z-W.z)*5;return k>1e3?(k/1e3).toFixed(1)+" km":Math.round(k)+" m"}function j(at){B.value=at,q.cx=at.x,q.cz=at.z,q.zoom=Math.max(q.zoom,3),bt()}function yt(at){Wt.game.setWaypoint({x:at.x,z:at.z,name:at.def.name}),bt()}function bt(){const at=D.value,W=Wt.game;if(!at||!W)return;const k=Z.value.clientWidth,Et=Z.value.clientHeight;at.width=k,at.height=Et;const T=at.getContext("2d"),U=W.baseMap,C=Math.min(k/U.canvas.width,Et/U.canvas.height),ft=C*q.zoom*U.scale,X=(H,tt)=>[(H-q.cx)*ft+k/2,(tt-q.cz)*ft+Et/2];T.fillStyle="#5a8ab8",T.fillRect(0,0,k,Et);const[J,nt]=X(U.bounds.x0,U.bounds.z0);T.imageSmoothingEnabled=q.zoom<4,T.drawImage(U.canvas,J,nt,U.canvas.width*C*q.zoom,U.canvas.height*C*q.zoom);const gt=VS();T.textAlign="center";for(const H in gt){const tt=Fr(gt[H][0],gt[H][1]),[et,Mt]=X(tt.x,tt.z);T.font=`bold ${Math.min(26,12+q.zoom*3)}px "Microsoft YaHei",sans-serif`,T.fillStyle="rgba(40,30,20,0.55)",T.fillText(Tn[H].name,et,Mt)}for(const H of Pr){const[tt,et]=X(H.x,H.z);T.fillStyle="#b8222a",T.fillRect(tt-4,et-4,8,8),q.zoom>3&&(T.font="11px sans-serif",T.fillStyle="#7a1010",T.fillText(H.name,tt,et+15))}for(const H of c.value){const[tt,et]=X(H.x,H.z),Mt=u(H);if(T.fillStyle=Q.save.photographed[H.def.id]?"#ffd040":Mt?"#ffffff":"#555",T.strokeStyle=B.value===H?"#ff3030":"#000",T.lineWidth=B.value===H?3:2,T.beginPath(),T.arc(tt,et,H.def.grade==="S"?7:5,0,Math.PI*2),T.fill(),T.stroke(),q.zoom>1.6||H.def.grade==="S"){T.font=`bold ${H.def.grade==="S"?13:11}px "Microsoft YaHei",sans-serif`,T.lineWidth=3,T.strokeStyle="#000";const vt=Mt?H.def.name:"？";T.strokeText(vt,tt,et-10),T.fillStyle="#fff",T.fillText(vt,tt,et-10)}}if(t.waypoint){const[H,tt]=X(t.waypoint.x,t.waypoint.z);T.fillStyle="#ffd040",T.beginPath(),T.moveTo(H,tt),T.lineTo(H-8,tt-16),T.lineTo(H+8,tt-16),T.fill()}const lt=W.player.pos,[b,x]=X(lt.x,lt.z);T.save(),T.translate(b,x),T.rotate(-W.player.camYaw),T.fillStyle="#ff3a3a",T.strokeStyle="#fff",T.lineWidth=2,T.beginPath(),T.moveTo(0,-11),T.lineTo(8,9),T.lineTo(0,4),T.lineTo(-8,9),T.closePath(),T.fill(),T.stroke(),T.restore(),T.textAlign="left";const N=200*ft;T.fillStyle="#000",T.fillRect(16,Et-20,N,4),T.font="12px sans-serif",T.fillText("1 km",16,Et-26),q.k=ft,q.T=X}function Ct(at){ot={x:at.clientX,y:at.clientY,cx:q.cx,cz:q.cz,moved:!1}}function Ft(at){if(!ot)return;const W=at.clientX-ot.x,k=at.clientY-ot.y;Math.abs(W)+Math.abs(k)>4&&(ot.moved=!0),q.cx=ot.cx-W/q.k,q.cz=ot.cz-k/q.k,bt()}function jt(at){if(ot&&!ot.moved&&at.type==="mouseup"){const W=D.value.getBoundingClientRect(),k=at.clientX-W.left,Et=at.clientY-W.top;let T=null,U=18;for(const C of c.value){const[ft,X]=q.T(C.x,C.z),J=Math.hypot(ft-k,X-Et);J<U&&(U=J,T=C)}T&&(B.value=T,bt())}ot=null}function K(at){q.zoom=Math.max(.8,Math.min(14,q.zoom*(at.deltaY<0?1.2:1/1.2))),bt()}let F=null;function z(at){const W=at.touches[0];F={x:W.clientX,y:W.clientY,cx:q.cx,cz:q.cz,d:at.touches.length>1?Math.hypot(at.touches[0].clientX-at.touches[1].clientX,at.touches[0].clientY-at.touches[1].clientY):0,zoom:q.zoom}}function pt(at){if(F){if(at.touches.length>1&&F.d){const W=Math.hypot(at.touches[0].clientX-at.touches[1].clientX,at.touches[0].clientY-at.touches[1].clientY);q.zoom=Math.max(.8,Math.min(14,F.zoom*W/F.d))}else{const W=at.touches[0];q.cx=F.cx-(W.clientX-F.x)/q.k,q.cz=F.cz-(W.clientY-F.y)/q.k}bt()}}return mr(()=>t.panel,async at=>{if(at==="album"&&(I.value=null,A()),at==="map"){await el();const W=Wt.game.player.pos;q.cx=W.x,q.cz=W.z,q.zoom=3,bt()}at==="settings"&&(w.value=Wt.game.sky.weatherLock)}),(at,W)=>O(t).panel?(dt(),mt("div",{key:0,class:"overlay",onMousedown:mn(i,["self"])},[O(t).panel==="map"?(dt(),mt("div",b2,[P("div",{class:"head"},[W[12]||(W[12]=P("span",{class:"mc-title"},"🗺 西安地图",-1)),W[13]||(W[13]=P("span",{class:"muted"},"滚轮缩放 · 拖动平移 · 点击景点设置导航",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",S2,[P("div",{class:"map-wrap",ref_key:"mapWrap",ref:Z},[P("canvas",{ref_key:"mapCv",ref:D,onMousedown:Ct,onMousemove:Ft,onMouseup:jt,onMouseleave:jt,onWheel:mn(K,["prevent"]),onTouchstart:mn(z,["prevent"]),onTouchmove:mn(pt,["prevent"])},null,544)],512),P("div",w2,[P("div",E2,[(dt(!0),mt(qt,null,ae(O(Tn),(k,Et)=>(dt(),mt("div",{key:Et,class:"lg"},[P("i",{style:gn({background:k.color})},null,4),ge(ut(k.name),1),P("span",T2,ut(k.theme),1)]))),128)),W[14]||(W[14]=Oa('<div class="lg" data-v-4809b69c><i style="background:#ffd040;border-radius:50%;" data-v-4809b69c></i>已拍摄 <i style="background:#fff;border-radius:50%;margin-left:8px;" data-v-4809b69c></i>已发现 <i style="background:#555;border-radius:50%;margin-left:8px;" data-v-4809b69c></i>未发现</div><div class="lg" data-v-4809b69c><i style="background:#b8222a;" data-v-4809b69c></i>地铁站 <i style="background:#d8302a;width:18px;height:3px;margin-left:8px;" data-v-4809b69c></i>观光巴士</div>',2))]),B.value?(dt(),mt("div",A2,[P("div",null,[P("span",{class:ne(["tag",B.value.def.grade])},ut(B.value.def.grade),3),P("b",null,ut(u(B.value)?B.value.def.name:"？？？"),1)]),P("div",C2,ut(O(Tn)[B.value.def.district].name)+" · 距离 "+ut(ct(B.value)),1),u(B.value)?(dt(),mt("div",R2,ut(B.value.def.desc),1)):(dt(),mt("div",P2,"尚未发现的景点，前往探索吧！")),P("button",{class:"mc-btn small green",onClick:W[0]||(W[0]=k=>yt(B.value))},"📍 设为导航目标")])):Jt("",!0),O(t).waypoint?(dt(),mt("button",{key:1,class:"mc-btn small",onClick:W[1]||(W[1]=k=>O(Wt).game.setWaypoint(null))},"取消导航")):Jt("",!0),P("div",L2,[(dt(!0),mt(qt,null,ae(it.value,k=>(dt(),mt("div",{key:k.def.id,class:ne(["lmi",{on:B.value===k}]),onClick:Et=>j(k)},[P("span",{class:ne(["tag",k.def.grade])},ut(k.def.grade),3),ge(ut(u(k)?k.def.name:"？？？")+" ",1),P("span",I2,ut(O(Tn)[k.def.district].name),1),O(Q).save.photographed[k.def.id]?(dt(),mt("span",U2,"📷")):Jt("",!0)],10,D2))),128))])])])])):O(t).panel==="album"?(dt(),mt("div",N2,[P("div",F2,[W[15]||(W[15]=P("span",{class:"mc-title"},"📷 长安旅游相册",-1)),P("span",k2,"共 "+ut(E.value.length)+" 张",1),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",O2,[(dt(!0),mt(qt,null,ae(c.value,k=>(dt(),mt("span",{key:k.def.id,class:ne(["ck",{on:O(Q).save.photographed[k.def.id]}])},ut(O(Q).save.photographed[k.def.id]?"☑":"☐")+" "+ut(u(k)?k.def.name:"？？？"),3))),128))]),I.value?(dt(),mt("div",z2,[P("img",{src:I.value.full},null,8,B2),P("div",V2,[P("b",null,ut(I.value.title),1),P("span",H2,ut(I.value.sub),1),P("a",{class:"mc-btn small green",href:I.value.full,download:"方块长安-"+I.value.id+".jpg"},"⬇ 下载",8,G2),P("button",{class:"mc-btn small",onClick:W[2]||(W[2]=k=>S(I.value))},"🗑 删除"),P("button",{class:"mc-btn small",onClick:W[3]||(W[3]=k=>I.value=null)},"返回")])])):(dt(),mt("div",W2,[E.value.length?Jt("",!0):(dt(),mt("div",X2,[...W[16]||(W[16]=[ge("还没有照片。按 ",-1),P("kbd",null,"C",-1),ge(" 进入摄影模式，点击画面或按 ",-1),P("kbd",null,"F",-1),ge(" 拍照。",-1)])])),(dt(!0),mt(qt,null,ae(E.value,k=>(dt(),mt("div",{key:k.id,class:"ph",onClick:Et=>I.value=k},[P("img",{src:k.thumb},null,8,q2),P("div",Y2,ut(k.title),1)],8,$2))),128))]))])):O(t).panel==="dex"?(dt(),mt("div",j2,[P("div",K2,[W[17]||(W[17]=P("span",{class:"mc-title"},"📖 西安百科图鉴",-1)),P("span",Z2,"完成度 "+ut(f.value)+"/"+ut(h.value),1),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",J2,[(dt(),mt(qt,null,ae(o,k=>P("button",{key:k.id,class:ne(["mc-btn small",{active:a.value===k.id}]),onClick:Et=>a.value=k.id},ut(k.n),11,Q2)),64))]),P("div",tw,[a.value==="building"?(dt(!0),mt(qt,{key:0},ae(c.value,k=>(dt(),mt("div",{key:k.def.id,class:ne(["card",{locked:!O(Q).save.photographed[k.def.id]}])},[P("div",ew,ut(O(Q).save.photographed[k.def.id]?"🏛️":"❔"),1),P("div",nw,[P("div",null,[P("span",{class:ne(["tag",k.def.grade])},ut(k.def.grade)+"级",3),P("b",null,ut(O(Q).save.photographed[k.def.id]?k.def.name:u(k)?k.def.name+"（未拍摄）":"？？？"),1),k.def.alias&&O(Q).save.photographed[k.def.id]?(dt(),mt("span",iw," · "+ut(k.def.alias),1)):Jt("",!0)]),P("div",sw,ut(O(Tn)[k.def.district].name)+" · "+ut(O(MS)[k.def.grade]),1),P("div",rw,ut(O(Q).save.photographed[k.def.id]?k.def.desc:"拍摄该景点以解锁介绍。"),1)])],2))),128)):a.value==="food"?(dt(!0),mt(qt,{key:1},ae(O(Ei),(k,Et)=>(dt(),mt("div",{key:Et,class:ne(["card",{locked:!O(Q).save.foods.includes(Et)}])},[P("div",ow,ut(O(Q).save.foods.includes(Et)?k.icon:"❔"),1),P("div",aw,[P("b",null,ut(O(Q).save.foods.includes(Et)?k.name:"？？？"),1),P("div",lw,ut(O(Q).save.foods.includes(Et)?k.desc:"在西安街巷的小吃店购买以解锁。"),1)])],2))),128)):(dt(!0),mt(qt,{key:2},ae(O(So),(k,Et)=>(dt(),mt("div",{key:Et,class:ne(["card",{locked:!O(Q).save.culture.includes(Et)}])},[P("div",cw,ut(O(Q).save.culture.includes(Et)?k.icon:"❔"),1),P("div",uw,[P("b",null,ut(O(Q).save.culture.includes(Et)?k.name:"？？？"),1),P("div",hw,ut(O(Q).save.culture.includes(Et)?k.desc:l[Et]),1)])],2))),128))])])):O(t).panel==="bag"?(dt(),mt("div",fw,[P("div",dw,[W[18]||(W[18]=P("span",{class:"mc-title"},"🎒 背包",-1)),P("span",null,"💰 ¥"+ut(O(Q).save.money),1),P("button",{class:"mc-btn small",onClick:i},"✕")]),W[19]||(W[19]=P("div",{class:"muted sub"},"纪念品",-1)),P("div",pw,[(dt(!0),mt(qt,null,ae(O(Q).save.items,(k,Et)=>(dt(),mt("div",{key:Et,class:"slot",title:O(Ln)[Et].name+"："+O(Ln)[Et].desc},[P("span",gw,ut(O(Ln)[Et].icon),1),P("span",_w,ut(O(Ln)[Et].name),1),k>1?(dt(),mt("span",vw,"×"+ut(k),1)):Jt("",!0)],8,mw))),128)),Object.keys(O(Q).save.items).length?Jt("",!0):(dt(),mt("div",xw,"空空如也，完成任务获得纪念品吧。"))]),W[20]||(W[20]=P("div",{class:"muted sub"},"品尝过的美食",-1)),P("div",yw,[(dt(!0),mt(qt,null,ae(O(Q).save.foods,k=>(dt(),mt("div",{key:k,class:"slot"},[P("span",Mw,ut(O(Ei)[k].icon),1),P("span",bw,ut(O(Ei)[k].name),1)]))),128))]),W[21]||(W[21]=P("div",{class:"muted sub"},"旅行统计",-1)),P("div",Sw,[P("span",null,"📷 拍照 "+ut(O(Q).save.stats.photos),1),P("span",null,"🚶 步行 "+ut(Math.round(O(Q).save.stats.walk))+" 米",1),P("span",null,"🚌 巴士 "+ut(O(Q).save.stats.bus),1),P("span",null,"🚇 地铁 "+ut(O(Q).save.stats.metro),1),P("span",null,"🛵 电单车 "+ut(O(Q).save.stats.ebike),1),P("span",null,"🚢 夜游 "+ut(O(Q).save.stats.cruise),1),P("span",null,"💬 聊天 "+ut(O(Q).save.talked),1),P("span",null,"📍 景点 "+ut(O(Q).save.discovered.length)+"/"+ut(c.value.length),1)])])):O(t).panel==="tasks"?(dt(),mt("div",ww,[P("div",{class:"head"},[W[22]||(W[22]=P("span",{class:"mc-title"},"📌 任务",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",Ew,[W[25]||(W[25]=P("div",{class:"muted sub"},"新手任务 · 长安初体验",-1)),(dt(!0),mt(qt,null,ae(O(ts),(k,Et)=>(dt(),mt("div",{key:k.id,class:ne(["trow",{done:Et<O(Q).save.novice,cur:Et===O(Q).save.novice}])},[P("span",null,ut(Et<O(Q).save.novice?"☑":"□"),1),P("div",null,[P("b",null,ut(k.title),1),P("div",Tw,ut(k.desc),1)]),P("span",Aw,"¥"+ut(k.reward.money),1)],2))),128)),P("div",Cw,"每日任务 · "+ut(O(Q).save.daily.date),1),(dt(!0),mt(qt,null,ae(p.value,k=>(dt(),mt("div",{key:k.id,class:ne(["trow",{done:k.done}])},[P("span",null,ut(k.done?"☑":"□"),1),P("div",null,[P("b",null,ut(k.title),1),W[23]||(W[23]=ge()),P("span",Rw,ut(k.p[0])+"/"+ut(k.p[1]),1)]),P("span",Pw,"¥"+ut(k.reward.money),1)],2))),128)),W[26]||(W[26]=P("div",{class:"muted sub"},"城市任务",-1)),(dt(!0),mt(qt,null,ae(O(Ep),k=>(dt(),mt("div",{key:k.id,class:ne(["trow",{done:O(Q).save.quests[k.id]}])},[P("span",null,ut(O(Q).save.quests[k.id]?"☑":"□"),1),P("div",null,[P("b",null,ut(k.title),1),W[24]||(W[24]=ge()),P("span",Lw,ut(O(u_)(k.cond).join("/")),1),P("div",Dw,ut(k.desc),1)]),P("span",Iw,ut(O(Ln)[k.reward.item].icon),1)],2))),128))])])):O(t).panel==="settings"?(dt(),mt("div",Uw,[P("div",{class:"head"},[W[27]||(W[27]=P("span",{class:"mc-title"},"⚙ 设置",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",Nw,[P("div",Fw,[W[28]||(W[28]=P("span",null,"画质",-1)),(dt(),mt(qt,null,ae(s,k=>P("button",{key:k.v,class:ne(["mc-btn small",{active:O(e).quality===k.v}]),onClick:Et=>{O(e).quality=k.v,d()}},ut(k.n),11,kw)),64))]),P("div",Ow,[W[29]||(W[29]=P("span",null,"水面倒影",-1)),P("button",{class:ne(["mc-btn small",{active:O(e).reflect}]),onClick:W[4]||(W[4]=k=>{O(e).reflect=!O(e).reflect,d()})},ut(O(e).reflect?"开":"关"),3),W[30]||(W[30]=P("span",null,"阴影",-1)),P("button",{class:ne(["mc-btn small",{active:O(e).shadows}]),onClick:W[5]||(W[5]=k=>{O(e).shadows=!O(e).shadows,d()})},ut(O(e).shadows?"开":"关"),3),W[31]||(W[31]=P("span",null,"小地图",-1)),P("button",{class:ne(["mc-btn small",{active:O(e).showMinimap}]),onClick:W[6]||(W[6]=k=>{O(e).showMinimap=!O(e).showMinimap,d()})},ut(O(e).showMinimap?"开":"关"),3)]),P("div",zw,[W[32]||(W[32]=P("span",null,"声音",-1)),P("button",{class:ne(["mc-btn small",{active:O(e).audio}]),onClick:W[7]||(W[7]=k=>{O(e).audio=!O(e).audio,d()})},ut(O(e).audio?"🔊 开":"🔇 关"),3),W[33]||(W[33]=P("span",null,"音乐",-1)),P("button",{class:ne(["mc-btn small",{active:O(e).music}]),onClick:W[8]||(W[8]=k=>{O(e).music=!O(e).music,d()})},ut(O(e).music?"开":"关"),3),W[34]||(W[34]=P("span",null,"音效",-1)),P("button",{class:ne(["mc-btn small",{active:O(e).sfx}]),onClick:W[9]||(W[9]=k=>{O(e).sfx=!O(e).sfx,d()})},ut(O(e).sfx?"开":"关"),3)]),P("div",Bw,[W[35]||(W[35]=P("span",null,"音量",-1)),Ze(P("input",{type:"range",min:"0",max:"1",step:"0.05","onUpdate:modelValue":W[10]||(W[10]=k=>O(e).volume=k),onInput:d},null,544),[[Ls,O(e).volume,void 0,{number:!0}]]),ge(" "+ut(Math.round(O(e).volume*100))+"%",1)]),P("div",Vw,[W[36]||(W[36]=P("span",null,"时间流速",-1)),(dt(),mt(qt,null,ae([0,.5,1,3,10],k=>P("button",{key:k,class:ne(["mc-btn small",{active:O(e).timeSpeed===k}]),onClick:Et=>{O(e).timeSpeed=k,d()}},ut(k===0?"暂停":k+"×"),11,Hw)),64))]),P("div",Gw,[W[37]||(W[37]=P("span",null,"设定时间",-1)),(dt(),mt(qt,null,ae(r,k=>P("button",{key:k.h,class:"mc-btn small",onClick:Et=>L(k.h)},ut(k.n),9,Ww)),64))]),P("div",Xw,[W[38]||(W[38]=P("span",null,"天气",-1)),P("button",{class:ne(["mc-btn small",{active:!w.value}]),onClick:v},"随机",2),(dt(!0),mt(qt,null,ae(O(ns),(k,Et)=>(dt(),mt("button",{key:Et,class:ne(["mc-btn small",{active:w.value===Et}]),onClick:T=>y(Et)},ut(k.icon)+" "+ut(k.name),11,$w))),128))]),P("div",qw,[W[39]||(W[39]=P("span",null,"鼠标灵敏度",-1)),Ze(P("input",{type:"range",min:"0.3",max:"2.5",step:"0.1","onUpdate:modelValue":W[11]||(W[11]=k=>O(e).sensitivity=k),onChange:d},null,544),[[Ls,O(e).sensitivity,void 0,{number:!0}]]),ge(" "+ut(O(e).sensitivity),1)]),P("div",{class:"srow"},[P("button",{class:"mc-btn small",onClick:M},"返回主菜单（修改角色/换出生点）")]),W[40]||(W[40]=P("div",{class:"muted small"},"提示：低端设备请选择“流畅”，并关闭水面倒影与阴影。",-1))])])):O(t).panel==="shop"&&O(t).shop?(dt(),mt("div",Yw,[P("div",jw,[P("span",Kw,"🏮 "+ut(O(t).shop.name),1),P("span",null,"💰 ¥"+ut(O(Q).save.money),1),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",Zw,"“"+ut(O(t).shop.greet)+"”",1),P("div",Jw,[(dt(!0),mt(qt,null,ae(O(t).shop.items,k=>(dt(),mt("div",{key:k,class:"sitem"},[P("span",Qw,ut(g(k).icon),1),P("div",tE,[P("b",null,ut(g(k).name),1),P("div",eE,ut(g(k).desc),1)]),P("button",{class:"mc-btn small primary",onClick:Et=>O(Wt).game.buy(k)},"¥"+ut(g(k).price)+" 购买",9,nE),O(Q).save.foods.includes(k)||O(Q).save.items[k]?(dt(),mt("span",iE,"✔")):Jt("",!0)]))),128))])])):O(t).panel==="metro"?(dt(),mt("div",sE,[P("div",{class:"head"},[W[41]||(W[41]=P("span",{class:"mc-title"},"🚇 西安地铁 · 快速传送",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),P("div",rE,"当前车站："+ut(O(t).metroFrom&&O(t).metroFrom.name)+" · 选择目的地站点",1),P("div",oE,[(dt(!0),mt(qt,null,ae(O(Pr),k=>(dt(),mt("button",{key:k.id,class:"mst",disabled:O(t).metroFrom&&k.id===O(t).metroFrom.id,onClick:Et=>O(Wt).game.metroTravel(k)},[P("b",null,ut(k.name),1),P("span",lE,[(dt(!0),mt(qt,null,ae(k.lines,Et=>(dt(),mt("span",{key:Et,class:"ln",style:gn({background:m(Et)})},ut(Et),5))),128))]),P("span",cE,ut(O(Tn)[O(fs)(k.x,k.z)].name),1)],8,aE))),128))])])):O(t).panel==="help"?(dt(),mt("div",uE,[P("div",{class:"head"},[W[42]||(W[42]=P("span",{class:"mc-title"},"❓ 操作说明",-1)),P("button",{class:"mc-btn small",onClick:i},"✕")]),W[43]||(W[43]=Oa('<div class="help" data-v-4809b69c><p data-v-4809b69c><kbd data-v-4809b69c>W</kbd><kbd data-v-4809b69c>A</kbd><kbd data-v-4809b69c>S</kbd><kbd data-v-4809b69c>D</kbd> 移动 · 鼠标旋转视角（点击画面锁定）· 右键拖动也可旋转 · <kbd data-v-4809b69c>Shift</kbd> 奔跑 · <kbd data-v-4809b69c>空格</kbd> 跳跃 · 滚轮 镜头远近</p><p data-v-4809b69c><kbd data-v-4809b69c>V</kbd> 第一/第三人称 · <kbd data-v-4809b69c>E</kbd> 交互（对话、乘车、购物、观看表演）· <kbd data-v-4809b69c>T</kbd> 时间快进到下个时段</p><p data-v-4809b69c><kbd data-v-4809b69c>C</kbd> 摄影模式：<kbd data-v-4809b69c>V</kbd> 切换第一人称/第三人称/自拍，<kbd data-v-4809b69c>1</kbd>-<kbd data-v-4809b69c>6</kbd> 切换滤镜（长安旧影、盛唐霓虹…），点击画面或 <kbd data-v-4809b69c>F</kbd> 拍照，滚轮变焦</p><p data-v-4809b69c><kbd data-v-4809b69c>M</kbd> 地图 · <kbd data-v-4809b69c>B</kbd> 背包 · <kbd data-v-4809b69c>P</kbd> 相册 · <kbd data-v-4809b69c>N</kbd> 图鉴 · <kbd data-v-4809b69c>J</kbd> 任务 · <kbd data-v-4809b69c>Esc</kbd> 关闭面板</p><p data-v-4809b69c>🎯 玩法：步行探索 → 发现景点 → 拍照解锁图鉴 → 完成任务获得纪念品。</p><p data-v-4809b69c>🚌 长安观光巴士 1 路：钟楼 ⇄ 永宁门 ⇄ 陕历博 ⇄ 大雁塔 ⇄ 大唐不夜城 ⇄ 曲江池，在站台按 E 候车/上车。</p><p data-v-4809b69c>🚇 地铁：在红色“M”地铁口按 E，可快速传送至全市各站。</p><p data-v-4809b69c>🚢 曲江夜游：在南湖码头或曲江池码头登船；🗼 大雁塔：塔底入口登塔；🚡 骊山索道：华清宫东侧上山。</p><p data-v-4809b69c>🍜 美食：回民街（泡馍、肉夹馍、凉皮、镜糕）、大唐不夜城（甑糕、柿子饼）、街头面馆（油泼面）。</p><p data-v-4809b69c>🏮 文化：明城墙、碑林书法、秦俑军阵、盛唐乐舞、丝绸之路、唐宫礼制与秦岭生态。</p><p data-v-4809b69c>🔊 声音：背景古韵、天气、脚步、拍照和交通音效会随场景变化，可在“设置”中分别调整。</p></div>',1))])):Jt("",!0)],32)):Jt("",!0)}},fE=yl(hE,[["__scopeId","data-v-4809b69c"]]),dE={class:"gv"},pE={class:"speed-lines"},mE={class:"motes"},gE={class:"hud-tl"},_E={class:"loc mc-panel"},vE={class:"dist"},xE={key:0,class:"place"},yE={class:"meta"},ME={key:0},bE={key:0,class:"tasks mc-panel"},SE={key:0,class:"task"},wE={class:"muted"},EE={class:"muted"},TE={class:"compass"},AE={class:"bt"},CE={class:"bs"},RE={class:"toasts"},PE={key:2,class:"ride mc-panel"},LE={key:3,class:"cross"},DE={class:"bottom"},IE={key:4,class:"lock-hint"},UE={key:5,class:"photo"},NE={class:"ph-top mc-panel"},FE=["onClick"],kE={class:"ph-left mc-panel"},OE=["onClick"],zE=["onClick"],BE={class:"muted",style:{"margin-top":"8px"}},VE={key:6,class:"flash"},HE={key:7,class:"lastphoto mc-panel"},GE=["src"],WE={key:8,class:"dialog mc-panel"},XE={class:"d-head"},$E={class:"mc-title",style:{"font-size":"17px"}},qE={key:0,class:"tag"},YE={class:"d-text"},jE={class:"d-opts"},KE=["onClick"],ZE={class:"mbtns"},JE={key:1,class:"rotate-hint"},gd=360,QE={__name:"GameView",setup(n,{expose:t}){const e=Ae(null),i=Ae(null),s=Ae(!1),r=Q.ui,o=r.hud,a=Ae(!1),l=Dr({x:0,y:0}),c=Ae(55),u=Ae("pose"),h=[{id:"third",n:"第三人称"},{id:"first",n:"第一人称"},{id:"selfie",n:"自拍"}],f=[{id:"pose",n:"✌ 比耶"},{id:"wave",n:"👋 挥手"},{id:"idle",n:"🧍 站立"},{id:"photo",n:"📸 举相机"}],p=Array.from({length:20},(K,F)=>({x:F,style:{"--x":`${F*47%100}%`,"--y":`${15+F*31%80}%`,"--d":`${6+F%7}s`,"--delay":`${-(F%9)}s`,"--size":`${2+F%3}px`}}));let g=null;const _=En(()=>Wt.game&&Wt.game.player&&Wt.game.player.view==="first"&&o.fps>=0),m=En(()=>{const K=Q.save.novice;return K<ts.length?ts[K]:null}),d=En(()=>{const K=Q.save.daily;return(K.ids||[]).map(F=>{const z=al.find(pt=>pt.id===F);return{...z,done:!!K.done[F],p:Cp(z)}})}),w=En(()=>-((-o.heading*180/Math.PI%360+360)%360)*2+gd/2-360*2),y=En(()=>{const K=[],F={0:"北",45:"东北",90:"东",135:"东南",180:"南",225:"西南",270:"西",315:"西北"};for(let z=0;z<3;z++)for(let pt=0;pt<360;pt+=15)K.push({k:z+"-"+pt,x:(z*360+pt)*2,t:F[pt]||"·",major:!!F[pt]});return K}),v=En(()=>{const K=r.waypoint;if(!K||o.x==null)return null;const F=K.x-o.x,z=K.z-o.z,pt=Math.hypot(F,z),at=Math.atan2(F,-z)*180/Math.PI,W=-o.heading*180/Math.PI;let k=(at-W+540)%360-180;return k=Math.max(-88,Math.min(88,k)),{x:gd/2+k*2-6,d:pt>1e3?(pt*.005).toFixed(1)+"km":Math.round(pt*5)+"m"}});async function L(K,F){Wt.game||(Wt.game=new GS(e.value),r.mobile="ontouchstart"in window&&navigator.maxTouchPoints>0),M(),await Wt.game.spawnAt(K,F),Wt.game.start(),s.value=!0,clearInterval(g),g=setInterval(jt,200)}t({boot:L});function M(){r.portrait=window.innerHeight>window.innerWidth}window.addEventListener("resize",M),window.addEventListener("orientationchange",M),M();const E=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);function I(){const K=document.documentElement,F=document.fullscreenElement||document.webkitFullscreenElement;try{if(F)(document.exitFullscreen||document.webkitExitFullscreen).call(document);else{const pt=(K.requestFullscreen||K.webkitRequestFullscreen).call(K);pt&&pt.then&&pt.then(()=>{try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}}catch{}}function A(){r.fullscreen=!!(document.fullscreenElement||document.webkitFullscreenElement)}document.addEventListener("fullscreenchange",A),document.addEventListener("webkitfullscreenchange",A);function S(K){r.panel=r.panel===K?null:K,r.panel&&Wt.game.input.exitLock()}function D(){const K=Q.save.settings;K.audio=!K.audio,K.audio&&Sr.unlock(),Sr.applySettings(),zs(),_e(K.audio?"🔊 长安环境音与音乐已开启":"🔇 声音已关闭")}function Z(K){const F=Wt.game;F&&(K==="jump"?F.input.joy.jump=!0:F.onKey("Key"+K))}function B(K){Wt.game.setPhotoView(K)}function q(){Wt.game.togglePhoto(!1)}function ot(){Wt.game.shutter()}function it(){Wt.game.photoFov=c.value}function ct(K){u.value=K,Wt.game.selfiePose=K}window.addEventListener("wheel",K=>{r.photoMode&&Wt.game&&(c.value=Math.max(20,Math.min(90,c.value+Math.sign(K.deltaY)*3)),Wt.game.photoFov=c.value)},{passive:!0});let j=null,yt=null;function bt(K){j=K.changedTouches[0].identifier;const z=K.currentTarget.getBoundingClientRect();yt={x:z.left+z.width/2,y:z.top+z.height/2},Ct(K)}function Ct(K){for(const F of K.changedTouches){if(F.identifier!==j)continue;let z=(F.clientX-yt.x)/50,pt=-(F.clientY-yt.y)/50;const at=Math.hypot(z,pt);at>1&&(z/=at,pt/=at),l.x=z,l.y=pt,Object.assign(Wt.game.input.joy,{x:z,y:pt,active:!0})}}function Ft(){l.x=l.y=0,Object.assign(Wt.game.input.joy,{x:0,y:0,active:!1})}function jt(){const K=Wt.game,F=i.value;if(!K||!F||r.photoMode)return;const z=F.getContext("2d"),pt=K.baseMap,at=K.player.pos,W=320,k=pt.scale,Et=(at.x-W-pt.bounds.x0)*k,T=(at.z-W-pt.bounds.z0)*k;z.imageSmoothingEnabled=!1,z.fillStyle="#6fa8d8",z.fillRect(0,0,200,200),z.drawImage(pt.canvas,Et,T,W*2*k,W*2*k,0,0,200,200);const U=200/(W*2),C=(X,J)=>[(X-at.x+W)*U,(J-at.z+W)*U];for(const X of Pr){const[J,nt]=C(X.x,X.z);J<-5||nt<-5||J>205||nt>205||(z.fillStyle="#b8222a",z.fillRect(J-4,nt-4,8,8),z.fillStyle="#fff",z.font="bold 7px sans-serif",z.fillText("M",J-3,nt+3))}for(const X of K.landmarks.items){if(X.def.hidden)continue;const[J,nt]=C(X.x,X.z);if(J<-5||nt<-5||J>205||nt>205)continue;const gt=Q.save.discovered.includes(X.def.id),lt=Q.save.photographed[X.def.id];z.fillStyle=lt?"#ffd040":gt?"#ffffff":"#555",z.strokeStyle="#000",z.lineWidth=2,z.beginPath(),z.arc(J,nt,X.def.grade==="S"?5:4,0,Math.PI*2),z.fill(),z.stroke(),gt&&(z.font='bold 10px "Microsoft YaHei",sans-serif',z.lineWidth=3,z.strokeText(X.def.name,J+6,nt+4),z.fillText(X.def.name,J+6,nt+4))}const ft=K.transport.bus.position;{const[X,J]=C(ft.x,ft.z);z.fillStyle="#e8302a",z.fillRect(X-3,J-3,6,6)}if(r.waypoint){let[X,J]=C(r.waypoint.x,r.waypoint.z);X=Math.max(6,Math.min(194,X)),J=Math.max(6,Math.min(194,J)),z.fillStyle="#ffd040",z.beginPath(),z.moveTo(X,J+6),z.lineTo(X-6,J-6),z.lineTo(X+6,J-6),z.fill()}z.save(),z.translate(100,100),z.rotate(-K.player.camYaw),z.fillStyle="#ff3a3a",z.strokeStyle="#fff",z.lineWidth=2,z.beginPath(),z.moveTo(0,-9),z.lineTo(6,7),z.lineTo(0,3),z.lineTo(-6,7),z.closePath(),z.fill(),z.stroke(),z.restore(),z.fillStyle="#fff",z.font="bold 12px sans-serif",z.fillText("N",95,13)}return Vu(()=>{clearInterval(g),window.removeEventListener("resize",M),window.removeEventListener("orientationchange",M),document.removeEventListener("fullscreenchange",A),document.removeEventListener("webkitfullscreenchange",A),Wt.game&&Wt.game.dispose(),Wt.game=null}),(K,F)=>(dt(),mt("div",dE,[P("div",{ref_key:"host",ref:e,class:"host"},null,512),P("div",{class:ne(["scene-effects",{rain:O(o).weather==="rain",snow:O(o).weather==="typhoon",night:O(o).night>.5,sprinting:O(o).speed>10&&!O(r).photoMode}])},[F[17]||(F[17]=P("div",{class:"vignette"},null,-1)),P("div",pE,[(dt(),mt(qt,null,ae(14,z=>P("i",{key:"s"+z,style:gn({"--i":z})},null,4)),64))]),P("div",mE,[(dt(!0),mt(qt,null,ae(O(p),z=>(dt(),mt("i",{key:z.x,style:gn(z.style)},null,4))),128))]),O(r).effect?(dt(),mt("div",{key:O(r).effect.id,class:ne(["fx-burst",O(r).effect.type])},[...F[16]||(F[16]=[P("i",null,null,-1),P("b",null,"✦",-1)])],2)):Jt("",!0)],2),s.value?(dt(),mt(qt,{key:0},[Ze(P("div",gE,[P("div",_E,[P("div",vE,[ge(ut(O(o).district)+" ",1),O(o).place?(dt(),mt("span",xE,"· "+ut(O(o).place),1)):Jt("",!0)]),P("div",yE,[P("span",null,ut(O(o).weatherIcon)+" "+ut(O(o).weatherName),1),P("span",null,"🕒 "+ut(O(o).time)+" "+ut(O(o).period),1),P("span",null,"💰 ¥"+ut(O(Q).save.money),1),O(o).alt>30?(dt(),mt("span",ME,"⛰ "+ut(O(o).alt)+"m",1)):Jt("",!0)])]),m.value||d.value.length?(dt(),mt("div",bE,[F[18]||(F[18]=P("div",{class:"tt"},"📌 任务",-1)),m.value?(dt(),mt("div",SE,[P("b",null,"□ "+ut(m.value.title),1),P("div",wE,ut(m.value.desc),1)])):Jt("",!0),(dt(!0),mt(qt,null,ae(d.value,z=>(dt(),mt("div",{key:z.id,class:"task small"},[ge(ut(z.done?"☑":"□")+" "+ut(z.title)+" ",1),P("span",EE,ut(z.p[0])+"/"+ut(z.p[1]),1)]))),128))])):Jt("",!0)],512),[[eo,!O(r).photoMode]]),Ze(P("div",TE,[P("div",{class:"strip",style:gn({transform:`translateX(${w.value}px)`})},[(dt(!0),mt(qt,null,ae(y.value,z=>(dt(),mt("span",{key:z.k,style:gn({left:z.x+"px"}),class:ne({major:z.major})},ut(z.t),7))),128))],4),v.value?(dt(),mt("div",{key:0,class:"wp",style:gn({left:v.value.x+"px"})},[F[19]||(F[19]=ge("▼",-1)),P("small",null,ut(v.value.d),1)],4)):Jt("",!0),F[20]||(F[20]=P("div",{class:"needle"},null,-1))],512),[[eo,!O(r).photoMode]]),Ze(P("canvas",{ref_key:"mini",ref:i,class:"minimap",width:"200",height:"200",onClick:F[0]||(F[0]=z=>O(r).panel="map")},null,512),[[eo,!O(r).photoMode&&O(Q).save.settings.showMinimap]]),O(r).banner?(dt(),mt("div",{class:"banner",key:O(r).banner.id},[P("div",AE,ut(O(r).banner.title),1),P("div",CE,ut(O(r).banner.sub),1)])):Jt("",!0),P("div",RE,[(dt(!0),mt(qt,null,ae(O(r).toasts,z=>(dt(),mt("div",{key:z.id,class:ne(["toast",z.kind])},ut(z.text),3))),128))]),O(r).prompt&&!O(r).dialog&&!O(r).panel?(dt(),mt("div",{key:1,class:"prompt",onClick:F[1]||(F[1]=z=>Z("E"))},[F[21]||(F[21]=P("kbd",null,"E",-1)),ge(" "+ut(O(r).prompt.label),1)])):Jt("",!0),O(o).ride&&!O(r).photoMode?(dt(),mt("div",PE,ut(O(o).ride),1)):Jt("",!0),_.value&&!O(r).photoMode?(dt(),mt("div",LE,"+")):Jt("",!0),Ze(P("div",DE,[P("button",{class:"mc-btn small",onClick:F[2]||(F[2]=z=>S("bag"))},[...F[22]||(F[22]=[ge("🎒 背包",-1),P("kbd",null,"B",-1)])]),P("button",{class:"mc-btn small",onClick:F[3]||(F[3]=z=>S("album"))},[...F[23]||(F[23]=[ge("📷 相册",-1),P("kbd",null,"P",-1)])]),P("button",{class:"mc-btn small",onClick:F[4]||(F[4]=z=>S("map"))},[...F[24]||(F[24]=[ge("🗺 地图",-1),P("kbd",null,"M",-1)])]),P("button",{class:"mc-btn small",onClick:F[5]||(F[5]=z=>S("dex"))},[...F[25]||(F[25]=[ge("📖 图鉴",-1),P("kbd",null,"N",-1)])]),P("button",{class:"mc-btn small",onClick:F[6]||(F[6]=z=>S("tasks"))},[...F[26]||(F[26]=[ge("📌 任务",-1),P("kbd",null,"J",-1)])]),P("button",{class:"mc-btn small",onClick:F[7]||(F[7]=z=>S("settings"))},"⚙ 设置"),P("button",{class:"mc-btn small audio-toggle",onClick:D},ut(O(Q).save.settings.audio?"🔊":"🔇"),1),P("button",{class:"mc-btn small",onClick:F[8]||(F[8]=z=>S("help"))},[...F[27]||(F[27]=[ge("❓",-1),P("kbd",null,"H",-1)])]),O(r).mobile&&!O(r).portrait&&E?(dt(),mt("button",{key:0,class:"mc-btn small",onClick:I},ut(O(r).fullscreen?"⛶ 退出全屏":"⛶ 全屏"),1)):Jt("",!0)],512),[[eo,!O(r).photoMode]]),!O(r).pointerLocked&&!O(r).mobile&&!O(r).panel&&!O(r).dialog&&!O(r).photoMode?(dt(),mt("div",IE,[...F[28]||(F[28]=[ge("点击画面锁定鼠标以旋转视角 · ",-1),P("kbd",null,"C",-1),ge(" 拍照 · ",-1),P("kbd",null,"V",-1),ge(" 切换视角",-1)])])):Jt("",!0),O(r).photoMode?(dt(),mt("div",UE,[F[33]||(F[33]=P("div",{class:"grid"},[P("i"),P("i"),P("i"),P("i")],-1)),F[34]||(F[34]=P("div",{class:"corners"},[P("b"),P("b"),P("b"),P("b")],-1)),P("div",NE,[F[29]||(F[29]=P("span",{class:"mc-title",style:{"font-size":"16px"}},"📷 摄影模式",-1)),(dt(),mt(qt,null,ae(h,z=>P("button",{key:z.id,class:ne(["mc-btn small",{active:O(r).photoView===z.id}]),onClick:pt=>B(z.id)},ut(z.n),11,FE)),64)),F[30]||(F[30]=P("span",{class:"muted"},"V 切换 · 滚轮/滑块 变焦",-1)),P("button",{class:"mc-btn small",onClick:q},"✕ 退出 (C)")]),P("div",kE,[F[32]||(F[32]=P("div",{class:"muted"},"滤镜（1-6）",-1)),(dt(!0),mt(qt,null,ae(O(IS),(z,pt)=>(dt(),mt("button",{key:z.id,class:ne(["mc-btn small",{active:O(r).filter===z.id}]),onClick:at=>O(r).filter=z.id},ut(pt+1)+". "+ut(z.name),11,OE))),128)),O(r).photoView==="selfie"?(dt(),mt(qt,{key:0},[F[31]||(F[31]=P("div",{class:"muted",style:{"margin-top":"8px"}},"姿势",-1)),(dt(),mt(qt,null,ae(f,z=>P("button",{key:z.id,class:ne(["mc-btn small",{active:u.value===z.id}]),onClick:pt=>ct(z.id)},ut(z.n),11,zE)),64))],64)):Jt("",!0),P("div",BE,"变焦 "+ut(c.value)+"°",1),Ze(P("input",{type:"range",min:"20",max:"90","onUpdate:modelValue":F[9]||(F[9]=z=>c.value=z),onInput:it},null,544),[[Ls,c.value,void 0,{number:!0}]])]),P("button",{class:"shutter",onClick:ot,title:"拍照（点击画面 / F / Enter）"})])):Jt("",!0),O(r).flash?(dt(),mt("div",VE)):Jt("",!0),O(r).lastPhoto?(dt(),mt("div",HE,[P("img",{src:O(r).lastPhoto.thumb},null,8,GE),P("div",null,ut(O(r).lastPhoto.title),1)])):Jt("",!0),O(r).dialog?(dt(),mt("div",WE,[P("div",XE,[P("span",$E,ut(O(r).dialog.title),1),O(r).dialog.sub?(dt(),mt("span",qE,ut(O(r).dialog.sub),1)):Jt("",!0)]),P("div",YE,ut(O(r).dialog.text),1),P("div",jE,[(dt(!0),mt(qt,null,ae(O(r).dialog.options,(z,pt)=>(dt(),mt("button",{key:pt,class:ne(["mc-btn small",{primary:pt===0}]),onClick:at=>z.action()},ut(z.label),11,KE))),128))])])):Jt("",!0),qn(fE),O(r).mobile&&!O(r).panel&&!O(r).dialog?(dt(),mt(qt,{key:9},[P("div",{class:"joy",ref:"joyEl",onTouchstart:mn(bt,["prevent"]),onTouchmove:mn(Ct,["prevent"]),onTouchend:mn(Ft,["prevent"]),onTouchcancel:mn(Ft,["prevent"])},[P("div",{class:"knob",style:gn({transform:`translate(${l.x*40}px, ${-l.y*40}px)`})},null,4)],544),P("div",ZE,[P("button",{class:"mb",onTouchstart:F[10]||(F[10]=mn(z=>Z("jump"),["prevent"]))},"跳",32),P("button",{class:ne(["mb",{on:a.value}]),onTouchstart:F[11]||(F[11]=mn(z=>{a.value=!a.value,O(Wt).game.input.joy.sprint=a.value},["prevent"]))},"跑",34),P("button",{class:"mb",onTouchstart:F[12]||(F[12]=mn(z=>Z("E"),["prevent"]))},"E",32),P("button",{class:"mb",onTouchstart:F[13]||(F[13]=mn(z=>Z("C"),["prevent"]))},"📷",32),P("button",{class:"mb",onTouchstart:F[14]||(F[14]=mn(z=>Z("V"),["prevent"]))},"👁",32),O(r).photoMode?(dt(),mt("button",{key:0,class:"mb big",onTouchstart:mn(ot,["prevent"])},"●",32)):Jt("",!0)])],64)):Jt("",!0)],64)):Jt("",!0),O(r).mobile&&O(r).portrait&&!O(r).ignorePortrait&&!O(r).panel&&!O(r).dialog&&!O(r).photoMode?(dt(),mt("div",JE,[F[35]||(F[35]=P("div",{class:"rh-icon"},"📱",-1)),F[36]||(F[36]=P("div",{class:"rh-text"},"请横屏操作",-1)),F[37]||(F[37]=P("div",{class:"rh-sub"},"将手机旋转至横屏，获得最佳视野与操作体验",-1)),P("button",{class:"mc-btn small",onClick:F[15]||(F[15]=z=>O(r).ignorePortrait=!0)},"仍要竖屏继续")])):Jt("",!0),P("div",{class:ne(["fade",{on:O(r).fade}])},[P("div",null,ut(O(r).fadeText),1)],2)]))}},tT=yl(QE,[["__scopeId","data-v-dfe7ede5"]]),eT={class:"app"},nT={key:2,class:"loading"},iT={class:"mc-panel load-box"},sT={class:"load-text"},rT={class:"bar"},oT={class:"muted tip"},aT={__name:"App",setup(n){const t=Ae(!1),e=Ae(!1),i=Ae(0),s=Ae(""),r=Ae(null),o=["小贴士：按 C 进入摄影模式，拍下景点即可解锁图鉴。","小贴士：大唐不夜城夜晚演出丰富，按 T 可以快速跳转时间。","小贴士：在地铁口按 E 可以快速传送到其他站点。","小贴士：和路人聊天可以完成每日任务“找到5个NPC”。","小贴士：曲江夜游可在南湖码头或曲江池码头登船。","小贴士：回民街泡馍要自己慢慢掰，掰得细更入味。","小贴士：建议开启声音，脚步、天气、交通与长安古韵会随场景变化。"],a=Ae(o[0]);async function l(c){Sr.unlock(),e.value=!0,i.value=0,a.value=o[Math.floor(Math.random()*o.length)],s.value="正在初始化长安世界…",await new Promise(u=>setTimeout(u,30)),t.value||(t.value=!0,await el()),await r.value.boot(c,(u,h)=>{i.value=u,h&&(s.value=h)}),i.value=1,Q.ui.screen="game",e.value=!1}return(c,u)=>(dt(),mt("div",eT,[O(Q).ui.screen!=="game"?(dt(),Uc(M2,{key:0,onStart:l})):Jt("",!0),t.value?Ze((dt(),Uc(tT,{key:1,ref_key:"gv",ref:r},null,512)),[[eo,O(Q).ui.screen==="game"]]):Jt("",!0),e.value?(dt(),mt("div",nT,[P("div",iT,[u[0]||(u[0]=P("div",{class:"mc-title"},"方块长安",-1)),P("div",sT,ut(s.value),1),P("div",rT,[P("div",{class:"fill",style:gn({width:(i.value*100).toFixed(0)+"%"})},null,4)]),P("div",oT,ut(a.value),1)])])):Jt("",!0)]))}},lT=yl(aT,[["__scopeId","data-v-40154878"]]);Jg(lT).mount("#app");
