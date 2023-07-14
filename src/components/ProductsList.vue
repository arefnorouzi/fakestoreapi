<template>
  <div v-if="products" class="row">
    <div v-for="(product, index) in products" class="col-lg-4 mb-2" :key="index">
      <div class="card shadow">
        <div class="card-body">
          <h4>{{product.title}}</h4>
          <h6>{{product.price.toLocaleString()}}</h6>
          <p><span>{{product.category}}</span></p>
          <div class="my-3">
            <router-link :to="`/products/${product.id}`" class="btn btn-success">show detail</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  name: "ProductsList"
}
</script>

<style scoped>

</style>