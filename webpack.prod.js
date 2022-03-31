const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            /* Babel laoder */
            {
                test: /\.js$/,
                exclude: "/node_module/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babbel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})