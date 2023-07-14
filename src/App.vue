<template>
    <header>
      <header-navbar />
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <!-- Your footer content here -->
    </footer>
</template>

<script>
import HeaderNavbar from "./components/HeaderNavbar.vue";
export default {
  name: 'App',
  components: {HeaderNavbar},
};
</script>

<style>
/* Your styles here */
</style>