/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(glsl|vert|frag)$/,
        exclude: /node_modules/,
        use: 'raw-loader',
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  

