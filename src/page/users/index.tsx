import React from 'react';
import UsersTable from './table';
import Adduser from './adduser';
import ModifyUser from './modifyuser';
import { getuser } from '../../api/user';

function Users() {

  return (
    < >
      <Adduser />
      <UsersTable />
      <ModifyUser />
    </>
  );
}


//  结合router loader 加载数据
export async function usersloader(): Promise<any> {
  try{
    let res:any = await getuser()
    if(res.statusCode === 200) {
      let { data } = res
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
  
    return { usersData: data }
  }
  }catch(err){

    return { usersData: []}
  }


}


export default Users;
