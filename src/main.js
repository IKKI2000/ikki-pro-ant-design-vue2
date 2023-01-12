import Vue from 'vue';
import ikki from '@/ikki.vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(ikki),
}).$mount('#app');
