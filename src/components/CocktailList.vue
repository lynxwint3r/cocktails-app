<script setup lang="ts">
import CocktailCard from '@/components/CocktailCard.vue'
import { useRandomCocktails } from '@/composables/useRandomCocktails'

// Ideally, i should use a loading state variable to display some loader or things like this.
// In a real app i would use something like useHttp from vueuse hooks or vue query from tanstack which provides caching for datas
const { cocktails } = useRandomCocktails(3)
</script>

<template>
  <div class="layout-container">
    <div class="cards">
      <CocktailCard
        v-for="cocktail of cocktails"
        :key="cocktail.id"
        :cocktail="cocktail"
      />
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
  gap: 2.5rem;
}

@container layout (900px < width) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>
