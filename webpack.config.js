const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    }),
        new CopyPlugin({
            patterns: [
                {from: "localizations", to: "localizations"},
                {from: "images", to: "images"},
                {from: "fonts", to: "fonts"},
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        port: 3000
    }
};