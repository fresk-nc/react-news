const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'client');

module.exports = {
    context: srcPath,
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'redux-thunk',
            'reselect',
            'immutable/dist/immutable.js',
            'keymirror',
            'whatwg-fetch'
        ],
        index: './index.js'
    },
    resolve: {
        extensions: [ '', '.js', '.styl' ],
        alias: {
            actions: path.join(srcPath, 'actions'),
            components: path.join(srcPath, 'components'),
            constants: path.join(srcPath, 'constants'),
            containers: path.join(srcPath, 'containers'),
            middleware: path.join(srcPath, 'middleware'),
            records: path.join(srcPath, 'records'),
            reducers: path.join(srcPath, 'reducers'),
            selectors: path.join(srcPath, 'selectors'),
            utils: path.join(srcPath, 'utils')
        }
    },
    resolveLoader: {
        modulesDirectories: [ 'node_modules' ],
        moduleTemplates: [ '*-loader', '*' ],
        extensions: [ '', '.js' ]
    },
    module: {
        noParse: [
            /node_modules[\/\\]immutable[\/\\]dist[\/\\]immutable.js/
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.png$/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.jpg$/,
                loader: 'file'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.join(srcPath, 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                preserveLineBreaks: true
            }
        })
    ]
};
