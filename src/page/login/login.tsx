import React, { useEffect } from "react";

import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link } from "react-router-dom";
import { xzzlogin } from "../../api/userinfo";
import RegisterForm from "./register";


type FieldType = {
  username: string;
  password: string;
  remember: boolean;
}

 const LoginForm: React.FC = () => {

  let isLoginPage = true
  const changePage = () => {
    isLoginPage = !isLoginPage
  }

  const [xzzform] = Form.useForm();  // 获取表单实例

  function setCurname(){
    // 加载 记住的 用户名
    let curUser = localStorage.getItem('username')
    xzzform.setFieldsValue({ username: curUser, password: '' })
  }
useEffect(() =>{
  // 生命周期函数
  setCurname()
}, [])
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (forminfo: FieldType) => {
    const {remember, ...account } = forminfo
    if(remember){
      localStorage.setItem('username', account.username)
    }else{
      localStorage.removeItem('username')

    }
    let res: any =  await xzzlogin(account)
    console.log("🚀 ~ file: login.tsx:21 ~ onFinish ~ res:", res)
    if(res.statusCode.toString().startsWith('2')){
      let authToken = res.access_token
      localStorage.setItem('authToken', authToken)
      console.log('响应成功!', res);
    }else{
      messageApi.error(res.error)
      console.log('响应失败!', res);

    }

  }

  const onFinishFailed = (errorInfo: any) => {
  };
  if(isLoginPage){
  return (
    <>
    {contextHolder}
        <Form
          name="basic"
          form={xzzform}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' },
                    {min:6, max:20, message: '用户名长度必须在6-20之间!'}
          ]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' },
            {min:8, max:30, message: '密码最少8位,最多30位字符!'}
          ]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>记住账号</Checkbox>
          </Form.Item>
      
          <Form.Item >
            <Button type="primary" htmlType="submit" 
            style={{width: '100%'}}
            >
              登录
            </Button>
            {/* <Link to='/register'> */}
            <div style={{margin: '10px', float: 'right'}} onClick={changePage}>
            注册账号
            {/* <a href="" >注册账号</a> */}
            </div>
            {/* </Link> */}
          </Form.Item>
        </Form>
        </>
)}else{
  return (
  <RegisterForm 
  changeStatus = { () => changePage }
  />)
}
        }

export default LoginForm