<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import ProductsView from './ProductsView.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ref } from 'vue'
const commodities = ref([
  { id: 1, name: 'Sayur-sayuran' },
  { id: 2, name: 'Buah-buahan' },
  { id: 3, name: 'Tanaman Obat' },
  { id: 4, name: 'Tanaman Pangan' },
  { id: 5, name: 'Tanaman Hias' },
])

const products = ref([
  { id: 1, name: 'Mangga Gedong Gincu' },
  { id: 2, name: 'Selada Air' },
  { id: 3, name: 'Pakcoy' },
  { id: 4, name: 'Beras Organik' },
])
</script>

<template>
  <Hero />
  <div class="p-4 lg:p-0">
    <h2 class="mb-10 text-3xl font-semibold">Komoditas Pertanian</h2>
    <div class="grid grid-cols-2 gap-6 mb-20 md:grid-cols-5">
      <div
        v-for="commodity in commodities"
        class="rounded-lg text-center flex flex-col gap-2.5 items-center px-4 py-6 bg-gray-100"
      >
        <img width="80px" height="80px" src="/img/vegetables.svg" alt="" />
        <p class="text-2xl">{{ commodity.name }}</p>
      </div>
    </div>
  </div>
  <div class="p-4 lg:p-0">
    <h2 class="mb-10 text-3xl font-semibold">Produk Terbaru</h2>
    <ProductsView />
  </div>
</template>
