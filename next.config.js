module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.HOST_SERVER,
    frontEndUrl: process.env.HOST_URL_FRONTEND,
    imagesServer: process.env.HOST_IMAGES,
  },
};
