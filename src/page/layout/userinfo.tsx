
import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const Userinfo: React.FC = () => { 

// store.subscribe(() => {
//   console.log(store.getState())
// })
const age  = useSelector((state: any) => state.age)

    const logout = () => {

    }
    return(
        <Button
            type="text" danger
            onClick={() => logout()}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          >退出
          {age}</Button>
    )

}


export default Userinfo;
