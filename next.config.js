/* @type {import('next').NextConfig} */
// const nextConfig = {
// }

const { i18n } = require("./next-i18next.config.js");

module.exports = {
  images: {
<<<<<<< HEAD
    domains: [
      "images.unsplash.com",
      "ik.imagekit.io",
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
    ],
=======
    domains: ['images.unsplash.com', 'source.unsplash.com', 'firebasestorage.googleapis.com'],
>>>>>>> 6135e4561932e15df7ba19bad1a48493403680ee
  },
  reactStrictMode: true,
  i18n,
};

// const nextTranslate = require("next-translate");

// module.exports = nextTranslate({
//   reactStrictMode: true,
// });

// module.exports = nextConfig
