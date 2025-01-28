const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map', 

    // webpack-dev-server settings
    devServer: {
        static: path.join(__dirname, 'dist'), 
        open: true, 
        hot: true, 
        compress: true, 
        port: 8080, 
        historyApiFallback: true, 
        watchFiles: ['src/**/*'],  
    },
});
