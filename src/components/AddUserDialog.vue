<script lang="ts" setup>

import { ElForm } from 'element-plus'
import { FormItemRule } from 'element-plus/es/components/form/src/form.type'
import { ref } from 'vue'
import CommonDialog from './CommonDialog.vue'
import { getRoles } from '@/api/user'

// const props = defineProps({
//   // onConfirm: {
//   //   type: Function as PropType<(evt: MouseEvent) => void>,
//   //   default: () => ''
//   // },
//   // onClose: {
//   //   type: Function as PropType<(evt: MouseEvent) => void>,
//   //   default: () => ''
//   // }
// })
// interface EmitsType {
//   (e: 'update:dialogVisible', value: boolean): void
// }
// const emits = defineEmits<EmitsType>()
// console.log(props, emits)

const form = ref<typeof ElForm | null>(null)
const formLoading = ref(false)
const formData = ref({
  account: '',
  pwd: '',
  conf_pwd: '',
  roles: [] as number[],
  status: 0 as 0 | 1,
  real_name: ''
})

const formRules: Record<string, FormItemRule[]> = {
  account: [
    { required: true, message: '请输入管理员账号', trigger: 'blur' }
  ],
  pwd: [
    { required: true, message: '请输入管理员密码', trigger: 'blur' }
  ],
  conf_pwd: [
    { required: true, message: '请输入确认密码', trigger: 'blur' }
  ],
  roles: [
    { required: true, message: '请选择管理员角色', trigger: 'blur' }
  ],
  real_name: [
    { required: true, message: '请输入管理员姓名', trigger: 'blur' }
  ]
}
interface SelectOptions {
  label: string
  value: number
}
const roles = ref<SelectOptions[]>([])

const loadRoles = async () => {
  const data = await getRoles()
  roles.value = data
}

const handleOpenDialog = () => {
  formLoading.value = true
  Promise.all([loadRoles()]).finally(() => {
    formLoading.value = false
  })
}

</script>

<template>
  <common-dialog>
    <el-form
      ref="form"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
      @open="handleOpenDialog"
    >
      <el-form-item
        label="管理员账号"
        prop="account"
      >
        <el-input
          v-model="formData.account"
          placeholder="请输入管理员账号"
        />
      </el-form-item>
      <el-form-item
        label="管理员密码"
        prop="pwd"
      >
        <el-input
          v-model="formData.pwd"
          type="password"
          placeholder="请输入管理员密码"
        />
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="conf_pwd"
      >
        <el-input
          v-model="formData.conf_pwd"
          type="password"
          placeholder="请输入确认密码"
        />
      </el-form-item>
      <el-form-item
        label="管理员姓名"
        prop="real_name"
      >
        <el-input
          v-model="formData.real_name"
          placeholder="请输入管理员姓名"
        />
      </el-form-item>
      <el-form-item
        label="管理员身份"
        prop="roles"
      >
        <el-select
          v-model="formData.roles"
          multiple
          placeholder="请选择管理员身份"
        >
          <el-option
            v-for="item in roles"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="formData.status">
          <el-radio
            :label="1"
          >
            开启
          </el-radio>
          <el-radio
            :label="0"
          >
            关闭
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </common-dialog>
</template>
