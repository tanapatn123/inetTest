<template>
  <div>
      <User v-for="(item,index) in users" :key="index" :user="item"></User>
  </div>
</template>

<script>
import User from '@/components/User'
export default {
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  components: {
    User
  }

}
</script>

<style>

</style>
