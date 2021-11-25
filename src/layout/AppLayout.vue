<script setup lang="ts">
import HeaderBar from './header/HeaderBar.vue'
import SideBarMenu from './sideBar/SideBarMenu.vue'
</script>

<template>
  <el-container>
    <el-aside>
      <side-bar-menu />
    </el-aside>
    <el-container>
      <el-header>
        <header-bar />
      </el-header>
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
  width: fit-content
}
.el-header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-main {
  background-color: #e2e8ec;
}
</style>
