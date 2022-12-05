<script setup lang="ts">
import CocktailCard from '@/components/CocktailCard.vue'
import { cocktailDTO } from '@/core/DTOs/cocktailDTO'
import type { Cocktail } from '@/core/models/Cocktail'
import { fetchRandomCocktail } from '@/services/fetchRandomCocktail'
import { ref } from 'vue'

const cocktails = ref<Cocktail[]>()

// TODO: use a composable to do this stuff in a better way
const cocktail = ref<Cocktail>()
async function getRandomCocktails() {
  const numberOfRandoms = 3
  const results = await Promise.all(
    [...new Array(numberOfRandoms)].map(() => fetchRandomCocktail())
  )

  const formattedCocktails = results.map((result) => cocktailDTO(result))
  cocktails.value = formattedCocktails
}

getRandomCocktails()
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
