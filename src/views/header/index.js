import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import './index.less'
const navBarList = [{
    name: '教育经历',
    path: '',
}, {
    name: '家乡简介',
    path: '/hometownIntroduce',
}, {
    name: '个人信息',
    path: '/personalResume',
}, {
    name: '关于',
    path: '/about'
}]
function Header() {
    let [activeIndex, setactiveIndex] = useState(2)
    const history = useNavigate();

    function queryWeather(lc) {
        let url = encodeURI(`http://wthrcdn.etouch.cn/WeatherApi?city=${lc}`);
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let resp = xhr.responseXML.querySelector('resp')
                console.log(resp.querySelector('wendu').innerHTML)
            }
        }
    }
    function handleClick(idnex, path) {
        history(path)
        setactiveIndex(idnex)
    }

    useEffect(() => {
        queryWeather('南京')
    }, []);
    const navList = navBarList.map((item, index) => {
        return <li key={index} className={activeIndex === index ? 'nav-actived' : ''} onClick={() => { handleClick(index, item.path) }}>{item.name}</li>
    })
    return <div>
        <div className="nav-space" />
        <nav className="nav">
            <div className="nav-left">
                <div className="logo" alt="个人网站" />
                <h1>townの小窝</h1>
            </div>
            <ul className="nav-center">
                {navList}
            </ul>
            <div className="nav-right">
                <iframe
                    style={{ marginTop: "8px" }}
                    scrolling="no"
                    height="20"
                    frameBorder="0"
                    src="https://i.tianqi.com?c=code&id=34&color=#000000&icon=1&site=14">
                </iframe>
            </div>
        </nav>
    </div>
}

export default Header