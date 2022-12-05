import { fetchRandomCocktail } from '@/services/fetchRandomCocktail'

export async function numberOfRandomCocktails(numberOfRandoms: number) {
  const results = await Promise.all(
    [...new Array(numberOfRandoms)].map(() => fetchRandomCocktail())
  )

  return results
}
