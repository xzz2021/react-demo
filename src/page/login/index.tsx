import React, { Component, useState } from "react";

import './index.css'
import LoginForm from "./login";
import RegisterForm from "./register";
import { redirect } from "react-router-dom";



const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const changePage = ( ) => {
        // console.log("🚀 ~ file: index.tsx:11 ~ Login ~ isLoginPage:", isLoginPage)
        setIsLoginPage(!isLoginPage)
    }
        if(isLoginPage){
            return (
                <>
                <div className="form_wrapper">
                    <LoginForm 
                    changeStatus={changePage}
                    />
                </div>
                </>
            )
        }else{

            return (
                <>
                <div className="form_wrapper2">
                    <RegisterForm 
                    changeStatus={changePage}
                     />
                </div>
                </>
            )
        }
    }



    //  结合router loader 加载数据  
    //  如果已登录 进入login页面  自动跳转home页
export async function loginloader(): Promise<any> {
    const isLogin = localStorage.getItem('isLogin')
    if(isLogin == 'true'){
       throw  redirect('/home')
    }
    return isLogin
  }
    export default Login