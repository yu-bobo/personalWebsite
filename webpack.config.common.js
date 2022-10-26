const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 将相对路径解析为绝对路径，__dirname为当前文件所在的目录下，此处为./webpack文件夹
function resolve(relatedPath) {
	return path.join(__dirname, relatedPath)
}

const webpackConfig = {
	// target: 'node', // 会编译为用于「类 Node.js」环境 默认是web

	// entry为webpack解析的入口（解析各种包依赖关系的入口），而不是项目访问的入口
	// 官网描述：指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
	entry: {
		app: [resolve('src/index.js')],
	},

	// output为项目打包后的输出位置
	// 官网描述：告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist
	output: {
		path: resolve('dist'), // path为打包后的输出文件夹位置，此处为 ./dist文件夹
		filename: 'bundle.js',
		clean: true,
	},

	plugins: [
		// 为项目生成一个可以访问的html文件，否则全是.js文件，没有访问的页面入口。默认为index.html,路径是基于根目录的相对路径
		new HtmlWebpackPlugin({
			template: resolve('public/index.html'), // 引用模板html文件生成项目的入口文件html
			favicon: resolve('public/favicon.ico') // 设置网站图标
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[contenthash].css',
		}),
	],
	module: {
		rules: [
			// 解析js
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			// 解析css|less
			{
				test: /\.(css|less)$/,
				use: [
					// MiniCssExtractPlugin.loader 需要在css-loader之后解析
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									require('autoprefixer')(), // 给css自动添加前缀
								],
							},
						},
					},
					'less-loader',
				],
			},
			// 处理图片资源(webpack5新增方式，则不使用url-loader做)
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				type: 'asset',
				exclude: /node_modules/,
				include: [resolve('src/assets/images')],
				generator: {
					filename: 'images/[name].[hash:10].[ext]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024 // 超过100k转base64
					}
				}
			},
			// 处理字体(type属性:asset和asset/resource的区别就是后者只做拷贝不能配置转base64)
			{
				test: /\.(woff|eot|ttf)$/,
				type: 'asset/resource',
				exclude: /node_modules/,
				include: [resolve('src/assets/font')],
				generator: {
					filename: 'font/[hash:10].[ext]'
				},
			},
			// // loader-image
			// {
			// 	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			// 	exclude: /node_modules/,
			// 	include: [resolve('src/assets/images')],
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 8192,
			// 		name: '[name].[ext]',
			// 		outputPath: '/images',
			// 	},
			// },
			// // loader-font
			// {
			// 	test: /\.(woff|eot|ttf|svg|gif)$/,
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 8192,
			// 		name: 'font/[name].[ext]',
			// 	},
			// },
		],
	},

	resolve: {
		// 导入时省略文件后缀配置
		// extensions: ['js', 'jsx']
		alias: {
			'@': resolve('src'),
		},
	},
	externals: {
		jquery: '$',
	},

}

module.exports = webpackConfig
