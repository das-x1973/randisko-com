// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH || '',
  redirects: async () => {
    return [{
    source: '/',
    destination: '/landing-page',
    permanent: true
  }]}
}

export default nextConfig


