import Main from 'pages/Main'
export interface IRouterMeta {
  layout?: boolean
  collapsed?: boolean
  permission?: string[]
}

export interface IRouter {
  path?: string
  icon?: string
  name?: string
  key?: string
  component?: string // pages目录下地址
  element?: React.ReactElement // 不使用懒加载写法
  index?: Boolean
  meta?: IRouterMeta
  children?: IRouter[]
}

export const dynamicRoutes: IRouter[] = [
  {
    name: '一级导航',
    path: 'pipeline',
    icon: 'iconfont tc-KingBI-dingshirenwu',
    children: [
      {
        name: '列表页',
        path: 'customize',
        icon: 'iconfont tc-xiugaimima1',
        component: 'Customize',
      },
    ],
  },
]

export const config: IRouter[] = [
  {
    path: '/',
    element: <Main />,
    children: [...dynamicRoutes],
  },
  {
    path: '*',
    component: 'NotFoundPage',
  },
]

export const whiteRolelist = ['/signin', '/signup', '/403', '/404']
