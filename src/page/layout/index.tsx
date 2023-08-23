import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import { Link, Outlet, useMatches, useNavigate } from 'react-router-dom';
import  { getMenuPromise } from './getMenu'
import './index.css'
import { getKeyitem } from './getKeyItem';
import { getAllPath } from './getAllPath';
const { Header, Sider, Content } = Layout;


const LayoutApp: React.FC = () => {
  console.log("🚀============ ~ file: index.tsx:98 ~ LayoutApp:")

  const [menuItems, setMenuItems] = useState([])
  const [allPath, setAllPath] = useState([])
  useEffect(() => {
    getMenuPromise().then( (res: any) => {
      if(menuItems.length == 0){
        // let newMenu: any = loopMenuIcon(res)
        // console.log("🚀 ~ file: index.tsx:27 ~ getMenuPromise ~ res:", newMenu)
        //  设定菜单后,页面重新渲染, 导致 effect又重新请求,然后不断死循环渲染
        //  所以需要加一个flag进行拦截处理, 避免 数据  重复 变更
        setMenuItems(res)
        let pathArr: any = getAllPath(res)
        setAllPath(pathArr)
      }

    }
    )
  })
  
  const [collapsed, setCollapsed] = useState(false);

  // const { token: { colorBgContainer }, } = theme.useToken();
  let colorBgContainer = '#ffffff'


  const navigate = useNavigate()
const getCurrentItem = (clickItem: any) => {
  let currentItem = getKeyitem(menuItems,clickItem.keyPath)
  let curRoute = currentItem.path
  if(curRoute){
    navigate(curRoute)
  }
}
 // 获取匹配到的路由
 const matches = useMatches()
if (matches.length && !allPath.some(path => matches[matches.length - 1].pathname == path)) {
    navigate('/home')
}
// if(menuItems.length){
//   return <Loading />
// }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="demo-logo-vertical" style={{height: '46px', overflow: 'hidden'}} >
          <img src='http://xzz2022.top:3006/images/mmlist/1693626914377.jpg'
          style={ {width: '200px', height: '46px'}}/>
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
                {/* <MyrouterLink /> */}
                {/* { allPath.map(path =>
                 <Link to={ path } key = {path}/>
                  )}
                  
                <Link to='*' /> */}

                {/* 路由占位符, 从而navigate能够使用 */}
                <Outlet />

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;




