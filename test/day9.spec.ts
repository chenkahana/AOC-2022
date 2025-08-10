import { day9part1, day9part2 } from '../src/day9/index'

describe('day 9', () => {
  const exampleInput = ['R 4', 'U 4', 'L 3', 'D 1', 'R 4', 'D 1', 'L 5', 'R 2']
  test('testing day 9 part 1 example', () => {
    const expected = 13
    expect(day9part1(exampleInput)).toBe(expected)
  })

  test('testing day 9 part 1 for real', () => {
    const expected = 5981
    expect(day9part1()).toBe(expected)
  })

  const exampleInput2 = ['R 5', 'U 8', 'L 8', 'D 3', 'R 17', 'D 10', 'L 25', 'U 20']

  test('testing day 9 part 2 example', () => {
    const expected = 36
    expect(day9part2(exampleInput2)).toBe(expected)
  })

  test('testing day 9 part 2 for real', () => {
    const expected = 2352
    expect(day9part2()).toBe(expected)
  })
})
