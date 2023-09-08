import {  Button, Checkbox, Col, Form, Input, Modal, Row, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { xzzRegister } from '../../api/userinfo';
import { getRoleArr, getrole } from '../../api/role';
import { modifyuser } from '../../api/user';


const ModifyUser: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roleData, setRoleData] = useState([]);
    
    // const [selectedRole, setSelectedRole] = useState(false);

    const [oldUsername, setOldUsername] = useState('');
    // let oldUsername = ''
    let selectedRole = ''
    const [messageApi, contextHolder] = message.useMessage();
    const [modifyuserForm] = Form.useForm();
   
    const handleOk = async () => {
      const { validateFields, getFieldsValue} = modifyuserForm
      let formObj = getFieldsValue() // 获取表单数据
      console.log("🚀 ~ file: modifyuser.tsx:17 ~ handleOk ~ formObj:", formObj)
      try{
        let validation = await  validateFields()  // 如果校验通过  这里也会返回表单数据
        console.log("🚀 ~ file: modifyuser.tsx:20 ~ handleOk ~ validation:", validation)
        let res: any = await modifyuser({oldUsername,...validation})
        if(res.statusCode === 201){
          // 提交成功
        //   console.log("🚀 ~ file: adduser.tsx:26 ~ handleOk ~ 提交成功:")
          setIsModalOpen(false);
          modifyuserForm.resetFields()
          // 触发更新用户事件
           window.emitter.emit('updateData')
        }else{
          // 提交出错,请重试!
        }
      }catch(e){
    //   console.log("🚀 ~ file: adduser.tsx:26 ~ handleOk ~ e:", e)
      }
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      modifyuserForm.resetFields()
    };

    const getAllRoles = async () => {
        // console.log("🚀 ~ file: table.tsx:29 ~ getAllRoles ~ res:")
        let res: any = await getRoleArr()
        const { data, statusCode } = res
        // console.log("🚀 ~ file: modifyuser.tsx:45 ~ getAllRoles ~ data:", data)
        if(statusCode === 200) {
            let aa = data.map((item:any) => {
                if(item == "普通用户") return {label: item, value: item, disabled: true}
               return {label: item, value: item}
            })
            // return
          setRoleData(aa)
            
            
      }else{
        console.log("🚀 ~ file: modifyuser.tsx:49 ~ getAllRoles ~ res:", res)
      }
    }

    useEffect(() => {
        getAllRoles()
        // 监听打开面板事件
        window.emitter.on('openModifyUserModal', async (record:any) => {
            const { username, role } = record
            // oldUsername = username
            let roleArr = role.split(',')
            selectedRole = roleArr
            console.log("🚀 ~ file: modi打开面板运行次数roleArr:")
            modifyuserForm.setFieldsValue({username, userrole: roleArr})
            setIsModalOpen(true);
            setOldUsername(username);
            // await  getAllRoles(roleArr)
       })
     }, [])
    
    type FieldType = {
      username?: string;
      role?: string;
    };



  return (
    < >
    {contextHolder}

      <Modal title="修改用户信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} maskClosable={ false }>
      <Form
    form={modifyuserForm} /// 获取表单实例
    autoComplete="off"
    initialValues={{
        'userrole': selectedRole

        // 'userrole': ['AAA']
      }}
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

    <Form.Item name="userrole" label="角色分配">
      {/* <Checkbox.Group >
        <Row>
          { roleData.map( (item:any) => {
            let strItem = JSON.stringify(item)
            return (
                <Col span={8} key = { item.id} >
                    <Checkbox value={ strItem  } style={{ lineHeight: '32px' }} disabled = { item.id === 3 } >
                 { item.name }
                    </Checkbox>
                </Col>
            )
          })}
        </Row>
      </Checkbox.Group> */}
      <Checkbox.Group options={roleData} >

      </Checkbox.Group>
    </Form.Item>
  </Form>
      </Modal>

      
    
    </>
  );
}

export default ModifyUser;
