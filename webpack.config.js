const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log('__dirname: ', __dirname)
console.log('path.resolve: ', path.resolve(__dirname, 'dist'))

module.exports = {
    entry: {
        app: './app.js' // 需要打包的文件入口
    },
    output: {
        publicPath: __dirname + '/dist/', // js 引用的路径或者CDN地址
        // __dirname'是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
        path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
        // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
        filename: 'bundle.js' // 打包后生产的 js 文件

    },
    plugins: [
        new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
    ]
}