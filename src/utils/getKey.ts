export const getKey = <T, K extends keyof T>(record: T, key: K): T[K] => {
  return record[key]
}
