const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.77.98.154/',
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
})
