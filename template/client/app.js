import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import iView from 'iview';
import router from './runtimes/router/router';
import store from './runtimes/store/index';
import App from './runtimes/pages/App.vue';

Vue.use(iView);
sync(store, router);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});