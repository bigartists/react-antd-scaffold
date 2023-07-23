import { RouterProvider, useRoutes } from 'react-router-dom'
import { routerList } from 'routes/RouteConfig'

export default function App() {
  return (
    <RouterProvider
      router={routerList}
      fallbackElement={<p>页面加载中...</p>}
    />
  )
}
