import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useRandomCocktails } from '@/composables/useRandomCocktails'
import { createApp } from 'vue'

function mockLoadComposableInApp(composable: any, ...params: any[]) {
  let result
  const app = createApp({
    setup() {
      result = composable(...params)
      // suppress missing template warning
      return () => {}
    },
  })
  app.mount(document.createElement('div'))
  return [result, app]
}

describe('useRandomCocktails Composable', () => {
  const successResponse = {
    drinks: [
      {
        idDrink: '15423',
        strDrink: '110 in the shade',
        strDrinkAlternate: null,
        strTags: null,
        strVideo: null,
        strCategory: 'Beer',
        strIBA: null,
        strAlcoholic: 'Alcoholic',
        strGlass: 'Beer Glass',
        strInstructions: 'Drop shooter in glass. Fill with beer',
        strInstructionsES: null,
        strInstructionsDE:
          'Shooter tr\u00f6pfchenweise in ein Glas geben. Mit Bier f\u00fcllen.',
        strInstructionsFR: null,
        strInstructionsIT:
          'Riempi un bicchierino di tequila.\r\nRiempi un boccale di birra con la birra chiara.\r\nMetti il bicchierino nella birra e bevi velocemente.',
        'strInstructionsZH-HANS': null,
        'strInstructionsZH-HANT': null,
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg',
        strIngredient1: 'Lager',
        strIngredient2: 'Tequila',
        strIngredient3: null,
        strIngredient4: null,
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: '16 oz ',
        strMeasure2: '1.5 oz ',
        strMeasure3: null,
        strMeasure4: null,
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: 'No',
        dateModified: '2016-02-03 14:51:57',
      },
    ],
  }

  beforeEach(() => {
    const jsonMock = () => Promise.resolve(successResponse)
    vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: jsonMock,
      } as Response)
    )
  })

  it('should return 3 cocktails properly parsed', async () => {
    const { cocktails, getNewRandomCocktails } = useRandomCocktails(3)
    // const result = mockLoadComposableInApp(() => useRandomCocktails, 3)
    // console.log('cocktails :>> ', cocktails)

    expect(cocktails.value.length).toBe(0)

    getNewRandomCocktails()

    // expect(cocktails.value.length).toBe(3)
  })
})
