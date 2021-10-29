module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'style': '@/style',
        'components': '@/components'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";` //引入全局变量   
      }
    }
  },
  // webpack-dev-server 相关配置  
  devServer: {
      // 调试端口
      // port: 8989
  }
    //其他配置....
}