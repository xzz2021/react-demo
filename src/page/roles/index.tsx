import React, { useRef, useState } from 'react';
import RolesTable from './table';
import Addrole from './addrole';
import ModifyRole from './modify';


  const Roles:React.FC = () => {
    
  const event = useRef()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState('')
  const [curIndex, setCurIndex] = useState('')

  return (
    < >
       <Addrole  triggerFn = { event }/>
      <RolesTable getChildFn = { event }  setIsModalOpen = { setIsModalOpen } 
      setInputValue = { setInputValue }  setCurIndex= { setCurIndex }
      />
      <ModifyRole  triggerFn = { event }  setIsModalOpen = { setIsModalOpen } 
      isModalOpen = { isModalOpen }
      inputValue = { inputValue }
      setInputValue = { setInputValue }
      curIndex = { curIndex }
      />
    </>
  );
}

export default Roles;
