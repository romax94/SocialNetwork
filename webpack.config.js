const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html',
  filename: './index.html'
});

module.exports = {
  entry:  path.resolve('./client/src/index.js'),
  output: {
    path: path.resolve('./client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    HtmlWebpackPlugin
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:3001"
    }
  }
}