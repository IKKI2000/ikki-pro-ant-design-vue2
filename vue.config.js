const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.VUE_APP_BASE_URL,
    outputDir: process.env.outputDir,
    transpileDependencies: true,
    lintOnSave: true,
    productionSourceMap: false,
    configureWebpack: {
        performance: {
            maxEntrypointSize: 5242880,
            maxAssetSize: 3145728,
        },
    },
});
