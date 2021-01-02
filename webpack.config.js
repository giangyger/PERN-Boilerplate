const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.tsx",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: __dirname + "/public",
    filename: "build/[name].[contenthash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.webpack.json",
        },
      },
    ],
  },
  devServer: {
    contentBase: __dirname + "/public",
    compress: true,
    port: 3000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: __dirname + "/src/client/index.ejs" }),
  ],
};
