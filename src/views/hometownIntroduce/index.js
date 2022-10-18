import React, {useEffect, useState, useRef, useCallback} from 'react'
import './index.less'
import {getCityInfo} from '@/request/api'
import {isCenterViewport} from '@/utils/handleUtils'


function Hometown() {
	const [cityInfo, setCityInfo] = useState([])
	const marginLeft = useRef(0)
	const maxLeft = useRef()
	const timer = useRef(true)
	const handleMouseWheel = (e) => {
		if (isCenterViewport($('.slide-content')[0])) {
			// 向下滚
			if (e.wheelDelta < 0 && marginLeft.current !== maxLeft.current) {
				// 判断横向滚动是否滚动到底部
				marginLeft.current -= 20
				$('.slide-content-box')[0].style.marginLeft = marginLeft.current + 'px'
			}
			// 向上滚动
			if (e.wheelDelta > 0 && marginLeft.current !== 0) {
				marginLeft.current += 20
				$('.slide-content-box')[0].style.marginLeft = marginLeft.current + 'px'
			}
			if (!(marginLeft.current === 0 || marginLeft.current === maxLeft.current)) {
				e.preventDefault()
			}
		}
	}
	const throttle = (fn, delay) => {
		timer.current = true
		if (!timer.current) {
			return false
		}
		timer.current = false
		setTimeout(() => {
			fn()
			timer.current = true
		}, delay)
	}

	// 设置ref
	useEffect(() => {
		maxLeft.current = $('.slide-content')[0]?.getBoundingClientRect().width - $('.slide-content-box .slide-content-item')[0]?.offsetWidth * $('.slide-content-box .slide-content-item').length
	}, [cityInfo])

	// 获取数据，设置监听
	useEffect(() => {
		getCityInfo().then((res) => {
			setCityInfo(res.data)
		})
		window.addEventListener('mousewheel', (e) => {
			throttle((e) => {
				handleMouseWheel(e)
			}, 300)
		}, {passive: false})
		return () => {
			window.removeEventListener('mousewheel', (e) => {
				console.log('移除监听')
			})
		}
	}, [])
	const cityItem = cityInfo.map((item, itemIndex) => {
		return <div className="city-item" key={itemIndex}>
			<h1 className="city-name">{item.cityName}<span>（{item.cityBelong}）</span></h1>
			<div className="city-introduce">
				<div className="city-img"><img src={item.cityImg}/></div>
				<div className="city-description">
					{item.cityDes.map((des, desIndex) => {
						return <div key={desIndex}><p>{des}</p><br/></div>
					})}
				</div>
			</div>
			<div className="city-play">
				<h2>玩{item.cityName}必去景点</h2>
				<div className="slide-content">
					<div className="slide-content-box">
						{item.playList.map((play, playIndex) => {
							return <div className="slide-content-item" key={playIndex}>
								<div className="img-description">
									<p>【{play.sceneryArea}】</p>
									<p>{play.scenery}</p></div>
								<div className="images-box">
									{play.sceneryImageList.map((imgSrc, imgIndex) => {
										return <div className="img" key={imgIndex}><img src={imgSrc}/></div>
									})}
								</div>
							</div>
						})}
					</div>
				</div>
				<h2>吃{item.cityName}必吃榜</h2>
				<div className="eat-content-box">
					{item.eatList.map((eat, eatIndex) => {
						return <div className="eat-item" key={eatIndex}>
							<div className="eat-img-static">
								<h3 className="eat-rank">TOP{eatIndex + 1}</h3>
								<img className="eat-img" src={eat.eatImg}/>
								<p className="eat-name">{eat.eatName}</p>
							</div>
							<div className="eat-video-overlay">
								<video className="vehicle-item-video" poster={eat.eatImg} playsInline autoPlay loop muted>
									<source src={eat.videoUrl} type="video/mp4"/>
								</video>
								<p className="vehicle-item-video-title">{eat.videoTitle}</p>
							</div>
						</div>
					})}

				</div>
			</div>
		</div>
	})
	return (
		<div className="home-content">
			{cityItem}
		</div>
	)
}

export default Hometown
