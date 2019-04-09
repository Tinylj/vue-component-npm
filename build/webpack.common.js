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
        // filename: '[name].bundle.js',
        // path: path.resolve(__dirname, "../dist")
        path: path.resolve(__dirname, '../dist'),//输出路径，就是上步骤中新建的dist目录，
        publicPath: '/dist/',
        filename: 'lh-ui.js',
        chunkFilename: '[id].js',
        library: 'lh-ui', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
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
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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