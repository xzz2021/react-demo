
import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const Userinfo: React.FC = () => { 


// 动态获取store的数据
const age  = useSelector((state: any) => state.age)
// console.log("🚀 ~ file: userinfo.tsx:11 ~ age:", age)

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
