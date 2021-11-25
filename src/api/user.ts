import request from '@/utils/request'
import { AddUserFormData, ListParams, User } from './types'

export const getUsers = (params: ListParams) => {
  return request<{
    count: number
    list: User[]
  }>({
    method: 'GET',
    url: '/setting/admin',
    params
  })
}

export const updateUserStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/setting/set_status/${id}/${status}`
  })
}

export const getRoles = () => {
  return request<AddUserFormData>({
    method: 'GET',
    url: '/setting/admin/create'
  }).then(data => {
    const roles = data.rules.find(item => item.field === 'roles')
    if (roles && roles.options) {
      return roles.options
    }
    return []
  })
}
