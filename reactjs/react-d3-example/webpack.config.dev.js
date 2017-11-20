var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    // I like to add a resolve config to Webpack. This lets me load files without writing their extensions. 
    // It’s a small detail, but it makes your code cleaner.
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      // I like to add the .jsx extension to the list of files loaded with Babel. This lets me write React code in .jsx files
      // test: /\.js$/,
      test: /\.js$|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  }
};
