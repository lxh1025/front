let url = 'http://localhost:8080'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port:7000,
  },
  chainWebpack:config=>{
    historyApiFallback: true,
    config.plugin('html').tap(args=>{
      args[0].title = 'travel'
      return args;
    })
  }
})