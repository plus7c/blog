/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    //appDir: true,
    serverComponentsExternalPackages:["mongoose"],
  },
};

module.exports = nextConfig;
