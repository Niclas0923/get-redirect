const server = (options,userRoutes,data,httpsO=false)=>{
    const express = require("express")
    const bodyParser = require("body-parser");
    const fs = require("fs")
    const shortid = require('shortid');
    const getTime = require("./time").time
    const whiteLog = require("./whiteLog").whiteLog
    // 开启监听测试
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/', userRoutes);
    // app.use(express.static('./page'))
    app.use('/adm', express.static('./page/dist'));

    // 测试用户名和密码的函数
    const testLogin = (name,passwd)=>{
        const usr = JSON.parse(String(fs.readFileSync("./config/user.json")))
        const users = []
        for (const i of usr) users.push(i.name)
        const index = users.indexOf(name)
        if (index !== -1){
            return usr[index].password === passwd;
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
        const {name,password,tagId} = req.body
        if (testLogin(name,password)){
            let data = JSON.parse(String(fs.readFileSync("./config/data.json")))
            // 写入log
            whiteLog(name,getTime(),data.filter(i => i.id === tagId)[0],"removeOne")
            // 过滤出删除后的数组
            data = data.filter(i => i.id !== tagId)
            // 写入
            fs.writeFileSync("./config/data.json",JSON.stringify(data))
            res.send(["成功"])
        }else res.send(["用户名或密码错误"])
    })

    app.post("/systemServer/addOne",(req, res)=>{
        const {name,password,tag,url} = req.body
        if (testLogin(name,password)){
            const data = JSON.parse(String(fs.readFileSync("./config/data.json")))
            const id = shortid.generate();
            const time = getTime()
            data.push({
                name:tag,
                url,
                userName:name,
                id,
                time
            })
            fs.writeFileSync("./config/data.json",JSON.stringify(data))
            // 写入log
            whiteLog(name,time,{name:tag, url, userName:name, id, time},"addOne")
            res.send(["成功"])
        }else res.send(["用户名或密码错误"])
    })

    // 返回log文件
    app.post("/systemServer/log",(req,res)=>{
        const {name,password} = req.body
        if (testLogin(name,password)){
            const data = JSON.parse(String(fs.readFileSync("./config/log.json")))
            res.send(data)
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
            console.log(`请访问 https://localhost${options["point"]===433?"":":"+options["point"]}/adm 进入管理界面`)
            for (const i of data) {
                console.log(`\/${i.name}\t————>\t${i.url}\t${i.userName}`)
            }
        });
    }else {
        const http = require("http")
        return http.createServer(app).listen(options["point"],function () {
            console.log(`已经开启http协议${options["point"]}端口监听`);
            console.log(`请访问 http://localhost${options["point"]===80?"":":"+options["point"]}/adm 进入管理界面`)
            for (const i of data) {
                console.log(`\/${i.name}\t————>\t${i.url}\t${i.userName}`)
            }
        })
    }
}

exports.ser = server