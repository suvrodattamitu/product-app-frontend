import Vue from 'vue'
import App from './App.vue'

import './assets/styles.scss';

//it is for to support vue routes 
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {routes} from './router/routes';
//make all routes inside this 
const router = new VueRouter({
  routes ,
  mode:'history',
  scrollBehavior() {
    return {x: 0, y: 0};
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
