import {round} from "./math";

describe('math', () => {
  describe('round', () => {
    test('rounds to 2 decimal places', () => {
      expect(round(1.2345, 2)).toBe(1.23)
    })
    test('rounds to 0 decimal places', () => {
      expect(round(1.2345)).toBe(1)
    })
    test('rounds to more value', () => {
      expect(round(1.8)).toBe(2)
    })
  })
})
