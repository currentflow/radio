import{s as j,d as w,r as L,c as S,n as f,e as z,u as M,g as O,f as T}from"../chunks/scheduler.CJWTc6H_.js";import{S as $,i as q,e as g,c as v,a as C,d,h as k,j as y,z as b,n as p,o as D,p as m,r as H,g as I}from"../chunks/index.n7Naqpnh.js";import{p as V}from"../chunks/stores.Cz0XDojb.js";const E=!1,P=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,prerender:P,ssr:E},Symbol.toStringTag,{value:"Module"}));function A(l){let t,s="<h1>..Offline</h1>";return{c(){t=g("div"),t.innerHTML=s,this.h()},l(e){t=v(e,"DIV",{class:!0,"data-svelte-h":!0}),I(t)!=="svelte-1s2oqt6"&&(t.innerHTML=s),this.h()},h(){k(t,"class","offline")},m(e,n){y(e,t,n)},p:f,i:f,o:f,d(e){e&&d(t)}}}function B(l){let t;const s=l[3].default,e=z(s,l,l[2],null);return{c(){e&&e.c()},l(n){e&&e.l(n)},m(n,r){e&&e.m(n,r),t=!0},p(n,r){e&&e.p&&(!t||r&4)&&M(e,s,n,n[2],t?T(s,n[2],r,null):O(n[2]),null)},i(n){t||(m(e,n),t=!0)},o(n){p(e,n),t=!1},d(n){e&&e.d(n)}}}function F(l){let t,s,e,n,r,c;w(l[4]);const u=[B,A],a=[];function h(o,i){return o[0]?0:1}return s=h(l),e=a[s]=u[s](l),{c(){t=g("div"),e.c(),this.h()},l(o){t=v(o,"DIV",{class:!0});var i=C(t);e.l(i),i.forEach(d),this.h()},h(){k(t,"class","app svelte-szjxya")},m(o,i){y(o,t,i),a[s].m(t,null),n=!0,r||(c=[b(window,"online",l[4]),b(window,"offline",l[4])],r=!0)},p(o,[i]){let _=s;s=h(o),s===_?a[s].p(o,i):(H(),p(a[_],1,1,()=>{a[_]=null}),D(),e=a[s],e?e.p(o,i):(e=a[s]=u[s](o),e.c()),m(e,1),e.m(t,null))},i(o){n||(m(e),n=!0)},o(o){p(e),n=!1},d(o){o&&d(t),a[s].d(),r=!1,L(c)}}}function G(l,t,s){let e;S(l,V,a=>s(1,e=a));let{$$slots:n={},$$scope:r}=t,c;function u(){s(0,c=navigator.onLine)}return l.$$set=a=>{"$$scope"in a&&s(2,r=a.$$scope)},l.$$.update=()=>{l.$$.dirty&2&&console.log(e.url)},[c,e,r,n,u]}class R extends ${constructor(t){super(),q(this,t,G,F,j,{})}}export{R as component,Q as universal};