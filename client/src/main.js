// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// JQUERY
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

// MEDIA QUERIES and responsive design
import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: { // Define breakpoint for myDSTI here
    sm: 750,
    md: 1199,
    lg: Infinity
  }
});

Vue.config.productionTip = false

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify, {
  iconfont: 'fa'
})

// SNOTIFY
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css'
Vue.use(Snotify)

// backtotop https://www.npmjs.com/package/vue-backtotop
import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
