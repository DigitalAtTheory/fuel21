import{S as s,i as a,s as t,e as r,c,a as e,d as u,b as l,f as n,D as i,I as o,H as p}from"../chunks/vendor-151ef7b8.js";import{i as f}from"../chunks/mainStore-cc5fb8da.js";function m(s){let a,t,p,f;return{c(){a=r("div"),t=r("img"),this.h()},l(s){a=c(s,"DIV",{class:!0});var r=e(a);t=c(r,"IMG",{class:!0,src:!0,alt:!0}),r.forEach(u),this.h()},h(){l(t,"class","mx-auto"),t.src!==(p=s[0].issue)&&l(t,"src",p),l(t,"alt",f=s[0].name),l(a,"class","p-4")},m(s,r){n(s,a,r),i(a,t)},p(s,[a]){1&a&&t.src!==(p=s[0].issue)&&l(t,"src",p),1&a&&f!==(f=s[0].name)&&l(t,"alt",f)},i:o,o:o,d(s){s&&u(a)}}}async function d({page:s}){return{props:{slug:s.params.slug}}}function g(s,a,t){let r;p(s,f,(s=>t(2,r=s)));let c,{slug:e}=a;return s.$$set=s=>{"slug"in s&&t(1,e=s.slug)},s.$$.update=()=>{6&s.$$.dirty&&t(0,c=r.find((s=>s.slug===e)))},[c,e,r]}export default class extends s{constructor(s){super(),a(this,s,g,m,t,{slug:1})}}export{d as load};