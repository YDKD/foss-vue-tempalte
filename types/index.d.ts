import vue from 'vue'


interface BaseReturnType {
  code: number
  msg: string
  token: string
}

interface dataStructure {
  result?: any
  code: number
  total: number
}

// 定义全局都会使用到的类型
declare global {

  type Nullable<T> = T | null

  type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>

  type Recordable<T = any> = Record<string, T>

  interface MapStringKey {
    [key: string]: any
  }

  interface IPage {
    current: number
    pageSize: number
  }


  interface ReturnDataType extends BaseReturnType {
    data: any
    returnCode: string
    success: boolean
  }
}
