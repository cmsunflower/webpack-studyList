const path = require('path');
const config = require('../config');
const utils = require('./utils');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode:process.env.NODE_ENV === 'production'?
    config.build.mode:
    config.dev.mode,
    context:path.resolve(__dirname,'../'),
    entry:{
        app:'./src/main.js'
    },
    module:{
        rules:[
        {
            //将解析js文件中的Vue文件
            test:/\.vue$/,
            use:['vue-loader'],
            exclude:path.resolve(__dirname,'node_modules'),
        },
        {
            test:/\.(png|jpe?g|gif|svg)$/,
            loader:'url-loader',
            options:{
              limit:10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]') 
            }
        },
        {
            test:/\.(ttf|otf|eot|woff2?)$/,
            loader:'url-loader',
            options:{
                limit:10000,
                name:utils.assetsPath('font/[name].[hash:7].[ext]')
            }
        }
    ]
    },
    resolve:{
        extensions:['.js','.vue','.json'],
        alias: {
            'vue$':'vue/dist/vue.esm.js',
            '@':path.resolve(__dirname,'../src')
        },
        modules:[ path.resolve(__dirname, '../node_modules')]
    },
    output:{
        filename:'[name].js',
        path:config.build.assetsRoot,
        publicPath:process.env.NODE_ENV ==='production'?
        config.build.assetsPublicPath:
        config.dev.assetsPublicPath,
    },
    plugins: [
        // 扩展webpack功能能够加载Vue文件
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true,
            hash:true,
        }),
        new CleanWebpackPlugin(),
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}
