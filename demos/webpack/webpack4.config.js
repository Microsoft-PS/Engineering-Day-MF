const FileStream = require('fs');
const Path = require('path');
const Webpack = require("webpack");
const NamedModulesPlugin = require("./webpackconfig/NamedModulesPlugin");
const LibManifestPlugin = require('./webpackconfig/LibManifestPlugin');

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
        new NamedModulesPlugin(),
        new Webpack.NamedChunksPlugin(),
        new LibManifestPlugin({
            context: __dirname,
            name: 'common',
            path: Path.join(process.cwd(), "manifest", "Manifest.json")
        })
    ],

}