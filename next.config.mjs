/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-pdf/renderer"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, os: false, path: false };
    return config;
  },
};

export default nextConfig;
