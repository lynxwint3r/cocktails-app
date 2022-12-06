import { describe, it, expect, vi } from 'vitest'
import { fetchRandomCocktail } from './fetchRandomCocktail'

describe('fetchRandomCocktail function', () => {
  it('should call the fetch method', () => {
    const spyFetch = vi.spyOn(global, 'fetch')
    fetchRandomCocktail()
    expect(spyFetch).toHaveBeenCalled()
  })

  it('should return the correct value from api ', async () => {
    const successResponse = 'API is working'
    const jsonMock = () => Promise.resolve(successResponse)
    vi.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        json: jsonMock,
      } as Response)
    )
    const result = await fetchRandomCocktail()
    expect(result).toEqual(successResponse)
  })

  it('should throw an Error if reject ', async () => {
    vi.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.reject('It is an error')
    )

    try {
      await fetchRandomCocktail()
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect((error as Error).message).toBe(
        'An error occured while fetching a random cocktail'
      )
    }
  })
})
