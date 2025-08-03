import { day7part1, day7part2 } from '../src/day7/index'

describe('day 7', () => {
  const exampleInput = [
    '$ cd /',
    '$ ls',
    'dir a',
    '14848514 b.txt',
    '8504156 c.dat',
    'dir d',
    '$ cd a',
    '$ ls',
    'dir e',
    '29116 f',
    '2557 g',
    '62596 h.lst',
    '$ cd e',
    '$ ls',
    '584 i',
    '$ cd ..',
    '$ cd ..',
    '$ cd d',
    '$ ls',
    '4060174 j',
    '8033020 d.log',
    '5626152 d.ext',
    '7214296 k',
  ]
  // test('testing day 7 part 1 example', () => {
  //   const expected = 95437
  //   expect(day7part1(exampleInput)).toBe(expected)
  // })

  // test('testing day 7 part 1 for real', () => {
  //   const expected = 0
  //   expect(day7part1()).toBe(expected)
  // })

  test('testing day 7 part 2 example', () => {
    const expected = 24933642
    expect(day7part2(exampleInput)).toBe(expected)
  })

  test('testing day 7 part 2 for real', () => {
    const expected = 0
    expect(day7part2()).toBe(expected)
  })
})
