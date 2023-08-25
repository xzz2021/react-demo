//  定义总入口，并在此处拦截权限

import React, { Suspense } from 'react';
import LayoutApp from './page/layout';
import { Await, Route, RouterProvider, Routes, useLoaderData } from 'react-router-dom';
import Login from './page/login';
import { router } from './router';
import Loading from './page/loading';



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
//     <>
//      <Routes>
// <Route path="/login" element={<Login />} />
// <Route path="/" element={<LayoutApp />} />
// </Routes>
//     </>
<>

{/* <RouterProvider router={router} /> */}
</>

  )

}

export default App;
