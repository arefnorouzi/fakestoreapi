<template>
  <section class="mt-5">
    <div class="row my-5 justify-content-center">

      <div v-for="(category, index) in categories" :key="index" class="col-lg-3 mb-3">
        <div class="card shadow">
          <div class="card-body py-5">
            <h3>{{category}}</h3>
            <router-link class="btn btn-primary" :to="`/category/${index + 1}`">show products</router-link>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "AllCategories",
  data(){
    return{
      categories: []
    }
  },
  mounted() {
    this.getProducts();
  },
  methods:{
    getProducts(){
      this.axios.get('https://fakestoreapi.com/products/categories').then((response) => {
        this.categories = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>