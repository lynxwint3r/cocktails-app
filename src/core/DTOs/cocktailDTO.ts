import type {
  Cocktail,
  CocktailResponse,
  DrinkResponse,
} from '../models/Cocktail'

const REGEX_INGREDIENTS = /strIngredient/
const REGEX_MEASURE = /strMeasure/

export function groupValuesToArrayBasedOnKeys(
  datas: DrinkResponse,
  regex: RegExp
) {
  const values: string[] = []
  for (const key in datas) {
    if (regex.test(key)) {
      const value = (datas as { [key: string]: string | null })[key]

      if (value) values.push(value)
    }
  }

  return values
}

export function cocktailDTO({ drinks }: CocktailResponse): Cocktail {
  const [datas] = drinks
  const ingredients = groupValuesToArrayBasedOnKeys(datas, REGEX_INGREDIENTS)
  const measures = groupValuesToArrayBasedOnKeys(datas, REGEX_MEASURE)
  return {
    id: datas.idDrink,
    name: datas.strDrink,
    imgUrl: datas.strDrinkThumb,
    category: datas.strCategory,
    instructions: datas.strInstructions,
    ingredients,
    measures,
  }
}
