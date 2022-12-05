import { cocktailDTO } from '@/core/DTOs/cocktailDTO'
import type { CocktailResponse } from '@/core/models/Cocktail'

export function parseResults(results: CocktailResponse[]) {
  return results.map((result) => cocktailDTO(result))
}
