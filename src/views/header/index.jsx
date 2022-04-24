import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import './index.less'
function Header() {
    let [count, setNavbar] = useState(0)
    let history = useNavigate();
    function handleRouterPush() {
        history('/personalResume')
    }
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
                <li onClick={handleRouterPush}>个人信息</li>
                <li>关于{count}</li>
            </ul>
            <div className="nav-right"></div>
        </nav>
    </div>


}

export default Header