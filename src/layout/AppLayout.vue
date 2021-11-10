<script setup lang="ts">
import SideBar from './SideBar/SideBar.vue'
</script>

<template>
  <el-container>
    <el-aside>
      <side-bar />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #545c64;
  /* border-style: #545c64; */
}
.el-header {
  background-color: #646f79;
}
</style>
