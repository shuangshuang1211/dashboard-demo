<template>
  <div class="menu-title">
    <h3 class="text-center">
      Shopping's Home
    </h3>
  </div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    :default-active="$route.path"
    text-color="#fff"
    router
    @open="handleOpen"
    @close="handleClose"
  >
    <div
      v-for="menu in ROUTE_ITEMS"
      :key="menu.name"
    >
      <el-sub-menu
        v-if="menu.children && menu.children.length"
        :index="menu.path"
      >
        <template #title>
          <el-icon>{{ menu.icon }}</el-icon>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="subMenu in menu.children"
          :index="menu.path + subMenu.path"
          :key="subMenu.name"
        >
          <template #title>
            <el-icon><setting /></el-icon>
            <span>{{ subMenu.name }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item
        v-if="!menu.children || !menu.children.length"
        :index="menu.path"
      >
        <template #title>
          <el-icon>{{ menu.icon }}</el-icon>
          <span>{{ menu.name }}</span>
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { ROUTE_ITEMS } from './constant.ts'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical {
  width: inherit;
  border-right: 1px;
}
.menu-title {
  padding: 8px;
  color: white;
}
.text-center {
  text-align: center;
}
</style>
