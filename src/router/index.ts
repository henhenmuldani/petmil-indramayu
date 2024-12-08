import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import FarmersView from '@/views/FarmersView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import BiodataView from '@/views/BiodataView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produk',
      name: 'product',
      component: ProductsView,
    },
    {
      path: '/petani',
      name: 'farmer',
      component: FarmersView,
    },
    {
      path: '/masuk',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/daftar',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/biodata',
      name: 'biodata',
      component: BiodataView,
    },
    {
      path: '/dasbor',
      name: 'dashboard',
      component: DashboardView,
    },
  ],
})

export default router
