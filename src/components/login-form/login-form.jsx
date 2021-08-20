import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';

function LoginForm() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    <div>
      <button
      onClick={handleClick}
      >Login</button>
    </div>
  );
}
export default LoginForm;
