/* @type {import('next').NextConfig} */
// const nextConfig = {
// }

const { i18n } = require("./next-i18next.config.js");

module.exports = {
  images: {
<<<<<<< HEAD
    domains: [
      "images.unsplash.com",
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
      "ik.imagekit.io",
    ],
=======
    domains: ['images.unsplash.com', 'source.unsplash.com', 'firebasestorage.googleapis.com', "localhost"],
>>>>>>> bafd8716bf542149acb8df8dd07bcb2ad6b55d4e
  },
  reactStrictMode: true,
  i18n,
};

// const nextTranslate = require("next-translate");

// module.exports = nextTranslate({
//   reactStrictMode: true,
// });

// module.exports = nextConfig
