const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const { sass } = require('svelte-preprocess-sass');
const CopyPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: "https://filipemerker.github.io/module-federation-login/",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            hotReload: true,
            preprocess: {
              style: sass(),
            },
          },
        },
      }
    ],
  },
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: "login",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/main.js",
        "./loadApp": "./src/loadApp.js",
      },
      shared: [],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/*.*', to: './[name].[ext]' }]
    }),
  ],
  devtool: prod ? false : "source-map",
};
