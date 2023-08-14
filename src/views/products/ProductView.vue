<template>

  <div class="row">
    <div v-if="product" class="col-lg-6 mb-3">
      <div class="card shadow">
        <div class="card-body">
          <h3>{{product.title}}</h3>
          <p>{{product.description}}</p>
          <div class="my-3">
            <div class="mb-2">
              <label class="form-label">Quantity</label>
              <input type="number" class="form-control w-25" v-model="qty" min="1" max="10" required>
            </div>
            <button v-if="qty > 0" class="btn btn-success" @click="addToCart">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-3">
      <div class="card shadow">
        <div class="card-body">
          <h3>Shopping Cart with <a href="https://pinia.vuejs.org" target="_blank">#Pinia</a></h3>
          <div class="my-3">
            <pre>{{cartStore.cart}}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCartStore } from '../../stores/Cart'
export default {
  name: "ProductView",
  setup(){
    const cartStore = useCartStore();
    return {cartStore};
  },
  data(){
    const route = useRoute();
    return{
      id: Number(route.params.id),
      product: null,
      qty: 1,
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
      if (this.id > 0)
      {
        this.axios.get(`https://fakestoreapi.com/products/${this.id}`).then((response) => {
          this.product = response.data;
        })
      }

    },
    addToCart()
    {
      if (this.id > 0)
      {
        this.axios.post(`https://fakestoreapi.com/carts`,{
          userId:5,
          date: new Date(),
          products:[{productId: this.id, quantity: this.qty}]
        }).then((response) => {
          this.cartStore.cart.push(response.data);
        })
      }
    }
  }
}
</script>

<style scoped>

</style>