import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';

// 滚动条滚回顶部
const scrollBehavior = (to, from, savedPosition)=> {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
};

export default new VueRouter({
    mode: 'hash',
    scrollBehavior,
    routes
});