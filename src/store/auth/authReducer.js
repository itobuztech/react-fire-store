import { AUTH } from './authConstants';

const initialState = {
  loginError: null,
  loggedInUser: JSON.parse(localStorage.getItem("user")) || {},
  registerErr: null,
  registeredUser: null,
  isAuthUser: false,
  signedOutSuccess: null,
  signedOutError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_USER_SUCCESS: {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, loggedInUser: action.payload, isAuthUser: true };
    }

    case AUTH.REGISTER_USER_SUCCESS:
        return { ...state, registeredUser: action.payload };

    case AUTH.LOGOUT_USER_SUCCESS: {
      localStorage.removeItem("user");
      return { ...state, isAuthUser: null, loggedInUser: {} };
    }

    case AUTH.LOGOUT_USER_ERROR: {
      return { ...state, signedOutError: action.payload };
    }

    default:
      return state;
  }
}

export default authReducer;
