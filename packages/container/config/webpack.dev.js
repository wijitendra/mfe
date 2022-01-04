const {merge} = require('webpack-merge');

const commonConfig = require('./webpack.common');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3001/remoteEntry.js',
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig,devConfig);