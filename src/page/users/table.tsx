import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getuser } from '../../api/user';

interface DataType {
  key: string;
  username: string;
  age: number;
  gender: string;
  address: string;
  role: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Action',
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
//     name: 'John Brown',
//     age: 32,
//     gender: 'male',
//     address: 'New York No. 1 Lake Park',
//     role: "管理员"
//   }
// ];


const UsersTable: React.FC = () =>{

  const [ data, setData ] = useState([])

  const updateData = async () => {
    let res:any = await getuser()
      // return res
      res.map((item:any, index: number) => {
        item.key = index
        
        if(item.profile) {
          item = Object.assign(item, item.profile)
          delete item.profile
         }
        if(item.role) { 
          const role = item.role.map((item2: any) => item2.name)
          item.role = role.join(',')
        }
      })
      setData(res)
  }
  useEffect(() => {
     updateData()
  }, [])

return <Table columns={columns} dataSource={data} />;
} 

export default UsersTable;