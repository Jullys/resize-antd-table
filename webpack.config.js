var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
        include: [path.join(__dirname, 'example')]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
};
