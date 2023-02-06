import Mock from 'mockjs';

Mock.setup({
    timeout: '200-600',
});

const API_URL = process.env.VUE_APP_API_URL;

// 标准 GET 成功返回
Mock.mock(`${API_URL}common/responseSuccess`, 'get', {
    success: true,
    code: 1,
    msg: '操作成功！',
    data: null,
    timestamp: '@now',
});

// 标准 GET 失败返回
Mock.mock(`${API_URL}common/responseFailure`, 'get', {
    success: false,
    code: 0,
    msg: '操作失败！',
    data: null,
    timestamp: '@now',
});

// 标准 POST 成功返回
Mock.mock(`${API_URL}common/responseSuccess`, 'post', {
    success: true,
    code: 1,
    msg: '操作成功！',
    data: null,
    timestamp: '@now',
});

// 标准 POST 失败返回
Mock.mock(`${API_URL}common/responseFailure`, 'post', {
    success: false,
    code: 0,
    msg: '操作失败！',
    data: null,
    timestamp: '@now',
});

export default Mock;
