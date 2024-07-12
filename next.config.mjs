/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
  // output: 'standalone',
  // webpack: (config, { isServer }) => {
  //   console.log('from webpack', path, __dirname)
  //   config.resolve.alias['@'] = path.join(__dirname, '')
  //   return config
  // }
};

export default nextConfig;
