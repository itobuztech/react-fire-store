import { combineReducers } from "redux";

import authReducer from "../auth/authReducer";
import productsReducer from "../products/productsReducer";

const rootReducer = combineReducers({
  authReducer,
  productsReducer
});

export default rootReducer;
