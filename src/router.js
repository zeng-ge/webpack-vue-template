import VueRouter from 'vue-router'
import Post from './Post'
import Profile from './Profile'

export default new VueRouter({
  routes: [
    { path: '/post', component: Post },
    { path: '/profile', component: Profile }
  ]
})
