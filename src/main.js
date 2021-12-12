import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
import router from './router'
import { store } from './store/store'
import confirmDialog from './components/confirm/confirm'
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css'

Vue.config.productionTip = false
Vue.component('confirm-dialog', confirmDialog)
Vue.use(Snotify, {
  toast: {
    timeout: 4000,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true
  }
})

new Vue({
  render: h => h(App),
  vuetify,
  router: router,
  store,
}).$mount('#app')

