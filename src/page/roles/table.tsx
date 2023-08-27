import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Popconfirm, Space, Table, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { deleterole, getrole } from '../../api/role';

interface DataType {
  key: string;
  name: string;
}


const RolesTable = (props:{getChildFn: any, setIsModalOpen: Function, setInputValue: Function, setCurIndex: Function}) => {

  let [tableData, setTableData] = useState([])
  const [messageApi, contextHolder] = message.useMessage();

  const getAllRoles = async () => {
    
    let res: any = await getrole()
    if(res?.length && res.length > 0) {
      res.map((item: { key: any; id: any; })  => item.key = item.id)
      setTableData(res)
    }

}
useEffect(() => {
  if(tableData.length > 0) return 
    getAllRoles()
})

const { getChildFn } = props
//暴露方法  给父组件
useImperativeHandle(getChildFn,()=>({
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
    if(res.statusCode == 200) {
      messageApi.open({
        type: 'success',
        content: '删除成功!'
      });
      getAllRoles()
    }

  }

  const openModify = (record: any) => {
    props.setInputValue(record.name)
    props.setIsModalOpen(true);
    props.setCurIndex(record.id)
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
}

export default RolesTable;