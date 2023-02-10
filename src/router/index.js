import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
        },
    ],
});

Vue.$router = router;
window.$router = router;

export default router;
