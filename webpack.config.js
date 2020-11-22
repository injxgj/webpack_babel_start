import * as path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

let config = {
  //entry file
  entry: ['@babel/polyfill', './src/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // npm i -D file-loader
      {
        test: /\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]' // 이미지 이름을 동적으로 설정해주도록
            //publicPath: '../dist' //이미지를 가져올 때는 dist 폴더에 있는 거를 가져와야함. (이거는 htmlwebpackplugin 설정 이전에 해준거고 설정 이후에는 자동으로 해줘서 필요 없음)
          }
        }]
      },
    ]
  },
  plugins: [
    // npm i html-webpack-plugin -D
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // npm i -D clean-webpack-plugin
    new CleanWebpackPlugin(),
  ], // dist 폴더에 index.html 파일이 자동으로 추가 되도록 설정
  devtool: 'inline-source-map',
  mode: 'development'
}