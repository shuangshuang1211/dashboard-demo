import { router } from '@/router/'
import { store } from '@/store'
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

request.interceptors.request.use((config) => {
  const user = store.state.user
  if (user?.token) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

let isRequiredAuth = false
request.interceptors.response.use((res) => {
  const status = res.data.status
  if (!status || status === 200) {
    return res
  }
  // token 过期
  if (status === 410000) {
    if (isRequiredAuth) return Promise.reject(res)
    isRequiredAuth = true
    ElMessageBox.confirm('身份验证已过期，是否重新登录？', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      store.commit('setUser', null)
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath
        }
      })
    }).finally(() => {
      isRequiredAuth = false
    })
    return Promise.reject(res)
  }
  ElMessage.error(res.data.msg || '请求错误,稍后重试')
  return Promise.reject(res)
}, (error) => {
  console.error('网络请求错误')
  return Promise.reject(error.message)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => (res.data.data || res.data) as T)
}
