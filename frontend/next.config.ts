/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // For production:
      {
        protocol: "https",
        hostname: "your-strapi-domain.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
