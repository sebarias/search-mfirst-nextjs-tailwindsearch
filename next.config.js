/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.antartica.cl',
          port: '',
          pathname: '/media/catalog/product/**',
        },
      ],
    },
  }