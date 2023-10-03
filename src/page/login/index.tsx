import React, { Component, Suspense, useState } from "react";

import './index.css'
import LoginForm from "./login";
import RegisterForm from "./register";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../loading";



const Login = () => {
    // const [isLoginPage, setIsLoginPage] = useState(true)
    // const changePage = ( ) => {
    //     // console.log("🚀 ~ file: index.tsx:11 ~ Login ~ isLoginPage:", isLoginPage)
    //     setIsLoginPage(!isLoginPage)
    // }
    // 动态获取store的数据
const  isLoginPage = useSelector((state: any) => state.loginReducer.isLoginPage)

            return (
                <Suspense fallback={<Loading />}>
                    <div className={isLoginPage? "form_wrapper": "form_wrapper2"}>
                   { isLoginPage ?<LoginForm /> :  <RegisterForm /> } 
                </div>
                </Suspense>
            )
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