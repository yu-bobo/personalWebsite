import React, {useEffect, useState, useRef} from 'react'
import './index.less'
import {getCityInfo} from '@/request/api'

function Hometown() {
	const [cityInfo, setCityInfo] = useState([])
	const canSlide = useRef(false)
	const marginLeft = useRef(0)
	const contentReact = useRef()
	const contentBoxReact = useRef()
	const isBottom = useRef(false)
	// 设置ref
	useEffect(() => {
		contentReact.current = $('.slide-content')[0]?.getBoundingClientRect()
		// todo 元素隐藏部分的宽度取不到
		contentBoxReact.current = $('.slide-content-box .slide-content-item')[0]?.offsetWidth * $('.slide-content-box .slide-content-item').length
	}, [cityInfo])
	// 获取数据，设置监听
	useEffect(() => {
		getCityInfo().then((res) => {
			setCityInfo(res.data)
		})
		window.onscroll = (e) => {
			canSlide.current = false
			// 滚动条距离
			const scrollT = $(document).scrollTop() || document.body.scrollTop
			// 横向滚动块居中距离
			const centerInstance = contentReact.current.top - (window.screen.height - contentReact.current.height) / 2
			// 滚动条大于横向滚动块区域不再滚动，由横向滚动区域开始横向滚动
			if ((scrollT > centerInstance) && !isBottom.current) {
				$(document).scrollTop(centerInstance)
				canSlide.current = true
			}

			if ((scrollT < centerInstance) && marginLeft.current < 0) {
				$(document).scrollTop(centerInstance)
				canSlide.current = true
			}
		}

		// 监听鼠标滚轮事件
		window.onmousewheel = (e) => {
			// todo 根据鼠标滚动改变滚动条距离
			if (e.wheelDelta < 0) {
				const scrollTop = $(document).scrollTop()
				$(document).scrollTop(10 + scrollTop)
				// console.log($(document).scrollTop())
			}
			if (e.wheelDelta < 0 && canSlide.current) {
				// 判断横向滚动是否滚动到底部
				if (marginLeft.current + contentBoxReact.current <= contentReact.current.width) {
					isBottom.current = true
				} else {
					marginLeft.current -= 20
					$('.slide-content-box')[0].style.marginLeft = marginLeft.current + 'px'
				}
			}
			if (e.wheelDelta > 0 && marginLeft.current < 0 && canSlide.current) {
				isBottom.current = false
				marginLeft.current += 20
				$('.slide-content-box')[0].style.marginLeft = marginLeft.current + 'px'
			}
		}
		return () => {
			// 移除监听
			window.removeEventListener('onmousewheel', (e) => {
				console.log(e)
				console.log('移除监听')
			}, false)
			window.removeEventListener('onscroll', () => {
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
								<div className="img-description"><p>【{play.sceneryArea}】</p><p>{play.scenery}</p></div>
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
								<video className="vehicle-item-video" poster={eat.eatImg} playsInline autoPlay loop
									   muted>
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
