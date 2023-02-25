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
	image.onload = function () {
		const canvas = document.createElement('canvas')
		canvas.width = image.width
		canvas.height = image.height
		const ctx = canvas.getContext('2d')
		ctx.drawImage(image, 0, 0, image.width, image.height)
		const dataURL = canvas.toDataURL('image/png') // 可选其他值 image/jpeg
		$(dom).src = dataURL
	}
}
// randomInt 函数返回一个大于等于 min，小于 max 的随机整数
export function randomInt (min, max) {
	const p = Math.random()
	return Math.floor(min * (1 - p) + max * p)
}
// 随机选中数组中的一项(保证连续两次选择不会相同)
export function createRandomPicker (arr) {
	arr = [...arr] // copy 数组，以免修改原始数据
	function randomPick () {
		const len = arr.length - 1
		const index = randomInt(0, len)
		const picked = arr[index];
		[arr[index], arr[len]] = [arr[len], arr[index]]
		return picked
	}
	randomPick() // 抛弃第一次选择结果
	return randomPick
}