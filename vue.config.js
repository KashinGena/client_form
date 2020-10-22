module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_base.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/client_form/' : '/'
};
