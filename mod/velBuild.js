const velBuild = (data)=>{
    // 通过配置文件完成文件内代码
    let val =
        "const express = require('express');\n" +
        "const router = express.Router();\n"
    for (const i of data) {
        val += `router.get('/${i[0]}', (req, res) => {res.redirect('${i[1]}')});\n`
    }
    val += `module.exports = router;`

    return val
}

exports.velb = velBuild