export const ROUTE_ITEMS = [
  {
    name: '首页',
    path: '/',
    icon: ''
  },
  {
    name: '产品',
    path: '/product',
    icon: '',
    children: [
      {
        name: '产品列表',
        path: '/product_list',
        icon: ''
      },
      {
        name: '产品分类',
        path: '/product_classify',
        icon: ''
      },
      {
        name: '产品规格',
        path: '/product_attr',
        icon: ''
      },
      {
        name: '产品评论',
        path: '/product_reply',
        icon: ''
      }
    ]
  },
  {
    name: '订单',
    path: '/order',
    icon: '',
    children: [
      {
        name: '订单列表',
        path: '/list',
        icon: ''
      },
      {
        name: '取消订单',
        path: '/offline',
        icon: ''
      }
    ]
  },
  {
    name: '媒体',
    path: '/media',
    icon: ''
  },
  {
    name: '权限',
    path: '/permission',
    icon: '',
    children: [
      {
        name: '角色',
        path: '/role',
        icon: ''
      },
      {
        name: '管理员',
        path: '/admin',
        icon: '<setting />'
      },
      {
        name: '规则',
        path: '/rule',
        icon: ''
      }
    ]
  }
]
