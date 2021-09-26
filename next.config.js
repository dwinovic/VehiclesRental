module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.NEXT_PUBLIC_SERVER,
    frontEndUrl: process.env.NEXT_PUBLIC_URL_FRONTEND,
    imagesServer: process.env.NEXT_PUBLIC_IMAGES,
  },
};
