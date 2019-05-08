<template>
  <div>
    <div>Profile</div>
    <div>{{profile}}</div>
  </div>
</template>
<script>
export default {
  computed: {
    profile() {
      return this.$store.state.profile
    }
  },
  mounted () {
    this.$store.dispatch('getProfile')
  }
}
</script>

