var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var embedFileSize = 65536;
var assetsLoaders = [
  {test: /\.json$/, loader: 'json'},
  {test: /\.mp4$/, loader: 'url?limit=' + embedFileSize + '&mimetype=video/mp4'},
  {test: /\.svg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
];

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './js/index.js' // Your appʼs entry point
  ],
  output:  {
    path: __dirname,
    filename: './dist/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: assetsLoaders.concat([
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|lib|dist)/,
        include: path.join(__dirname, 'js'),
        loaders: ['react-hot', 'babel?optional[]=runtime']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ])
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('./dist/bundle.css')
  ],
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'js/actions'),
      components: path.resolve(__dirname, 'js/components'),
      constants: path.resolve(__dirname, 'js/constants'),
      containers: path.resolve(__dirname, 'js/containers'),
      layouts: path.resolve(__dirname, 'js/layouts'),
      reducers: path.resolve(__dirname, 'js/reducers'),
      routes: path.resolve(__dirname, 'js/routes'),
      semantic: path.resolve(__dirname, 'semantic/dist/semantic.js'),
      store: path.resolve(__dirname, 'js/store'),
      utils: path.resolve(__dirname, 'js/utils'),
      views: path.resolve(__dirname, 'js/views')
    }
  },
  noParse: [
    path.resolve(__dirname, 'semantic/dist/semantic.js')
  ],
  devServer: {
    stats: {
      chunkModules: false,
      colors: true
    },
    hot: true,
    proxy: {
      '/api/*': 'http://localhost:3000'
      // '/images/*': 'http://localhost:24957',
      // '/fonts/*': 'http://localhost:24957'
    }
  },
  stats: { colors: true }
};
