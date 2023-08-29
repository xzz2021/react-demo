import {   Input, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import {  modifyrole } from '../../api/role';


const ModifyRole = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState('')
  const [curIndex, setCurIndex] = useState('')
   
  useEffect(() => {
    // 监听打开面板
    window.emitter.on('openPanel', (e:any) => {
      const { name, id } = e
      setInputValue(name)
      setCurIndex(id)
      showModal()
    })
  }, [])
    const showModal = () => {
        // 打开面板
      setIsModalOpen(true);
    };
  
    const handleOk = async () => {
        if(inputValue == '') return messageApi.open({
            type: 'error',
            content: '角色名不能为空!',
          });
        let res: any = await modifyrole(curIndex, {name: inputValue})
        if(res?.statusCode && res?.statusCode == 200) {
          setIsModalOpen(false);
        //  triggerBroFn()
        // 触发更新表格事件
        window.emitter.emit('updateTable')
            // setInputValue('')
        }else{
          messageApi.open({
            type: 'error',
            content: '修改失败,接口异常,请重试!'
          });
        }
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setInputValue('')
    };

    //触发更新列表



// const { exposeMyFn } = props
// //暴露触发打开修改面板 的 方法  给父组件
// useImperativeHandle(exposeMyFn,()=>({
//   showModal
// }))

  return (
    < >
    {contextHolder}

      <Modal title="修改角色" open= {isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="新的角色名" onChange ={ e => setInputValue(e.target.value)} value={ inputValue } allowClear/>
      </Modal>

      
    
    </>
  );
}

export default ModifyRole;
