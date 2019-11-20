import axios from 'axios'

const productModule = {
    state: {
        product_name: 'banana',
        productlist: []
    },
    mutations: {
        editName(state){
        state.product_name = 'apple'    
        },



        getProductlistproductModule(state){
            axios.get('http://192.168.75.24:8000/api/products/').then(response => {
      state.productlist = response.data});
        },
        updateProductlistproductModule(state,product){
            var api = "http://192.168.75.24:8000/api/products/" + product.id
            axios.put(api,product).then(response => {
               alert(response.data)
            });
        },
        createProductlistproductModule(state,product){
            var api ="http://192.168.75.24:8000/api/products/"
            axios.post(api,product).then(response => {
                this.commit( 'createProductlistproductModule')
                alert(response.data)
            });
        }
    }
}

export default productModule