const utils = require('./utils');
const config = require('../config');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(baseWebpackConfig,{
    module:{
        rules:utils.styleLoaders({
            sourceMap:true,
            csszip:true
        })
    },
    output:{
        path: config.build.assetsRoot,
        filename:utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename:utils.assetsPath('js/[id].[chunkhash].js')
    },
    devtool:config.build.devtool,
    optimization:{
        runtimeChunk:'single',
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendors',
                    chunks:'all'
                }
            }
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': config.build.env,
        }),
        new TerserPlugin({
            parallel:true,
            terserOptions:{
                format:{
                    comments:false,
                }
            },
            extractComments:false,
        }),
        new MiniCssExtractPlugin({
            filename:utils.assetsPath('/css/[name].[hash:7].css'),
        }),
        new webpack.HashedModuleIdsPlugin(),
    ]
})
console.log(process.env.NODE_ENV);