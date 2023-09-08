import {  Button, Form, Input, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';


const Adduser: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();


   
    const showModal = () => {
        // 打开面板
      setIsModalOpen(true);
    };
  
    const handleOk = async () => {

    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    
    type FieldType = {
      username?: string;
      password?: string;
      remember?: string;
    };

  return (
    < >
    {contextHolder}
      <Button onClick={showModal} type="primary" style={{ marginBottom: 16 }}>
        添加新用户
      </Button>

      <Modal title="添加新用户" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
  </Form>
      </Modal>

      
    
    </>
  );
}

export default Adduser;
