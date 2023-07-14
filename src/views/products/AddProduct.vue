<template>

  <div class="row justify-content-center my-5">
    <div class="col-lg-6">
      <div class="card shadow">
        <div class="card-body">
          <h3>Add New Product</h3>
          <p>You ca add new product via below form</p>
          <div class="my-3">
            <div class="mb-2">
              <label class="form-label">Title</label>
              <input type="text" class="form-control" v-model="title" minlength="5" maxlength="100" required>
            </div>
            <div class="mb-2">
              <label class="form-label">Price</label>
              <input type="number" class="form-control" v-model="price" min="1" max="1000" required>
            </div>
            <div class="mb-2">
              <label class="form-label">Category</label>
              <select v-model="category" class="form-select">
                <option v-for="cat in categories" :value="cat">{{cat}}</option>
              </select>
            </div>
            <div class="mb-2">
              <label class="form-label">Description</label>
              <textarea  class="form-control" rows="4" v-model="description" minlength="1" maxlength="1000" required></textarea>
            </div>
            <button class="btn btn-success" @click="addProduct">Submit Form</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data(){
    return{
      product: null,
      title: '',
      category: '',
      description: '',
      price: 10,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      categories:  [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ]
    }
  },
  methods:{
    addProduct()
    {
      if (this.title.length > 5)
      {
        this.axios.post(`https://fakestoreapi.com/products`,{
          title: this.title,
          price: this.price,
          description: this.description,
          image: this.image,
          category: this.category
        }).then((response) => {
          alert(response.data);
        })
      }
    }
  }
}
</script>

<style scoped>

</style>