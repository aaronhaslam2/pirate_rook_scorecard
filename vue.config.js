const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'  ? '/pirate_rook_scorecard/'  : '/',
  transpileDependencies: true
})
