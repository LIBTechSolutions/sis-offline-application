const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    './app/app.js',
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js'
  ],
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    extractSass
  ],
  output: {
    path: __dirname,
    filename: './public/bunde.js'
  },
  resolve: {
    modules: [
      __dirname,
     'node_modules',
     './app/components',
     './app/api'
   ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js']
  },
  module: {
    rules: [
      { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" },
      {
       test: /\.scss$/,
       use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [
                      path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
            }]
      },
      {
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-2', 'stage-0']
        },
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
