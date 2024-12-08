<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <Navigation />
  <main class="mx-auto xl:max-w-6xl pt-28">
    <RouterView />
  </main>
  <Footer />
  <Toaster />
</template>

<style scoped></style>
