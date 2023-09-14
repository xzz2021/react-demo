
import  {
    HomeOutlined,
    TeamOutlined,
    SmileOutlined,
    SafetyOutlined,
    SolutionOutlined,
    UnorderedListOutlined,
  } from '@ant-design/icons';
import { MenuItemType } from "antd/es/menu/hooks/useItems";

const iconArray = [ 
  HomeOutlined,
  TeamOutlined,
  SmileOutlined,
  UnorderedListOutlined,
  SafetyOutlined,
  SolutionOutlined,
]

let apiMenu = [
  {
    key: '1',
    label: '首页',
    path: '/home',
  },
  {
      key: '2',
      label: '所有用户',
      path: '/users'
    },
  {
    key: '3',
    label: '角色列表',
    path: '/roles'
  },
  {
    key: '4',
    label: '菜单列表superAdmin',
    path: '/menus'
  },
  {
    key: '5',
    label: '操作权限表admin',
    path: '/permissions'
  },
  {
    key: '6',
    label: '账号信息-普通用户',
    path: '/profile'
  },
]
export const getMenuPromise =  () => {
  return new Promise((resolve, reject)=> {
    let newMenu = apiMenu.map((item: any) => {
      let name = iconArray[Number(item.key) - 1]
      item.iconname  = name
      return item
    })
      window.setTimeout(() => resolve(newMenu), 200)
  })
}

interface MenuProps2 extends MenuItemType{
  path?: string;
  children?: MenuProps2[]
}
const menuItems: MenuProps2[] = []
  
  export default menuItems;