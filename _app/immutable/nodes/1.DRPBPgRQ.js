import{s as k,n as H,c as q}from"../chunks/scheduler.CJWTc6H_.js";import{S as w,i as y,e as h,t as v,s as S,c as p,a as E,b as x,d as m,f as A,g as z,h as D,j as I,k as o,l as j}from"../chunks/index.n7Naqpnh.js";import{s as R}from"../chunks/entry.DsbmbtX1.js";const V=()=>{const t=R;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},B={subscribe(t){return V().page.subscribe(t)}};function F(t){let e,a,r=t[0].status+"",c,f,_,l,u=t[0].error.message+"",d,b,i,$="Home";return{c(){e=h("header"),a=h("h1"),c=v(r),f=v(":"),_=S(),l=h("div"),d=v(u),b=S(),i=h("a"),i.textContent=$,this.h()},l(n){e=p(n,"HEADER",{class:!0});var s=E(e);a=p(s,"H1",{});var g=E(a);c=x(g,r),f=x(g,":"),g.forEach(m),_=A(s),l=p(s,"DIV",{});var C=E(l);d=x(C,u),C.forEach(m),b=A(s),i=p(s,"A",{href:!0,"data-svelte-h":!0}),z(i)!=="svelte-5a0zws"&&(i.textContent=$),s.forEach(m),this.h()},h(){D(i,"href","/"),D(e,"class","svelte-15a54c6")},m(n,s){I(n,e,s),o(e,a),o(a,c),o(a,f),o(e,_),o(e,l),o(l,d),o(e,b),o(e,i)},p(n,[s]){s&1&&r!==(r=n[0].status+"")&&j(c,r),s&1&&u!==(u=n[0].error.message+"")&&j(d,u)},i:H,o:H,d(n){n&&m(e)}}}function G(t,e,a){let r;return q(t,B,c=>a(0,r=c)),[r]}let M=class extends w{constructor(e){super(),y(this,e,G,F,k,{})}};export{M as component};
