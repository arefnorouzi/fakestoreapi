<template>
  <section v-if="this.id" class="mt-5 container-fluid">
    <h3 class="mb-5">{{categories[this.id - 1]}} Products List</h3>
    <ProductsList v-if="products" :products="products" />
  </section>
</template>

<script>
import ProductsList from "../../components/ProductsList.vue";
import { useRoute } from 'vue-router'
export default {
  components: {ProductsList},
  name: "CategoryProducts",
  data(){
    const route = useRoute();
    return{
      id: route.params.id,
      products: [],
      categories:[
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ]
    }
  },
  mounted() {
    this.getProducts();
  },
  methods:{
    getProducts(){
      alert(this.categories[this.id - 1]);
      this.axios.get(`https://fakestoreapi.com/products/category/${this.categories[this.id - 1]}`).then((response) => {
        this.products = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>