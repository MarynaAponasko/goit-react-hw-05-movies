"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{42:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),i=t(439),a=t(757),s=t.n(a),c=t(791),o=t(87),u=t(689),l=t(390),d="MovieDetailsPage_btnGoBack__9r7Vv",v="MovieDetailsPage_mainContainer__VXN49",f="MovieDetailsPage_title__63V3V",m="MovieDetailsPage_text__vp0Sm",p="MovieDetailsPage_secondTitle__EHAb6",h=t(184),_=function(){var e,n=(0,c.useState)(null),t=(0,i.Z)(n,2),a=t[0],_=t[1],x=(0,u.UO)().id,g=(0,u.s0)(),j=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/";(0,c.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.BG)(x);case 3:n=e.sent,t=n.data,_(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{type:"button",className:d,onClick:function(){return g(j)},children:"Go back"}),a&&(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(null===a||void 0===a?void 0:a.poster_path),alt:null===a||void 0===a?void 0:a.title,width:"250"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h3",{className:f,children:[null===a||void 0===a?void 0:a.title," (",function(){if(a)return a.release_date.slice(0,4)}(),")"]}),(0,h.jsxs)("p",{className:m,children:["User Score: ",function(){if(a)return(100*a.vote_average/100).toFixed(2)}(),"%"]}),(0,h.jsx)("h4",{className:p,children:"Overview"}),(0,h.jsx)("p",{className:m,children:null===a||void 0===a?void 0:a.overview}),(0,h.jsx)("h4",{className:p,children:"Genres "}),(0,h.jsxs)("p",{className:m,children:[" ",function(){if(a)return a.genres.map((function(e){return e.name})).join(", ")}()," "]})]})]}),(0,h.jsxs)("ul",{children:["Additional information",(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"cast",state:{from:j},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"reviews",state:{from:j},children:"Reviews"})})]}),(0,h.jsx)(u.j3,{})]})}},390:function(e,n,t){t.d(n,{BG:function(){return c},FE:function(){return s},sR:function(){return o},sv:function(){return u},wr:function(){return a}});var r=t(912),i="9225d40049583defe43ffc34168e4f8c";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a=function(){return(0,r.Z)("/trending/movie/day",{params:{api_key:i,page:1}})},s=function(e){return(0,r.Z)("/search/movie",{params:{api_key:i,page:1,language:"en-US",include_adult:!1,query:e}})},c=function(e){return(0,r.Z)("/movie/".concat(e),{params:{api_key:i}})},o=function(e){return(0,r.Z)("/movie/".concat(e,"/credits"),{params:{api_key:i}})},u=function(e){return(0,r.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:i}})}}}]);
//# sourceMappingURL=42.b6c1f967.chunk.js.map