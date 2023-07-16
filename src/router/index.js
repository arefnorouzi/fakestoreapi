import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/products/ProductsView.vue'
import ProductView from '../views/products/ProductView.vue'
import AddProduct from '../views/products/AddProduct.vue'
import AllCategories from '../views/categories/AllCategories.vue'
import CategoryProducts from "../views/categories/CategoryProducts.vue";
import AllCarts from "../views/cart/AllCarts.vue";
import ShowCart from "../views/cart/ShowCart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/product/add',
      name: 'add-product',
      component: AddProduct
    },
    {
      path: '/categories',
      name: 'categories',
      component: AllCategories
    },
    {
      path: '/category/:id',
      name: 'category-products',
      component: CategoryProducts
    },
    {
      path: '/carts',
      name: 'carts',
      component: AllCarts
    },
    {
      path: '/carts/:id',
      name: 'show-cart',
      component: ShowCart
    },
  ]
})

export default router
