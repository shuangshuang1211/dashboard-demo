import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import products from './product'
import orders from './order'
import permissions from './permission'
import medias from './media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'

const pathRules: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: AppLayout,
    meta: {
      title: '首页',
      requiresAuth: true
    },
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
    name: 'login',
    path: '/login',
    component: () => import('../views/login/LoginVIew.vue')
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes: pathRules
})

router.beforeEach((to, from) => {
  nprogress.start() // 开始加载进度条
  if (to.meta.requiresAuth && !store.state.user) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath }
    }
  }
})

router.afterEach(() => {
  nprogress.done() // 进度条加载完成
})
