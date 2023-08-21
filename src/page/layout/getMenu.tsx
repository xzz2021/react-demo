import { MenuProps } from "antd";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { MenuItemType } from "antd/es/menu/hooks/useItems";

// type MenuItem = Required<MenuProps>['items'][number];

interface MenuProps2 extends MenuItemType{
  route?: string;
  children?: MenuProps2[]
}
const menuItems: MenuProps2[] =
  [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '首页',
      route: '/'
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: '所有用户',
        route: '/users'
      },
    {
      key: '3',
      icon: <VideoCameraOutlined />,
      label: '角色信息',
    },
    {
      key: '4',
      icon: <VideoCameraOutlined />,
      label: '权限信息',
    },
    {
      key: '5',
      icon: <VideoCameraOutlined />,
      label: '账号信息',
      route: '/profile'
    },
    {
      key: '6',
      icon: <UploadOutlined />,
      label: '关于',
      children: [{
        key: '61',
        icon: <UserOutlined />,
        label: '测试'
      }]
    }
  ]

  
  export default menuItems;