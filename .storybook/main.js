const path = require('path');
const webpack = require('webpack');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // new `next/link` support
    // https://github.com/storybookjs/storybook/issues/19813#issuecomment-1319692136
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_NEW_LINK_BEHAVIOR': true,
      }),
    );

    // vanilla-extract support
    config.plugins.push(new VanillaExtractPlugin());

    // vanilla-extract HMR support
    // https://github.com/vanilla-extract-css/vanilla-extract/issues/905#issuecomment-1307664487
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: `[\\/]node_modules[\\/](?!.*vanilla-extract)`,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    };

    // svgr support
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    // absolute path
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/logics': path.resolve(__dirname, '../src/logics'),
      '@/constants': path.resolve(__dirname, '../src/constants'),
      '@/assets': path.resolve(__dirname, '../src/assets'),
      '@/lib': path.resolve(__dirname, '../lib'),
    };

    return config;
  },
};
