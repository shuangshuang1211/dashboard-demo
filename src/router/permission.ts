
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  children: [
    {
      path: 'role',
      name: 'permission-role',
      component: () => import('@/views/permission/RoleView.vue')
    },
    {
      path: 'admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/adminView.vue')
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/RuleView.vue')
    }
  ]
}

export default routes
