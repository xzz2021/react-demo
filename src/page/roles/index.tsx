import React, { useRef } from 'react';
import RolesTable from './table';
import Addrole from './addrole';
import ModifyRole from './modify';


  const Roles:React.FC = () => {
    
  const event = useRef()

  return (
    < >
       <Addrole  triggerFn = { event }/>
      <RolesTable getChildFn = { event }  />
      <ModifyRole  triggerFn = { event }  />
    </>
  );
}

export default Roles;
