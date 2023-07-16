<template>
  <section class="mt-5">
    <div class="row my-5 justify-content-center">

      <div v-for="(cart, index) in carts" :key="index" class="col-lg-3 mb-3">
        <div class="card shadow">
          <div class="card-body py-5">
            <h3>Order #{{cart.id}}</h3>
            <h5>User: #{{cart.userId}}</h5>
            <div class="my-2" v-for="(item, item_index) in cart.products" :key="item_index">
              <p>product: #{{item.productId}} | quantity: {{item.quantity}}</p>
            </div>
            <router-link :to="`/carts/${cart.id}`"  class="btn btn-primary mt-2">show order</router-link>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "AllCarts",
  data(){
    return{
      carts: []
    }
  },
  mounted() {
    this.getProducts();
  },
  methods:{
    getProducts(){
      this.axios.get('https://fakestoreapi.com/carts').then((response) => {
        this.carts = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>