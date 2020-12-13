const path = require('path');
const config = require('../config');
const packageConfig = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.assetsPath = function(_path){
    const assetsSubDirctory = process.env.NODE_ENV === 'production'
    ?config.build.assetsSubDirectory
    :config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirctory,_path);
}
exports.createNotifierCallback = ()=>{
    const notifier = require('node-notifier');
    return (serverity,errors)=>{
        if(serverity!=='error') return;
        const error = errors[0];
        notifier.notify({
            title: packageConfig.name,
            message:serverity+':'+error.name,
            subtitle:error.file||'',
            icon:path.resolve(__dirname,'logo.jpg')
        })
    }
}
exports.cssLoaders = function(options){
    options = options || {};
    const cssLoaders = {
        loader:'css-loader',
        options:{
            sourceMap:options.sourceMap
        }
    }
    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap:options.sourceMap
        }
    }
    function generateLoaders(loader,loaderOptions){
        const loaders = [cssLoaders, postcssLoader];
        if(loader){
            loaders.push({
                loader:loader+'-loader',
                options:Object.assign({},loaderOptions,{
                    sourceMap:options.sourceMap
                }),
            })
        }
        if(options.csszip){
            return [MiniCssExtractPlugin.loader].concat(loaders);
        }else{
            return loaders;
        }
    }
    return {
        css:generateLoaders(),
        less:generateLoaders('less'),
        sass:generateLoaders('sass'),
    }
}
exports.styleLoaders = function(options){
    const output = [];
    const loaders = exports.cssLoaders(options);
    for(let extension in loaders){
        const loader = loaders[extension];
        output.push({
            test:new RegExp('\\.'+extension+'$'),
            use:loader,
            include: path.resolve(__dirname, '../src'),
        })
    }
    return output;
}
console.log(exports.cssLoaders());