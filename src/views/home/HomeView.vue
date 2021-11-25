<template>
  <el-row>
    <el-col
      v-for="(o, index) in 4"
      :key="o"
      :span="8"
      :offset="index === 1 || index === 3 ? 2 : 0"
    >
      <card-container>
        <template #header>
          {{ o === 1 ? '销售额' : '用户访问量' }}
        </template>
        <h5>100.9</h5>
      </card-container>
    </el-col>
  </el-row>
</template>

<script lang="tsx" setup>
// import { useStore } from '@/store'
// import { ref } from 'vue'
import CardContainer from '@/components/CardContainer.vue'

// const timeValue = ref('')

// const store = useStore()
// console.log('store', store)

</script>
