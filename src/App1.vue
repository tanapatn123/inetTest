<template>
  <div>
    <h1>hello</h1>
    <h1>{{count}}</h1>
    <h1 v-if="count==3">{{count}}</h1>

    firstname: <input type="text" v-model="firstname">
    lastname: <input type="text" v-model="lastname">

    <br/><bt/>
    <button @click="addCount()">click</button>

    <h2>firstname: {{firstname}}</h2>
    <h2>lastname: {{lastname}}</h2>

    <User v-for="item in userlist" :key="item" :user="item"></User>

    <h1 v-for="(item,index) in listname" :key="item">{{index}}{{item}}</h1>
    {{listname}}

    

  </div>
</template>

<script>
import User from './components/User'
export default {
  data(){
    return{
      count: 1,
      firstname: "tanapat",
      lastname: "thongtammachad",
      userlist: [
        {
          firstname: "nook",
          lastname: "tanapat",
          ID: 1111      
        },
        {
          firstname: "tanapatnook",
          lastname: "thong",
          ID: 22222
        },
        {
          firstname: "nookkkk3",
          lastname: "thongtammachad",
          ID: 33333
        },
        {
          firstname: "tanapat4",
          lastname: "thongtammachad",
          ID: 4444
        },
        {
          firstname: "tanapat555",
          lastname: "thongtammachad",
          ID: 555
        }
      ],
      user: {
        firstname: "tanapat",
        lastname: "thongtammachad",
        ID: 62947
      },
      listname: ['nook', 'champ', 'hack']
    }
  },
  methods: {
    addCount(){
      this.count++,
      this.$store.commit('addCount')
    }
  },
  components: {
    User
  }

}
</script>

<style>

</style>