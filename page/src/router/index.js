import * as VueRouter from 'vue-router'
import LogIn from "../components/login/LogIn.vue";
import Page from "../components/page/page.vue";
import PageLog from "../components/page/log/PageLog.vue";
import PageList from "../components/page/list/PageList.vue";

export default VueRouter.createRouter({
    // 设置使用 hash
    history: VueRouter.createWebHashHistory(),
    routes:[
        // 一级路由
        {
            path: '/',
            // 直接跳转 /login
            redirect: '/login'
        },
        // 二级路由
        {
            path:"/login",
            component:LogIn,
        },
        {
            path:"/page",
            // 直接跳转 /page/list
            redirect: '/page/list',
            component:Page,
            children:[
                {
                    path:"list",
                    component:PageList
                },
                {
                    path:"log",
                    component:PageLog
                }
            ]
        },
    ]
})