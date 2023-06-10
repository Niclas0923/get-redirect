const readline = (list,obj)=>{
    // 添加监听输入
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('line', (input) => {
        const i = list.indexOf(input)
        if (i !== -1) obj[i][1]()
        else console.log("\t输入无关，请尝试 h 来获取所有可用命令")
    });
}

exports.readline = readline