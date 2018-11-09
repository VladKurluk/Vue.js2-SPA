import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/BuyShared/BuyModal'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAlCxfQ8eY7GnB4HjxMieBIyOunymdjtw4',
      authDomain: 'project-ad-vue.firebaseapp.com',
      databaseURL: 'https://project-ad-vue.firebaseio.com',
      projectId: 'project-ad-vue',
      storageBucket: 'project-ad-vue.appspot.com',
      messagingSenderId: '259835723193'
    }
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
