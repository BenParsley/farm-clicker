const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: {
    main: "./src/index.tsx",
  },
  mode: "development",
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "[name].bundle.js",
  },
  // watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    client: {
      
      progress: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    port: 3000,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /.tsx?$/, use: ["ts-loader"] },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      { test: /\.svg(\?.+)?$/, use: "file-loader" },
      { test: /\.png$/, use: "url-loader?mimetype=image/png" },
      { test: /\.gif$/, use: "url-loader?mimetype=image/gif" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/Bootstrap/index.html",
      filename: "index.html",
      showErrors: true,
      title: "farm-clicker",
      path: path.join(__dirname, "../dist/"),
      hash: true,
    }),
  ],
};
