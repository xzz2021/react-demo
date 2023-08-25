import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getrole } from '../../api/role';

interface DataType {
  key: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  { 
    title: '角色名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>修改</a>
        <a style={{color: 'red' }}>删除</a>
      </Space>
    ),
  },
];

// const data: DataType[] = [
//   { 
//     key: '1',
//     name: '超级管理员',
//   }
// ];

const RolesTable = (props:{getChildFn: any}) => {

  let [tableData, setTableData] = useState([])

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

return (

<Table columns={columns} dataSource={tableData} />

)
}

export default RolesTable;