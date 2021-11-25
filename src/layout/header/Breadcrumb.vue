<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const items = computed(() => {
  return router.currentRoute.value.matched.filter(sub => sub.meta.title)
})
</script>

<template>
  <el-breadcrumb
    :separator-icon="ArrowRight"
    class="header-text"
  >
    <el-breadcrumb-item
      v-for="item in items"
      :to="{ path: item.path }"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped lang="scss">
.header-text {
  font-size: 1rem;
}
</style>
