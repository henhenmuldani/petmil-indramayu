<template>
  <div class="border-b border-b-gray-light fixed top-0 w-full z-10 bg-white">
    <header
      class="py-4 flex justify-between items-center px-4 md:px-0 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto"
    >
      <!-- <RouterLink to="/"
      ><img src="/src/assets/logo.svg" alt="Logo" style="height: 3rem"
    /></RouterLink> -->
      <RouterLink to="/"><h1 class="text-xl font-bold">Petani Milenial Indramayu</h1></RouterLink>
      <nav class="flex space-x-4 items-center">
        <RouterLink to="/">Beranda</RouterLink>
        <RouterLink to="/produk">Produk</RouterLink>
        <RouterLink to="/petani">Petani</RouterLink>
        <RouterLink to="/masuk"><Button variant="outline">Masuk</Button></RouterLink>
        <RouterLink to="/daftar"><Button>Daftar</Button></RouterLink>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
