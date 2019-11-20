<template>


  <div class="user2">
     
    <h1>- Product -</h1><br>
    <h1>NAME:: {{product.product_name}}</h1><br>
    <h1>Description:: {{product.product_description}}</h1><br>
    <h1>Time:: {{product.created_at}}</h1>
    <!-- {{ count }} -->

    <v-btn @click="edit=!edit" >Update</v-btn><br><br>
    <v-btn >Delete</v-btn>

<v-card v-if="edit"><br>
    <v-text-field v-model="product.product_name" label=" NAME" required></v-text-field><br>
    
     <v-text-field v-model="product.product_description" label=" Description" required></v-text-field><br>
    <v-btn @click="updateProduct">submit</v-btn>
</v-card>
    
  </div>

</template>

<script>


export default {
  data(){
    return{
      edit : false
    }
  },
  props: ['product'],
  methods: {
    updateProduct(){
      this.$store.commit( 'updateProductlistproductModule' , this.product)

    }

  }
    
}
</script>

<style>
.user2{
  width: 500px;
  background-color: slategrey;
  text-align: center;
  }
</style>