import React, { useCallback, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Menus from './Menus'
import { Layout, theme } from 'antd'
import { selectRouteMeta } from 'pages/Main/slice/selector'
import styled from 'styled-components'
import {
  BLUE,
  logo_text_color,
  SPACE_TIMES,
} from 'assets/styles/styledcom/StyleConstants'
import { useSelector, useDispatch } from 'react-redux'
import { mainActions } from 'pages/Main/slice'
import SiteHeader from 'components/Headers'
import { selectCollapsed } from './slice/selector'
const { Content, Sider } = Layout
const { useToken } = theme

export const MainPage: React.FC = () => {
  const routeMeta = useSelector(selectRouteMeta)
  const collapsed = useSelector(selectCollapsed)
  const dispatch = useDispatch()
  const token = useToken()

  const setCollapsed = useCallback(
    () => dispatch(mainActions.updateCollapsed()),
    [dispatch],
  )

  return (
    <RootContainer collapsed={collapsed} token={token}>
      <SiteHeader />
      <div className="rootContainer">
        <Layout hasSider>
          <Sider
            theme="light"
            width={200}
            className="sider"
            collapsible
            // trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            // trigger={collapsed ? <MenuFoldOutlined /> : SiderFooter}
            trigger={null}
            // collapsedWidth={48}
            collapsedWidth={56}
            collapsed={collapsed}
            onCollapse={setCollapsed}
          >
            <div className="layoutSiderContent">
              <div className="h60"></div>
              <div className="menu">
                <Menus />
              </div>

              <div className="sideFooter">
                {!collapsed ? (
                  <div className="around wrapper">
                    <div
                      className="iconfont tc-KingBI-shouqi cursor-pointer"
                      onClick={setCollapsed}
                    ></div>
                    <div
                      className="logo"
                      style={{
                        visibility: 'hidden',
                      }}
                    >
                      logo
                    </div>
                  </div>
                ) : (
                  <div className="center wrapper ">
                    <div
                      className="iconfont tc-KingBI-zhankai cursor-pointer"
                      onClick={setCollapsed}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </Sider>
          <div className="anchor"></div>
          <Layout className="mainContent">
            <Content
              id="app-container"
              className="site-layout-background"
              style={{
                padding: routeMeta.layout === false ? 0 : 24,
                minHeight: 280,
                overflowY: 'overlay' as any,
              }}
            >
              <div className="h-[54px]"></div>
              <div
                className="w-full"
                style={{ minHeight: 'calc(100% - 54px)', minWidth: '980px' }}
              >
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </RootContainer>
  )
}

export default MainPage

const RootContainer = styled.div<{ collapsed: boolean; token: any }>`
  .common_text_button {
    color: ${props => props.token.token.colorPrimary}!important;
    cursor: pointer;
  }
  .rootContainer {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    :global(.ant-layout-sider-trigger) {
      box-shadow: inset 0px 1px 0px #f0f0f0;
    }
    .sider {
      box-shadow: 1px 0px 0px rgba(25, 70, 185, 0.1);
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
    }
    .anchor {
      width: ${props => (props.collapsed ? '56px' : '200px')};
      transition: width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  .layoutSiderContent {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .h60 {
      height: ${SPACE_TIMES(15)};
    }
    .logo {
      flex: 0 0 auto;
      display: flex;
      height: ${SPACE_TIMES(12.5)};
      line-height: ${SPACE_TIMES(11)};
      padding-left: ${SPACE_TIMES(4)};
      margin-bottom: ${SPACE_TIMES(2)};
      color: ${BLUE};
      font-size: ${SPACE_TIMES(5)};
      cursor: pointer;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      a {
        color: ${BLUE};
      }
      .title {
        color: ${logo_text_color};
        font-size: ${SPACE_TIMES(4.5)};
        margin-left: ${SPACE_TIMES(3)};

        .dot {
          margin: 0 2px;
          font-size: ${SPACE_TIMES(6)};
        }
      }
    }
    .thin {
      display: flex;
      margin: ${SPACE_TIMES(4)};
      justify-content: center;
      align-items: center;
    }
    .menu {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .sideFooter {
      height: ${SPACE_TIMES(13)};
      overflow: hidden;
      border-top: 1px solid rgb(242, 243, 255);
      /* background: linear-gradient(
        to right,
        rgb(242, 243, 255),
        rgb(0, 82, 217, 0.2)
      ); */

      .wrapper {
        display: flex;
        height: 100%;
        align-items: center;
        .logo {
          perspective: 1000px;
          img {
            position: relative;
            top: 16px;
            right: -12px;
            filter: blur(4px);
            transform: skewY(15deg);
            height: 78px;
          }
        }
      }

      .around {
        justify-content: space-around;
      }
      .center {
        justify-content: center;
      }
    }
  }
`
