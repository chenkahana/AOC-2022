import { getLinesFromInput } from '../utils'

const insertToFileSystem = (
  path: string[],
  fileSystem: object,
  file: { name: string; type: string; size?: number },
) => {
  const { name, ...rest } = file
  if (path.length === 0) {
    fileSystem[name] = { ...rest }
  }
  const dir = path.reduce((acc, curr) => {
    acc = acc[curr]
    return acc
  }, fileSystem)
  dir[name] = { ...rest }
}

const getFileSystemFromCommands = (input: string[]) => {
  const fileSystem = {}
  const currentPath = []
  for (let i = 1; i < input.length; i++) {
    const line = input[i]
    if (line.startsWith('$')) {
      const command = line.split(' ')[1]
      if (command === 'cd') {
        const path = line.split(' ')[2]
        if (path === '..') {
          currentPath.pop()
        } else {
          currentPath.push(path)
        }
      }
    } else {
      const splitted = line.split(' ')
      const file = {
        name: splitted[1],
        type: 'dir',
      }
      if (splitted[0] !== 'dir') {
        file['type'] = 'file'
        file['size'] = Number(splitted[0])
      }

      insertToFileSystem(currentPath, fileSystem, file)
    }
  }
  return fileSystem
}

let dirToSizeMap = []

const getSizeOfDir = (fileSystem: object, currentPath: string[]) => {
  const currentDir =
    currentPath.length > 0
      ? fileSystem
      : currentPath.reduce((acc, curr) => {
          acc = fileSystem[curr]
          return acc
        }, fileSystem)
  return Object.keys(currentDir).reduce((acc, curr) => {
    if (curr === 'type') return acc
    const temp = currentDir[`${curr}`]
    if (temp.type === 'dir') {
      const size = getSizeOfDir(temp, [...currentPath, curr])
      acc += size
      temp.size = size
      dirToSizeMap.push({ key: curr, size })
    } else {
      acc += temp.size
    }
    return acc
  }, 0)
}

export const day7part1 = (input?: string[]) => {
  const lines = getLinesFromInput('./day7/input.txt', input)
  const fileSystem = getFileSystemFromCommands(lines)
  fileSystem['size'] = getSizeOfDir(fileSystem, [])

  return getSumOfDirSizesUpTo(fileSystem, 100000)
}

const getSumOfDirSizesUpTo = (fileSystem: object, upToNumber: number) => {
  return Object.keys(fileSystem).reduce((acc, key) => {
    const temp = fileSystem[key]
    if (temp.type === 'dir') {
      if (temp.size <= upToNumber) {
        acc += temp.size
      }
      acc += getSumOfDirSizesUpTo(temp, upToNumber)
    }
    return acc
  }, 0)
}

let pathToPotentialDir = []

export const day7part2 = (input?: string[]) => {
  const lines = getLinesFromInput('./day7/input.txt', input)
  pathToPotentialDir = []
  dirToSizeMap = []

  const fileSystem = getFileSystemFromCommands(lines)
  fileSystem['size'] = getSizeOfDir(fileSystem, [])

  //total size is 70000000
  //total size is 10038718
  // need to have 30000000 available

  const neededSpaceToFreeUp = 30000000 - (70000000 - fileSystem['size'])
  ''.slice()
  const potentialDirsAndSizes = dirToSizeMap
    .filter(({ _key, size }) => size >= neededSpaceToFreeUp)
    .sort((a, b) => a.size - b.size)

  return potentialDirsAndSizes[0].size
}
