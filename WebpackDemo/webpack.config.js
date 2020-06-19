// webpack.config.js
module.exports = {
  entry: __dirname + "/main.js", // 入口文件
  output: {
      path: __dirname + "/dist", //打包后的文件存放的地方
      filename: "bundle.js" //打包后输出文件的文件名
  }
}