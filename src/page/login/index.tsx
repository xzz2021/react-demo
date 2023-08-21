import React, { Component, useState } from "react";

import './index.css'
import LoginForm from "./login";
import RegisterForm from "./register";



const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const changePage = ( ) => {
        console.log("🚀 ~ file: index.tsx:11 ~ Login ~ isLoginPage:", isLoginPage)
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

    export default Login