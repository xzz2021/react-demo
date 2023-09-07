import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Popconfirm, Space, Table, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { deleterole, getrole } from '../../api/role';

interface DataType {
  key: string;
  name: string;
}

interface TempProps {
  getChildFn?: any, 
  setIsModalOpen?: Function, 
  setInputValue?: Function, 
  setCurIndex?: Function
}

const RolesTable = forwardRef((props:TempProps, ref) => {

  let [tableData, setTableData] = useState([])
  const [messageApi, contextHolder] = message.useMessage();

  const getAllRoles = async () => {
    // console.log("🚀 ~ file: table.tsx:29 ~ getAllRoles ~ res:")
    let res: any = await getrole()
    const { data, statusCode } = res
    if(statusCode === 200) {
    if(data.length) {
      data.map((item: { key: any; id: any; })  => item.key = item.id)
      setTableData(data)
    }
  }
}
useEffect(() => {
  if(tableData.length > 0) return 
    getAllRoles()
    // 监听更新表格事件
     window.emitter.on('updateTable', () => {
      getAllRoles()
    } )

})

// const { getChildFn } = props
// console.log("🚀 ~ file: table.tsx:32 ~ RolesTable ~ getChildFn:", getChildFn)
// 暴露方法  给父组件
useImperativeHandle(ref,()=>({
  getAllRoles
}))

const columns: ColumnsType<DataType> = [
  { 
    title: '角色名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record: { key: React.Key }) =>
    tableData.length >= 1 ? (
      <Space size="middle">
        <a onClick={ () => openModify(record) }>修改</a>
          <Popconfirm title="确定删除?" onConfirm={() => handleDelete(record.key)}>
            <a style={ {color: 'red'}}>删除</a>
          </Popconfirm>
      </Space>

        ) : null,
  },
];
  const handleDelete = async (key: any) => {
    let res: any =  await deleterole(key)
    const { data, statusCode } = res

    if(statusCode == 200) {
      messageApi.open({
        type: 'success',
        content: data.msg
      });
      getAllRoles()
    }
  }

  const openModify = (record: any) => {
    // 触发打开面板事件
    window.emitter.emit('openPanel',  record )
  }

// 触发修改弹窗  的兄弟组件
  // const { triggerModify } = props
  // const openModify = () => {
  //   triggerModify.current.showModal()
  // }

return (
<>
{contextHolder}

<Table columns={columns} dataSource={tableData} />
</>

)
})

export default RolesTable;