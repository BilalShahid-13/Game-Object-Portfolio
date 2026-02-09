import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Your error shows http, though https is preferred
        hostname: 'googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
