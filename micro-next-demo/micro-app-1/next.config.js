const NextFederationPlugin = require('@module-federation/nextjs-mf');
const path = require("path");

module.exports = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'micro_app_1',
                remotes: {
                    micro_app_1: "micro_app_1@http://localhost:3000/_next/static/chunks/remoteEntry.js",
                },
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    "./exposed": path.resolve(__dirname, "./pages/exposed.tsx"),
                },
                shared: {},
            })
        );
        return config;
    },
};
