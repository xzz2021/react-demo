import React, { useRef, useState } from 'react';
import RolesTable from './table';
import Addrole from './addrole';
import ModifyRole from './modify';


  const Roles:React.FC = () => {
    
  // const event = useRef()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState('')
  const [curIndex, setCurIndex] = useState('')

    const RolesTableDom: null | {current: any} = useRef(null)
    setTimeout(() => {
      
      RolesTableDom.current && RolesTableDom.current.getAllRoles()
    }, 3000);

  return (
    < >
       <Addrole  getRolesTableDom = { RolesTableDom }/>
      <RolesTable ref = { RolesTableDom }  setIsModalOpen = { setIsModalOpen } 
      setInputValue = { setInputValue }  setCurIndex= { setCurIndex }
      />
      <ModifyRole   setIsModalOpen = { setIsModalOpen } 
      isModalOpen = { isModalOpen }
      inputValue = { inputValue }
      setInputValue = { setInputValue }
      curIndex = { curIndex }
      />
    </>
  );
}

export default Roles;
