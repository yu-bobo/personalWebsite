const axios = require('axios')
const serive = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? 'https://www.yuanaliu.com/pwa' : 'api/',
	timeout: 5000,
})
// 状态码返回
const MESSAGE = {
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '请求地址出错。',
	406: '请求的格式不可得。',
	408: '请求超时。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。',
	505: 'HTTP版本不受支持',
}
serive.interceptors.request.use(function(config) {
	if (config.formatData) {
		config.transformRequest = [function(data) {// 当以data传值转成表单数据格式(formdata请求)
			let html = ''
			for (const item in data) {
				html += `${item}=${data[item] === 0 ? 0 : (data[item] || '')}&`
			}
			html = html.substring(0, html.lastIndexOf('&'))
			return html
		}]
	}
	if (config.contentType) {
		config.headers['Content-Type'] = config.contentType
	}
	return config
}, function(error) {
	return Promise.reject(error)
})

// 响应拦截
serive.interceptors.response.use(
	(response) => {
		const {data = {}, config = {}} = response
		if (data.status === 200) {
			return data
		} else {
			return Promise.reject({'API': `${config.url}`, 'message': '接口数据请求失败！'})
		}
	}, (error) => {
		const {response = {}} = error
		return Promise.reject({'status': response.status, 'message': MESSAGE[response.status]})
	}
)
export default serive
