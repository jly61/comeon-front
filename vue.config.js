const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.105.106.78',
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
})
