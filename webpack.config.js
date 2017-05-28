var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin('build/style/[name].[chunkhash:8].css');
var WebpackAssetsManifest = require('webpack-assets-manifest');
function root(__path) {
  return path.join(__dirname, __path);
}
console.log(extractCss);
module.exports = {
  entry : __dirname+'/public/src/main.ts',
  output : {
    path : __dirname+'/public',
    publicPath: '/',
		filename: 'build/js/[name].[chunkhash:8].js',
		chunkFilename: 'build/js/[name].[chunkhash:8].js'
  },

 devServer : {
    host: '0.0.0.0',
		port: 8000,
		inline: true,
		compress: true,
		proxy: {
			'*': {
				target: 'http://localhost:8001'
			}
		}
  },
  plugins:[
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        root(__dirname+'/public/src'), // location of your src
        { }
      ),
    extractCss,
    new WebpackAssetsManifest({
          output: __dirname+'/public/build/webpack-manifest.json',
          publicPath: '/',
          writeToDisk: true //php need this to read file from disk
    }),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    bootstrap: "bootstrap",
    bootstrap: "bootstrap",
    "window.bootstrap": "bootstrap"
  })],
  module: {
        loaders: [
            {
              test: /\.ts$/,
              loader: 'awesome-typescript-loader',
            },
            { test: /\.js$/, 
              exclude: [/node_modules/,/typings/],
              loader: "babel-loader",query:
              {
                presets:['latest']
              }
            },
            {
              test: /\.less$/,
              exclude: /node_modules/,
              loader: extractCss.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
            },
            {
              test: /\.css$/,
              loader: extractCss.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' })
            },
          	{
          		test: /\.(jpe?g|png|gif|webp|mp3|ogg|woff|woff2|ttf|svg)$/,
          		loader: 'file-loader?name=[path][name].[ext]?[hash:8]'
          	}
        ],

  },
  resolve: {
		modules: [ 'node_modules','vendor', path.resolve(__dirname, 'public') ],
		extensions: [ '.ts','.js']
	}
};
