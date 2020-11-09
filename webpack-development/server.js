/*
 * @Author: your name
 * @Date: 2020-11-07 23:48:11
 * @LastEditTime: 2020-11-07 23:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack-development\server.js
 */
const express = require('express');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

app.listen(3000,function(){
    console.log('Example app listening on port 3000!\n');
})