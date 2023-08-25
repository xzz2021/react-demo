import React, { useRef } from 'react';
import RolesTable from './table';
import Addrole from './addrole';


// function Roles() {
  const Roles:React.FC = () => {
    
  const event = useRef()

  return (
    < >
      {/* <Addrole  triggerFn = { event }/>
      <RolesTable getChildFn = { event } /> */}
       <Addrole  triggerFn = { event }/>
      <RolesTable getChildFn = { event } />
    </>
  );
}

export default Roles;
