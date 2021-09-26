module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    frontEndUrl: process.env.NEXT_PUBLIC_URL_FRONTEND,
    imagesServer: process.env.NEXT_PUBLIC_IMAGES,
  },
};
