const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: "container-app",
                library: { type: config.output.libraryTarget, name: "container-app" },
                filename: "static/runtime/remoteEntry.js",
                remotes: {
                    "micro-app-1": "micro-app-1@http://localhost:3001/_next/static/chunks/remoteEntry.js",
                    "micro-app-2": "micro-app-2@http://localhost:3002/_next/static/chunks/remoteEntry.js",
                },
                shared: {},
            })
        );

        if (!isServer) {
            config.output.publicPath = `http://localhost:3000/_next/`;
        }

        return config;
    },
};
