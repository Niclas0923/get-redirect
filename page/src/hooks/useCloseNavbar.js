import {onMounted} from "vue";

export const useCloseNavbar = function (){
    onMounted(()=>{
        // 收起 nav 的功能
        try {
            const nav = document.getElementById('navbarSupportedContent')
            // 检查 class 中是否有 show
            if (nav.classList.contains('show')) {
                // 移除 show
                nav.classList.remove('show');
            }
        }catch (e) {
            console.log("直接访问出现此log可以忽视")
            console.log(e)
        }
    })
}