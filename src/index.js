import Vue from 'vue'
import App from './app'
console.log('BUILD_ENV', process.env.BUILD_ENV)
new Vue({
  render: createElement => createElement(App)
}).$mount(document.querySelector('#app'))
