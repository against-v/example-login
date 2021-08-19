import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions';
import {Link} from 'react-router-dom';

function LoginForm({onSubmit}) {
  console.log('LOGIN FORM');
  const handleClick = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <button
      onClick={handleClick}
      >Login</button>
      <Link to={'/private'}>PRIVATE</Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit() {
    dispatch(login());
  },
});

LoginForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
