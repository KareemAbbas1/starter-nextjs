/** @type {import('next').NextConfig} */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        'res.cloudinary.com'
      ],
    }
  },
})
