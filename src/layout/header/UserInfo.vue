<script lang="ts" setup>
import { logoutUser } from '@/api/login'
import { store } from '@/store'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleLogou = () => {
  ElMessageBox.confirm('确认退出当前用户？', '退出登录', {
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(async () => {
    await logoutUser()
    store.commit('setUser', null)
    ElMessage({
      type: 'success',
      message: '退出成功!'
    })
    router.push({
      name: 'login'
    })
  }).catch((errorReason) => {
    if (errorReason === 'cancel') {
      ElMessage({
        type: 'info',
        message: '已取消退出!'
      })
    }
  })
}
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link btn-hover">
      {{ $store.state.user?.account }}
      <i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogou">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
