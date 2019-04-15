/**
 * webpack 支持ES6、CommonJS 和 AMD 规范
 */

// ES6
// import sum from './vendor/sum'
// console.log('sum(1, 2)', sum(1, 2))

// commonJS
// var minus = require('./vendor/minus')
// console.log('minus(1, 2)', minus(1, 2))

// AMD
// require(['./vendor/multi'], function(multi) {
//     console.log('multi(1, 2)', multi(1, 2))
// })
// 执行 npm run build 打包 js 文件
// 会发现生成了 dist 文件夹，并生成了两个打包后的文件
// 这跟 AMD 的引入方式有关，如果在 app.js 中注释掉 AMD 的写法，则只会打包出一个 bundle.js 文件


// 全局引入
// import '@babel/polyfill'
// 全局引入 @babel/polyfill 的这种方式可能会导入代码中不需要的 polyfill，从而使打包体积更大
// 更改 .babelrc，只转译我们使用到的

// 测试ES6 语法是否通过 babel 转译
const arr = [1, 2, 3]
const isES6 = () => {
    console.log(...arr)
}
isES6()
const arr2 = [new Promise(() => {}), new Promise(() => {})]
arr2.map(item => {
    console.log(item)
})