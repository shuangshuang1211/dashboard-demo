<script setup lang="ts" >
import { ref } from 'vue'
import { ROUTE_ITEMS } from './constant'
import MenuItem from './MenuItem.vue'
import { ArrowRight, ArrowLeft } from '@element-plus/icons'
// import { ElMenuItem } from 'element-plus'
const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
// const a = <Edit />
</script>

<template>
  <div class="container">
    <div class="menu-title">
      <h3 class="text-center">
        {{ isCollapse ? 'Shopping' : "Shopping's Home" }}
      </h3>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical"
      :default-active="$route.path"
      :collapse="isCollapse"
      text-color="#fff"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-item
        v-for="menu in ROUTE_ITEMS"
        :key="menu.name"
        :menu="menu"
      />
    </el-menu>
    <div class="icon-box">
      <el-icon
        class="right-icon"
        @click="handleCollapse"
      >
        <ArrowRight v-if="isCollapse" />
        <ArrowLeft v-if="!isCollapse" />
      </el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: inherit
}
.el-menu:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
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
.icon-box {
  width: inherit;
  height: 50px;
  position: absolute;
  top: 50%;
}
.right-icon {
  /* position: absolute; */
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  color: white
}
.right-icon:hover {
  color: #409eff
}
</style>
