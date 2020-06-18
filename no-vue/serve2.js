const express = require('express')
var bodyParser = require('body-parser')
let app = express()
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

//设置跨域请求
app.all('*', function (req, res, next) {
  //设置请求头
  //允许所有来源访问
  res.header('Access-Control-Allow-Origin', '*')
  //用于判断request来自ajax还是传统请求
  res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept");
  //允许访问的方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  //修改程序信息与版本
  res.header('X-Powered-By', ' 3.2.1')
  //内容类型：如果是post请求必须指定这个属性
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.get('/test', function (req, res) {
	console.log(req.query)
	res.send('Hello World');
})
app.post('/post',(req,res)=>{
	console.log(JSON.stringify(req.body))
	res.send('Hello JJY')
})

app.listen(3038, () => {
	console.log('服务器启动成功！')
})