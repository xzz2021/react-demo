import { MenuProps } from "antd";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { MenuItemType } from "antd/es/menu/hooks/useItems";


export const getMenuPromise =  () => {
  return new Promise((resolve, reject)=> {
      window.setTimeout(() => resolve(
        [
          {
            key: '1',
            icon: <UserOutlined />,
            label: '首页',
            path: '/home'
          },
          {
              key: '2',
              icon: <UserOutlined />,
              label: '所有用户',
              path: '/users'
            },
          {
            key: '3',
            icon: <VideoCameraOutlined />,
            label: '角色权限',
            path: '/roles'
          },
          {
            key: '4',
            icon: <VideoCameraOutlined />,
            label: '操作权限',
            path: '/permissions'
          },
          // {
          //   key: '5',
          //   icon: <VideoCameraOutlined />,
          //   label: '账号信息',
          //   path: '/profile'
          // },
          {
            key: '6',
            icon: <UploadOutlined />,
            label: '关于',
            children: [{
              key: '61',
              icon: <UserOutlined />,
              label: '测试',
              path: '/test'
            }]
          }
        ]
      ), 2000)
  })

}

interface MenuProps2 extends MenuItemType{
  path?: string;
  children?: MenuProps2[]
}
const menuItems: MenuProps2[] = []
  

  
  export default menuItems;