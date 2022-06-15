const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入该配置模块


module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({ //plugins的配置项
        template: './public/index.html' //告诉webpack使用插件时会以这个html文件作为模板进行渲染和生成
    })],
    module: {
        rules: [{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', 'less-loader', ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset'
            },
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2)$/i,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'fonts/[name].[hash:6][ext]'
            //       }
            // }
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/, //不去匹配这些文件夹下面的文件
                use: {
                    loader: 'babel-loader', //使用该加载器
                    options: { //加载器选项
                        presets: ['@babel/preset-env'] //规定webpack按照这个规定去降级  这里是降级规则使用该规则降级JS语法
                    }
                }
            }
        ],
    },
    devServer: {
        port: 8816,
    },
};