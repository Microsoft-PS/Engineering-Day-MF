const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
isDevelopment = false;
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.module\.s(a|c)ss$/,
            loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: isDevelopment
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDevelopment
                    }
                }
            ]
        },
        {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDevelopment
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            //filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            filename: 'bundle.style.css',
            //chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            chunkFilename: 'bundle.style.css'
        })
    ],
    resolve: {
        extensions: [".tsx", "ts", ".js", ".scss"]
    },
    mode: 'development'
}