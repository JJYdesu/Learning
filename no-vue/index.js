var fs = require("fs")
var xlsx = require('node-xlsx')
var axios = require('axios')
var config1 = {
  method:'get',
  url:'http://localhost:8080/test',
  params:{
    ID:123456
  }
}
var config2 = {
  method: 'post',
  url: 'http://localhost:3038/testpost',
  data: '123456789132',
  // headers:{
  //   'Content-Type':'application/json;charset=utf-8'
  // }
}
axios(config2).then(res=>{
  console.log(res.data)
})
// var data = [
//   {
//     name:"Sheet1",
//     data:[["name","number","age"],["JJY","3116005180",22],["WJH","123456789",25]]
//   },
//   {
//     name:"Sheet2",
//     data:[["name","number","age"],["SAM","3116005180",22],["Jacky","123456789",25]]
//   }
// ]
// var buffer = xlsx.build(data)
// fs.writeFile('test.xls',buffer,err=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log('success!')
//   }
// })
// var obj = xlsx.parse('test.xls')

// console.log(JSON.stringify(obj))

// fs.readFile("input.txt",(err,data)=>{
//   if(err){
//     console.log('读取错误！')
//   }else{
//     var d = data.toString()
//     console.log(d)
//   }
// })
// fs.writeFile("test.js",JSON.stringify(obj),err=>{
//   if(err){
//     throw err;
//   }else{
//     console.log('success!')
//   }
// })

// fs.readFile("test.js",(err,data)=>{
//   if(err){
//     console.log('读取错误！')
//   }else{
//     var d = data.toString()
//     var a = d.split(' ')
//     console.log(JSON.parse(a[2]))
//   }
// })

// new Promise(resolve => {
//   fs.writeFile("test.js",JSON.stringify(obj),err=>{
//     if(err){
//       throw err;
//     }else{
//       console.log('success!')
//     }
//   })
//   resolve('ok')
// }).then(res=>{
//   console.log(res)
//   fs.readFile("test.js",(err,data)=>{
//     if(err){
//       console.log('读取错误！')
//     }else{
//       var d = data.toString()
//       console.log(d)
//     }
//   })
// })

// new Promise(resolve => {
//   setTimeout(() => {
//     resolve('hello')
//   }, 1000)
// }).then(val => {
//   console.log(val) //  参数val = 'hello'
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('world')
//     }, 500)
//   })
// }).then(val => {
//   console.log(val) // 参数val = 'world'
// })
