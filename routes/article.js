let express = require('express')
let router = express.Router()
// article/add
router.get('/add',function(req,res){
    res.send('新增文章')
})
// module 模块；model 模型
module.exports = router
