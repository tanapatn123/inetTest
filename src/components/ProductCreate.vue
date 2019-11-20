<template>
  <div>
    <br />
    <br />
    <v-text-field label="Product Name" v-model="product_name" required></v-text-field>
    <br />
    <v-text-field label="Description" v-model="product_description" required></v-text-field>
    <br />
    <v-btn @click="createProduct">ADD</v-btn>
  </div>
</template>

<script>
export default {
   methods:{ 
       createProduct(){
           var product = {
               product_name: this.product_name,
               product_description: this.product_description
           }
      this.$store.commit( 'createProductlistproductModule' ,product)

    }
   }
}
</script>

<style>
</style>