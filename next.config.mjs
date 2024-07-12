const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config, { isServer }) => {
    console.log('from webpack', path, __dirname)
    config.resolve.alias['@'] = path.join(__dirname, '')
    return config
  }
};

export default nextConfig;
