import { createBrowserRouter } from 'react-router-dom'
import Layout from 'pages/Layout'
import Customize from 'pages/Customize'
import NotFoundPage from 'pages/NotFoundPage'
export const routerList = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        path: 'pipeline',
        Component: Customize,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
])
