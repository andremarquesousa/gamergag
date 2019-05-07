const _MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: 'stylesheets/bundle.css',
    chunkFilename: 'bundle.css'
});

module.exports = {
    MiniCssExtractPlugin: MiniCssExtractPlugin
};