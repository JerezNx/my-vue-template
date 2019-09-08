
const webpack = require('webpack');
module.exports = {
	// outputDir:'my_dist',//默认即为dist
	// productionSourceMap:false,//编译移除map文件
	devServer: {
		// host: 'localhost',
		host: "127.0.0.1",
		port: 8001, // 端口号
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/ 
		hotOnly: true, // 热更新
		// proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
		// proxy: { //配置自动启动浏览器
		// 	"/rest/*": {
		// 		target: "http://172.16.1.12:7071",
		// 		changeOrigin: true,
		// 		// ws: true,//websocket支持
		// 		secure: false
		// 	},
		// 	"/pbsevice/*": {
		// 		target: "http://172.16.1.12:2018",
		// 		changeOrigin: true,
		// 		//ws: true,//websocket支持
		// 		secure: false
		// 	},
		// }
	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, { limit: 10240 }))//设置图片
	},
	configureWebpack: config => {
		require('vux-loader').merge(config, {
			options: {},
			plugins: [
				'vux-ui',
				// 方式1
				new webpack.ProvidePlugin({
					$: "jquery",
					jQuery: "jquery",
					"windows.jQuery": "jquery"
				})
			],

			resolve: {
				//extensions: ['', '.js', '.es6', '.vue'],
				alias: {
					//  方式2
					// jquery: 'jquery/dist/jquery.min.js',
				}
			}

		})
	}
}