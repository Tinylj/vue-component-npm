const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {

    entry: {
        app: './src/index.js',
        // print: './src/component/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "自动生成的html文件"
        }),
        new webpack.NamedModulesPlugin(), // 在重新编译的时候，会展示被更新模块的相对路径，如 “ [./src/print.js] ./src/print.js 98 bytes {0} [built] ”
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true // 开启热替换
    }, // 作用是告诉webpack在localhost:8080上观察dist目录下面的内容
}