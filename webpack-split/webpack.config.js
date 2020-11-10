/*
 * @Author: your name
 * @Date: 2020-11-07 23:19:09
 * @LastEditTime: 2020-11-09 23:15:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack-development\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js',
        another:'./src/another-module.js'
        // index:{import:'./src/index.js',dependOn:'shared'},
        // another:{import:'./src/another-module.js',dependOn:'shared'},
        // shared:'loadsh',
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Develpoment'
        }),
        new CleanWebpackPlugin({cleanStaleWebpackAssets:false})
    ],
    output:{
        // filename:'[name].bundle.js',
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    }
}