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

  loginRequest: (payload) => {
    return {
      type: AUTH.LOGIN_USER_REQUEST,
      payload
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
  }

};

export { authAction };
