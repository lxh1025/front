import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Router from 'vue-router'
import router from '@/router/index.js'
import request from '@/utils/request.js'
import axios from 'axios'
Vue.use(ElementUI);
Vue.use(Router);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$request = request

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
