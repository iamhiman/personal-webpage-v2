import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}`, // Allow this external domain
      },
    ],
  },
};

export default nextConfig;
