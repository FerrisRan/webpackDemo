const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入该配置模块


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({ //plugins的配置项
        template: './public/index.html' //告诉webpack使用插件时会以这个html文件作为模板进行渲染和生成
    })],
};