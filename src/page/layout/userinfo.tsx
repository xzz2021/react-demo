
import { Button } from 'antd';
import React from 'react';

const Userinfo: React.FC = () => { 


    const logout = () => {

    }
    return(
        <Button
            type="text" danger
            onClick={() => logout()}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          >退出</Button>
    )

}


export default Userinfo;
