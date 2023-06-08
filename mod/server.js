const server = (options,userRoutes,data,httpsO=false)=>{
    const express = require("express")
    // 开启监听测试
    const app = express();
    app.use('/', userRoutes);

    // 判断协议
    if (httpsO){
        const https = require("https")
        const fs = require("fs")
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