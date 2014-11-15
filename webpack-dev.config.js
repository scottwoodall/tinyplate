var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./less/main.less",
    module: {
        loaders: [
             {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("tinyplate.css")
    ]
};
