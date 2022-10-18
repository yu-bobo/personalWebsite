const path = require('path')
// 开发环境webpack配置
module.exports = {
	devServer: {
		port: 3001,
		open: true, // 启动后是否在浏览器自动打开
		hot: true, // 热更新
		static: path.join(__dirname, 'dist'),
		historyApiFallback: {
			rewrites: [
				// BrowserRouter热更新时会请求出现404则重新指向index.html
				{from: /^\/$/, to: path.join(__dirname, 'public/index.html')},
			],
		},
		proxy: {
			'/api': {
				target: 'https://www.yuanaliu.com/pwa', // 代理到的地址
				changeOrigin: true,
				pathRewrite: {'^/api': ''},
			}
		}
	},
	// 打包模式:'production' or development'
	mode: 'development',
	devtool: 'inline-source-map',
}
