import Vue from 'vue';

const _api = {};

const api = (Vue) => {
    Vue.$api = _api;
    window.$api = _api;
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return _api;
            },
        },
    });
};

Vue.use(api);

export default api;
