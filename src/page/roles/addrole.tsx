import {  Button, Input, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { addrole, getrole } from '../../api/role';


const Addrole = (props: { getRolesTableDom: any}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    let [inputValue, setInputValue] = useState('')
    const [messageApi, contextHolder] = message.useMessage();


   
    const showModal = () => {
        // 打开面板
      setIsModalOpen(true);
    };
  
    const handleOk = async () => {
        if(inputValue == '') return messageApi.open({
            type: 'error',
            content: '角色名不能为空!',
          });
        let res: any = await addrole({name: inputValue})
        if(res?.statusCode && res?.statusCode === 201) {
         setIsModalOpen(false);
         triggerBroFn()
            setInputValue('')
        }else{
          messageApi.open({
            type: 'error',
            content: '新增失败,接口异常,请重试!'
          });
        }
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setInputValue('')
    };

  const { getRolesTableDom } = props
    const triggerBroFn = () => {
      getRolesTableDom.current.getAllRoles()
    }

  return (
    < >
    {contextHolder}
      <Button onClick={showModal} type="primary" style={{ marginBottom: 16 }}>
        添加新角色
      </Button>

      <Modal title="添加角色" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="新的角色名" onChange ={ e => setInputValue(e.target.value)} value={ inputValue } />
      </Modal>

      
    
    </>
  );
}

export default Addrole;
