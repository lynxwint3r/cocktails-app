import type { Cocktail } from '@/core/models/Cocktail'
import { numberOfRandomCocktails } from '@/utils/numberOfRandomCocktails'
import { parseResults } from '@/utils/parseResults'
import { onMounted, ref } from 'vue'

export function useRandomCocktails(numberToGet: number) {
  const cocktails = ref<Cocktail[]>([])

  onMounted(async () => {
    const results = await numberOfRandomCocktails(numberToGet)
    cocktails.value = parseResults(results)
  })

  function getNewRandomCocktails() {
    numberOfRandomCocktails(numberToGet).then((results) => {
      cocktails.value = parseResults(results)
    })
  }

  return {
    cocktails,
    getNewRandomCocktails,
  }
}
