import { day5part1, day5part2 } from '../src/day5/index'

describe('day 5', () => {
  const exampleInput = [
    '    [D]    ',
    '[N] [C]    ',
    '[Z] [M] [P]',
    ' 1   2   3 ',
    '',
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2',
  ]
  // test('testing day 5 part 1 example', () => {
  //   const expected = 'CMZ'
  //   expect(day5part1(exampleInput)).toBe(expected)
  // })
  // test('testing day 5 part 1 for real', () => {
  //   const expected = 'GFTNRBZPF'
  //   expect(day5part1()).toBe(expected)
  // })

  test('testing day 5 part 2 example', () => {
    const expected = 'MCD'
    expect(day5part2(exampleInput)).toBe(expected)
  })
  test('testing day 5 part 2 for real', () => {
    const expected = 0
    expect(day5part2()).toBe(expected)
  })
})
