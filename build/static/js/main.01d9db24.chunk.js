(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),l=n.n(c),o=n(8),u=n(15),i=n(5),s=n.n(i),m=n(9),f=n(74),d=n(29),p=n(22),E=n.n(p),b="/api/blogs",g=null,v=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,E.a.post(b,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,E.a.put("".concat(b,"/").concat(t.id),t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,E.a.delete("".concat(b,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getAll:v,create:h,createComment:function(){var e=Object(m.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("".concat(b,"/").concat(n.id,"/comments/"),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addLike:O,remove:y,setToken:function(e){g="bearer ".concat(e)}},w=function(){return function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIKE":var n=t.data,a=e.find((function(e){return e.id===n})),r=Object(d.a)(Object(d.a)({},a),{},{likes:a.likes+1});return e.map((function(e){return e.id!==n?e:r}));case"REMOVE_BLOG":var c=t.removed;return e.filter((function(e){return e.id!==c}));case"ADD_BLOG":return[].concat(Object(f.a)(e),[t.data]);case"INIT_BLOGS":return t.data;case"ADD_COMMENT":var l=t.id,o=e.find((function(e){return e.id===l})),u=Object(d.a)(Object(d.a)({},o),{},{comments:o.comments.concat(t.data)});return e.map((function(e){return e.id!==l?e:u}))}return e},x={login:function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e,t,n){function a(e){return new Promise((function(t){return setTimeout(t,e)}))}return function(){var r=Object(m.a)(s.a.mark((function r(c){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"SHOW_NOTIFICATION",message:e,kind:t}),n*=1e3,r.next=4,a(n);case 4:c({type:"HIDE_NOTIFICATION",message:e});case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1,message:null,kind:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return{show:!0,message:t.message,kind:t.kind};case"HIDE_NOTIFICATION":return{show:!1,message:null,kind:null};default:return e}},I=function(e){return function(){var t=Object(m.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.login(e);case 3:a=t.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(a)),n({type:"LOGIN_USER",data:a}),j.setToken(a.token),n(S("Welcome ".concat(a.name),"success",3.8)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),n(S("Error: Wrong username or password","error",3.8));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":case"LOGIN_USER":case"LOGOUT_USER":return t.data;default:return e}},C={getAll:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getBlogger:function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("/api/users","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data}return e},_=n(13),B=n(11),D=n(135),U=n(136),R=n(137),F=n(138),G=n(68),z=n.n(G),H=function(e){var t=e.user,n=Object(o.b)();return r.a.createElement(D.a,{position:"static"},r.a.createElement(U.a,null,r.a.createElement(z.a,null),r.a.createElement("h3",null,"Blog App"),r.a.createElement(R.a,{edge:"start",color:"default","aria-label":"menu"}),r.a.createElement(F.a,{color:"inherit",component:_.b,to:"/"},"home"),r.a.createElement(F.a,{color:"inherit",component:_.b,to:"/users"},"users"),t?r.a.createElement("div",null,r.a.createElement("em",{style:{marginLeft:"0.5rem"}},t.username," logged in"),r.a.createElement(F.a,{style:{marginLeft:"0.5rem"},size:"small",variant:"contained",color:"secondary",onClick:function(){n(function(e){return function(t){try{window.localStorage.getItem("loggedBlogAppUser")&&window.localStorage.removeItem("loggedBlogAppUser"),t(S("Bye bye ".concat(e.name),"success",3.8)),t({type:"LOGOUT_USER",data:null})}catch(n){console.log(n)}}}(t))}},"Logout")):r.a.createElement(F.a,{style:{marginLeft:"0.5rem"},component:_.b,size:"small",color:"inherit",to:"/login"},"Login")))},M=(n(112),function(){var e=Object(o.c)((function(e){return e.notification}));return!1===e.message?null:r.a.createElement("div",{className:"success"===e.kind?"success-message":"error"===e.kind?"error-message":null},e.message)}),q=n(139),W=n(152),V=n(153),J=n(140),K=n(51),P=n.n(K),Q=(n(113),function(e){var t=e.loginHandler,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),m=s[0],f=s[1],d=function(e){"username-input"===e.target.name?o(e.target.value):f(e.target.value)};return r.a.createElement("form",{className:"login-form",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t({username:l,password:m})}},r.a.createElement(q.a,null,r.a.createElement(W.a,{htmlFor:"username-input"},"Username"),r.a.createElement(V.a,{id:"username-input",name:"username-input",required:!0,type:"text",value:l,onChange:d,startAdornment:r.a.createElement(J.a,{position:"start"},r.a.createElement(P.a,null))})),r.a.createElement(q.a,null,r.a.createElement(W.a,{htmlFor:"password-input"},"Password"),r.a.createElement(V.a,{id:"password-input",name:"password-input",required:!0,type:"password",value:m,onChange:d,startAdornment:r.a.createElement(J.a,{position:"start"},r.a.createElement(P.a,null))})),r.a.createElement(F.a,{variant:"contained",color:"primary",type:"submit",disabled:!l.length||!m.length},"login"))}),X=function(){var e=Object(o.b)(),t=function(){var t=Object(m.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.username,r=n.password,e(I({username:a,password:r}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Blog App"),r.a.createElement("h3",null,"Log into application"),r.a.createElement(Q,{loginHandler:t}))},Y=n(69),Z=n.n(Y),$=(n(114),function(e){var t=e.createBlog,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),m=s[0],f=s[1],d=Object(a.useState)(""),p=Object(u.a)(d,2),E=p[0],b=p[1],g=function(e){var t=e.target,n=t.name,a=t.value;"title"===n?o(a):"author"===n?f(a):b(a)};return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Add a blog "),r.a.createElement(Z.a,{style:{verticalAlign:"bottom"}})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:l,author:m,url:E}),o(""),f(""),b("")},className:"blog-form"},r.a.createElement(q.a,null,r.a.createElement(W.a,{htmlFor:"title"},"Title"),r.a.createElement(V.a,{id:"title",name:"title",required:!0,type:"text",value:l,onChange:g})),r.a.createElement(q.a,null,r.a.createElement(W.a,{htmlFor:"author"},"Author"),r.a.createElement(V.a,{id:"author",name:"author",required:!0,type:"text",value:m,onChange:g})),r.a.createElement(q.a,null,r.a.createElement(W.a,{htmlFor:"url"},"URL"),r.a.createElement(V.a,{id:"url",name:"url",required:!0,type:"text",value:E,onChange:g})),r.a.createElement(F.a,{variant:"contained",color:"primary",type:"submit",disabled:!l.length||!m.length},"Add blog")))}),ee=(n(115),r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(u.a)(n,2),l=c[0],o=c[1],i={display:l?"none":""},s={display:l?"":"none"},m=function(){o(!l)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",{className:"togglable"},r.a.createElement("div",{style:i},r.a.createElement(F.a,{variant:"contained",color:"primary",onClick:m},e.buttonLabel)),r.a.createElement("div",{style:s},e.children,r.a.createElement(F.a,{variant:"contained",color:"secondary",onClick:m},"Cancel")))})));ee.displayName="Togglable";var te=ee,ne=n(141),ae=n(75),re=n(142),ce=n(143),le=n(144),oe=n(145),ue=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.blogs})),n=Object(o.c)((function(e){return e.user})),c=Object(a.useRef)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Blogs"),r.a.createElement(te,{buttonLabel:"new-blog",ref:c},r.a.createElement($,{createBlog:function(t){try{e(function(e,t){return function(){var n=Object(m.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.create(e);case 2:(r=n.sent).user=t,a({type:"ADD_BLOG",data:r});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n)),e(S("A new blog ".concat(t.title," by ").concat(t.author," added"),"success",3.8)),c.current.toggleVisibility()}catch(a){console.log(a),e(S("Error adding a new blog","error",3.8))}}})),r.a.createElement(ne.a,{component:ae.a},r.a.createElement(re.a,null,r.a.createElement(ce.a,null,t.sort((function(e,t){return t.likes-e.likes})).map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(oe.a,null,r.a.createElement(_.b,{to:"/blogs/".concat(e.id)},e.title)),r.a.createElement(oe.a,null,e.author))}))))))},ie=n(146),se=function(){var e=Object(o.c)((function(e){return e.users})),t=Object(o.b)();return Object(a.useEffect)((function(){t(N())}),[t]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Blog app users"),r.a.createElement(ne.a,{component:ae.a},r.a.createElement(re.a,null,r.a.createElement(ie.a,null,r.a.createElement(le.a,null,r.a.createElement(oe.a,null,"User"),r.a.createElement(oe.a,null,"Blogs"))),r.a.createElement(ce.a,null,e.map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(oe.a,null,r.a.createElement(_.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement(oe.a,null,e.blogs.length))})))))))},me=n(118),fe=n(147),de=n(148),pe=n(149),Ee=n(71),be=n.n(Ee),ge=n(70),ve=n.n(ge),he=function(e){var t=e.user,n=Object(a.useState)(!1),c=Object(u.a)(n,2),l=c[0],i=c[1],f=Object(a.useState)(""),p=Object(u.a)(f,2),E=p[0],b=p[1],g=Object(B.g)(),v=Object(B.h)().id,h=Object(o.c)((function(e){return e.blogs})),O=Object(o.b)();Object(a.useEffect)((function(){console.log("running - blogs effect"),h.length||O(w())}),[O,h.length]);var y=function(e){var t=h.find((function(t){return t.id===e})),n=Object(d.a)(Object(d.a)({},t),{},{likes:t.likes+1});try{O(function(e){return function(){var t=Object(m.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.addLike(e);case 2:a=t.sent,n({type:"ADD_LIKE",data:a.id});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}catch(a){console.log(a)}},k=function(e){var t=h.find((function(t){return t.id===e}));try{O(function(e){return function(){var t=Object(m.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.id,t.next=3,j.remove(e.id);case 3:r=t.sent,n({type:"REMOVE_BLOG",data:r,removed:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}catch(n){console.log(n)}},x=h.find((function(e){return e.id===v}));return r.a.createElement("div",null,l?r.a.createElement("div",{className:"remove-confirmation"},r.a.createElement("div",{className:"remove-confirmation-dialog"},r.a.createElement(me.a,{variant:"body1",component:"p"},"Do you really want to remove ",x.title," by ",x.author,"?"),r.a.createElement("div",null,r.a.createElement(F.a,{variant:"outlined",color:"primary",onClick:function(){return i(!1)}},"Cancel"),r.a.createElement(F.a,{variant:"outlined",color:"secondary",onClick:function(){return function(e){setTimeout((function(){i(!1)}),500),k(e),g.push("/")}(x.id)}},"Remove")))):null,x?r.a.createElement("div",null,r.a.createElement(fe.a,null,r.a.createElement(de.a,null,r.a.createElement(me.a,{color:"textSecondary",component:"h2",gutterBottom:!0},x.title," by ",x.author),r.a.createElement(me.a,{variant:"body1",component:"p"},"likes ",r.a.createElement("strong",null,x.likes),r.a.createElement(F.a,{style:{marginLeft:"0.75rem"},size:"small",variant:"text",color:"primary",onClick:function(){return y(x.id)}},r.a.createElement(ve.a,{color:"primary",fontSize:"small"}))),r.a.createElement("div",null,r.a.createElement(me.a,{variant:"body2",component:"p"},x.user&&x.user.name?r.a.createElement(_.b,{style:{textDecoration:"none",color:"#3840a5",fontWeight:"bold"},to:"/users/".concat(x.user.id)},x.user.name):"anonymous"),t&&x.user&&t.name===x.user.name?r.a.createElement(F.a,{size:"small",variant:"contained",color:"secondary",onClick:function(){return i(!0)}},"remove"):null)),r.a.createElement(pe.a,null,r.a.createElement(F.a,{component:"a",href:x.url?x.url.includes("http")?x.url:"https://".concat(x.url):null,target:"_blank",rel:"noopener noreferrer"},"Read the blog"))),r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),O(function(e,t){return function(){var n=Object(m.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.createComment(e,t);case 2:r=n.sent,a({type:"ADD_COMMENT",data:r,id:t.id});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}({comment:E},x)),b("")}},r.a.createElement(q.a,null,r.a.createElement(W.a,{htmlFor:"comment"},"Comment"),r.a.createElement(V.a,{id:"comment",name:"comment",required:!0,type:"text",value:E,onChange:function(e){var t=e.target.value;b(t)},startAdornment:r.a.createElement(J.a,{position:"start"},r.a.createElement(be.a,null))})),r.a.createElement(F.a,{style:{verticalAlign:"bottom"},size:"small",variant:"contained",color:"primary",type:"submit",disabled:!E.length},"Add")),x.comments&&x.comments.length?r.a.createElement("ul",null,x.comments.map((function(e){return r.a.createElement("li",{key:e.id},e.comment)}))):null)):null)},Oe=n(150),ye=function(){var e=Object(B.h)().id,t=Object(o.c)((function(e){return e.users})),n=Object(o.b)();Object(a.useEffect)((function(){t.length||n(N())}),[n,t.length]);var c=t.find((function(t){return t.id===e}));return r.a.createElement("div",null,c&&c.blogs?r.a.createElement("div",null,r.a.createElement("h2",null,c.name),r.a.createElement(ne.a,{component:ae.a},r.a.createElement(re.a,null,r.a.createElement(ie.a,null,r.a.createElement(le.a,null,r.a.createElement(oe.a,null,"Added blogs"))),r.a.createElement(ce.a,null,c.blogs.map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(oe.a,null,r.a.createElement(_.b,{to:"/blogs/".concat(e.id)},e.title)))})))))):r.a.createElement(Oe.a,{style:{position:"fixed",top:"46%",left:"46%"}}))},je=n(151),we=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(o.c)((function(e){return e.user})),i=Object(o.c)((function(e){return e.users})),s=Object(o.b)();return Object(a.useEffect)((function(){s(function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);return j.setToken(t.token),function(e){e({type:"SET_USER",data:t})}}return function(e){e({type:"SET_USER",data:null})}}()),s(w()),s(N()),setTimeout((function(){c(!1)}),500)}),[s]),r.a.createElement(_.a,null,r.a.createElement(je.a,null,r.a.createElement(M,null),r.a.createElement(H,{user:l}),n?r.a.createElement(Oe.a,{style:{position:"fixed",top:"46%",left:"46%"}}):r.a.createElement(B.d,null,r.a.createElement(B.b,{path:"/users/:id",render:function(){return l?r.a.createElement(ye,{users:i}):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{path:"/users",render:function(){return l?r.a.createElement(se,{user:l}):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{path:"/blogs/:id",render:function(){return l?r.a.createElement(he,{user:l}):r.a.createElement(B.a,{to:"/login"})}}),r.a.createElement(B.b,{path:"/login",render:function(){return l?r.a.createElement(B.a,{to:"/"}):r.a.createElement(X,null)}}),r.a.createElement(B.b,{path:"/",render:function(){return null===l?r.a.createElement(B.a,{to:"/login"}):r.a.createElement(ue,null)}}))))},ke=n(31),xe=n(72),Se=n(73),Ae=Object(ke.combineReducers)({user:T,users:L,blogs:k,notification:A}),Ie=Object(ke.createStore)(Ae,Object(Se.composeWithDevTools)(Object(ke.applyMiddleware)(xe.a)));l.a.render(r.a.createElement(o.a,{store:Ie},r.a.createElement(we,null)),document.getElementById("root"))},81:function(e,t,n){e.exports=n(116)}},[[81,1,2]]]);
//# sourceMappingURL=main.01d9db24.chunk.js.map