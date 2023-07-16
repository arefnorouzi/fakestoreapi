<script>
export default{
  data(){
    return{
      base_url: 'https://fakestoreapi.com/'
    }
  },
  mounted() {

  },
  methods:{

  }
}


</script>

<template>
  <div class="row my-5 justify-content-center">

    <div class="col-lg-3 mb-3">
      <router-link to="/products" class="text-decoration-none">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>All Products</h3>
          <code>GET {{base_url}}products</code>
          <p>return all products</p>
        </div>
      </div>
      </router-link>
    </div>

    <div class="col-lg-3 mb-3">
      <router-link to="/products/1" class="text-decoration-none">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Single Product</h3>
          <code>GET {{base_url}}products/{product_id}</code>
          <p>return single product</p>
        </div>
      </div>
      </router-link>
    </div>

    <div class="col-lg-3 mb-3">
      <router-link to="/product/add" class="text-decoration-none">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Add Product</h3>
          <code>POST {{base_url}}products</code>
          <p>add new product</p>
        </div>
      </div>
      </router-link>
    </div>

    <div class="col-lg-3 mb-3">
      <router-link to="/categories" class="text-decoration-none">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>All Categories</h3>
          <code>GET {{base_url}}categories</code>
          <p>return all categories</p>
        </div>
      </div>
      </router-link>
    </div>

    <div class="col-lg-3 mb-3">
      <router-link to="/categories" class="text-decoration-none">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Get in categories</h3>
          <code>GET {{base_url}}products/category/{category_slug}}</code>
          <p>products in a specific category</p>
        </div>
      </div>
      </router-link>
    </div>

    <div class="col-lg-3 mb-3">
      <router-link to="/carts" class="text-decoration-none">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>All Carts</h3>
          <code>GET {{base_url}}carts</code>
          <p>return all carts</p>
        </div>
      </div>
      </router-link>
    </div>

    <div class="col-lg-3 mb-3">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Single Cart</h3>
          <code>GET {{base_url}}carts/{cart_id}</code>
          <p>return single cart</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 mb-3">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>User's Cart</h3>
          <code>GET {{base_url}}carts/user/{user_id}</code>
          <p>return all carts</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 mb-3">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Add To Cart</h3>
          <code>POST {{base_url}}carts</code>
          <p>add product to shopping cart</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 mb-3">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>All Users</h3>
          <code>GET {{base_url}}users</code>
          <p>return all users</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 mb-3">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Single User</h3>
          <code>GET {{base_url}}users/{user_id}</code>
          <p>return single user</p>
        </div>
      </div>
    </div>

    <div class="col-lg-3 mb-3">
      <div class="card shadow">
        <div class="card-body py-5">
          <h3>Login</h3>
          <code>POST {{base_url}}auth/login</code>
          <p>Login user</p>
        </div>
      </div>
    </div>


  </div>
</template>
