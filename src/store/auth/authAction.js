import { AUTH } from './authConstants';
import { auth } from '../../services/firebase';

const authAction = {
  registerRequest: (payload) => {
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

  signoutRequest: (payload) => {
    return {
      type: AUTH.LOGOUT_USER_REQUEST,
      payload
    }
  },

  signoutSuccess: () => {
    return {
      type: AUTH.LOGOUT_USER_SUCCESS
    }
  },

  signoutError: (payload) => {
    return {
      type: AUTH.LOGOUT_USER_ERROR,
      payload
    }
  },

  forgetPasswordRequest: (payload) => {
    return {
      type: AUTH.FORGET_PASSWORD_REQUEST,
      payload
    }
  }

};

export { authAction };
