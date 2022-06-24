/* @type {import('next').NextConfig} */
// const nextConfig = {
// }

const { i18n } = require("./next-i18next.config.js");

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
      "localhost",
      "ik.imagekit.io",
    ],
  },
  reactStrictMode: true,
  i18n,
};

// const nextTranslate = require("next-translate");

// module.exports = nextTranslate({
//   reactStrictMode: true,
// });

// module.exports = nextConfig
