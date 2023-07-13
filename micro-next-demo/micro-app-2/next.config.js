const NextFederationPlugin = require('@module-federation/nextjs-mf');
const path = require("path");

module.exports = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'micro-app-2',
                remotes: {},
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
