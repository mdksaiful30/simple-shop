<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-green-300 shadow py-3 sticky top-0 left-0 z-50">
    <section class="container mx-auto">
      <nav class="flex justify-between items-center">
        <ul class="flex gap-x-4 font-semibold text-lg text-gray-700">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/shop">Shop</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          
        </ul>
 
      </nav>
    </section>
  </header>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: red;
}
</style>
