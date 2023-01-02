const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: './electron/main.ts',
    module: {
        rules: require('./rules.webpack'),
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new Dotenv({
            ignoreStub: true,
        }),
    ],
}
