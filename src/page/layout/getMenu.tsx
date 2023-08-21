import { MenuProps } from "antd";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] =
  [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '首页',
      
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: '所有用户',
        
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