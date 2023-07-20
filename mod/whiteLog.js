const shortid = require("shortid");
const whiteLog = (name,time,obj,thing)=>{
    const fs = require("fs")
    const logs = JSON.parse(String(fs.readFileSync("./config/log.json")))
    const id = shortid.generate();
    logs.push({
        who:name,
        time,
        obj,
        thing,
        id
    })
    fs.writeFileSync("./config/log.json",JSON.stringify(logs))
}

exports.whiteLog = whiteLog