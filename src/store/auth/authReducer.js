import { AUTH } from './authConstants';

const initialState = {
  loginError: null,
  loggedInUser: JSON.parse(localStorage.getItem("user")) || {},
  registerErr: null,
  registeredUser: null,
  isAuthUser: !!localStorage.getItem("user"),
  signedOutSuccess: null,
  signedOutError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_USER_SUCCESS: {
      console.log({action});
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, loggedInUser: action.payload };
    }
    case AUTH.LOGIN_USER_ERROR:
      return { ...state, loginError: action.payload };
    case AUTH.REGISTER_USER_SUCCESS:
        return { ...state, registeredUser: action.payload };
    case AUTH.REGISTER_USER_ERROR:
        return { ...state, registerErr: action.payload };
    case AUTH.LOGOUT_USER_SUCCESS: {
      localStorage.removeItem("user");
      console.log({action});
      return { ...state, signedOutSuccess: action.payload };
    }
    case AUTH.LOGOUT_USER_ERROR: {
      console.log({action});
      return { ...state, signedOutError: action.payload };
    }
    default:
      return state;
  }
}

export default authReducer;
