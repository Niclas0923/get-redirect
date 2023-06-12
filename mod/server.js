const server = (options,userRoutes,data,httpsO=false)=>{
    const express = require("express")
    const bodyParser = require("body-parser");
    const fs = require("fs")
    // 开启监听测试
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', userRoutes);
    app.use(express.static('./page'))

    // 测试用户名和密码的函数
    const testLogin = (name,passwd)=>{
        const usr = JSON.parse(String(fs.readFileSync("./config/user.json")))
        const users = []
        for (const i in usr) users.push(usr[i][0])
        const index = users.indexOf(name)
        if (index !== -1){
            return usr[index][1] === passwd;
        }else return false
    }

    app.post("/systemServer/login",(req, res)=>{
        const {name,password} = req.body
        if (testLogin(name,password)){
            res.send(["密码正确"])
        }else res.send(["用户名或密码错误"])
    })

    app.post("/systemServer/getValList",(req, res)=>{
        const {name,password} = req.body
        if (testLogin(name,password)){
            const data = JSON.parse(String(fs.readFileSync("./config/data.json")))
            res.send(data)
        }else res.send(["用户名或密码错误"])
    })

    app.post("/systemServer/removeOne",(req, res)=>{
        const {name,password,tag} = req.body
        if (testLogin(name,password)){
            const data = JSON.parse(String(fs.readFileSync("./config/data.json")))
            function removeFromArray(target, array) {
                for (let i = array.length - 1; i >= 0; i--) {
                    if (Array.isArray(array[i]) && array[i][0] === target) {
                        array.splice(i, 1);
                    }
                }
            }
            removeFromArray(tag, data);
            fs.writeFileSync("./config/data.json",JSON.stringify(data))
            res.send(["成功"])
        }else res.send(["用户名或密码错误"])
    })

    app.post("/systemServer/addOne",(req, res)=>{
        const {name,password,tag,url} = req.body
        if (testLogin(name,password)){
            const data = JSON.parse(String(fs.readFileSync("./config/data.json")))
            data.push([tag,url])
            fs.writeFileSync("./config/data.json",JSON.stringify(data))
            res.send(["成功"])
        }else res.send(["用户名或密码错误"])
    })


    // 判断协议
    if (httpsO){
        const https = require("https")
        const option = {
            key: fs.readFileSync(options["ssl"]["key"]),
            cert: fs.readFileSync(options["ssl"]["cert"])
        }
        return https.createServer(option, app).listen(options["point"],function (){
            console.log(`已经开启https协议${options["point"]}端口监听`);
            for (const i of data) {
                console.log(`\\${i[0]}\t————>\t${i[1]}`)
            }
        });
    }else {
        const http = require("http")
        return http.createServer(app).listen(options["point"],function () {
            console.log(`已经开启http协议${options["point"]}端口监听`);
            for (const i of data) {
                console.log(`\\${i[0]}\t————>\t${i[1]}`)
            }
        })
    }
}

exports.ser = server