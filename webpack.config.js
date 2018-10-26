require('dotenv').config();

const path = require('path');

module.exports = {
  mode: process.env.MODE,
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public',
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.svg?/,
        use: {
          loader: 'svg-inline-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx']
  }
};
