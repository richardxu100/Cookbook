var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html', // make sure the template for the HTML is an HTML File!
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: './dist', // check to see if just ./dist would work before __dirname + '/dist'
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.json$/, loader: 'json-loader' },
			{	test: /\.sass$/, loader: 'sass-loader' }
		]
	},
	plugins: [HTMLWebpackPluginConfig],
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}
