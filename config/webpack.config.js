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
            }
        ]
    },
    "output": {
        filename: './public/bundle.js'
    }
};