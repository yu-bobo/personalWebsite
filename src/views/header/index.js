import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import './index.less'
function Header() {
    let [count, setNavbar] = useState(0)
    let [city, setCity] = useState('深圳')
    let [wheatherData, setWheatherData] = useState({})
    const history = useNavigate();
    function getCity() {
        // 组件挂载时，创建script标签
        const locationScript = document.createElement('script');
        // 设置标签的src属性
        locationScript.src = "http://ip.ws.126.net/ipquery";
        // 明确设置为同步加载
        locationScript.async = false;
        // 追加到body标签的最下面
        document.body.appendChild(locationScript);
        setCity(window.lc)
    }

    function queryWeather(lc) {
        setTimeout(() => {
            var url = encodeURI(`http://wthrcdn.etouch.cn/weather_mini?city=${lc}`);
            //1.创建对象
            const xhr = new XMLHttpRequest()
            xhr.open("GET", url)
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.send('a:100&b:200&c:300')
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status <= 300) {
                        // setWheatherData(xhr.responseText.data.forecast[0])
                        console.log(3, xhr.response.data)
                    }
                }
            }
        }, 3000)
    }
    useEffect(() => {
        getCity()
        queryWeather(city)
    }, []);
    return <div>
        <div className="nav-space"></div>
        <nav className="nav">
            <div className="nav-left">
                <div className="logo" alt="个人网站" />
                <h1>townの小窝</h1>
            </div>
            <ul className="nav-center">
                <li>教育经历</li>
                <li>家乡简介</li>
                <li onClick={() => { history('/personalResume') }}>个人信息</li>
                <li>关于</li>
            </ul>
            <div className="nav-right">
                天气预报:
                {city}
            </div>
        </nav>
    </div>


}

export default Header