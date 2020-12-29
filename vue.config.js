const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/cli3',
  outputDir: 'dist/cli3',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
  },
  devServer: {
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
      '^/staff': {
        target: `https://crm.huodong.hetaobiancheng.com/`,
        changeOrigin: true
      }
    }
  }
}
