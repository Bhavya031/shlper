/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    GITHUB_APP_CLIENT_ID: "3d419ab419c7f047ff99",
    GITHUB_APP_CLIENT_SECRET: "506da3ba7af5bb9d77f9db5786349a5cf8d3691d",
    NEXTAUTH_SECRET: "ldiFvWT9pk9xDSZkPHmw7WHSXPQMh6Vp5tOR/+TusrE=",
  },
};

module.exports = nextConfig;
