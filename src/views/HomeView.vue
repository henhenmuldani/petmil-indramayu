<script setup lang="ts">
import Hero from '@/components/Hero.vue'
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
  <div className="p-4 lg:p-0">
    <h2 className="text-3xl font-semibold mb-10">Komoditas Pertanian</h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
      <div
        v-for="commodity in commodities"
        className="rounded-lg text-center flex flex-col gap-2.5 items-center px-4 py-6 bg-gray-100"
      >
        <img width="80px" height="80px" src="https://dummyimage.com/300" alt="" />
        <p className="text-2xl">{{ commodity.name }}</p>
      </div>
    </div>
  </div>
  <div className="p-4 lg:p-0">
    <h2 className="text-3xl font-semibold mb-10">Produk Terbaru</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
      <Card v-for="product in products">
        <CardHeader class="items-center text-center">
          <img width="80px" height="80px" src="https://dummyimage.com/300" alt="" />
          <CardTitle>{{ product.name }}</CardTitle>
          <CardDescription>Deskripsi Produk</CardDescription>
        </CardHeader>
        <CardContent>Nama Petani</CardContent>
        <CardFooter>Nomor Telepon</CardFooter>
      </Card>
    </div>
  </div>
</template>
