<template>
  <div>
    <center><br><br>
      <h1>CONTACT</h1>
      <br>
      

      <v-text-field v-model="firstname" label="firstname" required></v-text-field><br>
      <v-text-field v-model="lastname" label="lastname" required></v-text-field><br>
      <v-text-field v-model="id" label="ID" required></v-text-field><br>

      <br/><br/>
      <v-btn tag="button" @click="addUser()">click</v-btn>
    
    </center>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      id: ""
    }
  },
  methods: {
    addUser() {
      var user = {
        firstname: this.firstname,
        lastname: this.lastname,
        id: this.id
      }
      this.$store.commit("addUser", user);

      this.firstname = "",
      this.lastname = "",
      this.id = ""
    }

    
  }

}
</script>

<style>

</style>