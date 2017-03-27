const precss = require('precss');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
	entry: {
		example: './example/app.js',
		main: './index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: 'react-multiselect-two-sides',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [
									precss,
									autoprefixer
								];
							}
						}
					}
				]
			}
		]
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	devtool: 'eval'
};
