<template>

  <div class="row">
    <div v-if="product" class="col-lg-12">
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
        <div class="card-footer">
          {{carts}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: "ProductView",
  data(){
    const route = useRoute();
    return{
      id: Number(route.params.id),
      product: null,
      qty: 1,
      carts: []
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
          this.carts.push(response.data);
        })
      }
    }
  }
}
</script>

<style scoped>

</style>