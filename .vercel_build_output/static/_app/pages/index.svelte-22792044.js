import{S as s,i as a,s as t,e as c,c as r,a as e,d as i,b as n,f as l,D as o,I as u,H as h}from"../chunks/vendor-151ef7b8.js";import{i as m}from"../chunks/mainStore-cc5fb8da.js";function f(s){let a,t,h,m;return{c(){a=c("div"),t=c("img"),this.h()},l(s){a=r(s,"DIV",{class:!0});var c=e(a);t=r(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(i),this.h()},h(){n(t,"class","mx-auto"),t.src!==(h=s[0][s[1]].issue)&&n(t,"src",h),n(t,"alt",m=s[0][s[1]].name),n(a,"class","p-4")},m(s,c){l(s,a,c),o(a,t)},p(s,[a]){1&a&&t.src!==(h=s[0][s[1]].issue)&&n(t,"src",h),1&a&&m!==(m=s[0][s[1]].name)&&n(t,"alt",m)},i:u,o:u,d(s){s&&i(a)}}}function d(s,a,t){let c;h(s,m,(s=>t(0,c=s)));let r=c.length-1;return[c,r]}export default class extends s{constructor(s){super(),a(this,s,d,f,t,{})}}