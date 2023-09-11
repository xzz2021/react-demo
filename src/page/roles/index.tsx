import React, { useRef, useState } from 'react';
import RolesTable from './table';
import Addrole from './addrole';
import ModifyRole from './modify';


  const Roles:React.FC = () => {

    const RolesTableDom: null | {current: any} = useRef(null)

  return (
    < >
       <Addrole  getRolesTableDom = { RolesTableDom }/>
      <RolesTable ref = { RolesTableDom } />
      <ModifyRole />
    </>
  );
}



export default Roles;
