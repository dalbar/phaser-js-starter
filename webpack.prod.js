const merge = require("webpack-merge");
const UglifyJSPlugin = require("npm");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production"
});
