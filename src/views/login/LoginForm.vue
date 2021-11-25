<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { LoginData, UserLoginForm } from './types'
import { User, Lock, Key } from '@element-plus/icons'
import { getCaptcha, loginUser } from '@/api/login'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { store } from '@/store'

const router = useRouter()
const route = useRoute()

const user = reactive<LoginData>({
  username: 'admin',
  password: '123456',
  captcha: ''
})
const ruleForm = ref<UserLoginForm | null>(null)
const captchaSrc = ref('')
const isValid = ref<boolean | undefined>(true)
const loading = ref(false)
const rules = {
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'change'
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'change'
    },
    {
      min: 6,
      max: 15,
      message: 'Length should be 6 to 15',
      trigger: 'blur'
    }
  ],
  captcha: [{ required: true, message: '请输入验证码', trigger: 'change' }]
}
const handleSubmit = async () => {
  await ruleForm.value?.validate((res) => {
    isValid.value = res
  })
  if (!isValid.value) {
    return
  }
  loading.value = true
  const data = await loginUser({
    account: user.username,
    pwd: user.password,
    imgcode: user.captcha
  }).finally(() => {
    loading.value = false
  })
  console.log('loginUser', data)

  if (!data) return
  ElMessage.success('登录成功')
  store.commit('setUser', { ...data.user_info, token: data.token })
  let redirect = route.query.redirect
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}
const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}

onMounted(() => {
  loadCaptcha()
})
</script>
<template>
  <el-form
    ref="ruleForm"
    :model="user"
    :rules="rules"
    size="medium"
    class="login-form"
    @submit.prevent="handleSubmit"
  >
    <div class="login-form__header">
      <img
        class="login-logo"
        src="@/assets/login_logo.png"
        alt="购物之家"
      >
    </div>
    <el-form-item
      prop="username"
    >
      <el-input v-model="user.username">
        <template #prefix>
          <el-icon class="el-input__icon">
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item
      prop="password"
    >
      <el-input v-model="user.password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item
      prop="captcha"
      class="imgcode-wrap"
    >
      <div class="flexBox">
        <el-input v-model="user.captcha">
          <template #prefix>
            <el-icon class="el-input__icon">
              <Key />
            </el-icon>
          </template>
        </el-input>
        <img
          class="imgcode"
          alt="验证码"
          :src="captchaSrc"
          @click="loadCaptcha"
        >
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-button"
        :loading="loading"
        native-type="submit"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
    .flexBox {
      display: flex;
    }
  }
}
</style>
