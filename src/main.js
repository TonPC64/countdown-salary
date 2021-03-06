import Vue from 'vue'
import moment from 'moment'
import Buefy from 'buefy'

import App from './App'
import router from './router'

import 'buefy/lib/buefy.css'
import 'mdi/css/materialdesignicons.min.css'
import './assets/style.css'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.prototype['$moment'] = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
