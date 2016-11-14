module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
