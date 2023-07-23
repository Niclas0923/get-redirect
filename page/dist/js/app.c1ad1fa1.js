(function(){"use strict";var t={6403:function(t,a,e){var s=e(7195),n=function(){var t=this,a=t._self._c;return a("div",[t.init?t._e():a("log-in",{attrs:{tryLogIn:t.tryLogIn}}),t.init?a("PageTop",{attrs:{page:t.page,changePage:t.changePage}}):t._e(),t.init&&"list"===t.page.now?a("PageList",{attrs:{list:t.list}}):t._e(),t.init&&"log"===t.page.now?a("PageLog",{attrs:{log:t.log}}):t._e()],1)},r=[],i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container",attrs:{id:"login-page"}},[a("div",{staticStyle:{height:"30vh"}}),a("div",{staticClass:"login-from col-12 offset-0 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4"},[a("h2",[t._v("管理员登陆")]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"用户名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("用户名")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"密码"},domProps:{value:t.password},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.login.apply(null,arguments)},input:function(a){a.target.composing||(t.password=a.target.value)}}}),a("label",{attrs:{for:"floatingPassword"}},[t._v("密码")])]),a("button",{staticClass:"btn btn-primary",on:{click:t.login}},[t._v("登陆")])])])},o=[],l={name:"LogIn",data(){return{name:"",password:""}},props:["tryLogIn"],methods:{login(){if(0!==this.name.length&&0!==this.password.length){const t=/[<>\\]/;t.test(this.name)||t.test(this.password)?alert("不能含有特殊符号"):this.tryLogIn(this.name,this.password)}else alert("不能为空")}}},c=l,d=e(1001),u=(0,d.Z)(c,i,o,!1,null,"236c0bd6",null),p=u.exports,m=function(){var t=this,a=t._self._c;return a("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__fadeInDown"}},[a("nav",{staticClass:"navbar navbar-expand-lg bg-body-tertiary"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand"},[t._v("ADM-Menu")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},t._l(t.page.all,(function(e){return a("li",{key:e.name,staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:(t.page.now===e.name?"active":"")+(e.on?"":"disabled"),attrs:{"aria-current":"page",href:"#"},on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e.name))])])})),0)])])])])},g=[],h={name:"PageTop",props:["page","changePage"],methods:{}},v=h,f=(0,d.Z)(v,m,g,!1,null,"258079e0",null),_=f.exports,b=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2"},[a("PageListSearch",{attrs:{valueChange:t.valueChange}}),a("PageListCards",{attrs:{list:t.listOn,addClick:t.addClick}}),a("PageListAddForm",{directives:[{name:"show",rawName:"v-show",value:t.addOn,expression:"addOn"}],attrs:{allTags:t.allTags}})],1)},w=[],C=(e(7658),function(){var t=this,a=t._self._c;return a("transition",{attrs:{name:"animate__animated animate__bounce","enter-active-class":"animate__zoomInDown"}},[a("div",{staticClass:"col-12 offset-0 col-md-6 offset-md-3"},[a("div",{staticClass:"card-page from"},[a("div",{staticClass:"row g-2 mb-2"},[a("div",{staticClass:"col-xxl"},[a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],staticClass:"form-control",attrs:{type:"email",placeholder:"索引"},domProps:{value:t.path},on:{input:function(a){a.target.composing||(t.path=a.target.value)}}}),a("label",[t._v("索引")])])]),a("div",{staticClass:"col-xxl"},[a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"url",placeholder:"URL"},domProps:{value:t.url},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addOne.apply(null,arguments)},input:function(a){a.target.composing||(t.url=a.target.value)}}}),a("label",[t._v("URL")])])])]),a("button",{staticClass:"btn btn-primary",on:{click:t.addOne}},[t._v("添加")])]),a("div",{pre:!0,attrs:{class:"card-page warning"}},[a("ul",[a("li",[t._v("索引无需添加斜杠 “/”。")]),a("li",[t._v("URL可设置成转跳链接，也可以设置为相对路径，例如“#”。")]),a("li",[t._v("URL要设置成转跳链接时候一定要添加“http(s)://”，不然会被认为是相对链接。")])])])])])}),y=[],O={name:"PageListAddForm",props:["allTags"],data(){return{path:"",url:""}},methods:{addOne(){if(0!==this.path.length&&0!==this.url.length){const t=/[<>\\]/;t.test(this.path)||t.test(this.url)?alert("不能含有 <>\\ 这几个特殊符号"):-1===["systemServer","adm"].indexOf(this.path)?-1===this.allTags.indexOf(this.path)?(this.$bus.$emit("addOne",this.path,this.url),this.url="",this.path=""):alert("索引标签重复，请进行修改"):alert("索引标签与系统占用标签相同，请进行修改")}else alert("不能为空")}}},L=O,x=(0,d.Z)(L,C,y,!1,null,"9df787ca",null),k=x.exports,P=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-4"},[t._l(t.list,(function(e){return a("div",{key:e.id+1,staticClass:"col"},[a("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInUp","leave-active-class":"animate__bounceOut"}},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title mb-2"},[t._v(t._s(e.name))]),a("h6",{staticClass:"card-subtitle text-muted"},[t._v(t._s(e.userName))]),a("a",{staticClass:"card-link",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.url))])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v(t._s(e.time))])]),a("a",{staticClass:"false",attrs:{href:"#"},on:{click:function(a){return t.delOne(e)}}},[a("svg",{pre:!0,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"}},[a("path",{pre:!0,attrs:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}})])])])])],1)})),t.addOn?a("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInUp","leave-active-class":"animate__bounceOut"}},[a("div",{staticClass:"col col-add"},[a("button",{staticClass:"btn btn-add",on:{click:t.add}},[a("svg",{staticClass:"bi bi-plus add-svg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}})])])])]):t._e()],2)])},I=[],S={name:"PageListCards",props:["list","addClick"],data(){return{addOn:!0}},methods:{delOne(t){this.$bus.$emit("delOne",t)},add(){this.addOn=!1,this.addClick()}}},Z=S,V=(0,d.Z)(Z,P,I,!1,null,"68dd95a2",null),N=V.exports,$=function(){var t=this,a=t._self._c;return a("transition",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInUp","leave-active-class":"animate__bounceOut"}},[a("div",{staticClass:"col-12 offset-0 col-md-6 offset-md-3 div-input"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(a){a.target.composing||(t.searchValue=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}}),a("a",{staticClass:"clear",attrs:{href:"#"},on:{click:function(a){t.searchValue=""}}},[a("svg",{pre:!0,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"}},[a("path",{pre:!0,attrs:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}})])])])])},j=[],T={name:"PageListSearch",data(){return{searchValue:""}},props:["valueChange"],watch:{searchValue(t){this.valueChange(t)}}},U=T,A=(0,d.Z)(U,$,j,!1,null,"10f2f11c",null),M=A.exports,D={name:"PageList",props:["list"],data(){return{addOn:!1,searchValue:""}},components:{PageListSearch:M,PageListAddForm:k,PageListCards:N},computed:{allTags(){const t=[];for(let a of this.list)t.push(a.name);return t},listOn(){if(""===this.searchValue)return this.list;{const t=(t,a)=>t.toLowerCase().includes(a.toLowerCase()),a=this.searchValue;return this.list.filter((e=>t(e.name,a)||t(e.url,a)||t(e.time,a)||t(e.userName,a)))}}},methods:{addClick(){this.addOn=!0},valueChange(t){this.searchValue=t}}},F=D,R=(0,d.Z)(F,b,w,!1,null,"04ca3f75",null),B=R.exports,E=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"pt-4"},[a("transition-group",{attrs:{appear:"",name:"animate__animated animate__bounce","enter-active-class":"animate__bounceInUp","leave-active-class":"animate__bounceOut"}},t._l(t.nLog,(function(e){return a("div",{key:e.id,staticClass:"row"},[a("div",{staticClass:"col-md-2 d-flex justify-content-center align-items-center app-line"},[a("span",{staticClass:"badge rounded-pill bg-primary"},[t._v(t._s(e.time))])]),a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"card rounded-0 border-0 shadow my-4"},[a("div",{staticClass:"card-body"},["addOne"===e.thing?a("h5",{staticClass:"card-title"},[t._v("添加")]):t._e(),"removeOne"===e.thing?a("h5",{staticClass:"card-title"},[t._v("删除")]):t._e(),"addOne"===e.thing?a("p",{staticClass:"card-text"},[t._v(" 管理员"),a("mark",[t._v(t._s(e.who))]),t._v("增添了项目"),a("mark",[t._v("/"+t._s(e.obj.name)+" ——> "+t._s(e.obj.url))]),t._v("。 ")]):t._e(),"removeOne"===e.thing?a("p",{staticClass:"card-text"},[t._v(" 管理员"),a("mark",[t._v(t._s(e.who))]),t._v("删除了项目"),a("mark",[t._v("/"+t._s(e.obj.name)+" ——> "+t._s(e.obj.url))]),t._v("， 它是管理员"),a("mark",[t._v(t._s(e.obj.userName))]),t._v("于"+t._s(e.obj.time)+"创建的。 ")]):t._e()])])])])})),0),0===t.log.length?a("div",[a("h2",[t._v("当前没有log信息。")])]):t._e()],1)])},z=[],J={name:"PageLog",props:["log"],computed:{nLog(){let t=[];for(let a of this.log)t.unshift(a);return t}}},q=J,G=(0,d.Z)(q,E,z,!1,null,"0cc0624c",null),H=G.exports,K=e(306),Q={name:"App",components:{LogIn:p,PageTop:_,PageList:B,PageLog:H},data(){return{init:!1,list:[],log:[],user:{name:"",password:""},page:{now:"list",all:[{name:"list",on:!0},{name:"log",on:!0}]}}},methods:{tryLogIn(t,a,e=!0){K.Z.post("/systemServer/getValList",{name:t,password:a}).then((s=>{"用户名或密码错误"===s.data[0]?alert(s.data[0]):(this.init||(e&&alert("登录成功"),this.init=!0,localStorage.setItem("user",JSON.stringify({name:t,password:a}))),this.list=s.data,this.user={name:t,password:a})})).catch((t=>{console.error(t)}))},getNewList(){this.tryLogIn(this.user.name,this.user.password,!1)},addOne(t,a){K.Z.post("/systemServer/addOne",{name:this.user.name,password:this.user.password,tag:t,url:a}).then((t=>{"成功"===t.data[0]?this.getNewList():alert(t.data[0])})).catch((t=>{console.error(t)}))},delOne(t){confirm(`确定要删除索引 ${t.name} 吗？`)&&K.Z.post("/systemServer/removeOne",{name:this.user.name,password:this.user.password,tagId:t.id}).then((t=>{"成功"!==t.data[0]&&alert(t.data[0]),this.getNewList()})).catch((t=>{console.error(t)}))},changePage(t){t.name!==this.page.now&&t.on&&(this.page.now=t.name,"log"===this.page.now&&this.getLogValue());const a=document.querySelector(".navbar-collapse");a.classList.toggle("show")},getLogValue(){K.Z.post("/systemServer/log",{name:this.user.name,password:this.user.password}).then((t=>{"用户名或密码错误"===t.data[0]?alert(t.data[0]):this.log=t.data})).catch((t=>{console.error(t)}))}},mounted(){const t=JSON.parse(localStorage.getItem("user"));t&&(this.tryLogIn(t["name"],t["password"],!1),setTimeout((()=>{this.getLogValue()}),1500)),this.$bus.$on("addOne",this.addOne),this.$bus.$on("delOne",this.delOne)},beforeDestroy(){this.$bus.off("addOne"),this.$bus.off("delOne")}},W=Q,X=(0,d.Z)(W,n,r,!1,null,null,null),Y=X.exports;s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(Y),beforeCreate(){s.ZP.prototype.$bus=this}}).$mount("#app")}},a={};function e(s){var n=a[s];if(void 0!==n)return n.exports;var r=a[s]={exports:{}};return t[s].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(a,s,n,r){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],r=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(e.O).every((function(t){return e.O[t](s[l])}))?s.splice(l--,1):(o=!1,r<i&&(i=r));if(o){t.splice(d--,1);var c=n();void 0!==c&&(a=c)}}return a}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,n,r]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var n,r,i=s[0],o=s[1],l=s[2],c=0;if(i.some((function(a){return 0!==t[a]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var d=l(e)}for(a&&a(s);c<i.length;c++)r=i[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(d)},s=self["webpackChunkpage"]=self["webpackChunkpage"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(6403)}));s=e.O(s)})();
//# sourceMappingURL=app.c1ad1fa1.js.map