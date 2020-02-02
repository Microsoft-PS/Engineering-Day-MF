const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

isDevelopment = false;
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'ts-loader',
            options: {
                configFile: 'tsconfig.json'
            },
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
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                }, {
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
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            //filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            filename: 'bundle.style.css',
            //chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            chunkFilename: 'bundle.style.css'
        })
    ],
    resolve: {
        extensions: [".ts", ".js", ".scss"]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    }
}