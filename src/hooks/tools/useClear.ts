import { useCache } from './useCache'

export const useClear = (): void => {
  const sessionStorageCache = useCache('storage', 'sessionStorage')
  const localStorageCache = useCache('storage', 'localStorage')
  const cookieCache = useCache('cookie')

  sessionStorageCache.storageCache?.clear()
  localStorageCache.storageCache?.clear()

  cookieCache.cookieCache?.clearCookie()
}
