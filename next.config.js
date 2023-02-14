const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['horosocular.s3.ap-northeast-1.amazonaws.com'],
  },
};

module.exports = withVanillaExtract(nextConfig);
