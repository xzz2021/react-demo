//  定义总入口，并在此处拦截权限

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ConfigProvider } from 'antd';

import zhCN from 'antd/locale/zh_CN';



const App: React.FC =  () => {
    return (
        <ConfigProvider locale={zhCN}>
             <RouterProvider router={router} />
        </ConfigProvider>
    )
  }

export default App;
