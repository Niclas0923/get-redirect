const testConfig = (data)=>{
    let list = []
    for (const i of data) {
        // 重复检测
        if (list.indexOf(i[0])===-1){
            list.push(i[0])
        }else {
            console.error("监听有重复，请修改配置文件,错误为\""+i[0]+"\"重复")
            return false
        }
    }
    return true
}

exports.tec = testConfig