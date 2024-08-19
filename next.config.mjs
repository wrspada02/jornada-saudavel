/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'archive.org',
      },
      {
        hostname: 'img.clerk.com',
      }
    ]
  }
};

export default nextConfig;
