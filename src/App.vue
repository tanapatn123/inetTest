<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>

    


  </div>
</template>

<script>
import NavBar from './components/NavBar'
// import NavBar from './layout/Login'
export default {
  components: {
    NavBar
  }
}
</script>

<style>

</style>