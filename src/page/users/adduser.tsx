import {  Button, Form, Input, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { xzzRegister } from '../../api/userinfo';


const Adduser: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const [adduserForm] = Form.useForm();
   
    const showModal = () => {
        // 打开面板
      setIsModalOpen(true);
    };
    
    const handleOk = async () => {
      const { validateFields, getFieldsValue} = adduserForm
      // let formObj = getFieldsValue() // 获取用户名密码
      try{
        let validation = await  validateFields()  // 如果校验通过  这里也会返回表单用户名密码
        try{
          
          let res: any = await xzzRegister(validation)
          if(res.statusCode === 201){
            // 提交成功
            // console.log("🚀 ~ file: adduser.tsx:26 ~ handleOk ~ 提交成功:")
            setIsModalOpen(false);
            adduserForm.resetFields()
            // 触发更新用户事件
             window.emitter.emit('updateData')
          }else{
            // 提交出错,请重试!
            console.log("🚀 ~ file: adduser.tsx:36 ~ handleOk ~ res:", res)
            res.error && console.log("🚀 ~ file: adduser.tsx:26 ~ handleOk ~ 提交出错:",res.error)
          }
        }catch(e){
        console.log("🚀 ~ file: adduser.tsx:37 ~ handleOk ~ e:", e)

        }
      }catch(e){
      console.log("🚀 ~ file: adduser.tsx:26 ~ handleOk ~ e:", e)
      }
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      adduserForm.resetFields()
    };


    // const onFinish = (values: any) => {
    //   console.log('Success:', values);
    // };
    
    // const onFinishFailed = (errorInfo: any) => {
    //   console.log('Failed:', errorInfo);
    // };
    
    type FieldType = {
      username?: string;
      password?: string;
    };

  return (
    < >
    {contextHolder}
      <Button onClick={showModal} type="primary" style={{ marginBottom: 16 }}>
        添加新用户
      </Button>

      <Modal title="添加新用户" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} maskClosable={ false }>
      <Form
    form={adduserForm} /// 获取表单实例
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="名称"
      name="username"
      rules={[
        { required: true, message: "请输入用户名!" },
        { min: 6, max: 20, message: "用户名长度必须在6-20之间!" },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="密码"
      name="password"
      rules={[
        { required: true, message: "请输入密码!" },
        { min: 8, max: 30, message: "密码最少8位,最多30位字符!" },
      ]}
    >
      <Input />
    </Form.Item>
  </Form>
      </Modal>

      
    
    </>
  );
}

export default Adduser;
