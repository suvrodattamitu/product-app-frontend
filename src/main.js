import Vue from 'vue'
import App from './App.vue'

import './assets/styles.scss'

window.axios = require('axios')

//it is for to support vue routes 
import router from "./router/routes"

//support vuex
import Vuex from 'vuex';
Vue.use(Vuex);

import storedata from './store/stores';

const store = new Vuex.Store(
  storedata
);

router.beforeEach((to, from, next) => {

    if(to.meta){
        document.title = 'Ninja :: ' + to.meta.title
    }else{
        document.title = 'Ninja'
    }

    next()

})

Vue.config.productionTip = false

new Vue({
  render: productApp => productApp(App),
  router,
  store
}).$mount('#app')
