const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'https://newway.herokuapp.com', // 👈🏽 your API URL goes here.
      changeOrigin: true,
    })
  );
};