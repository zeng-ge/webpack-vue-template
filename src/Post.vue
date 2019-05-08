<template>
  <div>
    <div>Post</div>
    <div>{{post}}</div>
  </div>
</template>
<script>
export default {
  computed: {
    post () {
      return this.$store.state.post
    }
  },
  mounted () {
    this.$store.dispatch('getPost')
  }
}
</script>

