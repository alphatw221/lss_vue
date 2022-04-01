const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  devtool:'source-map',
  context: __dirname,
  mode:'development',
  entry: './src/main',
  output: {
    path: path.resolve(__dirname,'static/webpack_bundles'), 
    filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },

      {
        test: /\.css$/,
        use: [
            {
                loader:'style-loader',
            },
            {
                loader:'css-loader',
            },
            {
                loader:'postcss-loader',
            }
        ]
      },
      
      {
        test: /\.(png|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
            //   limit: 8192, // 圖片檔案小於該值(byte)，轉換 base64 格式
              name: '[path][name].[ext]?[hash:8]',
              esModule:false
            },
          },
        ],
      },

      
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // If you are using the options api.
        __VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
        'process.env': JSON.stringify(process.env),
        // 'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
    }),
  ],
  resolve:{
      alias:{
          "@":path.resolve('src')
      }
  }
}