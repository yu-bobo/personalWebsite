// 生产webpack配置
module.exports = {
	// 打包模式:'production' or development'
	mode: 'production',
	output: {
		filename: 'scripts/[name].[contenthash].js',
		// 使用 CDN
		// publicPath: 'http://150.158.185.32/',
	},
}
