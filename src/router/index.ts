import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import products from './product'
import orders from './order'
import permissions from './permission'
import medias from './media'

const pathRules: RouteRecordRaw[] = [
  {
    name: 'layout',
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/HomeView.vue')
      },
      products,
      orders,
      permissions,
      medias
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/login/LoginVIew.vue')
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes: pathRules
})
