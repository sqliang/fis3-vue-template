/**
 * @file 前端路由配置
 * @author liangshiquan@baidu.com
 */

import Layout from '../../components/Layout.vue';
import Layout1 from '../../components/Layout1.vue';
import Home from '../../pages/Home/Home.vue';
import NotFound from '../../pages/NotFound/NotFound.vue';
import About from '../../pages/About/aboute.vue';



export default [
    {
        path: '/',
        component: Layout1,
        children: [
            {
                path: '',
                redirect: 'home'
            },
            {
                path: 'home',
                component: Home
            },
            {
                path: 'about',
                component: About
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
];