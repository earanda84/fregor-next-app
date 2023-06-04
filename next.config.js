/** @type {import('next').NextConfig} */
const hostnames = [
  'lh3.googleusercontent.com',
  'avatars.githubusercontent.com',
  's3.amazonaws.com'
  // "localhost:3000/",
]

const nextConfig = {
  reactStrictMode: true,
   images:{
      remotePatterns: hostnames.map(hostname => ({
        protocol:'https',
        hostname
      }))
  },
}

//,output: 'standalone'
module.exports = nextConfig
