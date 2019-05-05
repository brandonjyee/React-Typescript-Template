const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

function getPlugins() {
	const plugins = [
		// For generating the SPA html file
		new HtmlWebpackPlugin({
			// Whether to inject all the assets into the html file
			inject: false,
			template: require('html-webpack-template'),
			title: 'My Webapp',
			favicon: 'public/favicon.ico',
			// Whether to append a has to all scripts and css files
			hash: true,
			// For the html-webpack-template, can specify the div id the SPA will mount to
			appMountId: 'app'
		})
	]
	return plugins;
}

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry: "./src/main.tsx",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	plugins: getPlugins(),

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	// externals: {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// },

	// Configuration for webpack-dev-server
	devServer: {
		// GZIP everything in the contentBase directory and serve it
		compress: true,
		// Serve from the 'dist' directory
		contentBase: path.join(__dirname, 'dist'),
		// Enable Hot Module Replacement (and only reloads if build succeeds)
		hotOnly: true,
		port: 9000,
		host: '0.0.0.0',
		before: function (app, server) {
			console.log('Starting webpack-dev-server')
		}
	}
}
