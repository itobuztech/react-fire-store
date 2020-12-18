import React from 'react';
import { connect } from 'react-redux';

import { Redirect, Route } from 'react-router-dom';

const AuthRoute = props => {
  const { isAuthUser, type } = props;
  if (type === 'guest' && isAuthUser) return <Redirect to="/home" />;
  else if (type === 'private' && !isAuthUser) return <Redirect to="/login" />;
  return <Route {...props} />;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAuthUser: state.authReducer.isAuthUser
  };
};

export default connect(mapStateToProps)(AuthRoute);
