import { Period } from './Period'

describe('Period verification', () => {
  it('should not be able to create a period out of range', () => {
    expect(() => new Period(-3)).toThrow()
  })

  it('should be able to create a period inside range', () => {
    expect(() => new Period(4)).toBeTruthy()
  })
})
