
import { Button } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Userinfo: React.FC = () => { 


// 动态获取store的数据
const age  = useSelector((state: any) => state.mainReducer.age)
// console.log("🚀 ~ file: userinfo.tsx:11 ~ age:", age)
// const isLogin = localStorage.getItem('isLogin')
const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('authToken')
      // localStorage.setItem('isLogin', 'false')
      navigate('/login')
    }
    return(
      <>
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
      </>
    )

}


export default Userinfo;
