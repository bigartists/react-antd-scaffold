import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, GlobalToken, Layout, Switch, theme } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { routerList } from 'routes/RouteConfig'
import { useSelector, useDispatch } from 'react-redux'
import { selectTheme } from 'pages/Layout/slice/selector'
export default function App() {
  const rootTheme = useSelector(selectTheme)
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1946b9',
          fontSize: 14,
          borderRadius: 4,
        },
        algorithm:
          rootTheme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <RouterProvider
        router={routerList}
        fallbackElement={<p>页面加载中...</p>}
      />
    </ConfigProvider>
  )
}
