
import webCache from 'web-storage-cache'
import Cookise from '@/utils/cookies'

type StorageType = 'sessionStorage' | 'localStorage'
type CacheType = 'storage' | 'cookie'

interface CookiseType {
  setCookie: (key: string, value: string, time?: number | Date) => void
  getCookie: (param: string) => string | undefined
  clearCookie: () => void
}

const cookieCache: CookiseType = Cookise

export const useCache = (
  cacheType: CacheType = 'storage',
  storageType?: StorageType
) => {
  if (cacheType == 'storage') {
    const storage = (type: StorageType = 'sessionStorage'): webCache => {
      return new webCache({
        storage: type
      })
    }
    const storageCache = storage(storageType)
    // the reason is to for future expansion why export the object not use defalut
    return {
      storageCache
    }
  } else {
    return {
      cookieCache
    }
  }
}
