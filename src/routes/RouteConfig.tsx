import { createBrowserRouter } from 'react-router-dom'
import LayoutLazyPage from 'pages/Layout/Loadable'
import CustomizeLazyPage from 'pages/Customize/Loadable'
import NotFoundPage from 'pages/NotFoundPage'
export const routerList = createBrowserRouter([
  {
    path: '/',
    Component: LayoutLazyPage,
    async lazy() {
      return {
        Component: LayoutLazyPage,
      }
    },
    children: [
      {
        index: true,
        path: 'pipeline',
        async lazy() {
          return {
            Component: CustomizeLazyPage,
          }
        },
      },
    ],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
])
