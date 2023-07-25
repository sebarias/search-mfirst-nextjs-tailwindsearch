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
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
        },
        {
          protocol: "https",
          hostname: "images.cdn1.buscalibre.com",
        },
        {
          protocol: "https",
          hostname: "images.cdn3.buscalibre.com",
        },
        {
          protocol: "https",
          hostname: "images.cdn2.buscalibre.com",
        },
        {
          protocol: "https",
          hostname: "feriachilenadellibro.cl",
          pathname: "/wp-content/uploads/**"
        },
      ],
    },
    env: {
      API_URL: 'https://search-mfirst-nextjs-tailwindsearch.vercel.app' // Reemplaza 'tu-url-de-vercel.com' con tu URL de Vercel
    },
  }