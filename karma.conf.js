const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.base');

const testPath = path.join(__dirname, 'test');
const srcPath = path.join(__dirname, 'client');

module.exports = (config) => {
    config.set({
        frameworks: [ 'mocha', 'chai-immutable', 'sinon-chai' ],
        files: [
            'test/index.js'
        ],
        preprocessors: {
            'test/index.js': [ 'webpack' ]
        },
        webpack: {
            resolve: webpackConfig.resolve,
            plugins: [
                new webpack.ProvidePlugin({
                    React: 'react',
                    ReactDOM: 'react-dom'
                }),
                new webpack.DefinePlugin({
                    '__DEV__': true,
                    'NODE_ENV': 'development',
                    'process.env': {
                        'NODE_ENV': JSON.stringify('development')
                    }
                })
            ],
            module: {
                noParse: webpackConfig.module.noParse,
                preLoaders: [
                    {
                        test: /\.js$/,
                        loader: 'isparta',
                        include: [ srcPath ]
                    }
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        include: [ testPath ]
                    }
                ]
            },
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            reporters: [
                { type: 'text-summary' },
                { type: 'lcov', dir: 'test/coverage' }
            ]
        },
        reporters: [ 'progress', 'coverage' ],
        browsers: [ 'jsdom' ],
        singleRun: true
    });
};
