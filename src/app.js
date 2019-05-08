import axios from 'axios'
const http = axios.create({
  baseURL: '/'
})
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
      <div>post: {this.post.title }</div>
    )
  }
}
