<template>
  <div class="layout">
      <div class="list">
       
        <br />
        <h1>{{product_name}}</h1>
        <br />
        <v-btn @click="editNameProduct()">edit</v-btn><br>

        <Product v-for="item in productlist" :key="item.id" :product="item"></Product>
        <br>
      </div>
        
      <div class="create">
        <br><br><br>
        <ProductCreate></ProductCreate>

          
      </div>

  </div>
</template>

<script>
import Product from '@/components/Product'
import ProductCreate from '@/components/ProductCreate'
export default {
  computed: {
    product_name() {
      return this.$store.state.productModule.product_name;
    },
    productlist(){
      return this.$store.state.productModule.productlist;
    }
  },
  methods: {
    editNameProduct() {
      this.$store.commit("editName");
    }
  },
  mounted() {
    this.$store.commit('getProductlistproductModule')
  },
  components: {
    Product,
    ProductCreate
  }
};
</script>


<style>
.create{
    /* background-color: aquamarine; */
    width: 200;
    height: 200;
}
.layout{
  display: flex;
}
.list{
  width: 50;
}
</style>