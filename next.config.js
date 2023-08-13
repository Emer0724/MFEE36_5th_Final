/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'via.placeholder.com',
      'localhost',
      'e945-49-159-4-38.ngrok-free.app',
      'bab4-49-159-4-38.ngrok-free.app',
    ],
    // domains: ['b363-49-159-4-38.ngrok-free.app'],
    //兩個ngrok 都要
    
  },
  env: {
    API_SERVER: 'http://localhost:3055',
    WEB: 'https://e945-49-159-4-38.ngrok-free.app',
    //3055
    WEB_IMG: 'https://bab4-49-159-4-38.ngrok-free.app',
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
