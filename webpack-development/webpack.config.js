/*
 * @Author: your name
 * @Date: 2020-11-07 23:19:09
 * @LastEditTime: 2020-11-08 14:03:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack-development\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Develpoment'
        }),
        new CleanWebpackPlugin({cleanStaleWebpackAssets:false})
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
    }
}