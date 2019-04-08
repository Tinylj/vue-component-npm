const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {

    entry: {
        app: './src/index.js',
        // print: './src/component/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "../dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "自动生成的html文件"
        }),
        new ExtractTextPlugin({ // 设置插件选项
            filename: "styles.css",
            disable: process.env.NODE_ENV == "developement"?true: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, //不同版本的css-loader效果不一样
                use: ExtractTextPlugin.extract({ // 剥离文件
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                }),
                include: path.resolve(__dirname, "../src")
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
}