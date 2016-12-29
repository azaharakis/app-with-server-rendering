module.exports = {
    devtool: "#inline-source-map",
    "entry": "./src/client",
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    "output": {
        filename: './public/bundle.js'
    }
};