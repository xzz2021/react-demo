import React, { useEffect, useState } from 'react';
import { Popconfirm, Space, Table, Tag, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { deleteuser, getuser } from '../../api/user';

interface DataType {
  key: string;
  username: string;
  age: number;
  gender: string;
  address: string;
  role: string
}



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
          <a onClick={() => modifyBtn(record) }>修改</a>
          <Popconfirm title="确定删除?" onConfirm={() => handleDelete(record.username)}>
              <a style={ {color: 'red'}}>删除</a>
            </Popconfirm>
        </Space>
      ),
    },
  ];

  const [ data, setData ] = useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const updateData = async () => {
    let res:any = await getuser()
      // return res
      if(res.statusCode === 200) {
        const { data } = res
        data.map((item:any, index: number) => {
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
      setData(data)
    }
  }
  useEffect(() => {
     updateData()
      // 监听更新用户事件
    window.emitter.on('updateData', () => {
      updateData()
    })
  }, [])


  const handleDelete = async (username: string) => {
    let res: any =  await deleteuser(username)
    if(res.statusCode == 200) {
      messageApi.open({
        type: 'success',
        content: res.data.msg
      });
      updateData()
    }
  }

  const modifyBtn = (record:any) => {
    window.emitter.emit('openModifyUserModal', record)
  }

return (
  <>
  {contextHolder}
<Table columns={columns} dataSource={data} />;
  </>
)

} 

export default UsersTable;