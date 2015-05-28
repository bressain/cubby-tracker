var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css?$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 3000
  }
}
