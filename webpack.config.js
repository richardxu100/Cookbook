var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html', // make sure the template for the HTML is an HTML File!
	filename: 'index.html',
	inject: 'body'
})
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app/index.js'
	],
	output: {
		path: path.join(__dirname + '/dist'), // need to do path.join here!
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel-loader']
			},
			{
				test: /\.json$/,
				loaders: ['react-hot', 'json-loader']
			},
			{ // cannot include react-hot with this loader
				test: /\.css$/,
				loader: 'style!css?modules',
				include: /flexboxgrid/
			},
			{ // don't forget the style and css for sass loader
				test: /\.sass$/,
				loaders: ['react-hot', 'style', 'css', 'sass-loader'],
				exclude: /flexboxgrid/
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}
