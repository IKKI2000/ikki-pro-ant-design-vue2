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
                error.message = '请求无效！';
                break;
            case 401:
                error.message = '未授权访问！';
                break;
            case 403:
                error.message = '禁止访问！';
                break;
            case 404:
                error.message = '文件未找到！';
                break;
            case 405:
                error.message = '请求方法被禁用！';
                break;
            case 500:
                error.message = '服务器内部错误！';
                break;
            case 502:
                error.message = '错误网关！';
                break;
            case 503:
                error.message = '服务不可用！';
                break;
            case 504:
                error.message = '网关超时！';
                break;
            case 505:
                error.message = 'HTTP 版本不受支持！';
                break;
            default:
                error.message = '服务器错误！';
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
