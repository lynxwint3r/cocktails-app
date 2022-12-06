import { describe, it, expect, vi, beforeEach } from 'vitest'
import { numberOfRandomCocktails } from './numberOfRandomCocktails'
import { fetchRandomCocktail } from '@/services/fetchRandomCocktail'

describe('numberOfRandomCocktails function', () => {
  const successResponse = 'API is working'
  beforeEach(() => {
    const jsonMock = () => Promise.resolve(successResponse)
    vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: jsonMock,
      } as Response)
    )
  })

  it('should an Array of 3', async () => {
    const result = await numberOfRandomCocktails(3)

    expect(result.length).toBe(3)
    expect(result.at(1)).toBe(successResponse)
  })

  it('should an Array of 6', async () => {
    const result = await numberOfRandomCocktails(6)

    expect(result.length).toBe(6)
  })
})
