const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    publicPath: process.env.VUE_APP_BASE_URL,
    outputDir: process.env.outputDir,
    transpileDependencies: true,
    lintOnSave: true,
    pluginOptions: {
        i18n: {
            locale: 'zh-CN',
            fallbackLocale: 'en-US',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
    productionSourceMap: false,
    configureWebpack: {
        performance: {
            maxEntrypointSize: 5242880,
            maxAssetSize: 3145728,
        },
    },
});
