/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bus-adventures-s3.blr1.digitaloceanspaces.com",
        pathname: "/aktivferien/**",
      },
    ],
  },
};
