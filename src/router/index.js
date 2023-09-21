import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../components/Shop.vue'
import SingleProduct from '../components/SingleProduct.vue'
import About from '../components/About.vue'
import NotFound from "../components/NotFound.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/shop', name: 'shop', component: Shop },
    { path: '/product/:id', name: 'singleProduct', component: SingleProduct },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
