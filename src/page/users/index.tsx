import React from 'react';
import UsersTable from './table';
import Adduser from './adduser';
import ModifyUser from './modifyuser';

function Users() {
  return (
    < >
      <Adduser />
      <UsersTable />
      <ModifyUser />
    </>
  );
}

export default Users;
