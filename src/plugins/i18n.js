import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'zh-CN',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-US',
    messages: {
        'zh-CN': require('@/locales/zh-CN.json'),
        'en-US': require('@/locales/en-US.json'),
    },
});

Vue.$i18n = i18n;
window.$i18n = i18n;

export default i18n;
