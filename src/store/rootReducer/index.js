import { combineReducers } from "redux";

import authReducer from "../auth/authReducer";
import productsReducer from "../products/productsReducer";
import cartReducer from "../cart/cartReducer";

const rootReducer = combineReducers({
  authReducer,
  productsReducer,
  cartReducer
});

export default rootReducer;
