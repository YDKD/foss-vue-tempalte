import { useCache } from '@/hooks'
import FossRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

// 可能这里会有不同的选项配置，会导出不同的请求实例
const defaultRequest = new FossRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 实例Token携带
      const { cookieCache } = useCache('cookie')
      const token = cookieCache?.getCookie('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      // console.log('实例请求拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      // console.log('实例请求错误')
      return error
    },
    reponseInterceptor: (res) => {
      // console.log('实例响应拦截')
      return res
    },
    reponseInterceptorCatch: (error) => {
      // console.log('实例响应错误')
      return error
    }
  }
})

export { defaultRequest }
