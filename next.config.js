const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      const federationConfig = {
        name: "core",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./remote-component": "./components/RemoteComponent.tsx",
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

    return config;
  },
};

module.exports = nextConfig;
