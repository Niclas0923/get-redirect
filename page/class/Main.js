class Main {
    ev
    constructor() {
        this.ev = new Event(this)

        // 先试图读取本地的存储，如果有就测试登陆,实现自动登陆功能
        const userVal = JSON.parse(localStorage.getItem("user"))
        if (userVal) this.testLogin(userVal["name"],userVal["password"])
    }

    // 测试登陆的函数
    testLogin(name,passwd){
        const t = this
        $.post("/login",{name:name,password:passwd},function (res){
            if (res[0] === "密码正确"){
                $("#login-page").css("display","none")
                $("#val-page").css("display","block")
                // 本地存储用户名和密码
                localStorage.setItem("user", JSON.stringify({name:name,password:passwd}));
                t.getValList(data=>{
                    if (data) t.draw(data)
                })
            }else alert(res[0])
        },"json")
    }

    getValList(callback){
        const userVal = JSON.parse(localStorage.getItem("user"))
        $.post("/getValList",{name:userVal["name"],password:userVal["password"]},function (res){
            if (res === "用户名或密码错误"){
                alert("用户名或密码错误")
                callback(false)
            }else callback(res)
        },"json")
    }

    draw(data){
        let val = ""
        for (const i of data) {
            val+=`
            <div class="card-page">
                <h4>${i[0]}</h4>
                <a href="${i[1]}">${i[1]}</a>
                <a class="false" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </a>
            </div>`
        }
        $("#val-init").html(val)
        this.ev.false()
    }


    removeOne(tag){
        const userVal = JSON.parse(localStorage.getItem("user"))
        $.post("/removeOne",{name:userVal["name"],password:userVal["password"],tag:tag},function (res){
            alert(res[0])
        },"json")
    }

    addOne(tag,url){
        const t = this
        const userVal = JSON.parse(localStorage.getItem("user"))
        $.post("/addOne",{name:userVal["name"],password:userVal["password"],tag:tag,url:url},function (res){
            alert(res[0])
            $("#exampleInputEmail1,#exampleInputPassword1").val("")
            t.getValList(data=>{if (data) t.draw(data)})
        },"json")
    }
}