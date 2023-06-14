let BASE_URL: string = ''
const TIMEOUT: number = 10000

if (import.meta.env.NODE_ENV == 'develoment') {
  BASE_URL = import.meta.env.VITE_REQUEST_URL
}
export { BASE_URL, TIMEOUT }
