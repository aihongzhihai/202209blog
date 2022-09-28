let express = require('express')
// 调用Router方法可以得到一个路由中间间实例
let router = express.Router()
// 用户注册 /user/signup
router.get('/signup',function(req,res){
    res.render('user/signup',{title:'注册'})
})
router.get('/signin',function(req,res){
    res.render('user/signin',{title:'登录'})
})
router.get('/signout',function(req,res){
    res.send('用户退出')
})
module.exports = router
