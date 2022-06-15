//入口处引入JQ
import $ from 'jquery'
//编写隔行变色的代码
$('#list>li:odd').css('color', 'red')
$('#list>li:even').css('color', 'green')