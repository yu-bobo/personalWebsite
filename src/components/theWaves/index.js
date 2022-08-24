import './index.less'
import React from 'react'

function Waves() {
	return <div className="waves-box">
		<svg
			className="waves"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28"
			preserveAspectRatio="none"
			shapeRendering="auto"
		>
			{/* 使用 SVG 和 CSS 动画制作的波浪效果，上半部分是蓝色（可修改成其他颜色）渐变的背景颜色，下半部分就是波浪，有四条波浪在不停的来回起伏，非常逼真。该波浪效果可用于大部分页面的底部*/}
			<defs>
				<path
					id="gentle-wave"
					d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
				/>
			</defs>
			<g className="parallax">
				<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
				<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
				<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
				<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
			</g>
		</svg>
	</div>
}

export default Waves
