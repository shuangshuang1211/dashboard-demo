<script lang="ts" setup>
import { Search } from '@element-plus/icons'
import { ref } from 'vue'

const state1 = ref('')
const querySearch = (queryString: string, cb: (arg0: any[]) => void) => {
  console.log('查询')
}
const handleSelect = () => {
  console.log('选择')
}
// import { defineComponent, ref, onMounted } from 'vue'
// export default defineComponent({
//   setup () {
//     const restaurants = ref<Array<any>>([])
//     const querySearch = (queryString: string, cb: (arg0: any[]) => void) => {
//       const results = queryString
//         ? restaurants.value.filter(createFilter(queryString))
//         : restaurants.value
//       // call callback function to return suggestions
//       cb(results)
//     }
//     const createFilter = (queryString: string) => {
//       return (restaurant: { value: string }) => {
//         return (
//           restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
//           0
//         )
//       }
//     }
//     const loadAll = () => {
//       return [
//         { value: 'vue', link: 'https://github.com/vuejs/vue' },
//         { value: 'element', link: 'https://github.com/ElemeFE/element' },
//         { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
//         { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
//         { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
//         { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
//         { value: 'babel', link: 'https://github.com/babel/babel' }
//       ]
//     }
//     const handleSelect = (item: any) => {
//       console.log(item)
//     }
//     onMounted(() => {
//       restaurants.value = loadAll()
//     })
//     return {
//       restaurants,
//       state1: ref(''),
//       state2: ref(''),
//       querySearch,
//       createFilter,
//       loadAll,
//       handleSelect
//     }
//   },
//   component: {
//     Search
//   }
// })
</script>
<template>
  <el-row class="">
    <el-col :span="12">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        class="inline-input"
        placeholder="搜索..."
        size="medium"
        @select="handleSelect"
        :prefix-icon="Search"
      />
    </el-col>
  </el-row>
</template>
