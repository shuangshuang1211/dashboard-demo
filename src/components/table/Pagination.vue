<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="listCount"
    :current-page="props.page"
    :page-size="props.limit"
    :page-sizes="[10, 20, 30, 40, 50, 100]"
  />
</template>
<script lang="ts" setup>
const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  limit: { // 每页大小
    type: Number,
    default: 10
  },
  listCount: {
    type: Number,
    default: 0
  },
  loadList: {
    type: Function,
    default: () => {}
  }
})
</script>
