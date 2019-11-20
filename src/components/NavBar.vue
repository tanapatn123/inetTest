<template>
  <div>
      <v-bottom-navigation
    v-model="bottomNav"
  >
    <router-link tag="button" to="/">
    <v-btn value="recent">
    HOME
      <v-icon>mdi-home</v-icon>
    </v-btn>
    </router-link>

    <router-link tag="button" to="/contact">
    <v-btn value="favorites">
      CONTACT
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    </router-link>

    <router-link tag="button" to="/about">
    <v-btn value="nearby">
      ABOUT
      <v-icon>mdi-folder-multiple</v-icon>
    </v-btn>
    </router-link>

  </v-bottom-navigation>
<!--   
    <br />
    <center>
      <button>
        <router-link to="/">HOME</router-link>
      </button>

      <button>
        <router-link to="/contact">CONTACT</router-link>
      </button>

      <router-link tag="button" to="/about">ABOUT</router-link>
    </center> -->
    
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>