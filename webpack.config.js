const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = [
	{
		...defaultConfig,
	},
	{
		entry: {
			global: path.resolve(process.cwd(), 'src', 'global', 'index.js'),
		},
		output: {
			path: path.resolve(process.cwd(), 'dist'),
			filename: '[name].js',
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor-bundle',
						chunks: 'all',
					},
				},
			},
		},
	},
];
