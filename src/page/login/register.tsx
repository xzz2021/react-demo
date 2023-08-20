import React from "react";

import { Button, Form, Input } from 'antd';

import { Link  } from 'react-router-dom'

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

 const RegisterForm: React.FC = () => (
  <div className="form_wrapper2 register">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="账号"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
      
          <Form.Item >
            <Button type="primary" htmlType="submit" style={{width: '100%', marginTop: '10px'}}>
              注册
            </Button>
            <Link to='/login'>
              
            <div style={{margin: '10px', float: 'right'}}>
              去登录
            {/* <a href="" >
              </a> */}
            </div>
              </Link>
          </Form.Item>
        </Form>
        </div>
)


export default RegisterForm