import { defaultLazyLoad } from 'routes/loadable'

export const MainPageLazy = defaultLazyLoad(
  () => import(/* webpackChunkName: "mainPage" */ './index'),
  module => module.MainPage,
)
