const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const WEBGL = new webpack.DefinePlugin({
  WEBGL_RENDERER: true,
  CANVAS_RENDERER: true
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: [/\.vert$/, /\.frag$/], use: "raw-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "/src/assets/"),
        to: path.join(__dirname, "/dist/assets")
      }
    ]),
    WEBGL
  ]
};
