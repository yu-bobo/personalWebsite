import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import './index.less'

const navBarList = [{
	name: '个人信息',
	path: '/personalResume',
}, {
	name: '教育经历',
	path: '/eduExperience',
}, {
	name: '家乡简介',
	path: '/hometownIntroduce',
}, {
	name: '关于',
	path: '/about',
}]

function Header() {
	const [active, setActive] = useState(0)
	const history = useNavigate()
	function handleClick(index, path) {
		history(path)
		setActive(index)
	}
	// 监听路由改变激活项
	const location = useLocation()
	useEffect(() => {
		const {pathname} =location
		const index = navBarList.findIndex((item) =>item.path === pathname)
		setActive(index > -1 ? index : 0)
	}, [location])

	const navList = navBarList.map((item, index) => {
		return (
			<li key={index} className={active === index ? 'nav-actived' : ''} onClick={() => {
				handleClick(index, item.path)
			}}>{item.name}</li>
		)
	})
	return (
		<div className="header">
			<div className="nav-space"/>
			<nav className="nav">
				<div className="nav-left">
					<div className="logo" alt="个人网站"/>
					<h1>鱼啵啵の小窝</h1>
				</div>
				<ul className="nav-center">
					{navList}
				</ul>
				<div className="nav-right">
					<iframe
						style={{marginTop: '8px'}}
						scrolling="no"
						height="20"
						frameBorder="0"
						src="https://i.tianqi.com?c=code&id=34&color=#000000&icon=1&site=14">
					</iframe>
				</div>
			</nav>
		</div>)
}

export default Header
