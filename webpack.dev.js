const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const html = require("html-webpack-plugin");

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
      template: "./views/layouts/main.handlebars"
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
});
