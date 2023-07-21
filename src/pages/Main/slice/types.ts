import { IRouterMeta } from 'routes/config'

export interface UserState {
  username: string
  loginLoading: boolean
  collapsed: boolean
  routeMeta: IRouterMeta
  theme: 'light' | 'dark'
}

export interface User {
  username: string
  storageMap?: Object
}

export interface LoginParams {
  params: {
    username: string
    password: string
  }
  resolve: () => void
}
