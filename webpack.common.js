const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    ouutput: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            /* style adn css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "syle-loader",
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin ({
            template: "./src/template.html",
            filenameL: "index.html"
        })
    ]
}