class Event {
    m
    constructor(main) {
        this.m = main

        this.loginBtn()
        this.add()
    }

    loginBtn(){
        const cen = this.m
        // 登陆按钮
        $("#login-btn").on("click",function () {
            const nm = $("#floatingInput").val()
            const pw = $("#floatingPassword").val()
            console.log(nm,pw)
            cen.testLogin(nm,pw)
            return false
        })
    }

    false(){
        const t = this
        $(".false").off().on("click",function () {
            const name = $(this).parent().find("h4").html()
            if (confirm(`确定要删除索引 ${name} 吗？`)) {
                // 用户点击了“确定”按钮，继续执行后面的代码
                $(this).parent().remove()
                console.log(name)
                t.m.removeOne(name)
            }
        })
    }

    add(){
        const t = this
        $("#add").on("click", function () {
            const tag = $("#exampleInputEmail1").val()
            const url = $("#exampleInputPassword1").val()
            // 不能为空
            if (tag.length !== 0 && url.length !== 0){
                const regex = /[<>\\]/;
                // 测试几个特殊符号
                if(!regex.test(tag) && !regex.test(url)){
                    // 测试tag
                    t.m.getValList(data=>{
                        if (data){
                            const list = ["systemServer","adm"]
                            for (const i of data) list.push(i[0])
                            if (list.indexOf(tag) === -1){
                                t.m.addOne(tag,url)
                            }else alert("索引标签重复或与系统占用标签相同，请进行修改")
                        }
                    })
                }else alert("不能含有 <>\\ 这几个特殊符号")
            }else alert("不能为空")
        })
    }
}