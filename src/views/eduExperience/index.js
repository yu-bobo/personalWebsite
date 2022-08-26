import React, {useEffect, useState} from 'react'
import {isEnterViewport} from '@/utils/handleUtils'
import {getSchoolInfo} from '@/request/api'
import 'animate.css'
import './index.less'

function EduExperience() {
	const [viewpointArr, setViewpointArr] = useState([])
	const [schoolInfo, setSchoolInfo] = useState({})
	// 控制类名
	const getYouthImgClassName = (index) => {
		let youthImgClassName = 'youth-img animate__animated '
		if (index % 2 === 0) {
			youthImgClassName += viewpointArr[index] ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'
		} else {
			youthImgClassName += viewpointArr[index] ? 'animate__fadeInRight' : 'animate__fadeOutRight'
		}
		return youthImgClassName
	}
	useEffect(() => {
		getSchoolInfo().then((res) => {
			setSchoolInfo(res.data)
		})
		// 判断元素是否可视
		$(window).on('scroll', () => {
			const $targets = $('.youth-img')
			const targetStatus = []
			$targets.each((index, element) => {
				targetStatus.push(isEnterViewport(element))
			})
			setViewpointArr(targetStatus)
		})
		return () => {
		    window.removeEventListener('onscroll', ()=>{})
		}
	}, [])
	const {schoolImgs, schoolDes, youthCampus} = schoolInfo
	const youthImgDom = youthCampus?.imgList?.map((imgSrc, index) => {
		return (
			<div key={index} className={getYouthImgClassName(index)}>
				<img src={imgSrc} alt="youth campus"/>
			</div>
		)
	})
	return (
		<div className="edu-content">
			<div className="edu-school">
				<h1 className="school-name">关于{schoolInfo?.schoolName}</h1>
				<div className="school-img-box">
					<img className="school-logo animate__animated animate__bounce"
						 src={schoolImgs?.logo}
						 alt="南通理工学院"/>
					<img className="school-img"
						 src={schoolImgs?.img}
						 alt="海安校区"/>
				</div>
				<div className="school-description">
					{schoolDes?.map((item, index) => {
						return <p key={index}>{item}</p>
					})}
				</div>
			</div>
			<div className="edu-youth">
				<h1 className="youth-title">青春校园</h1>
				<div className="youth-img-box">{youthImgDom}</div>
			</div>
		</div>
	)
}

export default EduExperience
