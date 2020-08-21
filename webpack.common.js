const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/web.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ["index"],
            filename: "index.html"
        }),

        new HtmlWebpackPlugin({
            template: "./src/content.html",
            chunks: ["index"],
            filename: "content.html"
        }),

        new CopyPlugin({
            patterns: [
              { from: "./src/images", to: "src/images" }
            ],
        })
    ]
}