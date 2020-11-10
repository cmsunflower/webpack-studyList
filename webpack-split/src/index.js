/*
 * @Author: your name
 * @Date: 2020-11-04 20:56:07
 * @LastEditTime: 2020-11-09 21:48:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack-studyList\src\index.js
 */
// js入口文件
// alert('天气不错')
// import printMe from './another-module.js'
import _ from 'loadsh';

function component() {
// async function getComponent(){
    var element = document.createElement('div');

    element.innerHTML = 'Hello webpack';
    element.innerHTML = _.join(['Hello','webpack'],' ');
    // return import('loadsh').then(({default: _})=>{
    //     const element=document.createElement('div');
    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //     return element;
    // }).catch(error=>{
    //     'An error occurred while loading the component'
    // });
    // btn.innerHTML = 'click me and check the console';
    // return element;
//     const element = document.createElement('div');
//     const { default: _ }= await import('loadsh')
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());

// getComponent().then(component=>{
//     document.body.appendChild(component);
// })