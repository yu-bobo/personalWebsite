// 判断一个元素是否出现在视口
export const isEnterViewport = (el) => {
	// const ViewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	// const ViewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
	// const {top, right, bottom, left} = el.getBoundingClientRect();
	// return top >= 0 && left >= 0 && bottom <= ViewportHeight && right <= ViewportWidth
	const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	const offsetTop = el.offsetTop
	const scrollTop = document.documentElement.scrollTop
	return offsetTop - scrollTop <= viewPortHeight - 300
}
// 判断一个元素是否在屏幕正中间
export const isCenterViewport = (el) => {
	const offsetTop = el.offsetTop
	const scrollTop = document.documentElement.scrollTop
	return offsetTop - 100 <= scrollTop && scrollTop <= offsetTop + 100
}
export const getBase64Image = (url, dom) => {
	const image = new Image()
	image.setAttribute('crossOrigin', 'Anonymous')
	image.src = url
	image.onload = function() {
		const canvas = document.createElement('canvas')
		canvas.width = image.width
		canvas.height = image.height
		const ctx = canvas.getContext('2d')
		ctx.drawImage(image, 0, 0, image.width, image.height)
		const dataURL = canvas.toDataURL('image/png') // 可选其他值 image/jpeg
		$(dom).src = dataURL
	}
}
