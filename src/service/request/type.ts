import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求拦截拓展拦截器
export interface FossRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  reponseInterceptor?: (res: T) => T
  reponseInterceptorCatch?: (error: any) => any
}

// 请求拦截拓展
export interface FossRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: FossRequestInterceptor<T>
  showRequestLoading?: boolean
}
