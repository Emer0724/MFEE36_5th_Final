/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'localhost'],
  },
  env: {
    API_SERVER: 'http://localhost:3055',
    // WEB: 'http://192.168.24.95:3055',
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
