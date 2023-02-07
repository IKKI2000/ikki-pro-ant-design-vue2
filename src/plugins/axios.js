import Vue from 'vue';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;
Axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

const _axios = Axios.create({
    timeout: 10 * 1000,
    withCredentials: true,
});

_axios.interceptors.request.use(
    (request) => {
        request.headers.Authorization = sessionStorage.getItem('token');
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    (response) => {
        sessionStorage.setItem('token', response.headers.Authorization);
        return response;
    },
    (error) => {
        switch (error.response.status) {
            case 400:
                error.message = Vue.$i18n.t('Common.ResponseError.400');
                break;
            case 401:
                error.message = Vue.$i18n.t('Common.ResponseError.401');
                break;
            case 403:
                error.message = Vue.$i18n.t('Common.ResponseError.403');
                break;
            case 404:
                error.message = Vue.$i18n.t('Common.ResponseError.404');
                break;
            case 405:
                error.message = Vue.$i18n.t('Common.ResponseError.405');
                break;
            case 500:
                error.message = Vue.$i18n.t('Common.ResponseError.500');
                break;
            case 502:
                error.message = Vue.$i18n.t('Common.ResponseError.502');
                break;
            case 503:
                error.message = Vue.$i18n.t('Common.ResponseError.503');
                break;
            case 504:
                error.message = Vue.$i18n.t('Common.ResponseError.504');
                break;
            case 505:
                error.message = Vue.$i18n.t('Common.ResponseError.505');
                break;
            default:
                error.message = Vue.$i18n.t('Common.ResponseError.default');
        }
        return Promise.reject(error);
    }
);

const axios = (Vue) => {
    Vue.$axios = _axios;
    window.$axios = _axios;
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return _axios;
            },
        },
    });
};

Vue.use(axios);

export default axios;
