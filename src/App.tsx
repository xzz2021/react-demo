//  定义总入口，并在此处拦截权限

import React from 'react';
import LayoutApp from './page/layout';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Login from './page/login';
import { router } from './router';



const App: React.FC =  () => {

  // const [isLogin, setIsLogin] = useState(false)
  // useEffect(() =>{
  //   xzzGetinfo().then(res=> {
  //     setIsLogin(res)
      
  //   })
  // })
  // if(isLogin){
  //   return <LayoutApp/>
  // }else{
  //   return <Login />
  // }
  
  return (
//     <>
//      <Routes>
// <Route path="/login" element={<Login />} />
// <Route path="/" element={<LayoutApp />} />
// </Routes>
//     </>
<RouterProvider router={router} />
    

  )

}

export default App;
