var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebPackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './build',
        filename: 'js/[name].js'
    },
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap", "sass?sourceMap")
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'build'], { root: __dirname }),
        new CopyWebPackPlugin([{from: 'src/index.html'}]),
        new ExtractTextPlugin("css/[name].css")
    ]
};