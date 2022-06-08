const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    devServer: {
      webSocketServer: false,
      liveReload: false,
      hot: false,
      historyApiFallback: true
      }
  }
}