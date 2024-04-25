/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "standalone",
    experimental: {
        serverActions: {
            allowedOrigins: ["backend:8000", "localhost:3000"]
        }
    }
};

export default nextConfig;
