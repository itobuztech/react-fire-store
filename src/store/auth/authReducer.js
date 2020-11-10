import { AUTH } from './authConstants';

const initialState = {
  loginResponse: null,
  registerResponse: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_USER_SUCCESS:
      return { ...state, loginResponse: action.response };
    case AUTH.LOGIN_USER_ERROR:
      return { ...state, loginResponse: action.response };
    case AUTH.REGISTER_USER_SUCCESS:
        return { ...state, registerResponse: action.response };
    case AUTH.REGISTER_USER_ERROR:
        return { ...state, registerResponse: action.response };
    default:
      return state;
  }
}

export default authReducer;
