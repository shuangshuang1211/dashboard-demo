import request from '@/utils/request'
import { LoginRequest } from './types'

export const loginUser = (data: LoginRequest) => {
  return request({
    method: 'POST',
    url: '/login',
    data
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const logoutUser = () => {
  return request({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
