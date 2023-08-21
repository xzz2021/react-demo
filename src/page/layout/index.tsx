import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import { Myrouter } from '../../router';
import { useNavigate } from 'react-router-dom';
import menuItems from './getMenu'
import './index.css'
import { getKeyitem } from './getKeyItem';
const { Header, Sider, Content } = Layout;


const LayoutApp: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer }, } = theme.useToken();

  const navigate = useNavigate()
const getCurrentItem = (clickItem: any) => {
  let currentItem = getKeyitem(menuItems,clickItem.keyPath)
  let curRoute = currentItem.route
  if(curRoute){
    navigate(curRoute)
  }
}
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="demo-logo-vertical" style={{height: '40px', background: 'red'}} >
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          // selectedKeys={[pathname]}
          items={menuItems}
          onClick={getCurrentItem }
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
                <Myrouter />

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;


