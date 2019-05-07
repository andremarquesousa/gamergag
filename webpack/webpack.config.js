const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
    entry: {
        main: ['./src/assets/javascripts/app.js', './src/assets/stylesheets/postCSS/style.css']
    },
    devServer: {
        contentBase: 'src',
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        open: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            loaders.CSSLoader,
            loaders.ESLintLoader
        ]
    },
    plugins: [
        plugins.MiniCssExtractPlugin,
    ],
    output: {
        path: __dirname + '/../src/assets/',
        filename: 'javascripts/bundle.js'
    },
};