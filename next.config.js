/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'next/build',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.postimg.cc',
      'www.picng.com',
      'images.akhbarelyom.com',
      'egyptianstreets.com',
      'i.pinimg.com',
      'd3rr2gvhjw0wwy.cloudfront.net',
      'dsvsbigncb06y.cloudfront.net',
      'www.urtrips.com',
      'www.abou-alhool.com',
      'cf.bstatic.com',
      'q-xx.bstatic.com',
      'hgtvhome.sndimg.com',
      'www.devasom.com',
      'media.istockphoto.com',
      'i0.wp.com',
      'res.cloudinary.com'
    ],
  },
  env: {
    NEXT_PUBLIC_DOMAIN_NAME: "https://powerful-sunglasses-newt.cyclic.app"
  }
}

module.exports =  nextConfig
