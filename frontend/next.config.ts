/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
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
                protocol: "http",
                hostname: "vitriolic-verlene-histographic.ngrok-free.dev",
                pathname: "/uploads/**",
            },
        ],
    },
};

module.exports = nextConfig;
