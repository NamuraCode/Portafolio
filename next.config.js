/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["media.licdn.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'media.licdn.com',
    //     port: '',
    //     pathname: '/dms/image/D4E03AQFY2iFQInxo2A/',
    //   },
    // ],
  },
};

module.exports = nextConfig;
