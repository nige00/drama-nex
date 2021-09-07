/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // ここから
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  // ここまで
};
