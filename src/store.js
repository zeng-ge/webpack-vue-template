import Vue from 'vue'
import Vuex from 'vuex'
import http from './http'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: {},
    profile: {}
  },
  mutations: {
    updateProfile (state, profile) {
      state.profile = profile
    },
    updatePost (state, post) {
      state.post = post
    }
  },
  actions: {
    getPost (context) {
      http.get('/posts').then(({ data: posts }) => {
        context.commit('updatePost', posts[0])
      })
    },
    getProfile (context) {
      http.get('/profile').then(({ data: profile }) => {
        context.commit('updateProfile', profile)
      })
    }
  }
})
