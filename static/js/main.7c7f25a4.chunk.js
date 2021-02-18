(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{56:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(15),a=c(26),s=c.n(a),i=c(20),j=c(9),u=c(16),o=c(42),l=c(37),b=c.n(l),d=c(2),O=function(e){var t=e.children;return Object(d.jsx)("div",{children:t})},h="REQUESTED_DATA",m="REQUESTED_DATA_SUCCESS",x="REQUESTED_DATA_FAIL",p="FETCHED_DATA",v=function(e){return{type:m,payload:e}},f=c(38),_=Object(f.a)((function(e){return e}),(function(e){var t=e.currencyRate;return t?t.find((function(e){return"USD"===e.ccy})).sale.slice(0,-3):null})),g=function(e){return e.isLoading},y=(c(56),function(){var e,t=Object(r.b)(),c=Object(r.c)(_),a=Object(r.c)(g),s=Object(n.useState)(),i=Object(u.a)(s,2),j=i[0],l=i[1],h=Object(n.useState)(!1),m=Object(u.a)(h,2),x=m[0],v=m[1],f=Object(o.a)(),y=f.register,N=f.handleSubmit,E=f.errors;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:N((function(e){var c=e.currency;t({type:p}),l(c),v(!0)})),className:"form",children:[Object(d.jsx)("input",{className:b()("form__input",{"form__input--error":E.currency}),name:"currency",ref:y({required:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435",pattern:{value:/^\d+$/,message:"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b"}}),placeholder:"\u0421\u0443\u043c\u043c\u0430, \u0433\u0440\u043d"}),Object(d.jsx)("p",{className:"form__error--message",children:null===(e=E.currency)||void 0===e?void 0:e.message}),x&&!a&&Object(d.jsx)(O,{children:Object(d.jsxs)("p",{className:"form__text",children:[Object(d.jsxs)("b",{children:[j," \u0433\u0440\u043d"]})," \u043f\u043e \u043a\u0443\u0440\u0441\u0443"," ",Object(d.jsxs)("b",{children:[c,"$"]})," \u044d\u0442\u043e "," ",Object(d.jsxs)("b",{children:[(j/c).toFixed(2),"$"]})]})}),Object(d.jsx)("input",{className:"button form__button",type:"submit",value:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})})}),N=c(39),E=function(){var e=Object(r.c)(g);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"title",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(d.jsx)(y,{}),e&&Object(d.jsx)(N.SemipolarLoading,{color:"#FF4A4A"})]})};var S=function(){var e=new URLSearchParams(Object(j.f)().search),t=e.get("id"),c=e.get("date");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"title",children:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(d.jsx)(O,{children:Object(d.jsx)("p",{className:"text",children:"\u042d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u0430\u044f \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \n            \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0440\u043e\u0443\u0442\u0430. \n            \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:\n            - id: ".concat(t,"\n            - date: ").concat(c)})})]})},D=(c(94),function(){return Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("nav",{className:"nav",children:[Object(d.jsx)(i.b,{to:"/calculator",className:"nav__item button",activeClassName:"nav__item--active",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(d.jsx)(i.b,{to:"/text?id=1&date=".concat((new Date).toLocaleDateString()),className:"nav__item button",activeClassName:"nav__item--active",children:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f"})]})})})}),A=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(D,{}),Object(d.jsx)("main",{className:"main",children:Object(d.jsx)(j.c,{children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(j.a,{path:"/calculator",exact:!0,component:E}),Object(d.jsx)(j.a,{path:"/text",component:S})]})})})]})},w=c(17),L=c(43),T=c(25),R={currencyRate:null,isLoading:!1,error:null};var F=c(8),U=c.n(F),k=c(22),C=function(){return fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((function(e){return e.json()}))},I=U.a.mark($),Q=U.a.mark(J);function $(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)(p,J);case 2:case"end":return e.stop()}}),I)}function J(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(k.b)({type:h});case 3:return t.next=5,Object(k.a)(C);case 5:return e=t.sent,t.next=8,Object(k.b)(v(e));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(k.b)((c=t.t0.message,{type:x,payload:c}));case 14:case"end":return t.stop()}var c}),Q,null,[[0,10]])}var P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.c,X=Object(L.a)(),q=Object(w.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(T.a)(Object(T.a)({},e),{},{isLoading:!0});case m:var c=t.payload;return Object(T.a)(Object(T.a)({},e),{},{currencyRate:c,isLoading:!1});case x:var n=t.payload;return{currencyRate:null,isLoading:!1,error:n};default:return e}}),P(Object(w.a)(X)));X.run($);c(95);s.a.render(Object(d.jsx)(r.a,{store:q,children:Object(d.jsx)(i.a,{children:Object(d.jsx)(A,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7c7f25a4.chunk.js.map