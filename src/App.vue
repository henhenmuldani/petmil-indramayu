<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navigation />
  <main class="xl:max-w-6xl mx-auto pt-28">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
