// js入口文件
// alert('天气不错')
import './style.css';
import Icon from './三三.png'

function component() {
    var element=document.createElement('div');
    element.innerHTML='Hello webpack';
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src= Icon;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());