<template>
  <section class="mt-5">
    <div class="row my-5 justify-content-center">

      <div v-if="cart" class="col-lg-3 mb-3">
        <div class="card shadow">
          <div class="card-body py-5">
            <h3>Order #{{cart.id}}</h3>
            <h5>User: #{{cart.userId}}</h5>
            <div class="my-2" v-for="(item, item_index) in cart.products" :key="item_index">
              <p>product: #{{item.productId}} | quantity: {{item.quantity}}</p>
            </div>

            <button class="btn btn-danger" @click="deleteCart">Delete Cart</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "ShowCart",
  data(){
    const route = useRoute();
    return{
      id: Number(route.params.id),
      cart: []
    }
  },
  mounted() {
    this.getProducts();
  },
  methods:{
    getProducts(){
      this.axios.get(`https://fakestoreapi.com/carts/${this.id}`).then((response) => {
        this.cart = response.data;
      })
    },
    deleteCart(){
      this.axios.delete(`https://fakestoreapi.com/carts/${this.id}`).then((response) => {
        alert('Cart Deleted');
        this.$router.push({name: 'carts'});
      })
    }
  }
}
</script>

<style scoped>

</style>