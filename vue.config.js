const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/cli3",
  outputDir: "dist/cli3",

  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },

  productionSourceMap: false,

  configureWebpack: config => {
    //调试JS
    config.devtool =
      process.env.NODE_ENV === "production" ? "none" : "eval-source-map";
  },

  devServer: {
    open: true,
    proxy: {
      "^/login": {
        target: "https://crm.huodong.hetaobiancheng.com",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/login": "/"
        }
      },
      "^/staff": {
        target: `https://crm.huodong.hetaobiancheng.com/`,
        changeOrigin: true
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/utilCss.scss")]
    }
  }
};
