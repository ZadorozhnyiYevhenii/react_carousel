(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),c=n(2),s=n(1),r=(n(10),n(4)),u=n.n(r),l=(n(11),n(0)),o=function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,r=e.animationDuration,o=e.inifinite,b=Object(s.useState)(1),j=Object(c.a)(b,2),m=j[0],p=j[1],g=(m-1)*i,O=t.length-a+1,h=a*i,d=m===O,x=1===m;return Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsx)("button",{className:u()("Carousel__button",{"Carousel__button--disabled":x&&!o}),type:"button",onClick:function(){return function(){if(!x){var e=m-n;p(e<1?1:e)}}()},children:"Prev"}),Object(l.jsx)("ul",{className:"Carousel__list",style:{width:h},children:t.map((function(e){return Object(l.jsx)("li",{className:"Carousel__list--link",style:{transform:"translateX(-".concat(g,"px)"),transition:"".concat(r,"ms")},children:Object(l.jsx)("img",{src:e,alt:e,style:{width:"".concat(i,"px")}})},e)}))}),Object(l.jsx)("div",{className:"Carousel__buttons",children:Object(l.jsx)("button",{className:u()("Carousel__button",{"Carousel__button--disabled":d&&!o}),type:"button",onClick:function(){return function(){if(!d){var e=m+n;p(e>O?O:e)}}()},children:"Next"})})]})},b=function(){var e=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],t=Object(s.useState)(3),n=Object(c.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(3),u=Object(c.a)(r,2),b=u[0],j=u[1],m=Object(s.useState)(130),p=Object(c.a)(m,2),g=p[0],O=p[1],h=Object(s.useState)(1e3),d=Object(c.a)(h,2),x=d[0],f=d[1],_=Object(s.useState)(!1),v=Object(c.a)(_,2),C=v[0],y=v[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"App__title",children:"Carousel with ".concat(e.length," images")}),Object(l.jsxs)("div",{className:"App__container",children:[Object(l.jsxs)("label",{children:["Size images in px",Object(l.jsx)("input",{type:"number",value:g,min:20,max:200,onChange:function(e){return O(+e.target.value)}})]}),Object(l.jsxs)("label",{children:["Set quantity",Object(l.jsx)("input",{type:"number",value:b,min:1,max:10,onChange:function(e){return j(+e.target.value)}})]}),Object(l.jsxs)("label",{children:["Set animation duration",Object(l.jsx)("input",{type:"number",value:x,min:300,max:1e4,onChange:function(e){return f(+e.target.value)}})]}),Object(l.jsxs)("label",{children:["Set step per page",Object(l.jsx)("input",{type:"number",value:a,min:1,max:10,onChange:function(e){return i(+e.target.value)}})]}),Object(l.jsxs)("label",{children:["Infinity",Object(l.jsx)("input",{type:"checkbox",checked:C,onChange:function(e){return y(!!e.target.checked)}})]})]}),Object(l.jsx)(o,{images:e,step:a,frameSize:b,itemWidth:g,animationDuration:x,inifinite:C})]})};i.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a6732f23.chunk.js.map