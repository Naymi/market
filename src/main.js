import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import './registerServiceWorker'
import firebase from 'firebase'
import firebaseConfig from './config/firebase'

firebase.initializeApp(firebaseConfig)


Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
