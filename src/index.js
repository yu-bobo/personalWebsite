import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '@/mock'
import $ from 'jquery'
// 判断是否是手机端访问
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	alert('本网站暂不支持手机端访问，请切换访问设备！')
	window.location.href='http://150.158.185.32/assets/html/404.html'
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
