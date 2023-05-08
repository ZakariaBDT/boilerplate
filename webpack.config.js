const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = [
	{
		...defaultConfig,
	},
	{
		entry: {
			modules: path.resolve(process.cwd(), 'src', 'modules-export.js'),
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
							],
						},
					},
				},
			],
		},
		output: {
			path: path.resolve(process.cwd(), 'modules'),
			filename: 'index.js',
			library: {
				name: 'BDTBlocks',
				type: 'window',
			},
			libraryTarget: 'window',
		},
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
		},
	},
	{
		entry: {
			global: path.resolve(process.cwd(), 'src', 'global', 'index.js'),
		},
		output: {
			path: path.resolve(process.cwd(), 'dist'),
			filename: '[name].js',
		},
	},
];
