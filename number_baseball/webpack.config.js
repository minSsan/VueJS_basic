const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

// webpacking: 스크립트를 하나로 합치기 위해 사용
module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        // 모든 script를 합칠 대표 파일 지정
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        // 자바스크립트 파일을 합칠 때 어떤 규칙을 따를 것?
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader',
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        // dist라는 폴더 내에 app.js 라는 최종 결과물이 나올 것
        filename: 'app.js', // = [name].js
        path: path.join(__dirname, 'dist'),
    },
};