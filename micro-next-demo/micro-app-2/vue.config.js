const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const deps = require('./package.json').dependencies;

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "micro_app_2",
        filename: "remoteEntry.js",
        library: { type: "var", name: "micro_app_2" },
        remotes: {
          micro_app_2: "micro_app_2@http://localhost:3002/remoteEntry.js",
        },
        exposes: {
          "./HelloWorld": "./src/components/HelloWorld.vue",
        },
        shared: {
          vue: {
            singleton: true,
          }
        },
      }),
    ],
  },
  devServer: {
    port: 3002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
