module.exports = {
    entry: "./app/assets/js/App.jsx",

    output: {
        filename: "./public/js/bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:
                {
                   presets:['es2015', 'react']
                }
            }
        ]
    }
};