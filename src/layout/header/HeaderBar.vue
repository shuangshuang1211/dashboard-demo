<template>
  <el-space size="large">
    <!-- <ToggleSideBar /> -->
    <Breadcrumb />
  </el-space>
  <el-space size="large">
    <SearchField />
    <NotificationBtn />
    <FullScreen />
    <UserInfo />
  </el-space>
</template>

<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'
import FullScreen from './FullScreen.vue'
import NotificationBtn from './NotificationBtn.vue'
import SearchField from './SearchField.vue'
import UserInfo from './UserInfo.vue'
// import ToggleSideBar from './ToggleSideBar.vue'
</script>
<style lang="scss" scoped>
// i {
//   font-size: 19px;
//   cursor: pointer;
// }

</style>
