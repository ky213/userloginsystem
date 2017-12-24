const common = require("./webpack.common");
const merge = require("webpack-merge");
const ugglifyjs = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  plugins: [new ugglifyjs()]
});
