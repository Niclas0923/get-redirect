const whiteLog = (name,time,obj,thing)=>{
    const fs = require("fs")
    const logs = JSON.parse(String(fs.readFileSync("./config/log.json")))
    logs.push({
        who:name,
        time,
        obj,
        thing
    })
    fs.writeFileSync("./config/log.json",JSON.stringify(logs))
}

exports.whiteLog = whiteLog