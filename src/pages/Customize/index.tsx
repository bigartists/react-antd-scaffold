import { Tabs, theme } from 'antd'
import React, { memo } from 'react'
import Wrapper from 'components/ContainerLayout/ListWrapper'
import Topic from 'components/Topic'
import Task from './Task'
import CustomTabsStyle from 'config/antdConf/CustomTabsStyle'

const PipelineTask: React.FC = memo(props => {
  const { token } = theme.useToken()
  return (
    <Wrapper hasNoFooter>
      <Topic topic="this is a topic" description="this is a topic desc" />

      <CustomTabsStyle token={token}>
        <Tabs
          defaultActiveKey="1"
          onChange={(key: string) => {
            console.log(key)
          }}
          items={[
            {
              label: `任务列表`,
              key: 'Task',
              children: <Task />,
            },
          ]}
        />
      </CustomTabsStyle>
    </Wrapper>
  )
})

export default PipelineTask
