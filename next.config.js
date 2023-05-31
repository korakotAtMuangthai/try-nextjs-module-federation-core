const nextConfigUtil = require("./next.config.utils");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
  },
  webpack(config, options) {
    nextConfigUtil.initialMF(config, options);
    nextConfigUtil.initialEmotionTwin(config, options);

    return config;
  },
};

module.exports = nextConfig;
