const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PolyfillsPlugin = require('webpack-polyfills-plugin');

let configFile = require('./config.json');
if ( ! configFile.template || ! fs.existsSync('./templates/'+configFile.template+'/') ) {
	console.log('Error: no template defined or missing directory');
	process.exit();
}
console.log('using template files:', configFile.template);

let config = {
    module: {},
};

let cssConfig = Object.assign({}, config, {
	entry: ['./templates/'+configFile.template+'/style.scss'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.css',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
		},{
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',    // where the fonts will go
					publicPath: './'       // override the default path
				}
			 }]
		  }, {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',    // where the fonts will go
					publicPath: './'       // override the default path
				}
			 }]
		  }, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',    // where the fonts will go
					publicPath: './'       // override the default path
				}
			 }]
		  }, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',    // where the fonts will go
					publicPath: './'       // override the default path
				}
			 }]
		  }, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',    // where the fonts will go
					publicPath: './'       // override the default path
				}
			 }]
		  },
		  {
			test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'images/',    // where the fonts will go
					publicPath: './'       // override the default path
				}
			 }]
		  }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'bundle.css',
		}),
	],
});
let jsxConfig = Object.assign({}, config, {
	entry: ['babel-polyfill', 'whatwg-fetch', './views/App.jsx'],
	output: {
		path: __dirname,
		filename: 'dist/bundle.js',
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react', 'stage-2'],
				},
			},
		],
	},
	plugins: [
		new PolyfillsPlugin([
			'Array/prototype/forEach',
		]),
	],
});

module.exports = [
	cssConfig, jsxConfig,
];
