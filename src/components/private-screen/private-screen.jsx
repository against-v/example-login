import React from 'react';
import {logout} from '../../store/api-actions';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

function PrivateScreen({logout}) {
  console.log('PRIVATE SCREEN');
  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <div>private screen</div>
      <button
        onClick={handleClick}
      >Logout</button>
      <Link to={'/login'}>LOGIN</Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(PrivateScreen);
