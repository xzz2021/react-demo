//  定义总入口，并在此处拦截权限

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ConfigProvider } from 'antd';

import zhCN from 'antd/locale/zh_CN';


const App: React.FC =  () => {


//   const { reviews } = useLoaderData();
  
//   <Suspense fallback={<Loading />}>
//   <Await
//     resolve={reviews}
//     errorElement={
//       <div>Could not load reviews 😬</div>
//     }
//     children={(resolvedReviews) => (
//       <Reviews items={resolvedReviews} />
//     )}
//   />
// </Suspense>
  
  return (
      <ConfigProvider locale={zhCN}>
           <RouterProvider router={router} />
      </ConfigProvider>

  )
}

export default App;
