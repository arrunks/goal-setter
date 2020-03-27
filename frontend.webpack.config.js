const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { NODE_ENV } = process.env;

module.exports = {
  entry: './src/frontend/index.js',
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'build','public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/backend/index.html",
      filename: "index.html"
    })
  ]
};