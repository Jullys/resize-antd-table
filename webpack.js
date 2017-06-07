const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    new webpack.HashedModuleIdsPlugin(),
    new ProgressBarPlugin(),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'ie >= 9',
              'Edge >= 12',
              'Firefox >= 28',
              'Chrome >= 21',
              'safari >= 6'
            ]
          })
        ],
        context: __dirname
      }
    })
  ],
  resolve: {
    modules: ['lib', 'node_modules', 'src'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  target: 'web' // Make web variables accessible to webpack, e.g. window
};
