import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 语言
        locale: sessionStorage.getItem('locale') || process.env.VUE_APP_I18N_LOCALE || 'zh-CN',
        // 加载中
        loading: false,
    },
    mutations: {
        // 切换语言
        switchLocale(state, locale) {
            document.querySelector('html').setAttribute('lang', locale);
            Vue.$i18n.locale = locale;
            state.locale = locale;
            sessionStorage.setItem('locale', locale);
        },
        // 加载中
        loading(state, load) {
            state.loading = load;
        },
    },
    actions: {},
});

Vue.$store = store;
window.$store = store;

export default store;
