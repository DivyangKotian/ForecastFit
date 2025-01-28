const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true, // Minify output
    splitChunks: {
      chunks: 'all', // Split vendor code into separate chunks
    },
  },
});
