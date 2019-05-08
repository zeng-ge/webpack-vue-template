import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import router from './router'
import store from './store'

Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: createElement => createElement(App)
}).$mount(document.querySelector('#app'))
