<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <div className="flex">
      <div class="flex-1 flex flex-col justify-center mx-auto">
        <h1 className="font-medium text-4xl">Tempatnya petani milenial Indramayu</h1>
        <p className="text-xl mt-4">
          Bergabunglah dan temukan petani milenial lainnya untuk saling berbagi ilmu dan manfaat.
        </p>

        <RouterLink to="#" class="mt-4"
          ><Button class="w-40 h-10 text-lg">Daftar</Button></RouterLink
        >
      </div>
      <div className="w-full flex-1 flex items-center justify-center mx-auto">
        <img src="/src/assets/img/farmer.png" alt="farmer" className="w-full" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
