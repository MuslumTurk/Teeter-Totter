var path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  runtimeCompiler: false,
  devServer: {
    disableHostCheck: true,
    watchOptions: {
      poll: true
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'insider-store': path.resolve(__dirname, 'src/store'),
        'insider-components': path.resolve(__dirname, 'src/components'),
        'insider-router': path.resolve(__dirname, 'src/router'),
        'insider-helpers': path.resolve(__dirname, 'src/helpers')
      }
    }
  }
}
