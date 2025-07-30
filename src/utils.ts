import { readFileSync } from 'fs'
import { join } from 'path'

export const getLinesFromInput = (path: string, input?: string[]) => {
  if (input) return input
  const fullPath = join(process.cwd(), 'src', path)
  const fileContent = readFileSync(fullPath, 'utf8')
  return fileContent.split(/\r?\n/)
}
