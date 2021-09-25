const Dotenv  = require('dotenv-webpack');
const withMDX = require('@next/mdx');

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})({
  webpack: (config, {isServer}) => {
    config.plugins.push(new Dotenv({silent: true}));
    
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        child_process: false,
        crypto: false,
        os: false,
        tty: false,
        stream: false
      }
    }
        
    return config;
  },


  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    PORTFOLIO_API_URL: process.env.PORTFOLIO_API_URL
  }
})
