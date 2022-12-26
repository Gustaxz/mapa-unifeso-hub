const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: './electron/main.ts',
    module: {
        rules: require('./rules.webpack'),
    },
    plugins: [new MiniCssExtractPlugin()],
}
