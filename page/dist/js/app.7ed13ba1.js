(function(){"use strict";var t={4614:function(t,e,a){var s=a(7195),n=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},r=[],o={name:"App",components:{},data(){return{}}},i=o,l=a(1001),c=(0,l.Z)(i,n,r,!1,null,null,null),u=c.exports,d=a(408),m=a(306);s.ZP.use(d.ZP);const h={whiteUser(t,e){localStorage.setItem("user",JSON.stringify(e)),t.commit("WHITEUSER",e)},getValueList(t){t.state.postTo("/systemServer/getValList",{name:t.state.user.name,password:t.state.user.password},(e=>{t.commit("CHANGELIST",e)}))},getValueLog(t){t.state.postTo("/systemServer/getValLog",{name:t.state.user.name,password:t.state.user.password},(e=>{t.commit("CHANGELOG",e)}))},addListOne(t,e){t.state.postTo("/systemServer/addOne",{name:t.state.user.name,password:t.state.user.password,tag:e.tag,url:e.url},(e=>{e?t.dispatch("getValueList").then((t=>{t&&console.log(t)})):alert("添加失败")}))},removeListOne(t,e){confirm(`确定要删除索引 ${e.name} 吗？`)&&t.state.postTo("/systemServer/removeOne",{name:t.state.user.name,password:t.state.user.password,tagId:e.id},(e=>{e?t.dispatch("getValueList").then((t=>{t&&console.log(t)})):alert("删除失败")}))}},p={WHITEUSER(t,e){t.user.name=e.name,t.user.password=e.password},CHANGELIST(t,e){t.list=e},CHANGELOG(t,e){t.log=e}},v={user:{name:"",password:""},list:[],log:[],postTo(t,e,a){if(!e.name&&!e.password){const t=JSON.parse(localStorage.getItem("user"));t&&(this.user=t,e=t)}m.Z.post(t,e).then((t=>a(t.data)),(t=>alert("网络连接失败"+t)))},tryLogIn(t,e,a){this.$store.state.postTo("/systemServer/login",{name:t,password:e},a)}},g={};var f=new d.ZP.Store({actions:h,mutations:p,state:v,getters:g}),_=a(2241),w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",attrs:{id:"login-page"}},[e("div",{staticStyle:{height:"30vh"}}),e("div",{staticClass:"login-from col-12 offset-0 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4"},[e("h2",[t._v("管理员登陆")]),e("div",{staticClass:"form-floating mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("label",[t._v("用户名")])]),e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("label",[t._v("密码")])]),e("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("登陆")])])])},b=[],C=(a(7658),{name:"LogIn",data(){return{name:"",password:""}},methods:{login(){if(0!==this.name.length&&0!==this.password.length){const t=/[<>\\]/;t.test(this.name)||t.test(this.password)?alert("不能含有特殊符号"):this.tryLogIn(this.name,this.password,(t=>{t?(this.whiteUser({name:this.name,password:this.password}),this.name="",this.password="",this.$router.push("/page")):alert("用户名或密码错误")}))}else alert("不能为空")},...(0,d.nv)(["whiteUser"])},computed:{...(0,d.rn)(["tryLogIn"])},mounted(){const t=JSON.parse(localStorage.getItem("user"));t&&this.tryLogIn(t.name,t.password,(e=>{e?(this.whiteUser({name:t.name,password:t.password}),this.$router.push("/page")):localStorage.removeItem("user")}))}}),L=C,y=(0,l.Z)(L,w,b,!1,null,"6cc0a34a",null),x=y.exports,O=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInDown"}},[e("nav",{staticClass:"navbar navbar-expand-lg bg-body-tertiary"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand"},[t._v("ADM-Menu")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page","active-class":"active",to:"/page/list"}},[t._v(" list ")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page","active-class":"active",to:"/page/log"}},[t._v(" log ")])],1)])])])])]),e("router-view")],1)},k=[],S={name:"HomePage",methods:{...(0,d.nv)(["getValueList","getValueLog"])},mounted(){this.getValueList(),this.getValueLog()}},V=S,P=(0,l.Z)(V,O,k,!1,null,"4ba050f6",null),I=P.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2"},[e("PageListSearch",{attrs:{valueChange:t.valueChange}}),e("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInUp","leave-active-class":"animate__bounceOut"}},[e("PageListCards",{attrs:{searchValue:t.searchValue,addClick:t.addClick}})],1),e("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__bounceIn","leave-active-class":"animate__zoomOut"}},[e("PageListAddForm",{directives:[{name:"show",rawName:"v-show",value:t.addOn,expression:"addOn"}],attrs:{allTags:t.allTags}})],1)],1)},T=[],Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 offset-0 col-md-6 offset-md-3"},[e("div",{staticClass:"card-page from"},[e("div",{staticClass:"row g-2 mb-2"},[e("div",{staticClass:"col-xxl"},[e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],staticClass:"form-control",attrs:{type:"email",placeholder:"索引"},domProps:{value:t.path},on:{input:function(e){e.target.composing||(t.path=e.target.value)}}}),e("label",[t._v("索引")])])]),e("div",{staticClass:"col-xxl"},[e("div",{staticClass:"form-floating"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"url",placeholder:"URL"},domProps:{value:t.url},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addListOne.apply(null,arguments)},input:function(e){e.target.composing||(t.url=e.target.value)}}}),e("label",[t._v("URL")])])])]),e("button",{staticClass:"btn btn-primary",on:{click:t.addListOne}},[t._v("添加")])]),t._m(0)])},E=[function(){var t=this,e=t._self._c;return e("div",{pre:!0,attrs:{class:"card-page warning"}},[e("ul",[e("li",[t._v("索引无需添加斜杠 “/”。")]),e("li",[t._v("URL可设置成转跳链接，也可以设置为相对路径，例如“#”。")]),e("li",[t._v("URL要设置成转跳链接时候一定要添加“http(s)://”，不然会被认为是相对链接。")])])])}],U={name:"PageListAddForm",props:["allTags"],data(){return{path:"",url:""}},methods:{...(0,d.nv)({addList:"addListOne"}),addListOne(){if(0!==this.path.length&&0!==this.url.length){const t=/[<>\\]/;t.test(this.path)||t.test(this.url)?alert("不能含有 <>\\ 这几个特殊符号"):-1===["systemServer","adm"].indexOf(this.path)?-1===this.allTags.indexOf(this.path)?(this.addList({tag:this.path,url:this.url}),this.url="",this.path=""):alert("索引标签重复，请进行修改"):alert("索引标签与系统占用标签相同，请进行修改")}else alert("不能为空")}}},j=U,A=(0,l.Z)(j,Z,E,!1,null,"4b9cd362",null),B=A.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-4"},t._l(t.listOn,(function(a){return e("div",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"i.show"}],key:a.id,staticClass:"col"},[a.id!==t.add.id?e("div",{staticClass:"card h-100"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title mb-2"},[t._v(t._s(a.name))]),e("h6",{staticClass:"card-subtitle text-muted"},[t._v(t._s(a.userName))]),e("a",{staticClass:"card-link",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])]),e("div",{staticClass:"card-footer"},[e("small",{staticClass:"text-muted"},[t._v(t._s(a.time))])]),e("div",{staticClass:"false",on:{click:function(e){return t.removeListOne(a)}}},[e("svg",{pre:!0,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"}},[e("path",{pre:!0,attrs:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}})])])]):t._e(),a.id===t.add.id?e("button",{staticClass:"btn btn-add",on:{click:function(e){return t.addBtn(a)}}},[e("svg",{staticClass:"bi bi-plus add-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}})])]):t._e()])})),0)},$=[],M={name:"PageListCards",props:["addClick","searchValue"],data(){return{add:{id:"addBtn123",show:!0}}},methods:{...(0,d.nv)(["removeListOne"]),addBtn(t){this.add.show=!1,t.show=!1,this.addClick()},showCard(t){if(""===this.searchValue)return!0;{const e=this.searchValue,a=(t,e)=>t.toLowerCase().includes(e.toLowerCase());return a(t.name,e)||a(t.url,e)||a(t.time,e)||a(t.userName,e)}}},computed:{...(0,d.rn)(["list"]),listOn(){if(""===this.searchValue){const t=[];for(let e of this.list)e.show=!0,t.push(e);return t.push(this.add),t}{const t=[],e=[];this.list.forEach((a=>{this.showCard(a)?(a.show=!0,t.push(a)):(a.show=!1,e.push(a))}));let a=[];return 0===t.length?(e.push(this.add),a=e):(t.push(this.add),a=t.concat(e)),a}}}},H=M,G=(0,l.Z)(H,R,$,!1,null,"5823ab34",null),J=G.exports,z=function(){var t=this,e=t._self._c;return e("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInDown"}},[e("div",{staticClass:"col-12 offset-0 col-md-8 offset-md-2 col-xxl-6 offset-xxl-3 div-input"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.searchValue.length,expression:"searchValue.length"}],attrs:{id:"del"},on:{click:function(e){t.searchValue=""}}},[e("svg",{pre:!0,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-lg clear",viewBox:"0 0 16 16"}},[e("path",{pre:!0,attrs:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}})])]),e("svg",{pre:!0,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search search-logo",viewBox:"0 0 16 16"}},[e("path",{pre:!0,attrs:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}})]),e("div",{staticClass:"div-tips"},t._l(t.tipsOn,(function(a){return e("div",{key:a,staticClass:"tips-for-search",on:{click:function(e){t.searchValue=a}}},[t._v(" "+t._s(a)+" ")])})),0)])])},F=[],D=(a(6229),a(7330),a(2062),{name:"PageListSearch",data(){return{searchValue:"",timeoutI:""}},props:["valueChange"],computed:{...(0,d.rn)(["list"]),tipsOn(){const t=[],e=[],a=[];this.list.forEach((s=>{try{const a=new URL(s.url),n=a.hostname,r=a.port;e.push(n),r&&t.push(r)}catch(n){console.log(n)}a.push(s.userName)}));const s=[...new Set(e)],n=[...new Set(a)],r=[...new Set(t)];let o=[];return 1===s.length&&this.list.length===e.length||(o=o.concat(s)),o=o.concat(r),1!==n.length&&(o=o.concat(n)),[...new Set(o)]}},watch:{searchValue(t){clearTimeout(this.timeoutI),this.timeoutI=setTimeout((()=>{this.valueChange(t)}),100)}}}),W=D,q=(0,l.Z)(W,z,F,!1,null,"5fb2230e",null),K=q.exports,Q={name:"PageList",data(){return{addOn:!1,searchValue:""}},components:{PageListSearch:K,PageListAddForm:B,PageListCards:J},computed:{allTags(){const t=[];for(let e of this.list)t.push(e.name);return t},...(0,d.rn)(["list"])},methods:{...(0,d.nv)(["getValueList"]),addClick(){this.addOn=!0},valueChange(t){this.searchValue=t}},mounted(){const t=JSON.parse(localStorage.getItem("user"));t?this.getValueList():this.$router.push("/login")},beforeRouteEnter(t,e,a){try{const t=document.getElementById("navbarSupportedContent");t.classList.toggle("show")}catch(s){console.log("直接访问出现此log可以忽视"),console.log(s)}a()}},X=Q,Y=(0,l.Z)(X,N,T,!1,null,"fca545e2",null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"pt-4"},[e("transition-group",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInUp","leave-active-class":"animate__bounceOut"}},t._l(t.nLog,(function(a){return e("div",{key:a.id,staticClass:"row"},[e("div",{staticClass:"col-md-2 d-flex justify-content-center align-items-center app-line"},[e("span",{staticClass:"badge rounded-pill bg-primary"},[t._v(t._s(a.time))])]),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"card rounded-0 border-0 shadow my-4"},[e("div",{staticClass:"card-body"},["addOne"===a.thing?e("h5",{staticClass:"card-title"},[t._v("添加")]):t._e(),"removeOne"===a.thing?e("h5",{staticClass:"card-title"},[t._v("删除")]):t._e(),"addOne"===a.thing?e("p",{staticClass:"card-text"},[t._v(" 管理员"),e("mark",[t._v(t._s(a.who))]),t._v("增添了项目"),e("mark",[t._v("/"+t._s(a.obj.name)+" ——> "+t._s(a.obj.url))]),t._v("。 ")]):t._e(),"removeOne"===a.thing?e("p",{staticClass:"card-text"},[t._v(" 管理员"),e("mark",[t._v(t._s(a.who))]),t._v("删除了项目"),e("mark",[t._v("/"+t._s(a.obj.name)+" ——> "+t._s(a.obj.url))]),t._v("， 它是管理员"),e("mark",[t._v(t._s(a.obj.userName))]),t._v("于"+t._s(a.obj.time)+"创建的。 ")]):t._e()])])])])})),0),0===t.log.length?e("div",[e("h2",[t._v(t._s(t.noValue))])]):t._e()],1)])},at=[],st={name:"PageLog",data(){return{noValue:""}},computed:{nLog(){let t=[];for(let e of this.log)t.unshift(e);return t},...(0,d.rn)(["log"])},methods:{...(0,d.nv)(["getValueLog"])},mounted(){const t=JSON.parse(localStorage.getItem("user"));t?this.getValueLog():this.$router.push("/login")},beforeRouteEnter(t,e,a){try{const t=document.getElementById("navbarSupportedContent");t.classList.toggle("show")}catch(s){console.log("直接访问出现此log可以忽视"),console.log(s)}a()}},nt=st,rt=(0,l.Z)(nt,et,at,!1,null,"7265c8e6",null),ot=rt.exports;const it=new _.ZP({routes:[{path:"/",redirect:"/login"},{path:"/login",component:x,meta:{name:"登陆"}},{path:"/page",redirect:"/page/list",component:I,meta:{name:"主页"},children:[{path:"list",component:tt,meta:{name:"列表"}},{path:"log",component:ot,meta:{name:"日志"}}]}]});var lt=it;s.ZP.config.productionTip=!1,s.ZP.use(_.ZP),new s.ZP({render:t=>t(u),beforeCreate(){s.ZP.prototype.$bus=this},router:lt,store:f}).$mount("#app")}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,n,r){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],r=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,r<o&&(o=r));if(i){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,r,o=s[0],i=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(e&&e(s);c<o.length;c++)r=o[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkpage"]=self["webpackChunkpage"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(4614)}));s=a.O(s)})();
//# sourceMappingURL=app.7ed13ba1.js.map