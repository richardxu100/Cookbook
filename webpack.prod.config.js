var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
	new webpack.DefinePlugin({ // creates global constants at compile, allowing for different builds for dev and release
		"process.env": {
			"NODE_ENV": JSON.stringify("production")
		}
	})
);

config.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	})
);

module.exports = config;
