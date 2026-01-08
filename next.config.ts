// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',          // path di frontend
        destination: 'http://76.13.16.58/:path*', // path di VPS backend
      },
    ];
  },
};

export default nextConfig;
