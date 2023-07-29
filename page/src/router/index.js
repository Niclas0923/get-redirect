import VueRouter from "vue-router";

// 组件
import LogIn from "@/components/login/LogIn.vue";
import Page from "@/components/page/HomePage.vue";
import PageList from "@/components/page/list/PageList.vue";
import PageLog from "@/components/page/log/PageLog.vue";

// 配置并释放路由文件
const router =  new VueRouter({
    // mode:"history",
    // mode:"hash",
    routes:[
        // 一级路由
        {
            path: '/',
            redirect: '/login'
        },
        {
            path:"/login",
            component:LogIn,
            meta:{
                name:"登陆"
            },
        },
        {
            path:"/page",
            redirect: '/page/list',
            component:Page,
            meta:{
                name:"主页"
            },
            children:[
                {
                    path:"list",
                    component:PageList,
                    meta:{
                        name:"列表"
                    }
                },
                {
                    path:"log",
                    component:PageLog,
                    meta:{
                        name:"日志"
                    }
                }
            ]
        }
    ]
})


export default router