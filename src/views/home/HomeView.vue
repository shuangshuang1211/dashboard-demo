<template>
  <div class="box">
    <p>test scss</p>
  </div>
  <el-button type="success">
    Success
  </el-button>
  <el-date-picker
    v-model="timeValue"
    type="date"
    placeholder="选择日期"
  />
  <h1>首页</h1>
  <p>{{ store.state.count }} -- {{ store.state.mes }}</p>
</template>

<script lang="tsx" setup>
import { useStore } from '@/store'
import { ref } from 'vue'

const timeValue = ref('')

const store = useStore()

</script>
