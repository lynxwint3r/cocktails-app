import type { CocktailResponse } from "@/core/models/Cocktail"

export async function fetchRandomCocktail(): Promise<CocktailResponse> {
  try {
    const randomCocktail = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    )
    return await randomCocktail.json()
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error('An error occured while fetching a random cocktail')
  }
}
