const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Main entry file
  output: {
    path: path.resolve(__dirname, '../dist'), // Output directory
    filename: 'bundle.js', // Output file name
    clean: true, // Clean the output folder before building
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, // Transpile JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use an HTML template
    }),
  ],
};
