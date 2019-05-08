import http from './http'
export default {
  data () {
    return {
      post: {}
    }
  },
  mounted () {
    http.get('posts').then(({ data: posts }) => {
      this.post = posts[0]
    })
  },
  render () {
    return (
      <div>
        <div>post: {this.post.title }</div>
        <div>
          <router-link to="/post">POST</router-link>
          <router-link to="/profile">Profile</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    )
  }
}
