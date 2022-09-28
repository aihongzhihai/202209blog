let express = require('express')
let path = require('path')
let app = express()
// 设置模板引擎html
app.set('view engine','html')
// 指定模板的存放根目录
app.set('views',path.resolve('views'))
// 指定对于html类型的模板使用ejs方法来进行渲染
app.engine('html',require('ejs').__express)

// 此静态文件件会拦截到客户端对于静态文件的请求如bootstrap.css，然后会在当前目录的node_modules目录下寻找到文件，如果能找到则返回客户端并结束请求
app.use(express.static(path.resolve('node_modules')))
//app.use('/static', express.static('public')) 可以设置虚拟路径
// 例如：http://localhost:8070/static/images/kitten.jpg

let index = require('./routes/index')
let user = require('./routes/user')
let article = require('./routes/article')
app.listen('8070')
// app.listen('8070')相当于下面两句
// let server = require('http').createServer(app)
// server.listen('8070')
app.use('/',index)
// 当客户端请求过来的路径是/user开头的话，会交由user中间件来处理 /user/signin
/**
 * 首页
 * /user/signup 注册
 * /user/signin 登录
 * /user/signout 退出
 * /article/add 发表文章
 */
app.use('/user', user)
app.use('/article', article)
