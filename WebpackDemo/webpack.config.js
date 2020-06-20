const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack.config.js
module.exports = {
  entry: __dirname + "/main.js", // 入口文件
  output: {
      path: __dirname + "/dist", //打包后的文件存放的地方
      filename: "bundle.js" //打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./dist", // 本地服务器所加载文件的目录
    port: "3066",          // 设置端口号
    inline: true,          // 文件修改后实时刷新
    historyApiFallback: true, //不跳转contentBase
  },
  module: {
    rules:[
      {
        test:/\.css$/,   //匹配.css结尾的文件
        use:['style-loader','css-loader']  //注意顺序，调用loader是从右往左编译的的
      },
      {
        test:/\.js$/, 
        use:{          //use如果有多项配置，可以用这种写法
          loader:"babel-loader",
          options:{
            presets:[
              "env"
            ]
          }
        },
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.template.html"
    }),
  ]
}