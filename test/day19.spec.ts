import { day19part1, day19part2 } from '../src/day19/index'

describe('day 19', () => {
  const exampleInput = []
  test('testing day 19 part 1 example', () => {
    const expected = 19
    expect(day19part1(exampleInput)).toBe(expected)
  })

  test('testing day 19 part 1 for real', () => {
    const expected = 0
    expect(day19part1()).toBe(expected)
  })

  test('testing day 19 part 2 example', () => {
    const expected = 0
    expect(day19part2(exampleInput)).toBe(expected)
  })


  test('testing day 19 part 2 for real', () => {
    const expected = 0
    expect(day19part2()).toBe(expected)
  })
})
