<template>
<center style="background-color: #AED6F1;">
  <br>
  <div class="user">
    <table class="table table-hover">

      <thead>
      <tr class="table-info">
        <th scope="col">User</th>
        <th scope="col">firstname:</th>
        <th scope="col">ID::</th>
      
      </tr>
      </thead>

      <tbody>
        <div class="">
        <tr>
          <td>{{user.firstname}}</td><td>
          <td>{{user.lastname}}</td>
          <td>{{user.id}}</td>

        </tr>
        </div>
      </tbody>

    <!-- <h1>User</h1>
    <h1>firstname: {{user.firstname}}</h1>
    <h1>lastname: {{user.lastname}}</h1>
    <h1>ID: {{user.id}}</h1> -->
    <!-- {{ count }} -->

    </table>
    <hr>
    
  </div>
</center>
</template>

<script>
export default {
    props: ['user'],
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
</script>

<style>
.user{
  width: auto;
  background-color: #ABEBC6;
  text-align: center;
  }
</style>