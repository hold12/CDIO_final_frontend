// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './components/App.vue'
import Login from './components/Login.vue'
import Users from './components/Users.vue'
import vueResource from 'vue-resource'
import auth from './auth'

Vue.config.productionTip = false
Vue.use(vueResource)

Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})