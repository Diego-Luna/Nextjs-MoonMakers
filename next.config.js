/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: 'https://image.tmdb.org',
  },
}

module.exports = nextConfig
