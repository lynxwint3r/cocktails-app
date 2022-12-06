import { render, screen } from '@testing-library/vue'
import { describe, it, expect, beforeAll } from 'vitest'
import CocktailCard from '../CocktailCard.vue'
import type { Cocktail } from '@/core/models/Cocktail'

describe('CocktailCard', () => {
  const categoryText = 'A category'
  const nameText = 'A sweet cocktail'
  const urlText = 'an-awesome-url'

  const cocktail: Cocktail = {
    category: categoryText,
    id: 'blabla',
    imgUrl: urlText,
    name: nameText,
    instructions: 'lorem ipsum',
    ingredients: ['Whisky'],
    measures: ['A bottle'],
  }

  beforeAll(() => {
    render(CocktailCard, {
      props: {
        cocktail: cocktail,
      },
    })
  })

  it('should render the category with the right value', async () => {
    const cocktailCategory = await screen.findByText(categoryText)

    expect(cocktailCategory.innerHTML).toEqual(categoryText)
  })

  it('should render the name with the right value', async () => {
    const cocktailName = await screen.findByText<HTMLHeadingElement>(nameText)

    expect(cocktailName.innerHTML).toEqual(nameText)
  })

  it('should the right value in the img-url', async () => {
    const cocktailImg = await screen.findByRole<HTMLImageElement>('img')

    expect(cocktailImg.style.getPropertyValue('--img-url')).toContain(urlText)
  })

  it('should render the computed ingredients in the good format', async () => {
    const cocktailIngredient = await screen.findByText<HTMLSpanElement>(
      'A bottle Whisky'
    )

    expect(cocktailIngredient.innerHTML).toEqual('A bottle Whisky')
  })
})
