const FileStream = require('fs');
const Path = require('path');
const Webpack = require("webpack");


module.exports = {
    entry: {
        "app": [
            "./app\\app.js"
        ]
    },
    output: {
        "path": Path.join(process.cwd(), "dist"),
        "filename": "[name].bundle.js",
        "chunkFilename": "[id].chunk.js",
        "crossOriginLoading": false
    },
    module: {
        rules: []
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: [
                "inline"
            ],
            minChunks: null
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: [
                "vendor"
            ],
            minChunks: (module) => {
                return module.resource &&
                    (module.resource.startsWith(Path.join(process.cwd(), 'node_modules')))

            },
            chunks: ["app"]
        }),

        new Webpack.NamedModulesPlugin(),
        new Webpack.NamedChunksPlugin()
    ],

}