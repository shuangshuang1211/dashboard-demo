// export const RouteMap = {
//   home:
// }
export const ROUTE_ITEMS = [
  {
    id: 'home',
    name: '首页',
    path: '/',
    icon: '' // <Edit />
  },
  {
    name: '产品',
    id: 'product',
    path: '/product',
    icon: '',
    children: [
      {
        name: '产品列表',
        id: 'product_list',
        path: '/product_list',
        icon: ''
      },
      {
        name: '产品分类',
        id: 'product_classify',
        path: '/product_classify',
        icon: ''
      },
      {
        name: '产品规格',
        id: 'product_attr',
        path: '/product_attr',
        icon: ''
      },
      {
        name: '产品评论',
        id: 'product_reply',
        path: '/product_reply',
        icon: ''
      }
    ]
  },
  {
    name: '订单',
    id: 'order',
    path: '/order',
    icon: '',
    children: [
      {
        name: '订单列表',
        id: 'order_list',
        path: '/list',
        icon: ''
      },
      {
        name: '取消订单',
        id: 'order_offline',
        path: '/offline',
        icon: ''
      }
    ]
  },
  {
    name: '媒体',
    id: 'media',
    path: '/media',
    icon: ''
  },
  {
    name: '权限',
    id: 'permission',
    path: '/permission',
    icon: '',
    children: [
      {
        name: '角色',
        id: 'role',
        path: '/role',
        icon: ''
      },
      {
        name: '管理员',
        id: 'admin',
        path: '/admin'
      },
      {
        name: '规则',
        id: 'rule',
        path: '/rule',
        icon: ''
      }
    ]
  }
]
