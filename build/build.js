/*
 * @Author: your name
 * @Date: 2020-12-12 20:24:14
 * @LastEditTime: 2020-12-13 15:58:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editra 
 * @FilePath: \Vue-Up\build\build.js
 */
const ora = require('ora');
const rm = require('rimraf');
const path =require('path');
const chalk = require('chalk');
const config = require('../config');
const webpack =require('webpack');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory),err=>{
    if(err) throw err;
    webpack(webpackConfig,(err,stats)=>{
        spinner.stop();
        if(err){
            console.log(chalk.red('Build failed with errors.\n'));
            process.exit(1);
        }
        process.stdout.write(stats.toString({
            colors:true,
            modules:true,
            chunkOrigins:true,
            chunkModules:true,

        })+'\n\n');
        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})