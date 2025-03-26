/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static site export
  images: {
    unoptimized: true, // Required for exporting images properly
  },
};

module.exports = nextConfig;
