import { AUTH } from './authConstants';

const authAction = {
  registerRequest: (payload) => {
    console.log({payload});
    return {
      type: AUTH.REGISTER_USER_REQUEST,
      payload
    }
  },

  registerSuccess: (payload) => {
    return {
      type: AUTH.REGISTER_USER_SUCCESS,
      payload
    }
  },

  registerError: (payload) => {
    return {
      type: AUTH.REGISTER_USER_ERROR,
      payload
    }
  },

  loginRequest: (payload, props) => {
    return {
      type: AUTH.LOGIN_USER_REQUEST,
      payload,
      props
    }
  },

  loginSuccess: (payload) => {
    return {
      type: AUTH.LOGIN_USER_SUCCESS,
      payload
    }
  },

  loginError: (payload) => {
    return {
      type: AUTH.LOGIN_USER_ERROR,
      payload
    }
  },

  signoutRequest: () => {
    return {
      type: AUTH.LOGOUT_USER_REQUEST
    }
  },

  signoutSuccess: (payload) => {
    return {
      type: AUTH.LOGOUT_USER_SUCCESS,
      payload
    }
  },

  signoutError: (payload) => {
    return {
      type: AUTH.LOGOUT_USER_ERROR,
      payload
    }
  }

};

export { authAction };
