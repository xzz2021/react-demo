//  定义总入口，并在此处拦截权限

import React, { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ConfigProvider } from 'antd';

import zhCN from 'antd/locale/zh_CN';
import { useEffect } from 'react';
import { xzzGetinfo } from './api/auth';
import Login from './page/login';

const App2: React.FC =  () => {
const [authorized, setAuthorized] = useState(false)
const isAuthorized = async () => {
   let bool =  await xzzGetinfo()
   setAuthorized(bool)
}
useEffect(()=>{
  isAuthorized()
}, [])

if(authorized){
  return (
      <ConfigProvider locale={zhCN}>
           <RouterProvider router={router} />
      </ConfigProvider>
  )
}else{
  return (
    <Login />
  )
}}

const App: React.FC =  () => {
    return (
        <ConfigProvider locale={zhCN}>
             <RouterProvider router={router} />
        </ConfigProvider>
    )
  }

export default App;
