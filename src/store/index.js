import Vue from 'vue';
import Vuex from 'vuex';
import images from './modules/images';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        images
    }
});

export default store