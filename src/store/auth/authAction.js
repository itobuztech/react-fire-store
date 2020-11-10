import { AUTH } from './authConstants';

const authAction = {
  registerRequest: (user) => {
    console.log({user});
    return {
      type: AUTH.REGISTER_USER_REQUEST,
      user
    }
  },

  registerSuccess: (msg) => {
    return {
      type: AUTH.REGISTER_USER_SUCCESS,
      msg
    }
  },

  registerError: (error) => {
    return {
      type: AUTH.REGISTER_USER_ERROR,
      error
    }
  },

  loginRequest: (user) => {
    return {
      type: AUTH.LOGIN_USER_REQUEST,
      user
    }
  },

  loginSuccess: (msg) => {
    return {
      type: AUTH.LOGIN_USER_SUCCESS,
      msg
    }
  },

  loginError: (error) => {
    return {
      type: AUTH.LOGIN_USER_ERROR,
      error
    }
  }

};

export { authAction };
