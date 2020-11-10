/*
 * @Author: your name
 * @Date: 2020-11-04 21:10:40
 * @LastEditTime: 2020-11-09 20:29:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\webpack-studyList\src\print.js
 */
// export default function printMe() {
//     console.log('I get called from print1.js');
//     // console.error('I get called from print.js');
// }

import _ from 'loadsh';

console.log(
    _.join(['Another','module','loaded!'],'')
);