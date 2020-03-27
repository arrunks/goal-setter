const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV } = process.env;
module.exports = {
  entry: './src/backend/index.js',
  mode: NODE_ENV,
  target: 'node',
  node:false,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  externals: [ nodeExternals() ]
}