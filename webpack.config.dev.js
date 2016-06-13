const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const srcPath = path.join(__dirname, 'client');
const distPath = path.join(__dirname, 'public');
const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
    devtool: 'eval',
    output: {
        filename: '[name].js',
        path: distPath,
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'react-hot', 'babel' ],
                include: [ srcPath ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js'
        }),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'NODE_ENV': 'development',
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    devServer: {
        proxy: {
            '/api/*': 'http://localhost:8000'
        },
        historyApiFallback: true,
        hot: true,
        inline: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }
});
