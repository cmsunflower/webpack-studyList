const path = require('path');
const utils = require('./utils');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder =require('portfinder');

const devWebpackConfig = merge(baseWebpackConfig,{
    devtool: config.dev.devtool,
    module:{
        rules:utils.styleLoaders({sourceMap:config.dev.cssSourceMap})
    },
    devServer:{
        contentBase:path.resolve(__dirname,'../dist'),
        hot:true,
        host:config.dev.host,
        port:config.dev.port,
        open:config.dev.autoOpenBrowser,
        watchOptions:{
            poll:config.dev.poll
        },
        proxy:config.dev.proxyTable,
        overlay:config.dev.errorOverlay
        ?{errors:true,warning:false}
        :false,
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})
module.exports = new Promise((resolve,reject)=>{
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err,port)=>{
        if(err) reject(err);
        else{
            process.env.PORT = port,
            devWebpackConfig.devServer.port = port;
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo:{
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors:config.dev.notifyOnErrors
                    ? utils.createNotifierCallback
                    :undefined
            }))
            resolve(devWebpackConfig);
        }
    })
})