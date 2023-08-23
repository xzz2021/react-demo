
import * as icons from '@ant-design/icons'
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import React from 'react';



//  自动映射图标

interface MenuProps2 extends MenuItemType{
    path?: string;
    icon?:  string;
    children?: MenuProps2[],
  }





  // 创建icon图标元素
const iconToElement = (name: string) =>
React.createElement(icons && (icons as any)[name], {
    style: { fontSize: '16px' }
})


// 映射菜单对应的图标
export const loopMenuIcon = (menus: MenuProps2[]): any[] =>{

    menus.map(({ icon, ...item }) => ({
      ...item,
      icon: icon && iconToElement(icon)
    }));
    return menus
}