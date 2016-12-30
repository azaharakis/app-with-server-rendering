const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: "#inline-source-map",
    "entry": "./src/client",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    "output": {
        path: './public',
        filename: 'bundle.js'
    }
};