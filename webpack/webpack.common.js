const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', 
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Rule for images (jpg, jpeg, png, gif, svg)
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        type: 'asset/resource', 
        generator: {
          filename: 'assets/[name][ext]',  // Keeps original filename
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'], 
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', 
      inject: 'head', 
    }),
    new Dotenv(),  // This will load .env variables
  ],
};
