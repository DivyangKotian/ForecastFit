const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map', // Add detailed source maps for debugging
  devServer: {
    static: './dist',
    port: 3000, // Development server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
});
