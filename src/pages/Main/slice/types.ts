import { IRouterMeta } from 'routes/config'

export interface UserState {
  username: string
  loginLoading: boolean
  collapsed: boolean
  storageMap: Object
  routeMeta: IRouterMeta
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
