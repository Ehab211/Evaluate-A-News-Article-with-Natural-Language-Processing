const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //installed via npm-run-path
const webpack = require("webpack"); //to access built-in plugins
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry:['babel-polyfill', "./src/client/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, // the $ at the end simply means that nothing comes after that.
        exclude: /node_modules/,
        use: ["babel-loader",],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/client/views/index.html",
      hash: true,
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: ["*", ".js"],
  },

  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "./dist"),
  },
};
// { options: { importLoaders: 5 } }
