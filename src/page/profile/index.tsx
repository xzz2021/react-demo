import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

function Profile() {

  //  定义store的分发事件
  // dispatch 参数可以直接传递对象
  //  当使用thunk后  也可以传递一个promise异步函数
  const dispatch = useDispatch()
  // legacy_createStore(reducers,applyMiddleware(reduxThunk))
  const clickAdd = () => {
     dispatch({type: 'addnum'})

    // setTimeout(
    //   () => dispatch({type: 'addnum'}),
    //   1000
    // )
  }
const wait = async (s: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(s)}, s * 1000)
    })
}
 
    const clickAdddd =  () => {
      return async (dispatch: any) => {
       let nn = await wait(3)
       console.log("🚀 ~ file: index.tsx:26 ~ return ~ nn:", nn)
       dispatch({type: 'addnum'})
     }
    }

     const clickAdd2 = () => {
      dispatch(clickAdddd() as any)
    }
   // setTimeout(
   //   () => dispatch({type: 'addnum'}),
   //   1000
   // )
 
  return (
    < >
      <div>用户详细信息</div>
      <Button
            type="primary" 
            onClick={ clickAdd2 }
          >数字加一</Button>
    </>
  );
}

export default Profile;
