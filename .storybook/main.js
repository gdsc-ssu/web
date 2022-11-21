const path = require('path');
const webpack = require('webpack');

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
  webpackFinal: async (config) => {
    // new `next/link` support
    // https://github.com/storybookjs/storybook/issues/19813#issuecomment-1319692136
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_NEW_LINK_BEHAVIOR': true,
      }),
    );

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
    };

    return config;
  },
};
