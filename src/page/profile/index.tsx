import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';

function Profile() {

  const dispatch = useDispatch()

  return (
    < >
      <div>用户详细信息</div>
      <Button
            type="primary" 
            onClick={() => dispatch({type: 'addnum'})}
          >数字加一</Button>
    </>
  );
}

export default Profile;
