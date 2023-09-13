import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import { Link, Outlet, redirect, useLocation, useMatches, useNavigate } from 'react-router-dom';
import  { getMenuPromise } from './getMenu'
import './index.css'
import { getKey, getKeyitem } from './getKeyItem';
import { getAllPath } from './getAllPath';
import Loading from '../loading';
import { xzzGetinfo } from '../../api/auth';
const { Header, Sider, Content } = Layout;


const LayoutApp: React.FC = () => {
  console.log("🚀============ ~ file: index.tsx:98 ~ LayoutApp:" )

  const [menuItems, setMenuItems] = useState([])
  const [allPath, setAllPath] = useState([])
  

  const getCurRoute = (menu: any[]) => {
    let href = window.location.href
    let path = '/' + href.split('/')[3]
    return  getKey(menu, path)
  }
  useEffect(() => {
    getMenuPromise().then( (res: any) => {
      // if(menuItems.length == 0){
        // let newMenu: any = loopMenuIcon(res)
        // console.log("🚀 ~ file: index.tsx:27 ~ getMenuPromise ~ res:", newMenu)
        //  设定菜单后,页面重新渲染, 导致 effect又重新请求,然后不断死循环渲染
        //  所以需要加一个flag进行拦截处理, 避免 数据  重复 变更
        setMenuItems(res)
        let pathArr: any = getAllPath(res)
        setAllPath(pathArr)

      // 刷新页面  自动选中当前所在菜单项
        setCurRoute(getCurRoute(res))
      // }
    })
  }, [])
    
  const [collapsed, setCollapsed] = useState(false);
  //  默认菜单选中项
  const [curRoute, setCurRoute] = useState(['1']);

  // const { token: { colorBgContainer }, } = theme.useToken();
  let colorBgContainer = '#ffffff'
  // const location = useLocation();
  // console.log("🚀 ~ file: index.tsx:57 ~ getCurrentItem ~ location:", location)

  const navigate = useNavigate()
const getCurrentItem = (clickItem: any) => {
  // console.log("🚀 ~ file: index.tsx:56 ~ getCurrentItem ~ clickItem:", clickItem)
  let curPath = clickItem.keyPath
  
  let currentItem = getKeyitem(menuItems,curPath)
  let curRoute = currentItem.path
  if(curRoute){
    setCurRoute(clickItem.keyPath)
    navigate(curRoute)
  }
}
//  // 获取匹配到的路由
//  const matches = useMatches()
// if (matches.length && !allPath.some(path => matches[matches.length - 1].pathname == path)) {
//     navigate('/home')
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
          // defaultSelectedKeys={ curRoute }
          selectedKeys={ curRoute }
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
                {/* 因为使用了懒加载,所以必须用suspense进行包裹 */}
                <Suspense fallback={<Loading />}>
                <Outlet />
                </Suspense>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}


//  结合router loader 加载数据
export async function layoutloader(): Promise<any> {
  console.log("🚀 ~ file: index.tsx:128 ~ la测试youtloader ~ layoutloader:")
  const valToken = await xzzGetinfo();
  localStorage.setItem('isLogin', valToken.toString())
  if(!valToken){
    throw redirect('/login')
  }
  return true
}

export default LayoutApp;




