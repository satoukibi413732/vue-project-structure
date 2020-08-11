module.exports = {
  publicPath: '/admin',
  assetsDir: './assets',
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [require('postcss-px2rem')({ remUnit: 192 })],
  //     },
  //   },
  // },

  devServer: {
    port: 8000,
    // proxy: 'http://10.11.2.30:8080',
    proxy: {
      '/api': {
        // 接口域名
        pathRewrite: {
          '^/api': '/api',
        },
        target: 'http://10.11.2.30:8280',
        ws: true,
        //是否跨域
        changeOrigin: true,
      },
    },
  },
};
