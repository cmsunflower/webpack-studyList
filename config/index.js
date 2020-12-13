const path = require('path');

module.exports = {
    dev:{
        mode:'development',
        // 是否轮询检查当前的问题
        env:require('./dev.env'),
        poll:false,
        autoOpenBrowser:true,
        proxyTable:{},
        host:'localhost',
        port:8000,
        devtool:'inline-source-map',
        assetsPublicPath:'/',
        assetsSubDirectory:'static',
        errorOverlay:true,
        sourceMap:true,
    },
    build:{
        dev: require('./dev.env'),
        mode:'production',
        index:path.resolve(__dirname,'../dist/index.html'),
        assetsRoot:path.resolve(__dirname,'../dist'),
        assetsPublicPath:'./',
        productionSourceMap:false,
        assetsSubDirectory:'static',
        devtool:'#source-map',
        notifyOnErrors:true,
    }
}
console.log(module.exports.build.assetsRoot);