var webpack = require("webpack");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8010
    // proxy: "http://localhost:8080"
  },

  publicPath: "./",
  outputDir: "dist",
  assetsDir: debug ? "~" : "assets",
  productionSourceMap: false,

  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "assets": "@/assets"
      }
    }
  }
};
