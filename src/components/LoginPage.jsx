import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.jsx';

export const LoginPage = ( { startLogin } ) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Xpense</h1>
      <p className="margin-bottom-medium">Control your expenses</p>    
      <button className="button button--login" onClick={startLogin}>Login</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);