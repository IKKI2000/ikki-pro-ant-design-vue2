import Vue from 'vue';
import less from '@/assets/style/theme/ikki.module.less';

const _utils = {
    less,
};

const utils = (Vue) => {
    Vue.$utils = _utils;
    window.$utils = _utils;
    Object.defineProperties(Vue.prototype, {
        $utils: {
            get() {
                return _utils;
            },
        },
    });
};

Vue.use(utils);

export default utils;
