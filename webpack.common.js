const path = require("path");
const clean = require("clean-webpack-plugin");

module.exports = {
  entry: {
    polyfill:["babel-polyfill", "./src/polyfill.js"],
    login:  "./src/login.js",
    registration:  "./src/registration.js",
    passwordReset:"./src/passwordReset.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new clean(["public"])]
};
