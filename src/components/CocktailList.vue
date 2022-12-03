<script setup lang="ts">
import CocktailCard from '@/components/CocktailCard.vue'
</script>

<template>
  <div class="layout-container">
    <div class="cards">
      <CocktailCard />
      <CocktailCard />
      <CocktailCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  container-type: inline-size;
  container-name: layout;
  margin: 0 auto;
}

.cards {
  display: grid;
  gap: 1rem;
}

@container layout (900px < width) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
