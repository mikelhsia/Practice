/**
 * Created by puppylpy on 2018/5/4.
 */
var webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'buble'}
        ]
    }
};