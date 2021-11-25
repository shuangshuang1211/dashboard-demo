<template>
  <el-icon :size="props.size || 'small'">
    <MenuIcon v-if="props.name === 'home'" />
    <goods-filled v-if="props.name === 'product'" />
    <stamp v-if="props.name === 'permission'" />
    <list v-if="props.name === 'order'" />
    <Management v-if="props.name === 'media'" />
  </el-icon>
</template>

<script lang="ts" setup>
import { Menu as MenuIcon, GoodsFilled, Stamp, List, Management } from '@element-plus/icons'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#5c6b77'
  },
  size: {
    type: Number,
    default: 16
  }
})
</script>
