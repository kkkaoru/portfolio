const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@web/components']);

/** @type import('next/dist/server/config-shared').NextConfig*/
const config = {
  reactStrictMode: true,
  /**
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in require module path
      '@web-components': `${require('path').dirname(require.resolve('@web/components/package.json'))}/src`,
      // ...
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  images: {
    // Be enable custom svg type
    disableStaticImages: true,
  },
  env: {
    GTM_ID: process.env.GTM_ID,
  },
};

module.exports = withPlugins([withTM], config);
