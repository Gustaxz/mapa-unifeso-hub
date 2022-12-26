const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: require('./rules.webpack'),
    },
    plugins: [new MiniCssExtractPlugin()],
}
