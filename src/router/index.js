import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);


function prepareData(to, from, next) {
    return store.dispatch('images/fetchImages')
        .then(() => {
            next();
        });
}


export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/error',
            name: 'error',
            component: () => import('@/components/Error.vue'),
        },
        {
            path: '/home',
            name: 'home',
            beforeEnter: prepareData,
            component: () => import('@/components/MainBoard.vue'),
        },
        {
            path: '*',
            beforeEnter: prepareData,
            redirect: '/home',
            component: () => import('@/components/MainBoard.vue'),
        }
    ]
})