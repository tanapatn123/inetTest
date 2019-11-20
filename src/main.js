import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import { store } from './store/store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.config.productionTip = false
const opts = {}
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  store:store,
  router,
  vuetify: new Vuetify(opts), 
}).$mount('#app')
