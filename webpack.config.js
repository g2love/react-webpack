var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//每一个页面一共config
var config1 = {
  entry: path.resolve(__dirname, './views/js/index/index-leader.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: './js/Index.js'
  },
  module: {
    noParse: [],
    loaders: [
    {
      test: /\.js$/, 
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          presets: ['react','es2015']
      }
    },
    {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
    },{
      test:/\.(png|jpg|jpeg)$/,
      loader:'file-loader?name=images/[hash:8]-[name].[ext]'
    }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'Index.html',
      template: __dirname + "/views/pages/index/index.html"
    }),
    new ExtractTextPlugin("./css/Index.css"),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })
  ]
};
var config2 = {
  entry: path.resolve(__dirname, './views/js/demo/demo-leader.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: './js/Demo.js'
  },
  module: {
    noParse: [],
    loaders: [
    {
      test: /\.js$/, 
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          presets: ['react','es2015']
      }
    },
    {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
    },{
      test:/\.(png|jpg|jpeg)$/,
      loader:'file-loader?name=images/[hash:8]-[name].[ext]'
    }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'Demo.html',
      template: __dirname + "/views/pages/demo/demo.html"
    }),
    new ExtractTextPlugin("./css/Demo.css"),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })
  ]
};
module.exports = [config1,config2];