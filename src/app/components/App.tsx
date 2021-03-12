import { Layout, Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.css'
import Canvas from './docker/canvas';
import { Content, Header } from 'antd/lib/layout/layout';
import { BlockOutlined, ContainerOutlined } from '@ant-design/icons'
import { hot } from 'react-hot-loader'

const { Sider } = Layout

enum Labels {
  CONTAINERS = 'Containers',
  NETWORKS = 'Networks'
}

const App = () => {
  return (
    <div className='App'>
      <Header> 
        <h2 style={{ color: 'white'}}>Containers</h2>
      </Header>

      <Layout>

        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => { console.log(broken) }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
        >
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <BlockOutlined />
              {Labels.CONTAINERS}
        </Menu.Item>
            <Menu.Item key="2">
              <ContainerOutlined />
              {Labels.NETWORKS}
        </Menu.Item>
          </Menu>
        </Sider>

        <Content>
        <div className="Canvas">
          <Canvas />
        </div>
        </Content>

      </Layout>
    </div>
  );
}

export default hot(module)(App);