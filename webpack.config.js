var webpack = require('webpack')
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './js/app.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css?$/, loader: 'style!css' },
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 3000
  }
}
