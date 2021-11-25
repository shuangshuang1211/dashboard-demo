import { FormItemRule } from 'element-plus/es/components/form/src/form.type'

export interface UserInfo {
  id: number
  account: string
  head_pic: string
  token: string
}

export interface Menu {
  path: string
  title: string
  icon: string
  header: string
  is_header: number
  children?: Menu[]
}
export interface LoginRequest {
  account: string;
  pwd: string;
  imgcode: string;
}
export interface LoginResponse {
  token: string;
  expires_time: number;
  menus: Menu[]
  unique_auth: string[]
  user_info: UserInfo
  logo: string
  logo_square: string
  version: string
  newOrderAudioLink: string
}
export interface ListParams {
  page: number
  limit: number
  name: string
  roles: string
  status: 0 | 1 | ''
}

export interface User {
  id: number
  account: string
  head_pic: string
  pwd: string
  real_name: string
  roles: string
  last_ip: string
  last_time: number
  add_time: number
  login_count: number
  level: number
  status: number
  is_del: number
  _add_time: string
  _last_time: string
  statusLoading?: boolean
}

export interface AdminPostData {
  account: string
  conf_pwd: string
  pwd: string
  roles: number[]
  status: 0 | 1
  real_name: string
}

export interface SelectOptions {
  label: string
  value: number
}

export interface AddUserFormRule {
  title: string
  field: string
  props?: Record<string, any>
  type: string
  validate?: FormItemRule[]
  value: string
  options?: SelectOptions[]
}

export interface AddUserFormData {
  action: string
  info: string
  method: string
  status: boolean
  title: string
  rules: AddUserFormRule[]
}
