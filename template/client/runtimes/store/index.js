import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import states from './states';

const store = new Vuex.Store({
    state: states,
    actions: {},
    mutations: {},
    getters: {}
});

export default store;