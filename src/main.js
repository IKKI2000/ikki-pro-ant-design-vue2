import Vue from 'vue';
import ikki from '@/ikki.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/plugins/i18n';
import '@/plugins/axios';
import '@/api';

process.env.NODE_ENV === 'development' && require('@/mock');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(ikki),
}).$mount('#app');
