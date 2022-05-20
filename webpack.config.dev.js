// 开发环境webpack配置
module.exports = {
    devServer: {
        port: 3000,
        open: true,    //启动后是否在浏览器自动打开
        hot: true, // 热更新
        static: './dist'
    },

    //打包模式:'production' or development' 
    mode: 'development',
    devtool: 'inline-source-map',
}