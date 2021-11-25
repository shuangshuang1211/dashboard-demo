<script lang="ts" setup>
import { ref } from 'vue'
import TitleIcon from './TitleIcon.vue'
const props = defineProps({
  menu: {
    required: true,
    type: Object
  }
})
const menu = ref(props.menu)
</script>

<template>
  <el-sub-menu
    v-if="menu.children && menu.children.length"
    :index="menu.path"
  >
    <template #title>
      <TitleIcon :name="menu.id" />
      <span>{{ menu.name }}</span>
    </template>
    <el-menu-item
      v-for="subMenu in menu.children"
      :index="menu.path + subMenu.path"
      :key="subMenu.name"
    >
      <template #title>
        <TitleIcon :name="subMenu.id" />
        <span>{{ subMenu.name }}</span>
      </template>
    </el-menu-item>
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menu.path"
  >
    <TitleIcon :name="menu.id" />
    <template #title>
      <span>{{ menu.name }}</span>
    </template>
  </el-menu-item>
</template>
