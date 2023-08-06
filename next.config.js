/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'localhost','7fa6-49-159-4-38.ngrok-free.app'],
    // domains: ['b363-49-159-4-38.ngrok-free.app'],
  },
  env: {
    API_SERVER: 'http://localhost:3055',
    WEB: 'https://d87b-49-159-4-38.ngrok-free.app',
    WEB_IMG: 'https://7fa6-49-159-4-38.ngrok-free.app'
  },
  // env: {
  //   API_SERVER: 'http://localhost:3002',
  // },
  // avoid cors with proxy
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3005/:path*', // Proxy to Backend
  //     },
  //   ]
  // },
}

module.exports = nextConfig
