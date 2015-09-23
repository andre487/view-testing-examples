/**
 * @file
 * WebPack config for compiling JSX in one JS bundle
 */
var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    devtool: 'source-map'
};
