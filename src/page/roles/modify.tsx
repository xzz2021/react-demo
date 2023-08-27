import {  Button, Input, Modal, message } from 'antd';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { addrole, getrole } from '../../api/role';


const ModifyRole = (props: { triggerFn: any }) => {

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

    //触发更新列表
  const { triggerFn } = props
    const triggerBroFn = () => {
        triggerFn.current.getAllRoles()
    }


// const { exposeMyFn } = props
// //暴露触发打开修改面板 的 方法  给父组件
// useImperativeHandle(exposeMyFn,()=>({
//   showModal
// }))

  return (
    < >
    {contextHolder}

      <Modal title="修改角色" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="新的角色名" onChange ={ e => setInputValue(e.target.value)} value={ inputValue } />
      </Modal>

      
    
    </>
  );
}

export default ModifyRole;
