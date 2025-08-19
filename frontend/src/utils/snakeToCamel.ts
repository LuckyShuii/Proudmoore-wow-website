import { objectToCaseType } from '@/utils/objectToCaseType'

export const snakeToCamel = (element: any[] | { [key: string]: any }): any | any[] | { [key: string]: any } => {
  return objectToCaseType(snakeStrToCamelStr, element)
}

export const snakeStrToCamelStr = (value: string): string => {
  return value[0] + value.slice(1).split("_").map((v, idx) => idx === 0 ? v : `${v[0].toUpperCase()}${v.slice(1)}`).join("")
}