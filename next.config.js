


const distDir = '.dist';


const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // swcMinify: false,
  distDir: distDir,
  // productionBrowserSourceMaps: true,
  basePath: process.env.GITHUB_PAGES ? "/shumigram" : "",
  images: {
    loader: "custom",
    // unoptimized: true,
    imageSizes: [ 128, 256, 384 ],
    deviceSizes: [ 640, 828, 1200 ],
  },
  transpilePackages: [ "next-image-export-optimizer" ],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/img",
    nextImageExportOptimizer_exportFolderPath: distDir,
    nextImageExportOptimizer_exportFolderName: "webp",
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
  }
};



const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});


module.exports = withBundleAnalyzer(nextConfig);
