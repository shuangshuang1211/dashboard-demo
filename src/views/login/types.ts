import { ElForm } from 'element-plus'

// export interface UserLoginForm extends InstanceType<typeof ElForm> {}
export type UserLoginForm = InstanceType<typeof ElForm>

export interface LoginData {
  username: string;
  password: string
  captcha: string;
}
