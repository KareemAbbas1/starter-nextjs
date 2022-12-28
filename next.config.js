/** @type {import('next').NextConfig} */
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer({
//   env: {
//     NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//       domains: [
//         'res.cloudinary.com',
//         'i.postimg.cc',
//       ],
//     }
//   },
// })
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.postimg.cc',
      'i.pinimg.com',
      'res.cloudinary.com',
      'www.picng.com',
      'images.akhbarelyom.com',
      'egyptianstreets.com',
      'd3rr2gvhjw0wwy.cloudfront.net',
      'www.urtrips.com'
    ],
  }
}

module.exports =  nextConfig