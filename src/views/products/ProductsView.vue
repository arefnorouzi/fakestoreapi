<template>
 <section class="mt-5">
   <ProductsList :products="products" />
 </section>
</template>

<script>
import ProductsList from "../../components/ProductsList.vue";
export default {
  name: "products",
  components: {ProductsList},
  data(){
    return{
      products: []
    }
  },
  mounted() {
    this.getProducts();
  },
  methods:{
    getProducts(){
      this.axios.get('https://fakestoreapi.com/products').then((response) => {
        this.products = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>