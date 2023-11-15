import {defineStore} from "pinia";
import {usePostStore} from "./usePostStore.js";
import {useValueStore} from "../useValueStore.js";

export const useChangeListStore = defineStore('changeList', ()=>{
    // 引入 post 的数据和函数
    const post = usePostStore()
    const value = useValueStore()

    // 增添一个数据
    function addOne(tag,url){
        // 去除最后可能出现的 /
        if (url[url.length -1] === "/") url = url.slice(0,-1)

        post.post("/systemServer/addOne",{
            tag,url,
            name:post.name,
            password:post.password
        },data=>{
            if (!data) alert("添加失败")
            else value.updateAll()
        })
    }

    // 删除一个数据
    function removeOne(i){
        if (confirm(`确定要删除索引 ${i.name} 吗？`)) {
            // 确定后执行
            post.post("/systemServer/removeOne",{
                name:post.name,
                password:post.password,
                tagId:i.id
            },data=>{
                if (!data) alert("删除失败")
                else value.updateAll()
            })
        }
    }

    return {addOne,removeOne}
})