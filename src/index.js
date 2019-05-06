import Vue from 'vue'
import App from './app'

new Vue({
  render: createElement => createElement(App)
}).$mount(document.querySelector('#app'))
