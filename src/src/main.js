import App from './App.vue'
import router from './router/index'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';
Vue.component('loading',Loading)

import pagebar from "./components/pagebar.vue";
Vue.component('pagebar',pagebar)

import VeeValidate from 'vee-validate';
import VeeZnTW from 'vee-validate/dist/locale/zh_TW'
VeeValidate.Validator.localize('VeeZnTW',VeeZnTW)
Vue.use(VeeValidate);

import moneyFilter from "./components/filiters/$Filter";
import timeFilter from "./components/filiters/time"
Vue.filter('moneyFilter',moneyFilter);
Vue.filter('timeFilter',timeFilter)

Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if(to.meta.reqAuth){
    const api = 'https://vue-course-api.hexschool.io/api/user/check'
      const vm = this
      axios.post(api).then(response => {
        console.log(response.data.success)
        if(response.data.success){
          next();
        }else{
          next('/login')
        }
    });
  }
  else{
    next();
  }
})