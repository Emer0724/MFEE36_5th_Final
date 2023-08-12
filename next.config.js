/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'via.placeholder.com',
      'localhost',
      '14fb-220-133-132-50.ngrok-free.app',
    ],
    // domains: ['b363-49-159-4-38.ngrok-free.app'],
  },
  env: {
    API_SERVER: 'http://localhost:3055',
    WEB: 'https://3e98-220-133-132-50.ngrok-free.app',
    //3055
    WEB_IMG: 'https://14fb-220-133-132-50.ngrok-free.app',
    //3000
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
