import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import Axios from 'axios'
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

