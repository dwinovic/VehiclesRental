module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.HOST_SERVER,
    imagesServer: process.env.HOST_IMAGES,
  },
};
