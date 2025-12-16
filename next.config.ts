import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dponet.com.br",
      },
    ],
  },
};

export default nextConfig;
