const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const srcPath = path.join(__dirname, 'client');
const distPath = path.join(__dirname, 'public');
const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
    devtool: 'source-map',
    output: {
        filename: '[chunkhash]-[name].js',
        path: distPath,
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: [ srcPath ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[chunkhash]-[name].js'
        }),
        new webpack.DefinePlugin({
            '__DEV__': false,
            'NODE_ENV': 'production',
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    ]
});
