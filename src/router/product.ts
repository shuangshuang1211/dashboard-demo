
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: () => import('@/views/product/ListView.vue')
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      component: () => import('@/views/product/ClassifyView.vue')
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: () => import('@/views/product/AttrView.vue')
    },
    {
      path: 'product_reply',
      name: 'product_reply',
      component: () => import('@/views/product/ReplyView.vue')
    }
  ]
}

export default routes
