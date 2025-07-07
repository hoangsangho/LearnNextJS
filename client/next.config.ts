import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/photo/**"
      }
    ],
    qualities: [20, 50, 75, 90, 100]
  }
};

export default nextConfig;
