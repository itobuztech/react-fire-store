import { AUTH } from './authConstants';

const initialState = {
  loginError: null,
  loggedInUser: null,
  registerErr: null,
  registeredUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_USER_SUCCESS:
      return { ...state, loggedInUser: action.response };
    case AUTH.LOGIN_USER_ERROR:
      return { ...state, loginError: action.response };
    case AUTH.REGISTER_USER_SUCCESS:
        return { ...state, registeredUser: action.response };
    case AUTH.REGISTER_USER_ERROR:
        return { ...state, registerErr: action.response };
    default:
      return state;
  }
}

export default authReducer;
