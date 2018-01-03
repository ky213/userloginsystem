const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const html = require("html-webpack-plugin");
const ugglifyjs = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      }
    ]
  },
  plugins: [
    new html({
      template: "./devViews/layouts/main.handlebars"
    }),
    new ugglifyjs()
  ],
  devtool: "inline-source-map"
});
