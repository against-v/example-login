(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{27:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(15),s=r.n(a),i=r(13),o=r(19),l=(r(27),r(3)),j=r(20),u=Object(j.a)(),d=r(7),b="/",m="/login",f="AUTH",O="NO_AUTH",h=function(e){return e.authorizationStatus===f},p=function(e){return e.user},x=function(e){return e.formIsLoading},g=r(1);var _=function(e){var t=e.render,r=e.path,c=e.exact,n=Object(d.c)(h);return Object(g.jsx)(l.b,{path:r,exact:c,render:function(e){return n?t(e):Object(g.jsx)(l.a,{to:m})}})},v="requireAuthorization",N="redirectToRoute",y="setUser",w="setFormIsLoading",I=function(e){return{type:v,payload:e}},S=function(e){return{type:N,payload:e}},L=function(e){return{type:y,payload:e}},k=function(e){return{type:w,payload:e}};var z=function(){var e=Object(d.b)(),t=Object(d.c)(p);return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:t}),Object(g.jsx)("button",{className:"button",onClick:function(t){t.preventDefault(),e(S(m)),e(I(O)),localStorage.removeItem("user")},children:"Logout"})]})},F=r.p+"static/media/logo.48fd12e0.png",T=r.p+"static/media/logo.97391cd0.webp";var q=function(){var e=Object(d.b)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(d.c)(x);return Object(g.jsxs)("form",{className:"login-form",onSubmit:function(c){var n;c.preventDefault(),e((n={email:t.current.value,password:r.current.value},function(e,t){e(k(!0)),setTimeout((function(){localStorage.setItem("user",n.email),e(I(f)),e(L(n.email)),e(S(b)),e(k(!1))}),500)}))},children:[Object(g.jsx)("div",{className:"login-form__logo-container",children:Object(g.jsxs)("picture",{children:[Object(g.jsx)("source",{srcSet:T,type:"image/webp"}),Object(g.jsx)("img",{className:"login-form__logo",src:F,alt:"Logo",width:"100"})]})}),Object(g.jsxs)("fieldset",{className:"login-form__fieldset",children:[Object(g.jsx)("legend",{className:"login-form__title",children:"Sign in"}),Object(g.jsxs)("ul",{className:"login-form__list",children:[Object(g.jsxs)("li",{className:"login-form__item form-item",children:[Object(g.jsx)("div",{className:"form-item__label-container",children:Object(g.jsx)("label",{htmlFor:"email",className:"form-item__label",children:"Email"})}),Object(g.jsx)("input",{ref:t,id:"email",type:"email",className:"input",placeholder:"Email",required:!0,tabIndex:"1"})]}),Object(g.jsxs)("li",{className:"login-form__item form-item",children:[Object(g.jsxs)("div",{className:"form-item__label-container",children:[Object(g.jsx)("label",{htmlFor:"password",className:"form-item__label",children:"Password"}),Object(g.jsx)("a",{href:"#forgot-password",className:"form-item__link",tabIndex:"2",children:"Forgot password?"})]}),Object(g.jsx)("input",{ref:r,id:"password",type:"password",className:"input",placeholder:"Password",required:!0,tabIndex:"1"})]}),Object(g.jsx)("li",{className:"login-form__item form-item",children:Object(g.jsx)("button",{disabled:n,className:"button button_full ".concat(n?"button_loading":""),tabIndex:"1",children:"Sign in"})})]})]})]})};var A=function(){return Object(d.c)(h)?Object(g.jsx)(l.a,{to:b}):Object(g.jsx)("div",{className:"login-screen container",children:Object(g.jsx)("section",{className:"login-screen__form-container",children:Object(g.jsx)(q,{})})})};var E=function(){return Object(g.jsx)(l.c,{history:u,children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{exact:!0,path:m,children:Object(g.jsx)(A,{})}),Object(g.jsx)(_,{exact:!0,path:b,render:function(){return Object(g.jsx)(z,{})}})]})})},R=r(8),U={user:localStorage.getItem("user")||"",authorizationStatus:O,formIsLoading:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(R.a)(Object(R.a)({},e),{},{authorizationStatus:t.payload});case y:return Object(R.a)(Object(R.a)({},e),{},{user:t.payload});case w:return Object(R.a)(Object(R.a)({},e),{},{formIsLoading:t.payload});default:return e}},H=r(22),J=Object(o.b)(D,Object(o.a)(H.a,(function(e){return function(e){return function(t){return t.type===N&&u.push(t.payload),e(t)}}})));localStorage.getItem("user")&&J.dispatch(I(f)),s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(d.a,{store:J,children:Object(g.jsx)(E,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c47dd37c.chunk.js.map