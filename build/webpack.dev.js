const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        hot: true // 开启热替换
    }, // 作用是告诉webpack在localhost:8080上观察dist目录下面的内容
    plugins: [
        new webpack.NamedModulesPlugin(), // 在重新编译的时候，会展示被更新模块的相对路径，如 “ [./src/print.js] ./src/print.js 98 bytes {0} [built] ”
        new webpack.HotModuleReplacementPlugin()
    ],
});