<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <div class="flex">
      <div class="flex flex-col justify-center flex-1 mx-auto">
        <h1 class="text-4xl font-medium">Tempatnya petani milenial Indramayu</h1>
        <p class="mt-4 text-xl">
          Bergabunglah dan temukan petani milenial lainnya untuk saling berbagi ilmu dan manfaat.
        </p>

        <RouterLink to="#" class="mt-4"
          ><Button class="w-40 h-10 text-lg">Daftar</Button></RouterLink
        >
      </div>
      <div class="flex items-center justify-center flex-1 w-full mx-auto">
        <img src="/img/farmer.png" alt="farmer" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
