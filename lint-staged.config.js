module.exports = {
    '*.{html,css,scss,less,js,jsx,ts,tsx,json,vue,md}': 'prettier --write',
    '*.{js,jsx,ts,tsx,vue}': ['vue-cli-service lint', 'git add'],
};
