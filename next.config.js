/* @type {import('next').NextConfig} */
// const nextConfig = {
// }

const { i18n } = require("./next-i18next.config.js");

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "ik.imagekit.io",
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
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
