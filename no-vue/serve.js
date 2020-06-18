const express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
const fs = require('fs')
var app = express()
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
 
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	next()
})
app.get('/', (req, res) => {
	res.send('Hello')
})
app.get('/test', (req, res) => {
	res.send('test')
	console.log(req.query.ID)
})
app.post('/testpost', (req, res) => {
	res.send('ok')
	console.log(JSON.stringify(req.body));
})
app.post('/acceptimg',(req,res)=>{
	var imgData = req.body.src
	var base64Data = imgData.replace(/^data:image\/\w+;base64,/,"")
	var dataBuffer = new Buffer.from(base64Data,'base64')
	fs.writeFile('./assets/test.png',dataBuffer,err=>{
		if(err){
			console.log('失败')
			console.log(err)
			res.send('保存失败')
		}else{
			console.log('成功')
			res.send('保存成功！')
		}
	})
})
app.listen(3038, () => {
	console.log('服务器启动成功！')
})
