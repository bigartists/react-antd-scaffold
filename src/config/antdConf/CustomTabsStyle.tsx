import { GlobalToken } from 'antd'
import styled from 'styled-components'

interface IToken {
  token: GlobalToken
}

const CustomTabsStyle = styled.div<IToken>`
  .ant-tabs-top > .ant-tabs-nav {
    background-color: ${props => props.token?.colorBgContainer};
    margin-bottom: 0;
  }
  .ant-tabs-nav {
    background-color: ${props => props.token?.colorBgContainer};
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    padding-left: 28px;
    padding-right: 28px;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 0;
  }
`

export default CustomTabsStyle
