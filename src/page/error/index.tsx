import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {

  const error: any = useRouteError();
  console.error('error',error);
  return (
    < >
      <div>错误页面</div>
      <p>
        <i>{ error.statusText || error.message }</i>
      </p>
    </>
  );
}

export default ErrorPage;
