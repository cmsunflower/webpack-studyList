// js入口文件
// alert('天气不错')
import printMe from './print.js'
function component() {
    var element=document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML='Hello webpack';
    btn.innerHTML = 'click me and check the console';
    btn.onclick=printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());