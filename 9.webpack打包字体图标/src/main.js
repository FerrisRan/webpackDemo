//入口处引入JQ
import $ from 'jquery'
//编写隔行变色的代码
$('#list>li:odd').css('color', 'red')
$('#list>li:even').css('color', 'green')

//引入CSS文件
import './css/index.css'
//引入less文件
import './less/index.less'

//手动引入图片在页面进行展示
import imgObj from '../assets/floor-1-6.png'
let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)


//手动引入字体图标
// import './assets/fonts'
// let theI=document.createElement('i')
// theI.className='...,...'
// document.body.appendChild(theI)