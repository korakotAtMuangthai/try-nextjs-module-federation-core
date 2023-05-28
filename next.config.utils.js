const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");

function initialMF(config, options) {
  if (!options.isServer) {
    const federationConfig = {
      name: "core",
      filename: "static/chunks/remoteEntry.js",
      remotes: {},
      exposes: {
        "./remote-component": "./components/RemoteComponent",
      },
      shared: {},
    };
    config.plugins.push(
      new NextFederationPlugin(federationConfig),
      new FederatedTypesPlugin({
        federationConfig,
      }),
    );
  }
}

function initialEmotionTwin(config, options) {
  // The folders containing files importing twin.macro
  const includedDirs = ["components", "pages", "styles"].map((folder) => path.resolve(__dirname, folder));

  const { dev, isServer } = options;
  config.module = config.module || {};
  config.module.rules = config.module.rules || [];
  config.module.rules.push({
    test: /\.(tsx|ts)$/,
    include: includedDirs,
    use: [
      options.defaultLoaders.babel,
      {
        loader: "babel-loader",
        options: {
          sourceMaps: dev,
          presets: [["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }]],
          plugins: [
            require.resolve("babel-plugin-macros"),
            require.resolve("@emotion/babel-plugin"),
            [require.resolve("@babel/plugin-syntax-typescript"), { isTSX: true }],
          ],
        },
      },
    ],
  });

  if (!isServer) {
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      fs: false,
      module: false,
      path: false,
      os: false,
      crypto: false,
    };
  }
}

module.exports = { initialMF, initialEmotionTwin };
