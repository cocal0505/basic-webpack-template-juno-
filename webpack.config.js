//import
const path = require('path')  // node 에서 제공하는 기본 전역모듈
const HtmlPlugin = require ('html-webpack-plugin')
const CopyPlugin = require( 'copy-webpack-plugin')
// const {VueLoaderPlugin} = require('vue-loader')

// export 
module.exports = {
  // 파일을 읽어 들이는 진입점 설정 
  entry: './js/main.js',


  // 결과물(번들)을 변환하는 설정 
  output: {
    // path: path.resolve(__dirname, 'dist'),  
    // filename:'mainBundled.js',
    clean: true
  },

  module:{
    rules:[
      // {
      //   test: /\.vue?/,
      //   use: 'vue-loader ' 
      // },
      {
        test:/\.s?css$/,
        use:[
          // 'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      }
    ]

  },


  // 번들링 후 결과물의 방식 등 다양한 플러그인을 설정
  plugins: [
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin({
      patterns:[
        {from: 'static'}
      ]
    }),
    // new VueLoaderPlugin(),
  ],


  devServer:{
    host: 'localhost',
    port: 8080,
    hot: true
  }
}